'use client'

import { useState } from 'react'
import { DialogueSection } from '../../../../../components/lessons/DialogueSection'
import InteractiveExercise from '../../../../../components/lessons/InteractiveExercise'
import ExerciseProgress from '../../../../../components/lessons/ExerciseProgress'
import { AudioPlayer } from '../../../../../components/lessons/AudioPlayer'
import Link from 'next/link'

type Section = 'dialogue' | 'grammar' | 'vocabulary' | 'exercises'

const lessonData = {
  id: 16,
  title: "Mastering Past Tense (Passé Composé Review & Advanced Usage)",
  level: "A2",
  description: "Master both avoir and être verbs in passé composé, learn time expressions, and practice complex past narratives",
  
  dialogue: {
    title: "Telling a Story About Last Weekend",
    context: "Sarah and Antoine discuss Antoine's weekend activities using various passé composé forms",
    speakers: ["Sarah", "Antoine"],
    exchanges: [
      {
        speaker: "Sarah",
        french: "Antoine, raconte-moi ton weekend ! Qu'est-ce qui s'est passé ?",
        english: "Antoine, tell me about your weekend! What happened?",
        pronunciation: "ahn-TWAHN, ra-kohn-tuh-MWAH tohn week-END! kes-kee say pah-SAY?"
      },
      {
        speaker: "Antoine",
        french: "Eh bien, samedi matin, je me suis levé tard. J'ai pris mon petit-déjeuner vers 10h.",
        english: "Well, Saturday morning, I got up late. I had my breakfast around 10 AM.",
        pronunciation: "ay bee-AHN, sam-DEE mah-TAHN, zhuh muh swee luh-VAY tar. zhay pree mohn puh-tee day-zhuh-NAY vair deez UR"
      },
      {
        speaker: "Sarah",
        french: "Et après ? Tu es sorti ?",
        english: "And after? Did you go out?",
        pronunciation: "ay ah-PRAY? tu ay sor-TEE?"
      },
      {
        speaker: "Antoine",
        french: "Oui, je suis allé en ville avec ma copine. Nous avons fait les magasins pendant deux heures.",
        english: "Yes, I went into town with my girlfriend. We went shopping for two hours.",
        pronunciation: "wee, zhuh swee zah-LAY ahn veel ah-VEK mah ko-PEEN. noo zah-VOHN fay lay mah-gah-ZAHN pahn-DAHN duh UR"
      },
      {
        speaker: "Sarah",
        french: "Vous avez acheté quelque chose ?",
        english: "Did you buy anything?",
        pronunciation: "voo zah-VAY ash-TAY kel-kuh SHOHS?"
      },
      {
        speaker: "Antoine",
        french: "Elle a acheté une robe, et moi j'ai trouvé des chaussures. Puis nous sommes rentrés vers 15h.",
        english: "She bought a dress, and I found some shoes. Then we came home around 3 PM.",
        pronunciation: "el ah ash-TAY un ROHB, ay mwah zhay troo-VAY day shoh-SUR. pwee noo som rahn-TRAY vair kahn UR"
      },
      {
        speaker: "Sarah",
        french: "Et le soir ? Vous êtes restés à la maison ?",
        english: "And in the evening? Did you stay at home?",
        pronunciation: "ay luh SWAHR? voo zet res-TAY ah lah may-ZOHN?"
      },
      {
        speaker: "Antoine",
        french: "Non, nous avons dîné au restaurant, puis nous sommes allés au cinéma. Le film a commencé à 21h.",
        english: "No, we had dinner at the restaurant, then we went to the cinema. The movie started at 9 PM.",
        pronunciation: "nohn, noo zah-VOHN dee-NAY oh res-toh-RAHN, pwee noo som zah-LAY oh see-nay-MAH. luh feelm ah ko-mahn-SAY ah vanh-tun UR"
      },
      {
        speaker: "Sarah",
        french: "Ça a été une belle journée ! Et dimanche ?",
        english: "That was a nice day! And Sunday?",
        pronunciation: "sah ah ay-TAY un bel zhoor-NAY! ay dee-MAHNSH?"
      },
      {
        speaker: "Antoine",
        french: "Dimanche, nous nous sommes reposés. Nous avons lu des livres et nous avons écouté de la musique.",
        english: "Sunday, we rested. We read books and we listened to music.",
        pronunciation: "dee-MAHNSH, noo noo som ruh-po-ZAY. noo zah-VOHN lu day LEE-vruh ay noo zah-VOHN ay-koo-TAY duh lah mu-ZEEK"
      }
    ]
  },

  grammarPoints: [
    {
      title: "Complete Passé Composé Review - AVOIR vs ÊTRE",
      explanation: "You now know both types of passé composé! Let's review when to use each helper verb. This is crucial for fluent French conversation because you'll use past tense constantly to tell stories, describe experiences, and talk about completed actions:",
      examples: [
        "AVOIR VERBS (majority): actions, having, doing → J'ai mangé, Tu as regardé, Il a fait",
        "ÊTRE VERBS (DR MRS VANDERTRAMP): movement, state change → Je suis allé, Tu es né, Elle est partie",
        "AVOIR = no agreement: Elle a mangé (past participle stays same)",
        "ÊTRE = agreement: Elle est allée (past participle agrees with subject)",
        "MEMORY TIP: If it's not movement/life change, it's probably avoir"
      ]
    },
    {
      title: "Reflexive Verbs in Passé Composé",
      explanation: "Reflexive verbs (verbs with 'se') always use être in passé composé and follow agreement rules. These are verbs where the action reflects back on the subject - like 'se lever' (to get up), 'se reposer' (to rest). The reflexive pronoun comes before the helper verb:",
      examples: [
        "STRUCTURE: Subject + reflexive pronoun + être + past participle",
        "se lever → Je me suis levé(e) (I got up), Tu t'es levé(e) (You got up)",
        "se reposer → Nous nous sommes reposé(e)s (We rested)",  
        "AGREEMENT: Past participle agrees with subject (like other être verbs)",
        "COMMON REFLEXIVES: se lever (get up), se coucher (go to bed), se reposer (rest), se laver (wash)"
      ]
    },
    {
      title: "Time Expressions with Passé Composé",
      explanation: "Certain time expressions are essential for telling stories in the past. These help you sequence events and make your narratives clear and natural. French has specific expressions that signal past completed actions:",
      examples: [
        "SPECIFIC TIMES: hier (yesterday), samedi dernier (last Saturday), l'année dernière (last year)",
        "SEQUENCING: d'abord (first), puis (then), après (after), enfin (finally)",
        "DURATION: pendant deux heures (for two hours), depuis (since)",
        "RECENT PAST: ce matin (this morning), cette semaine (this week)",
        "EXAMPLE: Hier, j'ai travaillé pendant 8 heures, puis je suis rentré"
      ]
    },
    {
      title: "Complex Past Narratives - Combining Multiple Actions",
      explanation: "To tell interesting stories, you need to combine multiple past actions in sequence. This involves using both avoir and être verbs together, different time expressions, and connecting words to create flow:",
      examples: [
        "SEQUENCING: D'abord j'ai pris le petit-déjeuner, puis je suis sorti",
        "MIXING HELPERS: J'ai acheté des fruits et je suis rentré à la maison",
        "TIME + ACTION: À 8h, j'ai quitté la maison. À 9h, je suis arrivé au bureau",
        "CAUSE/EFFECT: Il a plu, alors nous sommes restés à la maison",
        "STORY FLOW: Ce matin → puis → après → enfin"
      ]
    },
    {
      title: "Advanced Passé Composé - Special Cases",
      explanation: "Some verbs can use both avoir and être depending on their meaning. When they have a direct object, they use avoir. When they describe movement without an object, they use être. Don't worry about mastering this now, but be aware it exists:",
      examples: [
        "SORTIR: Je suis sorti (I went out) vs J'ai sorti les poubelles (I took out the trash)",
        "MONTER: Elle est montée (She went up) vs Elle a monté les escaliers (She climbed the stairs)",
        "DESCENDRE: Nous sommes descendus (We went down) vs Nous avons descendu les bagages (We brought down the luggage)",
        "FOR NOW: Focus on the movement meanings (être), learn object meanings later",
        "RECOGNITION: If there's a direct object after the verb, it probably uses avoir"
      ]
    }
  ],

  vocabulary: [
    { french: "raconter", english: "to tell/narrate", category: "verbs", example: "Je raconte une histoire à mes enfants." },
    { french: "qu'est-ce qui s'est passé", english: "what happened", category: "expressions", example: "Qu'est-ce qui s'est passé hier soir ?" },
    { french: "se lever", english: "to get up", category: "reflexive-verbs", example: "Je me lève à 7h00 tous les matins." },
    { french: "tard", english: "late", category: "time", example: "Je me couche tard le weekend." },
    { french: "le petit-déjeuner", english: "breakfast", category: "meals", example: "Le petit-déjeuner est le repas le plus important." },
    { french: "en ville", english: "into town/downtown", category: "locations", example: "Je vais en ville pour faire les magasins." },
    { french: "la copine", english: "girlfriend", category: "relationships", example: "Ma copine et moi, nous aimons voyager ensemble." },
    { french: "faire les magasins", english: "to go shopping", category: "expressions", example: "Nous faisons les magasins le samedi après-midi." },
    { french: "pendant", english: "for/during", category: "time-expressions", example: "J'étudie pendant deux heures chaque soir." },
    { french: "quelque chose", english: "something", category: "indefinite", example: "Je veux acheter quelque chose de spécial." },
    { french: "acheter", english: "to buy", category: "verbs", example: "J'achète des vêtements pour l'hiver." },
    { french: "trouver", english: "to find", category: "verbs", example: "J'ai trouvé un excellent restaurant." },
    { french: "les chaussures", english: "shoes", category: "clothing", example: "Ces chaussures sont très confortables." },
    { french: "dîner", english: "to have dinner", category: "verbs", example: "Nous dînons à 20h00 tous les soirs." },
    { french: "commencer", english: "to start/begin", category: "verbs", example: "Le film commence à 21h00." },
    { french: "se reposer", english: "to rest", category: "reflexive-verbs", example: "Je me repose le dimanche après-midi." },
    { french: "lire", english: "to read", category: "verbs", example: "J'aime lire des romans français." },
    { french: "lu", english: "read (past participle)", category: "past-participles", example: "J'ai lu ce livre la semaine dernière." },
    { french: "d'abord", english: "first", category: "sequencing", example: "D'abord, je me lève, puis je prends ma douche." },
    { french: "enfin", english: "finally", category: "sequencing", example: "Enfin, nous arrivons à destination." }
  ],

  culturalNotes: [
    {
      title: "French Shopping Culture",
      content: "'Faire les magasins' (going shopping) is a popular weekend activity in France. Shopping centers and downtown areas are busy on Saturdays. Many French people enjoy leisurely shopping followed by dining out."
    },
    {
      title: "French Weekend Rhythm",
      content: "French weekends often have a relaxed pace. 'Se lever tard' (getting up late) on weekends is common. Sunday is traditionally a rest day ('se reposer'), with many shops closed and families spending quiet time together."
    }
  ],

  exercises: [
    {
      id: "ex1",
      type: "multiple_choice" as const,
      question: "How do you say 'I got up late this morning' in French?",
      options: [
        "Je me suis levé(e) tard ce matin",
        "J'ai me levé tard ce matin",
        "Je suis me levé tard ce matin",
        "J'ai levé tard ce matin"
      ],
      correct_answer: "Je me suis levé(e) tard ce matin",
      explanation: "Reflexive verbs use être: Je me suis levé(e) (with reflexive pronoun 'me')."
    },

    {
      id: "ex2",
      type: "conjugation" as const,
      question: "Practice the conjugation of 'se lever' (to get up in past tense)",
      verb: "se lever (être + levé)",
      translations: {
        "je": "I got up (me suis levé/levée)",
        "tu": "you got up (t'es levé/levée)",
        "il": "he got up (s'est levé)",
        "elle": "she got up (s'est levée)",
        "nous": "we got up (nous sommes levés/levées)",
        "vous": "you got up (vous êtes levés/levées)",
        "ils": "they got up (se sont levés)",
        "elles": "they got up (se sont levées)"
      },
      correct_answer: "conjugation",
      explanation: "Practice the complete conjugation pattern with se lever, including reflexive pronouns and agreement rules."
    },

    {
      id: "ex3",
      type: "matching" as const,
      question: "Match the helper verbs with their correct usage:",
      pairs: [
        { french: "avoir", english: "action verbs (manger, faire, regarder)" },
        { french: "être", english: "movement verbs (aller, venir, partir)" },
        { french: "être", english: "reflexive verbs (se lever, se reposer)" },
        { french: "être", english: "state change verbs (naître, mourir)" },
        { french: "avoir", english: "having/doing verbs (avoir, prendre, acheter)" }
      ],
      correct_answer: "matching",
      explanation: "Learn when to use avoir vs être in passé composé."
    },

    {
      id: "ex4",
      type: "fill_blank" as const,
      question: "Complete with the correct passé composé form: Hier, je _____ _____ tard. (I got up late)",
      correct_answer: ["me", "suis", "levé(e)"],
      explanation: "Use être for reflexive verbs: je me suis levé(e)."
    },

    {
      id: "ex5",
      type: "translation" as const,
      question: "Translate: 'First I got up, then I had breakfast, and finally I went to work.'",
      correct_answer: "d'abord je me suis levé(e), puis j'ai pris mon petit-déjeuner, et enfin je suis allé(e) au travail",
      explanation: "Use être for reflexive verbs and movement verbs, avoir for actions.",
      hints: ["d'abord = first", "je me suis levé(e) = I got up", "puis = then", "j'ai pris = I had", "enfin = finally"]
    },

    {
      id: "ex6",
      type: "matching" as const,
      question: "Match time expressions with their meanings:",
      pairs: [
        { french: "d'abord", english: "first" },
        { french: "puis", english: "then" },
        { french: "après", english: "after" },
        { french: "enfin", english: "finally" },
        { french: "pendant", english: "for/during" }
      ],
      correct_answer: "matching",
      explanation: "Learn essential sequencing words for telling stories in the past."
    },

    {
      id: "ex7",
      type: "speaking" as const,
      question: "Practice saying: 'Je me suis levé(e) tard ce matin' (I got up late this morning)",
      correct_answer: "speaking",
      explanation: "Focus on the pronunciation: 'zhuh muh swee luh-VAY tar suh mah-TAHN'",
      audio_prompt: "Je me suis levé(e) tard ce matin"
    },

    {
      id: "ex8",
      type: "matching" as const,
      question: "Match the French past tense expressions with their English meanings:",
      pairs: [
        { french: "je me suis levé(e)", english: "I got up" },
        { french: "tu t'es reposé(e)", english: "you rested" },
        { french: "il s'est couché", english: "he went to bed" },
        { french: "nous nous sommes levés", english: "we got up" },
        { french: "elles se sont reposées", english: "they rested (feminine)" }
      ],
      correct_answer: "matching",
      explanation: "Practice recognizing reflexive verb forms in context with proper agreement."
    }
  ]
}

export default function Lesson16() {
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
        <p className="text-lg text-gray-600">Master the essential concepts of passé composé review and advanced usage</p>
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
        <p className="text-lg text-gray-600">Practice your passé composé mastery skills</p>
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
