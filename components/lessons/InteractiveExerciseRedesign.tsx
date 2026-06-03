'use client'

import React, { useMemo, useState } from 'react'
import { Exercise } from '../../lib/lessons/lessonTypes'

interface InteractiveExerciseProps {
  exercise: Exercise
  onComplete: (isCorrect: boolean) => void
  exerciseNumber: number
}

const normalize = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[.!?]+$/g, '')

const isAnswerCorrect = (answer: string, correctAnswer: string | string[]) => {
  const accepted = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer]
  return accepted.some((correct) => normalize(answer) === normalize(correct))
}

export default function InteractiveExerciseRedesign({ exercise, onComplete, exerciseNumber }: InteractiveExerciseProps) {
  const [textAnswer, setTextAnswer] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [genderAnswers, setGenderAnswers] = useState<Record<number, 'masculine' | 'feminine'>>({})
  const [transformationAnswers, setTransformationAnswers] = useState<Record<number, string>>({})
  const [conjugationAnswers, setConjugationAnswers] = useState<Record<number, string>>({})
  const [selectedFrench, setSelectedFrench] = useState<number | null>(null)
  const [matches, setMatches] = useState<Record<number, number>>({})
  const [speakingRevealed, setSpeakingRevealed] = useState(false)
  const [errorCorrectionAnswers, setErrorCorrectionAnswers] = useState<Record<number, string>>({})
  const [tenseChoices, setTenseChoices] = useState<Record<number, string>>({})
  const [moodChoices, setMoodChoices] = useState<Record<number, 'indicative' | 'subjunctive'>>({})
  const [rewriteAnswers, setRewriteAnswers] = useState<Record<number, string>>({})
  const [registerAssignments, setRegisterAssignments] = useState<Record<number, string>>({})
  const [argumentationDrafts, setArgumentationDrafts] = useState<Record<number, string>>({})
  const [argumentationRevealed, setArgumentationRevealed] = useState(false)

  const matchingEnglishOrder = useMemo(() => {
    if (exercise.type !== 'matching') return []
    return exercise.pairs.map((_, index) => index).sort((a, b) => {
      const left = exercise.pairs[a]?.english ?? ''
      const right = exercise.pairs[b]?.english ?? ''
      return left.localeCompare(right)
    })
  }, [exercise])

  const submitResult = (isCorrect: boolean) => {
    setCorrect(isCorrect)
    setSubmitted(true)
    onComplete(isCorrect)
  }

  const reset = () => {
    setTextAnswer('')
    setSelectedOption('')
    setSubmitted(false)
    setCorrect(false)
    setShowHint(false)
    setGenderAnswers({})
    setTransformationAnswers({})
    setConjugationAnswers({})
    setSelectedFrench(null)
    setMatches({})
    setSpeakingRevealed(false)
    setErrorCorrectionAnswers({})
    setTenseChoices({})
    setMoodChoices({})
    setRewriteAnswers({})
    setRegisterAssignments({})
    setArgumentationDrafts({})
    setArgumentationRevealed(false)
  }

  const handleSimpleSubmit = () => {
    if (exercise.type === 'multiple_choice') {
      if (!selectedOption) return
      submitResult(selectedOption === exercise.correct_answer)
      return
    }

    if (exercise.type === 'fill_blank' || exercise.type === 'translation') {
      if (!textAnswer.trim()) return
      submitResult(isAnswerCorrect(textAnswer, exercise.correct_answer))
    }
  }

  const renderResult = () => {
    if (!submitted) return null

    return (
      <div className={`mt-4 rounded-lg border p-4 ${correct ? 'bg-[#f0f7f1] border-[#cfe6d2] text-[#1a6b32]' : 'bg-[#fdf0f1] border-[#f2c9cd] text-[#bb0021]'}`}>
        <div className="font-semibold">{correct ? 'Correct' : 'Review this one'}</div>
        {'explanation' in exercise && (
          <p className="mt-2 text-sm leading-relaxed">{exercise.explanation}</p>
        )}
      </div>
    )
  }

  const renderHints = () => {
    if (!('hints' in exercise) || !exercise.hints?.length || !showHint) return null

    return (
      <div className="mt-4 rounded-lg border border-[#bb0021]/25 bg-[#bb0021]/5 p-4">
        <h5 className="mb-2 font-semibold text-[#001360]">Hint</h5>
        <ul className="space-y-1 text-sm text-[#444653]">
          {exercise.hints.map((hint, index) => (
            <li key={index}>{hint}</li>
          ))}
        </ul>
      </div>
    )
  }

  const renderContent = () => {
    switch (exercise.type) {
      case 'multiple_choice':
        return (
          <div className="space-y-3">
            {exercise.options.map((option) => (
              <label key={option} className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${selectedOption === option ? 'border-[#001360] bg-[#001360]/5' : 'border-[#e2e2e2] hover:border-[#bb0021]'}`}>
                <input
                  type="radio"
                  name={exercise.id}
                  value={option}
                  checked={selectedOption === option}
                  onChange={(event) => setSelectedOption(event.target.value)}
                  disabled={submitted}
                  className="h-4 w-4 accent-[#001360]"
                />
                <span className="text-[#1a1c1c]">{option}</span>
              </label>
            ))}
          </div>
        )

      case 'fill_blank':
      case 'translation':
        return (
          <input
            type="text"
            value={textAnswer}
            onChange={(event) => setTextAnswer(event.target.value)}
            placeholder={exercise.type === 'translation' ? 'Type your translation...' : 'Type the missing word or phrase...'}
            className="w-full rounded-lg border border-[#e2e2e2] px-4 py-3 text-lg text-[#1a1c1c] outline-none focus:border-[#001360]"
            disabled={submitted}
          />
        )

      case 'gender_sort': {
        const answeredCount = Object.keys(genderAnswers).length
        return (
          <div className="space-y-4">
            {exercise.items.map((item, index) => {
              const answer = genderAnswers[index]
              return (
                <div key={item.word} className="flex flex-col gap-3 rounded-lg border border-[#e2e2e2] p-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-lg font-semibold text-[#1a1c1c]">{item.word}</div>
                    {submitted && (
                      <div className="text-sm text-[#757684]">Correct article: {item.article}</div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {(['masculine', 'feminine'] as const).map((gender) => (
                      <button
                        key={gender}
                        type="button"
                        onClick={() => setGenderAnswers((prev) => ({ ...prev, [index]: gender }))}
                        disabled={submitted}
                        className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${
                          answer === gender ? 'border-[#001360] bg-[#001360] text-white' : 'border-[#e2e2e2] bg-white text-[#444653] hover:border-[#bb0021]'
                        }`}
                      >
                        {gender === 'masculine' ? 'Masculin' : 'Féminin'}
                      </button>
                    ))}
                  </div>
                </div>
              )
            })}
            <button
              type="button"
              onClick={() => {
                const isCorrect = exercise.items.every((item, index) => genderAnswers[index] === item.gender)
                submitResult(isCorrect)
              }}
              disabled={submitted || answeredCount !== exercise.items.length}
              className="rounded-lg bg-[#001360] px-8 py-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#bb0021] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Check Sort
            </button>
          </div>
        )
      }

      case 'transformation':
        return (
          <div className="space-y-4">
            {exercise.items.map((item, index) => (
              <div key={`${item.original}-${index}`} className="rounded-lg border border-[#e2e2e2] p-4">
                <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#757684]">Original</div>
                <div className="mb-3 text-lg text-[#1a1c1c]">{item.original}</div>
                <input
                  type="text"
                  value={transformationAnswers[index] ?? ''}
                  onChange={(event) => setTransformationAnswers((prev) => ({ ...prev, [index]: event.target.value }))}
                  disabled={submitted}
                  placeholder="Type the transformed version..."
                  className="w-full rounded-lg border border-[#e2e2e2] px-4 py-3 text-[#1a1c1c] outline-none focus:border-[#001360]"
                />
                {submitted && (
                  <div className="mt-3 text-sm text-[#444653]">
                    Expected: <span className="font-semibold">{item.transformed}</span>
                  </div>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                const isCorrect = exercise.items.every((item, index) => normalize(transformationAnswers[index] ?? '') === normalize(item.transformed))
                submitResult(isCorrect)
              }}
              disabled={submitted || exercise.items.some((_, index) => !transformationAnswers[index]?.trim())}
              className="rounded-lg bg-[#001360] px-8 py-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#bb0021] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Check Transformations
            </button>
          </div>
        )

      case 'conjugation':
        if (typeof exercise.correct_answer === 'string') {
          const expectedAnswer = exercise.correct_answer
          return (
            <div className="space-y-4 rounded-lg border border-[#e2e2e2] bg-[#f4f3f3] p-5">
              <div className="font-semibold text-[#1a1c1c]">Verb: {exercise.verb}</div>
              {exercise.translations && (
                <div className="grid gap-3 md:grid-cols-2">
                  {Object.entries(exercise.translations).map(([pronoun, translation]) => (
                    <div key={pronoun} className="rounded border border-[#e2e2e2] bg-white p-3">
                      <span className="font-medium text-[#1a1c1c]">{pronoun}</span>
                      <span className="ml-2 text-[#757684]">{translation}</span>
                    </div>
                  ))}
                </div>
              )}
              <input
                type="text"
                value={textAnswer}
                onChange={(event) => setTextAnswer(event.target.value)}
                disabled={submitted}
                placeholder="Type the conjugation sequence..."
                className="w-full rounded-lg border border-[#e2e2e2] px-4 py-3 text-[#1a1c1c] outline-none focus:border-[#001360]"
              />
              <button
                type="button"
                onClick={() => submitResult(isAnswerCorrect(textAnswer, expectedAnswer))}
                disabled={submitted || !textAnswer.trim()}
                className="rounded-lg bg-[#001360] px-8 py-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#bb0021] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Check Conjugation
              </button>
              {submitted && <div className="text-sm text-[#444653]">Expected: {expectedAnswer}</div>}
            </div>
          )
        }

        const conjugationRows = exercise.correct_answer
        return (
          <div className="overflow-hidden rounded-lg border border-[#e2e2e2]">
            <div className="bg-[#f4f3f3] px-4 py-3 font-semibold text-[#1a1c1c]">Verb: {exercise.verb}</div>
            <div className="divide-y divide-[#e2e2e2]">
              {conjugationRows.map((row, index) => (
                <div key={row.pronoun} className="grid grid-cols-1 gap-3 p-4 md:grid-cols-[160px_1fr] md:items-center">
                  <div className="font-medium text-[#444653]">{row.pronoun}</div>
                  <div>
                    <input
                      type="text"
                      value={conjugationAnswers[index] ?? ''}
                      onChange={(event) => setConjugationAnswers((prev) => ({ ...prev, [index]: event.target.value }))}
                      disabled={submitted}
                      className="w-full rounded-lg border border-[#e2e2e2] px-4 py-2 text-[#1a1c1c] outline-none focus:border-[#001360]"
                    />
                    {submitted && (
                      <div className={`mt-1 text-sm ${normalize(conjugationAnswers[index] ?? '') === normalize(row.form) ? 'text-[#1a6b32]' : 'text-[#bb0021]'}`}>
                        {row.form} <span className="text-[#757684]">({row.pronunciation})</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#f4f3f3] p-4">
              <button
                type="button"
                onClick={() => {
                  const isCorrect = conjugationRows.every((item, index) => normalize(conjugationAnswers[index] ?? '') === normalize(item.form))
                  submitResult(isCorrect)
                }}
                disabled={submitted || conjugationRows.some((_, index) => !conjugationAnswers[index]?.trim())}
                className="rounded-lg bg-[#001360] px-8 py-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#bb0021] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Check Conjugation
              </button>
            </div>
          </div>
        )

      case 'matching':
        return (
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                {exercise.pairs.map((pair, index) => (
                  <button
                    key={pair.french}
                    type="button"
                    onClick={() => !submitted && setSelectedFrench(index)}
                    className={`w-full rounded-lg border p-3 text-left font-semibold transition-colors ${
                      selectedFrench === index ? 'border-[#001360] bg-[#001360]/5 text-[#001360]' : 'border-[#e2e2e2] bg-white text-[#1a1c1c] hover:border-[#bb0021]'
                    }`}
                  >
                    {pair.french}
                    {matches[index] !== undefined && (
                      <span className="ml-2 text-sm font-normal text-[#757684]">→ {exercise.pairs[matches[index]]?.english}</span>
                    )}
                  </button>
                ))}
              </div>
              <div className="space-y-2">
                {matchingEnglishOrder.map((pairIndex) => (
                  <button
                    key={exercise.pairs[pairIndex].english}
                    type="button"
                    onClick={() => {
                      if (submitted || selectedFrench === null) return
                      setMatches((prev) => ({ ...prev, [selectedFrench]: pairIndex }))
                      setSelectedFrench(null)
                    }}
                    className="w-full rounded-lg border border-[#e2e2e2] bg-white p-3 text-left text-[#1a1c1c] transition-colors hover:border-[#bb0021]"
                  >
                    {exercise.pairs[pairIndex].english}
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                const isCorrect = exercise.pairs.every((_, index) => matches[index] === index)
                submitResult(isCorrect)
              }}
              disabled={submitted || Object.keys(matches).length !== exercise.pairs.length}
              className="rounded-lg bg-[#001360] px-8 py-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#bb0021] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Check Matches
            </button>
          </div>
        )

      case 'error_correction': {
        const allAnswered = exercise.items.every((_, index) => (errorCorrectionAnswers[index] ?? '').trim().length > 0)
        return (
          <div className="space-y-4">
            {exercise.items.map((item, index) => (
              <div key={index} className="rounded-lg border border-[#e2e2e2] p-4">
                <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#757684]">Incorrect Sentence</div>
                <div className="mb-3 text-lg text-[#bb0021] line-through">{item.incorrect}</div>
                <input
                  type="text"
                  value={errorCorrectionAnswers[index] ?? ''}
                  onChange={(event) => setErrorCorrectionAnswers((prev) => ({ ...prev, [index]: event.target.value }))}
                  disabled={submitted}
                  placeholder="Type the corrected sentence..."
                  className="w-full rounded-lg border border-[#e2e2e2] px-4 py-3 text-[#1a1c1c] outline-none focus:border-[#001360]"
                />
                {submitted && (
                  <div className="mt-3 text-sm text-[#1a6b32]">
                    Correct: <span className="font-semibold">{item.correct}</span>
                    <div className="text-[#757684] mt-1">{item.explanation}</div>
                  </div>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                const isCorrect = exercise.items.every((item, index) => normalize(errorCorrectionAnswers[index] ?? '') === normalize(item.correct))
                submitResult(isCorrect)
              }}
              disabled={submitted || !allAnswered}
              className="rounded-lg bg-[#001360] px-8 py-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#bb0021] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Check Corrections
            </button>
          </div>
        )
      }

      case 'tense_choice': {
        const allAnswered = exercise.items.every((_, index) => !!tenseChoices[index])
        return (
          <div className="space-y-4">
            {exercise.items.map((item, index) => (
              <div key={index} className="rounded-lg border border-[#e2e2e2] p-4">
                <div className="mb-2 text-lg font-semibold text-[#1a1c1c]">{item.sentence}</div>
                <div className="mb-2 text-sm text-[#757684]">Verb: <span className="font-semibold">{item.verb}</span></div>
                <div className="flex gap-3 flex-wrap">
                  {item.options.map((option) => (
                    <label key={option} className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 transition-colors ${tenseChoices[index] === option ? 'border-[#001360] bg-[#001360]/5 text-[#001360]' : 'border-[#e2e2e2] bg-white text-[#444653] hover:border-[#bb0021]'}`}>
                      <input
                        type="radio"
                        name={`tense-${exercise.id}-${index}`}
                        value={option}
                        checked={tenseChoices[index] === option}
                        onChange={() => setTenseChoices((prev) => ({ ...prev, [index]: option }))}
                        disabled={submitted}
                        className="h-4 w-4 accent-[#001360]"
                      />
                      <span className="font-semibold">{option}</span>
                    </label>
                  ))}
                </div>
                {submitted && (
                  <div className={`mt-3 text-sm ${tenseChoices[index] === item.correct_answer ? 'text-[#1a6b32]' : 'text-[#bb0021]'}`}>
                    Correct: <span className="font-semibold">{item.correct_answer}</span>
                    <div className="text-[#757684] mt-1">{item.explanation}</div>
                  </div>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                const isCorrect = exercise.items.every((item, index) => tenseChoices[index] === item.correct_answer)
                submitResult(isCorrect)
              }}
              disabled={submitted || !allAnswered}
              className="rounded-lg bg-[#001360] px-8 py-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#bb0021] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Check Answers
            </button>
          </div>
        )
      }

      case 'mood_choice': {
        const allAnswered = exercise.items.every((_, index) => !!moodChoices[index])
        return (
          <div className="space-y-4">
            {exercise.items.map((item, index) => {
              const options = [
                { mood: 'indicative' as const, label: item.indicative_form },
                { mood: 'subjunctive' as const, label: item.subjunctive_form },
              ]
              return (
                <div key={index} className="rounded-lg border border-[#e2e2e2] p-4">
                  <div className="mb-2 text-lg font-semibold text-[#1a1c1c]">{item.sentence}</div>
                  <div className="mb-3 text-sm text-[#757684]">Verb: <span className="font-semibold">{item.verb}</span></div>
                  <div className="flex flex-wrap gap-3">
                    {options.map((option) => (
                      <label key={option.mood} className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 transition-colors ${moodChoices[index] === option.mood ? 'border-[#001360] bg-[#001360]/5 text-[#001360]' : 'border-[#e2e2e2] bg-white text-[#444653] hover:border-[#bb0021]'}`}>
                        <input
                          type="radio"
                          name={`mood-${exercise.id}-${index}`}
                          value={option.mood}
                          checked={moodChoices[index] === option.mood}
                          onChange={() => setMoodChoices((prev) => ({ ...prev, [index]: option.mood }))}
                          disabled={submitted}
                          className="h-4 w-4 accent-[#001360]"
                        />
                        <span className="font-semibold">{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {submitted && (
                    <div className={`mt-3 text-sm ${moodChoices[index] === item.correct_answer ? 'text-[#1a6b32]' : 'text-[#bb0021]'}`}>
                      Correct: <span className="font-semibold">{item.correct_answer === 'indicative' ? item.indicative_form : item.subjunctive_form}</span>
                      {item.trigger && (
                        <div className="mt-1 text-[#444653]">
                          Trigger: <mark className="rounded bg-[#fff3cd] px-1">{item.trigger}</mark>
                        </div>
                      )}
                      <div className="mt-1 text-[#757684]">{item.explanation}</div>
                    </div>
                  )}
                </div>
              )
            })}
            <button
              type="button"
              onClick={() => {
                const isCorrect = exercise.items.every((item, index) => moodChoices[index] === item.correct_answer)
                submitResult(isCorrect)
              }}
              disabled={submitted || !allAnswered}
              className="rounded-lg bg-[#001360] px-8 py-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#bb0021] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Check Moods
            </button>
          </div>
        )
      }

      case 'rewrite': {
        const allAnswered = exercise.items.every((_, index) => (rewriteAnswers[index] ?? '').trim().length > 0)
        return (
          <div className="space-y-4">
            <div className="rounded-lg bg-[#f4f3f3] p-3 text-sm font-semibold uppercase tracking-wide text-[#757684]">
              Transformation: {exercise.instruction_type.replace(/_/g, ' ')}
            </div>
            {exercise.items.map((item, index) => (
              <div key={`${item.original}-${index}`} className="rounded-lg border border-[#e2e2e2] p-4">
                <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#757684]">Original</div>
                <div className="mb-3 text-lg text-[#1a1c1c]">{item.original}</div>
                {item.hint && <div className="mb-3 rounded bg-[#bb0021]/5 p-2 text-sm text-[#444653]">Hint: {item.hint}</div>}
                <input
                  type="text"
                  value={rewriteAnswers[index] ?? ''}
                  onChange={(event) => setRewriteAnswers((prev) => ({ ...prev, [index]: event.target.value }))}
                  disabled={submitted}
                  placeholder="Type your rewritten sentence..."
                  className="w-full rounded-lg border border-[#e2e2e2] px-4 py-3 text-[#1a1c1c] outline-none focus:border-[#001360]"
                />
                {submitted && (
                  <div className={`mt-3 text-sm ${normalize(rewriteAnswers[index] ?? '') === normalize(item.expected) ? 'text-[#1a6b32]' : 'text-[#bb0021]'}`}>
                    Expected: <span className="font-semibold">{item.expected}</span>
                    <div className="mt-1 text-[#757684]">{item.explanation}</div>
                  </div>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                const isCorrect = exercise.items.every((item, index) => normalize(rewriteAnswers[index] ?? '') === normalize(item.expected))
                submitResult(isCorrect)
              }}
              disabled={submitted || !allAnswered}
              className="rounded-lg bg-[#001360] px-8 py-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#bb0021] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Check Rewrites
            </button>
          </div>
        )
      }

      case 'register_sort': {
        const allAssigned = exercise.items.every((_, index) => !!registerAssignments[index])
        return (
          <div className="space-y-4">
            <div className="rounded-lg bg-[#f4f3f3] p-3 text-sm font-semibold uppercase tracking-wide text-[#757684]">
              Registers: {exercise.categories.join(' · ')}
            </div>
            {exercise.items.map((item, index) => {
              const assignment = registerAssignments[index]
              const isCorrect = assignment === item.correct_category
              return (
                <div key={index} className="rounded-lg border border-[#e2e2e2] p-4">
                  <div className="mb-3 text-lg font-semibold text-[#1a1c1c]">&ldquo;{item.expression}&rdquo;</div>
                  <div className="flex flex-wrap gap-2">
                    {exercise.categories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setRegisterAssignments((prev) => ({ ...prev, [index]: category }))}
                        disabled={submitted}
                        className={`rounded-lg border px-3 py-1.5 text-sm font-semibold transition-colors ${
                          assignment === category
                            ? 'border-[#001360] bg-[#001360] text-white'
                            : 'border-[#e2e2e2] bg-white text-[#444653] hover:border-[#bb0021]'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                  {submitted && (
                    <div className={`mt-3 text-sm ${isCorrect ? 'text-[#1a6b32]' : 'text-[#bb0021]'}`}>
                      Correct register: <span className="font-semibold">{item.correct_category}</span>
                      <div className="mt-1 text-[#757684]">{item.explanation}</div>
                    </div>
                  )}
                </div>
              )
            })}
            <button
              type="button"
              onClick={() => {
                const isCorrect = exercise.items.every(
                  (item, index) => registerAssignments[index] === item.correct_category
                )
                submitResult(isCorrect)
              }}
              disabled={submitted || !allAssigned}
              className="rounded-lg bg-[#001360] px-8 py-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#bb0021] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Check Registers
            </button>
          </div>
        )
      }

      case 'argumentation': {
        const totalWords = Object.values(argumentationDrafts).reduce((acc, value) => {
          if (!value) return acc
          const tokens = value.trim().split(/\s+/).filter(Boolean)
          return acc + tokens.length
        }, 0)
        return (
          <div className="space-y-4">
            <div className="rounded-lg bg-[#f4f3f3] p-3 text-sm text-[#444653]">
              <span className="font-semibold uppercase tracking-wide text-[#757684]">Build your argument.</span>
              {exercise.word_count_target ? (
                <span className="ml-2">Target: ~{exercise.word_count_target} mots · Written: {totalWords}</span>
              ) : (
                <span className="ml-2">Written: {totalWords} mots</span>
              )}
            </div>
            {exercise.structure.map((section, index) => (
              <div key={index} className="rounded-lg border border-[#e2e2e2] p-4">
                <div className="mb-1 text-sm font-semibold uppercase tracking-[0.16em] text-[#001360]">{section.label}</div>
                <div className="mb-3 text-sm text-[#444653]">{section.instruction}</div>
                {section.connector_hints?.length ? (
                  <div className="mb-3 flex flex-wrap gap-1">
                    {section.connector_hints.map((hint) => (
                      <span key={hint} className="rounded-full bg-[#001360]/5 px-2 py-0.5 text-xs font-semibold text-[#001360]">
                        {hint}
                      </span>
                    ))}
                  </div>
                ) : null}
                <textarea
                  rows={3}
                  value={argumentationDrafts[index] ?? ''}
                  onChange={(event) => setArgumentationDrafts((prev) => ({ ...prev, [index]: event.target.value }))}
                  disabled={submitted}
                  placeholder="Écrivez ici…"
                  className="w-full resize-y rounded-lg border border-[#e2e2e2] px-4 py-3 text-[#1a1c1c] outline-none focus:border-[#001360]"
                />
                {argumentationRevealed && section.model && (
                  <div className="mt-3 rounded-lg bg-[#f0f7f1] p-3 text-sm text-[#1a6b32]">
                    <div className="font-semibold uppercase tracking-[0.16em] text-[#1a6b32] text-xs mb-1">Modèle</div>
                    {section.model}
                  </div>
                )}
              </div>
            ))}
            {!submitted ? (
              <button
                type="button"
                onClick={() => {
                  setArgumentationRevealed(true)
                  submitResult(true)
                }}
                disabled={!exercise.structure.every((_, index) => (argumentationDrafts[index] ?? '').trim().length > 0)}
                className="rounded-lg bg-[#001360] px-8 py-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#bb0021] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Submit &amp; Reveal Model
              </button>
            ) : null}
          </div>
        )
      }

      case 'speaking_prompt':
      case 'speaking':
        return (
          <div className="space-y-4 rounded-lg border border-[#e2e2e2] bg-[#f4f3f3] p-5">
            {!speakingRevealed ? (
              <button
                type="button"
                onClick={() => {
                  setSpeakingRevealed(true)
                  submitResult(true)
                }}
                className="rounded-lg bg-[#001360] px-8 py-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#bb0021]"
              >
                I said it
              </button>
            ) : (
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wide text-[#757684]">Model answer</div>
                  <div className="text-lg font-semibold text-[#1a1c1c]">
                    {exercise.type === 'speaking_prompt'
                      ? exercise.model_answer
                      : Array.isArray(exercise.correct_answer)
                        ? exercise.correct_answer[0]
                        : exercise.correct_answer}
                  </div>
                </div>
                {exercise.type === 'speaking_prompt' && <div className="text-[#444653]">{exercise.translation}</div>}
                {exercise.type === 'speaking_prompt' && exercise.tip && <div className="rounded-lg bg-[#001360]/5 p-3 text-sm text-[#001360]">{exercise.tip}</div>}
              </div>
            )}
          </div>
        )
    }
  }

  const simpleExercise = exercise.type === 'multiple_choice' || exercise.type === 'fill_blank' || exercise.type === 'translation'

  return (
    <div className="rounded-2xl border border-[#e2e2e2] bg-white p-6 md:p-8">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h4 className="font-playfair text-xl text-[#001360]">Exercise {exerciseNumber}</h4>
        <span className="rounded-full bg-[#001360]/5 px-3 py-1 text-xs font-sans uppercase tracking-[0.12em] text-[#001360]">
          {exercise.type.replace(/_/g, ' ')}
        </span>
      </div>

      <div className="mb-6 rounded-lg border-l-2 border-[#bb0021] bg-[#f4f3f3] p-4">
        <p className="font-serif text-lg text-[#001360]">{exercise.question}</p>
      </div>

      {renderContent()}

      {simpleExercise && (
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSimpleSubmit}
              disabled={exercise.type === 'multiple_choice' ? !selectedOption : !textAnswer.trim()}
              className="rounded-lg bg-[#001360] px-8 py-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#bb0021] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit Answer
            </button>
          ) : (
            <button
              type="button"
              onClick={reset}
              className="rounded-lg border border-[#c6c5d2] px-6 py-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-[#001360] transition-colors hover:border-[#001360]"
            >
              Try Again
            </button>
          )}
          {'hints' in exercise && exercise.hints?.length ? (
            <button
              type="button"
              onClick={() => setShowHint((value) => !value)}
              className="rounded-lg border border-[#c6c5d2] px-4 py-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-[#001360] transition-colors hover:border-[#001360]"
            >
              Hint
            </button>
          ) : null}
        </div>
      )}

      {!simpleExercise && submitted && exercise.type !== 'speaking_prompt' && (
        <button
          type="button"
          onClick={reset}
          className="mt-4 rounded-lg border border-[#c6c5d2] px-6 py-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-[#001360] transition-colors hover:border-[#001360]"
        >
          Try Again
        </button>
      )}

      {renderHints()}
      {renderResult()}
    </div>
  )
}
