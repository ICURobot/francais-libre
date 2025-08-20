import { BeginnerLesson } from './lessonTypes';

// This array holds all the beginner lesson data for the application.
// It serves as a mock database, allowing us to build the UI without a live backend.
export const beginnerLessons: BeginnerLesson[] = [
  {
    id: 'beginner-1',
    title: 'Bonjour! First Greetings',
    subtitle: 'Essential French greetings and introductions',
    level: 'beginner',
    order: 1,
    estimated_time: 15,
    learning_objectives: [
      'Learn basic French greetings',
      'Understand formal vs informal address',
      'Practice pronunciation of essential phrases',
      'Master the verb "être" (to be) in present tense'
    ],
    is_free: true,
    difficulty: 1,
    tags: ['greetings', 'introductions', 'être', 'basic'],
    
    dialogue: {
      title: 'Meeting Someone New',
      context: 'Two people meet for the first time at a café in Paris',
      exchanges: [
        {
          speaker: 'Marie',
          french: 'Bonjour! Comment vous appelez-vous?',
          english: 'Hello! What is your name?',
          pronunciation: 'bon-ZHOOR! ko-mahn voo za-play VOO?'
        },
        {
          speaker: 'Thomas',
          french: "Je m'appelle Thomas. Et vous?",
          english: 'My name is Thomas. And you?',
          pronunciation: 'zhuh ma-PELL toh-MAH. ay VOO?'
        },
        {
          speaker: 'Marie',
          french: "Moi, c'est Marie. Enchantée!",
          english: "I'm Marie. Nice to meet you!",
          pronunciation: 'mwah, say ma-REE. ahn-shahn-TAY!'
        },
        {
          speaker: 'Thomas',
          french: 'Enchanté également. Comment allez-vous?',
          english: 'Nice to meet you too. How are you?',
          pronunciation: 'ahn-shahn-TAY ay-gal-MAHN. ko-mahn ta-lay VOO?'
        }
      ],
      cultural_notes: [
        "In France, 'vous' is used for formal situations and people you don't know well",
        "The greeting 'enchanté/enchantée' literally means 'enchanted' and is a polite way to say 'nice to meet you'",
        'French people often shake hands when meeting for the first time in formal situations'
      ],
      vocabulary_highlights: ['bonjour', 'appeler', 'enchanté', 'comment']
    },

    grammar: {
      topic: 'The verb "être" (to be) - Present tense',
      explanation: 'The verb "être" is one of the most important verbs in French. It means "to be" and is irregular, so you need to memorize its forms.',
      patterns: [
        'Use "je suis" for "I am"',
        'Use "vous êtes" for formal "you are" or plural "you are"',
        'Use "il/elle est" for "he/she is"'
      ],
      examples: [
        {
          french: 'Je suis étudiant.',
          english: 'I am a student.',
          highlight: 'suis'
        },
        {
          french: 'Vous êtes français?',
          english: 'Are you French?',
          highlight: 'êtes'
        },
        {
          french: 'Elle est professeure.',
          english: 'She is a teacher.',
          highlight: 'est'
        }
      ],
      conjugation_table: [
        { pronoun: 'je', form: 'suis', pronunciation: 'zhuh swee' },
        { pronoun: 'tu', form: 'es', pronunciation: 'too ay' },
        { pronoun: 'il/elle', form: 'est', pronunciation: 'eel/ell ay' },
        { pronoun: 'nous', form: 'sommes', pronunciation: 'noo som' },
        { pronoun: 'vous', form: 'êtes', pronunciation: 'voo zayt' },
        { pronoun: 'ils/elles', form: 'sont', pronunciation: 'eel/ell sohn' }
      ]
    },

    vocabulary: [
      {
        word: 'bonjour',
        translation: 'hello/good morning',
        pronunciation: 'bon-ZHOOR',
        example_sentence: 'Bonjour, comment allez-vous?',
        example_translation: 'Hello, how are you?',
        category: 'greetings'
      },
      {
        word: 'au revoir',
        translation: 'goodbye',
        pronunciation: 'oh ruh-VWAR',
        example_sentence: 'Au revoir et à bientôt!',
        example_translation: 'Goodbye and see you soon!',
        category: 'greetings'
      },
      {
        word: 'merci',
        translation: 'thank you',
        pronunciation: 'mer-SEE',
        example_sentence: 'Merci beaucoup pour votre aide.',
        example_translation: 'Thank you very much for your help.',
        category: 'politeness'
      },
      {
        word: "s'il vous plaît",
        translation: 'please (formal)',
        pronunciation: 'seel voo PLAY',
        example_sentence: "Une table pour deux, s'il vous plaît.",
        example_translation: 'A table for two, please.',
        category: 'politeness'
      }
    ],

    exercises: [
      {
        id: 'ex-1-1',
        type: 'multiple_choice',
        question: 'How do you say "Hello" in French?',
        options: ['Bonjour', 'Au revoir', 'Merci', "S'il vous plaît"],
        correct_answer: 'Bonjour',
        explanation: 'Bonjour is the standard French greeting meaning "hello" or "good morning".',
        hints: ['Think about the greeting Marie used in the dialogue']
      },
      {
        id: 'ex-1-2',
        type: 'fill_blank',
        question: 'Complete: Je _____ Thomas. (I am Thomas)',
        correct_answer: ['suis'],
        explanation: 'With "je" (I), the verb "être" becomes "suis".',
        hints: ['Look at the conjugation table for "être"']
      },
      {
        id: 'ex-1-3',
        type: 'translation',
        question: 'Translate to French: "Nice to meet you" (feminine speaker)',
        correct_answer: ['Enchantée', 'enchantée'],
        explanation: 'A female speaker would say "Enchantée" (with an extra "e").',
        hints: ["Remember that adjectives agree with the speaker's gender"]
      },
      {
        id: 'ex-1-4',
        type: 'speaking',
        question: 'Practice saying: "Bonjour! Comment vous appelez-vous?"',
        correct_answer: ['Bonjour! Comment vous appelez-vous?'],
        explanation: "Great pronunciation! This is how you politely ask someone's name.",
        audio_prompt: 'Bonjour! Comment vous appelez-vous?'
      }
    ],

    completion_criteria: {
      min_exercises_correct: 3,
      required_sections: ['dialogue', 'grammar', 'exercises']
    }
  },

  {
    id: 'beginner-2',
    title: "Je m'appelle... Introductions",
    subtitle: 'Introducing yourself and asking about others',
    level: 'beginner',
    order: 2,
    estimated_time: 18,
    learning_objectives: [
      'Learn to introduce yourself properly',
      'Ask for personal information politely',
      'Practice numbers 1-20',
      'Understand the verb "avoir" (to have)'
    ],
    prerequisite_lessons: ['beginner-1'],
    is_free: true,
    difficulty: 1,
    tags: ['introductions', 'personal-info', 'numbers', 'avoir'],
    
    dialogue: {
      title: 'Getting to Know Each Other',
      context: 'Thomas and Marie continue their conversation, sharing more about themselves',
      exchanges: [
        {
          speaker: 'Marie',
          french: "D'où venez-vous, Thomas?",
          english: 'Where are you from, Thomas?',
          pronunciation: 'doo vuh-nay VOO, toh-MAH?'
        },
        {
          speaker: 'Thomas',
          french: 'Je viens de Lyon. Et vous, Marie?',
          english: 'I come from Lyon. And you, Marie?',
          pronunciation: 'zhuh vee-ahn duh lee-OHN. ay VOO, ma-REE?'
        },
        {
          speaker: 'Marie',
          french: "Moi, je suis de Paris. J'ai vingt-cinq ans.",
          english: "I'm from Paris. I'm twenty-five years old.",
          pronunciation: 'mwah, zhuh swee duh pa-REE. zhay vahn-sank AHN.'
        },
        {
          speaker: 'Thomas',
          french: "Ah! J'ai vingt-huit ans. Quel âge avez-vous?",
          english: "Ah! I'm twenty-eight years old. How old are you?",
          pronunciation: 'ah! zhay vahn-weet AHN. kell ahzh a-vay VOO?',
          cultural_note: "Note: Thomas already knows Marie's age, but this shows the structure"
        }
      ],
      cultural_notes: [
        "Asking someone's age directly is generally acceptable in casual conversation",
        "Lyon is France's third-largest city and is famous for its cuisine",
        'The verb "venir de" means "to come from" and is useful for discussing origins'
      ]
    },

    grammar: {
      topic: 'The verb "avoir" (to have) - Present tense',
      explanation: 'The verb "avoir" means "to have" and is used for age, possessions, and many idiomatic expressions. Like "être", it\'s irregular.',
      patterns: [
        'Use "j\'ai" for "I have"',
        'Use "vous avez" for formal "you have"',
        'Use "avoir + number + ans" to express age'
      ],
      examples: [
        {
          french: 'J\'ai vingt ans.',
          english: 'I am twenty years old.',
          highlight: 'ai'
        },
        {
          french: 'Vous avez une voiture?',
          english: 'Do you have a car?',
          highlight: 'avez'
        },
        {
          french: 'Il a trois frères.',
          english: 'He has three brothers.',
          highlight: 'a'
        }
      ],
      conjugation_table: [
        { pronoun: "j'", form: 'ai', pronunciation: 'zhay' },
        { pronoun: 'tu', form: 'as', pronunciation: 'too ah' },
        { pronoun: 'il/elle', form: 'a', pronunciation: 'eel/ell ah' },
        { pronoun: 'nous', form: 'avons', pronunciation: 'noo za-vohn' },
        { pronoun: 'vous', form: 'avez', pronunciation: 'voo za-vay' },
        { pronoun: 'ils/elles', form: 'ont', pronunciation: 'eel/ell ohn' }
      ]
    },

    vocabulary: [
      {
        word: 'âge',
        translation: 'age',
        pronunciation: 'ahzh',
        example_sentence: 'Quel âge avez-vous?',
        example_translation: 'How old are you?',
        category: 'personal-info'
      },
      {
        word: 'an/année',
        translation: 'year',
        pronunciation: 'ahn/an-NAY',
        example_sentence: 'J\'ai vingt-cinq ans.',
        example_translation: 'I am twenty-five years old.',
        category: 'time'
      },
      {
        word: 'venir de',
        translation: 'to come from',
        pronunciation: 'vuh-NEER duh',
        example_sentence: 'Je viens de France.',
        example_translation: 'I come from France.',
        category: 'origins'
      }
    ],

    exercises: [
      {
        id: 'ex-2-1',
        type: 'multiple_choice',
        question: 'How do you say "I have" in French?',
        options: ['J\'ai', 'Je suis', 'Vous avez', 'Il a'],
        correct_answer: 'J\'ai',
        explanation: "J'ai is the first person singular form of avoir (to have).",
        hints: ["Remember the contraction j' + ai"]
      },
      {
        id: 'ex-2-2',
        type: 'fill_blank',
        question: "Complete: J'____ vingt ans. (I am twenty years old)",
        correct_answer: ['ai'],
        explanation: 'In French, age is expressed with "avoir" (to have), not "être" (to be).',
        hints: ['Think about which verb is used for age in French']
      },
      {
        id: 'ex-2-3',
        type: 'translation',
        question: 'Translate to French: "Where are you from?"',
        correct_answer: ["D'où venez-vous?", "D'où venez-vous", "Vous venez d'où?"],
        explanation: "D'où venez-vous? is the formal way to ask where someone is from.",
        hints: ['Use the formal "vous" form']
      }
    ],

    completion_criteria: {
      min_exercises_correct: 2,
      required_sections: ['dialogue', 'grammar', 'exercises']
    }
  }
  // You can add more lesson objects here in the future.
];

// --- Helper Functions ---
// These functions provide an easy way to access the lesson data from other parts of the application.

/**
 * Finds and returns a single lesson by its unique ID.
 * @param id The ID of the lesson to find.
 * @returns The lesson object if found, otherwise undefined.
 */
export const getLessonById = (id: string): BeginnerLesson | undefined => {
  return beginnerLessons.find(lesson => lesson.id === id);
};

/**
 * Returns all beginner lessons, sorted by their 'order' property.
 * @returns A sorted array of all beginner lessons.
 */
export const getBeginnerLessons = (): BeginnerLesson[] => {
  return beginnerLessons.sort((a, b) => a.order - b.order);
};

/**
 * Returns only the lessons that are marked as free.
 * @returns An array of free beginner lessons.
 */
export const getFreeLessons = (): BeginnerLesson[] => {
  return beginnerLessons.filter(lesson => lesson.is_free);
};
