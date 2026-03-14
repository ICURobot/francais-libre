'use client'

import { useState } from 'react'
import { audioService } from '../../lib/services/audioService'

interface AudioButtonProps {
  text: string
  className?: string
  title?: string
}

export default function AudioButton({ text, className = '', title = 'Listen to pronunciation' }: AudioButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleClick = async () => {
    if (isPlaying) return
    setIsPlaying(true)
    try {
      await audioService.playAudio(text)
    } catch {
      // Playback failed silently
    } finally {
      setIsPlaying(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={isPlaying}
      className={`transition-colors ${className}`}
      title={title}
    >
      {isPlaying ? '🔊' : '🔊'}
    </button>
  )
}
