'use client'

/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react'
import Link from 'next/link'

export default function HelpCenterPage() {
  const [activeCategory, setActiveCategory] = useState('getting-started')
  const [searchTerm, setSearchTerm] = useState('')

  const helpCategories = {
    'getting-started': 'Getting Started',
    'lessons': 'Lessons & Learning',
    'account': 'Account & Settings',
    'technical': 'Technical Support',
    'billing': 'Billing & Premium'
  }

  const faqData = {
    'getting-started': [
      {
        question: 'How do I start learning French?',
        answer: 'Begin with our free beginner lessons! Start with Lesson 1 which covers basic greetings and introductions. Each lesson builds upon the previous one, so we recommend following them in order.'
      },
      {
        question: 'Do I need to create an account?',
        answer: 'While you can access our free lessons without an account, creating one allows you to track your progress, save your favorite content, and access additional features.'
      },
      {
        question: 'How much time should I spend studying?',
        answer: 'We recommend 15-30 minutes daily for consistent progress. Each lesson takes about 20-30 minutes to complete, including exercises and practice.'
      }
    ],
    'lessons': [
      {
        question: 'How many lessons are available?',
        answer: 'We currently have 5 comprehensive beginner lessons, with more being added regularly. Each lesson includes dialogue, grammar, vocabulary, and interactive exercises.'
      },
      {
        question: 'Can I skip lessons?',
        answer: 'While you can technically skip ahead, we strongly recommend following the lesson order as each builds upon previous concepts and vocabulary.'
      },
      {
        question: 'How do I practice pronunciation?',
        answer: 'Each lesson includes audio pronunciation guides and interactive exercises. You can also use our Pronunciation Guide for detailed tips and practice words.'
      }
    ],
    'account': [
      {
        question: 'How do I reset my password?',
        answer: 'Click on "Forgot Password" on the login page. You\'ll receive an email with instructions to reset your password securely.'
      },
      {
        question: 'Can I change my email address?',
        answer: 'Yes, you can update your email address in your account settings. You\'ll need to verify the new email address for security.'
      },
      {
        question: 'How do I delete my account?',
        answer: 'You can delete your account in your account settings. Please note that this action is irreversible and will remove all your progress data.'
      }
    ],
    'technical': [
      {
        question: 'The audio isn\'t working. What should I do?',
        answer: 'First, check your browser settings and ensure audio is enabled. Try refreshing the page or using a different browser. If the issue persists, contact our support team.'
      },
      {
        question: 'The page is loading slowly. How can I fix this?',
        answer: 'Try clearing your browser cache and cookies. Ensure you have a stable internet connection. If the problem continues, it might be a temporary server issue.'
      },
      {
        question: 'I\'m having trouble on mobile. Any tips?',
        answer: 'Our platform is fully responsive and works on all devices. Try updating your mobile browser or using our mobile app if available. Landscape mode often works better on phones.'
      }
    ],
    'billing': [
      {
        question: 'What\'s included in the free version?',
        answer: 'Our free version includes 5 complete beginner lessons with all features: interactive exercises, audio pronunciation, grammar explanations, and vocabulary building.'
      },
      {
        question: 'How do I upgrade to premium?',
        answer: 'Click on "Try Premium Features" anywhere on the site. You can choose from monthly or annual plans, and all premium features will be immediately available.'
      },
      {
        question: 'Can I cancel my subscription?',
        answer: 'Yes, you can cancel your subscription at any time from your account settings. You\'ll continue to have access until the end of your current billing period.'
      }
    ]
  }

  const filteredFAQs = faqData[activeCategory as keyof typeof faqData]?.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  ) || []

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            ❓ Help Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to your questions and get the support you need to make the most 
            of your French learning journey.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for help articles, questions, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </div>

        {/* Category Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(helpCategories).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {helpCategories[activeCategory as keyof typeof helpCategories]}
          </h2>
          
          {searchTerm && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800">
                Showing results for: <span className="font-semibold">"{searchTerm}"</span>
                {filteredFAQs.length > 0 && ` (${filteredFAQs.length} results)`}
              </p>
            </div>
          )}
          
          <div className="space-y-6">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 text-lg">No results found for your search.</p>
                <p className="text-gray-400">Try different keywords or browse the categories above.</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-3">Still Need Help?</h3>
            <p className="text-blue-100 mb-4">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <Link 
              href="/support/contact-us" 
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
            >
              Contact Support
            </Link>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-3">Video Tutorials</h3>
            <p className="text-green-100 mb-4">
              Watch step-by-step guides to get the most out of our platform.
            </p>
            <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
              Watch Tutorials
            </button>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Topics</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/lessons/beginner/1" 
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-center"
            >
              <div className="text-2xl mb-2">🚀</div>
              <div className="font-medium text-gray-800">Getting Started</div>
            </Link>
            <Link 
              href="/grammar-guide" 
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-center"
            >
              <div className="text-2xl mb-2">📚</div>
              <div className="font-medium text-gray-800">Grammar Help</div>
            </Link>
            <Link 
              href="/pronunciation-guide" 
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-center"
            >
              <div className="text-2xl mb-2">🎵</div>
              <div className="font-medium text-gray-800">Pronunciation Tips</div>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/support" 
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Support
          </Link>
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
