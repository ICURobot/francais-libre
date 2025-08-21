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

  constructor() {
    // Detect device type
    this.isMobile = this.detectMobile()
    this.isIOS = this.detectIOS()
    this.isAndroid = this.detectAndroid()
    
    // Initialize browser TTS if available
    this.initializeBrowserTTS()
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
    }
  }

  async speak(text: string, language: string = 'fr-FR'): Promise<void> {
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
    try {
      // Check cache first
      const cacheKey = `${text}-${language}`
      if (this.audioCache.has(cacheKey)) {
        this.playAudio(this.audioCache.get(cacheKey)!)
        return
      }

      // Add timeout for mobile devices to handle slower network conditions
      const timeout = this.isMobile ? 15000 : 10000 // 15s for mobile, 10s for desktop
      
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
        }

        // Event handlers
        utterance.onend = () => {
          resolve()
        }

        utterance.onerror = (event) => {
          console.error('Browser TTS error:', event)
          reject(new Error('Browser TTS failed'))
        }

        // iOS requires user interaction, so we need to handle this carefully
        if (this.isIOS) {
          // On iOS, we might need to wait for voices to load
          if (voices.length === 0) {
            // Wait for voices to load
            this.browserTTS!.onvoiceschanged = () => {
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
      
      // Handle mobile audio playback with better error handling
      if (this.isMobile) {
        // On mobile, we need to handle user interaction requirements
        audio.play().catch(error => {
          console.error('Mobile audio playback failed:', error)
          // Try to resume audio context if available
          if (typeof window !== 'undefined' && 'AudioContext' in window) {
            const audioContext = new (window as typeof window & { AudioContext: typeof AudioContext }).AudioContext()
            if (audioContext.state === 'suspended') {
              audioContext.resume().then(() => {
                audio.play().catch(retryError => {
                  console.error('Mobile audio retry failed:', retryError)
                  // Final fallback to browser TTS
                  this.speakWithBrowserTTS('', 'fr-FR')
                })
              })
            } else {
              // Fallback to browser TTS
              this.speakWithBrowserTTS('', 'fr-FR')
            }
          } else {
            // Fallback to browser TTS
            this.speakWithBrowserTTS('', 'fr-FR')
          }
        })
      } else {
        audio.play()
      }
      
      // Clean up URL after playing
      audio.onended = () => {
        URL.revokeObjectURL(audioUrl)
      }
      
      audio.onerror = () => {
        console.error('Audio playback error, falling back to browser TTS')
        this.speakWithBrowserTTS('', 'fr-FR')
      }
    } catch (error) {
      console.error('Audio playback error:', error)
      this.speakWithBrowserTTS('', 'fr-FR')
    }
  }

  // Get device info for debugging
  getDeviceInfo() {
    return {
      isMobile: this.isMobile,
      isIOS: this.isIOS,
      isAndroid: this.isAndroid,
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'Server-side'
    }
  }

  // Clear cache if needed
  clearCache(): void {
    this.audioCache.clear()
  }
}

export const ttsService = TTSService.getInstance()
