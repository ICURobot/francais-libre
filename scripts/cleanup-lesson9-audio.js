const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

// Configuration
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function cleanupLesson9Audio() {
  console.log('🧹 Cleaning up Lesson 9 audio database records...\n')
  
  try {
    // Delete all Lesson 9 audio records from database
    console.log('🗑️ Deleting all Lesson 9 audio records from database...')
    const { data: deleteResult, error: deleteError } = await supabase
      .from('audio_pronunciations')
      .delete()
      .eq('lesson_id', 'beginner-9')
    
    if (deleteError) {
      console.error('❌ Error deleting Lesson 9 records:', deleteError.message)
      return
    }
    
    console.log(`✅ Deleted ${deleteResult?.length || 0} Lesson 9 audio records from database`)
    
    // Verify deletion
    console.log('\n🔍 Verifying deletion...')
    const { data: remainingRecords, error: checkError } = await supabase
      .from('audio_pronunciations')
      .select('id, text, file_name')
      .eq('lesson_id', 'beginner-9')
    
    if (checkError) {
      console.error('❌ Error checking remaining records:', checkError.message)
      return
    }
    
    if (remainingRecords && remainingRecords.length > 0) {
      console.log(`⚠️ Warning: ${remainingRecords.length} records still remain:`)
      remainingRecords.forEach(record => {
        console.log(`   - ${record.file_name}: "${record.text}"`)
      })
    } else {
      console.log('✅ All Lesson 9 audio records successfully deleted from database')
    }
    
    console.log('\n🎯 Next steps:')
    console.log('1. Run the updated generate-lesson9-audio.js script')
    console.log('2. This will create new database records with normalized text (no accents)')
    console.log('3. Frontend will then be able to find the audio files')
    
  } catch (error) {
    console.error('❌ Cleanup failed:', error.message)
  }
}

// Run the script
if (require.main === module) {
  cleanupLesson9Audio()
}

module.exports = { cleanupLesson9Audio }
