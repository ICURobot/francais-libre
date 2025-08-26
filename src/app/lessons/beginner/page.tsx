import Link from 'next/link'

const beginnerLessons = [
  {
    id: 1,
    title: "Basic Greetings & Introductions",
    subtitle: "Learn essential greetings, introductions, and basic conversation starters",
    level: "A1",
    estimated_time: 25,
    href: "/lessons/beginner/1"
  },
  {
    id: 2,
    title: "Numbers & Basic Counting",
    subtitle: "Master French numbers from 0 to 100 and basic counting",
    level: "A1",
    estimated_time: 30,
    href: "/lessons/beginner/2"
  },
  {
    id: 3,
    title: "Days of the Week & Months",
    subtitle: "Learn the days of the week, months, and how to talk about dates",
    level: "A1",
    estimated_time: 25,
    href: "/lessons/beginner/3"
  },
  {
    id: 4,
    title: "Basic Family Vocabulary",
    subtitle: "Essential family terms and how to describe family relationships",
    level: "A1",
    estimated_time: 30,
    href: "/lessons/beginner/4"
  },
  {
    id: 5,
    title: "Food & Drinks Basics",
    subtitle: "Learn common food and drink vocabulary for everyday situations",
    level: "A1",
    estimated_time: 35,
    href: "/lessons/beginner/5"
  },
  {
    id: 6,
    title: "Colors & Descriptions",
    subtitle: "Master colors and basic adjectives to describe objects and people",
    level: "A1",
    estimated_time: 25,
    href: "/lessons/beginner/6"
  },
  {
    id: 7,
    title: "Basic Verbs & Actions",
    subtitle: "Essential action verbs and how to use them in simple sentences",
    level: "A1",
    estimated_time: 30,
    href: "/lessons/beginner/7"
  },
  {
    id: 8,
    title: "Weather & Seasons",
    subtitle: "Learn to talk about weather conditions and the four seasons",
    level: "A1",
    estimated_time: 25,
    href: "/lessons/beginner/8"
  },
  {
    id: 9,
    title: "Basic Questions & Answers",
    subtitle: "Master question words and how to ask and answer simple questions",
    level: "A1",
    estimated_time: 30,
    href: "/lessons/beginner/9"
  },
  {
    id: 10,
    title: "Review & Practice",
    subtitle: "Comprehensive review of all A1 concepts with practice exercises",
    level: "A1",
    estimated_time: 40,
    href: "/lessons/beginner/10"
  }
]

export default function BeginnerLessonsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-6 py-3 rounded-[20px] font-medium border border-blue-200/50 mb-4">
            <span className="mr-2">📚</span>
            A1 Level - Beginner
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Essential French Foundations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your French learning journey with fundamental vocabulary, basic grammar, and essential conversation skills. 
            Perfect for complete beginners.
          </p>
        </div>

        {/* Lessons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {beginnerLessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={lesson.href}
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

        {/* Navigation Footer */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link
            href="/lessons"
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
          >
            ← Back to All Lessons
          </Link>
          <Link
            href="/lessons/elementary"
            className="flex items-center text-green-600 hover:text-green-700 font-medium transition-colors duration-300"
          >
            A2 Elementary Lessons →
          </Link>
        </div>
      </div>
    </div>
  )
}
