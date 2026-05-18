'use client'

import { useState, useCallback } from 'react'
import { DialogueSection } from './DialogueSection'
import InteractiveExercise from './InteractiveExercise'
import ExerciseProgress from './ExerciseProgress'
import Link from 'next/link'
import { Exercise } from '../../lib/lessons/lessonTypes'

interface GrammarPoint {
  title: string
  explanation: string
  examples: string[]
}

interface VocabItem {
  french: string
  english: string
  category: string
  example?: string
}

interface CulturalNote {
  title: string
  content: string
}

interface ElementaryDialogueExchange {
  speaker: string
  french: string
  english: string
  pronunciation?: string
}

interface ElementaryDialogue {
  title: string
  context: string
  exchanges: ElementaryDialogueExchange[]
}

export interface ElementaryLessonData {
  id: number
  title: string
  level: string
  description: string
  dialogue: ElementaryDialogue
  grammarPoints: GrammarPoint[]
  vocabulary: VocabItem[]
  culturalNotes?: CulturalNote[]
  exercises: Exercise[]
}

interface Props {
  lessonData: ElementaryLessonData
  lessonNumber: number
  prevHref: string
  prevLabel: string
  nextHref?: string
  nextLabel?: string
}

export default function ElementaryLessonLayout({
  lessonData,
  lessonNumber,
  prevHref,
  prevLabel,
  nextHref,
  nextLabel,
}: Props) {
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set())
  const [correctAnswers, setCorrectAnswers] = useState<Set<string>>(new Set())

  const handleExerciseComplete = useCallback((exerciseId: string, isCorrect: boolean) => {
    setCompletedExercises(prev => new Set([...prev, exerciseId]))
    if (isCorrect) {
      setCorrectAnswers(prev => new Set([...prev, exerciseId]))
    }
  }, [])

  const handleResetExercises = useCallback(() => {
    setCompletedExercises(new Set())
    setCorrectAnswers(new Set())
  }, [])

  const dialogue = {
    title: lessonData.dialogue.title,
    context: lessonData.dialogue.context,
    exchanges: lessonData.dialogue.exchanges,
  }

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] font-sans overflow-x-hidden selection:bg-[#bac3ff] selection:text-[#001159]">
      <header className="relative pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto border-b border-[#e2e2e2] mb-16">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/lessons/elementary" className="text-[#757684] hover:text-[#001360] transition-colors">A2 Élémentaire</Link>
          <span className="text-[#e2e2e2]">/</span>
          <span className="text-[#001360] font-medium tracking-wide">Lesson {lessonNumber.toString().padStart(2, '0')}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif text-[#001360] leading-tight mb-6">
          {lessonData.title}
        </h1>
        <p className="text-xl md:text-2xl text-[#444653] font-serif leading-relaxed max-w-3xl mb-12">
          {lessonData.description}
        </p>

        <div className="flex flex-wrap gap-8 items-center text-sm font-sans text-[#757684] uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#001360]"></span>
            {lessonData.level} Level
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#bb0021]"></span>
            {lessonData.grammarPoints.length} Grammar Points
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2f3131]"></span>
            {lessonData.exercises.length} Exercises
          </div>
        </div>

        <div className="hidden lg:block w-64 h-64 bg-gradient-to-br from-[#f3f3f3] to-[#ffffff] rounded-full absolute top-0 right-0 blur-3xl opacity-60 pointer-events-none"></div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-12 pb-32">

        <section className="mb-24">
          <div className="bg-white rounded-2xl p-10 md:p-16 shadow-[0_8px_32px_-8px_rgba(0,19,96,0.04)] border border-[#e2e2e2] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#bb0021]"></div>

            <h2 className="text-3xl font-serif text-[#001360] mb-8">
              About This Lesson
            </h2>

            <p className="text-[#444653] font-serif text-lg leading-relaxed">
              {lessonData.description}
            </p>

            {lessonData.culturalNotes && (
              <div className="mt-12 pt-8 border-t border-[#f3f3f3]">
                <h3 className="text-sm font-sans uppercase tracking-widest text-[#757684] mb-6">Cultural Context</h3>
                <div className="space-y-6">
                  {lessonData.culturalNotes.map((note, index) => (
                    <div key={index}>
                      <h4 className="font-sans font-medium text-[#001360] mb-2">{note.title}</h4>
                      <p className="text-[#444653] font-serif leading-relaxed">{note.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[#757684] font-sans uppercase tracking-widest text-sm">Part 01</span>
            <span className="h-[1px] flex-1 bg-[#e2e2e2]"></span>
            <span className="text-[#001360] font-serif italic">Structure</span>
          </div>

          <div className="bg-[#001360] text-white rounded-2xl p-10 md:p-16 shadow-[0_16px_48px_-12px_rgba(0,19,96,0.2)]">
            <h3 className="text-3xl font-serif mb-4">Grammar Points</h3>
            <p className="text-white/60 font-sans uppercase tracking-widest text-sm mb-12">
              {lessonData.grammarPoints.length} topics covered in this lesson
            </p>

            <div className="space-y-12">
              {lessonData.grammarPoints.map((point, index) => (
                <div key={index} className="border-t border-white/10 pt-10 first:border-0 first:pt-0">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-white/40 font-sans text-sm">{String(index + 1).padStart(2, '0')}</span>
                    <h4 className="text-2xl font-serif">{point.title}</h4>
                  </div>
                  <p className="text-white/80 font-serif text-lg leading-relaxed mb-8 max-w-2xl">
                    {point.explanation}
                  </p>
                  <ul className="space-y-3">
                    {point.examples.map((example, idx) => (
                      <li key={idx} className="bg-white/5 p-5 rounded-xl border border-white/5 font-sans text-white/90 leading-relaxed">
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[#757684] font-sans uppercase tracking-widest text-sm">Part 02</span>
            <span className="h-[1px] flex-1 bg-[#e2e2e2]"></span>
            <span className="text-[#001360] font-serif italic">Immersion</span>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_8px_32px_-8px_rgba(0,19,96,0.04)] border border-[#e2e2e2] overflow-hidden">
            <DialogueSection dialogue={dialogue} />
          </div>
        </section>

        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[#757684] font-sans uppercase tracking-widest text-sm">Part 03</span>
            <span className="h-[1px] flex-1 bg-[#e2e2e2]"></span>
            <span className="text-[#001360] font-serif italic">Lexicon</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessonData.vocabulary.map((word, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_8px_32px_-8px_rgba(0,19,96,0.04)] border border-[#e2e2e2] group hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgba(0,19,96,0.08)] transition-all">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-sans tracking-widest uppercase text-[#757684] border border-[#e2e2e2] px-2 py-1 rounded">
                    {word.category}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-[#001360] mb-2">{word.french}</h3>
                <p className="text-[#444653] font-serif text-lg mb-4">{word.english}</p>

                {word.example && (
                  <div className="pt-6 border-t border-[#f3f3f3] mt-auto">
                    <p className="text-sm font-serif text-[#1a1c1c] italic">&ldquo;{word.example}&rdquo;</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[#757684] font-sans uppercase tracking-widest text-sm">Part 04</span>
            <span className="h-[1px] flex-1 bg-[#e2e2e2]"></span>
            <span className="text-[#001360] font-serif italic">Application</span>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_8px_32px_-8px_rgba(0,19,96,0.04)] border border-[#e2e2e2] p-8 md:p-12">
            <ExerciseProgress
              totalExercises={lessonData.exercises.length}
              completedExercises={completedExercises.size}
              correctAnswers={correctAnswers.size}
              onReset={handleResetExercises}
            />

            <div className="mt-12 space-y-12">
              {lessonData.exercises.map((exercise, index) => (
                <div key={exercise.id} className="pt-12 border-t border-[#f3f3f3] first:border-0 first:pt-0">
                  <InteractiveExercise
                    exercise={exercise}
                    exerciseNumber={index + 1}
                    onComplete={(isCorrect) => handleExerciseComplete(exercise.id, isCorrect)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-32 pt-12 border-t border-[#e2e2e2]">
          <Link
            href={prevHref}
            className="group flex items-center gap-4 text-[#444653] font-sans hover:text-[#001360] transition-colors"
          >
            <span className="w-10 h-10 rounded-full border border-[#c5c5d5] group-hover:border-[#001360] flex items-center justify-center transition-colors">
              ←
            </span>
            {prevLabel}
          </Link>

          {nextHref && nextLabel && (
            <Link
              href={nextHref}
              className="group flex items-center gap-4 text-[#001360] font-sans font-medium hover:text-[#bb0021] transition-colors"
            >
              {nextLabel}
              <span className="w-10 h-10 rounded-full bg-[#f3f3f3] group-hover:bg-[#ffdad7] flex items-center justify-center transition-colors">
                →
              </span>
            </Link>
          )}
        </div>
      </main>
    </div>
  )
}
