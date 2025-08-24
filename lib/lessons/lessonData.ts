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
        question: 'Respond politely: "Merci beaucoup!" - "_____!"',
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
  },

  {
    id: 'beginner-3',
    title: 'Au Café - Ordering & Basic Needs',
    subtitle: 'Essential phrases for ordering, expressing needs, and polite requests',
    level: 'beginner',
    order: 3,
    estimated_time: 20,
    learning_objectives: [
      'Order food and drinks confidently in French cafés',
      'Express basic needs and wants using "avoir" expressions',
      'Use polite request forms and restaurant etiquette',
      'Master numbers for prices and quantities',
      'Handle basic café interactions from arrival to payment',
      'Understand French café culture and menu basics'
    ],
    prerequisite_lessons: ['beginner-1', 'beginner-2'],
    is_free: true,
    difficulty: 2,
    tags: ['café', 'ordering', 'food', 'drinks', 'politeness', 'money', 'avoir-expressions'],
    
    dialogue: {
      title: 'Ordering at a Traditional Parisian Café',
      context: 'Marie and Thomas decide to order something at the café where they met. This dialogue shows a complete café interaction from getting the server\'s attention to paying the bill, demonstrating essential vocabulary and polite expressions used daily in France.',
      exchanges: [
        {
          speaker: 'Marie',
          french: 'Excusez-moi, monsieur! Pourrions-nous avoir la carte, s\'il vous plaît?',
          english: 'Excuse me, sir! Could we have the menu, please?',
          pronunciation: 'ex-koo-zay MWAH, muh-SYUR! poor-ee-ohn NOO za-vwahr la kart, seel voo PLAY?',
          cultural_note: 'Always address waiters as "monsieur" and waitresses as "mademoiselle" or "madame".'
        },
        {
          speaker: 'Serveur',
          french: 'Bien sûr! Voici la carte. Que désirez-vous boire?',
          english: 'Of course! Here\'s the menu. What would you like to drink?',
          pronunciation: 'bee-ahn SOOR! vwah-SEE la kart. kuh day-zee-ray VOO bwahr?'
        },
        {
          speaker: 'Thomas',
          french: 'J\'ai très soif... Je voudrais un café, s\'il vous plaît.',
          english: 'I\'m very thirsty... I would like a coffee, please.',
          pronunciation: 'zhay tray SWAHF... zhuh voo-DRAY zuhn ka-FAY, seel voo PLAY.'
        },
        {
          speaker: 'Marie',
          french: 'Et moi, je prends un thé au citron. Avez-vous des croissants?',
          english: 'And I\'ll have a lemon tea. Do you have croissants?',
          pronunciation: 'ay MWAH, zhuh prahn zuhn tay oh see-TROHN. a-vay VOO day krwah-SAHN?'
        },
        {
          speaker: 'Serveur',
          french: 'Oui, nous avons des croissants frais. Vous avez faim?',
          english: 'Yes, we have fresh croissants. Are you hungry?',
          pronunciation: 'WEE, noo za-vohn day krwah-SAHN fray. voo za-vay FAHN?'
        },
        {
          speaker: 'Marie',
          french: 'Oui, j\'ai un peu faim. Deux croissants, s\'il vous plaît.',
          english: 'Yes, I\'m a little hungry. Two croissants, please.',
          pronunciation: 'WEE, zhay zuhn puh FAHN. duh krwah-SAHN, seel voo PLAY.',
          cultural_note: '"Un peu" (a little) is a polite way to express mild hunger rather than saying you\'re very hungry.'
        },
        {
          speaker: 'Thomas',
          french: 'Parfait! Et combien ça coûte, tout ça?',
          english: 'Perfect! And how much does all that cost?',
          pronunciation: 'par-FAY! ay kohn-bee-ahn sah KOOT, too SAH?'
        },
        {
          speaker: 'Serveur',
          french: 'Alors... un café, un thé, deux croissants... ça fait huit euros cinquante.',
          english: 'So... one coffee, one tea, two croissants... that makes eight euros fifty.',
          pronunciation: 'ah-LOOR... zuhn ka-FAY, zuhn TAY, duh krwah-SAHN... sah fay weet uh-ROH san-KAHNNT.'
        },
        {
          speaker: 'Marie',
          french: 'Très bien. Voici dix euros. Gardez la monnaie!',
          english: 'Very good. Here\'s ten euros. Keep the change!',
          pronunciation: 'tray bee-AHN. vwah-SEE dees uh-ROH. gar-day la mo-NAY!',
          cultural_note: 'Tipping in French cafés is optional - rounding up or leaving small change is sufficient.'
        }
      ],
      cultural_notes: [
        'French café culture: people sit for hours, cafés are social centers, not just for quick coffee',
        'Morning pastries: croissants, pain au chocolat, and tartines are typical breakfast items',
        'Café etiquette: wait to be seated at table service, but you can sit anywhere at counter service',
        'Pricing: drinks cost more at tables than at the counter ("au comptoir")',
        'Tipping: 5-10% is appreciated but not mandatory; rounding up the bill is common',
        'French cafés often double as neighborhood meeting places and informal offices'
      ],
      vocabulary_highlights: ['avoir soif', 'avoir faim', 'je voudrais', 'combien', 'ça coûte', 'euros']
    },

    grammar: {
      topic: 'Essential "Avoir" Expressions & Polite Requests',
      explanation: 'French uses "avoir" (to have) for many states that English expresses with "to be". These expressions are essential for daily life - expressing hunger, thirst, and needs. Additionally, polite request forms like "je voudrais" (I would like) make your French sound more natural and courteous.',
      patterns: [
        'Physical states: "J\'ai faim/soif/froid/chaud" (I am hungry/thirsty/cold/hot)',
        'Emotions: "J\'ai peur/honte" (I am scared/ashamed)', 
        'Conditions: "J\'ai raison/tort" (I am right/wrong)',
        'Polite requests: "Je voudrais..." (I would like...)',
        'Asking prices: "Combien ça coûte?" (How much does it cost?)',
        'Age reminder: "J\'ai vingt ans" (I am twenty years old)'
      ],
      examples: [
        {
          french: 'J\'ai très faim et j\'ai soif.',
          english: 'I am very hungry and I am thirsty.',
          highlight: 'ai faim... ai soif'
        },
        {
          french: 'Je voudrais un café, s\'il vous plaît.',
          english: 'I would like a coffee, please.',
          highlight: 'voudrais'
        },
        {
          french: 'Combien ça coûte?',
          english: 'How much does it cost?',
          highlight: 'combien'
        },
        {
          french: 'Nous avons froid en hiver.',
          english: 'We are cold in winter.',
          highlight: 'avons froid'
        },
        {
          french: 'Tu as raison, c\'est délicieux!',
          english: 'You are right, it\'s delicious!',
          highlight: 'as raison'
        },
        {
          french: 'Ils ont chaud en été.',
          english: 'They are hot in summer.',
          highlight: 'ont chaud'
        }
      ],
      conjugation_table: [
        { pronoun: 'j\'', form: 'ai faim/soif/froid', pronunciation: 'zhay fahn/swahf/frwah' },
        { pronoun: 'tu', form: 'as faim/soif/froid', pronunciation: 'too ah fahn/swahf/frwah' },
        { pronoun: 'il/elle', form: 'a faim/soif/froid', pronunciation: 'eel/ell ah fahn/swahf/frwah' },
        { pronoun: 'nous', form: 'avons faim/soif/froid', pronunciation: 'noo za-vohn fahn/swahf/frwah' },
        { pronoun: 'vous', form: 'avez faim/soif/froid', pronunciation: 'voo za-vay fahn/swahf/frwah' },
        { pronoun: 'ils/elles', form: 'ont faim/soif/froid', pronunciation: 'eel/ell zohn fahn/swahf/frwah' }
      ]
    },

    vocabulary: [
      // Café vocabulary
      {
        word: 'café',
        translation: 'coffee/café',
        pronunciation: 'ka-FAY',
        example_sentence: 'Je prends un café noir.',
        example_translation: 'I\'ll have a black coffee.',
        category: 'drinks'
      },
      {
        word: 'thé',
        translation: 'tea',
        pronunciation: 'TAY',
        example_sentence: 'Un thé au lait, s\'il vous plaît.',
        example_translation: 'A tea with milk, please.',
        category: 'drinks'
      },
      {
        word: 'eau',
        translation: 'water',
        pronunciation: 'OH',
        example_sentence: 'Une carafe d\'eau, s\'il vous plaît.',
        example_translation: 'A carafe of water, please.',
        category: 'drinks'
      },
      {
        word: 'jus',
        translation: 'juice',
        pronunciation: 'ZHUU',
        example_sentence: 'Un jus d\'orange frais.',
        example_translation: 'A fresh orange juice.',
        category: 'drinks'
      },
      
      // Food items
      {
        word: 'croissant',
        translation: 'croissant',
        pronunciation: 'krwah-SAHN',
        example_sentence: 'Deux croissants au beurre.',
        example_translation: 'Two butter croissants.',
        category: 'food'
      },
      {
        word: 'pain',
        translation: 'bread',
        pronunciation: 'PAHN',
        example_sentence: 'Du pain frais avec du beurre.',
        example_translation: 'Fresh bread with butter.',
        category: 'food'
      },
      {
        word: 'sandwich',
        translation: 'sandwich',
        pronunciation: 'sahn-DWEESH',
        example_sentence: 'Un sandwich jambon-fromage.',
        example_translation: 'A ham and cheese sandwich.',
        category: 'food'
      },
      {
        word: 'salade',
        translation: 'salad',
        pronunciation: 'sa-LAHD',
        example_sentence: 'Une salade verte, s\'il vous plaît.',
        example_translation: 'A green salad, please.',
        category: 'food'
      },
      
      // Avoir expressions (physical states)
      {
        word: 'avoir faim',
        translation: 'to be hungry',
        pronunciation: 'a-vwahr FAHN',
        example_sentence: 'J\'ai très faim!',
        example_translation: 'I\'m very hungry!',
        category: 'avoir-expressions'
      },
      {
        word: 'avoir soif',
        translation: 'to be thirsty',
        pronunciation: 'a-vwahr SWAHF',
        example_sentence: 'Tu as soif? Veux-tu de l\'eau?',
        example_translation: 'Are you thirsty? Do you want some water?',
        category: 'avoir-expressions'
      },
      {
        word: 'avoir chaud',
        translation: 'to be hot',
        pronunciation: 'a-vwahr SHOH',
        example_sentence: 'J\'ai chaud, ouvrez la fenêtre!',
        example_translation: 'I\'m hot, open the window!',
        category: 'avoir-expressions'
      },
      {
        word: 'avoir froid',
        translation: 'to be cold',
        pronunciation: 'a-vwahr FRWAH',
        example_sentence: 'Nous avons froid en hiver.',
        example_translation: 'We are cold in winter.',
        category: 'avoir-expressions'
      },
      
      // Polite expressions
      {
        word: 'je voudrais',
        translation: 'I would like',
        pronunciation: 'zhuh voo-DRAY',
        example_sentence: 'Je voudrais un café, s\'il vous plaît.',
        example_translation: 'I would like a coffee, please.',
        category: 'politeness'
      },
      {
        word: 'pourriez-vous',
        translation: 'could you (formal)',
        pronunciation: 'poor-ee-ay VOO',
        example_sentence: 'Pourriez-vous m\'aider?',
        example_translation: 'Could you help me?',
        category: 'politeness'
      },
      {
        word: 'je prends',
        translation: 'I\'ll take/have',
        pronunciation: 'zhuh PRAHN',
        example_sentence: 'Je prends la salade, merci.',
        example_translation: 'I\'ll have the salad, thank you.',
        category: 'ordering'
      },
      {
        word: 'pour moi',
        translation: 'for me',
        pronunciation: 'poor MWAH',
        example_sentence: 'Un thé pour moi, s\'il vous plaît.',
        example_translation: 'A tea for me, please.',
        category: 'ordering'
      },
      
      // Money and numbers
      {
        word: 'combien',
        translation: 'how much/how many',
        pronunciation: 'kohn-bee-AHN',
        example_sentence: 'Combien ça coûte?',
        example_translation: 'How much does it cost?',
        category: 'money'
      },
      {
        word: 'ça coûte',
        translation: 'it costs',
        pronunciation: 'sah KOOT',
        example_sentence: 'Ça coûte dix euros.',
        example_translation: 'It costs ten euros.',
        category: 'money'
      },
      {
        word: 'euro',
        translation: 'euro',
        pronunciation: 'uh-ROH',
        example_sentence: 'Cinq euros, s\'il vous plaît.',
        example_translation: 'Five euros, please.',
        category: 'money'
      },
      {
        word: 'centimes',
        translation: 'cents',
        pronunciation: 'sahn-TEEM',
        example_sentence: 'Deux euros cinquante centimes.',
        example_translation: 'Two euros fifty cents.',
        category: 'money'
      },
      {
        word: 'monnaie',
        translation: 'change/coins',
        pronunciation: 'mo-NAY',
        example_sentence: 'Gardez la monnaie!',
        example_translation: 'Keep the change!',
        category: 'money'
      },
      
      // Numbers (essential for ordering)
      {
        word: 'un/une',
        translation: 'one',
        pronunciation: 'uhn/UUN',
        example_sentence: 'Un café et une eau.',
        example_translation: 'One coffee and one water.',
        category: 'numbers'
      },
      {
        word: 'deux',
        translation: 'two',
        pronunciation: 'DUH',
        example_sentence: 'Deux croissants, s\'il vous plaît.',
        example_translation: 'Two croissants, please.',
        category: 'numbers'
      },
      {
        word: 'trois',
        translation: 'three',
        pronunciation: 'TRWAH',
        example_sentence: 'Trois cafés pour la table.',
        example_translation: 'Three coffees for the table.',
        category: 'numbers'
      },
      {
        word: 'cinq',
        translation: 'five',
        pronunciation: 'SANK',
        example_sentence: 'Ça fait cinq euros.',
        example_translation: 'That makes five euros.',
        category: 'numbers'
      },
      {
        word: 'dix',
        translation: 'ten',
        pronunciation: 'DEES',
        example_sentence: 'Voici dix euros.',
        example_translation: 'Here are ten euros.',
        category: 'numbers'
      },
      
      // Café service
      {
        word: 'serveur',
        translation: 'waiter',
        pronunciation: 'ser-VUR',
        example_sentence: 'Le serveur est très aimable.',
        example_translation: 'The waiter is very kind.',
        category: 'service'
      },
      {
        word: 'carte',
        translation: 'menu',
        pronunciation: 'KART',
        example_sentence: 'Pourrions-nous avoir la carte?',
        example_translation: 'Could we have the menu?',
        category: 'service'
      },
      {
        word: 'addition',
        translation: 'bill/check',
        pronunciation: 'a-dee-see-OHN',
        example_sentence: 'L\'addition, s\'il vous plaît.',
        example_translation: 'The bill, please.',
        category: 'service'
      }
    ],

    exercises: [
      {
        id: 'ex-3-1',
        type: 'multiple_choice',
        question: 'How do you say "I am hungry" in French?',
        options: ['Je suis faim', 'J\'ai faim', 'Je veux faim', 'Je mange faim'],
        correct_answer: 'J\'ai faim',
        explanation: 'French uses "avoir" (to have) for hunger: "J\'ai faim" literally means "I have hunger".',
        hints: ['Remember that French uses "avoir" for physical states like hunger']
      },
      {
        id: 'ex-3-2',
        type: 'fill_blank',
        question: 'Complete the polite request: "Je _______ un café, s\'il vous plaît."',
        correct_answer: ['voudrais'],
        explanation: '"Je voudrais" (I would like) is the polite way to make requests in French.',
        hints: ['This is the conditional form that sounds more polite than "je veux"']
      },
      {
        id: 'ex-3-3',
        type: 'multiple_choice',
        question: 'How do you ask "How much does it cost?" in French?',
        options: ['Quel prix ça?', 'Combien ça coûte?', 'Combien prix?', 'Ça coûte quoi?'],
        correct_answer: 'Combien ça coûte?',
        explanation: '"Combien ça coûte?" is the standard way to ask about price in French.',
        hints: ['"Combien" means "how much" and "coûter" means "to cost"']
      },
      {
        id: 'ex-3-4',
        type: 'translation',
        question: 'Translate to French: "Two croissants, please."',
        correct_answer: ['Deux croissants, s\'il vous plaît.', 'Deux croissants, s\'il vous plaît'],
        explanation: '"Deux croissants, s\'il vous plaît" - remember that "croissant" stays the same in plural.',
        hints: ['Use "deux" for "two" and don\'t forget the polite "s\'il vous plaît"']
      },
      {
        id: 'ex-3-5',
        type: 'fill_blank',
        question: 'Complete: "Nous ______ très soif!" (We are very thirsty!)',
        correct_answer: ['avons'],
        explanation: 'With "nous" (we), the verb "avoir" becomes "avons". "Avoir soif" means "to be thirsty".',
        hints: ['This is about being thirsty, not about having something']
      },
      {
        id: 'ex-3-6',
        type: 'multiple_choice',
        question: 'In a French café, how do you politely ask for the menu?',
        options: ['Donnez-moi la carte!', 'Je veux la carte.', 'Pourriez-vous avoir la carte?', 'Pourrions-nous avoir la carte, s\'il vous plaît?'],
        correct_answer: 'Pourrions-nous avoir la carte, s\'il vous plaît?',
        explanation: '"Pourrions-nous avoir la carte, s\'il vous plaît?" is the most polite way to request the menu.',
        hints: ['The most polite option includes "pourriez-vous" or "pourrions-nous" + "s\'il vous plaît"']
      },
      {
        id: 'ex-3-7',
        type: 'speaking',
        question: 'Practice ordering: "Je voudrais un café et un croissant, s\'il vous plaît. Combien ça coûte?"',
        correct_answer: ['Je voudrais un café et un croissant, s\'il vous plaît. Combien ça coûte?'],
        explanation: 'Excellent! You\'ve mastered a complete café order with polite language.',
        audio_prompt: 'Je voudrais un café et un croissant, s\'il vous plaît. Combien ça coûte?'
      }
    ],

    completion_criteria: {
      min_exercises_correct: 5,
      required_sections: ['dialogue', 'grammar', 'vocabulary', 'exercises']
    }
  },

  {
    id: 'beginner-4',
    title: 'Les Nombres et le Temps - Numbers & Time',
    subtitle: 'Master numbers, days, months, and telling time in French',
    level: 'beginner',
    order: 4,
    estimated_time: 28,
    learning_objectives: [
      'Count from 1 to 100 confidently in French',
      'Name all days of the week and months of the year',
      'Tell time using both 12-hour and 24-hour formats',
      'Ask and answer questions about dates and schedules',
      'Use time expressions in daily conversations',
      'Handle practical situations involving numbers and time'
    ],
    prerequisite_lessons: ['beginner-1', 'beginner-2', 'beginner-3'],
    is_free: true,
    difficulty: 2,
    tags: ['numbers', 'time', 'dates', 'schedule', 'calendar', 'practical'],
    
    dialogue: {
      title: 'Planning a Meeting - At the Office',
      context: 'Marie (the journalist from previous lessons) is scheduling an interview with Thomas (the architect) for her article about urban development in Paris. This dialogue demonstrates practical use of numbers, time expressions, and scheduling vocabulary in a professional context.',
      exchanges: [
        {
          speaker: 'Marie',
          french: 'Bonjour Thomas! Quel jour sommes-nous aujourd\'hui?',
          english: 'Hello Thomas! What day is it today?',
          pronunciation: 'bon-ZHOOR toh-MAH! kell ZHOOR som noo oh-zhoor-DWEE?'
        },
        {
          speaker: 'Thomas',
          french: 'Nous sommes mardi, le quinze octobre.',
          english: 'It\'s Tuesday, October 15th.',
          pronunciation: 'noo som mar-DEE, luh KANZ ok-TOH-bruh.',
          cultural_note: 'In French, dates are written day-month-year, and "le" is used before the date number.'
        },
        {
          speaker: 'Marie',
          french: 'Parfait! Pourriez-vous me donner une interview jeudi prochain?',
          english: 'Perfect! Could you give me an interview next Thursday?',
          pronunciation: 'par-FAY! poor-ee-ay VOO muh do-NAY UUN an-ter-VYUU zhuh-DEE pro-SHAHN?'
        },
        {
          speaker: 'Thomas',
          french: 'Jeudi... c\'est le dix-sept octobre. Quelle heure vous convient?',
          english: 'Thursday... that\'s October 17th. What time suits you?',
          pronunciation: 'zhuh-DEE... say luh dees-SET ok-TOH-bruh. kell UR voo kohn-vee-AHN?'
        },
        {
          speaker: 'Marie',
          french: 'À quatorze heures? Ou préférez-vous quinze heures trente?',
          english: 'At 2 PM? Or do you prefer 3:30 PM?',
          pronunciation: 'ah ka-TORZ UR? oo pray-fay-ray VOO kanz UR trahnnt?',
          cultural_note: 'French commonly uses 24-hour time in formal situations: 14h00 = 2 PM, 15h30 = 3:30 PM.'
        },
        {
          speaker: 'Thomas',
          french: 'Quinze heures trente, c\'est parfait. Où nous retrouvons-nous?',
          english: '3:30 PM is perfect. Where shall we meet?',
          pronunciation: 'kanz UR trahnnt, say par-FAY. oo noo ruh-troo-vohn NOO?'
        },
        {
          speaker: 'Marie',
          french: 'À mon bureau, au vingt-cinq, rue de Rivoli. Premier étage.',
          english: 'At my office, at 25 Rue de Rivoli. First floor.',
          pronunciation: 'ah mohn buu-ROH, oh vahn-sank, ruu duh ree-vo-LEE. pruh-mee-AY ay-TAHZH.'
        },
        {
          speaker: 'Thomas',
          french: 'Très bien! L\'interview va durer combien de temps?',
          english: 'Very good! How long will the interview last?',
          pronunciation: 'tray bee-AHN! lan-ter-VYUU vah duu-RAY kohn-bee-AHN duh TAHN?'
        },
        {
          speaker: 'Marie',
          french: 'Environ une heure, une heure et demie maximum.',
          english: 'About an hour, an hour and a half maximum.',
          pronunciation: 'ahn-vee-ROHN UUN UR, UUN UR ay duh-MEE max-ee-MUUM.',
          cultural_note: '"Environ" (about/approximately) is very useful for expressing approximate time and quantities.'
        },
        {
          speaker: 'Thomas',
          french: 'Parfait! Alors, rendez-vous jeudi à quinze heures trente!',
          english: 'Perfect! So, see you Thursday at 3:30 PM!',
          pronunciation: 'par-FAY! ah-LOOR, rahn-day VOO zhuh-DEE ah kanz UR trahnnt!'
        }
      ],
      cultural_notes: [
        'French business culture: appointments are very punctual, arrive exactly on time',
        'Address format: number + street name, then floor ("étage")',
        'Time expressions: "prochain" (next) vs "dernier" (last) for weeks/months',
        'Professional meetings: often scheduled in 30-minute or 1-hour blocks',
        'French work week: Monday to Friday, lunch break typically 12:00-14:00',
        'Formal vs informal time: 24-hour format in business, 12-hour in casual conversation'
      ],
      vocabulary_highlights: ['quel jour', 'quinze', 'octobre', 'quelle heure', 'quatorze heures', 'rendez-vous']
    },

    grammar: {
      topic: 'Numbers, Time Expressions & Date Constructions',
      explanation: 'French numbers follow specific patterns, and time expressions use unique constructions. Understanding these patterns is essential for daily communication, from shopping to scheduling appointments. French uses both 12-hour and 24-hour time systems, with 24-hour being more formal.',
      patterns: [
        'Numbers 1-19: irregular forms to memorize',
        'Numbers 20-99: pattern-based (vingt-un, trente-deux, etc.)',
        'Time: "Il est" + hour + "heure(s)" + minutes',
        'Dates: "Nous sommes" + day + "le" + number + month',
        'Days/Months: always lowercase unless starting a sentence',
        'Asking time: "Quelle heure est-il?" (What time is it?)'
      ],
      examples: [
        {
          french: 'Il est quinze heures trente.',
          english: 'It is 3:30 PM.',
          highlight: 'quinze heures trente'
        },
        {
          french: 'Nous sommes lundi, le trois janvier.',
          english: 'It is Monday, January 3rd.',
          highlight: 'lundi, le trois janvier'
        },
        {
          french: 'J\'ai rendez-vous à dix heures et demie.',
          english: 'I have an appointment at 10:30.',
          highlight: 'dix heures et demie'
        },
        {
          french: 'Quelle heure est-il? Il est midi.',
          english: 'What time is it? It is noon.',
          highlight: 'Quelle heure... midi'
        },
        {
          french: 'Mon anniversaire est le vingt-cinq décembre.',
          english: 'My birthday is December 25th.',
          highlight: 'le vingt-cinq décembre'
        },
        {
          french: 'Le magasin ouvre à neuf heures du matin.',
          english: 'The store opens at 9 AM.',
          highlight: 'neuf heures du matin'
        }
      ],
      conjugation_table: [
        { pronoun: 'Time expressions', form: 'Il est + time', pronunciation: 'eel ay + time' },
        { pronoun: 'Date expressions', form: 'Nous sommes + day/date', pronunciation: 'noo som + day/date' },
        { pronoun: 'Question form', form: 'Quelle heure est-il?', pronunciation: 'kell UR ay-TEEL?' },
        { pronoun: 'Appointment', form: 'J\'ai rendez-vous à...', pronunciation: 'zhay rahn-day VOO ah...' },
        { pronoun: 'Duration', form: 'Ça dure... heures', pronunciation: 'sah DUUR... UR' },
        { pronoun: 'Frequency', form: 'Tous les jours/mois', pronunciation: 'too lay ZHOOR/MWAH' }
      ]
    },

    vocabulary: [
      // Numbers 1-20 (essential base)
      {
        word: 'un',
        translation: 'one',
        pronunciation: 'uhn',
        example_sentence: 'Il est une heure.',
        example_translation: 'It is one o\'clock.',
        category: 'numbers'
      },
      {
        word: 'deux',
        translation: 'two',
        pronunciation: 'duh',
        example_sentence: 'Deux cafés, s\'il vous plaît.',
        example_translation: 'Two coffees, please.',
        category: 'numbers'
      },
      {
        word: 'trois',
        translation: 'three',
        pronunciation: 'trwah',
        example_sentence: 'Il est trois heures.',
        example_translation: 'It is three o\'clock.',
        category: 'numbers'
      },
      {
        word: 'quatre',
        translation: 'four',
        pronunciation: 'KAH-truh',
        example_sentence: 'J\'ai quatre frères.',
        example_translation: 'I have four brothers.',
        category: 'numbers'
      },
      {
        word: 'cinq',
        translation: 'five',
        pronunciation: 'sank',
        example_sentence: 'Cinq euros, s\'il vous plaît.',
        example_translation: 'Five euros, please.',
        category: 'numbers'
      },
      {
        word: 'six',
        translation: 'six',
        pronunciation: 'sees',
        example_sentence: 'Il est six heures du soir.',
        example_translation: 'It is six o\'clock in the evening.',
        category: 'numbers'
      },
      {
        word: 'sept',
        translation: 'seven',
        pronunciation: 'set',
        example_sentence: 'Sept jours par semaine.',
        example_translation: 'Seven days per week.',
        category: 'numbers'
      },
      {
        word: 'huit',
        translation: 'eight',
        pronunciation: 'weet',
        example_sentence: 'Il est huit heures.',
        example_translation: 'It is eight o\'clock.',
        category: 'numbers'
      },
      {
        word: 'neuf',
        translation: 'nine',
        pronunciation: 'nuf',
        example_sentence: 'Neuf heures du matin.',
        example_translation: 'Nine o\'clock in the morning.',
        category: 'numbers'
      },
      {
        word: 'dix',
        translation: 'ten',
        pronunciation: 'dees',
        example_sentence: 'Dix minutes de retard.',
        example_translation: 'Ten minutes late.',
        category: 'numbers'
      },
      {
        word: 'onze',
        translation: 'eleven',
        pronunciation: 'ohnz',
        example_sentence: 'Il est onze heures.',
        example_translation: 'It is eleven o\'clock.',
        category: 'numbers'
      },
      {
        word: 'douze',
        translation: 'twelve',
        pronunciation: 'dooz',
        example_sentence: 'Douze mois par an.',
        example_translation: 'Twelve months per year.',
        category: 'numbers'
      },

      // Numbers 13-19 (teen numbers)
      {
        word: 'treize',
        translation: 'thirteen',
        pronunciation: 'tray',
        example_sentence: 'Il est treize heures.',
        example_translation: 'It is 1 PM (13:00).',
        category: 'numbers'
      },
      {
        word: 'quatorze',
        translation: 'fourteen',
        pronunciation: 'ka-torz',
        example_sentence: 'Quatorze juillet, fête nationale.',
        example_translation: 'July 14th, national holiday.',
        category: 'numbers'
      },
      {
        word: 'quinze',
        translation: 'fifteen',
        pronunciation: 'kanz',
        example_sentence: 'Quinze heures trente.',
        example_translation: '3:30 PM (15:30).',
        category: 'numbers'
      },
      {
        word: 'seize',
        translation: 'sixteen',
        pronunciation: 'say',
        example_sentence: 'J\'ai seize ans.',
        example_translation: 'I am sixteen years old.',
        category: 'numbers'
      },
      {
        word: 'dix-sept',
        translation: 'seventeen',
        pronunciation: 'dees-set',
        example_sentence: 'Le dix-sept octobre.',
        example_translation: 'October 17th.',
        category: 'numbers'
      },
      {
        word: 'dix-huit',
        translation: 'eighteen',
        pronunciation: 'dees-weet',
        example_sentence: 'Dix-huit ans, majorité.',
        example_translation: 'Eighteen years old, legal age.',
        category: 'numbers'
      },
      {
        word: 'dix-neuf',
        translation: 'nineteen',
        pronunciation: 'dees-nuf',
        example_sentence: 'Dix-neuf heures, c\'est tard.',
        example_translation: '7 PM (19:00), that\'s late.',
        category: 'numbers'
      },

      // Tens (20, 30, 40, etc.)
      {
        word: 'vingt',
        translation: 'twenty',
        pronunciation: 'vahn',
        example_sentence: 'J\'ai vingt ans.',
        example_translation: 'I am twenty years old.',
        category: 'numbers'
      },
      {
        word: 'trente',
        translation: 'thirty',
        pronunciation: 'trahnnt',
        example_sentence: 'Trente minutes de pause.',
        example_translation: 'Thirty minutes break.',
        category: 'numbers'
      },
      {
        word: 'quarante',
        translation: 'forty',
        pronunciation: 'ka-rahnnt',
        example_sentence: 'Ma mère a quarante ans.',
        example_translation: 'My mother is forty years old.',
        category: 'numbers'
      },
      {
        word: 'cinquante',
        translation: 'fifty',
        pronunciation: 'san-kahnnt',
        example_sentence: 'Cinquante euros, c\'est cher.',
        example_translation: 'Fifty euros, that\'s expensive.',
        category: 'numbers'
      },
      {
        word: 'soixante',
        translation: 'sixty',
        pronunciation: 'swas-sahnnt',
        example_sentence: 'Soixante minutes = une heure.',
        example_translation: 'Sixty minutes = one hour.',
        category: 'numbers'
      },
      {
        word: 'cent',
        translation: 'one hundred',
        pronunciation: 'sahn',
        example_sentence: 'Cent euros pour le dîner.',
        example_translation: 'One hundred euros for dinner.',
        category: 'numbers'
      },

      // Days of the week
      {
        word: 'lundi',
        translation: 'Monday',
        pronunciation: 'luhn-DEE',
        example_sentence: 'Lundi, je travaille.',
        example_translation: 'Monday, I work.',
        category: 'days'
      },
      {
        word: 'mardi',
        translation: 'Tuesday',
        pronunciation: 'mar-DEE',
        example_sentence: 'Nous sommes mardi.',
        example_translation: 'It is Tuesday.',
        category: 'days'
      },
      {
        word: 'mercredi',
        translation: 'Wednesday',
        pronunciation: 'mer-kruh-DEE',
        example_sentence: 'Mercredi, j\'ai cours.',
        example_translation: 'Wednesday, I have class.',
        category: 'days'
      },
      {
        word: 'jeudi',
        translation: 'Thursday',
        pronunciation: 'zhuh-DEE',
        example_sentence: 'Jeudi prochain, rendez-vous.',
        example_translation: 'Next Thursday, appointment.',
        category: 'days'
      },
      {
        word: 'vendredi',
        translation: 'Friday',
        pronunciation: 'vahn-druh-DEE',
        example_sentence: 'Vendredi soir, cinéma!',
        example_translation: 'Friday evening, movies!',
        category: 'days'
      },
      {
        word: 'samedi',
        translation: 'Saturday',
        pronunciation: 'sam-DEE',
        example_sentence: 'Samedi, je me repose.',
        example_translation: 'Saturday, I rest.',
        category: 'days'
      },
      {
        word: 'dimanche',
        translation: 'Sunday',
        pronunciation: 'dee-mahnsh',
        example_sentence: 'Dimanche en famille.',
        example_translation: 'Sunday with family.',
        category: 'days'
      },

      // Months (first 6)
      {
        word: 'janvier',
        translation: 'January',
        pronunciation: 'zhahn-vee-AY',
        example_sentence: 'En janvier, il fait froid.',
        example_translation: 'In January, it\'s cold.',
        category: 'months'
      },
      {
        word: 'février',
        translation: 'February',
        pronunciation: 'fay-vree-AY',
        example_sentence: 'Février a vingt-huit jours.',
        example_translation: 'February has twenty-eight days.',
        category: 'months'
      },
      {
        word: 'mars',
        translation: 'March',
        pronunciation: 'mars',
        example_sentence: 'Le printemps commence en mars.',
        example_translation: 'Spring begins in March.',
        category: 'months'
      },
      {
        word: 'avril',
        translation: 'April',
        pronunciation: 'a-vreel',
        example_sentence: 'En avril, les fleurs poussent.',
        example_translation: 'In April, flowers grow.',
        category: 'months'
      },
      {
        word: 'mai',
        translation: 'May',
        pronunciation: 'may',
        example_sentence: 'Mai est un beau mois.',
        example_translation: 'May is a beautiful month.',
        category: 'months'
      },
      {
        word: 'juin',
        translation: 'June',
        pronunciation: 'zhwahn',
        example_sentence: 'En juin, il fait chaud.',
        example_translation: 'In June, it\'s hot.',
        category: 'months'
      },

      // Time expressions
      {
        word: 'heure',
        translation: 'hour/time/o\'clock',
        pronunciation: 'UR',
        example_sentence: 'Quelle heure est-il?',
        example_translation: 'What time is it?',
        category: 'time'
      },
      {
        word: 'minute',
        translation: 'minute',
        pronunciation: 'mee-nuut',
        example_sentence: 'Dix minutes de retard.',
        example_translation: 'Ten minutes late.',
        category: 'time'
      },
      {
        word: 'et demie',
        translation: 'and a half (30 minutes)',
        pronunciation: 'ay duh-MEE',
        example_sentence: 'Il est deux heures et demie.',
        example_translation: 'It is 2:30.',
        category: 'time'
      },
      {
        word: 'et quart',
        translation: 'and a quarter (15 minutes)',
        pronunciation: 'ay kar',
        example_sentence: 'Il est trois heures et quart.',
        example_translation: 'It is 3:15.',
        category: 'time'
      },
      {
        word: 'moins le quart',
        translation: 'quarter to (45 minutes)',
        pronunciation: 'mwahn luh kar',
        example_sentence: 'Il est quatre heures moins le quart.',
        example_translation: 'It is 3:45 (quarter to four).',
        category: 'time'
      },
      {
        word: 'midi',
        translation: 'noon',
        pronunciation: 'mee-DEE',
        example_sentence: 'À midi, on déjeune.',
        example_translation: 'At noon, we have lunch.',
        category: 'time'
      },
      {
        word: 'minuit',
        translation: 'midnight',
        pronunciation: 'mee-NWEE',
        example_sentence: 'À minuit, nouvelle année!',
        example_translation: 'At midnight, new year!',
        category: 'time'
      },

      // Time periods
      {
        word: 'matin',
        translation: 'morning',
        pronunciation: 'ma-TAHN',
        example_sentence: 'Le matin, je bois du café.',
        example_translation: 'In the morning, I drink coffee.',
        category: 'time-periods'
      },
      {
        word: 'après-midi',
        translation: 'afternoon',
        pronunciation: 'a-pray mee-DEE',
        example_sentence: 'Cet après-midi, rendez-vous.',
        example_translation: 'This afternoon, appointment.',
        category: 'time-periods'
      },
      {
        word: 'soir',
        translation: 'evening',
        pronunciation: 'swahr',
        example_sentence: 'Le soir, je regarde la télé.',
        example_translation: 'In the evening, I watch TV.',
        category: 'time-periods'
      },
      {
        word: 'nuit',
        translation: 'night',
        pronunciation: 'nwee',
        example_sentence: 'La nuit, je dors.',
        example_translation: 'At night, I sleep.',
        category: 'time-periods'
      },

      // Useful time expressions
      {
        word: 'aujourd\'hui',
        translation: 'today',
        pronunciation: 'oh-zhoor-DWEE',
        example_sentence: 'Aujourd\'hui, il fait beau.',
        example_translation: 'Today, the weather is nice.',
        category: 'time-expressions'
      },
      {
        word: 'demain',
        translation: 'tomorrow',
        pronunciation: 'duh-MAHN',
        example_sentence: 'Demain, je travaille.',
        example_translation: 'Tomorrow, I work.',
        category: 'time-expressions'
      },
      {
        word: 'hier',
        translation: 'yesterday',
        pronunciation: 'ee-AIR',
        example_sentence: 'Hier, j\'étais fatigué.',
        example_translation: 'Yesterday, I was tired.',
        category: 'time-expressions'
      },
      {
        word: 'maintenant',
        translation: 'now',
        pronunciation: 'man-tuh-NAHN',
        example_sentence: 'Maintenant, je dois partir.',
        example_translation: 'Now, I must leave.',
        category: 'time-expressions'
      },
      {
        word: 'rendez-vous',
        translation: 'appointment/meeting',
        pronunciation: 'rahn-day VOO',
        example_sentence: 'J\'ai rendez-vous à trois heures.',
        example_translation: 'I have an appointment at three o\'clock.',
        category: 'appointments'
      }
    ],

    exercises: [
      {
        id: 'ex-4-1',
        type: 'multiple_choice',
        question: 'How do you say "15" in French?',
        options: ['cinq-dix', 'quinze', 'dix-cinq', 'quatorze'],
        correct_answer: 'quinze',
        explanation: '"Quinze" is the French word for fifteen. Numbers 11-16 have unique forms.',
        hints: ['This is one of the irregular teen numbers (13-16) that must be memorized']
      },
      {
        id: 'ex-4-2',
        type: 'fill_blank',
        question: 'Complete: "Il est ______ heures." (It is 3 o\'clock)',
        correct_answer: ['trois'],
        explanation: 'For time, use the number + "heure(s)". "Il est trois heures" = "It is 3 o\'clock".',
        hints: ['Use the French word for the number 3']
      },
      {
        id: 'ex-4-3',
        type: 'multiple_choice',
        question: 'How do you ask "What time is it?" in French?',
        options: ['Quelle heure il est?', 'Combien d\'heure?', 'Quelle heure est-il?', 'Quel temps est-il?'],
        correct_answer: 'Quelle heure est-il?',
        explanation: '"Quelle heure est-il?" is the correct way to ask "What time is it?" in French.',
        hints: ['Remember the inversion: "est-il" not "il est" in questions']
      },
      {
        id: 'ex-4-4',
        type: 'translation',
        question: 'Translate to French: "Thursday, October 17th"',
        correct_answer: ['jeudi, le dix-sept octobre', 'jeudi le dix-sept octobre'],
        explanation: 'In French: day + "le" + number + month. "Jeudi, le dix-sept octobre".',
        hints: ['Days and months are lowercase, use "le" before the date number']
      },
      {
        id: 'ex-4-5',
        type: 'fill_blank',
        question: 'Complete: "Il est deux heures _____." (It is 2:30)',
        correct_answer: ['et demie'],
        explanation: '"Et demie" means "and a half" for 30 minutes past the hour.',
        hints: ['For 30 minutes, use "et demie" (and a half)']
      },
      {
        id: 'ex-4-6',
        type: 'multiple_choice',
        question: 'Which day comes after "mardi"?',
        options: ['lundi', 'mercredi', 'jeudi', 'vendredi'],
        correct_answer: 'mercredi',
        explanation: 'The French days of the week: lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche.',
        hints: ['Think of the sequence: Monday, Tuesday, Wednesday...']
      },
      {
        id: 'ex-4-7',
        type: 'multiple_choice',
        question: 'How do you say "I have an appointment at 3 PM" in French?',
        options: ['J\'ai rendez-vous à trois après-midi', 'J\'ai rendez-vous à quinze heures', 'J\'ai meeting à trois heures', 'J\'ai rendez-vous trois heures'],
        correct_answer: 'J\'ai rendez-vous à quinze heures',
        explanation: '"J\'ai rendez-vous à quinze heures" - use 24-hour format (15h) for formal appointments.',
        hints: ['In formal contexts, 3 PM = 15 heures (15:00)']
      },
      {
        id: 'ex-4-8',
        type: 'speaking',
        question: 'Practice saying: "Aujourd\'hui nous sommes lundi, le cinq janvier. Il est quatorze heures trente."',
        correct_answer: ['Aujourd\'hui nous sommes lundi, le cinq janvier. Il est quatorze heures trente.'],
        explanation: 'Perfect! You\'ve combined date and time expressions correctly.',
        audio_prompt: 'Aujourd\'hui nous sommes lundi, le cinq janvier. Il est quatorze heures trente.'
      }
    ],

    completion_criteria: {
      min_exercises_correct: 6,
      required_sections: ['dialogue', 'grammar', 'vocabulary', 'exercises']
    }
  },

  {
    id: 'beginner-5',
    title: 'Les Articles et les Noms - Articles & Nouns',
    subtitle: 'Master French articles, noun genders, and essential vocabulary categories',
    level: 'beginner',
    order: 5,
    estimated_time: 26,
    learning_objectives: [
      'Understand and use definite articles: le, la, l\', les',
      'Master indefinite articles: un, une, des',
      'Recognize masculine and feminine noun patterns',
      'Build vocabulary in key categories: family, food, objects',
      'Use articles correctly in context and sentences',
      'Apply gender rules and exceptions confidently'
    ],
    prerequisite_lessons: ['beginner-1', 'beginner-2', 'beginner-3', 'beginner-4'],
    is_free: true,
    difficulty: 3,
    tags: ['articles', 'nouns', 'gender', 'vocabulary', 'grammar', 'masculine', 'feminine'],
    
    dialogue: {
      title: 'Shopping for a Dinner Party',
      context: 'Marie is preparing for a dinner party at her apartment and goes shopping with her friend Sophie. This dialogue demonstrates the extensive use of articles and nouns in a practical, everyday situation - perfect for learning how French speakers naturally use gender and articles.',
      exchanges: [
        {
          speaker: 'Sophie',
          french: 'Alors Marie, qu\'est-ce qu\'on achète pour le dîner?',
          english: 'So Marie, what are we buying for the dinner?',
          pronunciation: 'ah-LOOR ma-REE, kess kohn na-SHET poor luh dee-NAY?',
          cultural_note: '"Le dîner" (dinner) is typically eaten later in France (7-9 PM) and is the main meal with guests.'
        },
        {
          speaker: 'Marie',
          french: 'J\'ai une liste: du pain, de la viande, des légumes et du fromage.',
          english: 'I have a list: bread, meat, vegetables and cheese.',
          pronunciation: 'zhay UUN leest: duu PAHN, duh la vee-AHNND, day lay-GUUM ay duu fro-MAHZH.',
          cultural_note: 'French shopping lists typically include fresh items bought daily: bread, meat, vegetables.'
        },
        {
          speaker: 'Sophie',
          french: 'Parfait! D\'abord, allons à la boulangerie pour le pain.',
          english: 'Perfect! First, let\'s go to the bakery for the bread.',
          pronunciation: 'par-FAY! da-BOOR, a-lohn ah la boo-lahn-zhuh-REE poor luh PAHN.'
        },
        {
          speaker: 'Marie',
          french: 'Oui, et après à la boucherie pour la viande. J\'adore le bœuf!',
          english: 'Yes, and then to the butcher shop for the meat. I love beef!',
          pronunciation: 'WEE, ay a-PRAY ah la boo-shuh-REE poor la vee-AHNND. zha-DOOR luh BUF!',
          cultural_note: 'French neighborhoods typically have specialized shops: boulangerie, boucherie, fromagerie.'
        },
        {
          speaker: 'Sophie',
          french: 'Et les légumes? On va au marché ou au supermarché?',
          english: 'And the vegetables? Are we going to the market or the supermarket?',
          pronunciation: 'ay lay lay-GUUM? ohn vah oh mar-SHAY oo oh suu-per-mar-SHAY?'
        },
        {
          speaker: 'Marie',
          french: 'Au marché! Les tomates et les carottes sont plus fraîches.',
          english: 'To the market! The tomatoes and carrots are fresher.',
          pronunciation: 'oh mar-SHAY! lay to-MAHT ay lay ka-ROT sohn pluu FRESH.',
          cultural_note: 'French markets (marchés) are very popular for fresh produce and happen 2-3 times per week.'
        },
        {
          speaker: 'Sophie',
          french: 'D\'accord. Et pour le dessert? Une tarte ou un gâteau?',
          english: 'Agreed. And for dessert? A tart or a cake?',
          pronunciation: 'da-KOOR. ay poor luh day-SAIR? UUN tart oo uhn gah-TOH?'
        },
        {
          speaker: 'Marie',
          french: 'Une tarte aux pommes! C\'est la spécialité de ma grand-mère.',
          english: 'An apple tart! It\'s my grandmother\'s specialty.',
          pronunciation: 'UUN tart oh POM! say la spay-see-a-lee-TAY duh ma grahn-MAIR.',
          cultural_note: 'Apple tart (tarte aux pommes) is a classic French dessert, often made with family recipes.'
        },
        {
          speaker: 'Sophie',
          french: 'Excellent! Et le vin? Du vin rouge ou du vin blanc?',
          english: 'Excellent! And the wine? Red wine or white wine?',
          pronunciation: 'ex-say-LAHN! ay luh VAHN? duu vahn ROOZH oo duu vahn BLAHN?'
        },
        {
          speaker: 'Marie',
          french: 'Les deux! Un bordeaux rouge et un sancerre blanc.',
          english: 'Both! A red Bordeaux and a white Sancerre.',
          pronunciation: 'lay DUH! uhn bor-DOH ROOZH ay uhn sahn-SAIR BLAHN.',
          cultural_note: 'Bordeaux and Sancerre are famous French wine regions - knowing wine regions shows cultural knowledge.'
        }
      ],
      cultural_notes: [
        'French shopping culture: daily fresh shopping vs. weekly supermarket trips',
        'Specialized shops: boulangerie (bakery), boucherie (butcher), fromagerie (cheese shop)',
        'French markets: social gathering places, typically 2-3 times per week',
        'Dinner party etiquette: wine selection is important, often regional wines',
        'Family recipes: "spécialité de grand-mère" shows importance of family cooking traditions',
        'Fresh ingredients: French cooking emphasizes fresh, quality ingredients over convenience'
      ],
      vocabulary_highlights: ['le dîner', 'la viande', 'les légumes', 'un gâteau', 'une tarte', 'du vin']
    },

    grammar: {
      topic: 'French Articles & Noun Gender System',
      explanation: 'French nouns have gender (masculine or feminine) and number (singular or plural). Articles must agree with the noun they modify. This system is fundamental to French - every noun needs an article, and choosing the wrong gender sounds immediately incorrect to French speakers. Learning common patterns helps, but many need to be memorized.',
      patterns: [
        'Definite articles: le (masc. sing.), la (fem. sing.), l\' (before vowel), les (plural)',
        'Indefinite articles: un (masc. sing.), une (fem. sing.), des (plural)',
        'Partitive articles: du (masc.), de la (fem.), de l\' (vowel), des (plural)',
        'Masculine patterns: -age, -ment, -eau, -ou (le fromage, le moment, le bureau)',
        'Feminine patterns: -tion, -sion, -té, -ée (la nation, la maison, la beauté)',
        'Contractions: du = de + le, des = de + les, au = à + le, aux = à + les'
      ],
      examples: [
        {
          french: 'Le pain et la viande sont délicieux.',
          english: 'The bread and the meat are delicious.',
          highlight: 'Le... la'
        },
        {
          french: 'J\'achète un gâteau et une tarte.',
          english: 'I\'m buying a cake and a tart.',
          highlight: 'un... une'
        },
        {
          french: 'Je voudrais du fromage et de la salade.',
          english: 'I would like some cheese and some salad.',
          highlight: 'du... de la'
        },
        {
          french: 'Les tomates et les carottes sont fraîches.',
          english: 'The tomatoes and the carrots are fresh.',
          highlight: 'Les... les'
        },
        {
          french: 'Il y a des pommes et des oranges.',
          english: 'There are apples and oranges.',
          highlight: 'des... des'
        },
        {
          french: 'L\'eau et l\'orange sont sur la table.',
          english: 'The water and the orange are on the table.',
          highlight: 'L\'... l\''
        }
      ],
      conjugation_table: [
        { pronoun: 'Masculine singular', form: 'le / un', pronunciation: 'luh / uhn' },
        { pronoun: 'Feminine singular', form: 'la / une', pronunciation: 'la / UUN' },
        { pronoun: 'Before vowel/h', form: 'l\'', pronunciation: 'l\'' },
        { pronoun: 'Plural (any gender)', form: 'les / des', pronunciation: 'lay / day' },
        { pronoun: 'Partitive masc.', form: 'du (de + le)', pronunciation: 'duu' },
        { pronoun: 'Partitive fem.', form: 'de la', pronunciation: 'duh la' }
      ]
    },

    vocabulary: [
      // Family members (mixed genders)
      {
        word: 'le père',
        translation: 'father',
        pronunciation: 'luh PAIR',
        example_sentence: 'Mon père travaille à Paris.',
        example_translation: 'My father works in Paris.',
        category: 'family'
      },
      {
        word: 'la mère',
        translation: 'mother',
        pronunciation: 'la MAIR',
        example_sentence: 'Ma mère est professeure.',
        example_translation: 'My mother is a teacher.',
        category: 'family'
      },
      {
        word: 'le frère',
        translation: 'brother',
        pronunciation: 'luh frair',
        example_sentence: 'J\'ai un frère et une sœur.',
        example_translation: 'I have a brother and a sister.',
        category: 'family'
      },
      {
        word: 'la sœur',
        translation: 'sister',
        pronunciation: 'la sur',
        example_sentence: 'Ma sœur habite à Lyon.',
        example_translation: 'My sister lives in Lyon.',
        category: 'family'
      },
      {
        word: 'le fils',
        translation: 'son',
        pronunciation: 'luh FEES',
        example_sentence: 'Leur fils a dix ans.',
        example_translation: 'Their son is ten years old.',
        category: 'family'
      },
      {
        word: 'la fille',
        translation: 'daughter/girl',
        pronunciation: 'la FEEL',
        example_sentence: 'Leur fille est très intelligente.',
        example_translation: 'Their daughter is very intelligent.',
        category: 'family'
      },
      {
        word: 'les parents',
        translation: 'parents',
        pronunciation: 'lay pa-RAHN',
        example_sentence: 'Mes parents sont sympas.',
        example_translation: 'My parents are nice.',
        category: 'family'
      },
      {
        word: 'les enfants',
        translation: 'children',
        pronunciation: 'lay zahn-FAHN',
        example_sentence: 'Les enfants jouent dans le jardin.',
        example_translation: 'The children are playing in the garden.',
        category: 'family'
      },

      // Food items (showing gender patterns)
      {
        word: 'le pain',
        translation: 'bread',
        pronunciation: 'luh PAHN',
        example_sentence: 'Le pain français est délicieux.',
        example_translation: 'French bread is delicious.',
        category: 'food'
      },
      {
        word: 'la viande',
        translation: 'meat',
        pronunciation: 'la vee-AHNND',
        example_sentence: 'La viande est tendre.',
        example_translation: 'The meat is tender.',
        category: 'food'
      },
      {
        word: 'le fromage',
        translation: 'cheese',
        pronunciation: 'luh fro-MAHZH',
        example_sentence: 'Le fromage français est célèbre.',
        example_translation: 'French cheese is famous.',
        category: 'food'
      },
      {
        word: 'la salade',
        translation: 'salad',
        pronunciation: 'la sa-LAHD',
        example_sentence: 'Je mange une salade verte.',
        example_translation: 'I eat a green salad.',
        category: 'food'
      },
      {
        word: 'les légumes',
        translation: 'vegetables',
        pronunciation: 'lay lay-GUUM',
        example_sentence: 'Les légumes sont bons pour la santé.',
        example_translation: 'Vegetables are good for health.',
        category: 'food'
      },
      {
        word: 'les fruits',
        translation: 'fruits',
        pronunciation: 'lay FRWEE',
        example_sentence: 'J\'adore les fruits de saison.',
        example_translation: 'I love seasonal fruits.',
        category: 'food'
      },
      {
        word: 'le gâteau',
        translation: 'cake',
        pronunciation: 'luh gah-TOH',
        example_sentence: 'Le gâteau au chocolat est délicieux.',
        example_translation: 'The chocolate cake is delicious.',
        category: 'food'
      },
      {
        word: 'la tarte',
        translation: 'tart/pie',
        pronunciation: 'la TART',
        example_sentence: 'Une tarte aux pommes, s\'il vous plaît.',
        example_translation: 'An apple tart, please.',
        category: 'food'
      },
      {
        word: 'le vin',
        translation: 'wine',
        pronunciation: 'luh VAHN',
        example_sentence: 'Ce vin rouge est excellent.',
        example_translation: 'This red wine is excellent.',
        category: 'food'
      },
      {
        word: 'l\'eau',
        translation: 'water',
        pronunciation: 'LOH',
        example_sentence: 'L\'eau est essentielle à la vie.',
        example_translation: 'Water is essential to life.',
        category: 'food'
      },

      // Shops and places
      {
        word: 'la boulangerie',
        translation: 'bakery',
        pronunciation: 'la boo-lahn-zhuh-REE',
        example_sentence: 'Je vais à la boulangerie.',
        example_translation: 'I\'m going to the bakery.',
        category: 'shops'
      },
      {
        word: 'la boucherie',
        translation: 'butcher shop',
        pronunciation: 'la boo-shuh-REE',
        example_sentence: 'La boucherie ferme à midi.',
        example_translation: 'The butcher shop closes at noon.',
        category: 'shops'
      },
      {
        word: 'le marché',
        translation: 'market',
        pronunciation: 'luh mar-SHAY',
        example_sentence: 'Le marché est ouvert le matin.',
        example_translation: 'The market is open in the morning.',
        category: 'shops'
      },
      {
        word: 'le supermarché',
        translation: 'supermarket',
        pronunciation: 'luh suu-per-mar-SHAY',
        example_sentence: 'Je fais mes courses au supermarché.',
        example_translation: 'I do my shopping at the supermarket.',
        category: 'shops'
      },
      {
        word: 'la pharmacie',
        translation: 'pharmacy',
        pronunciation: 'la far-ma-SEE',
        example_sentence: 'La pharmacie est près d\'ici.',
        example_translation: 'The pharmacy is near here.',
        category: 'shops'
      },

      // Common objects (household)
      {
        word: 'la table',
        translation: 'table',
        pronunciation: 'la TAH-bluh',
        example_sentence: 'La table est dans la cuisine.',
        example_translation: 'The table is in the kitchen.',
        category: 'objects'
      },
      {
        word: 'la chaise',
        translation: 'chair',
        pronunciation: 'la SHAYZ',
        example_sentence: 'Cette chaise est confortable.',
        example_translation: 'This chair is comfortable.',
        category: 'objects'
      },
      {
        word: 'le lit',
        translation: 'bed',
        pronunciation: 'luh LEE',
        example_sentence: 'Le lit est dans la chambre.',
        example_translation: 'The bed is in the bedroom.',
        category: 'objects'
      },
      {
        word: 'la voiture',
        translation: 'car',
        pronunciation: 'la vwa-TUUR',
        example_sentence: 'Ma voiture est bleue.',
        example_translation: 'My car is blue.',
        category: 'objects'
      },
      {
        word: 'le téléphone',
        translation: 'phone',
        pronunciation: 'luh tay-lay-FON',
        example_sentence: 'Le téléphone sonne.',
        example_translation: 'The phone is ringing.',
        category: 'objects'
      },
      {
        word: 'l\'ordinateur',
        translation: 'computer',
        pronunciation: 'lor-dee-na-TUR',
        example_sentence: 'L\'ordinateur est sur le bureau.',
        example_translation: 'The computer is on the desk.',
        category: 'objects'
      },

      // Articles (to reinforce learning)
      {
        word: 'le/la/les',
        translation: 'the (definite articles)',
        pronunciation: 'luh/la/lay',
        example_sentence: 'Le chat, la chaise, les livres.',
        example_translation: 'The cat, the chair, the books.',
        category: 'articles'
      },
      {
        word: 'un/une/des',
        translation: 'a, an, some (indefinite articles)',
        pronunciation: 'uhn/UUN/day',
        example_sentence: 'Un homme, une femme, des enfants.',
        example_translation: 'A man, a woman, some children.',
        category: 'articles'
      },
      {
        word: 'du/de la/des',
        translation: 'some/of the (partitive articles)',
        pronunciation: 'duu/duh la/day',
        example_sentence: 'Du pain, de la salade, des fruits.',
        example_translation: 'Some bread, some salad, some fruits.',
        category: 'articles'
      },

      // Colors (adjectives that agree)
      {
        word: 'rouge',
        translation: 'red',
        pronunciation: 'ROOZH',
        example_sentence: 'Le vin rouge et la pomme rouge.',
        example_translation: 'The red wine and the red apple.',
        category: 'colors'
      },
      {
        word: 'blanc/blanche',
        translation: 'white',
        pronunciation: 'BLAHN/BLAHNSH',
        example_sentence: 'Le vin blanc et la robe blanche.',
        example_translation: 'The white wine and the white dress.',
        category: 'colors'
      },
      {
        word: 'noir/noire',
        translation: 'black',
        pronunciation: 'NWAHR/NWAHR',
        example_sentence: 'Le chat noir et la voiture noire.',
        example_translation: 'The black cat and the black car.',
        category: 'colors'
      },
      {
        word: 'bleu/bleue',
        translation: 'blue',
        pronunciation: 'BLUH/BLUH',
        example_sentence: 'Le ciel bleu et la mer bleue.',
        example_translation: 'The blue sky and the blue sea.',
        category: 'colors'
      },
      {
        word: 'vert/verte',
        translation: 'green',
        pronunciation: 'VAIR/VAIRT',
        example_sentence: 'Le jardin vert et la salade verte.',
        example_translation: 'The green garden and the green salad.',
        category: 'colors'
      }
    ],

    exercises: [
      {
        id: 'ex-5-1',
        type: 'multiple_choice',
        question: 'Which article goes with "pain" (bread)?',
        options: ['la pain', 'le pain', 'les pain', 'une pain'],
        correct_answer: 'le pain',
        explanation: '"Pain" (bread) is masculine, so it takes "le". Most food words ending in consonants tend to be masculine.',
        hints: ['Bread (pain) is masculine in French - use the masculine definite article']
      },
      {
        id: 'ex-5-2',
        type: 'fill_blank',
        question: 'Complete: "J\'achète _____ pommes." (I\'m buying some apples)',
        correct_answer: ['des'],
        explanation: 'For plural indefinite quantities, use "des" (some). "Des pommes" = "some apples".',
        hints: ['For "some" + plural noun, use "des"']
      },
      {
        id: 'ex-5-3',
        type: 'multiple_choice',
        question: 'Which is correct: "I want some cheese"?',
        options: ['Je veux des fromage', 'Je veux le fromage', 'Je veux du fromage', 'Je veux une fromage'],
        correct_answer: 'Je veux du fromage',
        explanation: 'For uncountable items like cheese, use partitive "du" (masculine). "Du fromage" = "some cheese".',
        hints: ['Cheese is uncountable and masculine - use the partitive article "du"']
      },
      {
        id: 'ex-5-4',
        type: 'translation',
        question: 'Translate: "The mother and the father" (using definite articles)',
        correct_answer: ['la mère et le père', 'Le père et la mère'],
        explanation: '"La mère" (feminine) and "le père" (masculine) - family words follow gender patterns.',
        hints: ['Mother is feminine (la), father is masculine (le)']
      },
      {
        id: 'ex-5-5',
        type: 'multiple_choice',
        question: 'What article goes before "eau" (water)?',
        options: ['la eau', 'le eau', 'l\'eau', 'une eau'],
        correct_answer: 'l\'eau',
        explanation: 'Before vowels or silent h, "la" and "le" become "l\'". "Eau" starts with a vowel, so "l\'eau".',
        hints: ['Before vowels, use l\' instead of le or la']
      },
      {
        id: 'ex-5-6',
        type: 'fill_blank',
        question: 'Complete: "Je voudrais _____ salade verte." (I would like a green salad)',
        correct_answer: ['une'],
        explanation: '"Salade" is feminine, so use "une". "Une salade verte" = "a green salad".',
        hints: ['Salade is feminine - use the feminine indefinite article']
      },
      {
        id: 'ex-5-7',
        type: 'multiple_choice',
        question: 'Which shows correct plural agreement?',
        options: ['les voiture rouge', 'les voitures rouge', 'les voitures rouges', 'le voitures rouges'],
        correct_answer: 'les voitures rouges',
        explanation: 'Plural: "les voitures rouges" - both noun and adjective take plural forms.',
        hints: ['In plural, both the noun and the adjective need to agree']
      },
      {
        id: 'ex-5-8',
        type: 'speaking',
        question: 'Practice: "Je vais à la boulangerie acheter du pain et des croissants."',
        correct_answer: ['Je vais à la boulangerie acheter du pain et des croissants.'],
        explanation: 'Perfect! You\'ve used articles correctly: "la boulangerie", "du pain", "des croissants".',
        audio_prompt: 'Je vais à la boulangerie acheter du pain et des croissants.'
      }
    ],

    completion_criteria: {
      min_exercises_correct: 6,
      required_sections: ['dialogue', 'grammar', 'vocabulary', 'exercises']
    }
  },
  {
    id: 'beginner-6',
    title: 'Au Restaurant - Dining & Food Culture',
    subtitle: 'Master restaurant conversations, food ordering, and French dining etiquette',
    level: 'beginner',
    order: 6,
    estimated_time: 30,
    learning_objectives: [
      'Navigate complete restaurant experiences from arrival to payment',
      'Order meals confidently using proper food vocabulary',
      'Understand French menu structure and dining customs',
      'Express food preferences, dietary restrictions, and complaints',
      'Use polite restaurant expressions and etiquette',
      'Handle payment and tipping appropriately in French culture'
    ],
    prerequisite_lessons: ['beginner-1', 'beginner-2', 'beginner-3', 'beginner-4', 'beginner-5'],
    is_free: true,
    difficulty: 3,
    tags: ['restaurant', 'food', 'dining', 'menu', 'ordering', 'culture', 'etiquette'],
    
    dialogue: {
      title: 'A Traditional French Dinner Experience',
      context: 'Thomas takes Marie to "Le Petit Bistrot," a traditional French restaurant in the Marais district, to thank her for the interview. This dialogue shows a complete restaurant experience from reservation to dessert, demonstrating authentic French dining culture and essential restaurant vocabulary.',
      exchanges: [
        {
          speaker: 'Hôtesse',
          french: 'Bonsoir! Vous avez une réservation?',
          english: 'Good evening! Do you have a reservation?',
          pronunciation: 'bon-SWAHR! voo za-vay UUN ray-zair-va-see-OHN?',
          cultural_note: 'In good French restaurants, reservations are almost always necessary, especially for dinner.'
        },
        {
          speaker: 'Thomas',
          french: 'Oui, au nom de Martin, pour deux personnes à vingt heures.',
          english: 'Yes, under the name Martin, for two people at 8 PM.',
          pronunciation: 'WEE, oh nohn duh mar-TAHN, poor duh pair-SON ah vahn UR.',
          cultural_note: 'French dinner typically starts at 8 PM or later - much later than in many countries.'
        },
        {
          speaker: 'Hôtesse',
          french: 'Parfait! Suivez-moi, s\'il vous plaît. Voici votre table.',
          english: 'Perfect! Follow me, please. Here is your table.',
          pronunciation: 'par-FAY! swee-vay MWAH, seel voo PLAY. vwah-SEE vo-truh TAH-bluh.'
        },
        {
          speaker: 'Serveur',
          french: 'Bonsoir! Puis-je vous apporter quelque chose à boire?',
          english: 'Good evening! May I bring you something to drink?',
          pronunciation: 'bon-SWAHR! pwee zhuh voo za-por-TAY kel-kuh SHOHZ ah BWAHR?'
        },
        {
          speaker: 'Marie',
          french: 'Qu\'est-ce que vous avez comme vin rouge?',
          english: 'What red wine do you have?',
          pronunciation: 'kess kuh voo za-vay kom vahn ROOZH?',
          cultural_note: 'Asking "Qu\'est-ce que vous avez comme..." is a polite way to inquire about options.'
        },
        {
          speaker: 'Serveur',
          french: 'Nous avons un excellent bordeaux et un côtes du rhône.',
          english: 'We have an excellent Bordeaux and a Côtes du Rhône.',
          pronunciation: 'noo za-vohn zuhn ex-say-LAHN bor-DOH ay uhn koht duu ROHN.',
          cultural_note: 'French waiters are often knowledgeable about wine and can make recommendations.'
        },
        {
          speaker: 'Thomas',
          french: 'Le bordeaux, s\'il vous plaît. Et pour commencer, la carte?',
          english: 'The Bordeaux, please. And to start, the menu?',
          pronunciation: 'luh bor-DOH, seel voo PLAY. ay poor ko-mahn-SAY, la KART?'
        },
        {
          speaker: 'Serveur',
          french: 'Bien sûr! Voici la carte. Avez-vous des allergies alimentaires?',
          english: 'Of course! Here\'s the menu. Do you have any food allergies?',
          pronunciation: 'bee-ahn SOOR! vwah-SEE la KART. a-vay voo day za-lair-ZHEE a-lee-mahn-TAIR?',
          cultural_note: 'French restaurants increasingly ask about allergies due to health regulations.'
        },
        {
          speaker: 'Marie',
          french: 'Non, pas d\'allergies. Qu\'est-ce que vous recommandez?',
          english: 'No, no allergies. What do you recommend?',
          pronunciation: 'nohn, pah da-lair-ZHEE. kess kuh voo ruh-ko-mahn-DAY?'
        },
        {
          speaker: 'Serveur',
          french: 'Comme entrée, la soupe à l\'oignon est délicieuse. Et le coq au vin est notre spécialité.',
          english: 'For starters, the onion soup is delicious. And the coq au vin is our specialty.',
          pronunciation: 'kom ahn-TRAY, la soop ah lo-nyohn ay day-lee-see-UHZ. ay luh kok oh vahn ay no-truh spay-see-a-lee-TAY.',
          cultural_note: 'French meals traditionally have multiple courses: entrée (starter), plat (main), dessert.'
        },
        {
          speaker: 'Thomas',
          french: 'Parfait! Alors, deux soupes à l\'oignon et deux coq au vin.',
          english: 'Perfect! So, two onion soups and two coq au vin.',
          pronunciation: 'par-FAY! ah-LOOR, duh soop ah lo-nyohn ay duh kok oh vahn.'
        },
        {
          speaker: 'Marie',
          french: 'Et comme accompagnement? Des légumes ou des pommes de terre?',
          english: 'And as a side dish? Vegetables or potatoes?',
          pronunciation: 'ay kom a-kom-pan-yuh-MAHN? day lay-GUUM oo day pom duh TAIR?'
        },
        {
          speaker: 'Serveur',
          french: 'Avec le coq au vin, je recommande les pommes de terre sautées.',
          english: 'With the coq au vin, I recommend the sautéed potatoes.',
          pronunciation: 'a-vek luh kok oh vahn, zhuh ruh-ko-mahn lay pom duh tair soh-TAY.'
        },
        {
          speaker: 'Thomas',
          french: 'Excellent! Et plus tard, nous prendrons le dessert.',
          english: 'Excellent! And later, we\'ll have dessert.',
          pronunciation: 'ex-say-LAHN! ay pluu tar, noo prahn-drohn luh day-SAIR.',
          cultural_note: 'In France, dessert is ordered after the main course, not with the meal.'
        },
        {
          speaker: 'Serveur',
          french: 'Très bien! Je reviens avec vos entrées dans quelques minutes.',
          english: 'Very good! I\'ll be back with your starters in a few minutes.',
          pronunciation: 'tray bee-AHN! zhuh ruh-vee-ahn a-vek vo an-TRAY dahn kel-kuh mee-NUUT.'
        },
        {
          speaker: 'Marie',
          french: 'L\'addition, s\'il vous plaît. Est-ce que le service est compris?',
          english: 'The bill, please. Is service included?',
          pronunciation: 'la-dee-see-OHN, seel voo PLAY. ess kuh luh ser-VEES ay kom-PREE?',
          cultural_note: 'Service is usually included in French restaurants (service compris), but small tips are appreciated.'
        }
      ],
      cultural_notes: [
        'French dining schedule: lunch 12:00-14:00, dinner 19:30-22:00, much later than many countries',
        'Reservation culture: always call ahead for dinner, especially in good restaurants',
        'Menu structure: entrée (starter), plat principal (main course), fromage (cheese), dessert',
        'Wine culture: French people often order wine with dinner, waiters are knowledgeable',
        'Service compris: tip is included, but rounding up 5-10% is polite',
        'Dining pace: French meals are leisurely, rushing is considered rude'
      ],
      vocabulary_highlights: ['réservation', 'entrée', 'plat principal', 'recommandez', 'spécialité', 'addition']
    },

    grammar: {
      topic: 'Restaurant Language: Polite Requests, Recommendations & Food Expressions',
      explanation: 'Restaurant French uses specific polite forms and expressions. Understanding conditional mood ("je voudrais", "pourriez-vous") and food-related expressions is essential. French restaurant etiquette requires more formal language than casual conversation, and certain phrases are expected in dining contexts.',
      patterns: [
        'Polite requests: "Je voudrais..." (I would like), "Pourriez-vous..." (Could you)',
        'Asking for recommendations: "Qu\'est-ce que vous recommandez?" (What do you recommend?)',
        'Expressing preferences: "J\'aime / Je n\'aime pas..." (I like / I don\'t like)',
        'Ordering: "Je prends..." (I\'ll take), "Pour moi..." (For me)',
        'Asking about ingredients: "Qu\'est-ce qu\'il y a dans...?" (What\'s in...?)',
        'Payment: "L\'addition, s\'il vous plaît" (The bill, please)'
      ],
      examples: [
        {
          french: 'Je voudrais le menu, s\'il vous plaît.',
          english: 'I would like the menu, please.',
          highlight: 'voudrais'
        },
        {
          french: 'Qu\'est-ce que vous recommandez comme dessert?',
          english: 'What do you recommend for dessert?',
          highlight: 'recommandez'
        },
        {
          french: 'Je suis allergique aux fruits de mer.',
          english: 'I am allergic to seafood.',
          highlight: 'allergique aux'
        },
        {
          french: 'L\'addition, s\'il vous plaît.',
          english: 'The bill, please.',
          highlight: 'L\'addition'
        },
        {
          french: 'Est-ce que le service est compris?',
          english: 'Is service included?',
          highlight: 'service est compris'
        },
        {
          french: 'C\'est délicieux! Mes compliments au chef.',
          english: 'It\'s delicious! My compliments to the chef.',
          highlight: 'délicieux... compliments'
        }
      ],
      conjugation_table: [
        { pronoun: 'Polite request', form: 'Je voudrais + noun/infinitive', pronunciation: 'zhuh voo-DRAY' },
        { pronoun: 'Recommendation', form: 'Qu\'est-ce que vous recommandez?', pronunciation: 'kess kuh voo ruh-ko-mahn-DAY?' },
        { pronoun: 'Ordering', form: 'Je prends + food item', pronunciation: 'zhuh prahn' },
        { pronoun: 'Preference', form: 'J\'aime / Je préfère', pronunciation: 'zhay-m / zhuh pray-FAIR' },
        { pronoun: 'Allergy', form: 'Je suis allergique à/aux', pronunciation: 'zhuh swee za-lair-ZHEEK ah/oh' },
        { pronoun: 'Payment', form: 'L\'addition, s\'il vous plaît', pronunciation: 'la-dee-see-OHN seel voo PLAY' }
      ]
    },

    vocabulary: [
      // Restaurant vocabulary
      {
        word: 'le restaurant',
        translation: 'restaurant',
        pronunciation: 'luh res-toh-RAHN',
        example_sentence: 'Ce restaurant est excellent.',
        example_translation: 'This restaurant is excellent.',
        category: 'restaurant'
      },
      {
        word: 'le bistrot',
        translation: 'bistro/small restaurant',
        pronunciation: 'luh bees-TROH',
        example_sentence: 'J\'aime les petits bistrots parisiens.',
        example_translation: 'I like small Parisian bistros.',
        category: 'restaurant'
      },
      {
        word: 'la réservation',
        translation: 'reservation',
        pronunciation: 'la ray-zair-va-see-OHN',
        example_sentence: 'J\'ai une réservation à vingt heures.',
        example_translation: 'I have a reservation at 8 PM.',
        category: 'restaurant'
      },
      {
        word: 'la table',
        translation: 'table',
        pronunciation: 'la TAH-bluh',
        example_sentence: 'Cette table près de la fenêtre est libre?',
        example_translation: 'Is this table by the window free?',
        category: 'restaurant'
      },
      {
        word: 'le serveur',
        translation: 'waiter',
        pronunciation: 'luh ser-VUR',
        example_sentence: 'Le serveur est très aimable.',
        example_translation: 'The waiter is very kind.',
        category: 'restaurant'
      },
      {
        word: 'la serveuse',
        translation: 'waitress',
        pronunciation: 'la ser-VUHZ',
        example_sentence: 'La serveuse connaît bien la carte.',
        example_translation: 'The waitress knows the menu well.',
        category: 'restaurant'
      },

      // Menu sections
      {
        word: 'la carte',
        translation: 'menu',
        pronunciation: 'la KART',
        example_sentence: 'Pourriez-vous m\'apporter la carte?',
        example_translation: 'Could you bring me the menu?',
        category: 'menu'
      },
      {
        word: 'l\'entrée',
        translation: 'starter/appetizer',
        pronunciation: 'lahn-TRAY',
        example_sentence: 'Comme entrée, je prends la salade.',
        example_translation: 'For starter, I\'ll have the salad.',
        category: 'menu'
      },
      {
        word: 'le plat principal',
        translation: 'main course',
        pronunciation: 'luh plah pran-see-PAL',
        example_sentence: 'Le plat principal arrive bientôt.',
        example_translation: 'The main course is coming soon.',
        category: 'menu'
      },
      {
        word: 'le dessert',
        translation: 'dessert',
        pronunciation: 'luh day-SAIR',
        example_sentence: 'Quel dessert me conseillez-vous?',
        example_translation: 'What dessert do you advise me?',
        category: 'menu'
      },
      {
        word: 'la spécialité',
        translation: 'specialty',
        pronunciation: 'la spay-see-a-lee-TAY',
        example_sentence: 'Quelle est la spécialité de la maison?',
        example_translation: 'What is the house specialty?',
        category: 'menu'
      },
      {
        word: 'le menu du jour',
        translation: 'daily menu',
        pronunciation: 'luh muh-NUU duu ZHOOR',
        example_sentence: 'Le menu du jour est à vingt euros.',
        example_translation: 'The daily menu is twenty euros.',
        category: 'menu'
      },

      // Food items - French specialties
      {
        word: 'la soupe à l\'oignon',
        translation: 'onion soup',
        pronunciation: 'la soop ah lo-NYOHN',
        example_sentence: 'La soupe à l\'oignon est une spécialité française.',
        example_translation: 'Onion soup is a French specialty.',
        category: 'food'
      },
      {
        word: 'le coq au vin',
        translation: 'chicken cooked in wine',
        pronunciation: 'luh kok oh VAHN',
        example_sentence: 'Le coq au vin est délicieux ici.',
        example_translation: 'The coq au vin is delicious here.',
        category: 'food'
      },
      {
        word: 'le bœuf bourguignon',
        translation: 'beef stew in red wine',
        pronunciation: 'luh buf boor-gee-NYOHN',
        example_sentence: 'J\'adore le bœuf bourguignon de ma grand-mère.',
        example_translation: 'I love my grandmother\'s beef bourguignon.',
        category: 'food'
      },
      {
        word: 'les escargots',
        translation: 'snails',
        pronunciation: 'lay zes-kar-GOH',
        example_sentence: 'Les escargots sont préparés avec de l\'ail.',
        example_translation: 'The snails are prepared with garlic.',
        category: 'food'
      },
      {
        word: 'le steak-frites',
        translation: 'steak and fries',
        pronunciation: 'luh steyk FREET',
        example_sentence: 'Un steak-frites bien cuit, s\'il vous plaît.',
        example_translation: 'A well-done steak and fries, please.',
        category: 'food'
      },
      {
        word: 'la ratatouille',
        translation: 'vegetable stew from Provence',
        pronunciation: 'la ra-ta-TOO-yuh',
        example_sentence: 'La ratatouille est parfaite en été.',
        example_translation: 'Ratatouille is perfect in summer.',
        category: 'food'
      },

      // Drinks
      {
        word: 'l\'apéritif',
        translation: 'aperitif/pre-dinner drink',
        pronunciation: 'la-pay-ree-TEEF',
        example_sentence: 'Prenons un apéritif avant le dîner.',
        example_translation: 'Let\'s have an aperitif before dinner.',
        category: 'drinks'
      },
      {
        word: 'le vin rouge',
        translation: 'red wine',
        pronunciation: 'luh vahn ROOZH',
        example_sentence: 'Ce vin rouge se marie bien avec la viande.',
        example_translation: 'This red wine goes well with meat.',
        category: 'drinks'
      },
      {
        word: 'le vin blanc',
        translation: 'white wine',
        pronunciation: 'luh vahn BLAHN',
        example_sentence: 'Le vin blanc accompagne le poisson.',
        example_translation: 'White wine goes with fish.',
        category: 'drinks'
      },
      {
        word: 'l\'eau gazeuse',
        translation: 'sparkling water',
        pronunciation: 'loh ga-ZUHZ',
        example_sentence: 'Une bouteille d\'eau gazeuse, s\'il vous plaît.',
        example_translation: 'A bottle of sparkling water, please.',
        category: 'drinks'
      },
      {
        word: 'l\'eau plate',
        translation: 'still water',
        pronunciation: 'loh PLAHT',
        example_sentence: 'Je préfère l\'eau plate à l\'eau gazeuse.',
        example_translation: 'I prefer still water to sparkling water.',
        category: 'drinks'
      },

      // Cooking methods & descriptions
      {
        word: 'saignant',
        translation: 'rare (meat)',
        pronunciation: 'say-NYAHN',
        example_sentence: 'Je voudrais mon steak saignant.',
        example_translation: 'I would like my steak rare.',
        category: 'cooking'
      },
      {
        word: 'à point',
        translation: 'medium (meat)',
        pronunciation: 'ah PWAHN',
        example_sentence: 'Mon mari préfère son steak à point.',
        example_translation: 'My husband prefers his steak medium.',
        category: 'cooking'
      },
      {
        word: 'bien cuit',
        translation: 'well-done (meat)',
        pronunciation: 'bee-ahn KWEE',
        example_sentence: 'Elle commande toujours bien cuit.',
        example_translation: 'She always orders well-done.',
        category: 'cooking'
      },
      {
        word: 'grillé',
        translation: 'grilled',
        pronunciation: 'gree-YAY',
        example_sentence: 'Le poisson grillé est excellent.',
        example_translation: 'The grilled fish is excellent.',
        category: 'cooking'
      },
      {
        word: 'sauté',
        translation: 'sautéed',
        pronunciation: 'soh-TAY',
        example_sentence: 'Les légumes sautés sont délicieux.',
        example_translation: 'The sautéed vegetables are delicious.',
        category: 'cooking'
      },

      // Restaurant expressions
      {
        word: 'recommander',
        translation: 'to recommend',
        pronunciation: 'ruh-ko-mahn-DAY',
        example_sentence: 'Que me recommandez-vous?',
        example_translation: 'What do you recommend to me?',
        category: 'expressions'
      },
      {
        word: 'commander',
        translation: 'to order',
        pronunciation: 'ko-mahn-DAY',
        example_sentence: 'Nous allons commander maintenant.',
        example_translation: 'We are going to order now.',
        category: 'expressions'
      },
      {
        word: 'l\'addition',
        translation: 'the bill/check',
        pronunciation: 'la-dee-see-OHN',
        example_sentence: 'L\'addition, s\'il vous plaît.',
        example_translation: 'The bill, please.',
        category: 'expressions'
      },
      {
        word: 'le pourboire',
        translation: 'tip',
        pronunciation: 'luh poor-BWAHR',
        example_sentence: 'Le pourboire n\'est pas obligatoire.',
        example_translation: 'The tip is not mandatory.',
        category: 'expressions'
      },
      {
        word: 'délicieux',
        translation: 'delicious',
        pronunciation: 'day-lee-see-UH',
        example_sentence: 'Ce plat est vraiment délicieux!',
        example_translation: 'This dish is really delicious!',
        category: 'expressions'
      },

      // Allergies and dietary restrictions
      {
        word: 'l\'allergie',
        translation: 'allergy',
        pronunciation: 'la-lair-ZHEE',
        example_sentence: 'J\'ai une allergie aux noix.',
        example_translation: 'I have an allergy to nuts.',
        category: 'dietary'
      },
      {
        word: 'végétarien',
        translation: 'vegetarian',
        pronunciation: 'vay-zhay-ta-ree-AHN',
        example_sentence: 'Je suis végétarien.',
        example_translation: 'I am vegetarian.',
        category: 'dietary'
      },
      {
        word: 'sans gluten',
        translation: 'gluten-free',
        pronunciation: 'sahn gluu-TAHN',
        example_sentence: 'Avez-vous des plats sans gluten?',
        example_translation: 'Do you have gluten-free dishes?',
        category: 'dietary'
      },

      // Side dishes
      {
        word: 'les pommes de terre',
        translation: 'potatoes',
        pronunciation: 'lay pom duh TAIR',
        example_sentence: 'Les pommes de terre sautées sont parfaites.',
        example_translation: 'The sautéed potatoes are perfect.',
        category: 'sides'
      },
      {
        word: 'les légumes',
        translation: 'vegetables',
        pronunciation: 'lay lay-GUUM',
        example_sentence: 'Je voudrais des légumes de saison.',
        example_translation: 'I would like seasonal vegetables.',
        category: 'sides'
      },
      {
        word: 'la salade verte',
        translation: 'green salad',
        pronunciation: 'la sa-LAHD VAIRT',
        example_sentence: 'Une salade verte avec la vinaigrette.',
        example_translation: 'A green salad with vinaigrette.',
        category: 'sides'
      }
    ],

    exercises: [
      {
        id: 'ex-6-1',
        type: 'multiple_choice',
        question: 'How do you politely ask for the menu in a French restaurant?',
        options: ['Donnez-moi la carte!', 'Je veux la carte.', 'La carte, s\'il vous plaît.', 'Où est la carte?'],
        correct_answer: 'La carte, s\'il vous plaît.',
        explanation: '"La carte, s\'il vous plaît" is the polite way to ask for the menu in a French restaurant.',
        hints: ['Always use "s\'il vous plaît" for politeness in restaurants']
      },
      {
        id: 'ex-6-2',
        type: 'fill_blank',
        question: 'Complete the polite order: "Je _______ le coq au vin, s\'il vous plaît."',
        correct_answer: ['voudrais'],
        explanation: '"Je voudrais" (I would like) is the polite conditional form for ordering in restaurants.',
        hints: ['Use the conditional form "voudrais" for polite requests']
      },
      {
        id: 'ex-6-3',
        type: 'multiple_choice',
        question: 'What does "Qu\'est-ce que vous recommandez?" mean?',
        options: ['What do you want?', 'What do you recommend?', 'What do you have?', 'What do you prefer?'],
        correct_answer: 'What do you recommend?',
        explanation: '"Qu\'est-ce que vous recommandez?" means "What do you recommend?" - essential for getting suggestions.',
        hints: ['This is how you ask for the waiter\'s recommendation']
      },
      {
        id: 'ex-6-4',
        type: 'translation',
        question: 'How do you say "The bill, please" in French?',
        correct_answer: ['L\'addition, s\'il vous plaît', 'L\'addition, s\'il vous plaît.'],
        explanation: '"L\'addition, s\'il vous plaît" is how you ask for the bill in a French restaurant.',
        hints: ['"Addition" means bill/check in restaurant context']
      },
      {
        id: 'ex-6-5',
        type: 'multiple_choice',
        question: 'If you want your steak cooked medium, you say:',
        options: ['bien cuit', 'saignant', 'à point', 'grillé'],
        correct_answer: 'à point',
        explanation: '"À point" means medium. "Saignant" = rare, "bien cuit" = well-done.',
        hints: ['Think of the cooking levels: rare, medium, well-done']
      },
      {
        id: 'ex-6-6',
        type: 'fill_blank',
        question: 'Complete: "Je suis _______ aux fruits de mer." (I am allergic to seafood)',
        correct_answer: ['allergique'],
        explanation: '"Je suis allergique à/aux..." is how you express food allergies in French.',
        hints: ['This is how you express food allergies safely']
      },
      {
        id: 'ex-6-7',
        type: 'multiple_choice',
        question: 'Which is a typical French restaurant appetizer?',
        options: ['le coq au vin', 'la soupe à l\'oignon', 'le bœuf bourguignon', 'les pommes de terre'],
        correct_answer: 'la soupe à l\'oignon',
        explanation: 'Onion soup is a classic French appetizer. The others are main courses or sides.',
        hints: ['Think about what would be done as a starter in France']
      },
      {
        id: 'ex-6-8',
        type: 'speaking',
        question: 'Practice a complete restaurant order: "Je voudrais la soupe à l\'oignon en entrée, et le coq au vin comme plat principal, s\'il vous plaît."',
        correct_answer: ['Je voudrais la soupe à l\'oignon en entrée, et le coq au vin comme plat principal, s\'il vous plaît.'],
        explanation: 'Perfect! You\'ve ordered appetizer and main course using proper restaurant vocabulary.',
        audio_prompt: 'Je voudrais la soupe à l\'oignon en entrée, et le coq au vin comme plat principal, s\'il vous plaît.'
      }
    ],

    completion_criteria: {
      min_exercises_correct: 6,
      required_sections: ['dialogue', 'grammar', 'vocabulary', 'exercises']
    }
  },

  // Lesson 7: Les Directions - Getting Around
  {
    id: 'beginner-7',
    title: 'Les Directions - Getting Around',
    subtitle: 'Navigate French cities with confidence: directions, transportation, and city vocabulary',
    level: 'beginner',
    order: 7,
    estimated_time: 28,
    learning_objectives: [
      'Ask for and give directions clearly in French',
      'Use public transportation confidently (métro, bus, train)',
      'Navigate French cities with essential location vocabulary',
      'Understand French address system and landmarks',
      'Handle transportation tickets, schedules, and travel issues',
      'Master prepositions of place and directional expressions'
    ],
    prerequisite_lessons: ['beginner-1', 'beginner-2', 'beginner-3', 'beginner-4', 'beginner-5', 'beginner-6'],
    is_free: true,
    difficulty: 3,
    tags: ['directions', 'transportation', 'city', 'métro', 'navigation', 'prepositions', 'travel'],
    
    dialogue: {
      title: 'Lost Tourist Finds Help in Paris',
      context: 'Emma, an American tourist, is lost in Paris trying to find the Louvre Museum. She asks Marie (from our previous lessons) for directions. This dialogue demonstrates how French people typically give directions, including landmarks, public transportation options, and helpful cultural tips for navigating Paris.',
      exchanges: [
        {
          speaker: 'Emma',
          french: 'Excusez-moi, madame. Je suis perdue. Où est le Louvre, s\'il vous plaît?',
          english: 'Excuse me, ma\'am. I\'m lost. Where is the Louvre, please?',
          pronunciation: 'ex-koo-zay MWAH, ma-DAHM. zhuh swee pair-DUU. oo ay luh LOO-vruh, seel voo PLAY?',
          cultural_note: 'Always start with "Excusez-moi" when asking strangers for help - it\'s more polite than "Pardon".'
        },
        {
          speaker: 'Marie',
          french: 'Ah, le musée du Louvre! Vous êtes à pied ou vous prenez le métro?',
          english: 'Ah, the Louvre Museum! Are you walking or taking the metro?',
          pronunciation: 'ah, luh muu-ZAY duu LOO-vruh! voo zayt ah pee-AY oo voo pruh-nay luh may-TROH?',
          cultural_note: 'French people often ask about your preferred transportation method before giving directions.'
        },
        {
          speaker: 'Emma',
          french: 'Je préfère marcher si ce n\'est pas trop loin.',
          english: 'I prefer to walk if it\'s not too far.',
          pronunciation: 'zhuh pray-FAIR mar-SHAY see suh nay pah troh LWAHN.'
        },
        {
          speaker: 'Marie',
          french: 'C\'est à quinze minutes à pied. Allez tout droit jusqu\'à la Seine.',
          english: 'It\'s a 15-minute walk. Go straight ahead until you reach the Seine.',
          pronunciation: 'say tah kanz mee-NUUT ah pee-AY. a-lay too DRWAH zhus-KAH lah SAYN.',
          cultural_note: 'French directions often use the Seine river as a major landmark in Paris.'
        },
        {
          speaker: 'Emma',
          french: 'Tout droit... Et après la Seine?',
          english: 'Straight ahead... And after the Seine?',
          pronunciation: 'too DRWAH... ay a-PRAY la SAYN?'
        },
        {
          speaker: 'Marie',
          french: 'Tournez à droite sur le quai, puis traversez le pont du Carrousel.',
          english: 'Turn right on the quay, then cross the Carrousel bridge.',
          pronunciation: 'toor-nay ah DRWAHT suur luh KAY, pwee tra-vair-say luh pohn duu ka-roo-SELL.',
          cultural_note: 'Paris quays (les quais) are the roads along the Seine - important navigation reference points.'
        },
        {
          speaker: 'Emma',
          french: 'À droite sur le quai, pont du Carrousel... Et ensuite?',
          english: 'Right on the quay, Carrousel bridge... And then?',
          pronunciation: 'ah DRWAHT suur luh KAY, pohn duu ka-roo-SELL... ay ahn-SWEET?'
        },
        {
          speaker: 'Marie',
          french: 'Après le pont, vous voyez une grande pyramide de verre. C\'est l\'entrée du Louvre!',
          english: 'After the bridge, you\'ll see a large glass pyramid. That\'s the Louvre entrance!',
          pronunciation: 'a-PRAY luh pohn, voo voy-YAY UUN grahndd pee-ra-MEED duh VAIR. say lahn-TRAY duu LOO-vruh!',
          cultural_note: 'The glass pyramid is the famous modern entrance to the Louvre, very recognizable landmark.'
        },
        {
          speaker: 'Emma',
          french: 'Parfait! Et si je me perds, quelle est la station de métro la plus proche?',
          english: 'Perfect! And if I get lost, what\'s the nearest metro station?',
          pronunciation: 'par-FAY! ay see zhuh muh PAIR, kell ay la sta-see-OHN duh may-TROH la pluu PROSH?'
        },
        {
          speaker: 'Marie',
          french: 'La station "Palais-Royal - Musée du Louvre" sur les lignes 1 et 7.',
          english: 'The "Palais-Royal - Musée du Louvre" station on lines 1 and 7.',
          pronunciation: 'la sta-see-OHN pa-LAY roy-YAL muu-ZAY duu LOO-vruh suur lay LEE-nyuh uhn ay SET.'
        },
        {
          speaker: 'Emma',
          french: 'Vous êtes très aimable. Combien coûte un ticket de métro?',
          english: 'You\'re very kind. How much does a metro ticket cost?',
          pronunciation: 'voo zayt tray zay-MAH-bluh. kohn-bee-AHN koot uhn tee-KAY duh may-TROH?'
        },
        {
          speaker: 'Marie',
          french: 'Un ticket coûte deux euros dix, mais je conseille un carnet de dix tickets.',
          english: 'A ticket costs two euros ten, but I recommend a book of ten tickets.',
          pronunciation: 'uhn tee-KAY koot duh uh-ROH DEES, may zhuh kohn-SAY uhn kar-NAY duh dees tee-KAY.',
          cultural_note: 'A "carnet" (book of 10 tickets) is much more economical than buying individual tickets.'
        },
        {
          speaker: 'Emma',
          french: 'Merci beaucoup pour votre aide! Bonne journée!',
          english: 'Thank you very much for your help! Have a good day!',
          pronunciation: 'mer-SEE bo-KOO poor vo-truh AYD! bun zhoor-NAY!'
        },
        {
          speaker: 'Marie',
          french: 'De rien! Bon voyage et profitez bien de votre visite!',
          english: 'You\'re welcome! Have a good trip and enjoy your visit!',
          pronunciation: 'duh ree-AHN! bohn voy-YAHZH ay pro-fee-tay bee-AHN duh vo-truh vee-ZEET!'
        }
      ],
      cultural_notes: [
        'French people are generally helpful with directions, especially to tourists who make an effort to speak French',
        'Paris métro: color-coded lines, stations named after landmarks/streets, efficient but can be crowded',
        'Walking culture: Paris is very walkable, French people often prefer walking to short metro rides',
        'Landmarks: Parisians use famous monuments, rivers, and bridges as reference points for directions',
        'Politeness: Always thank people profusely for help - "Merci beaucoup" is expected',
        'Metro etiquette: validate tickets, offer seats to elderly/pregnant, move to center of car'
      ],
      vocabulary_highlights: ['perdue', 'tout droit', 'tournez', 'traversez', 'station', 'ligne']
    },

    grammar: {
      topic: 'Directional Expressions & Prepositions of Place',
      explanation: 'French uses specific verbs and prepositions for giving directions and describing locations. Movement verbs (aller, tourner, traverser) combined with prepositions (à, de, sur, vers) create precise directional instructions. Understanding these patterns is essential for navigation and spatial relationships.',
      patterns: [
        'Basic directions: "tout droit" (straight), "à droite/gauche" (right/left)',
        'Movement verbs: "allez" (go), "tournez" (turn), "traversez" (cross), "continuez" (continue)',
        'Location prepositions: "à côté de" (next to), "en face de" (across from), "près de" (near)',
        'Distance expressions: "à ... minutes" (... minutes away), "loin/près" (far/near)',
        'Transportation: "en métro/bus/taxi" (by metro/bus/taxi), "à pied" (on foot)',
        'Asking for help: "Où est...?" (Where is...?), "Comment aller à...?" (How to get to...?)'
      ],
      examples: [
        {
          french: 'Allez tout droit jusqu\'au carrefour.',
          english: 'Go straight ahead until the intersection.',
          highlight: 'tout droit jusqu\'au'
        },
        {
          french: 'Tournez à gauche après la banque.',
          english: 'Turn left after the bank.',
          highlight: 'Tournez à gauche après'
        },
        {
          french: 'La pharmacie est en face de la boulangerie.',
          english: 'The pharmacy is across from the bakery.',
          highlight: 'en face de'
        },
        {
          french: 'C\'est à dix minutes à pied.',
          english: 'It\'s a 10-minute walk.',
          highlight: 'à dix minutes à pied'
        },
        {
          french: 'Prenez le métro ligne 4 direction Porte de Clignancourt.',
          english: 'Take metro line 4 direction Porte de Clignancourt.',
          highlight: 'Prenez le métro ligne 4 direction'
        },
        {
          french: 'Descendez à la prochaine station.',
          english: 'Get off at the next station.',
          highlight: 'Descendez à la prochaine'
        }
      ],
      conjugation_table: [
        { pronoun: 'Movement commands', form: 'Allez/Tournez/Traversez', pronunciation: 'a-lay/toor-nay/tra-vair-say' },
        { pronoun: 'Location questions', form: 'Où est...? / Où se trouve...?', pronunciation: 'oo ay / oo suh troov' },
        { pronoun: 'Direction expressions', form: 'à droite/gauche, tout droit', pronunciation: 'ah drwaht/gohsh, too drwah' },
        { pronoun: 'Distance', form: 'à X minutes / près/loin', pronunciation: 'ah X mee-nuut / pray/lwahn' },
        { pronoun: 'Direction expressions', form: 'en métro/bus, à pied', pronunciation: 'ahn may-troh/buus, ah pee-ay' },
        { pronoun: 'Position', form: 'à côté de, en face de, près de', pronunciation: 'ah ko-tay duh, ahn fahs duh, pray duh' }
      ]
    },

    vocabulary: [
      // Direction basics
      {
        word: 'tout droit',
        translation: 'straight ahead',
        pronunciation: 'too DRWAH',
        example_sentence: 'Allez tout droit jusqu\'au feu rouge.',
        example_translation: 'Go straight ahead until the traffic light.',
        category: 'directions'
      },
      {
        word: 'à droite',
        translation: 'to the right',
        pronunciation: 'ah DRWAHT',
        example_sentence: 'Tournez à droite après l\'église.',
        example_translation: 'Turn right after the church.',
        category: 'directions'
      },
      {
        word: 'à gauche',
        translation: 'to the left',
        pronunciation: 'ah GOHSH',
        example_sentence: 'La banque est à gauche.',
        example_translation: 'The bank is on the left.',
        category: 'directions'
      },
      {
        word: 'tourner',
        translation: 'to turn',
        pronunciation: 'toor-NAY',
        example_sentence: 'Vous devez tourner ici.',
        example_translation: 'You need to turn here.',
        category: 'directions'
      },
      {
        word: 'traverser',
        translation: 'to cross',
        pronunciation: 'tra-vair-SAY',
        example_sentence: 'Traversez la rue avec prudence.',
        example_translation: 'Cross the street carefully.',
        category: 'directions'
      },
      {
        word: 'continuer',
        translation: 'to continue',
        pronunciation: 'kohn-tee-nuu-AY',
        example_sentence: 'Continuez jusqu\'à la place.',
        example_translation: 'Continue until the square.',
        category: 'directions'
      },

      // Location prepositions
      {
        word: 'à côté de',
        translation: 'next to/beside',
        pronunciation: 'ah ko-TAY duh',
        example_sentence: 'La poste est à côté de la pharmacie.',
        example_translation: 'The post office is next to the pharmacy.',
        category: 'location'
      },
      {
        word: 'en face de',
        translation: 'across from/opposite',
        pronunciation: 'ahn FAHS duh',
        example_sentence: 'Le café est en face de l\'hôtel.',
        example_translation: 'The café is across from the hotel.',
        category: 'location'
      },
      {
        word: 'près de',
        translation: 'near/close to',
        pronunciation: 'pray duh',
        example_sentence: 'J\'habite près de la gare.',
        example_translation: 'I live near the train station.',
        category: 'location'
      },
      {
        word: 'loin de',
        translation: 'far from',
        pronunciation: 'lwahn duh',
        example_sentence: 'C\'est loin de votre hôtel?',
        example_translation: 'Is it far from your hotel?',
        category: 'location'
      },
      {
        word: 'entre',
        translation: 'between',
        pronunciation: 'ahn-truh',
        example_sentence: 'Le restaurant est entre la banque et la poste.',
        example_translation: 'The restaurant is between the bank and the post office.',
        category: 'location'
      },
      {
        word: 'au coin de',
        translation: 'at the corner of',
        pronunciation: 'oh kwahn duh',
        example_sentence: 'Il y a une boulangerie au coin de la rue.',
        example_translation: 'There\'s a bakery at the corner of the street.',
        category: 'location'
      },

      // Transportation
      {
        word: 'le métro',
        translation: 'subway/metro',
        pronunciation: 'luh may-TROH',
        example_sentence: 'Je prends le métro tous les jours.',
        example_translation: 'I take the metro every day.',
        category: 'transportation'
      },
      {
        word: 'l\'autobus/le bus',
        translation: 'bus',
        pronunciation: 'loh-toh-BUUS/luh BUUS',
        example_sentence: 'Le bus numéro 21 va à l\'aéroport.',
        example_translation: 'Bus number 21 goes to the airport.',
        category: 'transportation'
      },
      {
        word: 'le train',
        translation: 'train',
        pronunciation: 'luh TRAHN',
        example_sentence: 'Le train pour Lyon part dans dix minutes.',
        example_translation: 'The train to Lyon leaves in ten minutes.',
        category: 'transportation'
      },
      {
        word: 'le taxi',
        translation: 'taxi',
        pronunciation: 'luh tak-SEE',
        example_sentence: 'Appelons un taxi, il pleut.',
        example_translation: 'Let\'s call a taxi, it\'s raining.',
        category: 'transportation'
      },
      {
        word: 'à pied',
        translation: 'on foot/walking',
        pronunciation: 'ah pee-AY',
        example_sentence: 'C\'est plus rapide à pied.',
        example_translation: 'It\'s faster on foot.',
        category: 'transportation'
      },
      {
        word: 'en voiture',
        translation: 'by car',
        pronunciation: 'ahn vwa-TUUR',
        example_sentence: 'Nous y allons en voiture.',
        example_translation: 'We\'re going there by car.',
        category: 'transportation'
      },

      // Metro/Transit vocabulary
      {
        word: 'la station',
        translation: 'station (metro/bus)',
        pronunciation: 'la sta-see-OHN',
        example_sentence: 'Quelle est la prochaine station?',
        example_translation: 'What\'s the next station?',
        category: 'metro'
      },
      {
        word: 'la gare',
        translation: 'train station',
        pronunciation: 'la GAHR',
        example_sentence: 'La gare du Nord est très grande.',
        example_translation: 'The Gare du Nord is very big.',
        category: 'metro'
      },
      {
        word: 'la ligne',
        translation: 'line (metro/bus)',
        pronunciation: 'la LEE-nyuh',
        example_sentence: 'Prenez la ligne 1 direction Vincennes.',
        example_translation: 'Take line 1 direction Vincennes.',
        category: 'metro'
      },
      {
        word: 'la direction',
        translation: 'direction',
        pronunciation: 'la dee-rek-see-OHN',
        example_sentence: 'Métro ligne 4, direction Porte d\'Orléans.',
        example_translation: 'Metro line 4, direction Porte d\'Orléans.',
        category: 'metro'
      },
      {
        word: 'le ticket',
        translation: 'ticket',
        pronunciation: 'luh tee-KAY',
        example_sentence: 'J\'ai besoin d\'un ticket de métro.',
        example_translation: 'I need a metro ticket.',
        category: 'metro'
      },
      {
        word: 'le carnet',
        translation: 'book of tickets',
        pronunciation: 'luh kar-NAY',
        example_sentence: 'Un carnet coûte moins cher.',
        example_translation: 'A book of tickets costs less.',
        category: 'metro'
      },
      {
        word: 'composter',
        translation: 'to validate (ticket)',
        pronunciation: 'kom-pos-TAY',
        example_sentence: 'N\'oubliez pas de composter votre ticket.',
        example_translation: 'Don\'t forget to validate your ticket.',
        category: 'metro'
      },

      // City landmarks & places
      {
        word: 'la place',
        translation: 'square/plaza',
        pronunciation: 'la PLAHS',
        example_sentence: 'Rendez-vous place de la République.',
        example_translation: 'Meet at République square.',
        category: 'landmarks'
      },
      {
        word: 'le pont',
        translation: 'bridge',
        pronunciation: 'luh POHN',
        example_sentence: 'Traversez le pont Neuf.',
        example_translation: 'Cross the Pont Neuf.',
        category: 'landmarks'
      },
      {
        word: 'la rue',
        translation: 'street',
        pronunciation: 'la RUU',
        example_sentence: 'J\'habite rue de Rivoli.',
        example_translation: 'I live on rue de Rivoli.',
        category: 'landmarks'
      },
      {
        word: 'l\'avenue',
        translation: 'avenue',
        pronunciation: 'la-vuh-NUU',
        example_sentence: 'L\'avenue des Champs-Élysées est célèbre.',
        example_translation: 'The Champs-Élysées avenue is famous.',
        category: 'landmarks'
      },
      {
        word: 'le boulevard',
        translation: 'boulevard',
        pronunciation: 'luh bool-VAHR',
        example_sentence: 'Le boulevard Saint-Germain est animé.',
        example_translation: 'Boulevard Saint-Germain is lively.',
        category: 'landmarks'
      },
      {
        word: 'le carrefour',
        translation: 'intersection/crossroads',
        pronunciation: 'luh kar-FOOR',
        example_sentence: 'Tournez à droite au carrefour.',
        example_translation: 'Turn right at the intersection.',
        category: 'landmarks'
      },
      {
        word: 'le feu rouge',
        translation: 'traffic light',
        pronunciation: 'luh fuh ROOZH',
        example_sentence: 'Arrêtez-vous au feu rouge.',
        example_translation: 'Stop at the traffic light.',
        category: 'landmarks'
      },

      // Buildings and places
      {
        word: 'la banque',
        translation: 'bank',
        pronunciation: 'luh BAHNK',
        example_sentence: 'La banque ferme à 17 heures.',
        example_translation: 'The bank closes at 5 PM.',
        category: 'buildings'
      },
      {
        word: 'la poste',
        translation: 'post office',
        pronunciation: 'la POST',
        example_sentence: 'Où est la poste la plus proche?',
        example_translation: 'Where is the nearest post office?',
        category: 'buildings'
      },
      {
        word: 'l\'hôpital',
        translation: 'hospital',
        pronunciation: 'lo-pee-TAL',
        example_sentence: 'L\'hôpital est à dix minutes d\'ici.',
        example_translation: 'The hospital is ten minutes from here.',
        category: 'buildings'
      },
      {
        word: 'l\'église',
        translation: 'church',
        pronunciation: 'lay-GLEEZ',
        example_sentence: 'L\'église Notre-Dame est magnifique.',
        example_translation: 'Notre-Dame church is magnificent.',
        category: 'buildings'
      },
      {
        word: 'le musée',
        translation: 'museum',
        pronunciation: 'luh muu-ZAY',
        example_sentence: 'Le musée d\'Orsay expose les impressionnistes.',
        example_translation: 'The Orsay museum exhibits the impressionists.',
        category: 'buildings'
      },
      {
        word: 'l\'hôtel',
        translation: 'hotel',
        pronunciation: 'lo-TELL',
        example_sentence: 'Mon hôtel est près de la gare.',
        example_translation: 'My hotel is near the train station.',
        category: 'buildings'
      },

      // Distance and time
      {
        word: 'proche',
        translation: 'near/close',
        pronunciation: 'PROSH',
        example_sentence: 'C\'est très proche d\'ici.',
        example_translation: 'It\'s very close to here.',
        category: 'distance'
      },
      {
        word: 'loin',
        translation: 'far',
        pronunciation: 'LWAHN',
        example_sentence: 'Ce n\'est pas très loin.',
        example_translation: 'It\'s not very far.',
        category: 'distance'
      },
      {
        word: 'à ... minutes',
        translation: 'X minutes away',
        pronunciation: 'ah ... mee-NUUT',
        example_sentence: 'C\'est à cinq minutes à pied.',
        example_translation: 'It\'s a 5-minute walk.',
        category: 'distance'
      },

      // Getting lost/help
      {
        word: 'perdu(e)',
        translation: 'lost',
        pronunciation: 'per-DUU',
        example_sentence: 'Je suis perdu, pouvez-vous m\'aider?',
        example_translation: 'I\'m lost, can you help me?'
      },
      {
        word: 'se perdre',
        translation: 'to get lost',
        pronunciation: 'suh pair-druh',
        example_sentence: 'Je me perds toujours dans cette ville.',
        example_translation: 'I always get lost in this city.'
      },
      {
        word: 'aider',
        translation: 'to help',
        pronunciation: 'ay-DAY',
        example_sentence: 'Pouvez-vous m\'aider, s\'il vous plaît?',
        example_translation: 'Can you help me, please?'
      }
    ],

    exercises: [
      {
        id: 'ex-7-1',
        type: 'multiple_choice',
        question: 'How do you say "Go straight ahead" in French?',
        options: ['Allez à droite', 'Allez tout droit', 'Tournez à gauche', 'Traversez la rue'],
        correct_answer: 'Allez tout droit',
        explanation: '"Allez tout droit" means "go straight ahead" - essential for basic directions.',
        hints: ['"Tout droit" means "straight ahead"']
      },
      {
        id: 'ex-7-2',
        type: 'fill_blank',
        question: 'Complete: "La banque est _____ la poste." (The bank is next to the post office)',
        correct_answer: ['à côté de'],
        explanation: '"À côté de" means "next to" or "beside" - important preposition for describing location.',
        hints: ['This preposition means "next to" or "beside"']
      },
      {
        id: 'ex-7-3',
        type: 'multiple_choice',
        question: 'If someone is lost and asks for help, they might say:',
        options: ['Je suis fatigué', 'Je suis perdu', 'Je suis français', 'Je suis content'],
        correct_answer: 'Je suis perdu',
        explanation: '"Je suis perdu(e)" means "I am lost" - essential phrase for getting help with directions.',
        hints: ['Think about what you\'d say if you don\'t know where you are']
      },
      {
        id: 'ex-7-4',
        type: 'translation',
        question: 'How do you ask "Where is the metro station?" in French?',
        correct_answer: ['Où est la station de métro?', 'Où se trouve la station de métro?'],
        explanation: '"Où est la station de métro?" is the standard way to ask for the metro station location.',
        hints: ['Use "Où est..." (Where is...) + "la station de métro"']
      },
      {
        id: 'ex-7-5',
        type: 'multiple_choice',
        question: 'What does "Tournez à droite après l\'église" mean?',
        options: ['Turn left before the church', 'Turn right after the church', 'Go straight to the church', 'Cross at the church'],
        correct_answer: 'Turn right after the church',
        explanation: '"Tournez à droite après l\'église" = "Turn right after the church".',
        hints: ['"Après" means "after", "à droite" means "to the right"']
      },
      {
        id: 'ex-7-6',
        type: 'fill_blank',
        question: 'Complete: "C\'est _____ dix minutes à pied." (It\'s a 10-minute walk)',
        correct_answer: ['à'],
        explanation: '"C\'est à dix minutes à pied" expresses walking distance in French. The preposition "à" is used to indicate time/distance.',
        hints: ['Use the preposition "à" to indicate time or distance']
      },
      {
        id: 'ex-7-7',
        type: 'multiple_choice',
        question: 'Which transportation uses "la ligne" and "la direction"?',
        options: ['le taxi', 'la voiture', 'le métro', 'à pied'],
        correct_answer: 'le métro',
        explanation: 'Metro uses "ligne" (line) and "direction" for navigation, like "ligne 1 direction Vincennes".',
        hints: ['Think about which transport system has numbered lines and specific directions']
      },
      {
        id: 'ex-7-8',
        type: 'speaking',
        question: 'Practice giving directions: "Allez tout droit, puis tournez à gauche après la banque. C\'est à côté de la pharmacie."',
        correct_answer: ['Allez tout droit, puis tournez à gauche après la banque. C\'est à côté de la pharmacie.'],
        explanation: 'Perfect! You\'ve given clear directions using proper directional vocabulary and landmarks.',
        audio_prompt: 'Allez tout droit, puis tournez à gauche après la banque. C\'est à côté de la pharmacie.'
      }
    ],

    completion_criteria: {
      min_exercises_correct: 6,
      required_sections: ['dialogue', 'grammar', 'vocabulary', 'exercises']
    }
  },
  {
    id: 'beginner-8',
    title: 'Regular -er Verbs and Family',
    subtitle: 'Learn to conjugate regular -er verbs and talk about family, professions, and nationalities',
    level: 'beginner',
    order: 8,
    estimated_time: 30,
    learning_objectives: [
      'Master regular -er verb conjugation patterns',
      'Use family vocabulary with proper possessive adjectives',
      'Discuss professions and nationalities correctly',
      'Apply -er verb conjugation in family conversations',
      'Understand masculine/feminine forms for professions and nationalities'
    ],
    is_free: true,
    difficulty: 2,
    tags: ['verbs', 'conjugation', 'family', 'professions', 'nationalities', 'grammar'],
    
    dialogue: {
      title: 'Meeting the Family',
      context: 'Marie and Thomas discuss their families, professions, and language skills. This dialogue demonstrates the use of regular -er verbs and family vocabulary in natural conversation.',
      exchanges: [
        {
          speaker: 'Marie',
          french: 'Bonjour Thomas ! Tu habites ici avec ta famille ?',
          english: 'Hello Thomas! Do you live here with your family?',
          pronunciation: 'bon-ZHOOR to-MAH! tu ah-BEET ee-SEE ah-VEK tah fah-MEEL?',
          cultural_note: 'French people often live with family while studying or starting their careers.'
        },
        {
          speaker: 'Thomas',
          french: 'Oui, j\'habite avec mes parents. Mon père travaille comme médecin.',
          english: 'Yes, I live with my parents. My father works as a doctor.',
          pronunciation: 'wee, zhah-BEET ah-VEK may pah-RAHN. mohn PAIR trah-VY kom may-SAH',
          cultural_note: 'In France, it\'s common for young adults to live with parents while studying.'
        },
        {
          speaker: 'Marie',
          french: 'Et ta mère ? Elle travaille aussi ?',
          english: 'And your mother? Does she work too?',
          pronunciation: 'ay tah MAIR? el trah-VY oh-SEE?'
        },
        {
          speaker: 'Thomas',
          french: 'Ma mère parle trois langues. Elle enseigne l\'anglais à l\'université.',
          english: 'My mother speaks three languages. She teaches English at the university.',
          pronunciation: 'mah MAIR parl twah LAHNG. el ahn-SAYN lahn-GLAY ah lu-nee-vair-see-TAY',
          cultural_note: 'French universities are prestigious institutions where many teachers are civil servants.'
        },
        {
          speaker: 'Marie',
          french: 'Formidable ! Moi, je parle français et italien. Ma famille est italienne.',
          english: 'Wonderful! I speak French and Italian. My family is Italian.',
          pronunciation: 'for-mee-DAHBL! mwah, zhuh parl frahn-SAY ay ee-tah-lee-AH. mah fah-MEEL ay ee-tah-lee-EN',
          cultural_note: 'Italy and France share a border and have strong cultural connections.'
        },
        {
          speaker: 'Thomas',
          french: 'Tu aimes étudier les langues ?',
          english: 'Do you like studying languages?',
          pronunciation: 'tu em ay-tu-dee-AY lay LAHNG?'
        },
        {
          speaker: 'Marie',
          french: 'Oui, j\'aime beaucoup ! Et toi, tu étudies quoi ?',
          english: 'Yes, I like it a lot! And you, what do you study?',
          pronunciation: 'wee, zhem bo-KOO! ay twah, tu ay-tu-dee KWAH?'
        }
      ],
      cultural_notes: [
        'French families often maintain close relationships across generations',
        'It\'s common for young adults to live with parents while studying',
        'Family Sunday lunches are an important French tradition',
        'The French education system is highly centralized and prestigious',
        'Teachers (enseignants) are civil servants in France'
      ],
      vocabulary_highlights: ['habiter', 'travailler', 'parler', 'enseigner', 'étudier', 'aimer', 'famille', 'parents']
    },

    grammar: {
      topic: 'Regular -er Verb Conjugation - The Foundation of French Verbs',
      explanation: 'Regular -er verbs are the most common verb type in French and follow a predictable conjugation pattern. By mastering these patterns, you\'ll be able to conjugate hundreds of French verbs. The key is to remove the -er ending and add the appropriate personal endings.',
      patterns: [
        'Remove -er from the infinitive (parler → parl)',
        'Add personal endings: -e, -es, -e, -ons, -ez, -ent',
        'First person singular (je) often uses a contraction: j\'habite',
        'Third person singular (il/elle) is the same as first person singular',
        'The nous and vous forms are distinct and important for politeness'
      ],
      examples: [
        {
          french: 'Je parle français avec mes amis.',
          english: 'I speak French with my friends.',
          highlight: 'parle'
        },
        {
          french: 'Tu habites dans une belle maison.',
          english: 'You live in a beautiful house.',
          highlight: 'habites'
        },
        {
          french: 'Il travaille comme ingénieur.',
          english: 'He works as an engineer.',
          highlight: 'travaille'
        },
        {
          french: 'Nous étudions ensemble.',
          english: 'We study together.',
          highlight: 'étudions'
        },
        {
          french: 'Vous aimez la cuisine française.',
          english: 'You like French cuisine.',
          highlight: 'aimez'
        },
        {
          french: 'Ils parlent plusieurs langues.',
          english: 'They speak several languages.',
          highlight: 'parlent'
        }
      ],
      conjugation_table: [
        { pronoun: 'je', form: 'parle', pronunciation: 'zhuh parl' },
        { pronoun: 'tu', form: 'parles', pronunciation: 'too parl' },
        { pronoun: 'il/elle', form: 'parle', pronunciation: 'eel/ell parl' },
        { pronoun: 'nous', form: 'parlons', pronunciation: 'noo par-LOHN' },
        { pronoun: 'vous', form: 'parlez', pronunciation: 'voo par-LAY' },
        { pronoun: 'ils/elles', form: 'parlent', pronunciation: 'eel/ell parl' }
      ]
    },

    vocabulary: [
      {
        word: 'habiter',
        translation: 'to live',
        pronunciation: 'ah-bee-TAY',
        example_sentence: 'J\'habite à Paris avec ma famille.',
        example_translation: 'I live in Paris with my family.',
        category: 'verbs'
      },
      {
        word: 'parler',
        translation: 'to speak',
        pronunciation: 'par-LAY',
        example_sentence: 'Je parle français et anglais.',
        example_translation: 'I speak French and English.',
        category: 'verbs'
      },
      {
        word: 'travailler',
        translation: 'to work',
        pronunciation: 'trah-vy-YAY',
        example_sentence: 'Mon père travaille comme médecin.',
        example_translation: 'My father works as a doctor.',
        category: 'verbs'
      },
      {
        word: 'aimer',
        translation: 'to like/love',
        pronunciation: 'ay-MAY',
        example_sentence: 'J\'aime beaucoup étudier les langues.',
        example_translation: 'I really like studying languages.',
        category: 'verbs'
      },
      {
        word: 'étudier',
        translation: 'to study',
        pronunciation: 'ay-tu-dee-AY',
        example_sentence: 'Nous étudions le français ensemble.',
        example_translation: 'We study French together.',
        category: 'verbs'
      },
      {
        word: 'enseigner',
        translation: 'to teach',
        pronunciation: 'ahn-say-NYAY',
        example_sentence: 'Ma mère enseigne l\'anglais à l\'université.',
        example_translation: 'My mother teaches English at the university.',
        category: 'verbs'
      },
      {
        word: 'la famille',
        translation: 'family',
        pronunciation: 'lah fah-MEE',
        example_sentence: 'Ma famille est très importante pour moi.',
        example_translation: 'My family is very important to me.',
        category: 'family'
      },
      {
        word: 'les parents',
        translation: 'parents',
        pronunciation: 'lay pah-RAHN',
        example_sentence: 'Mes parents habitent à Lyon.',
        example_translation: 'My parents live in Lyon.',
        category: 'family'
      },
      {
        word: 'le père',
        translation: 'father',
        pronunciation: 'luh PAIR',
        example_sentence: 'Mon père est médecin.',
        example_translation: 'My father is a doctor.',
        category: 'family'
      },
      {
        word: 'la mère',
        translation: 'mother',
        pronunciation: 'lah MAIR',
        example_sentence: 'Ma mère parle trois langues.',
        example_translation: 'My mother speaks three languages.',
        category: 'family'
      },
      {
        word: 'le médecin',
        translation: 'doctor',
        pronunciation: 'luh may-SAH',
        example_sentence: 'Le médecin travaille à l\'hôpital.',
        example_translation: 'The doctor works at the hospital.',
        category: 'professions'
      },
      {
        word: 'l\'enseignant(e)',
        translation: 'teacher',
        pronunciation: 'lahn-say-NYAHN',
        example_sentence: 'L\'enseignante est très patiente.',
        example_translation: 'The teacher is very patient.',
        category: 'professions'
      },
      {
        word: 'français(e)',
        translation: 'French',
        pronunciation: 'frahn-SAY',
        example_sentence: 'Je suis française et ma famille est italienne.',
        example_translation: 'I am French and my family is Italian.',
        category: 'nationalities'
      },
      {
        word: 'italien(ne)',
        translation: 'Italian',
        pronunciation: 'ee-tah-lee-AH',
        example_sentence: 'Ma grand-mère est italienne.',
        example_translation: 'My grandmother is Italian.',
        category: 'nationalities'
      },
      {
        word: 'la langue',
        translation: 'language',
        pronunciation: 'lah LAHNG',
        example_sentence: 'J\'aime apprendre de nouvelles langues.',
        example_translation: 'I like learning new languages.',
        category: 'general'
      },
      {
        word: 'l\'université',
        translation: 'university',
        pronunciation: 'lu-nee-vair-see-TAY',
        example_sentence: 'L\'université de Paris est très prestigieuse.',
        example_translation: 'The University of Paris is very prestigious.',
        category: 'general'
      }
    ],

    exercises: [
      {
        id: 'ex-8-1',
        type: 'multiple_choice',
        question: 'How do you say "I live with my parents" in French?',
        options: [
          'J\'habite avec mes parents',
          'Je habite avec mon parents', 
          'J\'habites avec mes parents',
          'Je travaille avec mes parents'
        ],
        correct_answer: 'J\'habite avec mes parents',
        explanation: 'J\'habite (I live) uses the first person singular form, and "mes parents" (my parents) uses the plural possessive.',
        hints: ['Use the first person singular form of "habiter"', 'Remember "mes" for plural possessions']
      },
      {
        id: 'ex-8-2',
        type: 'fill_blank',
        question: 'Complete: "Mon père _____ français et anglais." (My father speaks French and English)',
        options: ['parle', 'parles', 'parlons', 'parlez'],
        correct_answer: ['parle'],
        explanation: 'Mon père (my father) is third person singular, so we use "parle" (speaks).',
        hints: ['Think about the subject: "mon père" is he/she', 'Use the third person singular form']
      },
      {
        id: 'ex-8-3',
        type: 'translation',
        question: 'Translate: "My mother works as a teacher"',
        correct_answer: ['ma mère travaille comme enseignante'],
        explanation: 'Ma mère (my mother) + travaille (works) + comme (as) + enseignante (teacher, feminine form).',
        hints: ['ma mère = my mother', 'travaille = works', 'comme = as', 'enseignante = teacher (feminine)']
      },
      {
        id: 'ex-8-4',
        type: 'multiple_choice',
        question: 'Which form is correct for "you speak" (informal)?',
        options: ['tu parle', 'tu parles', 'tu parlons', 'tu parlez'],
        correct_answer: 'tu parles',
        explanation: 'With "tu" (informal you), we add -s to the verb stem: parl + es = parles.',
        hints: ['Remember the -er verb pattern: tu + verb stem + es']
      },
      {
        id: 'ex-8-5',
        type: 'fill_blank',
        question: 'Complete: "Nous _____ ensemble." (We study together)',
        options: ['étudie', 'étudies', 'étudions', 'étudiez'],
        correct_answer: ['étudions'],
        explanation: 'Nous (we) takes the -ons ending: étud + ions = étudions.',
        hints: ['Nous = we, so use the -ons ending', 'Remove -er and add -ons']
      },
      {
        id: 'ex-8-6',
        type: 'translation',
        question: 'How do you say "They like French food" in French?',
        correct_answer: ['ils aiment la cuisine française', 'elles aiment la cuisine française'],
        explanation: 'Ils/elles (they) + aiment (like) + la cuisine française (French food).',
        hints: ['Use "ils" or "elles" for they', 'Remember the -ent ending for third person plural']
      },
      {
        id: 'ex-8-7',
        type: 'multiple_choice',
        question: 'What does "Ma famille est italienne" mean?',
        options: [
          'My family is Italian',
          'My family is French',
          'My family is big',
          'My family is here'
        ],
        correct_answer: 'My family is Italian',
        explanation: 'Ma famille (my family) + est (is) + italienne (Italian, feminine form).',
        hints: ['"est" means "is"', 'Look at the last word: italienne']
      },
      {
        id: 'ex-8-8',
        type: 'speaking',
        question: 'Practice: "Je parle français et ma famille habite à Paris. Nous aimons la culture française."',
        correct_answer: ['Je parle français et ma famille habite à Paris. Nous aimons la culture française.'],
        explanation: 'Excellent! You\'ve used multiple -er verbs correctly: parle, habite, and aimons.',
        audio_prompt: 'Je parle français et ma famille habite à Paris. Nous aimons la culture française.'
      }
    ],

    completion_criteria: {
      min_exercises_correct: 6,
      required_sections: ['dialogue', 'grammar', 'vocabulary', 'exercises']
    }
  }
]

export const getLessonById = (id: string): BeginnerLesson | undefined => {
  return beginnerLessons.find(lesson => lesson.id === id)
}

export const getBeginnerLessons = (): BeginnerLesson[] => {
  return beginnerLessons.sort((a, b) => a.order - b.order)
}

export const getFreeLessons = (): BeginnerLesson[] => {
  return beginnerLessons.filter(lesson => lesson.is_free)
}
