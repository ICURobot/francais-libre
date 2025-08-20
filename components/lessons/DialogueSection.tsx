'use client'

import { useState } from 'react'
import { Dialogue } from '../../lib/lessons/lessonTypes'
import { AudioPlayer } from './AudioPlayer'

// Define the props for the DialogueSection component.
interface DialogueSectionProps {
  dialogue: Dialogue; // The dialogue data object for the lesson.
}

/**
 * A component to display an interactive dialogue with audio, translations, and cultural notes.
 * It allows users to navigate through exchanges and tracks their listening progress.
 */
export const DialogueSection = ({ dialogue }: DialogueSectionProps) => {
  // State to track the currently focused dialogue exchange.
  const [currentExchange, setCurrentExchange] = useState(0);
  // State to toggle the visibility of English translations.
  const [showTranslations, setShowTranslations] = useState(true);
  // State to toggle the visibility of phonetic pronunciation guides.
  const [showPronunciation, setShowPronunciation] = useState(false);



  // Navigate to the next exchange in the dialogue.
  const nextExchange = () => {
    if (currentExchange < dialogue.exchanges.length - 1) {
      setCurrentExchange(prev => prev + 1);
    }
  };

  // Navigate to the previous exchange in the dialogue.
  const prevExchange = () => {
    if (currentExchange > 0) {
      setCurrentExchange(prev => prev - 1);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 border-b pb-4">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="bg-blue-500 w-14 h-14 rounded-xl flex items-center justify-center mr-4 shadow-md">
            <span className="text-3xl">🗣️</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{dialogue.title}</h3>
            <p className="text-gray-600">{dialogue.context}</p>
          </div>
        </div>
        
        {/* Control Toggles */}
        <div className="flex space-x-2">
          <button
            onClick={() => setShowTranslations(!showTranslations)}
            className={`text-sm px-4 py-2 rounded-full border transition-colors ${showTranslations ? 'bg-blue-100 text-blue-800 border-blue-300' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            {showTranslations ? 'Hide' : 'Show'} Translation
          </button>
          <button
            onClick={() => setShowPronunciation(!showPronunciation)}
            className={`text-sm px-4 py-2 rounded-full border transition-colors ${showPronunciation ? 'bg-blue-100 text-blue-800 border-blue-300' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            {showPronunciation ? 'Hide' : 'Show'} Pronunciation
          </button>
        </div>
      </div>

      {/* Main Dialogue Content */}
      <div className="space-y-4 mb-6">
        {dialogue.exchanges.map((exchange, index) => (
          <div 
            key={index}
            className={`p-4 rounded-lg transition-all duration-300 border-l-4 ${
              index === currentExchange 
                ? 'bg-blue-50 border-blue-500 shadow-md' 
                : 'bg-gray-50 border-transparent'
            }`}
          >
            <div className="flex items-start">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-800 text-lg">
                    {exchange.speaker}
                  </span>
                  <AudioPlayer 
                    text={exchange.french}
                    showText={false}
                  />
                </div>
                
                <p className="text-blue-700 font-semibold text-xl mb-2">
                  {exchange.french}
                </p>
                
                {showTranslations && (
                  <p className="text-gray-600 italic mb-2">
                    {exchange.english}
                  </p>
                )}
                
                {showPronunciation && exchange.pronunciation && (
                  <p className="text-gray-500 text-sm font-mono bg-gray-100 px-2 py-1 rounded-md inline-block">
                    {exchange.pronunciation}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t">
        <button
          onClick={prevExchange}
          disabled={currentExchange === 0}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors font-semibold"
        >
          Previous
        </button>
        
        <div className="flex space-x-2">
          {dialogue.exchanges.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentExchange(index)}
              aria-label={`Go to exchange ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-transform transform hover:scale-125 ${
                index === currentExchange 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextExchange}
          disabled={currentExchange === dialogue.exchanges.length - 1}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors font-semibold"
        >
          Next
        </button>
      </div>

      {/* Cultural Notes Section */}
      {dialogue.cultural_notes && dialogue.cultural_notes.length > 0 && (
        <div className="mt-8 bg-purple-50 rounded-xl p-5 border border-purple-200">
          <h4 className="font-bold text-purple-800 mb-3 text-lg">
            Cultural Insights
          </h4>
          <ul className="space-y-2 list-disc list-inside">
            {dialogue.cultural_notes.map((note, index) => (
              <li key={index} className="text-purple-700">
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
