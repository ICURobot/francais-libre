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

// The failing phrases from the network log
const failingPhrases = [
  "Elle a une belle maison.",
  "Nous avons beaucoup d'amis.",
  "Ils ont de la chance.",
  "J'ai soif et j'ai faim."
]

async function debugMultiplePhrases() {
  console.log('🔍 Debugging multiple failing phrases...\n')

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Missing Supabase credentials')
    return
  }

  for (const phrase of failingPhrases) {
    console.log(`🔍 Checking: "${phrase}"`)
    
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?text=eq.${encodeURIComponent(phrase)}`, {
        headers: {
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'apikey': SUPABASE_KEY
        }
      })

      if (response.ok) {
        const data = await response.json()
        if (data && data.length > 0) {
          console.log(`✅ FOUND: "${phrase}"`)
          console.log(`   File: ${data[0].file_name}`)
          console.log(`   Category: ${data[0].category}`)
        } else {
          console.log(`❌ NOT FOUND: "${phrase}"`)
        }
      } else {
        console.log(`❌ ERROR ${response.status}: "${phrase}"`)
      }
      
      console.log('')
      
    } catch (error) {
      console.error(`❌ Error checking "${phrase}":`, error)
    }
  }

  // Check for partial matches
  console.log('🔍 Checking for partial matches...')
  for (const phrase of failingPhrases) {
    const searchTerm = phrase.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '%')
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
          console.log(`🔍 Partial matches for "${phrase}":`)
          data.forEach((item: any, index: number) => {
            console.log(`   ${index + 1}. "${item.text}" -> ${item.file_name}`)
          })
        }
      }
      console.log('')
    } catch (error) {
      console.error(`❌ Partial search error for "${phrase}":`, error)
    }
  }
}

debugMultiplePhrases()
