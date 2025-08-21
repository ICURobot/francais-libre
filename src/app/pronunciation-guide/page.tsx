'use client'

/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react'
import Link from 'next/link'
import { ttsService } from '../../../lib/services/ttsService'

export default function PronunciationGuidePage() {
  const [activeSection, setActiveSection] = useState('basics')

  const pronunciationSections = {
    basics: {
      title: 'French Pronunciation Basics',
      content: [
        {
          concept: 'French R Sound',
          description: 'The French "r" is pronounced in the back of the throat, similar to gargling.',
          examples: ['rouge (red)', 'merci (thank you)', 'paris (Paris)'],
          tips: ['Practice by saying "ah" and then adding the r sound', 'Think of it as a soft growl']
        },
        {
          concept: 'Nasal Vowels',
          description: 'French has nasal vowels that are pronounced through the nose.',
          examples: ['bon (good)', 'pain (bread)', 'vin (wine)'],
          tips: ['Hold your nose while speaking to feel the difference', 'Practice with "on", "an", "in" sounds']
        },
        {
          concept: 'Silent Letters',
          description: 'Many French words have silent letters, especially at the end.',
          examples: ['paris (silent s)', 'beaucoup (silent p)', 'temps (silent s)'],
          tips: ['Learn common patterns', 'Listen to native speakers']
        }
      ]
    },
    vowels: {
      title: 'Vowel Sounds',
      content: [
        {
          concept: 'é vs è',
          description: 'é is closed (like "ay"), è is open (like "eh").',
          examples: ['été (summer)', 'père (father)', 'café (coffee)'],
          tips: ['é sounds like "ay" in "day"', 'è sounds like "e" in "bed"']
        },
        {
          concept: 'ou vs u',
          description: 'ou is like "oo" in "moon", u is like "ee" with rounded lips.',
          examples: ['vous (you)', 'tu (you)', 'nous (we)'],
          tips: ['Practice rounding your lips for "u"', 'ou is easier - like "oo"']
        },
        {
          concept: 'ai vs ei',
          description: 'ai is like "e" in "bed", ei is like "ay" in "day".',
          examples: ['mais (but)', 'seize (sixteen)', 'faire (to do)'],
          tips: ['ai is more open', 'ei is more closed']
        }
      ]
    },
    consonants: {
      title: 'Consonant Sounds',
      content: [
        {
          concept: 'Th Sound',
          description: 'French doesn\'t have the English "th" sound. "th" becomes "t".',
          examples: ['thé (tea)', 'théâtre (theater)', 'thèse (thesis)'],
          tips: ['Say "t" instead of "th"', 'Practice with "t" sound']
        },
        {
          concept: 'H Sound',
          description: 'French "h" is usually silent, but can affect pronunciation.',
          examples: ['hôtel (hotel)', 'homme (man)', 'heure (hour)'],
          tips: ['Most "h" sounds are silent', 'Some "h" sounds are aspirated']
        },
        {
          concept: 'J Sound',
          description: 'French "j" is like "zh" in "measure".',
          examples: ['je (I)', 'jour (day)', 'juin (June)'],
          tips: ['Think "zh" not "j"', 'Practice with "measure" sound']
        }
      ]
    }
  }

  const practiceWords = [
    { word: 'bonjour', pronunciation: 'bohn-ZHOOR', translation: 'hello' },
    { word: 'merci', pronunciation: 'mair-SEE', translation: 'thank you' },
    { word: 's\'il vous plaît', pronunciation: 'seel voo PLAY', translation: 'please' },
    { word: 'au revoir', pronunciation: 'oh ruh-VWAHR', translation: 'goodbye' },
    { word: 'comment allez-vous', pronunciation: 'koh-MAHN tah-lay VOO', translation: 'how are you' },
    { word: 'je m\'appelle', pronunciation: 'zhuh ma-PELL', translation: 'my name is' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🎵 French Pronunciation Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the beautiful sounds of French with our comprehensive pronunciation guide. 
            Learn the secrets to sounding like a native French speaker.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {Object.keys(pronunciationSections).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {pronunciationSections[section as keyof typeof pronunciationSections].title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {pronunciationSections[activeSection as keyof typeof pronunciationSections].title}
          </h2>
          
          <div className="space-y-8">
            {pronunciationSections[activeSection as keyof typeof pronunciationSections].content.map((item, index) => (
              <div key={index} className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.concept}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
                    <ul className="space-y-2">
                      {item.examples.map((example, idx) => (
                        <li key={idx} className="bg-white p-3 rounded border text-gray-700">
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Tips:</h4>
                    <ul className="space-y-2">
                      {item.tips.map((tip, idx) => (
                        <li key={idx} className="bg-white p-3 rounded border text-gray-700">
                          💡 {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Words Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Practice Common Words</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {practiceWords.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{item.word}</h4>
                  <p className="text-purple-700 font-mono text-sm mb-2">{item.pronunciation}</p>
                  <p className="text-gray-600 text-sm">{item.translation}</p>
                  <button 
                    onClick={() => ttsService.speak(item.word, 'fr-FR')}
                    className="mt-3 text-purple-600 hover:text-purple-700 transition-colors hover:scale-105 transform transition-transform"
                  >
                    🔊 Listen
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Practice */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Practice?</h3>
          <p className="text-purple-100 mb-6">
            Test your pronunciation with our interactive exercises
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/lessons/beginner/1" 
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start Speaking
            </Link>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">
              Take Pronunciation Test
            </button>
          </div>
        </div>

        {/* Pronunciation Tips */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">General Tips</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Listen First</h4>
                  <p className="text-gray-600">Always listen to native speakers before attempting to pronounce words.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Practice Regularly</h4>
                  <p className="text-gray-600">Consistent practice is key to mastering French pronunciation.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📱</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Use Technology</h4>
                  <p className="text-gray-600">Record yourself and compare with native pronunciation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🌟</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Be Patient</h4>
                  <p className="text-gray-600">Pronunciation takes time to develop. Don't get discouraged!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TTS Test Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🔊 TTS System Test</h3>
          <div className="text-center mb-6">
            <p className="text-gray-600 mb-4">
              Test the text-to-speech system on your device. This helps diagnose any audio issues.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2">Device Information:</p>
              <p className="text-xs text-gray-500 font-mono">
                {typeof window !== 'undefined' ? navigator.userAgent : 'Server-side rendering'}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Test Basic TTS:</h4>
              <button 
                onClick={() => ttsService.speak('Bonjour, comment allez-vous?', 'fr-FR')}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                🔊 Test French Phrase
              </button>
              <button 
                onClick={() => ttsService.speak('Hello, how are you?', 'en-US')}
                className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                🔊 Test English Phrase
              </button>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Test Individual Words:</h4>
              <button 
                onClick={() => ttsService.speak('bonjour', 'fr-FR')}
                className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                🔊 "bonjour"
              </button>
              <button 
                onClick={() => ttsService.speak('merci', 'fr-FR')}
                className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                🔊 "merci"
              </button>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500">
              💡 <strong>All Devices:</strong> Uses Google Cloud TTS for best pronunciation quality, with browser TTS as fallback.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              📱 <strong>Mobile Users:</strong> If audio doesn't work, try tapping the screen first or refreshing the page.
            </p>
            <div className="mt-4">
              <button 
                onClick={() => {
                  console.log('🔍 Device Info:', ttsService.getDeviceInfo())
                  console.log('🔍 Testing simple browser TTS...')
                  ttsService.speak('Test', 'en-US')
                }}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm"
              >
                🔍 Debug TTS System
              </button>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
