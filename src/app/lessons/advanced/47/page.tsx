'use client'

import AdvancedLessonLayout, { AdvancedLessonData } from '../../../../../components/lessons/AdvancedLessonLayout'

const lessonData: AdvancedLessonData = {
  id: 47,
  title: 'Indefinite Relatives',
  title_fr: 'Les Relatifs Indéfinis',
  level: 'B2',
  description:
    "Reformulate and emphasise ideas using the nominalising relative pronouns ce qui, ce que, ce dont, and ce à quoi. These are the constructions that transform a flat B1 sentence into the kind of fronted, focused French heard in every Le Monde editorial.",
  dialogue: {
    title: 'Colloque universitaire',
    context:
      "Léa Vasseur and Henri Lambert, two French researchers, talk over coffee during the break of an interdisciplinary colloquium on the future of universities. Their exchanges naturally cluster fronted ce qui / ce que / ce dont / ce à quoi constructions used to summarise positions and contrast perspectives.",
    register: 'courant',
    exchanges: [
      {
        speaker: 'Léa',
        french: "Ce qui m'a frappée dans la dernière intervention, c'est l'absence totale de critique du modèle économique.",
        english: 'What struck me in the last talk was the total absence of any critique of the economic model.',
      },
      {
        speaker: 'Henri',
        french: "Oui, je suis d'accord. Et ce que je trouve dommage, c'est qu'on ne pose jamais la question du sens.",
        english: "Yes, I agree. And what I find a shame is that we never ask the question of meaning.",
      },
      {
        speaker: 'Léa',
        french: "Ce dont nous aurions besoin, c'est d'une vraie réflexion collective. Pas seulement de chiffres et d'indicateurs.",
        english: "What we would need is real collective reflection. Not just numbers and indicators.",
      },
      {
        speaker: 'Henri',
        french: "Précisément. Ce à quoi j'aspire, c'est à un colloque où l'on aborderait aussi les fondements philosophiques de l'enseignement supérieur.",
        english: "Precisely. What I aspire to is a colloquium where we'd also tackle the philosophical foundations of higher education.",
      },
      {
        speaker: 'Léa',
        french: "Tu sais ce qui me surprend ? Que personne n'ait évoqué le rapport Macron-Filâtre encore une fois.",
        english: 'You know what surprises me? That no one has mentioned the Macron-Filâtre report again.',
      },
      {
        speaker: 'Henri',
        french: "Ce dont tout le monde parle en coulisses, c'est de l'autonomie financière des universités. Mais en plénière, motus.",
        english: "What everyone is talking about in the corridors is the financial autonomy of universities. But in the plenary, silence.",
      },
      {
        speaker: 'Léa',
        french: "Voilà ce que je voulais te dire : nous devrions proposer ensemble une intervention sur cette question.",
        english: "There's what I wanted to tell you: we should jointly propose a talk on that question.",
      },
      {
        speaker: 'Henri',
        french: "Excellente idée. Mais ce à quoi il faudrait réfléchir, c'est au format. Une table ronde plutôt qu'une communication classique.",
        english: 'Excellent idea. But what we should think about is the format. A roundtable rather than a classic paper.',
      },
      {
        speaker: 'Léa',
        french: "Ce qui rendrait l'échange plus vivant, c'est d'inviter des doctorants. Ils savent ce dont leurs collègues ont besoin sur le terrain.",
        english: "What would make the exchange livelier is inviting doctoral students. They know what their colleagues need on the ground.",
      },
      {
        speaker: 'Henri',
        french: "Tout à fait. Je note : ce dont nous parlerons, c'est de la précarité doctorale ; ce que nous proposerons, c'est un nouveau cadre statutaire.",
        english: "Absolutely. I'll note it: what we'll talk about is doctoral precarity; what we'll propose is a new legal framework.",
      },
      {
        speaker: 'Léa',
        french: "Et ce sur quoi nous insisterons, c'est la dimension européenne. Sans Bologne, rien n'avance.",
        english: 'And what we will insist on is the European dimension. Without Bologna, nothing moves forward.',
      },
      {
        speaker: 'Henri',
        french: "Je rédige une note de cadrage ce soir et je te l'envoie demain matin. Voilà ce qui me semble urgent.",
        english: "I'll draft a framing note tonight and send it to you tomorrow morning. That's what seems urgent to me.",
      },
      {
        speaker: 'Léa',
        french: "Parfait. La pause est presque finie. Allons écouter ce qui suit.",
        english: "Perfect. The break is almost over. Let's go and hear what comes next.",
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Ce qui — sujet de la relative',
      explanation:
        "Use 'ce qui' when the relative pronoun is the SUBJECT of the verb that follows. The clue: 'ce qui' is immediately followed by a conjugated verb with no other subject. It nominalises the entire clause into a single noun-phrase equivalent meaning 'the thing that...'.",
      examples: [
        "Ce qui m'intéresse, c'est la culture. — what interests me, it’s culture",
        "Je ne comprends pas ce qui se passe. — I don't understand what is happening",
        "Ce qui me frappe, c'est l'absence de débat.",
        "Dis-moi ce qui te plaît dans ce roman.",
        "TEST : « ce qui » + verbe conjugué directement (pas d’autre sujet)",
      ],
      tip: "If you can substitute 'la chose qui' (the thing which) without changing the meaning, you have 'ce qui'. This test holds even for abstract referents.",
    },
    {
      title: 'Ce que — complément d’objet direct',
      explanation:
        "Use 'ce que' when the relative pronoun is the DIRECT OBJECT of the verb that follows — that verb has its own subject. 'Ce que' is followed by a subject + verb combination. It nominalises 'what someone does/thinks/says/wants'.",
      examples: [
        "Ce que je veux, c'est la paix. — what I want, it’s peace",
        "Voilà ce qu'il a dit hier. — there is what he said yesterday",
        "Dis-moi ce que tu penses.",
        "Ce que nous proposerons, c'est un nouveau cadre.",
        "TEST : « ce que » + sujet + verbe (« je veux », « tu penses », « il a dit »)",
      ],
      tip: "If the clause has its own subject pronoun appearing right after the relative, you need 'ce que', not 'ce qui'. Don't trust your English instincts here — French requires explicit subject marking.",
    },
    {
      title: 'Ce dont — verbe se construisant avec « de »',
      explanation:
        "Use 'ce dont' when the verb in the relative clause governs 'de' — avoir besoin de, parler de, se souvenir de, rêver de, avoir peur de, être question de, tenir à... no wait, tenir à takes 'ce à quoi'. The 'dont' carries the 'de' inside it. This is the hardest of the four to use reflexively at B2.",
      examples: [
        "Ce dont j'ai besoin, c'est d'un peu de calme. (avoir besoin DE)",
        "Ce dont tu parles n'existe pas. (parler DE)",
        "Je me souviens de ce dont nous avions discuté. (se souvenir DE / discuter DE)",
        "Ce dont il rêve, c'est de partir à l'étranger. (rêver DE)",
        "TEST : si le verbe se construit avec « de » à l'indépendance, utilisez « ce dont »",
      ],
      tip: "Before choosing 'ce dont', verify the verb actually takes 'de': parler DE quelque chose, avoir besoin DE quelque chose. If you can't put 'de' before the noun naturally, you don't have 'ce dont'.",
    },
    {
      title: 'Ce à quoi — verbe se construisant avec « à »',
      explanation:
        "Use 'ce à quoi' when the verb in the relative clause governs 'à' — penser à, faire référence à, s'intéresser à, aspirer à, s'attendre à, tenir à. This is the most formal and least frequent of the four; it appears in soutenu writing and academic discourse. Note the spelling: 'ce à quoi' (three words, no hyphens).",
      examples: [
        "Ce à quoi je pense, c'est l'avenir. (penser À)",
        "Je ne sais pas ce à quoi il fait référence. (faire référence À)",
        "Ce à quoi nous aspirons, c'est à une réforme profonde. (aspirer À)",
        "Voilà ce à quoi tu dois t'attendre. (s'attendre À)",
        "RULE : « ce à quoi » ne se contracte JAMAIS — toujours trois mots distincts.",
      ],
      tip: "'Ce à quoi' marks formal register and lifts your French immediately. Even one well-placed instance in a B2 production écrite shows command of discourse-level structures.",
    },
    {
      title: "Mise en exergue : « Ce qui... c'est... »",
      explanation:
        "All four relatives combine with 'c'est' (or 'ce sont' for plural complement) to produce the most common French focus construction. The fronted ce-clause introduces a topic; 'c'est' presents the focused element. This pattern is omnipresent in spoken and written argumentative French.",
      examples: [
        "Ce qui m'inquiète, c'est l'avenir des jeunes. (subject focus)",
        "Ce que je propose, c'est une refonte du système. (object focus)",
        "Ce dont nous discutons, c'est de la légitimité du processus. (de-complement focus)",
        "Ce à quoi je tiens, c'est à l'indépendance de la commission. (à-complement focus)",
        "PLURIEL : Ce qui me manquent, ce sont les conversations d'antan. (Note: rare — usually agreement stays singular)",
      ],
      tip: "Open at least one paragraph of a DELF B2 essay with a 'Ce qui... c'est' construction. It signals immediately that you control the discourse-level register — examiners are trained to credit this.",
    },
  ],
  vocabulary: [
    { french: 'ce qui', english: 'what (subject)', category: 'Relatif indéfini', example: "Ce qui m'inquiète, c'est l'avenir.", note: '+ verbe' },
    { french: 'ce que', english: 'what (object)', category: 'Relatif indéfini', example: 'Ce que je veux, c’est la paix.', note: '+ sujet + verbe' },
    { french: 'ce dont', english: 'what (de)', category: 'Relatif indéfini', example: "Ce dont j'ai besoin, c'est de calme.", note: 'verbe + de' },
    { french: 'ce à quoi', english: 'what (à)', category: 'Relatif indéfini', example: "Ce à quoi je tiens, c'est à la rigueur.", note: 'verbe + à, [soutenu]' },
    { french: 'avoir besoin de', english: 'to need', category: 'Verbe + de', example: "Ce dont il a besoin, c'est de temps.", note: 'gouverne ce dont' },
    { french: 'parler de', english: 'to talk about', category: 'Verbe + de', example: "Ce dont nous parlons est confidentiel.", note: 'gouverne ce dont' },
    { french: 'se souvenir de', english: 'to remember', category: 'Verbe + de', example: 'Je me souviens de ce dont nous avons parlé.', note: 'gouverne ce dont' },
    { french: 'rêver de', english: 'to dream of', category: 'Verbe + de', example: 'Ce dont je rêve, c’est de voyager seul.', note: 'gouverne ce dont' },
    { french: 'avoir peur de', english: 'to fear', category: 'Verbe + de', example: 'Ce dont elle a peur, c’est de décevoir.', note: 'gouverne ce dont' },
    { french: 'être question de', english: 'to be about', category: 'Verbe + de', example: 'Ce dont il est question, c’est de la réforme.', note: 'tournure impersonnelle' },
    { french: 'penser à', english: 'to think about', category: 'Verbe + à', example: 'Ce à quoi je pense, c’est à mon avenir.', note: 'gouverne ce à quoi' },
    { french: 'faire référence à', english: 'to refer to', category: 'Verbe + à', example: "Je ne vois pas ce à quoi tu fais référence.", note: 'gouverne ce à quoi, [soutenu]' },
    { french: 's’intéresser à', english: 'to be interested in', category: 'Verbe + à', example: "Ce à quoi il s'intéresse, c'est à la philosophie.", note: 'gouverne ce à quoi' },
    { french: 'aspirer à', english: 'to aspire to', category: 'Verbe + à', example: "Ce à quoi nous aspirons, c'est à plus de justice.", note: 'gouverne ce à quoi, [soutenu]' },
    { french: 'tenir à', english: 'to value / insist on', category: 'Verbe + à', example: 'Ce à quoi je tiens, c’est à mon indépendance.', note: 'gouverne ce à quoi' },
    { french: 's’attendre à', english: 'to expect', category: 'Verbe + à', example: 'Voilà ce à quoi il fallait s’attendre.', note: 'gouverne ce à quoi' },
    { french: 'voilà ce qui', english: 'here’s what (subj.)', category: 'Tournure de mise en exergue', example: "Voilà ce qui s'est passé.", note: '[courant-soutenu]' },
    { french: 'c’est ce que', english: 'that’s what', category: 'Tournure de mise en exergue', example: "C'est ce que je voulais dire.", note: '[courant]' },
    { french: 'tel est ce dont', english: 'such is what', category: 'Tournure de mise en exergue', example: 'Tel est ce dont nous devons discuter.', note: '[soutenu]' },
    { french: 'la note de cadrage', english: 'the framing note / scoping document', category: 'Vocabulaire institutionnel', example: "J'ai rédigé la note de cadrage.", note: '[soutenu]' },
    { french: 'la précarité doctorale', english: 'doctoral precarity', category: 'Vocabulaire universitaire', example: 'La précarité doctorale touche un thésard sur trois.' },
    { french: 'un colloque', english: 'a colloquium / conference', category: 'Vocabulaire universitaire', example: 'Le colloque se tient à la Sorbonne.' },
    { french: 'une table ronde', english: 'a roundtable', category: 'Vocabulaire universitaire', example: 'La table ronde réunira quatre intervenants.' },
    { french: 'une communication', english: 'a paper / talk', category: 'Vocabulaire universitaire', example: 'Sa communication a duré quarante minutes.' },
    { french: 'la plénière', english: 'the plenary session', category: 'Vocabulaire universitaire', example: 'La plénière s’est tenue dans le grand amphi.' },
    { french: 'en coulisses', english: 'behind the scenes', category: 'Tournure idiomatique', example: 'En coulisses, on en parle ouvertement.' },
    { french: 'motus', english: 'mum’s the word', category: 'Tournure familière', example: 'En public, motus.', note: '[familier]' },
    { french: 'aborder (un sujet)', english: 'to tackle / address (a topic)', category: 'Verbe contextuel', example: 'Aborder cette question demande du tact.' },
  ],
  culturalNotes: [
    {
      title: 'Le colloque dans la vie intellectuelle française',
      content:
        "The colloque is a central form of French intellectual life — academic conferences, but also high-end industry events, ministry-sponsored expert gatherings, and think-tank seminars. The CNRS, École des Hautes Études en Sciences Sociales, and the major universities run hundreds each year. The genre's conventions — formal communication, ritualised Q&A, café break debates between sessions — make it the natural habitat for the ce qui / ce dont fronted constructions taught in this lesson.",
    },
    {
      title: 'L’essai français comme genre intellectuel',
      content:
        "From Montaigne (whose Essais of 1580 invented the modern form) to contemporary essayists like Mona Ozouf, Pierre Nora, Marcel Gauchet and Cynthia Fleury, the essai is a distinct French literary genre — a sustained, personally inflected argued reflection on an idea or a public question. Indefinite relatives cluster densely in essais because the genre constantly summarises, fronts, and reframes positions. Reading one essai per term is a recommended B2→C1 exercise.",
    },
    {
      title: 'Médias intellectuels contemporains',
      content:
        "France maintains a uniquely dense ecosystem of intellectual media: France Culture (radio), Philosophie Magazine, Le 1 Hebdo, La Revue des Deux Mondes, Esprit, Le Débat (closed 2020), AOC. The morning programme 'Les Grandes Tables' on France Culture and the weekly Esprit podcast are particularly recommended for B2 listeners — both feature the kinds of fronted indefinite relatives heard in this lesson's dialogue.",
    },
    {
      title: 'Le processus de Bologne',
      content:
        "Signed in 1999, the Bologna Process harmonised European higher-education degree structures into the LMD system (licence / master / doctorat). For French universities — historically structured around the deuxième cycle and DEA — it represented a major realignment. Twenty-five years later, the unfinished work of Bologna is still debated at colloquia like the fictional one in this dialogue: how to handle credit transfer, how to align doctoral training, how to keep French specificity within a European framework.",
    },
  ],
  exercises: [
    {
      id: 'l47-choice',
      type: 'multiple_choice',
      question: 'Choisissez la bonne forme : « ____ me surprend, c’est leur calme. »',
      options: ['Ce qui', 'Ce que', 'Ce dont', 'Ce à quoi'],
      correct_answer: 'Ce qui',
      explanation: '« Surprend » est un verbe conjugué, et le sujet est implicite (= le calme) → ce qui.',
    },
    {
      id: 'l47-choice-2',
      type: 'multiple_choice',
      question: 'Choisissez : « ____ j’ai besoin, c’est de votre soutien. »',
      options: ['Ce qui', 'Ce que', 'Ce dont', 'Ce à quoi'],
      correct_answer: 'Ce dont',
      explanation: '« Avoir besoin DE » → relatif avec « de » → ce dont.',
    },
    {
      id: 'l47-choice-3',
      type: 'multiple_choice',
      question: 'Choisissez : « ____ je pense souvent, c’est à mes années d’étudiant. »',
      options: ['Ce qui', 'Ce que', 'Ce dont', 'Ce à quoi'],
      correct_answer: 'Ce à quoi',
      explanation: '« Penser À » → relatif avec « à » → ce à quoi.',
    },
    {
      id: 'l47-fillblank',
      type: 'fill_blank',
      question: 'Complétez : « Dis-moi ____ tu as fait hier soir. »',
      correct_answer: ['ce que'],
      explanation: '« Faire quelque chose » : COD direct → ce que.',
      hints: ['Quelle préposition régit le verbe « faire » ? Aucune.'],
    },
    {
      id: 'l47-fillblank-2',
      type: 'fill_blank',
      question: 'Complétez : « Voilà ____ se passe quand on ignore les signaux d’alerte. »',
      correct_answer: ['ce qui'],
      explanation: '« Se passer » est un verbe pronominal autonome → ce qui (sujet).',
    },
    {
      id: 'l47-id-by-verb',
      type: 'tense_choice',
      question: 'Selon la rection du verbe entre crochets, quel relatif faut-il ?',
      explanation: 'Identifiez la préposition (ou son absence) puis le bon relatif.',
      items: [
        {
          sentence: '____ je [parle], c’est de l’avenir.',
          verb: 'parler',
          options: ['ce qui', 'ce que', 'ce dont', 'ce à quoi'],
          correct_answer: 'ce dont',
          explanation: 'Parler de → ce dont.',
        },
        {
          sentence: '____ il [aspire], c’est à plus de reconnaissance.',
          verb: 'aspirer',
          options: ['ce qui', 'ce que', 'ce dont', 'ce à quoi'],
          correct_answer: 'ce à quoi',
          explanation: 'Aspirer à → ce à quoi.',
        },
        {
          sentence: '____ [intéresse] les jeunes diplômés, c’est le sens de leur travail.',
          verb: 'intéresser',
          options: ['ce qui', 'ce que', 'ce dont', 'ce à quoi'],
          correct_answer: 'ce qui',
          explanation: 'Intéresser quelqu’un : COD du verbe « intéresser » → sujet absent → ce qui.',
        },
        {
          sentence: '____ tu [proposes] mérite réflexion.',
          verb: 'proposer',
          options: ['ce qui', 'ce que', 'ce dont', 'ce à quoi'],
          correct_answer: 'ce que',
          explanation: 'Proposer quelque chose : COD direct, sujet « tu » → ce que.',
        },
        {
          sentence: '____ nous [tenons], c’est à l’indépendance scientifique.',
          verb: 'tenir',
          options: ['ce qui', 'ce que', 'ce dont', 'ce à quoi'],
          correct_answer: 'ce à quoi',
          explanation: 'Tenir à → ce à quoi.',
        },
        {
          sentence: '____ elle se [souvient], c’est de leur dernière conversation.',
          verb: 'se souvenir',
          options: ['ce qui', 'ce que', 'ce dont', 'ce à quoi'],
          correct_answer: 'ce dont',
          explanation: 'Se souvenir DE → ce dont.',
        },
      ],
    },
    {
      id: 'l47-front',
      type: 'rewrite',
      question: 'Mettez chaque phrase en exergue avec « Ce qui / ce que / ce dont / ce à quoi... c’est... ».',
      instruction_type: 'reported_speech',
      items: [
        {
          original: "La culture m'intéresse.",
          expected: "Ce qui m'intéresse, c'est la culture.",
          explanation: 'Sujet → ce qui.',
        },
        {
          original: 'Je veux la paix.',
          expected: 'Ce que je veux, c’est la paix.',
          explanation: 'COD direct → ce que.',
        },
        {
          original: "J'ai besoin de calme.",
          expected: "Ce dont j'ai besoin, c'est de calme.",
          explanation: 'Verbe + de → ce dont.',
        },
        {
          original: 'Je pense souvent à mes parents.',
          expected: 'Ce à quoi je pense souvent, c’est à mes parents.',
          explanation: 'Verbe + à → ce à quoi.',
        },
        {
          original: 'La précarité doctorale me préoccupe.',
          expected: 'Ce qui me préoccupe, c’est la précarité doctorale.',
          explanation: 'Sujet → ce qui.',
        },
      ],
    },
    {
      id: 'l47-error-correction',
      type: 'error_correction',
      question: 'Corrigez la forme du relatif indéfini.',
      items: [
        {
          incorrect: "Ce que m'intéresse, c'est la philosophie.",
          correct: "Ce qui m'intéresse, c'est la philosophie.",
          explanation: '« Intéresser quelqu’un » : sujet implicite → ce qui.',
        },
        {
          incorrect: "Ce qui je veux, c'est partir.",
          correct: "Ce que je veux, c'est partir.",
          explanation: '« Vouloir quelque chose » avec sujet « je » → ce que.',
        },
        {
          incorrect: "Ce que j'ai besoin, c'est de temps.",
          correct: "Ce dont j'ai besoin, c'est de temps.",
          explanation: 'Avoir besoin DE → ce dont.',
        },
        {
          incorrect: "Ce que je pense, c'est à mon avenir.",
          correct: "Ce à quoi je pense, c'est mon avenir.",
          explanation: 'Penser À → ce à quoi.',
        },
        {
          incorrect: "Ce dont il rêve, c'est partir à l'étranger.",
          correct: "Ce dont il rêve, c'est de partir à l'étranger.",
          explanation: 'Après « ce dont », « c’est » doit reprendre « de » devant l’élément focalisé.',
        },
      ],
    },
    {
      id: 'l47-translation',
      type: 'translation',
      question: "Traduisez : 'What surprises me most is the silence of the academic community.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Ce qui me surprend le plus, c'est le silence de la communauté universitaire.",
        "Ce qui me surprend le plus, c'est le silence du monde universitaire.",
      ],
      explanation: 'Surprendre quelqu’un : sujet → ce qui.',
    },
    {
      id: 'l47-translation-2',
      type: 'translation',
      question: "Traduisez : 'What we need is a real public debate.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Ce dont nous avons besoin, c'est d'un vrai débat public.",
        "Ce dont nous avons besoin, c'est d'un véritable débat public.",
      ],
      explanation: 'Avoir besoin DE → ce dont.',
    },
    {
      id: 'l47-argumentation-mini',
      type: 'argumentation',
      question:
        "Rédigez un court paragraphe d'ouverture (3-4 phrases) sur un sujet de votre choix, en utilisant au moins DEUX relatifs indéfinis différents fronts.",
      structure: [
        {
          label: 'Phrase d’accroche',
          instruction: "Ouvrez avec « Ce qui... c'est... » pour poser le sujet.",
          model: "Ce qui frappe l'observateur de la rentrée universitaire 2026, c'est la persistance d'inégalités d'accès qu'on croyait surmontées.",
          connector_hints: ['Ce qui frappe', 'Ce qui surprend', 'Ce qui inquiète'],
        },
        {
          label: 'Précision (problème / enjeu)',
          instruction: "Enchaînez avec « Ce que / ce dont » pour préciser le cœur du problème.",
          model: "Ce que les universités peinent à dire, c'est qu'elles manquent des moyens humains pour accompagner la massification de l'enseignement supérieur.",
          connector_hints: ['Ce que', 'Ce dont', 'En effet'],
        },
        {
          label: 'Annonce de la suite',
          instruction: "Annoncez votre angle avec « Ce à quoi nous nous attacherons... » ou équivalent.",
          model: "Ce à quoi nous tenterons de répondre, c'est à la question suivante : à quel coût social cette massification se fait-elle ?",
          connector_hints: ['Ce à quoi', 'Ce sur quoi', 'L’enjeu'],
        },
      ],
      word_count_target: 80,
    },
    {
      id: 'l47-speaking',
      type: 'speaking_prompt',
      question:
        "Présentez votre projet professionnel ou universitaire en utilisant au moins trois relatifs indéfinis différents.",
      model_answer:
        "Ce qui m'intéresse dans la recherche, c'est de pouvoir relier l'analyse théorique et le terrain. Ce que j'aimerais faire à terme, c'est diriger un projet européen sur les politiques migratoires. Ce dont j'ai besoin maintenant, c'est d'une formation doctorale solide en sciences politiques. Et ce à quoi je tiens par-dessus tout, c'est à garder une part d'engagement citoyen dans mon travail.",
      translation:
        "What interests me in research is being able to link theoretical analysis and fieldwork. What I’d like to do eventually is direct a European project on migration policy. What I need now is solid doctoral training in political science. And what I value above all is keeping a strand of civic engagement in my work.",
      tip: 'Try to use at least one ce qui (subject), one ce que (object), and one ce dont or ce à quoi (prepositional). Hitting all four in one short paragraph is overkill — pick three.',
    },
  ],
}

export default function Lesson47Page() {
  return (
    <AdvancedLessonLayout
      lessonData={lessonData}
      lessonNumber={47}
      prevHref="/lessons/advanced/46"
      prevLabel="Le Passé Simple"
      nextHref="/lessons/advanced/48"
      nextLabel="La Mise en Relief"
    />
  )
}
