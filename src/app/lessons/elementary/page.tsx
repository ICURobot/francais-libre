'use client'

import Link from 'next/link'

export default function ElementaryLessonsPage() {
  const elementaryLessons = [
    {
      id: 11,
      title: "Past Tense Mastery (Passé Composé)",
      subtitle: "Essential Past Tense",
      level: "A2",
      estimatedTime: "45 min",
      description: "Master the passé composé tense with regular and irregular verbs, essential for describing past experiences and completed actions."
    },
    {
      id: 12,
      title: "Future Plans (Futur Proche)",
      subtitle: "Going to + Infinitive",
      level: "A2",
      estimatedTime: "40 min",
      description: "Learn to express immediate future plans using 'aller + infinitive' construction, perfect for making arrangements and discussing upcoming events."
    },
    {
      id: 13,
      title: "Irregular Verbs Foundation",
      subtitle: "Essential Irregular Verbs",
      level: "A2",
      estimatedTime: "50 min",
      description: "Master the 15 most essential irregular verbs in French, covering movement, basic actions, and states that appear in 80% of conversations."
    },
    {
      id: 14,
      title: "Professional Communication",
      subtitle: "Work & Career Vocabulary",
      level: "A2",
      estimatedTime: "45 min",
      description: "Develop professional French vocabulary for discussing work, career changes, and professional development in formal contexts."
    },
    {
      id: 15,
      title: "Complex Sentence Structure",
      subtitle: "Connecting Ideas & Opinions",
      level: "A2",
      estimatedTime: "50 min",
      description: "Learn to connect ideas smoothly using conjunctions, transition words, and complex sentence structures for natural French conversation."
    },
    {
      id: 16,
      title: "Advanced Time Expressions",
      subtitle: "Past, Present & Future",
      level: "A2",
      estimatedTime: "45 min",
      description: "Master comprehensive time expressions and learn to move fluidly between past, present, and future in conversation."
    },
    {
      id: 17,
      title: "Future Plans (Futur Proche)",
      subtitle: "Planning & Aspirations",
      level: "A2",
      estimatedTime: "45 min",
      description: "Master expressing future plans and aspirations using futur proche, essential for discussing goals and upcoming events."
    },
    {
      id: 18,
      title: "Advanced Future Planning & Time Expressions",
      subtitle: "Complex Future Scenarios",
      level: "A2",
      estimatedTime: "50 min",
      description: "Learn advanced future planning expressions and complex time scenarios for sophisticated French communication."
    },
    {
      id: 19,
      title: "A2 Review & Future Mastery",
      subtitle: "Complete A2 Skills Review",
      level: "A2",
      estimatedTime: "60 min",
      description: "Master all A2 skills through comprehensive review: irregular verbs, past and future tenses, with real-world planning scenarios."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-16 relative overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 bg-green-200/10 rounded-[48px] blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/10 rounded-[40px] blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-200/10 rounded-[32px] blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-6 py-3 rounded-[20px] font-medium border border-green-200/50 mb-4">
            <span className="mr-2">📚</span>
            A2 Level - Elementary
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            🇫🇷 Elementary French Lessons
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Build on your beginner foundation with intermediate grammar concepts and more complex conversations
          </p>
        </div>

        {/* Level Description */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[24px] p-8 shadow-[inset_0_8px_32px_rgba(34,197,94,0.08),0_16px_48px_rgba(0,0,0,0.1)] border border-white/40 mb-16 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What You&apos;ll Learn at A2 Level</h2>
            <p className="text-lg text-gray-700 mb-6">
              A2 represents the Elementary level where you&apos;ll master more complex grammar structures, 
              expand your vocabulary significantly, and engage in more sophisticated conversations.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-green-50 p-4 rounded-[16px] border border-green-200">
                <h3 className="font-bold text-green-800 mb-2">🔤 Grammar Mastery</h3>
                <p className="text-green-700 text-sm">Irregular verbs, past tenses, and complex sentence structures</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-[16px] border border-blue-200">
                <h3 className="font-bold text-blue-800 mb-2">💬 Advanced Conversations</h3>
                <p className="text-blue-700 text-sm">More nuanced dialogues and cultural expressions</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-[16px] border border-purple-200">
                <h3 className="font-bold text-purple-800 mb-2">🌍 Cultural Depth</h3>
                <p className="text-purple-700 text-sm">Deeper understanding of French customs and society</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {elementaryLessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/lessons/elementary/${lesson.id}`}
              className="group bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(34,197,94,0.08),0_16px_48px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_8px_32px_rgba(34,197,94,0.12),0_24px_80px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] border border-white/40 p-8"
            >
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-[20px] flex items-center justify-center mb-6 shadow-[inset_0_4px_16px_rgba(34,197,94,0.2)] group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {lesson.title}
              </h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {lesson.subtitle}
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-[16px] font-medium border border-green-200/50">
                  {lesson.level}
                </span>
                <span className="text-gray-600 font-medium">⏱️ {lesson.estimatedTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/lessons/beginner"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-[20px] hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg shadow-[0_8px_24px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_32px_rgba(59,130,246,0.4)] hover:scale-105"
            >
              ← Back to Beginner Lessons
            </Link>
            <Link
              href="/lessons"
              className="inline-flex items-center bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-4 rounded-[20px] hover:from-gray-600 hover:to-gray-700 transition-all duration-300 font-semibold text-lg shadow-[0_8px_24px_rgba(107,114,128,0.3)] hover:shadow-[0_12px_32px_rgba(107,114,128,0.4)] hover:scale-105"
            >
              View All Levels
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
