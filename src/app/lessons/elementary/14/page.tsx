'use client'

import { useState } from 'react'
import { DialogueSection } from '../../../../../components/lessons/DialogueSection'
import InteractiveExercise from '../../../../../components/lessons/InteractiveExercise'
import ExerciseProgress from '../../../../../components/lessons/ExerciseProgress'
import { AudioPlayer } from '../../../../../components/lessons/AudioPlayer'
import Link from 'next/link'

type Section = 'dialogue' | 'grammar' | 'vocabulary' | 'exercises'

const lessonData = {
  id: 14,
  title: "Introduction to Past Tense (Passé Composé)",
  level: "A2",
  description: "Learn to talk about completed past actions using passé composé with avoir - the most important past tense in French",
  
  dialogue: {
    title: "What Did You Do Yesterday?",
    context: "Chloé and Maxime discuss what they did yesterday using passé composé",
    speakers: ["Chloé", "Maxime"],
    exchanges: [
      {
        speaker: "Chloé",
        french: "Salut Maxime ! Qu'est-ce que tu as fait hier ?",
        english: "Hi Maxime! What did you do yesterday?",
        pronunciation: "sah-LU mak-SEEM! kes-kuh tu ah fay ee-AIR?"
      },
      {
        speaker: "Maxime",
        french: "J'ai travaillé le matin, puis j'ai déjeuné avec ma sœur.",
        english: "I worked in the morning, then I had lunch with my sister.",
        pronunciation: "zhay trah-vah-YAY luh mah-TAHN, pwee zhay day-zhuh-NAY ah-VEK mah SUR"
      },
      {
        speaker: "Chloé",
        french: "Sympa ! Et l'après-midi ? Tu as regardé la télé ?",
        english: "Nice! And in the afternoon? Did you watch TV?",
        pronunciation: "sam-PAH! ay lah-pray-mee-DEE? tu ah ruh-gar-DAY lah tay-LAY?"
      },
      {
        speaker: "Maxime",
        french: "Non, j'ai préféré faire du sport. J'ai joué au tennis avec Paul.",
        english: "No, I preferred to do sports. I played tennis with Paul.",
        pronunciation: "nohn, zhay pray-fay-RAY fair du spor. zhay zhoo-AY oh tay-NEES ah-VEK POHL"
      },
      {
        speaker: "Chloé",
        french: "Tu as gagné ?",
        english: "Did you win?",
        pronunciation: "tu ah gah-NYAY?"
      },
      {
        speaker: "Maxime",
        french: "Oui ! Nous avons bien joué tous les deux. Et toi, qu'est-ce que tu as fait ?",
        english: "Yes! We both played well. And you, what did you do?",
        pronunciation: "wee! noo zah-VOHN bee-AHN zhoo-AY too lay DUH. ay TWAH, kes-kuh tu ah fay?"
      },
      {
        speaker: "Chloé",
        french: "J'ai étudié pour mon examen, puis j'ai écouté de la musique.",
        english: "I studied for my exam, then I listened to music.",
        pronunciation: "zhay ay-tu-dee-AY poor mohn eg-zah-MAHN, pwee zhay ay-koo-TAY duh lah mu-ZEEK"
      },
      {
        speaker: "Maxime",
        french: "Tu as fini tes révisions ?",
        english: "Did you finish your review?",
        pronunciation: "tu ah fee-NEE tay ray-vee-zee-OHN?"
      }
    ]
  },

  grammarPoints: [
    {
      title: "What Is Passé Composé?",
      explanation: "Passé composé is the most important past tense in French for everyday conversation. It describes completed actions in the past - things that happened and are finished. Unlike English, which has several past tenses, French uses passé composé for most past situations. It's called 'composé' (compound) because it's made of two parts: a helper verb + past participle:",
      examples: [
        "STRUCTURE: Subject + helper verb (avoir/être) + past participle",
        "ENGLISH EQUIVALENTS: 'I worked', 'I have worked', 'I did work' = J'ai travaillé",
        "COMPLETED ACTIONS: J'ai mangé (I ate/have eaten) - the action is finished",
        "PAST EVENTS: Hier, j'ai vu un film (Yesterday, I saw a movie)",
        "KEY POINT: Most verbs use 'avoir' as the helper verb (we'll learn 'être' verbs later)"
      ]
    },
    {
      title: "Forming Past Participles with Regular -er Verbs",
      explanation: "For regular -er verbs (which you know well from Lessons 1-10), forming the past participle is simple: remove -er from the infinitive and add -é. This -é ending never changes when using 'avoir' as the helper verb:",
      examples: [
        "PATTERN: infinitive (-er) → past participle (-é)",
        "travailler → travaillé: J'ai travaillé (I worked)",
        "regarder → regardé: Tu as regardé (You watched)", 
        "écouter → écouté: Il a écouté (He listened)",
        "jouer → joué: Nous avons joué (We played)",
        "PRONUNCIATION: The -é sounds like 'ay' in English 'day'"
      ]
    },
    {
      title: "Using AVOIR as Helper Verb - Complete Pattern",
      explanation: "Most French verbs use 'avoir' (to have) as their helper verb in passé composé. You conjugate 'avoir' in the present tense, then add the past participle. The past participle stays the same regardless of who is doing the action:",
      examples: [
        "AVOIR conjugation: j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont",
        "FULL PATTERN with 'manger' (to eat):",
        "j'ai mangé (I ate), tu as mangé (you ate), il/elle a mangé (he/she ate)",
        "nous avons mangé (we ate), vous avez mangé (you ate), ils/elles ont mangé (they ate)",
        "PAST PARTICIPLE: mangé stays the same in all forms"
      ]
    },
    {
      title: "Past Participles of Common Irregular Verbs",
      explanation: "While -er verbs are predictable (-é ending), irregular verbs have unique past participles that must be memorized. Here are the most essential ones you need for daily conversation:",
      examples: [
        "faire → fait: J'ai fait mes devoirs (I did my homework)",
        "voir → vu: Tu as vu le film ? (Did you see the movie?)",
        "dire → dit: Il a dit bonjour (He said hello)",
        "prendre → pris: Nous avons pris le bus (We took the bus)",
        "avoir → eu: Elle a eu 20 ans (She turned 20)",
        "être → été: J'ai été malade (I was sick)"
      ]
    },
    {
      title: "Negative and Question Forms in Passé Composé",
      explanation: "To make passé composé negative or ask questions, you work with the helper verb (avoir), not the past participle. The past participle always stays at the end:",
      examples: [
        "NEGATIVE: ne + avoir + pas + past participle",
        "Je n'ai pas travaillé (I didn't work), Tu n'as pas mangé (You didn't eat)",
        "QUESTIONS: (Est-ce que) + subject + avoir + past participle + ?",
        "Tu as fini ? (Did you finish?), Est-ce que vous avez compris ? (Did you understand?)",
        "QUESTION WORDS: Qu'est-ce que tu as fait ? (What did you do?)"
      ]
    }
  ],

  vocabulary: [
    { french: "hier", english: "yesterday", category: "time", example: "Hier, j'ai travaillé toute la journée." },
    { french: "le matin", english: "morning", category: "time", example: "Le matin, je me lève à 7h00." },
    { french: "l'après-midi", english: "afternoon", category: "time", example: "L'après-midi, je fais du sport." },
    { french: "le soir", english: "evening", category: "time", example: "Le soir, je regarde la télévision." },
    { french: "puis", english: "then", category: "connectors", example: "Je déjeune, puis je retourne au travail." },
    { french: "déjeuner", english: "to have lunch", category: "verbs", example: "Je déjeune à midi avec mes collègues." },
    { french: "sympa", english: "nice/cool", category: "adjectives", example: "Mon professeur est très sympa et patient." },
    { french: "préférer", english: "to prefer", category: "verbs", example: "Je préfère étudier le matin." },
    { french: "gagner", english: "to win", category: "verbs", example: "Nous avons gagné le match de tennis." },
    { french: "tous les deux", english: "both", category: "expressions", example: "Tous les deux, nous aimons la musique." },
    { french: "l'examen", english: "exam", category: "education", example: "L'examen de français est difficile mais intéressant." },
    { french: "étudier", english: "to study", category: "verbs", example: "J'étudie le français depuis deux ans." },
    { french: "finir", english: "to finish", category: "verbs", example: "Je finis mes devoirs avant de dormir." },
    { french: "les révisions", english: "review/revision", category: "education", example: "Les révisions sont importantes pour réussir l'examen." },
    { french: "fait", english: "done/made (past participle)", category: "past-participles", example: "J'ai fait mes devoirs hier soir." },
    { french: "vu", english: "seen (past participle)", category: "past-participles", example: "J'ai vu un excellent film hier." },
    { french: "dit", english: "said (past participle)", category: "past-participles", example: "J'ai dit la vérité à mes parents." },
    { french: "pris", english: "taken (past participle)", category: "past-participles", example: "J'ai pris le bus pour aller au travail." },
    { french: "eu", english: "had (past participle)", category: "past-participles", example: "J'ai eu une excellente note à l'examen." },
    { french: "été", english: "been (past participle)", category: "past-participles", example: "J'ai été très content de mes résultats." }
  ],

  culturalNotes: [
    {
      title: "French Daily Routines",
      content: "French people often discuss their daily activities using passé composé. Lunch ('déjeuner') is typically taken between 12-2 PM and is considered an important meal. Studying for exams ('révisions') is taken very seriously in French academic culture."
    },
    {
      title: "Sports and Leisure in France",
      content: "Tennis is popular in France, and many people play regularly. The phrase 'faire du sport' (to do sports) is commonly used. French people often ask 'Qu'est-ce que tu as fait?' (What did you do?) to start conversations about recent activities."
    }
  ],

  exercises: [
    {
      id: "ex1",
      type: "multiple_choice" as const,
      question: "How do you say 'I worked yesterday' in French?",
      options: [
        "J'ai travaillé hier",
        "Je travaille hier",
        "J'ai travailler hier", 
        "Je suis travaillé hier"
      ],
      correct_answer: "J'ai travaillé hier",
      explanation: "Use passé composé: J'ai (helper) + travaillé (past participle) + hier."
    },

    {
      id: "ex2",
      type: "conjugation" as const,
      question: "Practice the conjugation of 'avoir + mangé' (to eat in past tense)",
      verb: "avoir + mangé",
      translations: {
        "je": "I ate/have eaten",
        "tu": "you ate/have eaten",
        "il/elle": "he/she ate/has eaten",
        "nous": "we ate/have eaten",
        "vous": "you ate/have eaten (formal/plural)",
        "ils/elles": "they ate/have eaten"
      },
      correct_answer: "conjugation",
      explanation: "Practice the complete conjugation pattern with avoir + mangé."
    },
    {
      id: "ex3",
      type: "conjugation" as const,
      question: "Practice the conjugation of 'avoir + regardé' (to watch in past tense)",
      verb: "avoir + regardé",
      translations: {
        "je": "I watched/have watched",
        "tu": "you watched/have watched",
        "il/elle": "he/she watched/has watched",
        "nous": "we watched/have watched",
        "vous": "you watched/have watched (formal/plural)",
        "ils/elles": "they watched/have watched"
      },
      correct_answer: "conjugation",
      explanation: "Practice the complete conjugation pattern with avoir + regardé."
    },

    {
      id: "ex4",
      type: "matching" as const,
      question: "Match irregular verbs with their past participles:",
      pairs: [
        { french: "faire", english: "fait" },
        { french: "voir", english: "vu" },
        { french: "dire", english: "dit" },
        { french: "prendre", english: "pris" },
        { french: "avoir", english: "eu" }
      ],
      correct_answer: "matching",
      explanation: "Learn the essential irregular past participles for daily conversation."
    },

    {
      id: "ex5",
      type: "fill_blank" as const,
      question: "Complete with the correct passé composé form: Hier, j'_____ _____ au tennis. (played)",
      correct_answer: ["ai", "joué"],
      explanation: "Use the correct form of avoir + the past participle of jouer."
    },

    {
      id: "ex6",
      type: "translation" as const,
      question: "Translate: 'Yesterday I studied, then I listened to music and watched TV.'",
      correct_answer: "hier j'ai étudié, puis j'ai écouté de la musique et j'ai regardé la télé",
      explanation: "Use passé composé for all past actions: j'ai étudié, j'ai écouté, j'ai regardé.",
      hints: ["hier = yesterday", "j'ai étudié = I studied", "puis = then", "j'ai écouté = I listened", "j'ai regardé = I watched"]
    },

    {
      id: "ex7",
      type: "speaking" as const,
      question: "Practice saying: 'J'ai travaillé hier matin' (I worked yesterday morning)",
      correct_answer: "speaking",
      explanation: "Focus on the pronunciation: 'zhay trah-vah-YAY ee-AIR mah-TAHN'",
      audio_prompt: "J'ai travaillé hier matin"
    },

    {
      id: "ex8",
      type: "matching" as const,
      question: "Match the French past tense expressions with their English meanings:",
      pairs: [
        { french: "j'ai mangé", english: "I ate/have eaten" },
        { french: "tu as vu", english: "you saw/have seen" },
        { french: "il a dit", english: "he said/has said" },
        { french: "nous avons pris", english: "we took/have taken" },
        { french: "vous avez eu", english: "you had/have had" }
      ],
      correct_answer: "matching",
      explanation: "Practice recognizing passé composé forms in context."
    }
  ]
}

export default function Lesson14() {
  const [currentSection, setCurrentSection] = useState<Section>('dialogue')
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set())
  const [correctAnswers, setCorrectAnswers] = useState<number>(0)

  const sections = [
    { id: 'dialogue', label: 'Dialogue', icon: '💬' },
    { id: 'grammar', label: 'Grammar', icon: '📚' },
    { id: 'vocabulary', label: 'Vocabulary', icon: '📖' },
    { id: 'exercises', label: 'Exercises', icon: '✏️' }
  ]

  const handleExerciseComplete = (exerciseId: string) => {
    setCompletedExercises(prev => new Set(prev).add(exerciseId))
    setCorrectAnswers(prev => prev + 1)
  }

  const handleReset = () => {
    setCompletedExercises(new Set())
    setCorrectAnswers(0)
  }

  const renderGrammarSection = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Grammar Points</h2>
        <p className="text-lg text-gray-600">Master the essential concepts of passé composé</p>
      </div>
      
      {lessonData.grammarPoints.map((point, index) => (
        <div key={index} className="bg-white/80 backdrop-blur-sm rounded-[20px] p-6 shadow-lg border border-green-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">{point.explanation}</p>
          <div className="space-y-2">
            {point.examples.map((example, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-3 border-l-4 border-green-300">
                <p className="text-gray-800 font-medium">{example}</p>
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
        <p className="text-lg text-gray-600">Essential words and expressions for talking about the past</p>
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
              speaker="Student"
            />
          </div>
        ))}
      </div>
    </div>
  )

  const renderCulturalNotesSection = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Cultural Notes</h2>
        <p className="text-lg text-gray-600">Understanding French culture and daily life</p>
      </div>
      
      {lessonData.culturalNotes.map((note, index) => (
        <div key={index} className="bg-white/80 backdrop-blur-sm rounded-[20px] p-6 shadow-lg border border-green-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{note.title}</h3>
          <p className="text-gray-700 leading-relaxed">{note.content}</p>
        </div>
      ))}
    </div>
  )

  const renderExercisesSection = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Exercises</h2>
        <p className="text-lg text-gray-600">Practice your passé composé skills</p>
      </div>
      
      <ExerciseProgress
        totalExercises={lessonData.exercises.length}
        completedExercises={completedExercises.size}
        correctAnswers={correctAnswers}
        onReset={handleReset}
      />
      
      <div className="space-y-6">
        {lessonData.exercises.map((exercise, index) => (
          <InteractiveExercise
            key={exercise.id}
            exercise={exercise}
            onComplete={() => handleExerciseComplete(exercise.id)}
            exerciseNumber={index + 1}
          />
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-green-200 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/lessons/elementary" className="text-green-600 hover:text-green-700 transition-colors mb-2 inline-block">
                ← Back to A2 Lessons
              </Link>
              <h1 className="text-4xl font-bold text-gray-900">{lessonData.title}</h1>
              <p className="text-xl text-gray-600 mt-2">{lessonData.description}</p>
            </div>
            <div className="text-right">
              <div className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-[16px] font-medium border border-green-200/50">
                {lessonData.level}
              </div>
            </div>
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
                onClick={() => setCurrentSection(section.id as Section)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-[16px] font-medium transition-all duration-300 ${
                  currentSection === section.id
                    ? 'bg-green-500 text-white shadow-lg scale-105'
                    : 'bg-white/60 text-gray-700 hover:bg-white/80 hover:scale-105'
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
      <div className="max-w-6xl mx-auto px-4 py-8">
        {currentSection === 'dialogue' && (
          <div className="space-y-8">
            <DialogueSection dialogue={lessonData.dialogue} />
            <div className="bg-white/80 backdrop-blur-sm rounded-[20px] p-6 shadow-lg border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Practice Speaking</h3>
              <AudioPlayer speaker="Student" text="Practice the dialogue with the audio player" />
            </div>
            {renderCulturalNotesSection()}
          </div>
        )}
        
        {currentSection === 'grammar' && renderGrammarSection()}
        {currentSection === 'vocabulary' && renderVocabularySection()}
        {currentSection === 'exercises' && renderExercisesSection()}
      </div>
    </div>
  )
}
