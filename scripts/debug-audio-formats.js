require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

async function debugAudioFormats() {
  console.log('🔍 Checking audio text formats in database...\n')

  try {
    // Check Lesson 1 dialogue (which was working before)
    console.log('📚 Lesson 1 Dialogue Examples:')
    const lesson1Results = await supabase
      .from('audio_pronunciations')
      .select('*')
      .ilike('text', '%Bonjour%')
      .limit(5)
    
    if (lesson1Results.data) {
      lesson1Results.data.forEach((record, index) => {
        console.log(`${index + 1}. Text: "${record.text}"`)
        console.log(`   File: ${record.file_name}`)
        console.log(`   Category: ${record.category}`)
        console.log('')
      })
    }

    // Check Lesson 9 examples (which was working)
    console.log('📚 Lesson 9 Examples:')
    const lesson9Results = await supabase
      .from('audio_pronunciations')
      .select('*')
      .ilike('text', '%regarde%')
      .limit(5)
    
    if (lesson9Results.data) {
      lesson9Results.data.forEach((record, index) => {
        console.log(`${index + 1}. Text: "${record.text}"`)
        console.log(`   File: ${record.file_name}`)
        console.log(`   Category: ${record.category}`)
        console.log('')
      })
    }

    // Check what happens when we normalize text
    console.log('🔧 Testing Text Normalization:')
    const testTexts = [
      'Bonjour! Excusez-moi, cette place est-elle libre?',
      'Je regarde la télé le soir',
      'Tu regardes souvent la télé ?'
    ]

    testTexts.forEach(text => {
      const normalized = text
        .replace(/[.!]+$/, '')
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
      
      console.log(`Original: "${text}"`)
      console.log(`Normalized: "${normalized}"`)
      console.log('')
    })

  } catch (error) {
    console.error('❌ Error:', error)
  }
}

debugAudioFormats()
