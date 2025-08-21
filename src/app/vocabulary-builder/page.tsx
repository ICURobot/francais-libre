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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            📖 Vocabulary Builder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expand your French vocabulary with our comprehensive word collection. 
            Practice pronunciation, learn new words, and track your progress.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search words or translations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="md:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {Object.entries(vocabularyCategories).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-blue-600">{filteredVocabulary.length}</span> words
              {selectedCategory !== 'all' && ` in ${vocabularyCategories[selectedCategory as keyof typeof vocabularyCategories]}`}
            </p>
          </div>
        </div>

        {/* Vocabulary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredVocabulary.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                  {vocabularyCategories[item.category as keyof typeof vocabularyCategories]}
                </span>
                <button 
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                  title="Listen to pronunciation"
                >
                  🔊
                </button>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.word}</h3>
              <p className="text-gray-600 mb-2">{item.translation}</p>
              <p className="text-sm text-gray-500 font-mono">{item.pronunciation}</p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Practice this word →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Practice Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Practice?</h3>
          <p className="text-green-100 mb-6">
            Test your vocabulary knowledge with our interactive exercises
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/lessons/beginner/1" 
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start Learning
            </Link>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition">
              Take Vocabulary Quiz
            </button>
          </div>
        </div>

        {/* Progress Tracking */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Progress</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
              <div className="text-gray-600">Words Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">0</div>
              <div className="text-gray-600">Categories Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">0%</div>
              <div className="text-gray-600">Overall Progress</div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
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
