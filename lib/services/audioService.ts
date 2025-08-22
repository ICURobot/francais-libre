import { audioStorageService, AudioFile } from './audioStorageService'
import { elevenLabsService } from './elevenLabsService'

export interface AudioPlaybackOptions {
  voicePreference?: 'female' | 'male' | 'auto'
  fallbackToTTS?: boolean
}

export class AudioService {
  private static instance: AudioService
  private audioCache: Map<string, HTMLAudioElement> = new Map()
  private isPlaying: boolean = false

  static getInstance(): AudioService {
    if (!AudioService.instance) {
      AudioService.instance = new AudioService()
    }
    return AudioService.instance
  }

  // Play audio for a given text
  async playAudio(text: string, options: AudioPlaybackOptions = {}): Promise<boolean> {
    try {
      console.log(`🔊 Attempting to play audio for: "${text}"`)

      // Check if we have stored audio for this text
      const storedAudio = await audioStorageService.getAudioByText(text)
      
      if (storedAudio) {
        console.log(`✅ Found stored audio: ${storedAudio.file_name}`)
        return await this.playStoredAudio(storedAudio)
      }

      // If no stored audio and fallback is enabled, generate it
      if (options.fallbackToTTS) {
        console.log(`🎵 No stored audio found, generating with ElevenLabs...`)
        return await this.generateAndPlayAudio(text, options)
      }

      console.log(`❌ No stored audio found for: "${text}"`)
      return false

    } catch (error) {
      console.error('Audio playback failed:', error)
      return false
    }
  }

  // Play stored audio from Supabase
  private async playStoredAudio(audioFile: AudioFile): Promise<boolean> {
    try {
      // Check cache first
      if (this.audioCache.has(audioFile.audio_url)) {
        const cachedAudio = this.audioCache.get(audioFile.audio_url)!
        await this.playAudioElement(cachedAudio)
        return true
      }

      // Create new audio element
      const audio = new Audio(audioFile.audio_url)
      
      // Set up event handlers
      audio.onloadstart = () => console.log(`📥 Loading audio: ${audioFile.file_name}`)
      audio.oncanplay = () => console.log(`✅ Audio ready to play: ${audioFile.file_name}`)
      audio.onplay = () => {
        console.log(`🎵 Playing audio: ${audioFile.file_name}`)
        this.isPlaying = true
      }
      audio.onended = () => {
        console.log(`🏁 Audio finished: ${audioFile.file_name}`)
        this.isPlaying = false
      }
      audio.onerror = (error) => {
        console.error(`❌ Audio playback error: ${audioFile.file_name}`, error)
        this.isPlaying = false
      }

      // Cache the audio element
      this.audioCache.set(audioFile.audio_url, audio)
      
      // Play the audio
      return await this.playAudioElement(audio)

    } catch (error) {
      console.error('Stored audio playback failed:', error)
      return false
    }
  }

  // Play HTML audio element with mobile compatibility
  private async playAudioElement(audio: HTMLAudioElement): Promise<boolean> {
    try {
      // Reset audio to beginning
      audio.currentTime = 0
      
      // Play the audio
      await audio.play()
      return true
    } catch (error) {
      console.error('Audio element playback failed:', error)
      
      // Handle mobile audio restrictions
      if (this.isMobileDevice()) {
        console.log('📱 Mobile device detected, attempting to handle audio restrictions...')
        return await this.handleMobileAudioPlayback(audio)
      }
      
      return false
    }
  }

  // Handle mobile audio playback restrictions
  private async handleMobileAudioPlayback(audio: HTMLAudioElement): Promise<boolean> {
    try {
      // Try to resume audio context if available
      if (typeof window !== 'undefined' && 'AudioContext' in window) {
        const audioContext = new (window as any).AudioContext()
        if (audioContext.state === 'suspended') {
          console.log('🔧 Resuming suspended audio context...')
          await audioContext.resume()
        }
      }

      // Try playing again
      await audio.play()
      return true
    } catch (retryError) {
      console.error('Mobile audio retry failed:', retryError)
      return false
    }
  }

  // Generate audio with ElevenLabs and play it
  private async generateAndPlayAudio(text: string, options: AudioPlaybackOptions): Promise<boolean> {
    try {
      // Determine which voice to use
      const voice = this.selectVoice(options.voicePreference)
      if (!voice) {
        console.error('No suitable voice found')
        return false
      }

      console.log(`🎵 Generating audio with voice: ${voice.name}`)

      // Generate audio with ElevenLabs
      const audioResponse = await elevenLabsService.generateAudio({
        text: text,
        voiceId: voice.id,
        fileName: `${text}_${voice.name}_${Date.now()}.mp3`
      })

      if (!audioResponse.success || !audioResponse.audioUrl) {
        console.error('Audio generation failed:', audioResponse.error)
        return false
      }

      // Upload to Supabase Storage
      const uploadedFile = await audioStorageService.uploadAudioFile({
        text: text,
        audioData: audioResponse.audioUrl,
        voiceId: voice.id,
        voiceName: voice.name,
        category: 'vocabulary', // Default category
        fileName: audioResponse.fileName!
      })

      if (uploadedFile) {
        console.log(`✅ Audio generated and stored: ${uploadedFile.file_name}`)
        // Play the newly generated audio
        return await this.playStoredAudio(uploadedFile)
      }

      return false
    } catch (error) {
      console.error('Audio generation and playback failed:', error)
      return false
    }
  }

  // Select appropriate voice based on preference
  private selectVoice(preference?: 'female' | 'male' | 'auto'): any {
    const voices = elevenLabsService.getVoices()
    
    switch (preference) {
      case 'female':
        return voices.find(v => v.category === 'female')
      case 'male':
        return voices.find(v => v.category === 'male')
      case 'auto':
      default:
        // Default to female voice (Mylène)
        return voices.find(v => v.category === 'female') || voices[0]
    }
  }

  // Check if device is mobile
  private isMobileDevice(): boolean {
    if (typeof window === 'undefined') return false
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }

  // Stop current audio playback
  stopAudio(): void {
    this.audioCache.forEach(audio => {
      if (!audio.paused) {
        audio.pause()
        audio.currentTime = 0
      }
    })
    this.isPlaying = false
    console.log('⏹️ Audio playback stopped')
  }

  // Check if audio is currently playing
  isAudioPlaying(): boolean {
    return this.isPlaying
  }

  // Get audio file information
  async getAudioInfo(text: string): Promise<AudioFile | null> {
    return await audioStorageService.getAudioByText(text)
  }

  // Get all audio for a lesson
  async getLessonAudio(lessonId: string): Promise<AudioFile[]> {
    return await audioStorageService.getAudioByLesson(lessonId)
  }

  // Get all audio by category
  async getCategoryAudio(category: string): Promise<AudioFile[]> {
    return await audioStorageService.getAudioByCategory(category)
  }

  // Clear audio cache
  clearCache(): void {
    this.audioCache.clear()
    console.log('🗑️ Audio cache cleared')
  }

  // Test the audio system
  async testSystem(): Promise<boolean> {
    try {
      console.log('🧪 Testing audio system...')
      
      // Test ElevenLabs connection
      const elevenLabsTest = await elevenLabsService.testConnection()
      console.log(`ElevenLabs connection: ${elevenLabsTest ? '✅' : '❌'}`)
      
      // Test Supabase Storage connection
      const storageTest = await audioStorageService.testConnection()
      console.log(`Supabase Storage connection: ${storageTest ? '✅' : '❌'}`)
      
      return elevenLabsTest && storageTest
    } catch (error) {
      console.error('System test failed:', error)
      return false
    }
  }
}

export const audioService = AudioService.getInstance()
