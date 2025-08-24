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

async function deleteMyleneKeepAndre() {
  console.log('🗑️ Deleting Mylène "parents" audio, keeping André...\n')

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Missing Supabase credentials')
    return
  }

  try {
    // Get current entries
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
          console.log(`      Voice: ${item.voice_name}`)
          console.log(`      Created: ${item.created_at}`)
          console.log('')
        })

        // Find Mylène entry to delete
        const myleneEntry = data.find((item: any) => item.voice_name === 'Mylène French')
        const andreEntry = data.find((item: any) => item.voice_name === 'André French')

        if (myleneEntry && andreEntry) {
          console.log('🎯 Found both voices:')
          console.log(`   ❌ Mylène (to delete): ${myleneEntry.file_name}`)
          console.log(`   ✅ André (to keep): ${andreEntry.file_name}`)
          
          console.log('\n🗑️ Deleting Mylène entry...')
          
          // Delete Mylène's database entry
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

            console.log('\n🎉 Cleanup complete!')
            console.log('✅ Only André\'s "parents" audio remains')
            console.log('🔊 André should pronounce "parents" with better French accent!')
            console.log('🇫🇷 Test the vocabulary card now!')
            
          } else {
            console.log(`❌ Failed to delete Mylène entry: ${deleteResponse.status}`)
          }
          
        } else {
          console.log('❌ Could not find both Mylène and André entries')
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

deleteMyleneKeepAndre()
