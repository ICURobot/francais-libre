require('dotenv').config({ path: '.env.local' })
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const { createClient } = require('@supabase/supabase-js')

// Voice configuration - using the specified voice IDs
const voices = {
  female: {
    key: 'rbFGGoDXFHtVghjHuS3E',
    name: 'Mademoiselle French',
    id: 'rbFGGoDXFHtVghjHuS3E'
  },
  male: {
    key: 'kENkNtk0xyzG09WW40xE', 
    name: 'Marcel',
    id: 'kENkNtk0xyzG09WW40xE'
  }
}

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

// ElevenLabs API configuration
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY
const ELEVENLABS_API_URL = 'https://api.elevenlabs.io/v1'

// Lesson 10 content for audio generation
const lesson10Content = {
  dialogue: [
    { text: 'Bonjour Marc ! Comment ça va ?', speaker: 'female', context: 'dialogue' },
    { text: 'Salut Sophie ! Ça va bien, merci. Et toi ?', speaker: 'male', context: 'dialogue' },
    { text: 'Très bien ! J\'ai une grande nouvelle à te raconter.', speaker: 'female', context: 'dialogue' },
    { text: 'Ah oui ? Qu\'est-ce qui se passe ?', speaker: 'male', context: 'dialogue' },
    { text: 'Ma sœur Marie commence ses études à l\'université de Lyon en septembre.', speaker: 'female', context: 'dialogue' },
    { text: 'Félicitations ! Elle va étudier quoi ?', speaker: 'male', context: 'dialogue' },
    { text: 'Elle va étudier l\'espagnol et elle veut devenir professeure.', speaker: 'female', context: 'dialogue' },
    { text: 'C\'est génial ! Et elle va habiter où à Lyon ?', speaker: 'male', context: 'dialogue' },
    { text: 'Elle va habiter dans un petit appartement près de l\'université.', speaker: 'female', context: 'dialogue' },
    { text: 'Parfait ! Lyon est une belle ville pour les étudiants.', speaker: 'male', context: 'dialogue' },
    { text: 'Oui, et elle va pouvoir voyager facilement en Europe aussi !', speaker: 'female', context: 'dialogue' },
    { text: 'Exactement ! Et toi, tu vas la visiter souvent ?', speaker: 'male', context: 'dialogue' },
    { text: 'Oui, je vais la visiter au moins une fois par mois.', speaker: 'female', context: 'dialogue' },
    { text: 'C\'est une excellente idée ! La famille, c\'est important.', speaker: 'male', context: 'dialogue' }
  ],
  grammar: [
    { text: 'Je ne voyage jamais en avion.', speaker: 'male', context: 'vocabulary' },
    { text: 'Tu ne travailles plus le samedi.', speaker: 'male', context: 'vocabulary' },
    { text: 'Elle ne parle que français.', speaker: 'male', context: 'vocabulary' },
    { text: 'Nous ne commençons pas avant 9h.', speaker: 'male', context: 'vocabulary' },
    { text: 'Vous ne terminez jamais à l\'heure.', speaker: 'male', context: 'vocabulary' },
    { text: 'Ils ne visitent plus leurs grands-parents.', speaker: 'male', context: 'vocabulary' }
  ],
  conjugation: [
    { text: 'je commence', speaker: 'male', context: 'vocabulary' },
    { text: 'tu commences', speaker: 'male', context: 'vocabulary' },
    { text: 'il commence', speaker: 'male', context: 'vocabulary' },
    { text: 'elle commence', speaker: 'male', context: 'vocabulary' },
    { text: 'nous commençons', speaker: 'male', context: 'vocabulary' },
    { text: 'vous commencez', speaker: 'male', context: 'vocabulary' },
    { text: 'ils commencent', speaker: 'male', context: 'vocabulary' },
    { text: 'elles commencent', speaker: 'male', context: 'vocabulary' },
    { text: 'je termine', speaker: 'male', context: 'vocabulary' },
    { text: 'tu termines', speaker: 'male', context: 'vocabulary' },
    { text: 'il termine', speaker: 'male', context: 'vocabulary' },
    { text: 'elle termine', speaker: 'male', context: 'vocabulary' },
    { text: 'nous terminons', speaker: 'male', context: 'vocabulary' },
    { text: 'vous terminez', speaker: 'male', context: 'vocabulary' },
    { text: 'ils terminent', speaker: 'male', context: 'vocabulary' },
    { text: 'elles terminent', speaker: 'male', context: 'vocabulary' },
    { text: 'je voyage', speaker: 'male', context: 'vocabulary' },
    { text: 'tu voyages', speaker: 'male', context: 'vocabulary' },
    { text: 'il voyage', speaker: 'male', context: 'vocabulary' },
    { text: 'elle voyage', speaker: 'male', context: 'vocabulary' },
    { text: 'nous voyageons', speaker: 'male', context: 'vocabulary' },
    { text: 'vous voyagez', speaker: 'male', context: 'vocabulary' },
    { text: 'ils voyagent', speaker: 'male', context: 'vocabulary' },
    { text: 'elles voyagent', speaker: 'male', context: 'vocabulary' },
    { text: 'j\'enseigne', speaker: 'male', context: 'vocabulary' },
    { text: 'tu enseignes', speaker: 'male', context: 'vocabulary' },
    { text: 'il enseigne', speaker: 'male', context: 'vocabulary' },
    { text: 'elle enseigne', speaker: 'male', context: 'vocabulary' },
    { text: 'nous enseignons', speaker: 'male', context: 'vocabulary' },
    { text: 'vous enseignez', speaker: 'male', context: 'vocabulary' },
    { text: 'ils enseignent', speaker: 'male', context: 'vocabulary' },
    { text: 'elles enseignent', speaker: 'male', context: 'vocabulary' },
    { text: 'je visite', speaker: 'male', context: 'vocabulary' },
    { text: 'tu visites', speaker: 'male', context: 'vocabulary' },
    { text: 'il visite', speaker: 'male', context: 'vocabulary' },
    { text: 'elle visite', speaker: 'male', context: 'vocabulary' },
    { text: 'nous visitons', speaker: 'male', context: 'vocabulary' },
    { text: 'vous visitez', speaker: 'male', context: 'vocabulary' },
    { text: 'ils visitent', speaker: 'male', context: 'vocabulary' },
    { text: 'elles visitent', speaker: 'male', context: 'vocabulary' }
  ],
  vocabulary: [
    { text: 'commencer', speaker: 'male', context: 'vocabulary' },
    { text: 'terminer', speaker: 'male', context: 'vocabulary' },
    { text: 'voyager', speaker: 'male', context: 'vocabulary' },
    { text: 'enseigner', speaker: 'male', context: 'vocabulary' },
    { text: 'visiter', speaker: 'male', context: 'vocabulary' },
    { text: 'inviter', speaker: 'male', context: 'vocabulary' },
    { text: 'aider', speaker: 'male', context: 'vocabulary' },
    { text: 'chercher', speaker: 'male', context: 'vocabulary' },
    { text: 'la sœur', speaker: 'male', context: 'vocabulary' },
    { text: 'le frère', speaker: 'male', context: 'vocabulary' },
    { text: 'les parents', speaker: 'male', context: 'vocabulary' },
    { text: 'les grands-parents', speaker: 'male', context: 'vocabulary' },
    { text: 'l\'université', speaker: 'male', context: 'vocabulary' },
    { text: 'les études', speaker: 'male', context: 'vocabulary' },
    { text: 'le professeur', speaker: 'male', context: 'vocabulary' },
    { text: 'la professeure', speaker: 'male', context: 'vocabulary' },
    { text: 'l\'appartement', speaker: 'male', context: 'vocabulary' },
    { text: 'la ville', speaker: 'male', context: 'vocabulary' },
    { text: 'l\'Europe', speaker: 'male', context: 'vocabulary' },
    { text: 'le français', speaker: 'male', context: 'vocabulary' },
    { text: 'l\'espagnol', speaker: 'male', context: 'vocabulary' },
    { text: 'l\'italien', speaker: 'male', context: 'vocabulary' },
    { text: 'français', speaker: 'male', context: 'vocabulary' },
    { text: 'française', speaker: 'male', context: 'vocabulary' },
    { text: 'italien', speaker: 'male', context: 'vocabulary' },
    { text: 'italienne', speaker: 'male', context: 'vocabulary' },
    { text: 'espagnol', speaker: 'male', context: 'vocabulary' },
    { text: 'espagnole', speaker: 'male', context: 'vocabulary' },
    { text: 'américain', speaker: 'male', context: 'vocabulary' },
    { text: 'américaine', speaker: 'male', context: 'vocabulary' }
  ],
  examples: [
    { text: 'Je commence mes études en septembre.', speaker: 'male', context: 'vocabulary' },
    { text: 'Tu termines le travail à 17h.', speaker: 'male', context: 'vocabulary' },
    { text: 'Elle voyage souvent en Europe.', speaker: 'male', context: 'vocabulary' },
    { text: 'Il enseigne le français aux enfants.', speaker: 'male', context: 'vocabulary' },
    { text: 'Nous visitons nos grands-parents le week-end.', speaker: 'male', context: 'vocabulary' },
    { text: 'Vous invitez vos amis pour le dîner.', speaker: 'male', context: 'vocabulary' },
    { text: 'Ils aident leurs parents à la maison.', speaker: 'male', context: 'vocabulary' },
    { text: 'Elles cherchent un nouvel appartement.', speaker: 'male', context: 'vocabulary' }
  ]
}

// Helper function to normalize text (same as Lessons 1-8)
function normalizeText(text) {
  return text
    .replace(/[.!]+$/, '') // Remove trailing periods and exclamation marks, but keep question marks
    .trim() // Remove trailing spaces
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics (accents)
}

// Generate audio using ElevenLabs API
async function generateAudio(text, voiceId, voiceName) {
  try {
    console.log(`🎵 Generating audio for: "${text}" with voice: ${voiceName}`)
    
    const response = await axios.post(
      `${ELEVENLABS_API_URL}/text-to-speech/${voiceId}`,
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
    console.error(`❌ Audio generation failed for "${text}":`, error.response?.data || error.message)
    throw error
  }
}

// Upload audio file to Supabase Storage
async function uploadToSupabase(audioBuffer, fileName) {
  try {
    // Check if file already exists
    const { data: existingFiles } = await supabase.storage
      .from('audio')
      .list('', { search: fileName })

    if (existingFiles && existingFiles.some(file => file.name === fileName)) {
      console.log(`📁 File ${fileName} already exists, skipping upload`)
      return `https://${process.env.SUPABASE_URL.replace('https://', '')}/storage/v1/object/public/audio/${fileName}`
    }

    const { data, error } = await supabase.storage
      .from('audio')
      .upload(fileName, audioBuffer, {
        contentType: 'audio/mpeg',
        cacheControl: '3600'
      })

    if (error) {
      console.error(`❌ Upload failed for ${fileName}:`, error)
      throw error
    }

    console.log(`✅ Uploaded ${fileName} to Supabase`)
    return `https://${process.env.SUPABASE_URL.replace('https://', '')}/storage/v1/object/public/audio/${fileName}`
  } catch (error) {
    console.error(`❌ Upload failed for ${fileName}:`, error)
    throw error
  }
}

// Insert audio record into database
async function insertAudioRecord(text, normalizedText, fileName, voiceId, voiceName, audioUrl, category) {
  try {
    // Check if record already exists
    const { data: existingRecords } = await supabase
      .from('audio_pronunciations')
      .select('*')
      .eq('file_name', fileName)
      .limit(1)

    if (existingRecords && existingRecords.length > 0) {
      console.log(`📊 Record for ${fileName} already exists, skipping insert`)
      return existingRecords[0]
    }

    const { data, error } = await supabase
      .from('audio_pronunciations')
      .insert({
        text: normalizedText, // Store normalized text for consistency with Lessons 1-8
        file_name: fileName,
        voice_id: voiceId,
        voice_name: voiceName,
        audio_url: audioUrl,
        category: category
      })
      .select()
      .single()

    if (error) {
      console.error(`❌ Database insert failed for ${fileName}:`, error)
      throw error
    }

    console.log(`✅ Database record created for ${fileName}`)
    return data
  } catch (error) {
    console.error(`❌ Database insert failed for ${fileName}:`, error)
    throw error
  }
}

// Generate and store audio for a single text item
async function generateAndStoreAudio(textItem) {
  try {
    const { text, speaker, context } = textItem
    const voiceKey = speaker
    const voiceId = voices[voiceKey].id
    const voiceName = voices[voiceKey].name
    
    // Generate normalized text for database storage (same as Lessons 1-8)
    const normalizedText = normalizeText(text)
    
    // Create filename (avoid French accents in filename)
    const safeText = text.replace(/[éèêëàâäôöùûüç]/g, (match) => {
      const replacements = {
        'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
        'à': 'a', 'â': 'a', 'ä': 'a',
        'ô': 'o', 'ö': 'o',
        'ù': 'u', 'û': 'u', 'ü': 'u',
        'ç': 'c'
      }
      return replacements[match] || match
    })
    
    const fileName = `${safeText.replace(/[^a-zA-Z0-9\s]/g, '_').replace(/\s+/g, '_')}_${voiceName}_French_${Date.now()}.mp3`
    
    // Generate audio
    const audioBuffer = await generateAudio(text, voiceId, voiceName)
    
    // Upload to Supabase
    const audioUrl = await uploadToSupabase(audioBuffer, fileName)
    
    // Insert database record
    await insertAudioRecord(text, normalizedText, fileName, voiceId, voiceName, audioUrl, context)
    
    // Save local backup
    const backupDir = path.join(__dirname, '../audio-backup')
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true })
    }
    
    const backupPath = path.join(backupDir, fileName)
    fs.writeFileSync(backupPath, audioBuffer)
    console.log(`💾 Local backup saved: ${backupPath}`)
    
    return { success: true, fileName, audioUrl }
  } catch (error) {
    console.error(`❌ Failed to process "${textItem.text}":`, error.message)
    return { success: false, error: error.message }
  }
}

// Main function to generate all audio for Lesson 10
async function generateLesson10Audio() {
  console.log('🎵 Starting Lesson 10 audio generation...\n')
  
  // Check environment variables
  if (!ELEVENLABS_API_KEY || !process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
    console.error('❌ Missing environment variables. Please check your .env file.')
    return
  }
  
  const allContent = [
    ...lesson10Content.dialogue,
    ...lesson10Content.grammar,
    ...lesson10Content.conjugation,
    ...lesson10Content.vocabulary,
    ...lesson10Content.examples
  ]
  
  console.log(`📚 Total items to process: ${allContent.length}`)
  console.log(`🎭 Voices: Female (${voices.female.name}), Male (${voices.male.name})\n`)
  
  const results = []
  let successCount = 0
  let errorCount = 0
  
  for (let i = 0; i < allContent.length; i++) {
    const item = allContent[i]
    console.log(`\n🔄 Processing ${i + 1}/${allContent.length}: "${item.text}"`)
    
    const result = await generateAndStoreAudio(item)
    results.push(result)
    
    if (result.success) {
      successCount++
    } else {
      errorCount++
    }
    
    // Small delay to avoid overwhelming the API
    await new Promise(resolve => setTimeout(resolve, 500))
  }
  
  console.log('\n' + '='.repeat(50))
  console.log('📊 GENERATION COMPLETE')
  console.log('='.repeat(50))
  console.log(`✅ Successful: ${successCount}`)
  console.log(`❌ Failed: ${errorCount}`)
  console.log(`📁 Total processed: ${allContent.length}`)
  
  if (errorCount > 0) {
    console.log('\n❌ Failed items:')
    results.forEach((result, index) => {
      if (!result.success) {
        console.log(`  - ${allContent[index].text}: ${result.error}`)
      }
    })
  }
  
  console.log('\n🎉 Lesson 10 audio generation complete!')
  console.log('💾 Local backups saved in audio-backup/ directory')
  console.log('☁️  Audio files uploaded to Supabase storage')
  console.log('📊 Database records created in audio_pronunciations table')
}

// Run the script
if (require.main === module) {
  generateLesson10Audio().catch(console.error)
}

module.exports = { generateLesson10Audio }
