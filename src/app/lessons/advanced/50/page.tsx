'use client'

import AdvancedLessonLayout, { AdvancedLessonData } from '../../../../../components/lessons/AdvancedLessonLayout'

const lessonData: AdvancedLessonData = {
  id: 50,
  title: 'Nominalisation',
  title_fr: 'La Nominalisation',
  level: 'B2',
  description:
    "Transform verbs and adjectives into nouns to upgrade verbal-style prose into the nominal style that defines formal written French. This is the single most reliable register-shifting tool taught at B2 — and a graded DELF B2 production écrite criterion.",
  dialogue: {
    title: 'Rapport administratif',
    context:
      "Sabine Hervé, a senior French civil servant, sits with Léon Marchetti, a younger manager at the same public institution, revising a draft report destined for the minister's office. They take Léon's verbal-style sentences and convert them, paragraph by paragraph, into the nominal style expected of formal French administrative writing.",
    register: 'soutenu',
    exchanges: [
      {
        speaker: 'Sabine',
        french: "Bon, regardons votre première page. Vous avez écrit : « Nous avons décidé que nous devions réorganiser le service en septembre. » C'est correct, mais trop verbal.",
        english: 'Right, let’s look at your first page. You wrote: "We decided that we had to reorganise the service in September." It is correct, but too verbal.',
      },
      {
        speaker: 'Léon',
        french: "Comment formuleriez-vous dans le registre administratif attendu ?",
        english: 'How would you phrase it in the expected administrative register?',
      },
      {
        speaker: 'Sabine',
        french: "« La décision de réorganiser le service en septembre a été prise par la direction. » Vous voyez : un nom au lieu d'une proposition verbale. La nominalisation, c'est l'art de remplacer un verbe par son nom dérivé.",
        english: '"The decision to reorganise the service in September was taken by the management." You see: a noun instead of a verbal proposition. Nominalisation is the art of replacing a verb with its derived noun.',
      },
      {
        speaker: 'Léon',
        french: "Et pour : « Le rapport est important parce qu'il analyse les besoins » ?",
        english: 'And for: "The report is important because it analyses needs"?',
      },
      {
        speaker: 'Sabine',
        french: "L'importance du rapport tient à son analyse des besoins. — Ici, deux nominalisations : « important » devient « importance », « analyse » est déjà nominal.",
        english: 'The importance of the report lies in its analysis of needs. — Here, two nominalisations: "important" becomes "importance"; "analyses" is already nominal.',
      },
      {
        speaker: 'Léon',
        french: "Vous remplacez aussi « parce que » par « tient à ». C'est volontaire ?",
        english: 'You also replace "because" with "lies in". Is that deliberate?',
      },
      {
        speaker: 'Sabine',
        french: "Oui. Le style administratif évite les conjonctions causales explicites — il préfère les verbes comme « tenir à », « résider dans », « s'expliquer par ». C'est plus dense.",
        english: 'Yes. The administrative style avoids explicit causal conjunctions — it prefers verbs like "lies in", "resides in", "is explained by". It is denser.',
      },
      {
        speaker: 'Léon',
        french: "J'ai aussi : « Nous avons mis en œuvre une réforme et nous avons amélioré les résultats. »",
        english: 'I also have: "We implemented a reform and we improved the results."',
      },
      {
        speaker: 'Sabine',
        french: "« La mise en œuvre de la réforme a permis l'amélioration des résultats. » Deux nominalisations figées : « mise en œuvre » (verbe → groupe nominal) et « amélioration » (verbe → suffixe -tion).",
        english: '"The implementation of the reform has allowed the improvement of the results." Two frozen nominalisations: "implementation" (verb → noun phrase) and "improvement" (verb → suffix -tion).',
      },
      {
        speaker: 'Léon',
        french: "Et pour la conclusion : « Il est urgent que nous agissions » ?",
        english: 'And for the conclusion: "It is urgent that we act"?',
      },
      {
        speaker: 'Sabine',
        french: "« L'urgence d'une action s'impose. » Vous condensez la subordonnée en groupe nominal. L'adjectif devient nom abstrait, le verbe devient nom dérivé.",
        english: '"The urgency of action imposes itself." You condense the subordinate into a noun phrase. The adjective becomes an abstract noun, the verb becomes a derived noun.',
      },
      {
        speaker: 'Léon',
        french: "Ce style est-il vraiment indispensable ? Il me semble parfois plus opaque que le verbal.",
        english: 'Is this style truly indispensable? It sometimes seems more opaque to me than the verbal one.',
      },
      {
        speaker: 'Sabine',
        french: "C'est la langue du rapport, de la note de service, de la circulaire. Si vous écrivez « nous voulons faire » à un cabinet ministériel, vous serez perçu comme amateur. La nominalisation est un marqueur social de compétence administrative.",
        english: 'It is the language of the report, the internal memo, the circular. If you write "we want to do" to a minister’s office, you will be perceived as an amateur. Nominalisation is a social marker of administrative competence.',
      },
      {
        speaker: 'Léon',
        french: "Compris. Je reprends la page deux et je vous la renvoie d'ici une heure.",
        english: 'Understood. I’ll re-do page two and send it back to you within the hour.',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Étape 1 — Nominalisation verbale (verbe → nom)',
      explanation:
        'Convert a verb into its derived noun. French has six main productive suffixes for verbal nouns: -tion/-sion (-ation, -ution), -ment, -age, -ure, -ée, plus the zero-suffix derivations (faire → fait, voir → vue). The pattern is reliable enough to predict the noun from the verb in about 80% of cases.',
      examples: [
        "-tion/-sion : décider → décision · construire → construction · arriver → arrivée",
        "-ment : développer → développement · approfondir → approfondissement",
        "-age : utiliser → utilisation · recycler → recyclage · monter → montage",
        "-ure : fermer → fermeture · ouvrir → ouverture · écrire → écriture",
        "ZÉRO : faire → fait · voir → vue · vouloir → volonté",
      ],
      tip: "If you don't immediately know the noun form, listen for which suffix sounds right and check a dictionary. The wrong suffix will sound foreign even to a beginner native speaker.",
    },
    {
      title: 'Étape 2 — Nominalisation adjectivale (adjectif → nom abstrait)',
      explanation:
        'Convert an adjective into its derived abstract noun. The main suffixes are -ité, -té (often direct), -eur (sometimes), -esse (occasionally), -ie, -ance/-ence. These nouns name the quality or property denoted by the adjective.',
      examples: [
        "-ité : complexe → complexité · efficace → efficacité · capable → capacité · stable → stabilité",
        "-té : sûr → sûreté · libre → liberté · fier → fierté",
        "-esse : faible → faiblesse · juste → justesse · poli → politesse",
        "-ance/-ence : intelligent → intelligence · différent → différence · puissant → puissance",
        "-ie : courtois → courtoisie · jaloux → jalousie",
      ],
      tip: "The -ité suffix is the most productive at B2 — almost any -e ending adjective (efficace, durable, plausible) can be nominalised this way. Use it as your default before reaching for the irregulars.",
    },
    {
      title: 'Étape 3 — Condensation de proposition (proposition → groupe nominal)',
      explanation:
        'Replace an entire subordinate clause with a noun phrase headed by the verbal noun. This is the most powerful and most identifying nominalisation move: a full clause "que je parte" becomes "mon départ"; "il est important que vous partiez" becomes "votre départ est important". Two formal frames also help: "le fait que + indicatif" and "le fait de + infinitif".',
      examples: [
        "Il est important que vous partiez. → Votre départ est important.",
        "Nous avons décidé d'agir. → La décision d'agir a été prise.",
        "Il faut que nous arrivions à l'heure. → Une arrivée à l'heure s'impose.",
        "« Le fait que + ind. » : Le fait qu'il ait démissionné a surpris.",
        "« Le fait de + inf. » : Le fait d'avoir attendu si longtemps me déçoit.",
      ],
      tip: "When condensing, ask: what is the SUBJECT of the original verb? That subject usually becomes a possessive determiner (son, sa, leur) or a prepositional 'de + nom' attached to the verbal noun.",
    },
    {
      title: 'Nominalisations figées du français administratif',
      explanation:
        'A small set of nominalised phrases are so frequent in French administrative French that they function as fixed vocabulary items. You can\'t derive them from rules — you must memorise them. They appear in every official letter, circular, and report.',
      examples: [
        "la mise en œuvre de — implementation of",
        "la prise en charge de — responsibility for / handling of",
        "la mise à jour de — updating of",
        "la prise en compte de — taking into account",
        "la mise en place de — setting up / putting in place of",
      ],
      tip: 'Memorise these five expressions as inseparable units — they are the highest-frequency nominal phrases in French administrative French. Using them correctly in a B2 essay is the closest thing to a guaranteed register boost.',
    },
    {
      title: 'Style verbal vs style nominal — quand utiliser quoi',
      explanation:
        "French style culture distinguishes le style verbal (verb-heavy, dynamic, spoken/informal) from le style nominal (noun-heavy, dense, written/formal). The two register registers are not interchangeable: an administrative letter must be nominal; a spoken conversation should not be. At B2, you must be able to deploy both and shift between them consciously.",
      examples: [
        "ORAL/VERBAL : « On a décidé de reporter parce qu'il pleut. »",
        "ÉCRIT/NOMINAL : « La décision du report a été motivée par les conditions météorologiques. »",
        "ORAL : « Il est mort en septembre. »",
        "ÉCRIT : « Son décès est survenu en septembre. »",
        "ORAL : « Nous avons fini le rapport. »",
        "ÉCRIT : « L'achèvement du rapport est intervenu hier. »",
      ],
      tip: 'In a B2 production écrite, nominal style is your default. In a B2 production orale, verbal style is your default. Mixing them up — formal writing in verbal style, or spoken French in nominal style — is one of the most common register errors.',
    },
  ],
  vocabulary: [
    { french: 'la décision (de)', english: 'the decision (to)', category: 'Suffixe -sion', example: 'La décision a été prise hier.', note: 'verbe décider' },
    { french: 'la construction (de)', english: 'the construction (of)', category: 'Suffixe -tion', example: 'La construction du pont a duré trois ans.', note: 'verbe construire' },
    { french: 'l’arrivée (de)', english: 'the arrival (of)', category: 'Suffixe -ée', example: 'L’arrivée du ministre a été retardée.', note: 'verbe arriver' },
    { french: 'le développement (de)', english: 'the development (of)', category: 'Suffixe -ment', example: 'Le développement du projet exige du temps.', note: 'verbe développer' },
    { french: 'l’ouverture (de)', english: 'the opening (of)', category: 'Suffixe -ure', example: 'L’ouverture de la commission est prévue lundi.', note: 'verbe ouvrir' },
    { french: 'l’utilisation (de)', english: 'the use (of)', category: 'Suffixe -tion', example: 'L’utilisation des fonds est strictement encadrée.', note: 'verbe utiliser' },
    { french: 'l’amélioration (de)', english: 'the improvement (of)', category: 'Suffixe -tion', example: 'L’amélioration des résultats est notable.', note: 'verbe améliorer' },
    { french: 'la complexité', english: 'complexity', category: 'Suffixe -ité', example: 'La complexité du dossier explique les retards.', note: 'adjectif complexe' },
    { french: 'l’efficacité', english: 'efficiency / effectiveness', category: 'Suffixe -ité', example: 'L’efficacité de la mesure reste à démontrer.', note: 'adjectif efficace' },
    { french: 'la stabilité', english: 'stability', category: 'Suffixe -ité', example: 'La stabilité financière s’améliore.', note: 'adjectif stable' },
    { french: 'la capacité (à/de)', english: 'capacity (to)', category: 'Suffixe -ité', example: 'La capacité d’adaptation de l’équipe est remarquable.', note: 'adjectif capable' },
    { french: 'la liberté', english: 'freedom', category: 'Suffixe -té', example: 'La liberté de la presse est un acquis.', note: 'adjectif libre' },
    { french: 'la sûreté', english: 'safety', category: 'Suffixe -té', example: 'La sûreté du site relève de l’État.', note: 'adjectif sûr' },
    { french: 'la mise en œuvre de', english: 'the implementation of', category: 'Nominalisation figée', example: 'La mise en œuvre du plan commence en mars.', note: '[soutenu/admin]' },
    { french: 'la prise en charge de', english: 'the handling of', category: 'Nominalisation figée', example: 'La prise en charge des patients est immédiate.', note: '[soutenu/admin]' },
    { french: 'la prise en compte de', english: 'the taking into account', category: 'Nominalisation figée', example: 'La prise en compte des avis citoyens reste insuffisante.', note: '[soutenu/admin]' },
    { french: 'la mise à jour de', english: 'the updating of', category: 'Nominalisation figée', example: 'La mise à jour du règlement intérieur est prévue.', note: '[soutenu/admin]' },
    { french: 'la mise en place de', english: 'the setting up of', category: 'Nominalisation figée', example: 'La mise en place du dispositif est en cours.', note: '[soutenu/admin]' },
    { french: 'l’achèvement (de)', english: 'the completion (of)', category: 'Suffixe -ment', example: 'L’achèvement des travaux est imminent.', note: '[soutenu]' },
    { french: 'la création (de)', english: 'the creation (of)', category: 'Suffixe -tion', example: 'La création d’un comité est à l’étude.', note: 'verbe créer' },
    { french: 'le report (de)', english: 'the postponement (of)', category: 'Nom déverbal court', example: 'Le report de la réunion a été annoncé.', note: 'verbe reporter' },
    { french: 'le refus (de)', english: 'the refusal (of)', category: 'Nom déverbal court', example: 'Le refus du dialogue serait dommageable.', note: 'verbe refuser' },
    { french: 'l’engagement (de)', english: 'the commitment (to)', category: 'Suffixe -ment', example: 'L’engagement des partenaires est essentiel.', note: '[soutenu]' },
    { french: 'la durabilité', english: 'sustainability', category: 'Suffixe -ité', example: 'La durabilité du modèle est mise en cause.', note: 'adjectif durable' },
    { french: 'le décès', english: 'death (formal)', category: 'Vocabulaire administratif', example: 'Son décès est survenu en septembre.', note: '[soutenu/admin]' },
    { french: 'survenir', english: 'to occur (formal)', category: 'Verbe formel', example: 'L’incident est survenu hier.', note: '[soutenu]' },
    { french: 'intervenir', english: 'to take place / intervene', category: 'Verbe formel', example: 'L’audition est intervenue mardi.', note: '[soutenu]' },
    { french: 'tenir à / résider dans', english: 'to lie in / to consist in', category: 'Verbe d’explication', example: 'La difficulté tient à un manque de coordination.', note: '[soutenu]' },
    { french: 'une circulaire', english: 'a circular (admin)', category: 'Vocabulaire administratif', example: 'Une circulaire ministérielle clarifie le dispositif.', note: '[admin]' },
    { french: 'une note de service', english: 'an internal memo', category: 'Vocabulaire administratif', example: 'La note de service précise les nouvelles consignes.', note: '[admin]' },
    { french: 'le dispositif', english: 'the scheme / system', category: 'Vocabulaire administratif', example: 'Le dispositif vise les jeunes en insertion.', note: '[admin]' },
  ],
  culturalNotes: [
    {
      title: 'La langue de bois administrative',
      content:
        "French administrative French has long been criticised — and satirised — for its nominal density. The phrase 'langue de bois' (wooden language) is used by critics to describe its opacity. Yet the style persists for a reason: nominalisation distances the writer from the claim, depersonalises responsibility, and signals institutional belonging. The DILA (Direction de l'information légale et administrative) publishes style guides; the Conseil d'État periodically calls for plain-French reforms. The result is a perpetual tension between accessibility and the entrenched register markers of bureaucratic competence.",
    },
    {
      title: 'Le rapport, genre central du français institutionnel',
      content:
        "From the corporate 'rapport d'activité' to the parliamentary 'rapport d'information' to the school's 'rapport pédagogique', the rapport is the central genre of French institutional writing. Each is built around the conventions taught here: nominal style, impersonal constructions, fixed administrative phraseology. Reading one rapport per quarter (e.g. a Cour des comptes report on the public sector, freely available online) is excellent B2 reading practice.",
    },
    {
      title: 'L’écart culturel entre normes françaises et anglo-saxonnes',
      content:
        "English-language formal writing (academic, professional, journalistic) has shifted toward verbal style since the late 20th century, partly under the influence of plain-English movements. French formal writing has not undergone the same shift. B2 learners coming from English-speaking academic traditions must consciously unlearn the preference for active verbs and embrace nominal density when writing formally in French — a real cross-linguistic adjustment.",
    },
    {
      title: 'Le rapport d’activité d’une association',
      content:
        "Every French association (loi 1901) and public institution publishes an annual 'rapport d'activité' — a structured document of typically 30-100 pages summarising the year's actions, financial flows, and forward priorities. Its style is uniformly nominal. Reading the rapport d'activité of a French institution you find interesting (a museum, a university, an NGO) is excellent terrain for absorbing the conventions taught in this lesson.",
    },
    {
      title: "La nominalisation à l'INSEE",
      content:
        "The Institut national de la statistique et des études économiques (INSEE) publishes economic and demographic studies in a style that is the gold standard of French formal impersonal nominal prose. Every published 'note', 'étude', or 'enquête' is built around the constructions taught here. Reading one INSEE note per month is a one-step preparation for the DELF B2 production écrite.",
    },
  ],
  exercises: [
    {
      id: 'l50-verbal-noun',
      type: 'fill_blank',
      question: 'Donnez le nom dérivé du verbe « décider ».',
      correct_answer: ['décision', 'la décision'],
      explanation: 'décider → décision (suffixe -sion).',
    },
    {
      id: 'l50-verbal-noun-2',
      type: 'fill_blank',
      question: 'Donnez le nom dérivé du verbe « améliorer ».',
      correct_answer: ['amélioration', "l'amélioration", 'l’amélioration'],
      explanation: 'améliorer → amélioration (suffixe -tion).',
    },
    {
      id: 'l50-adj-noun',
      type: 'fill_blank',
      question: "Donnez le nom abstrait dérivé de « efficace ».",
      correct_answer: ['efficacité', "l'efficacité", 'l’efficacité'],
      explanation: 'efficace → efficacité (suffixe -ité).',
    },
    {
      id: 'l50-adj-noun-2',
      type: 'fill_blank',
      question: "Donnez le nom abstrait dérivé de « stable ».",
      correct_answer: ['stabilité', 'la stabilité'],
      explanation: 'stable → stabilité (suffixe -ité).',
    },
    {
      id: 'l50-matching',
      type: 'matching',
      question: 'Associez chaque verbe à son nom dérivé.',
      pairs: [
        { french: 'construire', english: 'construction' },
        { french: 'développer', english: 'développement' },
        { french: 'utiliser', english: 'utilisation' },
        { french: 'ouvrir', english: 'ouverture' },
        { french: 'arriver', english: 'arrivée' },
        { french: 'recycler', english: 'recyclage' },
        { french: 'créer', english: 'création' },
        { french: 'achever', english: 'achèvement' },
        { french: 'refuser', english: 'refus' },
        { french: 'reporter', english: 'report' },
      ],
      explanation: 'Reconnaître les suffixes productifs : -tion, -ment, -age, -ure, -ée, déverbal court.',
    },
    {
      id: 'l50-clause-to-np',
      type: 'rewrite',
      question: 'Remplacez la subordonnée par un groupe nominal (condensation).',
      instruction_type: 'reported_speech',
      items: [
        {
          original: "Il est important que vous partiez tôt.",
          expected: "Votre départ matinal est important.",
          explanation: "Subordonnée → GN (votre départ + adjectif).",
        },
        {
          original: "Nous avons décidé d'agir vite.",
          expected: "La décision d'agir vite a été prise.",
          explanation: "Verbe + complément → GN à la voix passive.",
        },
        {
          original: "Il faut que la réforme soit mise en œuvre.",
          expected: "La mise en œuvre de la réforme s'impose.",
          explanation: "Subordonnée → nominalisation figée + verbe impersonnel.",
        },
        {
          original: "Le ministre a annoncé qu'il démissionnait.",
          expected: "Le ministre a annoncé sa démission.",
          explanation: "Subordonnée → GN avec possessif (sa démission).",
        },
        {
          original: "Nous craignons que les délais soient repoussés.",
          expected: "Nous craignons un report des délais.",
          explanation: "Subordonnée → GN (un report de).",
        },
      ],
    },
    {
      id: 'l50-verbal-to-nominal',
      type: 'rewrite',
      question: 'Réécrivez chaque phrase en style nominal (administratif).',
      instruction_type: 'reported_speech',
      items: [
        {
          original: "Nous avons mis en œuvre la réforme et nous avons amélioré les résultats.",
          expected: "La mise en œuvre de la réforme a permis l'amélioration des résultats.",
          explanation: "Deux nominalisations figées : mise en œuvre + amélioration.",
        },
        {
          original: "Le rapport est important parce qu'il analyse les besoins.",
          expected: "L'importance du rapport tient à son analyse des besoins.",
          explanation: "Adjectif → nom abstrait (importance) ; cause → verbe « tenir à ».",
        },
        {
          original: "Il a démissionné hier et cela a surpris tout le monde.",
          expected: "Sa démission, intervenue hier, a surpris tout le monde.",
          explanation: "Démissionner → démission ; verbe « intervenir » pour la temporalité.",
        },
        {
          original: "Le maire a décidé qu'on construirait une nouvelle école.",
          expected: "Le maire a décidé la construction d'une nouvelle école.",
          explanation: "Subordonnée → GN (la construction de).",
        },
      ],
    },
    {
      id: 'l50-register-sort',
      type: 'register_sort',
      question:
        "Classez ces formulations entre style verbal (oral/informel) et style nominal (écrit/administratif).",
      categories: ['style verbal', 'style nominal'],
      items: [
        { expression: 'Nous avons décidé de réorganiser le service.', correct_category: 'style verbal', explanation: 'Verbe principal « avons décidé » + infinitif. Style courant à l’oral.' },
        { expression: "La décision de réorganiser le service a été prise.", correct_category: 'style nominal', explanation: 'Sujet : nom abstrait « la décision » ; voix passive.' },
        { expression: "Il est urgent qu'on agisse.", correct_category: 'style verbal', explanation: 'Subordonnée verbale après « il est urgent que ».' },
        { expression: "L'urgence d'une action s'impose.", correct_category: 'style nominal', explanation: 'Adjectif → nom abstrait (urgence) ; verbe → nom (action).' },
        { expression: "On a mis en place ce dispositif l'an dernier.", correct_category: 'style verbal', explanation: 'Sujet « on » + verbe au PC.' },
        { expression: "La mise en place du dispositif est intervenue l'an dernier.", correct_category: 'style nominal', explanation: 'Nominalisation figée + verbe formel « intervenir ».' },
        { expression: 'Le ministre est mort en septembre.', correct_category: 'style verbal', explanation: 'Sujet + verbe simple ; verbe « mourir » est courant.' },
        { expression: 'Le décès du ministre est survenu en septembre.', correct_category: 'style nominal', explanation: 'Nom administratif « décès » + verbe formel « survenir ».' },
        { expression: 'Nous avons fini le rapport hier.', correct_category: 'style verbal', explanation: 'Sujet + verbe + COD au PC.' },
        { expression: "L'achèvement du rapport est intervenu hier.", correct_category: 'style nominal', explanation: 'Nominalisation + verbe formel.' },
        { expression: "Il faut qu'on agisse vite.", correct_category: 'style verbal', explanation: 'Subordonnée au subjonctif.' },
        { expression: "Une action rapide s'impose.", correct_category: 'style nominal', explanation: 'GN compressé.' },
      ],
    },
    {
      id: 'l50-fixed',
      type: 'matching',
      question: "Associez chaque nominalisation figée à son sens.",
      pairs: [
        { french: 'la mise en œuvre de', english: 'implementation of' },
        { french: 'la prise en charge de', english: 'handling / responsibility for' },
        { french: 'la mise en place de', english: 'setting up of' },
        { french: 'la prise en compte de', english: 'taking into account' },
        { french: 'la mise à jour de', english: 'updating of' },
      ],
      explanation: 'Ces expressions sont figées et inséparables — elles constituent du vocabulaire à mémoriser.',
    },
    {
      id: 'l50-error-correction',
      type: 'error_correction',
      question: 'Corrigez ces phrases dont le suffixe nominalisant est incorrect.',
      items: [
        {
          incorrect: "La complexement du dossier explique les retards.",
          correct: "La complexité du dossier explique les retards.",
          explanation: 'complexe → complexité (suffixe -ité).',
        },
        {
          incorrect: "L'efficaceté de la mesure reste à démontrer.",
          correct: "L'efficacité de la mesure reste à démontrer.",
          explanation: 'efficace → efficacité.',
        },
        {
          incorrect: "Le développation du projet exige du temps.",
          correct: "Le développement du projet exige du temps.",
          explanation: 'développer → développement (suffixe -ment).',
        },
        {
          incorrect: "L'arrivation du ministre a été retardée.",
          correct: "L'arrivée du ministre a été retardée.",
          explanation: 'arriver → arrivée (suffixe -ée, irrégulier).',
        },
        {
          incorrect: "La libreté de la presse est un acquis.",
          correct: "La liberté de la presse est un acquis.",
          explanation: 'libre → liberté.',
        },
      ],
    },
    {
      id: 'l50-translation',
      type: 'translation',
      question: "Traduisez en français en STYLE NOMINAL : 'The implementation of the reform allowed the improvement of public services.'",
      direction: 'en_to_fr',
      correct_answer: [
        "La mise en œuvre de la réforme a permis l'amélioration des services publics.",
      ],
      explanation: 'Deux nominalisations figées + une dérivée (amélioration).',
    },
    {
      id: 'l50-argumentation',
      type: 'argumentation',
      question:
        "Rédigez un paragraphe d'introduction (3-4 phrases) en STYLE NOMINAL sur un sujet administratif de votre choix (réforme, dispositif, politique publique).",
      structure: [
        {
          label: 'Phrase de cadrage (style nominal)',
          instruction: 'Posez le sujet avec un sujet nominal abstrait. Pas de « nous » ni de « je ».',
          model: "La mise en place du dispositif de revenu universel suscite, depuis deux ans, des débats nourris au sein des collectivités territoriales françaises.",
          connector_hints: ['La mise en place', 'L’adoption', 'L’instauration', 'Le déploiement'],
        },
        {
          label: 'Précision de l’enjeu (style nominal)',
          instruction: 'Précisez l’enjeu central. Utilisez une nominalisation et une formule impersonnelle.',
          model: "L’efficacité de ce dispositif tient autant à son financement qu’à sa lisibilité pour les bénéficiaires.",
          connector_hints: ['L’efficacité tient à', 'L’enjeu réside dans', 'La difficulté s’explique par'],
        },
        {
          label: 'Annonce du plan (style nominal)',
          instruction: "Annoncez ce que la suite traitera. Évitez « je montrerai » ; préférez une formulation impersonnelle.",
          model: "Trois axes méritent un examen approfondi : la prise en charge des publics fragiles, l’impact sur l’emploi local et la soutenabilité budgétaire.",
          connector_hints: ['Trois axes', 'Plusieurs questions', 'L’examen porte sur'],
        },
      ],
      word_count_target: 80,
    },
    {
      id: 'l50-speaking',
      type: 'speaking_prompt',
      question:
        "Présentez à voix haute en style nominal (3-4 phrases) le bilan d'un projet professionnel ou universitaire.",
      model_answer:
        "L'achèvement de notre étude sur la mobilité étudiante en Europe est intervenu en juin dernier. La mise en œuvre du protocole d'enquête a permis l'amélioration significative de la qualité des données. La prise en compte des retours des étudiants a constitué l'apport méthodologique central. Une seconde phase, dont la mise en place est prévue à l'automne, élargira l'analyse aux pays d'Europe centrale.",
      translation:
        "The completion of our study on student mobility in Europe took place last June. The implementation of the survey protocol allowed for a significant improvement in data quality. Taking student feedback into account constituted the central methodological contribution. A second phase, whose deployment is planned for the autumn, will broaden the analysis to Central European countries.",
      tip: 'Try to start each sentence with a nominal subject (le, la, l’) rather than a personal pronoun. This is the single most reliable acoustic marker of nominal style.',
    },
  ],
}

export default function Lesson50Page() {
  return (
    <AdvancedLessonLayout
      lessonData={lessonData}
      lessonNumber={50}
      prevHref="/lessons/advanced/49"
      prevLabel="Les Hypothèses Mixtes"
      nextHref="/lessons/advanced/51"
      nextLabel="Le Participe Présent en Apposition"
    />
  )
}
