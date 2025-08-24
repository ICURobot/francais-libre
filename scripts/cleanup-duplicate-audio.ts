const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

interface AudioRecord {
  id: string
  text: string
  file_name: string
  created_at: string
  voice_name: string
}

async function cleanupDuplicateAudio() {
  console.log('🧹 Starting cleanup of duplicate audio files...')
  
  // Debug environment variables
  console.log('Environment variables:')
  console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Not set')
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Not set')
  
  // Create Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  const supabase = createClient(supabaseUrl, supabaseAnonKey)
  
  try {
    // Get all audio records
    const { data: allAudio, error: fetchError } = await supabase
      .from('audio_pronunciations')
      .select('*')
      .order('created_at', { ascending: true })

    if (fetchError) {
      console.error('❌ Error fetching audio records:', fetchError)
      return
    }

    if (!allAudio || allAudio.length === 0) {
      console.log('ℹ️ No audio records found')
      return
    }

    console.log(`📊 Found ${allAudio.length} total audio records`)

    // Group by text to find duplicates
    const textGroups = new Map<string, AudioRecord[]>()
    
    allAudio.forEach(record => {
      const text = record.text.trim()
      if (!textGroups.has(text)) {
        textGroups.set(text, [])
      }
      textGroups.get(text)!.push(record)
    })

    // Find duplicates
    const duplicates = new Map<string, AudioRecord[]>()
    let totalDuplicates = 0
    
    textGroups.forEach((records, text) => {
      if (records.length > 1) {
        duplicates.set(text, records)
        totalDuplicates += records.length - 1
      }
    })

    console.log(`🔍 Found ${duplicates.size} texts with duplicates`)
    console.log(`📈 Total duplicate records: ${totalDuplicates}`)

    if (duplicates.size === 0) {
      console.log('✅ No duplicates found')
      return
    }

    // Process duplicates
    let deletedCount = 0
    
    for (const [text, records] of duplicates) {
      console.log(`\n📝 Processing: "${text}"`)
      console.log(`   Found ${records.length} records`)
      
      // Keep the oldest record (first created)
      const toKeep = records[0]
      const toDelete = records.slice(1)
      
      console.log(`   Keeping: ${toKeep.file_name} (created: ${toKeep.created_at})`)
      
      for (const record of toDelete) {
        console.log(`   Deleting: ${record.file_name} (created: ${record.created_at})`)
        
        try {
          // Delete from database
          const { error: deleteError } = await supabase
            .from('audio_pronunciations')
            .delete()
            .eq('id', record.id)

          if (deleteError) {
            console.error(`      ❌ Database delete failed:`, deleteError)
          } else {
            console.log(`      ✅ Database record deleted`)
            deletedCount++
          }

          // Note: We're not deleting from storage to avoid breaking existing references
          // The storage cleanup can be done separately if needed
          
        } catch (error) {
          console.error(`      ❌ Error deleting record:`, error)
        }
      }
    }

    console.log(`\n🎉 Cleanup complete!`)
    console.log(`📊 Deleted ${deletedCount} duplicate database records`)
    console.log(`💡 Note: Storage files were not deleted to avoid breaking references`)

  } catch (error) {
    console.error('❌ Cleanup failed:', error)
  }
}

// Run the cleanup
cleanupDuplicateAudio().catch(console.error)
