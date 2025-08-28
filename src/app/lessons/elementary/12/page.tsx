'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DialogueSection } from '../../../../../components/lessons/DialogueSection'
import InteractiveExercise from '../../../../../components/lessons/InteractiveExercise'
import ExerciseProgress from '../../../../../components/lessons/ExerciseProgress'
import { AudioPlayer } from '../../../../../components/lessons/AudioPlayer'

export default function Lesson12() {
  const [currentSection, setCurrentSection] = useState<'dialogue' | 'grammar' | 'vocabulary' | 'exercises'>('dialogue')
  const [completedExercises, setCompletedExercises] = useState<string[]>([])

  const lessonData = {
    id: 12,
    title: "More Essential Irregular Verbs",
    level: "A2",
    description: "Learn additional crucial irregular verbs: avoir, être, savoir, connaître, and prendre for complete everyday communication",
    
    dialogue: {
      title: "Getting to Know Each Other",
      context: "Emma and Lucas meet in their neighborhood and discuss local places and plans.",
      exchanges: [
        {
          speaker: "Emma",
          french: "Salut Lucas ! Tu es nouveau dans le quartier ?",
          english: "Hi Lucas! Are you new in the neighborhood?",
          pronunciation: "sah-LU lu-KAH! tu ay noo-VOH dahn luh kar-tee-AY?"
        },
        {
          speaker: "Lucas",
          french: "Oui, j'ai 22 ans et je suis étudiant ici. Tu connais bien la ville ?",
          english: "Yes, I'm 22 years old and I'm a student here. Do you know the city well?",
          pronunciation: "wee, zhay vanh-DOO ahn ay zhuh swee ay-tu-dee-AHN ee-SEE. tu ko-NAY bee-AHN lah VEEL?"
        },
        {
          speaker: "Emma",
          french: "Oui, j'ai grandi ici ! Je sais où sont les meilleurs restaurants.",
          english: "Yes, I grew up here! I know where the best restaurants are.",
          pronunciation: "wee, zhay grahn-DEE ee-SEE! zhuh say oo sohn lay may-YUR res-toh-RAHN"
        },
        {
          speaker: "Lucas",
          french: "Parfait ! Est-ce que tu connais un bon café ? Je prends toujours un café le matin.",
          english: "Perfect! Do you know a good café? I always have a coffee in the morning.",
          pronunciation: "par-FAY! es-kuh tu ko-NAY uhn bohn kah-FAY? zhuh prahn too-ZHOOR uhn kah-FAY luh mah-TAHN"
        },
        {
          speaker: "Emma",
          french: "Il y a le Café Central. Ils ont d'excellents croissants aussi.",
          english: "There's Café Central. They have excellent croissants too.",
          pronunciation: "eel ee ah luh kah-FAY sahn-TRAHL. eel zohn dek-say-LAHN krwah-SAHN oh-SEE"
        },
        {
          speaker: "Lucas",
          french: "Tu sais s'ils sont ouverts tôt le matin ?",
          english: "Do you know if they're open early in the morning?",
          pronunciation: "tu say seel sohn too-VAIR toh luh mah-TAHN?"
        },
        {
          speaker: "Emma",
          french: "Oui, ils ouvrent à 7h. Tu prends le petit-déjeuner là-bas demain ?",
          english: "Yes, they open at 7 AM. Are you having breakfast there tomorrow?",
          pronunciation: "wee, eel zoo-vruh ah set UR. tu prahn luh puh-TEE day-zhuh-NAY lah-BAH duh-MAHN?"
        },
        {
          speaker: "Lucas",
          french: "Bonne idée ! Tu es libre demain matin ? On peut y aller ensemble.",
          english: "Good idea! Are you free tomorrow morning? We can go there together.",
          pronunciation: "bun ee-DAY! tu ay LEE-bruh duh-MAHN mah-TAHN? ohn puh zee ah-LAY ahn-SAHM-bluh"
        }
      ]
    },

    grammarPoints: [
      {
        title: "Review: AVOIR (to have) & ÊTRE (to be) - Advanced Usage",
        explanation: "You've seen these verbs in Lessons 2-3, but now let's master their full irregular patterns and expanded uses. These are the most important verbs in French and appear in countless expressions beyond their basic meanings of 'have' and 'be':",
        examples: [
          "AVOIR: j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont",
          "ÊTRE: je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont",
          "AGE: J'ai 22 ans (I am 22 years old) - French uses 'avoir' for age, not 'être'",
          "EXPRESSIONS: avoir faim (to be hungry), avoir soif (to be thirsty), avoir raison (to be right)",
          "STATES: être libre (to be free), être ouvert (to be open), être nouveau (to be new)"
        ]
      },
      {
        title: "SAVOIR (to know facts/how to) - Complete Conjugation",
        explanation: "This irregular verb means 'to know' but specifically for facts, information, or skills. It's different from 'connaître' (which we'll learn next). Notice the irregular forms, especially 'nous savons' and 'ils savent':",
        examples: [
          "PRESENT: je sais, tu sais, il/elle sait, nous savons, vous savez, ils/elles savent",
          "STEM PATTERN: sais/sais/sait (regular pattern), savons/savez (different stem), savent (unique)",
          "FACTS: Je sais où il habite (I know where he lives)",
          "SKILLS: Tu sais nager ? (Do you know how to swim?)",
          "IF CLAUSES: Tu sais si le café est ouvert ? (Do you know if the café is open?)"
        ]
      },
      {
        title: "CONNAÎTRE (to know people/places) - Complete Conjugation",
        explanation: "This irregular verb also means 'to know' but for people, places, or things you're familiar with. It's about personal acquaintance rather than factual knowledge. The key is the circumflex accent (ĉ) which appears in some forms:",
        examples: [
          "PRESENT: je connais, tu connais, il/elle connaît, nous connaissons, vous connaissez, ils/elles connaissent",
          "ACCENT NOTE: The circumflex (ĉ) appears in 'il/elle connaît' only",
          "PEOPLE: Je connais Marie (I know Marie) - personal acquaintance",
          "PLACES: Tu connais Paris ? (Do you know Paris?) - familiarity with a place",
          "DIFFERENCE: Je sais que Marie habite ici (fact) vs Je connais Marie (person)"
        ]
      },
      {
        title: "PRENDRE (to take) - Complete Conjugation",
        explanation: "This irregular verb means 'to take' but is used in many contexts where English uses different verbs. The stem changes from 'prend-' to 'pren-' in plural forms, and the singular forms are irregular:",
        examples: [
          "PRESENT: je prends, tu prends, il/elle prend, nous prenons, vous prenez, ils/elles prennent",
          "STEM PATTERN: prends/prends/prend (silent 'd'), prenons/prenez (different stem), prennent (double n)",
          "TRANSPORT: Je prends le bus (I take the bus), Elle prend le métro (She takes the metro)",
          "FOOD/DRINK: Tu prends un café ? (Are you having a coffee?)",
          "TIME: Ça prend combien de temps ? (How much time does it take?)"
        ]
      },
      {
        title: "Savoir vs Connaître - When to Use Which",
        explanation: "This is one of the trickiest distinctions for French learners. Both mean 'to know' but in different contexts. Think of 'savoir' as knowing facts/information and 'connaître' as knowing through experience or familiarity:",
        examples: [
          "SAVOIR = Facts, skills, information: Je sais son nom (I know his name)",
          "CONNAÎTRE = People, places, familiarity: Je connais cette personne (I know this person)",
          "SKILLS: Je sais nager (I know how to swim) - always use savoir",
          "PLACES: Je connais ce restaurant (I know this restaurant) - familiarity",
          "IF CLAUSES: Tu sais si... ? (Do you know if...?) - always use savoir"
        ]
      }
    ],

    vocabulary: [
      { french: "avoir", english: "to have", category: "irregular-verbs", example: "J'ai 25 ans et j'ai une voiture." },
      { french: "être", english: "to be", category: "irregular-verbs", example: "Je suis étudiant et je suis content." },
      { french: "savoir", english: "to know (facts/skills)", category: "irregular-verbs", example: "Je sais parler français et anglais." },
      { french: "connaître", english: "to know (people/places)", category: "irregular-verbs", example: "Je connais bien ce quartier de Paris." },
      { french: "prendre", english: "to take", category: "irregular-verbs", example: "Je prends le petit-déjeuner à 8h00." },
      { french: "nouveau/nouvelle", english: "new", category: "adjectives", example: "C'est un nouveau restaurant très populaire." },
      { french: "le quartier", english: "neighborhood", category: "places", example: "Mon quartier est calme et agréable." },
      { french: "l'étudiant(e)", english: "student", category: "professions", example: "L'étudiante travaille à la bibliothèque." },
      { french: "la ville", english: "city", category: "places", example: "Paris est une belle ville historique." },
      { french: "grandir", english: "to grow up", category: "verbs", example: "Les enfants grandissent très vite." },
      { french: "meilleur(e)", english: "best", category: "adjectives", example: "C'est le meilleur café de la ville." },
      { french: "le restaurant", english: "restaurant", category: "places", example: "Le restaurant est ouvert jusqu'à 23h00." },
      { french: "le café", english: "café/coffee", category: "food-places", example: "Je vais au café pour prendre un expresso." },
      { french: "le croissant", english: "croissant", category: "food", example: "Le croissant est chaud et délicieux." },
      { french: "ouvert(e)", english: "open", category: "adjectives", example: "La boutique est ouverte de 9h00 à 18h00." },
      { french: "tôt", english: "early", category: "time", example: "Je me lève tôt le matin pour faire du sport." },
      { french: "ouvrir", english: "to open", category: "verbs", example: "J'ouvre la porte et j'entre dans la maison." },
      { french: "le petit-déjeuner", english: "breakfast", category: "meals", example: "Le petit-déjeuner est le repas le plus important." },
      { french: "libre", english: "free/available", category: "adjectives", example: "Es-tu libre ce soir pour aller au cinéma ?" },
      { french: "ensemble", english: "together", category: "adverbs", example: "Nous travaillons ensemble sur ce projet." }
    ],

    culturalNotes: [
      {
        title: "French Café Culture",
        content: "French cafés are central to social life. They typically open early (6-7 AM) for breakfast and serve throughout the day. 'Prendre un café' (having a coffee) often includes socializing and people-watching."
      },
      {
        title: "French Breakfast Traditions",
        content: "The traditional French breakfast ('petit-déjeuner') is lighter than in many cultures, typically consisting of coffee with croissants, pain au chocolat, or tartines (bread with butter and jam)."
      }
    ],

    exercises: [
      {
        id: "1",
        type: "multiple_choice" as const,
        question: "How do you say 'I know this restaurant' (familiar with it) in French?",
        options: [
          "Je connais ce restaurant",
          "Je sais ce restaurant",
          "J'ai ce restaurant",
          "Je prends ce restaurant"
        ],
        correct_answer: "Je connais ce restaurant",
        explanation: "Use 'connaître' for places you're familiar with: Je connais ce restaurant."
      },

      {
        id: "2",
        type: "conjugation" as const,
        question: "Conjugate the verb 'savoir' (to know) in the present tense",
        correct_answer: "je sais, tu sais, il/elle sait, nous savons, vous savez, ils/elles savent",
        explanation: "Master the irregular conjugation of 'savoir' - notice the stem changes in plural forms.",
        verb: "savoir",
        translations: {
          "je": "I know",
          "tu": "you know",
          "il/elle": "he/she knows",
          "nous": "we know",
          "vous": "you know (formal/plural)",
          "ils/elles": "they know"
        }
      },
      {
        id: "3",
        type: "conjugation" as const,
        question: "Conjugate the verb 'prendre' (to take) in the present tense",
        correct_answer: "je prends, tu prends, il/elle prend, nous prenons, vous prenez, ils/elles prennent",
        explanation: "Practice the irregular conjugation of 'prendre' - note the stem changes and silent letters.",
        verb: "prendre",
        translations: {
          "je": "I take",
          "tu": "you take",
          "il/elle": "he/she takes",
          "nous": "we take",
          "vous": "you take (formal/plural)",
          "ils/elles": "they take"
        }
      },

      {
        id: "4",
        type: "multiple_choice" as const,
        question: "Choose 'savoir' or 'connaître' for each sentence:",
        options: [
          "Use 'savoir' for facts and 'connaître' for people/places",
          "Use 'connaître' for facts and 'savoir' for people/places",
          "Use 'savoir' for everything",
          "Use 'connaître' for everything"
        ],
        correct_answer: "Use 'savoir' for facts and 'connaître' for people/places",
        explanation: "Remember: 'savoir' = facts/skills, 'connaître' = people/places/familiarity"
      },

      {
        id: "5",
        type: "fill_blank" as const,
        question: "Complete with the correct irregular verb form: J'_____ 25 ans. (I am 25 years old)",
        options: ["ai", "suis", "sais", "connais"],
        correct_answer: "ai",
        explanation: "French uses 'avoir' for age: J'ai 25 ans"
      },

      {
        id: "6",
        type: "translation" as const,
        question: "Translate: 'Do you know if the café is open? I want to have breakfast there.'",
        answer: "tu sais si le café est ouvert ? je veux prendre le petit-déjeuner là-bas",
        correct_answer: "tu sais si le café est ouvert ? je veux prendre le petit-déjeuner là-bas",
        explanation: "Practice using 'savoir' for questions and 'prendre' for having meals.",
        hints: ["tu sais si = do you know if", "ouvert = open", "prendre = to have (meals)", "là-bas = there"]
      },

      {
        id: "7",
        type: "multiple_choice" as const,
        question: "Which verb is used to ask about someone's age in French?",
        options: ["être", "avoir", "savoir", "connaître"],
        correct_answer: "avoir",
        explanation: "Use 'avoir' for age: Tu as quel âge? (How old are you?)"
      },

      {
        id: "8",
        type: "fill_blank" as const,
        question: "Complete: Tu _____ ce quartier ? (Are you familiar with this neighborhood?)",
        options: ["sais", "connais", "es", "as"],
        correct_answer: "connais",
        explanation: "Use 'connaître' for places you're familiar with: Tu connais ce quartier?"
      },

      {
        id: "9",
        type: "matching" as const,
        question: "Match each irregular verb with its correct usage:",
        correct_answer: "avoir-age, être-states, savoir-facts, connaître-people, prendre-meals",
        explanation: "Review the key usage patterns for each irregular verb to master their contexts.",
        pairs: [
          { french: "avoir", english: "expressing age (J'ai 20 ans)" },
          { french: "être", english: "describing states (Je suis libre)" },
          { french: "savoir", english: "knowing facts (Je sais l'heure)" },
          { french: "connaître", english: "knowing people (Je connais Paul)" },
          { french: "prendre", english: "having meals (Je prends le déjeuner)" }
        ]
      }
    ],

    audioFiles: {
      dialogue: "/audio/lesson12/dialogue.mp3",
      vocabulary: "/audio/lesson12/vocabulary.mp3"
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
              <p className="text-gray-600">Test your understanding of the irregular verbs</p>
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
              href="/lessons/elementary/11"
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
