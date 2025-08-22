export interface ElevenLabsVoice {
  id: string
  name: string
  description: string
  category: 'female' | 'male'
}

export interface AudioGenerationRequest {
  text: string
  voiceId: string
  fileName?: string
}

export interface AudioGenerationResponse {
  success: boolean
  audioUrl?: string
  error?: string
  fileName?: string
}

// Load environment variables from .env.local (Node.js only)
if (typeof window === 'undefined') {
  // Only import dotenv in Node.js environment
  import('dotenv').then(dotenv => {
    dotenv.config({ path: '.env.local' })
  }).catch(() => {
    // Ignore dotenv import errors in environments where it's not available
  })
}

export class ElevenLabsService {
  private static instance: ElevenLabsService
  private apiKey: string
  private baseUrl: string = 'https://api.elevenlabs.io/v1'
  
  // Your chosen voices
  private voices: ElevenLabsVoice[] = [
    {
      id: 'WQKwBV2Uzw1gSGr69N8I',
      name: 'Mylène French',
      description: 'Natural and warm for a spontaneous tone',
      category: 'female'
    },
    {
      id: 'qNc8cbRJLnPqGTjuVcKa',
      name: 'André',
      description: 'Narration, French, Conversational, Young, Male',
      category: 'male'
    }
  ]

  constructor() {
    // For Node.js scripts, use ELEVENLABS_API_KEY
    // For browser, use NEXT_PUBLIC_ELEVENLABS_API_KEY
    this.apiKey = process.env.ELEVENLABS_API_KEY || process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY || ''
    if (!this.apiKey) {
      console.warn('ElevenLabs API key not found in environment variables')
    }
  }

  static getInstance(): ElevenLabsService {
    if (!ElevenLabsService.instance) {
      ElevenLabsService.instance = new ElevenLabsService()
    }
    return ElevenLabsService.instance
  }

  // Get available voices
  getVoices(): ElevenLabsVoice[] {
    return this.voices
  }

  // Get voice by category
  getVoiceByCategory(category: 'female' | 'male'): ElevenLabsVoice | undefined {
    return this.voices.find(voice => voice.category === category)
  }

  // Get voice by ID
  getVoiceById(voiceId: string): ElevenLabsVoice | undefined {
    return this.voices.find(voice => voice.id === voiceId)
  }

  // Generate audio for a single text
  async generateAudio(request: AudioGenerationRequest): Promise<AudioGenerationResponse> {
    try {
      if (!this.apiKey) {
        throw new Error('ElevenLabs API key not configured')
      }

      console.log(`🎵 Generating audio for: "${request.text}" with voice ID: ${request.voiceId}`)

      const response = await fetch(`${this.baseUrl}/text-to-speech/${request.voiceId}`, {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': this.apiKey
        },
        body: JSON.stringify({
          text: request.text,
          model_id: 'eleven_multilingual_v2',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75
          }
        })
      })

      if (!response.ok) {
        const errorData = await response.text()
        console.error('ElevenLabs API error:', errorData)
        throw new Error(`ElevenLabs API error: ${response.status} ${response.statusText}`)
      }

      // Get the audio blob
      const audioBlob = await response.blob()
      
      // Convert to base64 for storage
      const base64Audio = await this.blobToBase64(audioBlob)
      
      // Generate filename if not provided
      const fileName = request.fileName || this.generateFileName(request.text, request.voiceId)

      console.log(`✅ Audio generated successfully: ${fileName}`)

      return {
        success: true,
        audioUrl: base64Audio,
        fileName: fileName
      }

    } catch (error) {
      console.error('Audio generation failed:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  // Generate audio for multiple texts (bulk processing)
  async generateBulkAudio(requests: AudioGenerationRequest[]): Promise<AudioGenerationResponse[]> {
    console.log(`🎵 Starting bulk audio generation for ${requests.length} items`)
    
    const results: AudioGenerationResponse[] = []
    
    // Process in batches to avoid overwhelming the API
    const batchSize = 5
    for (let i = 0; i < requests.length; i += batchSize) {
      const batch = requests.slice(i, i + batchSize)
      console.log(`📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(requests.length / batchSize)}`)
      
      const batchPromises = batch.map(request => this.generateAudio(request))
      const batchResults = await Promise.all(batchPromises)
      results.push(...batchResults)
      
      // Small delay between batches to be respectful to the API
      if (i + batchSize < requests.length) {
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
    }
    
    const successCount = results.filter(r => r.success).length
    console.log(`✅ Bulk generation complete: ${successCount}/${requests.length} successful`)
    
    return results
  }

  // Convert blob to base64 (Node.js compatible)
  private async blobToBase64(blob: Blob): Promise<string> {
    // For Node.js, convert Blob to Buffer and then to base64
    if (typeof window === 'undefined') {
      // Node.js environment
      const arrayBuffer = await blob.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      return buffer.toString('base64')
    } else {
      // Browser environment
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => {
          const result = reader.result as string
          // Remove the data:audio/mpeg;base64, prefix
          const base64 = result.split(',')[1]
          resolve(base64)
        }
        reader.onerror = reject
        reader.readAsDataURL(blob)
      })
    }
  }

  // Generate filename from text and voice (Supabase Storage compatible)
  private generateFileName(text: string, voiceId: string): string {
    const voice = this.getVoiceById(voiceId)
    const voiceName = voice ? voice.name
      .normalize('NFD') // Decompose accented characters
      .replace(/[\u0300-\u036f]/g, '') // Remove accent marks
      .replace(/[^a-zA-Z0-9\s]/g, '') // Remove special characters from voice name
      .replace(/\s+/g, '_') // Replace spaces with underscores
      .toLowerCase() : 'unknown'
    
    // Clean text for filename - remove ALL special characters including French accents
    const cleanText = text
      .normalize('NFD') // Decompose accented characters
      .replace(/[\u0300-\u036f]/g, '') // Remove accent marks
      .replace(/[^a-zA-Z0-9\s]/g, '') // Remove all remaining special characters
      .replace(/\s+/g, '_') // Replace spaces with underscores
      .toLowerCase()
      .substring(0, 30) // Limit length
    
    return `${cleanText}_${voiceName}_${Date.now()}.mp3`
  }

  // Test the API connection
  async testConnection(): Promise<boolean> {
    try {
      if (!this.apiKey) {
        console.error('No API key configured')
        return false
      }

      const response = await fetch(`${this.baseUrl}/voices`, {
        headers: {
          'xi-api-key': this.apiKey
        }
      })

      if (response.ok) {
        console.log('✅ ElevenLabs API connection successful')
        return true
      } else {
        console.error('❌ ElevenLabs API connection failed:', response.status)
        return false
      }
    } catch (error) {
      console.error('❌ ElevenLabs API connection error:', error)
      return false
    }
  }

  // Get API usage information
  async getUsageInfo(): Promise<{ character_count: number; character_limit: number; can_extend_character_limit: boolean; allowed_to_extend: boolean; next_character_count_reset_unix: number; voice_limit: number; professional_voice_limit: number; can_extend_voice_limit: boolean; can_use_instant_voice_cloning: boolean; can_use_professional_voice_cloning: boolean; currency: string; status: string }> {
    try {
      if (!this.apiKey) {
        throw new Error('ElevenLabs API key not configured')
      }

      const response = await fetch(`${this.baseUrl}/user/subscription`, {
        headers: {
          'xi-api-key': this.apiKey
        }
      })

      if (response.ok) {
        const data = await response.json()
        console.log('📊 ElevenLabs usage info:', data)
        return data
      } else {
        throw new Error(`Failed to get usage info: ${response.status}`)
      }
    } catch (error) {
      console.error('Failed to get usage info:', error)
      throw error
    }
  }
}

export const elevenLabsService = ElevenLabsService.getInstance()
