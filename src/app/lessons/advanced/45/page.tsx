'use client'

import AdvancedLessonLayout, { AdvancedLessonData } from '../../../../../components/lessons/AdvancedLessonLayout'

const lessonData: AdvancedLessonData = {
  id: 45,
  title: 'Tense Concordance',
  title_fr: 'La Concordance des Temps',
  level: 'B2',
  description:
    "Master the dependency system that governs tense choice in embedded clauses. This is the lesson where the French tense system finally becomes one coherent architecture rather than a list of disconnected paradigms — and where authentic French narrative finally becomes parseable.",
  dialogue: {
    title: 'Entretien historique',
    context:
      "An interview for a France Culture podcast. The interviewer (Sophie Charpentier) asks questions in the present; the historian (Antoine Beaulieu) narrates in the past, explaining what was thought at the time, what had happened before, and what was going to happen — cycling through the full concordance system naturally.",
    register: 'soutenu',
    exchanges: [
      {
        speaker: 'Sophie',
        french: "Bonsoir Antoine Beaulieu. Vous publiez un ouvrage sur la Troisième République. Que cherchiez-vous à comprendre ?",
        english: 'Good evening, Antoine Beaulieu. You publish a work on the Third Republic. What were you trying to understand?',
      },
      {
        speaker: 'Antoine',
        french: "Je voulais comprendre pourquoi cette République, fondée dans la défaite, avait duré soixante-dix ans. Personne ne pensait, en 1875, qu'elle survivrait.",
        english: 'I wanted to understand why this Republic, founded in defeat, had lasted seventy years. No one thought, in 1875, that it would survive.',
      },
      {
        speaker: 'Sophie',
        french: "Vous montrez que les contemporains croyaient qu'elle ne durerait pas. D'où vient cette conviction ?",
        english: "You show contemporaries believed it wouldn't last. Where does that conviction come from?",
      },
      {
        speaker: 'Antoine',
        french: "Les monarchistes étaient persuadés qu'ils reviendraient au pouvoir dès que le comte de Chambord aurait fait un geste. Ils ignoraient qu'il ne céderait jamais sur le drapeau.",
        english: 'The monarchists were convinced they would return to power as soon as the Count of Chambord had made a gesture. They did not know he would never yield on the flag.',
      },
      {
        speaker: 'Sophie',
        french: "Et lorsque les républicains comprennent qu'ils peuvent gouverner sans craindre une restauration, quelle stratégie adoptent-ils ?",
        english: 'And when the Republicans realise they can govern without fearing a restoration, what strategy do they adopt?',
      },
      {
        speaker: 'Antoine',
        french: "Ils décident qu'ils transformeront l'école pour façonner les esprits. Ferry pensait que la République ne serait durable que si elle formait ses citoyens.",
        english: "They decide they will transform the school system to shape minds. Ferry thought that the Republic would only be lasting if it educated its citizens.",
      },
      {
        speaker: 'Sophie',
        french: "Vous racontez aussi le moment où le pouvoir découvre que l'affaire Dreyfus a divisé la nation. Comment l'avez-vous reconstitué ?",
        english: 'You also recount the moment when the government discovers that the Dreyfus affair has divided the nation. How did you reconstruct it?',
      },
      {
        speaker: 'Antoine',
        french: "À partir des archives ministérielles. On y voit que Méline croyait que l'affaire se résoudrait d'elle-même et qu'elle n'atteindrait jamais le sommet de l'État. Il s'était trompé.",
        english: "From ministerial archives. One sees that Méline believed the affair would resolve itself and would never reach the top of the State. He had been mistaken.",
      },
      {
        speaker: 'Sophie',
        french: "Vous écrivez : 'Ils ne savaient pas que Zola publierait J'accuse trois mois plus tard.' Sur quel document repose cette phrase ?",
        english: "You write: 'They did not know Zola would publish J'accuse three months later.' What document does that sentence rest on?",
      },
      {
        speaker: 'Antoine',
        french: "Une note du cabinet Méline du 10 novembre 1897. L'auteur y affirmait que les choses étaient sous contrôle. Or il ignorait que Zola préparait depuis des semaines un texte qui allait tout faire basculer.",
        english: 'A Méline cabinet note dated 10 November 1897. Its author asserted things were under control. Yet he did not know Zola had been preparing for weeks a text that was going to change everything.',
      },
      {
        speaker: 'Sophie',
        french: "Pour conclure : quelles leçons tirez-vous de cette République qui a survécu malgré tous ceux qui prédisaient sa fin ?",
        english: 'In closing: what lessons do you draw from this Republic that survived despite all who predicted its end?',
      },
      {
        speaker: 'Antoine',
        french: "Que la durée politique se construit lentement. Si l'on m'avait dit, en commençant cette recherche, qu'elle me prendrait dix ans, je l'aurais sans doute abandonnée. Heureusement, je l'ignorais.",
        english: 'That political longevity is built slowly. If I had been told, when I began this research, that it would take me ten years, I would probably have abandoned it. Fortunately, I did not know.',
      },
      {
        speaker: 'Sophie',
        french: "Antoine Beaulieu, je vous remercie. Votre livre paraît demain aux éditions Gallimard.",
        english: 'Antoine Beaulieu, thank you. Your book comes out tomorrow with Gallimard.',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Verbe principal au présent ou au futur',
      explanation:
        "When the main clause is in the present or future, the subordinate clause adopts the tense corresponding to the real-world time of the action: present for simultaneous, future for subsequent, passé composé or imparfait for prior. There is no shift — what you'd say independently is what you embed.",
      examples: [
        "SIMULTANÉ : Il dit qu'il travaille beaucoup. (présent → présent)",
        "FUTUR : Il dit qu'il viendra demain. (présent → futur)",
        "ANTÉRIEUR (action ponctuelle) : Il dit qu'il a travaillé hier. (présent → passé composé)",
        "ANTÉRIEUR (description / état) : Il dit qu'il était fatigué hier soir. (présent → imparfait)",
        "RULE : pas de transposition — la subordonnée garde le temps qu'elle aurait à l'indépendance.",
      ],
      tip: 'Build the embedded sentence as if it stood alone, then attach the main clause without changing anything. This is the simple case — the trap is overshifting and producing the past-system tenses where the main verb is present.',
    },
    {
      title: 'Verbe principal au passé (PC, imparfait, passé simple)',
      explanation:
        "When the main verb is past, the subordinate tense shifts to its 'past system' counterpart: present → imparfait, futur → conditionnel présent, passé composé → plus-que-parfait. This is the rule that governs all reported-speech and embedded-narrative shifts at B2.",
      examples: [
        "SIMULTANÉ : Il a dit qu'il travaillait beaucoup. (PC → imparfait)",
        "FUTUR : Il a dit qu'il viendrait le lendemain. (PC → conditionnel présent)",
        "ANTÉRIEUR : Il a dit qu'il avait travaillé la veille. (PC → plus-que-parfait)",
        "FUTUR ANTÉRIEUR DANS LE PASSÉ : Il a dit qu'il aurait fini avant midi. (PC → conditionnel passé)",
        "PIÈGE : surtout pas de futur après un passé — *Il a dit qu'il viendra → conditionnel obligatoire.",
      ],
      tip: "Memorise the four shifts as one block: présent → imparfait, futur → conditionnel, PC → PQP, futur antérieur → conditionnel passé. They never break — apply them mechanically and only override if you can explain why.",
    },
    {
      title: 'Verbe principal au conditionnel',
      explanation:
        "Treat the conditional like a past for concordance purposes. The conditional présent and conditionnel passé in the main clause both behave as past anchors, triggering the same shifts as imparfait/passé composé would.",
      examples: [
        "Il aimerait que tu viennes. (conditionnel présent → subj. présent : simultaneous/future)",
        "Il aurait aimé que tu sois venu. (conditionnel passé → subj. passé : prior)",
        "Si tu venais, je te dirais que je t'attendais depuis longtemps. (conditionnel → imparfait : simultaneous)",
        "Je voudrais te dire qu'on s'était trompés. (conditionnel → PQP : prior)",
        "Je dirais qu'il viendrait s'il le pouvait. (conditionnel + conditionnel : projection in past frame)",
      ],
      tip: "When the main verb is conditional, mentally rewrite it as a past tense and apply the past-frame shifts. The conditional's politeness/hypothetical force does not change the concordance logic.",
    },
    {
      title: 'Conjonctions temporelles : indicatif vs subjonctif',
      explanation:
        'Not all temporal subordinators behave the same. The crucial distinction at B2 is between conjunctions of factual sequence (indicative) and conjunctions of anticipated/conditional time (subjunctive). Get this wrong and even native ears prick up.',
      examples: [
        "INDICATIF : quand, lorsque, dès que, aussitôt que, après que, une fois que, à peine...que, pendant que, tandis que",
        "SUBJONCTIF : avant que, jusqu'à ce que, en attendant que, d'ici à ce que",
        "Quand il arrivera, nous commencerons. (futur après quand pour une action future)",
        "Avant qu'il (n')arrive, finissons ce point. (subj. présent après avant que)",
        "PIÈGE : 'après que' prend l'indicatif (norme) bien que beaucoup de natifs disent subj. à l'oral.",
      ],
      tip: "Group the subjunctive-takers as 'still-to-happen' time (avant que, jusqu'à ce que) and the indicative-takers as 'real-time happenings' (quand, dès que, après que). The semantic split holds remarkably well.",
    },
    {
      title: 'Concordance du subjonctif au B2',
      explanation:
        'In modern spoken and written French, the subjunctive uses only two tenses productively: subjonctif présent and subjonctif passé. The subjonctif imparfait and subjonctif plus-que-parfait still appear in literary French and must be recognised — but never produced at B2.',
      examples: [
        "Je veux qu'il vienne. (subj. présent : simultaneous/future)",
        "Je suis content qu'il soit venu. (subj. passé : prior)",
        "Je voulais qu'il vienne. (verbe principal au passé + subj. présent : usage moderne)",
        "RECONNAISSANCE LITTÉRAIRE : Je voulais qu'il vînt. (subj. imparfait — Flaubert, Proust)",
        "RECONNAISSANCE LITTÉRAIRE : J'étais content qu'il fût venu. (subj. PQP — archaïque)",
      ],
      tip: "If you spot a verb form like 'vînt' or 'fût' in a literary text, it's the subjonctif imparfait/PQP — translate it mentally to the modern subjonctif présent/passé. You will never need to produce these forms at B2.",
    },
  ],
  vocabulary: [
    { french: 'quand', english: 'when', category: 'Conjonction temporelle', example: 'Quand il arrivera, nous partirons.', note: '+ indicatif' },
    { french: 'lorsque', english: 'when (formal)', category: 'Conjonction temporelle', example: 'Lorsque la décision fut prise, tout changea.', note: '[soutenu] + indicatif' },
    { french: 'dès que', english: 'as soon as', category: 'Conjonction temporelle', example: 'Dès qu’il arrivera, prévenez-moi.', note: '+ indicatif' },
    { french: 'aussitôt que', english: 'as soon as', category: 'Conjonction temporelle', example: 'Aussitôt que le rapport sera prêt, je l’enverrai.', note: '+ indicatif' },
    { french: 'après que', english: 'after', category: 'Conjonction temporelle', example: 'Après qu’il a démissionné, le poste est resté vacant.', note: '+ INDICATIF (norme)' },
    { french: 'avant que', english: 'before', category: 'Conjonction temporelle', example: 'Avant qu’il ne parte, finissons ce dossier.', note: '+ subj. + ne explétif' },
    { french: 'jusqu’à ce que', english: 'until', category: 'Conjonction temporelle', example: 'Je vais attendre jusqu’à ce qu’il revienne.', note: '+ subjonctif' },
    { french: 'en attendant que', english: 'while waiting for', category: 'Conjonction temporelle', example: 'En attendant qu’il finisse, nous lirons.', note: '+ subjonctif' },
    { french: 'pendant que', english: 'while', category: 'Conjonction temporelle', example: 'Pendant qu’il dormait, je travaillais.', note: '+ indicatif' },
    { french: 'tandis que', english: 'while / whereas', category: 'Conjonction temporelle', example: 'Tandis que les uns protestaient, les autres signaient.', note: '[soutenu] + indicatif' },
    { french: 'une fois que', english: 'once', category: 'Conjonction temporelle', example: 'Une fois qu’il a compris, il a accepté.', note: '+ indicatif' },
    { french: 'à peine ... que', english: 'no sooner ... than', category: 'Conjonction temporelle', example: 'À peine était-il sorti que la pluie est tombée.', note: '[soutenu] + inversion fréquente' },
    { french: 'd’ici à ce que', english: 'by the time', category: 'Conjonction temporelle', example: 'D’ici à ce qu’il revienne, j’aurai tout fini.', note: '+ subjonctif' },
    { french: 'le lendemain', english: 'the next day', category: 'Repère temporel', example: 'Il a dit qu’il viendrait le lendemain.', note: 'remplace « demain » au passé' },
    { french: 'la veille', english: 'the day before', category: 'Repère temporel', example: 'Il a dit qu’il avait travaillé la veille.', note: 'remplace « hier » au passé' },
    { french: 'ce jour-là', english: 'that day', category: 'Repère temporel', example: 'Ce jour-là, il pleuvait.', note: 'remplace « aujourd’hui » au passé' },
    { french: 'à ce moment-là', english: 'at that moment', category: 'Repère temporel', example: 'À ce moment-là, personne ne le savait.', note: 'remplace « maintenant » au passé' },
    { french: 'antérieur(e) à', english: 'prior to', category: 'Métalangage temporel', example: 'L’action de la subordonnée est antérieure à celle du verbe principal.', note: '[soutenu]' },
    { french: 'simultané(e) à', english: 'simultaneous with', category: 'Métalangage temporel', example: 'Le procès était simultané à la révolte.', note: '[soutenu]' },
    { french: 'postérieur(e) à', english: 'subsequent to', category: 'Métalangage temporel', example: 'L’événement est postérieur à la signature du traité.', note: '[soutenu]' },
    { french: 'fonder', english: 'to found', category: 'Vocabulaire historique', example: 'La République fut fondée en 1870.' },
    { french: 'survivre à', english: 'to survive', category: 'Vocabulaire historique', example: 'Le régime survécut aux crises de la fin du siècle.' },
    { french: 'céder sur', english: 'to yield on', category: 'Vocabulaire politique', example: 'Il refusa de céder sur le drapeau.' },
    { french: 'ignorer (que)', english: 'to be unaware (that)', category: 'Verbe épistémique', example: 'Ils ignoraient qu’il préparait son discours.' },
    { french: 'être persuadé(e) que', english: 'to be convinced that', category: 'Verbe épistémique', example: 'Ils étaient persuadés qu’ils reviendraient au pouvoir.' },
    { french: 'prédire', english: 'to predict', category: 'Verbe épistémique', example: 'Personne ne prédisait que ce régime durerait.' },
    { french: 'reconstituer', english: 'to reconstruct', category: 'Vocabulaire historique', example: 'L’historien reconstitue les débats du cabinet.' },
    { french: 'paraître (livre)', english: 'to come out (book)', category: 'Vocabulaire culturel', example: 'Le livre paraît demain aux éditions Gallimard.' },
  ],
  culturalNotes: [
    {
      title: 'France Culture et la radio savante',
      content:
        "France Culture is the flagship intellectual radio of the French public broadcasting service. Its tone — measured, sustained, syntactically complex — is the gold standard of spoken formal French. Its long-format interviews routinely use the full concordance system: a present-tense interviewer, a historian or philosopher narrating in past tenses, embedded indirect speech with all its tense shifts. Listening to one podcast a week is the single most effective B2→C1 listening exercise.",
    },
    {
      title: "La dissertation historique au lycée",
      content:
        "French secondary education explicitly teaches the dissertation historique — a structured argued essay where tense concordance is a graded criterion. Students learn that a narrative paragraph must maintain a single temporal frame (typically imparfait + passé simple in writing, or imparfait + passé composé in spoken form) and that embedded clauses must respect the shifts taught in this lesson. The graded distinction is unique to French educational culture.",
    },
    {
      title: "La Troisième République",
      content:
        "Proclaimed in 1870 in the wake of military defeat, the Third Republic survived seventy years until June 1940 — making it the longest French republican regime to date. Its institutional inventions (école laïque, séparation des Églises et de l'État in 1905, conquest of empire, codification of human rights into political discourse) shape contemporary French civic identity. Antoine Beaulieu's fictional book in this dialogue represents a major recent strand of French historiography.",
    },
    {
      title: "Le subjonctif imparfait dans la littérature française",
      content:
        "Flaubert, Proust, Camus and Duras all use the subjonctif imparfait and PQP fluently — 'qu'il vînt', 'qu'il eût voulu'. By the late twentieth century the forms had retreated into the literary register only; speaking them in everyday French would mark the speaker as either pedantic or comic. The Académie française occasionally regrets the loss; most French speakers experience it as a sensible simplification.",
    },
  ],
  exercises: [
    {
      id: 'l45-tense-id',
      type: 'tense_choice',
      question: 'Choisissez le temps correct dans la subordonnée selon la concordance.',
      items: [
        {
          sentence: "Il dit qu'il ____ (venir) demain.",
          verb: 'venir',
          options: ['vient', 'viendra', 'viendrait', 'est venu'],
          correct_answer: 'viendra',
          explanation: 'Verbe principal au présent + action future → futur.',
        },
        {
          sentence: "Il a dit qu'il ____ (venir) le lendemain.",
          verb: 'venir',
          options: ['vient', 'viendra', 'viendrait', 'est venu'],
          correct_answer: 'viendrait',
          explanation: 'Verbe principal au passé + futur dans le passé → conditionnel présent.',
        },
        {
          sentence: "Il a expliqué qu'il ____ (travailler) toute la nuit.",
          verb: 'travailler',
          options: ['travaille', 'travaillait', 'avait travaillé', 'a travaillé'],
          correct_answer: 'avait travaillé',
          explanation: 'PC dans la principale + antériorité → PQP.',
        },
        {
          sentence: "Quand il ____ (arriver), nous commencerons la réunion.",
          verb: 'arriver',
          options: ['arrive', 'arrivera', 'arriverait', 'est arrivé'],
          correct_answer: 'arrivera',
          explanation: 'Après « quand » devant un événement futur → futur (et non présent comme en anglais).',
        },
        {
          sentence: "Avant qu'il ____ (partir), finissons ce dossier.",
          verb: 'partir',
          options: ['part', 'partira', 'parte', 'partît'],
          correct_answer: 'parte',
          explanation: '« Avant que » + subjonctif présent.',
        },
        {
          sentence: "Pendant qu'il ____ (dormir), j'ai préparé le repas.",
          verb: 'dormir',
          options: ['dort', 'dormait', 'a dormi', 'dorme'],
          correct_answer: 'dormait',
          explanation: 'Action simultanée à un passé → imparfait.',
        },
        {
          sentence: "Elle pensait que la République ____ (ne pas durer).",
          verb: 'durer',
          options: ['ne durait pas', 'ne durera pas', 'ne durerait pas', "n'a pas duré"],
          correct_answer: 'ne durerait pas',
          explanation: 'Verbe principal au passé + futur dans le passé → conditionnel présent.',
        },
        {
          sentence: "Une fois qu'il ____ (comprendre), il a accepté la proposition.",
          verb: 'comprendre',
          options: ['comprend', 'comprenait', 'a compris', 'avait compris'],
          correct_answer: 'a compris',
          explanation: '« Une fois que » + indicatif, action ponctuelle antérieure à la principale au PC → PC ou PQP. PC accepté.',
        },
        {
          sentence: "Jusqu'à ce qu'il ____ (revenir), je ne ferai rien.",
          verb: 'revenir',
          options: ['revient', 'reviendra', 'revienne', 'soit revenu'],
          correct_answer: 'revienne',
          explanation: '« Jusqu’à ce que » + subjonctif présent.',
        },
        {
          sentence: "Il aurait préféré que tu ____ (être) là plus tôt.",
          verb: 'être',
          options: ['es', 'étais', 'sois', 'aies été'],
          correct_answer: 'aies été',
          explanation: 'Conditionnel passé + subj. passé pour antériorité.',
        },
      ],
    },
    {
      id: 'l45-subj-concordance',
      type: 'mood_choice',
      question: "Subjonctif présent ou subjonctif passé selon la concordance ?",
      items: [
        {
          sentence: "Je veux qu'il [vienne / soit venu] avec nous demain.",
          verb: 'venir',
          indicative_form: 'qu’il vienne',
          subjunctive_form: 'qu’il soit venu',
          correct_answer: 'indicative',
          trigger: 'demain',
          explanation: 'Action future → subj. présent.',
        },
        {
          sentence: "Je suis ravi qu'elle [parte / soit partie] tôt ce matin.",
          verb: 'partir',
          indicative_form: 'qu’elle parte',
          subjunctive_form: 'qu’elle soit partie',
          correct_answer: 'subjunctive',
          trigger: 'ce matin',
          explanation: 'Action antérieure → subj. passé.',
        },
        {
          sentence: "Bien qu'il [travaille / ait travaillé] dur l'an dernier, il n'a pas réussi.",
          verb: 'travailler',
          indicative_form: 'qu’il travaille',
          subjunctive_form: 'qu’il ait travaillé',
          correct_answer: 'subjunctive',
          trigger: 'l’an dernier',
          explanation: 'Concession + antériorité → subj. passé.',
        },
        {
          sentence: "Il voulait que nous [partions / soyons partis] tout de suite.",
          verb: 'partir',
          indicative_form: 'que nous partions',
          subjunctive_form: 'que nous soyons partis',
          correct_answer: 'indicative',
          trigger: 'tout de suite',
          explanation: 'Action future simultanée au passé → subj. présent (concordance moderne).',
        },
        {
          sentence: "J'attendrai qu'il [finisse / ait fini] son rapport avant de réagir.",
          verb: 'finir',
          indicative_form: 'qu’il finisse',
          subjunctive_form: 'qu’il ait fini',
          correct_answer: 'subjunctive',
          trigger: 'avant de réagir',
          explanation: '« Avant de » signale antériorité → subj. passé.',
        },
        {
          sentence: "Je doute qu'il [comprenne / ait compris] hier ce que tu lui disais.",
          verb: 'comprendre',
          indicative_form: 'qu’il comprenne',
          subjunctive_form: 'qu’il ait compris',
          correct_answer: 'subjunctive',
          trigger: 'hier',
          explanation: 'Antériorité explicite → subj. passé.',
        },
      ],
    },
    {
      id: 'l45-shift-past',
      type: 'rewrite',
      question: 'Le verbe principal passe du présent au passé. Adaptez la subordonnée.',
      instruction_type: 'reported_speech',
      items: [
        {
          original: "Il dit qu'il travaille beaucoup.",
          expected: "Il a dit qu'il travaillait beaucoup.",
          explanation: 'Présent → imparfait.',
        },
        {
          original: "Il dit qu'il viendra demain.",
          expected: "Il a dit qu'il viendrait le lendemain.",
          explanation: 'Futur → conditionnel présent ; demain → le lendemain.',
        },
        {
          original: "Elle pense qu'elle a fini son rapport hier.",
          expected: "Elle pensait qu'elle avait fini son rapport la veille.",
          explanation: 'PC → PQP ; hier → la veille.',
        },
        {
          original: "Je crois qu'il sera prêt à temps.",
          expected: "Je croyais qu'il serait prêt à temps.",
          explanation: 'Futur → conditionnel présent.',
        },
        {
          original: "Nous savons qu'ils auront tout terminé avant midi.",
          expected: "Nous savions qu'ils auraient tout terminé avant midi.",
          explanation: 'Futur antérieur → conditionnel passé.',
        },
      ],
    },
    {
      id: 'l45-shift-present',
      type: 'rewrite',
      question: 'Le verbe principal passe du passé au présent. Adaptez la subordonnée.',
      instruction_type: 'reported_speech',
      items: [
        {
          original: "Il disait qu'il travaillait beaucoup.",
          expected: "Il dit qu'il travaille beaucoup.",
          explanation: 'Imparfait → présent.',
        },
        {
          original: "Il a expliqué qu'il viendrait le lendemain.",
          expected: "Il explique qu'il viendra demain.",
          explanation: 'Conditionnel présent → futur ; le lendemain → demain.',
        },
        {
          original: "Elle a affirmé qu'elle avait fini la veille.",
          expected: "Elle affirme qu'elle a fini hier.",
          explanation: 'PQP → PC ; la veille → hier.',
        },
        {
          original: "Nous pensions qu'il serait prêt.",
          expected: "Nous pensons qu'il sera prêt.",
          explanation: 'Conditionnel → futur.',
        },
      ],
    },
    {
      id: 'l45-error-correction',
      type: 'error_correction',
      question: "Corrigez les erreurs de concordance.",
      items: [
        {
          incorrect: "Il a dit qu'il viendra demain.",
          correct: "Il a dit qu'il viendrait le lendemain.",
          explanation: 'Verbe principal au passé → futur devient conditionnel ; demain → le lendemain.',
        },
        {
          incorrect: "Elle pensait qu'il a déjà fini.",
          correct: "Elle pensait qu'il avait déjà fini.",
          explanation: 'PC dans le récit au passé → PQP.',
        },
        {
          incorrect: "Quand il arrive demain, nous partirons.",
          correct: "Quand il arrivera demain, nous partirons.",
          explanation: 'Avec « quand » + action future, le français emploie le futur (contrairement à l’anglais).',
        },
        {
          incorrect: "Je veux qu'il vient avec moi.",
          correct: "Je veux qu'il vienne avec moi.",
          explanation: '« Vouloir que » exige le subjonctif.',
        },
        {
          incorrect: "Avant qu'il partira, dis-lui au revoir.",
          correct: "Avant qu'il (ne) parte, dis-lui au revoir.",
          explanation: '« Avant que » + subj. présent (avec ne explétif optionnel en soutenu).',
        },
      ],
    },
    {
      id: 'l45-paragraph-shift',
      type: 'rewrite',
      question:
        "Réécrivez ce paragraphe en remplaçant le verbe principal présent par un verbe au passé composé. Adaptez tous les temps embarqués.",
      instruction_type: 'reported_speech',
      items: [
        {
          original: "Je sais qu'il travaille beaucoup, qu'il a déjà rendu son rapport, qu'il viendra demain et qu'il aura terminé avant midi.",
          expected: "J'ai su qu'il travaillait beaucoup, qu'il avait déjà rendu son rapport, qu'il viendrait le lendemain et qu'il aurait terminé avant midi.",
          explanation: 'Présent → imparfait ; PC → PQP ; futur → conditionnel ; futur antérieur → conditionnel passé.',
        },
      ],
    },
    {
      id: 'l45-translation',
      type: 'translation',
      question:
        "Traduisez : 'He said that he would come the next day and that he would have finished his report by then.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Il a dit qu'il viendrait le lendemain et qu'il aurait terminé son rapport d'ici là.",
        "Il a dit qu'il viendrait le lendemain et qu'il aurait fini son rapport d'ici là.",
      ],
      explanation: 'PC + conditionnel + conditionnel passé.',
    },
    {
      id: 'l45-translation-2',
      type: 'translation',
      question: "Traduisez : 'I will wait until he comes back.'",
      direction: 'en_to_fr',
      correct_answer: [
        "J'attendrai jusqu'à ce qu'il revienne.",
        "Je vais attendre jusqu'à ce qu'il revienne.",
      ],
      explanation: '« Jusqu’à ce que » + subjonctif présent (action à venir, indéterminée).',
    },
    {
      id: 'l45-conjunction-sort',
      type: 'gender_sort',
      question: 'Classez chaque conjonction selon le mode qu’elle exige (indicatif = masculin, subjonctif = féminin).',
      items: [
        { word: 'quand', gender: 'masculine', article: 'indicatif' },
        { word: 'lorsque', gender: 'masculine', article: 'indicatif' },
        { word: 'dès que', gender: 'masculine', article: 'indicatif' },
        { word: 'après que', gender: 'masculine', article: 'indicatif' },
        { word: 'pendant que', gender: 'masculine', article: 'indicatif' },
        { word: 'tandis que', gender: 'masculine', article: 'indicatif' },
        { word: 'avant que', gender: 'feminine', article: 'subjonctif' },
        { word: 'jusqu’à ce que', gender: 'feminine', article: 'subjonctif' },
        { word: 'en attendant que', gender: 'feminine', article: 'subjonctif' },
        { word: 'd’ici à ce que', gender: 'feminine', article: 'subjonctif' },
      ],
      explanation:
        'Indicatif : les conjonctions qui inscrivent dans le réel (quand, dès que, après que, etc.). Subjonctif : celles qui anticipent ou bordent un événement non encore advenu (avant que, jusqu’à ce que, etc.).',
    },
    {
      id: 'l45-speaking',
      type: 'speaking_prompt',
      question:
        "Reconstituez en deux ou trois phrases votre journée d'hier, en utilisant au moins une concordance imparfait + plus-que-parfait, et une concordance passé composé + conditionnel.",
      model_answer:
        "Hier matin, je pensais que tout était sous contrôle, parce que j'avais terminé mon rapport la veille. Mais on m'a annoncé qu'une réunion aurait lieu à seize heures et que mon supérieur attendrait mes conclusions. À ce moment-là, j'ai compris que la journée ne se passerait pas comme je l'avais imaginée.",
      translation:
        "Yesterday morning, I thought everything was under control, because I had finished my report the day before. But I was told a meeting would take place at four and that my superior would expect my conclusions. At that moment, I realised the day wouldn't unfold the way I'd imagined.",
      tip: "Anchor your narrative with a single time marker (« hier matin »), then let the concordance shifts carry the rest. Avoid mixing present-tense narration into a past frame — that's the classic B1 leak.",
    },
  ],
}

export default function Lesson45Page() {
  return (
    <AdvancedLessonLayout
      lessonData={lessonData}
      lessonNumber={45}
      prevHref="/lessons/advanced/44"
      prevLabel="L'Infinitif Passé"
      nextHref="/lessons/advanced/46"
      nextLabel="Le Passé Simple"
    />
  )
}
