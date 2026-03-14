import { BeginnerLesson } from '../lessonTypes'

export const beginnerLesson2: BeginnerLesson = {
    id: 'beginner-2',
    title: 'Je m\'appelle... Meeting Someone New',
    subtitle: 'Deeper introductions, asking about origins, age, and mastering "avoir"',
    level: 'beginner',
    order: 2,
    estimated_time: 22,
    learning_objectives: [
      'Ask and answer questions about origins and nationality',
      'Express and ask about age using "avoir"',
      'Master the essential verb "avoir" (to have) conjugation',
      'Use polite question forms in conversation',
      'Understand French geography and nationalities',
      'Practice extended conversation beyond basic greetings'
    ],
    prerequisite_lessons: ['beginner-1'],
    is_free: true,
    difficulty: 2,
    tags: ['introductions', 'origins', 'age', 'avoir', 'nationalities', 'conversation'],
    
    dialogue: {
      title: 'Getting to Know Each Other Better',
      context: 'Continuing the conversation from Lesson 1, Marie and Thomas share more personal information, discussing their backgrounds, ages, and what brought them to Paris. This shows how French conversations naturally progress from formal greetings to more personal exchanges.',
      exchanges: [
        {
          speaker: 'Marie',
          french: 'Alors Thomas, d\'où venez-vous exactement?',
          english: 'So Thomas, where exactly are you from?',
          pronunciation: 'ah-LOOR toh-MAH, doo vuh-nay voo ex-ak-tuh-MAHN?',
          cultural_note: '"Alors" is a very common conversation starter, similar to "so" in English.'
        },
        {
          speaker: 'Thomas',
          french: 'Je viens de Lyon, dans le sud-est de la France. C\'est une belle ville.',
          english: 'I come from Lyon, in the southeast of France. It\'s a beautiful city.',
          pronunciation: 'zhuh vee-ahn duh lee-OHN, dahn luh sood-EST duh lah frahnss. say toon bell veel.'
        },
        {
          speaker: 'Marie',
          french: 'Ah oui! J\'ai des amis à Lyon. Quel âge avez-vous, si ce n\'est pas indiscret?',
          english: 'Oh yes! I have friends in Lyon. How old are you, if you don\'t mind me asking?',
          pronunciation: 'ah WEE! zhay day za-MEE ah lee-OHN. kell ahzh a-vay VOO, see suh nay pah an-dees-KRAY?',
          cultural_note: 'Adding "si ce n\'est pas indiscret" (if it\'s not indiscreet) is a polite way to ask personal questions.'
        },
        {
          speaker: 'Thomas',
          french: 'J\'ai vingt-huit ans. Et vous?',
          english: 'I\'m twenty-eight years old. And you?',
          pronunciation: 'zhuh vahn-weet AHN. ay VOO?'
        },
        {
          speaker: 'Marie',
          french: 'Moi, j\'ai vingt-cinq ans. Vous avez de la famille à Lyon?',
          english: 'I\'m twenty-five years old. Do you have family in Lyon?',
          pronunciation: 'mwah, zhay vahn-sank AHN. voo za-vay duh lah fa-MEEL ah lee-OHN?'
        },
        {
          speaker: 'Thomas',
          french: 'Oui, j\'ai mes parents et ma sœur là-bas. Ils ont un petit restaurant.',
          english: 'Yes, I have my parents and my sister there. They have a small restaurant.',
          pronunciation: 'WEE, zhay may pa-RAHN ay ma SUR lah-BAH. eel zohn tahn puh-TEE res-toh-RAHN.'
        },
        {
          speaker: 'Marie',
          french: 'Que c\'est intéressant! Et vous, vous avez quel métier?',
          english: 'How interesting! And what\'s your profession?',
          pronunciation: 'kuh say tan-tay-ray-SAHN! ay VOO, voo za-vay kell may-tee-AY?'
        },
        {
          speaker: 'Thomas',
          french: 'Je suis architecte. J\'ai un projet important ici à Paris. Et vous, Marie?',
          english: 'I\'m an architect. I have an important project here in Paris. And you, Marie?',
          pronunciation: 'zhuh swee ar-shee-TEKT. zhay tahn pro-ZHAY an-por-TAHN ee-see ah pa-REE. ay VOO, ma-REE?'
        },
        {
          speaker: 'Marie',
          french: 'Moi, je suis journaliste. J\'ai beaucoup de chance, j\'adore mon travail!',
          english: 'I\'m a journalist. I\'m very lucky, I love my work!',
          pronunciation: 'mwah, zhuh swee zhoor-na-LEEST. zhay bo-KOO duh shahnss, zha-DOOR mohn tra-VIE!',
          cultural_note: 'French people often express enthusiasm about their work when it\'s something they\'re passionate about.'
        }
      ],
      cultural_notes: [
        'Lyon is France\'s third-largest city, famous for gastronomy and silk production',
        'French people are generally comfortable discussing age in casual conversations',
        'Family businesses, especially restaurants, are very common and respected in France',
        'When French people say "j\'ai de la chance" (I\'m lucky), it often shows modesty about their success',
        'Professions are an important part of French identity - people take pride in their work',
        'The phrase "là-bas" (over there) is commonly used to refer to one\'s hometown when away'
      ],
      vocabulary_highlights: ['d\'où', 'venir de', 'avoir', 'âge', 'famille', 'métier', 'projet']
    },

    grammar: {
      topic: 'The Essential Verb "avoir" (to have) - Expressing Possession, Age, and States',
      explanation: 'The verb "avoir" (to have) is the second most important verb in French after "être". Unlike English, French uses "avoir" to express age ("I have 20 years" instead of "I am 20 years old"). It\'s also used for possessions, family relationships, and many idiomatic expressions that are essential for daily conversation.',
      patterns: [
        'Age: "J\'ai vingt ans" (I am twenty years old)',
        'Possession: "J\'ai une voiture" (I have a car)',
        'Family: "J\'ai deux frères" (I have two brothers)', 
        'States: "J\'ai faim" (I am hungry - literally "I have hunger")',
        'Experiences: "J\'ai de la chance" (I am lucky)',
        'Physical traits: "Il a les yeux bleus" (He has blue eyes)'
      ],
      examples: [
        {
          french: 'J\'ai vingt-cinq ans.',
          english: 'I am twenty-five years old.',
          pronunciation: 'Jhay vant-sank ON',
          highlight: 'ai'
        },
        {
          french: 'Vous avez des enfants?',
          english: 'Do you have children?',
          pronunciation: 'Voo-zah-vay day-zon-FON',
          highlight: 'avez'
        },
        {
          french: 'Elle a une belle maison.',
          english: 'She has a beautiful house.',
          pronunciation: 'El ah oon bel may-ZON',
          highlight: 'a'
        },
        {
          french: 'Nous avons beaucoup d\'amis.',
          english: 'We have many friends.',
          pronunciation: 'Noo-zah-von bo-koo dah-MEE',
          highlight: 'avons'
        },
        {
          french: 'Ils ont de la chance.',
          english: 'They are lucky.',
          pronunciation: 'Eel-zon duh la SHONS',
          highlight: 'ont'
        },
        {
          french: 'Tu as raison.',
          english: 'You are right.',
          pronunciation: 'Too ah ray-ZON',
          highlight: 'as'
        },
        {
          french: 'J\'ai soif et j\'ai faim.',
          english: 'I am thirsty and I am hungry.',
          pronunciation: 'Jhay swaf ay jhay FAM',
          highlight: 'ai'
        }
      ],
      conjugation_table: [
        { pronoun: 'j\'', form: 'ai', pronunciation: 'zhay' },
        { pronoun: 'tu', form: 'as', pronunciation: 'too ah' },
        { pronoun: 'il/elle/on', form: 'a', pronunciation: 'eel/ell/ohn ah' },
        { pronoun: 'nous', form: 'avons', pronunciation: 'noo za-vohn' },
        { pronoun: 'vous', form: 'avez', pronunciation: 'voo za-vay' },
        { pronoun: 'ils/elles', form: 'ont', pronunciation: 'eel/ell zohn' }
      ]
    },

    vocabulary: [
      // Origins and geography
      {
        word: 'd\'où',
        translation: 'from where',
        pronunciation: 'DOO',
        example_sentence: 'D\'où venez-vous?',
        example_translation: 'Where are you from?',
        category: 'origins'
      },
      {
        word: 'venir de',
        translation: 'to come from',
        pronunciation: 'vuh-NEER duh',
        example_sentence: 'Je viens de Marseille.',
        example_translation: 'I come from Marseille.',
        category: 'origins'
      },
      {
        word: 'ville',
        translation: 'city',
        pronunciation: 'veel',
        example_sentence: 'Paris est une grande ville.',
        example_translation: 'Paris is a big city.',
        category: 'geography'
      },
      {
        word: 'région',
        translation: 'region',
        pronunciation: 'ray-zhee-OHN',
        example_sentence: 'La Provence est une belle région.',
        example_translation: 'Provence is a beautiful region.',
        category: 'geography'
      },
      
      // Age and numbers
      {
        word: 'âge',
        translation: 'age',
        pronunciation: 'ahzh',
        example_sentence: 'Quel âge avez-vous?',
        example_translation: 'How old are you?',
        category: 'age'
      },
      {
        word: 'an/ans',
        translation: 'year/years',
        pronunciation: 'ahn/ahn',
        example_sentence: 'J\'ai trente ans.',
        example_translation: 'I am thirty years old.',
        category: 'age'
      },
      {
        word: 'vingt',
        translation: 'twenty',
        pronunciation: 'vahn',
        example_sentence: 'J\'ai vingt ans.',
        example_translation: 'I am twenty years old.',
        category: 'numbers'
      },
      {
        word: 'vingt-cinq',
        translation: 'twenty-five',
        pronunciation: 'vahn-sank',
        example_sentence: 'Elle a vingt-cinq ans.',
        example_translation: 'She is twenty-five years old.',
        category: 'age'
      },
      {
        word: 'trente',
        translation: 'thirty',
        pronunciation: 'trahnnt',
        example_sentence: 'Mon frère a trente ans.',
        example_translation: 'My brother is thirty years old.',
        category: 'numbers'
      },
      
      // Family
      {
        word: 'famille',
        translation: 'family',
        pronunciation: 'ba-MEEL',
        example_sentence: 'J\'ai une grande famille.',
        example_translation: 'I have a big family.',
        category: 'family'
      },
      {
        word: 'parents',
        translation: 'parents',
        pronunciation: 'pa-RAHN',
        example_sentence: 'Mes parents habitent à Lyon.',
        example_translation: 'My parents live in Lyon.',
        category: 'family'
      },
      {
        word: 'frère',
        translation: 'brother',
        pronunciation: 'frair',
        example_sentence: 'J\'ai un frère et une sœur.',
        example_translation: 'I have a brother and a sister.',
        category: 'family'
      },
      {
        word: 'sœur',
        translation: 'sister',
        pronunciation: 'sur',
        example_sentence: 'Ma sœur est médecin.',
        example_translation: 'My sister is a doctor.',
        category: 'family'
      },
      {
        word: 'enfant',
        translation: 'child',
        pronunciation: 'ahn-fahn',
        example_sentence: 'Ils ont deux enfants.',
        example_translation: 'They have two children.',
        category: 'family'
      },
      
      // Professions
      {
        word: 'métier',
        translation: 'profession/job',
        pronunciation: 'may-tee-AY',
        example_sentence: 'Quel est votre métier?',
        example_translation: 'What is your profession?',
        category: 'professions'
      },
      {
        word: 'architecte',
        translation: 'architect',
        pronunciation: 'ar-shee-TEKT',
        example_sentence: 'Je suis architecte.',
        example_translation: 'I am an architect.',
        category: 'professions'
      },
      {
        word: 'journaliste',
        translation: 'journalist',
        pronunciation: 'zhoor-na-LEEST',
        example_sentence: 'Elle est journaliste.',
        example_translation: 'She is a journalist.',
        category: 'professions'
      },
      {
        word: 'professeur',
        translation: 'teacher/professor',
        pronunciation: 'pro-feh-SUR',
        example_sentence: 'Mon père est professeur.',
        example_translation: 'My father is a teacher.',
        category: 'professions'
      },
      {
        word: 'médecin',
        translation: 'doctor',
        pronunciation: 'mayd-sahn',
        example_sentence: 'Dr. Martin est médecin.',
        example_translation: 'Dr. Martin is a doctor.',
        category: 'professions'
      },
      
      // Common expressions with avoir
      {
        word: 'avoir de la chance',
        translation: 'to be lucky',
        pronunciation: 'a-vwahr duh lah shahnss',
        example_sentence: 'J\'ai de la chance!',
        example_translation: 'I\'m lucky!',
        category: 'expressions'
      },
      {
        word: 'avoir faim',
        translation: 'to be hungry',
        pronunciation: 'a-vwahr fahn',
        example_sentence: 'J\'ai très faim.',
        example_translation: 'I\'m very hungry.',
        category: 'expressions'
      },
      {
        word: 'avoir soif',
        translation: 'to be thirsty',
        pronunciation: 'a-vwahr swahf',
        example_sentence: 'Tu as soif?',
        example_translation: 'Are you thirsty?',
        category: 'expressions'
      },
      {
        word: 'avoir raison',
        translation: 'to be right',
        pronunciation: 'a-vwahr ray-ZOHN',
        example_sentence: 'Vous avez raison.',
        example_translation: 'You are right.',
        category: 'expressions'
      },
      
      // Conversation connectors
      {
        word: 'alors',
        translation: 'so/then',
        pronunciation: 'ah-LOOR',
        example_sentence: 'Alors, comment ça va?',
        example_translation: 'So, how are you?',
        category: 'connectors'
      },
      {
        word: 'exactement',
        translation: 'exactly',
        pronunciation: 'ex-ak-tuh-MAHN',
        example_sentence: 'Oui, exactement!',
        example_translation: 'Yes, exactly!',
        category: 'connectors'
      },
      {
        word: 'là-bas',
        translation: 'over there/back there',
        pronunciation: 'lah-BAH',
        example_sentence: 'Mes amis habitent là-bas.',
        example_translation: 'My friends live over there.',
        category: 'location'
      },
      {
        word: 'ici',
        translation: 'here',
        pronunciation: 'ee-SEE',
        example_sentence: 'Je travaille ici.',
        example_translation: 'I work here.',
        category: 'location'
      }
    ],

    exercises: [
      {
        id: 'ex-2-1',
        type: 'multiple_choice',
        question: 'How do you ask "How old are you?" formally in French?',
        options: ['Quel âge tu as?', 'Quel âge avez-vous?', 'Combien d\'ans êtes-vous?', 'Vous êtes quel âge?'],
        correct_answer: 'Quel âge avez-vous?',
        explanation: '"Quel âge avez-vous?" is the correct formal way to ask someone\'s age using "avoir".',
        hints: ['Remember to use "vous" for formal situations and "avoir" for age']
      },
      {
        id: 'ex-2-2',
        type: 'fill_blank',
        question: 'Complete: "J\'_____ vingt-cinq ans." (I am twenty-five years old)',
        correct_answer: ['ai'],
        explanation: 'In French, age is expressed with "avoir" (to have). "J\'ai vingt-cinq ans" literally means "I have twenty-five years".',
        hints: ['French uses "avoir" for age, not "être"']
      },
      {
        id: 'ex-2-3',
        type: 'multiple_choice',
        question: 'Complete with "avoir": "Vous _____ des enfants?"',
        options: ['êtes', 'avez', 'allez', 'faites'],
        correct_answer: 'avez',
        explanation: 'With "vous" (you), the verb "avoir" becomes "avez". This asks about having children.',
        hints: ['Look at the avoir conjugation table - what goes with vous?']
      },
      {
        id: 'ex-2-4',
        type: 'translation',
        question: 'Translate to French: "Where are you from?" (formal)',
        correct_answer: ['D\'où venez-vous?', 'D\'où venez-vous', 'Vous venez d\'où?'],
        explanation: '"D\'où venez-vous?" is the formal way to ask about someone\'s origin.',
        hints: ['Use "d\'où" (from where) and the formal "vous"']
      },
      {
        id: 'ex-2-5',
        type: 'multiple_choice',
        question: 'Which expression means "to be lucky" in French?',
        options: ['avoir peur', 'avoir de la chance', 'avoir soif', 'avoir raison'],
        correct_answer: 'avoir de la chance',
        explanation: '"Avoir de la chance" literally means "to have luck" and is used to say "to be lucky".',
        hints: ['Think about which expression contains the word for "luck" (chance)']
      },
      {
        id: 'ex-2-6',
        type: 'fill_blank',
        question: 'Complete: "Je _____ de Lyon." (I come from Lyon)',
        correct_answer: ['viens'],
        explanation: '"Je viens de" means "I come from". "Venir de" is used to express origin.',
        hints: ['This is about where someone comes from, not about having something']
      },
      {
        id: 'ex-2-7',
        type: 'speaking',
        question: 'Practice introducing yourself with age and origin: "Je m\'appelle [name], j\'ai [age] ans et je viens de [city]."',
        correct_answer: ['Je m\'appelle [name], j\'ai [age] ans et je viens de [city].'],
        explanation: 'Perfect! This is a complete self-introduction including name, age, and origin.',
        audio_prompt: 'Je m\'appelle Marie, j\'ai vingt-cinq ans et je viens de Paris.'
      }
    ],

    completion_criteria: {
      min_exercises_correct: 5,
      required_sections: ['dialogue', 'grammar', 'vocabulary', 'exercises']
    }
}

