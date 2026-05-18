'use client'

import { useState, useCallback } from 'react'
import { DialogueSection } from './DialogueSection'
import InteractiveExercise from './InteractiveExercise'
import ExerciseProgress from './ExerciseProgress'
import { beginnerLessons } from '../../lib/lessons/lessonData'
import Link from 'next/link'

interface Props {
  lessonId: string
  levelLabel?: string
  prevHref: string
  prevLabel: string
  nextHref?: string
  nextLabel?: string
}

export default function BeginnerLessonPage({
  lessonId,
  levelLabel = 'A1 Débutant',
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

  const lesson = beginnerLessons.find(l => l.id === lessonId)

  if (!lesson) {
    return (
      <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] font-sans flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-serif text-[#001360] mb-6">Lesson Not Found</h1>
          <p className="text-xl text-[#444653] font-serif mb-8">This lesson could not be loaded.</p>
          <Link href="/lessons" className="text-[#bb0021] font-semibold hover:text-[#001360] transition-colors">
            ← Return to Curriculum
          </Link>
        </div>
      </div>
    )
  }

  const { dialogue } = lesson

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] font-sans overflow-x-hidden selection:bg-[#bac3ff] selection:text-[#001159]">
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#f9f9f9]/90 backdrop-blur-xl border-b border-[#e2e2e2]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-6">
          <Link href="/" className="font-sans text-sm font-black uppercase tracking-[0.24em] text-[#001360] hover:text-[#bb0021] transition-colors">
            FrançaisLibre
          </Link>
          <div className="flex items-center gap-5 text-xs font-sans uppercase tracking-widest text-[#757684]">
            <Link href="/lessons" className="hover:text-[#001360] transition-colors">
              Lessons
            </Link>
            <Link href="/lessons/beginner" className="hover:text-[#001360] transition-colors">
              A1
            </Link>
          </div>
        </div>
      </nav>

      <header className="relative pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto border-b border-[#e2e2e2] mb-16">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/lessons/beginner" className="text-[#757684] hover:text-[#001360] transition-colors">{levelLabel}</Link>
          <span className="text-[#e2e2e2]">/</span>
          <span className="text-[#001360] font-medium tracking-wide">Lesson {lesson.order.toString().padStart(2, '0')}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif text-[#001360] leading-tight mb-6">
          {lesson.title}
        </h1>
        <p className="text-xl md:text-2xl text-[#444653] font-serif leading-relaxed max-w-3xl mb-12">
          {lesson.subtitle}
        </p>

        <div className="flex flex-wrap gap-8 items-center text-sm font-sans text-[#757684] uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#001360]"></span>
            {lesson.estimated_time} Minutes
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#bb0021]"></span>
            Level {lesson.difficulty}/5
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2f3131]"></span>
            {lesson.is_free ? 'Free Preview' : 'Premium Content'}
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
              {lesson.subtitle}
            </p>

            <div className="mt-12 pt-8 border-t border-[#f3f3f3]">
              <h3 className="text-sm font-sans uppercase tracking-widest text-[#757684] mb-4">Learning Objectives</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {lesson.learning_objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#444653] font-sans">
                    <span className="text-[#bb0021] mt-0.5">■</span>
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[#757684] font-sans uppercase tracking-widest text-sm">Part 01</span>
            <span className="h-[1px] flex-1 bg-[#e2e2e2]"></span>
            <span className="text-[#001360] font-serif italic">Structure</span>
          </div>

          <div className="bg-[#001360] text-white rounded-2xl p-10 md:p-16 shadow-[0_16px_48px_-12px_rgba(0,19,96,0.2)]">
            <h3 className="text-3xl font-serif mb-6">{lesson.grammar.topic}</h3>
            <p className="text-white/80 font-serif text-lg leading-relaxed mb-12 max-w-2xl whitespace-pre-line">
              {lesson.grammar.explanation}
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-sm font-sans uppercase tracking-widest text-white/50 mb-6">Key Patterns</h4>
                <ul className="space-y-4">
                  {lesson.grammar.patterns.map((pattern, index) => (
                    <li key={index} className="bg-white/10 p-5 rounded-xl font-serif border border-white/5 text-lg">
                      {pattern}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-sans uppercase tracking-widest text-white/50 mb-6">Examples</h4>
                <div className="space-y-4">
                  {lesson.grammar.examples.map((example, index) => (
                    <div key={index} className="bg-white/5 p-5 rounded-xl border border-white/5 group hover:bg-white/10 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div className="font-serif text-xl">{example.french}</div>
                      </div>
                      <div className="text-white/70 font-serif mb-3">{example.english}</div>
                      {example.pronunciation && (
                        <div className="text-sm text-white/50 font-mono mb-3">{example.pronunciation}</div>
                      )}
                      {example.highlight && (
                        <div className="text-sm text-[#bac3ff] font-sans mt-3 pt-3 border-t border-white/10">
                          Focus: <span className="font-medium">{example.highlight}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {lesson.grammar.tip && (
              <div className="mt-12 rounded-xl border border-white/10 bg-white/10 p-5 font-serif text-white/85">
                <span className="font-sans text-sm uppercase tracking-widest text-white/50">Tip</span>
                <p className="mt-2">{lesson.grammar.tip}</p>
              </div>
            )}

            {lesson.grammar.conjugation_tables?.map((table) => (
              <div key={table.verb} className="mt-12 pt-12 border-t border-white/10">
                <h4 className="text-sm font-sans uppercase tracking-widest text-white/50 mb-8 text-center">
                  Conjugation: {table.verb}{table.tense ? ` (${table.tense})` : ''}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  {table.rows.map((conj) => (
                    <div key={`${table.verb}-${conj.pronoun}`} className="bg-white/5 p-6 rounded-xl text-center border border-white/5 group hover:border-[#bb0021]/50 transition-colors">
                      <div className="text-white/60 font-sans text-sm mb-2">{conj.pronoun}</div>
                      <div className="text-2xl font-serif text-white mb-2">{conj.form}</div>
                      <div className="text-white/40 font-mono text-xs">{conj.pronunciation}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
            {lesson.vocabulary.map((word, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_8px_32px_-8px_rgba(0,19,96,0.04)] border border-[#e2e2e2] group hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgba(0,19,96,0.08)] transition-all">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-sans tracking-widest uppercase text-[#757684] border border-[#e2e2e2] px-2 py-1 rounded">
                    {word.category}
                  </span>
                  {word.gender && (
                    <span className="text-xs font-sans text-[#757684] capitalize">{word.gender}</span>
                  )}
                </div>

                <h3 className="text-2xl font-serif text-[#001360] mb-2">{word.word}</h3>
                <p className="text-[#444653] font-serif text-lg mb-4">{word.translation}</p>
                {word.pronunciation && (
                  <p className="text-xs text-[#757684] font-mono mb-4">{word.pronunciation}</p>
                )}

                <div className="pt-6 border-t border-[#f3f3f3] mt-auto">
                  <p className="text-sm font-serif text-[#1a1c1c] italic flex-1">&ldquo;{word.example_sentence}&rdquo;</p>
                  <p className="text-xs text-[#757684] mt-2">{word.example_translation}</p>
                </div>
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
              totalExercises={lesson.exercises.length}
              completedExercises={completedExercises.size}
              correctAnswers={correctAnswers.size}
              onReset={handleResetExercises}
            />

            <div className="mt-12 space-y-12">
              {lesson.exercises.map((exercise, index) => (
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
