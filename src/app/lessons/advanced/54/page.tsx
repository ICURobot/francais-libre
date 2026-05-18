'use client'

import AdvancedLessonLayout, { AdvancedLessonData } from '../../../../../components/lessons/AdvancedLessonLayout'

const lessonData: AdvancedLessonData = {
  id: 54,
  title: 'Advanced Reported Speech',
  title_fr: 'Le Discours Indirect Avancé',
  level: 'B2',
  description:
    "Report complex speech with full back-shifting through B2 tenses, nuance verbs that distinguish admit / refute / concede / insist, and recognise the free indirect discourse that animates French literary fiction. This is the synthesis skill tested directly on the DELF B2 production écrite.",
  dialogue: {
    title: 'Synthèse d’une revue de presse',
    context:
      "Antoine Vauclair, producer of a France Inter radio synthesis programme, and Lina Hervé, his junior reporter, prepare a daily 'revue de presse' segment. They go through three transcripts of expert interviews and decide how to report each speaker's position accurately — with the right nuance verb and the correct tense back-shifting.",
    register: 'courant',
    exchanges: [
      {
        speaker: 'Antoine',
        french: "Bon, on a trois sources pour la synthèse de demain. La professeure d'économie, le syndicaliste, et l'ancien ministre. Comment tu rapportes chacun ?",
        english: 'Right, we have three sources for tomorrow’s synthesis. The economics professor, the union leader, and the former minister. How do you report each?',
      },
      {
        speaker: 'Lina',
        french: "Pour la professeure : elle a affirmé hier que la réforme aurait des effets négatifs sur la croissance. Donc « elle a affirmé que + conditionnel présent ».",
        english: 'For the professor: she asserted yesterday that the reform would have negative effects on growth. So "she asserted that + conditional present".',
      },
      {
        speaker: 'Antoine',
        french: "« Affirmer » est bien : elle a posé son point fermement. Si elle avait nuancé, on aurait choisi « estimer » ou « avancer ». Le verbe de rapport porte la nuance.",
        english: '"Affirmer" works: she made her point firmly. If she had nuanced, we would have chosen "estimer" or "avancer". The reporting verb carries the nuance.',
      },
      {
        speaker: 'Lina',
        french: "Pour le syndicaliste : il a soutenu que les chiffres avaient été manipulés. Donc on passe le passé composé en plus-que-parfait.",
        english: 'For the union leader: he maintained that the figures had been manipulated. So we shift the passé composé to pluperfect.',
      },
      {
        speaker: 'Antoine',
        french: "Bien. « Soutenir que » est plus engagé que « dire que » — il s'est tenu à sa position contre les contre-arguments. Note bien la concordance.",
        english: 'Good. "Soutenir que" is more committed than "dire que" — he stuck to his position against counter-arguments. Note the tense concordance.',
      },
      {
        speaker: 'Lina',
        french: "Pour l'ancien ministre : il a reconnu que des erreurs avaient été commises sous son mandat. C'est une concession.",
        english: 'For the former minister: he acknowledged that mistakes had been made under his tenure. It’s a concession.',
      },
      {
        speaker: 'Antoine',
        french: "« Reconnaître que » = concession. « Admettre que » serait équivalent. À distinguer de « avouer » qui serait plus fort, presque judiciaire.",
        english: '"Reconnaître que" = concession. "Admettre que" would be equivalent. To be distinguished from "avouer" which would be stronger, almost judicial.',
      },
      {
        speaker: 'Lina',
        french: "Et il a nié toute responsabilité personnelle. « Nier » : refus catégorique.",
        english: 'And he denied any personal responsibility. "Nier": categorical refusal.',
      },
      {
        speaker: 'Antoine',
        french: "Voilà. La nuance est claire : il reconnaît les erreurs collectives, il nie sa responsabilité personnelle. Tu peux mettre cette opposition en relief.",
        english: 'There. The nuance is clear: he acknowledges collective mistakes, he denies personal responsibility. You can highlight that contrast.',
      },
      {
        speaker: 'Lina',
        french: "Pour la conclusion, on cite le rapport du Sénat ? Il indique que des contrôles seront mis en place dès janvier prochain.",
        english: 'For the conclusion, do we cite the Senate report? It indicates that controls will be put in place from next January.',
      },
      {
        speaker: 'Antoine',
        french: "Oui. Mais attention : si le verbe rapporteur passe au passé, « seront mis » devient « seraient mis ». Discours indirect classique au B2.",
        english: 'Yes. But careful: if the reporting verb shifts to the past, "seront mis" becomes "seraient mis". Classic B2 indirect speech.',
      },
      {
        speaker: 'Lina',
        french: "Compris. Et le passage en discours indirect libre dans le commentaire d'ouverture, on le garde ?",
        english: 'Understood. And the passage of free indirect discourse in the opening commentary, do we keep it?',
      },
      {
        speaker: 'Antoine',
        french: "Garde-le, mais signale-le clairement à l'écoute. « Pour la professeure, la réforme serait une catastrophe. Comment en est-on arrivé là ? » — deuxième phrase = sa voix sans verbe rapporteur. Style indirect libre.",
        english: 'Keep it, but signal it clearly when reading. "For the professor, the reform would be a catastrophe. How did we get here?" — second sentence = her voice without a reporting verb. Free indirect discourse.',
      },
      {
        speaker: 'Lina',
        french: "C'est risqué à la radio — l'auditeur peut confondre l'opinion de la prof et celle du journaliste. On le marque par l'intonation ?",
        english: 'It’s risky on the radio — listeners may confuse the professor’s opinion with the journalist’s. We mark it with intonation?',
      },
      {
        speaker: 'Antoine',
        french: "Oui, par l'intonation et par le conditionnel du verbe (« serait »). Le conditionnel signale qu'on rapporte sans valider.",
        english: 'Yes, by intonation and by the conditional of the verb ("serait"). The conditional signals that we’re reporting without endorsing.',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Récapitulation des décalages temporels',
      explanation:
        "When the reporting verb is in the past (PC, imparfait, passé simple), the embedded clause shifts: présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel présent, futur antérieur → conditionnel passé. Conditionnel and PQP do NOT shift further — they are already in the past system. Subjonctif présent stays in modern usage; subjonctif passé stays.",
      examples: [
        "PRÉSENT → IMPARFAIT : « Je travaille » → Il a dit qu'il travaillait.",
        "PC → PQP : « J'ai fini » → Il a dit qu'il avait fini.",
        "FUTUR → COND. PRÉS. : « Je viendrai » → Il a dit qu'il viendrait.",
        "FUTUR ANT. → COND. PASSÉ : « J'aurai terminé » → Il a dit qu'il aurait terminé.",
        "INVARIANT : conditionnel reste conditionnel ; subjonctif reste subjonctif.",
      ],
      tip: "Memorise the four shifts as a single block. Practising them on isolated sentences won't help — practise on full paragraphs where multiple tenses interact.",
    },
    {
      title: 'Verbes rapporteurs et nuance',
      explanation:
        "B1 introduced dire / expliquer / ajouter. B2 expands the palette dramatically: each reporting verb signals the speaker's stance and the truth-value of the report. Mastering this palette is the difference between flat synthesis and analytically textured journalism.",
      examples: [
        "DÉCLARATION FERME : affirmer, soutenir, déclarer, prétendre",
        "CONCESSION : reconnaître, admettre, concéder",
        "REFUS : nier, réfuter, contester",
        "NUANCE : préciser, souligner, insister sur le fait que",
        "AJOUT : ajouter, compléter, poursuivre, conclure",
      ],
      tip: "Don't default to 'dire' — always ask: did the speaker assert (affirmer)? Concede (reconnaître)? Deny (nier)? Each verb embeds an analytical claim about the speaker's posture. Choose deliberately.",
    },
    {
      title: 'Décalages des marqueurs temporels',
      explanation:
        "When you shift to indirect speech in the past, time references also shift to match the new temporal anchor. 'Aujourd'hui' becomes 'ce jour-là'; 'hier' becomes 'la veille'; 'demain' becomes 'le lendemain'; 'maintenant' becomes 'à ce moment-là'.",
      examples: [
        "« Je viens aujourd'hui » → Il a dit qu'il venait ce jour-là.",
        "« J'ai fini hier » → Il a dit qu'il avait fini la veille.",
        "« Je viendrai demain » → Il a dit qu'il viendrait le lendemain.",
        "« Je travaille maintenant » → Il a dit qu'il travaillait à ce moment-là.",
        "« Il y a deux jours » → Il a dit qu'il l'avait fait deux jours auparavant.",
      ],
      tip: "Forgetting to shift the temporal markers is the most common B2 error in reported speech. The tense shift is automatic for many learners; the time-marker shift is not. Drill them together.",
    },
    {
      title: 'Discours rapporté avec subjonctif passé',
      explanation:
        "When the reported clause already contains a subjunctive trigger (emotion, doubt, obligation, concession), the subjonctif présent or passé in direct speech is maintained in indirect — no shift to imparfait du subjonctif (which is literary only).",
      examples: [
        "DIRECT : « Je veux qu'il vienne. » → INDIRECT : Il a dit qu'il voulait qu'il vienne. (subj. présent maintenu)",
        "DIRECT : « Je suis content qu'il soit venu. » → INDIRECT : Il a dit qu'il était content qu'il soit venu. (subj. passé maintenu)",
        "DIRECT : « Bien qu'il ait travaillé, il a échoué. » → INDIRECT : Il a expliqué que bien qu'il ait travaillé, il avait échoué.",
        "B2 RULE : never use subj. imparfait or subj. PQP in indirect speech — both are literary only.",
        "LITERARY RECOGNITION : « Il a dit qu'il voulait qu'il vînt » → reconnaissance seulement.",
      ],
      tip: "If you're tempted to write 'qu'il vînt' or 'qu'il fût venu' in reported speech, stop. Modern French keeps the subjonctif présent / passé. The literary forms are recognition-only at B2.",
    },
    {
      title: 'Le style indirect libre — reconnaissance',
      explanation:
        "Free indirect discourse (style indirect libre) blends a narrator's third-person voice with a character's inner speech, WITHOUT a reporting verb. The verbs typically appear in the imparfait or conditionnel; the deixis (here/there, now/then) stays with the character; questions and exclamations may appear without reporting frames. It is a literary technique, recognition-only at B2.",
      examples: [
        "EXEMPLE : « Elle était déçue. Il n'était donc pas venu. Pourquoi ce silence ? »",
        "ANALYSE : la 2e et 3e phrases sont les pensées d'elle, rapportées sans « elle pensait que ».",
        "MARQUEUR : conditionnel pour le futur anticipé (« il viendrait demain » = elle pensait qu'il viendrait demain)",
        "MARQUEUR : imparfait pour le présent de pensée",
        "FRÉQUENCE : Flaubert l'a inventé ; Proust, Camus, Duras, Modiano l'utilisent constamment.",
      ],
      tip: "When you read fiction or formal journalism and a sentence in the imparfait or conditionnel pops up without a clear reporting frame, ask: whose voice is this really? If it's a character's inner thought, you have free indirect discourse. This is a recognition skill — don't try to produce it at B2.",
    },
  ],
  vocabulary: [
    { french: 'affirmer (que)', english: 'to assert (that)', category: 'Verbe rapporteur — affirmation', example: 'Il a affirmé qu’il avait toujours dit la vérité.', note: '[courant-soutenu] ferme' },
    { french: 'soutenir (que)', english: 'to maintain (that)', category: 'Verbe rapporteur — affirmation', example: 'Elle soutient que les chiffres ont été manipulés.', note: '[courant-soutenu] engagé' },
    { french: 'déclarer (que)', english: 'to declare (that)', category: 'Verbe rapporteur — affirmation', example: 'Le ministre a déclaré que la réforme entrerait en vigueur.', note: '[soutenu] officiel' },
    { french: 'prétendre (que)', english: 'to claim (that)', category: 'Verbe rapporteur — affirmation', example: 'Il prétend qu’il n’était pas au courant.', note: '[courant] avec doute implicite' },
    { french: 'nier (que)', english: 'to deny (that)', category: 'Verbe rapporteur — négation', example: 'Il nie qu’il ait jamais reçu cette lettre.', note: 'parfois + subj.' },
    { french: 'réfuter (que)', english: 'to refute (that)', category: 'Verbe rapporteur — négation', example: 'L’auteur réfute l’interprétation qui en est faite.', note: '[soutenu]' },
    { french: 'contester (que)', english: 'to contest (that)', category: 'Verbe rapporteur — négation', example: 'Elle conteste que la procédure ait été régulière.', note: '[soutenu] + subj.' },
    { french: 'reconnaître (que)', english: 'to acknowledge (that)', category: 'Verbe rapporteur — concession', example: 'Le ministre a reconnu que des erreurs avaient été commises.', note: '[courant-soutenu]' },
    { french: 'admettre (que)', english: 'to admit (that)', category: 'Verbe rapporteur — concession', example: 'Elle a admis qu’elle s’était trompée.', note: '[courant-soutenu]' },
    { french: 'avouer (que)', english: 'to confess (that)', category: 'Verbe rapporteur — concession forte', example: 'Il a avoué qu’il avait menti.', note: '[courant] plus fort qu’admettre' },
    { french: 'concéder (que)', english: 'to concede (that)', category: 'Verbe rapporteur — concession', example: "Il concède que la critique est partiellement fondée.", note: '[soutenu]' },
    { french: 'préciser (que)', english: 'to clarify / specify (that)', category: 'Verbe rapporteur — nuance', example: 'L’avocate a précisé que cela ne concernait pas son client.', note: '[soutenu]' },
    { french: 'souligner (que)', english: 'to underline (that)', category: 'Verbe rapporteur — nuance', example: 'Le rapporteur souligne que ces données sont préliminaires.', note: '[soutenu]' },
    { french: 'insister sur le fait que', english: 'to insist (that)', category: 'Verbe rapporteur — emphase', example: 'Il a insisté sur le fait que rien n’avait été dissimulé.', note: '[soutenu]' },
    { french: 'estimer (que)', english: 'to consider / judge (that)', category: 'Verbe rapporteur — jugement', example: 'L’expert estime que les délais seront tenus.', note: '[soutenu]' },
    { french: 'juger (que)', english: 'to judge (that)', category: 'Verbe rapporteur — jugement', example: 'La commission juge que le dossier est complet.', note: '[soutenu]' },
    { french: 'avancer (que)', english: 'to put forward (that)', category: 'Verbe rapporteur — hypothèse', example: 'L’auteure avance que la crise serait structurelle.', note: '[soutenu]' },
    { french: 'le lendemain', english: 'the next day', category: 'Marqueur temporel décalé', example: 'Il a dit qu’il viendrait le lendemain.', note: 'remplace « demain »' },
    { french: 'la veille', english: 'the day before', category: 'Marqueur temporel décalé', example: 'Elle a dit qu’elle avait travaillé la veille.', note: 'remplace « hier »' },
    { french: 'ce jour-là', english: 'that day', category: 'Marqueur temporel décalé', example: 'Il a affirmé qu’il pleuvait ce jour-là.', note: 'remplace « aujourd’hui »' },
    { french: 'à ce moment-là', english: 'at that moment', category: 'Marqueur temporel décalé', example: 'Il pensait qu’il travaillait à ce moment-là.', note: 'remplace « maintenant »' },
    { french: 'deux jours auparavant', english: 'two days earlier', category: 'Marqueur temporel décalé', example: 'Il a dit qu’il l’avait vue deux jours auparavant.', note: 'remplace « il y a deux jours »' },
    { french: 'le mois suivant', english: 'the following month', category: 'Marqueur temporel décalé', example: 'Il prévoyait de partir le mois suivant.', note: 'remplace « le mois prochain »' },
    { french: 'la semaine précédente', english: 'the previous week', category: 'Marqueur temporel décalé', example: 'Il a expliqué qu’il était revenu la semaine précédente.', note: 'remplace « la semaine dernière »' },
    { french: 'le style indirect libre', english: 'free indirect discourse', category: 'Métalangage', example: 'Le style indirect libre fond la voix du narrateur et celle du personnage.', note: '[soutenu/littéraire]' },
    { french: 'la revue de presse', english: 'the press review', category: 'Vocabulaire journalistique', example: 'La revue de presse de France Inter passe à 8h30.' },
    { french: 'la synthèse', english: 'the synthesis', category: 'Vocabulaire journalistique', example: 'La synthèse résume les positions de trois experts.' },
    { french: 'un verbe rapporteur', english: 'a reporting verb', category: 'Métalangage grammatical', example: 'Le verbe rapporteur porte la nuance.' },
    { french: 'un syndicaliste', english: 'a union leader', category: 'Vocabulaire politique', example: 'Le syndicaliste a soutenu la grève.' },
    { french: 'le mandat', english: 'the tenure / mandate', category: 'Vocabulaire politique', example: 'Sous son mandat, des erreurs ont été commises.' },
  ],
  culturalNotes: [
    {
      title: 'France Inter et la revue de presse',
      content:
        "France Inter, the most-listened-to French public radio station, broadcasts a 'revue de presse' every morning at 8:30. The presenter (currently Hélène Jouan) synthesises positions from several newspapers in 6 minutes — a masterclass in compressed reported speech with the full B2 nuance verb palette. Listening to it daily develops both vocabulary and the rhythmic cadence of indirect synthesis. The transcripts are archived on the France Inter site.",
    },
    {
      title: 'Le style indirect libre dans la tradition littéraire française',
      content:
        "Flaubert invented modern free indirect discourse in Madame Bovary (1857) — letting Emma's thoughts merge into the third-person narrative without explicit reporting frames. Proust extended the technique in À la recherche du temps perdu. Contemporary novelists like Marie NDiaye, Annie Ernaux, and Mathias Énard use it constantly. Recognising it unlocks much of French literary fiction; misreading it means misunderstanding whose voice is speaking.",
    },
    {
      title: 'La synthèse de documents au DELF B2',
      content:
        "The DELF B2 production écrite frequently asks candidates to 'synthesise the positions presented in the three documents'. This is the hardest task on the exam — it requires accurately reporting 3-4 different speakers' positions WITHOUT distortion, using nuance verbs to signal each speaker's stance. The advanced reported speech taught in this lesson is therefore directly examined.",
    },
    {
      title: "L'ethique du verbe rapporteur en journalisme",
      content:
        "French press style guides (Le Monde's, Libération's) discuss extensively which reporting verb to use for what context. 'Affirmer' vs 'prétendre' is a politically charged choice: the second implies doubt. 'Reconnaître' vs 'avouer' carries judicial connotations. The reporting verb is therefore part of journalistic objectivity — choose 'declared' for a press conference, 'claimed' if you doubt the speaker, 'admitted' if there was social pressure to deny. Mastering this nuance is the threshold of literary-quality French.",
    },
  ],
  exercises: [
    {
      id: 'l54-tense-shift',
      type: 'rewrite',
      question:
        'Passez chaque phrase au discours indirect avec verbe rapporteur au passé composé.',
      instruction_type: 'reported_speech',
      items: [
        {
          original: "« Je travaille beaucoup », dit-il.",
          expected: "Il a dit qu'il travaillait beaucoup.",
          explanation: 'Présent → imparfait.',
        },
        {
          original: "« J'ai fini mon rapport hier », explique-t-elle.",
          expected: "Elle a expliqué qu'elle avait fini son rapport la veille.",
          explanation: 'PC → PQP ; hier → la veille.',
        },
        {
          original: "« Je viendrai demain », promet-il.",
          expected: "Il a promis qu'il viendrait le lendemain.",
          explanation: 'Futur → conditionnel ; demain → le lendemain.',
        },
        {
          original: "« J'aurai terminé avant midi », assure-t-elle.",
          expected: "Elle a assuré qu'elle aurait terminé avant midi.",
          explanation: 'Futur antérieur → conditionnel passé.',
        },
        {
          original: "« Je suis content qu'il soit venu », confie-t-il.",
          expected: "Il a confié qu'il était content qu'il soit venu.",
          explanation: 'Subj. passé maintenu en moderne ; verbe principal → imparfait.',
        },
      ],
    },
    {
      id: 'l54-nuance-verbs',
      type: 'matching',
      question: 'Associez chaque verbe rapporteur à sa nuance.',
      pairs: [
        { french: 'affirmer', english: 'déclaration ferme' },
        { french: 'prétendre', english: 'avec doute implicite' },
        { french: 'soutenir', english: 'engagement contre contre-arguments' },
        { french: 'nier', english: 'refus catégorique' },
        { french: 'réfuter', english: 'contestation argumentée (soutenu)' },
        { french: 'reconnaître', english: 'concession' },
        { french: 'avouer', english: 'concession sous pression' },
        { french: 'concéder', english: 'concession soutenue' },
        { french: 'préciser', english: 'nuance / clarification' },
        { french: 'souligner', english: 'mise en relief d’un point' },
      ],
      explanation: 'Chaque verbe rapporteur emporte une analyse de la posture du locuteur.',
    },
    {
      id: 'l54-choose-verb',
      type: 'tense_choice',
      question: "Quel verbe rapporteur convient le mieux selon le contexte ?",
      explanation: 'Adaptez le verbe à la nuance que vous voulez communiquer.',
      items: [
        {
          sentence: "Le ministre a ____ que des erreurs avaient été commises sous son mandat. (concession sans pression)",
          verb: 'reconnaître',
          options: ['reconnu', 'nié', 'prétendu'],
          correct_answer: 'reconnu',
          explanation: 'Concession claire → reconnaître.',
        },
        {
          sentence: "L'accusé a ____ avoir participé au cambriolage. (concession sous pression judiciaire)",
          verb: 'avouer',
          options: ['avoué', 'précisé', 'soutenu'],
          correct_answer: 'avoué',
          explanation: 'Avouer = concession sous pression, registre judiciaire.',
        },
        {
          sentence: "L'auteure ____ l'interprétation simpliste qui est faite de son livre. (contestation argumentée)",
          verb: 'réfuter',
          options: ['réfute', 'admet', 'reconnaît'],
          correct_answer: 'réfute',
          explanation: 'Réfuter = contestation argumentée, soutenu.',
        },
        {
          sentence: "Le suspect ____ avoir été présent sur les lieux. (refus catégorique)",
          verb: 'nier',
          options: ['nie', 'concède', 'précise'],
          correct_answer: 'nie',
          explanation: 'Nier = refus catégorique.',
        },
        {
          sentence: "L'avocate a ____ que cela ne concernait pas son client. (clarification précise)",
          verb: 'préciser',
          options: ['précisé', 'affirmé', 'avoué'],
          correct_answer: 'précisé',
          explanation: 'Préciser = clarification.',
        },
      ],
    },
    {
      id: 'l54-paragraph-shift',
      type: 'rewrite',
      question: 'Réécrivez le paragraphe au discours indirect avec verbe rapporteur « Elle a déclaré que… ».',
      instruction_type: 'reported_speech',
      items: [
        {
          original: "« Je travaille sur ce projet depuis deux ans. J'ai obtenu des résultats encourageants la semaine dernière. Je publierai un article le mois prochain. »",
          expected: "Elle a déclaré qu'elle travaillait sur ce projet depuis deux ans, qu'elle avait obtenu des résultats encourageants la semaine précédente, et qu'elle publierait un article le mois suivant.",
          explanation: 'Présent → imparfait ; PC → PQP ; futur → conditionnel ; marqueurs temporels décalés.',
        },
      ],
    },
    {
      id: 'l54-time-shift',
      type: 'matching',
      question: 'Associez chaque marqueur temporel direct à son équivalent en discours indirect (verbe rapporteur au passé).',
      pairs: [
        { french: 'aujourd’hui', english: 'ce jour-là' },
        { french: 'hier', english: 'la veille' },
        { french: 'demain', english: 'le lendemain' },
        { french: 'maintenant', english: 'à ce moment-là' },
        { french: 'la semaine dernière', english: 'la semaine précédente' },
        { french: 'la semaine prochaine', english: 'la semaine suivante' },
        { french: 'il y a deux jours', english: 'deux jours auparavant' },
        { french: 'dans trois jours', english: 'trois jours plus tard' },
      ],
      explanation: 'Décalage automatique des marqueurs temporels.',
    },
    {
      id: 'l54-style-indirect-libre',
      type: 'multiple_choice',
      question:
        "Dans le passage : « Elle était déçue. Il n'était donc pas venu. Pourquoi ce silence ? » — quelle phrase relève du STYLE INDIRECT LIBRE ?",
      options: [
        'Seulement la première (Elle était déçue).',
        'Seulement la deuxième (Il n’était donc pas venu).',
        'La deuxième et la troisième (sa pensée intérieure sans verbe rapporteur).',
        'Aucune — c’est du discours direct.',
      ],
      correct_answer: 'La deuxième et la troisième (sa pensée intérieure sans verbe rapporteur).',
      explanation: 'La 2e et 3e phrases sont les pensées d’elle, rapportées sans verbe rapporteur — c’est le style indirect libre.',
    },
    {
      id: 'l54-fillblank-tense',
      type: 'fill_blank',
      question:
        "Complétez : « Il a précisé que les contrôles ____ (être mis) en place dès janvier prochain. »",
      correct_answer: ['seraient mis'],
      explanation: 'Verbe rapporteur au PC + futur passif (seront mis) → conditionnel présent passif (seraient mis).',
    },
    {
      id: 'l54-fillblank-pqp',
      type: 'fill_blank',
      question:
        "Complétez : « Elle a affirmé qu'elle ____ (rencontrer) le ministre la veille. »",
      correct_answer: ['avait rencontré'],
      explanation: 'PC dans direct → PQP en indirect (rencontrer = avoir).',
    },
    {
      id: 'l54-error-correction',
      type: 'error_correction',
      question: 'Corrigez les erreurs de concordance ou de marqueur temporel.',
      items: [
        {
          incorrect: "Il a dit qu'il vient demain.",
          correct: "Il a dit qu'il viendrait le lendemain.",
          explanation: 'Futur → conditionnel ; demain → le lendemain.',
        },
        {
          incorrect: "Elle a expliqué qu'elle a fini hier.",
          correct: "Elle a expliqué qu'elle avait fini la veille.",
          explanation: 'PC → PQP ; hier → la veille.',
        },
        {
          incorrect: "Il a nié qu'il a participé à la réunion.",
          correct: "Il a nié avoir participé à la réunion.",
          explanation: 'Nier avec sujet identique → infinitif passé (plus naturel) ou subj. passé.',
        },
        {
          incorrect: "Il a soutenu que les chiffres sont manipulés.",
          correct: "Il a soutenu que les chiffres avaient été manipulés.",
          explanation: 'Présent passif → imparfait ou PQP passif selon antériorité.',
        },
        {
          incorrect: "Elle a dit qu'elle veut qu'il vînt.",
          correct: "Elle a dit qu'elle voulait qu'il vienne.",
          explanation: 'Subj. imparfait (vînt) = littéraire seulement ; B2 moderne = subj. présent.',
        },
      ],
    },
    {
      id: 'l54-translation',
      type: 'translation',
      question: "Traduisez : 'The professor maintained that the reform would have negative effects on growth.'",
      direction: 'en_to_fr',
      correct_answer: [
        "La professeure a soutenu que la réforme aurait des effets négatifs sur la croissance.",
        "La professeure a soutenu que la réforme aurait des conséquences négatives sur la croissance.",
      ],
      explanation: 'Soutenir + concordance : « would have » → aurait (conditionnel présent).',
    },
    {
      id: 'l54-translation-2',
      type: 'translation',
      question: "Traduisez : 'He acknowledged that mistakes had been made under his tenure.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Il a reconnu que des erreurs avaient été commises sous son mandat.",
        "Il a reconnu que des fautes avaient été commises sous son mandat.",
      ],
      explanation: 'Reconnaître + PQP passif (avaient été commises).',
    },
    {
      id: 'l54-speaking',
      type: 'speaking_prompt',
      question:
        "Synthétisez à voix haute trois positions différentes sur un sujet d'actualité, en utilisant trois verbes rapporteurs distincts (affirmer / nuancer / contester).",
      model_answer:
        "Sur la question du télétravail, les positions divergent. La directrice des ressources humaines a affirmé hier que la productivité s'était maintenue malgré la généralisation du travail à distance. Un économiste a toutefois précisé que les chiffres masquaient de fortes disparités sectorielles. Les syndicats, eux, contestent que la généralisation ait amélioré le bien-être : ils soulignent au contraire l'isolement croissant des salariés. Trois lectures du même phénomène, trois verbes rapporteurs différents.",
      translation:
        "On the question of teleworking, positions diverge. The HR director asserted yesterday that productivity had been maintained despite the generalisation of remote work. An economist, however, clarified that the figures masked significant sector disparities. Unions, for their part, contest that the generalisation has improved well-being: they emphasise on the contrary the growing isolation of employees. Three readings of the same phenomenon, three different reporting verbs.",
      tip: "Pick verbs that reveal stance, not just speech. 'Préciser' carries clarification; 'contester' carries opposition; 'souligner' carries emphasis. Each verb is a mini-analysis of the speaker's posture — that's the journalistic technique to internalise.",
    },
  ],
}

export default function Lesson54Page() {
  return (
    <AdvancedLessonLayout
      lessonData={lessonData}
      lessonNumber={54}
      prevHref="/lessons/advanced/53"
      prevLabel="La Négation Avancée"
      nextHref="/lessons/advanced/55"
      nextLabel="Les Constructions Impersonnelles"
    />
  )
}
