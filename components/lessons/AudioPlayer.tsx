'use client'

import { useState, useEffect, useCallback } from 'react'
import { ttsService } from '../../lib/services/ttsService'

// Define the props interface for the AudioPlayer component for type safety.
interface AudioPlayerProps {
  text: string; // The text to be spoken
  className?: string; // Optional CSS classes for custom styling
  showText?: boolean; // Whether to show helper text next to the button
  autoPlay?: boolean; // Whether the audio should play automatically on mount
}

/**
 * A reusable component that plays a given text string as audio using the browser's Text-to-Speech API.
 * It provides a simple play/stop button and displays the current status.
 */
export const AudioPlayer = ({ 
  text, 
  className = '', 
  showText = true, 
  autoPlay = false 
}: AudioPlayerProps) => {
  // State to track if audio is currently playing.
  const [isPlaying, setIsPlaying] = useState(false);
  // State to check if the browser supports the Speech Synthesis API.
  const [isSupported, setIsSupported] = useState(false);
  // State to hold any potential playback errors.
  const [error, setError] = useState<string | null>(null);



  // Function to initiate audio playback.
  const playAudio = useCallback(async () => {
    if (!isSupported) {
      setError('Audio not supported in this browser');
      return;
    }

    setIsPlaying(true);
    setError(null);

    try {
      // Call the speak method from our ttsService.
      await ttsService.speak(text, 'fr-FR');
      // Set isPlaying to false when speech ends (we'll use a timeout as fallback)
      setTimeout(() => setIsPlaying(false), 3000);
    } catch (err: unknown) {
      console.error("Playback initiation failed:", err);
      setError('Audio playback failed');
      setIsPlaying(false);
    }
  }, [isSupported, text]);

  // useEffect hook runs after the component mounts.
  useEffect(() => {
    // Check for browser support once when the component loads.
    const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
    setIsSupported(supported);
    
    // If autoPlay is enabled and the browser supports TTS, play the audio.
    if (autoPlay && supported) {
      playAudio();
    }
    // The effect depends on `autoPlay` and `text` props.
  }, [autoPlay, text, playAudio]);

  // Function to stop audio playback.
  const stopAudio = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  };

  // If TTS is not supported, render a simple message.
  if (!isSupported) {
    return (
      <div className={`text-gray-400 italic text-sm ${className}`}>
        Audio playback not supported on this browser.
      </div>
    );
  }

  // Render the main component UI.
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <button
        onClick={isPlaying ? stopAudio : playAudio}
        disabled={!text || !text.trim()}
        className={`
          flex items-center justify-center w-10 h-10 rounded-full text-white shadow-md
          transition-all duration-200 ease-in-out transform hover:scale-110
          ${isPlaying 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-blue-500 hover:bg-blue-600'
          }
          disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        `}
        aria-label={isPlaying ? 'Stop audio' : 'Play audio'}
      >
        {isPlaying ? (
          // Stop Icon
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 5h10v10H5V5z"></path></svg>
        ) : (
          // Play Icon
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.3 5.178A1 1 0 005 6.05v7.9a1 1 0 001.3.872l7.14-3.95a1 1 0 000-1.744L6.3 5.178z"></path></svg>
        )}
      </button>
      
      {showText && (
        <div className="flex-1">
          <p className="text-sm text-gray-600">
            {isPlaying ? 'Playing audio...' : 'Listen to pronunciation'}
          </p>
          {error && (
            <p className="text-xs text-red-600 mt-1">{error}</p>
          )}
        </div>
      )}
    </div>
  );
};
