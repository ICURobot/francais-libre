'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DialogueSection } from '../../../../../components/lessons/DialogueSection'
import InteractiveExercise from '../../../../../components/lessons/InteractiveExercise'
import ExerciseProgress from '../../../../../components/lessons/ExerciseProgress'
import { AudioPlayer } from '../../../../../components/lessons/AudioPlayer'

export default function Lesson13() {
  const [currentSection, setCurrentSection] = useState<'dialogue' | 'grammar' | 'vocabulary' | 'exercises'>('dialogue')
  const [completedExercises, setCompletedExercises] = useState<string[]>([])

  const lessonData = {
    id: 13,
    title: "Completing Essential Irregular Verbs",
    level: "A2",
    description: "Master the final essential irregular verbs: voir, dire, partir, sortir, and dormir, plus review all irregular verbs learned so far",
    
    dialogue: {
      title: "Planning an Evening Out",
      context: "Léa and Nathan discuss their evening plans, including a movie outing and Nathan's upcoming business trip.",
      exchanges: [
        {
          speaker: "Léa",
          french: "Salut Nathan ! Tu vois le nouveau film au cinéma ce soir ?",
          english: "Hi Nathan! Are you seeing the new movie at the cinema tonight?",
          pronunciation: "sah-LU nah-TAHN! tu vwah luh noo-VOH feelm oh see-nay-MAH suh SWAHR?"
        },
        {
          speaker: "Nathan",
          french: "Non, je ne sors pas ce soir. Je dois partir tôt demain matin.",
          english: "No, I'm not going out tonight. I have to leave early tomorrow morning.",
          pronunciation: "nohn, zhuh nuh sor pah suh SWAHR. zhuh dwah par-TEER toh duh-MAHN mah-TAHN"
        },
        {
          speaker: "Léa",
          french: "Ah bon ? Tu pars où ? Tu me dis toujours tes plans !",
          english: "Oh really? Where are you going? You always tell me your plans!",
          pronunciation: "ah bohn? tu par OO? tu muh dee too-ZHOOR tay plahn!"
        },
        {
          speaker: "Nathan",
          french: "Je pars en voyage d'affaires à Lyon. Mon patron dit que c'est important.",
          english: "I'm leaving on a business trip to Lyon. My boss says it's important.",
          pronunciation: "zhuh par ahn voy-AZH dah-FAIR ah lee-OHN. mohn pah-TROHN dee kuh say ahm-por-TAHN"
        },
        {
          speaker: "Léa",
          french: "Et tu dors où ? À l'hôtel ?",
          english: "And where are you sleeping? At the hotel?",
          pronunciation: "ay tu dor OO? ah loh-TELL?"
        },
        {
          speaker: "Nathan",
          french: "Oui, je dors à l'hôtel. Nous partons à 6h du matin, alors je dois bien dormir.",
          english: "Yes, I'm sleeping at the hotel. We're leaving at 6 AM, so I need to sleep well.",
          pronunciation: "wee, zhuh dor ah loh-TELL. noo par-TOHN ah see UR du mah-TAHN, ah-LOR zhuh dwah bee-AHN dor-MEER"
        },
        {
          speaker: "Léa",
          french: "Je vois... Alors on sort ensemble vendredi soir ?",
          english: "I see... So shall we go out together Friday evening?",
          pronunciation: "zhuh vwah... ah-LOR ohn sor ahn-SAHM-bluh vahn-druh-DEE SWAHR?"
        },
        {
          speaker: "Nathan",
          french: "Parfait ! Je te dis quel film nous voyons quand je reviens.",
          english: "Perfect! I'll tell you which movie we're seeing when I come back.",
          pronunciation: "par-FAY! zhuh tuh dee kel feelm noo voy-OHN kahn zhuh ruh-vee-AHN"
        }
      ]
    },

    grammarPoints: [
      {
        title: "VOIR (to see) - Complete Conjugation",
        explanation: "This irregular verb means 'to see' and is essential for expressing visual perception, understanding, and social activities. The stem changes completely in different forms, and it's one of the most frequently used verbs in French conversation:",
        examples: [
          "PRESENT: je vois, tu vois, il/elle voit, nous voyons, vous voyez, ils/elles voient",
          "STEM PATTERN: vois/vois/voit (similar), voyons/voyez (different stem), voient (unique pronunciation)",
          "VISUAL: Je vois la tour Eiffel (I see the Eiffel Tower)",
          "UNDERSTANDING: Tu vois ce que je veux dire ? (Do you see what I mean?)",
          "MOVIES/SHOWS: Nous voyons un film (We're seeing/watching a movie)"
        ]
      },
      {
        title: "DIRE (to say/tell) - Complete Conjugation",
        explanation: "This irregular verb is crucial for communication and reporting speech. Notice the unusual 'vous dites' form (not 'vous disez' as you might expect). It's used for both direct speech and reporting what others say:",
        examples: [
          "PRESENT: je dis, tu dis, il/elle dit, nous disons, vous dites, ils/elles disent",
          "IRREGULAR FORM: 'vous dites' is the most unusual form - memorize this carefully",
          "DIRECT SPEECH: Je dis 'bonjour' (I say 'hello')",
          "REPORTING: Il dit que c'est important (He says that it's important)",
          "TELLING: Tu me dis la vérité ? (Are you telling me the truth?)"
        ]
      },
      {
        title: "PARTIR (to leave/depart) - Complete Conjugation", 
        explanation: "This irregular verb means 'to leave' or 'to depart' and follows a pattern similar to other verbs ending in -tir. The singular forms drop the 't' sound, while plural forms keep it. It's essential for travel and departure contexts:",
        examples: [
          "PRESENT: je pars, tu pars, il/elle part, nous partons, vous partez, ils/elles partent",
          "PRONUNCIATION: pars/pars/part (silent 't'), partons/partez/partent (pronounced 't')",
          "DEPARTURE: Je pars en voyage (I'm leaving on a trip)",
          "TIME: Nous partons à 8h (We're leaving at 8 o'clock)",
          "DESTINATION: Elle part pour Paris (She's leaving for Paris)"
        ]
      },
      {
        title: "SORTIR (to go out/exit) - Complete Conjugation",
        explanation: "This irregular verb means 'to go out' for social activities or 'to exit' from a place. It follows the same pattern as 'partir' but has different meanings. It's very common in social contexts and daily activities:",
        examples: [
          "PRESENT: je sors, tu sors, il/elle sort, nous sortons, vous sortez, ils/elles sortent",
          "PATTERN: Same as 'partir' - silent consonant in singular, pronounced in plural",
          "SOCIAL: Je sors avec mes amis (I'm going out with my friends)",
          "EXITING: Tu sors de la maison (You're leaving/exiting the house)",
          "EVENING: Nous sortons ce soir (We're going out tonight)"
        ]
      },
      {
        title: "DORMIR (to sleep) - Complete Conjugation",
        explanation: "This irregular verb follows the same -ir pattern as partir/sortir but relates to sleep and rest. The consonant 'm' is silent in singular forms but pronounced in plural forms. It's essential for discussing daily routines and travel:",
        examples: [
          "PRESENT: je dors, tu dors, il/elle dort, nous dormons, vous dormez, ils/elles dorment", 
          "PATTERN: dors/dors/dort (silent 'm'), dormons/dormez/dorment (pronounced 'm')",
          "SLEEP: Je dors huit heures par nuit (I sleep eight hours per night)",
          "LOCATION: Tu dors où ? (Where are you sleeping?)",
          "QUALITY: Il dort bien (He sleeps well)"
        ]
      },
      {
        title: "Irregular Verbs Review - Patterns and Usage",
        explanation: "Now you know the 10 most essential irregular verbs in French! Let's review the patterns and see how they work together in real communication. These verbs appear in over 70% of everyday French conversations:",
        examples: [
          "MOVEMENT: aller (go), venir (come), partir (leave), sortir (go out)",
          "PERCEPTION/COMMUNICATION: voir (see), dire (say), savoir (know facts), connaître (know people)",
          "BASIC STATES: être (be), avoir (have), faire (do/make), pouvoir (can), vouloir (want)",
          "DAILY LIFE: prendre (take), dormir (sleep)",
          "COMBINATION: Je vais voir un film, puis je vais dormir (I'm going to see a movie, then I'm going to sleep)"
        ]
      }
    ],

    vocabulary: [
      { french: "voir", english: "to see", category: "irregular-verbs", example: "Je vois un beau film au cinéma." },
      { french: "dire", english: "to say/tell", category: "irregular-verbs", example: "Je dis la vérité à mes amis." },
      { french: "partir", english: "to leave/depart", category: "irregular-verbs", example: "Je pars en voyage d'affaires demain." },
      { french: "sortir", english: "to go out/exit", category: "irregular-verbs", example: "Nous sortons ce soir pour aller au cinéma." },
      { french: "dormir", english: "to sleep", category: "irregular-verbs", example: "Je dors huit heures par nuit." },
      { french: "le film", english: "movie/film", category: "entertainment", example: "Ce film est très intéressant et amusant." },
      { french: "le cinéma", english: "cinema/movie theater", category: "places", example: "Le cinéma est ouvert jusqu'à minuit." },
      { french: "ce soir", english: "tonight", category: "time", example: "Ce soir, nous allons au restaurant." },
      { french: "demain", english: "tomorrow", category: "time", example: "Demain, je vais voir le patron." },
      { french: "le voyage d'affaires", english: "business trip", category: "travel", example: "Le voyage d'affaires est très important." },
      { french: "le patron", english: "boss", category: "professions", example: "Mon patron est très gentil et compréhensif." },
      { french: "important(e)", english: "important", category: "adjectives", example: "Cette réunion est très importante pour l'entreprise." },
      { french: "l'hôtel", english: "hotel", category: "places", example: "L'hôtel est confortable et bien situé." },
      { french: "alors", english: "so/then", category: "connectors", example: "Alors, qu'est-ce que tu veux faire ?" },
      { french: "bien", english: "well", category: "adverbs", example: "Je parle bien français maintenant." },
      { french: "ensemble", english: "together", category: "adverbs", example: "Nous travaillons ensemble sur ce projet." },
      { french: "vendredi", english: "Friday", category: "days", example: "Vendredi soir, nous sortons avec des amis." },
      { french: "revenir", english: "to come back/return", category: "verbs", example: "Je reviens de Paris la semaine prochaine." },
      { french: "quand", english: "when", category: "question-words", example: "Quand est-ce que tu arrives à la gare ?" },
      { french: "quel/quelle", english: "which/what", category: "question-words", example: "Quel film veux-tu voir ce soir ?" }
    ],

    culturalNotes: [
      {
        title: "French Business Travel",
        content: "Business trips ('voyages d'affaires') are common in French professional life. Hotels often provide early breakfast for business travelers, and it's customary to inform colleagues about travel plans in advance."
      },
      {
        title: "French Social Evening Culture",
        content: "Going out ('sortir') in the evening is an important part of French social life. Movie theaters ('cinémas') are popular, and it's common to make plans for specific days like Friday ('vendredi soir')."
      }
    ],

    exercises: [
      {
        id: "1",
        type: "multiple_choice" as const,
        question: "How do you say 'We are going out tonight' in French?",
        options: [
          "Nous sortons ce soir",
          "Nous partons ce soir",
          "Nous voyons ce soir",
          "Nous dormons ce soir"
        ],
        correct_answer: "Nous sortons ce soir",
        explanation: "Use 'sortir' for going out socially: Nous sortons ce soir."
      },

      {
        id: "2",
        type: "conjugation" as const,
        question: "Conjugate the verb 'voir' (to see) in the present tense",
        correct_answer: "je vois, tu vois, il/elle voit, nous voyons, vous voyez, ils/elles voient",
        explanation: "Master the irregular conjugation of 'voir' - notice the stem changes in plural forms.",
        verb: "voir",
        translations: {
          "je": "I see",
          "tu": "you see",
          "il/elle": "he/she sees",
          "nous": "we see",
          "vous": "you see (formal/plural)",
          "ils/elles": "they see"
        }
      },
      {
        id: "3",
        type: "conjugation" as const,
        question: "Conjugate the verb 'dire' (to say/tell) in the present tense",
        correct_answer: "je dis, tu dis, il/elle dit, nous disons, vous dites, ils/elles disent",
        explanation: "Practice the irregular conjugation of 'dire' - note the unusual 'vous dites' form.",
        verb: "dire",
        translations: {
          "je": "I say/tell",
          "tu": "you say/tell",
          "il/elle": "he/she says/tells",
          "nous": "we say/tell",
          "vous": "you say/tell (formal/plural)",
          "ils/elles": "they say/tell"
        }
      },

      {
        id: "4",
        type: "multiple_choice" as const,
        question: "Choose the correct verb based on the meaning: Je _____ en voyage demain. (I'm leaving on a trip tomorrow)",
        options: ["pars", "sors", "dors", "vois"],
        correct_answer: "pars",
        explanation: "Use 'partir' for departing/leaving on trips."
      },

      {
        id: "5",
        type: "fill_blank" as const,
        question: "Complete: Tu _____ faire du sport ? (Do you want to do sports?)",
        options: ["veux", "peux", "sais", "connais"],
        correct_answer: "veux",
        explanation: "Use 'vouloir' for wanting to do something: Tu veux faire du sport?"
      },

      {
        id: "6",
        type: "translation" as const,
        question: "Translate: 'I see that you want to leave early tomorrow. Do you sleep well at hotels?'",
        answer: "je vois que tu veux partir tôt demain. tu dors bien à l'hôtel ?",
        correct_answer: "je vois que tu veux partir tôt demain. tu dors bien à l'hôtel ?",
        explanation: "Practice using 'voir' for understanding, 'vouloir' for wanting, and 'dormir' for sleeping.",
        hints: ["je vois que = I see that", "tu veux = you want", "partir = to leave", "tôt = early", "tu dors = you sleep"]
      },

      {
        id: "7",
        type: "fill_blank" as const,
        question: "Complete: Qu'est-ce que tu _____ ce weekend ? (What are you doing this weekend?)",
        options: ["fais", "vas", "veux", "peux"],
        correct_answer: "fais",
        explanation: "Use 'faire' for activities: Qu'est-ce que tu fais ce weekend?"
      },

      {
        id: "8",
        type: "matching" as const,
        question: "Group these irregular verbs by their conjugation patterns:",
        correct_answer: "-tir/-mir pattern: partir, sortir, dormir | Completely irregular: voir, dire, aller, faire",
        explanation: "Review the conjugation patterns to understand how irregular verbs are grouped.",
        pairs: [
          { french: "partir", english: "-tir pattern (silent consonant in singular)" },
          { french: "sortir", english: "-tir pattern (silent consonant in singular)" },
          { french: "dormir", english: "-mir pattern (silent consonant in singular)" },
          { french: "voir", english: "completely irregular stems" },
          { french: "dire", english: "completely irregular stems" }
        ]
      },

      {
        id: "9",
        type: "multiple_choice" as const,
        question: "Choose the most appropriate irregular verb: Making weekend social plans - On _____ ensemble samedi soir ?",
        options: ["part", "sort", "dort", "voit"],
        correct_answer: "sort",
        explanation: "Use 'sortir' for social outings: Shall we go out together?"
      }
    ],

    audioFiles: {
      dialogue: "/audio/lesson13/dialogue.mp3",
      vocabulary: "/audio/lesson13/vocabulary.mp3"
    }
  }

  const handleExerciseComplete = (exerciseId: string) => {
    if (!completedExercises.includes(exerciseId)) {
      const newCompleted = [...completedExercises, exerciseId]
      setCompletedExercises(newCompleted)
    }
  }

  const renderGrammarSection = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Grammar Points</h2>
      {lessonData.grammarPoints.map((point, index) => (
        <div key={index} className="bg-white/90 backdrop-blur-sm rounded-[20px] p-6 shadow-[inset_0_4px_16px_rgba(34,197,94,0.08),0_8px_32px_rgba(0,0,0,0.1)] border border-white/40">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">{point.explanation}</p>
          <div className="space-y-2">
            {point.examples.map((example, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-green-800 font-medium">{example}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  const renderVocabularySection = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Vocabulary</h2>
        <p className="text-lg text-gray-600">Essential words and expressions for this lesson</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {lessonData.vocabulary.map((item, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-[16px] border border-gray-200 shadow-[inset_0_4px_16px_rgba(0,0,0,0.05),0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_4px_16px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-900">{item.french}</h3>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-[12px] text-sm font-medium">
                {item.category}
              </span>
            </div>
            <p className="text-gray-700 text-lg mb-2">{item.english}</p>
            {item.example && (
              <div className="bg-blue-50 rounded-lg p-3 mb-3 border-l-4 border-blue-300">
                <div className="flex items-center justify-between">
                  <p className="text-gray-800 font-medium text-sm italic flex-1">&ldquo;{item.example}&rdquo;</p>
                  <button 
                    onClick={() => {
                      if ('speechSynthesis' in window) {
                        const utterance = new SpeechSynthesisUtterance(item.example);
                        utterance.lang = 'fr-FR';
                        utterance.rate = 0.8;
                        speechSynthesis.speak(utterance);
                      }
                    }}
                    className="ml-3 p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full transition-colors duration-200 hover:scale-110"
                    title="Listen to example sentence"
                  >
                    <span className="text-lg">🎹</span>
                  </button>
                </div>
              </div>
            )}
            <AudioPlayer 
              text={item.french}
              className="mt-3"
              
            />
          </div>
        ))}
      </div>
    </div>
  )

  const renderCulturalNotesSection = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Cultural Notes</h2>
      {lessonData.culturalNotes.map((note, index) => (
        <div key={index} className="bg-white/90 backdrop-blur-sm rounded-[20px] p-6 shadow-[inset_0_4px_16px_rgba(34,197,94,0.08),0_8px_32px_rgba(0,0,0,0.1)] border border-white/40">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{note.title}</h3>
          <p className="text-gray-700 leading-relaxed">{note.content}</p>
        </div>
      ))}
    </div>
  )

  const sections = [
    { id: 'dialogue', label: 'Dialogue', icon: '💬' },
    { id: 'grammar', label: 'Grammar', icon: '📚' },
    { id: 'vocabulary', label: 'Vocabulary', icon: '📖' },
    { id: 'exercises', label: 'Exercises', icon: '✏️' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{lessonData.title}</h1>
          <p className="text-xl opacity-95 mb-6">{lessonData.description}</p>
          <div className="flex items-center justify-center space-x-4">
            <span className="bg-green-500 px-4 py-2 rounded-full font-medium">
              {lessonData.level}
            </span>
            <span className="text-green-200">Lesson {lessonData.id}</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-green-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-1 py-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setCurrentSection(section.id as 'dialogue' | 'grammar' | 'vocabulary' | 'exercises')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-[16px] font-medium transition-all duration-300 ${
                  currentSection === section.id
                    ? 'bg-green-500 text-white shadow-[0_4px_16px_rgba(34,197,94,0.3)]'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <span>{section.icon}</span>
                <span>{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Dialogue Section */}
        {currentSection === 'dialogue' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{lessonData.dialogue.title}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{lessonData.dialogue.context}</p>
            </div>
            
            <DialogueSection dialogue={lessonData.dialogue} />
            
            <div className="text-center">
              <AudioPlayer text="Bonjour, je voudrais pratiquer le français"  />
            </div>
          </div>
        )}

        {/* Grammar Section */}
        {currentSection === 'grammar' && renderGrammarSection()}

        {/* Vocabulary Section */}
        {currentSection === 'vocabulary' && renderVocabularySection()}

        {/* Cultural Notes Section */}
        {currentSection === 'vocabulary' && (
          <div className="mt-12">
            {renderCulturalNotesSection()}
          </div>
        )}

        {/* Exercises Section */}
        {currentSection === 'exercises' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Practice Exercises</h2>
              <p className="text-gray-600">Test your understanding of the final essential irregular verbs</p>
            </div>

            <ExerciseProgress
              totalExercises={lessonData.exercises.length}
              completedExercises={completedExercises.length}
              correctAnswers={completedExercises.length}
              onReset={() => setCompletedExercises([])}
            />

            <div className="space-y-6">
              {lessonData.exercises.map((exercise, index) => (
                <div key={exercise.id} className="bg-white/90 backdrop-blur-sm rounded-[20px] p-6 shadow-[inset_0_4px_16px_rgba(34,197,94,0.08),0_8px_32px_rgba(0,0,0,0.1)] border border-white/40">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">✏️</span>
                    <h3 className="text-xl font-bold text-gray-900">Exercise {index + 1}</h3>
                  </div>
                  
                  <InteractiveExercise
                    exercise={exercise}
                    exerciseNumber={index + 1}
                    onComplete={() => handleExerciseComplete(exercise.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      <div className="bg-white/80 backdrop-blur-sm border-t border-green-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link
              href="/lessons/elementary/12"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              <span>←</span>
              <span>Previous Lesson</span>
            </Link>
            
            <Link
              href="/lessons/elementary"
              className="text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              Back to A2 Lessons
            </Link>
            
            <div className="text-gray-400 font-medium">
              Next Lesson Coming Soon
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
