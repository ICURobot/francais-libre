'use client'

import { DialogueSection } from '../../../../../components/lessons/DialogueSection'
import { beginnerLessons } from '../../../../../lib/lessons/lessonData'
import Link from 'next/link'
import { ttsService } from '../../../../../lib/services/ttsService'

export default function Lesson1Page() {
  // Get the first lesson data from lessonData.ts
  const lesson = beginnerLessons.find(l => l.id === 'beginner-1')
  
  if (!lesson || !lesson.dialogue) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Lesson Not Found</h1>
          <p className="text-xl text-gray-600">This lesson could not be loaded.</p>
          <Link href="/lessons" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mt-4 inline-block">
            ← Back to Lessons
          </Link>
        </div>
      </div>
    )
  }

  const { dialogue } = lesson

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {lesson.title}
          </h1>
          <p className="text-xl text-gray-600">
            {lesson.subtitle}
          </p>
        </div>

        {/* Welcome Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 mb-6 border border-blue-200">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">🇫🇷</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to Your French Learning Journey!
            </h2>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              This lesson combines the best of both proven teaching methods: you&apos;ll start by listening to real French conversations (the natural immersion approach), then master the essential grammar foundation (following structured learning principles).
            </p>
            
            <p className="text-lg">
              Greetings and introductions aren&apos;t just polite gestures in French culture—they&apos;re the gateway to every meaningful interaction. French society places enormous importance on proper etiquette, and mastering these basics will open doors everywhere from Parisian cafés to business meetings in Lyon.
            </p>
            
            <p className="text-lg">
              The verb <span className="font-bold text-blue-600">&apos;être&apos;</span> (to be) is absolutely fundamental—it appears in nearly every French sentence and is essential for expressing who you are, where you&apos;re from, and what you do. By the end of this lesson, you&apos;ll confidently introduce yourself and engage in your first real French conversations.
            </p>
            
            <div className="bg-white rounded-xl p-4 mt-6 border-l-4 border-blue-500">
              <p className="text-lg font-semibold text-blue-800 text-center">
                🚀 Let's begin with natural dialogue, then understand the patterns behind the language!
              </p>
            </div>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-blue-600 mr-3">🎯</span>
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
          onComplete={() => console.log('Lesson completed!')}
        />

        {/* Grammar Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-200">
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
                <li key={index} className="text-gray-700 bg-gray-50 p-3 rounded-lg">
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
                <div key={index} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold text-black">{example.french}</div>
                    <button
                      onClick={() => ttsService.speak(example.french, 'fr-FR')}
                      className="text-blue-600 hover:text-blue-700 transition-colors p-1 ml-2"
                      title="Listen to pronunciation"
                    >
                      🔊
                    </button>
                  </div>
                  <div className="text-gray-600">{example.english}</div>
                  {example.highlight && (
                    <div className="text-sm text-blue-700 mt-1">
                      Key word: <span className="font-bold">{example.highlight}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Conjugation Table */}
          {lesson.grammar.conjugation_table && (
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Conjugation Table:</h4>
              <div className="grid grid-cols-3 gap-3">
                {lesson.grammar.conjugation_table.map((conj, index) => (
                  <div key={index} className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="font-bold text-black">{conj.pronoun}</div>
                    <div className="text-lg text-black">{conj.form}</div>
                    <div className="text-sm text-gray-700">{conj.pronunciation}</div>
                    <button
                      onClick={() => ttsService.speak(conj.form, 'fr-FR')}
                      className="text-green-600 hover:text-green-700 transition-colors p-1 mt-2"
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
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-green-600 mr-3">📖</span>
            Vocabulary
          </h3>
          <div className="space-y-4">
            {lesson.vocabulary.map((word, index) => (
              <div key={index} className="border-l-4 border-green-500 bg-green-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-black text-lg">{word.word}</span>
                    <button
                      onClick={() => ttsService.speak(word.word, 'fr-FR')}
                      className="text-green-600 hover:text-green-700 transition-colors p-1"
                      title="Listen to word"
                    >
                      🔊
                    </button>
                  </div>
                  <span className="text-sm bg-green-200 text-green-800 px-2 py-1 rounded-full">
                    {word.category}
                  </span>
                </div>
                <div className="text-gray-700 mb-2">{word.translation}</div>
                <div className="text-sm text-gray-600 mb-2">Pronunciation: {word.pronunciation}</div>
                <div className="bg-white p-3 rounded border">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-black mb-1">{word.example_sentence}</div>
                    <button
                      onClick={() => ttsService.speak(word.example_sentence, 'fr-FR')}
                      className="text-green-600 hover:text-green-700 transition-colors p-1 ml-2"
                      title="Listen to example sentence"
                    >
                      🔊
                    </button>
                  </div>
                  <div className="text-sm text-gray-600 italic">{word.example_translation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exercises Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-orange-600 mr-3">✏️</span>
            Practice Exercises
          </h3>
          <div className="space-y-4">
            {lesson.exercises.map((exercise, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-gray-800">Exercise {index + 1}</span>
                  <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                    {exercise.type}
                  </span>
                </div>
                <p className="text-gray-700 mb-3">{exercise.question}</p>
                
                {exercise.options && (
                  <div className="space-y-2 mb-3">
                    {exercise.options.map((option, optIndex) => (
                      <div key={optIndex} className="flex items-center">
                        <input type="radio" name={`exercise-${index}`} id={`opt-${index}-${optIndex}`} className="mr-2" />
                        <label htmlFor={`opt-${index}-${optIndex}`} className="text-gray-700">{option}</label>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="text-sm text-gray-600">
                  <strong>Hint:</strong> {exercise.hints?.[0]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lesson Info */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
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
                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Link
            href="/lessons"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            ← Back to Lessons
          </Link>
          
          <Link
            href="/lessons/beginner/2"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Next Lesson →
          </Link>
        </div>
      </div>
    </div>
  )
}
