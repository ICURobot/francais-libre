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

async function debugSpecificText() {
  console.log('🔍 Debugging text matching for "J\'ai vingt-cinq ans"...\n')

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Missing Supabase credentials')
    return
  }

  const searchTexts = [
    "J'ai vingt-cinq ans.",
    "J'ai vingt-cinq ans",
    "J'ai vingt-cinq ans!",
    "J'ai vingt-cinq ans?",
    "J'ai vingt-cinq ans",
    "J'ai vingt-cinq ans.",
    "J'ai vingt-cinq ans",
    "J'ai vingt-cinq ans.",
    "J'ai vingt-cinq ans",
    "J'ai vingt-cinq ans."
  ]

  for (const text of searchTexts) {
    try {
      console.log(`🔍 Searching for: "${text}"`)
      
      const response = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?text=eq.${encodeURIComponent(text)}`, {
        headers: {
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'apikey': SUPABASE_KEY
        }
      })

      if (response.ok) {
        const data = await response.json()
        if (data && data.length > 0) {
          console.log(`✅ FOUND: "${text}"`)
          console.log(`   File: ${data[0].file_name}`)
          console.log(`   URL: ${data[0].audio_url}`)
          console.log(`   Category: ${data[0].category}`)
        } else {
          console.log(`❌ NOT FOUND: "${text}"`)
        }
      } else {
        console.log(`❌ ERROR ${response.status}: "${text}"`)
        const errorText = await response.text()
        console.log(`   Error: ${errorText}`)
      }
      
      console.log('')
      
    } catch (error) {
      console.error(`❌ Error searching for "${text}":`, error)
    }
  }

  // Also check for partial matches
  console.log('🔍 Checking for partial matches...')
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?text=ilike.*vingt-cinq*`, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'apikey': SUPABASE_KEY
      }
    })

    if (response.ok) {
      const data = await response.json()
      if (data && data.length > 0) {
        console.log(`✅ Found ${data.length} partial matches:`)
        data.forEach((item: any, index: number) => {
          console.log(`   ${index + 1}. "${item.text}" -> ${item.file_name}`)
        })
      } else {
        console.log('❌ No partial matches found')
      }
    } else {
      console.log(`❌ Partial search failed: ${response.status}`)
    }
  } catch (error) {
    console.error('❌ Partial search error:', error)
  }
}

debugSpecificText()
