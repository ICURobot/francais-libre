'use client'

import Link from 'next/link'
import { getBeginnerLessons } from '../../../lib/lessons/lessonData'

export default function LessonsPage() {
  const lessons = getBeginnerLessons()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 relative overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-200/10 rounded-[48px] blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/10 rounded-[40px] blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-200/10 rounded-[32px] blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            🇫🇷 French Lessons
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Start your French learning journey with our interactive lessons designed with proven methods
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/lessons/beginner/${lesson.order}`}
              className="group bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_16px_48px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_8px_32px_rgba(59,130,246,0.12),0_24px_80px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] border border-white/40 p-8"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-[20px] flex items-center justify-center mb-6 shadow-[inset_0_4px_16px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {lesson.title}
              </h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {lesson.subtitle}
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 py-2 rounded-[16px] font-medium border border-blue-200/50">
                  {lesson.level}
                </span>
                <span className="text-gray-600 font-medium">⏱️ {lesson.estimated_time} min</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-8 shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_16px_48px_rgba(0,0,0,0.1)] border border-white/40 max-w-2xl mx-auto">
            <p className="text-gray-700 mb-6 text-lg">
              More lessons coming soon! We&apos;re constantly adding new content to help you master French.
            </p>
            <Link
              href="/"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-[20px] hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg shadow-[0_8px_32px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] hover:scale-105"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

