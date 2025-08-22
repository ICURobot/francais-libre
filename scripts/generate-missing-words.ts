#!/usr/bin/env tsx

// Simple environment variable loading
import { readFileSync } from 'fs'
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

import { createClient } from '@supabase/supabase-js'
import { elevenLabsService } from '../lib/services/elevenLabsService'
import { audioStorageService } from '../lib/services/audioStorageService'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing environment variables:')
  console.error('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✅' : '❌')
  console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseKey ? '✅' : '❌')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

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

async function generateMissingWords() {
  console.log('🎵 Generating missing individual word pronunciations...\n')

  try {
    // Get voices
    const voices = elevenLabsService.getVoices()
    const myleneVoice = voices.find(v => v.name.includes('Mylène'))
    
    if (!myleneVoice) {
      throw new Error('Mylène voice not found')
    }

    console.log(`🎤 Using voice: ${myleneVoice.name} (${myleneVoice.id})\n`)

    let successCount = 0
    let failureCount = 0

    for (const word of missingWords) {
      try {
        console.log(`🎵 Generating: "${word}"`)
        
        // Check if already exists
        const existing = await audioStorageService.getAudioByText(word)
        if (existing) {
          console.log(`✅ Already exists: "${word}"`)
          continue
        }

        // Generate audio with ElevenLabs
        const audioResponse = await elevenLabsService.generateAudio({
          text: word,
          voiceId: myleneVoice.id,
          fileName: `${word.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_')}_${myleneVoice.name.replace(/\s+/g, '_')}_${Date.now()}.mp3`
        })

        if (!audioResponse.success || !audioResponse.audioUrl) {
          console.log(`❌ Generation failed: "${word}" - ${audioResponse.error}`)
          failureCount++
          continue
        }

        // Upload to Supabase
        const uploadedFile = await audioStorageService.uploadAudioFile({
          text: word,
          audioData: audioResponse.audioUrl,
          voiceId: myleneVoice.id,
          voiceName: myleneVoice.name,
          category: 'pronunciation',
          fileName: audioResponse.fileName!
        })

        if (uploadedFile) {
          console.log(`✅ Successfully generated and stored: "${word}"`)
          successCount++
        } else {
          console.log(`❌ Upload failed: "${word}"`)
          failureCount++
        }

        // Small delay between generations
        await new Promise(resolve => setTimeout(resolve, 1000))

      } catch (error) {
        console.error(`❌ Error generating "${word}":`, error)
        failureCount++
      }
    }

    console.log(`\n🎉 Generation complete!`)
    console.log(`✅ Success: ${successCount}`)
    console.log(`❌ Failed: ${failureCount}`)
    console.log(`📁 Total words: ${missingWords.length}`)

  } catch (error) {
    console.error('❌ Script failed:', error)
  }
}

// Run the generation
generateMissingWords()
