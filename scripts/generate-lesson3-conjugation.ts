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

// Backup directory
const backupDir = path.join(process.cwd(), 'audio-backup', 'lesson3-conjugation')
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true })
}

// All the missing conjugation forms from Lesson 3's conjugation table
const conjugationForms = [
  {
    text: "ai faim/soif/froid",
    category: "grammar",
    lessonId: "beginner-3",
    context: "Conjugation form - j'ai faim/soif/froid (I am hungry/thirsty/cold)",
    keyWords: "ai faim/soif/froid"
  },
  {
    text: "as faim/soif/froid",
    category: "grammar", 
    lessonId: "beginner-3",
    context: "Conjugation form - tu as faim/soif/froid (you are hungry/thirsty/cold)"
  },
  {
    text: "a faim/soif/froid",
    category: "grammar",
    lessonId: "beginner-3", 
    context: "Conjugation form - il/elle/on a faim/soif/froid (he/she/one is hungry/thirsty/cold)"
  },
  {
    text: "avons faim/soif/froid",
    category: "grammar",
    lessonId: "beginner-3",
    context: "Conjugation form - nous avons faim/soif/froid (we are hungry/thirsty/cold)"
  },
  {
    text: "avez faim/soif/froid",
    category: "grammar",
    lessonId: "beginner-3",
    context: "Conjugation form - vous avez faim/soif/froid (you are hungry/thirsty/cold - formal/plural)"
  },
  {
    text: "ont faim/soif/froid",
    category: "grammar",
    lessonId: "beginner-3",
    context: "Conjugation form - ils/elles ont faim/soif/froid (they are hungry/thirsty/cold)"
  }
]

// Generate audio with ElevenLabs using André's voice
async function generateAudioWithAndre(text: string): Promise<{
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
    const fileName = `${cleanText}_Andre_French_${Date.now()}.mp3`

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
        voice_id: ANDRE_VOICE_ID,
        voice_name: 'André French',
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
async function generateLesson3Conjugation() {
  console.log('🎵 Generating audio for Lesson 3 conjugation table...\n')
  console.log(`🎤 Using voice: André French (${ANDRE_VOICE_ID})\n`)
  console.log(`📁 Backup directory: ${backupDir}\n`)
  console.log(`📚 Total conjugation forms to generate: ${conjugationForms.length}\n`)

  let successCount = 0
  let totalCount = conjugationForms.length

  for (let i = 0; i < conjugationForms.length; i++) {
    const form = conjugationForms[i]
    console.log(`\n🔄 Processing ${i + 1}/${totalCount}: "${form.text}"`)
    console.log(`📚 Context: ${form.context}`)
    console.log(`🔑 Key words: ${form.keyWords}`)
    
    try {
      // Generate audio with André's voice
      const audioResult = await generateAudioWithAndre(form.text)
      
      if (!audioResult.success || !audioResult.audioData || !audioResult.fileName) {
        console.log(`❌ Generation failed: "${form.text}" - ${audioResult.error}`)
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
        form.text, 
        audioResult.audioData, 
        audioResult.fileName, 
        form.category, 
        form.lessonId
      )
      
      if (uploadSuccess) {
        console.log(`✅ Successfully generated and stored: "${form.text}"`)
        successCount++
      } else {
        console.log(`⚠️ Upload failed but audio saved locally: "${form.text}"`)
      }

      // Small delay between requests to avoid overwhelming the API
      if (i < conjugationForms.length - 1) {
        console.log('⏳ Waiting 2 seconds before next request...')
        await new Promise(resolve => setTimeout(resolve, 2000))
      }

    } catch (error) {
      console.error(`❌ Error generating "${form.text}":`, error)
    }
  }

  console.log(`\n🎉 Generation complete!`)
  console.log(`✅ Successfully generated: ${successCount}/${totalCount}`)
  console.log(`❌ Failed: ${totalCount - successCount}/${totalCount}`)
  
  if (successCount === totalCount) {
    console.log(`\n🎵 All Lesson 3 conjugation table audio buttons should now work!`)
    console.log(`🔊 Test the conjugation table - no more 406 errors!`)
    console.log(`🇫🇷 André's voice should pronounce all the forms beautifully!`)
  }
}

// Run the generation
generateLesson3Conjugation()

