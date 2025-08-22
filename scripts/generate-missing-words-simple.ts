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

// Words that need individual pronunciation audio
const missingWords = [
  // Basic greetings
  'bonjour',
  'bonsoir', 
  'bonne nuit',
  'salut',
  
  // Self-introduction
  'je m\'appelle',
  'je suis',
  'moi, c\'est',
  
  // Conjugation forms
  'suis',
  'es', 
  'est',
  'sommes',
  'êtes',
  'sont',
  
  // Common words
  'merci',
  's\'il vous plaît',
  'au revoir',
  'comment allez-vous',
  'enchanté',
  'à bientôt',
  'excusez-moi',
  'pardon',
  
  // Numbers
  'un',
  'deux',
  'trois',
  'quatre',
  'cinq',
  'six',
  'sept',
  'huit',
  'neuf',
  'dix'
]

// Voice configuration
const MYLENE_VOICE_ID = 'WQKwBV2Uzw1gSGr69N8I'

// Ensure backup directory exists
const backupDir = join(process.cwd(), 'audio-backup')
if (!existsSync(backupDir)) {
  mkdirSync(backupDir, { recursive: true })
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

async function uploadToSupabase(text: string, audioData: string, fileName: string): Promise<boolean> {
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
    if (!SUPABASE_KEY) {
      throw new Error('SUPABASE_KEY is required')
    }
    
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
        category: 'pronunciation',
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

async function generateMissingWords() {
  console.log('🎵 Generating missing individual word pronunciations...\n')
  console.log(`🎤 Using voice: Mylène French (${MYLENE_VOICE_ID})\n`)
  console.log(`📁 Backup directory: ${backupDir}\n`)

  let successCount = 0
  let failureCount = 0
  let backupCount = 0

  for (const word of missingWords) {
    try {
      // Generate audio with ElevenLabs
      const audioResult = await generateAudioWithElevenLabs(word)
      
      if (!audioResult.success || !audioResult.audioData || !audioResult.fileName) {
        console.log(`❌ Generation failed: "${word}" - ${audioResult.error}`)
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
      const uploadSuccess = await uploadToSupabase(word, audioResult.audioData, audioResult.fileName)
      
      if (uploadSuccess) {
        console.log(`✅ Successfully generated and stored: "${word}"`)
        successCount++
      } else {
        console.log(`⚠️ Upload failed but audio saved locally: "${word}"`)
        // Don't count as failure since we have local backup
      }

      // Small delay between generations
      await new Promise(resolve => setTimeout(resolve, 1000))

    } catch (error) {
      console.error(`❌ Error generating "${word}":`, error)
      failureCount++
    }
  }

  console.log(`\n🎉 Generation complete!`)
  console.log(`✅ Successfully uploaded: ${successCount}`)
  console.log(`💾 Local backups saved: ${backupCount}`)
  console.log(`❌ Generation failures: ${failureCount}`)
  console.log(`📁 Total words: ${missingWords.length}`)
  console.log(`\n📂 All audio files backed up to: ${backupDir}`)
}

// Run the generation
generateMissingWords()
