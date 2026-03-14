import { BeginnerLesson } from '../lessonTypes'

export const beginnerLesson3: BeginnerLesson = {
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
          pronunciation: 'Jhay treh FAM ay jhay SWAF',
          highlight: 'ai faim... ai soif'
        },
        {
          french: 'Je voudrais un café, s\'il vous plaît.',
          english: 'I would like a coffee, please.',
          pronunciation: 'Zhuh voo-dray un ka-FAY, seel voo PLEH',
          highlight: 'voudrais'
        },
        {
          french: 'Combien ça coûte?',
          english: 'How much does it cost?',
          pronunciation: 'Com-byan sa KOOT?',
          highlight: 'combien'
        },
        {
          french: 'Nous avons froid en hiver.',
          english: 'We are cold in winter.',
          pronunciation: 'Noo-zah-von frwa on-ee-VAIR',
          highlight: 'avons froid'
        },
        {
          french: 'Tu as raison, c\'est délicieux!',
          english: 'You are right, it\'s delicious!',
          pronunciation: 'Too ah ray-ZON, say day-lee-SYUH!',
          highlight: 'as raison'
        },
        {
          french: 'Ils ont chaud en été.',
          english: 'They are hot in summer.',
          pronunciation: 'Eel-zon show on-ay-TAY',
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
}

