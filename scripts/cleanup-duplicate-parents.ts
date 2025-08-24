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

async function cleanupDuplicateParents() {
  console.log('🧹 Cleaning up duplicate "parents" audio entries...\n')

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Missing Supabase credentials')
    return
  }

  // First, let's see what we have
  console.log('🔍 Current "parents" entries in database:')
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?text=eq.parents`, {
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
          console.log(`      Created: ${item.created_at}`)
          console.log(`      Lesson: ${item.lesson_id}`)
          console.log('')
        })

        // Find the old entry to delete (the one without "FIXED" in filename)
        const oldEntry = data.find((item: any) => !item.file_name.includes('FIXED'))
        const newEntry = data.find((item: any) => item.file_name.includes('FIXED'))

        if (oldEntry && newEntry) {
          console.log('🎯 Found duplicate entries:')
          console.log(`   ❌ OLD (to delete): ${oldEntry.file_name} (ID: ${oldEntry.id})`)
          console.log(`   ✅ NEW (to keep): ${newEntry.file_name} (ID: ${newEntry.id})`)
          
          console.log('\n🗑️ Deleting old entry...')
          
          // Delete the old database entry
          const deleteResponse = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?id=eq.${oldEntry.id}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${SUPABASE_KEY}`,
              'apikey': SUPABASE_KEY
            }
          })

          if (deleteResponse.ok) {
            console.log('✅ Old database entry deleted successfully')
            
            // Now try to delete the old file from storage
            console.log('🗑️ Deleting old file from storage...')
            const oldFileName = oldEntry.file_name
            
            const storageDeleteResponse = await fetch(`${SUPABASE_URL}/storage/v1/object/audio/${oldFileName}`, {
              method: 'DELETE',
              headers: {
                'Authorization': `Bearer ${SUPABASE_KEY}`,
                'apikey': SUPABASE_KEY
              }
            })

            if (storageDeleteResponse.ok) {
              console.log('✅ Old audio file deleted from storage')
            } else {
              console.log(`⚠️ Storage deletion failed: ${storageDeleteResponse.status}`)
              console.log('   (This is okay - the database entry is the important part)')
            }

            console.log('\n🎉 Cleanup complete!')
            console.log('✅ Only the new French pronunciation audio remains')
            console.log('🔊 The 406 errors should now be resolved!')
            
          } else {
            console.log(`❌ Failed to delete old entry: ${deleteResponse.status}`)
            const errorText = await deleteResponse.text()
            console.log(`   Error: ${errorText}`)
          }
          
        } else {
          console.log('❌ Could not identify old vs new entries')
        }
        
      } else {
        console.log('❌ No entries found for "parents"')
      }
    } else {
      console.log(`❌ Error ${response.status}: ${response.statusText}`)
    }
  } catch (error) {
    console.error('❌ Error during cleanup:', error)
  }
}

cleanupDuplicateParents()
