import { BeginnerLesson } from '../lessonTypes'

export const beginnerLesson8: BeginnerLesson = {
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
          pronunciation: 'Zhuh parl fron-SEH ah-vek may-zah-MEE',
          highlight: 'parle'
        },
        {
          french: 'Tu habites dans une belle maison.',
          english: 'You live in a beautiful house.',
          pronunciation: 'Too ah-beet donz-oon bel may-ZON',
          highlight: 'habites'
        },
        {
          french: 'Il travaille comme ingénieur.',
          english: 'He works as an engineer.',
          pronunciation: 'Eel tra-vai kom an-zhay-NYUR',
          highlight: 'travaille'
        },
        {
          french: 'Nous étudions ensemble.',
          english: 'We study together.',
          pronunciation: 'Noo-zay-too-DYON on-SOM-bluh',
          highlight: 'étudions'
        },
        {
          french: 'Vous aimez la cuisine française.',
          english: 'You like French cuisine.',
          pronunciation: 'Voo-zem-ay la kwee-zeen fron-SEZ',
          highlight: 'aimez'
        },
        {
          french: 'Ils parlent plusieurs langues.',
          english: 'They speak several languages.',
          pronunciation: 'Eel parl ploo-zyur LONG',
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

