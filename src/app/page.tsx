'use client'
import { useState, useEffect } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '../../lib/supabase'

export default function Home() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">🇫🇷</div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FrançaisLibre
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">Welcome back!</span>
                  <button 
                    onClick={() => supabase.auth.signOut()}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn French with
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Lessons
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Master French grammar, conversation, and culture with personalized AI tutoring. 
            Core curriculum is completely free, with premium AI features available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition-colors shadow-lg">
              Start Learning Free
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl text-lg font-semibold transition-colors">
              View Lesson Plan
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Grammar Course</h3>
            <p className="text-gray-600">Master all French grammar from basics to advanced with interactive exercises and instant feedback.</p>
            <div className="mt-4 text-sm text-green-600 font-medium">✅ FREE</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Conversation Partner</h3>
            <p className="text-gray-600">Practice real conversations with our GPT-powered French tutor available 24/7.</p>
            <div className="mt-4 text-sm text-blue-600 font-medium">⭐ PREMIUM</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Learning</h3>
            <p className="text-gray-600">AI adapts to your learning style and progress for optimal French acquisition.</p>
            <div className="mt-4 text-sm text-blue-600 font-medium">⭐ PREMIUM</div>
          </div>
        </div>

        {/* Curriculum Preview */}
        <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎓 Free Curriculum Overview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-3">📖 Grammar Fundamentals</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Present tense (-er, -ir, -re verbs)</li>
                <li>• Essential irregular verbs (être, avoir, aller...)</li>
                <li>• Articles and gender rules</li>
                <li>• Pronouns and object placement</li>
                <li>• Past tenses (passé composé, imparfait)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-3">🗣️ Practical Conversations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Restaurant and café dialogues</li>
                <li>• Travel and transportation</li>
                <li>• Shopping and daily activities</li>
                <li>• Family and personal topics</li>
                <li>• Cultural immersion content</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
