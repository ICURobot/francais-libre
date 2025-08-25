const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

// Configuration
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function debugSpecificExample() {
  console.log('🔍 Debugging specific failing example: "Tu regardes souvent la télé ?"\n')
  
  try {
    // Test the exact text that the frontend is querying
    const frontendQuery = "Tu regardes souvent la tele"
    console.log(`🔍 Frontend query: "${frontendQuery}"`)
    console.log(`📏 Length: ${frontendQuery.length}`)
    console.log(`🔤 Bytes: [${Array.from(new TextEncoder().encode(frontendQuery)).join(', ')}]`)
    
    // Search for this exact text
    const { data: exactMatch, error: exactError } = await supabase
      .from('audio_pronunciations')
      .select('text, file_name, lesson_id')
      .eq('text', frontendQuery)
      .single()
    
    if (exactError) {
      console.log(`❌ No exact match found for: "${frontendQuery}"`)
    } else {
      console.log(`✅ Exact match found: "${exactMatch.text}" (${exactMatch.file_name})`)
    }
    
    // Search for similar texts
    console.log('\n🔍 Searching for similar texts...')
    const { data: similarTexts, error: similarError } = await supabase
      .from('audio_pronunciations')
      .select('text, file_name, lesson_id')
      .or(`text.like.%Tu+regardes+souvent+la+tele%,text.like.%Tu+regardes+souvent+la+télé%`)
      .order('created_at', { ascending: true })
    
    if (similarError) {
      console.error('❌ Error searching for similar texts:', similarError.message)
    } else if (similarTexts && similarTexts.length > 0) {
      console.log(`✅ Found ${similarTexts.length} similar texts:`)
      similarTexts.forEach(item => {
        console.log(`   - "${item.text}" (${item.file_name})`)
        console.log(`     Length: ${item.text.length}, Bytes: [${Array.from(new TextEncoder().encode(item.text)).join(', ')}]`)
      })
    } else {
      console.log('❌ No similar texts found')
    }
    
    // Search for texts containing "Tu regardes souvent"
    console.log('\n🔍 Searching for texts containing "Tu regardes souvent"...')
    const { data: partialMatches, error: partialError } = await supabase
      .from('audio_pronunciations')
      .select('text, file_name, lesson_id')
      .ilike('text', '%Tu regardes souvent%')
      .order('created_at', { ascending: true })
    
    if (partialError) {
      console.error('❌ Error searching for partial matches:', partialError.message)
    } else if (partialMatches && partialMatches.length > 0) {
      console.log(`✅ Found ${partialMatches.length} partial matches:`)
      partialMatches.forEach(item => {
        console.log(`   - "${item.text}" (${item.file_name})`)
      })
    } else {
      console.log('❌ No partial matches found')
    }
    
  } catch (error) {
    console.error('❌ Debug failed:', error.message)
  }
}

// Run the script
if (require.main === module) {
  debugSpecificExample()
}

module.exports = { debugSpecificExample }
