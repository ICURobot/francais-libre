// Auto-generated script for Lesson 8 audio generation
// Run with: node scripts/generate-lesson8-audio.js

const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')
require('dotenv').config({ path: '.env.local' })

// Voice IDs - Global scope so both functions can access
const voices = {
  andre: 'qNc8cbRJLnPqGTjuVcKa',      // Male voice for Thomas and general content
  mylene: 'WQKwBV2Uzw1gSGr69N8I'      // Female voice for Marie
}

async function generateLesson8Audio() {
  console.log('🎵 Generating comprehensive audio for Lesson 8: Regular -er Verbs and Family...')
  
  // Create Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Missing required environment variables')
    return
  }
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey)
  
  // ElevenLabs configuration
  const elevenLabsApiKey = process.env.ELEVENLABS_API_KEY
  if (!elevenLabsApiKey) {
    console.error('❌ Missing ElevenLabs API key')
    return
  }
  
  // Voice IDs are now defined globally above
  
  // Create local backup directory
  const backupDir = path.join(__dirname, '../audio-backup/lesson8-audio')
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true })
  }
  
  console.log(`📁 Local backup directory: ${backupDir}`)
  
  // Lesson 8 content
  const lesson8Content = {
    // Dialogue exchanges
    dialogue: [
      // Marie's lines (Mylène voice)
      { text: "Bonjour Thomas ! Tu habites ici avec ta famille ?", speaker: 'Marie', voiceId: voices.mylene },
      { text: "Et ta mère ? Elle travaille aussi ?", speaker: 'Marie', voiceId: voices.mylene },
      { text: "Formidable ! Moi, je parle français et italien. Ma famille est italienne.", speaker: 'Marie', voiceId: voices.mylene },
      { text: "Oui, j'aime beaucoup ! Et toi, tu étudies quoi ?", speaker: 'Marie', voiceId: voices.mylene },
      
      // Thomas's lines (André voice)
      { text: "Oui, j'habite avec mes parents. Mon père travaille comme médecin.", speaker: 'Thomas', voiceId: voices.andre },
      { text: "Ma mère parle trois langues. Elle enseigne l'anglais à l'université.", speaker: 'Thomas', voiceId: voices.andre },
      { text: "Tu aimes étudier les langues ?", speaker: 'Thomas', voiceId: voices.andre }
    ],
    
    // Grammar examples (André voice)
    grammarExamples: [
      "Je parle français avec mes amis.",
      "Tu habites dans une belle maison.",
      "Il travaille comme ingénieur.",
      "Nous étudions ensemble.",
      "Vous aimez la cuisine française.",
      "Ils parlent plusieurs langues."
    ],
    
    // Conjugation table (André voice)
    conjugation: [
      "parle",
      "parles", 
      "parle",
      "parlons",
      "parlez",
      "parlent"
    ],
    
    // Vocabulary words (André voice)
    vocabulary: [
      "habiter",
      "parler",
      "travailler",
      "aimer",
      "étudier",
      "enseigner",
      "la famille",
      "les parents",
      "le père",
      "la mère",
      "le médecin",
      "l'enseignant(e)",
      "français(e)",
      "italien(ne)",
      "la langue",
      "l'université"
    ],
    
    // Vocabulary example sentences (André voice)
    vocabularyExamples: [
      "J'habite à Paris avec ma famille.",
      "Je parle français et anglais.",
      "Mon père travaille comme médecin.",
      "J'aime beaucoup étudier les langues.",
      "Nous étudions le français ensemble.",
      "Ma mère enseigne l'anglais à l'université.",
      "Ma famille est très importante pour moi.",
      "Mes parents habitent à Lyon.",
      "Mon père est médecin.",
      "Ma mère parle trois langues.",
      "Le médecin travaille à l'hôpital.",
      "L'enseignante est très patiente.",
      "Je suis française et ma famille est italienne.",
      "Ma grand-mère est italienne.",
      "J'aime apprendre de nouvelles langues.",
      "L'université de Paris est très prestigieuse."
    ]
  }
  
  console.log(`📊 Total items to generate: ${lesson8Content.dialogue.length + lesson8Content.grammarExamples.length + lesson8Content.conjugation.length + lesson8Content.vocabulary.length + lesson8Content.vocabularyExamples.length}`)
  
  // Generate dialogue audio
  console.log('\n📝 Generating dialogue audio...')
  for (const item of lesson8Content.dialogue) {
    await generateAndStoreAudio(item.text, item.voiceId, 'dialogue', item.speaker, supabase, backupDir, elevenLabsApiKey)
  }
  
  // Generate grammar examples audio
  console.log('\n📚 Generating grammar examples audio...')
  for (const example of lesson8Content.grammarExamples) {
    await generateAndStoreAudio(example, voices.andre, 'grammar', null, supabase, backupDir, elevenLabsApiKey)
  }
  
  // Generate conjugation audio
  console.log('\n🔤 Generating conjugation audio...')
  for (const form of lesson8Content.conjugation) {
    await generateAndStoreAudio(form, voices.andre, 'vocabulary', null, supabase, backupDir, elevenLabsApiKey)
  }
  
  // Generate vocabulary words audio
  console.log('\n📖 Generating vocabulary words audio...')
  for (const word of lesson8Content.vocabulary) {
    await generateAndStoreAudio(word, voices.andre, 'vocabulary', null, supabase, backupDir, elevenLabsApiKey)
  }
  
  // Generate vocabulary examples audio
  console.log('\n💬 Generating vocabulary examples audio...')
  for (const example of lesson8Content.vocabularyExamples) {
    await generateAndStoreAudio(example, voices.andre, 'vocabulary', null, supabase, backupDir, elevenLabsApiKey)
  }
  
  console.log('\n✅ Lesson 8 audio generation complete!')
}

async function generateAndStoreAudio(text, voiceId, category, speaker, supabase, backupDir, apiKey) {
  try {
    console.log(`🎵 Generating: "${text}" with voice: ${voiceId}`)
    
    // Generate audio with ElevenLabs
    const audioResponse = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': apiKey
      },
      body: JSON.stringify({
        text: text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75
        }
      })
    })
    
    if (!audioResponse.ok) {
      const errorText = await audioResponse.text()
      console.error(`❌ ElevenLabs API error: ${audioResponse.status} - ${errorText}`)
      return
    }
    
    // Get audio blob
    const audioBlob = await audioResponse.blob()
    const arrayBuffer = await audioBlob.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    
    // Generate filename - Enhanced cleaning for Supabase compatibility
    const timestamp = Date.now()
    const cleanText = text
      .normalize('NFD')                    // Decompose accented characters
      .replace(/[\u0300-\u036f]/g, '')    // Remove diacritics (accents)
      .replace(/[^a-zA-Z0-9\s]/g, '')     // Remove all special characters except letters, numbers, spaces
      .replace(/\s+/g, '_')                // Replace spaces with underscores
      .replace(/_+/g, '_')                 // Replace multiple underscores with single
      .replace(/^_|_$/g, '')               // Remove leading/trailing underscores
      .toLowerCase()                        // Convert to lowercase
      .substring(0, 25)                    // Limit to 25 chars to leave room for prefix/suffix
    
    const voiceName = voiceId === voices.andre ? 'Andre' : 'Mylene'
    const fileName = `lesson8_${category}_${cleanText}_${voiceName}_${timestamp}.mp3`
    
    // Save to local backup
    const localPath = path.join(backupDir, fileName)
    fs.writeFileSync(localPath, buffer)
    console.log(`💾 Saved locally: ${fileName}`)
    
    // Convert to base64 for Supabase
    const base64Audio = buffer.toString('base64')
    
    // Upload to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('audio')
      .upload(fileName, buffer, {
        contentType: 'audio/mpeg',
        metadata: {
          text: text,
          voiceId: voiceId,
          voiceName: voiceName,
          category: category,
          speaker: speaker,
          lessonId: 'beginner-8',
          timestamp: timestamp
        }
      })
    
    if (uploadError) {
      console.error(`❌ Supabase upload failed: ${uploadError.message}`)
      return
    }
    
    console.log(`📤 Uploaded to Supabase storage: ${fileName}`)
    
    // Get public URL
    const { data: urlData } = supabase.storage
      .from('audio')
      .getPublicUrl(fileName)
    
    if (!urlData || !urlData.publicUrl) {
      console.error(`❌ Failed to get public URL for: ${fileName}`)
      return
    }
    
    console.log(`🔗 Public URL: ${urlData.publicUrl}`)
    
    // Insert into database
    const { data: dbData, error: dbError } = await supabase
      .from('audio_pronunciations')
      .insert({
        file_name: fileName,
        text: text,
        audio_url: urlData.publicUrl,
        voice_id: voiceId,
        voice_name: voiceName,
        category: category,
        lesson_id: 'beginner-8'
      })
    
    if (dbError) {
      console.error(`❌ Database insert failed: ${dbError.message}`)
      console.error(`❌ Error details:`, dbError)
      return
    }
    
    console.log(`✅ Generated and stored: ${fileName}`)
    
    // Small delay to be respectful to the API
    await new Promise(resolve => setTimeout(resolve, 500))
    
  } catch (error) {
    console.error(`❌ Error generating audio for "${text}":`, error)
  }
}

// Run the generation
generateLesson8Audio().catch(console.error)
