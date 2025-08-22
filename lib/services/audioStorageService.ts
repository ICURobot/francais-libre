import { createClient } from '@supabase/supabase-js'
import { AudioGenerationResponse } from './elevenLabsService'

// Load environment variables from .env.local (Node.js only)
if (typeof window === 'undefined') {
  // Only import dotenv in Node.js environment
  import('dotenv').then(dotenv => {
    dotenv.config({ path: '.env.local' })
  }).catch(() => {
    // Ignore dotenv import errors in environments where it's not available
  })
}

// For Node.js scripts, use ELEVENLABS_API_KEY
// For browser, use NEXT_PUBLIC_ELEVENLABS_API_KEY
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface AudioFile {
  id: string
  text: string
  audio_url: string
  voice_id: string
  voice_name: string
  category: string
  lesson_id?: string
  file_name: string
  created_at: string
}

export interface AudioUploadRequest {
  text: string
  audioData: string // base64 audio data
  voiceId: string
  voiceName: string
  category: 'vocabulary' | 'dialogue' | 'pronunciation'
  lessonId?: string
  fileName: string
}

export class AudioStorageService {
  private static instance: AudioStorageService
  private bucketName: string = 'audio'

  static getInstance(): AudioStorageService {
    if (!AudioStorageService.instance) {
      AudioStorageService.instance = new AudioStorageService()
    }
    return AudioStorageService.instance
  }

  // Upload a single audio file to Supabase Storage
  async uploadAudioFile(request: AudioUploadRequest): Promise<AudioFile | null> {
    try {
      console.log(`📤 Uploading audio file: ${request.fileName}`)

      // Convert base64 to blob
      const audioBlob = await this.base64ToBlob(request.audioData, 'audio/mpeg')
      
      // Upload to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from(this.bucketName)
        .upload(request.fileName, audioBlob, {
          contentType: 'audio/mpeg',
          cacheControl: '3600'
        })

      if (uploadError) {
        console.error('Storage upload error:', uploadError)
        throw new Error(`Storage upload failed: ${uploadError.message}`)
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from(this.bucketName)
        .getPublicUrl(request.fileName)

      const publicUrl = urlData.publicUrl

      // Store reference in database
      const { data: dbData, error: dbError } = await supabase
        .from('audio_pronunciations')
        .insert({
          text: request.text,
          audio_url: publicUrl,
          voice_id: request.voiceId,
          voice_name: request.voiceName,
          category: request.category,
          lesson_id: request.lessonId,
          file_name: request.fileName
        })
        .select()
        .single()

      if (dbError) {
        console.error('Database insert error:', dbError)
        // Try to clean up the uploaded file
        await this.deleteAudioFile(request.fileName)
        throw new Error(`Database insert failed: ${dbError.message}`)
      }

      console.log(`✅ Audio file uploaded successfully: ${request.fileName}`)
      return dbData

    } catch (error) {
      console.error('Audio upload failed:', error)
      return null
    }
  }

  // Upload multiple audio files (bulk upload)
  async uploadBulkAudio(audioResponses: AudioGenerationResponse[], category: string, lessonId?: string): Promise<AudioFile[]> {
    console.log(`📤 Starting bulk upload for ${audioResponses.length} audio files`)
    
    const uploadedFiles: AudioFile[] = []
    
    for (const audioResponse of audioResponses) {
      if (audioResponse.success && audioResponse.audioUrl && audioResponse.fileName) {
        // Extract voice info from filename
        const voiceInfo = this.extractVoiceInfoFromFileName(audioResponse.fileName)
        
        const uploadRequest: AudioUploadRequest = {
          text: audioResponse.fileName.split('_')[0], // Extract text from filename
          audioData: audioResponse.audioUrl,
          voiceId: voiceInfo.voiceId,
          voiceName: voiceInfo.voiceName,
          category: category as any,
          lessonId: lessonId,
          fileName: audioResponse.fileName
        }
        
        const uploadedFile = await this.uploadAudioFile(uploadRequest)
        if (uploadedFile) {
          uploadedFiles.push(uploadedFile)
        }
        
        // Small delay between uploads
        await new Promise(resolve => setTimeout(resolve, 500))
      }
    }
    
    console.log(`✅ Bulk upload complete: ${uploadedFiles.length}/${audioResponses.length} files uploaded`)
    return uploadedFiles
  }

  // Get audio file by text
  async getAudioByText(text: string): Promise<AudioFile | null> {
    try {
      const { data, error } = await supabase
        .from('audio_pronunciations')
        .select('*')
        .eq('text', text)
        .single()

      if (error) {
        console.error('Error fetching audio:', error)
        return null
      }

      return data
    } catch (error) {
      console.error('Error fetching audio by text:', error)
      return null
    }
  }

  // Get all audio files for a lesson
  async getAudioByLesson(lessonId: string): Promise<AudioFile[]> {
    try {
      const { data, error } = await supabase
        .from('audio_pronunciations')
        .select('*')
        .eq('lesson_id', lessonId)
        .order('created_at', { ascending: true })

      if (error) {
        console.error('Error fetching lesson audio:', error)
        return []
      }

      return data || []
    } catch (error) {
      console.error('Error fetching lesson audio:', error)
      return []
    }
  }

  // Get all audio files by category
  async getAudioByCategory(category: string): Promise<AudioFile[]> {
    try {
      const { data, error } = await supabase
        .from('audio_pronunciations')
        .select('*')
        .eq('category', category)
        .order('created_at', { ascending: true })

      if (error) {
        console.error('Error fetching category audio:', error)
        return []
      }

      return data || []
    } catch (error) {
      console.error('Error fetching category audio:', error)
      return []
    }
  }

  // Delete an audio file
  async deleteAudioFile(fileName: string): Promise<boolean> {
    try {
      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from(this.bucketName)
        .remove([fileName])

      if (storageError) {
        console.error('Storage delete error:', storageError)
      }

      // Delete from database
      const { error: dbError } = await supabase
        .from('audio_pronunciations')
        .delete()
        .eq('file_name', fileName)

      if (dbError) {
        console.error('Database delete error:', dbError)
        return false
      }

      console.log(`🗑️ Audio file deleted: ${fileName}`)
      return true
    } catch (error) {
      console.error('Error deleting audio file:', error)
      return false
    }
  }

  // Convert base64 to blob
  private async base64ToBlob(base64: string, mimeType: string): Promise<Blob> {
    const byteCharacters = atob(base64)
    const byteNumbers = new Array(byteCharacters.length)
    
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    
    const byteArray = new Uint8Array(byteNumbers)
    return new Blob([byteArray], { type: mimeType })
  }

  // Extract voice info from filename
  private extractVoiceInfoFromFileName(fileName: string): { voiceId: string; voiceName: string } {
    // Filename format: text_voiceName_timestamp.mp3
    const parts = fileName.split('_')
    const voiceName = parts[parts.length - 2] || 'unknown'
    
    // This is a simplified approach - in practice, you might want to store voice ID separately
    return {
      voiceId: 'unknown', // We'll need to store this properly
      voiceName: voiceName
    }
  }

  // Test the storage connection
  async testConnection(): Promise<boolean> {
    try {
      const { data, error } = await supabase.storage
        .from(this.bucketName)
        .list('', { limit: 1 })

      if (error) {
        console.error('Storage connection test failed:', error)
        return false
      }

      console.log('✅ Supabase Storage connection successful')
      return true
    } catch (error) {
      console.error('Storage connection test error:', error)
      return false
    }
  }

  // Get storage usage information
  async getStorageInfo(): Promise<any> {
    try {
      const { data, error } = await supabase.storage
        .from(this.bucketName)
        .list('')

      if (error) {
        throw new Error(`Failed to get storage info: ${error.message}`)
      }

      const totalSize = data?.reduce((acc, file) => acc + (file.metadata?.size || 0), 0) || 0
      const fileCount = data?.length || 0

      return {
        fileCount,
        totalSizeBytes: totalSize,
        totalSizeMB: Math.round((totalSize / 1024 / 1024) * 100) / 100
      }
    } catch (error) {
      console.error('Failed to get storage info:', error)
      throw error
    }
  }
}

export const audioStorageService = AudioStorageService.getInstance()
