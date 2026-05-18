/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* Vercel Deployment Fix - Commit 5487d07 - All compilation errors resolved */
'use client'
import { useState, useEffect, lazy, Suspense } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '../../lib/supabase'
import Link from 'next/link'
import Image from 'next/image'

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
  
  // Stitch styling mapping
  const bgColors: Record<string, string> = {
    blue: "bg-[var(--color-primary)]",
    green: "bg-[var(--color-tertiary)]",
    gray: "bg-[var(--color-surface-container-high)]"
  }
  const selectedBg = bgColors[color] || bgColors.blue;

  return (
    <div className="flex items-center space-x-2">
      <div className="w-32 bg-[var(--color-surface-container-lowest)] rounded-full h-2 overflow-hidden">
        <div 
          className={`${selectedBg} h-2 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${currentProgress}%` }}
        />
      </div>
      {showPercentage && (
        <span className="text-sm font-label text-[var(--color-on-surface-variant)] min-w-[3rem]">{currentProgress}%</span>
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
    <div className="bg-[var(--color-surface)] p-6 md:p-8 rounded-3xl border border-[var(--color-outline-variant)]/50 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-[var(--color-primary)]/10"></div>
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-[var(--color-outline-variant)]/30 relative z-10">
        <div className="font-display font-bold text-[var(--color-on-surface)] text-xl flex items-center">
          <span className="bg-[var(--color-primary)] text-[var(--color-on-primary)] text-[10px] uppercase px-2 py-1 rounded mr-3 font-label tracking-wider">Verb</span>
          {examples[currentExample].verb} 
          <span className="text-[var(--color-on-surface-variant)] font-body text-base ml-2 font-normal italic">({examples[currentExample].translation})</span>
        </div>
        <button
          onClick={() => playPronunciation(examples[currentExample].verb)}
          disabled={isPlaying}
          className="text-[var(--color-primary)] hover:text-[var(--color-tertiary)] bg-[var(--color-surface-container-lowest)] hover:bg-[var(--color-surface-container-low)] transition-colors p-2.5 rounded-full border border-[var(--color-outline-variant)]/50 flex items-center justify-center"
          title="Play pronunciation"
        >
          <span className="material-symbols-outlined text-[20px]">{isPlaying ? 'volume_up' : 'volume_down'}</span>
        </button>
      </div>
      <div className="space-y-4 relative z-10">
        {examples[currentExample].forms.map((form, index) => (
          <div key={index} className="animate-fade-in flex items-center justify-between bg-[var(--color-surface-container-lowest)] p-3 rounded-xl border border-[var(--color-outline-variant)]/50 hover:border-[var(--color-primary)]/30 transition-colors group/item">
            <div className="font-body text-lg">
              <span className="text-[var(--color-on-surface)] font-semibold">{form.french}</span>
              <span className="text-[var(--color-on-surface-variant)] ml-4 italic text-base">{form.english}</span>
            </div>
            <button
              onClick={() => playPronunciation(form.french)}
              disabled={isPlaying}
              className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors text-sm p-2 rounded-full opacity-0 group-hover/item:opacity-100 focus:opacity-100 bg-[var(--color-surface)] shadow-sm border border-[var(--color-outline-variant)] flex items-center justify-center"
              title="Play pronunciation"
            >
              <span className="material-symbols-outlined text-[16px]">volume_up</span>
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex space-x-3 justify-center relative z-10">
        {examples.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentExample(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentExample ? 'w-6 bg-[var(--color-primary)]' : 'w-2 bg-[var(--color-surface-container-highest)] hover:bg-[var(--color-outline-variant)]'
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
    <div className="bg-[var(--color-surface)] p-8 md:p-10 rounded-3xl shadow-xl shadow-black/5 border border-[var(--color-outline-variant)]/50 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 max-w-lg mx-auto relative overflow-hidden group">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-tertiary)] to-[var(--color-primary)]"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-tertiary)]/10 rounded-full blur-3xl group-hover:bg-[var(--color-tertiary)]/20 transition-all duration-500"></div>
      
      <div className="flex items-center justify-between mb-8 pt-2 relative z-10">
        <h4 className="font-display font-bold text-[var(--color-on-surface)] text-2xl">Try a Quick Lesson</h4>
        <div className="flex items-center space-x-3">
          <div className="text-xs font-label font-bold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3 py-1.5 rounded-full border border-[var(--color-primary)]/20">
            {currentStep + 1} / {steps.length}
          </div>
          <button
            onClick={() => playAudio(steps[currentStep].audio)}
            className="text-[var(--color-primary)] bg-[var(--color-surface-container-lowest)] hover:bg-[var(--color-surface-container-low)] transition-colors p-2 rounded-full border border-[var(--color-outline-variant)]/50 shadow-sm flex items-center justify-center"
            title="Play pronunciation"
          >
            <span className="material-symbols-outlined text-[20px]">volume_up</span>
          </button>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="mb-8 relative z-10">
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                completedSteps.includes(index) 
                  ? 'bg-[var(--color-tertiary)] shadow-sm shadow-[var(--color-tertiary)]/20' 
                  : index === currentStep 
                    ? 'bg-[var(--color-primary)] shadow-sm shadow-[var(--color-primary)]/20' 
                    : 'bg-[var(--color-surface-container-high)]'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-6 relative z-10">
        <p className="font-body font-medium text-[var(--color-on-surface)] text-xl leading-relaxed">{steps[currentStep].question}</p>
        <div className="space-y-3">
          {steps[currentStep].options.map((option, index) => (
            <button
              key={index}
              disabled={showFeedback}
              className={`w-full text-left p-4 md:p-5 border-2 rounded-2xl font-body transition-all duration-200 shadow-sm hover:shadow-md ${
                selectedAnswer === option
                  ? isCorrect
                    ? 'bg-[var(--color-tertiary)]/10 border-[var(--color-tertiary)] text-[var(--color-on-surface)] font-bold transform scale-[1.02]'
                    : 'bg-[var(--color-error)]/10 border-[var(--color-error)]/50 text-[var(--color-error)] transform scale-[0.98]'
                  : 'bg-[var(--color-surface)] border-[var(--color-outline-variant)] text-[var(--color-on-surface-variant)] hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-surface-container-lowest)] hover:-translate-y-0.5'
              } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={() => handleAnswer(option)}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg">{option}</span>
                {selectedAnswer === option && (
                  <span className={`text-xl flex items-center justify-center w-8 h-8 rounded-full ${isCorrect ? 'bg-[var(--color-tertiary)] text-[var(--color-on-tertiary)]' : 'bg-[var(--color-error)] text-[var(--color-on-error)]'}`}>
                    <span className="material-symbols-outlined text-[20px]">{isCorrect ? 'check' : 'close'}</span>
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
        
        {showFeedback && isCorrect && (
          <div className="bg-[var(--color-tertiary)]/10 border-l-4 border-[var(--color-tertiary)] rounded-r-xl p-5 animate-fade-in shadow-sm">
            <div className="flex items-start">
              <span className="material-symbols-outlined text-[var(--color-tertiary)] text-2xl mr-3">celebration</span>
              <p className="text-[var(--color-on-surface)] text-base font-body leading-relaxed font-medium pt-1">{steps[currentStep].feedback}</p>
            </div>
          </div>
        )}
        
        {showFeedback && !isCorrect && (
          <div className="bg-[var(--color-error)]/10 border-l-4 border-[var(--color-error)] rounded-r-xl p-5 animate-fade-in shadow-sm">
            <div className="flex items-start">
              <span className="material-symbols-outlined text-[var(--color-error)] text-2xl mr-3">lightbulb</span>
              <p className="text-[var(--color-on-surface)] text-base font-body leading-relaxed font-medium pt-1">
                Try again! The correct answer is <span className="font-bold">"{steps[currentStep].answer}"</span>.
              </p>
            </div>
          </div>
        )}

        {completedSteps.length === steps.length && (
          <div className="bg-[var(--color-surface-container-highest)] text-[var(--color-on-surface)] rounded-2xl p-8 md:p-10 text-center animate-fade-in shadow-xl relative overflow-hidden mt-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-tertiary)]/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--color-primary)]/20 rounded-full blur-2xl"></div>
            <p className="font-display font-bold mb-3 text-3xl text-[var(--color-tertiary)] relative z-10">Bravo ! 👏</p>
            <p className="font-body text-base mb-8 text-[var(--color-on-surface-variant)] relative z-10">You've completed the mini lesson and earned your first XP.</p>
            <EnhancedCTA 
              href="/lessons/beginner/1"
              variant="primary"
              className="w-full relative z-10"
            >
              Continue Your Journey <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
            </EnhancedCTA>
          </div>
        )}
      </div>
    </div>
  )
}

// Enhanced CTA Button Component with Stitch styling
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
  const baseClasses = "px-6 py-3.5 rounded-xl font-sans font-semibold text-[15px] transition-all duration-200 relative inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
  const variants = {
    primary: "bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:opacity-90 hover:shadow-md",
    secondary: "bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)]/50 text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-low)]",
    blue: "bg-[var(--color-tertiary)] text-[var(--color-on-tertiary)] hover:opacity-90 hover:shadow-md"
  }

  if (href) {
    return (
      <Link 
        href={href}
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        {children}
        {showUrgency && (
          <div className="absolute -top-2.5 -right-2.5 bg-red-500 text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full shadow-sm">
            Popular
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
        <div className="absolute -top-2.5 -right-2.5 bg-red-500 text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full shadow-sm">
          Popular
        </div>
      )}
    </button>
  )
}

// Pricing Section Component
function PricingSection() {
  return (
    <section id="pricing" className="bg-[var(--color-surface-container-lowest)] py-24 border-t border-[var(--color-outline-variant)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-[var(--color-surface-container-high)] px-4 py-1.5 rounded-full font-label text-[10px] font-bold tracking-widest uppercase text-[var(--color-on-surface-variant)] mb-4">
            Plans
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-[var(--color-primary)] mb-6">Choose Your Learning Plan</h2>
          <p className="text-lg text-[var(--color-on-surface-variant)] font-body">
            Start with our free plan and upgrade when you're ready for AI-powered acceleration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {/* Free Plan */}
          <div className="bg-[var(--color-surface)] rounded-3xl p-8 shadow-md border border-[var(--color-outline-variant)]/20 hover:shadow-lg transition-shadow">
            <div className="text-center mb-8 border-b border-[var(--color-outline-variant)]/20 pb-8">
              <h3 className="text-xl font-label font-bold text-[var(--color-on-surface-variant)] uppercase tracking-widest mb-4">Free</h3>
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-display font-black text-[var(--color-primary)]">$0</span>
                <span className="text-[var(--color-on-surface-variant)] ml-2 font-body font-medium">/ forever</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 font-body text-[var(--color-on-surface)]">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[var(--color-tertiary)] mr-3" data-icon="check_circle">check_circle</span>
                <span>First 10 Beginner Lessons</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[var(--color-tertiary)] mr-3" data-icon="check_circle">check_circle</span>
                <span>100+ Grammar Exercises</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[var(--color-tertiary)] mr-3" data-icon="check_circle">check_circle</span>
                <span>Basic Audio Pronunciation</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[var(--color-tertiary)] mr-3" data-icon="check_circle">check_circle</span>
                <span>Progress Tracking</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[var(--color-tertiary)] mr-3" data-icon="check_circle">check_circle</span>
                <span>Community Access</span>
              </li>
            </ul>
            <EnhancedCTA 
              variant="secondary" 
              className="w-full font-label tracking-widest text-xs"
              href="/lessons/beginner/1"
              onClick={() => trackEvent('pricing_click', { plan: 'free' })}
            >
              Start Learning Free
            </EnhancedCTA>
          </div>

          {/* Premium Plan */}
          <div className="bg-[var(--color-primary)] rounded-3xl p-8 shadow-xl relative transform md:-translate-y-4 border border-[var(--color-primary)]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-[var(--color-tertiary)] text-[var(--color-on-tertiary)] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md font-label">
                Most Popular
              </div>
            </div>
            <div className="text-center mb-8 border-b border-white/20 pb-8 mt-2">
              <h3 className="text-xl font-label font-bold text-white/80 uppercase tracking-widest mb-4">Premium</h3>
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-display font-black text-white">$4.99</span>
                <span className="text-white/70 ml-2 font-body font-medium">/ month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 font-body text-white/90">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[var(--color-tertiary)] mr-3" data-icon="check_circle">check_circle</span>
                <span className="text-white font-bold">Everything in Free</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[var(--color-tertiary)] mr-3" data-icon="check_circle">check_circle</span>
                <span>Unlimited Lessons Access</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[var(--color-tertiary)] mr-3" data-icon="check_circle">check_circle</span>
                <span>AI Exercise Generation</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[var(--color-tertiary)] mr-3" data-icon="check_circle">check_circle</span>
                <span>Advanced Speech Analysis</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[var(--color-tertiary)] mr-3" data-icon="check_circle">check_circle</span>
                <span>Offline Content Download</span>
              </li>
            </ul>
            <EnhancedCTA 
              variant="blue" 
              className="w-full font-label tracking-widest text-xs"
              onClick={() => trackEvent('pricing_click', { plan: 'premium' })}
            >
              Start 7-Day Free Trial
            </EnhancedCTA>
          </div>

          {/* Pro Plan */}
          <div className="bg-[var(--color-surface)] rounded-3xl p-8 shadow-md border border-[var(--color-outline-variant)]/20 hover:shadow-lg transition-shadow">
            <div className="text-center mb-8 border-b border-[var(--color-outline-variant)]/20 pb-8">
              <h3 className="text-xl font-label font-bold text-[var(--color-on-surface-variant)] uppercase tracking-widest mb-4">Pro</h3>
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-display font-black text-[var(--color-primary)]">$9.99</span>
                <span className="text-[var(--color-on-surface-variant)] ml-2 font-body font-medium">/ month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 font-body text-[var(--color-on-surface)]">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[var(--color-primary)] mr-3" data-icon="check_circle">check_circle</span>
                <span className="font-bold">Everything in Premium</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[var(--color-primary)] mr-3" data-icon="check_circle">check_circle</span>
                <span>24/7 AI Conversation Partner</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[var(--color-primary)] mr-3" data-icon="check_circle">check_circle</span>
                <span>Personalized Learning Path</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[var(--color-primary)] mr-3" data-icon="check_circle">check_circle</span>
                <span>Cultural Deep-Dive Content</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-[var(--color-primary)] mr-3" data-icon="check_circle">check_circle</span>
                <span>Conversation Certification</span>
              </li>
            </ul>
            <EnhancedCTA 
              variant="primary" 
              className="w-full font-label tracking-widest text-xs"
              onClick={() => trackEvent('pricing_click', { plan: 'pro' })}
            >
              Start 14-Day Free Trial
            </EnhancedCTA>
          </div>
        </div>
      </div>
    </section>
  )
}

// Community Section Component
function CommunitySection() {
  return (
    <section id="community" className="bg-[var(--color-surface-container)] text-[var(--color-on-surface)] py-24 border-t border-[var(--color-outline-variant)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-[var(--color-primary)] text-[var(--color-on-primary)] px-4 py-1.5 rounded-full font-label text-[10px] font-bold tracking-widest uppercase mb-4">
            Community
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-[var(--color-primary)] mb-6">Join the FrançaisLibre Community</h2>
          <p className="text-lg text-[var(--color-on-surface-variant)] font-body">
            Connect with fellow learners, practice with native speakers, and share your French learning journey
          </p>
        </div>
        
        {/* Community Image */}
        <div className="mb-20">
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group border border-[var(--color-outline-variant)]/20">
            <Image
              src="/community-group.png"
              alt="French learning community members"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[var(--color-primary)]/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-[var(--color-surface)] border border-[var(--color-outline-variant)]/20 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[var(--color-tertiary)] rounded-xl flex items-center justify-center mr-4 text-[var(--color-on-tertiary)] shadow-sm">
                <span className="material-symbols-outlined text-2xl" data-icon="groups">groups</span>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-[var(--color-primary)]">Study Groups</h3>
                <p className="text-[var(--color-on-surface-variant)] font-label text-[10px] tracking-widest uppercase font-bold mt-1">50,000+ active</p>
              </div>
            </div>
            <p className="text-[var(--color-on-surface-variant)] mb-8 font-body leading-relaxed">Join topic-specific study groups and practice with learners at your exact level.</p>
            <button 
              className="text-[var(--color-secondary)] font-label text-xs uppercase tracking-widest font-bold hover:text-[var(--color-tertiary)] transition-colors flex items-center gap-1"
              onClick={() => trackEvent('community_click', { section: 'study_groups' })}
            >
              Browse Groups <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>

          <div className="bg-[var(--color-surface)] border border-[var(--color-outline-variant)]/20 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-xl flex items-center justify-center mr-4 text-[var(--color-on-secondary)] shadow-sm">
                <span className="material-symbols-outlined text-2xl" data-icon="handshake">handshake</span>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-[var(--color-primary)]">Language Exchange</h3>
                <p className="text-[var(--color-on-surface-variant)] font-label text-[10px] tracking-widest uppercase font-bold mt-1">5,000+ natives</p>
              </div>
            </div>
            <p className="text-[var(--color-on-surface-variant)] mb-8 font-body leading-relaxed">Practice directly with native French speakers who want to learn English.</p>
            <button 
              className="text-[var(--color-secondary)] font-label text-xs uppercase tracking-widest font-bold hover:text-[var(--color-tertiary)] transition-colors flex items-center gap-1"
              onClick={() => trackEvent('community_click', { section: 'language_exchange' })}
            >
              Find Partners <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>

          <div className="bg-[var(--color-surface)] border border-[var(--color-outline-variant)]/20 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[var(--color-primary)] rounded-xl flex items-center justify-center mr-4 text-[var(--color-on-primary)] shadow-sm">
                <span className="material-symbols-outlined text-2xl" data-icon="event">event</span>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-[var(--color-primary)]">Live Events</h3>
                <p className="text-[var(--color-on-surface-variant)] font-label text-[10px] tracking-widest uppercase font-bold mt-1">Weekly sessions</p>
              </div>
            </div>
            <p className="text-[var(--color-on-surface-variant)] mb-8 font-body leading-relaxed">Join live conversation sessions, cultural workshops, and Q&A with language experts.</p>
            <button 
              className="text-[var(--color-secondary)] font-label text-xs uppercase tracking-widest font-bold hover:text-[var(--color-tertiary)] transition-colors flex items-center gap-1"
              onClick={() => trackEvent('community_click', { section: 'live_events' })}
            >
              View Schedule <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="border-t border-[var(--color-outline-variant)]/20 pt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-black text-[var(--color-primary)] mb-2">Student Success Stories</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-surface)] text-[var(--color-on-surface)] rounded-3xl p-8 shadow-xl relative border border-[var(--color-outline-variant)]/20">
              <div className="text-[var(--color-tertiary)] text-6xl font-display absolute top-4 right-8 opacity-20 leading-none">"</div>
              <div className="flex items-center mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[var(--color-tertiary)]">
                  <Image
                    src="/testimonial-woman.png"
                    alt="Sarah Mitchell"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[var(--color-primary)]">Sarah Mitchell</h4>
                  <p className="text-[var(--color-on-surface-variant)] font-label text-[10px] uppercase tracking-widest font-bold mt-1">Student, University of Toronto</p>
                </div>
              </div>
              <p className="text-[var(--color-on-surface)] font-body leading-relaxed mb-6 relative z-10 text-lg">
                FrançaisLibre made learning French actually enjoyable! The progressive lessons from basic dialogues to grammar mastery helped me go from complete beginner to conversational in just 6 months.
              </p>
              <div className="flex text-[var(--color-tertiary)] text-sm">
                ★★★★★
              </div>
            </div>

            <div className="bg-[var(--color-surface)] text-[var(--color-on-surface)] rounded-3xl p-8 shadow-xl relative border border-[var(--color-outline-variant)]/20 md:translate-y-6">
              <div className="text-[var(--color-tertiary)] text-6xl font-display absolute top-4 right-8 opacity-20 leading-none">"</div>
              <div className="flex items-center mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[var(--color-primary)]">
                  <Image
                    src="/testimonial-man.png"
                    alt="Marcus Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[var(--color-primary)]">Marcus Johnson</h4>
                  <p className="text-[var(--color-on-surface-variant)] font-label text-[10px] uppercase tracking-widest font-bold mt-1">Software Engineer</p>
                </div>
              </div>
              <p className="text-[var(--color-on-surface)] font-body leading-relaxed mb-6 relative z-10 text-lg">
                The combination of Assimil-style dialogues and structured grammar exercises is perfect. I love how the free lessons gave me a solid foundation before upgrading to premium features.
              </p>
              <div className="flex text-[var(--color-tertiary)] text-sm">
                ★★★★★
              </div>
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Handle scroll for nav styling
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      subscription.unsubscribe()
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
    <div className="bg-[var(--color-surface)] min-h-screen text-[var(--color-on-surface)] font-body selection:bg-[var(--color-primary)] selection:text-[var(--color-on-primary)]">
      {/* Skip Navigation for Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--color-primary)] text-[var(--color-on-primary)] px-4 py-2 z-50 rounded-lg font-label font-medium">
        Skip to main content
      </a>

      {/* Navigation */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--color-surface)]/95 backdrop-blur-md shadow-[0_20px_40px_rgba(10,25,47,0.04)] py-4' : 'bg-[var(--color-surface)] py-6'}`}>
        <nav className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-12 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center space-x-3 group">
              <span className="material-symbols-outlined text-[var(--color-primary)]" data-icon="menu_book">menu_book</span>
              <span className="text-xl md:text-2xl font-display font-black tracking-tight text-[var(--color-primary)]">
                Français<span className="text-[var(--color-tertiary)]">Libre</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <Link href="/lessons" className="text-[var(--color-primary)]/70 font-label uppercase tracking-widest text-xs hover:text-[var(--color-tertiary)] transition-all duration-300 font-bold">Lessons</Link>
            <a href="#features" className="text-[var(--color-primary)]/70 font-label uppercase tracking-widest text-xs hover:text-[var(--color-tertiary)] transition-all duration-300 font-bold">Features</a>
            <a href="#pricing" className="text-[var(--color-primary)]/70 font-label uppercase tracking-widest text-xs hover:text-[var(--color-tertiary)] transition-all duration-300 font-bold">Pricing</a>
            <a href="#community" className="text-[var(--color-primary)]/70 font-label uppercase tracking-widest text-xs hover:text-[var(--color-tertiary)] transition-all duration-300 font-bold">Community</a>
            
            <div className="pl-6 border-l border-[var(--color-outline-variant)]/30">
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link 
                    href="/dashboard" 
                    className="text-[var(--color-primary)] font-label uppercase tracking-widest text-xs hover:text-[var(--color-tertiary)] transition-colors font-bold"
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={() => handleAuthAction('signout')}
                    className="text-[var(--color-secondary)] hover:text-[var(--color-error)] transition-colors font-label uppercase tracking-widest text-xs font-bold"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => handleAuthAction('signin')}
                  className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-6 py-2.5 rounded-xl font-label text-xs font-bold tracking-widest uppercase hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-black/10"
                >
                  Start Free
                </button>
              )}
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[var(--color-primary)] p-2 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-2xl" data-icon={isMobileMenuOpen ? "close" : "menu"}>
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[var(--color-surface-container-lowest)] border-t border-[var(--color-outline-variant)]/20 shadow-xl font-label">
            <div className="px-6 py-8 flex flex-col gap-6">
              <Link 
                href="/lessons" 
                className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)] hover:text-[var(--color-tertiary)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Lessons
              </Link>
              <a 
                href="#features" 
                className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)] hover:text-[var(--color-tertiary)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)] hover:text-[var(--color-tertiary)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#community" 
                className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)] hover:text-[var(--color-tertiary)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </a>
              <div className="pt-6 border-t border-[var(--color-outline-variant)]/20 flex flex-col gap-4">
                {user ? (
                  <>
                    <Link 
                      href="/dashboard"
                      className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button 
                      onClick={() => {
                        handleAuthAction('signout')
                        setIsMobileMenuOpen(false)
                      }}
                      className="text-left text-sm font-bold uppercase tracking-widest text-[var(--color-error)]"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      handleAuthAction('signin')
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full bg-[var(--color-primary)] text-[var(--color-on-primary)] py-4 rounded-xl text-center font-label text-xs font-bold tracking-widest uppercase shadow-md mt-2"
                  >
                    Start Learning Free
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      <main role="main" id="main-content" className="pt-20">
        {/* Hero Split-Panel Section */}
        <section aria-labelledby="hero-heading" className="flex flex-col lg:flex-row min-h-[795px] bg-[var(--color-surface)]">
          {/* Content Panel */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-20 bg-[var(--color-surface)]">
            <div className="max-w-2xl">
              <span className="inline-block bg-[var(--color-surface-container-high)] px-4 py-1.5 rounded-full font-label text-[10px] font-bold tracking-widest uppercase text-[var(--color-on-surface-variant)] mb-8">
                Master French the smart way
              </span>
              <h1 id="hero-heading" className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] text-[var(--color-primary)] mb-8">
                Speak French <span className="block mt-2">with Confidence.</span>
              </h1>
              <p className="font-body text-xl text-[var(--color-on-surface-variant)] leading-relaxed mb-12 italic">
                Learn French through proven dialogue-based lessons and structured grammar practice. Start with 10 free A1 lessons and progress to fluency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <EnhancedCTA 
                  href="/lessons/beginner/1"
                  onClick={() => trackEvent('hero_cta_click', { location: 'primary' })}
                  className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-8 py-4 rounded-xl font-label text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Start First Lesson Free
                  <span className="material-symbols-outlined text-lg" data-icon="arrow_forward">arrow_forward</span>
                </EnhancedCTA>
                <EnhancedCTA 
                  variant="secondary"
                  onClick={() => {
                    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
                    trackEvent('demo_click', { location: 'hero' })
                  }}
                  className="px-8 py-4 bg-[var(--color-surface-container-high)] border-none text-[var(--color-on-surface)]"
                >
                  Try Interactive Demo
                </EnhancedCTA>
              </div>
              
              <div className="flex items-center gap-6 text-sm font-sans text-[var(--color-on-surface)] font-medium border-t border-[var(--color-outline-variant)]/30 pt-8 mt-4">
                <div className="flex items-center">
                  <div className="flex -space-x-3 mr-4">
                    <div className="w-10 h-10 rounded-full border-2 border-[var(--color-surface)] bg-gray-200 overflow-hidden relative"><Image src="/testimonial-woman.png" alt="Student" fill className="object-cover" /></div>
                    <div className="w-10 h-10 rounded-full border-2 border-[var(--color-surface)] bg-gray-300 overflow-hidden relative"><Image src="/testimonial-man.png" alt="Student" fill className="object-cover" /></div>
                    <div className="w-10 h-10 rounded-full border-2 border-[var(--color-surface)] bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-on-primary)] text-xs font-bold">+10k</div>
                  </div>
                  <span className="font-label">Active Learners</span>
                </div>
                <div className="h-6 w-px bg-[var(--color-outline-variant)]/30"></div>
                <div className="flex items-center text-[var(--color-tertiary)] text-lg">
                  ★★★★★ <span className="text-[var(--color-on-surface)] font-label ml-2 text-sm">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Panel */}
          <div className="w-full lg:w-1/2 relative p-4 md:p-6 lg:p-10 bg-[var(--color-surface)]">
            <div className="relative w-full h-full min-h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-[var(--color-outline-variant)]/30">
              <Image 
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2946&auto=format&fit=crop"
                alt="High-end editorial lifestyle in Paris" 
                fill
                className="object-cover" 
                unoptimized
              />
              
              {/* Floating Feature Badges */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end gap-4 pointer-events-none">
                <div className="bg-[var(--color-surface)]/90 backdrop-blur-md self-start px-6 py-4 rounded-xl shadow-2xl border border-white/20 transform -rotate-2 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[var(--color-tertiary)] text-2xl" data-icon="graphic_eq">graphic_eq</span>
                    <div>
                      <p className="font-label text-[10px] tracking-widest font-bold text-[var(--color-on-surface-variant)] uppercase">PRONUNCIATION</p>
                      <p className="font-display font-bold text-[var(--color-primary)]">Native Audio</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[var(--color-surface)]/90 backdrop-blur-md self-end px-6 py-4 rounded-xl shadow-2xl border border-white/20 transform rotate-1">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[var(--color-tertiary)] text-2xl" data-icon="menu_book">menu_book</span>
                    <div>
                      <p className="font-label text-[10px] tracking-widest font-bold text-[var(--color-on-surface-variant)] uppercase">VOCABULARY</p>
                      <p className="font-display font-bold text-[var(--color-primary)]">1000+ Words</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Caption Section */}
        <section className="bg-[var(--color-surface)] py-24 px-6 md:px-12">
          <div className="max-w-screen-xl mx-auto border-t border-[var(--color-outline-variant)]/20 pt-16 flex flex-col md:flex-row items-baseline gap-8">
            <span className="font-label text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-tertiary)] whitespace-nowrap">The Methodology</span>
            <p className="font-body text-lg md:text-xl lg:text-2xl text-[var(--color-on-surface)] italic leading-relaxed max-w-3xl">
              OUR PROVEN METHOD: Combines traditional learning with modern AI technology for rapid fluency.
            </p>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="demo" className="py-32 bg-[var(--color-surface-container-lowest)] border-y border-[var(--color-outline-variant)]/30 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] border-[40px] border-[var(--color-surface)] rounded-full opacity-50"></div>
            <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] border-[60px] border-[var(--color-surface)] rounded-full opacity-50"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-on-surface)] mb-6 tracking-tight">Experience Learning <span className="text-[var(--color-tertiary)]">Right Now</span></h2>
              <p className="text-xl text-[var(--color-on-surface-variant)] font-body leading-relaxed">
                Try our interactive lesson format - no signup required. Just dive in and start learning.
              </p>
            </div>
            <MiniLesson />
          </div>
        </section>

        {/* Learning Path Section */}
        <section id="courses" className="py-24 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--color-on-surface)] mb-6 tracking-tight">Complete French Learning Journey</h2>
              <p className="text-lg text-[var(--color-on-surface-variant)] font-body">
                Master French through our comprehensive curriculum combining dialogue immersion and grammar mastery
              </p>
            </div>
            
            {/* Learning Image */}
            <div className="mb-20 max-w-5xl mx-auto">
              <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg border border-[var(--color-outline-variant)]">
                <Image
                  src="/learning-study.png"
                  alt="Students studying French together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Learning Tracks */}
            <div className="grid lg:grid-cols-2 gap-8 mb-24 max-w-6xl mx-auto">
              {/* Grammar Track */}
              <div className="bg-[var(--color-surface-container-lowest)] rounded-3xl p-8 md:p-10 shadow-sm border border-[var(--color-outline-variant)]/50 hover:shadow-md transition-shadow">
                <div className="flex items-start mb-8">
                  <div className="bg-[var(--color-primary)] w-14 h-14 rounded-xl flex items-center justify-center mr-5 shrink-0 text-[var(--color-on-primary)] shadow-sm">
                    <span className="material-symbols-outlined text-2xl">book_4</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-[var(--color-on-surface)] mb-1">Grammar Mastery</h3>
                    <p className="text-[var(--color-on-surface-variant)] font-body text-sm">Systematic French Grammar Foundation</p>
                  </div>
                </div>
                <div className="space-y-4 mb-10">
                  <div className="p-5 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-outline-variant)]">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-body font-semibold text-[var(--color-on-surface)]">Present Tense & Regular Verbs</span>
                      <span className="material-symbols-outlined text-[var(--color-tertiary)] font-bold text-[20px]">check</span>
                    </div>
                    <AnimatedProgressBar progress={100} color="blue" />
                  </div>
                  <div className="p-5 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-outline-variant)]">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-body font-semibold text-[var(--color-on-surface)]">Irregular Verbs & Conjugation</span>
                    </div>
                    <AnimatedProgressBar progress={userProgress.grammar} color="blue" delay={200} />
                  </div>
                  <div className="p-5 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-outline-variant)] opacity-70">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-body font-medium text-[var(--color-on-surface)]">Past Tenses</span>
                    </div>
                    <AnimatedProgressBar progress={40} color="blue" delay={400} />
                  </div>
                  <div className="p-5 bg-[var(--color-surface-container-lowest)] border border-dashed border-[var(--color-outline-variant)] rounded-2xl opacity-50">
                    <div className="flex justify-between items-center">
                      <span className="font-body text-[var(--color-on-surface-variant)]">Future Tenses</span>
                      <span className="flex items-center text-xs font-label font-bold bg-[var(--color-surface-container-high)] text-[var(--color-on-surface-variant)] px-2.5 py-1 rounded-md">
                        <span className="material-symbols-outlined text-[14px] mr-1">lock</span> Premium
                      </span>
                    </div>
                  </div>
                </div>
                <EnhancedCTA 
                  variant="primary" 
                  className="w-full py-4"
                  href="/lessons/beginner/1"
                  onClick={() => trackEvent('track_click', { track: 'grammar' })}
                >
                  Start Grammar Lessons
                </EnhancedCTA>
              </div>

              {/* Conversation Track */}
              <div className="bg-[var(--color-surface-container-lowest)] rounded-3xl p-8 md:p-10 shadow-sm border border-[var(--color-outline-variant)]/50 hover:shadow-md transition-shadow">
                <div className="flex items-start mb-8">
                  <div className="bg-[var(--color-tertiary)] w-14 h-14 rounded-xl flex items-center justify-center mr-5 shrink-0 text-[var(--color-on-tertiary)] shadow-sm">
                    <span className="material-symbols-outlined text-2xl">forum</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-[var(--color-on-surface)] mb-1">Dialogue Practice</h3>
                    <p className="text-[var(--color-on-surface-variant)] font-body text-sm">Real-world French Communication</p>
                  </div>
                </div>
                <div className="space-y-4 mb-10">
                  <div className="p-5 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-outline-variant)]">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-body font-semibold text-[var(--color-on-surface)]">Greetings & Intros</span>
                      <span className="material-symbols-outlined text-[var(--color-tertiary)] font-bold text-[20px]">check</span>
                    </div>
                    <AnimatedProgressBar progress={100} color="blue" />
                  </div>
                  <div className="p-5 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-outline-variant)]">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-body font-semibold text-[var(--color-on-surface)]">Restaurant & Dining</span>
                    </div>
                    <AnimatedProgressBar progress={80} color="blue" delay={200} />
                  </div>
                  <div className="p-5 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-outline-variant)] opacity-70">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-body font-medium text-[var(--color-on-surface)]">Shopping & Errands</span>
                    </div>
                    <AnimatedProgressBar progress={userProgress.conversation} color="blue" delay={400} />
                  </div>
                  <div className="p-5 bg-[var(--color-surface-container-lowest)] border border-dashed border-[var(--color-outline-variant)] rounded-2xl opacity-50">
                    <div className="flex justify-between items-center">
                      <span className="font-body text-[var(--color-on-surface-variant)]">Travel & Accommodation</span>
                      <span className="flex items-center text-xs font-label font-bold bg-[var(--color-surface-container-high)] text-[var(--color-on-surface-variant)] px-2.5 py-1 rounded-md">
                        <span className="material-symbols-outlined text-[14px] mr-1">lock</span> Premium
                      </span>
                    </div>
                  </div>
                </div>
                <EnhancedCTA
                  variant="blue"
                  className="w-full py-4"
                  href="/lessons/beginner/1"
                  onClick={() => trackEvent('track_click', { track: 'conversation' })}
                >
                  Practice Dialogues
                </EnhancedCTA>
              </div>
            </div>

            {/* Sample Lessons Preview */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-display font-semibold text-[var(--color-on-surface)]">Preview the Experience</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[var(--color-surface)] rounded-2xl p-6 md:p-8 shadow-sm border border-[var(--color-outline-variant)]/50 hover:shadow-md transition-all flex flex-col h-full">
                <div className="flex-grow">
                  <h4 className="font-display font-bold text-[var(--color-primary)] mb-2 text-lg">Lesson 1: Greetings</h4>
                  <p className="text-[var(--color-on-surface-variant)] font-body text-sm mb-6">Learn essential French greetings</p>
                  <div className="mb-8">
                    <InteractiveExample />
                  </div>
                </div>
                <EnhancedCTA 
                  variant="secondary" 
                  className="w-full py-3 font-label text-xs tracking-widest uppercase"
                  href="/lessons/beginner/1"
                  onClick={() => trackEvent('lesson_preview_click', { lesson: 'greetings' })}
                >
                  Start This Lesson
                </EnhancedCTA>
              </div>

              <div className="bg-[var(--color-surface)] rounded-2xl p-6 md:p-8 shadow-sm border border-[var(--color-outline-variant)]/50 hover:shadow-md transition-all flex flex-col h-full">
                <div className="flex-grow">
                  <h4 className="font-display font-bold text-[var(--color-primary)] mb-2 text-lg">Dialogue Practice</h4>
                  <p className="text-[var(--color-on-surface-variant)] font-body text-sm mb-6">Practice natural conversation</p>
                  <div className="bg-[var(--color-surface-container-lowest)] p-5 rounded-2xl border border-[var(--color-outline-variant)]/50 mb-8">
                    <div className="space-y-4 font-body">
                      <div>
                        <span className="font-bold text-[var(--color-primary)]">Marie:</span> 
                        <span className="text-[var(--color-on-surface)] ml-2">"Bonjour! Je m'appelle Marie."</span>
                        <div className="text-[var(--color-on-surface-variant)] italic text-sm mt-1">"Hello! My name is Marie."</div>
                      </div>
                      <div className="pt-4 border-t border-[var(--color-outline-variant)]/30">
                        <span className="font-bold text-[var(--color-primary)]">Vous:</span> 
                        <span className="text-[var(--color-on-surface)] ml-2">"Enchanté! Moi, c'est..."</span>
                        <div className="text-[var(--color-on-surface-variant)] italic text-sm mt-1">"Nice to meet you! I'm..."</div>
                      </div>
                    </div>
                  </div>
                </div>
                <EnhancedCTA
                  variant="primary"
                  className="w-full py-3 font-label text-xs tracking-widest uppercase"
                  href="/lessons/beginner/2"
                  onClick={() => trackEvent('lesson_preview_click', { lesson: 'dialogue_intro' })}
                >
                  Practice Speaking
                </EnhancedCTA>
              </div>

              <div className="bg-[var(--color-primary)] text-[var(--color-on-primary)] rounded-2xl p-6 md:p-8 shadow-md border border-[var(--color-primary)] hover:shadow-lg transition-all flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-tertiary)]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex-grow relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-display font-bold text-[var(--color-on-primary)] text-lg">AI Conversation</h4>
                    <span className="bg-[var(--color-tertiary)] text-[var(--color-on-tertiary)] text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm font-label tracking-wider">Premium</span>
                  </div>
                  <p className="text-[var(--color-on-primary)]/80 font-body text-sm mb-6">Chat with AI tutor in French</p>
                  <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 mb-8">
                    <div className="flex items-center mb-4 pb-3 border-b border-white/10">
                      <span className="text-2xl mr-3">🤖</span>
                      <span className="font-display font-bold text-[var(--color-tertiary)]">Marie (AI Tutor)</span>
                    </div>
                    <div className="font-body">
                      <span className="text-white font-medium">"Bonjour! Voulez-vous pratiquer?"</span>
                      <div className="text-white/70 italic text-sm mt-2">"Hello! Would you like to practice?"</div>
                    </div>
                  </div>
                </div>
                <button 
                  className="w-full bg-[var(--color-surface)] text-[var(--color-primary)] py-3 rounded-xl hover:bg-[var(--color-surface-container-lowest)] transition-colors duration-200 font-label font-bold text-xs uppercase tracking-widest relative z-10"
                  onClick={() => trackEvent('ai_chat_preview_click', { location: 'lesson_preview' })}
                >
                  Try AI Chat
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Features Section - Bento Grid */}
        <section id="features" className="py-32 bg-[var(--color-primary)] text-[var(--color-on-primary)] relative overflow-hidden border-y border-[var(--color-primary)]">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-tertiary)]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-secondary)]/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-on-primary)] mb-6 tracking-tight">Everything you need to <span className="text-[var(--color-tertiary)] relative inline-block">master French<svg className="absolute w-full h-3 -bottom-1 left-0 text-[var(--color-tertiary)] opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg></span></h2>
              <p className="text-xl text-[var(--color-on-primary)]/80 font-body">
                Experience personalized French learning with modern technology and proven teaching methods.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Feature 1 - Large spanning 2 cols */}
              <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-colors group relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-tertiary)]/10 rounded-full blur-3xl group-hover:bg-[var(--color-tertiary)]/20 transition-colors pointer-events-none"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-16 h-16 bg-[var(--color-tertiary)] rounded-2xl flex items-center justify-center mb-8 text-3xl shadow-lg shadow-[var(--color-tertiary)]/20 transform group-hover:scale-110 transition-transform duration-300">
                    💬
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-white mb-4">Proven Dialogue Method</h3>
                    <p className="text-white/80 font-body text-lg leading-relaxed max-w-lg mb-8">
                      Learn through real conversations first, then understand the grammar. Based on successful language learning techniques used by millions worldwide.
                    </p>
                    <div className="inline-flex items-center text-xs font-label font-bold text-[var(--color-tertiary)] tracking-widest uppercase bg-[var(--color-tertiary)]/10 px-4 py-2 rounded-lg">
                      ★ Core Methodology
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 - Small */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/10 transition-colors flex flex-col justify-between group shadow-lg">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-2xl transform group-hover:rotate-12 transition-transform duration-300">
                  🔊
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">Native Audio</h3>
                  <p className="text-white/70 font-body leading-relaxed mb-8">
                    Listen to native pronunciation for every dialogue and vocabulary word.
                  </p>
                  <div className="inline-flex items-center text-xs font-label font-bold tracking-widest uppercase bg-white/10 text-white px-3 py-2 rounded-lg border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] mr-2"></span>
                    Included in Free
                  </div>
                </div>
              </div>

              {/* Feature 3 - Small */}
              <div className="bg-[var(--color-tertiary)] rounded-3xl p-8 md:p-10 text-[var(--color-on-tertiary)] shadow-xl flex flex-col justify-between group transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>
                <div className="relative z-10 w-14 h-14 bg-white/30 rounded-2xl flex items-center justify-center mb-8 text-2xl shadow-sm transform group-hover:scale-110 transition-transform">
                  🤖
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold mb-3 text-[var(--color-on-tertiary)]">AI Enhancement</h3>
                  <p className="text-[var(--color-on-tertiary)]/90 font-body leading-relaxed mb-8 font-medium">
                    24/7 conversation practice with our intelligent French tutor.
                  </p>
                  <div className="inline-flex items-center text-[10px] font-label font-bold bg-[var(--color-on-tertiary)] text-[var(--color-tertiary)] px-4 py-2 rounded-lg shadow-sm uppercase tracking-widest">
                    Premium Exclusive
                  </div>
                </div>
              </div>

              {/* Feature 4 - Large spanning 2 cols */}
              <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-colors flex flex-col md:flex-row items-center gap-10 group shadow-lg">
                <div className="flex-1">
                  <div className="w-16 h-16 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] border border-[var(--color-secondary)]/30 rounded-2xl flex items-center justify-center mb-8 text-3xl transform group-hover:rotate-12 transition-transform duration-300">
                    📈
                  </div>
                  <h3 className="text-3xl font-display font-bold text-[var(--color-on-primary)] mb-4">Track Your Progress</h3>
                  <p className="text-white/80 font-body text-lg leading-relaxed mb-8 md:mb-0">
                    Watch your skills grow with detailed analytics on your grammar, vocabulary, and speaking progress.
                  </p>
                </div>
                <div className="flex-1 w-full bg-[var(--color-surface)]/10 rounded-2xl p-6 border border-white/10 shadow-inner backdrop-blur-sm">
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between text-sm mb-2 text-white/90 font-label font-bold uppercase tracking-wider"><span>Vocabulary Mastery</span><span className="text-[var(--color-tertiary)]">85%</span></div>
                      <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden"><div className="bg-[var(--color-tertiary)] h-full rounded-full w-[85%]"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2 text-white/90 font-label font-bold uppercase tracking-wider"><span>Grammar Rules</span><span className="text-[var(--color-tertiary)]">60%</span></div>
                      <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden"><div className="bg-[var(--color-tertiary)] h-full rounded-full w-[60%]"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2 text-white/90 font-label font-bold uppercase tracking-wider"><span>Speaking Confidence</span><span className="text-[var(--color-tertiary)]">40%</span></div>
                      <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden"><div className="bg-[var(--color-tertiary)] h-full rounded-full w-[40%]"></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lazy Loaded Sections */}
        <Suspense fallback={
          <div className="py-24 text-center bg-[var(--color-surface-container-lowest)]">
            <div className="animate-pulse max-w-7xl mx-auto px-4">
              <div className="h-10 bg-[var(--color-surface-container-highest)] rounded-lg w-64 mx-auto mb-6"></div>
              <div className="h-4 bg-[var(--color-surface-container-highest)] rounded w-96 mx-auto mb-16"></div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="h-[400px] bg-[var(--color-surface)] rounded-2xl border border-[var(--color-outline-variant)]/30"></div>
                <div className="h-[450px] bg-[var(--color-surface)] rounded-2xl border border-[var(--color-outline-variant)]/30"></div>
                <div className="h-[400px] bg-[var(--color-surface)] rounded-2xl border border-[var(--color-outline-variant)]/30"></div>
              </div>
            </div>
          </div>
        }>
          <LazyPricingSection />
        </Suspense>

        <Suspense fallback={
          <div className="py-24 text-center bg-[var(--color-surface-container)]">
            <div className="animate-pulse max-w-7xl mx-auto px-4">
              <div className="h-10 bg-[var(--color-outline-variant)]/20 rounded-lg w-64 mx-auto mb-6"></div>
              <div className="h-4 bg-[var(--color-outline-variant)]/20 rounded w-96 mx-auto"></div>
            </div>
          </div>
        }>
          <LazyCommunitySection />
        </Suspense>

        {/* Call to Action */}
        <section className="bg-[var(--color-primary)] text-[var(--color-on-primary)] py-24 relative overflow-hidden border-t border-[var(--color-primary)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-tertiary)]/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight">Ready to Start Your French Journey?</h2>
            <p className="text-xl font-body text-[var(--color-on-primary)]/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Begin with our first 10 free A1 lessons and progress to A2 level for intermediate French skills.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <EnhancedCTA 
                variant="blue"
                href="/lessons/beginner/1"
                onClick={() => trackEvent('final_cta_click', { location: 'bottom' })}
                className="w-full sm:w-auto px-10 py-4 text-sm font-label font-bold tracking-widest uppercase shadow-xl"
              >
                Start Lesson 1 Now
              </EnhancedCTA>
              <EnhancedCTA 
                variant="secondary"
                onClick={() => trackEvent('premium_trial_click', { location: 'cta' })}
                className="w-full sm:w-auto px-10 py-4 text-sm font-label font-bold tracking-widest uppercase !text-white !bg-white/10 !border-white/30 hover:!bg-white/20 hover:!border-white"
              >
                Try Premium Features
              </EnhancedCTA>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-label uppercase tracking-wider font-bold text-[var(--color-on-primary)]/70">
              <div className="flex items-center">
                <span className="text-[var(--color-tertiary)] mr-2 material-symbols-outlined text-[18px]">check_circle</span>
                No credit card required
              </div>
              <div className="flex items-center">
                <span className="text-[var(--color-tertiary)] mr-2 material-symbols-outlined text-[18px]">check_circle</span>
                10 A1 lessons + A2 level free
              </div>
              <div className="flex items-center">
                <span className="text-[var(--color-tertiary)] mr-2 material-symbols-outlined text-[18px]">check_circle</span>
                Start learning in 30 seconds
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-surface-container-highest)] text-[var(--color-on-surface)] py-16 border-t border-[var(--color-outline-variant)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                <div className="w-10 h-10 bg-[var(--color-primary)] text-[var(--color-on-primary)] rounded-xl flex items-center justify-center font-display font-bold text-xl transition-colors duration-300 shadow-md">
                  FL
                </div>
                <span className="text-xl font-display font-bold tracking-tight text-[var(--color-primary)]">
                  Français<span className="text-[var(--color-tertiary)]">Libre</span>
                </span>
              </Link>
              <p className="text-[var(--color-on-surface-variant)] font-body mb-8 leading-relaxed">
                Making French learning accessible through proven methods and modern technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-outline-variant)] flex items-center justify-center hover:bg-[var(--color-tertiary)] hover:text-[var(--color-on-tertiary)] hover:border-[var(--color-tertiary)] transition-all" aria-label="Facebook">
                  <span className="font-label font-bold text-xs">FB</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-outline-variant)] flex items-center justify-center hover:bg-[var(--color-tertiary)] hover:text-[var(--color-on-tertiary)] hover:border-[var(--color-tertiary)] transition-all" aria-label="Twitter">
                  <span className="font-label font-bold text-xs">TW</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-outline-variant)] flex items-center justify-center hover:bg-[var(--color-tertiary)] hover:text-[var(--color-on-tertiary)] hover:border-[var(--color-tertiary)] transition-all" aria-label="Instagram">
                  <span className="font-label font-bold text-xs">IG</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-label font-bold text-[var(--color-primary)] mb-6 uppercase tracking-widest text-xs">Learning</h4>
              <ul className="space-y-4 font-body text-[var(--color-on-surface-variant)]">
                <li><Link href="/lessons/beginner" className="hover:text-[var(--color-tertiary)] transition-colors">A1 Beginner Lessons</Link></li>
                <li><Link href="/lessons/elementary" className="hover:text-[var(--color-tertiary)] transition-colors">A2 Elementary Lessons</Link></li>
                <li><Link href="/lessons" className="hover:text-[var(--color-tertiary)] transition-colors">All Lessons by Level</Link></li>
                <li><Link href="/grammar-guide" className="hover:text-[var(--color-tertiary)] transition-colors">Grammar Guide</Link></li>
                <li><Link href="/vocabulary-builder" className="hover:text-[var(--color-tertiary)] transition-colors">Vocabulary Builder</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-label font-bold text-[var(--color-primary)] mb-6 uppercase tracking-widest text-xs">Community</h4>
              <ul className="space-y-4 font-body text-[var(--color-on-surface-variant)]">
                <li><Link href="/community/study-groups" className="hover:text-[var(--color-tertiary)] transition-colors">Study Groups</Link></li>
                <li><Link href="/community" className="hover:text-[var(--color-tertiary)] transition-colors">Language Exchange</Link></li>
                <li><Link href="/community" className="hover:text-[var(--color-tertiary)] transition-colors">Live Events</Link></li>
                <li><Link href="/community" className="hover:text-[var(--color-tertiary)] transition-colors">Success Stories</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-label font-bold text-[var(--color-primary)] mb-6 uppercase tracking-widest text-xs">Support</h4>
              <ul className="space-y-4 font-body text-[var(--color-on-surface-variant)]">
                <li><Link href="/support/help-center" className="hover:text-[var(--color-tertiary)] transition-colors">Help Center</Link></li>
                <li><Link href="/support" className="hover:text-[var(--color-tertiary)] transition-colors">Contact Us</Link></li>
                <li><Link href="/support" className="hover:text-[var(--color-tertiary)] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/support" className="hover:text-[var(--color-tertiary)] transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[var(--color-outline-variant)]/30 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-label font-bold tracking-wider uppercase text-[var(--color-on-surface-variant)]">
            <p>&copy; {new Date().getFullYear()} FrançaisLibre. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Made with 💛 for French learners worldwide.</p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
