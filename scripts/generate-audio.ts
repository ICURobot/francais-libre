#!/usr/bin/env tsx

// Load environment variables from .env.local
import 'dotenv/config'
import { config } from 'dotenv'
config({ path: '.env.local' })

import { elevenLabsService } from '../lib/services/elevenLabsService'
import { audioStorageService } from '../lib/services/audioStorageService'
import { beginnerLessons } from '../lib/lessons/lessonData'
import { writeFileSync, existsSync } from 'fs'
import { join } from 'path'

interface AudioGenerationTask {
  text: string
  voiceId: string
  voiceName: string
  category: 'vocabulary' | 'dialogue' | 'pronunciation'
  lessonId?: string
  fileName?: string
}

class AudioGenerator {
  private tasks: AudioGenerationTask[] = []

  constructor() {
    this.setupTasks()
  }

  // Set up all the audio generation tasks
  private setupTasks() {
    console.log('📋 Setting up audio generation tasks...')

    // Get your chosen voices
    const voices = elevenLabsService.getVoices()
    const myleneVoice = voices.find(v => v.name.includes('Mylène'))
    const andreVoice = voices.find(v => v.name.includes('André'))

    if (!myleneVoice || !andreVoice) {
      throw new Error('Required voices not found. Please check your voice configuration.')
    }

    // Generate vocabulary audio for all lessons
    beginnerLessons.forEach(lesson => {
      lesson.vocabulary.forEach(word => {
        this.tasks.push({
          text: word.word,
          voiceId: myleneVoice.id, // Use Mylène for vocabulary
          voiceName: myleneVoice.name,
          category: 'vocabulary',
          lessonId: lesson.id
        })
      })
    })

    // Generate dialogue audio for all lessons
    beginnerLessons.forEach(lesson => {
      if (lesson.dialogue) {
        lesson.dialogue.exchanges.forEach((exchange, index) => {
          // Use Mylène for Marie (AI Tutor)
          this.tasks.push({
            text: exchange.french,
            voiceId: myleneVoice.id,
            voiceName: myleneVoice.name,
            category: 'dialogue',
            lessonId: lesson.id
          })
        })
      }
    })

    // Generate pronunciation guide audio
    const pronunciationWords = [
      'bonjour', 'merci', 's\'il vous plaît', 'au revoir', 'comment allez-vous',
      'je m\'appelle', 'enchanté', 'à bientôt', 'excusez-moi', 'pardon'
    ]

    pronunciationWords.forEach(word => {
      this.tasks.push({
        text: word,
        voiceId: myleneVoice.id,
        voiceName: myleneVoice.name,
        category: 'pronunciation'
      })
    })

    console.log(`📝 Total tasks created: ${this.tasks.length}`)
  }

  // Generate all audio files
  async generateAllAudio(): Promise<void> {
    console.log('🎵 Starting audio generation for all content...')
    
    try {
      // Test connections first
      await this.testConnections()
      
      // Process tasks in batches
      const batchSize = 10
      let successCount = 0
      let failureCount = 0
      
      for (let i = 0; i < this.tasks.length; i += batchSize) {
        const batch = this.tasks.slice(i, i + batchSize)
        const batchNumber = Math.floor(i / batchSize) + 1
        const totalBatches = Math.ceil(this.tasks.length / batchSize)
        
        console.log(`\n📦 Processing batch ${batchNumber}/${totalBatches} (${batch.length} items)`)
        
        const batchResults = await this.processBatch(batch)
        
        successCount += batchResults.successCount
        failureCount += batchResults.failureCount
        
        // Progress update
        const progress = Math.round(((i + batchSize) / this.tasks.length) * 100)
        console.log(`📊 Progress: ${Math.min(progress, 100)}% (${successCount} success, ${failureCount} failed)`)
        
        // Small delay between batches to be respectful to APIs
        if (i + batchSize < this.tasks.length) {
          console.log('⏳ Waiting 2 seconds before next batch...')
          await new Promise(resolve => setTimeout(resolve, 2000))
        }
      }
      
      console.log(`\n🎉 Audio generation complete!`)
      console.log(`✅ Success: ${successCount}`)
      console.log(`❌ Failed: ${failureCount}`)
      console.log(`📁 Total: ${this.tasks.length}`)
      
    } catch (error) {
      console.error('❌ Audio generation failed:', error)
      throw error
    }
  }

  // Save audio file locally as backup
  private async saveLocalBackup(audioData: string, fileName: string): Promise<string> {
    try {
      const backupDir = join(process.cwd(), 'audio-backup')
      const filePath = join(backupDir, fileName)
      
      // Convert base64 to buffer and save
      const buffer = Buffer.from(audioData, 'base64')
      writeFileSync(filePath, buffer)
      
      console.log(`💾 Saved locally: ${fileName}`)
      return filePath
    } catch (error) {
      console.error(`❌ Local save failed: ${fileName} - ${error}`)
      throw error
    }
  }

  // Process a batch of tasks
  private async processBatch(tasks: AudioGenerationTask[]): Promise<{ successCount: number; failureCount: number }> {
    let successCount = 0
    let failureCount = 0
    
    for (const task of tasks) {
      try {
        console.log(`🎵 Generating: "${task.text}" (${task.category})`)
        
        // Generate audio with ElevenLabs
        const audioResponse = await elevenLabsService.generateAudio({
          text: task.text,
          voiceId: task.voiceId,
          fileName: `${task.text.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_')}_${task.voiceName.replace(/\s+/g, '_')}_${Date.now()}.mp3`
        })
        
        if (audioResponse.success && audioResponse.audioUrl && audioResponse.fileName) {
          // Save locally first as backup
          try {
            const localPath = await this.saveLocalBackup(audioResponse.audioUrl, audioResponse.fileName)
            console.log(`✅ Audio generated successfully: ${audioResponse.fileName}`)
          } catch (backupError) {
            console.log(`⚠️ Local backup failed but continuing: ${backupError}`)
          }
          
          // Upload to Supabase Storage
          const uploadedFile = await audioStorageService.uploadAudioFile({
            text: task.text,
            audioData: audioResponse.audioUrl,
            voiceId: task.voiceId,
            voiceName: task.voiceName,
            category: task.category,
            lessonId: task.lessonId,
            fileName: audioResponse.fileName
          })
          
          if (uploadedFile) {
            console.log(`✅ Success: ${task.text} → ${uploadedFile.file_name}`)
            successCount++
          } else {
            console.log(`❌ Upload failed: ${task.text} (but saved locally)`)
            failureCount++
          }
        } else {
          console.log(`❌ Generation failed: ${task.text} - ${audioResponse.error}`)
          failureCount++
        }
        
        // Small delay between individual items
        await new Promise(resolve => setTimeout(resolve, 500))
        
      } catch (error) {
        console.error(`❌ Error processing "${task.text}":`, error)
        failureCount++
      }
    }
    
    return { successCount, failureCount }
  }

  // Test all connections before starting
  private async testConnections(): Promise<void> {
    console.log('🧪 Testing system connections...')
    
    // Test ElevenLabs
    const elevenLabsTest = await elevenLabsService.testConnection()
    if (!elevenLabsTest) {
      throw new Error('ElevenLabs connection failed. Please check your API key.')
    }
    console.log('✅ ElevenLabs connection successful')
    
    // Test Supabase Storage
    const storageTest = await audioStorageService.testConnection()
    if (!storageTest) {
      throw new Error('Supabase Storage connection failed. Please check your bucket configuration.')
    }
    console.log('✅ Supabase Storage connection successful')
    
    // Get usage info
    try {
      const usageInfo = await elevenLabsService.getUsageInfo()
      console.log('📊 ElevenLabs usage info:', usageInfo)
    } catch (error) {
      console.warn('⚠️ Could not get usage info:', error)
    }
    
    // Get storage info
    try {
      const storageInfo = await audioStorageService.getStorageInfo()
      console.log('📁 Storage info:', storageInfo)
    } catch (error) {
      console.warn('⚠️ Could not get storage info:', error)
    }
  }

  // Get task summary
  getTaskSummary(): void {
    console.log('\n📋 Audio Generation Task Summary:')
    console.log(`Total tasks: ${this.tasks.length}`)
    
    const categoryCounts = this.tasks.reduce((acc, task) => {
      acc[task.category] = (acc[task.category] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    
    Object.entries(categoryCounts).forEach(([category, count]) => {
      console.log(`  ${category}: ${count}`)
    })
    
    const lessonCounts = this.tasks.reduce((acc, task) => {
      if (task.lessonId) {
        acc[task.lessonId] = (acc[task.lessonId] || 0) + 1
      }
      return acc
    }, {} as Record<string, number>)
    
    if (Object.keys(lessonCounts).length > 0) {
      console.log('\n📚 By lesson:')
      Object.entries(lessonCounts).forEach(([lessonId, count]) => {
        console.log(`  ${lessonId}: ${count}`)
      })
    }
  }
}

// Main execution
async function main() {
  try {
    console.log('🚀 French Audio Generation Script')
    console.log('================================')
    
    const generator = new AudioGenerator()
    generator.getTaskSummary()
    
    // Ask for confirmation
    console.log('\n⚠️  This will generate audio for ALL French content.')
    console.log('⚠️  It may take several minutes and use your ElevenLabs credits.')
    console.log('\nPress Ctrl+C to cancel, or wait 5 seconds to continue...')
    
    await new Promise(resolve => setTimeout(resolve, 5000))
    
    // Start generation
    await generator.generateAllAudio()
    
    console.log('\n🎉 All done! Your French audio system is ready!')
    
  } catch (error) {
    console.error('❌ Script failed:', error)
    process.exit(1)
  }
}

// Run if called directly
if (require.main === module) {
  main()
}

export { AudioGenerator }
