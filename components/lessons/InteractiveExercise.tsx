'use client'

import React, { useState, useCallback } from 'react'
import { Exercise } from '../../lib/lessons/lessonTypes'
import { audioService } from '../../lib/services/audioService'

interface InteractiveExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean) => void
  exerciseNumber: number
}

export default function InteractiveExercise({ exercise, onComplete, exerciseNumber }: InteractiveExerciseProps) {
  const [userAnswer, setUserAnswer] = useState<string>('')
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = useCallback(() => {
    if (!userAnswer.trim() && !selectedOption) return

    let correct = false
    const answer = selectedOption || userAnswer.trim()

    if (exercise.type === 'multiple_choice') {
      correct = answer === exercise.correct_answer
    } else if (exercise.type === 'fill_blank') {
      const correctAnswers = Array.isArray(exercise.correct_answer) 
        ? exercise.correct_answer 
        : [exercise.correct_answer]
      correct = correctAnswers.some(correct => 
        answer.toLowerCase() === correct.toLowerCase()
      )
    } else if (exercise.type === 'translation') {
      const correctAnswers = Array.isArray(exercise.correct_answer) 
        ? exercise.correct_answer 
        : [exercise.correct_answer]
      correct = correctAnswers.some(correct => 
        answer.toLowerCase() === correct.toLowerCase()
      )
    } else if (exercise.type === 'speaking') {
      // For speaking exercises, we'll consider them correct if attempted
      correct = true
    }

    setIsCorrect(correct)
    setIsSubmitted(true)
    setShowExplanation(true)
    onComplete(correct)
  }, [userAnswer, selectedOption, exercise, onComplete])

  const handleReset = useCallback(() => {
    setUserAnswer('')
    setSelectedOption('')
    setIsSubmitted(false)
    setIsCorrect(false)
    setShowHint(false)
    setShowExplanation(false)
  }, [])

  const handleSpeak = useCallback(async (text: string) => {
    setIsLoading(true)
    try {
      await audioService.playAudio(text, { fallbackToTTS: true })
    } catch (error) {
      console.error('TTS error:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const renderExerciseContent = () => {
    switch (exercise.type) {
      case 'multiple_choice':
        return (
          <div className="space-y-4">
            {/* Answer Options */}
            <div className="space-y-3">
              {exercise.options?.map((option, index) => (
                <label key={index} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="radio"
                    name={`exercise-${exercise.id}`}
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    disabled={isSubmitted}
                  />
                  <span className={`text-lg group-hover:text-blue-600 transition-colors ${
                    isSubmitted && option === exercise.correct_answer 
                      ? 'text-green-600 font-semibold' 
                      : isSubmitted && option === selectedOption && !isCorrect
                      ? 'text-red-600 font-semibold'
                      : 'text-gray-700'
                  }`}>
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )

      case 'fill_blank':
        return (
          <div className="space-y-4">
            {/* Interactive Fill-in-the-Blank */}
            <div className="text-lg text-gray-700 leading-relaxed">
              {exercise.question.split('_____').map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <input
                      type="text"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="Type your answer..."
                      className="mx-2 px-3 py-2 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg font-medium text-center min-w-[120px] text-black"
                      disabled={isSubmitted}
                    />
                  )}
                </span>
              ))}
            </div>
          </div>
        )

      case 'translation':
        return (
          <div className="space-y-4">
            {/* Translation Input */}
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Type your French translation..."
              className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg font-medium text-black"
              disabled={isSubmitted}
            />
          </div>
        )

      case 'speaking':
        return (
          <div className="space-y-4">
            {/* Audio Example */}
            {exercise.audio_prompt && (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleSpeak(exercise.audio_prompt!)}
                  disabled={isLoading}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                >
                  <span>🔊</span>
                  <span>{isLoading ? 'Playing...' : 'Listen to Example'}</span>
                </button>
                <span className="text-sm text-gray-500">Click to hear the pronunciation</span>
              </div>
            )}
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Practice Tip:</strong> Try speaking the phrase out loud. You can record yourself and compare with the example above!
              </p>
            </div>
          </div>
        )

      default:
        return <p className="text-gray-600">Exercise type not supported</p>
    }
  }

  const getExerciseIcon = (type: string) => {
    switch (type) {
      case 'multiple_choice': return '📝'
      case 'fill_blank': return '✏️'
      case 'translation': return '🌐'
      case 'speaking': return '🗣️'
      default: return '❓'
    }
  }

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-6 transform hover:scale-[1.01] hover:shadow-lg transition-all duration-300">
      {/* Exercise Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">✏️</span>
          <h4 className="text-xl font-bold text-gray-800">Exercise {exerciseNumber}</h4>
        </div>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium capitalize flex items-center space-x-1">
          <span className="text-xs">{getExerciseIcon(exercise.type)}</span>
          <span>{exercise.type.replace('_', ' ')}</span>
        </span>
      </div>

      {/* Question Display - Always Visible */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <p className="text-lg font-semibold text-gray-800">{exercise.question}</p>
      </div>

      {/* Exercise Content */}
      <div className="mb-6">
        {renderExerciseContent()}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-3">
          {!isSubmitted && (
            <button
              onClick={handleSubmit}
              disabled={!userAnswer.trim() && !selectedOption}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              Submit Answer
            </button>
          )}
          
          {isSubmitted && (
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Try Again
            </button>
          )}

          {exercise.hints && exercise.hints.length > 0 && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 transition-colors font-medium"
            >
              💡 Hint
            </button>
          )}
        </div>

        {/* Result Indicator */}
        {isSubmitted && (
          <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            <span className="text-xl">
              {isCorrect ? '✅' : '❌'}
            </span>
            <span className="font-medium">
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </span>
          </div>
        )}
      </div>

      {/* Hint */}
      {showHint && exercise.hints && (
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h5 className="font-semibold text-yellow-800 mb-2">💡 Hint:</h5>
          <ul className="text-yellow-700 space-y-1">
            {exercise.hints.map((hint, index) => (
              <li key={index} className="text-sm">• {hint}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Explanation */}
      {showExplanation && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h5 className="font-semibold text-blue-800 mb-2">📚 Explanation:</h5>
          <p className="text-blue-700">{exercise.explanation}</p>
        </div>
      )}
    </div>
  )
}
