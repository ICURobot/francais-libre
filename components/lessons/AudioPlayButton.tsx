'use client'

import { useEffect, useRef, useState } from 'react'

type AudioState = 'idle' | 'loading' | 'playing'

interface AudioPlayButtonProps {
  /** Voiceover file URL. Omitted for now — wire in once narration is recorded. */
  src?: string
  /** The text being spoken, used for the accessible label. */
  label?: string
  size?: 'sm' | 'md'
  /** 'dark' = sits on the navy card, 'light' = sits on white surfaces. */
  variant?: 'light' | 'dark'
  className?: string
}

const SIZES = {
  sm: { btn: 'w-8 h-8', icon: 'text-[18px]', spin: 'w-3.5 h-3.5', bar: 'w-[2px] h-3' },
  md: { btn: 'w-10 h-10', icon: 'text-[20px]', spin: 'w-4 h-4', bar: 'w-[3px] h-4' },
}

export default function AudioPlayButton({
  src,
  label,
  size = 'sm',
  variant = 'light',
  className = '',
}: AudioPlayButtonProps) {
  const [state, setState] = useState<AudioState>('idle')
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const reset = () => setState('idle')

  const handleClick = () => {
    if (state === 'playing') {
      audioRef.current?.pause()
      reset()
      return
    }
    if (state === 'loading') return

    setState('loading')

    // No voiceover yet: brief placeholder feedback, then settle back to idle.
    if (!src) {
      timerRef.current = setTimeout(reset, 700)
      return
    }

    // Real audio path — active once voiceover files are supplied via `src`.
    const audio = audioRef.current ?? new Audio(src)
    audioRef.current = audio
    audio.onended = reset
    audio.onerror = reset
    audio
      .play()
      .then(() => setState('playing'))
      .catch(reset)
  }

  const isDark = variant === 'dark'
  const sz = SIZES[size]

  const base =
    'group relative inline-flex items-center justify-center rounded-full border shrink-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 active:scale-95'
  const theme = isDark
    ? 'border-white/25 text-white hover:bg-white/15 focus-visible:ring-white/40'
    : 'border-[#e2e2e2] text-[#001360] hover:bg-[#001360] hover:text-white hover:border-[#001360] focus-visible:ring-[#001360]/30'
  const active =
    state === 'playing'
      ? isDark
        ? 'bg-white/20 text-white'
        : 'bg-[#001360] text-white border-[#001360]'
      : ''

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label ? `Play pronunciation: ${label}` : 'Play pronunciation'}
      aria-pressed={state === 'playing'}
      title={src ? undefined : 'Voiceover coming soon'}
      className={`${base} ${theme} ${active} ${sz.btn} ${className}`}
    >
      {state === 'loading' && (
        <span
          aria-hidden="true"
          className={`block ${sz.spin} rounded-full border-2 border-current border-t-transparent animate-spin`}
        />
      )}

      {state === 'playing' && (
        <span className="flex items-end gap-[2px]" aria-hidden="true">
          <span className={`${sz.bar} bg-current rounded-full origin-bottom animate-[audio-eq_0.9s_ease-in-out_infinite]`} />
          <span className={`${sz.bar} bg-current rounded-full origin-bottom animate-[audio-eq_0.9s_ease-in-out_infinite] [animation-delay:0.15s]`} />
          <span className={`${sz.bar} bg-current rounded-full origin-bottom animate-[audio-eq_0.9s_ease-in-out_infinite] [animation-delay:0.3s]`} />
        </span>
      )}

      {state === 'idle' && (
        <span className={`material-symbols-outlined ${sz.icon} leading-none translate-x-[1px]`} aria-hidden="true">
          play_arrow
        </span>
      )}
    </button>
  )
}
