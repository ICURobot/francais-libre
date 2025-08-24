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

const backupDir = path.join(process.cwd(), 'audio-backup', 'le-pain-fix')

// Ensure backup directory exists
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true })
}

// Only "le pain" needs audio - example sentence already works
const lePainAudio = {
  text: "le pain",
  category: "vocabulary",
  lessonId: "beginner-5", // Assuming this is from Lesson 5 based on context
  context: "Food vocabulary - bread"
}

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
    formData.append('file', new Blob([audioData]), fileName)
    
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

// Main function to fix "le pain" audio
async function fixLePainAudio() {
  console.log('🎵 Fixing missing audio for "le pain"...\n')
  console.log('✅ Example sentence "Le pain français est délicieux." will be left alone (already working)\n')

  if (!ELEVENLABS_API_KEY || !SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Missing required environment variables')
    return
  }

  try {
    console.log(`--- Processing: "${lePainAudio.text}" ---`)
    
    // Generate audio
    const audioResult = await generateAudioWithAndre(lePainAudio.text)
    
    // Save local backup
    await saveLocalBackup(audioResult.audioData, audioResult.fileName)
    
    // Upload to Supabase
    const uploadSuccess = await uploadToSupabase(
      lePainAudio.text,
      audioResult.audioData,
      audioResult.fileName,
      lePainAudio.category,
      lePainAudio.lessonId
    )

    if (uploadSuccess) {
      console.log(`✅ SUCCESS: "${lePainAudio.text}" now has audio!`)
      console.log(`🎯 Test the vocabulary card - "le pain" should now play audio`)
      console.log(`✅ Example sentence was left alone (already working)`)
    } else {
      console.log(`❌ FAILED: "${lePainAudio.text}"`)
    }

  } catch (error) {
    console.error(`❌ ERROR processing "${lePainAudio.text}":`, error)
  }

  console.log(`\n💾 Local backup saved in: ${backupDir}`)
}

fixLePainAudio()

