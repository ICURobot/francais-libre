'use client'
import { useState, useEffect } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '../../lib/supabase'

export default function Home() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🇫🇷</div>
              <span className="text-2xl font-bold text-gray-900">
                Français<span className="text-blue-600">Libre</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">Welcome back!</span>
                  <button 
                    onClick={() => supabase.auth.signOut()}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Master French with <span className="text-yellow-300">AI-Powered</span> Learning
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Join thousands learning French for free with personalized AI tutoring, interactive grammar lessons, and real conversation practice
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-300">
              🚀 Start Learning Now - Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900">
              ▶️ Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Interactive Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete French Learning Journey</h2>
            <p className="text-xl text-gray-600">
              Master French through our comprehensive curriculum
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Grammar Course</h3>
              <p className="text-gray-600 mb-4">Master all French grammar from basics to advanced with interactive exercises.</p>
              <div className="text-sm text-green-600 font-medium">✅ FREE</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Conversation Partner</h3>
              <p className="text-gray-600 mb-4">Practice real conversations with our AI tutor available 24/7.</p>
              <div className="text-sm text-blue-600 font-medium">⭐ PREMIUM</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Learning</h3>
              <p className="text-gray-600 mb-4">AI adapts to your learning style and progress.</p>
              <div className="text-sm text-blue-600 font-medium">⭐ PREMIUM</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Learning Plan</h2>
            <p className="text-xl text-gray-600">
              Start with our free plan and upgrade when ready
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$0</div>
                <div className="text-gray-600">Forever</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>200+ Grammar Lessons</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Basic Progress Tracking</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Community Access</span>
                </li>
              </ul>
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900">
                Get Started Free
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
              <div className="text-center mb-8">
                <div className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full inline-block mb-3">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$4.99</div>
                <div className="text-gray-600">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Unlimited AI Tutor Access</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Advanced Analytics</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                Start 7-Day Free Trial
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200">
              <div className="text-center mb-8">
                <div className="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full inline-block mb-3">
                  Best Value
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">$9.99</div>
                <div className="text-gray-600">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Everything in Premium</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Advanced Speech Analysis</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Cultural Deep-Dive Content</span>
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
                Start 14-Day Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Master French?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful French learners
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-300">
              🚀 Start Learning Free Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900">
              🎁 Try Premium Free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl">🇫🇷</span>
              <span className="text-2xl font-bold">Français<span className="text-blue-400">Libre</span></span>
            </div>
            <p className="text-gray-400 mb-8">Democratizing French language education through AI-powered learning.</p>
            <p className="text-gray-400">&copy; 2025 FrançaisLibre. All rights reserved. Made with ❤️ for French learners worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}