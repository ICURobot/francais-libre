'use client'

import { useState } from 'react'
import { DialogueSection } from '../../../../../components/lessons/DialogueSection'
import InteractiveExercise from '../../../../../components/lessons/InteractiveExercise'
import ExerciseProgress from '../../../../../components/lessons/ExerciseProgress'
import { AudioPlayer } from '../../../../../components/lessons/AudioPlayer'
import Link from 'next/link'

type Section = 'dialogue' | 'grammar' | 'vocabulary' | 'exercises'

const lessonData = {
  id: 17,
  title: "Future Plans (Futur Proche)",
  level: "A2",
  description: "Learn to talk about future plans and intentions using futur proche (aller + infinitive) and essential planning vocabulary",
  
  dialogue: {
    title: "Making Summer Plans",
    context: "Claire and Julien discuss their summer plans using futur proche to express future intentions",
    speakers: ["Claire", "Julien"],
    exchanges: [
      {
        speaker: "Claire",
        french: "Salut Julien ! Qu'est-ce que tu vas faire cet été ?",
        english: "Hi Julien! What are you going to do this summer?",
        pronunciation: "sah-LU zhul-ee-AHN! kes-kuh tu vah fair set ay-TAY?"
      },
      {
        speaker: "Julien",
        french: "Je vais voyager en Espagne avec ma famille. Nous allons partir en juillet.",
        english: "I'm going to travel to Spain with my family. We're going to leave in July.",
        pronunciation: "zhuh vah voy-ah-ZHAY ahn es-PAHN-yuh ah-VEK mah fah-MEEL. noo zah-LOHN par-TEER ahn zhwee-YEH"
      },
      {
        speaker: "Claire",
        french: "Génial ! Vous allez rester combien de temps ?",
        english: "Great! How long are you going to stay?",
        pronunciation: "zhay-nee-AHL! voo zah-LAY res-TAY kom-bee-AHN duh TAHN?"
      },
      {
        speaker: "Julien",
        french: "Nous allons passer deux semaines à Barcelone. Et toi, tu as des projets ?",
        english: "We're going to spend two weeks in Barcelona. And you, do you have plans?",
        pronunciation: "noo zah-LOHN pah-SAY duh suh-MEN ah bar-suh-LOHN. ay TWAH, tu ah day pro-ZHEH?"
      },
      {
        speaker: "Claire",
        french: "Oui ! Je vais commencer un nouveau travail en août. Je suis très excitée !",
        english: "Yes! I'm going to start a new job in August. I'm very excited!",
        pronunciation: "wee! zhuh vah ko-mahn-SAY uhn noo-VOH trah-VY ahn OOT. zhuh swee tray ek-see-TAY!"
      },
      {
        speaker: "Julien",
        french: "Félicitations ! Qu'est-ce que tu vas faire comme travail ?",
        english: "Congratulations! What kind of work are you going to do?",
        pronunciation: "fay-lee-see-tah-see-OHN! kes-kuh tu vah fair kom trah-VY?"
      },
      {
        speaker: "Claire",
        french: "Je vais travailler dans une agence de marketing. Je vais apprendre beaucoup de choses nouvelles.",
        english: "I'm going to work at a marketing agency. I'm going to learn many new things.",
        pronunciation: "zhuh vah trah-vah-YAY dahn zun ah-ZHAHNS duh mar-kuh-TING. zhuh vah zah-PRAHN-druh bo-KOO duh SHOHS noo-VEL"
      },
      {
        speaker: "Julien",
        french: "Et avant août ? Tu vas prendre des vacances ?",
        english: "And before August? Are you going to take vacation?",
        pronunciation: "ay ah-VAHN OOT? tu vah PRAHN-druh day vah-KAHNS?"
      },
      {
        speaker: "Claire",
        french: "Bien sûr ! Je vais aller à la mer en juin. Je vais me détendre avant de commencer.",
        english: "Of course! I'm going to go to the sea in June. I'm going to relax before starting.",
        pronunciation: "bee-AHN SUR! zhuh vay zah-LAY ah lah MAIR ahn zhwahn. zhuh vay muh day-TAHN-druh ah-VAHN duh ko-mahn-SAY"
      }
    ]
  },

  grammarPoints: [
    {
      title: "What Is Futur Proche (Near Future)?",
      explanation: "Futur proche is the most common way to talk about future plans in French. It's much easier than the formal future tense and is used for plans, intentions, and things that are going to happen soon. The name means 'near future' but it's used for any future plans, not just immediate ones:",
      examples: [
        "STRUCTURE: Subject + aller (conjugated) + infinitive verb",
        "ENGLISH EQUIVALENT: 'going to' + verb",
        "Je vais manger = I'm going to eat (immediate or planned)",
        "Nous allons voyager = We're going to travel (any future time)",
        "KEY POINT: Use present tense of 'aller' + any verb in infinitive form"
      ]
    },
    {
      title: "Conjugating Futur Proche - Complete Pattern",
      explanation: "Since futur proche uses 'aller' + infinitive, you just need to conjugate 'aller' (which you know from Lesson 11) and add any verb in its infinitive form. The infinitive verb never changes, making this very simple to use:",
      examples: [
        "ALLER conjugation: je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont",
        "EXAMPLE with 'travailler': je vais travailler, tu vas travailler, il/elle va travailler",
        "nous allons travailler, vous allez travailler, ils/elles vont travailler",
        "ANY VERB: Je vais partir, Tu vas étudier, Elle va faire, Nous allons voir",
        "PRONUNCIATION: The infinitive keeps its normal pronunciation"
      ]
    },
    {
      title: "Time Expressions for Future Plans",
      explanation: "To talk about when your future plans will happen, you need specific time expressions. French has particular ways to express future time that are essential for making plans and discussing intentions:",
      examples: [
        "MONTHS: en juin (in June), en juillet (in July), en août (in August)",
        "SEASONS: cet été (this summer), cet hiver (this winter), ce printemps (this spring)",
        "GENERAL: demain (tomorrow), la semaine prochaine (next week), l'année prochaine (next year)",
        "SPECIFIC: dans deux jours (in two days), dans un mois (in a month)",
        "BEFORE/AFTER: avant (before), après (after), avant de + infinitive (before doing)"
      ]
    },
    {
      title: "Expressing Plans and Intentions",
      explanation: "Beyond just futur proche, French has several ways to talk about plans, projects, and intentions. These expressions make your French sound more natural and varied when discussing future activities:",
      examples: [
        "avoir des projets = to have plans: Tu as des projets ? (Do you have plans?)",
        "avoir l'intention de = to intend to: J'ai l'intention de partir (I intend to leave)",
        "prévoir de = to plan to: Nous prévoyons de voyager (We plan to travel)",
        "espérer = to hope: J'espère voir mes amis (I hope to see my friends)",
        "CASUAL: Je pense + infinitive = I'm thinking of doing"
      ]
    },
    {
      title: "Negative and Question Forms in Futur Proche",
      explanation: "To make futur proche negative or ask questions, you work with the conjugated form of 'aller' (the helper verb), not the infinitive. The infinitive always stays at the end of the sentence:",
      examples: [
        "NEGATIVE: ne + aller + pas + infinitive",
        "Je ne vais pas travailler demain (I'm not going to work tomorrow)",
        "Tu ne vas pas partir ? (Aren't you going to leave?)",
        "QUESTIONS: (Est-ce que) + subject + aller + infinitive + ?",
        "Qu'est-ce que tu vas faire ? (What are you going to do?)",
        "Où allez-vous aller ? (Where are you going to go?)"
      ]
    }
  ],

  vocabulary: [
    { french: "cet été", english: "this summer", category: "seasons", example: "Cet été, je vais voyager en Espagne." },
    { french: "voyager", english: "to travel", category: "verbs", example: "J'aime voyager dans différents pays." },
    { french: "en juillet", english: "in July", category: "months", example: "En juillet, il fait très chaud en France." },
    { french: "en août", english: "in August", category: "months", example: "En août, beaucoup de Français partent en vacances." },
    { french: "en juin", english: "in June", category: "months", example: "En juin, les étudiants passent leurs examens." },
    { french: "génial", english: "great/awesome", category: "exclamations", example: "C'est génial de partir en vacances !" },
    { french: "passer", english: "to spend (time)", category: "verbs", example: "Je vais passer deux semaines à la mer." },
    { french: "deux semaines", english: "two weeks", category: "time", example: "J'ai deux semaines de vacances en été." },
    { french: "des projets", english: "plans", category: "planning", example: "J'ai des projets intéressants pour l'avenir." },
    { french: "commencer", english: "to start/begin", category: "verbs", example: "Je vais commencer un nouveau travail en septembre." },
    { french: "nouveau/nouvelle", english: "new", category: "adjectives", example: "C'est une nouvelle opportunité passionnante." },
    { french: "excité(e)", english: "excited", category: "emotions", example: "Je suis très excité de commencer ce nouveau projet." },
    { french: "félicitations", english: "congratulations", category: "expressions", example: "Félicitations pour ton nouveau poste !" },
    { french: "une agence", english: "agency", category: "business", example: "Je travaille dans une agence de marketing." },
    { french: "le marketing", english: "marketing", category: "business", example: "Le marketing est un domaine très créatif." },
    { french: "apprendre", english: "to learn", category: "verbs", example: "J'apprends beaucoup dans ce nouveau travail." },
    { french: "avant", english: "before", category: "time-expressions", example: "Avant de partir, je dois finir mon travail." },
    { french: "prendre des vacances", english: "to take vacation", category: "expressions", example: "Je vais prendre des vacances en juillet." },
    { french: "la mer", english: "sea", category: "nature", example: "J'aime nager dans la mer Méditerranée." },
    { french: "se détendre", english: "to relax", category: "reflexive-verbs", example: "Pendant les vacances, je me détends complètement." }
  ],

  culturalNotes: [
    {
      title: "French Summer Vacation Culture",
      content: "Summer vacations ('les vacances d'été') are sacred in France. Many people take 2-4 weeks off in July or August. Spain is a popular destination for French tourists. The phrase 'prendre des vacances' is standard for taking time off work."
    },
    {
      title: "French Work Culture and Career Changes",
      content: "Starting a new job is often celebrated with 'Félicitations!' French people commonly plan career changes around vacation periods, often starting new positions in September after summer break or in January after the holidays."
    }
  ],

  exercises: [
    {
      id: "ex1",
      type: "multiple_choice" as const,
      question: "How do you say 'We are going to travel to Spain' in French?",
      options: [
        "Nous allons voyager en Espagne",
        "Nous sommes voyager en Espagne",
        "Nous avons voyager en Espagne",
        "Nous voyageons en Espagne"
      ],
      correct_answer: "Nous allons voyager en Espagne",
      explanation: "Use futur proche: nous allons (aller conjugated) + voyager (infinitive)."
    },

    {
      id: "ex2",
      type: "conjugation" as const,
      question: "Practice the conjugation of 'aller + travailler' (to be going to work)",
      verb: "aller + travailler",
      translations: {
        "je": "I am going to work (vais travailler)",
        "tu": "you are going to work (vas travailler)",
        "il/elle": "he/she is going to work (va travailler)",
        "nous": "we are going to work (allons travailler)",
        "vous": "you are going to work (allez travailler)",
        "ils/elles": "they are going to work (vont travailler)"
      },
      correct_answer: "conjugation",
      explanation: "Practice the complete conjugation pattern with aller + travailler."
    },

    {
      id: "ex3",
      type: "conjugation" as const,
      question: "Practice the conjugation of 'aller + partir' (to be going to leave)",
      verb: "aller + partir",
      translations: {
        "je": "I am going to leave (vais partir)",
        "tu": "you are going to leave (vas partir)",
        "il/elle": "he/she is going to leave (va partir)",
        "nous": "we are going to leave (allons partir)",
        "vous": "you are going to leave (allez partir)",
        "ils/elles": "they are going to leave (vont partir)"
      },
      correct_answer: "conjugation",
      explanation: "Practice the complete conjugation pattern with aller + partir."
    },

    {
      id: "ex4",
      type: "matching" as const,
      question: "Match future time expressions with appropriate plans:",
      pairs: [
        { french: "cet été", english: "je vais voyager en Espagne" },
        { french: "demain", english: "tu vas commencer ton travail" },
        { french: "la semaine prochaine", english: "nous allons voir nos amis" },
        { french: "en juillet", english: "elle va prendre des vacances" },
        { french: "l'année prochaine", english: "ils vont déménager" }
      ],
      correct_answer: "matching",
      explanation: "Learn to match time expressions with appropriate future plans."
    },

    {
      id: "ex5",
      type: "fill_blank" as const,
      question: "Complete with the correct futur proche form: Demain, je _____ _____ mes amis. (visit)",
      correct_answer: ["vais", "voir"],
      explanation: "Use futur proche: je vais (aller conjugated) + voir (infinitive)."
    },

    {
      id: "ex6",
      type: "translation" as const,
      question: "Translate: 'I'm going to start a new job in August. I'm very excited!'",
      correct_answer: "je vais commencer un nouveau travail en août. je suis très excité(e) !",
      explanation: "Use futur proche for future plans and present tense for current state.",
      hints: ["je vais commencer = I'm going to start", "nouveau = new", "en août = in August", "excité(e) = excited"]
    },

    {
      id: "ex7",
      type: "speaking" as const,
      question: "Practice saying: 'Je vais voyager cet été' (I'm going to travel this summer)",
      correct_answer: "speaking",
      explanation: "Focus on the pronunciation: 'zhuh vah voy-ah-ZHAY set ay-TAY'",
      audio_prompt: "Je vais voyager cet été"
    },

    {
      id: "ex8",
      type: "matching" as const,
      question: "Match the French futur proche expressions with their English meanings:",
      pairs: [
        { french: "je vais partir", english: "I'm going to leave" },
        { french: "tu vas faire", english: "you're going to do" },
        { french: "il va voir", english: "he's going to see" },
        { french: "nous allons manger", english: "we're going to eat" },
        { french: "elles vont étudier", english: "they're going to study" }
      ],
      correct_answer: "matching",
      explanation: "Practice recognizing futur proche forms in context."
    }
  ]
}

export default function Lesson17() {
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
        <p className="text-lg text-gray-600">Master the essential concepts of futur proche and future planning</p>
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
        <p className="text-lg text-gray-600">Practice your futur proche skills</p>
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
