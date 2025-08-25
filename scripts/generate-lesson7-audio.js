const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')
require('dotenv').config({ path: '../.env.local' })

async function generateLesson7Audio() {
  console.log('🎵 Generating comprehensive audio for Lesson 7: Les Directions...')
  
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
  
  // Voice IDs
  const voices = {
    mylene: 'WQKwBV2Uzw1gSGr69N8I',      // First female voice (Emma)
    marie: 'F1toM6PcP54s45kOOAyV',        // Second female voice (Marie)
    andre: 'qNc8cbRJLnPqGTjuVcKa'         // Male voice (Andre)
  }
  
  // Create local backup directory
  const backupDir = path.join(__dirname, '../audio-backup/lesson7-audio')
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true })
  }
  
  console.log(`📁 Local backup directory: ${backupDir}`)
  
  // Lesson 7 content
  const lesson7Content = {
    dialogue: [
      // Emma's lines (Mylène voice)
      { text: 'Excusez-moi, madame. Je suis perdue. Où est le Louvre, s\'il vous plaît?', speaker: 'Emma', voiceId: voices.mylene },
      { text: 'Je préfère marcher si ce n\'est pas trop loin.', speaker: 'Emma', voiceId: voices.mylene },
      { text: 'Tout droit... Et après la Seine?', speaker: 'Emma', voiceId: voices.mylene },
      { text: 'À droite sur le quai, pont du Carrousel... Et ensuite?', speaker: 'Emma', voiceId: voices.mylene },
      { text: 'Parfait! Et si je me perds, quelle est la station de métro la plus proche?', speaker: 'Emma', voiceId: voices.mylene },
      { text: 'Vous êtes très aimable. Combien coûte un ticket de métro?', speaker: 'Emma', voiceId: voices.mylene },
      { text: 'Merci beaucoup pour votre aide! Bonne journée!', speaker: 'Emma', voiceId: voices.mylene },
      
      // Marie's lines (Marie voice)
      { text: 'Ah, le musée du Louvre! Vous êtes à pied ou vous prenez le métro?', speaker: 'Marie', voiceId: voices.marie },
      { text: 'C\'est à quinze minutes à pied. Allez tout droit jusqu\'à la Seine.', speaker: 'Marie', voiceId: voices.marie },
      { text: 'Tournez à droite sur le quai, puis traversez le pont du Carrousel.', speaker: 'Marie', voiceId: voices.marie },
      { text: 'Après le pont, vous voyez une grande pyramide de verre. C\'est l\'entrée du Louvre!', speaker: 'Marie', voiceId: voices.marie },
      { text: 'La station "Palais-Royal - Musée du Louvre" sur les lignes 1 et 7.', speaker: 'Marie', voiceId: voices.marie },
      { text: 'Un ticket coûte deux euros dix, mais je conseille un carnet de dix tickets.', speaker: 'Marie', voiceId: voices.marie },
      { text: 'De rien! Bon voyage et profitez bien de votre visite!', speaker: 'Marie', voiceId: voices.marie }
    ],
    
    grammarExamples: [
      'Allez tout droit jusqu\'au carrefour.',
      'Tournez à gauche après la banque.',
      'La pharmacie est en face de la boulangerie.',
      'C\'est à dix minutes à pied.',
      'Prenez le métro ligne 4 direction Porte de Clignancourt.',
      'Descendez à la prochaine station.'
    ],
    
    vocabulary: [
      // Direction basics
      { word: 'tout droit', example: 'Allez tout droit jusqu\'au feu rouge.' },
      { word: 'à droite', example: 'Tournez à droite après l\'église.' },
      { word: 'à gauche', example: 'La banque est à gauche.' },
      { word: 'tourner', example: 'Vous devez tourner ici.' },
      { word: 'traverser', example: 'Traversez la rue avec prudence.' },
      { word: 'continuer', example: 'Continuez jusqu\'à la place.' },
      
      // Location prepositions
      { word: 'à côté de', example: 'La poste est à côté de la pharmacie.' },
      { word: 'en face de', example: 'Le café est en face de l\'hôtel.' },
      { word: 'près de', example: 'J\'habite près de la gare.' },
      { word: 'loin de', example: 'C\'est loin de votre hôtel?' },
      { word: 'entre', example: 'Le restaurant est entre la banque et la poste.' },
      { word: 'au coin de', example: 'Il y a une boulangerie au coin de la rue.' },
      
      // Transportation
      { word: 'le métro', example: 'Je prends le métro tous les jours.' },
      { word: 'l\'autobus', example: 'Le bus numéro 21 va à l\'aéroport.' },
      { word: 'le train', example: 'Le train pour Lyon part dans dix minutes.' },
      { word: 'le taxi', example: 'Appelons un taxi, il pleut.' },
      { word: 'à pied', example: 'C\'est plus rapide à pied.' },
      { word: 'en voiture', example: 'Nous y allons en voiture.' },
      
      // Metro/Transit
      { word: 'la station', example: 'Quelle est la prochaine station?' },
      { word: 'la gare', example: 'La gare du Nord est très grande.' },
      { word: 'la ligne', example: 'Prenez la ligne 1 direction Vincennes.' },
      { word: 'la direction', example: 'Métro ligne 4, direction Porte d\'Orléans.' },
      { word: 'le ticket', example: 'J\'ai besoin d\'un ticket de métro.' },
      { word: 'le carnet', example: 'Un carnet coûte moins cher.' },
      { word: 'composter', example: 'N\'oubliez pas de composter votre ticket.' },
      
      // City landmarks
      { word: 'la place', example: 'Rendez-vous place de la République.' },
      { word: 'le pont', example: 'Traversez le pont Neuf.' },
      { word: 'la rue', example: 'J\'habite rue de Rivoli.' },
      { word: 'l\'avenue', example: 'L\'avenue des Champs-Élysées est célèbre.' },
      { word: 'le boulevard', example: 'Le boulevard Saint-Germain est animé.' },
      { word: 'le carrefour', example: 'Tournez à droite au carrefour.' },
      { word: 'le feu rouge', example: 'Arrêtez-vous au feu rouge.' },
      
      // Buildings
      { word: 'la banque', example: 'La banque ferme à 17 heures.' },
      { word: 'la poste', example: 'Où est la poste la plus proche?' },
      { word: 'l\'hôpital', example: 'L\'hôpital est à dix minutes d\'ici.' },
      { word: 'l\'église', example: 'L\'église Notre-Dame est magnifique.' },
      { word: 'le musée', example: 'Le musée d\'Orsay expose les impressionnistes.' },
      { word: 'l\'hôtel', example: 'Mon hôtel est près de la gare.' },
      
      // Distance and time
      { word: 'proche', example: 'C\'est très proche d\'ici.' },
      { word: 'loin', example: 'Ce n\'est pas très loin.' },
      { word: 'à ... minutes', example: 'C\'est à cinq minutes à pied.' },
      
      // Getting lost/help
      { word: 'perdu(e)', example: 'Je suis perdu, pouvez-vous m\'aider?' },
      { word: 'se perdre', example: 'Je me perds toujours dans cette ville.' },
      { word: 'aider', example: 'Pouvez-vous m\'aider, s\'il vous plaît?' }
    ]
  }
  
  let totalGenerated = 0
  let totalErrors = 0
  
  // Generate dialogue audio
  console.log('\n🗣️ Generating dialogue audio...')
  for (const exchange of lesson7Content.dialogue) {
    try {
      const result = await generateAndStoreAudio(
        exchange.text,
        exchange.voiceId,
        exchange.speaker,
        'dialogue',
        supabase,
        backupDir
      )
      if (result.success) {
        totalGenerated++
        console.log(`   ✅ ${exchange.speaker}: "${exchange.text.substring(0, 50)}..."`)
      } else {
        totalErrors++
        console.log(`   ❌ ${exchange.speaker}: "${exchange.text.substring(0, 50)}..." - ${result.error}`)
      }
    } catch (error) {
      totalErrors++
      console.log(`   ❌ ${exchange.speaker}: "${exchange.text.substring(0, 50)}..." - ${error.message}`)
    }
  }
  
  // Generate grammar examples audio
  console.log('\n📚 Generating grammar examples audio...')
  for (const example of lesson7Content.grammarExamples) {
    try {
      const result = await generateAndStoreAudio(
        example,
        voices.andre,
        'André',
        'grammar',
        supabase,
        backupDir
      )
      if (result.success) {
        totalGenerated++
        console.log(`   ✅ Grammar: "${example.substring(0, 50)}..."`)
      } else {
        totalErrors++
        console.log(`   ❌ Grammar: "${example.substring(0, 50)}..." - ${result.error}`)
      }
    } catch (error) {
      totalErrors++
      console.log(`   ❌ Grammar: "${example.substring(0, 50)}..." - ${error.message}`)
    }
  }
  
  // Generate vocabulary audio
  console.log('\n📖 Generating vocabulary audio...')
  for (const item of lesson7Content.vocabulary) {
    try {
      // Generate audio for the word
      const wordResult = await generateAndStoreAudio(
        item.word,
        voices.andre,
        'André',
        'vocabulary',
        supabase,
        backupDir
      )
      if (wordResult.success) {
        totalGenerated++
        console.log(`   ✅ Word: "${item.word}"`)
      } else {
        totalErrors++
        console.log(`   ❌ Word: "${item.word}" - ${wordResult.error}`)
      }
      
      // Generate audio for the example sentence
      const exampleResult = await generateAndStoreAudio(
        item.example,
        voices.andre,
        'André',
        'vocabulary',
        supabase,
        backupDir
      )
      if (exampleResult.success) {
        totalGenerated++
        console.log(`   ✅ Example: "${item.example.substring(0, 50)}..."`)
      } else {
        totalErrors++
        console.log(`   ❌ Example: "${item.example.substring(0, 50)}..." - ${wordResult.error}`)
      }
    } catch (error) {
      totalErrors++
      console.log(`   ❌ Vocabulary item: "${item.word}" - ${error.message}`)
    }
  }
  
  console.log('\n🎉 Audio generation completed!')
  console.log(`✅ Total generated: ${totalGenerated}`)
  console.log(`❌ Total errors: ${totalErrors}`)
  console.log(`📁 Local backups saved to: ${backupDir}`)
}

async function generateAndStoreAudio(text, voiceId, voiceName, category, supabase, backupDir) {
  try {
    // Check if audio already exists
    const { data: existingAudio } = await supabase
      .from('audio_pronunciations')
      .select('*')
      .eq('text', text)
      .eq('voice_name', voiceName)
      .single()
    
    if (existingAudio) {
      console.log(`   ⚠️  Audio already exists: ${existingAudio.file_name}`)
      return { success: true, message: 'Already exists' }
    }
    
    // Generate audio with ElevenLabs
    const audioResponse = await generateElevenLabsAudio(text, voiceId)
    if (!audioResponse.success) {
      return { success: false, error: audioResponse.error }
    }
    
    // Create completely safe filename for Supabase storage
    const safeText = text
      .toLowerCase()
      .replace(/[àáâãäå]/g, 'a')
      .replace(/[èéêë]/g, 'e')
      .replace(/[ìíîï]/g, 'i')
      .replace(/[òóôõö]/g, 'o')
      .replace(/[ùúûü]/g, 'u')
      .replace(/[ç]/g, 'c')
      .replace(/[éè]/g, 'e')
      .replace(/[à]/g, 'a')
      .replace(/[ù]/g, 'u')
      .replace(/[ô]/g, 'o')
      .replace(/[î]/g, 'i')
      .replace(/[û]/g, 'u')
      .replace(/[ê]/g, 'e')
      .replace(/[â]/g, 'a')
      .replace(/[ï]/g, 'i')
      .replace(/[ë]/g, 'e')
      .replace(/[ü]/g, 'u')
      .replace(/[ö]/g, 'o')
      .replace(/[ä]/g, 'a')
      .replace(/[å]/g, 'a')
      .replace(/[æ]/g, 'ae')
      .replace(/[œ]/g, 'oe')
      .replace(/[^a-z0-9\s]/g, '') // Remove ALL special characters
      .replace(/\s+/g, '_') // Replace spaces with underscores
      .replace(/_+/g, '_') // Replace multiple underscores with single
      .replace(/^_|_$/g, '') // Remove leading/trailing underscores
      .substring(0, 30) // Limit length to be safe
    
    // Save local backup
    const backupPath = path.join(backupDir, `${safeText}_${voiceName}_${Date.now()}.mp3`)
    fs.writeFileSync(backupPath, Buffer.from(audioResponse.audioData, 'base64'))
    
    // Upload to Supabase Storage
    const fileName = `${safeText}_${voiceName}_${Date.now()}.mp3`
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('audio')
      .upload(fileName, Buffer.from(audioResponse.audioData, 'base64'), {
        contentType: 'audio/mpeg',
        cacheControl: '3600'
      })
    
    if (uploadError) {
      console.error('Storage upload error:', uploadError)
      return { success: false, error: uploadError.message }
    }
    
    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('audio')
      .getPublicUrl(fileName)
    
    // Store reference in database
    const { error: dbError } = await supabase
      .from('audio_pronunciations')
      .insert({
        text: text,
        audio_url: publicUrl,
        voice_id: voiceId,
        voice_name: voiceName,
        category: category,
        lesson_id: 'beginner-7',
        file_name: fileName
      })
    
    if (dbError) {
      console.error('Database insert error:', dbError)
      return { success: false, error: dbError.message }
    }
    
    return { success: true, fileName: fileName }
    
  } catch (error) {
    console.error('Audio generation error:', error)
    return { success: false, error: error.message }
  }
}

async function generateElevenLabsAudio(text, voiceId) {
  try {
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': process.env.ELEVENLABS_API_KEY
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
    
    if (!response.ok) {
      const errorData = await response.text()
      throw new Error(`ElevenLabs API error: ${response.status} ${response.statusText} - ${errorData}`)
    }
    
    const audioBlob = await response.blob()
    const arrayBuffer = await audioBlob.arrayBuffer()
    const base64Audio = Buffer.from(arrayBuffer).toString('base64')
    
    return {
      success: true,
      audioData: base64Audio
    }
    
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }
}

// Run the script
generateLesson7Audio().catch(console.error)
