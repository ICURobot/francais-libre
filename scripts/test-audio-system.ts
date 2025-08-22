#!/usr/bin/env tsx

// Load environment variables
import 'dotenv/config'

import { audioService } from '../lib/services/audioService'
import { elevenLabsService } from '../lib/services/elevenLabsService'
import { audioStorageService } from '../lib/services/audioStorageService'

async function testAudioSystem() {
  console.log('🧪 Testing Audio System')
  console.log('========================')
  
  try {
    // Test 1: ElevenLabs Connection
    console.log('\n1️⃣ Testing ElevenLabs connection...')
    const elevenLabsTest = await elevenLabsService.testConnection()
    console.log(`   ElevenLabs: ${elevenLabsTest ? '✅' : '❌'}`)
    
    // Test 2: Supabase Storage Connection
    console.log('\n2️⃣ Testing Supabase Storage connection...')
    const storageTest = await audioStorageService.testConnection()
    console.log(`   Supabase Storage: ${storageTest ? '✅' : '❌'}`)
    
    // Test 3: Audio Service System Test
    console.log('\n3️⃣ Testing Audio Service system...')
    const systemTest = await audioService.testSystem()
    console.log(`   Audio Service: ${systemTest ? '✅' : '❌'}`)
    
    // Test 4: Voice Information
    console.log('\n4️⃣ Checking available voices...')
    const voices = elevenLabsService.getVoices()
    voices.forEach(voice => {
      console.log(`   Voice: ${voice.name} (${voice.category}) - ID: ${voice.id}`)
    })
    
    // Test 5: Storage Information
    console.log('\n5️⃣ Checking storage information...')
    try {
      const storageInfo = await audioStorageService.getStorageInfo()
      console.log(`   Files: ${storageInfo.fileCount}`)
      console.log(`   Size: ${storageInfo.totalSizeMB} MB`)
    } catch (error) {
      console.log(`   Storage info: ❌ ${error}`)
    }
    
    // Test 6: Usage Information
    console.log('\n6️⃣ Checking ElevenLabs usage...')
    try {
      const usageInfo = await elevenLabsService.getUsageInfo()
      console.log(`   Usage info: ✅ Available`)
      console.log(`   Details: ${JSON.stringify(usageInfo, null, 2)}`)
    } catch (error) {
      console.log(`   Usage info: ❌ ${error}`)
    }
    
    // Summary
    console.log('\n📊 Test Summary')
    console.log('================')
    console.log(`ElevenLabs: ${elevenLabsTest ? '✅' : '❌'}`)
    console.log(`Supabase Storage: ${storageTest ? '✅' : '❌'}`)
    console.log(`Audio Service: ${systemTest ? '✅' : '❌'}`)
    console.log(`Available Voices: ${voices.length}`)
    
    if (elevenLabsTest && storageTest && systemTest) {
      console.log('\n🎉 All tests passed! Your audio system is ready to use!')
      console.log('\n🚀 Next steps:')
      console.log('   1. Run the database setup SQL in Supabase')
      console.log('   2. Run the audio generation script')
      console.log('   3. Test audio playback in your lessons')
    } else {
      console.log('\n❌ Some tests failed. Please check your configuration.')
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error)
  }
}

// Run the test
if (require.main === module) {
  testAudioSystem()
}

export { testAudioSystem }
