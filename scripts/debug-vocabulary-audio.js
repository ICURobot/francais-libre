const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

// Configuration
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function debugVocabularyAudio() {
  console.log('🔍 Debugging vocabulary example sentences audio...\n')
  
  try {
    // Test some specific example sentences
    const testSentences = [
      'Je regarde la télé le soir',
      'J\'écoute de la musique classique',
      'Elle danse très bien',
      'Nous chantons ensemble',
      'Tu joues au tennis le weekend'
    ]
    
    for (const sentence of testSentences) {
      console.log(`\n🔍 Looking for: "${sentence}"`)
      
      const { data, error } = await supabase
        .from('audio_pronunciations')
        .select('*')
        .eq('text', sentence)
        .order('created_at', { ascending: false })
        .limit(1)
      
      if (error) {
        console.error(`❌ Error querying for "${sentence}":`, error.message)
      } else if (data && data.length > 0) {
        console.log(`✅ Found: ${data[0].file_name}`)
        console.log(`   Category: ${data[0].category}`)
        console.log(`   Lesson ID: ${data[0].lesson_id}`)
        console.log(`   Audio URL: ${data[0].audio_url}`)
      } else {
        console.log(`❌ Not found in database`)
        
        // Try to find similar texts
        const { data: similarData, error: similarError } = await supabase
          .from('audio_pronunciations')
          .select('text, file_name')
          .ilike('text', `%${sentence.split(' ')[0]}%`)
          .limit(5)
        
        if (!similarError && similarData && similarData.length > 0) {
          console.log(`   🔍 Similar texts found:`)
          similarData.forEach(item => {
            console.log(`      - "${item.text}" (${item.file_name})`)
          })
        }
      }
    }
    
    // Check all vocabulary example audio files
    console.log('\n\n📚 Checking all vocabulary example audio files...')
    const { data: allVocabEx, error: allVocabError } = await supabase
      .from('audio_pronunciations')
      .select('text, file_name, category')
      .like('file_name', 'vocab_ex_%')
      .order('created_at', { ascending: true })
    
    if (allVocabError) {
      console.error('❌ Error fetching vocabulary examples:', allVocabError.message)
    } else if (allVocabEx && allVocabEx.length > 0) {
      console.log(`✅ Found ${allVocabEx.length} vocabulary example audio files:`)
      allVocabEx.forEach(item => {
        console.log(`   - "${item.text}" (${item.file_name})`)
      })
    } else {
      console.log('❌ No vocabulary example audio files found')
    }
    
  } catch (error) {
    console.error('❌ Debug failed:', error.message)
  }
}

// Run the script
if (require.main === module) {
  debugVocabularyAudio()
}

module.exports = { debugVocabularyAudio }
