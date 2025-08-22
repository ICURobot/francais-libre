#!/usr/bin/env tsx

// Load environment variables from .env.local (Node.js only)
import { config } from 'dotenv'
config({ path: '.env.local' })

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function searchBonjour() {
  try {
    console.log('🔍 Searching for "bonjour" in database...')
    
    // Search for exact match
    const { data: exactData, error: exactError } = await supabase
      .from('audio_pronunciations')
      .select('*')
      .eq('text', 'bonjour')
    
    if (exactError) {
      console.error('❌ Exact search error:', exactError)
    } else {
      console.log(`✅ Exact matches for "bonjour": ${exactData?.length || 0}`)
      if (exactData && exactData.length > 0) {
        console.log('Exact match:', exactData[0])
      }
    }
    
    // Search for partial matches
    const { data: partialData, error: partialError } = await supabase
      .from('audio_pronunciations')
      .select('*')
      .ilike('text', '%bonjour%')
    
    if (partialError) {
      console.error('❌ Partial search error:', partialError)
    } else {
      console.log(`✅ Partial matches for "bonjour": ${partialData?.length || 0}`)
      if (partialData && partialData.length > 0) {
        console.log('First partial match:', partialData[0])
      }
    }
    
    // List first 10 records to see what's actually stored
    const { data: sampleData, error: sampleError } = await supabase
      .from('audio_pronunciations')
      .select('text')
      .limit(10)
    
    if (sampleError) {
      console.error('❌ Sample data error:', sampleError)
    } else {
      console.log('📝 Sample texts from database:')
      sampleData?.forEach((record, index) => {
        console.log(`${index + 1}. "${record.text}"`)
      })
    }
    
  } catch (error) {
    console.error('❌ Search failed:', error)
  }
}

searchBonjour()
