import { BeginnerLesson } from '../lessonTypes'

export const beginnerLesson4: BeginnerLesson = {
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
          pronunciation: 'Eel eh kanz-ERR TRAHNT',
          highlight: 'quinze heures trente'
        },
        {
          french: 'Nous sommes lundi, le trois janvier.',
          english: 'It is Monday, January 3rd.',
          pronunciation: 'Noo somm lun-DEE, luh trwa zhon-VYAY',
          highlight: 'lundi, le trois janvier'
        },
        {
          french: 'J\'ai rendez-vous à dix heures et demie.',
          english: 'I have an appointment at 10:30.',
          pronunciation: 'Jhay ron-day-voo ah deez-ERR ay duh-MEE',
          highlight: 'dix heures et demie'
        },
        {
          french: 'Quelle heure est-il? Il est midi.',
          english: 'What time is it? It is noon.',
          pronunciation: 'Kel err eh-TEEL? Eel eh mee-DEE',
          highlight: 'Quelle heure... midi'
        },
        {
          french: 'Mon anniversaire est le vingt-cinq décembre.',
          english: 'My birthday is December 25th.',
          pronunciation: 'Mon ah-nee-ver-sair eh luh vant-sank day-SOM-bruh',
          highlight: 'le vingt-cinq décembre'
        },
        {
          french: 'Le magasin ouvre à neuf heures du matin.',
          english: 'The store opens at 9 AM.',
          pronunciation: 'Luh ma-ga-zan oov-ruh ah nuh-VERR doo ma-TAN',
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
}

