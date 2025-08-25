'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function GrammarGuidePage() {
  const [activeSection, setActiveSection] = useState('articles')

  const grammarSections = {
    articles: {
      title: 'Articles & Gender',
      content: [
        {
          concept: 'Definite Articles',
          explanation: 'le (masculine), la (feminine), l\' (before vowels), les (plural)',
          examples: ['le pain (the bread)', 'la viande (the meat)', 'l\'eau (the water)', 'les légumes (the vegetables)']
        },
        {
          concept: 'Indefinite Articles',
          explanation: 'un (masculine), une (feminine), des (plural)',
          examples: ['un gâteau (a cake)', 'une tarte (a tart)', 'des fruits (some fruits)']
        },
        {
          concept: 'Partitive Articles',
          explanation: 'du (masculine), de la (feminine), de l\' (vowels), des (plural)',
          examples: ['du fromage (some cheese)', 'de la salade (some salad)', 'de l\'eau (some water)']
        }
      ]
    },
    verbs: {
      title: 'Essential Verbs',
      content: [
        {
          concept: 'Être (to be)',
          explanation: 'Used for identity, characteristics, and states',
          examples: ['Je suis étudiant (I am a student)', 'Il est français (He is French)', 'Nous sommes contents (We are happy)']
        },
        {
          concept: 'Avoir (to have)',
          explanation: 'Used for possession, age, and many expressions',
          examples: ['J\'ai vingt ans (I am 20 years old)', 'Il a une voiture (He has a car)', 'J\'ai faim (I am hungry)']
        }
      ]
    },
    numbers: {
      title: 'Numbers & Time',
      content: [
        {
          concept: 'Cardinal Numbers',
          explanation: '1-19 are irregular, 20+ follow patterns',
          examples: ['un, deux, trois (1, 2, 3)', 'vingt, trente, quarante (20, 30, 40)']
        },
        {
          concept: 'Time Expressions',
          explanation: 'Use "Il est" + hour + "heure(s)" + minutes',
          examples: ['Il est trois heures (It is 3 o\'clock)', 'Il est quinze heures trente (It is 3:30 PM)']
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 relative overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-200/10 rounded-[48px] blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/10 rounded-[40px] blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-200/10 rounded-[32px] blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            📚 French Grammar Guide
          </h1>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Your comprehensive reference for French grammar concepts. Master the fundamentals 
            and build confidence in your French communication skills.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_16px_48px_rgba(0,0,0,0.1)] p-4 mb-12 border border-white/40">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(grammarSections).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-8 py-4 rounded-[20px] font-medium transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-[0_8px_32px_rgba(59,130,246,0.3)]'
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]'
                }`}
              >
                {grammarSections[section as keyof typeof grammarSections].title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_20px_60px_rgba(0,0,0,0.12)] p-10 mb-12 border border-white/40">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            {grammarSections[activeSection as keyof typeof grammarSections].title}
          </h2>
          
          <div className="space-y-8">
            {grammarSections[activeSection as keyof typeof grammarSections].content.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-400 bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-[20px] border border-blue-200/50 shadow-[inset_0_4px_16px_rgba(59,130,246,0.1)]">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.concept}</h3>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{item.explanation}</p>
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
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-[28px] p-10 text-white text-center shadow-[0_20px_60px_rgba(59,130,246,0.3)] relative overflow-hidden">
          {/* Soft background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-[32px] blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-[24px] blur-2xl"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Ready to Practice?</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Put your grammar knowledge to the test with our interactive lessons
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/lessons/beginner/1" 
                className="bg-white text-blue-600 px-8 py-4 rounded-[20px] font-semibold hover:bg-gray-50 transition-all duration-300 shadow-[0_8px_32px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)] hover:scale-105"
              >
                Start with Lesson 1
              </Link>
              <Link 
                href="/lessons" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-[20px] font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Browse All Lessons
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-lg hover:translate-x-1 transition-all duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
