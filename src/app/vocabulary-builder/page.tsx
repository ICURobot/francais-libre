'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function VocabularyBuilderPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const vocabularyCategories = {
    all: 'All Categories',
    family: 'Family',
    food: 'Food & Dining',
    numbers: 'Numbers & Time',
    colors: 'Colors',
    objects: 'Common Objects',
    greetings: 'Greetings & Introductions'
  }

  const vocabularyData = [
    // Family
    { word: 'le père', translation: 'father', category: 'family', pronunciation: 'luh PAIR' },
    { word: 'la mère', translation: 'mother', category: 'family', pronunciation: 'la MAIR' },
    { word: 'le frère', translation: 'brother', category: 'family', pronunciation: 'luh frair' },
    { word: 'la sœur', translation: 'sister', category: 'family', pronunciation: 'la sur' },
    { word: 'les parents', translation: 'parents', category: 'family', pronunciation: 'lay pa-RAHN' },
    
    // Food
    { word: 'le pain', translation: 'bread', category: 'food', pronunciation: 'luh PAHN' },
    { word: 'la viande', translation: 'meat', category: 'food', pronunciation: 'la vee-AHNND' },
    { word: 'le fromage', translation: 'cheese', category: 'food', pronunciation: 'luh fro-MAHZH' },
    { word: 'la salade', translation: 'salad', category: 'food', pronunciation: 'la sa-LAHD' },
    { word: 'les légumes', translation: 'vegetables', category: 'food', pronunciation: 'lay lay-GUUM' },
    
    // Numbers & Time
    { word: 'un', translation: 'one', category: 'numbers', pronunciation: 'uhn' },
    { word: 'deux', translation: 'two', category: 'numbers', pronunciation: 'duh' },
    { word: 'trois', translation: 'three', category: 'numbers', pronunciation: 'trwah' },
    { word: 'lundi', translation: 'Monday', category: 'numbers', pronunciation: 'luhn-DEE' },
    { word: 'mardi', translation: 'Tuesday', category: 'numbers', pronunciation: 'mar-DEE' },
    
    // Colors
    { word: 'rouge', translation: 'red', category: 'colors', pronunciation: 'ROOZH' },
    { word: 'bleu', translation: 'blue', category: 'colors', pronunciation: 'BLUH' },
    { word: 'vert', translation: 'green', category: 'colors', pronunciation: 'VAIR' },
    { word: 'noir', translation: 'black', category: 'colors', pronunciation: 'NWAHR' },
    { word: 'blanc', translation: 'white', category: 'colors', pronunciation: 'BLAHN' },
    
    // Objects
    { word: 'la table', translation: 'table', category: 'objects', pronunciation: 'la TAH-bluh' },
    { word: 'la chaise', translation: 'chair', category: 'objects', pronunciation: 'la SHAYZ' },
    { word: 'le lit', translation: 'bed', category: 'objects', pronunciation: 'luh LEE' },
    { word: 'la voiture', translation: 'car', category: 'objects', pronunciation: 'la vwa-TUUR' },
    
    // Greetings
    { word: 'bonjour', translation: 'hello/good morning', category: 'greetings', pronunciation: 'bohn-ZHOOR' },
    { word: 'bonsoir', translation: 'good evening', category: 'greetings', pronunciation: 'bohn-SWAHR' },
    { word: 'au revoir', translation: 'goodbye', category: 'greetings', pronunciation: 'oh ruh-VWAHR' },
    { word: 'merci', translation: 'thank you', category: 'greetings', pronunciation: 'mair-SEE' }
  ]

  const filteredVocabulary = vocabularyData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = item.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.translation.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-16 relative overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 bg-green-200/10 rounded-[48px] blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/10 rounded-[40px] blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-200/10 rounded-[32px] blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            📖 Vocabulary Builder
          </h1>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Expand your French vocabulary with our comprehensive word collection. 
            Practice pronunciation, learn new words, and track your progress.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(34,197,94,0.08),0_16px_48px_rgba(0,0,0,0.1)] p-8 mb-12 border border-white/40">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Search Bar */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search words or translations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-[16px] focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 text-lg"
              />
            </div>
            
            {/* Category Filter */}
            <div className="md:w-56">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-[16px] focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 text-lg"
              >
                {Object.entries(vocabularyCategories).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-gray-700 text-lg">
              Showing <span className="font-semibold text-green-600">{filteredVocabulary.length}</span> words
              {selectedCategory !== 'all' && ` in ${vocabularyCategories[selectedCategory as keyof typeof vocabularyCategories]}`}
            </p>
          </div>
        </div>

        {/* Vocabulary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredVocabulary.map((item, index) => (
            <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-[20px] shadow-[inset_0_8px_32px_rgba(34,197,94,0.08),0_16px_48px_rgba(0,0,0,0.1)] p-8 hover:shadow-[inset_0_8px_32px_rgba(34,197,94,0.12),0_24px_80px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] border border-white/40">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-[16px] font-medium border border-green-200/50">
                  {vocabularyCategories[item.category as keyof typeof vocabularyCategories]}
                </span>
                <button 
                  className="text-green-600 hover:text-green-700 transition-colors p-2 rounded-[12px] hover:bg-green-50"
                  title="Listen to pronunciation"
                >
                  🔊
                </button>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.word}</h3>
              <p className="text-gray-700 mb-3 text-lg">{item.translation}</p>
              <p className="text-sm text-gray-500 font-mono bg-gray-50 px-3 py-2 rounded-[12px]">{item.pronunciation}</p>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="text-green-600 hover:text-green-700 text-sm font-medium hover:translate-x-1 transition-all duration-300">
                  Practice this word →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Practice Section */}
        <div className="bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-[28px] p-10 text-white text-center mb-12 shadow-[0_20px_60px_rgba(34,197,94,0.3)] relative overflow-hidden">
          {/* Soft background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-[32px] blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-[24px] blur-2xl"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Ready to Practice?</h3>
            <p className="text-green-100 mb-8 text-lg">
              Test your vocabulary knowledge with our interactive exercises
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/lessons/beginner/1" 
                className="bg-white text-green-600 px-8 py-4 rounded-[20px] font-semibold hover:bg-gray-50 transition-all duration-300 shadow-[0_8px_32px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)] hover:scale-105"
              >
                Start Learning
              </Link>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-[20px] font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105">
                Take Vocabulary Quiz
              </button>
            </div>
          </div>
        </div>

        {/* Progress Tracking */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_20px_60px_rgba(0,0,0,0.12)] p-10 mb-12 border border-white/40">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Progress</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-[20px] shadow-[inset_0_4px_16px_rgba(59,130,246,0.2)] group-hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-3">0</div>
                <div className="text-gray-700 font-medium">Words Mastered</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-[20px] shadow-[inset_0_4px_16px_rgba(34,197,94,0.2)] group-hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-green-600 mb-3">0</div>
                <div className="text-gray-700 font-medium">Categories Completed</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-[20px] shadow-[inset_0_4px_16px_rgba(168,85,247,0.2)] group-hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-purple-600 mb-3">0%</div>
                <div className="text-gray-700 font-medium">Overall Progress</div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
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
