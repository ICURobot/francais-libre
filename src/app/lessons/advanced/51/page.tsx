'use client'

import AdvancedLessonLayout, { AdvancedLessonData } from '../../../../../components/lessons/AdvancedLessonLayout'

const lessonData: AdvancedLessonData = {
  id: 51,
  title: 'Appositive Participle',
  title_fr: 'Le Participe Présent en Apposition',
  level: 'B2',
  description:
    "Master the appositive present and past participles that condense a full subordinate clause into a single phrase. The distinction between gérondif (en + -ant) and appositive participe présent is the central B2 grammar refinement — and the marker that separates B1 prose from journalistic-quality French.",
  dialogue: {
    title: 'Critique cinématographique',
    context:
      "Two French film critics, Théo Vidal and Sandrine Aubry, discuss the critical reception of a recent film over coffee. They alternate between paraphrases of published reviews (which use appositive participles densely) and their own analytical commentary, making the construction visible through contrast.",
    register: 'courant',
    exchanges: [
      {
        speaker: 'Théo',
        french: "T'as lu la critique de Libération ce matin ?",
        english: 'Did you read the Libération review this morning?',
      },
      {
        speaker: 'Sandrine',
        french: "Oui, surprenant. Ils ouvrent par : « Filmant la banlieue avec une caméra à hauteur d'enfant, la réalisatrice renouvelle un genre épuisé. »",
        english: 'Yes, surprising. They open with: "Filming the banlieue with a camera at child height, the director renews an exhausted genre."',
      },
      {
        speaker: 'Théo',
        french: "Là, « filmant » est un participe présent en apposition. C'est l'équivalent de « parce qu'elle filme » ou « en filmant ».",
        english: 'There, "filmant" is an appositive present participle. It’s the equivalent of "because she films" or "while filming".',
      },
      {
        speaker: 'Sandrine',
        french: "Justement, la distinction est subtile. « En filmant » = gérondif, action simultanée du même sujet. « Filmant » seul en apposition = cause ou circonstance qualifiant le sujet.",
        english: 'Precisely, the distinction is subtle. "En filmant" = gérondif, simultaneous action of the same subject. "Filmant" alone in apposition = cause or circumstance qualifying the subject.',
      },
      {
        speaker: 'Théo',
        french: "Et Le Monde écrit : « Reconnaissant la dette envers Pialat, la cinéaste cite explicitement L'Enfance Nue. » Là c'est concessif.",
        english: 'And Le Monde writes: "Acknowledging the debt to Pialat, the filmmaker explicitly cites L’Enfance Nue." There it’s concessive.',
      },
      {
        speaker: 'Sandrine',
        french: "Tu veux dire : « bien qu'elle reconnaisse » ? Pas forcément. Là, c'est plutôt « parce qu'elle reconnaît ». Cause, pas concession.",
        english: 'You mean: "although she acknowledges"? Not necessarily. Here, it’s more "because she acknowledges". Cause, not concession.',
      },
      {
        speaker: 'Théo',
        french: "Tu as raison. Le contexte décide. La forme en apposition est ambiguë — cause, concession, manière, circonstance. C'est au lecteur de trancher.",
        english: 'You’re right. Context decides. The appositive form is ambiguous — cause, concession, manner, circumstance. It’s up to the reader to decide.',
      },
      {
        speaker: 'Sandrine',
        french: "Et les participes passés en apposition ? Téléfilm 7 écrit : « Sortie diplômée de la Fémis, la réalisatrice tourne ici son troisième long métrage. » Là, c'est temporel + cause.",
        english: 'And past participles in apposition? Téléfilm 7 writes: "A Fémis graduate, the director here shoots her third feature." There, it’s temporal + cause.',
      },
      {
        speaker: 'Théo',
        french: "Bien vu. « Sortie » s'accorde avec « la réalisatrice » — féminin singulier. C'est l'équivalent compressé de « après être sortie diplômée » ou « elle, qui est sortie diplômée ».",
        english: 'Good point. "Sortie" agrees with "the director" — feminine singular. It’s the compressed equivalent of "after graduating" or "she, who graduated".',
      },
      {
        speaker: 'Sandrine',
        french: "C'est ce qui m'agace dans certaines critiques : l'accumulation. Trois participes en apposition par phrase, ça devient illisible.",
        english: 'That’s what annoys me in some reviews: the accumulation. Three appositive participles per sentence, it becomes unreadable.',
      },
      {
        speaker: 'Théo',
        french: "L'idéal, c'est un participe en apposition pour ouvrir, et le verbe principal pour porter l'action. « Ayant travaillé dix ans sur ce projet, elle livre un film abouti. »",
        english: "The ideal is one appositive participle to open and the main verb to carry the action. 'Having worked ten years on this project, she delivers an accomplished film.'",
      },
      {
        speaker: 'Sandrine',
        french: "« Ayant travaillé » c'est le participe passé composé en apposition. Sujet identique. Antériorité par rapport au verbe principal.",
        english: '"Ayant travaillé" — that’s the compound past participle in apposition. Same subject. Anteriority relative to the main verb.',
      },
      {
        speaker: 'Théo',
        french: "Voilà. Bon, on rédige nos chroniques pour Positif cette semaine ? Tu prends la rétrospective Varda, je prends le débutant ?",
        english: 'There you go. Right, are we writing our columns for Positif this week? You take the Varda retrospective, I take the debut film?',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Gérondif vs participe présent en apposition',
      explanation:
        "Same form (verb stem + -ant) but different functions. The GÉRONDIF uses 'en' + participle: it expresses a simultaneous action of the same subject (manner, means, or simultaneity). The APPOSITIVE PARTICIPE without 'en' expresses a cause, concession, or circumstance — also same subject as the main clause, but functioning as a reduced relative or adverbial clause.",
      examples: [
        "GÉRONDIF : Il travaille en écoutant de la musique. (manière, simultanée)",
        "APPOSITION : Voulant partir tôt, il a préparé ses bagages la veille. (cause)",
        "GÉRONDIF : En arrivant, j'ai croisé Pierre. (simultanée)",
        "APPOSITION : Arrivant à 8h, il a trouvé la porte fermée. (manière/circonstance)",
        "TEST : la présence ou l'absence de 'en' fait la différence.",
      ],
      tip: "If you can paraphrase with 'pendant que' (while) → gérondif. If you can paraphrase with 'parce que', 'bien que', 'comme' → appositive participle. The single word 'en' carries the whole semantic shift.",
    },
    {
      title: 'Formation des participes présents',
      explanation:
        "Build the participe présent from the nous form of the present indicative: drop -ons, add -ant. Three irregulars only: être → étant, avoir → ayant, savoir → sachant. The form is invariable — no agreement in number or gender for the participe présent simple.",
      examples: [
        "parler : nous parl-ons → parlant",
        "finir : nous finiss-ons → finissant",
        "vouloir : nous voul-ons → voulant",
        "ÊTRE → étant · AVOIR → ayant · SAVOIR → sachant",
        "INVARIABLE : 'voulant' ne change pas pour le féminin ou le pluriel",
      ],
      tip: 'The three irregulars (étant, ayant, sachant) are extremely frequent in formal writing — memorise them first. The rest follow the nous-form rule reliably.',
    },
    {
      title: 'Participe passé en apposition (avec accord)',
      explanation:
        "Past participles can also stand in apposition, expressing an anterior action or a state. They AGREE with the subject of the main clause in gender and number, like an être-conjugated passé composé. Often paraphrasable with 'après avoir/être + pp' or a relative 'qui était/avait...'.",
      examples: [
        "Partie avant l'aube, elle n'a pas vu le lever du soleil. (féminin singulier)",
        "Reçus au concours, ils ont rejoint l'école en septembre. (masculin pluriel)",
        "Surpris par la nouvelle, le ministre a annulé son déplacement.",
        "Sortie diplômée de la Fémis, la réalisatrice tourne ici son troisième long métrage.",
        "AGREEMENT : « partie » accorde avec « elle » → féminin singulier",
      ],
      tip: 'The agreement rule mirrors être-passé-composé exactly. If the participle would agree in a passé composé construction, it agrees in apposition too.',
    },
    {
      title: 'Participe passé composé : ayant/étant + pp',
      explanation:
        "The compound past participle 'ayant + pp' (for avoir verbs) or 'étant + pp' (for être verbs) expresses an action anterior to the main verb, with same subject. This is the participe equivalent of 'après avoir/être + pp' — a condensed temporal-causal frame.",
      examples: [
        "Ayant fini son travail, il est sorti. (= après avoir fini)",
        "Étant arrivée tôt, elle a pu réserver une place. (= après être arrivée)",
        "Ayant travaillé dix ans sur ce projet, elle livre un film abouti.",
        "S'étant rendu compte de son erreur, il a immédiatement appelé.",
        "AGREEMENT : avec être → accord ; avec avoir → règle du COD antéposé",
      ],
      tip: "'Ayant/étant + pp' is the most powerful single B2 construction for journalistic and biographical openings. Use it sparingly — one per paragraph — for maximum effect.",
    },
    {
      title: 'Valeurs sémantiques de l’apposition',
      explanation:
        "Appositive participles can carry several values, disambiguated by context: cause ('parce que'), concession ('bien que'), manner ('de telle façon que'), circumstance/condition ('si'), or temporal ('quand'). The same form serves all five values — the reader infers from the discourse.",
      examples: [
        "CAUSE : Étant fatigué, il est rentré tôt. (= parce qu'il était fatigué)",
        "CONCESSION : Admettant l'erreur, il a quand même refusé de démissionner. (= bien qu'il admette)",
        "MANIÈRE : Hésitant à répondre, il choisit ses mots. (= en hésitant)",
        "CIRCONSTANCE : Ayant étudié toute la nuit, il a réussi l'examen. (= comme il avait étudié)",
        "TEMPS : Voyant la lumière, elle est entrée. (= quand elle a vu la lumière)",
      ],
      tip: "When you read an appositive participle, don't fix on one interpretation — let the context tell you which value the author intends. When you write one, choose carefully so context disambiguates correctly.",
    },
  ],
  vocabulary: [
    { french: 'étant', english: 'being', category: 'Participe présent irrégulier', example: 'Étant fatigué, il est rentré tôt.', note: 'irrégulier' },
    { french: 'ayant', english: 'having', category: 'Participe présent irrégulier', example: 'Ayant fini, il est sorti.', note: 'irrégulier' },
    { french: 'sachant', english: 'knowing', category: 'Participe présent irrégulier', example: 'Sachant cela, j’ai préféré me taire.', note: 'irrégulier' },
    { french: 'soulignant (que)', english: 'underlining / emphasising', category: 'Verbe journalistique', example: 'Soulignant l’urgence, le ministre a tranché.', note: '[soutenu]' },
    { french: 'rappelant (que)', english: 'recalling / reminding', category: 'Verbe journalistique', example: 'Rappelant les engagements passés, il a refusé toute concession.', note: '[soutenu]' },
    { french: 'reconnaissant (que)', english: 'acknowledging', category: 'Verbe journalistique', example: 'Reconnaissant la dette, le réalisateur cite ouvertement Pialat.', note: '[soutenu]' },
    { french: 'admettant (que)', english: 'admitting', category: 'Verbe journalistique', example: 'Admettant l’erreur, il a quand même refusé de démissionner.', note: '[soutenu]' },
    { french: 'estimant (que)', english: 'considering / judging', category: 'Verbe journalistique', example: "Estimant la procédure non conforme, la cour a annulé la décision.", note: '[soutenu]' },
    { french: 'notant (que)', english: 'noting (that)', category: 'Verbe journalistique', example: 'Notant les progrès, l’audit recommande la poursuite.', note: '[soutenu]' },
    { french: 'précisant (que)', english: 'specifying / clarifying', category: 'Verbe journalistique', example: 'Précisant ses intentions, elle a apaisé le débat.', note: '[soutenu]' },
    { french: 'ajoutant (que)', english: 'adding', category: 'Verbe journalistique', example: 'Ajoutant qu’il ne céderait pas, il a quitté la salle.', note: '[soutenu]' },
    { french: 'évoquant', english: 'evoking / mentioning', category: 'Verbe journalistique', example: 'Évoquant les difficultés du marché, l’économiste reste prudent.', note: '[soutenu]' },
    { french: 'citant', english: 'citing', category: 'Verbe journalistique', example: 'Citant Bourdieu, la conférencière a rouvert un vieux débat.', note: '[soutenu]' },
    { french: 'affirmant (que)', english: 'asserting', category: 'Verbe journalistique', example: 'Affirmant détenir des preuves, le journaliste a publié son enquête.', note: '[soutenu]' },
    { french: 'dénonçant', english: 'denouncing', category: 'Verbe journalistique', example: 'Dénonçant les pratiques, l’association a porté plainte.', note: '[soutenu]' },
    { french: 'critiquant', english: 'criticising', category: 'Verbe journalistique', example: 'Critiquant le calendrier, l’opposition a voté contre.', note: '[soutenu]' },
    { french: 'défendant', english: 'defending', category: 'Verbe journalistique', example: 'Défendant son bilan, la maire a refusé toute critique.', note: '[soutenu]' },
    { french: 'voyant', english: 'seeing', category: 'Participe présent (action)', example: 'Voyant la lumière allumée, elle est entrée.', note: 'irrégulier' },
    { french: 'voulant', english: 'wanting', category: 'Participe présent (action)', example: 'Voulant partir tôt, il a préparé ses affaires la veille.', note: '' },
    { french: 'devant (de devoir)', english: 'having to', category: 'Participe présent (modal)', example: 'Devant rentrer, je quitte la réunion.', note: 'à distinguer de la prép. devant' },
    { french: 'pouvant', english: 'being able to', category: 'Participe présent (modal)', example: 'Ne pouvant accepter ces conditions, elle a refusé.', note: '' },
    { french: 'ayant terminé', english: 'having finished', category: 'Participe passé composé', example: 'Ayant terminé son rapport, il est rentré.', note: 'antériorité' },
    { french: 'étant arrivé(e)', english: 'having arrived', category: 'Participe passé composé', example: 'Étant arrivée tôt, elle a pu choisir sa place.', note: 'accord avec sujet' },
    { french: 's’étant rendu compte (de)', english: 'having realised', category: 'Participe passé composé pronominal', example: 'S’étant rendu compte de l’erreur, il a téléphoné.', note: 'pronominal' },
    { french: 'partie / partis (en apposition)', english: 'having left', category: 'Participe passé en apposition', example: 'Partie avant l’aube, elle n’a pas vu le lever du soleil.', note: 'accord avec sujet' },
    { french: 'sortie diplômée de', english: 'having graduated from', category: 'Participe passé en apposition', example: 'Sortie diplômée de la Fémis, la réalisatrice…', note: 'biographique' },
    { french: 'surpris(e) par', english: 'surprised by', category: 'Participe passé en apposition', example: 'Surprise par la nouvelle, elle a annulé.', note: 'accord' },
    { french: 'la dette envers', english: 'the debt to / towards', category: 'Vocabulaire critique', example: 'Sa dette envers Truffaut est revendiquée.' },
    { french: 'la cinéaste', english: 'the (woman) filmmaker', category: 'Vocabulaire critique', example: 'La cinéaste belge a remporté la Palme.' },
    { french: 'un long métrage', english: 'a feature film', category: 'Vocabulaire critique', example: 'Son troisième long métrage sort en mars.' },
    { french: 'une chronique', english: 'a column / review', category: 'Vocabulaire critique', example: 'Sa chronique paraît chaque vendredi.' },
    { french: 'une rétrospective', english: 'a retrospective', category: 'Vocabulaire critique', example: 'La Cinémathèque consacre une rétrospective à Varda.' },
  ],
  culturalNotes: [
    {
      title: 'La critique cinéma comme genre littéraire',
      content:
        "Les Cahiers du Cinéma (founded 1951), Positif (founded 1952), and the cinema pages of Libération and Le Monde have made French film criticism a recognised literary form. Critics like André Bazin, Serge Daney, and Jean-Michel Frodon write in a style that is both analytical and stylistically ambitious — and the appositive participle is one of its central rhetorical devices. Reading the weekend cinema pages of Le Monde is excellent B2 practice for absorbing the construction in its natural habitat.",
    },
    {
      title: 'Le commentaire critique au lycée',
      content:
        "French secondary school explicitly teaches the 'commentaire composé' — a structured close reading of a literary text — and the 'critique cinématographique' as part of the éducation aux médias curriculum. Students are drilled to use appositive participles when sketching context: 'Sortie en pleine guerre d'Algérie, l'œuvre de Resnais...'. This drilling is why French intellectual prose still uses the construction densely.",
    },
    {
      title: 'La Fémis et les écoles de cinéma françaises',
      content:
        "La Fémis (École nationale supérieure des métiers de l'image et du son, founded 1986) is the most prestigious French film school. Its alumni — including Arnaud Desplechin, Céline Sciamma, and Mia Hansen-Løve — dominate contemporary French art cinema. The biographical formula 'sortie diplômée de la Fémis' is so codified in critical writing that it functions almost as a generic marker — the reader immediately situates the director.",
    },
    {
      title: 'Le Prix de la critique et la place du critique en France',
      content:
        "Unlike most other cultures, French criticism enjoys institutional prestige — the Prix de la critique (literature, theatre, cinema), the Cahiers du Cinéma editorial board, the Académie française's relations with literary critics. Several major French critics have themselves become political-intellectual figures (Bernard-Henri Lévy, Alain Finkielkraut). The genre therefore matters in ways that don't translate easily — and its conventions, including the appositive participle, are part of the cultural fabric.",
    },
  ],
  exercises: [
    {
      id: 'l51-gerond-vs-app',
      type: 'multiple_choice',
      question: 'Quelle phrase est un GÉRONDIF (et non une apposition) ?',
      options: [
        "Voyant la lumière, elle est entrée.",
        "Étant fatigué, il a refusé.",
        "Il travaille en écoutant de la musique.",
        "Ayant terminé, il est sorti.",
      ],
      correct_answer: "Il travaille en écoutant de la musique.",
      explanation: '« En + participe » signale toujours un gérondif (action simultanée du même sujet). Les trois autres sont des participes en apposition.',
    },
    {
      id: 'l51-formation',
      type: 'matching',
      question: 'Associez chaque verbe à son participe présent.',
      pairs: [
        { french: 'être', english: 'étant' },
        { french: 'avoir', english: 'ayant' },
        { french: 'savoir', english: 'sachant' },
        { french: 'voir', english: 'voyant' },
        { french: 'finir', english: 'finissant' },
        { french: 'prendre', english: 'prenant' },
        { french: 'partir', english: 'partant' },
        { french: 'vouloir', english: 'voulant' },
      ],
      explanation: 'Règle : nous-forme du présent → -ons → -ant. Trois irréguliers : étant, ayant, sachant.',
    },
    {
      id: 'l51-meaning',
      type: 'tense_choice',
      question: 'Quelle valeur sémantique porte l’apposition ?',
      explanation: 'Cause = parce que ; concession = bien que ; manière/circonstance = en + ant ; temps = quand ; condition = si.',
      items: [
        {
          sentence: "Étant fatigué, il est rentré tôt.",
          verb: 'être',
          options: ['cause', 'concession', 'manière'],
          correct_answer: 'cause',
          explanation: '= parce qu’il était fatigué.',
        },
        {
          sentence: "Admettant l'erreur, il a quand même refusé de démissionner.",
          verb: 'admettre',
          options: ['cause', 'concession', 'temps'],
          correct_answer: 'concession',
          explanation: '« quand même » signale la concession → bien qu’il admette.',
        },
        {
          sentence: "Voyant la lumière, elle est entrée.",
          verb: 'voir',
          options: ['cause', 'temps', 'manière'],
          correct_answer: 'temps',
          explanation: '= quand elle a vu la lumière (temps).',
        },
        {
          sentence: "Hésitant à répondre, il a choisi ses mots.",
          verb: 'hésiter',
          options: ['cause', 'manière', 'condition'],
          correct_answer: 'manière',
          explanation: '= en hésitant (manière).',
        },
        {
          sentence: "Ayant étudié toute la nuit, il a réussi l'examen.",
          verb: 'étudier',
          options: ['cause', 'concession', 'temps'],
          correct_answer: 'cause',
          explanation: '= parce qu’il avait étudié.',
        },
        {
          sentence: "Reconnaissant son erreur tardivement, elle a perdu la confiance de l'équipe.",
          verb: 'reconnaître',
          options: ['cause', 'concession', 'manière'],
          correct_answer: 'cause',
          explanation: 'Cause (« parce qu’elle a reconnu son erreur tardivement »).',
        },
      ],
    },
    {
      id: 'l51-construct',
      type: 'rewrite',
      question: 'Combinez les deux phrases en utilisant un participe présent en apposition.',
      instruction_type: 'reported_speech',
      items: [
        {
          original: "Il voulait aider. Il s'est présenté pour la mission.",
          expected: "Voulant aider, il s'est présenté pour la mission.",
          explanation: 'Cause / motivation → participe présent en apposition.',
        },
        {
          original: "Elle savait que la décision était importante. Elle a pris son temps.",
          expected: "Sachant que la décision était importante, elle a pris son temps.",
          explanation: 'Sachant = participe présent de savoir (irrégulier).',
        },
        {
          original: "Le ministre avait été surpris par la nouvelle. Il a annulé son déplacement.",
          expected: "Surpris par la nouvelle, le ministre a annulé son déplacement.",
          explanation: 'Participe passé en apposition + accord masculin singulier.',
        },
        {
          original: "Elle avait fini son travail. Elle est sortie.",
          expected: "Ayant fini son travail, elle est sortie.",
          explanation: 'Ayant + pp (avoir) — antériorité.',
        },
      ],
    },
    {
      id: 'l51-pp-agreement',
      type: 'fill_blank',
      question: 'Complétez avec le participe passé accordé : « ____ (partir) avant l’aube, elle n’a pas vu le lever du soleil. »',
      correct_answer: ['Partie'],
      explanation: 'Accord avec le sujet « elle » → féminin singulier → Partie.',
      hints: ['Verbe avec être en apposition → accord obligatoire.'],
    },
    {
      id: 'l51-pp-agreement-2',
      type: 'fill_blank',
      question: 'Complétez : « ____ (recevoir) au concours, ils ont rejoint l’école en septembre. »',
      correct_answer: ['Reçus'],
      explanation: 'Accord avec « ils » → masculin pluriel → Reçus.',
    },
    {
      id: 'l51-reduce-relative',
      type: 'rewrite',
      question: 'Transformez la relative en apposition.',
      instruction_type: 'relative_clause',
      items: [
        {
          original: "C'est une femme qui veut changer les choses. Elle s'est présentée aux élections.",
          expected: "Voulant changer les choses, elle s'est présentée aux élections.",
          explanation: 'Relative explicative → participe présent en apposition.',
        },
        {
          original: "Le maire, qui avait travaillé dix ans sur ce projet, en voit aujourd'hui l'aboutissement.",
          expected: "Ayant travaillé dix ans sur ce projet, le maire en voit aujourd'hui l'aboutissement.",
          explanation: 'Relative avec PQP → participe passé composé en apposition.',
        },
        {
          original: "Elle, qui était sortie diplômée de la Fémis, tourne son troisième long métrage.",
          expected: "Sortie diplômée de la Fémis, elle tourne son troisième long métrage.",
          explanation: 'Participe passé en apposition + accord.',
        },
      ],
    },
    {
      id: 'l51-error-correction',
      type: 'error_correction',
      question: 'Corrigez les erreurs (forme, accord, ou choix gérondif/apposition).',
      items: [
        {
          incorrect: "Étant fatigué, sa femme a refusé de sortir.",
          correct: "Étant fatiguée, sa femme a refusé de sortir.",
          explanation: 'Le sujet implicite du participe doit être celui de la principale (sa femme) → accord féminin.',
        },
        {
          incorrect: "En étant fatigué, il a refusé.",
          correct: "Étant fatigué, il a refusé.",
          explanation: 'Apposition causale → pas de « en ». « En étant » n’existe pas comme gérondif standard.',
        },
        {
          incorrect: "Sortie diplômé de la Fémis, la réalisatrice tourne ici son troisième long métrage.",
          correct: "Sortie diplômée de la Fémis, la réalisatrice tourne ici son troisième long métrage.",
          explanation: 'Accord avec « la réalisatrice » → diplômée féminin singulier.',
        },
        {
          incorrect: "Avant fini son rapport, il est sorti.",
          correct: "Ayant fini son rapport, il est sorti.",
          explanation: '« Avant » est une préposition, pas un participe. Le bon participe passé composé est « ayant + pp ».',
        },
      ],
    },
    {
      id: 'l51-translation',
      type: 'translation',
      question: "Traduisez : 'Having worked for ten years on this project, she delivers an accomplished film.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Ayant travaillé pendant dix ans sur ce projet, elle livre un film abouti.",
        "Ayant travaillé dix ans sur ce projet, elle livre un film abouti.",
      ],
      explanation: 'Ayant + pp + accord COD antéposé (rien ici) + verbe principal.',
    },
    {
      id: 'l51-translation-2',
      type: 'translation',
      question: "Traduisez : 'Surprised by the news, the minister cancelled his trip.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Surpris par la nouvelle, le ministre a annulé son déplacement.",
        "Surpris par la nouvelle, le ministre a annulé son voyage.",
      ],
      explanation: 'Participe passé en apposition + accord masculin singulier.',
    },
    {
      id: 'l51-speaking',
      type: 'speaking_prompt',
      question:
        "Présentez le parcours d'une personne (vous, un ami, un personnage public) en utilisant UN participe présent en apposition et UN participe passé composé en apposition (ayant/étant + pp).",
      model_answer:
        "Ayant grandi dans une famille de musiciens, ma cousine a très tôt manifesté un goût pour les instruments anciens. Étudiant le violoncelle au Conservatoire de Lyon, elle a remporté un premier prix avant ses dix-huit ans. Sortie major de sa promotion, elle joue désormais dans plusieurs orchestres européens. Maîtrisant cinq langues, elle voyage avec une aisance qui ne cesse de m'impressionner.",
      translation:
        "Having grown up in a family of musicians, my cousin showed an early taste for ancient instruments. Studying the cello at the Lyon Conservatoire, she won first prize before she was eighteen. Top of her class, she now plays in several European orchestras. Speaking five languages, she travels with an ease that never stops impressing me.",
      tip: "Lead each sentence with the participle so the listener feels the construction. But don't stack four in a row — alternate with one main-clause sentence to keep the rhythm alive.",
    },
  ],
}

export default function Lesson51Page() {
  return (
    <AdvancedLessonLayout
      lessonData={lessonData}
      lessonNumber={51}
      prevHref="/lessons/advanced/50"
      prevLabel="La Nominalisation"
      nextHref="/lessons/advanced/52"
      nextLabel="Les Registres de Langue"
    />
  )
}
