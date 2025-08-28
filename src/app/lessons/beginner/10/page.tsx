'use client'

import { useState, useCallback } from 'react'
import { DialogueSection } from '../../../../../components/lessons/DialogueSection'
import InteractiveExercise from '../../../../../components/lessons/InteractiveExercise'
import ExerciseProgress from '../../../../../components/lessons/ExerciseProgress'
import { beginnerLessons } from '../../../../../lib/lessons/lessonData'
import Link from 'next/link'
import { audioService } from '../../../../../lib/services/audioService'

export default function Lesson10Page() {
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

  // Get the lesson data
  const lesson = beginnerLessons.find(l => l.id === 'beginner-10')
  
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

  // Helper function to get English translation for verbs
  const getEnglishTranslation = (verb: string) => {
    const translations: Record<string, string> = {
      'commencer': 'to start',
      'terminer': 'to finish',
      'voyager': 'to travel',
      'enseigner': 'to teach',
      'visiter': 'to visit',
      'inviter': 'to invite',
      'aider': 'to help',
      'chercher': 'to look for'
    }
    return translations[verb] || verb
  }

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
          <p className="text-2xl text-gray-700">
            {lesson.subtitle}
          </p>
        </div>

        {/* Welcome Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[24px] shadow-[inset_0_8px_32px_rgba(59,130,246,0.1),0_16px_48px_rgba(0,0,0,0.1)] p-8 mb-8 border border-blue-200/50">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">🇫🇷</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced French Learning Journey!
            </h2>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              This lesson combines advanced negation patterns with essential -er verbs for daily life, family, and work. You&apos;ll master the subtle differences between &ldquo;never,&rdquo; &ldquo;no longer,&rdquo; and &ldquo;only&rdquo; in French.
            </p>
            
            <p className="text-lg">
              Family and cultural contexts are central to French society, and this lesson explores international family dynamics, language learning, and professional development through authentic dialogue.
            </p>
            
            <p className="text-lg">
              The advanced negation forms <span className="font-bold text-blue-600">ne...jamais</span> (never), <span className="font-bold text-blue-600">ne...plus</span> (no longer), and <span className="font-bold text-blue-600">ne...que</span> (only) will give you precise control over your French expressions.
            </p>
            
            <div className="bg-white rounded-xl p-4 mt-6 border-l-4 border-blue-500">
              <p className="text-lg font-semibold text-blue-800 text-center">
                🚀 Master advanced negation and essential life verbs!
              </p>
            </div>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_16px_48px_rgba(0,0,0,0.1)] p-8 mb-8 border border-white/40 transform hover:scale-[1.02] hover:shadow-[inset_0_8px_32px_rgba(59,130,246,0.12),0_24px_80px_rgba(0,0,0,0.15)] transition-all duration-300">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-blue-600 mr-4 text-2xl">🎯</span>
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 rounded-3xl transform -skew-y-1"></div>
          
          {/* Content */}
          <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-8 text-center shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute top-6 right-6 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-4 left-8 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            
            {/* Main content */}
            <div className="flex flex-col items-center space-y-4">
              {/* Icon */}
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-3xl">🧠</span>
              </div>
              
              {/* Text */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Ready to Master Advanced Grammar?
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
                  Now let&apos;s dive into advanced negation patterns and essential -er verbs that will unlock the secrets of sophisticated French expression. 
                  Get ready to understand the building blocks of advanced communication!
                </p>
              </div>
              
              {/* Arrow indicator */}
              <div className="flex items-center space-x-2 text-blue-200">
                <span className="text-sm font-medium">Scroll down to continue</span>
                <div className="animate-bounce">
                  <span className="text-xl">↓</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom accent */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
        </div>

        {/* Grammar Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200 transform hover:scale-[1.005] hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-purple-600 mr-3">📚</span>
            {lesson.grammar.topic}
          </h3>
          <p className="text-gray-700 mb-6">{lesson.grammar.explanation}</p>
          
          {/* Grammar Patterns */}
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

          {/* Grammar Examples */}
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
                  {example.pronunciation && (
                    <div className="text-sm text-gray-700 mt-2 font-mono bg-gray-100 px-2 py-1 rounded">
                      {example.pronunciation}
                    </div>
                  )}
                  {example.highlight && (
                    <div className="text-blue-700 text-sm mt-2 font-medium">
                      💡 {example.highlight}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
            
          {/* Conjugation Tables */}
          {lesson.grammar.conjugation_table && (
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Conjugation Table - Regular -er Verbs</h4>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {lesson.grammar.conjugation_table.map((conj, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-purple-200/50 text-center hover:shadow-md transition-shadow">
                      <div className="text-sm font-medium text-purple-600 mb-1">{conj.pronoun}</div>
                      <div className="text-lg font-bold text-gray-900 mb-1">{conj.form}</div>
                      <div className="text-xs text-gray-500 font-mono mb-2">{conj.pronunciation}</div>
                      <button
                        onClick={() => {
                          // For il/elle and ils/elles, we need to handle them specially
                          // since the audio was stored as separate forms
                          let textToPlay = ''
                          if (conj.pronoun === 'il/elle') {
                            // Use 'il' form since that's what we stored
                            textToPlay = `il ${conj.form}`
                          } else if (conj.pronoun === 'ils/elles') {
                            // Use 'ils' form since that's what we stored
                            textToPlay = `ils ${conj.form}`
                          } else {
                            textToPlay = `${conj.pronoun} ${conj.form}`
                          }
                          
                          audioService.playAudio(textToPlay)
                        }}
                        className="text-purple-600 hover:text-purple-700 transition-colors p-1 mt-2"
                        title="Listen to pronunciation"
                      >
                        🔊
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
            
          {/* Additional Conjugation Tables */}
          {lesson.grammar.additional_conjugation_tables && (
            <div className="mt-8 space-y-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">More -er Verb Conjugations</h4>
              {lesson.grammar.additional_conjugation_tables.map((verbTable, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                  <h5 className="text-lg font-bold text-gray-900 mb-4 text-center">&ldquo;{verbTable.verb}&rdquo; (to {getEnglishTranslation(verbTable.verb)})</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {verbTable.forms.map((form, formIndex) => (
                      <div key={formIndex} className="bg-white rounded-lg p-4 border border-green-200 text-center hover:shadow-md transition-shadow">
                        <div className="text-sm font-medium text-green-600 mb-1">{form.pronoun}</div>
                        <div className="text-lg font-bold text-gray-900 mb-1">{form.form}</div>
                        <div className="text-xs text-gray-500 font-mono mb-2">{form.pronunciation}</div>
                        <button
                          onClick={() => {
                            // For il/elle and ils/elles, we need to handle them specially
                            // since the audio was stored as separate forms
                            let textToPlay = ''
                            if (form.pronoun === 'il/elle') {
                              // Use 'il' form since that's what we stored
                              textToPlay = `il ${form.form}`
                            } else if (form.pronoun === 'ils/elles') {
                              // Use 'ils' form since that's what we stored
                              textToPlay = `ils ${form.form}`
                            } else {
                              textToPlay = `${form.pronoun} ${form.form}`
                            }
                            
                            audioService.playAudio(textToPlay)
                          }}
                          className="text-green-600 hover:text-green-700 transition-colors p-1 mt-2"
                          title="Listen to pronunciation"
                        >
                          🔊
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Vocabulary Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-green-600 mr-4 text-2xl">📖</span>
            Vocabulary
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lesson.vocabulary.map((item) => (
              <div key={item.word} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center mb-2">
                    <h4 className="text-lg font-bold text-gray-900 mr-4 text-2xl">{item.word}</h4>
                    <button
                      onClick={() => audioService.playAudio(item.word)}
                      className="text-blue-600 hover:text-blue-700 transition-colors p-1"
                      title="Listen to pronunciation"
                    >
                      🎵
                    </button>
                  </div>
                  <p className="text-gray-600 mb-3">{item.translation}</p>
                  {item.category && (
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  )}
                </div>
                
                {item.example_sentence && (
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm text-gray-700 mb-1">{item.example_sentence}</p>
                        <p className="text-xs text-gray-500 italic">{item.example_translation}</p>
                      </div>
                      <button
                        onClick={() => audioService.playAudio(item.example_sentence)}
                        className="text-green-600 hover:text-green-700 transition-colors ml-2"
                        title="Listen to example sentence"
                      >
                        🔊
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Exercises Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="text-orange-600 mr-4 text-2xl">🧩</span>
              Practice Exercises
            </h3>
            <ExerciseProgress 
              totalExercises={lesson.exercises.length}
              completedExercises={completedExercises.size}
              correctAnswers={correctAnswers.size}
              onReset={handleResetExercises}
            />
          </div>
          
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
            href="/lessons/beginner/9"
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
          <div></div>
        </div>
      </div>
    </div>
  )
}
