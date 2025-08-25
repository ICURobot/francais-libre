const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

// Configuration
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function checkLesson8Audio() {
  console.log('🔍 Checking if Lesson 8 has any audio files...\n')
  
  try {
    // Check for any audio files for Lesson 8
    const { data: lesson8Audio, error: lesson8Error } = await supabase
      .from('audio_pronunciations')
      .select('text, file_name, category')
      .eq('lesson_id', 'beginner-8')
      .order('created_at', { ascending: true })
    
    if (lesson8Error) {
      console.error('❌ Error fetching Lesson 8 audio:', lesson8Error.message)
    } else if (lesson8Audio && lesson8Audio.length > 0) {
      console.log(`✅ Found ${lesson8Audio.length} audio files for Lesson 8:`)
      lesson8Audio.forEach(item => {
        console.log(`   - "${item.text}" (${item.file_name})`)
      })
    } else {
      console.log('❌ No audio files found for Lesson 8')
    }
    
    // Check for any audio files for Lesson 7
    console.log('\n🔍 Checking if Lesson 7 has any audio files...')
    const { data: lesson7Audio, error: lesson7Error } = await supabase
      .from('audio_pronunciations')
      .select('text, file_name, category')
      .eq('lesson_id', 'beginner-7')
      .order('created_at', { ascending: true })
    
    if (lesson7Error) {
      console.error('❌ Error fetching Lesson 7 audio:', lesson7Error.message)
    } else if (lesson7Audio && lesson7Audio.length > 0) {
      console.log(`✅ Found ${lesson7Audio.length} audio files for Lesson 7:`)
      lesson7Audio.forEach(item => {
        console.log(`   - "${item.text}" (${item.file_name})`)
      })
    } else {
      console.log('❌ No audio files found for Lesson 7')
    }
    
    // Check total audio files by lesson
    console.log('\n📚 Total audio files by lesson:')
    const { data: allAudio, error: allAudioError } = await supabase
      .from('audio_pronunciations')
      .select('lesson_id')
      .order('lesson_id', { ascending: true })
    
    if (allAudioError) {
      console.error('❌ Error fetching all audio:', allAudioError.message)
    } else if (allAudio && allAudio.length > 0) {
      const lessonCounts = {}
      allAudio.forEach(item => {
        lessonCounts[item.lesson_id] = (lessonCounts[item.lesson_id] || 0) + 1
      })
      
      Object.entries(lessonCounts).forEach(([lessonId, count]) => {
        console.log(`   ${lessonId}: ${count} audio files`)
      })
    }
    
  } catch (error) {
    console.error('❌ Check failed:', error.message)
  }
}

// Run the script
if (require.main === module) {
  checkLesson8Audio()
}

module.exports = { checkLesson8Audio }
