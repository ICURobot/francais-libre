#!/usr/bin/env tsx

// Load environment variables from .env.local (Node.js only)
import { config } from 'dotenv'
config({ path: '.env.local' })

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testDatabase() {
  try {
    console.log('🔍 Testing database connection...')
    
    // Test basic connection
    const { data: testData, error: testError } = await supabase
      .from('audio_pronunciations')
      .select('count')
      .limit(1)
    
    if (testError) {
      console.error('❌ Database connection failed:', testError)
      return
    }
    
    console.log('✅ Database connection successful!')
    
    // Check table structure
    const { data: structureData, error: structureError } = await supabase
      .from('audio_pronunciations')
      .select('*')
      .limit(5)
    
    if (structureError) {
      console.error('❌ Table structure error:', structureError)
      return
    }
    
    console.log('📊 Table structure check:')
    console.log('Columns found:', Object.keys(structureData[0] || {}))
    console.log('Sample record:', structureData[0])
    
    // Count total records
    const { count, error: countError } = await supabase
      .from('audio_pronunciations')
      .select('*', { count: 'exact', head: true })
    
    if (countError) {
      console.error('❌ Count error:', countError)
      return
    }
    
    console.log(`📈 Total records in table: ${count}`)
    
    // Test specific text search
    const { data: searchData, error: searchError } = await supabase
      .from('audio_pronunciations')
      .select('*')
      .eq('text', 'bonjour')
      .single()
    
    if (searchError) {
      console.error('❌ Text search error:', searchError)
    } else {
      console.log('✅ Found "bonjour" audio:', searchData)
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error)
  }
}

testDatabase()
