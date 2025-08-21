import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface TTSResponse {
  audioContent: string
  success: boolean
  error?: string
}

export class TTSService {
  private static instance: TTSService
  private audioCache: Map<string, string> = new Map()
  private isMobile: boolean
  private isIOS: boolean
  private isAndroid: boolean
  private browserTTS: SpeechSynthesis | null = null
  private debugMode: boolean = true

  constructor() {
    // Detect device type
    this.isMobile = this.detectMobile()
    this.isIOS = this.detectIOS()
    this.isAndroid = this.detectAndroid()
    
    // Initialize browser TTS if available
    this.initializeBrowserTTS()
    
    if (this.debugMode) {
      console.log('🔊 TTS Service initialized:', this.getDeviceInfo())
    }
  }

  static getInstance(): TTSService {
    if (!TTSService.instance) {
      TTSService.instance = new TTSService()
    }
    return TTSService.instance
  }

  private detectMobile(): boolean {
    if (typeof window === 'undefined') return false
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }

  private detectIOS(): boolean {
    if (typeof window === 'undefined') return false
    return /iPad|iPhone|iPod/.test(navigator.userAgent)
  }

  private detectAndroid(): boolean {
    if (typeof window === 'undefined') return false
    return /Android/.test(navigator.userAgent)
  }

  private initializeBrowserTTS(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.browserTTS = window.speechSynthesis
      
      // iOS requires user interaction to enable speech synthesis
      if (this.isIOS) {
        // Create a silent utterance to enable speech synthesis
        const silentUtterance = new SpeechSynthesisUtterance('')
        silentUtterance.volume = 0
        this.browserTTS.speak(silentUtterance)
        this.browserTTS.cancel() // Cancel immediately
      }
      
      if (this.debugMode) {
        console.log('🔊 Browser TTS initialized:', {
          available: !!this.browserTTS,
          voices: this.browserTTS?.getVoices().length || 0
        })
      }
    }
  }

  async speak(text: string, language: string = 'fr-FR'): Promise<void> {
    if (this.debugMode) {
      console.log('🔊 TTS speak called:', { text, language, device: this.getDeviceInfo() })
    }

    try {
      // Try Google Cloud TTS first on all devices for best quality
      await this.speakWithGoogleTTS(text, language)
    } catch (error) {
      console.error('Google Cloud TTS failed, falling back to browser TTS:', error)
      // Fallback to browser TTS if Google Cloud TTS fails
      try {
        await this.speakWithBrowserTTS(text, language)
      } catch (browserError) {
        console.error('Browser TTS also failed:', browserError)
        // At this point, we've exhausted all options
        throw new Error('All TTS methods failed')
      }
    }
  }

  private async speakWithGoogleTTS(text: string, language: string): Promise<void> {
    if (this.debugMode) {
      console.log('🔊 Attempting Google Cloud TTS...')
    }

    try {
      // Check cache first
      const cacheKey = `${text}-${language}`
      if (this.audioCache.has(cacheKey)) {
        if (this.debugMode) {
          console.log('🔊 Using cached audio')
        }
        this.playAudio(this.audioCache.get(cacheKey)!)
        return
      }

      // Add timeout for mobile devices to handle slower network conditions
      const timeout = this.isMobile ? 20000 : 10000 // 20s for mobile, 10s for desktop
      
      if (this.debugMode) {
        console.log('🔊 Calling Supabase Edge Function with timeout:', timeout)
      }
      
      // Call Supabase Edge Function with timeout
      const { data, error } = await Promise.race([
        supabase.functions.invoke('tts', {
          body: { text, language }
        }),
        new Promise<never>((_, reject) => 
          setTimeout(() => reject(new Error('TTS request timeout')), timeout)
        )
      ])

      if (error) {
        throw new Error('Google TTS API error: ' + error.message)
      }

      if (data && data.audioContent) {
        if (this.debugMode) {
          console.log('🔊 Google Cloud TTS successful, audio length:', data.audioContent.length)
        }
        // Cache the audio
        this.audioCache.set(cacheKey, data.audioContent)
        // Play the audio
        this.playAudio(data.audioContent)
      } else {
        throw new Error('No audio content received from Google TTS')
      }

    } catch (error) {
      console.error('Google TTS failed, falling back to browser TTS:', error)
      throw error // Re-throw to trigger fallback
    }
  }

  private async speakWithBrowserTTS(text: string, language: string): Promise<void> {
    if (this.debugMode) {
      console.log('🔊 Attempting Browser TTS...')
    }

    if (!this.browserTTS) {
      console.warn('Browser TTS not available')
      return
    }

    return new Promise((resolve, reject) => {
      try {
        // Stop any current speech
        this.browserTTS!.cancel()

        const utterance = new SpeechSynthesisUtterance(text)
        
        // Set language
        utterance.lang = language
        
        // Optimize for mobile devices
        if (this.isMobile) {
          utterance.rate = 0.8 // Slower for clarity
          utterance.pitch = 1.0
          utterance.volume = 1.0
        } else {
          utterance.rate = 0.9
          utterance.pitch = 1.0
          utterance.volume = 1.0
        }

        // Try to find a French voice
        const voices = this.browserTTS!.getVoices()
        const frenchVoice = voices.find((voice: SpeechSynthesisVoice) => 
          voice.lang.startsWith('fr') || voice.lang === 'fr-FR'
        )
        
        if (frenchVoice) {
          utterance.voice = frenchVoice
          if (this.debugMode) {
            console.log('🔊 Using French voice:', frenchVoice.name)
          }
        } else {
          if (this.debugMode) {
            console.log('🔊 No French voice found, using default. Available voices:', voices.map(v => `${v.name} (${v.lang})`))
          }
        }

        // Event handlers
        utterance.onstart = () => {
          if (this.debugMode) {
            console.log('🔊 Browser TTS started speaking')
          }
        }

        utterance.onend = () => {
          if (this.debugMode) {
            console.log('🔊 Browser TTS finished speaking')
          }
          resolve()
        }

        utterance.onerror = (event) => {
          console.error('Browser TTS error:', event)
          reject(new Error('Browser TTS failed'))
        }

        // iOS requires user interaction, so we need to handle this carefully
        if (this.isIOS) {
          if (this.debugMode) {
            console.log('🔊 iOS device detected, handling voice loading...')
          }
          // On iOS, we might need to wait for voices to load
          if (voices.length === 0) {
            // Wait for voices to load
            this.browserTTS!.onvoiceschanged = () => {
              if (this.debugMode) {
                console.log('🔊 Voices loaded on iOS, attempting to speak...')
              }
              const updatedVoices = this.browserTTS!.getVoices()
              const frenchVoice = updatedVoices.find((voice: SpeechSynthesisVoice) => 
                voice.lang.startsWith('fr') || voice.lang === 'fr-FR'
              )
              if (frenchVoice) {
                utterance.voice = frenchVoice
              }
              this.browserTTS!.speak(utterance)
            }
          } else {
            this.browserTTS!.speak(utterance)
          }
        } else {
          this.browserTTS!.speak(utterance)
        }

      } catch (error) {
        console.error('Browser TTS setup error:', error)
        reject(error)
      }
    })
  }

  private playAudio(base64Audio: string): void {
    if (this.debugMode) {
      console.log('🔊 Attempting to play audio...')
    }

    try {
      // Convert base64 to audio blob
      const audioData = atob(base64Audio)
      const arrayBuffer = new ArrayBuffer(audioData.length)
      const view = new Uint8Array(arrayBuffer)
      
      for (let i = 0; i < audioData.length; i++) {
        view[i] = audioData.charCodeAt(i)
      }

      const blob = new Blob([arrayBuffer], { type: 'audio/mp3' })
      const audioUrl = URL.createObjectURL(blob)
      
      const audio = new Audio(audioUrl)
      
      // Add event listeners for debugging
      audio.onloadstart = () => {
        if (this.debugMode) {
          console.log('🔊 Audio loading started')
        }
      }
      
      audio.oncanplay = () => {
        if (this.debugMode) {
          console.log('🔊 Audio can play')
        }
      }
      
      audio.onplay = () => {
        if (this.debugMode) {
          console.log('🔊 Audio playback started')
        }
      }
      
      // Handle mobile audio playback with better error handling
      if (this.isMobile) {
        if (this.debugMode) {
          console.log('🔊 Mobile device detected, handling audio playback...')
        }
        
        // On mobile, we need to handle user interaction requirements
        audio.play().then(() => {
          if (this.debugMode) {
            console.log('🔊 Mobile audio playback successful')
          }
        }).catch(error => {
          console.error('Mobile audio playback failed:', error)
          
          // Try to resume audio context if available
          if (typeof window !== 'undefined' && 'AudioContext' in window) {
            const audioContext = new (window as typeof window & { AudioContext: typeof AudioContext }).AudioContext()
            if (audioContext.state === 'suspended') {
              if (this.debugMode) {
                console.log('🔊 Audio context suspended, attempting to resume...')
              }
              audioContext.resume().then(() => {
                if (this.debugMode) {
                  console.log('🔊 Audio context resumed, retrying playback...')
                }
                audio.play().catch(retryError => {
                  console.error('Mobile audio retry failed:', retryError)
                  if (this.debugMode) {
                    console.log('🔊 Falling back to browser TTS due to audio failure')
                  }
                  // Final fallback to browser TTS
                  this.speakWithBrowserTTS('', 'fr-FR')
                })
              })
            } else {
              if (this.debugMode) {
                console.log('🔊 Audio context not suspended, falling back to browser TTS')
              }
              // Fallback to browser TTS
              this.speakWithBrowserTTS('', 'fr-FR')
            }
          } else {
            if (this.debugMode) {
              console.log('🔊 No AudioContext available, falling back to browser TTS')
            }
            // Fallback to browser TTS
            this.speakWithBrowserTTS('', 'fr-FR')
          }
        })
      } else {
        audio.play()
      }
      
      // Clean up URL after playing
      audio.onended = () => {
        if (this.debugMode) {
          console.log('🔊 Audio playback ended')
        }
        URL.revokeObjectURL(audioUrl)
      }
      
      audio.onerror = (error) => {
        console.error('Audio playback error:', error)
        if (this.debugMode) {
          console.log('🔊 Falling back to browser TTS due to audio error')
        }
        this.speakWithBrowserTTS('', 'fr-FR')
      }
    } catch (error) {
      console.error('Audio playback error:', error)
      if (this.debugMode) {
        console.log('🔊 Falling back to browser TTS due to setup error')
      }
      this.speakWithBrowserTTS('', 'fr-FR')
    }
  }

  // Get device info for debugging
  getDeviceInfo() {
    return {
      isMobile: this.isMobile,
      isIOS: this.isIOS,
      isAndroid: this.isAndroid,
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'Server-side',
      hasSpeechSynthesis: typeof window !== 'undefined' && 'speechSynthesis' in window,
      hasAudioContext: typeof window !== 'undefined' && 'AudioContext' in window
    }
  }

  // Clear cache if needed
  clearCache(): void {
    this.audioCache.clear()
  }

  // Enable/disable debug mode
  setDebugMode(enabled: boolean): void {
    this.debugMode = enabled
  }
}

export const ttsService = TTSService.getInstance()
