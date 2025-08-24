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
const MYLENE_VOICE_ID = envVars.MYLENE_VOICE_ID || 'WQKwBV2Uzw1gSGr69N8I'

// Backup directory
const backupDir = path.join(process.cwd(), 'audio-backup', 'final-parents-fix')
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true })
}

// Generate audio with ElevenLabs - NO prefix this time!
async function generateAudioWithElevenLabs(text: string): Promise<{
  success: boolean
  audioData?: string
  fileName?: string
  error?: string
}> {
  try {
    if (!ELEVENLABS_API_KEY) {
      throw new Error('ELEVENLABS_API_KEY is required')
    }

    console.log(`🎵 Generating audio for: "${text}"`)
    console.log(`🇫🇷 Using Mylène French voice for authentic pronunciation`)

    // NO prefix - just the text itself
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${MYLENE_VOICE_ID}`, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': ELEVENLABS_API_KEY
      },
      body: JSON.stringify({
        text: text, // Just "parents" - no prefix!
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.8,        // High stability for consistent French accent
          similarity_boost: 0.9, // Very high similarity to maintain French voice
          style: 0.1,            // Low style for natural pronunciation
          use_speaker_boost: true // Enhance speaker characteristics
        }
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`ElevenLabs API error: ${response.status} - ${errorText}`)
    }

    const audioBuffer = await response.arrayBuffer()
    const audioData = Buffer.from(audioBuffer).toString('base64')
    
    // Generate filename
    const cleanText = text.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_').toLowerCase()
    const fileName = `${cleanText}_Mylene_French_FINAL_${Date.now()}.mp3`

    console.log(`✅ Audio generated successfully: ${fileName}`)
    return {
      success: true,
      audioData,
      fileName
    }

  } catch (error) {
    console.error(`❌ Audio generation failed: ${error}`)
    return {
      success: false,
      error: String(error)
    }
  }
}

// Save audio locally as backup
function saveLocalBackup(audioData: string, fileName: string): void {
  try {
    const filePath = path.join(backupDir, fileName)
    const buffer = Buffer.from(audioData, 'base64')
    fs.writeFileSync(filePath, buffer)
    console.log(`💾 Local backup saved: ${fileName}`)
  } catch (error) {
    console.error(`❌ Local backup failed: ${error}`)
    throw error
  }
}

// Upload to Supabase
async function uploadToSupabase(
  text: string, 
  audioData: string, 
  fileName: string, 
  category: string, 
  lessonId: string
): Promise<boolean> {
  try {
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      throw new Error('Supabase credentials required')
    }

    console.log(`📤 Uploading to Supabase: ${fileName}`)

    // First upload to storage
    const storageResponse = await fetch(`${SUPABASE_URL}/storage/v1/object/audio/${fileName}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=31536000'
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

// Main function
async function fixParentsPronunciationFinal() {
  console.log('🇫🇷 Final fix for "parents" pronunciation...\n')
  console.log(`🎤 Using voice: Mylène French (${MYLENE_VOICE_ID})\n`)
  console.log(`📁 Backup directory: ${backupDir}\n`)
  console.log(`🎯 Goal: Generate "parents" audio that actually says "parents" in French, not "French Pronunciation Parents"! 😅\n`)

  try {
    console.log(`📚 Processing: "parents"`)
    console.log(`🇫🇷 This should sound like French "pa-RAHN" (not English "parents")`)
    
    // Generate audio with ElevenLabs - NO prefix this time!
    const audioResult = await generateAudioWithElevenLabs("parents")
    
    if (!audioResult.success || !audioResult.audioData || !audioResult.fileName) {
      console.log(`❌ Generation failed: "parents" - ${audioResult.error}`)
      return
    }

    // Save locally as backup
    try {
      saveLocalBackup(audioResult.audioData, audioResult.fileName)
    } catch (backupError) {
      console.log(`⚠️ Local backup failed but continuing: ${backupError}`)
    }

    // Upload to Supabase
    const uploadSuccess = await uploadToSupabase(
      "parents", 
      audioResult.audioData, 
      audioResult.fileName, 
      "vocabulary", 
      "beginner-2"
    )
    
    if (uploadSuccess) {
      console.log(`✅ Successfully generated and stored: "parents"`)
      console.log(`🇫🇷 Should now say just "parents" in French accent!`)
      console.log(`🎵 No more "French Pronunciation Parents"! 😅`)
    } else {
      console.log(`⚠️ Upload failed but audio saved locally: "parents"`)
    }

  } catch (error) {
    console.error(`❌ Error generating "parents":`, error)
  }

  console.log(`\n🎉 Final fix complete!`)
  console.log(`🔊 Test the vocabulary card - it should now say just "parents" in French!`)
  console.log(`🇫🇷 No more literal reading of instructions! 😄`)
}

// Run the final pronunciation fix
fixParentsPronunciationFinal()
