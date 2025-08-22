'use client'

import { useState } from 'react'
import { audioService } from '../../../lib/services/audioService'
import { elevenLabsService } from '../../../lib/services/elevenLabsService'
import { audioStorageService } from '../../../lib/services/audioStorageService'

export default function TestAudioPage() {
  const [testResults, setTestResults] = useState<{
    elevenLabs?: boolean;
    storage?: boolean;
    audioService?: boolean;
    voices?: Array<{ id: string; name: string; category: string }>;
    storageInfo?: { fileCount: number; totalSizeMB: number } | { error: { message: string } };
    usageInfo?: { character_count: number; character_limit: number } | { error: { message: string } };
  }>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [testText, setTestText] = useState('Bonjour Excusezmoi cette place estelle libre Mylene')

  const runTests = async () => {
    setIsLoading(true)
    const results: any = {}

    try {
      // Test 1: ElevenLabs Connection
      console.log('🧪 Testing ElevenLabs connection...')
      results.elevenLabs = await elevenLabsService.testConnection()
      console.log(`ElevenLabs: ${results.elevenLabs ? '✅' : '❌'}`)

      // Test 2: Supabase Storage Connection
      console.log('🧪 Testing Supabase Storage connection...')
      results.storage = await audioStorageService.testConnection()
      console.log(`Supabase Storage: ${results.storage ? '✅' : '❌'}`)

      // Test 3: Audio Service System Test
      console.log('🧪 Testing Audio Service system...')
      results.audioService = await audioService.testSystem()
      console.log(`Audio Service: ${results.audioService ? '✅' : '❌'}`)

      // Test 4: Voice Information
      console.log('🧪 Checking available voices...')
      const voices = elevenLabsService.getVoices()
      results.voices = voices
      console.log(`Available voices: ${voices.length}`)

      // Test 5: Storage Information
      console.log('🧪 Checking storage information...')
      try {
        const storageInfo = await audioStorageService.getStorageInfo()
        results.storageInfo = storageInfo
        console.log(`Files: ${storageInfo.fileCount}, Size: ${storageInfo.totalSizeMB} MB`)
      } catch (error) {
        results.storageInfo = { error: error }
        console.log(`Storage info: ❌ ${error}`)
      }

      // Test 6: Usage Information
      console.log('🧪 Checking ElevenLabs usage...')
      try {
        const usageInfo = await elevenLabsService.getUsageInfo()
        results.usageInfo = usageInfo
        console.log(`Usage info: ✅ Available`)
      } catch (error) {
        results.usageInfo = { error: error }
        console.log(`Usage info: ❌ ${error}`)
      }

    } catch (error) {
      console.error('❌ Test failed:', error)
      results.error = error
    }

    setTestResults(results)
    setIsLoading(false)
  }

  const testAudioPlayback = async () => {
    try {
      console.log(`🔊 Testing audio playback for: "${testText}"`)
      const success = await audioService.playAudio(testText)
      console.log(`Audio playback: ${success ? '✅ Success' : '❌ Failed'}`)
      
      if (success) {
        alert(`✅ Audio playback successful for: "${testText}"`)
      } else {
        alert(`❌ Audio playback failed for: "${testText}"`)
      }
    } catch (error) {
      console.error('Audio playback test failed:', error)
      alert(`❌ Audio playback error: ${error}`)
    }
  }

  const generateTestAudio = async () => {
    try {
      console.log(`🎵 Generating test audio for: "${testText}"`)
      const response = await elevenLabsService.generateAudio({
        text: testText,
        voiceId: 'WQKwBV2Uzw1gSGr69N8I', // Mylène
        fileName: `test_${testText}_${Date.now()}.mp3`
      })
      
      if (response.success) {
        alert(`✅ Audio generated successfully!\nFile: ${response.fileName}`)
        console.log('Generated audio:', response)
      } else {
        alert(`❌ Audio generation failed: ${response.error}`)
      }
    } catch (error) {
      console.error('Audio generation test failed:', error)
      alert(`❌ Audio generation error: ${error}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          🧪 Audio System Test
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            System Tests
          </h2>
          
          <button
            onClick={runTests}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors mb-6"
          >
            {isLoading ? '🧪 Running Tests...' : '🧪 Run All Tests'}
          </button>

          {Object.keys(testResults).length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Test Results:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-2">ElevenLabs Connection</h4>
                  <span className={`text-lg ${testResults.elevenLabs ? 'text-green-600' : 'text-red-600'}`}>
                    {testResults.elevenLabs ? '✅ Connected' : '❌ Failed'}
                  </span>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-2">Supabase Storage</h4>
                  <span className={`text-lg ${testResults.storage ? 'text-green-600' : 'text-red-600'}`}>
                    {testResults.storage ? '✅ Connected' : '❌ Failed'}
                  </span>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-2">Audio Service</h4>
                  <span className={`text-lg ${testResults.audioService ? 'text-green-600' : 'text-red-600'}`}>
                    {testResults.audioService ? '✅ Working' : '❌ Failed'}
                  </span>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-2">Available Voices</h4>
                  <span className="text-lg text-blue-600">
                    {testResults.voices ? testResults.voices.length : '0'} voices
                  </span>
                </div>
              </div>

              {testResults.storageInfo && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-2">Storage Information</h4>
                  {testResults.storageInfo.error ? (
                    <span className="text-red-600">❌ {testResults.storageInfo.error.message}</span>
                  ) : (
                    <div className="text-sm text-gray-600">
                      <p>Files: {testResults.storageInfo.fileCount}</p>
                      <p>Size: {testResults.storageInfo.totalSizeMB} MB</p>
                    </div>
                  )}
                </div>
              )}

              {testResults.usageInfo && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-2">ElevenLabs Usage</h4>
                  {testResults.usageInfo.error ? (
                    <span className="text-red-600">❌ {testResults.usageInfo.error.message}</span>
                  ) : (
                    <span className="text-green-600">✅ Usage info available</span>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Audio Playback Test
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="text"
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              placeholder="Enter French text to test"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={testAudioPlayback}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              🔊 Test Playback
            </button>
          </div>

          <div className="text-sm text-gray-600">
            <p>• This will test if stored audio exists and can be played</p>
            <p>• If no stored audio exists, it will fail (which is expected initially)</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Audio Generation Test
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="text"
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              placeholder="Enter French text to generate audio for"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={generateTestAudio}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              🎵 Generate Audio
            </button>
          </div>

          <div className="text-sm text-gray-600">
            <p>• This will generate audio using ElevenLabs API</p>
            <p>• It will use your Mylène voice and consume API credits</p>
            <p>• Generated audio will be stored in Supabase Storage</p>
          </div>
        </div>
      </div>
    </div>
  )
}
