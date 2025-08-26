'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { beginnerLessons } from '../../../../../lib/lessons/lessonData'
import { DialogueSection } from '../../../../../components/lessons/DialogueSection'
import InteractiveExercise from '../../../../../components/lessons/InteractiveExercise'
import ExerciseProgress from '../../../../../components/lessons/ExerciseProgress'
import { audioService } from '../../../../../lib/services/audioService'

export default function BeginnerLesson7Page() {
  const [completedExercises, setCompletedExercises] = useState<string[]>([])
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const lesson = beginnerLessons.find(l => l.id === 'beginner-7')

  const handleExerciseComplete = useCallback((exerciseId: string, isCorrect: boolean) => {
    if (!completedExercises.includes(exerciseId)) {
      setCompletedExercises(prev => [...prev, exerciseId])
      if (isCorrect) {
        setCorrectAnswers(prev => prev + 1)
      }
    }
  }, [completedExercises])

  const handleResetExercises = useCallback(() => {
    setCompletedExercises([])
    setCorrectAnswers(0)
  }, [])

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Lesson Not Found</h1>
          <p className="text-gray-600 mb-6">The requested lesson could not be found.</p>
          <Link href="/lessons" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Lessons
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden py-16">
      {/* Soft background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-200/10 rounded-[48px] blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200/10 rounded-[40px] blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🗺️ {lesson.title}
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            {lesson.subtitle}
          </p>
        </div>

        {/* Welcome Introduction */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[24px] p-8 text-white text-center mb-12 shadow-[0_20px_60px_rgba(59,130,246,0.3)] relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-4">Welcome to French Navigation! 🚇</h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            Get ready to explore French cities with confidence! This lesson will transform you from a confused tourist 
            to a savvy navigator who can ask for directions, use public transportation, and find your way around 
            using essential French vocabulary and expressions. You&apos;ll learn how French people give directions and 
            navigate their beautiful cities!
          </p>
        </div>

        {/* Learning Objectives */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_16px_48px_rgba(0,0,0,0.1)] p-8 mb-12 border border-white/40">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">🎯 Learning Objectives</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {lesson.learning_objectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <span className="text-gray-700">{objective}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grammar Transition Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[24px] p-6 text-white text-center mb-12 shadow-[0_16px_48px_rgba(59,130,246,0.3)] transform transition-all duration-300 hover:scale-105 hover:shadow-[0_24px_80px_rgba(59,130,246,0.4)]">
          <h2 className="text-2xl font-bold mb-2">🧭 Navigation Language Mastery</h2>
          <p className="text-blue-100">
            Master the art of French directional expressions and spatial relationships
          </p>
        </div>

        {/* Grammar Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_16px_48px_rgba(0,0,0,0.1)] p-8 mb-12 border border-white/40">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            📚 {lesson.grammar.topic}
          </h2>
          <p className="text-gray-700 mb-12 text-lg leading-relaxed">
            {lesson.grammar.explanation}
          </p>

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
                <div key={index} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 transform hover:scale-[1.01] hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold text-black">{example.french}</div>
                    <button 
                      onClick={() => audioService.playAudio(example.french)}
                      className="text-blue-600 hover:text-blue-700 transition-colors p-1 ml-2"
                      title="Listen to pronunciation"
                    >
                      🔊
                    </button>
                  </div>
                  <div className="text-gray-600">{example.english}</div>
                  <div className="text-sm text-blue-700 mt-1">
                    Key pattern: <span className="font-bold">{example.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conjugation Table */}
          {lesson.grammar.conjugation_table && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Navigation Expressions Guide</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-blue-50 rounded-lg overflow-hidden">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Expression Type</th>
                      <th className="px-4 py-3 text-left">French Form</th>
                      <th className="px-4 py-3 text-left">Pronunciation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lesson.grammar.conjugation_table.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                        <td className="px-4 py-3 font-medium text-gray-900">{row.pronoun}</td>
                        <td className="px-4 py-3 text-black">{row.form}</td>
                        <td className="px-4 py-3 text-gray-600 font-mono">{row.pronunciation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Dialogue Section */}
        {lesson.dialogue && (
          <DialogueSection 
            dialogue={lesson.dialogue}
          />
        )}

        {/* Vocabulary Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            📖 Navigation Vocabulary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lesson.vocabulary.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200/50 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                    {item.category}
                  </span>
                  <button 
                    onClick={() => audioService.playAudio(item.word)}
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                    title="Listen to pronunciation"
                  >
                    🔊
                  </button>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-2">{item.word}</h3>
                <p className="text-gray-600 mb-2">{item.translation}</p>
                <p className="text-sm text-gray-500 font-mono mb-3">{item.pronunciation}</p>
                
                <div className="border-t border-blue-200 pt-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-gray-700">{item.example_sentence}</p>
                    <button 
                      onClick={() => audioService.playAudio(item.example_sentence)}
                      className="text-blue-600 hover:text-blue-700 transition-colors p-1 ml-2"
                      title="Listen to example sentence"
                    >
                      🔊
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">{item.example_translation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exercise Progress */}
        <ExerciseProgress
          totalExercises={lesson.exercises.length}
          completedExercises={completedExercises.length}
          correctAnswers={correctAnswers}
          onReset={handleResetExercises}
        />

        {/* Exercises Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            🧪 Practice Exercises
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Test your French navigation knowledge with these interactive exercises
          </p>
          
          <div className="space-y-8">
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

        {/* Navigation Footer */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
          <Link
            href="/lessons/beginner/6"
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
            href="/lessons/beginner/8"
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
          >
            Next Lesson →
          </Link>
        </div>
      </div>
    </div>
  )
}
