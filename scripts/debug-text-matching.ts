#!/usr/bin/env tsx

import { config } from 'dotenv'
import { createClient } from '@supabase/supabase-js'

// Load environment variables
config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function debugTextMatching() {
  console.log('🔍 Debugging text matching issues...\n')

  try {
    // Get all records from the database
    const { data: allRecords, error } = await supabase
      .from('audio_pronunciations')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) {
      console.error('❌ Database query failed:', error)
      return
    }

    console.log(`📊 Total records: ${allRecords.length}\n`)

    // Show first 10 records
    console.log('📋 First 10 records:')
    allRecords.slice(0, 10).forEach((record, index) => {
      console.log(`${index + 1}. Text: "${record.text}"`)
      console.log(`   Category: ${record.category}`)
      console.log(`   Voice: ${record.voice_name}`)
      console.log(`   Filename: ${record.file_name}`)
      console.log('')
    })

    // Test specific text searches
    const testTexts = [
      'bonjour',
      'suis',
      'es',
      'est',
      'sommes',
      'êtes',
      'sont'
    ]

    console.log('🔍 Testing text searches:')
    for (const testText of testTexts) {
      const { data: searchResult, error: searchError } = await supabase
        .from('audio_pronunciations')
        .select('*')
        .eq('text', testText)
        .single()

      if (searchError) {
        console.log(`❌ "${testText}": ${searchError.message}`)
      } else if (searchResult) {
        console.log(`✅ "${testText}": Found - ${searchResult.file_name}`)
      } else {
        console.log(`❌ "${testText}": No results`)
      }
    }

    // Check for partial matches
    console.log('\n🔍 Checking for partial matches:')
    for (const testText of testTexts) {
      const { data: partialResults, error: partialError } = await supabase
        .from('audio_pronunciations')
        .select('*')
        .ilike('text', `%${testText}%`)

      if (partialError) {
        console.log(`❌ Partial search for "${testText}": ${partialError.message}`)
      } else if (partialResults && partialResults.length > 0) {
        console.log(`✅ "${testText}": Found ${partialResults.length} partial matches`)
        partialResults.forEach(result => {
          console.log(`   - "${result.text}" (${result.file_name})`)
        })
      } else {
        console.log(`❌ "${testText}": No partial matches`)
      }
    }

  } catch (error) {
    console.error('❌ Script failed:', error)
  }
}

// Run the debug function
debugTextMatching()
