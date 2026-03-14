import { BeginnerLesson } from '../lessonTypes'

export const beginnerLesson5: BeginnerLesson = {
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
          pronunciation: 'Luh pan ay la vyond son day-lee-SYUH',
          highlight: 'Le... la'
        },
        {
          french: 'J\'achète un gâteau et une tarte.',
          english: 'I\'m buying a cake and a tart.',
          pronunciation: 'Zha-shet un ga-TOE ay oon TART',
          highlight: 'un... une'
        },
        {
          french: 'Je voudrais du fromage et de la salade.',
          english: 'I would like some cheese and some salad.',
          pronunciation: 'Zhuh voo-dray doo fro-MAZH ay duh la sa-LAHD',
          highlight: 'du... de la'
        },
        {
          french: 'Les tomates et les carottes sont fraîches.',
          english: 'The tomatoes and the carrots are fresh.',
          pronunciation: 'Lay toe-mat ay lay ka-rot son FRESH',
          highlight: 'Les... les'
        },
        {
          french: 'Il y a des pommes et des oranges.',
          english: 'There are apples and oranges.',
          pronunciation: 'Eel ee ah day pom ay day-zo-RONZH',
          highlight: 'des... des'
        },
        {
          french: 'L\'eau et l\'orange sont sur la table.',
          english: 'The water and the orange are on the table.',
          pronunciation: 'Low ay lo-ronzh son soor la TAH-bluh',
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
}

