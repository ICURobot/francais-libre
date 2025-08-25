'use client'

/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link'

export default function SupportPage() {
  const supportFeatures = [
    {
      title: 'Help Center',
      description: 'Find answers to common questions and browse our knowledge base',
      icon: '❓',
      href: '/support/help-center',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our support team for personalized help',
      icon: '📧',
      href: '/support/contact-us',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Privacy Policy',
      description: 'Learn how we protect and handle your personal information',
      icon: '🔒',
      href: '/support/privacy-policy',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Terms of Service',
      description: 'Read our terms and conditions for using the platform',
      icon: '📋',
      href: '/support/terms-of-service',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Feedback',
      description: 'Share your thoughts and suggestions to help us improve',
      icon: '💬',
      href: '/support/feedback',
      color: 'from-red-500 to-red-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 relative overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 bg-gray-200/10 rounded-[48px] blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/10 rounded-[40px] blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-200/10 rounded-[32px] blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            🆘 Support Center
          </h1>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We're here to help you succeed in your French learning journey. 
            Find answers, get support, and let us know how we can improve.
          </p>
        </div>

        {/* Support Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {supportFeatures.map((feature, index) => (
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
                    <span className="font-medium text-lg">Learn More →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Help Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_20px_60px_rgba(0,0,0,0.12)] p-10 mb-12 border border-white/40">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Help</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-3xl">🚀</span>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Getting Started</h4>
                  <p className="text-gray-600 text-base mb-3">New to FrançaisLibre? Start here to learn the basics.</p>
                  <Link href="/lessons/beginner/1" className="text-blue-600 hover:text-blue-700 text-base font-medium hover:translate-x-1 transition-all duration-300 inline-block">
                    Start Learning →
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl">📚</span>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Lesson Help</h4>
                  <p className="text-gray-600 text-base mb-3">Having trouble with a specific lesson or concept?</p>
                  <Link href="/support/help-center" className="text-blue-600 hover:text-blue-700 text-base font-medium hover:translate-x-1 transition-all duration-300 inline-block">
                    Browse Help Articles →
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-3xl">🔧</span>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Technical Issues</h4>
                  <p className="text-gray-600 text-base mb-3">Experiencing problems with the website or app?</p>
                  <Link href="/support/help-center" className="text-blue-600 hover:text-blue-700 text-base font-medium hover:translate-x-1 transition-all duration-300 inline-block">
                    Technical Support →
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl">💳</span>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Billing Questions</h4>
                  <p className="text-gray-600 text-base mb-3">Questions about premium features or payments?</p>
                  <Link href="/support/help-center" className="text-blue-600 hover:text-blue-700 text-base font-medium hover:translate-x-1 transition-all duration-300 inline-block">
                    Billing Support →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-[28px] p-10 text-white text-center mb-12 shadow-[0_20px_60px_rgba(59,130,246,0.3)] relative overflow-hidden">
          {/* Soft background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-[32px] blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-[24px] blur-2xl"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Need Immediate Help?</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Our support team is available to help you with any questions or issues.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/support/contact-us" 
                className="bg-white text-blue-600 px-8 py-4 rounded-[20px] font-semibold hover:bg-gray-50 transition-all duration-300 shadow-[0_8px_32px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)] hover:scale-105"
              >
                Contact Support
              </Link>
              <Link 
                href="/support/help-center" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-[20px] font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Browse Help Center
              </Link>
            </div>
          </div>
        </div>

        {/* Support Hours */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_20px_60px_rgba(0,0,0,0.12)] p-10 mb-12 border border-white/40">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Support Hours</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-[20px] shadow-[inset_0_4px_16px_rgba(59,130,246,0.2)] group-hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-blue-600 mb-3">Monday - Friday</div>
                <div className="text-gray-700 font-medium">9:00 AM - 6:00 PM EST</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-[20px] shadow-[inset_0_4px_16px_rgba(34,197,94,0.2)] group-hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-green-600 mb-3">Saturday</div>
                <div className="text-gray-700 font-medium">10:00 AM - 4:00 PM EST</div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-[20px] shadow-[inset_0_4px_16px_rgba(168,85,247,0.2)] group-hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-purple-600 mb-3">Sunday</div>
                <div className="text-gray-700 font-medium">12:00 PM - 6:00 PM EST</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-700 text-lg">
              For urgent technical issues outside of these hours, please email us and we'll respond as soon as possible.
            </p>
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
