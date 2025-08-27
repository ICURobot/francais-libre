/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* Vercel Deployment Fix - Commit 5487d07 - All compilation errors resolved */
'use client'

import { useState, useEffect } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '../../lib/supabase'
import Link from 'next/link'
import Image from 'next/image'

// Simple static checkmark for demo
const AnimatedCheckmark = ({ delay = 0 }: { delay?: number }) => {
  return (
    <span className="text-green-500 ml-3 text-lg">✓</span>
  )
}

// Analytics tracking function
const trackEvent = (eventName: string, properties: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties)
  }
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const handleAuthAction = (action: string) => {
    trackEvent('auth_action', { action })
    if (action === 'signin') {
      supabase.auth.signInWithOAuth({ provider: 'google' })
    } else {
      supabase.auth.signOut()
    }
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1)] fixed w-full top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="text-2xl group-hover:scale-110 transition-transform duration-300">🎓</div>
              <span className="text-2xl font-bold text-gray-900">
                Français<span className="text-blue-500 font-semibold">Libre</span>
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/lessons" className="text-gray-900 hover:text-blue-500 transition-colors duration-300 px-3 py-2 rounded-[16px] hover:bg-blue-50">
                Lessons
              </Link>
              <a href="#features" className="text-gray-900 hover:text-blue-500 transition-colors duration-300 px-3 py-2 rounded-[16px] hover:bg-blue-50">Features</a>
              <a href="#pricing" className="text-gray-900 hover:text-blue-500 transition-colors duration-300 px-3 py-2 rounded-[16px] hover:bg-blue-50">Pricing</a>
              <a href="#community" className="text-gray-900 hover:text-blue-500 transition-colors duration-300 px-3 py-2 rounded-[16px] hover:bg-blue-50">Community</a>
              {user ? (
                <div className="flex items-center space-x-3">
                  <Link 
                    href="/dashboard" 
                    className="text-sm text-gray-900 hover:text-blue-500 transition-colors duration-300 px-3 py-2 rounded-[16px] hover:bg-blue-50"
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={() => handleAuthAction('signout')}
                    className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-[16px] text-sm transition-all duration-300 shadow-[0_4px_16px_rgba(239,68,68,0.3)] hover:shadow-[0_8px_24px_rgba(239,68,68,0.4)] hover:scale-105"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => handleAuthAction('signin')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-[16px] text-sm transition-all duration-300 shadow-[0_4px_16px_rgba(59,130,246,0.3)] hover:shadow-[0_8px_24px_rgba(59,130,246,0.4)] hover:scale-105"
                >
                  ▶️ Start Learning Free
                </button>
              )}
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-900 p-2"
                aria-label="Toggle mobile menu"
              >
                <div className="text-xl">{isMobileMenuOpen ? '✕' : '☰'}</div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
            <div className="px-6 py-4 space-y-3">
              <Link 
                href="/lessons" 
                className="block text-gray-900 hover:text-blue-500 transition-colors duration-300 py-2"
              >
                Lessons
              </Link>
              <a href="#features" className="block text-gray-900 hover:text-blue-500 transition-colors duration-300 py-2">Features</a>
              <a href="#pricing" className="block text-gray-900 hover:text-blue-500 transition-colors duration-300 py-2">Pricing</a>
              <a href="#community" className="block text-gray-900 hover:text-blue-500 transition-colors duration-300 py-2">Community</a>
              {user ? (
                <>
                  <Link 
                    href="/dashboard" 
                    className="block text-gray-900 hover:text-blue-500 transition-colors duration-300 py-2"
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={() => handleAuthAction('signout')}
                    className="w-full text-left text-gray-900 hover:text-blue-500 transition-colors duration-300 py-2"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => handleAuthAction('signin')}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-[16px] text-sm transition-all duration-300"
                >
                  ▶️ Start Learning Free
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Master French
                <br />
                <span className="text-blue-200">Your Way</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Learn French naturally through proven methods, AI-powered practice, and a supportive community. 
                Start speaking confidently in weeks, not years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => handleAuthAction('signin')}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-[16px] text-lg font-semibold transition-all duration-300 shadow-[0_8px_32px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)] hover:scale-105"
                >
                  🚀 Start Learning Free
                </button>
                <Link 
                  href="/lessons/beginner/1"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-[16px] text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  📚 Browse Lessons
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image Section - Full Width */}
        <section className="relative py-20">
          <div className="relative h-[500px] overflow-hidden">
            <Image
              src="/hero-students.png"
              alt="Students learning French together"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join Thousands of Successful Learners
              </h2>
              <p className="text-lg text-gray-200 mb-6">
                Our proven method combines traditional language learning with modern technology to help you achieve fluency faster.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-[12px]">
                  <span className="text-green-300 mr-2">✓</span>
                  10,000+ active students
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-[12px]">
                  <span className="text-green-300 mr-2">✓</span>
                  95% success rate
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-[12px]">
                  <span className="text-green-300 mr-2">✓</span>
                  Native French speakers
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose FrançaisLibre?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our unique approach combines the best of traditional language learning with cutting-edge technology.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-[24px] text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-[16px] flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Method</h3>
                <p className="text-gray-600 leading-relaxed">
                  Based on the Assimil method that has helped millions learn languages worldwide. 
                  Start with dialogues and build up to complex conversations naturally.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-[24px] text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-green-500 rounded-[16px] flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Practice</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get instant feedback on pronunciation, practice with AI conversation partners, 
                  and receive personalized learning recommendations.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-[24px] text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-purple-500 rounded-[16px] flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Join study groups, participate in language exchanges, and connect with fellow learners 
                  from around the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Progress Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Track Your Progress
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how you're improving across all aspects of French learning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Progress Card 1 */}
              <div className="bg-white p-6 rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Grammar</h3>
                  <AnimatedCheckmark delay={0} />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                </div>
                <p className="text-sm text-gray-600">75% Complete</p>
              </div>

              {/* Progress Card 2 */}
              <div className="bg-white p-6 rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Conversation</h3>
                  <AnimatedCheckmark delay={500} />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-green-500 h-2 rounded-full transition-all duration-1000" style={{ width: '60%' }}></div>
                </div>
                <p className="text-sm text-gray-600">60% Complete</p>
              </div>

              {/* Progress Card 3 */}
              <div className="bg-white p-6 rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Vocabulary</h3>
                  <AnimatedCheckmark delay={1000} />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-purple-500 h-2 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                </div>
                <p className="text-sm text-gray-600">85% Complete</p>
              </div>

              {/* Progress Card 4 */}
              <div className="bg-white p-6 rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Pronunciation</h3>
                  <AnimatedCheckmark delay={1500} />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-orange-500 h-2 rounded-full transition-all duration-1000" style={{ width: '45%' }}></div>
                </div>
                <p className="text-sm text-gray-600">45% Complete</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Methods Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Learn French the Natural Way
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our method mimics how you learned your first language - through context, repetition, and gradual complexity. 
                  No more memorizing endless grammar rules!
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <AnimatedCheckmark delay={300} />
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Start with Dialogues</h4>
                      <p className="text-gray-600">Learn practical phrases you'll actually use in real conversations.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AnimatedCheckmark delay={800} />
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Build Grammar Naturally</h4>
                      <p className="text-gray-600">Understand French structure through examples, not dry explanations.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AnimatedCheckmark delay={1500} />
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Practice with AI</h4>
                      <p className="text-gray-600">Get instant feedback and practice anytime, anywhere.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-[400px] rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
                  <Image
                    src="/learning-study.png"
                    alt="Student studying French with digital tools"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Our Students Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of successful learners who have transformed their French skills with FrançaisLibre.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-800 rounded-[24px] p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/testimonial-woman.png"
                      alt="Sarah Mitchell"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Sarah Mitchell</h4>
                    <p className="text-gray-400">Student, University of Toronto</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "FrançaisLibre made learning French actually enjoyable! The progressive lessons from basic dialogues to grammar mastery helped me go from complete beginner to conversational in just 6 months."
                </p>
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-800 rounded-[24px] p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/testimonial-man.png"
                      alt="Marcus Johnson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Marcus Johnson</h4>
                    <p className="text-gray-400">Software Engineer, Google</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "The combination of Assimil-style dialogues and structured grammar exercises is perfect. I love how the free lessons gave me a solid foundation before upgrading to premium features."
                </p>
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section - Restructured */}
        <section id="community" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Title at top, center-aligned */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Join Our Community
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Connect with fellow French learners, participate in study groups, and immerse yourself in French culture.
              </p>
            </div>
            
            {/* Wider image below title */}
            <div className="mb-16">
              <div className="relative h-[500px] rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
                <Image
                  src="/community-group.png"
                  alt="French learning community members"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Feature cards below image */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-[24px] text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-[16px] flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Study Groups</h3>
                <p className="text-gray-600 leading-relaxed">
                  Join topic-specific study groups and practice with learners at your level.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-[24px] text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-green-500 rounded-[16px] flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl">🗣️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Language Exchange</h3>
                <p className="text-gray-600 leading-relaxed">
                  Practice with native French speakers who want to learn English.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-[24px] text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-purple-500 rounded-[16px] flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl">🎭</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Events</h3>
                <p className="text-gray-600 leading-relaxed">
                  Join live conversation sessions, cultural workshops, and Q&A with experts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your French Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of learners who have already transformed their French skills. 
              Start with our free lessons and see the difference for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleAuthAction('signin')}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-[16px] text-lg font-semibold transition-all duration-300 shadow-[0_8px_32px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)] hover:scale-105"
              >
                🚀 Start Learning Free
              </button>
              <Link 
                href="/lessons/beginner/1"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-[16px] text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                📚 Browse All Lessons
              </Link>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              No credit card required • 10 A1 lessons + A2 level free • Start learning in 30 seconds
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-6 group">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🎓</span>
                <span className="text-3xl font-bold">Français<span className="text-blue-400">Libre</span></span>
              </Link>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Making French learning accessible through proven methods and modern technology.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Learning</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/lessons/beginner/1" className="hover:text-white transition-colors duration-300">A1 Beginner Lessons</Link></li>
                <li><Link href="/lessons" className="hover:text-white transition-colors duration-300">All Lessons</Link></li>
                <li><Link href="/grammar-guide" className="hover:text-white transition-colors duration-300">Grammar Guide</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Community</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/community" className="hover:text-white transition-colors duration-300">Study Groups</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors duration-300">Language Exchange</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors duration-300">Events</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Support</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/help" className="hover:text-white transition-colors duration-300">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors duration-300">Contact Us</Link></li>
                <li><Link href="/feedback" className="hover:text-white transition-colors duration-300">Feedback</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p className="text-lg">&copy; 2025 FrançaisLibre. All rights reserved. Made with ❤️ for French learners worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
