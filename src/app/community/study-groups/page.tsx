'use client'

/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react'
import Link from 'next/link'

export default function StudyGroupsPage() {
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const studyGroups = [
    {
      id: 1,
      name: 'French Beginners Club',
      level: 'beginner',
      members: 24,
      schedule: 'Every Tuesday, 7:00 PM',
      focus: 'Basic conversation and grammar',
      language: 'English/French',
      maxMembers: 30,
      isActive: true
    },
    {
      id: 2,
      name: 'Intermediate French Speakers',
      level: 'intermediate',
      members: 18,
      schedule: 'Every Thursday, 6:30 PM',
      focus: 'Advanced grammar and literature',
      language: 'French only',
      maxMembers: 25,
      isActive: true
    },
    {
      id: 3,
      name: 'French Culture & Conversation',
      level: 'all',
      members: 32,
      schedule: 'Every Saturday, 10:00 AM',
      focus: 'Cultural topics and free conversation',
      language: 'French/English',
      maxMembers: 35,
      isActive: true
    },
    {
      id: 4,
      name: 'Business French',
      level: 'intermediate',
      members: 15,
      schedule: 'Every Monday, 8:00 PM',
      focus: 'Professional vocabulary and situations',
      language: 'French/English',
      maxMembers: 20,
      isActive: true
    },
    {
      id: 5,
      name: 'French for Travelers',
      level: 'beginner',
      members: 28,
      schedule: 'Every Wednesday, 7:30 PM',
      focus: 'Travel phrases and cultural tips',
      language: 'English/French',
      maxMembers: 30,
      isActive: true
    }
  ]

  const filteredGroups = studyGroups.filter(group => {
    const matchesLevel = selectedLevel === 'all' || group.level === selectedLevel
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.focus.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesLevel && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            👥 French Study Groups
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a community of French learners! Practice with others, share your progress, 
            and make friends while improving your French skills together.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search study groups..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Level Filter */}
            <div className="md:w-48">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-blue-600">{filteredGroups.length}</span> study groups
              {selectedLevel !== 'all' && ` for ${selectedLevel} level`}
            </p>
          </div>
        </div>

        {/* Study Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredGroups.map((group) => (
            <div key={group.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  group.level === 'beginner' ? 'bg-green-100 text-green-800' :
                  group.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {group.level.charAt(0).toUpperCase() + group.level.slice(1)}
                </span>
                <span className="text-sm text-gray-500">
                  {group.members}/{group.maxMembers} members
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{group.name}</h3>
              <p className="text-gray-600 mb-4">{group.focus}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">🕐</span>
                  {group.schedule}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">🌍</span>
                  {group.language}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Join Group
                </button>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Create Your Own Group */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Can't Find the Right Group?</h3>
          <p className="text-blue-100 mb-6">
            Create your own study group and invite other learners to join you!
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Create Study Group
          </button>
        </div>

        {/* Group Guidelines */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Study Group Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🤝</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Be Respectful</h4>
                  <p className="text-gray-600">Respect all members regardless of their French level or background.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">💬</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Participate Actively</h4>
                  <p className="text-gray-600">Engage in conversations and help create a supportive learning environment.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Stay on Topic</h4>
                  <p className="text-gray-600">Keep discussions focused on French learning and related topics.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🌟</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Have Fun!</h4>
                  <p className="text-gray-600">Learning should be enjoyable. Don't be afraid to make mistakes!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/community" 
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Community
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
