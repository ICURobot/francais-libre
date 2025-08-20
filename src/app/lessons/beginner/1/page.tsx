'use client'

import { DialogueSection } from '../../../../../components/lessons/DialogueSection'
import Link from 'next/link'

export default function Lesson1Page() {
  // Sample dialogue data for the first lesson
  const dialogue = {
    title: "Bonjour! First Greetings",
    context: "Meeting someone for the first time",
    exchanges: [
      {
        speaker: "Marie",
        french: "Bonjour! Comment allez-vous?",
        english: "Hello! How are you?",
        pronunciation: "bohn-ZHOOR! koh-mahn tah-lay-VOO?"
      },
      {
        speaker: "Vous",
        french: "Bonjour! Je vais très bien, merci. Et vous?",
        english: "Hello! I'm very well, thank you. And you?",
        pronunciation: "bohn-ZHOOR! zhuh vay tray byan, mair-SEE. ay VOO?"
      },
      {
        speaker: "Marie",
        french: "Très bien aussi, merci!",
        english: "Very well too, thank you!",
        pronunciation: "tray byan oh-SEE, mair-SEE!"
      }
    ],
    cultural_notes: [
      "In French culture, 'Comment allez-vous?' is a formal way to ask 'How are you?'",
      "The response 'Je vais très bien' literally means 'I go very well' - this is the standard French way to say you're doing well",
      "Always say 'merci' (thank you) when someone asks about your wellbeing - it's considered polite"
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bonjour! First Greetings
          </h1>
          <p className="text-xl text-gray-600">
            Learn essential French greetings and introductions
          </p>
        </div>

        {/* Lesson Content */}
        <DialogueSection 
          dialogue={dialogue}
          onComplete={() => console.log('Lesson completed!')}
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Link
            href="/lessons"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            ← Back to Lessons
          </Link>
          
          <Link
            href="/lessons/beginner/2"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Next Lesson →
          </Link>
        </div>
      </div>
    </div>
  )
}
