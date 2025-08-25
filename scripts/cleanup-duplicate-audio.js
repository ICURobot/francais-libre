require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function cleanupDuplicateAudio() {
  console.log('🧹 Cleaning up duplicate audio records...\n')
  
  try {
    // Step 1: Find all duplicate texts
    console.log('🔍 Step 1: Finding duplicate texts...')
    const { data: duplicates, error: dupError } = await supabase
      .rpc('find_duplicate_texts')
    
    if (dupError) {
      console.log('⚠️  RPC function not available, using manual approach...')
      
      // Manual approach: get all records and group by text
      const { data: allRecords, error: allError } = await supabase
        .from('audio_pronunciations')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (allError) {
        console.error('❌ Error fetching all records:', allError)
        return
      }
      
      // Group by text
      const textGroups = {}
      allRecords.forEach(record => {
        if (!textGroups[record.text]) {
          textGroups[record.text] = []
        }
        textGroups[record.text].push(record)
      })
      
      // Find duplicates
      const duplicateTexts = Object.entries(textGroups)
        .filter(([text, records]) => records.length > 1)
        .map(([text, records]) => ({ text, records }))
      
      console.log(`📊 Found ${duplicateTexts.length} texts with duplicates`)
      
      // Step 2: Keep only the most recent record for each duplicate text
      console.log('\n🗑️  Step 2: Removing duplicate records...')
      let totalRemoved = 0
      
      for (const { text, records } of duplicateTexts) {
        // Keep the first record (most recent due to DESC order)
        const toKeep = records[0]
        const toRemove = records.slice(1)
        
        console.log(`\n📝 Text: "${text}"`)
        console.log(`   Keeping: ${toKeep.file_name} (${toKeep.created_at})`)
        console.log(`   Removing: ${toRemove.length} duplicates`)
        
        for (const record of toRemove) {
          console.log(`     - ${record.file_name} (${record.created_at})`)
          
          // Delete the duplicate record
          const { error: deleteError } = await supabase
            .from('audio_pronunciations')
            .delete()
            .eq('id', record.id)
          
          if (deleteError) {
            console.error(`     ❌ Failed to delete: ${deleteError.message}`)
          } else {
            console.log(`     ✅ Deleted successfully`)
            totalRemoved++
          }
        }
      }
      
      console.log(`\n🎉 Cleanup complete! Removed ${totalRemoved} duplicate records`)
      
    } else {
      console.log('✅ Found duplicates using RPC function')
      console.log('Duplicates:', duplicates)
    }
    
    // Step 3: Verify cleanup
    console.log('\n🔍 Step 3: Verifying cleanup...')
    const { data: finalCount, error: countError } = await supabase
      .from('audio_pronunciations')
      .select('*', { count: 'exact' })
    
    if (countError) {
      console.error('❌ Error getting final count:', countError)
    } else {
      console.log(`📊 Final record count: ${finalCount.length}`)
    }
    
  } catch (error) {
    console.error('❌ Unexpected error:', error)
  }
}

cleanupDuplicateAudio()
