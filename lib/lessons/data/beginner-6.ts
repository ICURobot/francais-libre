import { BeginnerLesson } from '../lessonTypes'

export const beginnerLesson6: BeginnerLesson = {
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
          pronunciation: 'Zhuh voo-dray luh muh-NOO, seel voo PLEH',
          highlight: 'voudrais'
        },
        {
          french: 'Qu\'est-ce que vous recommandez comme dessert?',
          english: 'What do you recommend for dessert?',
          pronunciation: 'Kess-kuh voo ruh-ko-mon-day kom day-SAIR?',
          highlight: 'recommandez'
        },
        {
          french: 'Je suis allergique aux fruits de mer.',
          english: 'I am allergic to seafood.',
          pronunciation: 'Zhuh sweez ah-lair-ZHEEK oh frwee duh MAIR',
          highlight: 'allergique aux'
        },
        {
          french: 'L\'addition, s\'il vous plaît.',
          english: 'The bill, please.',
          pronunciation: 'Lah-dee-SYON, seel voo PLEH',
          highlight: 'L\'addition'
        },
        {
          french: 'Est-ce que le service est compris?',
          english: 'Is service included?',
          pronunciation: 'Ess-kuh luh sair-veess eh com-PREE?',
          highlight: 'service est compris'
        },
        {
          french: 'C\'est délicieux! Mes compliments au chef.',
          english: 'It\'s delicious! My compliments to the chef.',
          pronunciation: 'Say day-lee-SYUH! May com-plee-MON oh SHEF',
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
}

