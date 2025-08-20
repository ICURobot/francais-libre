'use client'
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, lazy, Suspense } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '../../lib/supabase'
import Link from 'next/link'

// Lazy loaded components
const LazyPricingSection = lazy(() => Promise.resolve({ default: PricingSection }))
const LazyCommunitySection = lazy(() => Promise.resolve({ default: CommunitySection }))

// Analytics tracking function
const trackEvent = (eventName: string, properties: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties)
  }
}

// Enhanced Progress Bar Component with lesson-specific features
const AnimatedProgressBar = ({ progress, color = "blue", delay = 0, showPercentage = false }: { progress: number; color?: string; delay?: number; showPercentage?: boolean }) => {
  const [currentProgress, setCurrentProgress] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => setCurrentProgress(progress), 500 + delay)
    return () => clearTimeout(timer)
  }, [progress, delay])
  
  return (
    <div className="flex items-center space-x-2">
      <div className="w-32 bg-gray-200 rounded-full h-2">
        <div 
          className={`bg-${color}-600 h-2 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${currentProgress}%` }}
        />
      </div>
      {showPercentage && (
        <span className="text-sm text-gray-600 min-w-[3rem]">{currentProgress}%</span>
      )}
    </div>
  )
}

// Enhanced Interactive Example Component with pronunciation
const InteractiveExample = () => {
  const [currentExample, setCurrentExample] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  
  const examples = [
    { 
      verb: "parler", 
      translation: "to speak", 
      forms: [
        { french: "je parle", english: "I speak", pronunciation: "zhuh parl" },
        { french: "tu parles", english: "you speak", pronunciation: "too parl" },
        { french: "il/elle parle", english: "he/she speaks", pronunciation: "eel/ell parl" }
      ]
    },
    { 
      verb: "manger", 
      translation: "to eat", 
      forms: [
        { french: "je mange", english: "I eat", pronunciation: "zhuh mahnzh" },
        { french: "tu manges", english: "you eat", pronunciation: "too mahnzh" },
        { french: "il/elle mange", english: "he/she eats", pronunciation: "eel/ell mahnzh" }
      ]
    },
    { 
      verb: "écouter", 
      translation: "to listen", 
      forms: [
        { french: "j'écoute", english: "I listen", pronunciation: "zhay-koot" },
        { french: "tu écoutes", english: "you listen", pronunciation: "too ay-koot" },
        { french: "il/elle écoute", english: "he/she listens", pronunciation: "eel/ell ay-koot" }
      ]
    }
  ]

  const playPronunciation = async (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsPlaying(true)
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'fr-FR'
      utterance.rate = 0.8
      utterance.onend = () => setIsPlaying(false)
      speechSynthesis.speak(utterance)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % examples.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [examples.length])

  return (
    <div className="bg-white p-4 rounded-xl border-l-4 border-blue-600 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="font-bold text-gray-900 text-lg">
          {examples[currentExample].verb} ({examples[currentExample].translation})
        </div>
        <button
          onClick={() => playPronunciation(examples[currentExample].verb)}
          disabled={isPlaying}
          className="text-blue-600 hover:text-blue-700 transition-colors p-1"
          title="Play pronunciation"
        >
          {isPlaying ? '🔊' : '🔈'}
        </button>
      </div>
      <div className="space-y-2">
        {examples[currentExample].forms.map((form, index) => (
          <div key={index} className="animate-fade-in flex items-center justify-between">
            <div>
              <span className="text-blue-600 font-semibold">{form.french}</span>
              <span className="text-gray-800 ml-2">{form.english}</span>
            </div>
            <button
              onClick={() => playPronunciation(form.french)}
              disabled={isPlaying}
              className="text-gray-400 hover:text-blue-600 transition-colors text-sm"
              title="Play pronunciation"
            >
              🔊
            </button>
          </div>
        ))}
      </div>
      <div className="mt-3 flex space-x-2">
        {examples.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentExample(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentExample ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// Enhanced Mini Lesson Component with lesson progression
const MiniLesson = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const steps = [
    { 
      question: "How do you say 'Hello' in French?", 
      answer: "Bonjour", 
      options: ["Bonjour", "Au revoir", "Merci"],
      feedback: "Excellent! 'Bonjour' is the standard French greeting used throughout the day.",
      audio: "Bonjour"
    },
    { 
      question: "What does 'Merci' mean?", 
      answer: "Thank you", 
      options: ["Hello", "Thank you", "Goodbye"],
      feedback: "Perfect! 'Merci' means 'Thank you' in French. It's one of the most important polite expressions.",
      audio: "Merci"
    },
    { 
      question: "How do you say 'My name is...' in French?", 
      answer: "Je m'appelle", 
      options: ["Je suis", "Je m'appelle", "J'ai"],
      feedback: "Great! 'Je m'appelle' is how you introduce yourself. It literally means 'I call myself'.",
      audio: "Je m'appelle"
    }
  ]

  const playAudio = async (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'fr-FR'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  const handleAnswer = (option: string) => {
    setSelectedAnswer(option)
    const correct = option === steps[currentStep].answer
    setIsCorrect(correct)
    setShowFeedback(true)
    
    trackEvent('mini_lesson_answer', { 
      question: currentStep, 
      correct,
      answer: option 
    })

    if (correct && !completedSteps.includes(currentStep)) {
      setCompletedSteps(prev => [...prev, currentStep])
    }

    setTimeout(() => {
      if (correct) {
        if (currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1)
        }
        setShowFeedback(false)
        setSelectedAnswer(null)
        setIsCorrect(null)
      } else {
        setShowFeedback(false)
        setSelectedAnswer(null)
        setIsCorrect(null)
      }
    }, 2500)
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto border">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-gray-900">Try a Quick Lesson</h4>
        <div className="flex items-center space-x-2">
          <div className="text-sm text-gray-700">
            {currentStep + 1}/{steps.length}
          </div>
          <button
            onClick={() => playAudio(steps[currentStep].audio)}
            className="text-blue-600 hover:text-blue-700 transition-colors"
            title="Play pronunciation"
          >
            🔊
          </button>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="mb-4">
        <div className="flex space-x-1">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 rounded-full transition-colors ${
                completedSteps.includes(index) 
                  ? 'bg-green-500' 
                  : index === currentStep 
                    ? 'bg-blue-500' 
                    : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <p className="font-medium text-gray-800">{steps[currentStep].question}</p>
        <div className="space-y-2">
          {steps[currentStep].options.map((option, index) => (
            <button
              key={index}
              disabled={showFeedback}
              className={`w-full text-left p-3 border rounded-lg transition-all ${
                selectedAnswer === option
                  ? isCorrect
                    ? 'bg-green-100 border-green-500 text-green-800'
                    : 'bg-red-100 border-red-500 text-red-800'
                  : 'hover:bg-blue-50 hover:border-blue-300'
              } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={() => handleAnswer(option)}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {selectedAnswer === option && (
                  <span className="text-lg">
                    {isCorrect ? '✓' : '✗'}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
        
        {showFeedback && isCorrect && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-green-800 text-sm">{steps[currentStep].feedback}</p>
          </div>
        )}
        
        {showFeedback && !isCorrect && (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
            <p className="text-orange-800 text-sm">
              Try again! The correct answer is "{steps[currentStep].answer}".
            </p>
          </div>
        )}

        {completedSteps.length === steps.length && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <p className="text-blue-800 font-medium mb-2">🎉 Congratulations!</p>
            <p className="text-blue-700 text-sm mb-3">You've completed the mini lesson!</p>
            <Link 
              href="/lessons/beginner/1"
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Start Full Lessons →
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

// Enhanced CTA Button Component
const EnhancedCTA = ({ 
  children, 
  variant = "primary", 
  onClick, 
  className = "", 
  showUrgency = false,
  href,
  disabled = false 
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "blue"
  onClick?: () => void
  className?: string
  showUrgency?: boolean
  href?: string
  disabled?: boolean
}) => {
  const baseClasses = "px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 relative inline-block text-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
  const variants = {
    primary: "bg-yellow-400 text-gray-900 hover:bg-yellow-300",
    secondary: "border-2 border-white text-white hover:bg-white hover:text-gray-900",
    blue: "bg-blue-600 text-white hover:bg-blue-700"
  }

  const ButtonComponent = href ? Link : 'button'
  const props = href ? { href } : { onClick, disabled }

  return (
    <ButtonComponent 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showUrgency && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
          Limited Time
        </div>
      )}
    </ButtonComponent>
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
                <span className="text-gray-900">First 10 Beginner Lessons</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">100+ Grammar Exercises</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Basic Audio Pronunciation</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Progress Tracking</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Community Access</span>
              </li>
            </ul>
            <EnhancedCTA 
              variant="blue" 
              className="w-full"
              href="/lessons/beginner/1"
              onClick={() => trackEvent('pricing_click', { plan: 'free' })}
            >
              Start Learning Free
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
                <span className="text-gray-900">Unlimited Lessons Access</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">AI Exercise Generation</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Advanced Speech Analysis</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Offline Content Download</span>
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
                <span className="text-gray-900">24/7 AI Conversation Partner</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-900">Personalized Learning Path</span>
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
            <button 
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
              onClick={() => trackEvent('pricing_click', { plan: 'pro' })}
            >
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
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:purple-700 transition"
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
            <p className="text-gray-300 mb-4">"FrançaisLibre made learning French actually enjoyable! The progressive lessons from basic dialogues to grammar mastery helped me go from complete beginner to conversational in just 6 months."</p>
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
            <p className="text-gray-300 mb-4">"The combination of Assimil-style dialogues and structured grammar exercises is perfect. I love how the free lessons gave me a solid foundation before upgrading to premium features."</p>
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
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl">🎓</div>
              <span className="text-2xl font-bold text-gray-900">
                Français<span className="text-blue-600 font-semibold">Libre</span>
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/lessons" className="text-gray-900 hover:text-blue-600 transition">
                Lessons
              </Link>
              <a href="#features" className="text-gray-900 hover:text-blue-600 transition">AI Features</a>
              <a href="#pricing" className="text-gray-900 hover:text-blue-600 transition">Pricing</a>
              <a href="#community" className="text-gray-900 hover:text-blue-600 transition">Community</a>
              {user ? (
                <div className="flex items-center space-x-3">
                  <Link 
                    href="/dashboard" 
                    className="text-sm text-gray-900 hover:text-blue-600 transition"
                  >
                    Dashboard
                  </Link>
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
                  href="/lessons/beginner/1"
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
              <Link 
                href="/lessons" 
                className="block py-2 text-gray-900 hover:text-blue-600 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Lessons
              </Link>
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
                <>
                  <Link 
                    href="/dashboard"
                    className="block py-2 text-gray-900 hover:text-blue-600 transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={() => {
                      handleAuthAction('signout')
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full text-left py-2 text-red-600 hover:text-red-700 transition"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  href="/lessons/beginner/1"
                  onClick={() => {
                    handleAuthAction('signin')
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mt-2 text-center"
                >
                  Start Learning Free
                </Link>
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
                Master French with <span className="text-yellow-300">Smart</span> Learning
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Learn French through proven dialogue-based lessons and structured grammar practice. Start with 10 free beginner lessons!
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <EnhancedCTA 
                  showUrgency
                  href="/lessons/beginner/1"
                  onClick={() => trackEvent('hero_cta_click', { location: 'primary' })}
                >
                  🚀 Start First Lesson Free
                </EnhancedCTA>
                <EnhancedCTA 
                  variant="secondary"
                  onClick={() => {
                    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
                    trackEvent('demo_click', { location: 'hero' })
                  }}
                >
                  ▶️ Try Demo Below
                </EnhancedCTA>
              </div>
              <div className="flex justify-center items-center space-x-8 text-sm opacity-80">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  10 Free Beginner Lessons
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">🎵</span>
                  Audio Pronunciation
                </div>
                <div className="flex items-center">
                  <span className="text-purple-400 mr-2">📚</span>
                  Proven Book Methods
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
                <div className="text-gray-900">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="demo" className="bg-blue-50 py-16">
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
                Master French through our comprehensive curriculum combining dialogue immersion and grammar mastery
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
                    <p className="text-gray-900">Systematic French Grammar Foundation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Present Tense & Regular Verbs</span>
                    <div className="flex items-center">
                      <AnimatedProgressBar progress={100} color="blue" showPercentage />
                      <span className="text-green-600 ml-3">✓</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Irregular Verbs & Conjugation</span>
                    <div className="flex items-center">
                      <AnimatedProgressBar progress={userProgress.grammar} color="blue" delay={200} showPercentage />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Past Tenses (Passé Composé, Imparfait)</span>
                    <div className="flex items-center">
                      <AnimatedProgressBar progress={40} color="blue" delay={400} showPercentage />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Future & Conditional Tenses</span>
                    <div className="flex items-center">
                      <AnimatedProgressBar progress={0} color="gray" delay={600} />
                      <span className="text-gray-900 ml-3">🔒 Premium</span>
                    </div>
                  </div>
                </div>
                <EnhancedCTA 
                  variant="blue" 
                  className="w-full mt-6 py-3 text-base"
                  href="/lessons/beginner/1"
                  onClick={() => trackEvent('track_click', { track: 'grammar' })}
                >
                  Start Grammar Lessons
                </EnhancedCTA>
              </div>

              {/* Conversation Track */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-xl mr-4">
                    <div className="text-2xl text-green-600">💬</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Dialogue Practice</h3>
                    <p className="text-gray-900">Real-world French Communication</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Greetings & Basic Introductions</span>
                    <div className="flex items-center">
                      <AnimatedProgressBar progress={100} color="green" showPercentage />
                      <span className="text-green-600 ml-3">✓</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Restaurant & Dining Situations</span>
                    <div className="flex items-center">
                      <AnimatedProgressBar progress={80} color="green" delay={200} showPercentage />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Shopping & Daily Errands</span>
                    <div className="flex items-center">
                      <AnimatedProgressBar progress={userProgress.conversation} color="green" delay={400} showPercentage />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Travel & Accommodation</span>
                    <div className="flex items-center">
                      <AnimatedProgressBar progress={0} color="gray" delay={600} />
                      <span className="text-gray-900 ml-3">🔒 Premium</span>
                    </div>
                  </div>
                </div>
                <EnhancedCTA
                  variant="blue"
                  className="w-full mt-6 py-3 text-base bg-green-600 hover:bg-green-700"
                  href="/lessons/beginner/1"
                  onClick={() => trackEvent('track_click', { track: 'conversation' })}
                >
                  Practice Dialogues
                </EnhancedCTA>
              </div>
            </div>

            {/* Sample Lessons Preview */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Lesson 1: Greetings & Introductions</h4>
                  <div className="text-sm text-gray-900 mb-3">Learn essential French greetings</div>
                  <InteractiveExample />
                </div>
                <EnhancedCTA 
                  variant="blue" 
                  className="w-full py-2 text-sm"
                  href="/lessons/beginner/1"
                  onClick={() => trackEvent('lesson_preview_click', { lesson: 'greetings' })}
                >
                  ▶️ Start This Lesson
                </EnhancedCTA>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Dialogue: Meeting Someone New</h4>
                  <div className="text-sm text-gray-900 mb-3">Practice natural conversation</div>
                  <div className="bg-white p-3 rounded border-l-4 border-green-600">
                    <div className="text-sm space-y-2">
                      <div>
                        <span className="font-bold text-green-800">Marie:</span> 
                        <span className="text-green-600 ml-1">"Bonjour! Je m'appelle Marie."</span>
                        <div className="text-gray-600 italic text-xs">"Hello! My name is Marie."</div>
                      </div>
                      <div>
                        <span className="font-bold text-green-800">Vous:</span> 
                        <span className="text-green-600 ml-1">"Enchanté! Moi, c'est..."</span>
                        <div className="text-gray-600 italic text-xs">"Nice to meet you! I'm..."</div>
                      </div>
                    </div>
                  </div>
                </div>
                <EnhancedCTA
                  variant="blue"
                  className="w-full py-2 text-sm bg-green-600 hover:bg-green-700"
                  href="/lessons/beginner/2"
                  onClick={() => trackEvent('lesson_preview_click', { lesson: 'dialogue_intro' })}
                >
                  🎤 Practice Speaking
                </EnhancedCTA>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-purple-200">
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Premium: AI Conversation</h4>
                  <div className="text-sm text-gray-900 mb-3">Chat with AI tutor in French</div>
                  <div className="bg-white p-3 rounded border-l-4 border-purple-600">
                    <div className="flex items-center mb-2">
                      <span className="text-purple-600 mr-2">🤖</span>
                      <span className="font-bold text-purple-800">Marie (AI Tutor)</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-purple-600 font-semibold">"Bonjour! Voulez-vous pratiquer?"</span>
                      <div className="text-gray-600 italic text-xs">"Hello! Would you like to practice?"</div>
                    </div>
                  </div>
                </div>
                <button 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded hover:from-purple-700 hover:to-blue-700 transition text-sm"
                  onClick={() => trackEvent('ai_chat_preview_click', { location: 'lesson_preview' })}
                >
                  🧠 Try AI Chat (Premium)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section id="features" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Learning Features</h2>
              <p className="text-xl text-gray-900 max-w-3xl mx-auto">
                Experience personalized French learning with modern technology and proven teaching methods
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Audio Pronunciation */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">🔊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Audio Pronunciation</h3>
                <p className="text-gray-900 mb-6">Listen to native pronunciation for every dialogue and vocabulary word. Practice speaking with immediate audio feedback.</p>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <div className="text-sm text-gray-900 mb-2">Available in Free Plan:</div>
                  <div className="font-medium text-blue-600">Basic TTS for all lessons</div>
                </div>
                <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Free Feature</span>
              </div>

              {/* Dialogue-Based Learning */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">💬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Teaching Method</h3>
                <p className="text-gray-900 mb-6">Learn through real conversations first, then understand the grammar. Based on successful language learning books used by millions.</p>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-900">Method Effectiveness</span>
                    <span className="text-green-600 font-bold">95%</span>
                  </div>
                  <AnimatedProgressBar progress={95} color="green" />
                </div>
                <span className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded-full">Core Method</span>
              </div>

              {/* AI-Powered Features */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Enhancement</h3>
                <p className="text-gray-900 mb-6">Get personalized exercise generation, advanced speech analysis, and 24/7 conversation practice with premium features.</p>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <div className="text-sm">
                    <div className="font-medium mb-1">Premium AI Features:</div>
                    <div className="text-gray-900">Speech Analysis, Exercise Generation, AI Chat</div>
                  </div>
                </div>
                <span className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded-full">Premium Feature</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your French Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Begin with our first 10 free lessons and experience the most effective way to learn French
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <EnhancedCTA 
                showUrgency
                href="/lessons/beginner/1"
                onClick={() => trackEvent('final_cta_click', { location: 'bottom' })}
              >
                🚀 Start Lesson 1 Now
              </EnhancedCTA>
              <EnhancedCTA 
                variant="secondary"
                onClick={() => trackEvent('premium_trial_click', { location: 'cta' })}
              >
                🎁 Try Premium Features
              </EnhancedCTA>
            </div>
            <div className="text-sm opacity-80">
              ✓ No credit card required ✓ 10 lessons completely free ✓ Start learning in 30 seconds
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🎓</span>
                <span className="text-2xl font-bold">Français<span className="text-blue-400">Libre</span></span>
              </Link>
              <p className="text-gray-400 mb-4">Making French learning accessible through proven methods and modern technology.</p>
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
                <li><Link href="/lessons/beginner" className="hover:text-white transition">Beginner Lessons</Link></li>
                <li><Link href="/lessons" className="hover:text-white transition">All Lessons</Link></li>
                <li><a href="#" className="hover:text-white transition">Grammar Guide</a></li>
                <li><a href="#" className="hover:text-white transition">Vocabulary Builder</a></li>
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
