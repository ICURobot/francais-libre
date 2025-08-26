'use client'

import Link from 'next/link'
import { getBeginnerLessons } from '../../../lib/lessons/lessonData'

export default function LessonsPage() {
  const beginnerLessons = getBeginnerLessons()

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
            🇫🇷 French Lessons by Level
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Start your French learning journey with our structured curriculum designed with proven methods
          </p>
        </div>

        {/* A1 Level - Beginner */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-6 py-3 rounded-[20px] font-medium border border-blue-200/50 mb-4">
              <span className="mr-2">🌱</span>
              A1 Level - Beginner
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Beginner Foundation</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Master the basics: greetings, regular verbs, articles, and essential vocabulary. 
              Perfect for absolute beginners with no prior French experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {beginnerLessons.map((lesson) => (
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
            <Link
              href="/lessons/beginner"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-[20px] hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg shadow-[0_8px_24px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_32px_rgba(59,130,246,0.4)] hover:scale-105"
            >
              View All A1 Lessons →
            </Link>
          </div>
        </div>

        {/* A2 Level - Elementary */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-6 py-3 rounded-[20px] font-medium border border-green-200/50 mb-4">
              <span className="mr-2">📚</span>
              A2 Level - Elementary
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Intermediate Grammar & Conversation</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Build on your foundation with irregular verbs, past tenses, and more complex conversations. 
              For learners who have completed the A1 level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <Link
              href="/lessons/elementary/11"
              className="group bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(34,197,94,0.08),0_16px_48px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_8px_32px_rgba(34,197,94,0.12),0_24px_80px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] border border-white/40 p-8"
            >
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-[20px] flex items-center justify-center mb-6 shadow-[inset_0_4px_16px_rgba(34,197,94,0.2)] group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🔤</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Essential Irregular Verbs
              </h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Master the most important irregular verbs: aller, faire, venir, pouvoir, and vouloir
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-[16px] font-medium border border-green-200/50">
                  A2
                </span>
                <span className="text-gray-600 font-medium">⏱️ 30 min</span>
              </div>
            </Link>

            <Link
              href="/lessons/elementary/12"
              className="group bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(34,197,94,0.08),0_16px_48px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_8px_32px_rgba(34,197,94,0.12),0_24px_80px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] border border-white/40 p-8"
            >
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-[20px] flex items-center justify-center mb-6 shadow-[inset_0_4px_16px_rgba(34,197,94,0.2)] group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                More Essential Irregular Verbs
              </h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Learn additional crucial irregular verbs: avoir, être, savoir, connaître, and prendre
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-[16px] font-medium border border-green-200/50">
                  A2
                </span>
                <span className="text-gray-600 font-medium">⏱️ 35 min</span>
              </div>
            </Link>

            <Link
              href="/lessons/elementary/13"
              className="group bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(34,197,94,0.08),0_16px_48px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_8px_32px_rgba(34,197,94,0.12),0_24px_80px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] border border-white/40 p-8"
            >
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-[20px] flex items-center justify-center mb-6 shadow-[inset_0_4px_16px_rgba(34,197,94,0.2)] group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Completing Essential Irregular Verbs
              </h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Master the final essential irregular verbs: voir, dire, partir, sortir, and dormir
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-[16px] font-medium border border-green-200/50">
                  A2
                </span>
                <span className="text-gray-600 font-medium">⏱️ 40 min</span>
              </div>
            </Link>

                         <Link
               href="/lessons/elementary/14"
               className="group bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(34,197,94,0.08),0_16px_48px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_8px_32px_rgba(34,197,94,0.12),0_24px_80px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] border border-white/40 p-8"
             >
               <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-[20px] flex items-center justify-center mb-6 shadow-[inset_0_4px_16px_rgba(34,197,94,0.2)] group-hover:scale-110 transition-transform duration-300">
                 <span className="text-3xl">⏰</span>
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-3">
                 Introduction to Past Tense (Passé Composé)
               </h3>
               <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                 Learn to talk about completed past actions using passé composé with avoir - the most important past tense in French.
               </p>
               <div className="flex items-center justify-between">
                 <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-[16px] font-medium border border-green-200/50">
                   A2
                 </span>
                 <span className="text-gray-600 font-medium">⏱️ 45 min</span>
               </div>
             </Link>

             <Link
               href="/lessons/elementary/15"
               className="group bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(34,197,94,0.08),0_16px_48px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_8px_32px_rgba(34,197,94,0.12),0_24px_80px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] border border-white/40 p-8"
             >
               <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-[20px] flex items-center justify-center mb-6 shadow-[inset_0_4px_16px_rgba(34,197,94,0.2)] group-hover:scale-110 transition-transform duration-300">
                 <span className="text-3xl">🚶</span>
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-3">
                 Passé Composé with Être
               </h3>
               <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                 Learn verbs that use être as helper verb in passé composé, including movement verbs and agreement rules.
               </p>
               <div className="flex items-center justify-between">
                 <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-[16px] font-medium border border-green-200/50">
                   A2
                 </span>
                 <span className="text-gray-600 font-medium">⏱️ 50 min</span>
               </div>
             </Link>

             <Link
               href="/lessons/elementary/16"
               className="group bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(34,197,94,0.08),0_16px_48px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_8px_32px_rgba(34,197,94,0.12),0_24px_80px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] border border-white/40 p-8"
             >
               <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-[20px] flex items-center justify-center mb-6 shadow-[inset_0_4px_16px_rgba(34,197,94,0.2)] group-hover:scale-110 transition-transform duration-300">
                 <span className="text-3xl">📚</span>
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-3">
                 Mastering Past Tense (Passé Composé Review & Advanced Usage)
               </h3>
               <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                 Master both avoir and être verbs in passé composé, learn time expressions, and practice complex past narratives.
               </p>
               <div className="flex items-center justify-between">
                 <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-[16px] font-medium border border-green-200/50">
                   A2
                 </span>
                 <span className="text-gray-600 font-medium">⏱️ 55 min</span>
               </div>
             </Link>

             <Link
               href="/lessons/elementary/17"
               className="group bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(34,197,94,0.08),0_16px_48px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_8px_32px_rgba(34,197,94,0.12),0_24px_80px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] border border-white/40 p-8"
             >
               <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-[20px] flex items-center justify-center mb-6 shadow-[inset_0_4px_16px_rgba(34,197,94,0.2)] group-hover:scale-110 transition-transform duration-300">
                 <span className="text-3xl">🔮</span>
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-3">
                 Future Plans (Futur Proche)
               </h3>
               <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                 Learn to talk about future plans and intentions using futur proche (aller + infinitive) and essential planning vocabulary.
               </p>
               <div className="flex items-center justify-between">
                 <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-[16px] font-medium border border-green-200/50">
                   A2
                 </span>
                 <span className="text-gray-600 font-medium">⏱️ 45 min</span>
               </div>
             </Link>

             <Link
               href="/lessons/elementary/18"
               className="group bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(34,197,94,0.08),0_16px_48px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_8px_32px_rgba(34,197,94,0.12),0_24px_80px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] border border-white/40 p-8"
             >
               <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-[20px] flex items-center justify-center mb-6 shadow-[inset_0_4px_16px_rgba(34,197,94,0.2)] group-hover:scale-110 transition-transform duration-300">
                 <span className="text-3xl">⏰</span>
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-3">
                 Advanced Future Planning & Time Expressions
               </h3>
               <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                 Master complex future planning with detailed time expressions, conditional plans, and professional/personal goal setting.
               </p>
               <div className="flex items-center justify-between">
                 <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-[16px] font-medium border border-green-200/50">
                   A2
                 </span>
                 <span className="text-gray-600 font-medium">⏱️ 50 min</span>
               </div>
             </Link>

             <Link
               href="/lessons/elementary/19"
               className="group bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(34,197,94,0.08),0_16px_48px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_8px_32px_rgba(34,197,94,0.12),0_24px_80px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] border border-white/40 p-8"
             >
               <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-[20px] flex items-center justify-center mb-6 shadow-[inset_0_4px_16px_rgba(34,197,94,0.2)] group-hover:scale-110 transition-transform duration-300">
                 <span className="text-3xl">📚</span>
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-3">
                 A2 Review & Future Mastery
               </h3>
               <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                 Complete A2 Skills Review
               </p>
               <div className="flex items-center justify-between">
                 <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-[16px] font-medium border border-green-200/50">
                   A2
                 </span>
                 <span className="text-gray-600 font-medium">⏱️ 60 min</span>
               </div>
             </Link>
          </div>

          <div className="text-center">
            <Link
              href="/lessons/elementary"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-[20px] hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold text-lg shadow-[0_8px_24px_rgba(34,197,94,0.3)] hover:shadow-[0_12px_32px_rgba(34,197,94,0.4)] hover:scale-105"
            >
              View All A2 Lessons →
            </Link>
          </div>
        </div>

        {/* B1 Level - Intermediate */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-6 py-3 rounded-[20px] font-medium border border-purple-200/50 mb-4">
              <span className="mr-2">🎯</span>
              B1 Level - Intermediate
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Grammar & Fluency</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Master complex tenses, subjunctive mood, and express opinions fluently. 
              For learners who have completed the A2 level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-[24px] border-2 border-dashed border-purple-300 p-8 flex items-center justify-center">
              <div className="text-center text-purple-600">
                <div className="text-4xl mb-3">🚧</div>
                <p className="font-medium">B1 Lessons</p>
                <p className="text-sm opacity-75">Coming Soon</p>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-[24px] border-2 border-dashed border-purple-300 p-8 flex items-center justify-center">
              <div className="text-center text-purple-600">
                <div className="text-4xl mb-3">🚧</div>
                <p className="font-medium">B1 Lessons</p>
                <p className="text-sm opacity-75">Coming Soon</p>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-[24px] border-2 border-dashed border-purple-300 p-8 flex items-center justify-center">
              <div className="text-center text-purple-600">
                <div className="text-4xl mb-3">🚧</div>
                <p className="font-medium">B1 Lessons</p>
                <p className="text-sm opacity-75">Coming Soon</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center bg-gray-100 text-gray-500 px-8 py-4 rounded-[20px] font-semibold text-lg cursor-not-allowed">
              🔒 B1 Level - Coming Soon
            </div>
          </div>
        </div>

        {/* B2 Level - Upper Intermediate */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-6 py-3 rounded-[20px] font-medium border border-orange-200/50 mb-4">
              <span className="mr-2">🏆</span>
              B2 Level - Upper Intermediate
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional & Academic French</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Master academic writing, professional communication, and complex literary texts. 
              For learners who have completed the B1 level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-[24px] border-2 border-dashed border-orange-300 p-8 flex items-center justify-center">
              <div className="text-center text-orange-600">
                <div className="text-4xl mb-3">🚧</div>
                <p className="font-medium">B2 Lessons</p>
                <p className="text-sm opacity-75">Coming Soon</p>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-[24px] border-2 border-dashed border-orange-300 p-8 flex items-center justify-center">
              <div className="text-center text-orange-600">
                <div className="text-4xl mb-3">🚧</div>
                <p className="font-medium">B2 Lessons</p>
                <p className="text-sm opacity-75">Coming Soon</p>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-[24px] border-2 border-dashed border-orange-300 p-8 flex items-center justify-center">
              <div className="text-center text-orange-600">
                <div className="text-4xl mb-3">🚧</div>
                <p className="font-medium">B2 Lessons</p>
                <p className="text-sm opacity-75">Coming Soon</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center bg-gray-100 text-gray-500 px-8 py-4 rounded-[20px] font-semibold text-lg cursor-not-allowed">
              🔒 B2 Level - Coming Soon
            </div>
          </div>
        </div>

        {/* Learning Path Info */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-8 shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_16px_48px_rgba(0,0,0,0.1)] border border-white/40 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your French Learning Journey</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Follow our structured curriculum from complete beginner to advanced fluency. 
              Each level builds upon the previous one, ensuring steady progress.
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="bg-blue-50 p-3 rounded-[12px] border border-blue-200">
                <div className="font-bold text-blue-800">A1 - Beginner</div>
                <div className="text-blue-600">0-6 months</div>
              </div>
              <div className="bg-green-50 p-3 rounded-[12px] border border-green-200">
                <div className="font-bold text-green-800">A2 - Elementary</div>
                <div className="text-green-600">6-12 months</div>
              </div>
              <div className="bg-purple-50 p-3 rounded-[12px] border border-purple-200">
                <div className="font-bold text-purple-800">B1 - Intermediate</div>
                <div className="text-purple-600">12-18 months</div>
              </div>
              <div className="bg-orange-50 p-3 rounded-[12px] border border-orange-200">
                <div className="font-bold text-orange-800">B2 - Upper Intermediate</div>
                <div className="text-orange-600">18-24 months</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-flex items-center bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-4 rounded-[20px] hover:from-gray-600 hover:to-gray-700 transition-all duration-300 font-semibold text-lg shadow-[0_8px_24px_rgba(107,114,128,0.3)] hover:shadow-[0_12px_32px_rgba(107,114,128,0.4)] hover:scale-105"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

