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
  },

  {
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
          highlight: 'ai'
        },
        {
          french: 'Vous avez des enfants?',
          english: 'Do you have children?',
          highlight: 'avez'
        },
        {
          french: 'Elle a une belle maison.',
          english: 'She has a beautiful house.',
          highlight: 'a'
        },
        {
          french: 'Nous avons beaucoup d\'amis.',
          english: 'We have many friends.',
          highlight: 'avons'
        },
        {
          french: 'Ils ont de la chance.',
          english: 'They are lucky.',
          highlight: 'ont'
        },
        {
          french: 'Tu as raison.',
          english: 'You are right.',
          highlight: 'as'
        },
        {
          french: 'J\'ai soif et j\'ai faim.',
          english: 'I am thirsty and I am hungry.',
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
