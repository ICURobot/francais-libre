const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')
const axios = require('axios')

// Load environment variables
require('dotenv').config({ path: '.env.local' })

// Configuration
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY

// Voice IDs
const voices = {
  andre: 'pNInz6obpgDQGcFmaJgB', // Andre's male voice
  marie: '21m00Tcm4TlvDq8ikWAM'  // Marie's female voice
}

// Voice names for database
const voiceNames = {
  andre: 'Andre French',
  marie: 'Marie French'
}

// Lesson 9 content structure
const lesson9Content = {
  dialogue: [
    // Sophie (Marie's voice) and Marc (Andre's voice)
    { text: 'Salut Marc ! Tu regardes souvent la télévision ?', speaker: 'Sophie', voice: 'marie' },
    { text: 'Non, je ne regarde pas beaucoup la télé. Je préfère écouter de la musique.', speaker: 'Marc', voice: 'andre' },
    { text: 'Moi, j\'adore danser ! Tu danses aussi ?', speaker: 'Sophie', voice: 'marie' },
    { text: 'Je ne danse pas très bien, mais j\'aime chanter.', speaker: 'Marc', voice: 'andre' },
    { text: 'Et le sport ? Tu joues au tennis ?', speaker: 'Sophie', voice: 'marie' },
    { text: 'Non, je ne joue pas au tennis. Je préfère nager à la piscine.', speaker: 'Marc', voice: 'andre' },
    { text: 'Et le weekend ? Tu restes à la maison ?', speaker: 'Sophie', voice: 'marie' },
    { text: 'Je ne reste pas toujours à la maison. J\'aime visiter des musées.', speaker: 'Marc', voice: 'andre' }
  ],
  
  grammar_examples: [
    'Je parle français → Je ne parle pas français',
    'Tu regardes la télé → Tu ne regardes pas la télé',
    'Elle danse bien → Elle ne danse pas bien',
    'Je aime → Je n\'aime pas',
    'Il habite → Il n\'habite pas'
  ],
  
  conjugation_main: [
    'je regarde',
    'tu regardes', 
    'il regarde',
    'elle regarde',
    'nous regardons',
    'vous regardez',
    'ils regardent',
    'elles regardent'
  ],
  
  conjugation_ecouter: [
    'je écoute',
    'tu écoutes',
    'il écoute',
    'elle écoute', 
    'nous écoutons',
    'vous écoutez',
    'ils écoutent',
    'elles écoutent'
  ],
  
  conjugation_danser: [
    'je danse',
    'tu danses',
    'il danse',
    'elle danse',
    'nous dansons', 
    'vous dansez',
    'ils dansent',
    'elles dansent'
  ],
  
  conjugation_jouer: [
    'je joue',
    'tu joues',
    'il joue',
    'elle joue',
    'nous jouons',
    'vous jouez',
    'ils jouent',
    'elles jouent'
  ],
  
  conjugation_preferer: [
    'je préfère',
    'tu préfères',
    'il préfère',
    'elle préfère',
    'nous préférons',
    'vous préférez',
    'ils préfèrent',
    'elles préfèrent'
  ],
  
  vocabulary_words: [
    'regarder',
    'écouter', 
    'danser',
    'chanter',
    'jouer',
    'nager',
    'rester',
    'visiter',
    'préférer',
    'adorer',
    'la télévision',
    'la musique',
    'le sport',
    'le tennis',
    'la piscine',
    'le musée',
    'la maison',
    'le weekend',
    'souvent',
    'toujours'
  ],
  
  vocabulary_examples: [
    'Je regarde la télé le soir',
    'J\'écoute de la musique classique',
    'Elle danse très bien',
    'Nous chantons ensemble',
    'Tu joues au tennis le weekend',
    'Ils nagent à la piscine',
    'Je reste à la maison le dimanche',
    'Nous visitons des musées',
    'Je préfère écouter de la musique',
    'J\'adore danser le weekend',
    'Je ne regarde pas la télévision',
    'J\'écoute de la musique française',
    'Le sport est important pour la santé',
    'Tu joues au tennis ?',
    'Je nage à la piscine municipale',
    'Nous visitons le musée du Louvre',
    'Je reste à la maison le weekend',
    'Le weekend, je fais du sport',
    'Tu regardes souvent la télé ?',
    'Il ne regarde jamais la télé'
  ],
  
  exercise_content: [
    'Je ne regarde pas la télévision',
    'Je ne danse pas très bien',
    'Elle n\'écoute pas de la musique',
    'Nous ne jouons pas au tennis',
    'Je ne regarde pas la télé le soir',
    'Il ne danse pas le weekend',
    'Nous n\'écoutons pas de musique classique',
    'Elle ne danse pas très bien, mais elle adore chanter',
    'Tu joues souvent au tennis le weekend ?',
    'regarder-to watch',
    'la musique-music',
    'nager-to swim',
    'le musée-museum',
    'préférer-to prefer'
  ]
}

// Helper function to clean filename for Supabase compatibility
function cleanFilename(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-zA-Z0-9\s_-]/g, '') // Remove special characters except spaces, hyphens, underscores
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .replace(/[_-]+/g, '_') // Replace multiple hyphens/underscores with single
    .substring(0, 100) // Limit length
}

// Generate audio using ElevenLabs API
async function generateAudio(text, voiceId, filename) {
  try {
    console.log(`🎵 Generating audio for: "${text}"`)
    
    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        text: text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75
        }
      },
      {
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': ELEVENLABS_API_KEY
        },
        responseType: 'arraybuffer'
      }
    )
    
    return response.data
  } catch (error) {
    console.error(`❌ Error generating audio for "${text}":`, error.message)
    throw error
  }
}

// Upload audio to Supabase storage
async function uploadToSupabase(audioBuffer, filename, supabase) {
  try {
    // Check if file already exists
    const { data: existingFiles } = await supabase.storage
      .from('audio')
      .list('lesson9', {
        search: `${filename}.mp3`
      })
    
    if (existingFiles && existingFiles.length > 0) {
      console.log(`⏭️ File already exists: ${filename}.mp3`)
      return `lesson9/${filename}.mp3`
    }
    
    const { data, error } = await supabase.storage
      .from('audio')
      .upload(`lesson9/${filename}.mp3`, audioBuffer, {
        contentType: 'audio/mpeg',
        cacheControl: '3600'
      })
    
    if (error) throw error
    
    console.log(`✅ Uploaded: ${filename}.mp3`)
    return data.path
  } catch (error) {
    console.error(`❌ Upload failed for ${filename}:`, error.message)
    throw error
  }
}

// Insert audio record into database
async function insertAudioRecord(text, filename, category, supabase, voiceId, voiceName) {
  try {
    // Check if record already exists
    const { data: existingRecord } = await supabase
      .from('audio_pronunciations')
      .select('id')
      .eq('text', text)
      .eq('file_name', filename)
      .single()
    
    if (existingRecord) {
      console.log(`⏭️ Database record already exists for: ${filename}`)
      return existingRecord
    }
    
    const { data, error } = await supabase
      .from('audio_pronunciations')
      .insert({
        text: text,
        file_name: filename,
        audio_url: `https://nkhlxtxwwxkmshjprafb.supabase.co/storage/v1/object/public/audio/lesson9/${filename}.mp3`,
        voice_id: voiceId,
        voice_name: voiceName,
        category: category,
        lesson_id: 'beginner-9',
        created_at: new Date().toISOString()
      })
    
    if (error) throw error
    
    console.log(`✅ Database record created for: ${filename}`)
    return data
  } catch (error) {
    if (error.code === 'PGRST116') {
      // No rows returned from single() - record doesn't exist, continue with insert
      console.log(`📝 Creating new database record for: ${filename}`)
      return await insertAudioRecord(text, filename, category, supabase, voiceId, voiceName)
    }
    console.error(`❌ Database insert failed for ${filename}:`, error.message)
    throw error
  }
}

// Main function to generate and store audio
async function generateAndStoreAudio(text, voiceKey, category, filename, supabase, backupDir, elevenLabsApiKey) {
  try {
    const voiceId = voices[voiceKey]
    const voiceName = voiceNames[voiceKey]
    
    // Generate audio
    const audioBuffer = await generateAudio(text, voiceId, filename)
    
    // Save local backup
    const backupPath = path.join(backupDir, `${filename}.mp3`)
    fs.writeFileSync(backupPath, audioBuffer)
    console.log(`💾 Local backup saved: ${backupPath}`)
    
    // Upload to Supabase
    const storagePath = await uploadToSupabase(audioBuffer, filename, supabase)
    
    // Insert database record
    await insertAudioRecord(text, filename, category, supabase, voiceId, voiceName)
    
    console.log(`🎉 Successfully processed: ${filename}`)
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100))
    
  } catch (error) {
    console.error(`❌ Failed to process ${filename}:`, error.message)
  }
}

// Main execution function
async function generateLesson9Audio() {
  console.log('🎵 Starting Lesson 9 Audio Generation...\n')
  
  // Debug: Check environment variables
  console.log('🔍 Environment variables check:')
  console.log('ELEVENLABS_API_KEY:', ELEVENLABS_API_KEY ? '✅ Set' : '❌ Missing')
  console.log('SUPABASE_URL:', SUPABASE_URL ? '✅ Set' : '❌ Missing')
  console.log('SUPABASE_ANON_KEY:', SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing')
  console.log('')
  
  // Check environment variables
  if (!ELEVENLABS_API_KEY || !SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('❌ Missing environment variables. Please check your .env file.')
    process.exit(1)
  }
  
  // Initialize Supabase client
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  
  // Create backup directory
  const backupDir = path.join(__dirname, '../audio-backup/lesson9')
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true })
  }
  
  try {
    // Generate dialogue audio (Sophie = Marie, Marc = Andre)
    console.log('🎭 Generating dialogue audio...')
    for (const exchange of lesson9Content.dialogue) {
      const filename = cleanFilename(`${exchange.speaker}_${exchange.text}`)
      const voiceId = voices[exchange.voice]
      await generateAndStoreAudio(exchange.text, exchange.voice, 'dialogue', filename, supabase, backupDir, ELEVENLABS_API_KEY)
    }
    
    // Generate grammar examples audio (Andre's voice)
    console.log('\n📚 Generating grammar examples audio...')
    for (const example of lesson9Content.grammar_examples) {
      const filename = cleanFilename(`grammar_${example}`)
      await generateAndStoreAudio(example, 'andre', 'grammar', filename, supabase, backupDir, ELEVENLABS_API_KEY)
    }
    
    // Generate main conjugation table audio (Andre's voice)
    console.log('\n🔤 Generating main conjugation table audio...')
    for (const form of lesson9Content.conjugation_main) {
      const filename = cleanFilename(`conj_main_${form}`)
      await generateAndStoreAudio(form, 'andre', 'vocabulary', filename, supabase, backupDir, ELEVENLABS_API_KEY)
    }
    
    // Generate écouter conjugation audio (Andre's voice)
    console.log('\n🔤 Generating écouter conjugation audio...')
    for (const form of lesson9Content.conjugation_ecouter) {
      const filename = cleanFilename(`conj_ecouter_${form}`)
      await generateAndStoreAudio(form, 'andre', 'vocabulary', filename, supabase, backupDir, ELEVENLABS_API_KEY)
    }
    
    // Generate danser conjugation audio (Andre's voice)
    console.log('\n🔤 Generating danser conjugation audio...')
    for (const form of lesson9Content.conjugation_danser) {
      const filename = cleanFilename(`conj_danser_${form}`)
      await generateAndStoreAudio(form, 'andre', 'vocabulary', filename, supabase, backupDir, ELEVENLABS_API_KEY)
    }
    
    // Generate jouer conjugation audio (Andre's voice)
    console.log('\n🔤 Generating jouer conjugation audio...')
    for (const form of lesson9Content.conjugation_jouer) {
      const filename = cleanFilename(`conj_jouer_${form}`)
      await generateAndStoreAudio(form, 'andre', 'vocabulary', filename, supabase, backupDir, ELEVENLABS_API_KEY)
    }
    
    // Generate préférer conjugation audio (Andre's voice)
    console.log('\n🔤 Generating préférer conjugation audio...')
    for (const form of lesson9Content.conjugation_preferer) {
      const filename = cleanFilename(`conj_preferer_${form}`)
      await generateAndStoreAudio(form, 'andre', 'vocabulary', filename, supabase, backupDir, ELEVENLABS_API_KEY)
    }
    
    // Generate vocabulary words audio (Andre's voice)
    console.log('\n📖 Generating vocabulary words audio...')
    for (const word of lesson9Content.vocabulary_words) {
      const filename = cleanFilename(`vocab_${word}`)
      await generateAndStoreAudio(word, 'andre', 'vocabulary', filename, supabase, backupDir, ELEVENLABS_API_KEY)
    }
    
    // Generate vocabulary examples audio (Andre's voice)
    console.log('\n📖 Generating vocabulary examples audio...')
    for (const example of lesson9Content.vocabulary_examples) {
      const filename = cleanFilename(`vocab_ex_${example}`)
      await generateAndStoreAudio(example, 'andre', 'vocabulary', filename, supabase, backupDir, ELEVENLABS_API_KEY)
    }
    
    // Generate exercise content audio (Andre's voice)
    console.log('\n🧩 Generating exercise content audio...')
    for (const content of lesson9Content.exercise_content) {
      const filename = cleanFilename(`exercise_${content}`)
      await generateAndStoreAudio(content, 'andre', 'vocabulary', filename, supabase, backupDir, ELEVENLABS_API_KEY)
    }
    
    console.log('\n🎉 Lesson 9 audio generation completed successfully!')
    console.log(`📁 Local backups saved in: ${backupDir}`)
    console.log('☁️ All audio files uploaded to Supabase storage')
    console.log('🗄️ Database records created for all audio files')
    
  } catch (error) {
    console.error('\n❌ Error during audio generation:', error)
    process.exit(1)
  }
}

// Run the script
if (require.main === module) {
  generateLesson9Audio()
}

module.exports = { generateLesson9Audio }
