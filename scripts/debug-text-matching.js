const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

// Configuration
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function debugTextMatching() {
  console.log('🔍 Debugging text matching for vocabulary example sentences...\n')
  
  try {
    // Test the exact text that's failing
    const testTexts = [
      'Je regarde la télé le soir',
      'J\'écoute de la musique classique',
      'Elle danse très bien',
      'Nous chantons ensemble',
      'Tu joues au tennis le weekend',
      'Ils nagent à la piscine',
      'Je reste à la maison le dimanche',
      'Nous visitons des musées'
    ]
    
    for (const text of testTexts) {
      console.log(`\n🔍 Testing exact text: "${text}"`)
      console.log(`   Length: ${text.length}`)
      console.log(`   Bytes: [${Array.from(new TextEncoder().encode(text)).join(', ')}]`)
      
      // Try exact match
      const { data: exactMatch, error: exactError } = await supabase
        .from('audio_pronunciations')
        .select('*')
        .eq('text', text)
        .limit(1)
      
      if (exactError) {
        console.error(`   ❌ Exact match error:`, exactError.message)
      } else if (exactMatch && exactMatch.length > 0) {
        console.log(`   ✅ Exact match found: ${exactMatch[0].file_name}`)
      } else {
        console.log(`   ❌ No exact match found`)
        
        // Try to find similar texts
        const { data: similarData, error: similarError } = await supabase
          .from('audio_pronunciations')
          .select('text, file_name')
          .ilike('text', `%${text.split(' ')[0]}%`)
          .limit(3)
        
        if (!similarError && similarData && similarData.length > 0) {
          console.log(`   🔍 Similar texts found:`)
          similarData.forEach(item => {
            console.log(`      - "${item.text}" (${item.file_name})`)
            console.log(`        Length: ${item.text.length}, Bytes: [${Array.from(new TextEncoder().encode(item.text)).join(', ')}]`)
          })
        }
        
        // Try to find by first few words
        const firstWords = text.split(' ').slice(0, 3).join(' ')
        console.log(`   🔍 Trying first 3 words: "${firstWords}"`)
        
        const { data: firstWordsData, error: firstWordsError } = await supabase
          .from('audio_pronunciations')
          .select('text, file_name')
          .ilike('text', `${firstWords}%`)
          .limit(3)
        
        if (!firstWordsError && firstWordsData && firstWordsData.length > 0) {
          console.log(`   🔍 First words match:`)
          firstWordsData.forEach(item => {
            console.log(`      - "${item.text}" (${item.file_name})`)
          })
        }
      }
    }
    
    // Check all vocabulary example files to see the exact stored text
    console.log('\n\n📚 All vocabulary example audio files (exact stored text):')
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
        console.log(`     Length: ${item.text.length}, Bytes: [${Array.from(new TextEncoder().encode(item.text)).join(', ')}]`)
      })
    }
    
  } catch (error) {
    console.error('❌ Debug failed:', error.message)
  }
}

// Run the script
if (require.main === module) {
  debugTextMatching()
}

module.exports = { debugTextMatching }
