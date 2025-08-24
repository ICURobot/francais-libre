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
const backupDir = path.join(process.cwd(), 'audio-backup', 'fixed-pronunciation')
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true })
}

  // Words that need French pronunciation fixes - Lesson 2 vocabulary section
  const wordsToFix = [
    {
      text: "parents",
      category: "vocabulary",
      lessonId: "beginner-2",
      context: "Lesson 2 vocabulary - Family vocabulary - needs proper French 'pa-RAHN' pronunciation",
      frenchHint: "pa-RAHN (not English 'parents')"
    }
  ]

// Generate audio with ElevenLabs - with French pronunciation hints
async function generateAudioWithElevenLabs(text: string, frenchHint: string): Promise<{
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
    console.log(`🇫🇷 French pronunciation hint: ${frenchHint}`)

    // Add French pronunciation context to help ElevenLabs
    const enhancedText = `[French pronunciation] ${text}`

    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${MYLENE_VOICE_ID}`, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': ELEVENLABS_API_KEY
      },
      body: JSON.stringify({
        text: enhancedText,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.7,        // Higher stability for consistent French accent
          similarity_boost: 0.8, // Higher similarity to maintain French voice characteristics
          style: 0.3,            // Lower style for more natural pronunciation
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
    
    // Generate filename with timestamp
    const cleanText = text.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_').toLowerCase()
    const fileName = `${cleanText}_Mylene_French_FIXED_${Date.now()}.mp3`

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
async function fixFrenchPronunciation() {
  console.log('🇫🇷 Fixing French pronunciation issues...\n')
  console.log(`🎤 Using voice: Mylène French (${MYLENE_VOICE_ID})\n`)
  console.log(`📁 Backup directory: ${backupDir}\n`)
  console.log(`📚 Total words to fix: ${wordsToFix.length}\n`)

  let successCount = 0
  let totalCount = wordsToFix.length

  for (let i = 0; i < wordsToFix.length; i++) {
    const word = wordsToFix[i]
    console.log(`\n🔄 Processing ${i + 1}/${totalCount}: "${word.text}"`)
    console.log(`📚 Context: ${word.context}`)
    console.log(`🇫🇷 Target pronunciation: ${word.frenchHint}`)
    
    try {
      // Generate audio with ElevenLabs - with French pronunciation hints
      const audioResult = await generateAudioWithElevenLabs(word.text, word.frenchHint)
      
      if (!audioResult.success || !audioResult.audioData || !audioResult.fileName) {
        console.log(`❌ Generation failed: "${word.text}" - ${audioResult.error}`)
        continue
      }

      // Save locally as backup
      try {
        saveLocalBackup(audioResult.audioData, audioResult.fileName)
      } catch (backupError) {
        console.log(`⚠️ Local backup failed but continuing: ${backupError}`)
      }

      // Upload to Supabase
      const uploadSuccess = await uploadToSupabase(
        word.text, 
        audioResult.audioData, 
        audioResult.fileName, 
        word.category, 
        word.lessonId
      )
      
      if (uploadSuccess) {
        console.log(`✅ Successfully generated and stored: "${word.text}"`)
        console.log(`🇫🇷 Should now have proper French pronunciation!`)
        successCount++
      } else {
        console.log(`⚠️ Upload failed but audio saved locally: "${word.text}"`)
      }

      // Small delay between requests
      if (i < wordsToFix.length - 1) {
        console.log('⏳ Waiting 3 seconds before next request...')
        await new Promise(resolve => setTimeout(resolve, 3000))
      }

    } catch (error) {
      console.error(`❌ Error generating "${word.text}":`, error)
    }
  }

  console.log(`\n🎉 Pronunciation fixes complete!`)
  console.log(`✅ Successfully fixed: ${successCount}/${totalCount}`)
  console.log(`❌ Failed: ${totalCount - successCount}/${totalCount}`)
  
  if (successCount === totalCount) {
    console.log(`\n🇫🇷 "parents" should now sound like proper French "pa-RAHN"!`)
    console.log(`🔊 Test the vocabulary card - no more English pronunciation!`)
    console.log(`🎵 The French accent should be much more authentic now!`)
  }
}

// Run the pronunciation fixes
fixFrenchPronunciation()
