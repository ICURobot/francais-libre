'use client'

import React from 'react'

interface ExerciseProgressProps {
  totalExercises: number
  completedExercises: number
  correctAnswers: number
  onReset: () => void
}

export default function ExerciseProgress({ 
  totalExercises, 
  completedExercises, 
  correctAnswers, 
  onReset 
}: ExerciseProgressProps) {
  const completionPercentage = totalExercises > 0 ? (completedExercises / totalExercises) * 100 : 0
  const accuracyPercentage = completedExercises > 0 ? (correctAnswers / completedExercises) * 100 : 0
  const isCompleted = completedExercises === totalExercises

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 transform hover:scale-[1.005] hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800 flex items-center">
          <span className="text-blue-600 mr-3">📊</span>
          Exercise Progress
        </h3>
        {isCompleted && (
          <div className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-800 rounded-full">
            <span className="text-xl">🎉</span>
            <span className="font-medium">Lesson Complete!</span>
          </div>
        )}
      </div>

      {/* Progress Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Completion */}
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {completedExercises}/{totalExercises}
          </div>
          <div className="text-sm text-gray-600">Exercises Completed</div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Accuracy */}
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {accuracyPercentage.toFixed(0)}%
          </div>
          <div className="text-sm text-gray-600">Accuracy Rate</div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${accuracyPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Score */}
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {correctAnswers}/{totalExercises}
          </div>
          <div className="text-sm text-gray-600">Correct Answers</div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(correctAnswers / totalExercises) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Progress</span>
          <span className="text-sm font-medium text-gray-700">{completionPercentage.toFixed(0)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center">
        {isCompleted && (
          <button
            onClick={onReset}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center space-x-2"
          >
            <span>🔄</span>
            <span>Retake All Exercises</span>
          </button>
        )}
      </div>

      {/* Motivational Message */}
      {!isCompleted && (
        <div className="text-center mt-4">
          <p className="text-gray-600">
            {completedExercises === 0 
              ? "Ready to start practicing? Let&apos;s begin with the first exercise!" 
              : `Great progress! ${totalExercises - completedExercises} more exercises to go.`
            }
          </p>
        </div>
      )}

      {isCompleted && (
        <div className="text-center mt-4">
          <p className="text-green-700 font-medium">
            🎊 Congratulations! You&apos;ve completed all exercises in this lesson.
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Ready for the next challenge? Keep practicing to reinforce your learning!
          </p>
        </div>
      )}
    </div>
  )
}
