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

async function debugSupermarcheSentence() {
  console.log('🔍 Debugging "Je fais mes courses au supermarché." 406 errors...\n')

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Missing Supabase credentials')
    return
  }

  // Check for exact text match
  console.log('🔍 Checking for exact text match: "Je fais mes courses au supermarché."')
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?text=eq.Je+fais+mes+courses+au+supermarch%C3%A9.`, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'apikey': SUPABASE_KEY
      }
    })

    if (response.ok) {
      const data = await response.json()
      if (data && data.length > 0) {
        console.log(`✅ Found ${data.length} entries for "Je fais mes courses au supermarché.":`)
        data.forEach((item: any, index: number) => {
          console.log(`   ${index + 1}. ID: ${item.id}`)
          console.log(`      File: ${item.file_name}`)
          console.log(`      Voice: ${item.voice_name}`)
          console.log(`      Category: ${item.category}`)
          console.log(`      Lesson: ${item.lesson_id}`)
          console.log(`      Created: ${item.created_at}`)
          console.log('')
        })
      } else {
        console.log('❌ No entries found for "Je fais mes courses au supermarché."')
      }
    } else {
      console.log(`❌ Error ${response.status}: ${response.statusText}`)
      const errorText = await response.text()
      console.log(`   Error details: ${errorText}`)
    }
  } catch (error) {
    console.error('❌ Error checking "Je fais mes courses au supermarché.":', error)
  }

  // Check for partial matches
  console.log('🔍 Checking for partial matches containing "supermarché"')
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?text=ilike.*supermarché*`, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'apikey': SUPABASE_KEY
      }
    })

    if (response.ok) {
      const data = await response.json()
      if (data && data.length > 0) {
        console.log(`✅ Found ${data.length} partial matches for "supermarché":`)
        data.forEach((item: any, index: number) => {
          console.log(`   ${index + 1}. Text: "${item.text}"`)
          console.log(`      File: ${item.file_name}`)
          console.log(`      Voice: ${item.voice_name}`)
          console.log(`      Category: ${item.category}`)
          console.log('')
        })
      } else {
        console.log('❌ No partial matches found for "supermarché"')
      }
    } else {
      console.log(`❌ Partial search failed: ${response.status}`)
    }
  } catch (error) {
    console.error('❌ Partial search error:', error)
  }

  // Check what the app is actually searching for (the encoded URL)
  console.log('\n🔍 Checking what the app is actually searching for...')
  const originalText = "Je fais mes courses au supermarché."
  const encodedText = encodeURIComponent(originalText)
  console.log(`Original: "${originalText}"`)
  console.log(`Encoded: "${encodedText}"`)
  console.log(`App searches for: audio_pronunciations?select=*&text=eq.${encodedText}`)
}

debugSupermarcheSentence()
















