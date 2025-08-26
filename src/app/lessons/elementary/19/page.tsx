'use client'

import { useState } from 'react'
import { DialogueSection } from '../../../../../components/lessons/DialogueSection'
import InteractiveExercise from '../../../../../components/lessons/InteractiveExercise'
import ExerciseProgress from '../../../../../components/lessons/ExerciseProgress'
import { AudioPlayer } from '../../../../../components/lessons/AudioPlayer'

const lessonData = {
  id: 19,
  title: "A2 Review & Future Mastery",
  level: "A2",
  description: "Master all A2 skills through comprehensive review: irregular verbs, past and future tenses, with real-world planning scenarios",
  
  dialogue: {
    title: "Life Planning Conference",
    context: "A professional development meeting where participants discuss their career goals and life plans",
    exchanges: [
      {
        speaker: "Dr. Leblanc",
        french: "Bonjour tout le monde ! Aujourd'hui, nous allons parler de vos projets d'avenir.",
        english: "Hello everyone! Today, we're going to talk about your future plans.",
        pronunciation: "bon-ZHOOR too luh MOHND! oh-zhoor-DWEE, noo zah-LOHN par-LAY duh voh pro-ZHEH dah-vuh-NEER"
      },
      {
        speaker: "Emma",
        french: "Docteur, j'ai terminé mes études l'année dernière et maintenant je travaille dans une banque.",
        english: "Doctor, I finished my studies last year and now I work in a bank.",
        pronunciation: "dok-TUR, zhay ter-mee-NAY may zay-TUD lah-NAY dair-nee-YAIR ay man-tuh-NAHN zhuh trah-VAY dahn zun BAHNK"
      },
      {
        speaker: "Dr. Leblanc",
        french: "Très bien ! Et quels sont vos objectifs pour les cinq prochaines années ?",
        english: "Very good! And what are your goals for the next five years?",
        pronunciation: "tray bee-AHN! ay kel sohn voh zob-zhek-TEEF poor lay sank pro-SHEN zah-NAY?"
      },
      {
        speaker: "Emma",
        french: "Je veux devenir directrice. Si je continue à bien travailler, je pense que c'est possible.",
        english: "I want to become a director. If I continue to work well, I think it's possible.",
        pronunciation: "zhuh vuh duh-vuh-NEER dee-rek-TREES. see zhuh kon-tee-NU ah bee-AHN trah-vah-YAY, zhuh PAHNSS kuh say po-SEE-bluh"
      },
      {
        speaker: "Lucas",
        french: "Moi, j'ai eu des difficultés l'année passée, mais maintenant ça va mieux.",
        english: "Me, I had difficulties last year, but now it's going better.",
        pronunciation: "MWAH, zhay u day dee-fee-kul-TAY lah-NAY pah-SAY, may man-tuh-NAHN sah vah mee-UH"
      },
      {
        speaker: "Dr. Leblanc",
        french: "Qu'est-ce qui s'est passé exactement ? Et comment avez-vous résolu vos problèmes ?",
        english: "What exactly happened? And how did you solve your problems?",
        pronunciation: "kes-kee say pah-SAY eg-zak-tuh-MAHN? ay ko-mahn tah-VAY ray-zo-LU voh pro-BLEM?"
      },
      {
        speaker: "Lucas",
        french: "J'ai perdu mon emploi en mars, mais j'ai utilisé ce temps pour apprendre de nouvelles compétences.",
        english: "I lost my job in March, but I used that time to learn new skills.",
        pronunciation: "zhay pair-DU mohn nahm-PLWAH ahn MARS, may zhay u-tee-lee-ZAY suh TAHN poor ah-PRAHN-druh duh noo-VEL kom-pay-TAHNSS"
      },
      {
        speaker: "Dr. Leblanc",
        french: "Excellent ! Et maintenant, que comptez-vous faire dans l'immédiat ?",
        english: "Excellent! And now, what do you plan to do immediately?",
        pronunciation: "ek-say-LAHN! ay man-tuh-NAHN, kuh kom-TAY voo fair dahn lee-may-dee-AH?"
      },
      {
        speaker: "Lucas",
        french: "Je vais d'abord finir ma formation, puis je vais chercher un nouveau poste. Si tout se passe bien, je devrais commencer en janvier.",
        english: "I'm going to first finish my training, then I'm going to look for a new position. If everything goes well, I should start in January.",
        pronunciation: "zhuh vay dah-BOR fee-NEER mah for-mah-see-OHN, pwee zhuh vay sher-SHAY uhn noo-VOH POHST. see too suh PAHS bee-AHN, zhuh duh-VRAY ko-mahn-SAY ahn zhahn-vee-AY"
      },
      {
        speaker: "Emma",
        french: "C'est formidable ! Nous avons tous les deux des projets ambitieux pour l'avenir.",
        english: "That's wonderful! We both have ambitious projects for the future.",
        pronunciation: "say for-mee-DAHBL! noo zah-VOHN too lay DUH day pro-ZHEH ahm-bee-see-UH poor lah-vuh-NEER"
      }
    ]
  },

  grammarPoints: [
    {
      title: "A2 Complete Grammar Review - Past, Present, Future",
      explanation: "You've now mastered the essential grammar foundation of French! Let's review how all the tenses work together in real communication. Being able to move fluidly between past, present, and future is what makes conversation natural and engaging:",
      examples: [
        "PAST (Passé Composé): J'ai terminé mes études (I finished my studies) - completed actions",
        "PRESENT: Je travaille maintenant (I work now) - current situations",
        "FUTURE (Futur Proche): Je vais chercher un emploi (I'm going to look for a job) - plans",
        "MIXED EXAMPLE: Hier j'ai étudié, aujourd'hui je me repose, demain je vais travailler",
        "NATURAL FLOW: Past experience → present situation → future plans"
      ]
    },
    {
      title: "Complete Irregular Verbs Mastery - A2 Level",
      explanation: "You now know the 15 most essential irregular verbs in French! These appear in over 80% of everyday conversations. Let's review them all and see how they work in past, present, and future contexts:",
      examples: [
        "MOVEMENT: aller (go), venir (come), partir (leave), sortir (go out), arriver (arrive)",
        "BASIC ACTIONS: faire (do/make), voir (see), dire (say), prendre (take), dormir (sleep)",
        "STATES: être (be), avoir (have), savoir (know facts), connaître (know people), pouvoir (can), vouloir (want)",
        "PAST: J'ai fait, tu es allé, elle a vu, nous avons pris",
        "FUTURE: Je vais faire, tu vas aller, elle va voir, nous allons prendre"
      ]
    },
    {
      title: "Professional Communication - A2 Level",
      explanation: "At A2 level, you can now discuss work, career changes, problems, and solutions in French. This vocabulary is essential for professional contexts and adult conversations about life planning:",
      examples: [
        "CAREER CHANGES: changer de travail (change jobs), perdre son emploi (lose one's job), trouver un poste (find a position)",
        "SKILLS: apprendre de nouvelles compétences (learn new skills), suivre une formation (take training)",
        "PROBLEM-SOLVING: résoudre des problèmes (solve problems), utiliser le temps (use time), surmonter les difficultés (overcome difficulties)",
        "GOALS: devenir directeur/directrice (become director), avoir des objectifs (have goals), réaliser ses projets (achieve one's plans)"
      ]
    },
    {
      title: "Connecting Ideas - Complex Sentence Structure",
      explanation: "To sound natural in French, you need to connect your ideas smoothly. A2 level requires using conjunctions and transition words to create flowing, logical speech rather than simple, choppy sentences:",
      examples: [
        "SEQUENCE: d'abord (first), puis (then), ensuite (next), enfin (finally)",
        "CONTRAST: mais (but), cependant (however), pourtant (yet)",
        "CAUSE/EFFECT: parce que (because), donc (so), c'est pourquoi (that's why)",
        "CONDITIONS: si (if), quand (when), lorsque (when)",
        "EXAMPLE: J'ai perdu mon emploi, mais j'ai utilisé ce temps pour apprendre, donc maintenant je suis plus qualifié"
      ]
    },
    {
      title: "A2 to B1 Transition - What's Next?",
      explanation: "Congratulations! You've completed A2 level French. You can now handle basic conversations about past, present, and future, express opinions, make plans, and discuss personal/professional topics. Here's what B1 level will bring:",
      examples: [
        "B1 SKILLS: Complex past tenses (imparfait vs passé composé), subjunctive mood, detailed opinions",
        "VOCABULARY: Abstract concepts, complex emotions, detailed descriptions",
        "GRAMMAR: Relative pronouns (qui, que, dont), complex conditional sentences",
        "COMMUNICATION: Debate, persuasion, detailed storytelling, cultural discussions",
        "FOUNDATION: Your A2 skills are the solid base for all advanced French learning"
      ]
    }
  ],

  vocabulary: [
    { french: "tout le monde", english: "everyone", category: "groups", example: "Bonjour tout le monde !" },
    { french: "aujourd'hui", english: "today", category: "time", example: "Aujourd'hui, nous allons parler de vos projets." },
    { french: "parler de", english: "to talk about", category: "communication", example: "Je veux parler de mon avenir." },
    { french: "les projets d'avenir", english: "future plans", category: "planning", example: "Mes projets d'avenir sont très ambitieux." },
    { french: "l'année dernière", english: "last year", category: "time", example: "J'ai terminé mes études l'année dernière." },
    { french: "maintenant", english: "now", category: "time", example: "Maintenant, je travaille dans une banque." },
    { french: "une banque", english: "bank", category: "business", example: "Elle travaille dans une grande banque." },
    { french: "les objectifs", english: "goals", category: "planning", example: "J'ai des objectifs très clairs pour l'avenir." },
    { french: "les cinq prochaines années", english: "the next five years", category: "time", example: "Mes plans pour les cinq prochaines années sont prêts." },
    { french: "devenir", english: "to become", category: "verbs", example: "Je veux devenir directrice." },
    { french: "directrice", english: "director (feminine)", category: "professions", example: "Elle est devenue directrice l'année dernière." },
    { french: "continuer à", english: "to continue to", category: "verbs", example: "Je vais continuer à bien travailler." },
    { french: "je pense que", english: "I think that", category: "opinions", example: "Je pense que c'est possible." },
    { french: "possible", english: "possible", category: "adjectives", example: "C'est tout à fait possible." },
    { french: "les difficultés", english: "difficulties", category: "problems", example: "J'ai eu des difficultés l'année passée." },
    { french: "l'année passée", english: "last year", category: "time", example: "L'année passée a été difficile." },
    { french: "ça va mieux", english: "it's going better", category: "expressions", example: "Maintenant, ça va beaucoup mieux." },
    { french: "qu'est-ce qui s'est passé", english: "what happened", category: "questions", example: "Qu'est-ce qui s'est passé hier ?" },
    { french: "résoudre", english: "to solve", category: "verbs", example: "J'ai réussi à résoudre ce problème." },
    { french: "les problèmes", english: "problems", category: "challenges", example: "Nous devons résoudre ces problèmes rapidement." },
    { french: "perdre", english: "to lose", category: "verbs", example: "J'ai perdu mon emploi en mars." },
    { french: "l'emploi", english: "job/employment", category: "work", example: "Il a trouvé un nouvel emploi." },
    { french: "utiliser", english: "to use", category: "verbs", example: "J'ai utilisé ce temps pour apprendre." },
    { french: "les compétences", english: "skills", category: "professional", example: "J'ai développé de nouvelles compétences." },
    { french: "dans l'immédiat", english: "immediately", category: "time", example: "Dans l'immédiat, je vais finir ma formation." },
    { french: "compter", english: "to plan/count on", category: "planning", example: "Je compte commencer en janvier." },
    { french: "la formation", english: "training", category: "education", example: "Cette formation est très utile." },
    { french: "le poste", english: "position", category: "work", example: "C'est un poste très intéressant." },
    { french: "si tout se passe bien", english: "if everything goes well", category: "conditional", example: "Si tout se passe bien, je vais réussir." },
    { french: "je devrais", english: "I should", category: "modal", example: "Je devrais commencer en janvier." },
    { french: "ambitieux", english: "ambitious", category: "adjectives", example: "Mes projets sont très ambitieux." }
  ],

  culturalNotes: [
    {
      title: "French Professional Development Culture",
      content: "Professional development ('développement professionnel') is highly valued in France. Losing a job ('perdre son emploi') is seen as an opportunity for 'formation' (training). Career planning discussions are common and systematic."
    },
    {
      title: "French Goal-Setting and Life Planning",
      content: "French culture emphasizes structured life planning ('planification de vie'). Five-year goals ('objectifs à cinq ans') are commonly discussed. Professional titles like 'directrice' are important social markers."
    }
  ],

  exercises: [
    {
      id: "1",
      type: "multiple_choice" as const,
      question: "How do you say 'If I continue to work well, I think it's possible' in French?",
      options: [
        "Si je continue à bien travailler, je pense que c'est possible",
        "Si je continuerai à bien travailler, je pense que c'est possible",
        "Quand je continue à bien travailler, je pense que c'est possible",
        "Si je continue bien travailler, je pense que c'est possible"
      ],
      correct_answer: "Si je continue à bien travailler, je pense que c'est possible",
      explanation: "Use present tense after 'si' and 'continuer à' + infinitive."
    },

    {
      id: "2",
      type: "fill_blank" as const,
      question: "Complete this life story using appropriate tenses: L'année dernière, j'_____ _____ mes études. (finished - passé composé)",
      correct_answer: "ai terminé",
      explanation: "Use 'avoir' + past participle for passé composé with 'terminer'."
    },

    {
      id: "3",
      type: "fill_blank" as const,
      question: "Complete: Maintenant, je _____ dans une banque. (work - present)",
      correct_answer: "travaille",
      explanation: "Use present tense 'travaille' for current action."
    },

    {
      id: "4",
      type: "fill_blank" as const,
      question: "Complete: L'année prochaine, je _____ _____ directeur. (am going to become - futur proche)",
      correct_answer: "vais devenir",
      explanation: "Use 'aller' + infinitive for futur proche."
    },

    {
      id: "5",
      type: "fill_blank" as const,
      question: "Complete: Si tout _____ bien, je _____ réussir. (goes - present, am going to - futur proche)",
      correct_answer: "va vais",
      explanation: "Use present after 'si' and futur proche for future plans."
    },

    {
      id: "6",
      type: "translation" as const,
      question: "Translate: 'Last year I had difficulties, but I used that time to learn new skills. Now I'm going to look for a new position.'",
      correct_answer: "l'année dernière j'ai eu des difficultés, mais j'ai utilisé ce temps pour apprendre de nouvelles compétences. maintenant je vais chercher un nouveau poste",
      explanation: "Use passé composé for past actions and futur proche for future plans."
    },

    {
      id: "7",
      type: "matching" as const,
      question: "Match the irregular verbs with their correct forms:",
      pairs: [
        { french: "aller (present)", english: "je vais" },
        { french: "faire (passé composé)", english: "j'ai fait" },
        { french: "être (present)", english: "nous sommes" },
        { french: "voir (futur proche)", english: "je vais voir" }
      ],
      correct_answer: ["je vais", "j'ai fait", "nous sommes", "je vais voir"],
      explanation: "Review irregular verb conjugations in different tenses."
    },

    {
      id: "8",
      type: "speaking" as const,
      question: "Practice describing your future plans using futur proche: 'Qu'est-ce que vous allez faire l'année prochaine ?'",
      correct_answer: "L'année prochaine, je vais chercher un nouveau travail.",
      explanation: "Use 'aller' + infinitive to express immediate future plans."
    }
  ]
}

export default function Lesson19() {
  const [currentSection, setCurrentSection] = useState('dialogue')
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set())
  const [correctAnswers, setCorrectAnswers] = useState<number>(0)

  const handleExerciseComplete = (exerciseId: string) => {
    setCompletedExercises(prev => new Set(prev).add(exerciseId))
    setCorrectAnswers(prev => prev + 1)
  }

  const handleReset = () => {
    setCompletedExercises(new Set())
    setCorrectAnswers(0)
  }

  const sections = [
    { id: 'dialogue', label: 'Dialogue', icon: '💬' },
    { id: 'grammar', label: 'Grammar', icon: '📚' },
    { id: 'vocabulary', label: 'Vocabulary', icon: '📖' },
    { id: 'exercises', label: 'Exercises', icon: '✏️' }
  ]

  const renderDialogueSection = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{lessonData.dialogue.title}</h2>
        <p className="text-lg text-gray-600 mb-8">A professional development meeting where participants discuss their career goals and life plans</p>
      </div>
      
      <DialogueSection dialogue={lessonData.dialogue} />
    </div>
  )

  const renderGrammarSection = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Grammar Points</h2>
      
      <div className="space-y-6">
        {lessonData.grammarPoints.map((point, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-[16px] border border-gray-200 shadow-[inset_0_4px_16px_rgba(0,0,0,0.05),0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_4px_16px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
            <p className="text-gray-700 mb-4">{point.explanation}</p>
            <div className="space-y-2">
              {point.examples.map((example, idx) => (
                <div key={idx} className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-300">
                  <p className="text-gray-800 font-medium">{example}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderVocabularySection = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Vocabulary</h2>
      
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

  const renderExercisesSection = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Exercises</h2>
      
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

  const renderCulturalNotesSection = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Cultural Notes</h2>
      
      <div className="space-y-6">
        {lessonData.culturalNotes.map((note, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-[16px] border border-gray-200 shadow-[inset_0_4px_16px_rgba(0,0,0,0.05),0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_4px_16px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{note.title}</h3>
            <p className="text-gray-700">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            {lessonData.level}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{lessonData.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{lessonData.description}</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-[16px] p-2 shadow-lg">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setCurrentSection(section.id)}
                className={`px-6 py-3 rounded-[12px] font-medium transition-all duration-200 ${
                  currentSection === section.id
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {currentSection === 'dialogue' && renderDialogueSection()}
          {currentSection === 'grammar' && renderGrammarSection()}
          {currentSection === 'vocabulary' && renderVocabularySection()}
          {currentSection === 'exercises' && renderExercisesSection()}
        </div>

        {/* Cultural Notes - Always visible at bottom */}
        <div className="mt-16">
          {renderCulturalNotesSection()}
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
          <a
            href="/lessons/elementary"
            className="flex items-center text-green-600 hover:text-green-700 font-medium transition-colors duration-300"
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
