const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

// Configuration
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function checkLesson9Database() {
  console.log('🔍 Checking Lesson 9 audio records in database...\n')
  
  try {
    // Check for Lesson 9 records specifically
    console.log('📚 Looking for records with lesson_id = "beginner-9"...')
    const { data: lesson9Records, error: lesson9Error } = await supabase
      .from('audio_pronunciations')
      .select('id, text, file_name, lesson_id, category')
      .eq('lesson_id', 'beginner-9')
      .order('created_at', { ascending: true })
    
    if (lesson9Error) {
      console.error('❌ Error fetching Lesson 9 records:', lesson9Error.message)
    } else if (lesson9Records && lesson9Records.length > 0) {
      console.log(`✅ Found ${lesson9Records.length} Lesson 9 records:`)
      lesson9Records.forEach(record => {
        console.log(`   - ${record.file_name}: "${record.text}" (${record.category})`)
      })
    } else {
      console.log('❌ No records found with lesson_id = "beginner-9"')
    }
    
    // Check for records that might be Lesson 9 but with different lesson_id
    console.log('\n🔍 Looking for Lesson 9 audio files by filename pattern...')
    const { data: lesson9Files, error: lesson9FilesError } = await supabase
      .from('audio_pronunciations')
      .select('id, text, file_name, lesson_id, category')
      .or('file_name.like.lesson9_%,file_name.like.vocab_ex_%,file_name.like.conj_main_%,file_name.like.conj_ecouter_%,file_name.like.conj_danser_%,file_name.like.conj_jouer_%,file_name.like.conj_preferer_%')
      .order('created_at', { ascending: true })
    
    if (lesson9FilesError) {
      console.error('❌ Error fetching Lesson 9 files:', lesson9FilesError.message)
    } else if (lesson9Files && lesson9Files.length > 0) {
      console.log(`✅ Found ${lesson9Files.length} Lesson 9 audio files:`)
      lesson9Files.forEach(record => {
        console.log(`   - ${record.file_name}: "${record.text}" (lesson_id: ${record.lesson_id || 'null'})`)
      })
    } else {
      console.log('❌ No Lesson 9 audio files found by filename pattern')
    }
    
    // Check for records with null lesson_id
    console.log('\n🔍 Looking for records with null lesson_id...')
    const { data: nullLessonRecords, error: nullLessonError } = await supabase
      .from('audio_pronunciations')
      .select('id, text, file_name, lesson_id, category')
      .is('lesson_id', null)
      .order('created_at', { ascending: true })
    
    if (nullLessonError) {
      console.error('❌ Error fetching null lesson_id records:', nullLessonError.message)
    } else if (nullLessonRecords && nullLessonRecords.length > 0) {
      console.log(`✅ Found ${nullLessonRecords.length} records with null lesson_id:`)
      nullLessonRecords.slice(0, 10).forEach(record => {
        console.log(`   - ${record.file_name}: "${record.text}" (${record.category})`)
      })
      if (nullLessonRecords.length > 10) {
        console.log(`   ... and ${nullLessonRecords.length - 10} more`)
      }
    } else {
      console.log('❌ No records found with null lesson_id')
    }
    
  } catch (error) {
    console.error('❌ Check failed:', error.message)
  }
}

// Run the script
if (require.main === module) {
  checkLesson9Database()
}

module.exports = { checkLesson9Database }
