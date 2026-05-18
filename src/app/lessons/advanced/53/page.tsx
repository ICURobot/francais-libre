'use client'

import AdvancedLessonLayout, { AdvancedLessonData } from '../../../../../components/lessons/AdvancedLessonLayout'

const lessonData: AdvancedLessonData = {
  id: 53,
  title: 'Advanced Negation',
  title_fr: 'La Négation Avancée',
  level: 'B2',
  description:
    "Deploy the full palette of French negation — restrictive (ne...que), formal (ne...guère, ne...nul), emphatic (ne...aucun), and stacked (ne...plus jamais rien). Master the register implications of each, and read the dense negation of legal and academic French without losing the thread.",
  dialogue: {
    title: 'Analyse d’un texte juridique',
    context:
      "Hélène Cabanes (lawyer) and Bruno Rivière (journalist) discuss a recently published Constitutional Council decision over coffee, decoding its highly negative phrasing. Their exchanges showcase the full register range of advanced negation in formal French analysis.",
    register: 'courant',
    exchanges: [
      {
        speaker: 'Bruno',
        french: "Tu as lu la décision du Conseil constitutionnel rendue hier ? Je n'y comprends guère.",
        english: 'Have you read the Constitutional Council’s decision handed down yesterday? I scarcely understand it.',
      },
      {
        speaker: 'Hélène',
        french: "Oui. Mais c'est typique du langage juridique : aucune phrase n'est positive si elle peut être négative.",
        english: 'Yes. But it’s typical of legal language: no sentence is positive if it can be negative.',
      },
      {
        speaker: 'Bruno',
        french: "Regarde ce passage : « Nul ne saurait se prévaloir d'un droit acquis à l'erreur. » Ça veut dire quoi exactement ?",
        english: 'Look at this passage: "No one may invoke a vested right to be wrong." What exactly does that mean?',
      },
      {
        speaker: 'Hélène',
        french: "« Nul ne saurait » = personne ne peut. C'est très soutenu, presque archaïque, mais c'est la formule consacrée du juridique.",
        english: '"Nul ne saurait" = no one can. It’s very formal, almost archaic, but it’s the consecrated legal formula.',
      },
      {
        speaker: 'Bruno',
        french: "Et plus loin : « Le législateur n'a guère le choix dans la rédaction de l'article 6. » C'est moins fort que « ne...pas le choix » ?",
        english: 'And further on: "The legislator has scarcely a choice in drafting article 6." Is that weaker than "doesn’t have a choice"?',
      },
      {
        speaker: 'Hélène',
        french: "Plus nuancé. « Ne...guère » signale « presque pas » — c'est une concession partielle. Le Conseil dit que la marge est minime, sans dire qu'elle est nulle.",
        english: 'More nuanced. "Ne...guère" signals "almost not" — it’s a partial concession. The Council says the margin is minimal, without saying it’s nil.',
      },
      {
        speaker: 'Bruno',
        french: "Et ça : « Aucune disposition ne saurait être interprétée comme autorisant... » ?",
        english: 'And this: "No provision may be interpreted as authorising..."?',
      },
      {
        speaker: 'Hélène',
        french: "« Aucune... ne » avec « ne saurait » = impossibilité absolue. C'est le verrou typique des considérants juridiques.",
        english: '"Aucune... ne" with "ne saurait" = absolute impossibility. It’s the typical lock of legal considerations.',
      },
      {
        speaker: 'Bruno',
        french: "Et l'expression « ne...que » dans : « Le tribunal n'a fait que constater les faits » ?",
        english: 'And the expression "ne...que" in: "The court merely noted the facts"?',
      },
      {
        speaker: 'Hélène',
        french: "Ce n'est pas vraiment une négation, c'est une restriction. « Ne...que » = « seulement ». Plus soutenu que « seulement ». Très fréquent en droit.",
        english: 'It’s not really a negation, it’s a restriction. "Ne...que" = "only". More formal than "seulement". Very frequent in legal writing.',
      },
      {
        speaker: 'Bruno',
        french: "Et dans la phrase : « Le ministre a décidé sans que personne n'ait été consulté » ?",
        english: 'And in the sentence: "The minister decided without anyone having been consulted"?',
      },
      {
        speaker: 'Hélène',
        french: "« Sans que » + subjonctif + négation. Notez le « ne » explétif devant « ait » : il est facultatif en pratique mais courant en soutenu.",
        english: '"Sans que" + subjunctive + negation. Note the expletive "ne" before "ait": it’s optional in practice but common in formal style.',
      },
      {
        speaker: 'Bruno',
        french: "C'est dense. Mais d'un point de vue rhétorique, ces négations donnent de la force au texte. Elles posent des verrous.",
        english: 'It’s dense. But rhetorically, these negations give the text strength. They lay down locks.',
      },
      {
        speaker: 'Hélène',
        french: "Exactement. Le négatif délimite, l'affirmatif décrit. En droit français, on procède d'abord par exclusion : voici ce que la loi ne permet pas. Le reste se déduit.",
        english: 'Exactly. The negative delimits, the affirmative describes. In French law, one proceeds first by exclusion: here is what the law does not allow. The rest is deduced.',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Ne...que — la restriction (n’est pas une vraie négation)',
      explanation:
        "'Ne...que' expresses RESTRICTION, not negation: 'only / nothing but'. The 'que' is placed immediately before the restricted element. It is more formal than 'seulement' and the standard way to express restriction in written French. Watch the position: it modifies the element that follows it, not the verb.",
      examples: [
        "Je n'ai qu'un euro. (= seulement un euro)",
        "Il ne pense qu'à elle. (= seulement à elle)",
        "Je ne le ferai que demain. (= seulement demain)",
        "Le tribunal n'a fait que constater les faits.",
        "PLACEMENT : « que » devant l'élément restreint, jamais devant le verbe directement.",
      ],
      tip: "If you can replace 'ne...que' with 'seulement' and the sentence still makes sense, you have a restriction (not a negation). The two are interchangeable in meaning, but 'ne...que' is more formal in writing.",
    },
    {
      title: 'Ne...guère — la négation atténuée',
      explanation:
        "'Ne...guère' means 'hardly / scarcely', a softened or partial negation. It is firmly SOUTENU and appears mainly in literary, journalistic, and analytical writing — never in casual speech. Use it to suggest 'almost not' without committing to total denial.",
      examples: [
        "Il ne travaille guère. (= il travaille à peine)",
        "Le législateur n'a guère le choix.",
        "Cette mesure ne saurait guère convaincre.",
        "Je n'y comprends guère.",
        "REGISTER : soutenu / écrit ; éviter à l'oral courant.",
      ],
      tip: "Reserve 'ne...guère' for formal writing — using it in a casual conversation sounds affected. In speech, prefer 'pas trop' or 'à peine'.",
    },
    {
      title: 'Ne...aucun(e) — la négation totale',
      explanation:
        "'Ne...aucun(e)' = no / not any. The adjective AGREES in gender with its noun (aucun + masc., aucune + fém.) but is always SINGULAR. When 'aucun' is the SUBJECT, it precedes the verb and 'ne' comes between them: 'Aucun élève n'a répondu.' When it modifies a direct object, it follows 'ne': 'Je n'ai aucune idée.'",
      examples: [
        "Je n'ai aucune idée. (féminin singulier)",
        "Aucun élève n'a répondu. (subject + verb)",
        "Aucune disposition ne saurait être interprétée comme...",
        "Il n'a aucun regret.",
        "AGREEMENT : féminin → aucune ; masculin → aucun ; jamais pluriel.",
      ],
      tip: "Drop the indefinite article when using 'aucun' — never *aucun un problème, always 'aucun problème'. The 'aucun' replaces both the determiner and the negation.",
    },
    {
      title: 'Ne...nul(le) — la négation très formelle',
      explanation:
        "'Ne...nul(le)' is the most formal negation, almost archaic. It appears in legal language, proverbs, and literary writing. 'Nul' agrees with its noun and can also stand alone as a pronoun meaning 'no one'. 'Nul' usually precedes the noun or stands as subject — different positional habits from 'aucun'.",
      examples: [
        "Nul n'est censé ignorer la loi. (proverb — no one is supposed to ignore the law)",
        "Nul ne saurait se prévaloir de cette exception.",
        "Nulle décision ne peut être prise sans consultation.",
        "Sans nul doute. (without any doubt — fixed expression)",
        "REGISTER : soutenu / juridique / proverbial ; jamais courant.",
      ],
      tip: "'Nul' is reserved for the most elevated register. Use it once per legal text or essay for stylistic punctuation; using it more often becomes parody.",
    },
    {
      title: 'Négations doubles : ne...plus jamais / ne...plus rien / ne...jamais rien',
      explanation:
        "Multiple negation elements can stack in a fixed order: ne + (plus/jamais) + (rien/personne). The combinations express increasingly emphatic denial: 'never again', 'nothing anymore', 'never anything'. The 'ne' appears only once; the order is fixed and non-negotiable.",
      examples: [
        "Je ne ferai plus jamais ça. (never again)",
        "Il n'y a plus rien à faire. (nothing more to be done)",
        "Il ne voit plus personne. (no one anymore)",
        "Elle ne fait jamais rien. (never anything)",
        "ORDER : ne + adverbial neg. (plus/jamais) + nominal neg. (rien/personne).",
      ],
      tip: "Don't worry about the abstract order — these combinations are highly idiomatic and recur as set patterns. Memorise 'plus jamais', 'plus rien', 'jamais rien', 'plus personne' as units.",
    },
    {
      title: 'Sans que + subjonctif (avec ne explétif)',
      explanation:
        "'Sans que' introduces a subordinate clause expressing an absence or unfulfilled condition: 'without (someone) doing something'. The verb is in the subjunctive. Formal French also inserts a 'ne explétif' before the verb — this 'ne' carries no negative meaning; it is a stylistic marker.",
      examples: [
        "Il est parti sans que je le sache. (without my knowing)",
        "Sans que personne (n')ait été consulté, la décision a été prise.",
        "Sans qu'il (ne) s'en rende compte, il a manqué l'opportunité.",
        "Je l'ai aidé sans qu'il me le demande.",
        "NE EXPLÉTIF : optional in modern French; obligatory only in the most soutenu register.",
      ],
      tip: "If you skip the 'ne explétif' in spoken or informal written French, no one will object. In formal writing or DELF B2 production écrite, include it — it signals soutenu register awareness.",
    },
  ],
  vocabulary: [
    { french: 'ne... que', english: 'only', category: 'Restriction', example: "Je n'ai qu'un euro.", note: '[courant-soutenu]' },
    { french: 'ne... guère', english: 'hardly / scarcely', category: 'Négation atténuée', example: 'Il ne travaille guère.', note: '[soutenu]' },
    { french: 'ne... aucun(e)', english: 'no / not any', category: 'Négation totale', example: "Je n'ai aucune idée.", note: '[courant-soutenu]' },
    { french: 'ne... nul(le)', english: 'no / not any (very formal)', category: 'Négation très formelle', example: "Nul n'est censé ignorer la loi.", note: '[soutenu-archaïque/juridique]' },
    { french: 'ne... plus jamais', english: 'never again', category: 'Négation double', example: "Je ne ferai plus jamais ça.", note: '[courant]' },
    { french: 'ne... plus rien', english: 'nothing anymore', category: 'Négation double', example: "Il n'y a plus rien à faire.", note: '[courant]' },
    { french: 'ne... plus personne', english: 'no one anymore', category: 'Négation double', example: 'Il ne voit plus personne.', note: '[courant]' },
    { french: 'ne... jamais rien', english: 'never anything', category: 'Négation double', example: "Elle ne fait jamais rien le dimanche.", note: '[courant]' },
    { french: 'sans que + subj.', english: 'without (someone) doing', category: 'Conjonction négative', example: 'Il est parti sans que je le sache.', note: '+ subj. ± ne explétif' },
    { french: 'le ne explétif', english: 'expletive ne', category: 'Métalangage grammatical', example: 'Avant qu’il ne parte... (ne explétif)', note: '[soutenu]' },
    { french: 'ne saurait + inf.', english: 'cannot (formal)', category: 'Tournure soutenue', example: 'Nul ne saurait l’ignorer.', note: '[soutenu/juridique]' },
    { french: 'sans nul doute', english: 'without any doubt', category: 'Locution figée', example: 'Sans nul doute, il viendra.', note: '[soutenu] — fixed' },
    { french: 'd’aucuns', english: 'some (people)', category: 'Pronom soutenu', example: 'D’aucuns prétendent que la situation s’améliore.', note: '[soutenu/littéraire]' },
    { french: 'le législateur', english: 'the legislator', category: 'Vocabulaire juridique', example: 'Le législateur n’a pas tranché.' },
    { french: 'une disposition', english: 'a provision', category: 'Vocabulaire juridique', example: 'Cette disposition mérite clarification.' },
    { french: 'se prévaloir de', english: 'to invoke / claim', category: 'Verbe juridique', example: 'Il ne peut se prévaloir d’aucun droit.', note: '[soutenu]' },
    { french: 'un considérant', english: 'a recital (legal)', category: 'Vocabulaire juridique', example: 'Le considérant 7 précise le sens du texte.' },
    { french: 'un verrou (juridique)', english: 'a (legal) lock', category: 'Métaphore juridique', example: 'Ces dispositions constituent un verrou efficace.', note: '[journalistique]' },
    { french: 'l’erreur', english: 'error / mistake', category: 'Vocabulaire général', example: 'Nul n’a droit à l’erreur dans ce métier.' },
    { french: 'un droit acquis', english: 'a vested right', category: 'Vocabulaire juridique', example: 'Il n’existe pas de droit acquis à l’erreur.' },
    { french: 'interpréter', english: 'to interpret', category: 'Verbe juridique', example: 'Cette clause peut être interprétée différemment.' },
    { french: 'autoriser', english: 'to authorise', category: 'Verbe juridique', example: 'Aucune disposition n’autorise cette pratique.' },
    { french: 'délimiter', english: 'to delimit', category: 'Verbe analytique', example: 'Le texte délimite strictement le champ d’application.' },
    { french: 'rendre une décision', english: 'to hand down a decision', category: 'Locution juridique', example: 'Le tribunal a rendu sa décision hier.' },
    { french: 'la marge (de manœuvre)', english: 'leeway / room for manoeuvre', category: 'Vocabulaire politique', example: 'La marge de manœuvre du gouvernement est étroite.' },
    { french: 'nuancé(e)', english: 'nuanced', category: 'Adjectif analytique', example: 'Sa position est plus nuancée qu’il n’y paraît.' },
    { french: 'la consultation', english: 'the consultation', category: 'Vocabulaire institutionnel', example: 'La consultation préalable est obligatoire.' },
    { french: 'le Conseil constitutionnel', english: 'the Constitutional Council', category: 'Institution française', example: 'Le Conseil constitutionnel a validé la loi.' },
  ],
  culturalNotes: [
    {
      title: 'Le langage juridique français',
      content:
        "French legal French is saturated with advanced negation: ne...aucun, ne...nul, ne saurait, ne...que, sans que. Reading a Conseil d'État decision or a Cour de cassation arrêt is a masterclass in deploying negation rhetorically. The famous maxim 'Nul n'est censé ignorer la loi' encapsulates the style. The Code civil itself opens with such constructions — they are not stylistic flourishes but structural features of how French law expresses its norms.",
    },
    {
      title: 'L’Académie française et le « ne » dans l’oral',
      content:
        "Dropping the 'ne' in spoken negation ('Il vient pas' vs 'Il ne vient pas') is standard in everyday French and has been for over a century. The Académie française periodically expresses concern; linguists treat it as a stable feature of spoken French. The B2 learner should keep the 'ne' when writing or speaking in formal contexts, and may drop it (or keep it) in casual speech — both are accepted. Dropping it in formal writing, however, is jarring.",
    },
    {
      title: 'L’art rhétorique de la négation française',
      content:
        "French rhetorical tradition values negation as a delimiting tool. The technique 'délimitation par exclusion' (defining by exclusion) is taught in lycée philosophie classes: rather than describing what something IS, French analytical writing often proceeds by stating what it is NOT. This is why French essays, legal texts, and political speeches sound more negative to Anglophone ears than they actually are — the negativity is a structural feature, not a tonal one.",
    },
    {
      title: 'Le Conseil constitutionnel et le contrôle de constitutionnalité',
      content:
        "Founded in 1958 with the Fifth Republic, the Conseil constitutionnel reviews legislation for conformity with the Constitution. Since the 2008 reform introducing the 'question prioritaire de constitutionnalité' (QPC), it has become a more active institution. Its decisions, written in dense legal-administrative French, feature every advanced negation taught in this lesson. Reading one Conseil constitutionnel decision per month is excellent B2-to-C1 reading practice.",
    },
  ],
  exercises: [
    {
      id: 'l53-id-type',
      type: 'multiple_choice',
      question:
        "Quel type de négation contient la phrase suivante ? « Il ne travaille guère ces dernières semaines. »",
      options: ['Restriction (ne...que)', 'Négation atténuée (ne...guère)', 'Négation totale (ne...aucun)', 'Négation double'],
      correct_answer: 'Négation atténuée (ne...guère)',
      explanation: '« Ne...guère » = atténuation / « à peine ». Registre soutenu.',
    },
    {
      id: 'l53-substitute',
      type: 'rewrite',
      question:
        'Réécrivez chaque phrase en remplaçant « seulement » par « ne...que », ou « ne...pas beaucoup » par « ne...guère ».',
      instruction_type: 'reported_speech',
      items: [
        {
          original: "J'ai seulement vingt minutes.",
          expected: "Je n'ai que vingt minutes.",
          explanation: 'Seulement → ne...que (restriction).',
        },
        {
          original: 'Il pense seulement à elle.',
          expected: 'Il ne pense qu’à elle.',
          explanation: '« Que » devant l’élément restreint (à elle).',
        },
        {
          original: 'Le ministre n’apprécie pas beaucoup ces critiques.',
          expected: 'Le ministre n’apprécie guère ces critiques.',
          explanation: 'Ne...pas beaucoup → ne...guère (soutenu).',
        },
        {
          original: "Cette politique ne convainc pas beaucoup.",
          expected: 'Cette politique ne convainc guère.',
          explanation: 'Ne...pas beaucoup → ne...guère.',
        },
      ],
    },
    {
      id: 'l53-aucun-position',
      type: 'fill_blank',
      question: 'Complétez : « ____ élève ____ a répondu correctement. »',
      correct_answer: ['Aucun ne'],
      explanation: 'Sujet : aucun + verbe → « Aucun ___ ne ___ a répondu ». L’ordre est : aucun + sujet + ne + verbe.',
      hints: ['L’ordre est : « Aucun » avant le sujet, « ne » avant le verbe.'],
    },
    {
      id: 'l53-aucun-fillblank',
      type: 'fill_blank',
      question: 'Complétez avec « aucun » ou « aucune » : « Je n’ai ____ idée de ce qu’il fait. »',
      correct_answer: ['aucune'],
      explanation: 'idée est féminin → aucune.',
    },
    {
      id: 'l53-double-neg',
      type: 'rewrite',
      question: 'Combinez les négations selon le sens.',
      instruction_type: 'reported_speech',
      items: [
        {
          original: 'Plus + jamais : je ferai cela',
          expected: 'Je ne ferai plus jamais cela.',
          explanation: 'ne + plus + jamais (ordre fixe).',
        },
        {
          original: "Plus + rien : il y a à faire",
          expected: "Il n'y a plus rien à faire.",
          explanation: 'ne + plus + rien (ordre fixe).',
        },
        {
          original: 'Plus + personne : il voit',
          expected: 'Il ne voit plus personne.',
          explanation: 'ne + plus + personne (ordre fixe).',
        },
        {
          original: 'Jamais + rien : elle dit',
          expected: 'Elle ne dit jamais rien.',
          explanation: 'ne + jamais + rien (ordre fixe).',
        },
      ],
    },
    {
      id: 'l53-sans-que',
      type: 'rewrite',
      question:
        'Combinez les deux phrases avec « sans que » + subjonctif (avec ne explétif en registre soutenu).',
      instruction_type: 'reported_speech',
      items: [
        {
          original: "Il est parti. Je ne l'ai pas su.",
          expected: "Il est parti sans que je le sache.",
          explanation: '« Sans que » + subjonctif présent (savoir → sache).',
        },
        {
          original: "Le ministre a décidé. Personne n'a été consulté.",
          expected: "Le ministre a décidé sans que personne ne soit consulté.",
          explanation: '« Sans que » + subj. + ne explétif en soutenu.',
        },
        {
          original: "Elle est entrée. Personne ne l'a remarquée.",
          expected: "Elle est entrée sans que personne ne la remarque.",
          explanation: '« Sans que » + personne + ne explétif + subjonctif.',
        },
      ],
    },
    {
      id: 'l53-register-sort',
      type: 'register_sort',
      question: 'Classez chaque expression de négation selon son registre.',
      categories: ['soutenu', 'courant', 'familier'],
      items: [
        { expression: 'Je n’ai pas envie de venir.', correct_category: 'courant', explanation: 'Négation standard.' },
        { expression: "J'ai pas envie de venir.", correct_category: 'familier', explanation: 'Drop du « ne » → familier.' },
        { expression: "Il n'apprécie guère ces critiques.", correct_category: 'soutenu', explanation: 'Ne...guère = soutenu.' },
        { expression: "Nul ne saurait l'ignorer.", correct_category: 'soutenu', explanation: 'Nul + ne saurait = très soutenu.' },
        { expression: 'Il a aucune idée.', correct_category: 'familier', explanation: 'Drop du « ne » avec « aucune » = familier.' },
        { expression: "Il n'a aucune idée.", correct_category: 'courant', explanation: 'Aucun(e) standard.' },
        { expression: 'Sans nul doute, vous avez raison.', correct_category: 'soutenu', explanation: 'Sans nul doute = locution figée soutenue.' },
        { expression: "Sans qu'il ne s'en rende compte, il s'est trahi.", correct_category: 'soutenu', explanation: 'Sans que + ne explétif + subj. = soutenu.' },
        { expression: "Je n'ai qu'un euro.", correct_category: 'courant', explanation: 'Ne...que est courant-soutenu, normalement utilisé.' },
        { expression: "J'ai juste un euro.", correct_category: 'familier', explanation: '« Juste » à la place de « seulement » = familier.' },
        { expression: "Il n'y a plus rien à dire.", correct_category: 'courant', explanation: 'Double négation standard.' },
        { expression: "D'aucuns prétendent que la situation s'aggrave.", correct_category: 'soutenu', explanation: 'D’aucuns = pronom soutenu/littéraire.' },
      ],
    },
    {
      id: 'l53-error-correction',
      type: 'error_correction',
      question: 'Corrigez les erreurs (position, accord, ou registre incohérent).',
      items: [
        {
          incorrect: "Aucun élèves n'a répondu.",
          correct: "Aucun élève n'a répondu.",
          explanation: 'Aucun + singulier obligatoire.',
        },
        {
          incorrect: "Il a aucune idée du problème.",
          correct: "Il n'a aucune idée du problème.",
          explanation: 'Aucun(e) exige « ne » devant le verbe.',
        },
        {
          incorrect: "Je ne veux jamais plus rien faire.",
          correct: "Je ne veux plus jamais rien faire.",
          explanation: 'Ordre fixe : plus + jamais + rien.',
        },
        {
          incorrect: "Il est parti sans que je n'ai rien dit.",
          correct: "Il est parti sans que je dise rien.",
          explanation: 'Après « sans que » : subjonctif + « rien » remplace la négation totale. Pas de « ne...pas » redondant.',
        },
        {
          incorrect: "Il ne pense qu'à elle seulement.",
          correct: "Il ne pense qu'à elle.",
          explanation: 'Ne...que est déjà restrictif — « seulement » fait redondance.',
        },
      ],
    },
    {
      id: 'l53-translation',
      type: 'translation',
      question: "Traduisez (registre soutenu) : 'No one may invoke any right to be exempt from this rule.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Nul ne saurait se prévaloir d'aucun droit à être exempté de cette règle.",
        "Nul ne saurait invoquer aucun droit à être exempté de cette règle.",
      ],
      explanation: 'Nul ne saurait + ne...aucun = registre juridique soutenu.',
    },
    {
      id: 'l53-translation-2',
      type: 'translation',
      question: "Traduisez (registre courant) : 'He never says anything interesting anymore.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Il ne dit plus jamais rien d'intéressant.",
        "Il ne dit jamais plus rien d'intéressant.",
      ],
      explanation: 'Triple stacking : ne + plus + jamais + rien (deux ordres possibles selon usage).',
    },
    {
      id: 'l53-speaking',
      type: 'speaking_prompt',
      question:
        "Énoncez à voix haute un règlement ou une consigne formelle en utilisant au moins TROIS structures de négation avancée (ne...que, ne...aucun, ne...guère, ou sans que).",
      model_answer:
        "Aucune personne extérieure à l'établissement ne saurait pénétrer dans les salles de classe sans autorisation préalable. La direction n'a guère le choix : la sécurité des élèves prime sur toute autre considération. Aucune dérogation ne sera accordée sans que la demande n'ait été dûment motivée et transmise au secrétariat. Le règlement intérieur ne prévoit qu'une seule exception : les visites pédagogiques officielles.",
      translation:
        "No one outside the institution may enter classrooms without prior authorisation. The administration scarcely has a choice: student safety takes precedence over any other consideration. No derogation will be granted without the request having been duly justified and submitted to the secretariat. The internal regulation provides for only one exception: official educational visits.",
      tip: "Stack at least three different advanced negations — they give your formal speech a legal-administrative weight. But verify each one: registers (ne...guère is soutenu, ne...nul almost-archaic) should be consistent with the surrounding text.",
    },
  ],
}

export default function Lesson53Page() {
  return (
    <AdvancedLessonLayout
      lessonData={lessonData}
      lessonNumber={53}
      prevHref="/lessons/advanced/52"
      prevLabel="Les Registres de Langue"
      nextHref="/lessons/advanced/54"
      nextLabel="Le Discours Indirect Avancé"
    />
  )
}
