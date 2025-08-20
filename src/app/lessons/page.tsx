'use client'

import Link from 'next/link'

export default function LessonsPage() {
  const lessons = [
    {
      id: 1,
      title: "Bonjour! First Greetings",
      description: "Learn essential French greetings and introductions",
      level: "Beginner",
      duration: "15 min",
      href: "/lessons/beginner/1"
    },
    {
      id: 2,
      title: "Meeting Someone New",
      description: "Practice introducing yourself and asking names",
      level: "Beginner", 
      duration: "20 min",
      href: "/lessons/beginner/2"
    },
    {
      id: 3,
      title: "Basic Questions",
      description: "Learn to ask and answer simple questions",
      level: "Beginner",
      duration: "25 min",
      href: "/lessons/beginner/3"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🇫🇷 French Lessons
          </h1>
          <p className="text-xl text-gray-600">
            Start your French learning journey with our interactive lessons
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={lesson.href}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 p-6 border border-gray-200"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {lesson.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {lesson.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {lesson.level}
                </span>
                <span>⏱️ {lesson.duration}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            More lessons coming soon!
          </p>
          <Link
            href="/"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

