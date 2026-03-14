import { BeginnerLesson } from '../lessonTypes'

export const beginnerLesson9: BeginnerLesson = {
    id: 'beginner-9',
    title: 'More -er Verbs and Negation',
    subtitle: 'Learn more regular -er verbs, express what you don\'t do with negation (ne...pas), and discuss daily activities',
    level: 'beginner',
    order: 9,
    estimated_time: 30,
    learning_objectives: [
      'Master negation with ne...pas for all verb types',
      'Learn additional regular -er verb conjugations',
      'Express preferences and frequency in daily activities',
      'Use negation naturally in conversations',
      'Discuss leisure activities and hobbies'
    ],
    is_free: true,
    difficulty: 2,
    tags: ['verbs', 'conjugation', 'negation', 'daily-activities', 'leisure', 'grammar'],
    
    dialogue: {
      title: 'Daily Routines',
      context: 'Sophie and Marc discuss their daily activities, preferences, and what they don\'t do. This dialogue demonstrates negation with ne...pas and various -er verbs in natural conversation.',
      exchanges: [
        {
          speaker: 'Sophie',
          french: 'Salut Marc ! Tu regardes souvent la télévision ?',
          english: 'Hi Marc! Do you often watch television?',
          pronunciation: 'sah-LU mark! tu ruh-GARD soo-VAHN lah tay-lay-vee-see-OHN?',
          cultural_note: 'French people often ask about TV habits as a way to start conversations about entertainment preferences.'
        },
        {
          speaker: 'Marc',
          french: 'Non, je ne regarde pas beaucoup la télé. Je préfère écouter de la musique.',
          english: 'No, I don\'t watch TV much. I prefer to listen to music.',
          pronunciation: 'nohn, zhuh nuh ruh-GARD pah bo-KOO lah tay-LAY. zhuh pray-FAIR ay-koo-TAY duh lah mu-ZEEK',
          cultural_note: 'Music is very important in French culture, with many famous composers and contemporary artists.'
        },
        {
          speaker: 'Sophie',
          french: 'Moi, j\'adore danser ! Tu danses aussi ?',
          english: 'Me, I love to dance! Do you dance too?',
          pronunciation: 'mwah, zhah-DOR dahn-SAY! tu DAHNS oh-SEE?',
          cultural_note: 'Dancing is popular in France, especially traditional dances like the waltz and modern styles.'
        },
        {
          speaker: 'Marc',
          french: 'Je ne danse pas très bien, mais j\'aime chanter.',
          english: 'I don\'t dance very well, but I like to sing.',
          pronunciation: 'zhuh nuh DAHNS pah tray bee-AHN, may zhem shahn-TAY',
          cultural_note: 'French people often express modesty about their abilities while still showing enthusiasm.'
        },
        {
          speaker: 'Sophie',
          french: 'Et le sport ? Tu joues au tennis ?',
          english: 'And sports? Do you play tennis?',
          pronunciation: 'ay luh spor? tu ZHOO oh tay-NEES?',
          cultural_note: 'Tennis is very popular in France, especially during the French Open tournament at Roland Garros.'
        },
        {
          speaker: 'Marc',
          french: 'Non, je ne joue pas au tennis. Je préfère nager à la piscine.',
          english: 'No, I don\'t play tennis. I prefer to swim at the pool.',
          pronunciation: 'nohn, zhuh nuh ZHOO pah oh tay-NEES. zhuh pray-FAIR nah-ZHAY ah lah pee-SEEN',
          cultural_note: 'Swimming is a popular sport in France, with many municipal pools offering affordable access.'
        },
        {
          speaker: 'Sophie',
          french: 'Et le weekend ? Tu restes à la maison ?',
          english: 'And on weekends? Do you stay at home?',
          pronunciation: 'ay luh week-end? tu REST ah lah may-ZOHN?',
          cultural_note: 'Weekends in France often involve cultural activities, family time, and outdoor recreation.'
        },
        {
          speaker: 'Marc',
          french: 'Je ne reste pas toujours à la maison. J\'aime visiter des musées.',
          english: 'I don\'t always stay at home. I like to visit museums.',
          pronunciation: 'zhuh nuh REST pah too-ZHOOR ah lah may-ZOHN. zhem vee-zee-TAY day mu-ZAY',
          cultural_note: 'France has some of the world\'s most famous museums, and many offer free admission on certain days.'
        }
      ],
      cultural_notes: [
        'French people value cultural activities and often visit museums, theaters, and concerts',
        'Sports and physical activities are popular, with many municipal facilities available',
        'Weekends are typically reserved for family time and cultural enrichment',
        'Music and dance are deeply embedded in French culture and education',
        'Many French cities have excellent public pools and sports facilities'
      ],
      vocabulary_highlights: ['regarder', 'écouter', 'danser', 'chanter', 'jouer', 'nager', 'rester', 'visiter', 'préférer', 'adorer']
    },

    grammar: {
      topic: 'Negation with ne...pas - Complete Guide',
      explanation: 'To make any French sentence negative, wrap the verb with \'ne\' and \'pas\'. This is the most important negation pattern in French and works with all verb types. The \'ne\' often contracts to \'n\'\' before vowels and silent h.',
      patterns: [
        'Basic structure: Subject + ne + verb + pas + rest of sentence',
        'Contraction: ne becomes n\' before vowels and silent h',
        'Position: ne comes before the verb, pas comes after',
        'Works with: all verb types, all tenses, all persons',
        'Common expressions: ne...jamais (never), ne...plus (no more), ne...rien (nothing)'
      ],
      examples: [
        {
          french: 'Je parle français → Je ne parle pas français',
          english: 'I speak French → I don\'t speak French',
          highlight: 'ne...pas'
        },
        {
          french: 'Tu regardes la télé → Tu ne regardes pas la télé',
          english: 'You watch TV → You don\'t watch TV',
          highlight: 'ne...pas'
        },
        {
          french: 'Elle danse bien → Elle ne danse pas bien',
          english: 'She dances well → She doesn\'t dance well',
          highlight: 'ne...pas'
        },
        {
          french: 'Je aime → Je n\'aime pas',
          english: 'I like → I don\'t like',
          highlight: 'n\'...pas'
        },
        {
          french: 'Il habite → Il n\'habite pas',
          english: 'He lives → He doesn\'t live',
          highlight: 'n\'...pas'
        }
      ],
      conjugation_table: [
        { pronoun: 'je', form: 'regarde', pronunciation: 'zhuh ruh-GARD' },
        { pronoun: 'tu', form: 'regardes', pronunciation: 'too ruh-GARD' },
        { pronoun: 'il/elle', form: 'regarde', pronunciation: 'eel/ell ruh-GARD' },
        { pronoun: 'nous', form: 'regardons', pronunciation: 'noo ruh-gar-DOHN' },
        { pronoun: 'vous', form: 'regardez', pronunciation: 'voo ruh-gar-DAY' },
        { pronoun: 'ils/elles', form: 'regardent', pronunciation: 'eel/ell ruh-GARD' }
      ],
      additional_conjugation_tables: [
        {
          verb: 'écouter',
          forms: [
            { pronoun: 'je', form: 'écoute', pronunciation: 'zhuh ay-KOOT' },
            { pronoun: 'tu', form: 'écoutes', pronunciation: 'too ay-KOOT' },
            { pronoun: 'il/elle', form: 'écoute', pronunciation: 'eel/ell ay-KOOT' },
            { pronoun: 'nous', form: 'écoutons', pronunciation: 'noo ay-koo-TOHN' },
            { pronoun: 'vous', form: 'écoutez', pronunciation: 'voo ay-koo-TAY' },
            { pronoun: 'ils/elles', form: 'écoutent', pronunciation: 'eel/ell ay-KOOT' }
          ]
        },
        {
          verb: 'danser',
          forms: [
            { pronoun: 'je', form: 'danse', pronunciation: 'zhuh DAHNS' },
            { pronoun: 'tu', form: 'danses', pronunciation: 'too DAHNS' },
            { pronoun: 'il/elle', form: 'danse', pronunciation: 'eel/ell DAHNS' },
            { pronoun: 'nous', form: 'dansons', pronunciation: 'noo dahn-SOHN' },
            { pronoun: 'vous', form: 'dansez', pronunciation: 'voo dahn-SAY' },
            { pronoun: 'ils/elles', form: 'dansent', pronunciation: 'eel/ell DAHNS' }
          ]
        },
        {
          verb: 'jouer',
          forms: [
            { pronoun: 'je', form: 'joue', pronunciation: 'zhuh ZHOO' },
            { pronoun: 'tu', form: 'joues', pronunciation: 'too ZHOO' },
            { pronoun: 'il/elle', form: 'joue', pronunciation: 'eel/ell ZHOO' },
            { pronoun: 'nous', form: 'jouons', pronunciation: 'noo zhoo-OHN' },
            { pronoun: 'vous', form: 'jouez', pronunciation: 'voo zhoo-AY' },
            { pronoun: 'ils/elles', form: 'jouent', pronunciation: 'eel/ell ZHOO' }
          ]
        },
        {
          verb: 'préférer',
          forms: [
            { pronoun: 'je', form: 'préfère', pronunciation: 'zhuh pray-FAIR' },
            { pronoun: 'tu', form: 'préfères', pronunciation: 'too pray-FAIR' },
            { pronoun: 'il/elle', form: 'préfère', pronunciation: 'eel/ell pray-FAIR' },
            { pronoun: 'nous', form: 'préférons', pronunciation: 'noo pray-fay-ROHN' },
            { pronoun: 'vous', form: 'préférez', pronunciation: 'voo pray-fay-RAY' },
            { pronoun: 'ils/elles', form: 'préfèrent', pronunciation: 'eel/ell pray-FAIR' }
          ]
        }
      ]
    },

    vocabulary: [
      {
        word: 'regarder',
        translation: 'to watch',
        category: 'verbs',
        example_sentence: 'Je regarde la télé le soir.',
        example_translation: 'I watch TV in the evening.'
      },
      {
        word: 'écouter',
        translation: 'to listen',
        category: 'verbs',
        example_sentence: 'J\'écoute de la musique classique.',
        example_translation: 'I listen to classical music.'
      },
      {
        word: 'danser',
        translation: 'to dance',
        category: 'verbs',
        example_sentence: 'Elle danse très bien.',
        example_translation: 'She dances very well.'
      },
      {
        word: 'chanter',
        translation: 'to sing',
        category: 'verbs',
        example_sentence: 'Nous chantons ensemble.',
        example_translation: 'We sing together.'
      },
      {
        word: 'jouer',
        translation: 'to play',
        category: 'verbs',
        example_sentence: 'Tu joues au tennis le weekend.',
        example_translation: 'You play tennis on weekends.'
      },
      {
        word: 'nager',
        translation: 'to swim',
        category: 'verbs',
        example_sentence: 'Ils nagent à la piscine.',
        example_translation: 'They swim at the pool.'
      },
      {
        word: 'rester',
        translation: 'to stay',
        category: 'verbs',
        example_sentence: 'Je reste à la maison le dimanche.',
        example_translation: 'I stay at home on Sundays.'
      },
      {
        word: 'visiter',
        translation: 'to visit',
        category: 'verbs',
        example_sentence: 'Nous visitons des musées.',
        example_translation: 'We visit museums.'
      },
      {
        word: 'préférer',
        translation: 'to prefer',
        category: 'verbs',
        example_sentence: 'Je préfère écouter de la musique.',
        example_translation: 'I prefer to listen to music.'
      },
      {
        word: 'adorer',
        translation: 'to love/adore',
        category: 'verbs',
        example_sentence: 'J\'adore danser le weekend.',
        example_translation: 'I love dancing on weekends.'
      },
      {
        word: 'la télévision',
        translation: 'television',
        category: 'entertainment',
        example_sentence: 'Je ne regarde pas la télévision.',
        example_translation: 'I don\'t watch television.'
      },
      {
        word: 'la musique',
        translation: 'music',
        category: 'entertainment',
        example_sentence: 'J\'écoute de la musique française.',
        example_translation: 'I listen to French music.'
      },
      {
        word: 'le sport',
        translation: 'sport',
        category: 'activities',
        example_sentence: 'Le sport est important pour la santé.',
        example_translation: 'Sport is important for health.'
      },
      {
        word: 'le tennis',
        translation: 'tennis',
        category: 'activities',
        example_sentence: 'Tu joues au tennis ?',
        example_translation: 'Do you play tennis?'
      },
      {
        word: 'la piscine',
        translation: 'pool',
        category: 'places',
        example_sentence: 'Je nage à la piscine municipale.',
        example_translation: 'I swim at the municipal pool.'
      },
      {
        word: 'le musée',
        translation: 'museum',
        category: 'places',
        example_sentence: 'Nous visitons le musée du Louvre.',
        example_translation: 'We visit the Louvre Museum.'
      },
      {
        word: 'la maison',
        translation: 'house',
        category: 'places',
        example_sentence: 'Je reste à la maison le weekend.',
        example_translation: 'I stay at home on weekends.'
      },
      {
        word: 'le weekend',
        translation: 'weekend',
        category: 'time',
        example_sentence: 'Le weekend, je fais du sport.',
        example_translation: 'On weekends, I do sports.'
      },
      {
        word: 'souvent',
        translation: 'often',
        category: 'frequency',
        example_sentence: 'Tu regardes souvent la télé ?',
        example_translation: 'Do you often watch TV?'
      },
      {
        word: 'toujours',
        translation: 'always',
        category: 'frequency',
        example_sentence: 'Il ne regarde jamais la télé.',
        example_translation: 'He never watches TV.'
      }
    ],

    exercises: [
      {
        id: 'ex-9-1',
        type: 'multiple_choice',
        question: 'How do you say "I don\'t watch television" in French?',
        options: [
          'Je ne regarde pas la télévision',
          'Je regarde ne pas la télévision',
          'Je ne pas regarde la télévision',
          'Je regarde pas la télévision'
        ],
        correct_answer: 'Je ne regarde pas la télévision',
        explanation: 'Negation requires \'ne\' before the verb and \'pas\' after: je ne regarde pas.',
        hints: ['Remember the ne...pas structure', 'ne comes before the verb, pas after']
      },
      {
        id: 'ex-9-2',
        type: 'conjugation',
        question: 'Conjugate the verb "regarder" (to watch) in all persons:',
        verb: 'regarder',
        translations: {
          'je': 'I watch',
          'tu': 'you watch',
          'il/elle': 'he/she watches',
          'nous': 'we watch',
          'vous': 'you watch (formal/plural)',
          'ils/elles': 'they watch'
        },
        correct_answer: ['regarde', 'regardes', 'regarde', 'regardons', 'regardez', 'regardent'],
        explanation: 'Regarder follows the regular -er verb pattern: remove -er, add endings.',
        hints: ['Remove -er from regarder', 'Add: -e, -es, -e, -ons, -ez, -ent']
      },
      {
        id: 'ex-9-3',
        type: 'conjugation',
        question: 'Conjugate the verb "écouter" (to listen) in all persons:',
        verb: 'écouter',
        translations: {
          'je': 'I listen',
          'tu': 'you listen',
          'il/elle': 'he/she listens',
          'nous': 'we listen',
          'vous': 'you listen (formal/plural)',
          'ils/elles': 'they listen'
        },
        correct_answer: ['écoute', 'écoutes', 'écoute', 'écoutons', 'écoutez', 'écoutent'],
        explanation: 'Écouter follows the same -er pattern as regarder.',
        hints: ['Remove -er from écouter', 'Add: -e, -es, -e, -ons, -ez, -ent']
      },
      {
        id: 'ex-9-4',
        type: 'conjugation',
        question: 'Conjugate the verb "danser" (to dance) in all persons:',
        verb: 'danser',
        translations: {
          'je': 'I dance',
          'tu': 'you dance',
          'il/elle': 'he/she dances',
          'nous': 'we dance',
          'vous': 'you dance (formal/plural)',
          'ils/elles': 'they dance'
        },
        correct_answer: ['danse', 'danses', 'danse', 'dansons', 'dansez', 'dansent'],
        explanation: 'Danser follows the regular -er verb pattern.',
        hints: ['Remove -er from danser', 'Add: -e, -es, -e, -ons, -ez, -ent']
      },
      {
        id: 'ex-9-5',
        type: 'conjugation',
        question: 'Conjugate the verb "jouer" (to play) in all persons:',
        verb: 'jouer',
        translations: {
          'je': 'I play',
          'tu': 'you play',
          'il/elle': 'he/she plays',
          'nous': 'we play',
          'vous': 'you play (formal/plural)',
          'ils/elles': 'they play'
        },
        correct_answer: ['joue', 'joues', 'joue', 'jouons', 'jouez', 'jouent'],
        explanation: 'Jouer follows the regular -er verb pattern.',
        hints: ['Remove -er from jouer', 'Add: -e, -es, -e, -ons, -ez, -ent']
      },
      {
        id: 'ex-9-6',
        type: 'conjugation',
        question: 'Conjugate the verb "préférer" (to prefer) in all persons:',
        verb: 'préférer',
        translations: {
          'je': 'I prefer',
          'tu': 'you prefer',
          'il/elle': 'he/she prefers',
          'nous': 'we prefer',
          'vous': 'you prefer (formal/plural)',
          'ils/elles': 'they prefer'
        },
        correct_answer: ['préfère', 'préfères', 'préfère', 'préférons', 'préférez', 'préfèrent'],
        explanation: 'Préférer follows the regular -er verb pattern.',
        hints: ['Remove -er from préférer', 'Add: -e, -es, -e, -ons, -ez, -ent']
      },
      {
        id: 'ex-9-7',
        type: 'negation_transformation',
        question: 'Transform these positive sentences to negative:',
        exercises: [
          {
            positive: 'Je regarde la télé le soir',
            negative: 'Je ne regarde pas la télé le soir',
            translation: 'I don\'t watch TV in the evening'
          },
          {
            positive: 'Tu danses très bien',
            negative: 'Tu ne danses pas très bien',
            translation: 'You don\'t dance very well'
          },
          {
            positive: 'Elle écoute de la musique',
            negative: 'Elle n\'écoute pas de la musique',
            translation: 'She doesn\'t listen to music'
          },
          {
            positive: 'Nous jouons au tennis',
            negative: 'Nous ne jouons pas au tennis',
            translation: 'We don\'t play tennis'
          }
        ],
        correct_answer: ['Je ne regarde pas la télé le soir', 'Tu ne danses pas très bien', 'Elle n\'écoute pas de la musique', 'Nous ne jouons pas au tennis'],
        explanation: 'Remember: ne before the verb, pas after. Use contractions (n\') before vowels and silent h.',
        hints: ['ne comes before the verb', 'pas comes after the verb', 'Use n\' before vowels']
      },
      {
        id: 'ex-9-8',
        type: 'fill_blank_negation',
        question: 'Complete the negative sentences:',
        sentences: [
          {
            sentence: 'Je _____ regarde _____ la télévision.',
            blanks: ['ne', 'pas'],
            translation: 'I don\'t watch television.'
          },
          {
            sentence: 'Il _____ danse _____ le weekend.',
            blanks: ['ne', 'pas'],
            translation: 'He doesn\'t dance on weekends.'
          },
          {
            sentence: 'Nous _____ écoutons _____ de musique classique.',
            blanks: ['ne', 'pas'],
            translation: 'We don\'t listen to classical music.'
          }
        ],
        correct_answer: ['ne', 'pas', 'ne', 'pas', 'ne', 'pas'],
        explanation: 'Fill in the negation words: ne before the verb, pas after.',
        hints: ['ne goes before the verb', 'pas goes after the verb']
      },
      {
        id: 'ex-9-9',
        type: 'translation',
        question: 'Translate: "She doesn\'t dance very well, but she loves to sing"',
        correct_answer: ['elle ne danse pas très bien, mais elle adore chanter'],
        explanation: 'elle (she) + ne danse pas (doesn\'t dance) + très bien (very well) + mais (but) + elle adore (she loves) + chanter (to sing).',
        hints: ['elle = she', 'ne...pas = doesn\'t', 'très bien = very well', 'mais = but', 'adore = loves']
      },
      {
        id: 'ex-9-10',
        type: 'fill_blank',
        question: 'Tu _____ souvent au tennis le weekend ?',
        options: ['joues', 'joue', 'jouons', 'jouez'],
        correct_answer: ['joues'],
        explanation: 'Tu (informal you) + joues (play) + souvent (often) + au tennis (tennis) + le weekend (weekend).',
        hints: ['Tu = informal you', 'Use the -es ending with tu']
      },
      {
        id: 'ex-9-11',
        type: 'vocabulary_match',
        question: 'Match the French words with their English meanings:',
        pairs: [
          { french: 'regarder', english: 'to watch' },
          { french: 'la musique', english: 'music' },
          { french: 'nager', english: 'to swim' },
          { french: 'le musée', english: 'museum' },
          { french: 'préférer', english: 'to prefer' }
        ],
        correct_answer: ['regarder-to watch', 'la musique-music', 'nager-to swim', 'le musée-museum', 'préférer-to prefer'],
        explanation: 'Match the French words with their English meanings.',
        hints: ['Look for cognates (similar words)', 'Remember the -er ending means "to" for verbs']
      }
    ],

    completion_criteria: {
      min_exercises_correct: 7,
      required_sections: ['dialogue', 'grammar', 'vocabulary', 'exercises']
    }
}

