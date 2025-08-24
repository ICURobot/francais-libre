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

async function debugParentsAudio() {
  console.log('🔍 Debugging "parents" audio 406 errors...\n')

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Missing Supabase credentials')
    return
  }

  // Check for exact text match
  console.log('🔍 Checking for exact text match: "parents"')
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
        console.log(`✅ Found ${data.length} entries for "parents":`)
        data.forEach((item: any, index: number) => {
          console.log(`   ${index + 1}. File: ${item.file_name}`)
          console.log(`      URL: ${item.audio_url}`)
          console.log(`      Category: ${item.category}`)
          console.log(`      Lesson: ${item.lesson_id}`)
          console.log(`      Created: ${item.created_at}`)
          console.log('')
        })
      } else {
        console.log('❌ No entries found for "parents"')
      }
    } else {
      console.log(`❌ Error ${response.status}: ${response.statusText}`)
      const errorText = await response.text()
      console.log(`   Error details: ${errorText}`)
    }
  } catch (error) {
    console.error('❌ Error checking "parents":', error)
  }

  // Check for partial matches
  console.log('🔍 Checking for partial matches containing "parents"')
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?text=ilike.*parents*`, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'apikey': SUPABASE_KEY
      }
    })

    if (response.ok) {
      const data = await response.json()
      if (data && data.length > 0) {
        console.log(`✅ Found ${data.length} partial matches for "parents":`)
        data.forEach((item: any, index: number) => {
          console.log(`   ${index + 1}. Text: "${item.text}"`)
          console.log(`      File: ${item.file_name}`)
          console.log(`      Category: ${item.category}`)
          console.log(`      Lesson: ${item.lesson_id}`)
          console.log('')
        })
      } else {
        console.log('❌ No partial matches found for "parents"')
      }
    } else {
      console.log(`❌ Partial search failed: ${response.status}`)
    }
  } catch (error) {
    console.error('❌ Partial search error:', error)
  }

  // Check for the sentence too
  console.log('🔍 Checking for "Mes parents habitent à Lyon."')
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?text=eq.Mes+parents+habitent+%C3%A0+Lyon.`, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'apikey': SUPABASE_KEY
      }
    })

    if (response.ok) {
      const data = await response.json()
      if (data && data.length > 0) {
        console.log(`✅ Found ${data.length} entries for the sentence:`)
        data.forEach((item: any, index: number) => {
          console.log(`   ${index + 1}. File: ${item.file_name}`)
          console.log(`      URL: ${item.audio_url}`)
          console.log(`      Category: ${item.category}`)
          console.log(`      Lesson: ${item.lesson_id}`)
          console.log('')
        })
      } else {
        console.log('❌ No entries found for the sentence')
      }
    } else {
      console.log(`❌ Error ${response.status}: ${response.statusText}`)
    }
  } catch (error) {
    console.error('❌ Error checking sentence:', error)
  }

  // Check total count
  console.log('🔍 Checking total audio entries in database')
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?select=count`, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'apikey': SUPABASE_KEY
      }
    })

    if (response.ok) {
      const data = await response.json()
      console.log(`📊 Total audio entries in database: ${data[0]?.count || 'Unknown'}`)
    } else {
      console.log(`❌ Count query failed: ${response.status}`)
    }
  } catch (error) {
    console.error('❌ Count query error:', error)
  }
}

debugParentsAudio()
