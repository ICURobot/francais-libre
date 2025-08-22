'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { beginnerLessons } from '../../../../../lib/lessons/lessonData'
import { DialogueSection } from '../../../../../components/lessons/DialogueSection'
import InteractiveExercise from '../../../../../components/lessons/InteractiveExercise'
import ExerciseProgress from '../../../../../components/lessons/ExerciseProgress'
import { audioService } from '../../../../../lib/services/audioService'

export default function BeginnerLesson6Page() {
  const [completedExercises, setCompletedExercises] = useState<string[]>([])
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const lesson = beginnerLessons.find(l => l.id === 'beginner-6')

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
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Lesson Not Found</h1>
          <p className="text-gray-600 mb-6">The requested lesson could not be found.</p>
          <Link href="/lessons" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Lessons
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🍽️ {lesson.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {lesson.subtitle}
          </p>
        </div>

        {/* Welcome Introduction */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Welcome to French Fine Dining! 🍷</h2>
          <p className="text-orange-100 text-lg leading-relaxed">
            Prepare to immerse yourself in the elegant world of French restaurant culture! This lesson will 
            transform you from a hesitant diner to a confident French restaurant connoisseur. You&apos;ll learn 
            everything from making reservations and reading menus to ordering wine and handling the bill with 
            perfect French etiquette. Get ready to experience the sophisticated charm of dining à la française!
          </p>
        </div>

        {/* Learning Objectives */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">🎯 Learning Objectives</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {lesson.learning_objectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg">
                <span className="text-orange-600 font-bold text-lg">✓</span>
                <span className="text-gray-700">{objective}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grammar Transition Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 text-white text-center mb-12 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-2">🍴 Restaurant Language Mastery</h2>
          <p className="text-orange-100">
            Master the art of polite French restaurant communication
          </p>
        </div>

        {/* Grammar Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            📚 {lesson.grammar.topic}
          </h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            {lesson.grammar.explanation}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Patterns</h3>
              <ul className="space-y-3">
                {lesson.grammar.patterns.map((pattern, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-orange-500 font-bold">•</span>
                    <span className="text-gray-700">{pattern}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Examples</h3>
              <div className="space-y-4">
                {lesson.grammar.examples.map((example, index) => (
                  <div key={index} className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-black font-semibold mb-2">{example.french}</p>
                    <p className="text-gray-600 mb-2">{example.english}</p>
                    <p className="text-orange-600 text-sm">
                      Key: <span className="font-semibold">{example.highlight}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conjugation Table */}
          {lesson.grammar.conjugation_table && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Restaurant Expressions Guide</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-orange-50 rounded-lg overflow-hidden">
                  <thead className="bg-orange-600 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Expression Type</th>
                      <th className="px-4 py-3 text-left">French Form</th>
                      <th className="px-4 py-3 text-left">Pronunciation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lesson.grammar.conjugation_table.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-orange-50'}>
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
            📖 Restaurant Vocabulary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lesson.vocabulary.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded-full font-medium">
                    {item.category}
                  </span>
                  <button 
                    onClick={() => audioService.playAudio(item.word)}
                    className="text-orange-600 hover:text-orange-700 transition-colors"
                    title="Listen to pronunciation"
                  >
                    🔊
                  </button>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-2">{item.word}</h3>
                <p className="text-gray-600 mb-2">{item.translation}</p>
                <p className="text-sm text-gray-500 font-mono mb-3">{item.pronunciation}</p>
                
                <div className="border-t border-orange-200 pt-3">
                  <p className="text-sm text-gray-700 mb-2">{item.example_sentence}</p>
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
          <p className="text-gray-600 text-center mb-8">
            Test your restaurant French knowledge with these interactive exercises
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

        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link 
            href="/lessons/beginner/5" 
            className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition flex items-center space-x-2"
          >
            ← Previous Lesson
          </Link>
          <Link 
            href="/lessons" 
            className="text-orange-600 hover:text-orange-700 font-medium"
          >
            Back to Lessons
          </Link>
        </div>
      </div>
    </div>
  )
}
