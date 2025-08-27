/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* Vercel Deployment Fix - Commit 5487d07 - All compilation errors resolved */
'use client'

// Bulletproof inline CSS animated checkmark
const AnimatedCheckmark = ({ delay = 0 }: { delay?: number }) => {
  return (
    <span 
      className="text-green-500 ml-3 text-lg inline-block"
      style={{
        animation: 'pulse 2s ease-in-out infinite',
        animationDelay: `${delay}ms`,
        display: 'inline-block'
      }}
    >
      ✓
    </span>
  )
}

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
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-[20px] border-l-4 border-blue-400 shadow-[inset_0_8px_32px_rgba(59,130,246,0.1),0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_8px_32px_rgba(59,130,246,0.15),0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-3">
        <div className="font-bold text-gray-900 text-lg">
          {examples[currentExample].verb} ({examples[currentExample].translation})
        </div>
        <button
          onClick={() => playPronunciation(examples[currentExample].verb)}
          disabled={isPlaying}
          className="text-blue-500 hover:text-blue-600 transition-colors p-2 rounded-[16px] hover:bg-blue-50"
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
              className="text-gray-400 hover:text-blue-500 transition-colors text-sm p-1 rounded-[12px] hover:bg-blue-50"
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
              index === currentExample ? 'bg-blue-500' : 'bg-gray-300'
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
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[24px] shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_20px_60px_rgba(0,0,0,0.12)] hover:shadow-[inset_0_8px_32px_rgba(59,130,246,0.12),0_24px_80px_rgba(0,0,0,0.16)] transition-all duration-300 hover:scale-[1.02] max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-gray-900 text-xl">Try a Quick Lesson</h4>
        <div className="flex items-center space-x-2">
          <div className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-[16px]">
            {currentStep + 1}/{steps.length}
          </div>
          <button
            onClick={() => playAudio(steps[currentStep].audio)}
            className="text-blue-500 hover:text-blue-600 transition-colors p-2 rounded-[16px] hover:bg-blue-50"
            title="Play pronunciation"
          >
            🔊
          </button>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-3 flex-1 rounded-[12px] transition-all duration-300 ${
                completedSteps.includes(index) 
                  ? 'bg-green-400 shadow-[inset_0_2px_8px_rgba(34,197,94,0.3)]' 
                  : index === currentStep 
                    ? 'bg-blue-400 shadow-[inset_0_2px_8px_rgba(59,130,246,0.3)]' 
                    : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <p className="font-medium text-gray-800 text-lg">{steps[currentStep].question}</p>
        <div className="space-y-3">
          {steps[currentStep].options.map((option, index) => (
            <button
              key={index}
              disabled={showFeedback}
              className={`w-full text-left p-4 border-2 rounded-[16px] transition-all duration-300 ${
                selectedAnswer === option
                  ? isCorrect
                    ? 'bg-green-100 border-green-400 text-green-800 shadow-[inset_0_4px_16px_rgba(34,197,94,0.2)]'
                    : 'bg-red-100 border-red-400 text-red-800 shadow-[inset_0_4px_16px_rgba(239,68,68,0.2)]'
                  : 'hover:bg-blue-50 hover:border-blue-300 hover:shadow-[inset_0_4px_16px_rgba(59,130,246,0.1)]'
              } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={() => handleAnswer(option)}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{option}</span>
                {selectedAnswer === option && (
                  <span className="text-xl">
                    {isCorrect ? '✓' : '✗'}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
        
        {showFeedback && isCorrect && (
          <div className="bg-green-50 border-2 border-green-200 rounded-[16px] p-4 shadow-[inset_0_4px_16px_rgba(34,197,94,0.1)]">
            <p className="text-green-800 text-sm">{steps[currentStep].feedback}</p>
          </div>
        )}
        
        {showFeedback && !isCorrect && (
          <div className="bg-orange-50 border-2 border-orange-200 rounded-[16px] p-4 shadow-[inset_0_4px_16px_rgba(249,115,22,0.1)]">
            <p className="text-orange-800 text-sm">
              Try again! The correct answer is "{steps[currentStep].answer}".
            </p>
          </div>
        )}

        {completedSteps.length === steps.length && (
          <div className="bg-blue-50 border-2 border-blue-200 rounded-[16px] p-6 text-center shadow-[inset_0_4px_16px_rgba(59,130,246,0.1)]">
            <p className="text-blue-800 font-medium mb-2 text-lg">🎉 Congratulations!</p>
            <p className="text-blue-700 text-sm mb-4">You've completed the mini lesson!</p>
            <Link 
              href="/lessons/beginner/1"
              className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-[16px] hover:bg-blue-600 transition-all duration-300 text-sm font-medium shadow-[0_8px_24px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_32px_rgba(59,130,246,0.4)] hover:scale-105"
            >
              Start Full Lessons →
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

// Enhanced CTA Button Component with Claymorphism
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
  const baseClasses = "px-8 py-4 rounded-[20px] font-semibold text-lg transition-all duration-300 transform hover:scale-105 relative inline-block text-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
  const variants = {
    primary: "bg-gradient-to-br from-yellow-300 to-yellow-400 text-gray-900 hover:from-yellow-400 hover:to-yellow-500 shadow-[0_8px_32px_rgba(234,179,8,0.3)] hover:shadow-[0_12px_40px_rgba(234,179,8,0.4)]",
    secondary: "border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-white/10 backdrop-blur-sm",
    blue: "bg-gradient-to-br from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600 shadow-[0_8px_32px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]"
  }

  if (href) {
    return (
      <Link 
        href={href}
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        {children}
        {showUrgency && (
          <div className="absolute -top-2 -right-2 bg-red-400 text-white text-xs px-3 py-1 rounded-[16px] animate-pulse shadow-[0_4px_16px_rgba(239,68,68,0.4)]">
            Limited Time
          </div>
        )}
      </Link>
    )
  }

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {showUrgency && (
        <div className="absolute -top-2 -right-2 bg-red-400 text-white text-xs px-3 py-1 rounded-[16px] animate-pulse shadow-[0_4px_16px_rgba(239,68,68,0.4)]">
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

    // Add custom CSS for checkmark animations
    const style = document.createElement('style')
    style.textContent = `
      @keyframes customPulse {
        0%, 100% { 
          opacity: 1; 
          transform: scale(1); 
        }
        50% { 
          opacity: 0.5; 
          transform: scale(1.2); 
        }
      }
      
      .animate-pulse {
        animation: customPulse 2s ease-in-out infinite !important;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      subscription.unsubscribe()
      if (style.parentNode) {
        style.parentNode.removeChild(style)
      }
    }
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
      {/* Skip Navigation for Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-500 text-white p-3 z-50 rounded-[16px] shadow-[0_8px_24px_rgba(59,130,246,0.3)]">
        Skip to main content
      </a>

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
              <a href="#features" className="text-gray-900 hover:text-blue-500 transition-colors duration-300 px-3 py-2 rounded-[16px] hover:bg-blue-50">AI Features</a>
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
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
            <div className="px-6 py-4 space-y-3">
              <Link 
                href="/lessons" 
                className="block py-3 px-4 text-gray-900 hover:text-blue-500 transition-colors duration-300 rounded-[16px] hover:bg-blue-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Lessons
              </Link>
              <a 
                href="#features" 
                className="block py-3 px-4 text-gray-900 hover:text-blue-500 transition-colors duration-300 rounded-[16px] hover:bg-blue-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AI Features
              </a>
              <a 
                href="#pricing" 
                className="block py-3 px-4 text-gray-900 hover:text-blue-500 transition-colors duration-300 rounded-[16px] hover:bg-blue-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#community" 
                className="block py-3 px-4 text-gray-900 hover:text-blue-500 transition-colors duration-300 rounded-[16px] hover:bg-blue-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </a>
              {user ? (
                <>
                  <Link 
                    href="/dashboard"
                    className="block py-3 px-4 text-gray-900 hover:text-blue-500 transition-colors duration-300 rounded-[16px] hover:bg-blue-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={() => {
                      handleAuthAction('signout')
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full text-left py-3 px-4 text-red-500 hover:text-red-600 transition-colors duration-300 rounded-[16px] hover:bg-red-50"
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
                  className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-[16px] hover:from-blue-600 hover:to-blue-700 transition-all duration-300 mt-4 text-center font-medium shadow-[0_8px_24px_rgba(59,130,246,0.3)]"
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
        <section aria-labelledby="hero-heading" className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white pt-24 pb-20 relative overflow-hidden">
          {/* Soft floating elements for depth */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-[32px] blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-[24px] blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-[16px] blur-xl animate-pulse delay-500"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Master French with <span className="text-yellow-300 drop-shadow-lg">Smart</span> Learning
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-95">
                Learn French through proven dialogue-based lessons and structured grammar practice. Start with 10 free A1 lessons and progress to A2 level!
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
              <div className="flex justify-center items-center space-x-8 text-sm opacity-90">
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-[16px] border border-white/20">
                  <span className="text-green-300 mr-2">✓</span>
                  10 Free A1 Lessons + A2 Level
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-[16px] border border-white/20">
                  <span className="text-blue-200 mr-2">🎵</span>
                  Audio Pronunciation
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-[16px] border border-white/20">
                  <span className="text-purple-200 mr-2">📚</span>
                  Proven Book Methods
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20" aria-label="Platform statistics">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-[24px] shadow-[inset_0_8px_32px_rgba(59,130,246,0.1),0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[inset_0_8px_32px_rgba(59,130,246,0.15),0_16px_48px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105 border border-white/40">
                  <div className="text-5xl font-bold text-blue-500 mb-3 group-hover:scale-110 transition-transform duration-300">50K+</div>
                  <div className="text-gray-700 font-medium">Active Learners</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-[24px] shadow-[inset_0_8px_32px_rgba(34,197,94,0.1),0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[inset_0_8px_32px_rgba(34,197,94,0.15),0_16px_48px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105 border border-white/40">
                  <div className="text-5xl font-bold text-green-500 mb-3 group-hover:scale-110 transition-transform duration-300">200+</div>
                  <div className="text-gray-700 font-medium">Interactive Lessons</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-[24px] shadow-[inset_0_8px_32px_rgba(168,85,247,0.1),0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[inset_0_8px_32px_rgba(168,85,247,0.15),0_16px_48px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105 border border-white/40">
                  <div className="text-5xl font-bold text-purple-500 mb-3 group-hover:scale-110 transition-transform duration-300">95%</div>
                  <div className="text-gray-700 font-medium">Success Rate</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-[24px] shadow-[inset_0_8px_32px_rgba(249,115,22,0.1),0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[inset_0_8px_32px_rgba(249,115,22,0.15),0_16px_48px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105 border border-white/40">
                  <div className="text-5xl font-bold text-orange-500 mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-gray-700 font-medium">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="demo" className="bg-gradient-to-br from-blue-100 to-blue-200 py-20 relative overflow-hidden">
          {/* Soft background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-20 w-40 h-40 bg-blue-300/20 rounded-[40px] blur-2xl"></div>
            <div className="absolute bottom-10 left-20 w-32 h-32 bg-blue-400/20 rounded-[32px] blur-2xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Experience Learning Right Now</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Try our interactive lesson format - no signup required
              </p>
            </div>
            <MiniLesson />
          </div>
        </section>

        {/* Learning Path Section */}
        <section id="courses" className="bg-gradient-to-br from-gray-50 to-gray-100 py-24 relative overflow-hidden">
          {/* Soft background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-48 h-48 bg-blue-200/10 rounded-[48px] blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-200/10 rounded-[40px] blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Complete French Learning Journey</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Master French through our comprehensive curriculum combining dialogue immersion and grammar mastery
              </p>
            </div>

            {/* Learning Tracks */}
            <div className="grid md:grid-cols-2 gap-10 mb-20">
              {/* Grammar Track */}
              <div className="bg-white/90 backdrop-blur-sm rounded-[28px] p-10 shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_20px_60px_rgba(0,0,0,0.12)] hover:shadow-[inset_0_8px_32px_rgba(59,130,246,0.12),0_28px_80px_rgba(0,0,0,0.16)] transition-all duration-300 hover:scale-[1.02] border border-white/40">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-[20px] mr-6 shadow-[inset_0_4px_16px_rgba(59,130,246,0.2)]">
                    <div className="text-3xl text-blue-600">📚</div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Grammar Mastery Track</h3>
                    <p className="text-gray-700 text-lg">Systematic French Grammar Foundation</p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-[16px] border border-blue-200/50">
                    <span className="font-medium text-gray-900">Present Tense & Regular Verbs</span>
                                          <div className="flex items-center">
                        <AnimatedProgressBar progress={100} color="blue" showPercentage />
                        <AnimatedCheckmark delay={0} />
                      </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-[16px] border border-blue-200/50">
                    <span className="font-medium text-gray-900">Irregular Verbs & Conjugation</span>
                                          <div className="flex items-center">
                        <AnimatedProgressBar progress={userProgress.grammar} color="blue" delay={200} showPercentage />
                        <AnimatedCheckmark delay={500} />
                      </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-[16px] border border-blue-200/50">
                    <span className="font-medium text-gray-900">Past Tenses (Passé Composé, Imparfait)</span>
                                          <div className="flex items-center">
                        <AnimatedProgressBar progress={40} color="blue" delay={400} showPercentage />
                        <AnimatedCheckmark delay={1000} />
                      </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-[16px] border border-blue-200/50">
                    <span className="font-medium text-gray-900">Future & Conditional Tenses</span>
                    <div className="flex items-center">
                      <AnimatedProgressBar progress={0} color="gray" delay={600} />
                      <span className="text-gray-700 ml-3 bg-gray-100 px-3 py-1 rounded-[12px]">🔒 Premium</span>
                    </div>
                  </div>
                </div>
                <EnhancedCTA 
                  variant="blue" 
                  className="w-full mt-8 py-4 text-lg"
                  href="/lessons/beginner/1"
                  onClick={() => trackEvent('track_click', { track: 'grammar' })}
                >
                  Start Grammar Lessons
                </EnhancedCTA>
              </div>

              {/* Conversation Track */}
              <div className="bg-white/90 backdrop-blur-sm rounded-[28px] p-10 shadow-[inset_0_8px_32px_rgba(34,197,94,0.08),0_20px_60px_rgba(0,0,0,0.12)] hover:shadow-[inset_0_8px_32px_rgba(34,197,94,0.12),0_28px_80px_rgba(0,0,0,0.16)] transition-all duration-300 hover:scale-[1.02] border border-white/40">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-[20px] mr-6 shadow-[inset_0_4px_16px_rgba(34,197,94,0.2)]">
                    <div className="text-3xl text-green-600">💬</div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Dialogue Practice</h3>
                    <p className="text-gray-700 text-lg">Real-world French Communication</p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-[16px] border border-green-200/50">
                    <span className="font-medium text-gray-900">Greetings & Basic Introductions</span>
                                          <div className="flex items-center">
                        <AnimatedProgressBar progress={100} color="green" showPercentage />
                        <AnimatedCheckmark delay={300} />
                      </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-[16px] border border-green-200/50">
                    <span className="font-medium text-gray-900">Restaurant & Dining Situations</span>
                                          <div className="flex items-center">
                        <AnimatedProgressBar progress={80} color="green" delay={200} showPercentage />
                        <AnimatedCheckmark delay={800} />
                      </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-[16px] border border-green-200/50">
                    <span className="font-medium text-gray-900">Shopping & Daily Errands</span>
                                          <div className="flex items-center">
                        <AnimatedProgressBar progress={userProgress.conversation} color="green" delay={400} showPercentage />
                        <AnimatedCheckmark delay={1500} />
                      </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-[16px] border border-green-200/50">
                    <span className="font-medium text-gray-900">Travel & Accommodation</span>
                    <div className="flex items-center">
                      <AnimatedProgressBar progress={0} color="gray" delay={600} />
                      <span className="text-gray-700 ml-3 bg-gray-100 px-3 py-1 rounded-[12px]">🔒 Premium</span>
                    </div>
                  </div>
                </div>
                <EnhancedCTA
                  variant="blue"
                  className="w-full mt-8 py-4 text-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                  href="/lessons/beginner/1"
                  onClick={() => trackEvent('track_click', { track: 'conversation' })}
                >
                  Practice Dialogues
                </EnhancedCTA>
              </div>
            </div>

            {/* Sample Lessons Preview */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-[20px] p-8 shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_16px_48px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_8px_32px_rgba(59,130,246,0.12),0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] border border-white/40">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-[16px] mb-6 border border-blue-200/50">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Lesson 1: Greetings & Introductions</h4>
                  <div className="text-gray-700 mb-4">Learn essential French greetings</div>
                  <InteractiveExample />
                </div>
                <EnhancedCTA 
                  variant="blue" 
                  className="w-full py-3 text-base"
                  href="/lessons/beginner/1"
                  onClick={() => trackEvent('lesson_preview_click', { lesson: 'greetings' })}
                >
                  ▶️ Start This Lesson
                </EnhancedCTA>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-[20px] p-8 shadow-[inset_0_8px_32px_rgba(34,197,94,0.08),0_16px_48px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_8px_32px_rgba(34,197,94,0.12),0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] border border-white/40">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-[16px] mb-6 border border-green-200/50">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Dialogue: Meeting Someone New</h4>
                  <div className="text-gray-700 mb-4">Practice natural conversation</div>
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-[16px] border-l-4 border-green-400 shadow-[inset_0_4px_16px_rgba(34,197,94,0.1)]">
                    <div className="space-y-3">
                      <div>
                        <span className="font-bold text-green-700">Marie:</span> 
                        <span className="text-green-600 ml-2">"Bonjour! Je m'appelle Marie."</span>
                        <div className="text-gray-600 italic text-sm mt-1">"Hello! My name is Marie."</div>
                      </div>
                      <div>
                        <span className="font-bold text-green-700">Vous:</span> 
                        <span className="text-green-600 ml-2">"Enchanté! Moi, c'est..."</span>
                        <div className="text-gray-600 italic text-sm mt-1">"Nice to meet you! I'm..."</div>
                      </div>
                    </div>
                  </div>
                </div>
                <EnhancedCTA
                  variant="blue"
                  className="w-full py-3 text-base bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                  href="/lessons/beginner/2"
                  onClick={() => trackEvent('lesson_preview_click', { lesson: 'dialogue_intro' })}
                >
                  🎤 Practice Speaking
                </EnhancedCTA>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-[20px] p-8 shadow-[inset_0_8px_32px_rgba(168,85,247,0.08),0_16px_48px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_8px_32px_rgba(168,85,247,0.12),0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] border border-white/40 border-2 border-purple-200/50">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-[16px] mb-6 border border-purple-200/50">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Premium: AI Conversation</h4>
                  <div className="text-gray-700 mb-4">Chat with AI tutor in French</div>
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-[16px] border-l-4 border-purple-400 shadow-[inset_0_4px_16px_rgba(168,85,247,0.1)]">
                    <div className="flex items-center mb-3">
                      <span className="text-purple-500 mr-2 text-lg">🤖</span>
                      <span className="font-bold text-purple-700">Marie (AI Tutor)</span>
                    </div>
                    <div>
                      <span className="text-purple-600 font-semibold">"Bonjour! Voulez-vous pratiquer?"</span>
                      <div className="text-gray-600 italic text-sm mt-1">"Hello! Would you like to practice?"</div>
                    </div>
                  </div>
                </div>
                <button 
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-[16px] hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-base font-medium shadow-[0_8px_24px_rgba(168,85,247,0.3)] hover:shadow-[0_12px_32px_rgba(168,85,247,0.4)] hover:scale-105"
                  onClick={() => trackEvent('ai_chat_preview_click', { location: 'lesson_preview' })}
                >
                  🧠 Try AI Chat (Premium)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section id="features" className="bg-gradient-to-br from-white to-gray-50 py-24 relative overflow-hidden">
          {/* Soft background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-56 h-56 bg-blue-200/10 rounded-[56px] blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-200/10 rounded-[48px] blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-200/10 rounded-[40px] blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Smart Learning Features</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Experience personalized French learning with modern technology and proven teaching methods
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Audio Pronunciation */}
              <div className="bg-white/90 backdrop-blur-sm rounded-[28px] p-10 shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_20px_60px_rgba(0,0,0,0.12)] hover:shadow-[inset_0_8px_32px_rgba(59,130,246,0.12),0_28px_80px_rgba(0,0,0,0.16)] transition-all duration-300 hover:scale-[1.02] border border-white/40 group">
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-20 h-20 rounded-[20px] flex items-center justify-center mb-8 shadow-[0_8px_32px_rgba(59,130,246,0.3)] group-hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] transition-all duration-300">
                  <span className="text-3xl text-white">🔊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Audio Pronunciation</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">Listen to native pronunciation for every dialogue and vocabulary word. Practice speaking with immediate audio feedback.</p>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-[16px] mb-6 border border-blue-200/50">
                  <div className="text-gray-900 mb-3 font-medium">Available in Free Plan:</div>
                  <div className="font-semibold text-blue-600 text-lg">Basic TTS for all lessons</div>
                </div>
                <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm px-4 py-2 rounded-[16px] font-medium shadow-[0_4px_16px_rgba(59,130,246,0.3)]">Free Feature</span>
              </div>

              {/* Dialogue-Based Learning */}
              <div className="bg-white/90 backdrop-blur-sm rounded-[28px] p-10 shadow-[inset_0_8px_32px_rgba(34,197,94,0.08),0_20px_60px_rgba(0,0,0,0.12)] hover:shadow-[inset_0_8px_32px_rgba(34,197,94,0.12),0_28px_80px_rgba(0,0,0,0.16)] transition-all duration-300 hover:scale-[1.02] border border-white/40 group">
                <div className="bg-gradient-to-br from-green-400 to-green-500 w-20 h-20 rounded-[20px] flex items-center justify-center mb-8 shadow-[0_8px_32px_rgba(34,197,94,0.3)] group-hover:shadow-[0_12px_40px_rgba(34,197,94,0.4)] transition-all duration-300">
                  <span className="text-3xl text-white">💬</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Proven Teaching Method</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">Learn through real conversations first, then understand the grammar. Based on successful language learning books used by millions.</p>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-[16px] mb-6 border border-green-200/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-900 font-medium">Method Effectiveness</span>
                    <span className="text-green-600 font-bold text-xl">95%</span>
                  </div>
                  <AnimatedProgressBar progress={95} color="green" />
                </div>
                <span className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white text-sm px-4 py-2 rounded-[16px] font-medium shadow-[0_4px_16px_rgba(34,197,94,0.3)]">Core Method</span>
              </div>

              {/* AI-Powered Features */}
              <div className="bg-white/90 backdrop-blur-sm rounded-[28px] p-10 shadow-[inset_0_8px_32px_rgba(168,85,247,0.08),0_20px_60px_rgba(0,0,0,0.12)] hover:shadow-[inset_0_8px_32px_rgba(168,85,247,0.12),0_28px_80px_rgba(0,0,0,0.16)] transition-all duration-300 hover:scale-[1.02] border border-white/40 group">
                <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-20 h-20 rounded-[20px] flex items-center justify-center mb-8 shadow-[0_8px_32px_rgba(168,85,247,0.3)] group-hover:shadow-[0_12px_40px_rgba(168,85,247,0.4)] transition-all duration-300">
                  <span className="text-3xl text-white">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Enhancement</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">Get personalized exercise generation, advanced speech analysis, and 24/7 conversation practice with premium features.</p>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-[16px] mb-6 border border-purple-200/50">
                  <div className="text-gray-900">
                    <div className="font-medium mb-2">Premium AI Features:</div>
                    <div className="text-gray-700">Speech Analysis, Exercise Generation, AI Chat</div>
                  </div>
                </div>
                <span className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm px-4 py-2 rounded-[16px] font-medium shadow-[0_4px_16px_rgba(168,85,247,0.3)]">Premium Feature</span>
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
        <section className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white py-24 relative overflow-hidden">
          {/* Soft floating elements for depth */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-48 h-48 bg-white/10 rounded-[48px] blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-[40px] blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/10 rounded-[32px] blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Start Your French Journey?</h2>
            <p className="text-xl mb-10 opacity-95">
              Begin with our first 10 free A1 lessons and progress to A2 level for intermediate French skills
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12">
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
            <div className="flex justify-center items-center space-x-8 text-sm opacity-90">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-[16px] border border-white/20">
                <span className="text-green-300 mr-2">✓</span>
                No credit card required
              </div>
                              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-[16px] border border-white/20">
                  <span className="text-blue-200 mr-2">✓</span>
                  10 A1 lessons + A2 level free
                </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-[16px] border border-white/20">
                <span className="text-purple-200 mr-2">✓</span>
                Start learning in 30 seconds
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
        {/* Soft background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/10 rounded-[40px] blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-500/10 rounded-[32px] blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-10 mb-16">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-6 group">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🎓</span>
                <span className="text-3xl font-bold">Français<span className="text-blue-400">Libre</span></span>
              </Link>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">Making French learning accessible through proven methods and modern technology.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-2xl hover:scale-110" aria-label="Facebook">📘</a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-2xl hover:scale-110" aria-label="Twitter">🐦</a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-2xl hover:scale-110" aria-label="Instagram">📷</a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-2xl hover:scale-110" aria-label="YouTube">📺</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Learning</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/lessons/beginner" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">A1 Beginner Lessons</Link></li>
                <li><Link href="/lessons/elementary" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">A2 Elementary Lessons</Link></li>
                <li><Link href="/lessons" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">All Lessons by Level</Link></li>
                <li><Link href="/grammar-guide" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Grammar Guide</Link></li>
                <li><Link href="/vocabulary-builder" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Vocabulary Builder</Link></li>
                <li><Link href="/pronunciation-guide" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Pronunciation Guide</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Community</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/community/study-groups" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Study Groups</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Language Exchange</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Live Events</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Success Stories</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Forum</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Support</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/support/help-center" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Help Center</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Contact Us</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Privacy Policy</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Terms of Service</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Feedback</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-10 text-center text-gray-400">
            <p className="text-lg">&copy; 2025 FrançaisLibre. All rights reserved. Made with ❤️ for French learners worldwide.</p>
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
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.5; 
            transform: scale(1.2); 
          }
        }
      `}</style>
    </div>
  )
}
