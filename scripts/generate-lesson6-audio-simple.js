const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '../.env.local' })

async function generateLesson6Audio() {
  console.log('🎵 Generating audio for Lesson 6 examples using Andre\'s voice...')
  
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
  
  // Lesson 6 grammar examples
  const examples = [
    'Je voudrais le menu, s\'il vous plaît.',
    'Qu\'est-ce que vous recommandez comme dessert?',
    'Je suis allergique aux fruits de mer.',
    'Est-ce que le service est compris?',
    'C\'est délicieux! Mes compliments au chef.'
  ]
  
  console.log(`\n📚 Generating audio for ${examples.length} grammar examples...`)
  
  for (let i = 0; i < examples.length; i++) {
    const example = examples[i]
    console.log(`\n${i + 1}. Processing: "${example}"`)
    
    try {
      // Check if audio already exists
      const { data: existingAudio } = await supabase
        .from('audio_pronunciations')
        .select('*')
        .eq('text', example)
        .single()

      if (existingAudio) {
        console.log(`   ✅ Audio already exists: ${existingAudio.file_name}`)
        continue
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
          text: example,
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

      // Convert audio to base64
      const audioBuffer = await response.arrayBuffer()
      
      // Create filename
      const timestamp = Date.now()
      const fileName = `lesson6_example_${i + 1}_Andre_French_${timestamp}.mp3`
      
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
          text: example,
          audio_url: publicUrl,
          voice_id: andreVoiceId,
          voice_name: 'André',
          category: 'grammar',
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
      console.error(`   ❌ Error processing example ${i + 1}:`, error)
    }
  }
  
  // Lesson 6 conjugation table
  const conjugations = [
    'Je voudrais + noun/infinitive',
    'Qu\'est-ce que vous recommandez?',
    'Je prends + food item',
    'J\'aime / Je préfère',
    'Je suis allergique à/aux',
    'L\'addition, s\'il vous plaît'
  ]
  
  console.log(`\n🔊 Generating audio for ${conjugations.length} conjugation forms...`)
  
  for (let i = 0; i < conjugations.length; i++) {
    const conjugation = conjugations[i]
    console.log(`\n${i + 1}. Processing: "${conjugation}"`)
    
    try {
      // Check if audio already exists
      const { data: existingAudio } = await supabase
        .from('audio_pronunciations')
        .select('*')
        .eq('text', conjugation)
        .single()

      if (existingAudio) {
        console.log(`   ✅ Audio already exists: ${existingAudio.file_name}`)
        continue
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
          text: conjugation,
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

      // Convert audio to base64
      const audioBuffer = await response.arrayBuffer()
      
      // Create filename
      const timestamp = Date.now()
      const fileName = `lesson6_conjugation_${i + 1}_Andre_French_${timestamp}.mp3`
      
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
          text: conjugation,
          audio_url: publicUrl,
          voice_id: andreVoiceId,
          voice_name: 'André',
          category: 'grammar',
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
      console.error(`   ❌ Error processing conjugation ${i + 1}:`, error)
    }
  }

  console.log('\n🎉 Lesson 6 audio generation complete!')
}

// Run the script
generateLesson6Audio().catch(console.error)
