const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '../.env.local' })

async function generateLesson6VocabularyExamples() {
  console.log('🎵 Generating audio for Lesson 6 vocabulary example sentences using Andre\'s voice...')
  
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
  
  // Andre's voice ID
  const andreVoiceId = 'qNc8cbRJLnPqGTjuVcKa'
  
  // Lesson 6 vocabulary example sentences
  const exampleSentences = [
    // Restaurant
    'Ce restaurant est excellent.',
    'J\'aime les petits bistrots parisiens.',
    'J\'ai une réservation à vingt heures.',
    'Cette table près de la fenêtre est libre?',
    'Le serveur est très aimable.',
    'La serveuse connaît bien la carte.',
    
    // Menu sections
    'Pourriez-vous m\'apporter la carte?',
    'Comme entrée, je prends la salade.',
    'Le plat principal arrive bientôt.',
    'Quel dessert me conseillez-vous?',
    'Quelle est la spécialité de la maison?',
    'Le menu du jour est à vingt euros.',
    
    // Food items - French specialties
    'La soupe à l\'oignon est une spécialité française.',
    'Le coq au vin est délicieux ici.',
    'J\'adore le bœuf bourguignon de ma grand-mère.',
    'Les escargots sont préparés avec de l\'ail.',
    'Un steak-frites bien cuit, s\'il vous plaît.',
    'La ratatouille est parfaite en été.',
    
    // Drinks
    'Prenons un apéritif avant le dîner.',
    'Ce vin rouge se marie bien avec la viande.',
    'Le vin blanc accompagne le poisson.',
    'Une bouteille d\'eau gazeuse, s\'il vous plaît.',
    'Je préfère l\'eau plate à l\'eau gazeuse.',
    
    // Cooking methods & descriptions
    'Je voudrais mon steak saignant.',
    'Mon mari préfère son steak à point.',
    'Elle commande toujours bien cuit.',
    'Le poisson grillé est excellent.',
    'Les légumes sautés sont délicieux.',
    
    // Restaurant expressions
    'Que me recommandez-vous?',
    'Nous allons commander maintenant.',
    'L\'addition, s\'il vous plaît.',
    'Le pourboire n\'est pas obligatoire.',
    'Ce plat est vraiment délicieux!',
    
    // Allergies and dietary restrictions
    'J\'ai une allergie aux noix.',
    'Je suis végétarien.',
    'Avez-vous des plats sans gluten?',
    
    // Side dishes
    'Les pommes de terre sautées sont parfaites.',
    'Je voudrais des légumes de saison.',
    'Une salade verte avec la vinaigrette.'
  ]
  
  console.log(`\n📚 Generating audio for ${exampleSentences.length} vocabulary example sentences...`)
  
  for (let i = 0; i < exampleSentences.length; i++) {
    const sentence = exampleSentences[i]
    console.log(`\n${i + 1}. Processing: "${sentence}"`)
    
    try {
      // Check if audio already exists with Andre's voice
      const { data: existingAudio } = await supabase
        .from('audio_pronunciations')
        .select('*')
        .eq('text', sentence)
        .eq('voice_name', 'André')
        .single()

      if (existingAudio) {
        console.log(`   ✅ Audio already exists with Andre's voice: ${existingAudio.file_name}`)
        continue
      }

      // Check if there's existing audio with other voices that we should replace
      const { data: otherVoiceAudio } = await supabase
        .from('audio_pronunciations')
        .select('*')
        .eq('text', sentence)
        .neq('voice_name', 'André')
        .single()

      if (otherVoiceAudio) {
        console.log(`   🔄 Replacing ${otherVoiceAudio.voice_name} voice with Andre's voice...`)
        // Delete the old audio file
        await supabase.storage
          .from('audio')
          .remove([otherVoiceAudio.file_name])
        
        // Delete the old database record
        await supabase
          .from('audio_pronunciations')
          .delete()
          .eq('id', otherVoiceAudio.id)
      }

      // Generate audio with ElevenLabs
      console.log(`   🎤 Generating audio with Andre's voice...`)
      
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${andreVoiceId}`, {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': elevenLabsApiKey
        },
        body: JSON.stringify({
          text: sentence,
          model_id: 'eleven_multilingual_v2',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75
          }
        })
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error(`      ❌ ElevenLabs API error: ${response.status} - ${errorText}`)
        continue
      }

      // Convert audio to buffer
      const audioBuffer = await response.arrayBuffer()
      
      // Create filename
      const timestamp = Date.now()
      const fileName = `lesson6_vocab_example_${i + 1}_Andre_French_${timestamp}.mp3`
      
      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('audio')
        .upload(fileName, audioBuffer, {
          contentType: 'audio/mpeg',
          cacheControl: '3600'
        })

      if (uploadError) {
        console.error(`      ❌ Storage upload failed:`, uploadError)
        continue
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('audio')
        .getPublicUrl(fileName)

      const publicUrl = urlData.publicUrl

      // Store reference in database
      const { error: dbError } = await supabase
        .from('audio_pronunciations')
        .insert({
          text: sentence,
          audio_url: publicUrl,
          voice_id: andreVoiceId,
          voice_name: 'André',
          category: 'vocabulary',
          lesson_id: 'beginner-6',
          file_name: fileName
        })

      if (dbError) {
        console.error(`      ❌ Database insert failed:`, dbError)
        continue
      }

      console.log(`      ✅ Audio generated and stored: ${fileName}`)
      
      // Add a small delay between requests
      await new Promise(resolve => setTimeout(resolve, 1000))
      
    } catch (error) {
      console.error(`   ❌ Error processing sentence ${i + 1}:`, error)
    }
  }

  console.log('\n🎉 Lesson 6 vocabulary example sentences audio generation complete!')
}

// Run the script
generateLesson6VocabularyExamples().catch(console.error)
