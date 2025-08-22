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
const backupDir = path.join(process.cwd(), 'audio-backup', 'grammar-specific')
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true })
}

// Grammar examples and conjugation forms that need audio
const grammarAudioItems = [
  // Lesson 1 Grammar Examples
  {
    text: 'Je suis étudiant en médecine.',
    category: 'grammar',
    lessonId: 'beginner-1',
    context: 'Grammar example - être verb usage'
  },
  {
    text: 'Vous êtes très aimable.',
    category: 'grammar', 
    lessonId: 'beginner-1',
    context: 'Grammar example - être verb usage'
  },
  {
    text: 'Elle est de Marseille.',
    category: 'grammar',
    lessonId: 'beginner-1', 
    context: 'Grammar example - être verb usage'
  },
  {
    text: 'Nous sommes en retard.',
    category: 'grammar',
    lessonId: 'beginner-1',
    context: 'Grammar example - être verb usage'
  },
  {
    text: 'Ils sont français.',
    category: 'grammar',
    lessonId: 'beginner-1',
    context: 'Grammar example - être verb usage'
  },
  {
    text: 'Tu es mon ami.',
    category: 'grammar',
    lessonId: 'beginner-1',
    context: 'Grammar example - être verb usage'
  },
  
  // Lesson 2 Grammar Examples
  {
    text: 'J\'ai faim et j\'ai soif.',
    category: 'grammar',
    lessonId: 'beginner-2',
    context: 'Grammar example - avoir verb usage'
  },
  {
    text: 'Tu as raison.',
    category: 'grammar',
    lessonId: 'beginner-2',
    context: 'Grammar example - avoir verb usage'
  },
  {
    text: 'Il a de la chance.',
    category: 'grammar',
    lessonId: 'beginner-2',
    context: 'Grammar example - avoir verb usage'
  },
  {
    text: 'Nous avons froid en hiver.',
    category: 'grammar',
    lessonId: 'beginner-2',
    context: 'Grammar example - avoir verb usage'
  },
  {
    text: 'Vous avez des enfants?',
    category: 'grammar',
    lessonId: 'beginner-2',
    context: 'Grammar example - avoir verb usage'
  },
  {
    text: 'Ils ont chaud en été.',
    category: 'grammar',
    lessonId: 'beginner-2',
    context: 'Grammar example - avoir verb usage'
  },

  // Lesson 3 Grammar Examples
  {
    text: 'Je vais à la boulangerie.',
    category: 'grammar',
    lessonId: 'beginner-3',
    context: 'Grammar example - aller verb usage'
  },
  {
    text: 'Tu vas très bien.',
    category: 'grammar',
    lessonId: 'beginner-3',
    context: 'Grammar example - aller verb usage'
  },
  {
    text: 'Il va au marché.',
    category: 'grammar',
    lessonId: 'beginner-3',
    context: 'Grammar example - aller verb usage'
  },
  {
    text: 'Nous allons au cinéma.',
    category: 'grammar',
    lessonId: 'beginner-3',
    context: 'Grammar example - aller verb usage'
  },
  {
    text: 'Vous allez au restaurant?',
    category: 'grammar',
    lessonId: 'beginner-3',
    context: 'Grammar example - aller verb usage'
  },
  {
    text: 'Ils vont à la pharmacie.',
    category: 'grammar',
    lessonId: 'beginner-3',
    context: 'Grammar example - aller verb usage'
  },

  // Lesson 4 Grammar Examples
  {
    text: 'Je prends un café noir.',
    category: 'grammar',
    lessonId: 'beginner-4',
    context: 'Grammar example - prendre verb usage'
  },
  {
    text: 'Tu prends la salade.',
    category: 'grammar',
    lessonId: 'beginner-4',
    context: 'Grammar example - prendre verb usage'
  },
  {
    text: 'Il prend le menu du jour.',
    category: 'grammar',
    lessonId: 'beginner-4',
    context: 'Grammar example - prendre verb usage'
  },
  {
    text: 'Nous prenons l\'apéritif.',
    category: 'grammar',
    lessonId: 'beginner-4',
    context: 'Grammar example - prendre verb usage'
  },
  {
    text: 'Vous prenez le dessert?',
    category: 'grammar',
    lessonId: 'beginner-4',
    context: 'Grammar example - prendre verb usage'
  },
  {
    text: 'Ils prennent le vin rouge.',
    category: 'grammar',
    lessonId: 'beginner-4',
    context: 'Grammar example - prendre verb usage'
  },

  // Lesson 5 Grammar Examples
  {
    text: 'Je voudrais un café, s\'il vous plaît.',
    category: 'grammar',
    lessonId: 'beginner-5',
    context: 'Grammar example - vouloir verb usage'
  },
  {
    text: 'Tu veux de l\'eau?',
    category: 'grammar',
    lessonId: 'beginner-5',
    context: 'Grammar example - vouloir verb usage'
  },
  {
    text: 'Il veut le steak-frites.',
    category: 'grammar',
    lessonId: 'beginner-5',
    context: 'Grammar example - vouloir verb usage'
  },
  {
    text: 'Nous voulons la carte.',
    category: 'grammar',
    lessonId: 'beginner-5',
    context: 'Grammar example - vouloir verb usage'
  },
  {
    text: 'Vous voulez l\'addition?',
    category: 'grammar',
    lessonId: 'beginner-5',
    context: 'Grammar example - vouloir verb usage'
  },
  {
    text: 'Ils veulent le dessert.',
    category: 'grammar',
    lessonId: 'beginner-5',
    context: 'Grammar example - vouloir verb usage'
  },

  // Lesson 6 Grammar Examples
  {
    text: 'Je fais mes courses au supermarché.',
    category: 'grammar',
    lessonId: 'beginner-6',
    context: 'Grammar example - faire verb usage'
  },
  {
    text: 'Tu fais la cuisine.',
    category: 'grammar',
    lessonId: 'beginner-6',
    context: 'Grammar example - faire verb usage'
  },
  {
    text: 'Il fait beau aujourd\'hui.',
    category: 'grammar',
    lessonId: 'beginner-6',
    context: 'Grammar example - faire verb usage'
  },
  {
    text: 'Nous faisons une promenade.',
    category: 'grammar',
    lessonId: 'beginner-6',
    context: 'Grammar example - faire verb usage'
  },
  {
    text: 'Vous faites du sport?',
    category: 'grammar',
    lessonId: 'beginner-6',
    context: 'Grammar example - faire verb usage'
  },
  {
    text: 'Ils font leurs devoirs.',
    category: 'grammar',
    lessonId: 'beginner-6',
    context: 'Grammar example - faire verb usage'
  }
]

// Generate audio with ElevenLabs
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
          similarity_boost: 0.5
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
    const fileName = `${cleanText}_Mylene_French_${Date.now()}.mp3`

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
async function generateGrammarAudio() {
  console.log('🎵 Generating audio for grammar examples and conjugation forms...\n')
  console.log(`🎤 Using voice: Mylène French (${MYLENE_VOICE_ID})\n`)
  console.log(`📁 Backup directory: ${backupDir}\n`)

  let successCount = 0
  let failureCount = 0
  let backupCount = 0

  for (let i = 0; i < grammarAudioItems.length; i++) {
    const item = grammarAudioItems[i]
    
    try {
      console.log(`\n[${i + 1}/${grammarAudioItems.length}] Processing: "${item.text}"`)
      console.log(`📚 Context: ${item.context}`)
      
      // Generate audio with ElevenLabs first
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

      // Small delay between generations
      await new Promise(resolve => setTimeout(resolve, 1000))

    } catch (error) {
      console.error(`❌ Error generating "${item.text}":`, error)
      failureCount++
    }
  }

  console.log(`\n🎉 Generation complete!`)
  console.log(`✅ Successfully uploaded: ${successCount}`)
  console.log(`💾 Local backups saved: ${backupCount}`)
  console.log(`❌ Generation failures: ${failureCount}`)
  console.log(`📁 Total items: ${grammarAudioItems.length}`)
  console.log(`\n📂 All audio files backed up to: ${backupDir}`)
}

// Run the generation
generateGrammarAudio()
