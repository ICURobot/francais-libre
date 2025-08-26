'use client'

import { useState } from 'react'
import { DialogueSection } from '../../../../../components/lessons/DialogueSection'
import InteractiveExercise from '../../../../../components/lessons/InteractiveExercise'
import ExerciseProgress from '../../../../../components/lessons/ExerciseProgress'
import { AudioPlayer } from '../../../../../components/lessons/AudioPlayer'

export default function Lesson11() {
  const [currentSection, setCurrentSection] = useState<'dialogue' | 'grammar' | 'vocabulary' | 'exercises'>('dialogue')

  const [completedExercises, setCompletedExercises] = useState<string[]>([])

  const lessonData = {
    id: 11,
    title: "Essential Irregular Verbs",
    level: "A2",
    description: "Master the most important irregular verbs: aller, faire, venir, pouvoir, and vouloir for real-world communication",
    
    dialogue: {
      title: "Weekend Plans",
      context: "Camille and Julien discuss their weekend plans, including family visits and shopping trips.",
      exchanges: [
        {
          speaker: "Camille",
          french: "Salut Julien ! Qu'est-ce que tu fais ce weekend ?",
          english: "Hi Julien! What are you doing this weekend?",
          pronunciation: "sah-LU zhul-ee-AHN! kes-kuh tu fay suh week-END?"
        },
        {
          speaker: "Julien",
          french: "Je vais chez mes grands-parents samedi. Et toi ?",
          english: "I'm going to my grandparents' on Saturday. And you?",
          pronunciation: "zhuh vay shay may grahn-pah-RAHN sam-DEE. ay TWAH?"
        },
        {
          speaker: "Camille",
          french: "Moi, je veux faire du shopping avec ma sœur. Tu peux venir avec nous ?",
          english: "Me, I want to go shopping with my sister. Can you come with us?",
          pronunciation: "MWAH, zhuh vuh fair du shop-PING ah-VEK mah SUR. tu puh vuh-NEER ah-VEK NOO?"
        },
        {
          speaker: "Julien",
          french: "Je ne peux pas samedi, mais dimanche je peux. Vous voulez faire quoi exactement ?",
          english: "I can't on Saturday, but Sunday I can. What exactly do you want to do?",
          pronunciation: "zhuh nuh puh pah sam-DEE, may dee-MAHNSH zhuh puh. voo voo-LAY fair KWAH eg-zak-tuh-MAHN?"
        },
        {
          speaker: "Camille",
          french: "Nous allons au centre commercial. Ma sœur veut acheter une robe.",
          english: "We're going to the shopping center. My sister wants to buy a dress.",
          pronunciation: "noo zah-LOHN oh sahn-truh ko-mer-see-AHL. mah SUR vuh ah-shuh-TAY un ROHB"
        },
        {
          speaker: "Julien",
          french: "D'accord ! Je viens avec vous. À quelle heure vous y allez ?",
          english: "Okay! I'll come with you. What time are you going there?",
          pronunciation: "dah-KOR! zhuh vee-AHN ah-VEK VOO. ah kel UR voo zee ah-LAY?"
        },
        {
          speaker: "Camille",
          french: "Nous y allons vers 14h. Tu peux nous retrouver là-bas ?",
          english: "We're going there around 2 PM. Can you meet us there?",
          pronunciation: "noo zee ah-LOHN vair ka-TORZ UR. tu puh noo ruh-troo-VAY lah-BAH?"
        },
        {
          speaker: "Julien",
          french: "Parfait ! Je fais mes devoirs le matin et je vous rejoins l'après-midi.",
          english: "Perfect! I'll do my homework in the morning and join you in the afternoon.",
          pronunciation: "par-FAY! zhuh fay may duh-VWAHR luh mah-TAHN ay zhuh voo ruh-ZHWAHN lah-pray-mee-DEE"
        }
      ]
    },

    grammarPoints: [
      {
        title: "What Are Irregular Verbs?",
        explanation: "Up until now, you've learned regular -er verbs that follow predictable patterns (parler → je parle, tu parles). Irregular verbs are different - they don't follow standard rules and often change their stems completely. However, they're among the most frequently used verbs in French, so mastering them is essential for real communication:",
        examples: [
          "REGULAR -er PATTERN: parler → je parle, tu parles, il parle (predictable endings)",
          "IRREGULAR PATTERN: aller → je vais, tu vas, il va (completely different stems)",
          "WHY LEARN THEM: The 5 verbs in this lesson appear in 60% of daily French conversations",
          "MEMORIZATION TIP: Learn each conjugation as a complete set, not individual forms",
          "DON'T WORRY: Though irregular, these verbs follow their own internal patterns once memorized"
        ]
      },
      {
        title: "ALLER (to go) - Complete Conjugation",
        explanation: "This is the most important verb for expressing movement and future plans. Notice how the stem completely changes from 'aller' - this is why it's called irregular. The forms je vais, tu vas, il va don't look anything like the infinitive 'aller':",
        examples: [
          "PRESENT: je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont",
          "STEM CHANGES: vais/vas/va (completely different from 'aller'), allons/allez (closer to infinitive), vont (unique form)",
          "USAGE: Je vais au cinéma (I'm going to the cinema), Tu vas où ? (Where are you going?)",
          "FUTURE: Je vais acheter (I'm going to buy) - this creates the futur proche (near future)",
          "LOCATION: aller à + place (Je vais à Paris), aller chez + person (Je vais chez Marie)"
        ]
      },
      {
        title: "FAIRE (to do/make) - Complete Conjugation", 
        explanation: "This extremely versatile irregular verb means both 'to do' and 'to make.' The stem 'fai-' appears in most forms, but notice the irregular 'nous faisons' and 'ils font.' French uses 'faire' in many expressions where English uses different verbs:",
        examples: [
          "PRESENT: je fais, tu fais, il/elle fait, nous faisons, vous faites, ils/elles font",
          "STEM PATTERN: fais/fais/fait (regular pattern), faisons/faites (irregular forms), font (unique)",
          "ACTIVITIES: faire du sport (to do sports), faire du shopping (to go shopping)",
          "EXPRESSIONS: faire ses devoirs (to do homework), faire la cuisine (to cook)",
          "WEATHER: Il fait beau (It's nice weather), Il fait froid (It's cold)"
        ]
      },
      {
        title: "VENIR (to come) - Complete Conjugation",
        explanation: "This irregular verb is essential for invitations and describing arrivals. The stem changes from 'ven-' to 'vien-' in singular forms, and notice the double 'n' in 'ils viennent.' This verb is the opposite of 'aller' (to go):",
        examples: [
          "PRESENT: je viens, tu viens, il/elle vient, nous venons, vous venez, ils/elles viennent",
          "STEM PATTERN: viens/viens/vient (stem becomes 'vien'), venons/venez (back to 'ven'), viennent (double n)",
          "USAGE: Tu viens avec nous ? (Are you coming with us?), Je viens ! (I'm coming!)",
          "ORIGIN: Je viens de Paris (I come from Paris) - expressing where you're from",
          "RECENT PAST: Je viens de manger (I just ate) - expressing something you just did"
        ]
      },
      {
        title: "POUVOIR (can/to be able) & VOULOIR (to want) - Modal Verbs",
        explanation: "These are called 'modal verbs' because they modify the meaning of other verbs. They express ability (pouvoir = can) and desire (vouloir = want). Both are irregular but follow similar patterns to each other. They're almost always followed by another verb in infinitive form:",
        examples: [
          "POUVOIR: je peux, tu peux, il/elle peut, nous pouvons, vous pouvez, ils/elles peuvent",
          "VOULOIR: je veux, tu veux, il/elle veut, nous voulons, vous voulez, ils/elles veulent",
          "PATTERN SIMILARITY: Both use 'eu' sound in singular (peux/veux), 'ou' sound in plural (pouvons/voulons)",
          "USAGE: Je peux venir (I can come), Tu veux partir ? (Do you want to leave?)",
          "POLITENESS: Je voudrais... (I would like...) - more polite than 'je veux' in requests"
        ]
      }
    ],

    vocabulary: [
      { french: "aller", english: "to go", category: "irregular-verbs", example: "Je vais au cinéma ce soir." },
      { french: "faire", english: "to do/make", category: "irregular-verbs", example: "Tu fais tes devoirs maintenant ?" },
      { french: "venir", english: "to come", category: "irregular-verbs", example: "Elle vient avec nous au restaurant." },
      { french: "pouvoir", english: "can/to be able", category: "irregular-verbs", example: "Je peux t'aider avec tes devoirs." },
      { french: "vouloir", english: "to want", category: "irregular-verbs", example: "Tu veux aller au centre commercial ?" },
      { french: "le weekend", english: "weekend", category: "time", example: "Le weekend, je vais chez mes grands-parents." },
      { french: "samedi", english: "Saturday", category: "days", example: "Samedi, nous faisons du shopping." },
      { french: "dimanche", english: "Sunday", category: "days", example: "Dimanche, je reste à la maison." },
      { french: "chez", english: "at/to someone's house", category: "prepositions", example: "Je vais chez Marie ce soir." },
      { french: "avec", english: "with", category: "prepositions", example: "Viens avec nous au cinéma !" },
      { french: "exactement", english: "exactly", category: "adverbs", example: "C&apos;est exactement ce que je veux !" },
      { french: "vers", english: "around/towards", category: "prepositions", example: "Je vais vers le centre-ville." },
      { french: "le centre commercial", english: "shopping center", category: "places", example: "Le centre commercial est ouvert jusqu'à 20h." },
      { french: "acheter", english: "to buy", category: "verbs", example: "Je vais acheter une nouvelle robe." },
      { french: "la robe", english: "dress", category: "clothing", example: "Cette robe est très belle !" },
      { french: "retrouver", english: "to meet/find again", category: "verbs", example: "On se retrouve devant le cinéma ?" },
      { french: "rejoindre", english: "to join", category: "verbs", example: "Je vais rejoindre mes amis au café." },
      { french: "les devoirs", english: "homework", category: "education", example: "Mes devoirs sont difficiles aujourd'hui." },
      { french: "le matin", english: "morning", category: "time", example: "Le matin, je bois du café." },
      { french: "l'après-midi", english: "afternoon", category: "time", example: "L'après-midi, je fais du sport." }
    ],

    culturalNotes: [
      {
        title: "French Weekend Culture",
        content: "French weekends often involve family visits ('aller chez les grands-parents') and shopping trips to 'centres commerciaux'. Sunday shopping is limited in many French cities, with most stores closed."
      },
      {
        title: "Politeness with 'vouloir'",
        content: "While 'je veux' (I want) is grammatically correct, French speakers often prefer 'je voudrais' (I would like) for politeness, especially when making requests in shops or restaurants."
      }
    ],

    exercises: [
      {
        id: "exercise-1",
        type: "multiple_choice" as const,
        question: "How do you say 'We are going to the cinema' in French?",
        options: [
          "Nous allons au cinéma",
          "Nous venons au cinéma",
          "Nous faisons au cinéma", 
          "Nous pouvons au cinéma"
        ],
        correct_answer: "Nous allons au cinéma",
        explanation: "Use 'aller' (to go) for movement: Nous allons au cinéma."
      },

      {
        id: "exercise-2",
        type: "conjugation" as const,
        verb: "aller",
        translations: {
          "je": "I go",
          "tu": "you go",
          "il/elle": "he/she goes",
          "nous": "we go",
          "vous": "you go (formal/plural)",
          "ils/elles": "they go"
        },
        question: "Conjugate the verb 'aller' (to go)",
        correct_answer: "je vais, tu vas, il va, nous allons, vous allez, ils vont",
        explanation: "The verb 'aller' is irregular and has unique forms for each person."
      },
      {
        id: "exercise-3",
        type: "conjugation" as const,
        verb: "faire",
        translations: {
          "je": "I do/make",
          "tu": "you do/make", 
          "il/elle": "he/she does/makes",
          "nous": "we do/make",
          "vous": "you do/make (formal/plural)",
          "ils/elles": "they do/make"
        },
        question: "Conjugate the verb 'faire' (to do/make)",
        correct_answer: "je fais, tu fais, il fait, nous faisons, vous faites, ils font",
        explanation: "The verb 'faire' is irregular with unique forms for nous and ils."
      },

      {
        id: "exercise-4",
        type: "matching" as const,
        question: "Match the irregular verb forms:",
        pairs: [
          { french: "aller", english: "nous allons" },
          { french: "faire", english: "vous faites" },
          { french: "venir", english: "ils viennent" },
          { french: "pouvoir", english: "je peux" },
          { french: "vouloir", english: "tu veux" }
        ],
        correct_answer: "aller-nous allons, faire-vous faites, venir-ils viennent, pouvoir-je peux, vouloir-tu veux",
        explanation: "These are the correct forms for each irregular verb."
      },

      {
        id: "exercise-5",
        type: "fill_blank" as const,
        question: "Complete with the correct irregular verb forms: Je _____ faire du shopping. (want) → Tu _____ venir avec nous ? (can) → Nous _____ chez nos amis. (are going)",
        options: ["veux", "peux", "vais", "fais", "venons", "faisons", "allons", "pouvons"],
        correct_answer: ["veux", "peux", "allons"],
        explanation: "Use the correct irregular verb forms: 'veux' for want, 'peux' for can, 'allons' for go."
      },

      {
        id: "exercise-6",
        type: "translation" as const,
        question: "Translate: 'I can't come Saturday, but I want to come Sunday'",
        correct_answer: "je ne peux pas venir samedi, mais je veux venir dimanche",
        hints: ["je ne peux pas = I can't", "venir = to come", "mais = but", "je veux = I want"],
        explanation: "Use the correct irregular verbs: 'peux' for can and 'veux' for want."
      },

      {
        id: "exercise-7",
        type: "fill_blank" as const,
        question: "Complete this mini-dialogue with appropriate irregular verbs: Qu'est-ce que tu _____ ce soir ? (do) → Je _____ au restaurant avec ma famille. (go) → Tu _____ venir avec nous ? (want)",
        options: ["fais", "vais", "veux", "peux", "allons", "faisons"],
        correct_answer: ["fais", "vais", "veux"],
        explanation: "Use the correct irregular verbs: 'fais' for do, 'vais' for go, 'veux' for want."
      },

      {
        id: "exercise-8",
        type: "multiple_choice" as const,
        question: "Choose the most appropriate irregular verb: Qu'est-ce que tu _____ ce weekend ? (asking about activities)",
        options: ["fais", "vas", "viens", "peux"],
        correct_answer: "fais",
        explanation: "Use 'faire' for activities: What do you do/What are you doing?"
      },
      {
        id: "exercise-9",
        type: "multiple_choice" as const,
        question: "Choose the most appropriate irregular verb: Tu _____ avec nous au cinéma ? (inviting someone)",
        options: ["fais", "vas", "viens", "peux"],
        correct_answer: "viens",
        explanation: "Use 'venir' for invitations: Are you coming with us?"
      },
      {
        id: "exercise-10",
        type: "multiple_choice" as const,
        question: "Choose the most appropriate irregular verb: Nous _____ à Paris demain. (expressing movement)",
        options: ["faisons", "allons", "venons", "pouvons"],
        correct_answer: "allons",
        explanation: "Use 'aller' for going to places: We're going to Paris."
      },

      {
        id: "exercise-11",
        type: "multiple_choice" as const,
        question: "Which of these verbs are irregular? Select all that apply.",
        options: ["aller", "parler", "faire", "regarder", "venir", "écouter", "pouvoir", "danser"],
        correct_answer: ["aller", "faire", "venir", "pouvoir"],
        explanation: "The irregular verbs are 'aller', 'faire', 'venir', and 'pouvoir'. The others follow regular patterns."
      }
    ],

    audioFiles: {
      dialogue: "/audio/lesson11/dialogue.mp3",
      vocabulary: "/audio/lesson11/vocabulary.mp3"
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
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Grammar Points</h2>
        <p className="text-lg text-gray-600">Master the essential irregular verbs that power French communication</p>
      </div>
      
      {lessonData.grammarPoints.map((point, index) => (
        <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-[20px] border-l-4 border-blue-400 shadow-[inset_0_8px_32px_rgba(59,130,246,0.1),0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_8px_32px_rgba(59,130,246,0.15),0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02]">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{point.title}</h3>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">{point.explanation}</p>
          <div className="space-y-3">
            {point.examples.map((example, idx) => (
              <div key={idx} className="bg-blue-50 p-4 rounded-[12px] border border-blue-200">
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
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-[12px] text-sm font-medium">
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



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 relative overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-200/10 rounded-[48px] blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/10 rounded-[40px] blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-200/10 rounded-[32px] blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-6 py-3 rounded-[20px] font-medium border border-blue-200/50 mb-4">
            <span className="mr-2">📚</span>
            Lesson 11 - A2 Level
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{lessonData.title}</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">{lessonData.description}</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'dialogue', label: 'Dialogue', icon: '💬' },
            { id: 'grammar', label: 'Grammar', icon: '📚' },
            { id: 'vocabulary', label: 'Vocabulary', icon: '📖' },
            { id: 'exercises', label: 'Exercises', icon: '✏️' }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => setCurrentSection(section.id as 'dialogue' | 'grammar' | 'vocabulary' | 'exercises')}
              className={`flex items-center px-6 py-3 rounded-[16px] font-medium transition-all duration-300 ${
                currentSection === section.id
                  ? 'bg-blue-500 text-white shadow-[0_8px_24px_rgba(59,130,246,0.3)]'
                  : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:scale-105'
              }`}
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <ExerciseProgress 
            totalExercises={lessonData.exercises.length}
            completedExercises={completedExercises.length}
            correctAnswers={completedExercises.length}
            onReset={() => {
              setCompletedExercises([])
            }}
          />
        </div>

        {/* Content Sections */}
        {currentSection === 'dialogue' && (
          <DialogueSection 
            dialogue={lessonData.dialogue}
          />
        )}

        {currentSection === 'grammar' && renderGrammarSection()}

        {currentSection === 'vocabulary' && renderVocabularySection()}

        {currentSection === 'exercises' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Practice Exercises</h2>
              <p className="text-lg text-gray-600">Test your understanding of irregular verbs</p>
            </div>
            
            {lessonData.exercises.map((exercise, index) => (
              <InteractiveExercise
                key={index}
                exercise={exercise}
                onComplete={() => handleExerciseComplete(`exercise-${index}`)}
                exerciseNumber={index + 1}
              />
            ))}
          </div>
        )}

        {/* Navigation Footer */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
          <a
            href="/lessons/elementary"
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
          >
            ← Back to Elementary Lessons
          </a>
          <a
            href="/lessons"
            className="flex items-center text-gray-600 hover:text-gray-700 font-medium transition-colors duration-300"
          >
            All Lessons →
          </a>
        </div>
      </div>
    </div>
  )
}
