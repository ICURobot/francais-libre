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

async function restoreFinalParents() {
  console.log('🔄 Restoring the FINAL "parents" audio that was accidentally deleted...\n')

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Missing Supabase credentials')
    return
  }

  // First, let's see what we currently have
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

        // We want to keep the FIXED one for now, but we need to regenerate the FINAL one
        console.log('🎯 We need to regenerate the FINAL audio that says just "parents" in French')
        console.log('📝 The current FIXED one says "French Pronunciation Parents" (which is wrong)')
        
      } else {
        console.log('❌ No entries found for "parents"')
      }
    } else {
      console.log(`❌ Error ${response.status}: ${response.statusText}`)
    }
  } catch (error) {
    console.error('❌ Error checking current state:', error)
  }

  console.log('\n💡 Solution: We need to regenerate the FINAL audio file')
  console.log('🎵 The backup file should be in: audio-backup/final-parents-fix/')
  console.log('📁 Check that folder for the correct audio file')
}

restoreFinalParents()
