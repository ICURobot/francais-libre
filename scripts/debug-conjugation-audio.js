const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

// Configuration
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function debugConjugationAudio() {
  console.log('🔍 Debugging conjugation audio files...\n')
  
  try {
    // Test conjugation forms
    const testForms = [
      'je regarde',
      'tu regardes', 
      'il regarde',
      'elle regarde',
      'nous regardons',
      'vous regardez',
      'ils regardent',
      'elles regardent',
      'je écoute',
      'tu écoutes',
      'il écoute',
      'elle écoute',
      'nous écoutons',
      'vous écoutez',
      'ils écoutent',
      'elles écoutent'
    ]
    
    for (const form of testForms) {
      console.log(`\n🔍 Looking for: "${form}"`)
      
      const { data, error } = await supabase
        .from('audio_pronunciations')
        .select('*')
        .eq('text', form)
        .order('created_at', { ascending: false })
        .limit(1)
      
      if (error) {
        console.error(`❌ Error querying for "${form}":`, error.message)
      } else if (data && data.length > 0) {
        console.log(`✅ Found: ${data[0].file_name}`)
        console.log(`   Category: ${data[0].category}`)
        console.log(`   Lesson ID: ${data[0].lesson_id}`)
      } else {
        console.log(`❌ Not found in database`)
      }
    }
    
    // Check all conjugation audio files
    console.log('\n\n📚 Checking all conjugation audio files...')
    const { data: allConj, error: allConjError } = await supabase
      .from('audio_pronunciations')
      .select('text, file_name, category')
      .or('file_name.like.conj_main_%,file_name.like.conj_ecouter_%,file_name.like.conj_danser_%,file_name.like.conj_jouer_%,file_name.like.conj_preferer_%')
      .order('created_at', { ascending: true })
    
    if (allConjError) {
      console.error('❌ Error fetching conjugation files:', allConjError.message)
    } else if (allConj && allConj.length > 0) {
      console.log(`✅ Found ${allConj.length} conjugation audio files:`)
      allConj.forEach(item => {
        console.log(`   - "${item.text}" (${item.file_name})`)
      })
    } else {
      console.log('❌ No conjugation audio files found')
    }
    
  } catch (error) {
    console.error('❌ Debug failed:', error.message)
  }
}

// Run the script
if (require.main === module) {
  debugConjugationAudio()
}

module.exports = { debugConjugationAudio }
