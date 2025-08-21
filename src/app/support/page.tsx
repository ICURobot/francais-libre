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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🆘 Support Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you succeed in your French learning journey. 
            Find answers, get support, and let us know how we can improve.
          </p>
        </div>

        {/* Support Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {supportFeatures.map((feature, index) => (
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
                  <span className="font-medium">Learn More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Help Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Help</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Getting Started</h4>
                  <p className="text-gray-600">New to FrançaisLibre? Start here to learn the basics.</p>
                  <Link href="/lessons/beginner/1" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Start Learning →
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Lesson Help</h4>
                  <p className="text-gray-600">Having trouble with a specific lesson or concept?</p>
                  <Link href="/support/help-center" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Browse Help Articles →
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🔧</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Technical Issues</h4>
                  <p className="text-gray-600">Experiencing problems with the website or app?</p>
                  <Link href="/support/help-center" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Technical Support →
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">💳</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Billing Questions</h4>
                  <p className="text-gray-600">Questions about premium features or payments?</p>
                  <Link href="/support/help-center" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Billing Support →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
          <p className="text-blue-100 mb-6">
            Our support team is available to help you with any questions or issues.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/support/contact-us" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Support
            </Link>
            <Link 
              href="/support/help-center" 
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Browse Help Center
            </Link>
          </div>
        </div>

        {/* Support Hours */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Support Hours</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">Monday - Friday</div>
              <div className="text-gray-600">9:00 AM - 6:00 PM EST</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 mb-2">Saturday</div>
              <div className="text-gray-600">10:00 AM - 4:00 PM EST</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 mb-2">Sunday</div>
              <div className="text-gray-600">12:00 PM - 6:00 PM EST</div>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600">
              For urgent technical issues outside of these hours, please email us and we'll respond as soon as possible.
            </p>
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
