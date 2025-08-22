#!/usr/bin/env tsx

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

// Load .env.local manually
try {
  const envPath = join(process.cwd(), '.env.local')
  const envContent = readFileSync(envPath, 'utf8')
  
  envContent.split('\n').forEach(line => {
    if (line && !line.startsWith('#')) {
      const [key, ...valueParts] = line.split('=')
      if (key && valueParts.length > 0) {
        const value = valueParts.join('=')
        process.env[key] = value
      }
    }
  })
} catch (error) {
  console.error('❌ Failed to load .env.local:', error)
  process.exit(1)
}

// Direct API calls without importing services
const ELEVENLABS_API_KEY = process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!ELEVENLABS_API_KEY || !SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌ Missing environment variables:')
  console.error('ELEVENLABS_API_KEY:', ELEVENLABS_API_KEY ? '✅' : '❌')
  console.error('SUPABASE_URL:', SUPABASE_URL ? '✅' : '❌')
  console.error('SUPABASE_KEY:', SUPABASE_KEY ? '✅' : '❌')
  process.exit(1)
}

// Voice configuration
const MYLENE_VOICE_ID = 'WQKwBV2Uzw1gSGr69N8I'

// Ensure backup directory exists
const backupDir = join(process.cwd(), 'audio-backup')
if (!existsSync(backupDir)) {
  mkdirSync(backupDir, { recursive: true })
}

// Import lesson data to get all the content that needs audio
import { beginnerLessons } from '../lib/lessons/lessonData'

// Collect all the text that needs audio
function collectAllText(): Array<{ text: string; category: 'dialogue' | 'vocabulary' | 'grammar'; lessonId?: string; context?: string }> {
  const allText: Array<{ text: string; category: 'dialogue' | 'vocabulary' | 'grammar'; lessonId?: string; context?: string }> = []
  
  beginnerLessons.forEach(lesson => {
    // Add dialogue exchanges
    if (lesson.dialogue) {
      lesson.dialogue.exchanges.forEach((exchange, index) => {
        allText.push({
          text: exchange.french,
          category: 'dialogue',
          lessonId: lesson.id,
          context: `${lesson.title} - Exchange ${index + 1}`
        })
      })
    }
    
    // Add grammar examples
    if (lesson.grammar && lesson.grammar.examples) {
      lesson.grammar.examples.forEach((example, index) => {
        allText.push({
          text: example.french,
          category: 'grammar',
          lessonId: lesson.id,
          context: `${lesson.title} - Grammar Example ${index + 1}`
        })
      })
    }
    
    // Add vocabulary words
    if (lesson.vocabulary) {
      lesson.vocabulary.forEach((word, index) => {
        allText.push({
          text: word.word,
          category: 'vocabulary',
          lessonId: lesson.id,
          context: `${lesson.title} - Vocabulary ${index + 1}`
        })
        
        // Also add example sentences
        if (word.example_sentence) {
          allText.push({
            text: word.example_sentence,
            category: 'vocabulary',
            lessonId: lesson.id,
            context: `${lesson.title} - Example Sentence ${index + 1}`
          })
        }
      })
    }
    
    // Add conjugation forms
    if (lesson.grammar && lesson.grammar.conjugation_table) {
      lesson.grammar.conjugation_table.forEach((conj, index) => {
        allText.push({
          text: conj.form,
          category: 'grammar',
          lessonId: lesson.id,
          context: `${lesson.title} - Conjugation ${index + 1}`
        })
      })
    }
  })
  
  return allText
}

async function generateAudioWithElevenLabs(text: string): Promise<{ success: boolean; audioData?: string; fileName?: string; error?: string }> {
  try {
    if (!ELEVENLABS_API_KEY) {
      return { success: false, error: 'ElevenLabs API key not configured' }
    }

    console.log(`🎵 Generating audio for: "${text}"`)
    
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${MYLENE_VOICE_ID}`, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': ELEVENLABS_API_KEY
      },
      body: JSON.stringify({
        text: text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75
        }
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      return { success: false, error: `HTTP ${response.status}: ${errorText}` }
    }

    const audioBuffer = await response.arrayBuffer()
    const audioData = Buffer.from(audioBuffer).toString('base64')
    const fileName = `${text.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_')}_Mylene_French_${Date.now()}.mp3`

    return { success: true, audioData, fileName }
  } catch (error) {
    return { success: false, error: String(error) }
  }
}

// Save audio file locally as backup
function saveLocalBackup(audioData: string, fileName: string): string {
  try {
    const filePath = join(backupDir, fileName)
    const buffer = Buffer.from(audioData, 'base64')
    writeFileSync(filePath, buffer)
    console.log(`💾 Saved locally: ${fileName}`)
    return filePath
  } catch (error) {
    console.error(`❌ Local save failed: ${fileName} - ${error}`)
    throw error
  }
}

async function uploadToSupabase(text: string, audioData: string, fileName: string, category: string, lessonId?: string): Promise<boolean> {
  try {
    console.log(`📤 Uploading "${text}" to Supabase...`)
    
    // First upload to Supabase Storage using the correct endpoint
    const storageResponse = await fetch(`${SUPABASE_URL}/storage/v1/object/audio/${fileName}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'audio/mpeg',
        'Cache-Control': '3600'
      },
      body: Buffer.from(audioData, 'base64')
    })

    if (!storageResponse.ok) {
      const errorText = await storageResponse.text()
      console.error(`❌ Storage upload failed: ${storageResponse.status} - ${errorText}`)
      return false
    }

    const storageData = await storageResponse.json()
    console.log(`✅ Storage upload successful: ${fileName}`)
    
    // Get the public URL
    const publicUrl = storageData.publicUrl || `${SUPABASE_URL}/storage/v1/object/public/audio/${fileName}`
    console.log(`🔗 Public URL: ${publicUrl}`)

    // Then store reference in database
    const dbResponse = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
        'apikey': SUPABASE_KEY
      },
      body: JSON.stringify({
        text: text,
        audio_url: publicUrl,
        voice_id: MYLENE_VOICE_ID,
        voice_name: 'Mylène French',
        category: category,
        lesson_id: lessonId,
        file_name: fileName
      })
    })

    if (!dbResponse.ok) {
      const dbErrorText = await dbResponse.text()
      console.error(`❌ Database insert failed: ${dbResponse.status} - ${dbErrorText}`)
      return false
    }

    console.log(`✅ Database insert successful: ${text}`)
    return true
  } catch (error) {
    console.error('❌ Upload failed:', error)
    return false
  }
}

async function generateAllMissingAudio() {
  console.log('🎵 Generating ALL missing audio for complete French learning platform...\n')
  console.log(`🎤 Using voice: Mylène French (${MYLENE_VOICE_ID})\n`)
  console.log(`📁 Backup directory: ${backupDir}\n`)

  // Collect all text that needs audio
  const allText = collectAllText()
  console.log(`📋 Total text items to process: ${allText.length}\n`)

  let successCount = 0
  let failureCount = 0
  let backupCount = 0
  let skipCount = 0

  for (let i = 0; i < allText.length; i++) {
    const item = allText[i]
    
    try {
      console.log(`\n[${i + 1}/${allText.length}] Processing: "${item.text}" (${item.category})`)
      console.log(`📚 Context: ${item.context}`)
      
      // Check if already exists
      const existingResponse = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?text=eq.${encodeURIComponent(item.text)}`, {
        headers: {
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'apikey': SUPABASE_KEY
        }
      })
      
      if (existingResponse.ok) {
        const existingData = await existingResponse.json()
        if (existingData && existingData.length > 0) {
          console.log(`✅ Already exists: "${item.text}"`)
          skipCount++
          continue
        }
      }

      // Generate audio with ElevenLabs
      const audioResult = await generateAudioWithElevenLabs(item.text)
      
      if (!audioResult.success || !audioResult.audioData || !audioResult.fileName) {
        console.log(`❌ Generation failed: "${item.text}" - ${audioResult.error}`)
        failureCount++
        continue
      }

      // ALWAYS save locally first as backup
      try {
        saveLocalBackup(audioResult.audioData, audioResult.fileName)
        backupCount++
      } catch (backupError) {
        console.log(`⚠️ Local backup failed but continuing: ${backupError}`)
      }

      // Then attempt Supabase upload
      const uploadSuccess = await uploadToSupabase(
        item.text, 
        audioResult.audioData, 
        audioResult.fileName, 
        item.category, 
        item.lessonId
      )
      
      if (uploadSuccess) {
        console.log(`✅ Successfully generated and stored: "${item.text}"`)
        successCount++
      } else {
        console.log(`⚠️ Upload failed but audio saved locally: "${item.text}"`)
        // Don't count as failure since we have local backup
      }

      // Small delay between generations to be respectful to APIs
      await new Promise(resolve => setTimeout(resolve, 1000))

    } catch (error) {
      console.error(`❌ Error processing "${item.text}":`, error)
      failureCount++
    }
  }

  console.log(`\n🎉 Generation complete!`)
  console.log(`✅ Successfully uploaded: ${successCount}`)
  console.log(`💾 Local backups saved: ${backupCount}`)
  console.log(`⏭️ Skipped (already exists): ${skipCount}`)
  console.log(`❌ Generation failures: ${failureCount}`)
  console.log(`📁 Total items processed: ${allText.length}`)
  console.log(`\n📂 All audio files backed up to: ${backupDir}`)
}

// Run the generation
generateAllMissingAudio()
