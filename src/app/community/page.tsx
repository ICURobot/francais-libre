'use client'

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 relative overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-200/10 rounded-[48px] blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200/10 rounded-[40px] blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-200/10 rounded-[32px] blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            🌍 French Learning Community
          </h1>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Connect with fellow French learners from around the world! Practice together, 
            share your journey, and make friends while improving your French skills.
          </p>
        </div>

        {/* Community Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <Link 
              key={index} 
              href={feature.href}
              className="group block"
            >
              <div className={`bg-gradient-to-br ${feature.color} rounded-[24px] p-8 text-white h-full transform transition-all duration-300 group-hover:scale-105 shadow-[0_16px_48px_rgba(0,0,0,0.15)] group-hover:shadow-[0_24px_80px_rgba(0,0,0,0.2)] relative overflow-hidden`}>
                {/* Soft background elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-[16px] blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-[12px] blur-xl"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-blue-100 mb-6 text-lg leading-relaxed">{feature.description}</p>
                  <div className="flex items-center text-blue-200 group-hover:text-white transition-colors duration-300">
                    <span className="font-medium text-lg">Explore →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Community Stats */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_20px_60px_rgba(0,0,0,0.12)] p-10 mb-12 border border-white/40">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Community at a Glance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-[20px] shadow-[inset_0_4px_16px_rgba(59,130,246,0.2)] group-hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-3">1,247</div>
                <div className="text-gray-700 font-medium">Active Learners</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-[20px] shadow-[inset_0_4px_16px_rgba(34,197,94,0.2)] group-hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-green-600 mb-3">23</div>
                <div className="text-gray-700 font-medium">Study Groups</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-[20px] shadow-[inset_0_4px_16px_rgba(168,85,247,0.2)] group-hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-purple-600 mb-3">156</div>
                <div className="text-gray-700 font-medium">Language Partners</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-[20px] shadow-[inset_0_4px_16px_rgba(234,179,8,0.2)] group-hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-yellow-600 mb-3">89</div>
                <div className="text-gray-700 font-medium">Events This Month</div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 rounded-[28px] p-10 text-white text-center mb-12 shadow-[0_20px_60px_rgba(99,102,241,0.3)] relative overflow-hidden">
          {/* Soft background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-[32px] blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-[24px] blur-2xl"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">New to the Community?</h3>
            <p className="text-indigo-100 mb-8 text-lg">
              Start by joining a study group or finding a language exchange partner. 
              Everyone is welcome, regardless of your French level!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/community/study-groups" 
                className="bg-white text-indigo-600 px-8 py-4 rounded-[20px] font-semibold hover:bg-gray-50 transition-all duration-300 shadow-[0_8px_32px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)] hover:scale-105"
              >
                Find Study Groups
              </Link>
              <Link 
                href="/community/language-exchange" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-[20px] font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:scale-105"
              >
                Find Language Partners
              </Link>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_20px_60px_rgba(0,0,0,0.12)] p-10 mb-12 border border-white/40">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Community Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-3xl">🤝</span>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Be Kind & Respectful</h4>
                  <p className="text-gray-600 text-base">Treat all community members with respect and kindness.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl">📚</span>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Focus on Learning</h4>
                  <p className="text-gray-600 text-base">Keep discussions focused on French learning and related topics.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-3xl">💬</span>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Encourage Others</h4>
                  <p className="text-gray-600 text-base">Support and encourage fellow learners in their French journey.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl">🌟</span>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Share Your Progress</h4>
                  <p className="text-gray-600 text-base">Don&apos;t be afraid to share your achievements and challenges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-lg hover:translate-x-1 transition-all duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
