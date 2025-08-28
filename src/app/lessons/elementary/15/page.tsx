'use client'

import { useState } from 'react'
import { DialogueSection } from '../../../../../components/lessons/DialogueSection'
import InteractiveExercise from '../../../../../components/lessons/InteractiveExercise'
import ExerciseProgress from '../../../../../components/lessons/ExerciseProgress'
import { AudioPlayer } from '../../../../../components/lessons/AudioPlayer'
import Link from 'next/link'

type Section = 'dialogue' | 'grammar' | 'vocabulary' | 'exercises'

const lessonData = {
  id: 15,
  title: "Passé Composé with Être",
  level: "A2",
  description: "Learn verbs that use être as helper verb in passé composé, including movement verbs and agreement rules",
  
  dialogue: {
    title: "A Weekend Trip",
    context: "Amélie and Théo discuss Théo's weekend trip to Lyon using être verbs in passé composé",
    speakers: ["Amélie", "Théo"],
    exchanges: [
      {
        speaker: "Amélie",
        french: "Salut Théo ! Tu es allé où ce weekend ?",
        english: "Hi Théo! Where did you go this weekend?",
        pronunciation: "sah-LU tay-OH! tu ay zah-LAY oo suh week-END?"
      },
      {
        speaker: "Théo",
        french: "Je suis allé à Lyon avec ma famille. Nous sommes partis vendredi soir.",
        english: "I went to Lyon with my family. We left Friday evening.",
        pronunciation: "zhuh swee zah-LAY ah lee-OHN ah-VEK mah fah-MEEL. noo som par-TEE vahn-druh-DEE SWAHR"
      },
      {
        speaker: "Amélie",
        french: "Sympa ! Comment vous êtes allés là-bas ? En train ?",
        english: "Nice! How did you go there? By train?",
        pronunciation: "sam-PAH! ko-mahn voo zet zah-LAY lah-BAH? ahn TRAHN?"
      },
      {
        speaker: "Théo",
        french: "Oui, nous sommes montés dans le train à 19h. Ma sœur est venue avec nous aussi.",
        english: "Yes, we got on the train at 7 PM. My sister came with us too.",
        pronunciation: "wee, noo som mohn-TAY dahn luh TRAHN ah deez-nuf UR. mah SUR ay vuh-NU ah-VEK noo oh-SEE"
      },
      {
        speaker: "Amélie",
        french: "Et vous êtes restés combien de temps ?",
        english: "And how long did you stay?",
        pronunciation: "ay voo zet res-TAY kom-bee-AHN duh TAHN?"
      },
      {
        speaker: "Théo",
        french: "Nous sommes restés deux jours. Dimanche, nous sommes rentrés vers 18h.",
        english: "We stayed two days. Sunday, we came back around 6 PM.",
        pronunciation: "noo som res-TAY duh ZHOOR. dee-MAHNSH, noo som rahn-TRAY vair deez-WEET UR"
      },
      {
        speaker: "Amélie",
        french: "Tu es né à Lyon ? Tu connais bien la ville ?",
        english: "Were you born in Lyon? Do you know the city well?",
        pronunciation: "tu ay NAY ah lee-OHN? tu ko-NAY bee-AHN lah VEEL?"
      },
      {
        speaker: "Théo",
        french: "Non, je suis né à Paris, mais mes grands-parents sont morts à Lyon. Nous y allons souvent.",
        english: "No, I was born in Paris, but my grandparents died in Lyon. We go there often.",
        pronunciation: "nohn, zhuh swee NAY ah pah-REE, may may grahn-pah-RAHN sohn mor ah lee-OHN. noo zee ah-LOHN soo-VAHN"
      }
    ]
  },

  grammarPoints: [
    {
      title: "Why Some Verbs Use ÊTRE Instead of AVOIR",
      explanation: "While most French verbs use 'avoir' in passé composé (as you learned in Lesson 14), a specific group of verbs uses 'être' as the helper verb. These are mainly verbs of movement and change of state. Think of them as verbs that describe 'going somewhere' or 'becoming something.' There are about 17 essential être verbs that you must memorize:",
      examples: [
        "MOVEMENT VERBS: aller (go), venir (come), partir (leave), arriver (arrive)",
        "STATE CHANGE: naître (be born), mourir (die), devenir (become)",
        "STRUCTURE: Subject + être (conjugated) + past participle",
        "EXAMPLE: Je suis allé (I went) vs J'ai mangé (I ate)",
        "KEY DIFFERENCE: être verbs describe movement/change, avoir verbs describe actions"
      ]
    },
    {
      title: "Essential ÊTRE Verbs - The DR MRS VANDERTRAMP Method",
      explanation: "French teachers use the acronym 'DR MRS VANDERTRAMP' to help students remember the main être verbs. Each letter represents a verb that uses être in passé composé. Learning this acronym will help you remember which verbs use être:",
      examples: [
        "D - Devenir (to become), Descendre (to go down)",
        "R - Revenir (to come back), Retourner (to return), Rentrer (to come/go home)",
        "M - Monter (to go up), Mourir (to die)",
        "R - Rester (to stay)",
        "S - Sortir (to go out)",
        "V - Venir (to come)",
        "A - Aller (to go), Arriver (to arrive)",
        "N - Naître (to be born)",
        "D - Descendre (to descend)",
        "E - Entrer (to enter)",
        "R - Rentrer (to return home)",
        "T - Tomber (to fall)",
        "R - Retourner (to return)",
        "A - Aller (to go)",
        "M - Monter (to go up)",
        "P - Partir (to leave), Passer (to pass by)"
      ]
    },
    {
      title: "Agreement Rules with ÊTRE Verbs",
      explanation: "This is the tricky part! When using être verbs, the past participle must agree with the subject - it changes endings based on who is doing the action. This is different from avoir verbs where the past participle never changes:",
      examples: [
        "MASCULINE SINGULAR: Il est allé (He went) - no change to past participle",
        "FEMININE SINGULAR: Elle est allée (She went) - add -e",
        "MASCULINE PLURAL: Ils sont allés (They went - masculine group) - add -s", 
        "FEMININE PLURAL: Elles sont allées (They went - all feminine) - add -es",
        "MIXED GROUP: Ils sont allés (masculine form used for mixed groups)"
      ]
    },
    {
      title: "Common ÊTRE Verbs - Conjugation Examples",
      explanation: "Let's see how the most common être verbs work in passé composé. Remember: être (helper) + past participle with agreement. These verbs appear constantly in conversations about travel, daily life, and life events:",
      examples: [
        "ALLER (to go): je suis allé(e), tu es allé(e), il est allé/elle est allée",
        "VENIR (to come): je suis venu(e), tu es venu(e), il est venu/elle est venue",
        "PARTIR (to leave): je suis parti(e), tu es parti(e), il est parti/elle est partie",
        "RESTER (to stay): je suis resté(e), tu es resté(e), il est resté/elle est restée",
        "NAÎTRE (to be born): je suis né(e), tu es né(e), il est né/elle est née"
      ]
    },
    {
      title: "ÊTRE vs AVOIR - How to Choose",
      explanation: "The key is to memorize the être verbs because they're exceptions. If a verb is not on the DR MRS VANDERTRAMP list, it uses avoir. Some verbs can use both depending on meaning (we'll learn this later), but for now, focus on the clear cases:",
      examples: [
        "MOVEMENT/LOCATION: Je suis allé au cinéma (I went to the cinema) - ÊTRE",
        "ACTIONS: J'ai regardé un film (I watched a movie) - AVOIR", 
        "STATE CHANGE: Elle est née en France (She was born in France) - ÊTRE",
        "HAVING/DOING: Elle a eu un bébé (She had a baby) - AVOIR",
        "MEMORY TIP: If it's movement or life change, probably être"
      ]
    }
  ],

  vocabulary: [
    { french: "aller", english: "to go", category: "etre-verbs", example: "Je suis allé au cinéma hier soir." },
    { french: "venir", english: "to come", category: "etre-verbs", example: "Tu es venu à la fête samedi dernier." },
    { french: "partir", english: "to leave", category: "etre-verbs", example: "Il est parti en voyage d'affaires." },
    { french: "arriver", english: "to arrive", category: "etre-verbs", example: "Nous sommes arrivés à la gare à l'heure." },
    { french: "rester", english: "to stay", category: "etre-verbs", example: "Je suis resté à la maison ce weekend." },
    { french: "rentrer", english: "to come/go home", category: "etre-verbs", example: "Elle est rentrée tard hier soir." },
    { french: "monter", english: "to go up/get on", category: "etre-verbs", example: "Nous sommes montés dans le train." },
    { french: "naître", english: "to be born", category: "etre-verbs", example: "Je suis né en France en 1990." },
    { french: "mourir", english: "to die", category: "etre-verbs", example: "Mon grand-père est mort l'année dernière." },
    { french: "le weekend", english: "weekend", category: "time", example: "Le weekend, je me repose et je vois mes amis." },
    { french: "vendredi", english: "Friday", category: "days", example: "Vendredi soir, nous sortons au restaurant." },
    { french: "dimanche", english: "Sunday", category: "days", example: "Dimanche, je vais à l'église avec ma famille." },
    { french: "le train", english: "train", category: "transport", example: "Le train est rapide et confortable." },
    { french: "là-bas", english: "there/over there", category: "location", example: "Mon bureau est là-bas, au bout de la rue." },
    { french: "combien de temps", english: "how long", category: "time-expressions", example: "Combien de temps restes-tu à Paris ?" },
    { french: "deux jours", english: "two days", category: "time", example: "Je reste à Lyon pendant deux jours." },
    { french: "vers", english: "around/towards", category: "prepositions", example: "Je rentre vers 18h00 tous les soirs." },
    { french: "né(e)", english: "born", category: "past-participles", example: "Je suis né en janvier, il y a 25 ans." },
    { french: "mort(e)", english: "died", category: "past-participles", example: "Mon arrière-grand-mère est morte en 1985." },
    { french: "souvent", english: "often", category: "frequency", example: "Je vais souvent au cinéma le weekend." }
  ],

  culturalNotes: [
    {
      title: "French Train Travel",
      content: "The French train system (SNCF) is highly developed. Lyon is about 2 hours from Paris by TGV (high-speed train). 'Monter dans le train' (getting on the train) is the standard expression. Weekend trips to visit family are very common."
    },
    {
      title: "Family Visits in France",
      content: "French families often visit grandparents' hometowns even after they've passed away, maintaining connections to ancestral places. 'Rentrer' (to come/go home) is used for returning to one's primary residence."
    }
  ],

  exercises: [
    {
      id: "ex1",
      type: "multiple_choice" as const,
      question: "How do you say 'She went to Lyon' in French?",
      options: [
        "Elle est allée à Lyon",
        "Elle a allé à Lyon",
        "Elle est aller à Lyon",
        "Elle a allée à Lyon"
      ],
      correct_answer: "Elle est allée à Lyon",
      explanation: "Use être + agreement: Elle est allée (feminine singular adds -e)."
    },

    {
      id: "ex2",
      type: "conjugation" as const,
      question: "Practice the conjugation of 'être + allé' (to go in past tense)",
      verb: "être + allé",
      translations: {
        "je": "I went (masc: allé / fem: allée)",
        "tu": "you went (masc: allé / fem: allée)",
        "il": "he went (allé)",
        "elle": "she went (allée)",
        "nous": "we went (masc: allés / fem: allées)",
        "vous": "you went (masc: allés / fem: allées)",
        "ils": "they went (allés)",
        "elles": "they went (allées)"
      },
      correct_answer: "conjugation",
      explanation: "Practice the complete conjugation pattern with être + allé, including agreement rules."
    },
    {
      id: "ex3",
      type: "conjugation" as const,
      question: "Practice the conjugation of 'être + parti' (to leave in past tense)",
      verb: "être + parti",
      translations: {
        "je": "I left (masc: parti / fem: partie)",
        "tu": "you left (masc: parti / fem: partie)",
        "il": "he left (parti)",
        "elle": "she left (partie)",
        "nous": "we left (masc: partis / fem: parties)",
        "vous": "you left (masc: partis / fem: parties)",
        "ils": "they left (partis)",
        "elles": "they left (parties)"
      },
      correct_answer: "conjugation",
      explanation: "Practice the complete conjugation pattern with être + parti, including agreement rules."
    },

    {
      id: "ex4",
      type: "matching" as const,
      question: "Match être verbs with their past participles:",
      pairs: [
        { french: "aller", english: "allé(e)" },
        { french: "venir", english: "venu(e)" },
        { french: "partir", english: "parti(e)" },
        { french: "rester", english: "resté(e)" },
        { french: "naître", english: "né(e)" }
      ],
      correct_answer: "matching",
      explanation: "Learn the essential être verb past participles for daily conversation."
    },

    {
      id: "ex5",
      type: "fill_blank" as const,
      question: "Complete with the correct passé composé form: Hier, je _____ _____ à Lyon. (I went to Lyon)",
      correct_answer: ["suis", "allé(e)"],
      explanation: "Use être + agreement: je suis allé(e) - add -e if feminine."
    },

    {
      id: "ex6",
      type: "translation" as const,
      question: "Translate: 'We went to Lyon Friday and came back Sunday. My sister stayed there.'",
      correct_answer: "nous sommes allés à Lyon vendredi et nous sommes rentrés dimanche. ma sœur est restée là-bas",
      explanation: "Use être for movement verbs: sommes allés, sommes rentrés, est restée.",
      hints: ["nous sommes allés = we went", "et = and", "rentrés = came back", "ma sœur est restée = my sister stayed"]
    },

    {
      id: "ex7",
      type: "speaking" as const,
      question: "Practice saying: 'Je suis allé(e) à Paris' (I went to Paris)",
      correct_answer: "speaking",
      explanation: "Focus on the pronunciation: 'zhuh swee zah-LAY ah pah-REE'",
      audio_prompt: "Je suis allé(e) à Paris"
    },

    {
      id: "ex8",
      type: "matching" as const,
      question: "Match the French past tense expressions with their English meanings:",
      pairs: [
        { french: "je suis allé(e)", english: "I went" },
        { french: "tu es venu(e)", english: "you came" },
        { french: "il est parti", english: "he left" },
        { french: "nous sommes restés", english: "we stayed" },
        { french: "elles sont nées", english: "they were born (feminine)" }
      ],
      correct_answer: "matching",
      explanation: "Practice recognizing être verb forms in context with proper agreement."
    }
  ]
}

export default function Lesson15() {
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
        <p className="text-lg text-gray-600">Master the essential concepts of passé composé with être</p>
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
        <p className="text-lg text-gray-600">Practice your passé composé with être skills</p>
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
              <AudioPlayer  text="Practice the dialogue with the audio player" />
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
