'use client'

import AdvancedLessonLayout, { AdvancedLessonData } from '../../../../../components/lessons/AdvancedLessonLayout'

const lessonData: AdvancedLessonData = {
  id: 48,
  title: 'Cleft Sentences',
  title_fr: 'La Mise en Relief',
  level: 'B2',
  description:
    "Front any element of a French sentence for emphasis using 'c'est...qui' and 'c'est...que'. This is the construction French politicians use to land every line of every televised debate, and the most reliable single tool for upgrading flat declarative French.",
  dialogue: {
    title: 'Débat télévisé',
    context:
      "A televised political discussion on a public-service broadcast. Madame Dubois (centre-right MP) and Monsieur Tellier (centre-left commentator) contest each other's framing of a recent reform. They saturate their exchanges with cleft constructions — c'est... qui / c'est... que — because rhetoric on French TV literally requires it.",
    register: 'soutenu',
    exchanges: [
      {
        speaker: 'Animateur',
        french: "Madame Dubois, c'est vous qui avez défendu cette réforme dès le premier jour. Pourquoi ?",
        english: 'Madame Dubois, you are the one who has defended this reform from day one. Why?',
      },
      {
        speaker: 'Mme Dubois',
        french: "Parce que c'est précisément l'efficacité qui manquait au système précédent. Et c'est aux jeunes actifs que cette réforme va profiter en premier.",
        english: 'Because it is precisely efficiency that the previous system lacked. And it is young working people who will benefit from this reform first.',
      },
      {
        speaker: 'M. Tellier',
        french: "C'est justement ce que je conteste. Ce sont les retraités modestes qui vont en supporter le coût, pas les actifs.",
        english: 'That is precisely what I contest. It is modest pensioners who will bear the cost, not the active workforce.',
      },
      {
        speaker: 'Mme Dubois',
        french: "Mais non, ce n'est pas eux qui paieront. C'est l'État qui prend en charge la transition. C'est inscrit noir sur blanc dans le projet de loi.",
        english: 'But no, it is not they who will pay. It is the State which takes responsibility for the transition. It is written in black and white in the bill.',
      },
      {
        speaker: 'M. Tellier',
        french: "C'est dans cette transition qu'il y a un problème de financement. Et c'est parce qu'on n'a pas posé la question des recettes qu'on s'enferre.",
        english: 'It is in that transition that there is a financing problem. And it is because we have not raised the question of receipts that we are getting stuck.',
      },
      {
        speaker: 'Mme Dubois',
        french: "Ce qui me frappe dans votre raisonnement, c'est l'absence de propositions. Vous critiquez, mais c'est quoi votre alternative ?",
        english: 'What strikes me in your reasoning is the absence of proposals. You criticise, but what is your alternative?',
      },
      {
        speaker: 'M. Tellier',
        french: "C'est la justice fiscale que nous proposons. Et c'est en revoyant les niches fiscales qu'on dégage trois milliards par an.",
        english: 'It is fiscal justice that we propose. And it is by reviewing tax loopholes that one releases three billion a year.',
      },
      {
        speaker: 'Animateur',
        french: "Madame Dubois, votre réponse ?",
        english: 'Madame Dubois, your response?',
      },
      {
        speaker: 'Mme Dubois',
        french: "C'est une fausse promesse. Ce ne sont pas les niches fiscales qui combleront le déficit, c'est la croissance. Et c'est la confiance des investisseurs qui crée la croissance.",
        english: 'It is a false promise. It is not tax loopholes that will fill the deficit, it is growth. And it is investor confidence that creates growth.',
      },
      {
        speaker: 'M. Tellier',
        french: "C'est précisément cette logique de ruissellement que les Français ont rejetée dans les urnes. C'est en juin dernier qu'ils l'ont fait clairement entendre.",
        english: 'It is precisely that trickle-down logic that the French rejected at the ballot box. It is last June that they made it clearly heard.',
      },
      {
        speaker: 'Animateur',
        french: "Une dernière question : à qui s'adresse cette réforme, selon chacun de vous ?",
        english: 'One last question: who is this reform aimed at, according to each of you?',
      },
      {
        speaker: 'Mme Dubois',
        french: "C'est aux Français qui travaillent qu'elle s'adresse. Et c'est leur pouvoir d'achat que nous voulons défendre.",
        english: 'It is to working French people that it is addressed. And it is their purchasing power that we want to defend.',
      },
      {
        speaker: 'M. Tellier',
        french: "Ce sont les plus modestes qu'il faudrait protéger en priorité. Mais c'est précisément ce que ce gouvernement refuse de faire.",
        english: 'It is the most modest who should be protected first. But it is precisely what this government refuses to do.',
      },
    ],
  },
  grammarPoints: [
    {
      title: "C'est... qui — focaliser le sujet",
      explanation:
        "Use 'c'est... qui' (or 'ce sont... qui' for plural) to front and emphasise the SUBJECT of the verb. The verb after 'qui' agrees with the fronted element, not with 'c'est'. When the fronted subject is a personal pronoun, it must take its STRESSED form (moi, toi, lui, elle, nous, vous, eux, elles).",
      examples: [
        "C'est Paul qui a téléphoné. (subject = Paul)",
        "C'est moi qui ai raison. (NOT *c'est je — pronoun is stressed)",
        "C'est elle qui a décidé. (subject = elle)",
        "Ce sont eux qui ont voté contre. (plural → ce sont)",
        "AGREEMENT : C'est nous qui avons décidé. (verb agrees with nous → avons)",
      ],
      tip: "The verb agreement trap is real: 'C'est moi qui ai raison' (not 'a raison'). The verb conjugates as if the stressed pronoun were the standard subject. Drill this — even high-B2 learners drop the agreement.",
    },
    {
      title: "C'est... que — focaliser un complément ou un adverbial",
      explanation:
        "Use 'c'est... que' to front any other element — direct object, indirect object, adverb, adverbial complement of place/time/manner/cause, or a prepositional phrase. The element appears immediately after 'c'est', followed by 'que' + subject + verb.",
      examples: [
        "C'est ce livre que je préfère. (COD focus)",
        "C'est à Paris que je travaille. (place focus)",
        "C'est demain qu'il part. (time focus)",
        "C'est avec elle que je voyage. (prepositional focus)",
        "C'est parce qu'il pleuvait que nous avons renoncé. (reason focus, with full subordinate)",
      ],
      tip: "'C'est... que' is your default if the focused element is NOT the subject. When in doubt, ask: 'Is this thing doing the verb action?' If yes → qui. If no → que. The test almost never fails.",
    },
    {
      title: 'Pronoms emphatiques en mise en relief',
      explanation:
        "Subject pronouns cannot be cleft directly; they require their stressed (disjunctive) form. Object pronouns similarly require the stressed form. This is one of the most important pronoun rules at B2 — the construction simply doesn't work with je/tu/il.",
      examples: [
        "C'est MOI qui ai téléphoné. (not *c'est je qui...)",
        "C'est TOI que je cherche. (not *c'est tu...)",
        "C'est LUI qui décide. — C'est ELLE qui paie.",
        "Ce sont EUX qu'il faut convaincre, pas les autres.",
        "TABLE : je→moi, tu→toi, il→lui, elle→elle, nous→nous, vous→vous, ils→eux, elles→elles",
      ],
      tip: 'The same stressed pronouns you use after prepositions (avec moi, pour toi, chez lui) are the ones cleft constructions require. Build the rule as a single mental package.',
    },
    {
      title: 'Mise en relief composée : ce qui / ce que + c’est',
      explanation:
        "Combine the indefinite relatives from L47 ('ce qui / ce que / ce dont / ce à quoi') with 'c'est' to produce a longer, more elaborate cleft. This is the standard structure for opening a paragraph in a DELF B2 essay or any formal argument — a 'thematic fronting' that sets up the comment to follow.",
      examples: [
        "Ce qui me surprend, c'est sa réaction.",
        "Ce que je propose, c'est une refonte complète.",
        "Ce dont nous avons besoin, c'est de temps et de patience.",
        "Ce à quoi il faut s'attacher, c'est au sens de la mission.",
        "CONTRAST : Sa réaction me surprend. → flat, B1 / Ce qui me surprend, c'est sa réaction. → cleft, B2.",
      ],
      tip: "Open the introduction and at least one development paragraph of any B2 essay with this construction. It signals discourse-level control immediately. But don't overdo it — three or four per essay is the upper limit before it starts to feel mechanical.",
    },
    {
      title: 'Cleft négatif et alternatif',
      explanation:
        "Cleft constructions can also negate or contrast. 'Ce n'est pas...qui' and 'ce n'est pas...que' deny the focused element; 'c'est... et non...' or 'ce n'est pas X qui..., c'est Y' present alternatives. These are the structures used to correct or rephrase in formal debate.",
      examples: [
        "Ce n'est pas lui qui a décidé. (denial)",
        "Ce n'est pas moi qui paierai cette fois.",
        "Ce n'est pas la quantité qui compte, c'est la qualité. (correction)",
        "C'est Paul, et non Pierre, qui a signé. (alternative)",
        "Ce ne sont pas les niches fiscales qui combleront le déficit, c'est la croissance. (substitution)",
      ],
      tip: "These constructions are the rhetorical bread and butter of French political debate. If you watch any French TV debate, you'll hear at least one cleft negation per minute. Mimic the pattern when you correct or rephrase in your own argument.",
    },
  ],
  vocabulary: [
    { french: "c'est... qui", english: 'it is ... who/which (subject)', category: 'Mise en relief', example: "C'est Paul qui a téléphoné.", note: 'sujet focalisé' },
    { french: "c'est... que", english: 'it is ... that (object/adverbial)', category: 'Mise en relief', example: "C'est ce livre que je préfère.", note: 'objet ou adverbial focalisé' },
    { french: 'ce sont... qui', english: 'it is ... who (plural)', category: 'Mise en relief', example: 'Ce sont eux qui ont décidé.', note: 'pluriel' },
    { french: "ce n'est pas... qui", english: 'it is not ... who/which', category: 'Mise en relief négative', example: "Ce n'est pas moi qui paierai.", note: 'négation du sujet' },
    { french: "c'est justement", english: 'it is precisely', category: 'Marqueur d’insistance', example: "C'est justement ce que je voulais dire.", note: '[courant-soutenu]' },
    { french: 'c’est précisément', english: 'it is precisely', category: 'Marqueur d’insistance', example: "C'est précisément l'efficacité qui manque.", note: '[soutenu]' },
    { french: 'c’est surtout', english: 'it is mainly', category: 'Marqueur d’insistance', example: "C'est surtout la question du financement qui pose problème.", note: '[courant]' },
    { french: 'c’est en particulier', english: 'it is in particular', category: 'Marqueur d’insistance', example: "C'est en particulier la jeunesse qui sera touchée.", note: '[soutenu]' },
    { french: 'c’est avant tout', english: 'it is first and foremost', category: 'Marqueur d’insistance', example: "C'est avant tout une question de principe.", note: '[soutenu]' },
    { french: 'c’est notamment', english: 'it is notably', category: 'Marqueur d’insistance', example: "C'est notamment la classe moyenne qui en bénéficie.", note: '[courant-soutenu]' },
    { french: 'c’est uniquement', english: 'it is only / solely', category: 'Marqueur d’insistance', example: "C'est uniquement par calcul politique qu'il a accepté.", note: '[soutenu]' },
    { french: 'c’est davantage', english: 'it is more', category: 'Marqueur d’insistance', example: "C'est davantage la forme que le fond qui choque.", note: '[soutenu]' },
    { french: 'une réforme', english: 'a reform', category: 'Vocabulaire politique', example: 'La réforme entre en vigueur en janvier.' },
    { french: 'un projet de loi', english: 'a bill', category: 'Vocabulaire politique', example: 'Le projet de loi sera débattu au Sénat.' },
    { french: 'le pouvoir d’achat', english: 'purchasing power', category: 'Vocabulaire politique', example: 'Le pouvoir d’achat reste la première préoccupation des Français.' },
    { french: 'la justice fiscale', english: 'tax fairness', category: 'Vocabulaire politique', example: 'La justice fiscale est au cœur du programme.' },
    { french: 'une niche fiscale', english: 'a tax loophole', category: 'Vocabulaire politique', example: 'Les niches fiscales coûtent des milliards à l’État.' },
    { french: 'la croissance', english: 'growth', category: 'Vocabulaire économique', example: 'La croissance ralentit depuis six mois.' },
    { french: 'le déficit', english: 'the deficit', category: 'Vocabulaire économique', example: 'Le déficit budgétaire dépasse cinq pour cent du PIB.' },
    { french: 'la confiance des investisseurs', english: 'investor confidence', category: 'Vocabulaire économique', example: 'La confiance des investisseurs s’est érodée.' },
    { french: 'la logique de ruissellement', english: 'trickle-down logic', category: 'Vocabulaire politique', example: 'La logique de ruissellement n’a jamais convaincu les économistes.' },
    { french: 'aux urnes', english: 'at the ballot box', category: 'Vocabulaire politique', example: 'Les Français se sont exprimés aux urnes.', note: '[soutenu]' },
    { french: 'contester', english: 'to contest / dispute', category: 'Verbe argumentatif', example: 'Je conteste cette interprétation.' },
    { french: 'défendre', english: 'to defend', category: 'Verbe argumentatif', example: 'Elle défend la réforme depuis le début.' },
    { french: 's’enferrer', english: 'to get stuck (in argument)', category: 'Tournure argumentative', example: 'On s’enferre dans des querelles secondaires.', note: '[courant-soutenu]' },
    { french: 'écrire / inscrit noir sur blanc', english: 'written in black and white', category: 'Tournure idiomatique', example: 'C’est écrit noir sur blanc dans le texte.' },
    { french: 'combler un déficit', english: 'to fill a deficit', category: 'Tournure argumentative', example: 'Comment combler le déficit ?' },
    { french: 'l’animateur / l’animatrice', english: 'the (TV) host', category: 'Vocabulaire médiatique', example: 'L’animateur a relancé le débat.' },
  ],
  culturalNotes: [
    {
      title: 'Le débat de l’entre-deux-tours',
      content:
        "Every French presidential election features the débat de l'entre-deux-tours — the televised debate between the two qualifiers, watched by 15–20 million voters. Its rhetorical conventions are codified: candidates are coached for weeks on how to land cleft sentences, when to interrupt, when to look at the camera. The constructions taught in this lesson are the central rhetorical tools of that ritual. Re-watching a Macron / Le Pen or Macron / Mélenchon debate is one of the most efficient B2 exercises possible.",
    },
    {
      title: 'L’éducation civique et la rhétorique scolaire',
      content:
        "French secondary education explicitly teaches the structuring and emphasis of oral arguments — in éducation civique class, but also in philosophie. Lycéens are drilled in the art of the 'exposé oral' — a structured five-minute spoken argument with explicit emphasis devices. This is why French elites converge on a recognisable rhetorical style: it is genuinely taught, not just acquired. Sciences Po's first-year curriculum makes this drill central.",
    },
    {
      title: 'L’Assemblée nationale et la rhétorique parlementaire',
      content:
        "The séances de questions au gouvernement at the Assemblée nationale every Tuesday and Wednesday are short, ritualised, and rhetorically dense — each question is two minutes, each response two minutes, and the use of cleft constructions is so intense that a transcript reads almost as an exercise. Watching one session per week with the captions on develops both political vocabulary and B2 oral comprehension.",
    },
    {
      title: 'La radio et le talk-show politique',
      content:
        "France Inter's morning programme '7/9' and France Culture's 'L'Invité des matins' host extended interviews with public figures using the same rhetorical register. Unlike Anglophone Sunday-morning shows, French political interviewers are themselves intellectuals — Léa Salamé, Patrick Cohen, Guillaume Erner — and the exchanges are dense, sustained, and full of the constructions taught here.",
    },
  ],
  exercises: [
    {
      id: 'l48-identify',
      type: 'multiple_choice',
      question:
        "Quel élément est mis en relief dans : « C'est en juin dernier qu'ils l'ont fait clairement entendre. » ?",
      options: ['Le sujet (ils)', 'L’adverbe de temps (en juin dernier)', 'Le COD (l’)', 'Le verbe (faire entendre)'],
      correct_answer: 'L’adverbe de temps (en juin dernier)',
      explanation: '« c’est en juin dernier que » → focalisation d’un adverbial temporel.',
    },
    {
      id: 'l48-qui-vs-que',
      type: 'tense_choice',
      question: 'Choisissez « qui » ou « que » selon l’élément focalisé.',
      explanation: 'Si l’élément focalisé est le sujet → qui ; sinon → que.',
      items: [
        {
          sentence: "C'est elle ___ a décidé.",
          verb: 'décider',
          options: ['qui', 'que'],
          correct_answer: 'qui',
          explanation: 'Sujet focalisé → qui.',
        },
        {
          sentence: "C'est ce livre ___ je préfère.",
          verb: 'préférer',
          options: ['qui', 'que'],
          correct_answer: 'que',
          explanation: 'COD focalisé → que.',
        },
        {
          sentence: "C'est à Paris ___ il travaille.",
          verb: 'travailler',
          options: ['qui', 'que'],
          correct_answer: 'que',
          explanation: 'Adverbial de lieu → que.',
        },
        {
          sentence: "Ce sont eux ___ ont voté contre.",
          verb: 'voter',
          options: ['qui', 'que'],
          correct_answer: 'qui',
          explanation: 'Sujet pluriel focalisé → qui.',
        },
        {
          sentence: "C'est demain ___ il part.",
          verb: 'partir',
          options: ['qui', 'que'],
          correct_answer: 'que',
          explanation: 'Adverbial de temps → que.',
        },
        {
          sentence: "C'est avec elle ___ je voyage.",
          verb: 'voyager',
          options: ['qui', 'que'],
          correct_answer: 'que',
          explanation: 'Complément prépositionnel → que.',
        },
        {
          sentence: "C'est lui ___ paiera.",
          verb: 'payer',
          options: ['qui', 'que'],
          correct_answer: 'qui',
          explanation: 'Sujet (pronom emphatique) → qui.',
        },
        {
          sentence: "C'est parce qu'il pleuvait ___ nous avons renoncé.",
          verb: 'renoncer',
          options: ['qui', 'que'],
          correct_answer: 'que',
          explanation: 'Cause (subordonnée focalisée) → que.',
        },
      ],
    },
    {
      id: 'l48-pronoun-agreement',
      type: 'fill_blank',
      question: "Complétez la conjugaison correcte du verbe « avoir » : « C'est moi qui ___ raison. »",
      correct_answer: ['ai'],
      explanation: '« Moi qui » → 1e personne du singulier → ai (pas « a »).',
      hints: ['Le verbe s’accorde avec le pronom emphatique, pas avec « c’est ».'],
    },
    {
      id: 'l48-pronoun-agreement-2',
      type: 'fill_blank',
      question: "Complétez : « C'est nous qui ___ (avoir) décidé. »",
      correct_answer: ['avons'],
      explanation: '« Nous qui » → 1e personne du pluriel → avons.',
    },
    {
      id: 'l48-transform',
      type: 'rewrite',
      question: "Mettez l'élément souligné (en MAJUSCULES) en relief avec une structure clivée.",
      instruction_type: 'reported_speech',
      items: [
        {
          original: 'PAUL a téléphoné hier.',
          expected: "C'est Paul qui a téléphoné hier.",
          explanation: 'Sujet → c’est... qui.',
        },
        {
          original: 'Paul a téléphoné HIER.',
          expected: "C'est hier que Paul a téléphoné.",
          explanation: 'Adverbe de temps → c’est... que.',
        },
        {
          original: 'J’ai rencontré MARIE au marché.',
          expected: "C'est Marie que j'ai rencontrée au marché.",
          explanation: 'COD (Marie) → c’est... que ; accord du participe.',
        },
        {
          original: 'Nous voulons LA JUSTICE.',
          expected: "C'est la justice que nous voulons.",
          explanation: 'COD → c’est... que.',
        },
        {
          original: 'TU as raison.',
          expected: "C'est toi qui as raison.",
          explanation: 'Sujet pronominal → forme emphatique « toi » + qui + accord du verbe avec « tu ».',
        },
        {
          original: 'EUX ont voté contre.',
          expected: "Ce sont eux qui ont voté contre.",
          explanation: 'Sujet pluriel → ce sont... qui.',
        },
      ],
    },
    {
      id: 'l48-negative',
      type: 'rewrite',
      question: 'Construisez une mise en relief négative (substitutive) à partir des éléments donnés.',
      instruction_type: 'reported_speech',
      items: [
        {
          original: 'le coupable n’est pas le jardinier — c’est le maître d’hôtel',
          expected: "Ce n'est pas le jardinier qui est le coupable, c'est le maître d'hôtel.",
          explanation: 'Cleft négatif suivi du correctif.',
        },
        {
          original: 'la quantité ne compte pas — c’est la qualité',
          expected: "Ce n'est pas la quantité qui compte, c'est la qualité.",
          explanation: 'Substitution classique.',
        },
        {
          original: 'ce n’est pas moi qui ai dit cela — c’est lui',
          expected: "Ce n'est pas moi qui ai dit cela, c'est lui.",
          explanation: 'Pronom emphatique + accord du verbe avec « moi » (ai).',
        },
      ],
    },
    {
      id: 'l48-compound-cleft',
      type: 'rewrite',
      question:
        "Combinez « ce qui / ce que » (L47) avec « c'est » pour créer une mise en relief composée.",
      instruction_type: 'reported_speech',
      items: [
        {
          original: 'Sa réaction me surprend.',
          expected: "Ce qui me surprend, c'est sa réaction.",
          explanation: 'Cleft composé avec ce qui.',
        },
        {
          original: 'Je propose une refonte complète.',
          expected: "Ce que je propose, c'est une refonte complète.",
          explanation: 'Cleft composé avec ce que.',
        },
        {
          original: "L'absence de débat m'inquiète.",
          expected: "Ce qui m'inquiète, c'est l'absence de débat.",
          explanation: 'Cleft composé avec ce qui (sujet).',
        },
      ],
    },
    {
      id: 'l48-error-correction',
      type: 'error_correction',
      question: 'Corrigez les erreurs de mise en relief.',
      items: [
        {
          incorrect: "C'est je qui ai raison.",
          correct: "C'est moi qui ai raison.",
          explanation: 'Pronom personnel sujet → forme emphatique « moi » obligatoire.',
        },
        {
          incorrect: "C'est moi qui a raison.",
          correct: "C'est moi qui ai raison.",
          explanation: 'Le verbe s’accorde avec « je / moi » → ai.',
        },
        {
          incorrect: "C'est demain qui il part.",
          correct: "C'est demain qu'il part.",
          explanation: 'Adverbial temporel → que, pas qui.',
        },
        {
          incorrect: "Ce sont elle qui décide.",
          correct: "C'est elle qui décide.",
          explanation: '« Elle » est singulier → « c’est ».',
        },
        {
          incorrect: "C'est à Paris où il travaille.",
          correct: "C'est à Paris qu'il travaille.",
          explanation: 'Mise en relief avec « que » (et non « où ») pour un complément de lieu introduit par « à ».',
        },
      ],
    },
    {
      id: 'l48-translation',
      type: 'translation',
      question: "Traduisez : 'It is the most modest who should be protected first.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Ce sont les plus modestes qu'il faudrait protéger en priorité.",
        "Ce sont les plus modestes qu'il faudrait protéger en premier.",
      ],
      explanation: 'Sujet pluriel focalisé → ce sont... que (COD du verbe protéger).',
    },
    {
      id: 'l48-translation-2',
      type: 'translation',
      question: "Traduisez : 'It is precisely this point that we contest.'",
      direction: 'en_to_fr',
      correct_answer: [
        "C'est précisément ce point que nous contestons.",
        "C'est précisément ce point-là que nous contestons.",
      ],
      explanation: 'COD focalisé avec marqueur d’insistance.',
    },
    {
      id: 'l48-speaking',
      type: 'speaking_prompt',
      question:
        "Défendez une position sur un sujet de société en utilisant AU MOINS TROIS structures clivées (c'est... qui / c'est... que / ce qui... c'est).",
      model_answer:
        "Ce qui m'inquiète dans le débat actuel, c'est l'absence totale de propositions concrètes. C'est précisément la question du financement qu'aucun candidat ne veut aborder. Ce sont les jeunes générations qui paieront le coût de ce silence. Et ce n'est pas en repoussant les décisions difficiles qu'on construit un avenir durable.",
      translation:
        "What worries me in the current debate is the total absence of concrete proposals. It is precisely the question of financing that no candidate wants to address. It is the younger generations that will pay the cost of this silence. And it is not by putting off difficult decisions that we build a sustainable future.",
      tip: "Layer three cleft variants: one 'ce qui... c'est' (subject focus), one 'c'est... que' (object or adverbial), and one 'ce n'est pas... que' (negation/correction). This palette covers 80% of formal French argumentation.",
    },
  ],
}

export default function Lesson48Page() {
  return (
    <AdvancedLessonLayout
      lessonData={lessonData}
      lessonNumber={48}
      prevHref="/lessons/advanced/47"
      prevLabel="Les Relatifs Indéfinis"
      nextHref="/lessons/advanced/49"
      nextLabel="Les Hypothèses Mixtes"
    />
  )
}
