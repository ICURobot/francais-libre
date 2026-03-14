'use client'

import { useState, useCallback } from 'react'
import { Exercise } from '../../lib/lessons/lessonTypes'
import InteractiveExercise from './InteractiveExercise'
import ExerciseProgress from './ExerciseProgress'

interface LessonExercisesProps {
  exercises: Exercise[]
}

export default function LessonExercises({ exercises }: LessonExercisesProps) {
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set())
  const [correctAnswers, setCorrectAnswers] = useState<Set<string>>(new Set())

  const handleExerciseComplete = useCallback((exerciseId: string, isCorrect: boolean) => {
    setCompletedExercises(prev => new Set([...prev, exerciseId]))
    if (isCorrect) {
      setCorrectAnswers(prev => new Set([...prev, exerciseId]))
    }
  }, [])

  const handleReset = useCallback(() => {
    setCompletedExercises(new Set())
    setCorrectAnswers(new Set())
  }, [])

  return (
    <>
      <ExerciseProgress
        totalExercises={exercises.length}
        completedExercises={completedExercises.size}
        correctAnswers={correctAnswers.size}
        onReset={handleReset}
      />

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200 transform hover:scale-[1.005] hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="text-orange-600 mr-3">✏️</span>
          Practice Exercises
        </h3>
        <div className="space-y-6">
          {exercises.map((exercise, index) => (
            <InteractiveExercise
              key={exercise.id}
              exercise={exercise}
              exerciseNumber={index + 1}
              onComplete={(isCorrect) => handleExerciseComplete(exercise.id, isCorrect)}
            />
          ))}
        </div>
      </div>
    </>
  )
}
