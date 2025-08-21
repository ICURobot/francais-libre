'use client'

/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link'

export default function CommunityPage() {
  const communityFeatures = [
    {
      title: 'Study Groups',
      description: 'Join or create study groups to practice French with other learners',
      icon: '👥',
      href: '/community/study-groups',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Language Exchange',
      description: 'Find language partners for mutual learning and practice',
      icon: '🔄',
      href: '/community/language-exchange',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Live Events',
      description: 'Participate in virtual French conversation events and workshops',
      icon: '🎉',
      href: '/community/live-events',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Success Stories',
      description: 'Read inspiring stories from other French learners',
      icon: '🌟',
      href: '/community/success-stories',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Forum',
      description: 'Join discussions, ask questions, and share your progress',
      icon: '💬',
      href: '/community/forum',
      color: 'from-red-500 to-red-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🌍 French Learning Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow French learners from around the world! Practice together, 
            share your journey, and make friends while improving your French skills.
          </p>
        </div>

        {/* Community Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {communityFeatures.map((feature, index) => (
            <Link 
              key={index} 
              href={feature.href}
              className="group block"
            >
              <div className={`bg-gradient-to-br ${feature.color} rounded-2xl p-6 text-white h-full transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-100 mb-4">{feature.description}</p>
                <div className="flex items-center text-blue-200 group-hover:text-white transition-colors">
                  <span className="font-medium">Explore →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Community Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Community at a Glance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
              <div className="text-gray-600">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">23</div>
              <div className="text-gray-600">Study Groups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">156</div>
              <div className="text-gray-600">Language Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">89</div>
              <div className="text-gray-600">Events This Month</div>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">New to the Community?</h3>
          <p className="text-indigo-100 mb-6">
            Start by joining a study group or finding a language exchange partner. 
            Everyone is welcome, regardless of your French level!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/community/study-groups" 
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Find Study Groups
            </Link>
            <Link 
              href="/community/language-exchange" 
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
            >
              Find Language Partners
            </Link>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Community Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🤝</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Be Kind & Respectful</h4>
                  <p className="text-gray-600">Treat all community members with respect and kindness.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Focus on Learning</h4>
                  <p className="text-gray-600">Keep discussions focused on French learning and related topics.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">💬</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Encourage Others</h4>
                  <p className="text-gray-600">Support and encourage fellow learners in their French journey.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🌟</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Share Your Progress</h4>
                  <p className="text-gray-600">Don&apos;t be afraid to share your achievements and challenges.</p>
                </div>
              </div>
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
