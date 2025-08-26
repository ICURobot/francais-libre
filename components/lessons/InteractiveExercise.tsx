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
  const [matchedPairs, setMatchedPairs] = useState<Set<number>>(new Set())

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

      case 'conjugation':
        return (
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h5 className="font-semibold text-gray-800 mb-3">Conjugate: <span className="text-blue-600">{exercise.verb}</span></h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exercise.translations && Object.entries(exercise.translations).map(([pronoun, translation]) => (
                  <div key={pronoun} className="flex items-center justify-between p-3 bg-white rounded border">
                    <span className="font-medium text-gray-700">{pronoun}</span>
                    <span className="text-gray-600">{translation}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-3">This is a practice exercise. Review the conjugation patterns above.</p>
              <button
                onClick={() => onComplete(true)}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                Mark as Complete
              </button>
            </div>
          </div>
        )

      case 'negation_transformation':
        return (
          <div className="space-y-4">
            {exercise.exercises && exercise.exercises.map((negEx, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-sm font-medium text-blue-800 mb-1">Positive:</p>
                    <p className="text-gray-700">{negEx.positive}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-800 mb-1">Negative:</p>
                    <p className="text-gray-700 font-semibold">{negEx.negative}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">{negEx.translation}</p>
              </div>
            ))}
            <div className="text-center">
              <p className="text-gray-600 mb-3">Practice transforming positive to negative sentences.</p>
              <button
                onClick={() => onComplete(true)}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                Mark as Complete
              </button>
            </div>
          </div>
        )

      case 'fill_blank_negation':
        return (
          <div className="space-y-4">
            {exercise.sentences && exercise.sentences.map((sentence, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm font-medium text-green-800 mb-1">Sentence:</p>
                <p className="text-gray-700 mb-2">{sentence.sentence}</p>
                <p className="text-sm text-gray-600 italic">{sentence.translation}</p>
                <div className="mt-2 text-sm text-green-700">
                  <strong>Answer:</strong> {sentence.blanks.join(' and ')}
                </div>
              </div>
            ))}
            <div className="text-center">
              <p className="text-gray-600 mb-3">Practice filling in negation words.</p>
              <button
                onClick={() => onComplete(true)}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                Mark as Complete
              </button>
            </div>
          </div>
        )

      case 'vocabulary_match':
        return (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <p className="text-gray-600">Click on the French words to match them with their English meanings.</p>
            </div>
            
            {/* French words (clickable) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {exercise.pairs && exercise.pairs.map((pair, index) => (
                <button
                  key={`french-${index}`}
                  onClick={() => {
                    const newMatchedPairs = new Set(matchedPairs)
                    if (newMatchedPairs.has(index)) {
                      newMatchedPairs.delete(index)
                    } else {
                      newMatchedPairs.add(index)
                    }
                    setMatchedPairs(newMatchedPairs)
                  }}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 text-center ${
                    matchedPairs.has(index)
                      ? 'bg-green-100 border-green-500 ring-2 ring-green-500'
                      : 'bg-blue-100 hover:bg-blue-200 border-blue-300'
                  }`}
                >
                  <p className={`font-medium ${
                    matchedPairs.has(index) ? 'text-green-800' : 'text-blue-800'
                  }`}>{pair.french}</p>
                </button>
              ))}
            </div>

            {/* English translations (clickable) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {exercise.pairs && exercise.pairs.map((pair, index) => (
                <button
                  key={`english-${index}`}
                  onClick={() => {
                    const newMatchedPairs = new Set(matchedPairs)
                    if (newMatchedPairs.has(index)) {
                      newMatchedPairs.delete(index)
                    } else {
                      newMatchedPairs.add(index)
                    }
                    setMatchedPairs(newMatchedPairs)
                  }}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 text-center ${
                    matchedPairs.has(index)
                      ? 'bg-green-100 border-green-500 ring-2 ring-green-500'
                      : 'bg-purple-100 hover:bg-purple-200 border-purple-300'
                  }`}
                >
                  <p className={`font-medium ${
                    matchedPairs.has(index) ? 'text-green-800' : 'text-purple-800'
                  }`}>{pair.english}</p>
                </button>
              ))}
            </div>

            {/* Progress and Instructions */}
            <div className="text-center mt-4 space-y-3">
              <div className="flex justify-center items-center space-x-2">
                <span className="text-sm text-gray-600">Progress:</span>
                <span className="text-sm font-medium text-blue-600">
                  {matchedPairs.size} / {exercise.pairs?.length || 0} pairs matched
                </span>
              </div>
              
              <p className="text-sm text-gray-500">
                💡 <strong>How to play:</strong> Click on a French word and its matching English translation to highlight them as a pair.
              </p>
              
              {matchedPairs.size > 0 && (
                <button
                  onClick={() => onComplete(true)}
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                >
                  Submit Matches
                </button>
              )}
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
      case 'conjugation': return '🔤'
      case 'negation_transformation': return '🔄'
      case 'fill_blank_negation': return '✏️'
      case 'vocabulary_match': return '🔗'
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
