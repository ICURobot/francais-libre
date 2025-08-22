#!/usr/bin/env tsx

import { readFileSync } from 'fs'
import { join } from 'path'

// Load .env.local manually
try {
  const envPath = join(process.cwd(), '.env.local')
  const envContent = readFileSync(envPath, 'utf8')
  
  envContent.split('\n').forEach(line => {
    if (line && !line.startsWith('#')) {
      const [key, ...valueParts] = line.split('=')
      if (key && valueParts.length > 0) {
        const value = valueParts.join('=')
        process.env[key] = value
      }
    }
  })
} catch (error) {
  console.error('❌ Failed to load .env.local:', error)
  process.exit(1)
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('🔍 Testing Supabase connectivity...')
console.log('URL:', SUPABASE_URL)
console.log('Key:', SUPABASE_KEY ? `${SUPABASE_KEY.substring(0, 20)}...` : '❌ Missing')

// Test 1: Check if we can query the database
async function testDatabase() {
  console.log('\n📊 Testing database connection...')
  
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?select=count`, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'apikey': SUPABASE_KEY
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      console.log('✅ Database query successful:', data)
    } else {
      console.log('❌ Database query failed:', response.status, response.statusText)
    }
  } catch (error) {
    console.log('❌ Database test error:', error)
  }
}

// Test 2: Check if we can access storage
async function testStorage() {
  console.log('\n📁 Testing storage access...')
  
  try {
    const response = await fetch(`${SUPABASE_URL}/storage/v1/bucket/audio`, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'apikey': SUPABASE_KEY
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      console.log('✅ Storage access successful:', data)
    } else {
      console.log('❌ Storage access failed:', response.status, response.statusText)
    }
  } catch (error) {
    console.log('❌ Storage test error:', error)
  }
}

// Test 3: Check RLS policies
async function testRLS() {
  console.log('\n🔐 Testing RLS policies...')
  
  try {
    // Try to insert a test record
    const response = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY
      },
      body: JSON.stringify({
        text: 'TEST_RLS_CHECK',
        audio_url: 'https://example.com/test.mp3',
        voice_id: 'TEST',
        voice_name: 'TEST',
        category: 'test',
        file_name: 'test.mp3'
      })
    })
    
    if (response.ok) {
      console.log('✅ RLS allows INSERT')
      // Clean up test record
      await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?text=eq.TEST_RLS_CHECK`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'apikey': SUPABASE_KEY
        }
      })
    } else {
      const errorText = await response.text()
      console.log('❌ RLS blocks INSERT:', response.status, errorText)
    }
  } catch (error) {
    console.log('❌ RLS test error:', error)
  }
}

async function runTests() {
  await testDatabase()
  await testStorage()
  await testRLS()
}

runTests()
