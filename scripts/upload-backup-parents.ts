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

async function uploadBackupParents() {
  console.log('📤 Uploading backup FINAL "parents" audio back to Supabase...\n')

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Missing Supabase credentials')
    return
  }

  // Path to the backup file
  const backupFile = 'audio-backup/final-parents-fix/parents_Mylene_French_FINAL_1755899935524.mp3'
  
  if (!fs.existsSync(backupFile)) {
    console.error(`❌ Backup file not found: ${backupFile}`)
    return
  }

  console.log(`📁 Found backup file: ${backupFile}`)
  console.log(`📊 File size: ${fs.statSync(backupFile).size} bytes`)

  try {
    // Read the backup file
    const audioBuffer = fs.readFileSync(backupFile)
    const audioData = audioBuffer.toString('base64')
    
    console.log('✅ Backup file read successfully')
    
    // First, delete the current wrong "FIXED" entry
    console.log('\n🗑️ Deleting current wrong "FIXED" entry...')
    
    const currentResponse = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?text=eq.parents`, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'apikey': SUPABASE_KEY
      }
    })

    if (currentResponse.ok) {
      const currentData = await currentResponse.json()
      if (currentData && currentData.length > 0) {
        const currentEntry = currentData[0]
        console.log(`🗑️ Deleting: ${currentEntry.file_name} (ID: ${currentEntry.id})`)
        
        const deleteResponse = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?id=eq.${currentEntry.id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'apikey': SUPABASE_KEY
          }
        })

        if (deleteResponse.ok) {
          console.log('✅ Current entry deleted successfully')
          
          // Also try to delete the file from storage
          try {
            const storageDeleteResponse = await fetch(`${SUPABASE_URL}/storage/v1/object/audio/${currentEntry.file_name}`, {
              method: 'DELETE',
              headers: {
                'Authorization': `Bearer ${SUPABASE_KEY}`,
                'apikey': SUPABASE_KEY
              }
            })
            if (storageDeleteResponse.ok) {
              console.log('✅ Old file deleted from storage')
            }
          } catch (e) {
            console.log('⚠️ Storage deletion failed (this is okay)')
          }
          
        } else {
          console.log(`❌ Failed to delete current entry: ${deleteResponse.status}`)
          return
        }
      }
    }

    // Now upload the backup file
    console.log('\n📤 Uploading backup file to storage...')
    
    const fileName = 'parents_Mylene_French_FINAL_RESTORED.mp3'
    
    const storageResponse = await fetch(`${SUPABASE_URL}/storage/v1/object/audio/${fileName}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=31536000'
      },
      body: audioBuffer
    })

    if (!storageResponse.ok) {
      const errorText = await storageResponse.text()
      console.error(`❌ Storage upload failed: ${storageResponse.status} - ${errorText}`)
      return
    }

    const storageData = await storageResponse.json()
    console.log(`✅ Storage upload successful: ${fileName}`)
    
    // Get the public URL
    const publicUrl = storageData.publicUrl || `${SUPABASE_URL}/storage/v1/object/public/audio/${fileName}`
    console.log(`🔗 Public URL: ${publicUrl}`)

    // Then store reference in database
    console.log('\n💾 Adding database record...')
    
    const dbResponse = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
        'apikey': SUPABASE_KEY
      },
      body: JSON.stringify({
        text: 'parents',
        audio_url: publicUrl,
        voice_id: 'WQKwBV2Uzw1gSGr69N8I',
        voice_name: 'Mylène French',
        category: 'vocabulary',
        lesson_id: 'beginner-2',
        file_name: fileName
      })
    })

    if (!dbResponse.ok) {
      const dbErrorText = await dbResponse.text()
      console.error(`❌ Database insert failed: ${dbResponse.status} - ${dbErrorText}`)
      return
    }

    console.log(`✅ Database insert successful: parents`)
    console.log('\n🎉 Backup restoration complete!')
    console.log('✅ The FINAL "parents" audio is now restored')
    console.log('🔊 It should say just "parents" in French, not "French Pronunciation Parents"!')
    console.log('🎵 Test the vocabulary card now!')

  } catch (error) {
    console.error('❌ Error during backup restoration:', error)
  }
}

uploadBackupParents()
