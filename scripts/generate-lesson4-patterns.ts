#!/usr/bin/env tsx

import * as fs from 'fs'
import * as path from 'path'

// Load environment variables manually
const envPath = path.join(process.cwd(), '.env.local')
const envContent = fs.readFileSync(envPath, 'utf8')
const envVars = envContent.split('\n').reduce((acc: any, line) => {
  const [key, ...valueParts] = line.split('=')
  if (key && valueParts.length > 0) {
    acc[key.trim()] = valueParts.join('=').trim()
  }
  return acc
}, {})

// Environment variables
const ELEVENLABS_API_KEY = envVars.ELEVENLABS_API_KEY
const SUPABASE_URL = envVars.SUPABASE_URL
const SUPABASE_KEY = envVars.SUPABASE_ANON_KEY
const ANDRE_VOICE_ID = envVars.ANDRE_VOICE_ID || 'qNc8cbRJLnPqGTjuVcKa'

const backupDir = path.join(process.cwd(), 'audio-backup', 'lesson4-patterns')

// Ensure backup directory exists
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true })
}

// Lesson 4 Time & Date patterns that need audio (excluding "Quelle heure est-il?" which already works)
const lesson4Patterns = [
  {
    text: "Il est + time",
    category: "grammar",
    lessonId: "beginner-4",
    context: "Time expressions pattern"
  },
  {
    text: "Nous sommes + day/date",
    category: "grammar",
    lessonId: "beginner-4",
    context: "Date expressions pattern"
  },
  {
    text: "J'ai rendez-vous à...",
    category: "grammar",
    lessonId: "beginner-4",
    context: "Appointment pattern"
  },
  {
    text: "Ça dure... heures",
    category: "grammar",
    lessonId: "beginner-4",
    context: "Duration pattern"
  },
  {
    text: "Tous les jours/mois",
    category: "grammar",
    lessonId: "beginner-4",
    context: "Frequency pattern"
  }
]

// Generate audio with ElevenLabs using André's voice
async function generateAudioWithAndre(text: string): Promise<{ audioData: Buffer; fileName: string }> {
  console.log(`🎵 Generating audio for: "${text}"`)
  
  try {
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${ANDRE_VOICE_ID}`, {
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
          similarity_boost: 0.75,
          style: 0.0,
          use_speaker_boost: true
        }
      })
    })

    if (!response.ok) {
      throw new Error(`ElevenLabs API error: ${response.status} ${response.statusText}`)
    }

    const audioBuffer = Buffer.from(await response.arrayBuffer())
    const timestamp = Date.now()
    const fileName = `${text.replace(/[^a-zA-Z0-9\s]/g, '_').replace(/\s+/g, '_')}_Andre_French_${timestamp}.mp3`
    
    console.log(`✅ Generated audio: ${fileName}`)
    return { audioData: audioBuffer, fileName }
    
  } catch (error) {
    console.error(`❌ Failed to generate audio for "${text}":`, error)
    throw error
  }
}

// Save local backup
async function saveLocalBackup(audioData: Buffer, fileName: string): Promise<string> {
  const backupPath = path.join(backupDir, fileName)
  fs.writeFileSync(backupPath, audioData)
  console.log(`💾 Local backup saved: ${backupPath}`)
  return backupPath
}

// Upload to Supabase
async function uploadToSupabase(text: string, audioData: Buffer, fileName: string, category: string, lessonId: string): Promise<boolean> {
  try {
    // Upload to Supabase Storage
    const formData = new FormData()
    formData.append('file', new Blob([audioData as unknown as ArrayBuffer]), fileName)
    
    const uploadResponse = await fetch(`${SUPABASE_URL}/storage/v1/object/audio/${fileName}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'apikey': SUPABASE_KEY
      },
      body: formData
    })

    if (!uploadResponse.ok) {
      throw new Error(`Storage upload failed: ${uploadResponse.status} ${uploadResponse.statusText}`)
    }

    console.log(`✅ Audio uploaded to storage: ${fileName}`)

    // Create database record
    const dbResponse = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'apikey': SUPABASE_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        text: text,
        file_name: fileName,
        audio_url: `${SUPABASE_URL}/storage/v1/object/public/audio/${fileName}`,
        category: category,
        lesson_id: lessonId,
        voice_name: 'André French',
        voice_id: ANDRE_VOICE_ID
      })
    })

    if (!dbResponse.ok) {
      throw new Error(`Database insert failed: ${dbResponse.status} ${dbResponse.statusText}`)
    }

    console.log(`✅ Database record created for: "${text}"`)
    return true

  } catch (error) {
    console.error(`❌ Upload failed for "${text}":`, error)
    return false
  }
}

// Main function to generate Lesson 4 patterns audio
async function generateLesson4Patterns() {
  console.log('🎵 Generating audio for Lesson 4 Time & Date patterns...\n')
  console.log(`🎯 Target: ${lesson4Patterns.length} patterns using André's voice`)
  console.log('✅ Excluding "Quelle heure est-il?" (already working)\n')

  if (!ELEVENLABS_API_KEY || !SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Missing required environment variables')
    return
  }

  let successCount = 0
  let failCount = 0

  for (const pattern of lesson4Patterns) {
    try {
      console.log(`\n--- Processing: "${pattern.text}" ---`)
      
      // Generate audio
      const audioResult = await generateAudioWithAndre(pattern.text)
      
      // Save local backup
      await saveLocalBackup(audioResult.audioData, audioResult.fileName)
      
      // Upload to Supabase
      const uploadSuccess = await uploadToSupabase(
        pattern.text,
        audioResult.audioData,
        audioResult.fileName,
        pattern.category,
        pattern.lessonId
      )

      if (uploadSuccess) {
        successCount++
        console.log(`✅ SUCCESS: "${pattern.text}"`)
      } else {
        failCount++
        console.log(`❌ FAILED: "${pattern.text}"`)
      }

      // Small delay to avoid overwhelming the API
      await new Promise(resolve => setTimeout(resolve, 1000))

    } catch (error) {
      failCount++
      console.error(`❌ ERROR processing "${pattern.text}":`, error)
    }
  }

  console.log(`\n🎉 Generation complete!`)
  console.log(`✅ Success: ${successCount}`)
  console.log(`❌ Failed: ${failCount}`)
  console.log(`💾 Local backups saved in: ${backupDir}`)
  
  if (successCount > 0) {
    console.log(`\n🔊 Lesson 4 Time & Date Patterns should now have audio!`)
    console.log(`🎯 Test the Time & Date Patterns section in Lesson 4`)
    console.log(`✅ "Quelle heure est-il?" was left alone (already working)`)
  }
}

generateLesson4Patterns()






