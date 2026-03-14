import { BeginnerLesson } from '../lessonTypes'

export const beginnerLesson7: BeginnerLesson = {
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
          pronunciation: 'Ah-lay too drwa zhoos-koh kar-FOOR',
          highlight: 'tout droit jusqu\'au'
        },
        {
          french: 'Tournez à gauche après la banque.',
          english: 'Turn left after the bank.',
          pronunciation: 'Toor-nay ah GOASH ah-preh la BONK',
          highlight: 'Tournez à gauche après'
        },
        {
          french: 'La pharmacie est en face de la boulangerie.',
          english: 'The pharmacy is across from the bakery.',
          pronunciation: 'La far-ma-SEE eh-ton fass duh la boo-lonzh-REE',
          highlight: 'en face de'
        },
        {
          french: 'C\'est à dix minutes à pied.',
          english: 'It\'s a 10-minute walk.',
          pronunciation: 'Set ah dee mee-NOOT ah PYAY',
          highlight: 'à dix minutes à pied'
        },
        {
          french: 'Prenez le métro ligne 4 direction Porte de Clignancourt.',
          english: 'Take metro line 4 direction Porte de Clignancourt.',
          pronunciation: 'Pruh-nay luh may-tro leen-yuh KATR dee-rek-syon Port duh Klee-nyon-KOOR',
          highlight: 'Prenez le métro ligne 4 direction'
        },
        {
          french: 'Descendez à la prochaine station.',
          english: 'Get off at the next station.',
          pronunciation: 'Day-son-day ah la pro-shen stah-SYON',
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
}

