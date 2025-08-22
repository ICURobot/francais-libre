#!/usr/bin/env tsx

// Load environment variables from .env.local
import 'dotenv/config'
import { config } from 'dotenv'
config({ path: '.env.local' })

import { audioStorageService } from '../lib/services/audioStorageService'
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

interface AudioFileInfo {
  fileName: string
  filePath: string
  text: string
  voiceId: string
  voiceName: string
  category: 'vocabulary' | 'dialogue' | 'pronunciation'
  lessonId?: string
}

class ExistingAudioUploader {
  private audioFiles: AudioFileInfo[] = []
  private backupDir: string

  constructor() {
    this.backupDir = join(process.cwd(), 'audio-backup')
    this.scanAudioFiles()
  }

  // Scan the backup directory for audio files
  private scanAudioFiles(): void {
    try {
      const files = readdirSync(this.backupDir)
      const mp3Files = files.filter(file => file.endsWith('.mp3'))
      
      console.log(`📁 Found ${mp3Files.length} audio files in backup directory`)
      
      mp3Files.forEach(fileName => {
        // Parse filename to extract information
        const info = this.parseFileName(fileName)
        if (info) {
          this.audioFiles.push({
            fileName,
            filePath: join(this.backupDir, fileName),
            ...info
          })
        }
      })
      
      console.log(`✅ Parsed ${this.audioFiles.length} audio files`)
    } catch (error) {
      console.error('❌ Error scanning backup directory:', error)
      throw error
    }
  }

  // Parse filename to extract text, voice, and category
  private parseFileName(fileName: string): AudioFileInfo | null {
    try {
      // Remove .mp3 extension
      const nameWithoutExt = fileName.replace('.mp3', '')
      
      // Split by underscore and extract components
      const parts = nameWithoutExt.split('_')
      
      if (parts.length < 3) {
        console.warn(`⚠️ Skipping file with unexpected format: ${fileName}`)
        return null
      }
      
      // Last part is timestamp, second to last is voice name
      const timestamp = parts[parts.length - 1]
      const voiceName = parts[parts.length - 2]
      
      // Everything before voice name is the text
      const textParts = parts.slice(0, -2)
      const text = textParts.join(' ').replace(/_/g, ' ')
      
      // Determine category based on text length and content
      let category: 'vocabulary' | 'dialogue' | 'pronunciation' = 'vocabulary'
      if (text.length > 50) {
        category = 'dialogue'
      } else if (text.includes('bonjour') || text.includes('merci') || text.includes('au revoir')) {
        category = 'pronunciation'
      }
      
      // Determine voice ID based on voice name
      let voiceId = 'WQKwBV2Uzw1gSGr69N8I' // Default to Mylène
      if (voiceName.toLowerCase().includes('andre')) {
        voiceId = 'qNc8cbRJLnPqGTjuVcKa'
      }
      
      return {
        text,
        voiceId,
        voiceName: voiceName.replace(/_/g, ' '),
        category
      }
    } catch (error) {
      console.error(`❌ Error parsing filename ${fileName}:`, error)
      return null
    }
  }

  // Upload all audio files to Supabase
  async uploadAllFiles(): Promise<void> {
    console.log('🚀 Starting upload of existing audio files...')
    
    let successCount = 0
    let failureCount = 0
    
    for (const audioFile of this.audioFiles) {
      try {
        console.log(`📤 Uploading: ${audioFile.fileName}`)
        
        // Read the file and convert to base64
        const fileBuffer = readFileSync(audioFile.filePath)
        const base64Data = fileBuffer.toString('base64')
        
        // Upload to Supabase
        const result = await audioStorageService.uploadAudioFile({
          text: audioFile.text,
          audioData: base64Data,
          voiceId: audioFile.voiceId,
          voiceName: audioFile.voiceName,
          category: audioFile.category,
          lessonId: audioFile.lessonId,
          fileName: audioFile.fileName
        })
        
        if (result) {
          console.log(`✅ Upload successful: ${audioFile.fileName}`)
          successCount++
        } else {
          console.log(`❌ Upload failed: ${audioFile.fileName}`)
          failureCount++
        }
        
        // Small delay between uploads
        await new Promise(resolve => setTimeout(resolve, 500))
        
      } catch (error) {
        console.error(`❌ Error uploading ${audioFile.fileName}:`, error)
        failureCount++
      }
    }
    
    console.log('\n🎉 Upload complete!')
    console.log(`✅ Success: ${successCount}`)
    console.log(`❌ Failed: ${failureCount}`)
    console.log(`📁 Total: ${this.audioFiles.length}`)
  }
}

// Main execution
async function main() {
  try {
    const uploader = new ExistingAudioUploader()
    await uploader.uploadAllFiles()
  } catch (error) {
    console.error('❌ Script failed:', error)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}
