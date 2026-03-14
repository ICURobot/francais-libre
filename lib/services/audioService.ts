import { audioStorageService, AudioFile } from './audioStorageService'

export interface AudioPlaybackOptions {
  voicePreference?: 'female' | 'male' | 'auto'
}

export class AudioService {
  private static instance: AudioService
  private audioCache: Map<string, HTMLAudioElement> = new Map()
  private static MAX_CACHE_SIZE = 50
  private isPlaying: boolean = false
  private audioContext: AudioContext | null = null

  static getInstance(): AudioService {
    if (!AudioService.instance) {
      AudioService.instance = new AudioService()
    }
    return AudioService.instance
  }

  private evictOldestCacheEntry(): void {
    if (this.audioCache.size >= AudioService.MAX_CACHE_SIZE) {
      const firstKey = this.audioCache.keys().next().value
      if (firstKey) {
        this.audioCache.delete(firstKey)
      }
    }
  }

  // Play audio for a given text
  async playAudio(text: string): Promise<boolean> {
    try {
      const textVariants = [
        text,
        text.replace(/[.!]+$/, '').trim(),
        text.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
        text.replace(/[.!]+$/, '').trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      ]
      // Deduplicate variants
      const uniqueVariants = [...new Set(textVariants)]

      try {
        const storedAudio = await Promise.any(
          uniqueVariants.map(async (variant) => {
            const result = await audioStorageService.getAudioByText(variant)
            if (!result) throw new Error('not found')
            return result
          })
        )
        return await this.playStoredAudio(storedAudio)
      } catch {
        // No stored audio found for any variant
        return false
      }
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

      // Cache the audio element
      this.evictOldestCacheEntry()
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
      audio.currentTime = 0
      await audio.play()
      return new Promise<boolean>((resolve) => {
        audio.onended = () => {
          this.isPlaying = false
          resolve(true)
        }
        audio.onerror = () => {
          this.isPlaying = false
          resolve(false)
        }
      })
    } catch (error) {
      console.error('Audio element playback failed:', error)
      if (this.isMobileDevice()) {
        return await this.handleMobileAudioPlayback(audio)
      }
      return false
    }
  }

  // Handle mobile audio playback restrictions
  private async handleMobileAudioPlayback(audio: HTMLAudioElement): Promise<boolean> {
    try {
      if (typeof window !== 'undefined' && 'AudioContext' in window) {
        if (!this.audioContext) {
          this.audioContext = new AudioContext()
        }
        if (this.audioContext.state === 'suspended') {
          await this.audioContext.resume()
        }
      }
      await audio.play()
      return true
    } catch (retryError) {
      console.error('Mobile audio retry failed:', retryError)
      return false
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
  }

  // Test the audio system
  async testSystem(): Promise<boolean> {
    try {
      // Test Supabase Storage connection only
      const storageTest = await audioStorageService.testConnection()

      return storageTest
    } catch (error) {
      console.error('System test failed:', error)
      return false
    }
  }
}

export const audioService = AudioService.getInstance()
