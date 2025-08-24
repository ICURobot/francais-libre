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

// The three failing examples
const failingExamples = [
  "Je voudrais un café, s'il vous plaît.",
  "Combien ça coûte?",
  "Nous avons froid en hiver."
]

async function debugLesson3Examples() {
  console.log('🔍 Debugging Lesson 3 examples that are still failing...\n')

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Missing Supabase credentials')
    return
  }

  for (const example of failingExamples) {
    console.log(`🔍 Checking: "${example}"`)
    
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?text=eq.${encodeURIComponent(example)}`, {
        headers: {
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'apikey': SUPABASE_KEY
        }
      })

      if (response.ok) {
        const data = await response.json()
        if (data && data.length > 0) {
          console.log(`✅ FOUND: "${example}"`)
          console.log(`   File: ${data[0].file_name}`)
          console.log(`   Voice: ${data[0].voice_name}`)
          console.log(`   Category: ${data[0].category}`)
          console.log(`   Lesson: ${data[0].lesson_id}`)
        } else {
          console.log(`❌ NOT FOUND: "${example}"`)
        }
      } else {
        console.log(`❌ ERROR ${response.status}: "${example}"`)
        const errorText = await response.text()
        console.log(`   Error: ${errorText}`)
      }
      
      console.log('')
      
    } catch (error) {
      console.error(`❌ Error checking "${example}":`, error)
    }
  }

  // Check for partial matches to see if there are similar entries
  console.log('🔍 Checking for partial matches...')
  for (const example of failingExamples) {
    const searchTerm = example.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '%')
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?text=ilike.*${searchTerm}*`, {
        headers: {
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'apikey': SUPABASE_KEY
        }
      })

      if (response.ok) {
        const data = await response.json()
        if (data && data.length > 0) {
          console.log(`🔍 Partial matches for "${example}":`)
          data.forEach((item: any, index: number) => {
            console.log(`   ${index + 1}. "${item.text}" -> ${item.file_name}`)
          })
        }
      }
      console.log('')
    } catch (error) {
      console.error(`❌ Partial search error for "${example}":`, error)
    }
  }

  // Also check what the app is actually searching for (the encoded URLs)
  console.log('🔍 Checking what the app is actually searching for...')
  for (const example of failingExamples) {
    const encodedText = encodeURIComponent(example)
    console.log(`Original: "${example}"`)
    console.log(`Encoded: "${encodedText}"`)
    console.log('')
  }
}

debugLesson3Examples()

