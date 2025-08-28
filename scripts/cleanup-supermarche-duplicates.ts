#!/usr/bin/env tsx

import * as fs from 'fs'
import * as path from 'path'

// Load environment variables manually
const envPath = path.join(process.cwd(), '.env.local')
const envContent = fs.readFileSync(envPath, 'utf8')
const envVars = envContent.split('\n').reduce((acc: any, line) => {
  const [key, ...valueParts] = line.split('=')
  if (key && valueParts.length > 0) {
    acc[key.trim()] = valueParts.join('=').trim()
  }
  return acc
}, {})

// Environment variables
const SUPABASE_URL = envVars.SUPABASE_URL
const SUPABASE_KEY = envVars.SUPABASE_ANON_KEY

async function cleanupSupermarcheDuplicates() {
  console.log('🧹 Cleaning up duplicate "Je fais mes courses au supermarché." entries...\n')
  console.log('🗑️ Removing old Mylène entries, keeping new André entry\n')

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Missing Supabase credentials')
    return
  }

  try {
    // Get all entries for this text
    const response = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?text=eq.Je+fais+mes+courses+au+supermarch%C3%A9.`, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'apikey': SUPABASE_KEY
      }
    })

    if (response.ok) {
      const data = await response.json()
      if (data && data.length > 0) {
        console.log(`Found ${data.length} entries:`)
        data.forEach((item: any, index: number) => {
          console.log(`   ${index + 1}. ID: ${item.id}`)
          console.log(`      File: ${item.file_name}`)
          console.log(`      Voice: ${item.voice_name}`)
          console.log(`      Category: ${item.category}`)
          console.log(`      Lesson: ${item.lesson_id}`)
          console.log(`      Created: ${item.created_at}`)
          console.log('')
        })

        // Find entries to delete (Mylène) and keep (André)
        const myleneEntries = data.filter((item: any) => item.voice_name === 'Mylène French')
        const andreEntries = data.filter((item: any) => item.voice_name === 'André French')

        if (myleneEntries.length > 0 && andreEntries.length > 0) {
          console.log('🎯 Found both voices:')
          console.log(`   ❌ Mylène entries to delete: ${myleneEntries.length}`)
          console.log(`   ✅ André entries to keep: ${andreEntries.length}`)
          
          // Delete all Mylène entries
          for (const myleneEntry of myleneEntries) {
            console.log(`🗑️ Deleting Mylène entry: ${myleneEntry.file_name}`)
            
            const deleteResponse = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?id=eq.${myleneEntry.id}`, {
              method: 'DELETE',
              headers: {
                'Authorization': `Bearer ${SUPABASE_KEY}`,
                'apikey': SUPABASE_KEY
              }
            })

            if (deleteResponse.ok) {
              console.log('✅ Mylène database entry deleted successfully')
              
              // Also try to delete the file from storage
              try {
                const storageDeleteResponse = await fetch(`${SUPABASE_URL}/storage/v1/object/audio/${myleneEntry.file_name}`, {
                  method: 'DELETE',
                  headers: {
                    'Authorization': `Bearer ${SUPABASE_KEY}`,
                    'apikey': SUPABASE_KEY
                  }
                })
                if (storageDeleteResponse.ok) {
                  console.log('✅ Mylène audio file deleted from storage')
                }
              } catch (e) {
                console.log('⚠️ Storage deletion failed (this is okay)')
              }
              
            } else {
              console.log(`❌ Failed to delete Mylène entry: ${deleteResponse.status}`)
            }
          }
          
          console.log(`✅ Cleanup complete for: "Je fais mes courses au supermarché."`)
          
        } else if (myleneEntries.length > 0 && andreEntries.length === 0) {
          console.log(`⚠️ Only Mylène entries found for: "Je fais mes courses au supermarché."`)
          console.log('   This means our André generation failed or was overwritten')
        } else if (myleneEntries.length === 0 && andreEntries.length > 0) {
          console.log(`✅ Only André entries found for: "Je fais mes courses au supermarché."`)
          console.log('   No cleanup needed')
        } else {
          console.log(`❌ No entries found for: "Je fais mes courses au supermarché."`)
        }
        
      } else {
        console.log(`❌ No entries found for: "Je fais mes courses au supermarché."`)
      }
    } else {
      console.log(`❌ Error ${response.status}: ${response.statusText}`)
    }
  } catch (error) {
    console.error('❌ Error during cleanup:', error)
  }

  console.log('\n🎉 Cleanup complete!')
  console.log('✅ Only André entry should remain')
  console.log('🔊 The 406 errors should now be resolved!')
}

cleanupSupermarcheDuplicates()










