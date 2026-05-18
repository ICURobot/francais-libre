'use client'

import AdvancedLessonLayout, { AdvancedLessonData } from '../../../../../components/lessons/AdvancedLessonLayout'

const lessonData: AdvancedLessonData = {
  id: 52,
  title: 'Language Registers',
  title_fr: 'Les Registres de Langue',
  level: 'B2',
  description:
    "Master the four French registers — soutenu, courant, familier, argotique — and learn to switch consciously between them. Register mixing errors signal poor French even when grammar is technically correct; this is the meta-skill that makes all your other B2 structures work in context.",
  dialogue: {
    title: 'Une journée, trois registres',
    context:
      "Camille Roussel, a young employee at a Parisian publishing house, asks for a day off. Three scenes show the same request in three registers: (1) a formal written letter to HR (soutenu), (2) a spoken conversation with her direct manager (courant), (3) a text message to a colleague (familier). The contrast reveals how French signals register through lexical choice, syntax, and even punctuation.",
    register: 'courant',
    exchanges: [
      {
        speaker: 'Scène 1 — Lettre RH (soutenu)',
        french: "Madame, Monsieur,",
        english: 'Madam, Sir,',
      },
      {
        speaker: 'Camille (écrit)',
        french: "Je me permets de solliciter une journée de congé exceptionnelle le vendredi 15 octobre.",
        english: 'I take the liberty of requesting an exceptional day’s leave on Friday 15 October.',
      },
      {
        speaker: 'Camille (écrit)',
        french: "Cette demande est motivée par des circonstances familiales que je vous exposerai si nécessaire.",
        english: 'This request is motivated by family circumstances that I will explain to you if necessary.',
      },
      {
        speaker: 'Camille (écrit)',
        french: "Je vous serais très reconnaissante de bien vouloir faire suivre ma requête au service compétent. Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
        english: "I would be very grateful if you would kindly forward my request to the relevant department. Please accept, Madam, Sir, the expression of my distinguished regards.",
      },
      {
        speaker: 'Scène 2 — Conversation avec sa cheffe (courant)',
        french: "Camille frappe à la porte du bureau de Sophie.",
        english: 'Camille knocks on Sophie’s office door.',
      },
      {
        speaker: 'Camille',
        french: "Sophie, je peux te déranger deux minutes ?",
        english: 'Sophie, can I disturb you for two minutes?',
      },
      {
        speaker: 'Sophie',
        french: "Bien sûr, entre. Qu'est-ce qu'il y a ?",
        english: 'Of course, come in. What’s up?',
      },
      {
        speaker: 'Camille',
        french: "Je voulais te demander si je pouvais poser un jour le vendredi 15. C'est pour une affaire de famille — rien de grave, mais je dois être là.",
        english: 'I wanted to ask if I could take Friday the 15th off. It’s a family matter — nothing serious, but I have to be there.',
      },
      {
        speaker: 'Sophie',
        french: "Pas de souci. Tu envoies une demande formelle aux RH ? Et tu préviens l'équipe pour le bouclage.",
        english: 'No problem. You’ll send a formal request to HR? And let the team know about the deadline.',
      },
      {
        speaker: 'Camille',
        french: "Bien sûr, je le fais aujourd'hui. Merci beaucoup.",
        english: 'Of course, I’ll do it today. Thank you very much.',
      },
      {
        speaker: 'Scène 3 — SMS à sa collègue Mathilde (familier)',
        french: "Camille tape sur son téléphone à 19h le soir même.",
        english: 'Camille texts on her phone at 7 p.m. that evening.',
      },
      {
        speaker: 'Camille (SMS)',
        french: "Coucou Math, j'pose le 15. Truc de famille, rien de fou. Tu pourras gérer le bouclage avec Sophie ? T'es la meilleure 🙏",
        english: "Hey Math, I'm taking the 15th off. Family thing, no big deal. Can you handle the deadline with Sophie? You're the best 🙏",
      },
      {
        speaker: 'Mathilde (SMS)',
        french: "Mais grave, t'inquiète meuf, je gère. Tu m'racontes mardi ? Bisou ❤️",
        english: "Yeah totally, don't worry girl, I've got it. Tell me Tuesday? Kiss ❤️",
      },
      {
        speaker: 'Camille (SMS)',
        french: "Trop bien, mille mercis. Bonne soirée 😘",
        english: 'Awesome, thanks a million. Have a good evening 😘',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'La taxonomie des quatre registres',
      explanation:
        "French formally distinguishes four registers, each with its own lexicon, syntax, and contexts of use. The taxonomy is taught explicitly in French schools and is socially load-bearing: native speakers can identify a register from a single sentence, and mixing them inappropriately signals incompetence even when grammar is correct.",
      examples: [
        "SOUTENU : formal writing, official contexts, literary French — subjonctif imparfait (reconnaissance), inversion interrogative, vocabulary from Latin/Greek roots",
        "COURANT : standard educated spoken and written French — passé composé, est-ce que, vocabulary commun",
        "FAMILIER : informal speech, messages, casual writing — dropped ne, tu, contractions (t'as, j'vais, y'a), discourse markers (genre, quoi, tu vois)",
        "ARGOTIQUE : street slang, youth language — verlan (meuf, ouf, chelou), lexical substitutions (kiffer, grave), often regional",
        "RULE : the four are organised on a continuum, not as discrete boxes. Soutenu and argotique are extremes; courant and familier are the daily working range.",
      ],
      tip: "Don't think of registers as a translation table — think of them as social postures. Soutenu = institutional respect. Courant = educated neutrality. Familier = personal warmth. Argotique = in-group belonging. The lexical choices follow from the posture.",
    },
    {
      title: 'Marqueurs syntaxiques du soutenu',
      explanation:
        "Soutenu French signals itself through specific syntactic devices: interrogative inversion (without est-ce que), the conditional as a politeness device, ne...que and ne...guère restrictive negations, nominalisation, formal subordinators (afin que, dès lors que, pour autant que), and — in literary contexts only — the subjonctif imparfait and passé simple.",
      examples: [
        "INVERSION : Avez-vous reçu ma lettre ? (vs courant : Est-ce que vous avez reçu...?)",
        "CONDITIONNEL POLI : Auriez-vous l'amabilité de... ? (vs courant : Pouvez-vous...?)",
        "NÉGATION : Il n'a guère apprécié votre démarche. (vs courant : Il n'a pas vraiment apprécié...)",
        "SUBORDONNÉES : Dès lors que vous acceptez, le contrat est valable. (vs courant : À partir du moment où...)",
        "FORMULES FIGÉES : Je vous prie d'agréer... / Veuillez agréer... / Je me permets de...",
      ],
      tip: "If you reach for inverted questions, conditional politeness, and ne...que / ne...guère, you're in soutenu territory. Combine at least three of these markers per paragraph in a formal letter — fewer and the register reads as inconsistent.",
    },
    {
      title: 'Marqueurs lexicaux du familier',
      explanation:
        "Familier French signals itself through specific lexical choices and phonetic contractions. Many forms are written reflecting spoken contractions (t'as, j'vais, y'a, ç'va), discourse markers proliferate (genre, quoi, en fait, du coup), and certain vocabulary items mark the register instantly (boulot, pote, sympa, truc, mec, fric).",
      examples: [
        "CONTRACTIONS : t'as fait quoi ? / j'vais te dire / y'a un problème / ç'va aller",
        "DROP NE : Il vient pas. (vs courant : Il ne vient pas.)",
        "DISCOURSE MARKERS : genre, quoi, tu vois, en fait, du coup, carrément, franchement",
        "VOCAB familier : boulot (travail), pote (ami), sympa (agréable), truc (chose), mec (homme), fric (argent)",
        "PUNCTUATION : ellipses, points d'exclamation, émojis — tous marqueurs visuels du familier écrit",
      ],
      tip: "Familier ≠ incorrect. Native speakers move into familier constantly with friends, family, and on social media. The error is using familier in contexts that require courant or soutenu — that's what signals poor register awareness.",
    },
    {
      title: 'L’argotique et le verlan',
      explanation:
        "Argotique French is street slang, often originating in banlieue youth culture and circulating widely in urban spoken French. Its core productive mechanism is VERLAN — syllable inversion (l'envers → ver-lan). Many verlan terms have entered mainstream usage: meuf (femme), ouf (fou), chelou (louche), keuf (flic), tromé (métro). Argotique is also the register of slang substitutions (kiffer = aimer, grave = très, taf = travail).",
      examples: [
        "VERLAN : femme → meuf · fou → ouf · louche → chelou · flic → keuf · métro → tromé",
        "SLANG LEXICAL : kiffer (aimer beaucoup) · grave (très) · taf / boulot (travail) · daron (père) · darone (mère)",
        "EXEMPLE : « J'kiffe grave cette meuf, elle est trop ouf. » (argotique)",
        "= COURANT : « J'aime beaucoup cette femme, elle est extraordinaire. »",
        "= SOUTENU : « J'éprouve une grande admiration pour cette personne, dont la personnalité me fascine. »",
      ],
      tip: 'You should be able to RECOGNISE argotique reliably (it appears in films, music, TV, social media) but use it with great caution. Misjudging context — using argotique in a professional setting — has real social consequences in France.',
    },
    {
      title: "Le mélange des registres : l'erreur à éviter",
      explanation:
        "The cardinal register error is MIXING within a single text or conversation. A formal letter that suddenly uses 'sympa' or 'boulot' reads as incompetent; a text to a friend that uses 'je vous prie d'agréer' reads as ironic or hostile. The DELF B2 production écrite is graded partly on register CONSISTENCY — pick a register and hold it.",
      examples: [
        "ERREUR : Madame, je vous prie de bien vouloir accepter ma demande. C'est sympa de votre part de me lire. (mélange soutenu + familier)",
        "ERREUR : Coucou ! Je me permets de solliciter ton avis sur le projet. (mélange familier + soutenu)",
        "CORRECT (soutenu) : Madame, je vous prie de bien vouloir accepter ma demande. Je vous saurais gré de votre attention.",
        "CORRECT (familier) : Coucou ! J'aimerais bien avoir ton avis sur le truc. Tu peux y jeter un œil ?",
        "RULE : un seul registre par texte, sauf intention stylistique délibérée (humour, ironie).",
      ],
      tip: "Before sending any formal email, re-read it looking for one familier word — sympa, super, du coup, en fait, truc. Replace each one. The whole text will lift.",
    },
  ],
  vocabulary: [
    { french: 'je me permets de', english: 'I take the liberty of', category: 'Formule épistolaire', example: 'Je me permets de solliciter un rendez-vous.', note: '[soutenu]' },
    { french: 'je vous saurais gré de', english: 'I would be grateful to you for', category: 'Formule épistolaire', example: 'Je vous saurais gré de votre réponse.', note: '[soutenu]' },
    { french: 'veuillez agréer', english: 'please accept', category: 'Formule de politesse', example: 'Veuillez agréer mes salutations distinguées.', note: '[soutenu] — formule fixe' },
    { french: 'je vous prie d’agréer', english: 'I beg you to accept', category: 'Formule de politesse', example: "Je vous prie d'agréer l'expression de mes sentiments respectueux.", note: '[soutenu]' },
    { french: 'néanmoins', english: 'nevertheless', category: 'Connecteur soutenu', example: 'Le projet est ambitieux ; néanmoins, sa faisabilité reste à démontrer.', note: '[soutenu]' },
    { french: 'en revanche', english: 'on the other hand', category: 'Connecteur soutenu', example: 'Les bénéfices sont nets ; en revanche, le risque est élevé.', note: '[soutenu/courant]' },
    { french: 'dès lors que', english: 'inasmuch as / from the moment when', category: 'Subordonnant soutenu', example: 'Dès lors que vous acceptez, le contrat est valide.', note: '[soutenu]' },
    { french: 'il appert que', english: 'it appears that', category: 'Verbe impersonnel soutenu', example: "Il appert que le dossier est incomplet.", note: '[soutenu/juridique]' },
    { french: 'par contre', english: 'on the other hand', category: 'Connecteur courant', example: 'Le service est bon, par contre les prix sont élevés.', note: '[courant] (proscrit en soutenu)' },
    { french: 'quand même', english: 'still / anyway', category: 'Marqueur courant', example: 'Il pleut, mais nous allons quand même partir.', note: '[courant]' },
    { french: 'je vous demande de', english: 'I am asking you to', category: 'Demande courante', example: 'Je vous demande de respecter le calendrier.', note: '[courant]' },
    { french: 't’as', english: 'you’ve / you have', category: 'Contraction familière', example: "T'as vu le dernier épisode ?", note: '[familier]' },
    { french: 'y’a', english: 'there is/are', category: 'Contraction familière', example: "Y'a un problème avec le wifi.", note: '[familier]' },
    { french: 'j’vais', english: 'I’m gonna', category: 'Contraction familière', example: "J'vais le faire demain.", note: '[familier]' },
    { french: 'genre', english: 'like / kind of', category: 'Discourse marker familier', example: "C'était genre super bizarre.", note: '[familier], en début de groupe' },
    { french: 'quoi (final)', english: '(filler) / you know', category: 'Discourse marker familier', example: "C'était cool, quoi.", note: '[familier], en fin de phrase' },
    { french: 'carrément', english: 'totally', category: 'Adverbe familier', example: "Il est carrément génial.", note: '[familier]' },
    { french: 'franchement', english: 'honestly / frankly', category: 'Adverbe familier', example: "Franchement, j'ai pas adoré.", note: '[familier-courant]' },
    { french: 'sympa', english: 'nice / cool', category: 'Adjectif familier', example: "Il est super sympa, ce nouveau collègue.", note: '[familier]' },
    { french: 'le boulot', english: 'work / job', category: 'Nom familier', example: "J'ai trop de boulot cette semaine.", note: '[familier]' },
    { french: 'un pote', english: 'a buddy / friend', category: 'Nom familier', example: "Je sors avec des potes ce soir.", note: '[familier]' },
    { french: 'un truc', english: 'a thing', category: 'Nom familier', example: "Y'a un truc qui cloche.", note: '[familier]' },
    { french: 'un mec', english: 'a guy', category: 'Nom familier', example: "Un mec étrange est venu hier.", note: '[familier]' },
    { french: 'la meuf', english: 'the woman / girl (verlan)', category: 'Verlan / argotique', example: 'Cette meuf est trop forte.', note: '[argotique] verlan de femme' },
    { french: 'ouf', english: 'crazy / amazing (verlan)', category: 'Verlan / argotique', example: "C'est un truc de ouf !", note: '[argotique] verlan de fou' },
    { french: 'chelou', english: 'shady / weird (verlan)', category: 'Verlan / argotique', example: 'Son comportement est chelou.', note: '[argotique] verlan de louche' },
    { french: 'kiffer', english: 'to love / dig', category: 'Argotique', example: "Je kiffe trop ce film.", note: '[argotique]' },
    { french: 'grave', english: 'really / a lot', category: 'Adverbe argotique', example: "C'est grave bon, ce resto.", note: '[argotique]' },
    { french: 'le taf', english: 'work (slang)', category: 'Argotique', example: "Je rentre du taf à 19h.", note: '[argotique]' },
    { french: 'le daron / la darone', english: 'dad / mum (slang)', category: 'Argotique', example: 'Mes darons partent en vacances.', note: '[argotique]' },
    { french: 'trop', english: 'so / very (familier)', category: 'Intensificateur familier', example: 'C’est trop cool.', note: '[familier]' },
    { french: 'le bouclage', english: 'the deadline / wrap-up', category: 'Vocabulaire professionnel', example: 'Le bouclage du numéro est lundi.' },
  ],
  culturalNotes: [
    {
      title: 'La conscience sociolinguistique française',
      content:
        "French speakers are acutely aware of language levels in ways that have few equivalents elsewhere. The education system explicitly teaches correct written register from primary school; secondary school students sit graded exams on register identification; HR departments use register cues in CV screening. Register errors in French are socially marking in a way that English-speaking cultures, with their more democratised written norms, often underestimate. A B2 learner who deploys register consciously punches above their grammatical weight.",
    },
    {
      title: 'Le verlan et la langue de la banlieue',
      content:
        "Verlan emerged from the multicultural banlieues of Paris and Lyon in the 1970s–80s and exploded into mainstream youth culture through hip-hop, cinema (La Haine, 1995), and television. Words like meuf, ouf, chelou, keuf have crossed every age and class barrier — today's grandparents understand them. The Académie française resists their normalisation, but they appear in dictionaries (Petit Larousse) and on news broadcasts when reporting on banlieue topics.",
    },
    {
      title: "La formule de politesse à la française",
      content:
        "Every professional email in France ends with a 'formule de politesse'. The casual close 'Cordialement' has become the daily standard; warmer is 'Bien à vous'; institutional is 'Avec mes salutations cordiales'; full soutenu is 'Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées'. The choice is socially graded — using the wrong formule signals the wrong relationship. Lycéens are taught the formule of each register; adults internalise it.",
    },
    {
      title: 'La tension académique vs argotique',
      content:
        "French public discourse periodically debates whether young people 'speak French badly'. The Académie française, certain newspapers (Le Figaro Magazine), and a strand of intellectual opinion lament the erosion of formal norms. Linguists (Henriette Walter, Alain Rey) argue the opposite — that French is healthily diverse and that register variation is a sign of vitality, not decline. The B2 learner doesn't need to take a side, but should be aware that the debate exists.",
    },
    {
      title: 'Les podcasts comme apprentissage de registre',
      content:
        "Listening to varied French podcasts is the most efficient way to absorb register at B2. Recommended palette: Affaires sensibles (France Inter — soutenu narrative), Transfert (Slate — courant intimate), Les Couilles sur la table (Binge — courant-familier), and any rap podcast for argotique. Hearing the same word across registers makes the differences acoustically visible.",
    },
  ],
  exercises: [
    {
      id: 'l52-register-sort-main',
      type: 'register_sort',
      question:
        "Classez chacune de ces expressions dans son registre.",
      categories: ['soutenu', 'courant', 'familier', 'argotique'],
      items: [
        { expression: 'Je me permets de solliciter votre attention.', correct_category: 'soutenu', explanation: '« Je me permets de » + « solliciter » = formule épistolaire soutenue.' },
        { expression: 'Je vous demande de réfléchir à cette question.', correct_category: 'courant', explanation: 'Courant : neutre, ni emphatique ni familier.' },
        { expression: "T'as vu ce qu'il a dit ?", correct_category: 'familier', explanation: 'Contraction « t’as » + ton oral.' },
        { expression: 'Cette meuf, elle est trop ouf.', correct_category: 'argotique', explanation: 'Verlan meuf + verlan ouf + intensificateur trop.' },
        { expression: 'Veuillez agréer mes salutations distinguées.', correct_category: 'soutenu', explanation: 'Formule de politesse fixe du registre soutenu.' },
        { expression: 'Bien cordialement.', correct_category: 'courant', explanation: 'Formule de politesse moderne courante.' },
        { expression: 'Bisous, à demain !', correct_category: 'familier', explanation: 'Salutation affectueuse + ponctuation expressive.' },
        { expression: 'Je kiffe grave ce groupe.', correct_category: 'argotique', explanation: 'Verbe argotique kiffer + intensificateur argotique grave.' },
        { expression: 'Il n’a guère apprécié votre démarche.', correct_category: 'soutenu', explanation: 'Ne...guère + démarche = soutenu.' },
        { expression: 'Il n’a pas vraiment aimé.', correct_category: 'courant', explanation: 'Négation standard + vocabulaire courant.' },
        { expression: 'Il a pas trop aimé.', correct_category: 'familier', explanation: 'Drop du « ne » + intensificateur trop = familier.' },
        { expression: 'Mon daron va péter un câble.', correct_category: 'argotique', explanation: 'Daron (slang) + péter un câble = argotique.' },
        { expression: "Y'a un truc qui cloche.", correct_category: 'familier', explanation: 'Y’a (contraction) + truc = familier.' },
        { expression: "Force est de constater que ce projet a échoué.", correct_category: 'soutenu', explanation: 'Force est de constater = locution soutenue.' },
        { expression: 'Du coup, on fait quoi ?', correct_category: 'familier', explanation: 'Du coup + quoi en fin = familier.' },
        { expression: "Quand bien même il accepterait, je refuserais.", correct_category: 'soutenu', explanation: 'Quand bien même + conditionnel = soutenu.' },
        { expression: 'Sa darone est trop sympa.', correct_category: 'argotique', explanation: 'Darone (slang) + trop sympa = argotique.' },
        { expression: 'J’aimerais avoir votre avis sur ce point.', correct_category: 'courant', explanation: 'Conditionnel poli + vocabulaire neutre = courant.' },
      ],
    },
    {
      id: 'l52-convert-formal-to-neutral',
      type: 'rewrite',
      question: 'Réécrivez chaque phrase soutenue en registre courant.',
      instruction_type: 'reported_speech',
      items: [
        {
          original: "Je vous saurais gré de bien vouloir répondre à ma requête dans les meilleurs délais.",
          expected: "Pourriez-vous répondre à ma demande dès que possible ?",
          explanation: 'Formules fixes → tournures neutres.',
        },
        {
          original: "Il n'a guère apprécié votre démarche.",
          expected: "Il n'a pas vraiment apprécié votre démarche.",
          explanation: 'Ne...guère → ne...pas vraiment.',
        },
        {
          original: "Veuillez agréer l'expression de mes salutations distinguées.",
          expected: "Cordialement.",
          explanation: 'Formule soutenue → formule courante moderne.',
        },
        {
          original: "Force est de constater que les résultats sont décevants.",
          expected: "Il faut bien reconnaître que les résultats sont décevants.",
          explanation: 'Force est de constater → il faut reconnaître.',
        },
      ],
    },
    {
      id: 'l52-convert-fam-to-neutral',
      type: 'rewrite',
      question: 'Réécrivez chaque phrase familière en registre courant.',
      instruction_type: 'reported_speech',
      items: [
        {
          original: "T'as vu ? Y'a un mec super sympa qui vient d'arriver.",
          expected: "Tu as vu ? Il y a un homme très agréable qui vient d'arriver.",
          explanation: 'Contractions et vocabulaire familier → neutralisés.',
        },
        {
          original: "Franchement, ce boulot, c'est carrément l'enfer.",
          expected: "Honnêtement, ce travail est vraiment difficile.",
          explanation: 'Franchement → honnêtement ; boulot → travail ; carrément → vraiment.',
        },
        {
          original: "Du coup, j'vais te dire un truc.",
          expected: "Donc, je vais te dire quelque chose.",
          explanation: 'Du coup → donc ; j’vais → je vais ; truc → quelque chose.',
        },
        {
          original: "Il vient pas, quoi.",
          expected: "Il ne vient pas.",
          explanation: 'Drop du « ne » + « quoi » final → négation complète et phrase nette.',
        },
      ],
    },
    {
      id: 'l52-detect-mismatch',
      type: 'multiple_choice',
      question:
        'Quelle phrase contient un MÉLANGE DE REGISTRES inapproprié dans un courrier formel ?',
      options: [
        "Madame, je vous saurais gré de bien vouloir examiner ma demande dans les meilleurs délais.",
        "Madame, je me permets de solliciter un rendez-vous afin d’évoquer le projet.",
        "Madame, je vous demande de bien vouloir étudier ma demande. C’est super sympa de votre part.",
        "Madame, je vous prie d’agréer l’expression de mes salutations distinguées.",
      ],
      correct_answer: "Madame, je vous demande de bien vouloir étudier ma demande. C’est super sympa de votre part.",
      explanation: '« Super sympa » est familier — totalement décalé après une demande formelle.',
    },
    {
      id: 'l52-context-choice',
      type: 'multiple_choice',
      question:
        'Vous écrivez un SMS à un ami pour lui demander un service. Quelle formulation est la plus appropriée ?',
      options: [
        "Coucou, j'aurais besoin de ton aide pour un truc. Tu peux ?",
        "Cher ami, je me permets de solliciter votre aide pour une affaire personnelle.",
        "Veuillez agréer ma demande d'assistance.",
        "Il appert que j'ai besoin de votre concours.",
      ],
      correct_answer: "Coucou, j'aurais besoin de ton aide pour un truc. Tu peux ?",
      explanation: 'SMS à un ami → registre familier. Les autres options sont soutenues et sonneraient ironiques.',
    },
    {
      id: 'l52-fillblank-soutenu',
      type: 'fill_blank',
      question:
        "Complétez cette ouverture de lettre SOUTENUE : « Madame, je ____ ____ de solliciter un entretien afin d'évoquer ma candidature. »",
      correct_answer: ['me permets'],
      explanation: '« Je me permets de » = formule fixe d’ouverture en registre soutenu.',
      hints: ['Une formule fixe en deux mots.'],
    },
    {
      id: 'l52-error-correction',
      type: 'error_correction',
      question: 'Corrigez l’incohérence de registre dans chaque phrase.',
      items: [
        {
          incorrect: "Madame, je vous prie d'agréer mes salutations. C'est trop sympa de me lire.",
          correct: "Madame, je vous prie d'agréer mes salutations distinguées.",
          explanation: '« C’est trop sympa » est familier — incompatible avec la formule soutenue.',
        },
        {
          incorrect: "Coucou Sophie, je me permets de solliciter ton avis sur le truc.",
          correct: "Coucou Sophie, j'aimerais avoir ton avis sur ce point.",
          explanation: '« Je me permets de solliciter » est soutenu — incompatible avec « Coucou » et « truc ».',
        },
        {
          incorrect: "Veuillez agréer cette demande, qui est carrément urgente.",
          correct: "Veuillez agréer cette demande, qui revêt un caractère d'urgence.",
          explanation: '« Carrément » est familier — incompatible avec « veuillez agréer ».',
        },
        {
          incorrect: "Salut Pierre, je voudrais vous demander un service.",
          correct: "Salut Pierre, je voudrais te demander un service.",
          explanation: '« Salut » + « tu » sont familiers ; « vous » est soutenu — il faut homogénéiser au tu.',
        },
      ],
    },
    {
      id: 'l52-translation-soutenu',
      type: 'translation',
      question:
        "Traduisez en français SOUTENU : 'I would be very grateful if you could examine my request as soon as possible.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Je vous saurais gré de bien vouloir examiner ma demande dans les meilleurs délais.",
        "Je vous serais reconnaissant de bien vouloir examiner ma demande dans les meilleurs délais.",
        "Je vous serais reconnaissante de bien vouloir examiner ma demande dans les meilleurs délais.",
      ],
      explanation: 'Formule épistolaire soutenue avec « bien vouloir » + « dans les meilleurs délais ».',
    },
    {
      id: 'l52-translation-familier',
      type: 'translation',
      question:
        "Traduisez en français FAMILIER : 'Hey, you free tonight? I’ve got something cool to tell you.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Coucou, t'es libre ce soir ? J'ai un truc cool à te dire.",
        "Salut, t'es libre ce soir ? J'ai un truc cool à te raconter.",
      ],
      explanation: 'Coucou / Salut + contraction t’es + truc cool = familier cohérent.',
    },
    {
      id: 'l52-argumentation-soutenu',
      type: 'argumentation',
      question:
        "Rédigez en REGISTRE SOUTENU une demande formelle de bourse universitaire (3-4 phrases) à un président de jury.",
      structure: [
        {
          label: 'Formule d’ouverture (soutenu)',
          instruction: "Adressez-vous au président avec la formule appropriée.",
          model: "Monsieur le Président, je me permets de solliciter l'attention de votre jury concernant ma candidature à la bourse d'excellence pour l'année universitaire 2026-2027.",
          connector_hints: ['Je me permets de', 'Je sollicite', 'J’ai l’honneur de'],
        },
        {
          label: 'Motivation (soutenu)',
          instruction: 'Présentez votre demande en restant soutenu : pas de « je veux », pas de « parce que » seul.',
          model: "Inscrite en deuxième année de master, je nourris depuis trois ans une recherche sur les inégalités d'accès à l'enseignement supérieur, dont la poursuite suppose un soutien financier que ma situation actuelle ne permet pas d'assumer pleinement.",
          connector_hints: ['Dès lors que', 'Inscrite en', 'Ma situation'],
        },
        {
          label: 'Formule de politesse (soutenu)',
          instruction: "Concluez par la formule de politesse adaptée.",
          model: "Je vous saurais gré de bien vouloir examiner ma candidature avec l'attention que la rigueur de votre jury m'autorise à espérer. Je vous prie d'agréer, Monsieur le Président, l'expression de ma haute considération.",
          connector_hints: ['Je vous saurais gré', 'Je vous prie d’agréer', 'Veuillez agréer'],
        },
      ],
      word_count_target: 100,
    },
    {
      id: 'l52-speaking',
      type: 'speaking_prompt',
      question:
        "Présentez la MÊME demande de congé dans DEUX registres : d'abord à un supérieur (courant), puis à un ami (familier).",
      model_answer:
        "[Courant — à un supérieur] : Bonjour Sophie, je voulais te demander si je pouvais poser un jour de congé le vendredi 15. C'est pour une raison familiale, rien de grave, mais ma présence est requise. Je préviendrai l'équipe et j'enverrai la demande aux RH dès cet après-midi. [Familier — à un ami] : Coucou Math, j'pose le 15. Un truc de famille, rien de fou. Tu pourras gérer le bouclage avec Sophie ? T'es la meilleure !",
      translation:
        "[Neutral — to a superior]: Hi Sophie, I wanted to ask if I could take Friday the 15th off. It's a family reason, nothing serious, but my presence is required. I'll let the team know and send the request to HR this afternoon. [Familiar — to a friend]: Hey Math, I'm taking the 15th off. A family thing, no biggie. Can you handle the deadline with Sophie? You're the best!",
      tip: "The shift between the two versions should be felt acoustically: longer sentences, full negation, and complete verbs for the courant version; contractions, dropped 'ne', and casual vocabulary for the familier. The content is identical; the register transforms the social posture.",
    },
  ],
}

export default function Lesson52Page() {
  return (
    <AdvancedLessonLayout
      lessonData={lessonData}
      lessonNumber={52}
      prevHref="/lessons/advanced/51"
      prevLabel="Le Participe Présent en Apposition"
      nextHref="/lessons/advanced/53"
      nextLabel="La Négation Avancée"
    />
  )
}
