'use client'

import { useState, useCallback, useMemo } from 'react'
import InteractiveExercise from './InteractiveExerciseRedesign'
import AudioPlayButton from './AudioPlayButton'
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

// Soft, navy-tinted long shadow used across editorial cards.
const SOFT_SHADOW = '0 10px 30px -5px rgba(0,19,96,0.04), 0 20px 40px -10px rgba(0,19,96,0.06)'

export default function BeginnerLessonPageRedesign({
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

  // Assign each speaker a stable accent colour (alternating navy / red).
  const speakerColors = useMemo(() => {
    const map: Record<string, string> = {}
    if (!lesson) return map
    const palette = ['#bb0021', '#001360']
    lesson.dialogue.exchanges.forEach((ex) => {
      if (!(ex.speaker in map)) {
        map[ex.speaker] = palette[Object.keys(map).length % palette.length]
      }
    })
    return map
  }, [lesson])

  if (!lesson) {
    return (
      <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-playfair text-[#001360] mb-6">Lesson Not Found</h1>
          <p className="text-xl text-[#444653] font-serif mb-8">This lesson could not be loaded.</p>
          <Link href="/lessons" className="text-[#bb0021] font-semibold hover:text-[#001360] transition-colors">
            ← Return to Curriculum
          </Link>
        </div>
      </div>
    )
  }

  const { dialogue } = lesson
  const total = lesson.exercises.length
  const completed = completedExercises.size
  const progressPct = total > 0 ? (completed / total) * 100 : 0
  const isComplete = completed === total && total > 0

  const sectionLabel = (part: string, label: string) => (
    <div className="flex items-center gap-4 mb-8">
      <span className="h-px flex-grow bg-[#e2e2e2]"></span>
      <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#757684] whitespace-nowrap">
        {part} —— {label}
      </span>
      <span className="h-px flex-grow bg-[#e2e2e2]"></span>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] font-sans overflow-x-hidden selection:bg-[#bac3ff] selection:text-[#001159]">
      {/* FIXED TOP NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#f9f9f9]/80 backdrop-blur-md border-b border-[#e2e2e2]/60">
        <div className="max-w-[1024px] mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-sm font-black uppercase tracking-[0.22em] text-[#001360] hover:text-[#bb0021] transition-colors">
            FrançaisLibre
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/lessons" className="text-xs font-medium uppercase tracking-[0.18em] text-[#757684] hover:text-[#bb0021] transition-colors">
              Lessons
            </Link>
            <Link href="/lessons/beginner" className="text-xs font-semibold uppercase tracking-[0.1em] bg-[#bb0021]/10 text-[#bb0021] px-3 py-1 rounded-full">
              A1
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-[1024px] mx-auto px-6 md:px-8 pt-32 pb-20 relative">
        {/* Background accent */}
        <div
          className="absolute -top-10 -right-20 w-80 h-80 pointer-events-none"
          style={{ filter: 'blur(80px)', background: 'radial-gradient(circle, rgba(187,0,33,0.08) 0%, rgba(249,249,249,0) 70%)' }}
        ></div>

        {/* HEADER / HERO */}
        <header className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/lessons/beginner" className="text-xs font-sans uppercase tracking-[0.2em] text-[#757684] hover:text-[#001360] transition-colors">
              {levelLabel}
            </Link>
            <span className="text-[#c6c5d2]">/</span>
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#bb0021]">
              Lesson {lesson.order.toString().padStart(2, '0')}
            </span>
          </div>

          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-[#001360] leading-[1.05] mb-6">
            {lesson.title}
          </h1>
          <p className="font-serif text-xl md:text-2xl italic text-[#444653] leading-relaxed max-w-2xl mb-8">
            {lesson.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            {[
              { dot: '#001360', text: `${lesson.estimated_time} Minutes` },
              { dot: '#bb0021', text: `Level ${lesson.difficulty}/5` },
              { dot: '#2f3131', text: lesson.is_free ? 'Free Preview' : 'Premium Content' },
            ].map((pill) => (
              <div
                key={pill.text}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e2e2e2] rounded-full"
                style={{ boxShadow: SOFT_SHADOW }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: pill.dot }}></span>
                <span className="text-xs font-sans uppercase tracking-[0.12em] text-[#001360]">{pill.text}</span>
              </div>
            ))}
          </div>
        </header>

        {/* ABOUT THIS LESSON */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl border-l-4 border-l-[#bb0021] p-8 md:p-12" style={{ boxShadow: SOFT_SHADOW }}>
            <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#001360] mb-8">About This Lesson</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <p className="font-serif text-lg text-[#444653] leading-relaxed italic">
                {lesson.subtitle}
              </p>
              <ul className="space-y-4">
                {lesson.learning_objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="mt-2 w-2.5 h-2.5 bg-[#bb0021] shrink-0"></span>
                    <span className="font-sans text-[#1a1c1c] leading-relaxed">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PART 01 — STRUCTURE */}
        <section className="mb-20">
          {sectionLabel('Part 01', 'Structure')}
          <div className="bg-[#001360] text-white rounded-2xl p-8 md:p-12" style={{ boxShadow: '0 16px 48px -12px rgba(0,19,96,0.25)' }}>
            <h2 className="font-playfair text-3xl font-semibold mb-4">{lesson.grammar.topic}</h2>
            <p className="font-serif text-lg text-white/80 leading-relaxed mb-12 max-w-2xl whitespace-pre-line">
              {lesson.grammar.explanation}
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Key Patterns */}
              <div>
                <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-white/50 mb-6">Key Patterns</h3>
                <div className="flex flex-wrap gap-3">
                  {lesson.grammar.patterns.map((pattern, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 border border-white/15 rounded-lg font-serif italic text-white"
                    >
                      {pattern}
                    </span>
                  ))}
                </div>

                {lesson.grammar.tip && (
                  <div className="mt-10 p-6 bg-[#bb0021]/15 border border-[#bb0021]/40 rounded-xl">
                    <div className="flex items-center gap-2 mb-2 text-[#ffb3af]">
                      <span className="material-symbols-outlined text-[20px]">lightbulb</span>
                      <span className="text-xs font-sans uppercase tracking-[0.18em]">Pro Tip</span>
                    </div>
                    <p className="text-sm leading-relaxed text-white/85">{lesson.grammar.tip}</p>
                  </div>
                )}
              </div>

              {/* Examples */}
              <div className="space-y-4">
                <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-white/50 mb-6">Examples</h3>
                {lesson.grammar.examples.map((example, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <AudioPlayButton variant="dark" label={example.french} />
                        <span className="font-playfair text-xl text-white">{example.french}</span>
                      </div>
                      {example.highlight && (
                        <span className="text-[10px] bg-[#bb0021] px-2 py-0.5 rounded text-white font-bold uppercase whitespace-nowrap">
                          Focus: {example.highlight}
                        </span>
                      )}
                    </div>
                    <p className="text-white/70 text-sm italic mb-1">{example.english}</p>
                    {example.pronunciation && (
                      <p className="text-white/50 text-xs font-mono">{example.pronunciation}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Conjugation tables */}
            {lesson.grammar.conjugation_tables?.map((table) => (
              <div key={table.verb} className="mt-16 text-center">
                <h3 className="font-playfair text-2xl text-white/90 mb-8">
                  Conjugation: {table.verb}{table.tense ? ` (${table.tense})` : ''}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 max-w-3xl mx-auto">
                  {table.rows.map((row) => (
                    <div key={`${table.verb}-${row.pronoun}`} className="flex flex-col items-center">
                      <span className="text-xs font-sans uppercase tracking-[0.12em] text-white/50 mb-1">{row.pronoun}</span>
                      <span className="font-playfair text-2xl text-white">{row.form}</span>
                      <span className="text-xs font-mono text-white/40 mt-1">{row.pronunciation}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PART 02 — IMMERSION */}
        <section className="mb-20">
          {sectionLabel('Part 02', 'Immersion')}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e2e2]" style={{ boxShadow: SOFT_SHADOW }}>
            <div className="p-8 border-b border-[#e2e2e2]">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-[#001360] mb-2">{dialogue.title}</h2>
              <p className="text-xs font-sans uppercase tracking-[0.18em] text-[#757684]">{dialogue.context}</p>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              {dialogue.exchanges.map((exchange, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-2 md:gap-10">
                  <div className="md:w-32 shrink-0">
                    <span
                      className="text-xs font-sans uppercase tracking-[0.18em]"
                      style={{ color: speakerColors[exchange.speaker] }}
                    >
                      {exchange.speaker}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                      <AudioPlayButton variant="light" label={exchange.french} />
                      <p className="font-playfair text-xl md:text-2xl text-[#001360]">{exchange.french}</p>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-[#757684] italic">
                      <span>{exchange.english}</span>
                      {exchange.pronunciation && (
                        <span className="text-[#c6c5d2] not-italic font-mono">— {exchange.pronunciation}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {dialogue.cultural_notes && dialogue.cultural_notes.length > 0 && (
              <div className="bg-[#f4f3f3] p-8 border-t border-[#e2e2e2]">
                <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[#001360] mb-5">Cultural Notes</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {dialogue.cultural_notes.map((note, index) => (
                    <p key={index} className="text-sm leading-relaxed text-[#444653]">{note}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* PART 03 — LEXICON */}
        <section className="mb-20">
          {sectionLabel('Part 03', 'Lexicon')}
          <div className="grid md:grid-cols-3 gap-6">
            {lesson.vocabulary.map((word, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-[#e2e2e2] hover:-translate-y-2 transition-transform duration-300"
                style={{ boxShadow: SOFT_SHADOW }}
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] bg-[#001360]/5 text-[#001360] px-2 py-0.5 rounded font-bold uppercase tracking-wide">
                    {word.category}
                  </span>
                  {word.gender && (
                    <span className="text-[10px] text-[#757684] uppercase tracking-wide">{word.gender}</span>
                  )}
                </div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-playfair text-2xl text-[#001360]">{word.word}</h3>
                  <AudioPlayButton variant="light" label={word.word} />
                </div>
                <p className="text-sm font-sans italic text-[#bb0021] mb-3">{word.translation}</p>
                {word.pronunciation && (
                  <p className="text-xs text-[#757684] font-mono mb-4">{word.pronunciation}</p>
                )}
                <div className="border-t border-[#f3f3f3] pt-4">
                  <p className="text-sm font-serif text-[#1a1c1c] italic">&ldquo;{word.example_sentence}&rdquo;</p>
                  <p className="text-xs text-[#757684] mt-2">{word.example_translation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PART 04 — APPLICATION */}
        <section className="mb-20">
          {sectionLabel('Part 04', 'Application')}
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#e2e2e2]" style={{ boxShadow: SOFT_SHADOW }}>
            {/* Progress header */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-playfair text-2xl text-[#001360]">Exercises</h3>
              <div className="flex items-center gap-4">
                <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#757684]">
                  {completed} / {total} Completed
                </span>
                {isComplete && (
                  <button
                    onClick={handleResetExercises}
                    className="text-xs font-sans uppercase tracking-[0.14em] text-[#bb0021] hover:text-[#001360] transition-colors"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
            <div className="w-full h-1 bg-[#e2e2e2] rounded-full mb-12">
              <div
                className="h-full bg-[#bb0021] rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              ></div>
            </div>

            {/* Exercises */}
            <div className="space-y-12">
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
        </section>

        {/* FOOTER NAV */}
        <footer className="pt-12 border-t border-[#e2e2e2] flex justify-between items-center">
          <Link href={prevHref} className="group flex items-center gap-3">
            <span className="w-10 h-10 rounded-full border border-[#c6c5d2] group-hover:border-[#001360] flex items-center justify-center text-[#757684] group-hover:text-[#001360] transition-colors">
              ←
            </span>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#757684] group-hover:text-[#001360] transition-colors">
              {prevLabel}
            </span>
          </Link>

          {nextHref && nextLabel && (
            <div className="flex flex-col items-end">
              <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#757684] mb-2">Next up</span>
              <Link href={nextHref} className="group flex items-center gap-3">
                <span className="font-playfair text-xl text-[#001360] group-hover:text-[#bb0021] transition-colors uppercase">
                  {nextLabel}
                </span>
                <span className="w-10 h-10 rounded-full border border-[#bb0021] flex items-center justify-center text-[#bb0021] group-hover:bg-[#bb0021] group-hover:text-white transition-all">
                  →
                </span>
              </Link>
            </div>
          )}
        </footer>
      </main>
    </div>
  )
}
