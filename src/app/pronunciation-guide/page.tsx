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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 relative overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 bg-purple-200/10 rounded-[48px] blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-200/10 rounded-[40px] blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-200/10 rounded-[32px] blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            🎵 French Pronunciation Guide
          </h1>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Master the beautiful sounds of French with our comprehensive pronunciation guide. 
            Learn the secrets to sounding like a native French speaker.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(168,85,247,0.08),0_16px_48px_rgba(0,0,0,0.1)] p-4 mb-12 border border-white/40">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(pronunciationSections).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-8 py-4 rounded-[20px] font-medium transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-[0_8px_32px_rgba(168,85,247,0.3)]'
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]'
                }`}
              >
                {pronunciationSections[section as keyof typeof pronunciationSections].title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[inset_0_8px_32px_rgba(168,85,247,0.08),0_20px_60px_rgba(0,0,0,0.12)] p-10 mb-12 border border-white/40">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            {pronunciationSections[activeSection as keyof typeof pronunciationSections].title}
          </h2>
          
          <div className="space-y-8">
            {pronunciationSections[activeSection as keyof typeof pronunciationSections].content.map((item, index) => (
              <div key={index} className="border-l-4 border-purple-400 bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-[20px] border border-purple-200/50 shadow-[inset_0_4px_16px_rgba(168,85,247,0.1)]">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.concept}</h3>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{item.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 text-lg">Examples:</h4>
                    <ul className="space-y-3">
                      {item.examples.map((example, idx) => (
                        <li key={idx} className="bg-white/80 backdrop-blur-sm p-4 rounded-[16px] border border-white/60 text-gray-700 shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)]">
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 text-lg">Tips:</h4>
                    <ul className="space-y-3">
                      {item.tips.map((tip, idx) => (
                        <li key={idx} className="bg-white/80 backdrop-blur-sm p-4 rounded-[16px] border border-white/60 text-gray-700 shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)]">
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
        <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[inset_0_8px_32px_rgba(168,85,247,0.08),0_20px_60px_rgba(0,0,0,0.12)] p-10 mb-12 border border-white/40">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Practice Common Words</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceWords.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-[20px] border border-purple-200/50 shadow-[inset_0_4px_16px_rgba(168,85,247,0.1)] hover:shadow-[inset_0_4px_16px_rgba(168,85,247,0.15)] transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 text-xl mb-3">{item.word}</h4>
                  <p className="text-purple-700 font-mono text-base mb-3">{item.pronunciation}</p>
                  <p className="text-gray-600 text-base mb-4">{item.translation}</p>
                  <button 
                    onClick={() => ttsService.speak(item.word, 'fr-FR')}
                    className="text-purple-600 hover:text-purple-700 transition-all duration-300 hover:scale-110 transform p-3 rounded-[16px] hover:bg-purple-50"
                  >
                    🔊 Listen
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Practice */}
        <div className="bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-[28px] p-10 text-white text-center mb-12 shadow-[0_20px_60px_rgba(168,85,247,0.3)] relative overflow-hidden">
          {/* Soft background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-[32px] blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-[24px] blur-2xl"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Ready to Practice?</h3>
            <p className="text-purple-100 mb-8 text-lg">
              Test your pronunciation with our interactive exercises
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/lessons/beginner/1" 
                className="bg-white text-purple-600 px-8 py-4 rounded-[20px] font-semibold hover:bg-gray-50 transition-all duration-300 shadow-[0_8px_32px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)] hover:scale-105"
              >
                Start Speaking
              </Link>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-[20px] font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105">
                Take Pronunciation Test
              </button>
            </div>
          </div>
        </div>

        {/* Pronunciation Tips */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[inset_0_8px_32px_rgba(168,85,247,0.08),0_20px_60px_rgba(0,0,0,0.12)] p-10 mb-12 border border-white/40">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">General Tips</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Listen First</h4>
                  <p className="text-gray-600 text-base">Always listen to native speakers before attempting to pronounce words.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl">🔄</span>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Practice Regularly</h4>
                  <p className="text-gray-600 text-base">Consistent practice is key to mastering French pronunciation.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-3xl">📱</span>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Use Technology</h4>
                  <p className="text-gray-600 text-base">Record yourself and compare with native pronunciation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl">🌟</span>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Be Patient</h4>
                  <p className="text-gray-600 text-base">Pronunciation takes time to develop. Don't get discouraged!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TTS Test Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_20px_60px_rgba(0,0,0,0.12)] p-10 mb-12 border border-white/40">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">🔊 TTS System Test</h3>
          <div className="text-center mb-8">
            <p className="text-gray-700 mb-6 text-lg">
              Test the text-to-speech system on your device. This helps diagnose any audio issues.
            </p>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-[16px] mb-6 border border-gray-200/50">
              <p className="text-gray-700 mb-3 font-medium">Device Information:</p>
              <p className="text-sm text-gray-500 font-mono">
                {typeof window !== 'undefined' ? navigator.userAgent : 'Server-side rendering'}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800 text-lg">Test Basic TTS:</h4>
              <button 
                onClick={() => ttsService.speak('Bonjour, comment allez-vous?', 'fr-FR')}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-[16px] hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-[0_8px_24px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_32px_rgba(59,130,246,0.4)] hover:scale-105"
              >
                🔊 Test French Phrase
              </button>
              <button 
                onClick={() => ttsService.speak('Hello, how are you?', 'en-US')}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-[16px] hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-[0_8px_24px_rgba(34,197,94,0.3)] hover:shadow-[0_12px_32px_rgba(34,197,94,0.4)] hover:scale-105"
              >
                🔊 Test English Phrase
              </button>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800 text-lg">Test Individual Words:</h4>
              <button 
                onClick={() => ttsService.speak('bonjour', 'fr-FR')}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-4 rounded-[16px] hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-[0_8px_24px_rgba(168,85,247,0.3)] hover:shadow-[0_12px_32px_rgba(168,85,247,0.4)] hover:scale-105"
              >
                🔊 "bonjour"
              </button>
              <button 
                onClick={() => ttsService.speak('merci', 'fr-FR')}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-4 rounded-[16px] hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-[0_8px_24px_rgba(168,85,247,0.3)] hover:shadow-[0_12px_32px_rgba(168,85,247,0.4)] hover:scale-105"
              >
                🔊 "merci"
              </button>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-3">
              💡 <strong>All Devices:</strong> Uses Google Cloud TTS for best pronunciation quality, with browser TTS as fallback.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              📱 <strong>Mobile Users:</strong> If audio doesn't work, try tapping the screen first or refreshing the page.
            </p>
            <div className="mt-6">
              <button 
                onClick={() => {
                  console.log('🔍 Device Info:', ttsService.getDeviceInfo())
                  console.log('🔍 Testing simple browser TTS...')
                  ttsService.speak('Test', 'en-US')
                }}
                className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-3 rounded-[16px] hover:from-gray-600 hover:to-gray-700 transition-all duration-300 text-base shadow-[0_4px_16px_rgba(107,114,128,0.3)]"
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
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-lg hover:translate-x-1 transition-all duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
