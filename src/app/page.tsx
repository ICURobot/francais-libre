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
    <div className="bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🎓</div>
              <span className="text-2xl font-bold text-gray-900">
                Français<span className="text-blue-600 font-semibold">Libre</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#courses" className="text-gray-700 hover:text-blue-600 transition">Courses</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition">AI Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
              <a href="#community" className="text-gray-700 hover:text-blue-600 transition">Community</a>
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
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  ▶️ Start Learning Free
                </button>
              )}
            </div>
            <div className="md:hidden">
              <button className="text-gray-700">
                <div className="text-xl">☰</div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Master French with <span className="text-yellow-300">AI-Powered</span> Learning
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Join thousands learning French for free with personalized AI tutoring, interactive grammar lessons, and real conversation practice
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-300 transition transform hover:scale-105">
                🚀 Start Learning Now - Free
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition">
                ▶️ Watch Demo
              </button>
            </div>
            <div className="flex justify-center items-center space-x-8 text-sm opacity-80">
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                100% Free Core Lessons
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">🤖</span>
                AI-Powered Personalization
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 mr-2">👥</span>
                50,000+ Active Learners
              </div>
            </div>
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

      {/* Learning Path Section */}
      <section id="courses" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete French Learning Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master French through our comprehensive curriculum combining grammar mastery and conversational fluency
            </p>
          </div>

          {/* Learning Tracks */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Grammar Track */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-xl mr-4">
                  <div className="text-2xl text-blue-600">📚</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Grammar Mastery Track</h3>
                  <p className="text-gray-600">Complete French Grammar Foundation</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Present Tense & Regular Verbs</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                    </div>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Irregular Verbs & Conjugation</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Past Tenses (Passé Composé, Imparfait)</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '40%'}}></div>
                    </div>
                    <span className="text-sm text-gray-500">40%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Future & Conditional Tenses</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-gray-300 h-2 rounded-full" style={{width: '0%'}}></div>
                    </div>
                    <span className="text-gray-400">🔒</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Continue Grammar Lessons
              </button>
            </div>

            {/* Conversation Track */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-xl mr-4">
                  <div className="text-2xl text-green-600">💬</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Conversation Practice</h3>
                  <p className="text-gray-600">Real-world French Communication</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Basic Greetings & Introductions</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-green-600 h-2 rounded-full w-full"></div>
                    </div>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Restaurant & Dining</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Travel & Accommodation</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <span className="text-sm text-gray-500">60%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Business & Professional</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-gray-300 h-2 rounded-full" style={{width: '0%'}}></div>
                    </div>
                    <span className="text-gray-400">🔒</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
                Practice Conversations
              </button>
            </div>
          </div>

          {/* Sample Lessons */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Grammar Lesson: Present Tense</h4>
                <div className="text-sm text-gray-600 mb-3">Learn regular -er verb conjugations</div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                  <div className="font-medium">Parler (to speak)</div>
                  <div className="text-sm mt-1">
                    <span className="text-blue-600 font-semibold">Je parle</span> - I speak<br/>
                    <span className="text-blue-600 font-semibold">Tu parles</span> - You speak<br/>
                    <span className="text-blue-600 font-semibold">Il/Elle parle</span> - He/She speaks
                  </div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                ▶️ Start Lesson
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Dialogue: At the Restaurant</h4>
                <div className="text-sm text-gray-600 mb-3">Order food and drinks confidently</div>
                <div className="bg-white p-3 rounded border-l-4 border-green-600">
                  <div className="text-sm">
                    <div className="mb-2">
                      <strong>Serveur:</strong> <span className="text-green-600 font-semibold">"Bonsoir, avez-vous une réservation?"</span><br/>
                      <em className="text-gray-500">"Good evening, do you have a reservation?"</em>
                    </div>
                    <div>
                      <strong>Vous:</strong> <span className="text-green-600 font-semibold">"Non, mais avez-vous une table pour deux?"</span><br/>
                      <em className="text-gray-500">"No, but do you have a table for two?"</em>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                🎤 Practice Speaking
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-purple-200">
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">AI Conversation Partner</h4>
                <div className="text-sm text-gray-600 mb-3">Chat with our AI tutor in French</div>
                <div className="bg-white p-3 rounded border-l-4 border-purple-600">
                  <div className="flex items-center mb-2">
                    <span className="text-purple-600 mr-2">🤖</span>
                    <span className="font-medium">Marie (AI Tutor)</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-purple-600 font-semibold">"Bonjour! Comment allez-vous aujourd'hui? Voulez-vous pratiquer la conversation?"</span><br/>
                    <em className="text-gray-500">"Hello! How are you today? Would you like to practice conversation?"</em>
                  </div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded hover:from-purple-700 hover:to-blue-700 transition">
                🧠 Chat with AI (Premium)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Learning Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience personalized French learning with cutting-edge artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Personalized Learning Path */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🛤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Learning Path</h3>
              <p className="text-gray-600 mb-6">AI analyzes your learning style and progress to create a customized curriculum that adapts to your pace and preferences.</p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <div className="text-sm text-gray-600 mb-2">Your AI Recommendation:</div>
                <div className="font-medium text-blue-600">"Focus on irregular verbs this week based on your recent progress patterns"</div>
              </div>
              <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Free Feature</span>
            </div>

            {/* Speech Recognition */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🎤</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Speech Recognition</h3>
              <p className="text-gray-600 mb-6">Real-time pronunciation feedback with AI-powered accent analysis helps you speak French like a native.</p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Pronunciation Accuracy</span>
                  <span className="text-green-600 font-bold">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
              <span className="inline-block bg-yellow-500 text-white text-xs px-3 py-1 rounded-full">Premium Feature</span>
            </div>

            {/* AI Conversation Partner */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 AI Conversation Partner</h3>
              <p className="text-gray-600 mb-6">Practice conversations anytime with our AI tutor trained on French culture and language nuances.</p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">🤖</span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Available Topics:</div>
                    <div className="text-gray-600">Travel, Food, Culture, Business</div>
                  </div>
                </div>
              </div>
              <span className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded-full">Pro Feature</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Learning Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with our free plan and upgrade when you're ready for AI-powered acceleration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
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
                  <span>100+ Conversation Dialogues</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Basic Progress Tracking</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Community Access</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Mobile App Access</span>
                </li>
              </ul>
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition">
                Get Started Free
              </button>
            </div>

            {/* Supporter Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-blue-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                  Most Popular
                </div>
              </div>
              <div className="text-center mb-8">
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
                  <span>Advanced Progress Analytics</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Offline Content Download</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Priority Support</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Start 7-Day Free Trial
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-purple-200">
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
                  <span>Personalized AI Curriculum</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Cultural Deep-Dive Content</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Conversation Certification</span>
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
                Start 14-Day Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Join the FrançaisLibre Community</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with fellow learners, practice with native speakers, and share your French learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white">👥</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Study Groups</h3>
                  <p className="text-gray-400">50,000+ active learners</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">Join topic-specific study groups and practice with learners at your level.</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Browse Groups
              </button>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white">🤝</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Language Exchange</h3>
                  <p className="text-gray-400">5,000+ native speakers</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">Practice with native French speakers who want to learn English.</p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                Find Partners
              </button>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white">📅</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Live Events</h3>
                  <p className="text-gray-400">Weekly sessions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">Join live conversation sessions, cultural workshops, and Q&A with experts.</p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                View Schedule
              </button>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  S
                </div>
                <div>
                  <h4 className="font-bold">Sarah Mitchell</h4>
                  <p className="text-gray-400">Student, University of Toronto</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">"FrançaisLibre made learning French actually enjoyable! The AI tutor feels like having a personal teacher available 24/7. I went from complete beginner to conversational in just 6 months."</p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                  M
                </div>
                <div>
                  <h4 className="font-bold">Marcus Johnson</h4>
                  <p className="text-gray-400">Software Engineer, Google</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">"The pronunciation feedback is incredible. As someone who struggled with French accents, the AI speech analysis helped me improve dramatically. Plus, the free tier gives you everything you need to get started."</p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Master French?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful French learners who started their journey with FrançaisLibre
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-300 transition transform hover:scale-105">
              🚀 Start Learning Free Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition">
              🎁 Try Premium Free
            </button>
          </div>
          <div className="text-sm opacity-80">
            ✓ No credit card required ✓ Start learning immediately ✓ Cancel anytime
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🎓</span>
                <span className="text-2xl font-bold">Français<span className="text-blue-400">Libre</span></span>
              </div>
              <p className="text-gray-400 mb-4">Democratizing French language education through AI-powered personalized learning.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition text-xl">📘</a>
                <a href="#" className="text-gray-400 hover:text-white transition text-xl">🐦</a>
                <a href="#" className="text-gray-400 hover:text-white transition text-xl">📷</a>
                <a href="#" className="text-gray-400 hover:text-white transition text-xl">📺</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Learning</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Grammar Lessons</a></li>
                <li><a href="#" className="hover:text-white transition">Conversation Practice</a></li>
                <li><a href="#" className="hover:text-white transition">Vocabulary Builder</a></li>
                <li><a href="#" className="hover:text-white transition">Cultural Content</a></li>
                <li><a href="#" className="hover:text-white transition">Pronunciation Guide</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Study Groups</a></li>
                <li><a href="#" className="hover:text-white transition">Language Exchange</a></li>
                <li><a href="#" className="hover:text-white transition">Live Events</a></li>
                <li><a href="#" className="hover:text-white transition">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition">Forum</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Feedback</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FrançaisLibre. All rights reserved. Made with ❤️ for French learners worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
