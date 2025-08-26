'use client'

import { useState, useCallback } from 'react'
import { DialogueSection } from '../../../../../components/lessons/DialogueSection'
import InteractiveExercise from '../../../../../components/lessons/InteractiveExercise'
import ExerciseProgress from '../../../../../components/lessons/ExerciseProgress'
import { beginnerLessons } from '../../../../../lib/lessons/lessonData'
import Link from 'next/link'
import { audioService } from '../../../../../lib/services/audioService'

export default function Lesson3Page() {
  // State for exercise progress
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set())
  const [correctAnswers, setCorrectAnswers] = useState<Set<string>>(new Set())

  // Handle exercise completion
  const handleExerciseComplete = useCallback((exerciseId: string, isCorrect: boolean) => {
    setCompletedExercises(prev => new Set([...prev, exerciseId]))
    if (isCorrect) {
      setCorrectAnswers(prev => new Set([...prev, exerciseId]))
    }
  }, [])

  // Handle reset all exercises
  const handleResetExercises = useCallback(() => {
    setCompletedExercises(new Set())
    setCorrectAnswers(new Set())
  }, [])

  // Get the third lesson data from lessonData.ts
  const lesson = beginnerLessons.find(l => l.id === 'beginner-3')
  
  if (!lesson || !lesson.dialogue) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Lesson Not Found</h1>
          <p className="text-2xl text-gray-700 mb-8">This lesson could not be loaded.</p>
          <Link href="/lessons" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-[20px] hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg shadow-[0_8px_32px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] hover:scale-105 inline-block">
            ← Back to Lessons
          </Link>
        </div>
      </div>
    )
  }

  const { dialogue } = lesson

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 relative overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-200/10 rounded-[48px] blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200/10 rounded-[40px] blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {lesson.title}
          </h1>
          <p className="text-xl text-gray-700">
            {lesson.subtitle}
          </p>
        </div>

        {/* Welcome Introduction */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-[24px] shadow-[inset_0_8px_32px_rgba(251,146,60,0.1),0_16px_48px_rgba(0,0,0,0.1)] p-8 mb-8 border border-orange-200/50">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">☕</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to the Parisian Café Experience!
            </h2>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Now that you&apos;ve mastered introductions and the verb &quot;avoir&quot;, 
              you&apos;re ready for one of the most practical French experiences: ordering 
              at a traditional Parisian café! This lesson combines everything you&apos;ve learned 
              with essential café vocabulary and polite expressions.
            </p>
            
            <p className="text-lg">
              French cafés are more than just places to drink coffee—they&apos;re social 
              centers where people gather to work, chat, and observe the world. You&apos;ll 
              learn to express basic needs like hunger and thirst using &quot;avoir&quot; 
              expressions, order food and drinks politely, and handle the complete café 
              interaction from menu to payment.
            </p>
            
            <p className="text-lg">
              The key to sounding natural in French cafés is mastering polite request forms 
              like <span className="font-bold text-orange-600">&quot;je voudrais&quot;</span> 
              (I would like) and understanding French café culture. By the end of this lesson, 
              you&apos;ll be able to confidently order your morning croissant and café au lait 
              like a true Parisian!
            </p>
            
            <div className="bg-white rounded-xl p-4 mt-6 border-l-4 border-orange-500">
              <p className="text-lg font-semibold text-orange-800 text-center">
                🥐 Let&apos;s master the art of French café ordering and become a confident French speaker!
              </p>
            </div>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200 transform hover:scale-[1.005] hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-orange-600 mr-3">🎯</span>
            Learning Objectives
          </h3>
          <ul className="space-y-3">
            {lesson.learning_objectives.map((objective, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lesson Content */}
        <DialogueSection 
          dialogue={dialogue}
        />

        {/* Grammar Transition Header */}
        <div className="relative mb-8">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-yellow-50 to-red-50 rounded-3xl transform -skew-y-1"></div>
          
          {/* Content */}
          <div className="relative bg-gradient-to-r from-orange-600 via-yellow-600 to-red-600 rounded-3xl p-8 text-center shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute top-6 right-6 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-4 left-8 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            
            {/* Main content */}
            <div className="flex flex-col items-center space-y-4">
              {/* Icon */}
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-3xl">🍽️</span>
              </div>

              {/* Text */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Ready to Master Café French?
                </h2>
                <p className="text-orange-100 text-lg leading-relaxed max-w-2xl">
                  Now let&apos;s dive into practical French expressions for daily life! 
                  You&apos;ll learn to express needs, make polite requests, and handle 
                  complete café interactions with confidence.
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="flex items-center space-x-2 text-orange-200">
                <span className="text-sm font-medium">Scroll down to continue</span>
                <div className="animate-bounce">
                  <span className="text-xl">↓</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
        </div>

        {/* Grammar Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200 transform hover:scale-[1.005] hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-orange-600 mr-3">📚</span>
            {lesson.grammar.topic}
          </h3>
          <p className="text-gray-700 mb-6">{lesson.grammar.explanation}</p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Patterns:</h4>
            <ul className="space-y-2">
              {lesson.grammar.patterns.map((pattern, index) => (
                <li key={index} className="text-gray-700 bg-gray-50 p-3 rounded-lg transform hover:scale-[1.01] hover:shadow-md transition-all duration-300 cursor-pointer">
                  {pattern}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Examples:</h4>
            <div className="space-y-3">
              {lesson.grammar.examples.map((example, index) => (
                <div key={index} className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 transform hover:scale-[1.01] hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold text-black">{example.french}</div>
                    <button 
                      onClick={() => audioService.playAudio(example.french)}
                      className="text-orange-600 hover:text-orange-700 transition-colors p-1 ml-2"
                      title="Listen to pronunciation"
                    >
                      🔊
                    </button>
                  </div>
                  <div className="text-gray-600">{example.english}</div>
                  <div className="text-sm text-orange-700 mt-1">
                    Key word: <span className="font-bold">{example.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {lesson.grammar.conjugation_table && (
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Conjugation Table:</h4>
              <div className="grid grid-cols-3 gap-3">
                {lesson.grammar.conjugation_table.map((conj, index) => (
                  <div key={index} className="bg-yellow-50 p-3 rounded-lg text-center transform hover:scale-[1.02] hover:shadow-md transition-all duration-300 cursor-pointer">
                    <div className="font-bold text-black">{conj.pronoun}</div>
                    <div className="text-lg text-black">{conj.form}</div>
                    <div className="text-sm text-gray-700">{conj.pronunciation}</div>
                    <button 
                      onClick={() => audioService.playAudio(conj.form)}
                      className="text-yellow-600 hover:text-yellow-700 transition-colors p-1 mt-2"
                      title="Listen to pronunciation"
                    >
                      🔊
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Vocabulary Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            📖 Vocabulary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lesson.vocabulary.map((word, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                    {word.category}
                  </span>
                  <button
                    onClick={() => audioService.playAudio(word.word)}
                    className="text-yellow-600 hover:text-yellow-700 transition-colors"
                    title="Listen to pronunciation"
                  >
                    🔊
                  </button>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-2">{word.word}</h3>
                <p className="text-gray-600 mb-2">{word.translation}</p>
                <p className="text-sm text-gray-500 font-mono mb-3">{word.pronunciation}</p>
                
                <div className="border-t border-yellow-200 pt-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-gray-700">{word.example_sentence}</p>
                    <button
                      onClick={() => audioService.playAudio(word.example_sentence)}
                      className="text-yellow-600 hover:text-yellow-700 transition-colors ml-2"
                      title="Listen to example sentence"
                    >
                      🔊
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">{word.example_translation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exercise Progress */}
        <ExerciseProgress
          totalExercises={lesson.exercises.length}
          completedExercises={completedExercises.size}
          correctAnswers={correctAnswers.size}
          onReset={handleResetExercises}
        />

        {/* Exercises Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200 transform hover:scale-[1.005] hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-orange-600 mr-3">✏️</span>
            Practice Exercises
          </h3>
          <div className="space-y-6">
            {lesson.exercises.map((exercise, index) => (
              <InteractiveExercise
                key={exercise.id}
                exercise={exercise}
                exerciseNumber={index + 1}
                onComplete={(isCorrect) => handleExerciseComplete(exercise.id, isCorrect)}
              />
            ))}
          </div>
        </div>

        {/* Lesson Info */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8 transform hover:scale-[1.005] hover:shadow-lg transition-all duration-300">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{lesson.estimated_time}</div>
              <div className="text-gray-600">Minutes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{lesson.difficulty}/5</div>
              <div className="text-gray-600">Difficulty</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">{lesson.is_free ? 'Free' : 'Premium'}</div>
              <div className="text-gray-600">Access</div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <div className="text-sm text-gray-600 mb-2">Tags:</div>
            <div className="flex flex-wrap justify-center gap-2">
              {lesson.tags.map((tag, index) => (
                <span key={index} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
          <Link
            href="/lessons/beginner/2"
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
          >
            ← Previous Lesson
          </Link>
          <Link
            href="/lessons/beginner"
            className="flex items-center text-gray-600 hover:text-gray-700 font-medium transition-colors duration-300"
          >
            Back to Beginner Lessons
          </Link>
          <Link
            href="/lessons/beginner/4"
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
          >
            Next Lesson →
          </Link>
        </div>
      </div>
    </div>
  )
}
