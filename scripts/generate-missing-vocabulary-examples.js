require('dotenv').config({ path: '.env.local' })
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const { createClient } = require('@supabase/supabase-js')

// Voice configuration
const voices = {
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

// All the missing vocabulary words and example sentences
const missingItems = [
  // Example sentences
  { text: 'Mon père enseigne les mathématiques.', speaker: 'male', context: 'vocabulary' },
  { text: 'Nous visitons Paris ce weekend.', speaker: 'male', context: 'vocabulary' },
  { text: 'Ils invitent leurs amis à dîner.', speaker: 'male', context: 'vocabulary' },
  { text: 'Je t\'aide avec tes devoirs.', speaker: 'male', context: 'vocabulary' },
  { text: 'Tu cherches tes clés ?', speaker: 'male', context: 'vocabulary' },
  { text: 'J\'étudie le français depuis deux ans.', speaker: 'male', context: 'vocabulary' },
  { text: 'Il parle seulement anglais.', speaker: 'male', context: 'vocabulary' },
  { text: 'Je travaille maintenant.', speaker: 'male', context: 'vocabulary' },
  { text: 'Ça fait longtemps qu\'on ne s\'est pas vus.', speaker: 'male', context: 'vocabulary' },
  { text: 'Mon frère travaille à Paris.', speaker: 'male', context: 'vocabulary' },
  { text: 'Ma grand-mère cuisine très bien.', speaker: 'male', context: 'vocabulary' },
  { text: 'Le professeur explique la leçon.', speaker: 'male', context: 'vocabulary' },
  { text: 'Elle est française.', speaker: 'male', context: 'vocabulary' },
  { text: 'Il est américain.', speaker: 'male', context: 'vocabulary' },
  { text: 'Mon ami est espagnol.', speaker: 'male', context: 'vocabulary' },
  { text: 'La cuisine italienne est délicieuse.', speaker: 'male', context: 'vocabulary' },
  { text: 'Il parle allemand couramment.', speaker: 'male', context: 'vocabulary' },
  { text: 'La France est un beau pays.', speaker: 'male', context: 'vocabulary' },
  { text: 'Les États-Unis sont très grands.', speaker: 'male', context: 'vocabulary' },
  
  // Individual vocabulary words
  { text: 'depuis', speaker: 'male', context: 'vocabulary' },
  { text: 'seulement', speaker: 'male', context: 'vocabulary' },
  { text: 'longtemps', speaker: 'male', context: 'vocabulary' },
  { text: 'la grand-mère', speaker: 'male', context: 'vocabulary' },
  { text: 'américain(e)', speaker: 'male', context: 'vocabulary' },
  { text: 'espagnol(e)', speaker: 'male', context: 'vocabulary' },
  { text: 'italien(ne)', speaker: 'male', context: 'vocabulary' },
  { text: 'allemand(e)', speaker: 'male', context: 'vocabulary' },
  { text: 'la France', speaker: 'male', context: 'vocabulary' },
  { text: 'les États-Unis', speaker: 'male', context: 'vocabulary' }
]

// Helper function to normalize text
function normalizeText(text) {
  return text
    .replace(/[.!]+$/, '') // Remove trailing periods and exclamation marks
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
        text: normalizedText,
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
    
    // Generate normalized text for database storage
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

// Main function to generate only the missing vocabulary and examples
async function generateMissingVocabularyExamples() {
  console.log('🎵 Generating missing vocabulary words and example sentences for Lesson 10...\n')
  
  // Check environment variables
  if (!ELEVENLABS_API_KEY || !process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
    console.error('❌ Missing environment variables. Please check your .env file.')
    return
  }
  
  console.log(`📚 Total items to process: ${missingItems.length}`)
  console.log(`🎭 Voice: Male (${voices.male.name})\n`)
  
  const results = []
  let successCount = 0
  let errorCount = 0
  
  for (let i = 0; i < missingItems.length; i++) {
    const item = missingItems[i]
    console.log(`\n🔄 Processing ${i + 1}/${missingItems.length}: "${item.text}"`)
    
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
  console.log(`📁 Total processed: ${missingItems.length}`)
  
  if (errorCount > 0) {
    console.log('\n❌ Failed items:')
    results.forEach((result, index) => {
      if (!result.success) {
        console.log(`  - ${missingItems[index].text}: ${result.error}`)
      }
    })
  }
  
  console.log('\n🎉 Missing vocabulary and examples audio generation complete!')
  console.log('💾 Local backups saved in audio-backup/ directory')
  console.log('☁️  Audio files uploaded to Supabase storage')
  console.log('📊 Database records created in audio_pronunciations table')
}

// Run the script
if (require.main === module) {
  generateMissingVocabularyExamples().catch(console.error)
}

module.exports = { generateMissingVocabularyExamples }
