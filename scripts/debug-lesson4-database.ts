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

async function debugLesson4Database() {
  console.log('🔍 Debugging Lesson 4 database insertion issues...\n')

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Missing Supabase credentials')
    return
  }

  // Lesson 4 examples to check
  const lesson4Examples = [
    "Il est quinze heures trente.",
    "Nous sommes lundi, le trois janvier.",
    "J'ai rendez-vous à dix heures et demie.",
    "Quelle heure est-il? Il est midi.",
    "Mon anniversaire est le vingt-cinq décembre.",
    "Le magasin ouvre à neuf heures du matin."
  ]

  for (const text of lesson4Examples) {
    console.log(`\n--- Checking: "${text}" ---`)
    
    try {
      // Check for exact text match
      const response = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?text=eq.${encodeURIComponent(text)}`, {
        headers: {
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'apikey': SUPABASE_KEY
        }
      })

      if (response.ok) {
        const data = await response.json()
        if (data && data.length > 0) {
          console.log(`❌ Found ${data.length} existing entries:`)
          data.forEach((item: any, index: number) => {
            console.log(`   ${index + 1}. ID: ${item.id}`)
            console.log(`      File: ${item.file_name}`)
            console.log(`      Voice: ${item.voice_name}`)
            console.log(`      Category: ${item.category}`)
            console.log(`      Lesson: ${item.lesson_id}`)
            console.log(`      Created: ${item.created_at}`)
          })
        } else {
          console.log(`✅ No existing entries found`)
        }
      } else {
        console.log(`❌ Error ${response.status}: ${response.statusText}`)
        const errorText = await response.text()
        console.log(`   Error details: ${errorText}`)
      }
    } catch (error) {
      console.error(`❌ Error checking "${text}":`, error)
    }
  }

  // Check for partial matches with "janvier" (one of the words)
  console.log('\n🔍 Checking for partial matches with "janvier"...')
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/audio_pronunciations?text=ilike.*janvier*`, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'apikey': SUPABASE_KEY
      }
    })

    if (response.ok) {
      const data = await response.json()
      if (data && data.length > 0) {
        console.log(`✅ Found ${data.length} partial matches for "janvier":`)
        data.forEach((item: any, index: number) => {
          console.log(`   ${index + 1}. Text: "${item.text}"`)
          console.log(`      File: ${item.file_name}`)
          console.log(`      Voice: ${item.voice_name}`)
          console.log(`      Category: ${item.category}`)
          console.log('')
        })
      } else {
        console.log('❌ No partial matches found for "janvier"')
      }
    } else {
      console.log(`❌ Partial search failed: ${response.status}`)
    }
  } catch (error) {
    console.error('❌ Partial search error:', error)
  }

  console.log('\n🎯 Summary:')
  console.log('   - If entries exist, we need to delete them first')
  console.log('   - If no entries exist, there might be a constraint issue')
  console.log('   - Check the database schema and constraints')
}

debugLesson4Database()






