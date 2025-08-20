'use client'
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, lazy, Suspense } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '../../lib/supabase'

// Lazy loaded components
const LazyPricingSection = lazy(() => Promise.resolve({ default: PricingSection }))
const LazyCommunitySection = lazy(() => Promise.resolve({ default: CommunitySection }))

// Analytics tracking function
const trackEvent = (eventName, properties = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)
  }
}

// Animated Progress Bar Component
const AnimatedProgressBar = ({ progress, color = "blue", delay = 0 }) => {
  const [currentProgress, setCurrentProgress] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => setCurrentProgress(progress), 500 + delay)
    return () => clearTimeout(timer)
  }, [progress, delay])
  
  return (
    <div className="w-32 bg-gray-200 rounded-full h-2">
      <div 
        className={`bg-${color}-600 h-2 rounded-full transition-all duration-1000 ease-out`}
        style={{ width: `${currentProgress}%` }}
      />
    </div>
  )
}

// Interactive Example Component
const InteractiveExample = () => {
  const [currentExample, setCurrentExample] = useState(0)
  const examples = [
    { verb: "parler", translation: "to speak", forms: ["je parle", "tu parles", "il/elle parle"] },
    { verb: "manger", translation: "to eat", forms: ["je mange", "tu manges", "il/elle mange"] },
    { verb: "écouter", translation: "to listen", forms: ["j'écoute", "tu écoutes", "il/elle écoute"] }
  ]

  return (
    <div className="bg-white p-3 rounded border-l-4 border-blue-600">
      <div className="mb-2">
        <div className="font-bold text-gray-900 text-base">{examples[currentExample].verb} ({examples[currentExample].translation})</div>
      </div>
      <div className="text-sm space-y-1">
        {examples[currentExample].forms.map((form, index) => (
          <div key={index} className="animate-fade-in">
            <span className="text-blue-600 font-semibold">{form}</span>
            <span className="text-black ml-2">
              {index === 0 ? "I speak" : index === 1 ? "You speak" : "He/She speaks"}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Mini Lesson Component
const MiniLesson = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const steps = [
    { 
      question: "How do you say 'Hello' in French?", 
      answer: "Bonjour", 
      options: ["Bonjour", "Au revoir", "Merci"],
      feedback: "Excellent! 'Bonjour' is the standard French greeting."
    },
    { 
      question: "What does 'Merci' mean?", 
      answer: "Thank you", 
      options: ["Hello", "Thank you", "Goodbye"],
      feedback: "Perfect! 'Merci' means 'Thank you' in French."
    },
    { 
      question: "How do you say 'My name is...' in French?", 
      answer: "Je m'appelle", 
      options: ["Je suis", "Je m'appelle", "J'ai"],
      feedback: "Great! 'Je m'appelle' is how you introduce yourself."
    }
  ]

  const handleAnswer = (option) => {
    setSelectedAnswer(option)
    const correct = option === steps[currentStep].answer
    setIsCorrect(correct)
    setShowFeedback(true)
    
    trackEvent('mini_lesson_answer', { 
      question: currentStep, 
      correct,
      answer: option 
    })

    setTimeout(() => {
      if (correct) {
        setCurrentStep((prev) => (prev + 1) % steps.length)
        setShowFeedback(false)
        setSelectedAnswer(null)
        setIsCorrect(null)
      } else {
        setShowFeedback(false)
        setSelectedAnswer(null)
        setIsCorrect(null)
      }
    }, 2000)
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto border">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-gray-900">Try a Quick Lesson</h4>
        <div className="text-sm text-gray-700">
          {currentStep + 1}/{steps.length}
        </div>
      </div>
      <div className="space-y-4">
        <p className="font-medium text-gray-800">{steps[currentStep].question}</p>
        <div className="space-y-2">
          {steps[currentStep].options.map((option, index) => (
            <button
              key={index}
              disabled={showFeedback}
              className={`w-full text-left p-3 border rounded transition-all ${
                selectedAnswer === option
                  ? isCorrect
                    ? 'bg-green-100 border-green-500 text-green-800'
                    : 'bg-red-100 border-red-500 text-red-800'
                  : 'hover:bg-blue-50 hover:border-blue-300'
              } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={() => handleAnswer(option)}
            >
              {option}
              {selectedAnswer === option && (
                <span className="ml-2">
                  {isCorrect ? '✓' : '✗'}
                </span>
              )}
            </button>
          ))}
        </div>
        {showFeedback && isCorrect && (
          <div className="bg-green-50 border border-green-200 rounded p-3">
            <p className="text-green-800 text-sm">{steps[currentStep].feedback}</p>
          </div>
        )}
        {showFeedback && !isCorrect && (
          <div className="bg-orange-50 border border-orange-200 rounded p-3">
            <p className="text-orange-800 text-sm">
              Try again! The correct answer is "{steps[currentStep].answer}".
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// Enhanced CTA Button Component
const EnhancedCTA = ({ children, variant = "primary", onClick, className = "", showUrgency = false }) => {
  const baseClasses = "px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 relative"
  const variants = {
    primary: "bg-yellow-400 text-gray-900 hover:bg-yellow-300",
    secondary: "border-2 border-white text-white hover:bg-white hover:text-gray-900",
    blue: "bg-blue-600 text-white hover:bg-blue-700"
  }

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {showUrgency && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
          Limited Time
        </div>
      )}
    </button>
  )
}

// Pricing Section Component
function PricingSection() {
  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Learning Plan</h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Start with our free plan and upgrade when you're ready for AI-powered acceleration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">$0</div>
              <div className="text-gray-900">Forever</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">200+ Grammar Lessons</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">100+ Conversation Dialogues</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Basic Progress Tracking</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Community Access</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Mobile App Access</span>
              </li>
            </ul>
            <EnhancedCTA 
              variant="blue" 
              className="w-full"
              onClick={() => trackEvent('pricing_click', { plan: 'free' })}
            >
              Get Started Free
            </EnhancedCTA>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-blue-200 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                Most Popular
              </div>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">$4.99</div>
              <div className="text-gray-900">per month</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Everything in Free</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Unlimited AI Tutor Access</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Advanced Progress Analytics</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Offline Content Download</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Priority Support</span>
              </li>
            </ul>
            <EnhancedCTA 
              variant="blue" 
              className="w-full"
              showUrgency
              onClick={() => trackEvent('pricing_click', { plan: 'premium' })}
            >
              Start 7-Day Free Trial
            </EnhancedCTA>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-purple-200">
            <div className="text-center mb-8">
              <div className="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full inline-block mb-3">
                Best Value
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
              <div className="text-4xl font-bold text-purple-600 mb-2">$9.99</div>
              <div className="text-gray-900">per month</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Everything in Premium</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Advanced Speech Analysis</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Personalized AI Curriculum</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Cultural Deep-Dive Content</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Conversation Certification</span>
              </li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
              Start 14-Day Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Community Section Component
function CommunitySection() {
  return (
    <section id="community" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Join the FrançaisLibre Community</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with fellow learners, practice with native speakers, and share your French learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
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
            <button 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={() => trackEvent('community_click', { section: 'study_groups' })}
            >
              Browse Groups
            </button>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
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
            <button 
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
              onClick={() => trackEvent('community_click', { section: 'language_exchange' })}
            >
              Find Partners
            </button>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
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
            <button 
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
              onClick={() => trackEvent('community_click', { section: 'live_events' })}
            >
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
  )
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [userProgress] = useState({
    grammar: 75,
    conversation: 60,
    vocabulary: 85,
    pronunciation: 45
  })

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
    <div className="bg-gray-50">
      {/* Skip Navigation for Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50 rounded">
        Skip to main content
      </a>

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
              <a href="#courses" className="text-gray-900 hover:text-blue-600 transition">Courses</a>
              <a href="#features" className="text-gray-900 hover:text-blue-600 transition">AI Features</a>
              <a href="#pricing" className="text-gray-900 hover:text-blue-600 transition">Pricing</a>
              <a href="#community" className="text-gray-900 hover:text-blue-600 transition">Community</a>
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-900">Welcome back!</span>
                  <button 
                    onClick={() => handleAuthAction('signout')}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <EnhancedCTA 
                  variant="blue"
                  className="text-sm px-6 py-2"
                  onClick={() => handleAuthAction('signin')}
                >
                  ▶️ Start Learning Free
                </EnhancedCTA>
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
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-2 space-y-2">
              <a 
                href="#courses" 
                className="block py-2 text-gray-900 hover:text-blue-600 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Courses
              </a>
              <a 
                href="#features" 
                className="block py-2 text-gray-900 hover:text-blue-600 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AI Features
              </a>
              <a 
                href="#pricing" 
                className="block py-2 text-gray-900 hover:text-blue-600 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#community" 
                className="block py-2 text-gray-900 hover:text-blue-600 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </a>
              {user ? (
                <button 
                  onClick={() => {
                    handleAuthAction('signout')
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full text-left py-2 text-red-600 hover:text-red-700 transition"
                >
                  Sign Out
                </button>
              ) : (
                <button 
                  onClick={() => {
                    handleAuthAction('signin')
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mt-2"
                >
                  Start Learning Free
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      <main role="main" id="main-content">
        {/* Hero Section */}
        <section aria-labelledby="hero-heading" className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Master French with <span className="text-yellow-300">AI-Powered</span> Learning
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Join thousands learning French for free with personalized AI tutoring, interactive grammar lessons, and real conversation practice
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <EnhancedCTA 
                  showUrgency
                  onClick={() => handleAuthAction('signin')}
                >
                  🚀 Join 50,000+ Learners - Start Free
                </EnhancedCTA>
                <EnhancedCTA 
                  variant="secondary"
                  onClick={() => trackEvent('demo_click', { location: 'hero' })}
                >
                  ▶️ Watch Demo
                </EnhancedCTA>
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
        <section className="bg-white py-16" aria-label="Platform statistics">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-gray-900">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
                <div className="text-gray-900">Interactive Lessons</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-900">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-900">AI Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience Learning Right Now</h2>
              <p className="text-xl text-gray-800 max-w-2xl mx-auto">
                Try our interactive lesson format - no signup required
              </p>
            </div>
            <MiniLesson />
          </div>
        </section>

        {/* Learning Path Section */}
        <section id="courses" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete French Learning Journey</h2>
              <p className="text-xl text-gray-900 max-w-3xl mx-auto">
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
                    <p className="text-gray-900">Complete French Grammar Foundation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Present Tense & Regular Verbs</span>
                    <div className="flex items-center">
                      <AnimatedProgressBar progress={100} color="blue" />
                      <span className="text-green-600 ml-3">✓</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Irregular Verbs & Conjugation</span>
                    <div className="flex items-center">
                      <AnimatedProgressBar progress={userProgress.grammar} color="blue" delay={200} />
                      <span className="text-sm text-gray-900 ml-3">{userProgress.grammar}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Past Tenses (Passé Composé, Imparfait)</span>
                    <div className="flex items-center">
                      <AnimatedProgressBar progress={40} color="blue" delay={400} />
                      <span className="text-sm text-gray-900 ml-3">40%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Future & Conditional Tenses</span>
                    <div className="flex items-center">
                      <AnimatedProgressBar progress={0} color="gray" delay={600} />
                      <span className="text-gray-900 ml-3">🔒</span>
                    </div>
                  </div>
                </div>
                <EnhancedCTA 
                  variant="blue" 
                  className="w-full mt-6 py-3 text-base"
                  onClick={() => trackEvent('track_click', { track: 'grammar' })}
                >
                  Continue Grammar Lessons
                </EnhancedCTA>
              </div>

              {/* Conversation Track */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-xl mr-4">
                    <div className="text-2xl text-green-600">💬</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Conversation Practice</h3>
                    <p className="text-gray-900">Real-world French Communication</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Basic Greetings & Introductions</span>
                    <div className="flex items-center">
                      <AnimatedProgressBar progress={100} color="green" />
                      <span className="text-green-600 ml-3">✓</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Restaurant & Dining</span>
                    <div className="flex items-center">
                      <AnimatedProgressBar progress={80} color="green" delay={200} />
                      <span className="text-sm text-gray-900 ml-3">80%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Travel & Accommodation</span>
                    <div className="flex items-center">
                      <AnimatedProgressBar progress={userProgress.conversation} color="green" delay={400} />
                      <span className="text-sm text-gray-900 ml-3">{userProgress.conversation}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Business & Professional</span>
                    <div className="flex items-center">
                      <AnimatedProgressBar progress={0} color="gray" delay={600} />
                      <span className="text-gray-900 ml-3">🔒</span>
                    </div>
                  </div>
                </div>
                <button 
                  className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                  onClick={() => trackEvent('track_click', { track: 'conversation' })}
                >
                  Practice Conversations
                </button>
              </div>
            </div>

            {/* Sample Lessons */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Grammar Lesson: Present Tense</h4>
                  <div className="text-sm text-gray-900 mb-3">Learn regular -er verb conjugations</div>
                  <InteractiveExample />
                </div>
                <EnhancedCTA 
                  variant="blue" 
                  className="w-full py-2 text-sm"
                  onClick={() => trackEvent('lesson_start', { type: 'grammar', lesson: 'present_tense' })}
                >
                  ▶️ Start Lesson
                </EnhancedCTA>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Dialogue: At the Restaurant</h4>
                  <div className="text-sm text-gray-900 mb-3">Order food and drinks confidently</div>
                  <div className="bg-white p-3 rounded border-l-4 border-green-600">
                    <div className="text-sm">
                      <div className="mb-2">
                        <span className="font-bold text-green-800">Serveur:</span> <span className="text-green-600 font-semibold">"Bonsoir, avez-vous une réservation?"</span><br/>
                        <em className="text-gray-700">"Good evening, do you have a reservation?"</em>
                      </div>
                      <div>
                        <span className="font-bold text-green-800">Vous:</span> <span className="text-green-600 font-semibold">"Non, mais avez-vous une table pour deux?"</span><br/>
                        <em className="text-gray-700">"No, but do you have a table for two?"</em>
                      </div>
                    </div>
                  </div>
                </div>
                <button 
                  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                  onClick={() => trackEvent('lesson_start', { type: 'conversation', lesson: 'restaurant' })}
                >
                  🎤 Practice Speaking
                </button>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-purple-200">
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">AI Conversation Partner</h4>
                  <div className="text-sm text-gray-900 mb-3">Chat with our AI tutor in French</div>
                  <div className="bg-white p-3 rounded border-l-4 border-purple-600">
                    <div className="flex items-center mb-2">
                      <span className="text-purple-600 mr-2">🤖</span>
                      <span className="font-bold text-purple-800">Marie (AI Tutor)</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-purple-600 font-semibold">"Bonjour! Comment allez-vous aujourd'hui? Voulez-vous pratiquer la conversation?"</span><br/>
                      <em className="text-gray-700">"Hello! How are you today? Would you like to practice conversation?"</em>
                    </div>
                  </div>
                </div>
                <button 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded hover:from-purple-700 hover:to-blue-700 transition"
                  onClick={() => trackEvent('ai_chat_click', { location: 'lesson_preview' })}
                >
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
              <p className="text-xl text-gray-900 max-w-3xl mx-auto">
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
                <p className="text-gray-900 mb-6">AI analyzes your learning style and progress to create a customized curriculum that adapts to your pace and preferences.</p>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <div className="text-sm text-gray-900 mb-2">Your AI Recommendation:</div>
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
                <p className="text-gray-900 mb-6">Real-time pronunciation feedback with AI-powered accent analysis helps you speak French like a native.</p>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-900">Pronunciation Accuracy</span>
                    <span className="text-green-600 font-bold">92%</span>
                  </div>
                  <AnimatedProgressBar progress={92} color="green" />
                </div>
                <span className="inline-block bg-yellow-500 text-white text-xs px-3 py-1 rounded-full">Premium Feature</span>
              </div>

              {/* AI Conversation Partner */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 AI Conversation Partner</h3>
                <p className="text-gray-900 mb-6">Practice conversations anytime with our AI tutor trained on French culture and language nuances.</p>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">🤖</span>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">Available Topics:</div>
                      <div className="text-gray-900">Travel, Food, Culture, Business</div>
                    </div>
                  </div>
                </div>
                <span className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded-full">Pro Feature</span>
              </div>
            </div>
          </div>
        </section>

        {/* Lazy Loaded Sections */}
        <Suspense fallback={
          <div className="py-20 text-center bg-gray-50">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
          </div>
        }>
          <LazyPricingSection />
        </Suspense>

        <Suspense fallback={
          <div className="py-20 text-center bg-gray-900">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-96 mx-auto"></div>
            </div>
          </div>
        }>
          <LazyCommunitySection />
        </Suspense>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Master French?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of successful French learners who started their journey with FrançaisLibre
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <EnhancedCTA 
                showUrgency
                onClick={() => handleAuthAction('signin')}
              >
                🚀 Start Learning Free Today
              </EnhancedCTA>
              <EnhancedCTA 
                variant="secondary"
                onClick={() => trackEvent('premium_trial_click', { location: 'cta' })}
              >
                🎁 Try Premium Free
              </EnhancedCTA>
            </div>
            <div className="text-sm opacity-80">
              ✓ No credit card required ✓ Start learning immediately ✓ Cancel anytime
            </div>
          </div>
        </section>
      </main>

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
                <a href="#" className="text-gray-400 hover:text-white transition text-xl" aria-label="Facebook">📘</a>
                <a href="#" className="text-gray-400 hover:text-white transition text-xl" aria-label="Twitter">🐦</a>
                <a href="#" className="text-gray-400 hover:text-white transition text-xl" aria-label="Instagram">📷</a>
                <a href="#" className="text-gray-400 hover:text-white transition text-xl" aria-label="YouTube">📺</a>
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

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}
