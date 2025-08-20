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

  static getInstance(): TTSService {
    if (!TTSService.instance) {
      TTSService.instance = new TTSService()
    }
    return TTSService.instance
  }

  async speak(text: string, language: string = 'fr-FR'): Promise<void> {
    try {
      // Check cache first
      const cacheKey = `${text}-${language}`
      if (this.audioCache.has(cacheKey)) {
        this.playAudio(this.audioCache.get(cacheKey)!)
        return
      }

      // Call Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('tts', {
        body: { text, language }
      })

      if (error) {
        console.error('TTS API error:', error)
        // Fallback to browser TTS
        this.fallbackToBrowserTTS(text, language)
        return
      }

      if (data && data.audioContent) {
        // Cache the audio
        this.audioCache.set(cacheKey, data.audioContent)
        // Play the audio
        this.playAudio(data.audioContent)
      } else {
        // Fallback to browser TTS
        this.fallbackToBrowserTTS(text, language)
      }

    } catch (error) {
      console.error('TTS service error:', error)
      // Fallback to browser TTS
      this.fallbackToBrowserTTS(text, language)
    }
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
      audio.play()
      
      // Clean up URL after playing
      audio.onended = () => {
        URL.revokeObjectURL(audioUrl)
      }
    } catch (error) {
      console.error('Audio playback error:', error)
      this.fallbackToBrowserTTS('', 'fr-FR')
    }
  }

  private fallbackToBrowserTTS(text: string, language: string): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = language
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  // Clear cache if needed
  clearCache(): void {
    this.audioCache.clear()
  }
}

export const ttsService = TTSService.getInstance()
