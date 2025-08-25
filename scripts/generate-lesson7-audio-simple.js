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
  
  // Lesson 7 content with simple IDs
  const lesson7Content = {
    dialogue: [
      // Emma's lines (Mylène voice)
      { id: 'emma_1', text: 'Excusez-moi, madame. Je suis perdue. Où est le Louvre, s\'il vous plaît?', speaker: 'Emma', voiceId: voices.mylene },
      { id: 'emma_2', text: 'Je préfère marcher si ce n\'est pas trop loin.', speaker: 'Emma', voiceId: voices.mylene },
      { id: 'emma_3', text: 'Tout droit... Et après la Seine?', speaker: 'Emma', voiceId: voices.mylene },
      { id: 'emma_4', text: 'À droite sur le quai, pont du Carrousel... Et ensuite?', speaker: 'Emma', voiceId: voices.mylene },
      { id: 'emma_5', text: 'Parfait! Et si je me perds, quelle est la station de métro la plus proche?', speaker: 'Emma', voiceId: voices.mylene },
      { id: 'emma_6', text: 'Vous êtes très aimable. Combien coûte un ticket de métro?', speaker: 'Emma', voiceId: voices.mylene },
      { id: 'emma_7', text: 'Merci beaucoup pour votre aide! Bonne journée!', speaker: 'Emma', voiceId: voices.mylene },
      
      // Marie's lines (Marie voice)
      { id: 'marie_1', text: 'Ah, le musée du Louvre! Vous êtes à pied ou vous prenez le métro?', speaker: 'Marie', voiceId: voices.marie },
      { id: 'marie_2', text: 'C\'est à quinze minutes à pied. Allez tout droit jusqu\'à la Seine.', speaker: 'Marie', voiceId: voices.marie },
      { id: 'marie_3', text: 'Tournez à droite sur le quai, puis traversez le pont du Carrousel.', speaker: 'Marie', voiceId: voices.marie },
      { id: 'marie_4', text: 'Après le pont, vous voyez une grande pyramide de verre. C\'est l\'entrée du Louvre!', speaker: 'Marie', voiceId: voices.marie },
      { id: 'marie_5', text: 'La station "Palais-Royal - Musée du Louvre" sur les lignes 1 et 7.', speaker: 'Marie', voiceId: voices.marie },
      { id: 'marie_6', text: 'Un ticket coûte deux euros dix, mais je conseille un carnet de dix tickets.', speaker: 'Marie', voiceId: voices.marie },
      { id: 'marie_7', text: 'De rien! Bon voyage et profitez bien de votre visite!', speaker: 'Marie', voiceId: voices.marie }
    ],
    
    grammarExamples: [
      { id: 'grammar_1', text: 'Allez tout droit jusqu\'au carrefour.' },
      { id: 'grammar_2', text: 'Tournez à gauche après la banque.' },
      { id: 'grammar_3', text: 'La pharmacie est en face de la boulangerie.' },
      { id: 'grammar_4', text: 'C\'est à dix minutes à pied.' },
      { id: 'grammar_5', text: 'Prenez le métro ligne 4 direction Porte de Clignancourt.' },
      { id: 'grammar_6', text: 'Descendez à la prochaine station.' }
    ],
    
    vocabulary: [
      // Direction basics
      { id: 'vocab_1', word: 'tout droit', example: 'Allez tout droit jusqu\'au feu rouge.' },
      { id: 'vocab_2', word: 'à droite', example: 'Tournez à droite après l\'église.' },
      { id: 'vocab_3', word: 'à gauche', example: 'La banque est à gauche.' },
      { id: 'vocab_4', word: 'tourner', example: 'Vous devez tourner ici.' },
      { id: 'vocab_5', word: 'traverser', example: 'Traversez la rue avec prudence.' },
      { id: 'vocab_6', word: 'continuer', example: 'Continuez jusqu\'à la place.' },
      
      // Location prepositions
      { id: 'vocab_7', word: 'à côté de', example: 'La poste est à côté de la pharmacie.' },
      { id: 'vocab_8', word: 'en face de', example: 'Le café est en face de l\'hôtel.' },
      { id: 'vocab_9', word: 'près de', example: 'J\'habite près de la gare.' },
      { id: 'vocab_10', word: 'loin de', example: 'C\'est loin de votre hôtel?' },
      { id: 'vocab_11', word: 'entre', example: 'Le restaurant est entre la banque et la poste.' },
      { id: 'vocab_12', word: 'au coin de', example: 'Il y a une boulangerie au coin de la rue.' },
      
      // Transportation
      { id: 'vocab_13', word: 'le métro', example: 'Je prends le métro tous les jours.' },
      { id: 'vocab_14', word: 'l\'autobus', example: 'Le bus numéro 21 va à l\'aéroport.' },
      { id: 'vocab_15', word: 'le train', example: 'Le train pour Lyon part dans dix minutes.' },
      { id: 'vocab_16', word: 'le taxi', example: 'Appelons un taxi, il pleut.' },
      { id: 'vocab_17', word: 'à pied', example: 'C\'est plus rapide à pied.' },
      { id: 'vocab_18', word: 'en voiture', example: 'Nous y allons en voiture.' },
      
      // Metro/Transit
      { id: 'vocab_19', word: 'la station', example: 'Quelle est la prochaine station?' },
      { id: 'vocab_20', word: 'la gare', example: 'La gare du Nord est très grande.' },
      { id: 'vocab_21', word: 'la ligne', example: 'Prenez la ligne 1 direction Vincennes.' },
      { id: 'vocab_22', word: 'la direction', example: 'Métro ligne 4, direction Porte d\'Orléans.' },
      { id: 'vocab_23', word: 'le ticket', example: 'J\'ai besoin d\'un ticket de métro.' },
      { id: 'vocab_24', word: 'le carnet', example: 'Un carnet coûte moins cher.' },
      { id: 'vocab_25', word: 'composter', example: 'N\'oubliez pas de composter votre ticket.' },
      
      // City landmarks
      { id: 'vocab_26', word: 'la place', example: 'Rendez-vous place de la République.' },
      { id: 'vocab_27', word: 'le pont', example: 'Traversez le pont Neuf.' },
      { id: 'vocab_28', word: 'la rue', example: 'J\'habite rue de Rivoli.' },
      { id: 'vocab_29', word: 'l\'avenue', example: 'L\'avenue des Champs-Élysées est célèbre.' },
      { id: 'vocab_30', word: 'le boulevard', example: 'Le boulevard Saint-Germain est animé.' },
      { id: 'vocab_31', word: 'le carrefour', example: 'Tournez à droite au carrefour.' },
      { id: 'vocab_32', word: 'le feu rouge', example: 'Arrêtez-vous au feu rouge.' },
      
      // Buildings
      { id: 'vocab_33', word: 'la banque', example: 'La banque ferme à 17 heures.' },
      { id: 'vocab_34', word: 'la poste', example: 'Où est la poste la plus proche?' },
      { id: 'vocab_35', word: 'l\'hôpital', example: 'L\'hôpital est à dix minutes d\'ici.' },
      { id: 'vocab_36', word: 'l\'église', example: 'L\'église Notre-Dame est magnifique.' },
      { id: 'vocab_37', word: 'le musée', example: 'Le musée d\'Orsay expose les impressionnistes.' },
      { id: 'vocab_38', word: 'l\'hôtel', example: 'Mon hôtel est près de la gare.' },
      
      // Distance and time
      { id: 'vocab_39', word: 'proche', example: 'C\'est très proche d\'ici.' },
      { id: 'vocab_40', word: 'loin', example: 'Ce n\'est pas très loin.' },
      { id: 'vocab_41', word: 'à ... minutes', example: 'C\'est à cinq minutes à pied.' },
      
      // Getting lost/help
      { id: 'vocab_42', word: 'perdu(e)', example: 'Je suis perdu, pouvez-vous m\'aider?' },
      { id: 'vocab_43', word: 'se perdre', example: 'Je me perds toujours dans cette ville.' },
      { id: 'vocab_44', word: 'aider', example: 'Pouvez-vous m\'aider, s\'il vous plaît?' }
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
        exchange.id,
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
        example.text,
        voices.andre,
        'André',
        'grammar',
        example.id,
        supabase,
        backupDir
      )
      if (result.success) {
        totalGenerated++
        console.log(`   ✅ Grammar: "${example.text.substring(0, 50)}..."`)
      } else {
        totalErrors++
        console.log(`   ❌ Grammar: "${example.text.substring(0, 50)}..." - ${result.error}`)
      }
    } catch (error) {
      totalErrors++
      console.log(`   ❌ Grammar: "${example.text.substring(0, 50)}..." - ${error.message}`)
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
        `${item.id}_word`,
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
        `${item.id}_example`,
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

async function generateAndStoreAudio(text, voiceId, voiceName, category, safeId, supabase, backupDir) {
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
    
    // Create completely safe filename - remove ALL accents and special characters
    const timestamp = Date.now()
    const safeVoiceName = voiceName
      .toLowerCase()
      .replace(/[àáâãäå]/g, 'a')
      .replace(/[èéêë]/g, 'e')
      .replace(/[ìíîï]/g, 'i')
      .replace(/[òóôõö]/g, 'o')
      .replace(/[ùúûü]/g, 'u')
      .replace(/[ç]/g, 'c')
      .replace(/[^a-z0-9]/g, '')
    
    const fileName = `lesson7_${safeId}_${safeVoiceName}_${timestamp}.mp3`
    
    // Save local backup
    const backupPath = path.join(backupDir, fileName)
    fs.writeFileSync(backupPath, Buffer.from(audioResponse.audioData, 'base64'))
    
    // Upload to Supabase Storage
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
