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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            📚 French Grammar Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive reference for French grammar concepts. Master the fundamentals 
            and build confidence in your French communication skills.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {Object.keys(grammarSections).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {grammarSections[section as keyof typeof grammarSections].title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {grammarSections[activeSection as keyof typeof grammarSections].title}
          </h2>
          
          <div className="space-y-8">
            {grammarSections[activeSection as keyof typeof grammarSections].content.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.concept}</h3>
                <p className="text-gray-700 mb-4">{item.explanation}</p>
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
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Practice?</h3>
          <p className="text-blue-100 mb-6">
            Put your grammar knowledge to the test with our interactive lessons
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/lessons/beginner/1" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start with Lesson 1
            </Link>
            <Link 
              href="/lessons" 
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Browse All Lessons
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
