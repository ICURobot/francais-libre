import { BeginnerLesson } from './lessonTypes'

export const beginnerLessons: BeginnerLesson[] = [
  {
    id: 'beginner-1',
    title: 'Bonjour! First Greetings & Introductions',
    subtitle: 'Master French greetings, self-introductions, and the essential verb "être"',
    level: 'beginner',
    order: 1,
    estimated_time: 25,
    learning_objectives: [
      'Master formal and informal French greetings throughout the day',
      'Introduce yourself confidently in various situations', 
      'Use politeness expressions appropriately',
      'Conjugate and use the verb "être" (to be) correctly',
      'Understand when to use "tu" vs "vous"',
      'Ask and answer basic personal questions'
    ],
    is_free: true,
    difficulty: 1,
    tags: ['greetings', 'introductions', 'être', 'politeness', 'basic'],
    
    dialogue: {
      title: 'Meeting Someone New at a Parisian Café',
      context: 'Marie and Thomas meet for the first time during lunch time at a busy café in the Latin Quarter. This dialogue shows both formal politeness and the transition to a more relaxed conversation.',
      exchanges: [
        {
          speaker: 'Marie',
          french: 'Bonjour! Excusez-moi, cette place est-elle libre?',
          english: 'Hello! Excuse me, is this seat free?',
          pronunciation: 'bon-ZHOOR! ex-koo-zay MWAH, set plahs ay-tell LEE-bruh?',
          cultural_note: 'Always ask before sitting at someone\'s table in French cafés, even if there are empty chairs.'
        },
        {
          speaker: 'Thomas',
          french: 'Bonjour! Oui, bien sûr, je vous en prie.',
          english: 'Hello! Yes, of course, please do.',
          pronunciation: 'bon-ZHOOR! WEE, bee-ahn SOOR, zhuh voo zahn PREE.'
        },
        {
          speaker: 'Marie',
          french: 'Merci beaucoup. Je m\'appelle Marie Dubois.',
          english: 'Thank you very much. My name is Marie Dubois.',
          pronunciation: 'mer-SEE bo-KOO. zhuh ma-PELL ma-REE doo-BWAH.'
        },
        {
          speaker: 'Thomas',
          french: 'Enchanté! Moi, c\'est Thomas Martin. Comment allez-vous?',
          english: 'Nice to meet you! I\'m Thomas Martin. How are you?',
          pronunciation: 'ahn-shahn-TAY! MWAH, say toh-MAH mar-TAHN. ko-mahn ta-lay VOO?'
        },
        {
          speaker: 'Marie',
          french: 'Je vais très bien, merci. Et vous?',
          english: 'I\'m doing very well, thank you. And you?',
          pronunciation: 'zhuh vay tray bee-AHN, mer-SEE. ay VOO?'
        },
        {
          speaker: 'Thomas',
          french: 'Ça va bien, merci. Vous êtes d\'ici?',
          english: 'I\'m doing well, thank you. Are you from here?',
          pronunciation: 'sah vah bee-AHN, mer-SEE. voo zayt dee-SEE?'
        },
        {
          speaker: 'Marie',
          french: 'Oui, je suis parisienne. Et vous, vous êtes français?',
          english: 'Yes, I\'m Parisian. And you, are you French?',
          pronunciation: 'WEE, zhuh swee pa-ree-zee-EN. ay VOO, voo zayt frahn-SAY?'
        },
        {
          speaker: 'Thomas',
          french: 'Oui, je suis de Lyon. Je suis ici pour le travail.',
          english: 'Yes, I\'m from Lyon. I\'m here for work.',
          pronunciation: 'WEE, zhuh swee duh lee-OHN. zhuh swee zee-SEE poor luh tra-VIE.',
          cultural_note: 'Lyon is considered France\'s gastronomic capital and is a major business center.'
        }
      ],
      cultural_notes: [
        'French greetings vary by time of day: "Bonjour" (morning/afternoon), "Bonsoir" (evening)',
        'The formal "vous" is used with strangers, in business, or with people older than you',
        'French people typically shake hands in formal introductions, but close friends do "la bise" (cheek kisses)',
        'Always say "Bonjour/Bonsoir" when entering a shop, and "Au revoir/Bonne soirée" when leaving',
        'Regional identity is important in France - people often mention their city or region of origin'
      ],
      vocabulary_highlights: ['bonjour', 'excusez-moi', 'je m\'appelle', 'enchanté', 'comment allez-vous', 'je suis']
    },

    grammar: {
      topic: 'The Essential Verb "être" (to be) - Foundation of French',
      explanation: 'The verb "être" (to be) is absolutely fundamental in French. It\'s used for identity, nationality, profession, location, and descriptions. Unlike English, French uses "être" for permanent characteristics and temporary states.',
      patterns: [
        'Identity: "Je suis Marie" (I am Marie)',
        'Nationality: "Je suis française" (I am French)', 
        'Location: "Je suis à Paris" (I am in Paris)',
        'Profession: "Je suis professeur" (I am a teacher)',
        'Description: "Il est grand" (He is tall)',
        'Politeness: "Vous êtes très gentil" (You are very kind)'
      ],
      examples: [
        {
          french: 'Je suis étudiant en médecine.',
          english: 'I am a medical student.',
          highlight: 'suis'
        },
        {
          french: 'Vous êtes très aimable.',
          english: 'You are very kind.',
          highlight: 'êtes'
        },
        {
          french: 'Elle est de Marseille.',
          english: 'She is from Marseille.',
          highlight: 'est'
        },
        {
          french: 'Nous sommes en retard.',
          english: 'We are late.',
          highlight: 'sommes'
        },
        {
          french: 'Ils sont français.',
          english: 'They are French.',
          highlight: 'sont'
        },
        {
          french: 'Tu es mon ami.',
          english: 'You are my friend.',
          highlight: 'es'
        }
      ],
      conjugation_table: [
        { pronoun: 'je', form: 'suis', pronunciation: 'zhuh swee' },
        { pronoun: 'tu', form: 'es', pronunciation: 'too ay' },
        { pronoun: 'il/elle/on', form: 'est', pronunciation: 'eel/ell/ohn ay' },
        { pronoun: 'nous', form: 'sommes', pronunciation: 'noo som' },
        { pronoun: 'vous', form: 'êtes', pronunciation: 'voo zayt' },
        { pronoun: 'ils/elles', form: 'sont', pronunciation: 'eel/ell sohn' }
      ]
    },

    vocabulary: [
      // Greetings - Time-specific
      {
        word: 'bonjour',
        translation: 'hello/good morning/good afternoon',
        pronunciation: 'bon-ZHOOR',
        example_sentence: 'Bonjour madame, comment allez-vous?',
        example_translation: 'Good morning madam, how are you?',
        category: 'greetings'
      },
      {
        word: 'bonsoir',
        translation: 'good evening',
        pronunciation: 'bon-SWAHR',
        example_sentence: 'Bonsoir tout le monde!',
        example_translation: 'Good evening everyone!',
        category: 'greetings'
      },
      {
        word: 'bonne nuit',
        translation: 'good night',
        pronunciation: 'bun NWEE',
        example_sentence: 'Bonne nuit et dormez bien!',
        example_translation: 'Good night and sleep well!',
        category: 'greetings'
      },
      {
        word: 'salut',
        translation: 'hi/bye (informal)',
        pronunciation: 'sa-LUU',
        example_sentence: 'Salut Pierre, ça va?',
        example_translation: 'Hi Pierre, how\'s it going?',
        category: 'greetings'
      },
      
      // Self-introduction
      {
        word: 'je m\'appelle',
        translation: 'my name is/I call myself',
        pronunciation: 'zhuh ma-PELL',
        example_sentence: 'Je m\'appelle Sophie Moreau.',
        example_translation: 'My name is Sophie Moreau.',
        category: 'introduction'
      },
      {
        word: 'je suis',
        translation: 'I am',
        pronunciation: 'zhuh swee',
        example_sentence: 'Je suis professeur de français.',
        example_translation: 'I am a French teacher.',
        category: 'introduction'
      },
      {
        word: 'moi, c\'est',
        translation: 'I\'m (casual way to introduce)',
        pronunciation: 'mwah, say',
        example_sentence: 'Moi, c\'est Paul.',
        example_translation: 'I\'m Paul.',
        category: 'introduction'
      },
      
      // Politeness expressions
      {
        word: 'excusez-moi',
        translation: 'excuse me (formal)',
        pronunciation: 'ex-koo-zay MWAH',
        example_sentence: 'Excusez-moi, où est la gare?',
        example_translation: 'Excuse me, where is the train station?',
        category: 'politeness'
      },
      {
        word: 'pardon',
        translation: 'pardon/excuse me',
        pronunciation: 'par-DOHN',
        example_sentence: 'Pardon, je n\'ai pas entendu.',
        example_translation: 'Pardon, I didn\'t hear.',
        category: 'politeness'
      },
      {
        word: 's\'il vous plaît',
        translation: 'please (formal)',
        pronunciation: 'seel voo PLAY',
        example_sentence: 'Un café, s\'il vous plaît.',
        example_translation: 'A coffee, please.',
        category: 'politeness'
      },
      {
        word: 's\'il te plaît',
        translation: 'please (informal)',
        pronunciation: 'seel tuh PLAY',
        example_sentence: 'Aide-moi, s\'il te plaît.',
        example_translation: 'Help me, please.',
        category: 'politeness'
      },
      {
        word: 'merci',
        translation: 'thank you',
        pronunciation: 'mer-SEE',
        example_sentence: 'Merci pour votre aide.',
        example_translation: 'Thank you for your help.',
        category: 'politeness'
      },
      {
        word: 'merci beaucoup',
        translation: 'thank you very much',
        pronunciation: 'mer-SEE bo-KOO',
        example_sentence: 'Merci beaucoup pour le cadeau!',
        example_translation: 'Thank you very much for the gift!',
        category: 'politeness'
      },
      {
        word: 'de rien',
        translation: 'you\'re welcome/don\'t mention it',
        pronunciation: 'duh ree-AHN',
        example_sentence: '- Merci! - De rien!',
        example_translation: '- Thank you! - You\'re welcome!',
        category: 'politeness'
      },
      {
        word: 'je vous en prie',
        translation: 'you\'re welcome (formal)',
        pronunciation: 'zhuh voo zahn PREE',
        example_sentence: '- Merci monsieur. - Je vous en prie.',
        example_translation: '- Thank you sir. - You\'re welcome.',
        category: 'politeness'
      },
      
      // Essential questions and responses
      {
        word: 'comment allez-vous',
        translation: 'how are you (formal)',
        pronunciation: 'ko-mahn ta-lay VOO',
        example_sentence: 'Bonjour Marie, comment allez-vous?',
        example_translation: 'Hello Marie, how are you?',
        category: 'questions'
      },
      {
        word: 'comment ça va',
        translation: 'how are you (informal)',
        pronunciation: 'ko-mahn sah VAH',
        example_sentence: 'Salut Paul, comment ça va?',
        example_translation: 'Hi Paul, how are you?',
        category: 'questions'
      },
      {
        word: 'ça va bien',
        translation: 'I\'m doing well',
        pronunciation: 'sah vah bee-AHN',
        example_sentence: 'Ça va bien, et toi?',
        example_translation: 'I\'m doing well, and you?',
        category: 'responses'
      },
      {
        word: 'très bien',
        translation: 'very well',
        pronunciation: 'tray bee-AHN',
        example_sentence: 'Je vais très bien, merci.',
        example_translation: 'I\'m doing very well, thank you.',
        category: 'responses'
      },

      // Meeting expressions
      {
        word: 'enchanté',
        translation: 'nice to meet you (masculine)',
        pronunciation: 'ahn-shahn-TAY',
        example_sentence: 'Je m\'appelle Pierre. Enchanté!',
        example_translation: 'My name is Pierre. Nice to meet you!',
        category: 'meeting'
      },
      {
        word: 'enchantée',
        translation: 'nice to meet you (feminine)',
        pronunciation: 'ahn-shahn-TAY',
        example_sentence: 'Moi, c\'est Marie. Enchantée!',
        example_translation: 'I\'m Marie. Nice to meet you!',
        category: 'meeting'
      },

      // Farewells
      {
        word: 'au revoir',
        translation: 'goodbye',
        pronunciation: 'oh ruh-VWAHR',
        example_sentence: 'Au revoir et à bientôt!',
        example_translation: 'Goodbye and see you soon!',
        category: 'farewells'
      },
      {
        word: 'à bientôt',
        translation: 'see you soon',
        pronunciation: 'ah bee-ahn-TOH',
        example_sentence: 'À bientôt, passez une bonne soirée!',
        example_translation: 'See you soon, have a good evening!',
        category: 'farewells'
      },
      {
        word: 'à demain',
        translation: 'see you tomorrow',
        pronunciation: 'ah duh-MAHN',
        example_sentence: 'À demain au bureau!',
        example_translation: 'See you tomorrow at the office!',
        category: 'farewells'
      },
      {
        word: 'bonne journée',
        translation: 'have a good day',
        pronunciation: 'bun zhoor-NAY',
        example_sentence: 'Au revoir, bonne journée!',
        example_translation: 'Goodbye, have a good day!',
        category: 'farewells'
      }
    ],

    exercises: [
      {
        id: 'ex-1-1',
        type: 'multiple_choice',
        question: 'Which greeting would you use at 8 PM?',
        options: ['Bonjour', 'Bonsoir', 'Bonne nuit', 'Salut'],
        correct_answer: 'Bonsoir',
        explanation: '"Bonsoir" is used from around 6 PM onwards. "Bonne nuit" is only for bedtime.',
        hints: ['Think about the time of day - evening has started']
      },
      {
        id: 'ex-1-2',
        type: 'fill_blank',
        question: 'Complete the introduction: "Bonjour, je _____ Marie Dubois."',
        correct_answer: ['m\'appelle'],
        explanation: '"Je m\'appelle" means "my name is" or literally "I call myself".',
        hints: ['This is the most common way to introduce your name in French']
      },
      {
        id: 'ex-1-3',
        type: 'multiple_choice',
        question: 'How do you say "I am a student" using être?',
        options: ['Je suis étudiant', 'J\'ai étudiant', 'Je m\'appelle étudiant', 'Je vais étudiant'],
        correct_answer: 'Je suis étudiant',
        explanation: 'Use "je suis" (I am) + profession/status. The verb "être" is essential for identity.',
        hints: ['Remember the conjugation of être: je suis']
      },
      {
        id: 'ex-1-4',
        type: 'translation',
        question: 'Translate to French: "Nice to meet you" (if you are female)',
        correct_answer: ['Enchantée', 'enchantée'],
        explanation: 'A female speaker says "Enchantée" (with an -e ending for feminine agreement).',
        hints: ['Remember gender agreement - females add -e to adjectives']
      },
      {
        id: 'ex-1-5',
        type: 'fill_blank',
        question: 'Respond politely: "Merci beaucoup!" - "_____ _____!"',
        correct_answer: ['De rien', 'Je vous en prie'],
        explanation: '"De rien" (don\'t mention it) or "Je vous en prie" (formal: you\'re welcome) are correct responses.',
        hints: ['Think of polite ways to respond to thanks']
      },
      {
        id: 'ex-1-6',
        type: 'multiple_choice',
        question: 'Complete with être: "Vous _____ français?"',
        options: ['êtes', 'avez', 'allez', 'faites'],
        correct_answer: 'êtes',
        explanation: 'With "vous" (you), the verb "être" becomes "êtes". This asks about nationality.',
        hints: ['Look at the être conjugation table - what goes with vous?']
      },
      {
        id: 'ex-1-7',
        type: 'speaking',
        question: 'Practice this formal introduction: "Bonjour, je m\'appelle [your name]. Enchanté(e)!"',
        correct_answer: ['Bonjour, je m\'appelle [name]. Enchanté!', 'Bonjour, je m\'appelle [name]. Enchantée!'],
        explanation: 'Perfect! This is how you introduce yourself formally in French.',
        audio_prompt: 'Bonjour, je m\'appelle Marie. Enchantée!'
      }
    ],

    completion_criteria: {
      min_exercises_correct: 5,
      required_sections: ['dialogue', 'grammar', 'vocabulary', 'exercises']
    }
  }
]

// ... rest of the helper functions remain the same
export const getLessonById = (id: string): BeginnerLesson | undefined => {
  return beginnerLessons.find(lesson => lesson.id === id)
}

export const getBeginnerLessons = (): BeginnerLesson[] => {
  return beginnerLessons.sort((a, b) => a.order - b.order)
}

export const getFreeLessons = (): BeginnerLesson[] => {
  return beginnerLessons.filter(lesson => lesson.is_free)
}
