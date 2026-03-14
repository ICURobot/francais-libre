import { BeginnerLesson } from '../lessonTypes'

export const beginnerLesson10: BeginnerLesson = {
    id: 'beginner-10',
    title: 'Completing Regular Verbs & Daily Life',
    subtitle: 'Master more negation forms, expand family/profession vocabulary, learn nationalities, and review all regular -er verbs',
    level: 'beginner',
    order: 10,
    estimated_time: 30,
    learning_objectives: [
      'Master advanced negation forms (ne...jamais, ne...plus, ne...que)',
      'Conjugate essential -er verbs for daily activities and work',
      'Learn family and profession vocabulary with proper gender agreement',
      'Understand nationality adjectives and country names',
      'Practice comprehensive -er verb patterns and applications'
    ],
    is_free: false,
    difficulty: 1,
    tags: ['negation', 'conjugation', 'family', 'professions', 'nationalities', 'daily-life'],
    
    dialogue: {
      title: 'International Family Dinner',
      context: 'Grandmère hosts a family dinner where Lisa, an American student, discusses her French studies and family background with Antoine.',
      exchanges: [
        {
          speaker: 'Grandmère',
          french: 'Bonsoir mes enfants ! Lisa, tu n\'es pas française, n\'est-ce pas ?',
          english: 'Good evening my children! Lisa, you\'re not French, are you?',
          pronunciation: 'bon-SWAHR may zahn-FAHN! LEE-zah, tu nay pah frahn-SAYZ, nay pah?',
          cultural_note: 'French family dinners often include discussions about cultural background and language learning.'
        },
        {
          speaker: 'Lisa',
          french: 'Non, je suis américaine. Je ne parle jamais français chez moi.',
          english: 'No, I\'m American. I never speak French at home.',
          pronunciation: 'nohn, zhuh swee ah-may-ree-KEN. zhuh nuh parl zhah-MAY frahn-SAY shay MWAH'
        },
        {
          speaker: 'Antoine',
          french: 'Mais tu parles très bien ! Tu étudies depuis longtemps ?',
          english: 'But you speak very well! Have you been studying for a long time?',
          pronunciation: 'may tu parl tray bee-AHN! tu ay-tu-dee duh-PEE lohn-TAHN?'
        },
        {
          speaker: 'Lisa',
          french: 'Je commence seulement cette année. Ma sœur travaille comme professeure d\'anglais ici.',
          english: 'I\'m just starting this year. My sister works as an English teacher here.',
          pronunciation: 'zhuh ko-MAHNS suhl-MAHN set ah-NAY. mah SUR trah-VY kom pro-fuh-SUR dahn-GLAY ee-SEE'
        },
        {
          speaker: 'Grandmère',
          french: 'Formidable ! Et tes parents ? Ils ne visitent jamais la France ?',
          english: 'Wonderful! And your parents? Don\'t they ever visit France?',
          pronunciation: 'for-mee-DAHBL! ay tay pah-RAHN? eel nuh vee-ZEET zhah-MAY lah FRAHNSS?'
        },
        {
          speaker: 'Lisa',
          french: 'Mon père ne voyage plus maintenant, mais ma mère adore voyager.',
          english: 'My father doesn\'t travel anymore now, but my mother loves to travel.',
          pronunciation: 'mohn PAIR nuh voy-AZH plu man-tuh-NAHN, may mah MAIR ah-DOR voy-ah-ZHAY'
        },
        {
          speaker: 'Antoine',
          french: 'Elle parle français aussi ?',
          english: 'Does she speak French too?',
          pronunciation: 'el parl frahn-SAY oh-SEE?'
        },
        {
          speaker: 'Lisa',
          french: 'Non, elle ne parle que anglais et espagnol. Elle enseigne l\'espagnol.',
          english: 'No, she only speaks English and Spanish. She teaches Spanish.',
          pronunciation: 'nohn, el nuh parl kuh ahn-GLAY ay es-pah-NYOHL. el ahn-SAYN les-pah-NYOHL'
        }
      ],
      cultural_notes: [
        'Family meals are central to French culture. Grandmère (grandmother) often holds a special place in family gatherings, and it\'s common to discuss work, studies, and travel during dinner conversations.',
        'France has strong traditions in language education. Many French people are multilingual, and there\'s great respect for those learning French as a foreign language. Language exchange is very popular.'
      ],
      vocabulary_highlights: ['bonsoir', 'américaine', 'jamais', 'depuis', 'seulement', 'professeure', 'visitent', 'voyage', 'enseigne']
    },

    grammar: {
      topic: 'Advanced Negation Forms & Essential -er Verbs',
      explanation: 'Beyond basic negation, French offers specific negation patterns for different meanings. Combined with essential -er verbs, these patterns allow for precise expression of daily activities, work, and family life.',
      patterns: [
        'ne...jamais = never: Je ne voyage jamais (I never travel)',
        'ne...plus = no longer/no more: Il ne travaille plus (He doesn\'t work anymore)',
        'ne...que = only: Elle ne parle que français (She only speaks French)',
        'WORD ORDER: Ne + verb + jamais/plus/que + rest of sentence',
        'Regular -er verbs follow consistent conjugation patterns across all subjects'
      ],
      examples: [
        {
          french: 'Je ne regarde jamais la télé',
          english: 'I never watch TV',
          pronunciation: 'Zhuh nuh ruh-gard zha-may la tay-LAY',
          highlight: 'ne...jamais = never'
        },
        {
          french: 'Il ne travaille plus le weekend',
          english: 'He doesn\'t work on weekends anymore',
          pronunciation: 'Eel nuh tra-vai PLOO luh week-END',
          highlight: 'ne...plus = no longer'
        },
        {
          french: 'Elle ne parle que français',
          english: 'She only speaks French',
          pronunciation: 'El nuh parl kuh fron-SEH',
          highlight: 'ne...que = only'
        }
      ],
      conjugation_table: [
        {
          pronoun: 'je',
          form: 'commence',
          pronunciation: 'zhuh ko-MAHNS'
        },
        {
          pronoun: 'tu',
          form: 'commences',
          pronunciation: 'tu ko-MAHNS'
        },
        {
          pronoun: 'il/elle',
          form: 'commence',
          pronunciation: 'eel/el ko-MAHNS'
        },
        {
          pronoun: 'nous',
          form: 'commençons',
          pronunciation: 'noo ko-mahn-SOHN'
        },
        {
          pronoun: 'vous',
          form: 'commencez',
          pronunciation: 'voo ko-mahn-SAY'
        },
        {
          pronoun: 'ils/elles',
          form: 'commencent',
          pronunciation: 'eel/el ko-MAHNS'
        }
      ],
      additional_conjugation_tables: [
                 {
           verb: 'voyager',
           forms: [
             { pronoun: 'je', form: 'voyage', pronunciation: 'zhuh voy-AZH' },
             { pronoun: 'tu', form: 'voyages', pronunciation: 'tu voy-AZH' },
             { pronoun: 'il/elle', form: 'voyage', pronunciation: 'eel/el voy-AZH' },
             { pronoun: 'nous', form: 'voyageons', pronunciation: 'noo voy-ah-ZHOHN' },
             { pronoun: 'vous', form: 'voyagez', pronunciation: 'voo voy-ah-ZHAY' },
             { pronoun: 'ils/elles', form: 'voyagent', pronunciation: 'eel/el voy-AZH' }
           ]
         },
                 {
           verb: 'enseigner',
           forms: [
             { pronoun: 'je', form: 'enseigne', pronunciation: 'zhuh ahn-SAYN' },
             { pronoun: 'tu', form: 'enseignes', pronunciation: 'tu ahn-SAYN' },
             { pronoun: 'il/elle', form: 'enseigne', pronunciation: 'eel/el ahn-SAYN' },
             { pronoun: 'nous', form: 'enseignons', pronunciation: 'noo ahn-say-NOHN' },
             { pronoun: 'vous', form: 'enseignez', pronunciation: 'voo ahn-say-NAY' },
             { pronoun: 'ils/elles', form: 'enseignent', pronunciation: 'eel/el ahn-SAYN' }
           ]
         },
                 {
           verb: 'visiter',
           forms: [
             { pronoun: 'je', form: 'visite', pronunciation: 'zhuh vee-ZEET' },
             { pronoun: 'tu', form: 'visites', pronunciation: 'tu vee-ZEET' },
             { pronoun: 'il/elle', form: 'visite', pronunciation: 'eel/el vee-ZEET' },
             { pronoun: 'nous', form: 'visitons', pronunciation: 'noo vee-zee-TOHN' },
             { pronoun: 'vous', form: 'visitez', pronunciation: 'voo vee-zee-TAY' },
             { pronoun: 'ils/elles', form: 'visitent', pronunciation: 'eel/el vee-ZEET' }
           ]
         }
      ]
    },

    vocabulary: [
      {
        word: 'commencer',
        translation: 'to start/begin',
        category: 'verbs',
        example_sentence: 'Je commence mes études en septembre.',
        example_translation: 'I start my studies in September.'
      },
      {
        word: 'terminer',
        translation: 'to finish/end',
        category: 'verbs',
        example_sentence: 'Tu termines le travail à 17h.',
        example_translation: 'You finish work at 5pm.'
      },
      {
        word: 'voyager',
        translation: 'to travel',
        category: 'verbs',
        example_sentence: 'Elle voyage souvent en Europe.',
        example_translation: 'She travels often in Europe.'
      },
      {
        word: 'enseigner',
        translation: 'to teach',
        category: 'verbs',
        example_sentence: 'Mon père enseigne les mathématiques.',
        example_translation: 'My father teaches mathematics.'
      },
      {
        word: 'visiter',
        translation: 'to visit',
        category: 'verbs',
        example_sentence: 'Nous visitons Paris ce weekend.',
        example_translation: 'We are visiting Paris this weekend.'
      },
      {
        word: 'inviter',
        translation: 'to invite',
        category: 'verbs',
        example_sentence: 'Ils invitent leurs amis à dîner.',
        example_translation: 'They invite their friends to dinner.'
      },
      {
        word: 'aider',
        translation: 'to help',
        category: 'verbs',
        example_sentence: 'Je t\'aide avec tes devoirs.',
        example_translation: 'I help you with your homework.'
      },
      {
        word: 'chercher',
        translation: 'to look for',
        category: 'verbs',
        example_sentence: 'Tu cherches tes clés ?',
        example_translation: 'Are you looking for your keys?'
      },
      {
        word: 'depuis',
        translation: 'since/for',
        category: 'time',
        example_sentence: 'J\'étudie le français depuis deux ans.',
        example_translation: 'I have been studying French for two years.'
      },
      {
        word: 'seulement',
        translation: 'only',
        category: 'adverbs',
        example_sentence: 'Il parle seulement anglais.',
        example_translation: 'He only speaks English.'
      },
      {
        word: 'maintenant',
        translation: 'now',
        category: 'time',
        example_sentence: 'Je travaille maintenant.',
        example_translation: 'I work now.'
      },
      {
        word: 'longtemps',
        translation: 'long time',
        category: 'time',
        example_sentence: 'Ça fait longtemps qu\'on ne s\'est pas vus.',
        example_translation: 'It\'s been a long time since we last saw each other.'
      },
      {
        word: 'la sœur',
        translation: 'sister',
        category: 'family',
        example_sentence: 'Ma sœur habite à Lyon.',
        example_translation: 'My sister lives in Lyon.'
      },
      {
        word: 'le frère',
        translation: 'brother',
        category: 'family',
        example_sentence: 'Mon frère travaille à Paris.',
        example_translation: 'My brother works in Paris.'
      },
      {
        word: 'les enfants',
        translation: 'children',
        category: 'family',
        example_sentence: 'Les enfants jouent dans le jardin.',
        example_translation: 'The children play in the garden.'
      },
      {
        word: 'la grand-mère',
        translation: 'grandmother',
        category: 'family',
        example_sentence: 'Ma grand-mère cuisine très bien.',
        example_translation: 'My grandmother cooks very well.'
      },
      {
        word: 'le professeur',
        translation: 'teacher/professor',
        category: 'professions',
        example_sentence: 'Le professeur explique la leçon.',
        example_translation: 'The teacher explains the lesson.'
      },
      {
        word: 'français(e)',
        translation: 'French',
        category: 'nationalities',
        example_sentence: 'Elle est française.',
        example_translation: 'She is French.'
      },
      {
        word: 'américain(e)',
        translation: 'American',
        category: 'nationalities',
        example_sentence: 'Il est américain.',
        example_translation: 'He is American.'
      },
      {
        word: 'espagnol(e)',
        translation: 'Spanish',
        category: 'nationalities',
        example_sentence: 'Mon ami est espagnol.',
        example_translation: 'My friend is Spanish.'
      },
      {
        word: 'italien(ne)',
        translation: 'Italian',
        category: 'nationalities',
        example_sentence: 'La cuisine italienne est délicieuse.',
        example_translation: 'Italian cuisine is delicious.'
      },
      {
        word: 'allemand(e)',
        translation: 'German',
        category: 'nationalities',
        example_sentence: 'Il parle allemand couramment.',
        example_translation: 'He speaks German fluently.'
      },
      {
        word: 'la France',
        translation: 'France',
        category: 'countries',
        example_sentence: 'La France est un beau pays.',
        example_translation: 'France is a beautiful country.'
      },
      {
        word: 'les États-Unis',
        translation: 'United States',
        category: 'countries',
        example_sentence: 'Les États-Unis sont très grands.',
        example_translation: 'The United States is very large.'
      }
    ],

    exercises: [
      {
        id: 'ex-10-1',
        type: 'multiple_choice',
        question: 'How do you say "She never watches television" in French?',
        options: [
          'Elle ne regarde jamais la télévision',
          'Elle ne jamais regarde la télévision', 
          'Elle jamais ne regarde la télévision',
          'Elle ne regarde plus la télévision'
        ],
        correct_answer: ['Elle ne regarde jamais la télévision'],
        explanation: 'Use \'ne...jamais\' for \'never\': Elle ne regarde jamais la télévision.',
        hints: ['ne comes before the verb', 'jamais comes after the verb', 'Use ne...jamais for never']
      },
      {
        id: 'ex-10-2',
        type: 'conjugation',
        question: 'Conjugate the verb "commencer" (to start):',
        verb: 'commencer',
        translations: {
          'je': 'I start',
          'tu': 'you start',
          'il/elle': 'he/she starts', 
          'nous': 'we start',
          'vous': 'you start (formal/plural)',
          'ils/elles': 'they start'
        },
        correct_answer: ['je commence', 'tu commences', 'il/elle commence', 'nous commençons', 'vous commencez', 'ils/elles commencent'],
        explanation: 'Regular -er verb conjugation: je -e, tu -es, il/elle -e, nous -ons, vous -ez, ils/elles -ent'
      },
      {
        id: 'ex-10-3',
        type: 'conjugation',
        question: 'Conjugate the verb "voyager" (to travel):',
        verb: 'voyager',
        translations: {
          'je': 'I travel',
          'tu': 'you travel',
          'il/elle': 'he/she travels',
          'nous': 'we travel', 
          'vous': 'you travel (formal/plural)',
          'ils/elles': 'they travel'
        },
        correct_answer: ['je voyage', 'tu voyages', 'il/elle voyage', 'nous voyageons', 'vous voyagez', 'ils/elles voyagent'],
        explanation: 'Regular -er verb conjugation: je -e, tu -es, il/elle -e, nous -ons, vous -ez, ils/elles -ent'
      },
      {
        id: 'ex-10-4',
        type: 'multiple_choice',
        question: 'Choose the correct negation for each sentence:',
        options: ['ne...jamais', 'ne...pas', 'ne...plus', 'ne...que'],

        correct_answer: ['ne...jamais', 'ne...plus', 'ne...que'],
        explanation: 'ne...jamais = never, ne...plus = no longer, ne...que = only',
        hints: ['Look at the meaning: never, no longer, only']
      },
      {
        id: 'ex-10-5',
        type: 'multiple_choice',
        question: 'Choose the correct nationality form:',
        options: ['français', 'française', 'france', 'italien', 'italienne', 'italie', 'espagnol', 'espagnole', 'espagne'],

        correct_answer: ['française', 'italien', 'espagnole'],
        explanation: 'Nationality adjectives agree with gender: français/française, italien/italienne, espagnol/espagnole',
        hints: ['Look at the gender: Marie (feminine), Paolo (masculine), Sofia (feminine)']
      },
      {
        id: 'ex-10-6',
        type: 'translation',
        question: 'Translate: "My sister teaches Spanish, but she never travels to Spain"',
        correct_answer: ['ma sœur enseigne l\'espagnol, mais elle ne voyage jamais en Espagne'],
        explanation: 'ma sœur (my sister) + enseigne (teaches) + l\'espagnol (Spanish) + mais (but) + elle ne voyage jamais (she never travels) + en Espagne (to Spain).',
        hints: ['ma sœur = my sister', 'enseigne = teaches', 'ne...jamais = never', 'voyage = travels']
      },
      {
        id: 'ex-10-7',
        type: 'fill_blank',
        question: 'Complete the sentence: Je _____ le français depuis deux ans.',
        options: ['commence', 'commences', 'commençons', 'étudie'],
        correct_answer: ['étudie'],
        explanation: 'Je (I) + étudie (study) + le français (French) + depuis deux ans (for two years).',
        hints: ['Je = I (first person)', 'Use the -e ending for je with -er verbs', 'depuis = for/since']
      },
      {
        id: 'ex-10-8',
        type: 'fill_blank',
        question: 'Complete this conversation with appropriate -er verbs: Tu _____ souvent tes grands-parents ? (visit) Non, je ne _____ jamais le temps. (have/find) Ils _____ encore dans la même maison ? (live)',
        correct_answer: ['visites', 'trouve', 'habitent'],
        explanation: 'visites (you visit), trouve (I find), habitent (they live) - all regular -er verb forms.',
        hints: ['Look at the subject: tu = -es ending, je = -e ending, ils = -ent ending']
      },
      {
        id: 'ex-10-9',
        type: 'vocabulary_match',
        question: 'Sort these words into categories:',
        pairs: [
          { french: 'française', english: 'French (feminine)' },
          { french: 'commencer', english: 'to start' },
          { french: 'la sœur', english: 'sister' },
          { french: 'voyager', english: 'to travel' },
          { french: 'américain', english: 'American (masculine)' },
          { french: 'le professeur', english: 'teacher' },
          { french: 'terminer', english: 'to finish' },
          { french: 'espagnole', english: 'Spanish (feminine)' }
        ],
        correct_answer: ['française-French (feminine)', 'commencer-to start', 'la sœur-sister', 'voyager-to travel', 'américain-American (masculine)', 'le professeur-teacher', 'terminer-to finish', 'espagnole-Spanish (feminine)'],
        explanation: 'Organize words by category: nationalities, verbs, family, professions.',
        hints: ['Look at word endings: -er = verbs, -e = feminine, -ain = masculine']
      },
      {
        id: 'ex-10-10',
        type: 'fill_blank',
        question: 'Complete the missing verb forms: enseigner: tu _____ (you teach), nous enseignons (we teach), ils _____ (they teach) | chercher: je _____ (I look for), tu cherches (you look for), elle _____ (she looks for)',
        correct_answer: ['enseignes', 'enseignent', 'cherche', 'cherche'],
        explanation: 'Regular -er verbs follow the pattern: je -e, tu -es, il/elle -e, nous -ons, vous -ez, ils/elles -ent.',
        hints: ['Remember the pattern: -e, -es, -e, -ons, -ez, -ent', 'Look at the existing forms to see the pattern']
      }
    ],

    completion_criteria: {
      min_exercises_correct: 8,
      required_sections: ['dialogue', 'grammar', 'vocabulary', 'exercises']
    }
}

