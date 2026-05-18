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

async function checkDatabaseSchema() {
  console.log('🔍 Checking database schema by examining existing records...\n')

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Missing Supabase credentials')
    return
  }

  try {
    // Get a few existing records to see the schema
    const response = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?select=*&limit=3`, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'apikey': SUPABASE_KEY
      }
    })

    if (response.ok) {
      const data = await response.json()
      if (data && data.length > 0) {
        console.log(`✅ Found ${data.length} existing records. Schema analysis:`)
        console.log('')
        
        // Show the first record structure
        const firstRecord = data[0]
        console.log('📋 First record structure:')
        console.log(JSON.stringify(firstRecord, null, 2))
        console.log('')
        
        // Show all available columns
        console.log('🏗️ Available columns:')
        const columns = Object.keys(firstRecord)
        columns.forEach((column, index) => {
          console.log(`   ${index + 1}. ${column}: ${typeof firstRecord[column]} (${firstRecord[column]})`)
        })
        console.log('')
        
        // Check if any records have lesson_id
        const hasLessonId = data.some((record: any) => record.lesson_id !== undefined)
        console.log(`📚 lesson_id column exists: ${hasLessonId}`)
        
        // Check if any records have voice_id
        const hasVoiceId = data.some((record: any) => record.voice_id !== undefined)
        console.log(`🎤 voice_id column exists: ${hasVoiceId}`)
        
        // Check if any records have context
        const hasContext = data.some((record: any) => record.context !== undefined)
        console.log(`📝 context column exists: ${hasContext}`)
        
      } else {
        console.log('❌ No existing records found')
      }
    } else {
      console.log(`❌ Error ${response.status}: ${response.statusText}`)
    }
  } catch (error) {
    console.error('❌ Error checking schema:', error)
  }

  // Also try to get table info
  console.log('\n🔍 Trying to get table information...')
  try {
    const tableResponse = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?select=*&limit=0`, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'apikey': SUPABASE_KEY
      }
    })

    if (tableResponse.ok) {
      console.log('✅ Table exists and is accessible')
      console.log(`📊 Response headers:`, Object.fromEntries(tableResponse.headers.entries()))
    } else {
      console.log(`❌ Table check failed: ${tableResponse.status}`)
    }
  } catch (error) {
    console.error('❌ Table check error:', error)
  }
}

checkDatabaseSchema()
















