'use client'

import { useState } from 'react'
import { DialogueSection } from '../../../../../components/lessons/DialogueSection'
import InteractiveExercise from '../../../../../components/lessons/InteractiveExercise'
import ExerciseProgress from '../../../../../components/lessons/ExerciseProgress'
import { AudioPlayer } from '../../../../../components/lessons/AudioPlayer'
import Link from 'next/link'

type Section = 'dialogue' | 'grammar' | 'vocabulary' | 'exercises'

const lessonData = {
  id: 18,
  title: "Advanced Future Planning & Time Expressions",
  level: "A2",
  description: "Master complex future planning with detailed time expressions, conditional plans, and professional/personal goal setting",
  
  dialogue: {
    title: "Planning a Study Abroad Year",
    context: "Océane and Romain discuss Océane's plans to study abroad in Canada, covering timing, duration, and family support",
    speakers: ["Océane", "Romain"],
    exchanges: [
      {
        speaker: "Océane",
        french: "Romain, j'ai une grande nouvelle ! L'année prochaine, je vais étudier au Canada.",
        english: "Romain, I have big news! Next year, I'm going to study in Canada.",
        pronunciation: "oh-say-AHN, zhay un grahn-duh noo-VEL! lah-NAY pro-SHEN, zhuh vay zay-tu-dee-AY oh kah-nah-DAH"
      },
      {
        speaker: "Romain",
        french: "Vraiment ? Quand est-ce que tu vas partir exactement ?",
        english: "Really? When exactly are you going to leave?",
        pronunciation: "vray-MAHN? kahn es-kuh tu vah par-TEER eg-zak-tuh-MAHN?"
      },
      {
        speaker: "Océane",
        french: "Je vais partir au mois de septembre. D'abord, je vais passer l'été ici pour me préparer.",
        english: "I'm going to leave in September. First, I'm going to spend the summer here to prepare myself.",
        pronunciation: "zhuh vay par-TEER oh mwah duh sep-TAHN-bruh. dah-BOR, zhuh vay pah-SAY lay-TAY ee-SEE poor muh pray-pah-RAY"
      },
      {
        speaker: "Romain",
        french: "Et tu vas rester combien de temps là-bas ?",
        english: "And how long are you going to stay there?",
        pronunciation: "ay tu vah res-TAY kom-bee-AHN duh TAHN lah-BAH?"
      },
      {
        speaker: "Océane",
        french: "Je vais y rester toute l'année universitaire. Si tout va bien, je vais peut-être prolonger.",
        english: "I'm going to stay there the whole academic year. If everything goes well, I might extend.",
        pronunciation: "zhuh vay zee res-TAY toot lah-NAY u-nee-vair-see-TAIR. see too vah bee-AHN, zhuh vay puh-TEH-truh pro-lohn-ZHAY"
      },
      {
        speaker: "Romain",
        french: "Formidable ! Qu'est-ce que tu vas étudier exactement ?",
        english: "Wonderful! What exactly are you going to study?",
        pronunciation: "for-mee-DAHBL! kes-kuh tu vay zay-tu-dee-AY eg-zak-tuh-MAHN?"
      },
      {
        speaker: "Océane",
        french: "Je vais me spécialiser en marketing international. Après mes études, j'espère travailler dans une entreprise multinationale.",
        english: "I'm going to specialize in international marketing. After my studies, I hope to work in a multinational company.",
        pronunciation: "zhuh vay muh spay-see-ah-lee-ZAY ahn mar-kuh-TING an-tair-nah-see-oh-NAHL. ah-PRAY may zay-TUD, zhes-PAIR trah-vah-YAY dahn zun ahn-truh-PREEZ mul-tee-nah-see-oh-NAHL"
      },
      {
        speaker: "Romain",
        french: "Et tes parents ? Qu'est-ce qu'ils en pensent ?",
        english: "And your parents? What do they think about it?",
        pronunciation: "ay tay pah-RAHN? kes-keel zahn PAHNSS?"
      },
      {
        speaker: "Océane",
        french: "Au début, ils étaient inquiets. Mais maintenant, ils vont m'aider financièrement. Ils comprennent que c'est important pour mon avenir.",
        english: "At first, they were worried. But now, they're going to help me financially. They understand it's important for my future.",
        pronunciation: "oh day-BU, eel zay-tay an-kee-AY. may man-tuh-NAHN, eel vohn may-DAY fee-nahn-see-AIR-mahn. eel kom-PRAHN-nuh kuh say am-por-TAHN poor mohn nah-vuh-NEER"
      }
    ]
  },

  grammarPoints: [
    {
      title: "Complex Time Expressions for Future Planning",
      explanation: "To discuss detailed future plans, you need precise time expressions. French has specific ways to talk about exact timing, duration, and sequence of future events. These expressions make your planning conversations sound natural and professional:",
      examples: [
        "EXACT TIMING: au mois de septembre (in the month of September), à la fin de l'année (at the end of the year)",
        "DURATION: toute l'année (all year), pendant six mois (for six months), jusqu'en décembre (until December)",
        "SEQUENCE: d'abord (first), ensuite (then), après ça (after that), finalement (finally)",
        "ACADEMIC: l'année universitaire (academic year), le semestre (semester), les vacances scolaires (school holidays)",
        "PROFESSIONAL: à partir de janvier (starting from January), d'ici un an (within a year)"
      ]
    },
    {
      title: "Conditional Future Plans with SI (If)",
      explanation: "Real future planning often involves conditions - 'if this happens, then I will do that.' French uses 'si' (if) + present tense, followed by futur proche to express conditional future plans. This is essential for realistic planning conversations:",
      examples: [
        "STRUCTURE: Si + present tense, + futur proche",
        "Si tout va bien, je vais prolonger (If everything goes well, I'm going to extend)",
        "Si j'ai assez d'argent, je vais voyager (If I have enough money, I'm going to travel)",
        "Si tu finis tes études, tu vas chercher un emploi ? (If you finish your studies, are you going to look for a job?)",
        "NOTE: Use present tense after 'si', not future tense"
      ]
    },
    {
      title: "Expressing Hopes, Intentions, and Possibilities",
      explanation: "Beyond simple future plans, French has nuanced ways to express different levels of certainty about future events. These expressions show whether something is definite, hoped for, or just possible:",
      examples: [
        "HOPE: J'espère + infinitive = I hope to: J'espère réussir (I hope to succeed)",
        "INTENTION: J'ai l'intention de + infinitive = I intend to: J'ai l'intention de partir (I intend to leave)",
        "POSSIBILITY: Je vais peut-être + infinitive = I might: Je vais peut-être déménager (I might move)",
        "PLANNING: Je prévois de + infinitive = I plan to: Je prévois de voyager (I plan to travel)",
        "CERTAINTY LEVELS: définitivement (definitely), probablement (probably), peut-être (maybe)"
      ]
    },
    {
      title: "Professional and Academic Future Vocabulary",
      explanation: "When discussing career and education plans, French has specific vocabulary that's essential for professional conversations. These terms are commonly used in job interviews, academic discussions, and career planning:",
      examples: [
        "EDUCATION: se spécialiser en (to specialize in), faire des études de (to study), obtenir un diplôme (to get a degree)",
        "CAREER: chercher un emploi (to look for a job), travailler dans une entreprise (to work in a company), faire carrière (to build a career)",
        "GOALS: mon objectif (my goal), mon avenir (my future), mes projets professionnels (my professional plans)",
        "SUPPORT: aider financièrement (to help financially), soutenir (to support), encourager (to encourage)"
      ]
    },
    {
      title: "Talking About Other People's Future Plans",
      explanation: "To discuss what others are going to do or to report their plans, you need to shift perspectives and use appropriate pronouns. This is essential for social conversations and professional discussions:",
      examples: [
        "REPORTING: Il va étudier au Canada (He's going to study in Canada)",
        "ASKING ABOUT OTHERS: Qu'est-ce qu'elle va faire ? (What is she going to do?)",
        "FAMILY PLANS: Mes parents vont m'aider (My parents are going to help me)",
        "GROUP PLANS: Nous allons tous voyager ensemble (We're all going to travel together)",
        "OPINIONS: Qu'est-ce qu'ils en pensent ? (What do they think about it?)"
      ]
    }
  ],

  vocabulary: [
    { french: "une grande nouvelle", english: "big news", category: "expressions", example: "J'ai une grande nouvelle à vous annoncer !" },
    { french: "l'année prochaine", english: "next year", category: "time", example: "L'année prochaine, je vais étudier au Canada." },
    { french: "exactement", english: "exactly", category: "adverbs", example: "C'est exactement ce que je veux faire." },
    { french: "au mois de", english: "in the month of", category: "time-expressions", example: "Au mois de septembre, je commence mes études." },
    { french: "septembre", english: "September", category: "months", example: "Septembre est le mois de la rentrée scolaire." },
    { french: "se préparer", english: "to prepare oneself", category: "reflexive-verbs", example: "Je me prépare pour ce grand changement." },
    { french: "toute l'année", english: "all year", category: "time", example: "Je vais rester au Canada toute l'année universitaire." },
    { french: "universitaire", english: "academic/university", category: "education", example: "L'année universitaire commence en septembre." },
    { french: "si tout va bien", english: "if everything goes well", category: "conditional", example: "Si tout va bien, je vais prolonger mon séjour." },
    { french: "peut-être", english: "maybe/perhaps", category: "possibility", example: "Peut-être que je vais me spécialiser en commerce international." },
    { french: "prolonger", english: "to extend", category: "verbs", example: "Je vais prolonger mes études d'un an." },
    { french: "se spécialiser en", english: "to specialize in", category: "education", example: "Je vais me spécialiser en marketing international." },
    { french: "international", english: "international", category: "adjectives", example: "Le commerce international est très intéressant." },
    { french: "après", english: "after", category: "time-expressions", example: "Après mes études, je vais chercher un travail." },
    { french: "les études", english: "studies", category: "education", example: "Mes études me passionnent vraiment." },
    { french: "espérer", english: "to hope", category: "verbs", example: "J'espère trouver un bon emploi après mes études." },
    { french: "une entreprise", english: "company", category: "business", example: "Je voudrais travailler dans une entreprise multinationale." },
    { french: "multinationale", english: "multinational", category: "business", example: "Les entreprises multinationales offrent de bonnes opportunités." },
    { french: "qu'est-ce qu'ils en pensent", english: "what do they think about it", category: "expressions", example: "Qu'est-ce qu'ils en pensent de mon projet ?" },
    { french: "au début", english: "at first", category: "time-expressions", example: "Au début, mes parents étaient inquiets." },
    { french: "inquiet/inquiète", english: "worried", category: "emotions", example: "Maintenant, ils ne sont plus inquiets du tout." },
    { french: "maintenant", english: "now", category: "time", example: "Maintenant, ils comprennent et m'aident financièrement." },
    { french: "aider financièrement", english: "to help financially", category: "expressions", example: "Mes parents m'aident financièrement pour mes études." },
    { french: "comprendre", english: "to understand", category: "verbs", example: "Je comprends leurs inquiétudes maintenant." },
    { french: "l'avenir", english: "future", category: "time", example: "L'avenir s'annonce prometteur pour moi." }
  ],

  culturalNotes: [
    {
      title: "Study Abroad in French Culture",
      content: "Studying abroad ('étudier à l'étranger') is highly valued in France. Programs like Erasmus are very popular. Canada is a preferred destination due to shared francophone culture. Parents often initially worry but usually support educational opportunities."
    },
    {
      title: "French Academic and Career Planning",
      content: "French students often specialize early ('se spécialiser'). International experience is considered essential for career advancement. Family financial support for education is common and culturally expected."
    }
  ],

  exercises: [
    {
      id: "ex1",
      type: "multiple_choice" as const,
      question: "How do you say 'If everything goes well, I'm going to extend' in French?",
      options: [
        "Si tout va bien, je vais prolonger",
        "Si tout ira bien, je vais prolonger",
        "Quand tout va bien, je vais prolonger",
        "Si tout va bien, je prolongerai"
      ],
      correct_answer: "Si tout va bien, je vais prolonger",
      explanation: "Use present tense after 'si': Si tout va bien, je vais prolonger."
    },

    {
      id: "ex2",
      type: "matching" as const,
      question: "Complete these conditional future plans:",
      pairs: [
        { french: "Si j'ai assez d'argent", english: "je vais voyager en Europe" },
        { french: "Si tu finis tes études", english: "tu vas chercher un emploi" },
        { french: "Si nous réussissons nos examens", english: "nous allons faire la fête" }
      ],
      correct_answer: "matching",
      explanation: "Practice conditional planning with si + present tense."
    },

    {
      id: "ex3",
      type: "matching" as const,
      question: "Match complex time expressions with appropriate contexts:",
      pairs: [
        { french: "au mois de septembre", english: "starting university" },
        { french: "toute l'année universitaire", english: "study abroad duration" },
        { french: "à la fin de l'année", english: "graduation time" },
        { french: "d'ici un an", english: "career goal timeline" },
        { french: "pendant six mois", english: "internship duration" }
      ],
      correct_answer: "matching",
      explanation: "Learn to use complex time expressions in context."
    },

    {
      id: "ex4",
      type: "multiple_choice" as const,
      question: "Choose the appropriate expression for each level of certainty:",
      options: [
        "peut-être",
        "probablement", 
        "définitivement"
      ],
      correct_answer: "définitivement",
      explanation: "Use 'définitivement' for definite plans.",
      context: "Je vais _____ étudier au Canada. (definitely)"
    },

    {
      id: "ex5",
      type: "fill_blank" as const,
      question: "Complete with appropriate academic/professional terms: Je vais me _____ en marketing international. (specialize)",
      correct_answer: ["spécialiser"],
      explanation: "Use 'se spécialiser en' for academic specialization."
    },

    {
      id: "ex6",
      type: "translation" as const,
      question: "Translate: 'Next year, I'm going to study abroad. If everything goes well, I might extend my stay.'",
      correct_answer: "l'année prochaine, je vais étudier à l'étranger. si tout va bien, je vais peut-être prolonger mon séjour",
      explanation: "Use futur proche and conditional expressions with si.",
      hints: ["l'année prochaine = next year", "à l'étranger = abroad", "si tout va bien = if everything goes well", "peut-être = maybe", "prolonger = extend"]
    },

    {
      id: "ex7",
      type: "multiple_choice" as const,
      question: "Choose the correct expression for each context:",
      options: [
        "espère",
        "ai l'intention de",
        "vais peut-être"
      ],
      correct_answer: "espère",
      explanation: "Use 'espérer' to express hopes and wishes.",
      context: "J'_____ réussir mes examens. (expressing a strong wish for the future)"
    },

    {
      id: "ex8",
      type: "matching" as const,
      question: "Report what these people are going to do:",
      pairs: [
        { french: "Marie dit: 'Je vais étudier en Allemagne'", english: "Marie va étudier en Allemagne" },
        { french: "Mes parents disent: 'Nous allons t'aider financièrement'", english: "Mes parents vont m'aider financièrement" },
        { french: "Paul dit: 'Je vais peut-être prolonger'", english: "Paul va peut-être prolonger" }
      ],
      correct_answer: "matching",
      explanation: "Practice reporting others' future plans."
    }
  ]
}

export default function Lesson18() {
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
        <p className="text-lg text-gray-600">Master advanced future planning concepts and conditional expressions</p>
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
        <p className="text-lg text-gray-600">Essential words and expressions for advanced future planning</p>
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
        <p className="text-lg text-gray-600">Understanding French culture and academic planning</p>
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
        <p className="text-lg text-gray-600">Practice your advanced future planning skills</p>
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
