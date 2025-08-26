'use client'

import { useState, useCallback } from 'react'
import { DialogueSection } from '../../../../../components/lessons/DialogueSection'
import InteractiveExercise from '../../../../../components/lessons/InteractiveExercise'
import ExerciseProgress from '../../../../../components/lessons/ExerciseProgress'
import { audioService } from '../../../../../lib/services/audioService'
import { beginnerLessons } from '../../../../../lib/lessons/lessonData'
import Link from 'next/link'


export default function Lesson9Page() {
  // Helper function to get English translations for verbs
  const getEnglishTranslation = (verb: string): string => {
    const translations: Record<string, string> = {
      'écouter': 'listen',
      'danser': 'dance',
      'jouer': 'play',
      'préférer': 'prefer'
    }
    return translations[verb] || verb
  }

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

  // Get lesson 9 data from lessonData.ts
  const lesson = beginnerLessons.find(l => l.id === 'beginner-9')
  
  if (!lesson || !lesson.dialogue) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden py-16">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Lesson Not Found</h1>
          <p className="text-2xl text-gray-700">This lesson could not be loaded.</p>
          <Link href="/lessons" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-[20px] hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg shadow-[0_8px_32px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] hover:scale-105 inline-block">
            ← Back to Lessons
          </Link>
        </div>
      </div>
    )
  }

  const { dialogue } = lesson

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden py-16">
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
            <div className="text-4xl mb-4">🎭</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to French Negation & Daily Activities!
            </h2>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              This lesson combines natural conversation with essential grammar: you&apos;ll start by listening to real French dialogues about daily routines and preferences (the natural immersion approach), then master the crucial negation pattern ne...pas (following structured learning principles).
            </p>
            
            <p className="text-lg">
              Negation is fundamental to French communication—it&apos;s how you express what you don&apos;t do, don&apos;t like, or don&apos;t have. The ne...pas pattern works with ALL French verbs and is essential for expressing yourself naturally in French.
            </p>
            
            <p className="text-lg">
              You&apos;ll also learn more regular -er verbs for daily activities like watching TV, listening to music, dancing, and playing sports. These verbs follow the same conjugation patterns you learned in previous lessons, making them easy to master.
            </p>
            
            <div className="bg-white rounded-xl p-4 mt-6 border-l-4 border-blue-500">
              <p className="text-lg font-semibold text-blue-800 text-center">
                🚀 Let&apos;s begin with natural dialogue about daily life, then master the negation patterns that will make your French sound natural and complete!
              </p>
            </div>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[24px] shadow-[inset_0_8px_32px_rgba(59,130,246,0.08),0_16px_48px_rgba(0,0,0,0.1)] p-8 mb-12 border border-white/40 transform hover:scale-[1.02] hover:shadow-[inset_0_8px_32px_rgba(59,130,246,0.12),0_24px_80px_rgba(0,0,0,0.15)] transition-all duration-300">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-blue-600 mr-4 text-2xl">🎯</span>
            Learning Objectives
          </h3>
          <ul className="space-y-3">
            {lesson.learning_objectives.map((objective, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-4 text-2xl mt-1">✓</span>
                <span className="text-gray-700">{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dialogue Section */}
        <DialogueSection dialogue={dialogue} />

        {/* Grammar Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-purple-600 mr-4 text-2xl">📚</span>
            {lesson.grammar.topic}
          </h3>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6 leading-relaxed">
              {lesson.grammar.explanation}
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Patterns:</h4>
              <ul className="space-y-2">
                {lesson.grammar.patterns.map((pattern, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-500 mr-4 text-2xl mt-1">•</span>
                    <span className="text-gray-700">{pattern}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Examples:</h4>
              {lesson.grammar.examples.map((example, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium text-blue-900 mb-2">{example.french}</div>
                      <div className="text-gray-700 mb-2">{example.english}</div>
                      {example.highlight && (
                        <div className="text-sm text-blue-600 font-medium">
                          Key: {example.highlight}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => audioService.playAudio(example.french)}
                      className="text-blue-600 hover:text-blue-700 transition-colors p-1 ml-2"
                      title="Listen to pronunciation"
                    >
                      🔊
                    </button>
                  </div>
                </div>
              ))}
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
                  <div className="text-2xl mb-2">🎵</div>
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

        {/* Navigation */}
        <div className="flex justify-between items-center bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <Link 
            href="/lessons/beginner/8" 
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition flex items-center"
          >
            ← Previous Lesson
          </Link>
          
          <div className="text-center">
            <p className="text-gray-600">Lesson 9 of 9</p>
            <p className="text-sm text-gray-500">More -er Verbs and Negation</p>
          </div>
          
          <div className="text-gray-400 px-6 py-3">
            Next Lesson →
          </div>
        </div>
      </div>
    </div>
  )
}
