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
const ANDRE_VOICE_ID = envVars.ANDRE_VOICE_ID || 'qNc8cbRJLnPqGTjuVcKa'

async function testLesson4Insert() {
  console.log('🧪 Testing Lesson 4 database insertion with detailed error reporting...\n')

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Missing Supabase credentials')
    return
  }

  // Test data for one Lesson 4 example
  const testData = {
    text: "Il est quinze heures trente.",
    file_name: "Il_est_quinze_heures_trente__Andre_French_1755902034098.mp3",
    category: "grammar",
    lesson_id: "beginner-4",
    voice_name: "André French",
    voice_id: ANDRE_VOICE_ID,
    context: "Lesson 4 grammar example: Il est quinze heures trente."
  }

  console.log('📝 Test data:')
  console.log(JSON.stringify(testData, null, 2))
  console.log('')

  try {
    // Try to insert the test record
    const response = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'apikey': SUPABASE_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation' // Get the full response
      },
      body: JSON.stringify(testData)
    })

    console.log(`📊 Response Status: ${response.status} ${response.statusText}`)
    console.log(`📋 Response Headers:`)
    for (const [key, value] of response.headers.entries()) {
      console.log(`   ${key}: ${value}`)
    }

    if (response.ok) {
      const data = await response.json()
      console.log(`✅ SUCCESS! Inserted record:`)
      console.log(JSON.stringify(data, null, 2))
    } else {
      console.log(`❌ FAILED! Error details:`)
      const errorText = await response.text()
      console.log(`   Error body: ${errorText}`)
      
      // Try to parse as JSON for better error details
      try {
        const errorJson = JSON.parse(errorText)
        console.log(`   Parsed error: ${JSON.stringify(errorJson, null, 2)}`)
      } catch (e) {
        console.log(`   Raw error text: ${errorText}`)
      }
    }

  } catch (error) {
    console.error(`❌ Network/Request error:`, error)
  }

  // Also check the database schema to see what constraints exist
  console.log('\n🔍 Checking database schema...')
  try {
    const schemaResponse = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?select=*&limit=1`, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'apikey': SUPABASE_KEY
      }
    })

    if (schemaResponse.ok) {
      console.log('✅ Schema check successful - table exists and is accessible')
    } else {
      console.log(`❌ Schema check failed: ${schemaResponse.status}`)
    }
  } catch (error) {
    console.error('❌ Schema check error:', error)
  }
}

testLesson4Insert()

