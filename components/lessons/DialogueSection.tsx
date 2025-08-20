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
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200 mt-8 mb-7">
      {/* Header Section */}
      <div className="text-center mb-8 border-b pb-6">
        {/* Icon and Title */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-75"></div>
              <span className="text-4xl relative z-10 drop-shadow-sm">🗣️</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-md">
              <span className="text-sm text-white">✨</span>
            </div>
          </div>
          
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">{dialogue.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{dialogue.context}</p>
          </div>
        </div>
        
        {/* Control Toggles - Centered */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setShowTranslations(!showTranslations)}
            className={`group relative overflow-hidden px-8 py-4 rounded-xl font-medium text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              showTranslations 
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md' 
                : 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border border-gray-200 hover:from-gray-100 hover:to-gray-200'
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className={`transition-all duration-300 ${showTranslations ? 'text-blue-100' : 'text-gray-500'}`}>
                {showTranslations ? '👁️' : '👁️‍🗨️'}
              </span>
              <span>{showTranslations ? 'Hide' : 'Show'} Translation</span>
            </div>
            <div className={`absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-20 ${showTranslations ? 'opacity-10' : ''}`}></div>
          </button>
          
          <button
            onClick={() => setShowPronunciation(!showPronunciation)}
            className={`group relative overflow-hidden px-8 py-4 rounded-xl font-medium text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              showPronunciation 
                ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md' 
                : 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border border-gray-200 hover:from-gray-100 hover:to-gray-200'
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className={`transition-all duration-300 ${showPronunciation ? 'text-purple-100' : 'text-gray-500'}`}>
                {showPronunciation ? '🔊' : '🔇'}
              </span>
              <span>{showPronunciation ? 'Hide' : 'Show'} Pronunciation</span>
            </div>
            <div className={`absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-20 ${showPronunciation ? 'opacity-10' : ''}`}></div>
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
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
        <button
          onClick={prevExchange}
          disabled={currentExchange === 0}
          className="group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none"
        >
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 group-hover:text-gray-700 transition-colors">←</span>
            <span>Previous</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
        </button>
        
        <div className="flex space-x-3">
          {dialogue.exchanges.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentExchange(index)}
              aria-label={`Go to exchange ${index + 1}`}
              className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                index === currentExchange 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-md' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextExchange}
          disabled={currentExchange === dialogue.exchanges.length - 1}
          className="group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none"
        >
          <div className="flex items-center space-x-2">
            <span>Next</span>
            <span className="text-blue-100 group-hover:text-white transition-colors">→</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
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
