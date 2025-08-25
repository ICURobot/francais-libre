require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function debugAudioQuery() {
  console.log('🔍 Debugging audio query issues...\n')
  
  try {
    // Test 1: Check if we can connect to the table at all
    console.log('📋 Test 1: Basic table access')
    const { data: allData, error: allError } = await supabase
      .from('audio_pronunciations')
      .select('*')
      .limit(5)
    
    if (allError) {
      console.error('❌ Error accessing table:', allError)
      return
    }
    
    console.log('✅ Table access successful')
    console.log(`📊 Found ${allData.length} records`)
    
    if (allData.length > 0) {
      console.log('\n📝 Sample records:')
      allData.forEach((record, index) => {
        console.log(`${index + 1}. Text: "${record.text}"`)
        console.log(`   File: ${record.file_name}`)
        console.log(`   Category: ${record.category}`)
        console.log('')
      })
    }
    
    // Test 2: Try to query with a specific text from Lesson 8
    console.log('🔍 Test 2: Query specific text')
    const testText = "Et ta mère ? Elle travaille aussi ?"
    console.log(`Searching for: "${testText}"`)
    
    const { data: specificData, error: specificError } = await supabase
      .from('audio_pronunciations')
      .select('*')
      .eq('text', testText)
      .single()
    
    if (specificError) {
      console.error('❌ Specific query error:', specificError)
      
      // Try a different approach - search by lesson_id first
      console.log('\n🔄 Test 3: Search by lesson_id instead')
      const { data: lessonData, error: lessonError } = await supabase
        .from('audio_pronunciations')
        .select('*')
        .eq('lesson_id', 'beginner-8')
        .limit(3)
      
      if (lessonError) {
        console.error('❌ Lesson query error:', lessonError)
      } else {
        console.log('✅ Lesson query successful')
        console.log(`📊 Found ${lessonData.length} records for lesson 8`)
        
        if (lessonData.length > 0) {
          console.log('\n📝 Lesson 8 records:')
          lessonData.forEach((record, index) => {
            console.log(`${index + 1}. Text: "${record.text}"`)
            console.log(`   File: ${record.file_name}`)
            console.log(`   Category: ${record.category}`)
            console.log('')
          })
        }
      }
    } else {
      console.log('✅ Specific query successful')
      console.log('Found record:', specificData)
    }
    
    // Test 4: Check if there are any encoding issues
    console.log('\n🔍 Test 4: Check for encoding issues')
    const { data: encodedData, error: encodedError } = await supabase
      .from('audio_pronunciations')
      .select('text, file_name')
      .ilike('text', '%mère%')
    
    if (encodedError) {
      console.error('❌ ILIKE query error:', encodedError)
    } else {
      console.log('✅ ILIKE query successful')
      console.log(`📊 Found ${encodedData.length} records with "mère"`)
      
      if (encodedData.length > 0) {
        console.log('\n📝 Records with "mère":')
        encodedData.forEach((record, index) => {
          console.log(`${index + 1}. Text: "${record.text}"`)
          console.log(`   File: ${record.file_name}`)
          console.log('')
        })
      }
    }
    
  } catch (error) {
    console.error('❌ Unexpected error:', error)
  }
}

debugAudioQuery()
