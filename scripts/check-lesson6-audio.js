const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '../.env.local' })

async function checkLesson6Audio() {
  console.log('🔍 Checking existing audio files for Lesson 6 examples...')
  
  // Create Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Missing required environment variables')
    return
  }
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey)
  
  // Lesson 6 grammar examples
  const examples = [
    'Je voudrais le menu, s\'il vous plaît.',
    'Qu\'est-ce que vous recommandez comme dessert?',
    'Je suis allergique aux fruits de mer.',
    'L\'addition, s\'il vous plaît.',
    'Est-ce que le service est compris?',
    'C\'est délicieux! Mes compliments au chef.'
  ]
  
  console.log(`\n📚 Checking ${examples.length} grammar examples...`)
  
  for (const example of examples) {
    try {
      const { data, error } = await supabase
        .from('audio_pronunciations')
        .select('*')
        .eq('text', example)
        .single()

      if (error && error.code !== 'PGRST116') {
        console.error(`   ❌ Error checking "${example}":`, error)
        continue
      }

      if (data) {
        console.log(`   ✅ Found: "${example}"`)
        console.log(`      File: ${data.file_name}`)
        console.log(`      Voice: ${data.voice_name}`)
        console.log(`      Created: ${data.created_at}`)
      } else {
        console.log(`   ❌ Missing: "${example}"`)
      }
      
    } catch (error) {
      console.error(`   ❌ Error checking "${example}":`, error)
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
  
  console.log(`\n🔊 Checking ${conjugations.length} conjugation forms...`)
  
  for (const conjugation of conjugations) {
    try {
      const { data, error } = await supabase
        .from('audio_pronunciations')
        .select('*')
        .eq('text', conjugation)
        .single()

      if (error && error.code !== 'PGRST116') {
        console.error(`   ❌ Error checking "${conjugation}":`, error)
        continue
      }

      if (data) {
        console.log(`   ✅ Found: "${conjugation}"`)
        console.log(`      File: ${data.file_name}`)
        console.log(`      Voice: ${data.voice_name}`)
        console.log(`      Created: ${data.created_at}`)
      } else {
        console.log(`   ❌ Missing: "${conjugation}"`)
      }
      
    } catch (error) {
      console.error(`   ❌ Error checking "${conjugation}":`, error)
    }
  }
  
  console.log('\n🎉 Audio check complete!')
}

// Run the check
checkLesson6Audio().catch(console.error)
