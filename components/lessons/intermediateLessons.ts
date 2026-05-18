import type { Exercise } from '../../lib/lessons/lessonTypes'
import type { IntermediateLessonData } from './IntermediateLessonLayout'

// =============================================================================
// RICH LESSONS REGISTRY
// -----------------------------------------------------------------------------
// Each entry is a fully authored lesson with real English translations,
// per-line pronunciation guides, multiple grammar points where appropriate,
// lesson-specific vocabulary, cultural notes, and lesson-specific exercises.
// Lessons not yet migrated continue to use the seed-based generator below
// (which is being phased out).
// =============================================================================

const lesson27: IntermediateLessonData = {
  id: 27,
  title: 'The Subjunctive I',
  title_fr: 'Le Subjonctif I',
  level: 'B1',
  description:
    'Form the present subjunctive of regular and key irregular verbs, and use it after il faut que to express necessity in a French workplace context.',
  dialogue: {
    title: 'Dix jours avant le lancement',
    context:
      'Camille (cheffe de projet) and Nassim (développeur) sit down in their startup’s open space to align on what absolutely has to happen before a product launch deadline. Every obligation is expressed with il faut que + subjunctive.',
    exchanges: [
      {
        speaker: 'Camille',
        french: 'Bon, le lancement est dans dix jours. Il faut que nous soyons réalistes.',
        english: 'Right, the launch is in ten days. We need to be realistic.',
        pronunciation: 'bohn, luh lahn-suh-MAHN ay dahn dee ZHOOR. eel foh kuh noo swah-YOHN ray-ah-LEEST',
      },
      {
        speaker: 'Nassim',
        french: 'D’accord. Il faut que je finisse la page d’accueil aujourd’hui.',
        english: 'Got it. I need to finish the homepage today.',
        pronunciation: 'dah-KOR. eel foh kuh zhuh fee-NEES lah pahzh dah-KUHY oh-zhoor-DWEE',
      },
      {
        speaker: 'Camille',
        french: 'Et il faut que Léa relise les textes avant ce soir.',
        english: 'And Léa needs to proofread the texts before tonight.',
        pronunciation: 'ay eel foh kuh lay-AH ruh-LEEZ lay TEKST ah-VAHN suh SWAHR',
      },
      {
        speaker: 'Nassim',
        french: 'Tu veux que je lui envoie un message tout de suite ?',
        english: 'Want me to send her a message right away?',
        pronunciation: 'tew vuh kuh zhuh lwee ahn-VWAH ahn meh-SAHZH too duh SWEET',
      },
      {
        speaker: 'Camille',
        french: 'Oui, mais il faut que tu sois précis. On manque vraiment de temps.',
        english: 'Yes, but you need to be specific. We’re really short on time.',
        pronunciation: 'wee, may eel foh kuh tew swah pray-SEE. ohn mahnk vray-MAHN duh TAHN',
      },
      {
        speaker: 'Nassim',
        french: 'Compris. Et pour le serveur ? Il faut que Karim fasse les tests aujourd’hui.',
        english: 'Got it. And what about the server? Karim has to run the tests today.',
        pronunciation: 'kohn-PREE. ay poor luh sair-VURR? eel foh kuh kah-REEM fahss lay TEST oh-zhoor-DWEE',
      },
      {
        speaker: 'Camille',
        french: 'Exactement. Il faut aussi qu’il ait le rapport du QA demain matin.',
        english: 'Exactly. He also needs to have the QA report tomorrow morning.',
        pronunciation: 'eg-zak-tuh-MAHN. eel foh oh-SEE keel ay luh rah-POR dew kew-AH duh-MAHN mah-TAHN',
      },
      {
        speaker: 'Nassim',
        french: 'Et le client ? Il faut que nous lui parlions cette semaine ?',
        english: 'And the client? Do we need to talk to them this week?',
        pronunciation: 'ay luh klee-AHN? eel foh kuh noo lwee parl-YOHN set suh-MEN',
      },
      {
        speaker: 'Camille',
        french: 'Il faut qu’on lui dise où nous en sommes. Sois honnête, ne promets rien.',
        english: 'We need to tell them where we stand. Be honest, don’t promise anything.',
        pronunciation: 'eel foh kohn lwee DEEZ oo noo zahn SOHM. swah oh-NET, nuh proh-MAY ree-AHN',
      },
      {
        speaker: 'Nassim',
        french: 'D’accord. Il faut juste que nous ayons une décision claire avant l’appel.',
        english: 'OK. We just need to have a clear decision before the call.',
        pronunciation: 'dah-KOR. eel foh zhewst kuh noo zay-YOHN ewn day-see-ZYOHN klair ah-VAHN lah-PEL',
      },
      {
        speaker: 'Camille',
        french: 'Tu as raison. Il faut que je voie Léa maintenant, en fait.',
        english: 'You’re right. I actually need to see Léa right now.',
        pronunciation: 'tew ah ray-ZOHN. eel foh kuh zhuh VWAH lay-AH man-tuh-NAHN, ahn FET',
      },
      {
        speaker: 'Nassim',
        french: 'Vas-y. Il faut que toute l’équipe sache que le compte à rebours est lancé.',
        english: 'Go ahead. The whole team needs to know the countdown has started.',
        pronunciation: 'vah-ZEE. eel foh kuh toot lay-KEEP sahsh kuh luh kohnt-ah-ruh-BOOR ay lahn-SAY',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Forming the present subjunctive — the ils-stem rule',
      explanation:
        'For almost all verbs, take the 3rd-person plural (ils) form of the present indicative, drop the -ent, and add the subjunctive endings: -e, -es, -e, -ions, -iez, -ent. The nous and vous forms are identical to the imparfait — everything else has its own shape. The subjunctive only ever appears in a subordinate clause introduced by que.',
      examples: [
        'RULE: ils parlent → que je parle, que tu parles, qu’il parle, que nous parlions, que vous parliez, qu’ils parlent',
        'RULE: ils finissent → que je finisse, que nous finissions, qu’ils finissent',
        'RULE: ils prennent → que je prenne, que nous prenions, qu’ils prennent (note the stem change between singular and nous/vous)',
        'EXAMPLE: Il faut que tu finisses le rapport.',
        'CONTRAST: Indicative «tu finis» vs subjunctive «que tu finisses» — only one extra «s».',
      ],
      tip: 'The je/tu/il/ils subjunctive of -er verbs sounds identical to the present indicative. Don’t look for a different verb form — look for the trigger word (here, «il faut que»). The trigger is what tells you the mood.',
    },
    {
      title: 'The seven irregular subjunctives you must memorise',
      explanation:
        'A small group of high-frequency verbs do not follow the ils-stem rule and have their own subjunctive stems. They are être, avoir, aller, faire, pouvoir, vouloir, savoir. You will use these constantly — learn them as a block. The endings (-e, -es, -e, -ions, -iez, -ent) are the same for all of them except être and avoir, which keep traditional irregular endings.',
      examples: [
        'être: que je sois, que tu sois, qu’il soit, que nous soyons, que vous soyez, qu’ils soient',
        'avoir: que j’aie, que tu aies, qu’il ait, que nous ayons, que vous ayez, qu’ils aient',
        'aller: que j’aille, que nous allions, qu’ils aillent',
        'faire: que je fasse, que nous fassions, qu’ils fassent',
        'pouvoir: que je puisse / vouloir: que je veuille / savoir: que je sache',
      ],
      tip: 'Notice that être (sois/soit) and avoir (aie/ait) share endings with NO other verb. Treat them as a pair: every irregular paradigm starts here.',
    },
    {
      title: '«Il faut que» — your first and most reliable subjunctive trigger',
      explanation:
        '«Il faut que» means «it is necessary that» and ALWAYS triggers the subjunctive in the clause that follows. It is the workhorse of B1 obligation. If both clauses share the same subject, French prefers the infinitive: «Il faut partir.» As soon as you name a specific subject after «que», you must switch to the subjunctive.',
      examples: [
        'No specific subject → infinitive: Il faut partir maintenant.',
        'Specific subject → subjunctive: Il faut que tu partes maintenant.',
        'Il faut que nous soyons à l’heure. (être)',
        'Il faut que vous ayez votre passeport. (avoir)',
        'Il faut qu’il fasse plus attention. (faire)',
      ],
      tip: 'Before you conjugate, ask: «Is there a subject after que?» If yes → subjunctive. If no → infinitive. This single check eliminates 80% of B1 subjunctive errors.',
    },
  ],
  vocabulary: [
    { french: 'que je sois', english: 'that I be', category: 'Irregular subjunctive (être)', note: 'être → soi-' },
    { french: 'que nous soyons', english: 'that we be', category: 'Irregular subjunctive (être)' },
    { french: 'qu’il ait', english: 'that he have', category: 'Irregular subjunctive (avoir)', note: 'avoir → ai-/ay-' },
    { french: 'que nous ayons', english: 'that we have', category: 'Irregular subjunctive (avoir)' },
    { french: 'que j’aille', english: 'that I go', category: 'Irregular subjunctive (aller)' },
    { french: 'que nous fassions', english: 'that we do/make', category: 'Irregular subjunctive (faire)' },
    { french: 'qu’il puisse', english: 'that he can', category: 'Irregular subjunctive (pouvoir)' },
    { french: 'qu’elle veuille', english: 'that she want', category: 'Irregular subjunctive (vouloir)' },
    { french: 'que je sache', english: 'that I know', category: 'Irregular subjunctive (savoir)' },
    { french: 'que tu partes', english: 'that you leave', category: 'Regular subjunctive (-ir)' },
    { french: 'qu’il dise', english: 'that he say', category: 'Regular subjunctive (dire)' },
    { french: 'que nous prenions', english: 'that we take', category: 'Regular subjunctive (prendre)' },
    { french: 'qu’il vienne', english: 'that he come', category: 'Regular subjunctive (venir)' },
    { french: 'que je mette', english: 'that I put', category: 'Regular subjunctive (mettre)' },
    { french: 'il faut que', english: 'it is necessary that', category: 'Subjunctive trigger', note: '+ subjonctif (toujours)' },
    { french: 'obligatoire', english: 'mandatory', category: 'Obligation', example: 'Le rapport est obligatoire avant vendredi.' },
    { french: 'nécessaire', english: 'necessary', category: 'Obligation', example: 'Il est nécessaire qu’on relise les chiffres.' },
    { french: 'indispensable', english: 'essential', category: 'Obligation', example: 'Ton avis est indispensable pour décider.' },
    { french: 'urgent(e)', english: 'urgent', category: 'Obligation', example: 'C’est urgent : il faut que tu répondes.' },
    { french: 'impératif/-ve', english: 'imperative, critical', category: 'Obligation', example: 'Il est impératif de prévenir le client.' },
    { french: 'une priorité', english: 'a priority', category: 'Project vocab', example: 'La qualité reste notre priorité absolue.' },
    { french: 'un délai', english: 'a deadline', category: 'Project vocab', example: 'Le délai est très court.' },
    { french: 'une décision', english: 'a decision', category: 'Project vocab', example: 'Il faut qu’on prenne une décision claire.' },
    { french: 'un compte à rebours', english: 'a countdown', category: 'Project vocab', example: 'Le compte à rebours est lancé.' },
    { french: 'un lancement', english: 'a launch', category: 'Project vocab', example: 'Le lancement est prévu pour vendredi.' },
    { french: 'un jalon', english: 'a milestone', category: 'Project vocab', example: 'Chaque jalon doit être validé par l’équipe.' },
    { french: 'un chef de projet', english: 'a project manager', category: 'Project vocab' },
    { french: 'le compte-rendu', english: 'meeting minutes / report', category: 'Project vocab', example: 'Le compte-rendu sera envoyé demain.' },
  ],
  culturalNotes: [
    {
      title: 'La semaine de 35 heures',
      content:
        'Since 2000, the legal full-time working week in France has been 35 hours. Hours worked beyond that often convert into RTT days (réduction du temps de travail) — additional paid days off. French project deadlines almost always have to be reconciled with how many RTT days the team has already booked, which gives «il faut que tout le monde soit là» real planning weight.',
    },
    {
      title: 'La culture de la réunion',
      content:
        'French professional meetings («réunions») are typically more formal than Anglophone stand-ups: an agenda is circulated in advance, hierarchy shapes who speaks, and the meeting almost always ends with a written compte-rendu signed off by the chef de projet. Tasks announced with «il faut que» in a réunion are expected to appear on the compte-rendu by name.',
    },
    {
      title: 'Le chef de projet et le projet comme structure',
      content:
        'Both French schools and French companies organise around the projet — defined deliverables, intermediate jalons (milestones), and clearly named roles (chef de projet, référent, responsable). The «chef de projet» is a recognised professional identity, often with its own training programme. When Camille speaks in the dialogue, she is performing a role French listeners immediately recognise.',
    },
    {
      title: 'Tutoiement entre collègues',
      content:
        'Most French startups (and a growing number of larger companies in tech, media, and design) use tu among colleagues even across hierarchical lines — but vous is still standard with clients and external partners. Camille and Nassim using tu in this dialogue is a deliberate marker of contemporary French workplace culture.',
    },
  ],
  exercises: [
    {
      id: 'l27-e1',
      type: 'fill_blank',
      question:
        'Conjugate the verb in parentheses in the present subjunctive after «il faut que». Type only the verb form. Example: «Il faut que tu (partir).» → «partes».',
      correct_answer: ['parte', 'partes', 'parte', 'partions', 'partiez', 'partent'],
      explanation:
        'For partir, the ils-stem is part-; add -e, -es, -e, -ions, -iez, -ent. Any of the six forms shown is accepted depending on the subject.',
      hints: ['Take ils partent, drop -ent, add -e / -es / -e / -ions / -iez / -ent.'],
    },
    {
      id: 'l27-e2',
      type: 'matching',
      question: 'Match each verb to its 3rd-person singular irregular subjunctive form (qu’il / qu’elle …).',
      pairs: [
        { french: 'être', english: 'qu’il soit' },
        { french: 'avoir', english: 'qu’il ait' },
        { french: 'aller', english: 'qu’il aille' },
        { french: 'faire', english: 'qu’il fasse' },
        { french: 'pouvoir', english: 'qu’il puisse' },
        { french: 'vouloir', english: 'qu’il veuille' },
        { french: 'savoir', english: 'qu’il sache' },
      ],
      explanation: 'These seven irregular subjunctives are the highest-frequency forms in B1 French — memorise them as a block.',
    },
    {
      id: 'l27-e3',
      type: 'multiple_choice',
      question: 'Choose the correct subjunctive form: «Il faut que nous ___ à l’heure.» (être)',
      options: ['sommes', 'soyons', 'soyez', 'sont'],
      correct_answer: 'soyons',
      explanation:
        '«Il faut que» triggers the subjunctive. The 1st-person plural subjunctive of être is «soyons». «Sommes» is the indicative; «soyez» is 2nd-person plural; «sont» is 3rd-person plural indicative.',
    },
    {
      id: 'l27-e4',
      type: 'multiple_choice',
      question: 'Choose the correct subjunctive form: «Il faut qu’il ___ son passeport.» (avoir)',
      options: ['a', 'ait', 'aille', 'avait'],
      correct_answer: 'ait',
      explanation:
        '«Il faut que» + 3rd-person singular subjunctive of avoir = «ait». «A» is the indicative; «aille» is the subjunctive of aller; «avait» is the imparfait.',
    },
    {
      id: 'l27-e5',
      type: 'conjugation',
      question: 'Write the full present subjunctive of être.',
      verb: 'être',
      correct_answer: [
        { pronoun: 'que je', form: 'sois', pronunciation: 'swah' },
        { pronoun: 'que tu', form: 'sois', pronunciation: 'swah' },
        { pronoun: 'qu’il/elle', form: 'soit', pronunciation: 'swah' },
        { pronoun: 'que nous', form: 'soyons', pronunciation: 'swah-YOHN' },
        { pronoun: 'que vous', form: 'soyez', pronunciation: 'swah-YAY' },
        { pronoun: 'qu’ils/elles', form: 'soient', pronunciation: 'swah' },
      ],
      explanation:
        'être has the most irregular subjunctive in French. The singular and 3rd-plural forms all sound identical ([swa]) — only nous and vous are distinct.',
    },
    {
      id: 'l27-e6',
      type: 'mood_choice',
      question:
        'For each sentence, decide whether the verb in brackets should be in the indicative or the subjunctive.',
      items: [
        {
          sentence: 'Il faut que tu [BLANK] à l’heure demain.',
          verb: 'être',
          indicative_form: 'es',
          subjunctive_form: 'sois',
          correct_answer: 'subjunctive',
          trigger: 'Il faut que',
          explanation: '«Il faut que» always triggers the subjunctive.',
        },
        {
          sentence: 'Je sais qu’elle [BLANK] raison.',
          verb: 'avoir',
          indicative_form: 'a',
          subjunctive_form: 'ait',
          correct_answer: 'indicative',
          trigger: 'Je sais que',
          explanation:
            '«Je sais que» expresses certainty and takes the indicative. The subjunctive only follows specific triggers — and «savoir que» is not one of them.',
        },
        {
          sentence: 'Il faut qu’on [BLANK] vite.',
          verb: 'partir',
          indicative_form: 'part',
          subjunctive_form: 'parte',
          correct_answer: 'subjunctive',
          trigger: 'Il faut que',
          explanation: '«Il faut que» + on → subjunctive «parte».',
        },
        {
          sentence: 'Je vois qu’il [BLANK] fatigué.',
          verb: 'être',
          indicative_form: 'est',
          subjunctive_form: 'soit',
          correct_answer: 'indicative',
          trigger: 'Je vois que',
          explanation: '«Je vois que» reports a perceived fact and takes the indicative.',
        },
        {
          sentence: 'Il faut que vous [BLANK] le rapport avant midi.',
          verb: 'finir',
          indicative_form: 'finissez',
          subjunctive_form: 'finissiez',
          correct_answer: 'subjunctive',
          trigger: 'Il faut que',
          explanation: '«Il faut que» + vous → subjunctive «finissiez» (the -i- before -ez is the key tell).',
        },
        {
          sentence: 'Mon collègue dit que le rapport [BLANK] prêt ce soir.',
          verb: 'être',
          indicative_form: 'est',
          subjunctive_form: 'soit',
          correct_answer: 'indicative',
          trigger: 'dire que',
          explanation:
            'Affirmative «dire que» reports information as a fact and takes the indicative. (Negated «ne pas dire que» can take the subjunctive — see L29.)',
        },
        {
          sentence: 'Il faut qu’ils [BLANK] le test aujourd’hui.',
          verb: 'faire',
          indicative_form: 'font',
          subjunctive_form: 'fassent',
          correct_answer: 'subjunctive',
          trigger: 'Il faut que',
          explanation: '«Il faut que» + ils → subjunctive «fassent» (irregular stem fass-).',
        },
        {
          sentence: 'Le manager pense que tout [BLANK] bien.',
          verb: 'aller',
          indicative_form: 'va',
          subjunctive_form: 'aille',
          correct_answer: 'indicative',
          trigger: 'penser que (affirmatif)',
          explanation: 'Affirmative «penser que» expresses an opinion presented as a belief → indicative.',
        },
      ],
    },
    {
      id: 'l27-e7',
      type: 'transformation',
      question:
        'Rewrite each obligation using «il faut que» + subjunctive. Example: «Tu dois partir» → «Il faut que tu partes.»',
      instruction: 'affirmative_to_negative',
      items: [
        {
          original: 'Tu dois finir le dossier.',
          transformed: 'Il faut que tu finisses le dossier.',
          translation: 'You have to finish the file. → It’s necessary that you finish the file.',
        },
        {
          original: 'Nous devons être à l’heure.',
          transformed: 'Il faut que nous soyons à l’heure.',
          translation: 'We have to be on time. → It’s necessary that we be on time.',
        },
        {
          original: 'Karim doit faire les tests.',
          transformed: 'Il faut que Karim fasse les tests.',
          translation: 'Karim has to run the tests. → It’s necessary that Karim run the tests.',
        },
        {
          original: 'Vous devez avoir votre badge.',
          transformed: 'Il faut que vous ayez votre badge.',
          translation: 'You must have your badge. → It’s necessary that you have your badge.',
        },
        {
          original: 'Elle doit savoir la décision avant ce soir.',
          transformed: 'Il faut qu’elle sache la décision avant ce soir.',
          translation: 'She must know the decision before tonight.',
        },
      ],
      explanation:
        '«Devoir + infinitive» and «il faut que + subjunctive» both express obligation but with different grammar. Mastering the conversion is a DELF B1 production skill.',
    },
    {
      id: 'l27-e8',
      type: 'error_correction',
      question:
        'Each sentence contains one subjunctive error. Rewrite it correctly. Errors target either the wrong mood after «il faut que» or the wrong form of an irregular subjunctive.',
      items: [
        {
          incorrect: 'Il faut que tu viens à la réunion.',
          correct: 'Il faut que tu viennes à la réunion.',
          explanation: '«Il faut que» triggers the subjunctive. Venir → que tu viennes.',
        },
        {
          incorrect: 'Il faut que nous sommes prêts.',
          correct: 'Il faut que nous soyons prêts.',
          explanation: 'After «il faut que», être must be in the subjunctive: «soyons», not the indicative «sommes».',
        },
        {
          incorrect: 'Il faut qu’elle a son passeport.',
          correct: 'Il faut qu’elle ait son passeport.',
          explanation: 'After «il faut que», avoir must be in the subjunctive: «ait», not the indicative «a».',
        },
        {
          incorrect: 'Il faut qu’il faite plus attention.',
          correct: 'Il faut qu’il fasse plus attention.',
          explanation: 'The subjunctive of faire is irregular: «fasse», not «faite».',
        },
        {
          incorrect: 'Il faut que je peux parler au client.',
          correct: 'Il faut que je puisse parler au client.',
          explanation: 'The subjunctive of pouvoir is «puisse», not the indicative «peux».',
        },
      ],
    },
    {
      id: 'l27-e9',
      type: 'translation',
      question: 'Translate these necessity sentences into French using «il faut que» + subjunctive.',
      direction: 'en_to_fr',
      correct_answer: [
        'Il faut que tu sois à l’heure.',
        'Il faut que nous fassions un compte-rendu.',
        'Il faut qu’elle ait une réponse avant vendredi.',
        'Il faut qu’on prenne une décision ce matin.',
      ],
      explanation:
        'All four sentences require the subjunctive after «il faut que». Watch the irregular forms (sois, fassions, ait) and the regular -e ending on «prenne».',
      hints: [
        '«You need to be on time» — the subject «you» here is informal singular: tu.',
        '«We need to do/write a report.» — irregular faire: fassions.',
        '«She needs to have an answer before Friday.» — irregular avoir: ait.',
        '«We need to make a decision this morning.» — on takes 3rd-person singular: prenne.',
      ],
    },
    {
      id: 'l27-e10',
      type: 'speaking_prompt',
      question:
        'In 3–4 sentences, describe three things you think are necessary in your life or work right now. Use «il faut que» + subjunctive in each sentence, with a different subject each time (je / tu / on / nous / mes collègues …).',
      model_answer:
        'Dans ma vie, il faut que je sois plus organisée. Au travail, il faut que mes collègues répondent plus vite à leurs messages. Et il faut qu’on prenne plus de pauses pour bien réfléchir.',
      translation:
        'In my life, I need to be more organised. At work, my colleagues need to reply to their messages faster. And we need to take more breaks so we can think properly.',
      tip: 'Try to use at least one irregular subjunctive (sois / ait / fasse / aille / puisse / sache).',
    },
  ],
}

const lesson28: IntermediateLessonData = {
  id: 28,
  title: 'The Subjunctive II',
  title_fr: 'Le Subjonctif II',
  level: 'B1',
  description:
    'Expand the subjunctive to triggers of will, desire, preference and request — and master the same-subject rule that distinguishes «vouloir + infinitif» from «vouloir que + subjonctif».',
  dialogue: {
    title: 'Répartir le dossier',
    context:
      'Ariane and Mehdi, two colleagues at a French consulting firm, work through the division of tasks on a shared client dossier. The register is polite but firm — typical of French professional communication, where disagreement is expressed through explicit conditions and carefully chosen verbs.',
    exchanges: [
      {
        speaker: 'Ariane',
        french: 'Bon, on doit répartir le dossier client aujourd’hui. Je souhaite que tu prennes la partie budget.',
        english: 'Right, we have to divide up the client file today. I’d like you to take the budget section.',
        pronunciation: 'bohn, ohn dwah ray-par-TEER luh doss-YAY klee-AHN oh-zhoor-DWEE. zhuh swet kuh tew pren lah par-TEE bud-ZHAY',
      },
      {
        speaker: 'Mehdi',
        french: 'D’accord, mais je préfère qu’on en discute un peu d’abord. Le budget, c’est sensible.',
        english: 'OK, but I’d prefer we talk it through a bit first. Budget is sensitive.',
        pronunciation: 'dah-KOR, may zhuh pray-FAIR kohn ahn dee-SKEWT ahn puh dah-BOR. luh bud-ZHAY, say sahn-SEEBL',
      },
      {
        speaker: 'Ariane',
        french: 'Je comprends. Je veux juste qu’on avance avant la réunion de jeudi.',
        english: 'I understand. I just want us to make progress before Thursday’s meeting.',
        pronunciation: 'zhuh kohn-PRAHN. zhuh vuh zhewst kohn ah-VAHNSS ah-VAHN lah ray-yu-NYOHN duh ZHUH-dee',
      },
      {
        speaker: 'Mehdi',
        french: 'Très bien. Alors je demande que tu relises mes premières estimations avant que je continue.',
        english: 'Fair enough. Then I’m asking you to proofread my first estimates before I continue.',
        pronunciation: 'tray BYAN. ah-LOR zhuh duh-MAHND kuh tew ruh-LEEZ may pruh-MYAIR es-tee-mah-SYOHN ah-VAHN kuh zhuh kohn-TEE-nyu',
      },
      {
        speaker: 'Ariane',
        french: 'Pas de souci. Mais j’insiste pour que tu me les envoies aujourd’hui, pas demain.',
        english: 'No problem. But I’m insisting you send them to me today, not tomorrow.',
        pronunciation: 'pah duh soo-SEE. may zhan-SEEST poor kuh tew muh lay ahn-VWAH oh-zhoor-DWEE, pah duh-MAHN',
      },
      {
        speaker: 'Mehdi',
        french: 'Promis. Et je propose qu’on garde Karim sur toute la partie technique.',
        english: 'Promise. And I’m suggesting we keep Karim on the whole technical section.',
        pronunciation: 'proh-MEE. ay zhuh proh-POHZ kohn gard kah-REEM sewr toot lah par-TEE tek-NEEK',
      },
      {
        speaker: 'Ariane',
        french: 'Très bonne idée. La direction exige aussi que le plan soit validé pour jeudi.',
        english: 'Good idea. Management is also requiring the plan to be approved by Thursday.',
        pronunciation: 'tray bohn ee-DAY. lah dee-rek-SYOHN eg-ZEEZH oh-SEE kuh luh plahn swah vah-lee-DAY poor ZHUH-dee',
      },
      {
        speaker: 'Mehdi',
        french: 'Pourquoi jeudi déjà ? Je voulais plutôt finir vendredi.',
        english: 'Why Thursday again? I was hoping to finish on Friday instead.',
        pronunciation: 'poor-KWAH ZHUH-dee day-ZHAH? zhuh voo-LAY plew-TOH fee-NEER vahn-druh-DEE',
      },
      {
        speaker: 'Ariane',
        french: 'Le client a avancé la réunion. Je tiens vraiment à ce qu’on soit prêts.',
        english: 'The client moved the meeting up. I really want us to be ready.',
        pronunciation: 'luh klee-AHN ah ah-vahn-SAY lah ray-yu-NYOHN. zhuh tyan vray-MAHN ah suh kohn swah PRAY',
      },
      {
        speaker: 'Mehdi',
        french: 'Bon, dans ce cas je veux finir ma partie ce soir.',
        english: 'OK, in that case I want to finish my section tonight.',
        pronunciation: 'bohn, dahn suh kah zhuh vuh fee-NEER mah par-TEE suh SWAHR',
      },
      {
        speaker: 'Ariane',
        french: 'Tu dis bien «je veux finir», pas «je veux que je finisse» — même sujet, donc infinitif.',
        english: 'You said it right: «je veux finir», not «je veux que je finisse» — same subject, so infinitive.',
        pronunciation: 'tew dee byan zhuh vuh fee-NEER, pah zhuh vuh kuh zhuh fee-NEES — mem sew-ZHAY, dohnk an-fee-nee-TEEF',
      },
      {
        speaker: 'Mehdi',
        french: 'Bien vu. Alors je demande qu’on confirme nos rôles par mail avant midi.',
        english: 'Good catch. So I’m asking that we confirm our roles by email before noon.',
        pronunciation: 'byan VEW. ah-LOR zhuh duh-MAHND kohn kohn-FEERM noh ROHL par MEL ah-VAHN mee-DEE',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Triggers of will, desire and request',
      explanation:
        'A whole family of verbs expressing what someone wants, prefers, demands or proposes triggers the subjunctive when the subordinate clause has a different subject from the main clause. The core list to memorise: vouloir que, préférer que, souhaiter que, désirer que, exiger que, demander que, suggérer que, proposer que, tenir à ce que, and the special pattern insister pour que (the only one with «pour» instead of just «que»).',
      examples: [
        'Je veux que tu partes maintenant.',
        'Elle préfère que nous fassions le travail à deux.',
        'Nous souhaitons que vous soyez présents.',
        'Le directeur exige que tout le monde signe le compte-rendu.',
        'J’insiste pour que tu m’envoies le fichier aujourd’hui.',
      ],
      tip: 'These triggers always express the WANT of one person directed at the action of another. If you can paraphrase with «X wants Y to do Z», you need «que + subjonctif» in French. If X and Y are the same person, switch to the infinitive (next grammar point).',
    },
    {
      title: 'The same-subject rule: «vouloir + infinitif» vs «vouloir que + subjonctif»',
      explanation:
        'When the subject of the main clause and the subordinate clause is the SAME person, French uses an infinitive — never «que + subjonctif». «Je veux que je parte» is ungrammatical. «Je veux partir» is the only correct form. This is the single most-tested distinction in DELF B1 production écrite, and the error Grammaire Progressive flags as the most frequent.',
      examples: [
        'SAME SUBJECT (je…je): Je veux partir. ✓     NOT: Je veux que je parte. ✗',
        'DIFFERENT SUBJECTS (je…tu): Je veux que tu partes. ✓',
        'SAME SUBJECT: Nous préférons rester. ✓',
        'DIFFERENT SUBJECTS: Nous préférons que vous restiez. ✓',
        'SAME SUBJECT: Elle souhaite être en vacances. ✓     DIFFERENT: Elle souhaite que je sois en vacances. ✓',
      ],
      tip: 'Before you write «que», count subjects. One subject → infinitive. Two subjects → que + subjonctif. This single check eliminates the most common B1 production error.',
    },
    {
      title: 'Mood after «penser que» is the OPPOSITE pattern — keep it separate',
      explanation:
        'Will/desire triggers (vouloir que, préférer que, etc.) always take the subjunctive. Don’t mix them up with opinion verbs like «penser que», «croire que», «trouver que» — in the affirmative those take the INDICATIVE. The full opinion + mood system arrives in L29 and L41, but you should already keep the categories apart.',
      examples: [
        'Will/desire: Je veux qu’il vienne. (subjonctif)',
        'Opinion (affirmative): Je pense qu’il vient. (indicatif)',
        'Will/desire: Elle souhaite que tu fasses attention. (subjonctif)',
        'Opinion (affirmative): Elle croit que tu fais attention. (indicatif)',
      ],
      tip: 'Will/desire = something not yet real, hoped for, demanded → subjonctif. Opinion = something the speaker presents as a fact → indicatif. The mood reflects the speaker’s stance.',
    },
  ],
  vocabulary: [
    { french: 'vouloir que', english: 'to want that', category: 'Subjunctive trigger (will)', note: '+ subjonctif', example: 'Je veux que tu sois à l’heure.' },
    { french: 'préférer que', english: 'to prefer that', category: 'Subjunctive trigger (will)', note: '+ subjonctif', example: 'Je préfère qu’on en discute demain.' },
    { french: 'souhaiter que', english: 'to wish that', category: 'Subjunctive trigger (will)', note: '+ subjonctif', example: 'Nous souhaitons que vous veniez.' },
    { french: 'désirer que', english: 'to desire that', category: 'Subjunctive trigger (will)', note: '+ subjonctif (formal)' },
    { french: 'exiger que', english: 'to demand that', category: 'Subjunctive trigger (will)', note: '+ subjonctif', example: 'La direction exige que tout soit prêt.' },
    { french: 'demander que', english: 'to ask that', category: 'Subjunctive trigger (will)', note: '+ subjonctif', example: 'Je demande que tu relises mes chiffres.' },
    { french: 'suggérer que', english: 'to suggest that', category: 'Subjunctive trigger (will)', note: '+ subjonctif' },
    { french: 'proposer que', english: 'to propose that', category: 'Subjunctive trigger (will)', note: '+ subjonctif', example: 'Je propose qu’on garde Karim sur le projet.' },
    { french: 'insister pour que', english: 'to insist that', category: 'Subjunctive trigger (will)', note: '+ subjonctif (note: pour que, not just que)', example: 'J’insiste pour que tu m’envoies le fichier.' },
    { french: 'tenir à ce que', english: 'to be keen / insist that', category: 'Subjunctive trigger (will)', note: '+ subjonctif (note: à ce que, not just que)' },
    { french: 'une proposition', english: 'a proposal', category: 'Negotiation', example: 'Ta proposition me semble réaliste.' },
    { french: 'un accord', english: 'an agreement', category: 'Negotiation', example: 'Nous cherchons un accord raisonnable.' },
    { french: 'un refus', english: 'a refusal', category: 'Negotiation' },
    { french: 'un compromis', english: 'a compromise', category: 'Negotiation', example: 'Il faut trouver un compromis.' },
    { french: 'une condition', english: 'a condition', category: 'Negotiation' },
    { french: 'négocier', english: 'to negotiate', category: 'Negotiation' },
    { french: 'convenir à', english: 'to suit / be agreeable to', category: 'Negotiation' },
    { french: 'accepter de + inf', english: 'to agree to', category: 'Negotiation', example: 'J’accepte de relire ton document.' },
    { french: 'refuser de + inf', english: 'to refuse to', category: 'Negotiation' },
    { french: 'être d’accord avec', english: 'to agree with', category: 'Negotiation' },
    { french: 'répartir', english: 'to divide up / share out', category: 'Workflow', example: 'On va répartir les tâches.' },
    { french: 'un dossier', english: 'a file / case / project area', category: 'Workflow', note: 'In professional French, often = a whole responsibility, not just a folder.' },
    { french: 'une estimation', english: 'an estimate', category: 'Workflow' },
    { french: 'avancer la réunion', english: 'to bring the meeting forward', category: 'Workflow' },
    { french: 'valider', english: 'to approve / sign off on', category: 'Workflow', example: 'La direction doit valider le plan.' },
    { french: 'confirmer', english: 'to confirm', category: 'Workflow' },
    { french: 'que tu prennes', english: 'that you take', category: 'Subjunctive form in context (prendre)' },
    { french: 'que tu m’envoies', english: 'that you send me', category: 'Subjunctive form in context (envoyer)' },
  ],
  culturalNotes: [
    {
      title: 'Le «dossier» comme identité professionnelle',
      content:
        'In French professional culture, a «dossier» is far more than a folder of papers. It is typically a whole area of responsibility owned by one person — «le dossier client X», «le dossier RGPD», «le dossier export». Saying «c’est mon dossier» is staking professional identity, which is why Ariane and Mehdi negotiate so explicitly over who owns which part.',
    },
    {
      title: 'L’assertivité indirecte à la française',
      content:
        'French professional disagreement tends to be expressed through carefully chosen verbs and conditions rather than direct «no». «Je préfère que…», «j’insiste pour que…», «je tiens à ce que…» are how French colleagues push back firmly while remaining polite. The choice of verb signals how strong the position is: «proposer» is open, «demander» is firm, «exiger» is non-negotiable.',
    },
    {
      title: '«Proposer» en contexte professionnel',
      content:
        'In a French professional setting, «proposer» rarely means «casually suggesting». It usually means offering a structured option for approval — closer to «put forward» or «table». When Mehdi says «je propose qu’on garde Karim», he is formally placing an option on the negotiation that Ariane is expected to accept, reject or counter.',
    },
  ],
  exercises: [
    {
      id: 'l28-e1',
      type: 'matching',
      question: 'Match each French verb to the most accurate English equivalent — pay attention to register.',
      pairs: [
        { french: 'vouloir que', english: 'to want (neutral, direct)' },
        { french: 'souhaiter que', english: 'to wish (softer, more polite)' },
        { french: 'exiger que', english: 'to demand (non-negotiable)' },
        { french: 'suggérer que', english: 'to suggest (open option)' },
        { french: 'proposer que', english: 'to formally put forward' },
        { french: 'insister pour que', english: 'to insist on (note: pour que)' },
        { french: 'tenir à ce que', english: 'to be keen on (note: à ce que)' },
      ],
      explanation:
        'These triggers all take the subjunctive but vary in force and formality. Choosing the right verb signals how strong your position is.',
    },
    {
      id: 'l28-e2',
      type: 'fill_blank',
      question:
        'Fill in the subjunctive form of the verb in parentheses. «Je veux que tu ___ (finir) avant midi.» Type only the verb form.',
      correct_answer: 'finisses',
      explanation: '«Vouloir que» + tu → subjunctive «finisses» (note the double s before -es).',
      hints: ['ils-form: finissent → drop -ent → finiss- + -es for tu.'],
    },
    {
      id: 'l28-e3',
      type: 'error_correction',
      question:
        'Each sentence violates the same-subject rule (the most-tested B1 error per Grammaire Progressive). Rewrite using an infinitive — NOT que + subjonctif.',
      items: [
        {
          incorrect: 'Je veux que je parte tôt demain.',
          correct: 'Je veux partir tôt demain.',
          explanation: 'Subjects are the same (je…je). French requires the infinitive: «vouloir + infinitif».',
        },
        {
          incorrect: 'Nous préférons que nous restions ici.',
          correct: 'Nous préférons rester ici.',
          explanation: 'Same subject (nous…nous) → infinitive «rester», not «que nous restions».',
        },
        {
          incorrect: 'Elle souhaite qu’elle soit en vacances en juillet.',
          correct: 'Elle souhaite être en vacances en juillet.',
          explanation: 'Same subject → infinitive «être», not «qu’elle soit».',
        },
        {
          incorrect: 'Je demande que je participe à la réunion.',
          correct: 'Je demande à participer à la réunion.',
          explanation:
            'Same subject → infinitive. Note: «demander» with same subject takes «demander à + infinitif», not just bare infinitive.',
        },
        {
          incorrect: 'Ils veulent qu’ils achètent une maison.',
          correct: 'Ils veulent acheter une maison.',
          explanation: 'Same subject → infinitive «acheter».',
        },
      ],
    },
    {
      id: 'l28-e4',
      type: 'transformation',
      question:
        'Combine each pair of sentences into one using «que» + subjunctive. Watch the subject change. Example: «Je veux. Tu pars.» → «Je veux que tu partes.»',
      instruction: 'affirmative_to_negative',
      items: [
        {
          original: 'Je préfère. Nous prenons le train.',
          transformed: 'Je préfère que nous prenions le train.',
          translation: 'I prefer that we take the train.',
        },
        {
          original: 'Elle souhaite. Tu réussis l’examen.',
          transformed: 'Elle souhaite que tu réussisses l’examen.',
          translation: 'She wishes for you to pass the exam.',
        },
        {
          original: 'Nous exigeons. Le dossier est complet.',
          transformed: 'Nous exigeons que le dossier soit complet.',
          translation: 'We require that the file be complete.',
        },
        {
          original: 'J’insiste pour. Vous arrivez à l’heure.',
          transformed: 'J’insiste pour que vous arriviez à l’heure.',
          translation: 'I insist that you arrive on time.',
        },
        {
          original: 'Il tient à. Nous faisons une pause.',
          transformed: 'Il tient à ce que nous fassions une pause.',
          translation: 'He insists that we take a break. (Note: à ce que, not just que.)',
        },
      ],
      explanation:
        '«Insister pour que» and «tenir à ce que» are the two triggers that need extra prepositions before «que». Memorise them as fixed phrases.',
    },
    {
      id: 'l28-e5',
      type: 'mood_choice',
      question:
        'Will/desire triggers take the subjunctive; opinion verbs in the affirmative take the indicative. Choose the correct mood.',
      items: [
        {
          sentence: 'Je veux qu’il [BLANK] avec nous.',
          verb: 'venir',
          indicative_form: 'vient',
          subjunctive_form: 'vienne',
          correct_answer: 'subjunctive',
          trigger: 'vouloir que',
          explanation: '«Vouloir que» = will → subjunctive «vienne».',
        },
        {
          sentence: 'Je pense qu’il [BLANK] avec nous.',
          verb: 'venir',
          indicative_form: 'vient',
          subjunctive_form: 'vienne',
          correct_answer: 'indicative',
          trigger: 'penser que (affirmatif)',
          explanation: 'Affirmative «penser que» = opinion presented as fact → indicative «vient».',
        },
        {
          sentence: 'Elle préfère que nous [BLANK] le train.',
          verb: 'prendre',
          indicative_form: 'prenons',
          subjunctive_form: 'prenions',
          correct_answer: 'subjunctive',
          trigger: 'préférer que',
          explanation: '«Préférer que» → subjunctive «prenions».',
        },
        {
          sentence: 'Je trouve qu’il [BLANK] très professionnel.',
          verb: 'être',
          indicative_form: 'est',
          subjunctive_form: 'soit',
          correct_answer: 'indicative',
          trigger: 'trouver que (affirmatif)',
          explanation: 'Affirmative «trouver que» reports a judgment as fact → indicative «est».',
        },
        {
          sentence: 'Nous exigeons que le rapport [BLANK] complet.',
          verb: 'être',
          indicative_form: 'est',
          subjunctive_form: 'soit',
          correct_answer: 'subjunctive',
          trigger: 'exiger que',
          explanation: '«Exiger que» = demand → subjunctive «soit».',
        },
        {
          sentence: 'Mon chef dit que la réunion [BLANK] annulée.',
          verb: 'être',
          indicative_form: 'est',
          subjunctive_form: 'soit',
          correct_answer: 'indicative',
          trigger: 'dire que (affirmatif)',
          explanation: 'Affirmative «dire que» reports information as fact → indicative «est».',
        },
        {
          sentence: 'J’insiste pour que vous me [BLANK] le fichier aujourd’hui.',
          verb: 'envoyer',
          indicative_form: 'envoyez',
          subjunctive_form: 'envoyiez',
          correct_answer: 'subjunctive',
          trigger: 'insister pour que',
          explanation: '«Insister pour que» → subjunctive «envoyiez».',
        },
        {
          sentence: 'Je sais qu’elle [BLANK] raison.',
          verb: 'avoir',
          indicative_form: 'a',
          subjunctive_form: 'ait',
          correct_answer: 'indicative',
          trigger: 'savoir que',
          explanation: '«Savoir que» expresses certainty → indicative «a».',
        },
      ],
    },
    {
      id: 'l28-e6',
      type: 'multiple_choice',
      question: 'Which sentence is grammatical?',
      options: [
        'Je veux que je sois à Paris demain.',
        'Je veux être à Paris demain.',
        'Je veux à être à Paris demain.',
        'Je veux que être à Paris demain.',
      ],
      correct_answer: 'Je veux être à Paris demain.',
      explanation:
        'Same subject (je…je) requires the infinitive — no «que». Both «vouloir + infinitif» (most verbs) and «demander à + infinitif» (special case) are how you express same-subject will.',
    },
    {
      id: 'l28-e7',
      type: 'translation',
      question: 'Translate into French using a will/desire trigger + subjunctive.',
      direction: 'en_to_fr',
      correct_answer: [
        'Je voudrais que tu sois plus précis.',
        'Elle souhaite que nous prenions une décision.',
        'Le client exige que le rapport soit prêt vendredi.',
        'Nous proposons que Karim fasse la présentation.',
        'J’insiste pour que vous me répondiez aujourd’hui.',
      ],
      explanation:
        'Each English «X wants/wishes/demands/proposes/insists Y do Z» becomes «que + subjonctif» in French because the subjects differ.',
      hints: [
        'I’d like you to be more specific. → vouloir / sois',
        'She wishes for us to make a decision. → souhaiter / prenions',
        'The client demands that the report be ready by Friday. → exiger / soit',
        'We propose that Karim do the presentation. → proposer / fasse',
        'I insist you reply to me today. → insister pour que / répondiez',
      ],
    },
    {
      id: 'l28-e8',
      type: 'fill_blank',
      question:
        'Fill in the correct subjunctive form. «Il insiste pour que nous ___ (faire) un compte-rendu.»',
      correct_answer: 'fassions',
      explanation: '«Insister pour que» + nous → subjunctive of faire = «fassions» (irregular stem fass-).',
      hints: ['faire is one of the 7 irregular subjunctives: que je fasse, que nous fassions, qu’ils fassent.'],
    },
    {
      id: 'l28-e9',
      type: 'register_sort',
      question:
        'Sort each request by how forceful it is in a French workplace. Choose «doux» (gentle / open), «neutre» (firm but standard), or «fort» (non-negotiable).',
      categories: ['doux', 'neutre', 'fort'],
      items: [
        { expression: 'Je propose qu’on revoie les chiffres.', correct_category: 'doux', explanation: '«Proposer» tables an option — open to discussion.' },
        { expression: 'Je suggère que tu en parles à ton chef.', correct_category: 'doux', explanation: '«Suggérer» offers a recommendation — soft.' },
        { expression: 'Je voudrais que tu me rendes le dossier vendredi.', correct_category: 'neutre', explanation: 'Conditional «voudrais» softens a clear request — neutral.' },
        { expression: 'Je demande que chacun confirme son rôle.', correct_category: 'neutre', explanation: '«Demander» is firm but standard professional language.' },
        { expression: 'J’insiste pour que tu sois présent demain.', correct_category: 'fort', explanation: '«Insister pour que» signals you will not let it go.' },
        { expression: 'La direction exige que le plan soit validé jeudi.', correct_category: 'fort', explanation: '«Exiger» = non-negotiable demand.' },
      ],
    },
    {
      id: 'l28-e10',
      type: 'speaking_prompt',
      question:
        'Imagine you are dividing a group project with a colleague. In 4–5 sentences, use three different will/desire triggers — one «doux», one «neutre», one «fort» — to negotiate your share of the work. End with one same-subject sentence using an infinitive.',
      model_answer:
        'Je propose que tu prennes la partie analyse, c’est ton point fort. Je voudrais que nous fassions le résumé ensemble, à deux ça ira plus vite. J’insiste pour que les chiffres soient relus avant l’envoi. Moi, je veux finir ma partie ce soir.',
      translation:
        'I propose that you take the analysis section — it’s your strong point. I’d like us to do the summary together, it’ll go faster with two of us. I insist that the figures be proofread before sending. As for me, I want to finish my part tonight.',
      tip: 'The final «je veux finir» is same-subject → infinitive, no «que». That contrast is the B1 marker examiners listen for.',
    },
  ],
}

const lesson29: IntermediateLessonData = {
  id: 29,
  title: 'The Subjunctive III',
  title_fr: 'Le Subjonctif III',
  level: 'B1',
  description:
    'Complete the subjunctive system with emotion triggers, doubt + negated opinion, and concessive conjunctions — while memorising the «espérer que» indicative trap.',
  dialogue: {
    title: 'Un café à Pigalle',
    context:
      'Lucie and Thomas, close friends in their late twenties, meet at a Paris café. Lucie has just been offered a job in Lyon and is announcing it for the first time. Thomas reacts with emotion, doubt and gentle advice — all the subjunctive families introduced in this lesson appear naturally in the conversation. Register: informal spoken French between close friends.',
    exchanges: [
      {
        speaker: 'Lucie',
        french: 'Bon, j’ai une nouvelle. J’ai accepté une offre à Lyon, je pars dans deux mois.',
        english: 'So, I have some news. I accepted an offer in Lyon — I’m leaving in two months.',
        pronunciation: 'bohn, zhay ewn noo-VEL. zhay ak-sep-TAY ewn ohfr ah lee-OHN, zhuh par dahn duh MWAH',
      },
      {
        speaker: 'Thomas',
        french: 'Sérieux ? Je suis vraiment surpris que tu partes si vite.',
        english: 'Seriously? I’m really surprised you’re leaving so soon.',
        pronunciation: 'say-RYUH? zhuh swee vray-MAHN sewr-PREE kuh tew part see VEET',
      },
      {
        speaker: 'Lucie',
        french: 'Je sais. Mais je suis contente que l’offre soit aussi intéressante.',
        english: 'I know. But I’m glad the offer is this good.',
        pronunciation: 'zhuh SAY. may zhuh swee kohn-TAHNT kuh lohfr swah oh-SEE an-tay-reh-SAHNT',
      },
      {
        speaker: 'Thomas',
        french: 'J’ai un peu peur que tu te sentes seule au début, franchement.',
        english: 'I’m a bit afraid you’ll feel lonely at the start, honestly.',
        pronunciation: 'zhay ahn puh PURR kuh tew tuh sahnt suhl oh day-BEW, frahnsh-MAHN',
      },
      {
        speaker: 'Lucie',
        french: 'C’est gentil. Mais je ne pense pas que ce soit un mauvais choix.',
        english: 'That’s sweet. But I don’t think it’s a bad choice.',
        pronunciation: 'say zhahn-TEE. may zhuh nuh pahnss pah kuh suh swah ahn moh-VAY SHWAH',
      },
      {
        speaker: 'Thomas',
        french: 'Non, moi je crois que Lyon est une ville géniale. Je doute juste que tu retrouves vite tes amis.',
        english: 'No, I think Lyon is a great city. I just doubt you’ll find new friends quickly.',
        pronunciation: 'nohn, mwah zhuh krwah kuh lee-OHN ay ewn veel zhay-NYAL. zhuh doot zhewst kuh tew ruh-TROOV veet tay zah-MEE',
      },
      {
        speaker: 'Lucie',
        french: 'J’espère que ça ira vite, en fait. J’ai déjà un collègue là-bas.',
        english: 'Actually, I’m hoping it’ll go fast. I already have a colleague there.',
        pronunciation: 'zhes-PAIR kuh sah ee-RAH veet, ahn FET. zhay day-ZHAH ahn koh-LEG lah-BAH',
      },
      {
        speaker: 'Thomas',
        french: 'Bien. Bien que je sois un peu triste, je comprends complètement ta décision.',
        english: 'Good. Although I’m a bit sad, I totally understand your decision.',
        pronunciation: 'byan. byan kuh zhuh swah ahn puh TREEST, zhuh kohn-PRAHN kohn-plet-MAHN tah day-see-ZYOHN',
      },
      {
        speaker: 'Lucie',
        french: 'Merci. Je tiens à ce qu’on garde le contact, hein.',
        english: 'Thanks. I really want us to keep in touch, OK?',
        pronunciation: 'mair-SEE. zhuh tyan ah suh kohn gard luh kohn-TAHKT, ahn',
      },
      {
        speaker: 'Thomas',
        french: 'Évidemment. Mais préviens-moi avant que tu signes le contrat, juste pour qu’on en parle une dernière fois.',
        english: 'Of course. Just let me know before you sign the contract, so we can talk it through one more time.',
        pronunciation: 'ay-vee-dah-MAHN. may pray-vyan-MWAH ah-VAHN kuh tew SEEN luh kohn-TRAH, zhewst poor kohn ahn PARL ewn dair-NYAIR fwah',
      },
      {
        speaker: 'Lucie',
        french: 'Promis. Et regarde — quoique ce soit difficile, je sens vraiment que c’est le bon moment.',
        english: 'Promise. And look — even though it’s tough, I really feel this is the right moment.',
        pronunciation: 'proh-MEE. ay ruh-GARD — kwah-kuh suh swah dee-fee-SEEL, zhuh sahn vray-MAHN kuh say luh bohn moh-MAHN',
      },
      {
        speaker: 'Thomas',
        french: 'Alors je suis content pour toi, vraiment. Espérons que Paris ne te manque pas trop.',
        english: 'Then I’m happy for you, really. Let’s hope Paris doesn’t make you too homesick.',
        pronunciation: 'ah-LOR zhuh swee kohn-TAHN poor twah, vray-MAHN. es-pay-ROHN kuh pah-REE nuh tuh mahnk pah TROH',
      },
      {
        speaker: 'Lucie',
        french: 'Doucement, Thomas — espérer que prend l’indicatif. Tu me fais réviser, là.',
        english: 'Easy, Thomas — «espérer que» takes the indicative. You’re making me revise here.',
        pronunciation: 'doos-MAHN, toh-MAH — es-pay-RAY kuh prahn lan-dee-kah-TEEF. tew muh fay ray-vee-ZAY, LAH',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Emotion triggers + subjunctive',
      explanation:
        'Verbs and expressions describing an emotional reaction to something take the subjunctive when followed by «que». The core list: être content / heureux / ravi / fier / triste / désolé / surpris / choqué / inquiet que, plus avoir peur que, craindre que, regretter que, être fâché que. The subjunctive expresses that the speaker is reacting emotionally to the OTHER clause’s event — not asserting it as a neutral fact.',
      examples: [
        'Je suis contente que tu sois là.',
        'Il est triste que nous partions.',
        'J’ai peur qu’elle ne soit pas prête. (Note: optional «ne» explétif — see tip.)',
        'Nous regrettons que vous ayez attendu si longtemps.',
        'Elle est surprise que vous ayez accepté l’offre.',
      ],
      tip:
        '«Avoir peur que» and «craindre que» optionally allow a «ne» before the subjunctive verb in formal written French («J’ai peur qu’il ne vienne pas»). It is NOT negation — it is a stylistic relic. At B1, you can either include or omit it; both are correct.',
    },
    {
      title: 'Doubt and negated opinion → subjunctive (BUT espérer que → indicative)',
      explanation:
        'Verbs of doubt (douter que, il est peu probable que, il est douteux que) trigger the subjunctive. So do NEGATED opinion verbs (ne pas croire que, ne pas penser que, ne pas être sûr que). Affirmative opinion verbs (croire que, penser que, être sûr que, il est probable que) take the INDICATIVE. The crucial exception, tested on virtually every DELF B1 exam: «espérer que» always takes the INDICATIVE, even though it expresses a wish.',
      examples: [
        'Je doute qu’il vienne. (subjonctif)',
        'Je ne crois pas qu’elle ait raison. (subjonctif — negated opinion)',
        'Je crois qu’elle a raison. (indicatif — affirmative opinion)',
        'J’espère qu’il viendra. (indicatif — espérer que exception!)',
        'Il est probable qu’il vient. (indicatif) vs Il est peu probable qu’il vienne. (subjonctif)',
      ],
      tip:
        '«Espérer que» is THE most-tested exception on the DELF B1. It feels emotional, so learners want to use the subjunctive — but French has chosen to treat it as expressing a positive expectation, so it takes the indicative. Memorise: espérer que = INDICATIF, always, no exceptions.',
    },
    {
      title: 'Concessive and purpose conjunctions + subjunctive',
      explanation:
        'A specific set of conjunctions ALWAYS triggers the subjunctive in the clause they introduce, regardless of meaning: pour que (so that), avant que (before), bien que / quoique (although), à moins que (unless), jusqu’à ce que (until), de peur que (for fear that), pourvu que (provided that), à condition que (provided that). These contrast with conjunctions that DO NOT trigger the subjunctive: parce que, quand, après que (now indicative in standard usage), pendant que, dès que.',
      examples: [
        'Je t’explique POUR QUE tu comprennes mieux.',
        'Préviens-moi AVANT QUE je signe.',
        'BIEN QUE je sois triste, je comprends.',
        'Je viendrai À MOINS QU’il pleuve.',
        'Reste ICI JUSQU’À CE QUE le train arrive. (subj) vs Reste ici DÈS QUE le train arrive. (indic)',
      ],
      tip:
        'After que is the clue: «parce que» and «quand» take indicative; «bien que» and «pour que» take subjunctive. There is no logical rule — the only path is to memorise which conjunctions take which mood. Start with the four most common subjunctive ones (pour que, avant que, bien que, à moins que) and you’ll cover 80% of B1 cases.',
    },
  ],
  vocabulary: [
    { french: 'être content(e) que', english: 'to be glad that', category: 'Emotion trigger', note: '+ subjonctif' },
    { french: 'être heureux/-euse que', english: 'to be happy that', category: 'Emotion trigger', note: '+ subjonctif' },
    { french: 'être ravi(e) que', english: 'to be delighted that', category: 'Emotion trigger', note: '+ subjonctif' },
    { french: 'être triste que', english: 'to be sad that', category: 'Emotion trigger', note: '+ subjonctif' },
    { french: 'être surpris(e) que', english: 'to be surprised that', category: 'Emotion trigger', note: '+ subjonctif' },
    { french: 'être inquiet/-ète que', english: 'to be worried that', category: 'Emotion trigger', note: '+ subjonctif' },
    { french: 'avoir peur que', english: 'to be afraid that', category: 'Emotion trigger', note: '+ subjonctif (optional ne explétif)' },
    { french: 'regretter que', english: 'to regret that', category: 'Emotion trigger', note: '+ subjonctif' },
    { french: 'douter que', english: 'to doubt that', category: 'Doubt trigger', note: '+ subjonctif' },
    { french: 'ne pas croire que', english: 'not to think that', category: 'Negated opinion', note: '+ subjonctif (affirmative croire que = indicatif)' },
    { french: 'ne pas penser que', english: 'not to think that', category: 'Negated opinion', note: '+ subjonctif (affirmative penser que = indicatif)' },
    { french: 'ne pas être sûr(e) que', english: 'not to be sure that', category: 'Negated opinion', note: '+ subjonctif' },
    { french: 'il est peu probable que', english: 'it is unlikely that', category: 'Doubt trigger', note: '+ subjonctif' },
    { french: 'espérer que', english: 'to hope that', category: 'Indicative exception', note: '+ INDICATIF (DELF B1 trap)' },
    { french: 'il est probable que', english: 'it is likely that', category: 'Indicative (probability)', note: '+ indicatif' },
    { french: 'pour que', english: 'so that', category: 'Conjunction', note: '+ subjonctif' },
    { french: 'avant que', english: 'before', category: 'Conjunction', note: '+ subjonctif' },
    { french: 'bien que', english: 'although', category: 'Conjunction (concession)', note: '+ subjonctif' },
    { french: 'quoique', english: 'although (literary)', category: 'Conjunction (concession)', note: '+ subjonctif' },
    { french: 'à moins que', english: 'unless', category: 'Conjunction', note: '+ subjonctif' },
    { french: 'jusqu’à ce que', english: 'until', category: 'Conjunction', note: '+ subjonctif' },
    { french: 'pourvu que', english: 'provided that', category: 'Conjunction', note: '+ subjonctif' },
    { french: 'parce que', english: 'because', category: 'Conjunction', note: '+ indicatif (no subjunctive!)' },
    { french: 'après que', english: 'after', category: 'Conjunction', note: '+ indicatif in modern usage (famous trap)' },
    { french: 'dès que', english: 'as soon as', category: 'Conjunction', note: '+ indicatif' },
    { french: 'une offre', english: 'a job offer', category: 'Personal news', example: 'J’ai accepté une offre à Lyon.' },
    { french: 'un déménagement', english: 'a move (relocation)', category: 'Personal news' },
    { french: 'la mobilité professionnelle', english: 'job mobility', category: 'Personal news' },
    { french: 'garder le contact', english: 'to keep in touch', category: 'Personal news' },
    { french: 'sentir que', english: 'to feel that', category: 'Indicative (perception)', note: '+ indicatif when affirmative' },
  ],
  culturalNotes: [
    {
      title: 'Le café comme institution sociale',
      content:
        'In France, cafés remain a venue for serious personal conversations — friends still meet at a café to deliver life-changing news, end relationships, or talk through career decisions. A Parisian café visit averages 45 minutes, far longer than a quick coffee in most Anglophone cultures. The dialogue’s setting is a marker of how seriously Lucie is treating the news.',
    },
    {
      title: 'La réserve française face à l’émotion',
      content:
        'French culture is relatively reserved about expressing strong emotion in public — but between close friends, direct emotional expression («je suis vraiment surpris», «j’ai peur que») is expected and valued. Thomas’s reaction is not effusive by Anglophone standards but reads as warm and honest in French context.',
    },
    {
      title: 'L’expatriation à l’intérieur de la France',
      content:
        'Internal mobility for work — from Paris to Lyon, Bordeaux, Nantes, or Marseille — has become a defining feature of young French professional life. The TGV network and the rise of remote work have lowered the friction, but emotionally it is still treated as a significant decision, often discussed with friends over weeks before being announced.',
    },
  ],
  exercises: [
    {
      id: 'l29-e1',
      type: 'register_sort',
      question:
        'Sort each trigger according to the mood it takes after «que»: SUBJONCTIF, INDICATIF, or EXCEPTION (espérer que).',
      categories: ['SUBJONCTIF', 'INDICATIF', 'EXCEPTION'],
      items: [
        { expression: 'douter que', correct_category: 'SUBJONCTIF', explanation: 'Doubt → subjunctive.' },
        { expression: 'penser que (affirmatif)', correct_category: 'INDICATIF', explanation: 'Affirmative opinion → indicative.' },
        { expression: 'ne pas penser que', correct_category: 'SUBJONCTIF', explanation: 'Negated opinion → subjunctive.' },
        { expression: 'espérer que', correct_category: 'EXCEPTION', explanation: 'Expresses hope, but takes the INDICATIVE — the famous DELF B1 trap.' },
        { expression: 'être content que', correct_category: 'SUBJONCTIF', explanation: 'Emotion → subjunctive.' },
        { expression: 'il est probable que', correct_category: 'INDICATIF', explanation: 'Probability → indicative.' },
        { expression: 'il est peu probable que', correct_category: 'SUBJONCTIF', explanation: 'Improbability / doubt → subjunctive.' },
        { expression: 'avoir peur que', correct_category: 'SUBJONCTIF', explanation: 'Emotion (fear) → subjunctive.' },
        { expression: 'être sûr que (affirmatif)', correct_category: 'INDICATIF', explanation: 'Certainty → indicative.' },
        { expression: 'ne pas être sûr que', correct_category: 'SUBJONCTIF', explanation: 'Negated certainty = doubt → subjunctive.' },
      ],
    },
    {
      id: 'l29-e2',
      type: 'fill_blank',
      question:
        'Fill in the correct subjunctive form. «Je suis contente que tu ___ (être) là.»',
      correct_answer: 'sois',
      explanation: '«Être content que» triggers the subjunctive: «que tu sois» (être).',
      hints: ['être in subjunctive: que je sois, que tu sois, qu’il soit…'],
    },
    {
      id: 'l29-e3',
      type: 'mood_choice',
      question:
        'Affirmative «croire/penser que» take the indicative; their negative forms take the subjunctive. Choose the correct mood.',
      items: [
        {
          sentence: 'Je crois qu’il [BLANK] raison.',
          verb: 'avoir',
          indicative_form: 'a',
          subjunctive_form: 'ait',
          correct_answer: 'indicative',
          trigger: 'croire que (affirmatif)',
          explanation: 'Affirmative «croire que» → indicative «a».',
        },
        {
          sentence: 'Je ne crois pas qu’il [BLANK] raison.',
          verb: 'avoir',
          indicative_form: 'a',
          subjunctive_form: 'ait',
          correct_answer: 'subjunctive',
          trigger: 'ne pas croire que',
          explanation: 'Negated «croire que» = doubt → subjunctive «ait».',
        },
        {
          sentence: 'Je pense qu’elle [BLANK] disponible.',
          verb: 'être',
          indicative_form: 'est',
          subjunctive_form: 'soit',
          correct_answer: 'indicative',
          trigger: 'penser que (affirmatif)',
          explanation: 'Affirmative «penser que» → indicative.',
        },
        {
          sentence: 'Je ne pense pas qu’elle [BLANK] disponible.',
          verb: 'être',
          indicative_form: 'est',
          subjunctive_form: 'soit',
          correct_answer: 'subjunctive',
          trigger: 'ne pas penser que',
          explanation: 'Negated «penser que» → subjunctive.',
        },
        {
          sentence: 'J’espère qu’il [BLANK] à l’heure.',
          verb: 'venir',
          indicative_form: 'viendra',
          subjunctive_form: 'vienne',
          correct_answer: 'indicative',
          trigger: 'espérer que',
          explanation: 'EXCEPTION: «espérer que» always takes the indicative. Use the futur «viendra».',
        },
        {
          sentence: 'Je doute qu’il [BLANK] à l’heure.',
          verb: 'venir',
          indicative_form: 'vient',
          subjunctive_form: 'vienne',
          correct_answer: 'subjunctive',
          trigger: 'douter que',
          explanation: '«Douter que» = doubt → subjunctive «vienne».',
        },
        {
          sentence: 'Il est probable que le train [BLANK] en retard.',
          verb: 'être',
          indicative_form: 'est',
          subjunctive_form: 'soit',
          correct_answer: 'indicative',
          trigger: 'il est probable que',
          explanation: 'Probability is asserted as likely fact → indicative «est».',
        },
        {
          sentence: 'Il est peu probable que le train [BLANK] à l’heure.',
          verb: 'être',
          indicative_form: 'est',
          subjunctive_form: 'soit',
          correct_answer: 'subjunctive',
          trigger: 'il est peu probable que',
          explanation: 'Improbability = doubt → subjunctive «soit».',
        },
      ],
    },
    {
      id: 'l29-e4',
      type: 'fill_blank',
      question:
        'Choose the conjunction that fits the meaning AND the given mood (indicative / subjunctive). Options: «bien que», «parce que», «quand». Sentence: «___ il fasse froid, nous sortons quand même.»',
      options: ['bien que', 'parce que', 'quand'],
      correct_answer: 'bien que',
      explanation:
        'The verb «fasse» (subjonctif of faire) tells you the conjunction must trigger the subjunctive. «Bien que» (concession) is the only candidate that does. «Parce que» and «quand» both take the indicative.',
    },
    {
      id: 'l29-e5',
      type: 'transformation',
      question:
        'Rewrite each pair as a single sentence using a concessive conjunction («bien que» + subjunctive). Example: «Il est fatigué mais il travaille.» → «Bien qu’il soit fatigué, il travaille.»',
      instruction: 'affirmative_to_negative',
      items: [
        {
          original: 'Il pleut mais nous sortons.',
          transformed: 'Bien qu’il pleuve, nous sortons.',
          translation: 'Although it’s raining, we’re going out.',
        },
        {
          original: 'Elle est malade mais elle travaille.',
          transformed: 'Bien qu’elle soit malade, elle travaille.',
          translation: 'Although she’s sick, she’s working.',
        },
        {
          original: 'Je n’ai pas beaucoup de temps mais je viens.',
          transformed: 'Bien que je n’aie pas beaucoup de temps, je viens.',
          translation: 'Although I don’t have much time, I’m coming.',
        },
        {
          original: 'C’est cher mais ça vaut le coup.',
          transformed: 'Bien que ce soit cher, ça vaut le coup.',
          translation: 'Although it’s expensive, it’s worth it.',
        },
      ],
      explanation:
        '«Bien que» is the most common B1 concessive conjunction. It always triggers the subjunctive. «Quoique» is a literary equivalent.',
    },
    {
      id: 'l29-e6',
      type: 'error_correction',
      question:
        'Each sentence has either the wrong mood after a trigger or confuses «espérer que» with the subjunctive. Rewrite it correctly.',
      items: [
        {
          incorrect: 'Je suis content que tu es là.',
          correct: 'Je suis content que tu sois là.',
          explanation: 'Emotion trigger «être content que» → subjunctive «sois».',
        },
        {
          incorrect: 'J’espère qu’il vienne demain.',
          correct: 'J’espère qu’il viendra demain.',
          explanation: '«Espérer que» takes the INDICATIVE. Use «viendra» (futur) or «vient» (présent).',
        },
        {
          incorrect: 'Je doute qu’il a raison.',
          correct: 'Je doute qu’il ait raison.',
          explanation: '«Douter que» triggers the subjunctive «ait».',
        },
        {
          incorrect: 'Bien qu’il est tard, je continue.',
          correct: 'Bien qu’il soit tard, je continue.',
          explanation: '«Bien que» triggers the subjunctive «soit».',
        },
        {
          incorrect: 'Je ne pense pas qu’elle vient ce soir.',
          correct: 'Je ne pense pas qu’elle vienne ce soir.',
          explanation: 'Negated «penser que» = doubt → subjunctive «vienne».',
        },
      ],
    },
    {
      id: 'l29-e7',
      type: 'multiple_choice',
      question:
        'Which sentence is CORRECT?',
      options: [
        'J’espère qu’il soit là demain.',
        'J’espère qu’il sera là demain.',
        'Je doute qu’il sera là demain.',
        'Bien qu’il est là, je reste.',
      ],
      correct_answer: 'J’espère qu’il sera là demain.',
      explanation:
        '«Espérer que» takes the indicative (futur «sera»). The other options use the wrong mood: «espérer que» does NOT take subjunctive; «douter que» does (so «soit» would be needed); «bien que» does (so «soit» would be needed).',
    },
    {
      id: 'l29-e8',
      type: 'matching',
      question: 'Match each conjunction to its meaning AND the mood it triggers.',
      pairs: [
        { french: 'pour que', english: 'so that → subjonctif' },
        { french: 'avant que', english: 'before → subjonctif' },
        { french: 'bien que', english: 'although → subjonctif' },
        { french: 'à moins que', english: 'unless → subjonctif' },
        { french: 'parce que', english: 'because → indicatif' },
        { french: 'quand', english: 'when → indicatif' },
        { french: 'après que', english: 'after → indicatif (modern usage)' },
        { french: 'dès que', english: 'as soon as → indicatif' },
      ],
      explanation:
        'There is no logical rule — only memorisation. Start with the four most common subjunctive conjunctions (pour que, avant que, bien que, à moins que).',
    },
    {
      id: 'l29-e9',
      type: 'translation',
      question: 'Translate into French using a trigger from this lesson.',
      direction: 'en_to_fr',
      correct_answer: [
        'Je suis surpris(e) que tu partes si vite.',
        'J’ai peur qu’elle ne soit pas prête.',
        'Je doute qu’il vienne.',
        'Bien qu’il pleuve, nous sortons.',
        'J’espère qu’il viendra. (NOT «qu’il vienne» — espérer que → indicatif)',
      ],
      explanation:
        'Watch the mood signal of each trigger. The last item is the DELF B1 trap: «espérer que» takes the indicative even though it expresses a wish.',
    },
    {
      id: 'l29-e10',
      type: 'speaking_prompt',
      question:
        'In 4–5 sentences, react to a friend’s big news (a move, a new job, a new relationship). Use at least one emotion trigger + subjunctive, one negated opinion + subjunctive, one concessive «bien que», and one correct use of «j’espère que» + indicative.',
      model_answer:
        'Je suis vraiment contente que tu aies trouvé ce poste. Je ne pense pas que ce soit un mauvais choix, au contraire. Bien que je sois un peu triste de te voir partir, je comprends. Et j’espère que tout se passera bien à Lyon.',
      translation:
        'I’m really glad you got this job. I don’t think it’s a bad choice — quite the opposite. Although I’m a bit sad to see you leave, I understand. And I hope everything will go well in Lyon.',
      tip: 'The fourth sentence — «j’espère que tout se passera» (futur, indicatif) — is the DELF B1 marker. Get it wrong and examiners notice immediately.',
    },
  ],
}

const lesson30: IntermediateLessonData = {
  id: 30,
  title: 'The Present Conditional',
  title_fr: 'Le Conditionnel Présent',
  level: 'B1',
  description:
    'Form the present conditional and use it for politeness, advice, hypothesis, reported future, and (recognition only) the «conditionnel journalistique».',
  dialogue: {
    title: 'Une séance de mentorat',
    context:
      'Marc, a senior consultant, mentors Sofia, a young professional two years into her first job. They meet for a quarterly mentoring session — a formal feature of French companies since the 2018 plan de développement des compétences. Polite requests, advice, and hypothesis all appear naturally.',
    exchanges: [
      {
        speaker: 'Sofia',
        french: 'Bonjour Marc. Je voudrais vous demander un conseil, si vous avez quelques minutes.',
        english: 'Hello Marc. I’d like to ask you for some advice, if you have a few minutes.',
        pronunciation: 'bohn-ZHOOR mark. zhuh voo-DRAY voo duh-mahn-DAY ahn kohn-SAY, see voo zah-VAY kel-kuh mee-NEWT',
      },
      {
        speaker: 'Marc',
        french: 'Bien sûr. Tu pourrais me dire d’abord quel est ton objectif sur l’année ?',
        english: 'Of course. Could you tell me first what your goal is for the year?',
        pronunciation: 'byan SEWR. tew poo-RAY muh DEER dah-BOR kel ay tohn ohb-zhek-TEEF sewr lah-NAY',
      },
      {
        speaker: 'Sofia',
        french: 'J’aimerais changer de poste, mais je ne sais pas comment m’y prendre.',
        english: 'I’d like to change roles, but I don’t know how to go about it.',
        pronunciation: 'zhem-RAY shahn-ZHAY duh POHST, may zhuh nuh say pah koh-MAHN MEE prahndr',
      },
      {
        speaker: 'Marc',
        french: 'À ta place, je commencerais par en parler à ton responsable. Tu devrais lui présenter ton projet clairement.',
        english: 'If I were you, I’d start by talking to your manager. You should present your plan to them clearly.',
        pronunciation: 'ah tah PLAHSS, zhuh koh-mahn-suh-RAY par ahn par-LAY ah tohn res-pohn-SAHBL. tew duh-VRAY lwee pray-zahn-TAY tohn proh-ZHAY klair-MAHN',
      },
      {
        speaker: 'Sofia',
        french: 'Et si elle disait non ? Qu’est-ce que vous feriez à ma place ?',
        english: 'And if she said no? What would you do in my position?',
        pronunciation: 'ay see el dee-ZAY NOHN? kes-kuh voo fuh-RYAY ah mah PLAHSS',
      },
      {
        speaker: 'Marc',
        french: 'Dans ce cas, je demanderais une formation pour montrer ta motivation. Il faudrait aussi que tu identifies un poste précis.',
        english: 'In that case, I’d ask for some training to show your motivation. You’d also need to identify a specific role.',
        pronunciation: 'dahn suh KAH, zhuh duh-mahn-duh-RAY ewn for-mah-SYOHN poor mohn-TRAY tah moh-tee-vah-SYOHN. eel foh-DRAY oh-SEE kuh tew ee-dahn-tee-FEE ahn POHST pray-SEE',
      },
      {
        speaker: 'Sofia',
        french: 'Auriez-vous un exemple de message à lui envoyer ?',
        english: 'Would you have an example message I could send her?',
        pronunciation: 'oh-RYAY voo ahn eg-ZAHMPL duh meh-SAHZH ah lwee ahn-vwah-YAY',
      },
      {
        speaker: 'Marc',
        french: 'Oui. Je rédigerais quelque chose de très direct, deux paragraphes maximum.',
        english: 'Yes. I’d draft something very direct — two paragraphs maximum.',
        pronunciation: 'wee. zhuh ray-dee-zhuh-RAY kel-kuh shohz duh tray dee-REKT, duh pah-rah-GRAHF mak-see-MUM',
      },
      {
        speaker: 'Sofia',
        french: 'Très bien. Et pour le timing, ce serait mieux avant ou après l’entretien annuel ?',
        english: 'Great. And timing-wise, would it be better before or after the annual review?',
        pronunciation: 'tray BYAN. ay poor luh TIE-ming, suh suh-RAY MYUH ah-VAHN oo ah-PRAY lahn-truh-tyan ah-nyu-EL',
      },
      {
        speaker: 'Marc',
        french: 'Avant, sans hésiter. Comme ça, le sujet serait déjà ouvert.',
        english: 'Before, no question. That way, the topic would already be on the table.',
        pronunciation: 'ah-VAHN, sahn ay-zee-TAY. kohm SAH, luh sew-ZHAY suh-RAY day-ZHAH oo-VAIR',
      },
      {
        speaker: 'Sofia',
        french: 'J’ai lu hier que la direction lancerait un nouveau programme interne. Vous confirmez ?',
        english: 'I read yesterday that management was supposedly launching a new internal programme. Can you confirm?',
        pronunciation: 'zhay lew yair kuh lah dee-rek-SYOHN lahn-suh-RAY ahn noo-VOH proh-GRAHM an-TAIRN. voo kohn-fer-MAY',
      },
      {
        speaker: 'Marc',
        french: 'Le journal interne a écrit que ce serait pour octobre, mais rien n’est officiel. Prépare ton dossier dès maintenant.',
        english: 'The internal newsletter wrote it would supposedly be for October, but nothing is official. Get your file ready right now.',
        pronunciation: 'luh zhoor-NAHL an-TAIRN ah ay-KREE kuh suh suh-RAY poor ok-TOHBR, may ree-AHN nay oh-fee-SYEL. pray-PAHR tohn doss-YAY day man-tuh-NAHN',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Formation: infinitive (or futur stem) + imparfait endings',
      explanation:
        'The present conditional is built on the same stem as the futur simple: for regular verbs, the infinitive (drop -e from -re verbs first); for irregulars, the same irregular stem used in the futur. The endings are the imparfait endings: -ais, -ais, -ait, -ions, -iez, -aient. The 10 highest-frequency irregular stems are: être → ser-, avoir → aur-, aller → ir-, faire → fer-, venir → viendr-, pouvoir → pourr-, vouloir → voudr-, devoir → devr-, savoir → saur-, voir → verr-.',
      examples: [
        'Regular: parler → je parlerais, tu parlerais, il parlerait, nous parlerions, vous parleriez, ils parleraient',
        'Regular -re: prendre → je prendrais, tu prendrais, il prendrait…',
        'Irregular: être → je serais, tu serais, il serait, nous serions, vous seriez, ils seraient',
        'Irregular: aller → j’irais, tu irais, il irait, nous irions, vous iriez, ils iraient',
        'Irregular: faire → je ferais, tu ferais, il ferait…',
      ],
      tip:
        'The conditional and the imparfait share their endings. The difference is in the STEM: imparfait uses the nous-present stem; conditional uses the infinitive (or irregular futur stem). «Il allait» (imparfait, all-) vs «il irait» (conditional, ir-). Master the stem and you master the difference.',
    },
    {
      title: 'Three core uses: politeness, advice, hypothesis',
      explanation:
        'At B1, three uses cover almost all production: (1) POLITENESS — softening a request («je voudrais», «pourriez-vous», «auriez-vous»); (2) ADVICE — non-prescriptive recommendations («tu devrais», «il faudrait», «à ta place je…»); (3) HYPOTHESIS — the result clause of si + imparfait sentences («si j’avais le temps, je voyagerais»). The full si clause system arrives in L31; here, just plant the conditional as the result-clause tense.',
      examples: [
        'POLITENESS: Je voudrais un café, s’il vous plaît.',
        'POLITENESS: Pourriez-vous me dire l’heure ?',
        'ADVICE: Tu devrais parler à ton responsable.',
        'ADVICE: À ta place, je demanderais une formation.',
        'HYPOTHESIS: Si j’avais le temps, je voyagerais.',
      ],
      tip:
        'When a French speaker uses the conditional to ask for something, refuse with the same register. «Je voudrais un café» is met with «Bien sûr, ce serait quelle taille ?» — not the bare indicative «Oui, c’est laquelle ?» Match the politeness level.',
    },
    {
      title: 'Reported future + journalistic conditional (recognition)',
      explanation:
        'Two further uses you should RECOGNISE at B1 even if you do not produce them yet. (1) Reported future: in indirect speech with a past reporting verb, the futur simple shifts to the conditional («Il a dit qu’il viendrait»). Full treatment in L36. (2) Conditional journalistique: in news writing, the conditional flags unverified information («Le gouvernement annoncerait une réforme»). You should be able to read both without confusion; you will produce only the first by the end of L36.',
      examples: [
        'Reported future: Il a dit : « Je viendrai. » → Il a dit qu’il viendrait.',
        'Reported future: Elle a annoncé qu’elle partirait demain.',
        'Journalistic: Le président signerait l’accord cette semaine. (=allegedly)',
        'Journalistic: La société perdrait 200 emplois selon ses syndicats.',
        'Compare: Il signe (he is signing, fact) vs Il signerait (he is reportedly signing, unconfirmed).',
      ],
      tip:
        'The journalistic conditional is one of the easiest ways to spot the difference between French news writing and ordinary speech. When you read «aurait dit», «serait» in a headline, the journalist is signalling: this is not yet confirmed.',
    },
  ],
  vocabulary: [
    { french: 'je voudrais', english: 'I would like', category: 'Polite request', example: 'Je voudrais un renseignement.' },
    { french: 'je pourrais', english: 'I could', category: 'Polite request', example: 'Je pourrais te demander un service ?' },
    { french: 'pourriez-vous', english: 'could you (formal)', category: 'Polite request', example: 'Pourriez-vous m’aider ?' },
    { french: 'auriez-vous', english: 'would you have', category: 'Polite request', example: 'Auriez-vous un instant ?' },
    { french: 'tu devrais / vous devriez', english: 'you should', category: 'Advice', example: 'Tu devrais parler à ton chef.' },
    { french: 'il faudrait', english: 'it would be necessary / one should', category: 'Advice', example: 'Il faudrait préparer un dossier.' },
    { french: 'à ta place', english: 'if I were you', category: 'Advice', example: 'À ta place, je demanderais une formation.' },
    { french: 'à votre place', english: 'in your position (formal)', category: 'Advice' },
    { french: 'conseiller (de + inf)', english: 'to advise (to)', category: 'Advice', example: 'Je te conseille de demander tout de suite.' },
    { french: 'recommander (de + inf)', english: 'to recommend (to)', category: 'Advice' },
    { french: 'dans ce cas', english: 'in that case', category: 'Hypothesis marker', example: 'Dans ce cas, j’attendrais.' },
    { french: 'sinon', english: 'otherwise', category: 'Hypothesis marker' },
    { french: 'autrement', english: 'otherwise (formal)', category: 'Hypothesis marker' },
    { french: 'ser- (être)', english: 'cond. stem of être', category: 'Irregular conditional stem', example: 'Ce serait parfait.' },
    { french: 'aur- (avoir)', english: 'cond. stem of avoir', category: 'Irregular conditional stem', example: 'Tu aurais le temps ?' },
    { french: 'ir- (aller)', english: 'cond. stem of aller', category: 'Irregular conditional stem', example: 'J’irais à Lyon.' },
    { french: 'fer- (faire)', english: 'cond. stem of faire', category: 'Irregular conditional stem', example: 'Que ferais-tu ?' },
    { french: 'viendr- (venir)', english: 'cond. stem of venir', category: 'Irregular conditional stem' },
    { french: 'pourr- (pouvoir)', english: 'cond. stem of pouvoir', category: 'Irregular conditional stem' },
    { french: 'voudr- (vouloir)', english: 'cond. stem of vouloir', category: 'Irregular conditional stem' },
    { french: 'devr- (devoir)', english: 'cond. stem of devoir', category: 'Irregular conditional stem' },
    { french: 'saur- (savoir)', english: 'cond. stem of savoir', category: 'Irregular conditional stem' },
    { french: 'un mentor / une mentore', english: 'a mentor', category: 'Mentoring', example: 'Mon mentor m’a beaucoup aidée.' },
    { french: 'le mentorat', english: 'mentoring', category: 'Mentoring' },
    { french: 'un tuteur / une tutrice', english: 'a tutor / sponsor', category: 'Mentoring' },
    { french: 'une formation', english: 'a training course', category: 'Career', example: 'Je voudrais suivre une formation.' },
    { french: 'l’entretien annuel', english: 'annual review meeting', category: 'Career' },
    { french: 'le conditionnel journalistique', english: 'journalistic conditional', category: 'Media' },
  ],
  culturalNotes: [
    {
      title: 'Tutoiement et politesse au conditionnel',
      content:
        'Even in companies where colleagues use «tu» internally, the conditional remains the workhorse of polite professional French: «tu pourrais», «tu aurais», «tu devrais». Switching to the conditional is not about formality of address (vouvoyer vs tutoyer) but about softening the demand itself. A bare «Donne-moi» feels brusque; «Tu pourrais me passer» feels respectful even between close colleagues.',
    },
    {
      title: 'Le mentorat dans l’entreprise française',
      content:
        'Since the 2018 «plan de développement des compétences» reform, mentoring programmes («programmes de mentorat») have become much more visible in French companies. They are often paired with the annual entretien professionnel — a separate, legally-required career conversation distinct from the annual review. Sofia is participating in a real institutional structure, not just an informal chat.',
    },
    {
      title: 'Le conditionnel journalistique',
      content:
        'French news writing has a distinctive habit: when reporters cannot confirm information, they use the conditional («Le ministre signerait l’accord», «Le suspect serait en fuite»). Anglophone reporters use phrases like «reportedly» or «allegedly»; French reporters use a verb mood. Spotting this is a major reading-comprehension skill — recognised in DELF B1 but not tested productively.',
    },
  ],
  exercises: [
    {
      id: 'l30-e1',
      type: 'fill_blank',
      question:
        'Conjugate the verb in parentheses in the present conditional. «Si j’avais le temps, je ___ (voyager) plus.»',
      correct_answer: 'voyagerais',
      explanation: 'voyager + -ais (1st person sing) = voyagerais. Regular -er stem.',
      hints: ['Conditional stem of regular -er verbs = infinitive. Add imparfait ending -ais.'],
    },
    {
      id: 'l30-e2',
      type: 'matching',
      question: 'Match each irregular verb to its conditional stem.',
      pairs: [
        { french: 'être', english: 'ser-' },
        { french: 'avoir', english: 'aur-' },
        { french: 'aller', english: 'ir-' },
        { french: 'faire', english: 'fer-' },
        { french: 'venir', english: 'viendr-' },
        { french: 'pouvoir', english: 'pourr-' },
        { french: 'vouloir', english: 'voudr-' },
        { french: 'savoir', english: 'saur-' },
        { french: 'voir', english: 'verr-' },
        { french: 'devoir', english: 'devr-' },
      ],
      explanation:
        'These ten stems also serve as the futur simple stems. Once you have them, you have both tenses simultaneously.',
    },
    {
      id: 'l30-e3',
      type: 'transformation',
      question:
        'Rewrite each direct request as a polite conditional version. Example: «Vous avez l’heure ?» → «Auriez-vous l’heure ?»',
      instruction: 'informal_to_formal',
      items: [
        {
          original: 'Tu peux m’aider ?',
          transformed: 'Tu pourrais m’aider ?',
          translation: 'Could you help me?',
        },
        {
          original: 'Vous avez un stylo ?',
          transformed: 'Auriez-vous un stylo ?',
          translation: 'Would you have a pen?',
        },
        {
          original: 'Vous me dites où est la sortie ?',
          transformed: 'Pourriez-vous me dire où est la sortie ?',
          translation: 'Could you tell me where the exit is?',
        },
        {
          original: 'Je veux un café.',
          transformed: 'Je voudrais un café.',
          translation: 'I would like a coffee.',
        },
        {
          original: 'Vous êtes libre demain ?',
          transformed: 'Seriez-vous libre demain ?',
          translation: 'Would you be free tomorrow?',
        },
      ],
      explanation:
        '«Voudrais», «pourrais», «aurais» and their formal counterparts soften any request. Using them in a café, shop, or office is not optional — it is the expected register.',
    },
    {
      id: 'l30-e4',
      type: 'mood_choice',
      question:
        'For each sentence, choose between the futur (real plan) and the conditionnel (hypothesis or politeness).',
      items: [
        {
          sentence: 'Demain, je [BLANK] à 8 heures comme d’habitude.',
          verb: 'partir',
          indicative_form: 'partirai',
          subjunctive_form: 'partirais',
          correct_answer: 'indicative',
          trigger: 'real plan for tomorrow',
          explanation: 'A concrete plan in the future → futur simple «partirai».',
        },
        {
          sentence: 'Si j’avais le choix, je [BLANK] à 10 heures.',
          verb: 'partir',
          indicative_form: 'partirai',
          subjunctive_form: 'partirais',
          correct_answer: 'subjunctive',
          trigger: 'si + imparfait (hypothesis)',
          explanation: 'After «si + imparfait», the result clause is in the conditional «partirais».',
        },
        {
          sentence: '___ -vous un instant pour m’aider ?',
          verb: 'avoir',
          indicative_form: 'aurez',
          subjunctive_form: 'auriez',
          correct_answer: 'subjunctive',
          trigger: 'polite request',
          explanation: 'Polite request → conditional «auriez-vous».',
        },
        {
          sentence: 'Je suis sûr qu’elle [BLANK] le poste.',
          verb: 'obtenir',
          indicative_form: 'obtiendra',
          subjunctive_form: 'obtiendrait',
          correct_answer: 'indicative',
          trigger: 'certainty about future',
          explanation: '«Je suis sûr que» + asserted future → futur simple «obtiendra».',
        },
        {
          sentence: 'À ta place, je [BLANK] cette formation.',
          verb: 'choisir',
          indicative_form: 'choisirai',
          subjunctive_form: 'choisirais',
          correct_answer: 'subjunctive',
          trigger: 'advice (à ta place)',
          explanation: 'Advice → conditional «choisirais».',
        },
        {
          sentence: 'Demain matin, on [BLANK] le rapport ensemble.',
          verb: 'finir',
          indicative_form: 'finira',
          subjunctive_form: 'finirait',
          correct_answer: 'indicative',
          trigger: 'agreed future plan',
          explanation: 'Plan for tomorrow → futur simple «finira».',
        },
      ],
    },
    {
      id: 'l30-e5',
      type: 'error_correction',
      question:
        'Each sentence confuses the conditional with the imparfait (or vice versa) by using the wrong stem. Rewrite it correctly.',
      items: [
        {
          incorrect: 'Si j’avais le temps, j’allais à Lyon.',
          correct: 'Si j’avais le temps, j’irais à Lyon.',
          explanation:
            '«Si + imparfait» needs a CONDITIONAL result. Imparfait of aller = allais (stem all-); conditional of aller = irais (stem ir-).',
        },
        {
          incorrect: 'À ta place, je parlerai à mon chef.',
          correct: 'À ta place, je parlerais à mon chef.',
          explanation:
            'Advice with «à ta place» requires the CONDITIONAL «parlerais», not the futur «parlerai». The «s» before the final vowel is the conditional marker.',
        },
        {
          incorrect: 'Je voudrai un café, s’il vous plaît.',
          correct: 'Je voudrais un café, s’il vous plaît.',
          explanation:
            'The polite formula is the CONDITIONAL «voudrais». «Voudrai» (futur) means «I will want» — wrong register and wrong meaning here.',
        },
        {
          incorrect: 'Il sera à l’heure si tu lui rappelais.',
          correct: 'Il serait à l’heure si tu lui rappelais.',
          explanation:
            'After «si + imparfait», the result clause is in the conditional. «Sera» (futur) is wrong; «serait» (conditional) is required.',
        },
      ],
    },
    {
      id: 'l30-e6',
      type: 'multiple_choice',
      question:
        'Identify the USE of the conditional in: «Le ministre démissionnerait dans la journée.»',
      options: [
        'Politeness',
        'Advice',
        'Hypothesis (si + imparfait)',
        'Journalistic — unverified information',
      ],
      correct_answer: 'Journalistic — unverified information',
      explanation:
        'In a news headline with no «si» clause and no polite request, the conditional flags information the journalist cannot yet confirm. «Reportedly the minister is resigning today.»',
    },
    {
      id: 'l30-e7',
      type: 'translation',
      question: 'Translate into French using the conditional.',
      direction: 'en_to_fr',
      correct_answer: [
        'Je voudrais changer de poste.',
        'Pourriez-vous m’aider, s’il vous plaît ?',
        'À ta place, je demanderais une formation.',
        'Si j’avais le temps, je voyagerais plus.',
        'Il faudrait préparer un dossier complet.',
      ],
      explanation:
        'Politeness (voudrais / pourriez), advice (à ta place / faudrait), and hypothesis (si + imparfait → conditionnel) are the three core B1 uses.',
    },
    {
      id: 'l30-e8',
      type: 'fill_blank',
      question:
        'Fill in the conditional form. «Si nous avions plus de temps, nous ___ (faire) une pause.»',
      correct_answer: 'ferions',
      explanation:
        'faire is irregular: cond. stem fer-. 1st-person plural ending = -ions → «ferions».',
      hints: ['Irregular stem: fer-. Endings are the imparfait endings (-ions for nous).'],
    },
    {
      id: 'l30-e9',
      type: 'register_sort',
      question:
        'Sort each conditional sentence by its USE: politeness, advice, hypothesis, reported future, or journalistic.',
      categories: ['politeness', 'advice', 'hypothesis', 'reported_future', 'journalistic'],
      items: [
        { expression: 'Pourriez-vous patienter ?', correct_category: 'politeness', explanation: 'Softened request.' },
        { expression: 'Tu devrais parler à ton manager.', correct_category: 'advice', explanation: '«Devoir» in the conditional = non-prescriptive advice.' },
        { expression: 'Si j’avais le choix, je partirais demain.', correct_category: 'hypothesis', explanation: 'Result clause of si + imparfait.' },
        { expression: 'Il a dit qu’il viendrait à 18h.', correct_category: 'reported_future', explanation: 'Reported direct speech; the futur «viendra» becomes «viendrait».' },
        { expression: 'Le suspect serait en fuite.', correct_category: 'journalistic', explanation: 'News report: unverified information.' },
        { expression: 'À votre place, je signerais.', correct_category: 'advice', explanation: 'Advice with «à votre place».' },
        { expression: 'Je voudrais un thé, s’il vous plaît.', correct_category: 'politeness', explanation: 'Standard café register.' },
        { expression: 'Le président signerait l’accord cette semaine.', correct_category: 'journalistic', explanation: 'Unconfirmed news.' },
      ],
    },
    {
      id: 'l30-e10',
      type: 'speaking_prompt',
      question:
        'You are giving advice to a friend who wants to change jobs. In 4–5 sentences, use: one polite request (using the conditional with you), one piece of advice with «tu devrais» or «à ta place», one hypothesis with «si + imparfait + conditionnel», and one mention of an unconfirmed plan in the conditional.',
      model_answer:
        'Pourrais-tu me décrire le poste qui t’intéresse en détail ? À ta place, je commencerais par en parler à ton responsable. Si tu avais une formation supplémentaire, ce serait sans doute plus facile à négocier. J’ai entendu que l’entreprise lancerait un programme interne — vérifie l’info avant de bouger.',
      translation:
        'Could you describe the role you’re interested in in detail? If I were you, I’d start by speaking to your manager. If you had additional training, it would probably be easier to negotiate. I heard the company is supposedly launching an internal programme — check the info before you make a move.',
      tip: 'The four uses in one paragraph: politeness (pourrais-tu), advice (à ta place je…), hypothesis (si tu avais → ce serait), journalistic (lancerait). This is the B1 conditional in production.',
    },
  ],
}

const lesson31: IntermediateLessonData = {
  id: 31,
  title: 'Si Clauses',
  title_fr: 'Les Phrases Hypothétiques',
  level: 'B1',
  description:
    'Master the complete three-type si clause system — real conditions, hypothetical present, unreal past — and avoid the «si + conditionnel» trap.',
  dialogue: {
    title: 'Le pitch entrepreneurial',
    context:
      'Inès and Romain are two young entrepreneurs working out of a Paris co-working space. They have one week before pitching their startup to a panel of investors at Station F. All three si types appear naturally in the conversation: what will happen if they launch now, what would happen if they had more funding, what would have happened if they had started two years earlier.',
    exchanges: [
      {
        speaker: 'Inès',
        french: 'Bon. Si on lance le produit en septembre, on aura trois mois pour tester avant Noël.',
        english: 'OK. If we launch the product in September, we’ll have three months to test before Christmas.',
        pronunciation: 'bohn. see ohn lahnss luh proh-DWEE ahn sep-TAHMBR, ohn oh-RAH twah MWAH poor tes-TAY ah-VAHN noh-EL',
      },
      {
        speaker: 'Romain',
        french: 'Et si les premiers clients répondent bien, on cherchera un investisseur en janvier.',
        english: 'And if the first customers respond well, we’ll look for an investor in January.',
        pronunciation: 'ay see lay pruh-MYAY klee-AHN ray-POHND byan, ohn shair-shuh-RAH ahn an-vehs-tee-SURR ahn zhahn-VYAY',
      },
      {
        speaker: 'Inès',
        french: 'D’accord. Mais si on avait plus de budget aujourd’hui, on recruterait un développeur tout de suite.',
        english: 'Agreed. But if we had more budget today, we’d hire a developer right away.',
        pronunciation: 'dah-KOR. may see ohn nah-VAY ploos duh bud-ZHAY oh-zhoor-DWEE, ohn ruh-krew-tuh-RAY ahn day-vlohp-URR too duh SWEET',
      },
      {
        speaker: 'Romain',
        french: 'Je sais. Mais si on attendait encore six mois, le marché changerait peut-être complètement.',
        english: 'I know. But if we waited another six months, the market might change completely.',
        pronunciation: 'zhuh SAY. may see ohn nah-tahn-DAY ahn-KOR see MWAH, luh mar-SHAY shahn-zhuh-RAY puh-TET-ruh kohn-plet-MAHN',
      },
      {
        speaker: 'Inès',
        french: 'Au cas où la banque refuserait, on garderait une version légère du produit.',
        english: 'In case the bank refuses, we’d keep a lightweight version of the product.',
        pronunciation: 'oh KAH oo lah BAHNK ruh-few-zuh-RAY, ohn gar-duh-RAY ewn vair-SYOHN lay-ZHAIR dew proh-DWEE',
      },
      {
        speaker: 'Romain',
        french: 'Maintenant le passé. Si on avait commencé il y a deux ans, on aurait eu beaucoup moins de concurrence.',
        english: 'Now the past. If we’d started two years ago, we’d have had much less competition.',
        pronunciation: 'man-tuh-NAHN luh pah-SAY. see ohn nah-VAY koh-mahn-SAY eel yah duh ZAHN, ohn noh-RAY ew boh-KOO mwan duh kohn-kew-RAHNSS',
      },
      {
        speaker: 'Inès',
        french: 'C’est vrai. Mais à l’époque on n’avait pas l’équipe — on n’aurait jamais tenu trois mois.',
        english: 'True. But back then we didn’t have the team — we’d never have lasted three months.',
        pronunciation: 'say VRAY. may ah lay-POHK ohn nah-VAY pah lay-KEEP — ohn noh-RAY zhah-MAY tuh-NEW twah MWAH',
      },
      {
        speaker: 'Romain',
        french: 'Donc focus présent. Si tu présentes les chiffres, je parlerai du produit.',
        english: 'So focus on the present. If you present the numbers, I’ll talk about the product.',
        pronunciation: 'dohnk foh-KEWSS pray-ZAHN. see tew pray-ZAHNT lay SHEEFR, zhuh par-luh-RAY dew proh-DWEE',
      },
      {
        speaker: 'Inès',
        french: 'Parfait. Sinon, le jury ne comprendra pas notre modèle économique.',
        english: 'Perfect. Otherwise the panel won’t understand our business model.',
        pronunciation: 'par-FAY. see-NOHN, luh zhew-REE nuh kohn-prahn-DRAH pah notr moh-DEL ay-koh-noh-MEEK',
      },
      {
        speaker: 'Romain',
        french: 'Et si le jury posait une question vraiment difficile, tu répondrais comment ?',
        english: 'And if the panel asked a really tough question, how would you answer?',
        pronunciation: 'ay see luh zhew-REE poh-ZAY ewn kes-TYOHN vray-MAHN dee-fee-SEEL, tew ray-pohn-DRAY koh-MAHN',
      },
      {
        speaker: 'Inès',
        french: 'Calmement. Je dirais qu’on n’a pas toutes les réponses, mais qu’on a une méthode claire.',
        english: 'Calmly. I’d say we don’t have all the answers, but we have a clear method.',
        pronunciation: 'kal-muh-MAHN. zhuh dee-RAY kohn nah pah toot lay ray-POHNSS, may kohn nah ewn may-TOHD klair',
      },
      {
        speaker: 'Romain',
        french: 'Bonne réponse. Alors si tout se passe bien, on créera trois postes l’an prochain.',
        english: 'Good answer. So if everything goes well, we’ll create three jobs next year.',
        pronunciation: 'bohn ray-POHNSS. ah-LOR see too suh pahss byan, ohn kray-uh-RAH twah POHST lahn proh-SHAN',
      },
      {
        speaker: 'Inès',
        french: 'Préparons le pitch comme si tout dépendait de lui.',
        english: 'Let’s prepare the pitch as if everything depended on it.',
        pronunciation: 'pray-pah-ROHN luh peetch kohm see too day-pahn-DAY duh LWEE',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'The complete si clause system — three types side by side',
      explanation:
        'French has three structured patterns for si clauses, each with a fixed tense pairing. Type 1 (REAL/OPEN condition): si + présent → futur simple. Type 2 (UNREAL PRESENT): si + imparfait → conditionnel présent. Type 3 (UNREAL PAST): si + plus-que-parfait → conditionnel passé. The si clause and the result clause can appear in either order, but the tense pairing is fixed. Type 3 receives a full treatment in L32–33; here, learn to recognise it and use it occasionally.',
      examples: [
        'Type 1: Si tu travailles, tu réussiras. (open condition, both real)',
        'Type 2: Si tu travaillais, tu réussirais. (hypothesis about now or future, unlikely or imagined)',
        'Type 3: Si tu avais travaillé, tu aurais réussi. (about the past, didn’t happen)',
        'Order can flip: Tu réussiras si tu travailles. (Type 1)',
        'Mixed: Si j’avais su (Type 3), je ne serais pas venu (Type 3).',
      ],
      tip:
        'The tense pairing is fixed and non-negotiable. Memorise it as three columns: présent–futur, imparfait–conditionnel, PQP–conditionnel passé. Each row is a sealed pair.',
    },
    {
      title: 'NEVER «si + conditionnel» — and the «au cas où» trap',
      explanation:
        'The single most common B1 error: putting a conditional verb immediately after «si». «Si je saurais», «si j’aurais» — both impossible in French. The conditional lives in the RESULT clause only. After si, use présent (Type 1), imparfait (Type 2), or plus-que-parfait (Type 3). The trap: «au cas où» (in case) DOES take the conditional, NOT the subjunctive. It looks like a si clause but follows different rules.',
      examples: [
        'WRONG: Si je saurais, je viendrais. ✗',
        'RIGHT: Si je savais, je viendrais. ✓',
        'WRONG: Si j’aurais le temps, je voyagerais. ✗',
        'RIGHT: Si j’avais le temps, je voyagerais. ✓',
        '«Au cas où» + conditionnel: Au cas où il pleuvrait, prends un parapluie. ✓',
      ],
      tip:
        'Two simple rules: (1) after «si», never a conditional verb — only présent/imparfait/PQP; (2) «au cas où» = conditional (NOT subjunctive). Master these two and you avoid 90% of B1 hypothesis errors.',
    },
  ],
  vocabulary: [
    { french: 'si + présent → futur simple', english: 'if + present → future', category: 'Si type 1 (real/open)', example: 'Si tu viens, je serai content.' },
    { french: 'si + imparfait → conditionnel', english: 'if + imperfect → conditional', category: 'Si type 2 (unreal present)', example: 'Si tu venais, je serais content.' },
    { french: 'si + plus-que-parfait → conditionnel passé', english: 'if + pluperfect → past conditional', category: 'Si type 3 (unreal past)', example: 'Si tu étais venu, j’aurais été content.' },
    { french: 'au cas où', english: 'in case', category: 'Hypothesis marker', note: '+ conditionnel (TRAP — not subjunctive!)', example: 'Au cas où il pleuvrait, prends un parapluie.' },
    { french: 'sauf si', english: 'unless / except if', category: 'Hypothesis marker', note: '+ indicative (like si)', example: 'Je viens, sauf si je suis malade.' },
    { french: 'sinon', english: 'otherwise', category: 'Hypothesis marker' },
    { french: 'autrement', english: 'otherwise (formal)', category: 'Hypothesis marker' },
    { french: 'à condition que', english: 'provided that', category: 'Hypothesis marker', note: '+ subjonctif' },
    { french: 'pourvu que', english: 'provided that', category: 'Hypothesis marker', note: '+ subjonctif' },
    { french: 'en supposant que', english: 'supposing that', category: 'Hypothesis marker', note: '+ subjonctif' },
    { french: 'comme si', english: 'as if', category: 'Hypothesis marker', note: '+ imparfait (or PQP for past)', example: 'Il parle comme si tout dépendait de lui.' },
    { french: 'à ta place', english: 'if I were you', category: 'Hypothesis marker' },
    { french: 'dans ce cas', english: 'in that case', category: 'Hypothesis marker' },
    { french: 'maintenant', english: 'now (present reference)', category: 'Time anchor' },
    { french: 'à l’époque', english: 'at the time / back then', category: 'Time anchor', example: 'À l’époque, on n’avait pas l’équipe.' },
    { french: 'à ce moment-là', english: 'at that point', category: 'Time anchor' },
    { french: 'un investisseur / une investisseuse', english: 'an investor', category: 'Startup vocab' },
    { french: 'un pitch', english: 'a pitch', category: 'Startup vocab' },
    { french: 'un modèle économique', english: 'a business model', category: 'Startup vocab' },
    { french: 'le marché', english: 'the market', category: 'Startup vocab' },
    { french: 'la concurrence', english: 'competition', category: 'Startup vocab', example: 'La concurrence sur ce marché est forte.' },
    { french: 'un espace de coworking', english: 'a co-working space', category: 'Startup vocab' },
    { french: 'lancer un produit', english: 'to launch a product', category: 'Startup vocab' },
    { french: 'tester', english: 'to test', category: 'Startup vocab' },
    { french: 'recruter', english: 'to hire', category: 'Startup vocab' },
    { french: 'le jury', english: 'the panel', category: 'Pitch vocab' },
    { french: 'créer des postes', english: 'to create jobs', category: 'Startup vocab' },
    { french: 'tenir', english: 'to last / hold out', category: 'Startup vocab', example: 'On n’aurait pas tenu trois mois.' },
  ],
  culturalNotes: [
    {
      title: 'La French Tech et Station F',
      content:
        'The French Tech label, created in 2013, brought French startups together under a single national identity. Station F in Paris (opened 2017) is the largest startup campus in the world by floor area — 34,000 m² in a former rail freight building. Pitches there carry real weight in the French startup ecosystem, and Inès and Romain’s scenario is anything but artificial.',
    },
    {
      title: 'Le risque professionnel à la française',
      content:
        'Despite the rise of French Tech, French culture remains more risk-averse than Anglo-American cultures: the «fonctionnaire» path (stable public-sector employment) is still seen by many families as the safest career. Young entrepreneurs often negotiate hard with their parents before taking the leap — which is why entrepreneurship dialogues in French use so many «si» hypothetical structures: candidates are constantly weighing alternative futures.',
    },
    {
      title: 'Le portage salarial — le compromis français',
      content:
        'A uniquely French structure: «portage salarial» lets independent professionals work freelance while being paid via an umbrella company that handles social charges, giving them an employee status with unemployment rights. It is one of several French institutional answers to the «si je voulais lancer ma boîte mais sans le risque…» question.',
    },
  ],
  exercises: [
    {
      id: 'l31-e1',
      type: 'multiple_choice',
      question:
        'Identify the TYPE of si clause: «Si j’avais eu le temps, je serais venu.»',
      options: [
        'Type 1 (real/open condition)',
        'Type 2 (unreal present)',
        'Type 3 (unreal past)',
        'Not a si clause',
      ],
      correct_answer: 'Type 3 (unreal past)',
      explanation:
        'si + plus-que-parfait («avais eu») + conditionnel passé («serais venu») = Type 3, describing something that didn’t happen in the past.',
    },
    {
      id: 'l31-e2',
      type: 'fill_blank',
      question:
        'Type 1 — complete the result clause with the futur simple. «Si tu travailles ce week-end, tu ___ (finir) le projet.»',
      correct_answer: 'finiras',
      explanation:
        'Type 1 = real/open condition. Si + présent → futur simple. finir → tu finiras.',
      hints: ['Type 1 pairing: présent (si clause) → futur simple (result).'],
    },
    {
      id: 'l31-e3',
      type: 'fill_blank',
      question:
        'Type 2 — complete the result clause with the conditionnel présent. «Si j’avais plus de temps, je ___ (voyager) plus.»',
      correct_answer: 'voyagerais',
      explanation:
        'Type 2 = unreal/hypothetical present. Si + imparfait → conditionnel. voyager → je voyagerais.',
      hints: ['Type 2 pairing: imparfait (si clause) → conditionnel présent (result).'],
    },
    {
      id: 'l31-e4',
      type: 'mood_choice',
      question:
        'After «si» you NEVER use the conditional. Choose the correct verb form (the «indicative» option here represents the correct si-clause tense; the «subjunctive» option represents the wrong conditional form).',
      items: [
        {
          sentence: 'Si je [BLANK] le temps, je voyagerais.',
          verb: 'avoir',
          indicative_form: 'avais',
          subjunctive_form: 'aurais',
          correct_answer: 'indicative',
          trigger: 'after si (Type 2)',
          explanation: 'After si in Type 2, use the IMPARFAIT «avais», never the conditional «aurais».',
        },
        {
          sentence: 'Si tu [BLANK], tu réussirais.',
          verb: 'travailler',
          indicative_form: 'travaillais',
          subjunctive_form: 'travaillerais',
          correct_answer: 'indicative',
          trigger: 'after si (Type 2)',
          explanation: 'Si + imparfait, NOT si + conditionnel. «Travaillais», not «travaillerais».',
        },
        {
          sentence: 'Si elle [BLANK] hier, on aurait pu commencer.',
          verb: 'venir',
          indicative_form: 'était venue',
          subjunctive_form: 'serait venue',
          correct_answer: 'indicative',
          trigger: 'after si (Type 3)',
          explanation: 'Type 3: si + PQP («était venue»), NOT si + conditionnel passé.',
        },
        {
          sentence: 'Si tu [BLANK] demain, on ira ensemble.',
          verb: 'pouvoir',
          indicative_form: 'peux',
          subjunctive_form: 'pourrais',
          correct_answer: 'indicative',
          trigger: 'after si (Type 1)',
          explanation: 'Type 1: si + présent. «Peux», not the conditional «pourrais».',
        },
      ],
    },
    {
      id: 'l31-e5',
      type: 'matching',
      question: 'Match each si clause to the only result clause that pairs with it correctly.',
      pairs: [
        { french: 'Si j’ai le temps,', english: 'je viendrai. (Type 1: présent → futur)' },
        { french: 'Si j’avais le temps,', english: 'je viendrais. (Type 2: imparfait → cond.)' },
        { french: 'Si j’avais eu le temps,', english: 'je serais venu. (Type 3: PQP → cond. passé)' },
        { french: 'Au cas où il pleuvrait,', english: 'prends un parapluie. (cond. → impératif)' },
      ],
      explanation:
        'Three si types + the «au cas où» exception. Notice that «au cas où» does NOT pattern like «si» — it takes the conditional directly.',
    },
    {
      id: 'l31-e6',
      type: 'error_correction',
      question:
        'Each sentence violates a si clause rule. Rewrite it correctly.',
      items: [
        {
          incorrect: 'Si je saurais la réponse, je te la dirais.',
          correct: 'Si je savais la réponse, je te la dirais.',
          explanation:
            'NEVER «si + conditionnel». In Type 2, the si clause takes the imparfait «savais».',
        },
        {
          incorrect: 'Si tu aurais le temps, tu pourrais m’aider.',
          correct: 'Si tu avais le temps, tu pourrais m’aider.',
          explanation:
            'NEVER «si + conditionnel». Type 2 requires si + imparfait → conditionnel.',
        },
        {
          incorrect: 'Si j’avais plus d’argent, j’achète une voiture.',
          correct: 'Si j’avais plus d’argent, j’achèterais une voiture.',
          explanation:
            'After si + imparfait (Type 2), the result clause must be in the CONDITIONNEL «achèterais», not the présent.',
        },
        {
          incorrect: 'Au cas où il viendrait pas, on commencera sans lui.',
          correct: 'Au cas où il ne viendrait pas, on commencerait sans lui.',
          explanation:
            'Two corrections: (1) full negation «ne… pas», not just «pas»; (2) «au cas où» + conditionnel triggers a conditional in the main clause too («on commencerait»), not a futur.',
        },
        {
          incorrect: 'Si on avait commencé plus tôt, on a moins de problèmes.',
          correct: 'Si on avait commencé plus tôt, on aurait eu moins de problèmes.',
          explanation:
            'Type 3 = PQP → conditionnel passé. The result must also be in the past conditional.',
        },
      ],
    },
    {
      id: 'l31-e7',
      type: 'translation',
      question: 'Translate each sentence, paying attention to the si type required.',
      direction: 'en_to_fr',
      correct_answer: [
        'Si tu viens demain, nous irons au cinéma.',
        'Si j’avais plus d’argent, je voyagerais plus.',
        'Si j’avais su, je ne serais pas venu.',
        'Au cas où il pleuvrait, prends un parapluie.',
        'Comme si tout dépendait de lui.',
      ],
      explanation:
        'Open condition → Type 1. Present hypothesis → Type 2. Past regret → Type 3. «Au cas où» = conditional. «Comme si» = imparfait or PQP.',
      hints: [
        '«If you come tomorrow…» — open, real → Type 1.',
        '«If I had more money…» — present hypothesis → Type 2.',
        '«If I had known…» — past regret → Type 3.',
        '«In case it rains…» — au cas où + conditional.',
        '«As if everything depended on him.» — comme si + imparfait.',
      ],
    },
    {
      id: 'l31-e8',
      type: 'fill_blank',
      question:
        'Type 3 preview — fill in the conditionnel passé. «Si tu avais étudié plus, tu ___ (réussir) l’examen.»',
      correct_answer: 'aurais réussi',
      explanation:
        'Type 3: si + PQP → conditionnel passé. réussir → tu aurais réussi (auxiliary avoir in conditional + past participle).',
      hints: ['Conditional of avoir (tu aurais) + past participle (réussi).'],
    },
    {
      id: 'l31-e9',
      type: 'multiple_choice',
      question:
        'Which sentence correctly uses «au cas où»?',
      options: [
        'Au cas où il vienne, préviens-moi.',
        'Au cas où il viendrait, préviens-moi.',
        'Au cas où il vient, préviens-moi.',
        'Au cas où il serait venu, préviens-moi.',
      ],
      correct_answer: 'Au cas où il viendrait, préviens-moi.',
      explanation:
        '«Au cas où» ALWAYS takes the conditionnel — NOT the subjunctive, NOT the indicative. «Viendrait» is the conditional of venir.',
    },
    {
      id: 'l31-e10',
      type: 'speaking_prompt',
      question:
        'You are pitching a project or describing a life decision. In 5 sentences, use ONE example of each si type (Type 1, Type 2, Type 3) plus ONE sentence with «au cas où» + conditionnel.',
      model_answer:
        'Si je lance mon projet en janvier, j’aurai une année complète pour tester. Si j’avais plus de temps libre maintenant, je préparerais un meilleur business plan. Si j’avais commencé il y a deux ans, j’aurais évité beaucoup d’erreurs. Au cas où le premier client refuserait, je prévoirais une version simplifiée. Donc je travaille comme si tout dépendait des trois prochains mois.',
      translation:
        'If I launch my project in January, I’ll have a full year to test. If I had more free time now, I’d prepare a better business plan. If I’d started two years ago, I’d have avoided many mistakes. In case the first client refuses, I’d plan a simplified version. So I’m working as if everything depended on the next three months.',
      tip: 'The mark of a B1 speaker is keeping the three tense pairings clean while moving between them. Never let a conditional slip into a si clause.',
    },
  ],
}

const lesson32: IntermediateLessonData = {
  id: 32,
  title: 'The Pluperfect',
  title_fr: 'Le Plus-que-parfait',
  level: 'B1',
  description:
    'Use the plus-que-parfait to describe an event prior to another past event — and lay the groundwork for the complete Type 3 si clause system.',
  dialogue: {
    title: 'Le retour d’expérience',
    context:
      'Claire and Yanis run a post-mortem («retour d’expérience» or REX) on a project that delivered late. They alternate between passé composé (what happened during the project) and plus-que-parfait (what had happened — or hadn’t — before each of those moments). The conversation models how French professional culture analyses sequences of decisions and prior assumptions.',
    exchanges: [
      {
        speaker: 'Claire',
        french: 'Bon, on reprend depuis le début. Quand le client a appelé jeudi, nous avions déjà envoyé le fichier.',
        english: 'Right, let’s start from the beginning. When the client called on Thursday, we’d already sent the file.',
        pronunciation: 'bohn, ohn ruh-PRAHN duh-PWEE luh day-BEW. kahn luh klee-AHN ah ah-puh-LAY ZHUH-dee, noo zah-VYOHN day-ZHAH ahn-vwah-YAY luh fee-SHYAY',
      },
      {
        speaker: 'Yanis',
        french: 'Oui, mais la veille, Karim avait vérifié les chiffres, et personne n’avait relu la dernière page.',
        english: 'Yes, but the day before, Karim had checked the numbers, and no one had proofread the last page.',
        pronunciation: 'wee, may lah VAY, kah-REEM ah-VAY vay-ree-fee-AY lay SHEEFR, ay pair-SOHN nah-VAY ruh-LEW lah dair-NYAIR PAHZH',
      },
      {
        speaker: 'Claire',
        french: 'Exactement. J’avais prévu de le faire après la réunion de 17 h, mais je suis partie plus tôt.',
        english: 'Exactly. I’d planned to do it after the 5pm meeting, but I left earlier.',
        pronunciation: 'eg-zak-tuh-MAHN. zhah-VAY pray-VEW duh luh fair ah-PRAY lah ray-yu-NYOHN duh dees-SET URR, may zhuh swee par-TEE plew TOH',
      },
      {
        speaker: 'Yanis',
        french: 'Lorsque l’erreur est apparue le matin suivant, le dossier était déjà parti chez le client.',
        english: 'When the error came to light the next morning, the file had already gone to the client.',
        pronunciation: 'lor-SKUH lay-RURR ay tah-pah-REW luh mah-TAHN swee-VAHN, luh doss-YAY ay-TAY day-ZHAH par-TEE shay luh klee-AHN',
      },
      {
        speaker: 'Claire',
        french: 'Et si on avait attendu une heure de plus, on aurait évité tout ça.',
        english: 'And if we’d waited one more hour, we’d have avoided all of this.',
        pronunciation: 'ay see ohn nah-VAY ah-tahn-DEW ewn URR duh PLOOSS, ohn noh-RAY ay-vee-TAY too SAH',
      },
      {
        speaker: 'Yanis',
        french: 'C’est vrai. Mais à ce moment-là, je pensais que tout était clair. Je m’étais trompé d’hypothèse.',
        english: 'True. But at that moment, I thought everything was clear. I’d gotten the wrong assumption.',
        pronunciation: 'say VRAY. may ah suh moh-MAHN LAH, zhuh pahn-SAY kuh too tay-TAY KLAIR. zhuh may-TAY trohn-PAY dee-poh-TEZ',
      },
      {
        speaker: 'Claire',
        french: 'Pourtant, tu avais demandé une validation écrite la semaine d’avant.',
        english: 'And yet, you had asked for written sign-off the week before.',
        pronunciation: 'poor-TAHN, tew ah-VAY duh-mahn-DAY ewn vah-lee-dah-SYOHN ay-KREET lah suh-MEN dah-VAHN',
      },
      {
        speaker: 'Yanis',
        french: 'Oui, mais le responsable était déjà parti en congé. Personne ne m’avait répondu.',
        english: 'Yes, but the manager had already left for holiday. No one had replied to me.',
        pronunciation: 'wee, may luh res-pohn-SAHBL ay-TAY day-ZHAH par-TEE ahn kohn-ZHAY. pair-SOHN nuh mah-VAY ray-pohn-DEW',
      },
      {
        speaker: 'Claire',
        french: 'D’accord. Le lendemain, nous avons rédigé un compte-rendu, mais beaucoup d’informations s’étaient perdues.',
        english: 'OK. The next day, we wrote up a report, but a lot of information had been lost.',
        pronunciation: 'dah-KOR. luh lahn-duh-MAHN, noo zah-VOHN ray-dee-ZHAY ahn KOHNT-rahn-DEW, may boh-KOO dan-for-mah-SYOHN say-TAY pair-DEW',
      },
      {
        speaker: 'Yanis',
        french: 'Il faut qu’on sache exactement ce qui avait manqué avant la livraison.',
        english: 'We need to know exactly what had been missing before the delivery.',
        pronunciation: 'eel foh kohn SAHSH eg-zak-tuh-MAHN suh kee ah-VAY mahn-KAY ah-VAHN lah lee-vray-ZYOHN',
      },
      {
        speaker: 'Claire',
        french: 'Notons aussi ce que chacun avait compris du brief initial. C’est souvent là que ça se joue.',
        english: 'Let’s also note what each person had understood from the initial brief. That’s often where it’s decided.',
        pronunciation: 'noh-TOHN oh-SEE suh kuh shah-KAHN ah-VAY kohn-PREE dew breef ee-nee-SYAL. say soo-VAHN LAH kuh sah suh ZHOO',
      },
      {
        speaker: 'Yanis',
        french: 'D’accord. À peine la réunion finie, j’avais déjà oublié la moitié des décisions — donc une trace écrite, oui.',
        english: 'Agreed. As soon as the meeting had ended, I’d already forgotten half the decisions — so yes, a written record.',
        pronunciation: 'dah-KOR. ah pen lah ray-yu-NYOHN fee-NEE, zhah-VAY day-ZHAH oo-blee-AY lah mwah-TYAY day day-see-ZYOHN — dohnk ewn trahss ay-KREET, wee',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Formation: imparfait of avoir/être + past participle',
      explanation:
        'The plus-que-parfait is a compound tense: avoir or être conjugated in the IMPARFAIT, followed by the past participle. The choice of auxiliary follows the same rules as passé composé — être for the 16 «verbs of motion/state» and all reflexive verbs, avoir for everything else. All agreement rules from passé composé apply identically (être verbs agree with the subject; preceding direct objects with avoir).',
      examples: [
        'avoir verb: j’avais parlé, tu avais parlé, il avait parlé, nous avions parlé, vous aviez parlé, ils avaient parlé',
        'être verb: j’étais allé(e), tu étais allé(e), il était allé, elle était allée, nous étions allé(e)s, ils étaient allés',
        'Reflexive: je m’étais trompé(e), il s’était trompé, ils s’étaient trompés',
        'Agreement with preceding direct object: La lettre que j’avais écrite. (écrite agrees with la lettre)',
        'Negation wraps around the auxiliary: Je n’avais pas vu, ils n’étaient pas venus.',
      ],
      tip:
        'If you know the passé composé of a verb, you already know its plus-que-parfait — just put the auxiliary in the imparfait. «J’ai parlé» → «j’avais parlé». «Je suis allé» → «j’étais allé».',
    },
    {
      title: 'Use 1: an event PRIOR to a past reference point',
      explanation:
        'The plus-que-parfait is not «further back in time» — it is «before a SPECIFIC past anchor». In a narrative, the passé composé (or sometimes the imparfait) sets the moment of the story, and the plus-que-parfait describes what had already happened by that moment. Without an anchor, the PQP is rare. Look for «quand», «lorsque», «au moment où» as classic anchors.',
      examples: [
        'Quand je suis arrivé, il était déjà parti. (PC anchor; PQP = before that)',
        'À 17 h, nous avions terminé le rapport.',
        'Lorsqu’on a appelé, ils n’avaient pas encore répondu.',
        'La veille, Karim avait vérifié les chiffres.',
        'Le matin suivant, le dossier était déjà parti.',
      ],
      tip:
        'Always ask: «before what?» If the answer is a specific past moment named in the same sentence or paragraph, use the plus-que-parfait. Without that anchor, the passé composé is enough.',
    },
    {
      title: 'Use 2: the si Type 3 clause (preview of L33)',
      explanation:
        'The plus-que-parfait is the obligatory tense in the si clause of a Type 3 hypothetical sentence — the «unreal past» pattern: si + plus-que-parfait → conditionnel passé. Full treatment of the result clause arrives in L33; for now, you should recognise Type 3 and produce the si-clause half correctly. Type 3 expresses regret or counterfactual reasoning about the past.',
      examples: [
        'Si j’avais su, je n’aurais pas accepté.',
        'Si tu m’avais prévenu, je serais venu.',
        'Si on avait attendu, on aurait évité l’erreur.',
        'Compare Type 2 (present): Si j’avais le temps, je viendrais.',
        'Compare Type 3 (past): Si j’avais eu le temps, je serais venu.',
      ],
      tip:
        'Type 3 always describes something that did NOT happen. The plus-que-parfait in the si clause is your signal that we are in counterfactual territory.',
    },
  ],
  vocabulary: [
    { french: 'j’avais parlé', english: 'I had spoken', category: 'PQP (avoir verb)', example: 'J’avais déjà parlé au client.' },
    { french: 'j’étais allé(e)', english: 'I had gone', category: 'PQP (être verb)', example: 'J’étais allée à Paris la veille.' },
    { french: 'je m’étais trompé(e)', english: 'I had been wrong', category: 'PQP (reflexive)', example: 'Je m’étais trompé d’adresse.' },
    { french: 'déjà', english: 'already', category: 'Sequence marker', example: 'Il était déjà parti.' },
    { french: 'la veille', english: 'the day before', category: 'Sequence marker', example: 'La veille, j’avais vérifié les chiffres.' },
    { french: 'le lendemain', english: 'the next day', category: 'Sequence marker' },
    { french: 'au moment où', english: 'at the moment when', category: 'Sequence anchor', note: 'Sets a past reference point for PQP' },
    { french: 'quand', english: 'when', category: 'Sequence anchor', note: '+ indicative' },
    { french: 'lorsque', english: 'when (formal)', category: 'Sequence anchor', note: '+ indicative' },
    { french: 'à peine… que', english: 'hardly… when', category: 'Sequence marker' },
    { french: 'dès que', english: 'as soon as', category: 'Sequence anchor', note: '+ indicative' },
    { french: 'pendant que', english: 'while', category: 'Sequence anchor', note: '+ indicative' },
    { french: 'avant de + inf', english: 'before doing', category: 'Sequence', note: 'same subject' },
    { french: 'avant que', english: 'before', category: 'Sequence', note: '+ subjonctif (different subject)' },
    { french: 'après que', english: 'after', category: 'Sequence', note: '+ indicative in modern usage' },
    { french: 'avoir prévu de', english: 'to have planned to', category: 'Narration', example: 'J’avais prévu de le faire après la réunion.' },
    { french: 'avoir oublié de', english: 'to have forgotten to', category: 'Narration' },
    { french: 's’être trompé(e) de', english: 'to have gotten X wrong', category: 'Narration', example: 'Je m’étais trompé d’hypothèse.' },
    { french: 'ne pas avoir eu le temps', english: 'not to have had the time', category: 'Narration' },
    { french: 'une trace écrite', english: 'a written record', category: 'Post-mortem vocab' },
    { french: 'un retour d’expérience (REX)', english: 'a post-mortem / review', category: 'Post-mortem vocab' },
    { french: 'une validation', english: 'a sign-off / approval', category: 'Post-mortem vocab' },
    { french: 'un brief', english: 'a brief', category: 'Post-mortem vocab' },
    { french: 'une livraison', english: 'a delivery', category: 'Post-mortem vocab' },
    { french: 'un congé', english: 'time off / leave', category: 'Workplace vocab' },
    { french: 'rédiger un compte-rendu', english: 'to write up minutes', category: 'Workplace vocab' },
    { french: 'manquer', english: 'to be missing / lacking', category: 'Workplace vocab', example: 'Ce qui avait manqué, c’était la relecture.' },
    { french: 'perdre / se perdre (info)', english: 'to lose / get lost (information)', category: 'Workplace vocab' },
  ],
  culturalNotes: [
    {
      title: 'Le retour d’expérience (REX)',
      content:
        'A REX («retour d’expérience», sometimes «debrief») is a formal post-mortem meeting after a project, incident or operational failure. Common across French organisations — from hospitals and the military to startups and ministries — the REX is structured: facts first, then prior assumptions, then decisions. Saying «on fait un REX» signals a serious, blame-light analysis, not a casual chat.',
    },
    {
      title: 'La culture de la trace écrite',
      content:
        'French professional culture places enormous weight on written records: notes de service, comptes-rendus, mails de confirmation. The reasoning is partly cultural (a country with a long bureaucratic tradition) and partly legal (employment law often hinges on what was written down). When Claire says «une trace écrite», she is naming a recognised institutional practice — not just suggesting a habit.',
    },
    {
      title: 'Analyser sans accuser',
      content:
        'Modern French organisations have increasingly imported the «blameless post-mortem» model from aerospace and tech. The grammatical effect: heavy use of the plus-que-parfait to describe prior assumptions and missing information without naming specific culprits — «ce qui avait manqué», «ce que chacun avait compris». The PQP carries the analytical weight.',
    },
  ],
  exercises: [
    {
      id: 'l32-e1',
      type: 'fill_blank',
      question:
        'Conjugate the verb in the plus-que-parfait. «Quand je suis arrivé, il ___ (partir).»',
      correct_answer: 'était parti',
      explanation:
        'partir is an être-verb. PQP = imparfait of être («était») + past participle («parti»). Agreement: 3rd-person masculine singular → no -e.',
      hints: ['être-verb → auxiliary être. Imparfait of être (3rd sg) = était. Past participle of partir = parti.'],
    },
    {
      id: 'l32-e2',
      type: 'multiple_choice',
      question:
        'Which sentence correctly anchors a plus-que-parfait?',
      options: [
        'J’avais beaucoup voyagé.',
        'Hier, j’avais beaucoup voyagé.',
        'Quand je l’ai rencontré, j’avais beaucoup voyagé.',
        'J’avais beaucoup voyagé maintenant.',
      ],
      correct_answer: 'Quand je l’ai rencontré, j’avais beaucoup voyagé.',
      explanation:
        'The plus-que-parfait needs a past reference point. «Quand je l’ai rencontré» (passé composé) provides the anchor; the PQP describes what was already true before that meeting.',
    },
    {
      id: 'l32-e3',
      type: 'transformation',
      question:
        'Combine each pair of past events into a single sentence using the plus-que-parfait for the event that happened FIRST.',
      instruction: 'affirmative_to_negative',
      items: [
        {
          original: 'Il est parti. Je suis arrivé.',
          transformed: 'Quand je suis arrivé, il était déjà parti.',
          translation: 'When I arrived, he had already left.',
        },
        {
          original: 'J’ai fini le rapport. Le client a appelé.',
          transformed: 'Quand le client a appelé, j’avais déjà fini le rapport.',
          translation: 'When the client called, I had already finished the report.',
        },
        {
          original: 'Karim a vérifié les chiffres. La réunion a commencé.',
          transformed: 'Quand la réunion a commencé, Karim avait déjà vérifié les chiffres.',
          translation: 'When the meeting started, Karim had already checked the numbers.',
        },
        {
          original: 'Elle s’est trompée d’adresse. Elle a compris son erreur.',
          transformed: 'Quand elle a compris son erreur, elle s’était trompée d’adresse.',
          translation: 'When she understood her mistake, she’d gone to the wrong address.',
        },
      ],
      explanation:
        'The PQP marks the prior event; the passé composé marks the anchor. The temporal order is structural — readers infer it immediately from the tense pairing.',
    },
    {
      id: 'l32-e4',
      type: 'tense_choice',
      question:
        'For each sentence, choose between passé composé and plus-que-parfait based on the temporal logic.',
      items: [
        {
          sentence: 'Hier matin, je ___ au bureau à 9 h.',
          verb: 'arriver',
          options: ['suis arrivé', 'étais arrivé'],
          correct_answer: 'suis arrivé',
          explanation: 'A single past event with no prior anchor → passé composé «suis arrivé».',
        },
        {
          sentence: 'Quand je suis arrivé hier, le client ___ déjà.',
          verb: 'téléphoner',
          options: ['a téléphoné', 'avait téléphoné'],
          correct_answer: 'avait téléphoné',
          explanation: 'Prior to the arrival (the anchor) → plus-que-parfait «avait téléphoné».',
        },
        {
          sentence: 'Lorsque la réunion a commencé, nous ___ tous nos documents.',
          verb: 'préparer',
          options: ['avons préparé', 'avions préparé'],
          correct_answer: 'avions préparé',
          explanation: 'Prior to the meeting start → plus-que-parfait «avions préparé».',
        },
        {
          sentence: 'Hier soir, nous ___ un film ensemble.',
          verb: 'regarder',
          options: ['avons regardé', 'avions regardé'],
          correct_answer: 'avons regardé',
          explanation: 'A single past event last night, no prior anchor → passé composé.',
        },
        {
          sentence: 'À ce moment-là, je ne savais pas qu’ils ___ déjà.',
          verb: 'partir',
          options: ['sont partis', 'étaient partis'],
          correct_answer: 'étaient partis',
          explanation: '«À ce moment-là» is the past anchor; the departure happened before it → PQP «étaient partis».',
        },
      ],
    },
    {
      id: 'l32-e5',
      type: 'fill_blank',
      question:
        'Type 3 preview — fill in the plus-que-parfait in the si clause. «Si tu ___ (étudier) plus, tu aurais réussi.»',
      correct_answer: 'avais étudié',
      explanation:
        'Type 3: si + PQP → conditionnel passé. étudier is avoir-verb → tu avais étudié.',
      hints: ['avoir auxiliary in imparfait for tu = avais. Past participle of étudier = étudié.'],
    },
    {
      id: 'l32-e6',
      type: 'error_correction',
      question:
        'Each sentence either misuses the PQP without an anchor or pairs it incorrectly with a result clause. Rewrite it correctly.',
      items: [
        {
          incorrect: 'J’avais beaucoup travaillé.',
          correct: 'J’ai beaucoup travaillé.',
          explanation:
            'With no past anchor in sight, the plus-que-parfait floats. Use the passé composé for a single past action.',
        },
        {
          incorrect: 'Quand le client a appelé, j’ai déjà envoyé le fichier.',
          correct: 'Quand le client a appelé, j’avais déjà envoyé le fichier.',
          explanation:
            '«J’avais envoyé» = prior to the call. Without the PQP, the sequence is unclear.',
        },
        {
          incorrect: 'Si tu avais su, tu venais.',
          correct: 'Si tu avais su, tu serais venu.',
          explanation:
            'Type 3 si clause (PQP) needs a Type 3 result (conditionnel passé «serais venu»), not the imparfait.',
        },
        {
          incorrect: 'Quand je l’ai vu, il a déjà parti.',
          correct: 'Quand je l’ai vu, il était déjà parti.',
          explanation:
            'Two errors: (1) partir is être-verb, so the auxiliary is être, not avoir; (2) the prior event needs the PQP «était parti», not the passé composé «a parti».',
        },
      ],
    },
    {
      id: 'l32-e7',
      type: 'translation',
      question: 'Translate, using the plus-que-parfait for the prior past event.',
      direction: 'en_to_fr',
      correct_answer: [
        'Quand je suis arrivé, ils étaient déjà partis.',
        'Hier, j’ai fini le rapport que j’avais commencé la semaine dernière.',
        'À ce moment-là, je ne savais pas que tu m’avais écrit.',
        'Si tu m’avais prévenu, je serais venu.',
        'Lorsque la réunion a commencé, nous avions tout préparé.',
      ],
      explanation:
        'Each sentence pairs a past anchor (passé composé or imparfait) with a prior event in the plus-que-parfait. The fourth item previews the full Type 3 si pattern (L33).',
    },
    {
      id: 'l32-e8',
      type: 'matching',
      question: 'Match each past expression to the sequence role it plays.',
      pairs: [
        { french: 'la veille', english: 'one day before the past anchor' },
        { french: 'le lendemain', english: 'one day after the past anchor' },
        { french: 'déjà (avec PQP)', english: 'already, before the anchor' },
        { french: 'à peine… que…', english: 'no sooner… than…' },
        { french: 'au moment où', english: 'at the precise moment when' },
        { french: 'avant que (+ subj)', english: 'before (different subjects)' },
        { french: 'après que (+ ind)', english: 'after — modern usage takes the indicative' },
      ],
      explanation:
        'Sequence markers are how French narrative organises time. The PQP almost always travels with «déjà», «la veille», «au moment où» or a «quand»-anchored clause.',
    },
    {
      id: 'l32-e9',
      type: 'multiple_choice',
      question:
        'Which is a TYPE 3 si clause?',
      options: [
        'Si tu viens demain, j’aurai le temps.',
        'Si j’avais le temps, je voyagerais.',
        'Si j’avais eu le temps, j’aurais voyagé.',
        'Si tu serais venu, j’aurais été content.',
      ],
      correct_answer: 'Si j’avais eu le temps, j’aurais voyagé.',
      explanation:
        'Type 3 = si + PQP («avais eu») → conditionnel passé («aurais voyagé»). Option 4 is wrong (never «si + conditionnel»).',
    },
    {
      id: 'l32-e10',
      type: 'speaking_prompt',
      question:
        'Tell the story of a small mistake or misunderstanding you experienced (work, school, travel). In 4–5 sentences, use at least two plus-que-parfait verbs and one Type 3 si construction («Si j’avais su, …»).',
      model_answer:
        'L’an dernier, j’ai raté un train important parce que j’avais mal lu l’horaire. La veille, mon collègue m’avait envoyé le bon horaire par mail, mais je ne l’avais pas vu. Quand je suis arrivé à la gare, le train était déjà parti. Si j’avais vérifié mes messages le soir d’avant, j’aurais évité tout ça.',
      translation:
        'Last year, I missed an important train because I’d misread the schedule. The day before, my colleague had sent me the correct schedule by email, but I hadn’t seen it. When I got to the station, the train had already left. If I’d checked my messages the night before, I’d have avoided all this.',
      tip: 'The narrative skeleton is: anchor (PC) → prior event (PQP) → consequence → counterfactual (Type 3 si). This is the B1 narrative pattern in 4 sentences.',
    },
  ],
}

const lesson33: IntermediateLessonData = {
  id: 33,
  title: 'The Past Conditional',
  title_fr: 'Le Conditionnel Passé',
  level: 'B1',
  description:
    'Form the conditionnel passé and use it to express regret, gentle reproach, and the complete Type 3 si clause system.',
  dialogue: {
    title: 'Retrouvailles aux Deux Magots',
    context:
      'Two university friends, Élise and Mathieu, meet again after eight years at a Saint-Germain café. Both reflect on choices they made — and didn’t make — back in their early twenties. The conversation alternates between full Type 3 si clauses and stand-alone regrets using «j’aurais dû», «il aurait fallu», «si seulement…». The register is informal, warm, reflective.',
    exchanges: [
      {
        speaker: 'Élise',
        french: 'Huit ans déjà ! Si j’avais su que le temps passerait si vite, j’aurais essayé de te voir plus souvent.',
        english: 'Eight years already! If I’d known time would pass so fast, I’d have tried to see you more often.',
        pronunciation: 'weet AHN day-ZHAH! see zhah-VAY sew kuh luh TAHN pah-suh-RAY see VEET, zhoh-RAY ay-say-AY duh tuh vwahr ploo soo-VAHN',
      },
      {
        speaker: 'Mathieu',
        french: 'Pareil. J’aurais dû t’appeler quand je suis revenu à Paris en 2022.',
        english: 'Same. I should have called you when I came back to Paris in 2022.',
        pronunciation: 'pah-RAY. zhoh-RAY DEW tah-puh-LAY kahn zhuh swee ruh-vuh-NEW ah pah-REE ahn duh meel van duh',
      },
      {
        speaker: 'Élise',
        french: 'Tu sais à quoi je pense souvent ? Si j’avais choisi médecine au lieu de droit, ma vie aurait été très différente.',
        english: 'You know what I think about a lot? If I’d chosen medicine instead of law, my life would have been very different.',
        pronunciation: 'tew say ah KWAH zhuh PAHNSS soo-VAHN? see zhah-VAY shwah-ZEE may-duh-SEEN oh LYUH duh DRWAH, mah VEE oh-RAY ay-TAY tray dee-fay-RAHNT',
      },
      {
        speaker: 'Mathieu',
        french: 'Peut-être, mais tu n’aurais pas rencontré Julien, par exemple. Tout est lié.',
        english: 'Maybe, but you wouldn’t have met Julien, for example. Everything is connected.',
        pronunciation: 'puh-TET-ruh, may tew noh-RAY pah rahn-kohn-TRAY zhew-LYAN, par eg-ZAHMPL. too tay lee-AY',
      },
      {
        speaker: 'Élise',
        french: 'C’est vrai. Si seulement on avait su, à l’époque, ce qu’on voulait vraiment.',
        english: 'True. If only we’d known, back then, what we really wanted.',
        pronunciation: 'say VRAY. see suhl-MAHN ohn nah-VAY SEW, ah lay-POHK, suh kohn voo-LAY vray-MAHN',
      },
      {
        speaker: 'Mathieu',
        french: 'À 17 ans ? Honnêtement, il aurait fallu un miracle. On nous demandait de choisir une filière sans rien connaître du monde.',
        english: 'At 17? Honestly, it would have taken a miracle. We were being asked to choose a track without knowing anything about the world.',
        pronunciation: 'ah dees-SET AHN? oh-net-uh-MAHN, eel oh-RAY fah-LOO ahn mee-RAHKL. ohn noo duh-mahn-DAY duh shwah-ZEER ewn fee-LYAIR sahn ree-AHN koh-NETR dew MOHND',
      },
      {
        speaker: 'Élise',
        french: 'Tu aurais pu changer de voie plus tard, non ? Tu y as pensé ?',
        english: 'You could have switched paths later, no? Did you think about it?',
        pronunciation: 'tew oh-RAY PEW shahn-ZHAY duh VWAH ploo TAR, nohn? tew yah pahn-SAY',
      },
      {
        speaker: 'Mathieu',
        french: 'J’y ai pensé, mais j’aurais dû le faire avant 30 ans. Maintenant, c’est plus compliqué.',
        english: 'I did think about it, but I should have done it before 30. Now it’s more complicated.',
        pronunciation: 'zhee ay pahn-SAY, may zhoh-RAY DEW luh fair ah-VAHN trahnt AHN. man-tuh-NAHN, say ploo kohn-plee-KAY',
      },
      {
        speaker: 'Élise',
        french: 'Tu n’aurais pas dû abandonner la musique, tu sais. Tu étais vraiment doué.',
        english: 'You shouldn’t have given up music, you know. You were really talented.',
        pronunciation: 'tew noh-RAY pah DEW ah-bahn-doh-NAY lah myew-ZEEK, tew SAY. tew ay-TAY vray-MAHN doo-AY',
      },
      {
        speaker: 'Mathieu',
        french: 'Merci. À vrai dire, il aurait mieux valu garder ça en parallèle plutôt que de tout arrêter.',
        english: 'Thanks. To be honest, it would have been better to keep it on the side rather than stopping everything.',
        pronunciation: 'mair-SEE. ah vray DEER, eel oh-RAY MYUH vah-LOO gar-DAY sah ahn pah-rah-LEL plew-TOH kuh duh too tah-ray-TAY',
      },
      {
        speaker: 'Élise',
        french: 'Bon, on pleure plus. Si on prenait des vraies décisions cette année ?',
        english: 'OK, no more crying. What if we made some real decisions this year?',
        pronunciation: 'bohn, ohn PLURR ploo. see ohn pruh-NAY day vray day-see-ZYOHN set ah-NAY',
      },
      {
        speaker: 'Mathieu',
        french: 'D’accord. Mais cette fois, on s’appelle avant huit ans, hein ?',
        english: 'Deal. But this time, we call each other before eight more years go by, OK?',
        pronunciation: 'dah-KOR. may set FWAH, ohn sah-PEL ah-VAHN weet AHN, ahn',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Formation: conditionnel of avoir/être + past participle',
      explanation:
        'The conditionnel passé is a compound tense: avoir or être conjugated in the CONDITIONNEL PRÉSENT, followed by the past participle. Same auxiliary choice as passé composé and plus-que-parfait. Same agreement rules (être verbs agree with subject; preceding direct objects with avoir).',
      examples: [
        'avoir verb: j’aurais parlé, tu aurais parlé, il aurait parlé, nous aurions parlé, vous auriez parlé, ils auraient parlé',
        'être verb: je serais allé(e), tu serais allé(e), il serait allé, elle serait allée, nous serions allé(e)s',
        'Reflexive: je me serais trompé(e), il se serait trompé',
        'Negation: Je n’aurais pas dit ça. Ils ne seraient pas venus.',
        'Past participle agreement: La lettre que j’aurais écrite. (écrite agrees with la lettre)',
      ],
      tip:
        'You already know the cond. passé. If you can do the passé composé and the cond. présent, you can do the cond. passé — it is just «cond. présent of the auxiliary + past participle». The hard part is the meaning, not the form.',
    },
    {
      title: 'Use 1: complete the Type 3 si system + four core uses',
      explanation:
        'The conditionnel passé completes the three-type si system as the result clause for Type 3: si + plus-que-parfait → conditionnel passé. It also has three stand-alone uses without a si clause. (1) Regret: j’aurais dû, j’aurais pu, j’aurais voulu, il aurait fallu, il aurait mieux valu. (2) Reproach: tu n’aurais pas dû, vous auriez pu… (3) Journalistic past: «Le ministre aurait signé l’accord» = allegedly signed (recognition only).',
      examples: [
        'Type 3 complete: Si j’avais su, je n’aurais pas accepté.',
        'Regret (should have): J’aurais dû t’appeler.',
        'Regret (could have): On aurait pu se voir plus souvent.',
        'Regret (should have happened): Il aurait fallu un miracle.',
        'Reproach: Tu n’aurais pas dû abandonner la musique.',
      ],
      tip:
        'The four stand-alone uses all hinge on a small set of verbs: devoir, pouvoir, vouloir, falloir, valoir. Learn their cond. passé forms together as a regret toolkit — that alone unlocks 80% of B1 reflective speech.',
    },
  ],
  vocabulary: [
    { french: 'j’aurais parlé', english: 'I would have spoken', category: 'Cond. passé (avoir)', example: 'J’aurais parlé plus tôt, si j’avais su.' },
    { french: 'je serais parti(e)', english: 'I would have left', category: 'Cond. passé (être)' },
    { french: 'je me serais trompé(e)', english: 'I would have been wrong', category: 'Cond. passé (réfléchi)' },
    { french: 'j’aurais dû + inf.', english: 'I should have', category: 'Regret toolkit', example: 'J’aurais dû t’appeler.' },
    { french: 'j’aurais pu + inf.', english: 'I could have', category: 'Regret toolkit', example: 'J’aurais pu venir plus tôt.' },
    { french: 'j’aurais voulu + inf.', english: 'I would have liked to', category: 'Regret toolkit', example: 'J’aurais voulu rester plus longtemps.' },
    { french: 'il aurait fallu + inf.', english: 'it would have been necessary', category: 'Regret toolkit', example: 'Il aurait fallu prévenir avant.' },
    { french: 'il aurait mieux valu + inf.', english: 'it would have been better to', category: 'Regret toolkit', example: 'Il aurait mieux valu attendre.' },
    { french: 'tu n’aurais pas dû', english: 'you shouldn’t have', category: 'Reproach', example: 'Tu n’aurais pas dû abandonner.' },
    { french: 'vous auriez pu', english: 'you could have', category: 'Reproach' },
    { french: 'si seulement (+ PQP)', english: 'if only', category: 'Regret marker', note: 'Followed by PQP — triggers cond. passé in implicit result.', example: 'Si seulement j’avais su…' },
    { french: 'dommage que (+ subj)', english: 'a pity that', category: 'Regret marker' },
    { french: 'c’est dommage', english: 'it’s a pity', category: 'Regret marker' },
    { french: 'malheureusement', english: 'unfortunately', category: 'Regret marker' },
    { french: 'hélas', english: 'alas (literary)', category: 'Regret marker' },
    { french: 'au lieu de + inf.', english: 'instead of', category: 'Life choice', example: 'Si j’avais choisi médecine au lieu de droit…' },
    { french: 'une filière', english: 'an academic track / pathway', category: 'Education', example: 'On choisit sa filière trop tôt.' },
    { french: 'un parcours', english: 'a career path / life journey', category: 'Life vocab' },
    { french: 'une orientation', english: 'academic/career orientation', category: 'Education' },
    { french: 'un choix de vie', english: 'a life choice', category: 'Life vocab' },
    { french: 'changer de voie', english: 'to switch paths', category: 'Life vocab', example: 'Tu aurais pu changer de voie plus tard.' },
    { french: 'abandonner', english: 'to give up', category: 'Life vocab', example: 'Tu n’aurais pas dû abandonner la musique.' },
    { french: 'regretter', english: 'to regret', category: 'Life vocab', note: '+ subjonctif when followed by «que»' },
    { french: 'un regret', english: 'a regret', category: 'Life vocab' },
    { french: 'doué(e) pour', english: 'gifted at', category: 'Life vocab' },
    { french: 'à l’époque', english: 'back then', category: 'Time anchor' },
    { french: 'plus tard', english: 'later', category: 'Time anchor' },
    { french: 'autrement', english: 'differently / otherwise', category: 'Hypothesis marker' },
  ],
  culturalNotes: [
    {
      title: 'Le poids des choix à 15–17 ans',
      content:
        'The French education system asks students to choose a filière (academic track) extremely early — typically between 15 and 17, with the baccalauréat specialisations chosen in seconde. Switching tracks later is institutionally possible but culturally treated as exceptional. This is why so much French regret discourse — and so much B1 «si + PQP → cond. passé» — orbits the moment of «orientation».',
    },
    {
      title: 'La tradition de l’essai de regret',
      content:
        'French literary culture has a long tradition of reflective writing about choices: Montaigne’s Essais, Proust’s entire À la recherche du temps perdu, the contemporary autofiction genre. The verbs «j’aurais dû» and «j’aurais pu» are not just grammatical structures; they carry a whole literary inheritance that French speakers absorb in school.',
    },
    {
      title: 'Le café comme espace de réflexion',
      content:
        'Les Deux Magots, Café de Flore, Le Procope — Parisian cafés have been venues for philosophical conversation since the 17th century. Saying «on s’est retrouvés au café et on a parlé pendant trois heures» evokes this tradition. Élise and Mathieu’s reunion at a Saint-Germain café is culturally legible as «the right place for a conversation about life choices».',
    },
    {
      title: 'L’entretien à 30 ans',
      content:
        'A frequent French expression: «la crise des 30 ans» — the cultural moment when many French professionals reconsider their early choices. The 30 mark functions like a soft deadline for changing direction; Mathieu’s line «il aurait fallu le faire avant 30 ans» reflects a widely shared frame, even if there is nothing actually preventing change afterwards.',
    },
  ],
  exercises: [
    {
      id: 'l33-e1',
      type: 'fill_blank',
      question:
        'Conjugate the verb in the conditionnel passé. «À ta place, je ___ (partir) plus tôt.»',
      correct_answer: 'serais parti',
      explanation:
        'partir is être-verb. Cond. présent of être (je serais) + past participle (parti). Add -e for feminine subject if needed.',
      hints: ['Cond. of être for je = serais. Past participle of partir = parti.'],
    },
    {
      id: 'l33-e2',
      type: 'transformation',
      question:
        'Rewrite each statement as a regret using «j’aurais dû / j’aurais pu». Example: «Je n’ai pas étudié.» → «J’aurais dû étudier.»',
      instruction: 'affirmative_to_negative',
      items: [
        {
          original: 'Je n’ai pas appelé ma grand-mère.',
          transformed: 'J’aurais dû appeler ma grand-mère.',
          translation: 'I should have called my grandmother.',
        },
        {
          original: 'Je n’ai pas pris le temps de réfléchir.',
          transformed: 'J’aurais dû prendre le temps de réfléchir.',
          translation: 'I should have taken the time to think.',
        },
        {
          original: 'Tu n’es pas venu à la fête.',
          transformed: 'Tu aurais pu venir à la fête.',
          translation: 'You could have come to the party.',
        },
        {
          original: 'Nous n’avons pas réservé à l’avance.',
          transformed: 'Nous aurions dû réserver à l’avance.',
          translation: 'We should have booked in advance.',
        },
        {
          original: 'Elle n’a pas accepté l’offre.',
          transformed: 'Elle aurait pu accepter l’offre.',
          translation: 'She could have accepted the offer.',
        },
      ],
      explanation:
        'The «j’aurais dû / j’aurais pu» pattern is the most-used regret structure in spoken French — keep it on the tip of your tongue.',
    },
    {
      id: 'l33-e3',
      type: 'rewrite',
      question:
        'Rewrite each sentence as a complete Type 3 si clause expressing the counterfactual past.',
      instruction_type: 'si_clause',
      items: [
        {
          original: 'Je n’ai pas étudié, donc je n’ai pas réussi.',
          expected: 'Si j’avais étudié, j’aurais réussi.',
          hint: 'si + PQP → cond. passé',
          explanation: 'Type 3 reformulation: the cause-effect becomes a counterfactual hypothesis.',
        },
        {
          original: 'Tu n’es pas venu, donc nous ne t’avons pas vu.',
          expected: 'Si tu étais venu, nous t’aurions vu.',
          hint: 'venir is être-verb in both clauses',
          explanation: 'Type 3: si + étais venu (PQP) → aurions vu (cond. passé).',
        },
        {
          original: 'Elle n’avait pas l’information, donc elle a fait une erreur.',
          expected: 'Si elle avait eu l’information, elle n’aurait pas fait d’erreur.',
          hint: 'avoir as main verb in both clauses',
          explanation: 'Type 3: si + avait eu (PQP of avoir) → n’aurait pas fait (negated cond. passé).',
        },
        {
          original: 'On n’a pas attendu, donc on a raté le train.',
          expected: 'Si on avait attendu, on n’aurait pas raté le train.',
          hint: 'classic transport regret',
          explanation: 'Type 3: si + avait attendu → n’aurait pas raté.',
        },
      ],
    },
    {
      id: 'l33-e4',
      type: 'register_sort',
      question:
        'Sort each si sentence by TYPE (1 / 2 / 3).',
      categories: ['Type 1', 'Type 2', 'Type 3'],
      items: [
        { expression: 'Si tu viens demain, on ira au cinéma.', correct_category: 'Type 1', explanation: 'présent → futur = real/open condition.' },
        { expression: 'Si j’avais le temps, je voyagerais.', correct_category: 'Type 2', explanation: 'imparfait → cond. présent = unreal present.' },
        { expression: 'Si j’avais eu le temps, j’aurais voyagé.', correct_category: 'Type 3', explanation: 'PQP → cond. passé = unreal past.' },
        { expression: 'Si tu m’avais prévenu, je serais venu.', correct_category: 'Type 3', explanation: 'PQP → cond. passé.' },
        { expression: 'Si tu travailles ce soir, tu finiras à temps.', correct_category: 'Type 1', explanation: 'présent → futur.' },
        { expression: 'Si on avait su, on n’aurait pas accepté.', correct_category: 'Type 3', explanation: 'PQP → cond. passé.' },
        { expression: 'Si elle gagnait au loto, elle achèterait un appartement.', correct_category: 'Type 2', explanation: 'imparfait → cond. présent.' },
        { expression: 'Si nous partons à 7 h, nous arriverons à 9 h.', correct_category: 'Type 1', explanation: 'présent → futur.' },
        { expression: 'Si tu avais étudié médecine, ta vie aurait été différente.', correct_category: 'Type 3', explanation: 'PQP → cond. passé.' },
      ],
    },
    {
      id: 'l33-e5',
      type: 'error_correction',
      question:
        'Each sentence has a Type 3 si clause error. Rewrite it correctly.',
      items: [
        {
          incorrect: 'Si j’aurais su, je n’aurais pas accepté.',
          correct: 'Si j’avais su, je n’aurais pas accepté.',
          explanation:
            'Classic trap: NEVER «si + conditionnel». Type 3 si clause = PQP «avais su».',
        },
        {
          incorrect: 'Si tu m’avais prévenu, je viens.',
          correct: 'Si tu m’avais prévenu, je serais venu.',
          explanation:
            'Type 3 needs cond. passé in the result clause, not the présent.',
        },
        {
          incorrect: 'Si j’avais le temps hier, je serais venu.',
          correct: 'Si j’avais eu le temps hier, je serais venu.',
          explanation:
            'Mixed types: the result is Type 3 (cond. passé), so the si clause must also be Type 3 (PQP «avais eu»).',
        },
        {
          incorrect: 'Tu aurais dû partir, sinon tu rates le train.',
          correct: 'Tu aurais dû partir, sinon tu aurais raté le train.',
          explanation:
            'Past regret + past consequence → second verb also in cond. passé.',
        },
      ],
    },
    {
      id: 'l33-e6',
      type: 'translation',
      question: 'Translate, using the conditionnel passé or a complete Type 3 si clause.',
      direction: 'en_to_fr',
      correct_answer: [
        'J’aurais dû t’appeler.',
        'Si j’avais su, je serais venu.',
        'Tu n’aurais pas dû abandonner la musique.',
        'Il aurait fallu réserver à l’avance.',
        'Si elle avait choisi médecine, sa vie aurait été très différente.',
      ],
      explanation:
        'The four core regret/reproach patterns + the full Type 3 si clause. Master these and B1 reflective speech is unlocked.',
    },
    {
      id: 'l33-e7',
      type: 'multiple_choice',
      question:
        'What does «Le suspect aurait quitté la France hier» mean in a news headline?',
      options: [
        'The suspect would have left France yesterday (a hypothetical).',
        'The suspect supposedly left France yesterday — unverified.',
        'The suspect should have left France yesterday — a regret.',
        'The suspect would leave France yesterday — a polite request.',
      ],
      correct_answer: 'The suspect supposedly left France yesterday — unverified.',
      explanation:
        'The «conditionnel passé journalistique»: in news writing, the past conditional flags information that has not been officially confirmed. It is the past-tense equivalent of the conditionnel journalistique introduced in L30.',
    },
    {
      id: 'l33-e8',
      type: 'fill_blank',
      question:
        'Fill in the cond. passé to complete the Type 3 si clause. «Si tu m’avais écouté, tu ___ (éviter) cette erreur.»',
      correct_answer: 'aurais évité',
      explanation:
        'Type 3: PQP («avais écouté») → cond. passé («aurais évité»). Cond. of avoir for tu = aurais; past participle of éviter = évité.',
      hints: ['Cond. of avoir for tu = aurais. Past participle of éviter = évité.'],
    },
    {
      id: 'l33-e9',
      type: 'mood_choice',
      question:
        'Choose between cond. passé («subjunctive» column here represents the cond. passé form) and the simple past (passé composé / imparfait) based on whether the meaning is a counterfactual regret or a past fact.',
      items: [
        {
          sentence: 'Tu sais quoi, je [BLANK] te le dire plus tôt.',
          verb: 'devoir',
          indicative_form: 'devais',
          subjunctive_form: 'aurais dû',
          correct_answer: 'subjunctive',
          trigger: 'regret (should have)',
          explanation: 'Counterfactual regret about the past → cond. passé «aurais dû».',
        },
        {
          sentence: 'Hier, je [BLANK] partir à 6 h pour ne pas être en retard.',
          verb: 'devoir',
          indicative_form: 'ai dû',
          subjunctive_form: 'aurais dû',
          correct_answer: 'indicative',
          trigger: 'past obligation (and did)',
          explanation:
            '«J’ai dû partir» = I had to leave (and did). «J’aurais dû partir» = I should have left (but didn’t). Here the context is a past obligation actually carried out.',
        },
        {
          sentence: 'À ta place, je [BLANK] cette offre.',
          verb: 'accepter',
          indicative_form: 'acceptais',
          subjunctive_form: 'aurais accepté',
          correct_answer: 'subjunctive',
          trigger: 'past hypothesis (à ta place)',
          explanation:
            '«À ta place» about a past decision → cond. passé «aurais accepté».',
        },
        {
          sentence: 'Si j’avais eu plus de temps, je [BLANK] le rapport.',
          verb: 'finir',
          indicative_form: 'finissais',
          subjunctive_form: 'aurais fini',
          correct_answer: 'subjunctive',
          trigger: 'Type 3 si clause result',
          explanation:
            'After si + PQP, the result must be cond. passé «aurais fini».',
        },
      ],
    },
    {
      id: 'l33-e10',
      type: 'speaking_prompt',
      question:
        'Reflect on three things you wish you had done differently in your life. Use one «j’aurais dû», one «j’aurais pu», and one complete Type 3 si clause («si j’avais…, j’aurais…»).',
      model_answer:
        'J’aurais dû apprendre une troisième langue plus jeune, c’est beaucoup plus difficile maintenant. J’aurais pu garder le contact avec mes amis du lycée, on s’est perdus de vue trop vite. Et si j’avais voyagé seul à 20 ans, je pense que j’aurais grandi beaucoup plus vite.',
      translation:
        'I should have learned a third language earlier — it’s much harder now. I could have kept in touch with my high-school friends — we lost touch too quickly. And if I’d travelled alone at 20, I think I would have grown up much faster.',
      tip: 'Notice the rhythm: a regret («j’aurais dû»), a missed opportunity («j’aurais pu»), then a fuller counterfactual («si j’avais… j’aurais…»). That progression is the B1 reflective register in three sentences.',
    },
  ],
}

const lesson34: IntermediateLessonData = {
  id: 34,
  title: 'Relative Pronouns I',
  title_fr: 'Les Pronoms Relatifs I',
  level: 'B1',
  description:
    'Master the qui/que distinction — subject vs direct object — and the past participle agreement rule that goes with que.',
  dialogue: {
    title: 'Le portrait du dimanche',
    context:
      'Élodie, rédactrice en chef of a French weekly magazine, briefs her staff journalist Antoine on a profile piece they will publish in the «Portrait» section. They discuss the subject — a contemporary novelist — and the people, places, and works they’ll reference. Relative clauses with qui and que cluster naturally throughout.',
    exchanges: [
      {
        speaker: 'Élodie',
        french: 'Le portrait qu’on doit publier dimanche, c’est sur la romancière qui a gagné le prix Médicis.',
        english: 'The profile we’re publishing on Sunday is about the novelist who won the Médicis prize.',
        pronunciation: 'luh por-TRAY kohn dwah pew-blee-AY dee-MAHNSH, say sewr lah roh-mahn-SYAIR kee ah gan-YAY luh PREE may-dee-SEES',
      },
      {
        speaker: 'Antoine',
        french: 'D’accord. C’est l’auteure qui vit à Marseille, c’est ça ?',
        english: 'Got it. She’s the author who lives in Marseille, right?',
        pronunciation: 'dah-KOR. say loh-TURR kee VEE ah mar-SAY, say SAH',
      },
      {
        speaker: 'Élodie',
        french: 'Exactement. Le livre qu’elle a publié l’an dernier, tu l’as lu ?',
        english: 'Exactly. The book she published last year — have you read it?',
        pronunciation: 'eg-zak-tuh-MAHN. luh leevr kel ah pew-blee-AY lahn dair-NYAIR, tew lah LEW',
      },
      {
        speaker: 'Antoine',
        french: 'Oui. C’est le roman que j’ai préféré de cette rentrée littéraire.',
        english: 'Yes. It’s the novel I liked best from this literary season.',
        pronunciation: 'wee. say luh roh-MAHN kuh zhay pray-fay-RAY duh set rahn-TRAY lee-tay-RAIR',
      },
      {
        speaker: 'Élodie',
        french: 'Parfait. Tu peux contacter les amis qu’elle a mentionnés dans son interview à France Culture ?',
        english: 'Perfect. Can you contact the friends she mentioned in her France Culture interview?',
        pronunciation: 'par-FAY. tew puh kohn-tak-TAY lay zah-MEE kel ah mahn-syoh-NAY dahn sohn an-tair-VYUH ah frahns kewl-TEWR',
      },
      {
        speaker: 'Antoine',
        french: 'Oui. Il y a aussi son éditeur, qui la suit depuis dix ans. Lui, j’aimerais bien l’avoir.',
        english: 'Yes. There’s also her editor, who has been with her for ten years. I’d really like to get him.',
        pronunciation: 'wee. eel yah oh-SEE sohn ay-dee-TURR, kee lah SWEE duh-PWEE dee ZAHN. LWEE, zhem-RAY byan lah-VWAR',
      },
      {
        speaker: 'Élodie',
        french: 'Bonne idée. Et le café qu’elle fréquente à Marseille, on pourrait y faire la photo.',
        english: 'Good idea. And the café she goes to in Marseille — we could do the photo there.',
        pronunciation: 'bohn ee-DAY. ay luh kah-FAY kel fray-KAHNT ah mar-SAY, ohn poo-RAY ee fair lah foh-TOH',
      },
      {
        speaker: 'Antoine',
        french: 'Bien sûr. Tu veux qu’on cite aussi les autrices qui l’ont influencée ?',
        english: 'Of course. Do you want us to also mention the women writers who influenced her?',
        pronunciation: 'byan SEWR. tew vuh kohn SEET oh-SEE lay zoh-TREES kee lohn an-flew-ahn-SAY',
      },
      {
        speaker: 'Élodie',
        french: 'Oui, mais sois précis : seulement celles qu’elle a vraiment lues, pas les noms que tout le monde cite.',
        english: 'Yes, but be specific: only the ones she actually read, not the names everyone cites.',
        pronunciation: 'wee, may SWAH pray-SEE: suhl-MAHN sel kel ah vray-MAHN LEW, pah lay NOHN kuh too luh MOHND SEET',
      },
      {
        speaker: 'Antoine',
        french: 'D’accord. La phrase qu’elle a écrite sur Annie Ernaux est superbe, je voulais la mettre en exergue.',
        english: 'OK. The sentence she wrote about Annie Ernaux is wonderful — I wanted to use it as an epigraph.',
        pronunciation: 'dah-KOR. lah FRAHZ kel ah ay-KREET sewr ah-NEE air-NOH ay sew-PAIRB, zhuh voo-LAY lah metr ahn eg-ZAIRG',
      },
      {
        speaker: 'Élodie',
        french: 'Très bien. C’est exactement le ton qu’on cherche pour cette section.',
        english: 'Great. That’s exactly the tone we want for this section.',
        pronunciation: 'tray BYAN. say eg-zak-tuh-MAHN luh TOHN kohn shairsh poor set sek-SYOHN',
      },
      {
        speaker: 'Antoine',
        french: 'Et la photo qu’on a déjà choisie, on la garde ? Celle qui est en noir et blanc ?',
        english: 'And the photo we already chose — are we keeping it? The black-and-white one?',
        pronunciation: 'ay lah foh-TOH kohn nah day-ZHAH shwah-ZEE, ohn lah GARD? sel kee ay ahn NWAHR ay BLAHN',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Qui = subject, que = direct object',
      explanation:
        'A relative pronoun replaces a noun and connects two clauses into one. «Qui» replaces a noun that does the action of the relative clause (subject); «que» replaces a noun that receives it (direct object). The fastest reliable test: look at what comes immediately after the pronoun. After «qui», you find a CONJUGATED VERB. After «que», you find a SUBJECT (noun or pronoun) and then the verb. «Que» becomes «qu’» before a vowel; «qui» never elides.',
      examples: [
        'qui = subject: L’homme QUI parle est mon père. (qui parle = l’homme parle)',
        'que = object: L’homme QUE je connais est mon père. (que je connais = je connais l’homme)',
        'L’écrivaine QUI a gagné le prix. (qui + verb)',
        'L’écrivaine QUE j’ai rencontrée. (que + subject + verb)',
        'Elision: la chose qu’il dit (qu’il, not que il).',
      ],
      tip:
        'Cover the pronoun and read what comes next. Verb? → qui (subject missing). Subject? → que (object missing). This one trick eliminates the most common B1 relative-pronoun error in seconds.',
    },
    {
      title: 'Past participle agreement with que + avoir',
      explanation:
        'When the relative pronoun «que» replaces a direct object that comes BEFORE the verb in the relative clause, the past participle agrees with that direct object in gender and number — even though the auxiliary is avoir. This is the only common case where avoir-verbs trigger participle agreement. With qui, there is no agreement (the noun is the subject, not the object).',
      examples: [
        'No agreement (qui = subject): La femme qui est venue. (être-verb agreement is separate.)',
        'AGREEMENT (que + avoir): La lettre que j’ai écrite. (écrite agrees with «la lettre»)',
        'AGREEMENT: Les livres que j’ai lus. (lus agrees with «les livres»)',
        'AGREEMENT: La chanson que nous avons entendue. (entendue agrees with «la chanson»)',
        'NO agreement (que but no preceding direct object): Je suis content que tu sois venu. (subjunctive subordinate clause, not a relative)',
      ],
      tip:
        'The agreement only applies to «que» + avoir + past participle, when «que» replaces a direct object. Ask: is the noun the relative pronoun replaces the direct object of the relative-clause verb? If yes → agree. If no → don’t.',
    },
  ],
  vocabulary: [
    { french: 'qui', english: 'who / which / that (subject)', category: 'Relative pronoun', example: 'L’homme qui parle est mon père.' },
    { french: 'que / qu’', english: 'whom / which / that (direct object)', category: 'Relative pronoun', example: 'Le livre que j’ai lu.' },
    { french: 'la personne qui / que', english: 'the person who / whom', category: 'Common frame' },
    { french: 'la chose qui / que', english: 'the thing that', category: 'Common frame' },
    { french: 'l’endroit qui / que', english: 'the place that', category: 'Common frame' },
    { french: 'le moment qui / que', english: 'the moment that', category: 'Common frame' },
    { french: 'connaître', english: 'to know (person/place)', category: 'Relative-clause verb', example: 'La femme que je connais.' },
    { french: 'rencontrer', english: 'to meet', category: 'Relative-clause verb' },
    { french: 'voir', english: 'to see', category: 'Relative-clause verb' },
    { french: 'chercher', english: 'to look for', category: 'Relative-clause verb' },
    { french: 'trouver', english: 'to find', category: 'Relative-clause verb' },
    { french: 'préférer', english: 'to prefer', category: 'Relative-clause verb' },
    { french: 'choisir', english: 'to choose', category: 'Relative-clause verb' },
    { french: 'attendre', english: 'to wait for', category: 'Relative-clause verb' },
    { french: 'entendre', english: 'to hear', category: 'Relative-clause verb' },
    { french: 'lire', english: 'to read', category: 'Relative-clause verb' },
    { french: 'écrire', english: 'to write', category: 'Relative-clause verb' },
    { french: 'recevoir', english: 'to receive', category: 'Relative-clause verb' },
    { french: 'mentionner', english: 'to mention', category: 'Journalism vocab' },
    { french: 'citer', english: 'to cite / quote', category: 'Journalism vocab' },
    { french: 'un(e) journaliste', english: 'a journalist', category: 'Journalism vocab' },
    { french: 'un rédacteur / une rédactrice en chef', english: 'editor-in-chief', category: 'Journalism vocab' },
    { french: 'un magazine', english: 'a magazine', category: 'Journalism vocab' },
    { french: 'un portrait', english: 'a profile piece', category: 'Journalism vocab', example: 'On publie le portrait dimanche.' },
    { french: 'un sujet', english: 'a subject / story', category: 'Journalism vocab' },
    { french: 'une interview', english: 'an interview', category: 'Journalism vocab' },
    { french: 'une rentrée littéraire', english: 'literary season (autumn)', category: 'Culture' },
    { french: 'mettre en exergue', english: 'to use as epigraph / highlight', category: 'Culture' },
  ],
  culturalNotes: [
    {
      title: 'La presse écrite française',
      content:
        'Despite the rise of digital, French print journalism remains influential: Le Monde, Le Figaro, Libération, L’Obs, Le Point, L’Express, Marianne all publish weekly cultural sections. Per capita, France has one of Europe’s highest print-magazine readerships. A staff position at a Paris weekly is still a recognised cultural identity — which is why the «portrait» genre carries weight.',
    },
    {
      title: 'Le portrait journalistique',
      content:
        'The «portrait» is a defined French journalistic genre: an in-depth profile, usually 4–6 pages, of a single figure — often a writer, artist, intellectual, or politician. Le Monde publishes a daily portrait on its «Dernière page». The genre relies heavily on relative clauses to weave in places, friends, influences and works without breaking narrative flow.',
    },
    {
      title: 'La rentrée littéraire',
      content:
        'Every autumn, French publishers release some 500–600 new novels in a six-week window known as the «rentrée littéraire». The major literary prizes — Goncourt, Médicis, Renaudot, Femina — are announced during this period. The rentrée is a major cultural event, with bookshop displays, dedicated newspaper supplements, and televised announcements.',
    },
  ],
  exercises: [
    {
      id: 'l34-e1',
      type: 'multiple_choice',
      question: 'Which sentence correctly uses qui?',
      options: [
        'La femme qui je connais habite à Lyon.',
        'La femme que parle italien habite à Lyon.',
        'La femme qui habite à Lyon parle italien.',
        'La femme qui je rencontre habite à Lyon.',
      ],
      correct_answer: 'La femme qui habite à Lyon parle italien.',
      explanation:
        'After «qui», a conjugated verb follows directly («habite»). In the other options, a subject pronoun («je») follows — which signals that «que» is the correct choice.',
    },
    {
      id: 'l34-e2',
      type: 'fill_blank',
      question:
        'Choose «qui» or «que» (write «qu’» before a vowel). «Le film ___ nous avons vu hier était excellent.»',
      correct_answer: ['que', 'qu’'],
      explanation:
        'After the pronoun, you see «nous avons vu» — subject + verb. The film is the direct object → «que». Note: before vowels («nous» starts with a consonant), no elision needed; here «que» stays «que».',
      hints: ['Cover the pronoun: «nous avons vu hier» — that’s subject + verb. Object is missing → que.'],
    },
    {
      id: 'l34-e3',
      type: 'transformation',
      question:
        'Combine each pair using a relative clause introduced by qui OR que.',
      instruction: 'affirmative_to_negative',
      items: [
        {
          original: 'L’écrivaine a gagné le prix. Elle vit à Marseille.',
          transformed: 'L’écrivaine qui a gagné le prix vit à Marseille.',
          translation: 'The writer who won the prize lives in Marseille.',
        },
        {
          original: 'Le livre est passionnant. Tu m’as conseillé ce livre.',
          transformed: 'Le livre que tu m’as conseillé est passionnant.',
          translation: 'The book you recommended to me is gripping.',
        },
        {
          original: 'L’éditeur la suit depuis dix ans. Nous voulons l’interviewer.',
          transformed: 'L’éditeur qui la suit depuis dix ans, nous voulons l’interviewer.',
          translation: 'The editor who has been with her for ten years — we want to interview him.',
        },
        {
          original: 'Le café est très calme. Elle fréquente ce café à Marseille.',
          transformed: 'Le café qu’elle fréquente à Marseille est très calme.',
          translation: 'The café she goes to in Marseille is very quiet.',
        },
        {
          original: 'Les amis sont nombreux. Elle a mentionné ces amis dans son interview.',
          transformed: 'Les amis qu’elle a mentionnés dans son interview sont nombreux.',
          translation: 'The friends she mentioned in her interview are many.',
        },
      ],
      explanation:
        'qui replaces the subject (the writer wins); que replaces the direct object (the book you recommended).',
    },
    {
      id: 'l34-e4',
      type: 'fill_blank',
      question:
        'Past participle agreement with que + avoir. «La lettre que j’ai ___ (écrire) est très longue.»',
      correct_answer: 'écrite',
      explanation:
        'que replaces «la lettre» (feminine singular), placed BEFORE the past participle. With avoir + preceding direct object → agreement. écrit → écrite.',
      hints: ['feminine singular direct object before avoir → add -e.'],
    },
    {
      id: 'l34-e5',
      type: 'mood_choice',
      question:
        'For each sentence, decide whether the past participle should AGREE (with the preceding direct object) or stay invariable. «Subjunctive» here = agreed form; «indicative» = invariable form.',
      items: [
        {
          sentence: 'Les livres que j’ai [BLANK] sont sur la table.',
          verb: 'lire',
          indicative_form: 'lu',
          subjunctive_form: 'lus',
          correct_answer: 'subjunctive',
          trigger: 'que + avoir + masc. pl. preceding object',
          explanation: 'que replaces «les livres» (masc. pl.) → agreement → «lus».',
        },
        {
          sentence: 'J’ai [BLANK] trois livres ce mois-ci.',
          verb: 'lire',
          indicative_form: 'lu',
          subjunctive_form: 'lus',
          correct_answer: 'indicative',
          trigger: 'no preceding direct object',
          explanation:
            '«Trois livres» follows the verb → no agreement → «lu».',
        },
        {
          sentence: 'La femme qui est [BLANK] hier portait un manteau rouge.',
          verb: 'venir',
          indicative_form: 'venu',
          subjunctive_form: 'venue',
          correct_answer: 'subjunctive',
          trigger: 'être-verb agreement with subject',
          explanation:
            '«Venir» is être-verb. Past participle agrees with the subject «la femme» (feminine) → «venue». This is être-verb agreement, not the que rule — but the question still selects the agreed form.',
        },
        {
          sentence: 'La photo que nous avons [BLANK] est en noir et blanc.',
          verb: 'choisir',
          indicative_form: 'choisi',
          subjunctive_form: 'choisie',
          correct_answer: 'subjunctive',
          trigger: 'que + avoir + fem. sg. preceding object',
          explanation: 'que replaces «la photo» (fem. sg.) → agreement → «choisie».',
        },
        {
          sentence: 'Nous avons [BLANK] une bonne décision.',
          verb: 'prendre',
          indicative_form: 'pris',
          subjunctive_form: 'prise',
          correct_answer: 'indicative',
          trigger: 'no preceding direct object',
          explanation:
            '«Une bonne décision» follows the verb → no agreement → «pris».',
        },
      ],
    },
    {
      id: 'l34-e6',
      type: 'error_correction',
      question:
        'Each sentence has either swapped qui/que or missed a participle agreement. Rewrite it correctly.',
      items: [
        {
          incorrect: 'La femme que parle italien habite à Lyon.',
          correct: 'La femme qui parle italien habite à Lyon.',
          explanation:
            '«Parle» is a conjugated verb following the pronoun → subject is missing → use qui.',
        },
        {
          incorrect: 'Le livre qui j’ai lu était excellent.',
          correct: 'Le livre que j’ai lu était excellent.',
          explanation:
            'After the pronoun you see «j’ai lu» — subject + verb → object is missing → use que.',
        },
        {
          incorrect: 'La lettre que j’ai écrit est sur la table.',
          correct: 'La lettre que j’ai écrite est sur la table.',
          explanation:
            'que + avoir + preceding direct object «la lettre» (fem. sg.) → agreement → «écrite».',
        },
        {
          incorrect: 'Les amis qu’elle a mentionné sont nombreux.',
          correct: 'Les amis qu’elle a mentionnés sont nombreux.',
          explanation:
            'que replaces «les amis» (masc. pl.) → agreement → «mentionnés».',
        },
        {
          incorrect: 'L’éditeur qui je voudrais interviewer est très occupé.',
          correct: 'L’éditeur que je voudrais interviewer est très occupé.',
          explanation:
            '«je voudrais» = subject + verb → object missing → use que.',
        },
      ],
    },
    {
      id: 'l34-e7',
      type: 'translation',
      question: 'Translate, using qui or que and minding participle agreement.',
      direction: 'en_to_fr',
      correct_answer: [
        'La femme qui parle italien habite à Lyon.',
        'Le livre que j’ai lu est excellent.',
        'L’écrivaine qui a gagné le prix vit à Marseille.',
        'Les amis qu’elle a mentionnés sont nombreux.',
        'La photo que nous avons choisie est en noir et blanc.',
      ],
      explanation:
        'qui = subject missing; que = object missing. With que + avoir + preceding object → past participle agreement.',
    },
    {
      id: 'l34-e8',
      type: 'multiple_choice',
      question: 'Choose the correct sentence.',
      options: [
        'La chanson qui j’ai entendue est belle.',
        'La chanson que j’ai entendu est belle.',
        'La chanson que j’ai entendue est belle.',
        'La chanson qui j’ai entendu est belle.',
      ],
      correct_answer: 'La chanson que j’ai entendue est belle.',
      explanation:
        'que (object missing — j’ai entendu LA CHANSON), and participle agreement with «la chanson» (fem. sg.) → entendue.',
    },
    {
      id: 'l34-e9',
      type: 'matching',
      question: 'Match each relative-clause frame to the test that tells you whether it takes qui or que.',
      pairs: [
        { french: 'La personne ___ parle.', english: 'qui (verb follows directly)' },
        { french: 'La personne ___ je connais.', english: 'que (subject + verb follow)' },
        { french: 'Le moment ___ je préfère.', english: 'que (subject + verb follow)' },
        { french: 'Le moment ___ a marqué ma vie.', english: 'qui (verb follows directly)' },
        { french: 'L’endroit ___ tu cherches.', english: 'que (subject + verb follow)' },
        { french: 'L’endroit ___ se trouve près d’ici.', english: 'qui (verb follows directly)' },
      ],
      explanation:
        'Cover the pronoun and look at the very next element. Verb? → qui. Subject? → que. The test is mechanical and reliable.',
    },
    {
      id: 'l34-e10',
      type: 'speaking_prompt',
      question:
        'Describe three people or places that matter to you. Use BOTH qui (subject) and que (object) at least twice each. Include at least one que + avoir construction with correct past participle agreement.',
      model_answer:
        'Mon meilleur ami, c’est quelqu’un qui me connaît depuis l’enfance et que je vois trop rarement. Le café que j’ai découvert l’an dernier près de chez moi est devenu mon endroit préféré. Et la prof de français qui m’a vraiment fait progresser, je l’ai rencontrée par hasard à une conférence que j’avais failli annuler.',
      translation:
        'My best friend is someone who has known me since childhood and whom I see too rarely. The café I discovered last year near my place has become my favourite spot. And the French teacher who really made me improve — I met her by chance at a conference I’d almost cancelled.',
      tip: 'Notice «que j’avais failli annuler» — preceding direct object «une conférence» (fem. sg.) → would normally agree («annulée»), but here the participle stays invariable because of the special «faillir + inf.» construction. At B1, focus on the simple cases first.',
    },
  ],
}

const lesson35: IntermediateLessonData = {
  id: 35,
  title: 'Relative Pronouns II',
  title_fr: 'Les Pronoms Relatifs II',
  level: 'B1',
  description:
    'Add où (place/time) and dont (replacing «de + noun») to your relative-clause toolkit — and recognise lequel as B1+ enrichment beyond the DELF B1 minimum.',
  dialogue: {
    title: 'Visite de l’appartement rénové',
    context:
      'Sophie, architecte d’intérieur, walks her client Étienne through the renovated Haussmann apartment in the 9e arrondissement of Paris. The whole conversation hinges on relative clauses with où, dont, and lequel — the natural grammar of architectural description.',
    exchanges: [
      {
        speaker: 'Sophie',
        french: 'Voilà l’appartement. C’est la pièce où nous avons commencé les travaux il y a six mois.',
        english: 'Here we are. This is the room where we started the work six months ago.',
        pronunciation: 'vwah-LAH lah-par-tuh-MAHN. say lah PYESS oo noo zah-VOHN koh-mahn-SAY lay trah-VOH eel yah see MWAH',
      },
      {
        speaker: 'Étienne',
        french: 'Magnifique. Et la cheminée dont vous m’aviez parlé, vous l’avez gardée ?',
        english: 'Beautiful. And the fireplace you’d told me about — did you keep it?',
        pronunciation: 'man-yee-FEEK. ay lah shuh-mee-NAY dohn voo mah-VYAY par-LAY, voo lah-VAY gar-DAY',
      },
      {
        speaker: 'Sophie',
        french: 'Bien sûr. Le marbre dont elle est faite est d’origine. On l’a juste nettoyé.',
        english: 'Of course. The marble it’s made of is original. We just cleaned it.',
        pronunciation: 'byan SEWR. luh MAHRBR dohn el ay FET ay doh-ree-ZHEEN. ohn lah zhewst net-twah-YAY',
      },
      {
        speaker: 'Étienne',
        french: 'Parfait. Et la fenêtre par laquelle on voit la Tour Eiffel, elle est dans le salon ?',
        english: 'Perfect. And the window through which you can see the Eiffel Tower — it’s in the living room?',
        pronunciation: 'par-FAY. ay lah fuh-NETR par lah-KEL ohn vwah lah TOOR ay-FEL, el ay dahn luh sah-LOHN',
      },
      {
        speaker: 'Sophie',
        french: 'Oui, venez voir. C’est le moment de la visite que je préfère.',
        english: 'Yes, come see. It’s my favourite moment of the tour.',
        pronunciation: 'wee, vuh-NAY VWAR. say luh moh-MAHN duh lah vee-ZEET kuh zhuh pray-FAIR',
      },
      {
        speaker: 'Étienne',
        french: 'C’est incroyable. Le jour où j’ai signé pour cet appartement, je n’étais pas sûr du choix.',
        english: 'Incredible. The day I signed for this apartment, I wasn’t sure about the choice.',
        pronunciation: 'say tan-krwah-YAHBL. luh ZHOOR oo zhay see-NYAY poor set ah-par-tuh-MAHN, zhuh nay-TAY pah SEWR dew SHWAH',
      },
      {
        speaker: 'Sophie',
        french: 'Beaucoup de clients dont je m’occupe me disent la même chose au début. Le résultat dont je suis le plus fière, c’est ce salon-là.',
        english: 'A lot of the clients I work with say the same thing at first. The result I’m most proud of is this living room.',
        pronunciation: 'boh-KOO duh klee-AHN dohn zhuh moh-KEWP muh DEEZ lah mem SHOHZ oh day-BEW. luh ray-zewl-TAH dohn zhuh swee luh ploo FYAIR, say suh sah-LOHN LAH',
      },
      {
        speaker: 'Étienne',
        french: 'Et la table sur laquelle on prendra le café tout à l’heure, c’est vous qui l’avez dessinée ?',
        english: 'And the table we’re going to have coffee on later — did you design it?',
        pronunciation: 'ay lah TAHBL sewr lah-KEL ohn prahn-DRAH luh kah-FAY too tah LURR, say voo kee lah-VAY day-see-NAY',
      },
      {
        speaker: 'Sophie',
        french: 'Avec un menuisier de Belleville dont la réputation est excellente. Le bois vient du Jura.',
        english: 'With a carpenter from Belleville whose reputation is excellent. The wood comes from the Jura.',
        pronunciation: 'ah-VEK ahn muh-nwee-ZYAY duh BEL-veel dohn lah ray-pew-tah-SYOHN ay ek-suh-LAHNT. luh BWAH vyan dew zhew-RAH',
      },
      {
        speaker: 'Étienne',
        french: 'Magnifique. L’année où je vous ai contactée, je n’imaginais pas un tel résultat.',
        english: 'Beautiful. The year I contacted you, I didn’t imagine a result like this.',
        pronunciation: 'man-yee-FEEK. lah-NAY oo zhuh voo zay kohn-tak-TAY, zhuh nee-mah-zhee-NAY pah ahn tel ray-zewl-TAH',
      },
      {
        speaker: 'Sophie',
        french: 'C’est gentil. Le projet auquel j’ai consacré le plus de temps cette année, c’était le vôtre.',
        english: 'That’s sweet. The project I devoted the most time to this year was yours.',
        pronunciation: 'say zhahn-TEE. luh proh-ZHAY oh-KEL zhay kohn-sah-KRAY luh ploo duh TAHN set ah-NAY, say-TAY luh VOHTR',
      },
      {
        speaker: 'Étienne',
        french: 'Eh bien, je vais recommander partout l’architecte dont les choix m’ont vraiment surpris en bien.',
        english: 'Well, I’m going to recommend everywhere the architect whose choices really surprised me in a good way.',
        pronunciation: 'ay BYAN, zhuh vay ruh-koh-mahn-DAY par-TOO lar-shee-TEKT dohn lay SHWAH mohn vray-MAHN sewr-PREE ahn BYAN',
      },
    ],
  },
  grammarPoints: [
    {
      title: '«Où» = place or time',
      explanation:
        'Où replaces an expression of PLACE («à Paris», «dans le café») OR an expression of TIME («le jour», «l’année», «au moment»). It is the same word in both cases. Unlike English, French uses «où» for time relations too («the day WHEN I arrived» = «le jour où je suis arrivé»). Never use où for people or abstract things.',
      examples: [
        'Place: La ville OÙ j’habite est très calme.',
        'Place: Le café OÙ nous nous sommes rencontrés a fermé.',
        'Time: Le jour OÙ je t’ai rencontré.',
        'Time: L’année OÙ j’ai déménagé à Paris.',
        'Time: Au moment OÙ il est arrivé.',
      ],
      tip:
        'If you can put «in / at / on» in front of the noun in English (in the city, on the day, at the moment), où is your pronoun. If not, où is wrong.',
    },
    {
      title: '«Dont» = replaces «de + noun» — three core uses',
      explanation:
        'Dont is the relative pronoun that replaces «de + noun» in any of three patterns. (1) Verb + de: parler DE, avoir besoin DE, se souvenir DE, avoir peur DE, rêver DE → «le sujet DONT il parle». (2) Possession (whose): «la femme DONT le fils est médecin». (3) Adjective + de: être fier DE, content DE, sûr DE → «le résultat DONT je suis fier». Note: dont is INVARIABLE — it does not change for gender or number.',
      examples: [
        'Verb + de: Le projet DONT je m’occupe est important. (s’occuper de)',
        'Verb + de: La personne DONT je me souviens. (se souvenir de)',
        'Possessive: La femme DONT le fils est médecin.',
        'Possessive: L’architecte DONT les choix m’ont surpris.',
        'Adjective + de: Le résultat DONT je suis fière. (être fière de)',
      ],
      tip:
        'Before you write dont, identify the «de» it is replacing. If the verb/adjective uses «de» in the underlying sentence, dont is correct. If not, you need a different pronoun (où for place, lequel for other prepositions).',
    },
    {
      title: '«Lequel» / «laquelle» / «lesquels» / «lesquelles» — B1+ ENRICHMENT',
      explanation:
        'IMPORTANT: lequel is BEYOND the DELF B1 minimum. The DELF B1 exam tests only qui, que, où, dont — lequel is bonus material that moves you toward B2. Learn it if you can; it will not appear on the DELF B1 exam. Lequel is used after a preposition OTHER than de (→ dont) and OTHER than à before a person (→ qui). It agrees in gender and number with its antecedent. Contractions with à: auquel, à laquelle, auxquels, auxquelles. Contractions with de (rarely seen, only when «dont» can’t be used): duquel, de laquelle, desquels, desquelles.',
      examples: [
        'After «sur»: La table SUR LAQUELLE j’ai posé mon sac. (table = fem. sg.)',
        'After «avec»: L’outil AVEC LEQUEL il travaille. (outil = masc. sg.)',
        'After «pour»: Les raisons POUR LESQUELLES j’hésite. (raisons = fem. pl.)',
        'Contraction with à: Le projet AUQUEL je consacre du temps. (à + lequel = auquel)',
        'Contraction with à: La personne À LAQUELLE je pense. (à + laquelle, no contraction)',
      ],
      tip:
        'For DELF B1, you don’t need to produce lequel — just recognise it in reading. If you do use it, agree it with the noun and contract with à where needed. The four forms map onto gender/number: lequel (m.s), laquelle (f.s), lesquels (m.pl), lesquelles (f.pl).',
    },
  ],
  vocabulary: [
    { french: 'où (place)', english: 'where', category: 'Relative pronoun', example: 'La ville où j’habite.' },
    { french: 'où (time)', english: 'when (referring to a time noun)', category: 'Relative pronoun', example: 'Le jour où je t’ai rencontré.' },
    { french: 'dont', english: 'whose / of which / about which', category: 'Relative pronoun', note: 'Replaces de + noun (invariable)' },
    { french: 'parler de', english: 'to talk about', category: 'Verb + de (→ dont)', example: 'Le sujet dont il parle.' },
    { french: 'avoir besoin de', english: 'to need', category: 'Verb + de (→ dont)' },
    { french: 'se souvenir de', english: 'to remember', category: 'Verb + de (→ dont)' },
    { french: 'avoir peur de', english: 'to be afraid of', category: 'Verb + de (→ dont)' },
    { french: 'rêver de', english: 'to dream of', category: 'Verb + de (→ dont)' },
    { french: 's’occuper de', english: 'to take care of', category: 'Verb + de (→ dont)', example: 'Le projet dont je m’occupe.' },
    { french: 'être fier/fière de', english: 'to be proud of', category: 'Adj + de (→ dont)', example: 'Le résultat dont je suis fier.' },
    { french: 'être sûr(e) de', english: 'to be sure of', category: 'Adj + de (→ dont)' },
    { french: 'être content(e) de', english: 'to be happy with', category: 'Adj + de (→ dont)' },
    { french: 'lequel', english: 'which (m.s) — B1+', category: 'Relative pronoun (lequel)' },
    { french: 'laquelle', english: 'which (f.s) — B1+', category: 'Relative pronoun (lequel)' },
    { french: 'lesquels', english: 'which (m.pl) — B1+', category: 'Relative pronoun (lequel)' },
    { french: 'lesquelles', english: 'which (f.pl) — B1+', category: 'Relative pronoun (lequel)' },
    { french: 'auquel / à laquelle', english: 'to which — B1+', category: 'Lequel contractions', note: 'à + lequel = auquel (no contraction with laquelle)' },
    { french: 'duquel / de laquelle', english: 'of which — B1+', category: 'Lequel contractions', note: 'Rare — only when dont cannot apply' },
    { french: 'une rénovation', english: 'a renovation', category: 'Architecture' },
    { french: 'un(e) architecte d’intérieur', english: 'an interior architect', category: 'Architecture' },
    { french: 'un(e) décorateur/-trice', english: 'a decorator', category: 'Architecture' },
    { french: 'un appartement haussmannien', english: 'a Haussmann-style apartment', category: 'Architecture', example: 'Un appartement haussmannien typique du 9ᵉ.' },
    { french: 'une pièce', english: 'a room', category: 'Architecture' },
    { french: 'une cheminée', english: 'a fireplace', category: 'Architecture' },
    { french: 'le marbre', english: 'marble', category: 'Materials' },
    { french: 'le bois', english: 'wood', category: 'Materials' },
    { french: 'un menuisier / une menuisière', english: 'a carpenter', category: 'Trades' },
    { french: 'd’origine', english: 'original / period', category: 'Architecture', example: 'Le marbre est d’origine.' },
  ],
  culturalNotes: [
    {
      title: 'Le Paris haussmannien',
      content:
        'Between 1853 and 1870, Baron Haussmann and Napoleon III reshaped central Paris: wide boulevards, uniform 6-storey buildings with their distinctive stone façades, wrought-iron balconies on the 2nd and 5th floors. About 60% of central Paris dates from this period. A «classic Haussmann apartment» is a recognisable property type — high ceilings, parquet floors, ornate mouldings, original marble fireplaces — and a major identifier in the French real estate market.',
    },
    {
      title: 'La passion française pour la rénovation',
      content:
        'Television programmes about renovation («Maison à vendre», «Recherche appartement ou maison», «Vous êtes formidables») are among the most watched on French TV. The distinction between architecte d’intérieur (a regulated professional title, requires diploma + ordre) and décorateur (no regulated title, focuses on furnishings) is taken seriously — and is the source of frequent professional disputes.',
    },
    {
      title: 'Les artisans français',
      content:
        'Trades like menuisier (carpenter), plombier (plumber), électricien, maçon are legally regulated in France through the Chambre des Métiers et de l’Artisanat. Each requires a recognised qualification. The artisan economy is a distinct cultural sphere — and saying «un menuisier de Belleville», naming a specific neighbourhood, signals knowledge of the local craft scene that wealthy French clients value highly.',
    },
    {
      title: 'Le 9ᵉ arrondissement',
      content:
        'Paris’s 9th arrondissement (Saint-Georges, Pigalle, Faubourg-Montmartre) has become one of the most desirable family-friendly neighbourhoods in central Paris since the 2010s, with prices comparable to the 7th. Étienne’s renovated apartment there is a recognised cultural marker: bourgeois-bohème, design-conscious, financially comfortable.',
    },
  ],
  exercises: [
    {
      id: 'l35-e1',
      type: 'fill_blank',
      question:
        'Choose «où» or «dont». «Le café ___ nous nous sommes rencontrés a fermé l’an dernier.»',
      correct_answer: 'où',
      explanation: 'Replaces a place expression («dans le café») → «où».',
      hints: ['Place or time → où. de + noun → dont.'],
    },
    {
      id: 'l35-e2',
      type: 'fill_blank',
      question:
        'Choose «où» or «dont». «Le sujet ___ il parle est très complexe.»',
      correct_answer: 'dont',
      explanation: '«Parler de» → de + noun → «dont».',
      hints: ['parler DE → dont.'],
    },
    {
      id: 'l35-e3',
      type: 'transformation',
      question:
        'Combine each pair using «où» (place or time).',
      instruction: 'affirmative_to_negative',
      items: [
        {
          original: 'C’est la ville. J’ai grandi dans cette ville.',
          transformed: 'C’est la ville où j’ai grandi.',
          translation: 'It’s the city where I grew up.',
        },
        {
          original: 'Je n’oublierai jamais le jour. Nous nous sommes rencontrés ce jour-là.',
          transformed: 'Je n’oublierai jamais le jour où nous nous sommes rencontrés.',
          translation: 'I’ll never forget the day we met.',
        },
        {
          original: 'C’est le restaurant. Mes parents fêtent leur anniversaire dans ce restaurant chaque année.',
          transformed: 'C’est le restaurant où mes parents fêtent leur anniversaire chaque année.',
          translation: 'It’s the restaurant where my parents celebrate their anniversary every year.',
        },
        {
          original: 'L’année a été très difficile. Mon grand-père est tombé malade cette année-là.',
          transformed: 'L’année où mon grand-père est tombé malade a été très difficile.',
          translation: 'The year my grandfather got sick was very hard.',
        },
      ],
      explanation:
        'Où collapses any «in/at/on + noun» phrase into a clean relative clause — for both place and time. It is the single most useful relative pronoun for connected description.',
    },
    {
      id: 'l35-e4',
      type: 'rewrite',
      question:
        'Combine each pair using «dont». Identify which of the three dont patterns applies.',
      instruction_type: 'relative_clause',
      items: [
        {
          original: 'Voici le livre. Je t’ai parlé de ce livre hier.',
          expected: 'Voici le livre dont je t’ai parlé hier.',
          hint: 'parler DE → dont (verb + de pattern)',
          explanation: '«Parler de» → dont. The book is what you spoke about.',
        },
        {
          original: 'C’est la femme. Le fils de cette femme est médecin.',
          expected: 'C’est la femme dont le fils est médecin.',
          hint: 'whose son → dont (possessive)',
          explanation: 'Possessive «dont»: «la femme dont le fils» = «whose son».',
        },
        {
          original: 'Le résultat est exceptionnel. Je suis fière de ce résultat.',
          expected: 'Le résultat dont je suis fière est exceptionnel.',
          hint: 'être fière DE → dont (adj + de)',
          explanation: '«Être fière de» → dont. Note the agreement on «fière» (subject = je, feminine).',
        },
        {
          original: 'C’est le client. Je m’occupe de ce client depuis deux ans.',
          expected: 'C’est le client dont je m’occupe depuis deux ans.',
          hint: 's’occuper DE → dont',
          explanation: '«S’occuper de» → dont.',
        },
      ],
    },
    {
      id: 'l35-e5',
      type: 'multiple_choice',
      question:
        'Choose the correct pronoun (qui / que / où / dont): «L’architecte ___ les choix m’ont surpris est très talentueuse.»',
      options: ['qui', 'que', 'où', 'dont'],
      correct_answer: 'dont',
      explanation:
        'Underlying sentence: «les choix DE l’architecte m’ont surpris» → dont replaces «de l’architecte» (possessive pattern).',
    },
    {
      id: 'l35-e6',
      type: 'error_correction',
      question:
        'Each sentence misuses a relative pronoun. Rewrite it correctly.',
      items: [
        {
          incorrect: 'C’est la ville dont j’habite.',
          correct: 'C’est la ville où j’habite.',
          explanation: '«Habiter dans une ville» → place → où, not dont.',
        },
        {
          incorrect: 'Le projet où je m’occupe est important.',
          correct: 'Le projet dont je m’occupe est important.',
          explanation: '«S’occuper de» → dont, not où.',
        },
        {
          incorrect: 'La personne que je me souviens.',
          correct: 'La personne dont je me souviens.',
          explanation: '«Se souvenir de» → dont, not que.',
        },
        {
          incorrect: 'Le jour que je suis arrivé.',
          correct: 'Le jour où je suis arrivé.',
          explanation: 'Time expression → où, not que.',
        },
      ],
    },
    {
      id: 'l35-e7',
      type: 'translation',
      question: 'Translate using qui, que, où, or dont (DELF B1 core scope).',
      direction: 'en_to_fr',
      correct_answer: [
        'La ville où j’habite est très calme.',
        'Le livre dont je t’ai parlé est passionnant.',
        'L’architecte dont les choix m’ont surpris est très talentueuse.',
        'Le jour où nous nous sommes rencontrés, il pleuvait.',
        'Le résultat dont je suis le plus fier est ce salon.',
      ],
      explanation:
        'où for place/time; dont for verb+de, possession, and adjective+de. These four pronouns cover the DELF B1 syllabus.',
    },
    {
      id: 'l35-e8',
      type: 'speaking_prompt',
      question:
        'Describe a place that matters to you. In 4–5 sentences, use où at least twice (one place, one time) and dont at least twice (one verb+de, one possessive). One sentence using lequel/laquelle is bonus.',
      model_answer:
        'Le petit village où j’ai grandi se trouve dans le sud-ouest. C’est l’endroit dont je rêve quand je suis stressée en ville. Le jour où mes parents l’ont acheté, ils avaient à peine 30 ans. Mon grand-père, dont la passion était la menuiserie, a construit lui-même la moitié de la maison. C’est aussi le lieu pour lequel j’ai le plus de tendresse au monde.',
      translation:
        'The little village where I grew up is in the south-west. It’s the place I dream of when I’m stressed in the city. The day my parents bought it, they were barely 30. My grandfather, whose passion was carpentry, built half the house himself. It’s also the place I have the most affection for in the world.',
      tip: 'For DELF B1, qui/que/où/dont is enough — but a single well-placed lequel marks you as approaching B2.',
    },
    {
      id: 'l35-e9',
      type: 'multiple_choice',
      question:
        '[BONUS — B1+] Which sentence uses lequel/laquelle correctly?',
      options: [
        'La table sur lequel j’ai posé mon sac est ancienne.',
        'La table sur laquelle j’ai posé mon sac est ancienne.',
        'La table sur quelle j’ai posé mon sac est ancienne.',
        'La table dont j’ai posé mon sac est ancienne.',
      ],
      correct_answer: 'La table sur laquelle j’ai posé mon sac est ancienne.',
      explanation:
        '«Table» is feminine singular → laquelle. After the preposition «sur» (not «de»), lequel/laquelle is correct (dont would replace «de + noun»). This item is bonus — DELF B1 does not require it.',
    },
    {
      id: 'l35-e10',
      type: 'fill_blank',
      question:
        '[BONUS — B1+] Complete with the correct contraction of à + lequel form. «Le projet ___ je consacre le plus de temps est ce roman.» (à + lequel)',
      correct_answer: 'auquel',
      explanation:
        '«Consacrer du temps À un projet» → after «à», use lequel forms. «À + lequel» contracts to «auquel» (masculine singular). Note: «à + laquelle» does NOT contract; «à + lesquels» = auxquels; «à + lesquelles» = auxquelles.',
      hints: ['à + lequel = auquel. à + laquelle = à laquelle (no contraction).'],
    },
  ],
}

const lesson36: IntermediateLessonData = {
  id: 36,
  title: 'Reported Speech',
  title_fr: 'Le Discours Indirect',
  level: 'B1',
  description:
    'Report statements, questions, and commands with accurate tense shifts, time-expression shifts, and pronoun shifts — the workhorse grammar of French journalism.',
  dialogue: {
    title: 'Après l’interview',
    context:
      'Maëlle, a journalist at France Inter, has just returned from interviewing a government minister. She briefs Victor, her producer, on what was said — moving back and forth between her notes (direct speech) and the version she will broadcast (indirect speech). All three reported-speech modes appear, with full tense and time-expression shifts.',
    exchanges: [
      {
        speaker: 'Maëlle',
        french: 'Bon, j’ai mes notes. Le ministre a commencé en disant : « Je suis prêt à discuter avec les syndicats. »',
        english: 'OK, I have my notes. The minister opened by saying: «I’m ready to talk with the unions.»',
        pronunciation: 'bohn, zhay may NOHT. luh mee-NEESTR ah koh-mahn-SAY ahn dee-ZAHN: zhuh swee PRAY ah dees-kew-TAY ah-VEK lay san-dee-KAH',
      },
      {
        speaker: 'Victor',
        french: 'D’accord. Donc dans ton papier, tu écris : il a dit qu’il était prêt à discuter avec les syndicats. Présent devient imparfait.',
        english: 'OK. So in your piece, you write: he said he was ready to talk with the unions. Present becomes imperfect.',
        pronunciation: 'dah-KOR. dohnk dahn tohn pap-YAY, tew ay-KREE: eel ah dee keel ay-TAY PRAY ah dees-kew-TAY ah-VEK lay san-dee-KAH. pray-ZAHN duh-VYAN an-par-FAY',
      },
      {
        speaker: 'Maëlle',
        french: 'Exactement. Ensuite il a ajouté : « Hier, nous avons signé un premier accord. »',
        english: 'Exactly. Then he added: «Yesterday, we signed a first agreement.»',
        pronunciation: 'eg-zak-tuh-MAHN. ahn-SWEET eel ah ah-zhoo-TAY: yair, noo zah-VOHN see-NYAY ahn pruh-MYAY ah-KOR',
      },
      {
        speaker: 'Victor',
        french: 'Donc tu rapportes : il a ajouté qu’ils avaient signé un premier accord la veille. Passé composé devient plus-que-parfait, et « hier » devient « la veille ».',
        english: 'So you report: he added that they had signed a first agreement the day before. Passé composé becomes plus-que-parfait, and «yesterday» becomes «the day before».',
        pronunciation: 'dohnk tew rah-PORT: eel ah ah-zhoo-TAY keel zah-VAY see-NYAY ahn pruh-MYAY ah-KOR lah VAY. pah-SAY kohn-poh-ZAY duh-VYAN ploos-kuh-par-FAY',
      },
      {
        speaker: 'Maëlle',
        french: 'Puis il a précisé : « Je viendrai à l’Assemblée demain. »',
        english: 'Then he stated: «I’ll come to the Assembly tomorrow.»',
        pronunciation: 'pwee eel ah pray-see-ZAY: zhuh vyan-DRAY ah lah-sahn-BLAY duh-MAHN',
      },
      {
        speaker: 'Victor',
        french: 'Tu écris : il a précisé qu’il viendrait à l’Assemblée le lendemain. Futur simple devient conditionnel présent.',
        english: 'You write: he stated he would come to the Assembly the next day. Futur simple becomes conditionnel présent.',
        pronunciation: 'tew ay-KREE: eel ah pray-see-ZAY keel vyan-DRAY ah lah-sahn-BLAY luh lahn-duh-MAHN',
      },
      {
        speaker: 'Maëlle',
        french: 'Et il a annoncé : « Je vais présenter le texte cette semaine. »',
        english: 'And he announced: «I’m going to present the text this week.»',
        pronunciation: 'ay eel ah ah-nohn-SAY: zhuh vay pray-zahn-TAY luh tekst set suh-MEN',
      },
      {
        speaker: 'Victor',
        french: 'Futur proche : il a annoncé qu’il allait présenter le texte cette semaine-là. « Aller + infinitif » devient « allait + infinitif ».',
        english: 'Futur proche: he announced he was going to present the text that week. «Aller + infinitive» becomes «allait + infinitive».',
        pronunciation: 'few-TEWR PROHSH: eel ah ah-nohn-SAY keel ah-LAY pray-zahn-TAY luh tekst set suh-MEN LAH',
      },
      {
        speaker: 'Maëlle',
        french: 'Maintenant les questions. Une journaliste a demandé : « Est-ce que vous accepterez tous les amendements ? »',
        english: 'Now the questions. A journalist asked: «Will you accept all the amendments?»',
        pronunciation: 'man-tuh-NAHN lay kes-TYOHN. ewn zhoor-nah-LEEST ah duh-mahn-DAY: es-kuh voo zak-sep-tuh-RAY too lay zah-mahnd-MAHN',
      },
      {
        speaker: 'Victor',
        french: 'Question fermée donc tu rapportes avec « si » : elle a demandé s’il accepterait tous les amendements. Pas d’est-ce que, pas d’inversion, ordre déclaratif.',
        english: 'Yes/no question, so you report with «si»: she asked if he would accept all the amendments. No est-ce que, no inversion, declarative order.',
        pronunciation: 'kes-TYOHN fair-MAY dohnk tew rah-PORT ah-VEK SEE: el ah duh-mahn-DAY seel ak-sep-tuh-RAY too lay zah-mahnd-MAHN',
      },
      {
        speaker: 'Maëlle',
        french: 'Et une autre : « Pourquoi refusez-vous cette option-là ? »',
        english: 'And another: «Why are you refusing that option?»',
        pronunciation: 'ay ewn OHTR: poor-KWAH ruh-few-ZAY voo set op-SYOHN LAH',
      },
      {
        speaker: 'Victor',
        french: 'Question avec mot interrogatif : elle a demandé pourquoi il refusait cette option-là. On garde le mot interrogatif, on supprime l’inversion.',
        english: 'Question with an interrogative word: she asked why he was refusing that option. Keep the question word, drop the inversion.',
        pronunciation: 'kes-TYOHN ah-VEK MOH an-tay-roh-gah-TEEF: el ah duh-mahn-DAY poor-KWAH eel ruh-few-ZAY set op-SYOHN LAH',
      },
      {
        speaker: 'Maëlle',
        french: 'À la fin il a dit aux journalistes : « Restez disponibles ce soir, s’il vous plaît. »',
        english: 'At the end he told the journalists: «Stay available tonight, please.»',
        pronunciation: 'ah lah FAHN eel ah dee oh zhoor-nah-LEEST: res-TAY dees-poh-NEEBL suh SWAHR, seel voo PLAY',
      },
      {
        speaker: 'Victor',
        french: 'C’est un ordre, donc « dire à quelqu’un DE + infinitif » : il a demandé aux journalistes de rester disponibles ce soir-là.',
        english: 'That’s a command, so «tell someone TO + infinitive»: he asked the journalists to stay available that evening.',
        pronunciation: 'say tahn OHRDR, dohnk DEER ah kel-KAHN duh + an-fee-nee-TEEF: eel ah duh-mahn-DAY oh zhoor-nah-LEEST duh res-TAY dees-poh-NEEBL suh swahr LAH',
      },
      {
        speaker: 'Maëlle',
        french: 'Parfait. Donc mon sujet de ce matin est complet : trois affirmations, deux questions et un ordre, tout au discours indirect.',
        english: 'Perfect. So my piece for this morning is complete: three statements, two questions, and one command, all in reported speech.',
        pronunciation: 'par-FAY. dohnk mohn sew-ZHAY duh suh mah-TAHN ay kohn-PLAY: twah zah-feer-mah-SYOHN, duh kes-TYOHN ay ahn OHRDR, too oh dees-KOOR an-dee-REKT',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Reporting statements — the four core tense shifts',
      explanation:
        'When the reporting verb is in a PAST tense («il a dit», «elle a expliqué», «j’ai annoncé»), the verbs in the reported clause SHIFT BACK in tense. Memorise these four pairs: présent → imparfait; passé composé → plus-que-parfait; futur simple → conditionnel présent; futur proche («aller + inf») → «allait + inf». The conditionnel présent does NOT shift — it stays the same. If the reporting verb is in the PRESENT («il dit que…»), no shifts apply.',
      examples: [
        'Présent → Imparfait: «Je suis prêt.» → Il a dit qu’il était prêt.',
        'Passé composé → PQP: «J’ai signé.» → Il a dit qu’il avait signé.',
        'Futur simple → Conditionnel: «Je viendrai.» → Il a dit qu’il viendrait.',
        'Futur proche → allait + inf: «Je vais présenter.» → Il a dit qu’il allait présenter.',
        'Conditionnel reste conditionnel: «Je viendrais si je pouvais.» → Il a dit qu’il viendrait s’il pouvait.',
      ],
      tip:
        'There is no shift if the reporting verb is in the present («il dit qu’il est prêt»). The shifts only apply when reporting in the past. This is the single most important condition.',
    },
    {
      title: 'Time expressions and pronouns shift with the speech act',
      explanation:
        'When you report past speech, you are looking back at a different moment, so time references «here / now / today» also shift. Memorise the key pairs: aujourd’hui → ce jour-là; hier → la veille; demain → le lendemain; maintenant → à ce moment-là; ici → là; cette semaine → cette semaine-là. Pronouns also shift to fit the new perspective: «je» from the original speaker becomes «il/elle»; «tu» becomes «je» or «il/elle» depending on context.',
      examples: [
        '«Je viendrai demain» → Il a dit qu’il viendrait le lendemain.',
        '«J’ai signé hier» → Il a dit qu’il avait signé la veille.',
        '«Je suis ici» → Il a dit qu’il était là.',
        '«Maintenant je travaille» → Il a dit qu’à ce moment-là il travaillait.',
        'Pronoun shift: «Je viens» (he said) → Il a dit qu’il venait.',
      ],
      tip:
        'The most common B1 error in reported speech is forgetting the time-expression shift. «Il a dit qu’il viendrait demain» is WRONG if you are reporting the next day or later — it must be «le lendemain». Always ask: has the moment of reporting moved away from the moment of speaking?',
    },
    {
      title: 'Reporting questions: si (yes/no) or interrogative word (info question)',
      explanation:
        'YES/NO questions are reported with «si». Drop «est-ce que» and any inversion; use declarative word order. INFORMATION questions (with pourquoi, où, quand, comment, qui, que, quel...) keep the question word but drop the inversion. «Qu’est-ce que / qu’est-ce qui» specifically transforms: «qu’est-ce que tu fais ?» → «il m’a demandé CE QUE je faisais»; «qu’est-ce qui se passe ?» → «il m’a demandé CE QUI se passait».',
      examples: [
        'Yes/no: «Est-ce que tu viens ?» → Il m’a demandé si je venais.',
        'Yes/no: «Tu signes ?» → Il a demandé si je signais.',
        'Info: «Pourquoi refuses-tu ?» → Il a demandé pourquoi je refusais.',
        'Info: «Où vas-tu ?» → Il a demandé où j’allais.',
        '«Qu’est-ce que»: «Qu’est-ce que tu fais ?» → Il a demandé ce que je faisais.',
      ],
      tip:
        'Yes/no = si. Information = keep the question word. «Qu’est-ce que» and «qu’est-ce qui» are the only special cases that need rewriting (→ ce que / ce qui). No est-ce que ever survives the transformation.',
    },
    {
      title: 'Reporting commands: «dire/demander à qqn DE + infinitif»',
      explanation:
        'Commands (impératif in direct speech) are reported using a verb of asking/telling + «à quelqu’un» + «de» + INFINITIVE. The infinitive replaces the imperative; there are no tense shifts because there is no conjugated reported verb. Common reporting verbs for commands: dire de, demander de, ordonner de, conseiller de, recommander de, suggérer de, interdire de, autoriser à (rare exception: à).',
      examples: [
        '«Partez !» → Il a demandé de partir.',
        '«Restez disponibles !» → Il a demandé aux journalistes DE rester disponibles.',
        '«Ne pars pas !» → Il m’a demandé DE ne pas partir.',
        '«Appelez-moi !» → Il m’a demandé DE l’appeler.',
        'Negation: «de + ne pas + infinitif» (de ne pas partir, de ne pas l’oublier).',
      ],
      tip:
        'No conjugated verb in the reported clause — just an infinitive. Negation wraps around the infinitive: «de NE PAS partir», not «de ne pas + conjugated form».',
    },
  ],
  vocabulary: [
    { french: 'dire que / dire de', english: 'to say that / to tell to', category: 'Reporting verb' },
    { french: 'expliquer que', english: 'to explain that', category: 'Reporting verb' },
    { french: 'affirmer que', english: 'to state / assert that', category: 'Reporting verb' },
    { french: 'ajouter que', english: 'to add that', category: 'Reporting verb' },
    { french: 'préciser que', english: 'to specify that', category: 'Reporting verb' },
    { french: 'annoncer que', english: 'to announce that', category: 'Reporting verb' },
    { french: 'demander si / de', english: 'to ask whether / to ask to', category: 'Reporting verb' },
    { french: 'répondre que', english: 'to reply that', category: 'Reporting verb' },
    { french: 'admettre que', english: 'to admit that', category: 'Reporting verb' },
    { french: 'reconnaître que', english: 'to acknowledge that', category: 'Reporting verb' },
    { french: 'nier que', english: 'to deny that', category: 'Reporting verb', note: '+ subjonctif' },
    { french: 'prétendre que', english: 'to claim that', category: 'Reporting verb' },
    { french: 'promettre que / de', english: 'to promise that / to', category: 'Reporting verb' },
    { french: 'conseiller de', english: 'to advise to', category: 'Reporting verb' },
    { french: 'avertir que', english: 'to warn that', category: 'Reporting verb' },
    { french: 'aujourd’hui → ce jour-là', english: 'today → that day', category: 'Time shift' },
    { french: 'hier → la veille', english: 'yesterday → the day before', category: 'Time shift' },
    { french: 'demain → le lendemain', english: 'tomorrow → the next day', category: 'Time shift' },
    { french: 'maintenant → à ce moment-là', english: 'now → at that point', category: 'Time shift' },
    { french: 'ici → là', english: 'here → there', category: 'Time shift' },
    { french: 'cette semaine → cette semaine-là', english: 'this week → that week', category: 'Time shift' },
    { french: 'selon lui / d’après elle', english: 'according to him / her', category: 'Discourse marker' },
    { french: 'il paraît que', english: 'apparently / it seems that', category: 'Discourse marker', note: '+ indicative' },
    { french: 'il semblerait que', english: 'it would seem that', category: 'Discourse marker', note: '+ subjunctive (formal)' },
    { french: 'une conférence de presse', english: 'a press conference', category: 'Journalism' },
    { french: 'un entretien', english: 'an interview (formal)', category: 'Journalism' },
    { french: 'un communiqué', english: 'a press release', category: 'Journalism' },
    { french: 'un papier / un sujet', english: 'a piece / story', category: 'Journalism' },
    { french: 'rapporter (des paroles)', english: 'to report (someone’s words)', category: 'Journalism' },
    { french: 'paraphraser', english: 'to paraphrase', category: 'Journalism' },
  ],
  culturalNotes: [
    {
      title: 'Le service public audiovisuel',
      content:
        'France Inter, France Culture, franceinfo, France Musique — public-service radio reaches over 14 million daily French listeners. It is editorially distinct from commercial radio and carries enormous cultural weight. A morning interview on France Inter («le 7h50») is a routine career-defining moment for French politicians. Reported speech from these interviews dominates next-day newspaper headlines.',
    },
    {
      title: 'Le discours rapporté à l’école',
      content:
        'French secondary education explicitly trains students in the transformation from direct to indirect speech — it appears in the brevet (age 15) and the baccalauréat français (age 17). Adult learners encounter it again in DELF B1. So when Victor explains the tense shifts to Maëlle, he is using vocabulary every French adult learned at school.',
    },
    {
      title: 'La parole politique et les fact-checkers',
      content:
        'French media has developed a strong fact-checking culture since the 2010s: Le Monde’s «Les Décodeurs», Libération’s «CheckNews», franceinfo’s «Vrai ou Fake». These services rely heavily on precise reported speech — what exactly the politician said, when, and to whom — to determine accuracy. The grammar of reported speech is therefore deeply tied to French political journalism’s self-image.',
    },
  ],
  exercises: [
    {
      id: 'l36-e1',
      type: 'rewrite',
      question:
        'Transform each direct quotation into reported speech. The reporting verb «il a dit» is in the past, so all tense shifts apply.',
      instruction_type: 'reported_speech',
      items: [
        {
          original: 'Il a dit : « Je suis prêt. »',
          expected: 'Il a dit qu’il était prêt.',
          hint: 'présent → imparfait',
          explanation: '«Suis» (présent) shifts to «était» (imparfait).',
        },
        {
          original: 'Il a dit : « J’ai signé. »',
          expected: 'Il a dit qu’il avait signé.',
          hint: 'passé composé → plus-que-parfait',
          explanation: '«J’ai signé» (PC) shifts to «avait signé» (PQP).',
        },
        {
          original: 'Il a dit : « Je viendrai. »',
          expected: 'Il a dit qu’il viendrait.',
          hint: 'futur simple → conditionnel présent',
          explanation: '«Viendrai» (futur) shifts to «viendrait» (conditionnel).',
        },
        {
          original: 'Il a dit : « Je vais présenter le texte. »',
          expected: 'Il a dit qu’il allait présenter le texte.',
          hint: 'futur proche → allait + infinitif',
          explanation: '«Je vais présenter» shifts to «il allait présenter».',
        },
        {
          original: 'Il a dit : « Je viendrais si je pouvais. »',
          expected: 'Il a dit qu’il viendrait s’il pouvait.',
          hint: 'conditionnel ne change pas; imparfait ne change pas',
          explanation: 'The conditional stays conditional; the imparfait stays imparfait.',
        },
      ],
    },
    {
      id: 'l36-e2',
      type: 'rewrite',
      question:
        'Transform each yes/no question into reported speech using «si».',
      instruction_type: 'reported_speech',
      items: [
        {
          original: 'Elle a demandé : « Tu viens demain ? »',
          expected: 'Elle a demandé si je venais le lendemain.',
          hint: 'si + déclaratif + time shift',
          explanation:
            'Yes/no question → si; «viens» (présent) → «venais» (imparfait); «demain» → «le lendemain».',
        },
        {
          original: 'Il a demandé : « Est-ce que vous accepterez ? »',
          expected: 'Il a demandé si nous accepterions.',
          hint: 'drop est-ce que; futur → conditionnel',
          explanation:
            'No «est-ce que» survives; «accepterez» (futur) → «accepterions» (conditionnel).',
        },
        {
          original: 'Le client m’a demandé : « Avez-vous fini le rapport ? »',
          expected: 'Le client m’a demandé si j’avais fini le rapport.',
          hint: 'drop inversion; passé composé → PQP',
          explanation:
            'No inversion in reported speech; «avez fini» (PC) → «avait fini» (PQP).',
        },
        {
          original: 'Elle m’a demandé : « Est-ce que tu es à la maison ? »',
          expected: 'Elle m’a demandé si j’étais à la maison.',
          hint: 'si + déclaratif',
          explanation: '«Es» (présent) → «étais» (imparfait).',
        },
      ],
    },
    {
      id: 'l36-e3',
      type: 'rewrite',
      question:
        'Transform each information question into reported speech. Keep the question word, drop the inversion.',
      instruction_type: 'reported_speech',
      items: [
        {
          original: 'Elle m’a demandé : « Pourquoi refuses-tu cette option ? »',
          expected: 'Elle m’a demandé pourquoi je refusais cette option.',
          hint: 'keep pourquoi; drop inversion; présent → imparfait',
          explanation:
            '«Pourquoi refuses-tu» → «pourquoi je refusais»: no inversion, present → imparfait.',
        },
        {
          original: 'Le journaliste a demandé : « Où va le ministre ? »',
          expected: 'Le journaliste a demandé où allait le ministre.',
          hint: 'keep où; subject-verb order; présent → imparfait',
          explanation:
            'In reported speech with a noun subject, you can use either «où allait le ministre» or «où le ministre allait» — both correct.',
        },
        {
          original: 'Elle m’a demandé : « Qu’est-ce que tu fais ? »',
          expected: 'Elle m’a demandé ce que je faisais.',
          hint: 'qu’est-ce que → ce que',
          explanation:
            '«Qu’est-ce que» specifically becomes «ce que»; «fais» (présent) → «faisais» (imparfait).',
        },
        {
          original: 'Il a demandé : « Qu’est-ce qui s’est passé ? »',
          expected: 'Il a demandé ce qui s’était passé.',
          hint: 'qu’est-ce qui → ce qui; PC → PQP',
          explanation:
            '«Qu’est-ce qui» → «ce qui»; «s’est passé» (PC) → «s’était passé» (PQP).',
        },
      ],
    },
    {
      id: 'l36-e4',
      type: 'rewrite',
      question:
        'Transform each command (impératif) into reported speech using «de + infinitif».',
      instruction_type: 'reported_speech',
      items: [
        {
          original: 'Il a dit aux journalistes : « Restez disponibles ! »',
          expected: 'Il a demandé aux journalistes de rester disponibles.',
          hint: 'dire/demander à qqn de + infinitif',
          explanation: 'Command → infinitive. Reporting verb shifts to «demander/dire de».',
        },
        {
          original: 'La prof nous a dit : « Ne parlez pas pendant l’examen ! »',
          expected: 'La prof nous a demandé de ne pas parler pendant l’examen.',
          hint: 'negation wraps around the infinitive: de ne pas + inf',
          explanation: '«Ne pas» wraps around the infinitive: «de ne pas parler».',
        },
        {
          original: 'Le médecin m’a dit : « Reposez-vous une semaine ! »',
          expected: 'Le médecin m’a conseillé de me reposer une semaine.',
          hint: 'conseiller de + inf for advice',
          explanation:
            'Reflexive verb adjusts pronoun: «reposez-vous» (vous form) → «de me reposer» (because the subject is «je»).',
        },
        {
          original: 'Mon ami m’a dit : « Appelle-moi ce soir ! »',
          expected: 'Mon ami m’a demandé de l’appeler ce soir-là.',
          hint: 'pronoun shift: moi → le/l’; ce soir → ce soir-là',
          explanation:
            '«Appelle-moi» (you call me) → «de l’appeler» (from my perspective, «me» becomes «him/her»). Time shift: «ce soir» → «ce soir-là».',
        },
      ],
    },
    {
      id: 'l36-e5',
      type: 'matching',
      question: 'Match each time expression in direct speech to its reported-speech equivalent.',
      pairs: [
        { french: 'aujourd’hui', english: 'ce jour-là' },
        { french: 'hier', english: 'la veille' },
        { french: 'demain', english: 'le lendemain' },
        { french: 'maintenant', english: 'à ce moment-là' },
        { french: 'ici', english: 'là' },
        { french: 'cette semaine', english: 'cette semaine-là' },
        { french: 'ce matin', english: 'ce matin-là' },
        { french: 'la semaine prochaine', english: 'la semaine suivante' },
      ],
      explanation:
        'These shifts are not optional. Forgetting them is the #1 B1 reported-speech error on the DELF.',
    },
    {
      id: 'l36-e6',
      type: 'rewrite',
      question: 'Transform this 4-sentence dialogue into a single paragraph of indirect speech.',
      instruction_type: 'reported_speech',
      items: [
        {
          original:
            'Direct: « J’ai signé hier. Je viendrai demain à l’Assemblée. Tu veux venir avec moi ? Ne dis rien aux journalistes ! » (Il m’a expliqué…)',
          expected:
            'Il m’a expliqué qu’il avait signé la veille, qu’il viendrait à l’Assemblée le lendemain, il m’a demandé si je voulais venir avec lui et de ne rien dire aux journalistes.',
          hint: 'Combine statement (PC → PQP), statement (futur → cond.), question (si + présent → imparfait), command (de + neg + inf).',
          explanation:
            'A real-world piece of reported speech braids all four modes together in a single sentence — exactly how French journalism summarises interviews.',
        },
      ],
    },
    {
      id: 'l36-e7',
      type: 'rewrite',
      question:
        'Reverse direction: reconstruct the direct speech from each reported-speech sentence.',
      instruction_type: 'reported_speech',
      items: [
        {
          original: 'Indirect: Il m’a dit qu’il venait le lendemain.',
          expected: '« Je viens demain. »',
          hint: 'imparfait → présent; le lendemain → demain',
          explanation: 'Reverse the shifts: «venait» → «viens»; «le lendemain» → «demain».',
        },
        {
          original: 'Indirect: Elle m’a demandé si j’avais lu son article.',
          expected: '« As-tu lu mon article ? » OU « Est-ce que tu as lu mon article ? »',
          hint: 'si + PQP → est-ce que/inversion + PC',
          explanation:
            'Reverse: PQP → PC; «si» drops, restore inversion or «est-ce que»; pronoun «j» (from my perspective) → «tu» (from her perspective).',
        },
        {
          original: 'Indirect: Il a demandé de ne pas l’appeler après 22 h.',
          expected: '« Ne m’appelle(z) pas après 22 h ! »',
          hint: 'de + ne pas + inf → impératif négatif',
          explanation: 'Restore the imperative; «l’» (him/her, from reporter’s POV) → «me/m’» (the original speaker).',
        },
      ],
    },
    {
      id: 'l36-e8',
      type: 'error_correction',
      question:
        'Each reported sentence has at least one tense, time-expression, or pronoun error. Rewrite it correctly.',
      items: [
        {
          incorrect: 'Il m’a dit qu’il vient demain.',
          correct: 'Il m’a dit qu’il venait le lendemain.',
          explanation: 'Two errors: présent should shift to imparfait; «demain» should shift to «le lendemain».',
        },
        {
          incorrect: 'Elle m’a demandé est-ce que je suis prêt.',
          correct: 'Elle m’a demandé si j’étais prêt.',
          explanation: 'No «est-ce que» in reported speech. Replace with «si». Présent → imparfait.',
        },
        {
          incorrect: 'Il a demandé pourquoi est-ce que je refuse.',
          correct: 'Il a demandé pourquoi je refusais.',
          explanation: 'No «est-ce que» after the question word. Présent → imparfait.',
        },
        {
          incorrect: 'Le client a dit qu’il avait signé demain.',
          correct: 'Le client a dit qu’il signerait le lendemain.',
          explanation:
            '«Demain» cannot pair with a past tense — it indicates future from the reporting moment. The original «je signerai demain» (futur) → «qu’il signerait le lendemain».',
        },
        {
          incorrect: 'Il m’a dit que ne pas parler aux journalistes.',
          correct: 'Il m’a dit de ne pas parler aux journalistes.',
          explanation:
            'Reported command → «de + infinitif», not «que». Negation wraps around the infinitive.',
        },
      ],
    },
    {
      id: 'l36-e9',
      type: 'translation',
      question:
        'Translate using reported speech. The reporting verb is in the past in each item.',
      direction: 'en_to_fr',
      correct_answer: [
        'Il a dit qu’il était prêt à discuter.',
        'Elle m’a demandé si j’avais fini le rapport.',
        'Le ministre a annoncé qu’il viendrait le lendemain.',
        'La prof nous a demandé de ne pas parler pendant l’examen.',
        'Il a expliqué qu’il allait présenter le texte cette semaine-là.',
      ],
      explanation:
        'Each item exercises one of the four key shifts: présent → imparfait, PC → PQP, futur → cond., command → de + inf. The fifth combines futur proche → allait + inf with a time shift.',
    },
    {
      id: 'l36-e10',
      type: 'speaking_prompt',
      question:
        'Report a conversation you had recently. In 5 sentences, include at least: ONE statement with présent → imparfait, ONE statement with futur → cond., ONE reported yes/no question with «si», ONE reported info question, and ONE reported command («m’a demandé de…»).',
      model_answer:
        'Hier soir, j’ai croisé mon voisin dans l’ascenseur. Il m’a dit qu’il déménageait à Lyon le mois suivant, et qu’il vendrait son appartement à un jeune couple qu’il avait déjà rencontré. Il m’a demandé si je connaissais un bon plombier dans le quartier. Quand je lui ai demandé pourquoi il partait si vite, il m’a expliqué qu’il avait trouvé un nouveau poste là-bas. Avant de sortir, il m’a demandé de prévenir la gardienne pour les clés.',
      translation:
        'Last night I bumped into my neighbour in the lift. He told me he was moving to Lyon next month, and that he would sell his apartment to a young couple he’d already met. He asked me if I knew a good plumber in the area. When I asked him why he was leaving so quickly, he explained that he’d found a new job there. Before going out, he asked me to let the concierge know about the keys.',
      tip: 'Notice every time-anchor: «le mois suivant» (not «next month»), «la veille», «ce matin-là». DELF examiners listen for these shifts as the marker of B1 production.',
    },
  ],
}

const lesson37: IntermediateLessonData = {
  id: 37,
  title: 'The Passive Voice',
  title_fr: 'La Voix Passive',
  level: 'B1',
  description:
    'Form and recognise the passive voice in any tense, distinguish par from de, and know when «on + active» sounds more natural in spoken French.',
  dialogue: {
    title: 'Le café et le journal du matin',
    context:
      'Paul and Mina read the morning paper together at a Paris café. They discuss the day’s news — a building renovation, an election, a contract — in passive constructions, then rephrase the same stories more naturally using «on + active». The contrast models when French speakers actually USE the passive vs. avoid it.',
    exchanges: [
      {
        speaker: 'Paul',
        french: 'Tiens, regarde. L’article dit que la gare de Lyon sera entièrement rénovée d’ici 2028.',
        english: 'Look at this. The article says Gare de Lyon will be entirely renovated by 2028.',
        pronunciation: 'tyan, ruh-GARD. lar-TEEKL dee kuh lah GAR duh lee-OHN suh-RAH ahn-tyair-MAHN ray-noh-VAY dee-SEE duh meel van-WEET',
      },
      {
        speaker: 'Mina',
        french: 'Et le chantier a été confié à un cabinet d’architectes suisse, c’est ça ?',
        english: 'And the project was awarded to a Swiss architects’ firm, right?',
        pronunciation: 'ay luh shahn-TYAY ah ay-TAY kohn-fee-AY ah ahn kah-bee-NAY dar-shee-TEKT SWEESS, say SAH',
      },
      {
        speaker: 'Paul',
        french: 'Oui. Mais en conversation, je dirais plutôt : la SNCF a confié le chantier à un cabinet suisse. C’est plus naturel.',
        english: 'Yes. But in conversation, I’d rather say: the SNCF awarded the project to a Swiss firm. It sounds more natural.',
        pronunciation: 'wee. may ahn kohn-vair-sah-SYOHN, zhuh dee-RAY plew-TOH: lah es-en-say-EF ah kohn-fee-AY luh shahn-TYAY ah ahn kah-bee-NAY SWEESS. say ploo nah-tew-REL',
      },
      {
        speaker: 'Mina',
        french: 'Tu as raison. Le passif rend le texte plus officiel. Tu vois — « le nouveau directeur a été élu hier ». À l’oral, on dirait « on a élu un nouveau directeur ».',
        english: 'You’re right. The passive makes the text feel more official. Look — «the new director was elected yesterday». In speech, we’d say «they elected a new director».',
        pronunciation: 'tew ah ray-ZOHN. luh pah-SEEF rahn luh tekst ploo zoh-fee-SYEL. tew VWAH — luh noo-VOH dee-rek-TURR ah ay-TAY ay-LEW yair',
      },
      {
        speaker: 'Paul',
        french: 'Exactement. Et regarde l’article culture : la place sera entourée DE nouveaux bâtiments dès l’an prochain.',
        english: 'Exactly. And look at the culture section: the square will be surrounded by new buildings starting next year.',
        pronunciation: 'eg-zak-tuh-MAHN. ay ruh-GARD lar-TEEKL kewl-TEWR: lah PLAHSS suh-RAH ahn-too-RAY duh noo-VOH bah-tee-MAHN day lahn proh-SHAN',
      },
      {
        speaker: 'Mina',
        french: 'Pourquoi « entourée DE » et pas « entourée PAR » ? J’ai toujours du mal avec ça.',
        english: 'Why «entourée DE» and not «entourée PAR»? I always struggle with that one.',
        pronunciation: 'poor-KWAH ahn-too-RAY DUH ay pah ahn-too-RAY par? zhay too-ZHOOR dew MAHL ah-VEK sah',
      },
      {
        speaker: 'Paul',
        french: 'C’est la différence entre une action et un état. PAR pour l’agent qui agit ; DE pour les états et les émotions : entouré de, accompagné de, connu de, aimé de.',
        english: 'It’s the difference between an action and a state. PAR for the agent doing the action; DE for states and emotions: surrounded by, accompanied by, known by, loved by.',
        pronunciation: 'say lah dee-fay-RAHNSS ahn-TRUH ewn ak-SYOHN ay ahn ay-TAH. PAR poor lah-ZHAHN kee ah-ZHEE; DUH poor lay zay-TAH ay lay zay-moh-SYOHN',
      },
      {
        speaker: 'Mina',
        french: 'Ah, donc « la loi a été votée PAR les députés » mais « la victime était entourée DE médecins ».',
        english: 'Ah, so «the law was passed BY the deputies» but «the victim was surrounded BY doctors».',
        pronunciation: 'AH, dohnk lah LWAH ah ay-TAY voh-TAY par lay day-pew-TAY may lah veek-TEEM ay-TAY ahn-too-RAY duh may-DSAN',
      },
      {
        speaker: 'Paul',
        french: 'Voilà. Et attention : tous les verbes ne peuvent pas être passifs. Partir, arriver, aller — pas de COD, donc impossible.',
        english: 'Exactly. And careful: not all verbs can be passive. Partir, arriver, aller — no direct object, so impossible.',
        pronunciation: 'vwah-LAH. ay ah-tahn-SYOHN: too lay vairb nuh puhv pah etr pah-SEEF. par-TEER, ah-ree-VAY, ah-LAY — pah duh say-oh-DAY, dohnk an-poh-SEEBL',
      },
      {
        speaker: 'Mina',
        french: 'Donc « il est arrivé hier » est un passé composé, pas un passif. Le test, c’est : on peut répondre à « quoi ? » après le verbe ?',
        english: 'So «il est arrivé hier» is passé composé, not passive. The test is: can you answer «what?» after the verb?',
        pronunciation: 'dohnk eel ay tah-ree-VAY yair ay ahn pah-SAY kohn-poh-ZAY, pah ahn pah-SEEF. luh TEST, say: ohn puh ray-pohndr ah KWAH ah-PRAY luh vairb',
      },
      {
        speaker: 'Paul',
        french: 'Si oui, le verbe peut être passif. Sinon, non. « Il est arrivé QUOI ? » — ça ne marche pas. Donc pas de passif possible.',
        english: 'If yes, the verb can be passive. If no, it can’t. «He arrived WHAT?» — doesn’t work. So no passive possible.',
        pronunciation: 'see WEE, luh vairb puh etr pah-SEEF. see-NOHN, NOHN. eel ay tah-ree-VAY KWAH — sah nuh marsh PAH',
      },
      {
        speaker: 'Mina',
        french: 'OK, je comprends mieux. Bon, allez, on commande le deuxième café — et cette fois, par moi !',
        english: 'OK, I understand better now. Right, let’s order the second coffee — and this time, by me!',
        pronunciation: 'oh-KAY, zhuh kohn-PRAHN MYUH. bohn, ah-LAY, ohn koh-MAHND luh duh-zyem kah-FAY — ay set FWAH, par MWAH',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Formation: être (in any tense) + past participle, with agreement',
      explanation:
        'The passive voice is formed by ÊTRE (conjugated in whatever tense you need) + past participle. The past participle ALWAYS agrees with the subject in gender and number, regardless of the auxiliary tense. Only TRANSITIVE verbs (verbs that take a direct object) can be made passive — intransitive verbs like partir, arriver, aller, venir, mourir cannot. The test: can you ask «quoi?» or «qui?» after the verb in the active? If yes, it can be passive.',
      examples: [
        'Présent passif: La loi est votée.',
        'Passé composé passif: La loi a été votée.',
        'Imparfait passif: La loi était votée chaque année.',
        'Futur passif: La loi sera votée demain.',
        'Conditionnel passif: La loi serait votée si on s’accordait.',
      ],
      tip:
        'Tense lives entirely in ÊTRE. The past participle never changes tense — only ÊTRE does. Conjugate être in the tense you need, then attach the past participle and agree it with the subject.',
    },
    {
      title: 'Active → passive — and when not to bother',
      explanation:
        'To convert active to passive: (1) the direct object becomes the subject; (2) the active verb becomes «être + past participle» in the SAME tense; (3) the original subject becomes «par + agent» (or sometimes «de» — see next grammar point). The passive is RARE in spoken French — for events without a named agent, French much prefers «on + active». «On a volé mon sac» sounds natural; «mon sac a été volé» sounds like a police report. Use the passive when you want to highlight the patient or when the agent is genuinely unimportant.',
      examples: [
        'Active: Les députés ont voté la loi. → Passive: La loi a été votée par les députés.',
        'Active: La SNCF a confié le chantier à un cabinet suisse. → Passive: Le chantier a été confié à un cabinet suisse par la SNCF.',
        'Spoken French preference: «On a annoncé la décision hier soir» rather than «La décision a été annoncée hier soir.»',
        'Passive better for written news: «Le nouveau directeur a été élu hier.»',
        'When agent unknown: «Mon sac a été volé» works in a written declaration, but «on a volé mon sac» is what you’d say to a friend.',
      ],
      tip:
        'In speech, if you don’t want to name the subject, use «on + active». In writing, especially journalistic or administrative, the passive is the default. Match the register.',
    },
    {
      title: '«Par» vs «de»: action vs state/emotion',
      explanation:
        'After a passive past participle, the agent or context is introduced by PAR or DE. PAR is the default for ACTIONS — the person or thing actively doing the verb. DE is required for STATES, EMOTIONS, and a small set of «surroundings» verbs: accompagné DE, entouré DE, suivi DE, précédé DE, couvert DE, rempli DE; aimé DE, admiré DE, connu DE, respecté DE, détesté DE. Some verbs allow both: «accompagné de» (typical state) vs «accompagné par» (action of accompanying).',
      examples: [
        'PAR (action): La loi a été votée PAR les députés.',
        'PAR (action): Le projet a été choisi PAR la mairie.',
        'DE (state): La place est entourée DE bâtiments anciens.',
        'DE (state): Le directeur est respecté DE tous ses employés.',
        'DE (emotion): Elle est aimée DE tout le quartier.',
      ],
      tip:
        'If the relationship is «who is performing this action right now», use par. If it is «what surrounds, accompanies, or describes a state of feeling», use de. When in doubt, par is safer — but reading practice teaches the DE patterns quickly.',
    },
  ],
  vocabulary: [
    { french: 'être + participe passé', english: 'to be + past participle (passive)', category: 'Passive structure' },
    { french: 'par + agent', english: 'by (action agent)', category: 'Passive marker' },
    { french: 'de + état/émotion', english: 'by (state / surroundings / emotion)', category: 'Passive marker' },
    { french: 'on + actif', english: 'one / people / we + active', category: 'Spoken alternative', note: 'Preferred in conversation' },
    { french: 'être construit(e)', english: 'to be built', category: 'Passive verb' },
    { french: 'être rénové(e)', english: 'to be renovated', category: 'Passive verb' },
    { french: 'être inauguré(e)', english: 'to be inaugurated', category: 'Passive verb' },
    { french: 'être élu(e)', english: 'to be elected', category: 'Passive verb' },
    { french: 'être nommé(e)', english: 'to be appointed', category: 'Passive verb' },
    { french: 'être choisi(e)', english: 'to be chosen', category: 'Passive verb' },
    { french: 'être arrêté(e)', english: 'to be arrested', category: 'Passive verb' },
    { french: 'être condamné(e)', english: 'to be sentenced', category: 'Passive verb' },
    { french: 'être libéré(e)', english: 'to be released', category: 'Passive verb' },
    { french: 'être blessé(e)', english: 'to be wounded', category: 'Passive verb' },
    { french: 'être soigné(e)', english: 'to be treated (medically)', category: 'Passive verb' },
    { french: 'être opéré(e)', english: 'to be operated on', category: 'Passive verb' },
    { french: 'être publié(e)', english: 'to be published', category: 'Passive verb' },
    { french: 'être écrit(e)', english: 'to be written', category: 'Passive verb' },
    { french: 'être traduit(e)', english: 'to be translated', category: 'Passive verb' },
    { french: 'accompagné(e) de', english: 'accompanied by', category: 'De trigger' },
    { french: 'entouré(e) de', english: 'surrounded by', category: 'De trigger' },
    { french: 'suivi(e) de', english: 'followed by', category: 'De trigger' },
    { french: 'couvert(e) de', english: 'covered with', category: 'De trigger' },
    { french: 'connu(e) de', english: 'known by', category: 'De trigger' },
    { french: 'aimé(e) de', english: 'loved by', category: 'De trigger' },
    { french: 'respecté(e) de', english: 'respected by', category: 'De trigger' },
    { french: 'une loi', english: 'a law', category: 'Civic vocab' },
    { french: 'un décret', english: 'a decree', category: 'Civic vocab' },
    { french: 'un communiqué', english: 'a press release', category: 'Civic vocab' },
    { french: 'une réforme', english: 'a reform', category: 'Civic vocab' },
  ],
  culturalNotes: [
    {
      title: 'Le style administratif français',
      content:
        'French administrative writing — décrets, arrêtés, comptes-rendus, notes de service — is saturated with passive and impersonal constructions. «Il a été décidé que…», «il convient de…», «il est rappelé que…». This bureaucratic register is sometimes mocked as «le passif administratif» because it strategically removes the responsible actor. Recognising it is essential for reading any French official document.',
    },
    {
      title: 'Les grands projets présidentiels',
      content:
        'Each French president since De Gaulle has left a major architectural «grand projet»: Pompidou (Centre Pompidou, 1977), Giscard (Musée d’Orsay, 1986), Mitterrand (Grande Arche de la Défense, Pyramide du Louvre, Opéra Bastille), Chirac (Musée du Quai Branly), Macron (renovation of Notre-Dame after 2019). Media coverage of these projects is structurally passive — «a été inauguré», «sera rénové» — because the actor is too distributed to name.',
    },
    {
      title: 'Le passif vs «on» en français parlé',
      content:
        'A defining feature of spoken French is the systematic preference for «on + active» over the passive. While English speakers say «my wallet was stolen», a French speaker overwhelmingly says «on m’a volé mon portefeuille». The passive sounds formal, distant, journalistic. «On» fills the void of the unknown agent in a way the passive cannot.',
    },
  ],
  exercises: [
    {
      id: 'l37-e1',
      type: 'rewrite',
      question: 'Transform each active sentence into the passive voice, keeping the same tense.',
      instruction_type: 'passive',
      items: [
        {
          original: 'Les députés votent la loi.',
          expected: 'La loi est votée par les députés.',
          hint: 'présent → être au présent + participe passé + par',
          explanation: 'Active présent → passive présent: être (est) + participe passé (votée, fem. sg. agreement).',
        },
        {
          original: 'La mairie a choisi le projet.',
          expected: 'Le projet a été choisi par la mairie.',
          hint: 'passé composé → a été + participe passé',
          explanation: 'PC actif → PC passif: a été + choisi (masc. sg.).',
        },
        {
          original: 'Le gouvernement annoncera la réforme demain.',
          expected: 'La réforme sera annoncée demain par le gouvernement.',
          hint: 'futur simple → sera + participe passé',
          explanation: 'Futur actif → futur passif: sera + annoncée (fem. sg.).',
        },
        {
          original: 'Les artisans construisaient ce pont chaque été.',
          expected: 'Ce pont était construit chaque été par les artisans.',
          hint: 'imparfait → était + participe passé',
          explanation: 'Imparfait actif → imparfait passif: était + construit (masc. sg.).',
        },
        {
          original: 'Un cabinet suisse rénoverait la gare.',
          expected: 'La gare serait rénovée par un cabinet suisse.',
          hint: 'conditionnel → serait + participe passé',
          explanation: 'Conditionnel actif → conditionnel passif: serait + rénovée (fem. sg.).',
        },
        {
          original: 'On a publié son premier roman en 2018.',
          expected: 'Son premier roman a été publié en 2018.',
          hint: 'on + actif → passif sans agent',
          explanation:
            'When the active subject is «on» (unknown agent), the passive drops it entirely — no «par on» in French.',
        },
      ],
    },
    {
      id: 'l37-e2',
      type: 'rewrite',
      question: 'Transform each passive sentence into an active sentence with «on».',
      instruction_type: 'passive',
      items: [
        {
          original: 'La décision a été annoncée hier soir.',
          expected: 'On a annoncé la décision hier soir.',
          hint: 'unknown agent → on + active',
          explanation: 'Without a named agent, French speech overwhelmingly prefers «on + active».',
        },
        {
          original: 'Mon vélo a été volé devant la gare.',
          expected: 'On a volé mon vélo devant la gare.',
          hint: 'no agent → on + active',
          explanation: 'Theft reports in conversation almost always use «on», not the passive.',
        },
        {
          original: 'Une grande exposition sera inaugurée la semaine prochaine.',
          expected: 'On inaugurera une grande exposition la semaine prochaine.',
          hint: 'futur passif → on + futur actif',
          explanation:
            'Even with «on», this still sounds slightly formal. In casual speech, you might say «ils vont inaugurer une grande expo».',
        },
        {
          original: 'Le contrat a été signé ce matin.',
          expected: 'On a signé le contrat ce matin.',
          hint: 'PC passif → on + PC actif',
          explanation: 'Direct, common spoken variant.',
        },
      ],
    },
    {
      id: 'l37-e3',
      type: 'fill_blank',
      question:
        'Choose «par» or «de». «La place est entourée ___ vieux platanes.»',
      correct_answer: 'de',
      explanation: '«Entouré» is a state/surroundings verb → de, not par.',
      hints: ['État → de. Action en cours → par.'],
    },
    {
      id: 'l37-e4',
      type: 'mood_choice',
      question:
        'For each sentence, choose «par» («indicative» here) or «de» («subjunctive» here).',
      items: [
        {
          sentence: 'La loi a été votée [BLANK] les députés.',
          verb: 'voter',
          indicative_form: 'par',
          subjunctive_form: 'de',
          correct_answer: 'indicative',
          trigger: 'action agent',
          explanation: 'Active action → par.',
        },
        {
          sentence: 'La victime était entourée [BLANK] médecins.',
          verb: 'entourer',
          indicative_form: 'par',
          subjunctive_form: 'de',
          correct_answer: 'subjunctive',
          trigger: 'state/surroundings (entouré)',
          explanation: '«Entouré de» = state verb → de.',
        },
        {
          sentence: 'Ce roman a été traduit [BLANK] cinq langues.',
          verb: 'traduire',
          indicative_form: 'par',
          subjunctive_form: 'de',
          correct_answer: 'subjunctive',
          trigger: 'state-like result',
          explanation:
            '«Traduit en» is the most common pattern, but «traduit de» appears when describing source language («traduit du japonais»). Here we treat the «en cinq langues» version as the state-like result.',
        },
        {
          sentence: 'Le directeur est respecté [BLANK] tous ses employés.',
          verb: 'respecter',
          indicative_form: 'par',
          subjunctive_form: 'de',
          correct_answer: 'subjunctive',
          trigger: 'emotion / regard',
          explanation: '«Respecté de» = emotion/regard → de.',
        },
        {
          sentence: 'Le projet a été choisi [BLANK] le jury à l’unanimité.',
          verb: 'choisir',
          indicative_form: 'par',
          subjunctive_form: 'de',
          correct_answer: 'indicative',
          trigger: 'action agent',
          explanation: 'Action of choosing → par.',
        },
      ],
    },
    {
      id: 'l37-e5',
      type: 'multiple_choice',
      question: 'Which sentence is NOT possible in the passive voice?',
      options: [
        'La loi a été votée hier.',
        'Mon sac a été volé.',
        'Il est arrivé hier soir.',
        'Le contrat sera signé demain.',
      ],
      correct_answer: 'Il est arrivé hier soir.',
      explanation:
        '«Arriver» is intransitive — it takes no direct object — so it cannot be made passive. «Il est arrivé» is passé composé (intransitive être-verb), NOT passive. The clue: ask «arrivé QUOI?» — there is no answer.',
    },
    {
      id: 'l37-e6',
      type: 'error_correction',
      question: 'Each sentence misuses the passive or confuses it with passé composé. Rewrite it correctly.',
      items: [
        {
          incorrect: 'La loi a été votée par hier.',
          correct: 'La loi a été votée hier.',
          explanation: '«Par hier» is meaningless. «Par» introduces an agent (a person/thing performing an action), not a time.',
        },
        {
          incorrect: 'La place est entourée par des arbres.',
          correct: 'La place est entourée d’arbres.',
          explanation: '«Entouré» is a state verb → de, not par.',
        },
        {
          incorrect: 'Il a été arrivé tard hier soir.',
          correct: 'Il est arrivé tard hier soir.',
          explanation:
            '«Arriver» is intransitive être-verb. The passé composé is «il EST arrivé» — there is no «il a été arrivé» because there is no passive of arriver.',
        },
        {
          incorrect: 'Le projet a été choisi par on.',
          correct: 'On a choisi le projet.',
          explanation:
            'There is no «par on» in French. When the agent is «on», switch to active.',
        },
      ],
    },
    {
      id: 'l37-e7',
      type: 'translation',
      question: 'Translate, paying attention to par/de and to whether spoken French would prefer «on + active».',
      direction: 'en_to_fr',
      correct_answer: [
        'La loi a été votée à l’unanimité par les députés.',
        'Le bâtiment sera entièrement rénové d’ici 2028.',
        'Mon sac a été volé dans le métro. (formal) / On m’a volé mon sac dans le métro. (spoken)',
        'L’écrivaine est connue de tout le quartier.',
        'Le contrat a été signé ce matin par les deux parties.',
      ],
      explanation:
        'Par for action agents; de for state/regard. The third sentence gives both options — the spoken «on» version would be more natural in conversation.',
    },
    {
      id: 'l37-e8',
      type: 'register_sort',
      question:
        'Sort each sentence by register: PASSIF (formal/written) or ACTIF (spoken/informal).',
      categories: ['passif (formal/written)', 'actif (spoken/informal)'],
      items: [
        { expression: 'La décision a été annoncée hier soir.', correct_category: 'passif (formal/written)', explanation: 'Journalistic register.' },
        { expression: 'On a annoncé la décision hier soir.', correct_category: 'actif (spoken/informal)', explanation: 'Conversational equivalent.' },
        { expression: 'Le nouveau pont sera inauguré en juin.', correct_category: 'passif (formal/written)', explanation: 'Public announcement style.' },
        { expression: 'Ils vont inaugurer le nouveau pont en juin.', correct_category: 'actif (spoken/informal)', explanation: 'Spoken equivalent.' },
        { expression: 'Mon sac a été volé.', correct_category: 'passif (formal/written)', explanation: 'Sounds like a police report.' },
        { expression: 'On m’a volé mon sac.', correct_category: 'actif (spoken/informal)', explanation: 'Default spoken phrasing.' },
        { expression: 'Il a été décidé que la réunion serait reportée.', correct_category: 'passif (formal/written)', explanation: 'Pure bureaucratic register.' },
        { expression: 'On a décidé de reporter la réunion.', correct_category: 'actif (spoken/informal)', explanation: 'Same meaning, conversational.' },
      ],
    },
    {
      id: 'l37-e9',
      type: 'fill_blank',
      question:
        'Conjugate être in the correct tense to complete the passive. «Hier soir, le contrat ___ signé par les deux parties.»',
      correct_answer: 'a été',
      explanation:
        'The time marker «hier soir» calls for passé composé. PC of être = «a été». «Signé» agrees with masc. sg. «contrat».',
      hints: ['Time marker «hier» → passé composé → «a été».'],
    },
    {
      id: 'l37-e10',
      type: 'speaking_prompt',
      question:
        'Describe how something well-known was made, built, or discovered. In 4–5 sentences, use the passive at least three times (varying tenses) and «par» AND «de» at least once each.',
      model_answer:
        'La Tour Eiffel a été construite entre 1887 et 1889 par Gustave Eiffel et son équipe d’ingénieurs. Elle devait être démontée après l’Exposition universelle, mais elle a été conservée grâce à son utilité pour la radio. Aujourd’hui, elle est visitée par environ sept millions de touristes par an et reste entourée d’admirateurs à toute heure. Elle est aussi connue de tous les enfants français comme un symbole national.',
      translation:
        'The Eiffel Tower was built between 1887 and 1889 by Gustave Eiffel and his team of engineers. It was supposed to be dismantled after the World Fair, but it was kept because of its usefulness for radio. Today, it is visited by around seven million tourists per year and remains surrounded by admirers at all hours. It is also known to all French children as a national symbol.',
      tip: '«par» for the engineer (action agent), «de» for «entourée d’admirateurs» and «connue de tous». Varying tenses (PC passif, imparfait passif, présent passif) demonstrates real B1 control.',
    },
  ],
}

const lesson38: IntermediateLessonData = {
  id: 38,
  title: 'The Gerund',
  title_fr: 'Le Gérondif',
  level: 'B1',
  description:
    'Form and use the gerund (en + present participle) to express simultaneous action, manner, condition, and contrast — and distinguish it clearly from the adjectival present participle.',
  dialogue: {
    title: 'Séance avec la coach',
    context:
      'Lina, a 33-year-old project manager feeling burnt out, has booked a session with Olivier, a wellness coach in central Paris. They discuss her daily habits and look for changes she could make. The gérondif appears naturally in every other line — this is its native habitat in French.',
    exchanges: [
      {
        speaker: 'Olivier',
        french: 'Bonjour Lina. Racontez-moi votre journée type, ce que vous faites en arrivant le matin.',
        english: 'Hello Lina. Tell me about your typical day — what you do when you arrive in the morning.',
        pronunciation: 'bohn-ZHOOR LEE-nah. rah-kohn-TAY mwah votr zhoor-NAY teep, suh kuh voo FET ahn nah-ree-VAHN luh mah-TAHN',
      },
      {
        speaker: 'Lina',
        french: 'Je commence en consultant mes mails dans le métro, et je continue en répondant pendant le café.',
        english: 'I start by checking my emails on the metro, and I continue by replying during my coffee.',
        pronunciation: 'zhuh koh-MAHNSS ahn kohn-sewl-TAHN may MEL dahn luh may-TROH, ay zhuh kohn-tee-NEW ahn ray-pohn-DAHN pahn-DAHN luh kah-FAY',
      },
      {
        speaker: 'Olivier',
        french: 'D’accord. Et vous mangez en travaillant à midi ?',
        english: 'OK. And do you eat while working at lunch?',
        pronunciation: 'dah-KOR. ay voo mahn-ZHAY ahn trah-vah-YAHN ah mee-DEE',
      },
      {
        speaker: 'Lina',
        french: 'Souvent, oui. Je réponds aux clients en mangeant un sandwich devant l’écran.',
        english: 'Often, yes. I reply to clients while eating a sandwich in front of the screen.',
        pronunciation: 'soo-VAHN, wee. zhuh ray-POHN oh klee-AHN ahn mahn-ZHAHN ahn sahnd-WEECH duh-VAHN lay-KRAHN',
      },
      {
        speaker: 'Olivier',
        french: 'On va commencer par un changement simple : en gardant trente minutes sans écran à midi, vous récupérerez beaucoup d’énergie.',
        english: 'We’ll start with one simple change: by keeping thirty minutes screen-free at lunch, you’ll recover a lot of energy.',
        pronunciation: 'ohn vah koh-mahn-SAY par ahn shahn-zhuh-MAHN SAHMPL: ahn gar-DAHN trahnt mee-NEWT sahn zay-KRAHN ah mee-DEE, voo ray-kew-pay-uh-RAY boh-KOO day-nair-ZHEE',
      },
      {
        speaker: 'Lina',
        french: 'Tout en comprenant la logique, j’avoue que ça va être difficile. Mes collègues me sollicitent en permanence.',
        english: 'Even understanding the logic, I admit it’ll be tough. My colleagues message me constantly.',
        pronunciation: 'too tahn kohn-pruh-NAHN lah loh-ZHEEK, zhah-VOO kuh sah vah etr dee-fee-SEEL. may koh-LEG muh soh-lee-SEET ahn pair-mah-NAHNSS',
      },
      {
        speaker: 'Olivier',
        french: 'En coupant les notifications, vous reprenez le contrôle. Beaucoup de mes clients réussissent en commençant par un seul jour par semaine.',
        english: 'By turning off notifications, you take back control. Many of my clients succeed by starting with just one day a week.',
        pronunciation: 'ahn koo-PAHN lay noh-tee-fee-kah-SYOHN, voo ruh-pruh-NAY luh kohn-TROHL. boh-KOO duh may klee-AHN ray-ew-SEES ahn koh-mahn-SAHN par ahn suhl ZHOOR par suh-MEN',
      },
      {
        speaker: 'Lina',
        french: 'Et le soir, je culpabilise en regardant mes mails au lit. Je sais que c’est mauvais.',
        english: 'And in the evening, I feel guilty checking my emails in bed. I know it’s bad.',
        pronunciation: 'ay luh SWAHR, zhuh kewl-pah-bee-LEEZ ahn ruh-gar-DAHN may MEL oh LEE. zhuh say kuh say moh-VAY',
      },
      {
        speaker: 'Olivier',
        french: 'Une règle simple : en éteignant votre téléphone une heure avant de dormir, vous dormirez mieux. Sachez que la lumière bleue retarde le sommeil.',
        english: 'One simple rule: by turning off your phone an hour before sleeping, you’ll sleep better. Just know that blue light delays sleep.',
        pronunciation: 'ewn REGL SAHMPL: ahn ay-ten-YAHN votr tay-lay-FOHN ewn URR ah-VAHN duh dor-MEER, voo dor-mee-RAY MYUH. sah-SHAY kuh lah lew-MYAIR BLUH ruh-TARD luh soh-MAY',
      },
      {
        speaker: 'Lina',
        french: 'OK. Et en ayant un meilleur sommeil, je serai sans doute moins irritable la journée.',
        english: 'OK. And by having better sleep, I’ll probably be less irritable during the day.',
        pronunciation: 'oh-KAY. ay ahn ay-AHN ahn meh-YURR soh-MAY, zhuh suh-RAY sahn DOOT mwan zee-ree-TAHBL lah zhoor-NAY',
      },
      {
        speaker: 'Olivier',
        french: 'Voilà. On progresse en avançant pas à pas, jamais en voulant tout changer d’un coup.',
        english: 'There you go. We progress by moving step by step, never by wanting to change everything at once.',
        pronunciation: 'vwah-LAH. ohn proh-GRESS ahn ah-vahn-SAHN PAH ah PAH, zhah-MAY ahn voo-LAHN too shahn-ZHAY dahn KOO',
      },
      {
        speaker: 'Lina',
        french: 'Je vais essayer. Et en revenant la semaine prochaine, je vous dirai où j’en suis.',
        english: 'I’ll try. And by coming back next week, I’ll tell you where I am.',
        pronunciation: 'zhuh vay ay-say-AY. ay ahn ruh-vuh-NAHN lah suh-MEN proh-SHEN, zhuh voo dee-RAY oo zhahn SWEE',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Formation: en + (nous-form minus -ons) + -ant',
      explanation:
        'To form the gerund: take the nous-form of the present tense, remove «-ons», add «-ant», and put «en» in front. The result is the gérondif and the present participle share the «-ant» form — the difference is the obligatory «en» for the gerund. Three exceptions: être → étant, avoir → ayant, savoir → sachant. The subject of the gerund is ALWAYS the same as the subject of the main verb.',
      examples: [
        'parler → nous parlons → parlant → EN parlant',
        'finir → nous finissons → finissant → EN finissant',
        'prendre → nous prenons → prenant → EN prenant',
        'faire → nous faisons → faisant → EN faisant',
        'EXCEPTIONS: être → étant, avoir → ayant, savoir → sachant. (Use «en étant», «en ayant», «en sachant».)',
      ],
      tip:
        'The «en» is non-negotiable. Without «en», «parlant» is a present participle (adjective or reduced relative clause); with «en», it is a gerund. Same word, different grammatical job.',
    },
    {
      title: 'Four uses: simultaneous, manner, condition, contrast',
      explanation:
        'The gerund expresses one of four relationships to the main verb, all with the SAME subject. (1) SIMULTANEOUS: two actions at the same time. (2) MANNER/MEANS: how something is done. (3) CONDITION: if you do X, then Y happens. (4) CONTRAST: «tout en + gérondif» = while still / even though doing X. Context determines which use is intended.',
      examples: [
        'Simultaneous: Elle chante en cuisinant. (She sings while cooking.)',
        'Manner/means: Il a réussi en travaillant dur. (He succeeded by working hard.)',
        'Condition: En partant maintenant, tu arriveras à temps. (If you leave now, you’ll arrive on time.)',
        'Contrast (tout en): Tout en comprenant ta position, je ne suis pas d’accord. (Even though I understand your position, I don’t agree.)',
        'Same subject only: Elle chante en cuisinant (she does both). NOT: «Elle chante en cuisinant son mari» (her husband cooking — wrong, would need a different structure).',
      ],
      tip:
        'Same subject is the rule that breaks if you’re not careful. If the two actions have DIFFERENT subjects, you cannot use the gerund — use «pendant que», «alors que», or a relative clause instead.',
    },
    {
      title: 'Gerund vs adjectival present participle: «en» makes the difference',
      explanation:
        'The «-ant» form of a verb has TWO grammatical jobs. With «en» in front, it is the GERUND (an adverb describing the main verb’s action). Without «en», it is the PRESENT PARTICIPLE — either an adjective (in which case it agrees: «une histoire fascinante») or part of a reduced relative clause («les enfants jouant dans le parc» = «les enfants qui jouent dans le parc»). The gérondif never agrees in gender or number.',
      examples: [
        'GÉRONDIF (with en): Il marche EN chantant. (He walks while singing — describes how he walks.)',
        'PARTICIPE PRÉSENT (no en, reduced relative): Les enfants jouant dans le parc sont nombreux. (= qui jouent.)',
        'ADJECTIF (no en, agrees): Une histoire fascinante. (fem. sg. agreement)',
        'ADJECTIF: Des films passionnants. (masc. pl. agreement)',
        'Wrong: «Une histoire en fascinant» — meaningless.',
      ],
      tip:
        'When you see «-ant», look immediately to the left. «En»? → gerund (no agreement, describes main verb). No «en»? → participle (may agree if adjective, or reduce a relative clause). The presence of «en» is the entire distinction.',
    },
  ],
  vocabulary: [
    { french: 'en + nous-stem + -ant', english: 'gerund formation', category: 'Structure', example: 'parler → nous parlons → en parlant.' },
    { french: 'tout en + gérondif', english: 'while still / even though', category: 'Contrast', example: 'Tout en travaillant, il étudie.' },
    { french: 'en faisant', english: 'while doing / by doing', category: 'Common gerund' },
    { french: 'en allant', english: 'while going / on the way', category: 'Common gerund' },
    { french: 'en disant', english: 'while saying / by saying', category: 'Common gerund' },
    { french: 'en prenant', english: 'while taking', category: 'Common gerund' },
    { french: 'en lisant', english: 'while reading', category: 'Common gerund' },
    { french: 'en écrivant', english: 'while writing', category: 'Common gerund' },
    { french: 'en voyant', english: 'while seeing / upon seeing', category: 'Common gerund' },
    { french: 'en partant', english: 'when leaving / if you leave', category: 'Common gerund' },
    { french: 'en arrivant', english: 'when arriving / upon arrival', category: 'Common gerund' },
    { french: 'en étant', english: 'being (irregular)', category: 'Irregular gerund (être)' },
    { french: 'en ayant', english: 'having (irregular)', category: 'Irregular gerund (avoir)' },
    { french: 'en sachant', english: 'knowing (irregular)', category: 'Irregular gerund (savoir)' },
    { french: 'le bien-être', english: 'wellness / well-being', category: 'Wellness', example: 'Le bien-être au travail est devenu un enjeu majeur.' },
    { french: 'l’équilibre vie pro / vie perso', english: 'work-life balance', category: 'Wellness' },
    { french: 'la sophrologie', english: 'sophrology (relaxation method)', category: 'Wellness' },
    { french: 'la méditation', english: 'meditation', category: 'Wellness' },
    { french: 'le ressourcement', english: 'recharging / re-centring', category: 'Wellness' },
    { french: 'l’épanouissement', english: 'personal blossoming / fulfilment', category: 'Wellness' },
    { french: 'la bienveillance', english: 'kindness / benevolence', category: 'Wellness' },
    { french: 'la pleine conscience', english: 'mindfulness', category: 'Wellness' },
    { french: 'culpabiliser', english: 'to feel guilty', category: 'Wellness verb' },
    { french: 'récupérer', english: 'to recover / get back', category: 'Wellness verb' },
    { french: 'progresser pas à pas', english: 'to progress step by step', category: 'Wellness expression' },
    { french: 'couper les notifications', english: 'to turn off notifications', category: 'Wellness expression' },
    { french: 'la lumière bleue', english: 'blue light', category: 'Wellness vocab' },
    { french: 'le sommeil', english: 'sleep', category: 'Wellness vocab' },
  ],
  culturalNotes: [
    {
      title: 'Le bien-être en France',
      content:
        'The French «bien-être» market — sophrologie, méditation, coaching, yoga — has grown to over €3 billion annually. Companies of all sizes now offer in-house wellness sessions, and corporate French has absorbed vocabulary like «épanouissement», «ressourcement», «bienveillance» — once reserved for psychological or spiritual discourse — into HR documents and management speak.',
    },
    {
      title: 'L’équilibre, héritage des 35 heures',
      content:
        'France’s 35-hour working week (loi Aubry, 2000) cemented «équilibre entre vie professionnelle et vie personnelle» as a cultural value, not just a labour-law concept. The right to disconnect («droit à la déconnexion») was legally established in 2017, requiring companies above 50 employees to negotiate how email and messaging outside working hours are handled.',
    },
    {
      title: 'La sophrologie',
      content:
        'Sophrologie — a relaxation method blending breathing, visualisation, and gentle movement — was developed by neuropsychiatrist Alfonso Caycedo in the 1960s and has become a defining French wellness practice. Often reimbursed by company mutuelles or used in maternity preparation, sophrologie has no direct English equivalent and is genuinely cultural French.',
    },
  ],
  exercises: [
    {
      id: 'l38-e1',
      type: 'fill_blank',
      question:
        'Form the gerund. «J’apprends ___ (lire) des livres en français.»',
      correct_answer: 'en lisant',
      explanation: 'lire → nous lisons → drop -ons → lis- + -ant → en lisant.',
      hints: ['nous lisons → lisant. Add en.'],
    },
    {
      id: 'l38-e2',
      type: 'matching',
      question: 'Match each verb to its gerund form.',
      pairs: [
        { french: 'faire', english: 'en faisant' },
        { french: 'aller', english: 'en allant' },
        { french: 'prendre', english: 'en prenant' },
        { french: 'écrire', english: 'en écrivant' },
        { french: 'voir', english: 'en voyant' },
        { french: 'être', english: 'en étant (irregular)' },
        { french: 'avoir', english: 'en ayant (irregular)' },
        { french: 'savoir', english: 'en sachant (irregular)' },
      ],
      explanation:
        'For regular and most irregular verbs, the formula is «en + nous-stem + -ant». The three true exceptions are être, avoir, and savoir — memorise them.',
    },
    {
      id: 'l38-e3',
      type: 'register_sort',
      question:
        'Identify the USE of the gerund in each sentence: SIMULTANEOUS, MANNER (means), CONDITION, or CONTRAST (tout en).',
      categories: ['SIMULTANEOUS', 'MANNER', 'CONDITION', 'CONTRAST'],
      items: [
        { expression: 'Elle chante en cuisinant.', correct_category: 'SIMULTANEOUS', explanation: 'Two actions at the same time.' },
        { expression: 'Il a réussi en travaillant dur.', correct_category: 'MANNER', explanation: 'How he succeeded.' },
        { expression: 'En partant maintenant, tu arriveras à temps.', correct_category: 'CONDITION', explanation: 'If you leave now…' },
        { expression: 'Tout en comprenant ta position, je ne suis pas d’accord.', correct_category: 'CONTRAST', explanation: '«Tout en» = while still / even though.' },
        { expression: 'On a parlé en marchant dans le parc.', correct_category: 'SIMULTANEOUS', explanation: 'Two actions at the same time.' },
        { expression: 'Vous progresserez en pratiquant tous les jours.', correct_category: 'MANNER', explanation: 'How you’ll progress.' },
        { expression: 'En coupant les notifications, vous reprenez le contrôle.', correct_category: 'CONDITION', explanation: 'If you turn off notifications…' },
        { expression: 'Tout en étant fatiguée, elle a fini le rapport.', correct_category: 'CONTRAST', explanation: 'Even though tired.' },
      ],
    },
    {
      id: 'l38-e4',
      type: 'transformation',
      question:
        'Combine each pair of sentences using «en + gerund». Same subject only.',
      instruction: 'affirmative_to_negative',
      items: [
        {
          original: 'Il lit. Il mange.',
          transformed: 'Il lit en mangeant.',
          translation: 'He reads while eating.',
        },
        {
          original: 'Elle a appris l’espagnol. Elle a regardé des séries.',
          transformed: 'Elle a appris l’espagnol en regardant des séries.',
          translation: 'She learned Spanish by watching series.',
        },
        {
          original: 'Tu économiseras du temps. Tu prendras le métro.',
          transformed: 'Tu économiseras du temps en prenant le métro.',
          translation: 'You’ll save time by taking the metro.',
        },
        {
          original: 'Je vais à l’école. Je passe devant la boulangerie.',
          transformed: 'Je passe devant la boulangerie en allant à l’école.',
          translation: 'I pass by the bakery on my way to school.',
        },
      ],
      explanation:
        'The gerund collapses two actions of the same subject into a single tight clause. It is the heart of B1 connected speech.',
    },
    {
      id: 'l38-e5',
      type: 'error_correction',
      question:
        'Each sentence has either a formation error or a same-subject violation. Rewrite it correctly.',
      items: [
        {
          incorrect: 'Il chante en cuisinant son fils.',
          correct: 'Il chante pendant que son fils cuisine. (OR rephrase entirely.)',
          explanation:
            'Different subjects (he sings, his son cooks). The gerund requires the SAME subject. Use «pendant que» for different subjects.',
        },
        {
          incorrect: 'En étre fatiguée, elle a fini quand même.',
          correct: 'Tout en étant fatiguée, elle a fini quand même.',
          explanation:
            'The gerund of être is «étant», not «étre». And in this context (concession), «tout en» is the natural framing.',
        },
        {
          incorrect: 'Une histoire en fascinant.',
          correct: 'Une histoire fascinante.',
          explanation:
            '«Fascinant» here is an ADJECTIVE, not a gerund — no «en», and it agrees with «histoire» (fem. sg.) → fascinante.',
        },
        {
          incorrect: 'En savant que c’est dangereux, j’ai continué.',
          correct: 'En sachant que c’est dangereux, j’ai continué.',
          explanation:
            'savoir has an irregular gerund: «en sachant» (not «savant»).',
        },
      ],
    },
    {
      id: 'l38-e6',
      type: 'multiple_choice',
      question: 'Which sentence correctly uses the gerund?',
      options: [
        'Les enfants jouant dans le parc rentrent en chantant.',
        'Les enfants en jouant dans le parc rentrent chantant.',
        'En les enfants jouant dans le parc, ils chantent.',
        'Les enfants chantent dans le parc en jouants.',
      ],
      correct_answer: 'Les enfants jouant dans le parc rentrent en chantant.',
      explanation:
        'First half uses the PRESENT PARTICIPLE «jouant» (no «en», reduced relative = «qui jouent»). Second half uses the GERUND «en chantant» (with «en», describes how they return). Both are correct in their roles.',
    },
    {
      id: 'l38-e7',
      type: 'fill_blank',
      question:
        'Fill in the correct «tout en + gerund» form. «___ (comprendre) ton point de vue, je ne suis pas d’accord.»',
      correct_answer: 'Tout en comprenant',
      explanation:
        '«Tout en + gérondif» = concession. comprendre → nous comprenons → en comprenant. With «tout» = «tout en comprenant».',
      hints: ['nous comprenons → comprenant. Add «tout en» for concession.'],
    },
    {
      id: 'l38-e8',
      type: 'translation',
      question: 'Translate using the gerund (note any «tout en» for concession).',
      direction: 'en_to_fr',
      correct_answer: [
        'Elle chante en cuisinant.',
        'Il a réussi en travaillant dur.',
        'En partant maintenant, tu arriveras à temps.',
        'Tout en comprenant ta position, je ne suis pas d’accord.',
        'On apprend une langue en la pratiquant tous les jours.',
      ],
      explanation:
        'Simultaneous, manner, condition, contrast, manner — the four uses in five sentences.',
    },
    {
      id: 'l38-e9',
      type: 'mood_choice',
      question:
        'Choose between the gerund (with «en») and the adjectival present participle (no «en», agrees). «Indicative» here = gerund; «subjunctive» = participle/adjective.',
      items: [
        {
          sentence: 'Il marche [BLANK] (chanter).',
          verb: 'chanter',
          indicative_form: 'en chantant',
          subjunctive_form: 'chantant',
          correct_answer: 'indicative',
          trigger: 'gerund: describes the main verb',
          explanation:
            'Describes HOW he walks → gerund «en chantant».',
        },
        {
          sentence: 'Une histoire [BLANK] (passionner).',
          verb: 'passionner',
          indicative_form: 'en passionnant',
          subjunctive_form: 'passionnante',
          correct_answer: 'subjunctive',
          trigger: 'adjective: agrees with noun',
          explanation:
            'Describes the noun «histoire» → adjective «passionnante» (fem. sg. agreement).',
        },
        {
          sentence: 'Les enfants [BLANK] dans le parc sont nombreux.',
          verb: 'jouer',
          indicative_form: 'en jouant',
          subjunctive_form: 'jouant',
          correct_answer: 'subjunctive',
          trigger: 'present participle as reduced relative',
          explanation:
            '= «les enfants QUI JOUENT dans le parc». Reduced relative → present participle, no «en», no agreement on participle here.',
        },
        {
          sentence: 'Tu progresseras [BLANK] (pratiquer) tous les jours.',
          verb: 'pratiquer',
          indicative_form: 'en pratiquant',
          subjunctive_form: 'pratiquant',
          correct_answer: 'indicative',
          trigger: 'gerund: manner',
          explanation:
            'Describes HOW you progress → gerund «en pratiquant».',
        },
      ],
    },
    {
      id: 'l38-e10',
      type: 'speaking_prompt',
      question:
        'Describe one habit you’d like to change and how. In 4–5 sentences, use the gerund at least four times: one SIMULTANEOUS, one MANNER, one CONDITION, and one «tout en».',
      model_answer:
        'Je passe trop de temps sur mon téléphone en travaillant, et ça réduit ma concentration. J’ai déjà essayé de progresser en coupant les notifications le matin. En limitant les pauses-écran à trois fois par jour, je pourrais sans doute mieux dormir le soir. Tout en sachant que c’est difficile, je veux vraiment essayer ce mois-ci.',
      translation:
        'I spend too much time on my phone while working, and it reduces my concentration. I’ve already tried to improve by turning off notifications in the morning. By limiting screen breaks to three times a day, I could probably sleep better at night. Even though I know it’s difficult, I really want to try this month.',
      tip: 'Four gerunds in four sentences, each in a distinct use. This is gérondif at full B1 production speed.',
    },
  ],
}

const lesson39: IntermediateLessonData = {
  id: 39,
  title: 'Causative Faire',
  title_fr: 'Le Faire Causatif',
  level: 'B1',
  description:
    'Express «having something done by someone else» with faire causatif, the related «se faire + infinitif», and «laisser + infinitif».',
  dialogue: {
    title: 'Le chantier de l’appartement',
    context:
      'Sami has just bought a flat in the 11e arrondissement and is managing the renovations. He talks to his sister Léa about the artisans he’s engaged, the deliveries he has organised, and a few mistakes he wants to avoid. Causative faire, se faire, and laisser cluster across the entire conversation.',
    exchanges: [
      {
        speaker: 'Léa',
        french: 'Alors, où en est l’appartement ? Tu fais tout faire par des artisans ?',
        english: 'So how is the flat coming along? Are you having everything done by professionals?',
        pronunciation: 'ah-LOR, oo ahn ay lah-par-tuh-MAHN? tew fay too FAIR par day zar-tee-ZAHN',
      },
      {
        speaker: 'Sami',
        french: 'Oui, presque tout. Je fais refaire l’électricité par un électricien du quartier, et je fais installer une nouvelle cuisine la semaine prochaine.',
        english: 'Yes, almost everything. I’m having the electrics redone by a local electrician, and I’m having a new kitchen installed next week.',
        pronunciation: 'wee, presk TOO. zhuh fay ruh-FAIR lay-lek-tree-see-TAY par ahn ay-lek-tree-SYAN dew kar-TYAY, ay zhuh fay an-stah-LAY ewn noo-VEL kwee-ZEEN lah suh-MEN proh-SHEN',
      },
      {
        speaker: 'Léa',
        french: 'Tu les as fait venir comment, tes artisans ?',
        english: 'How did you find them, your tradespeople?',
        pronunciation: 'tew lay zah fay vuh-NEER koh-MAHN, tay zar-tee-ZAHN',
      },
      {
        speaker: 'Sami',
        french: 'Par bouche-à-oreille, surtout. Et pour la plomberie, je l’ai fait faire par un plombier que ma voisine m’avait recommandé.',
        english: 'By word of mouth, mostly. And for the plumbing, I had it done by a plumber my neighbour had recommended.',
        pronunciation: 'par boosh-ah-oh-RAY, sewr-TOO. ay poor lah plohm-buh-REE, zhuh lay fay fair par ahn plohm-BYAY kuh mah vwah-ZEEN mah-VAY ruh-koh-mahn-DAY',
      },
      {
        speaker: 'Léa',
        french: 'Attention au passé composé — tu as dit « je l’ai fait faire » sans accord, c’est correct. « Fait » reste invariable au causatif.',
        english: 'Watch the passé composé — you said «je l’ai fait faire» with no agreement, which is correct. «Fait» stays invariable in the causative.',
        pronunciation: 'ah-tahn-SYOHN oh pah-SAY kohn-poh-ZAY — tew ah dee zhuh lay fay FAIR sahn ah-KOR, say koh-REKT',
      },
      {
        speaker: 'Sami',
        french: 'Oui, ça je l’ai retenu. Sinon, j’ai aussi fait livrer les meubles directement chez moi, ça m’a fait gagner du temps.',
        english: 'Yes, that I remembered. Also, I had the furniture delivered straight to my place, which saved me time.',
        pronunciation: 'wee, sah zhuh lay ruh-tuh-NEW. see-NOHN, zhay oh-SEE fay lee-VRAY lay MUHBL dee-rek-tuh-MAHN shay MWAH, sah mah fay gan-YAY dew TAHN',
      },
      {
        speaker: 'Léa',
        french: 'Et la peinture, tu te la fais faire aussi ?',
        english: 'And the painting — are you having that done too?',
        pronunciation: 'ay lah pan-TEWR, tew tuh lah fay FAIR oh-SEE',
      },
      {
        speaker: 'Sami',
        french: 'Non, celle-là je vais la faire moi-même. Je n’ai pas envie de me faire avoir sur le prix.',
        english: 'No, that one I’ll do myself. I don’t want to get ripped off on the price.',
        pronunciation: 'NOHN, sel-LAH zhuh vay lah fair mwah-MEM. zhuh nay pah ahn-VEE duh muh fair ah-VWAR sewr luh PREE',
      },
      {
        speaker: 'Léa',
        french: 'Sage décision. Et pour les fenêtres, le bailleur a laissé faire ?',
        english: 'Smart decision. And for the windows, did your landlord allow it?',
        pronunciation: 'sahzh day-see-ZYOHN. ay poor lay fuh-NETR, luh bah-YURR ah lay-SAY fair',
      },
      {
        speaker: 'Sami',
        french: 'Comme je suis propriétaire, je n’ai personne à demander. Mais je vais laisser l’architecte décider du modèle.',
        english: 'Since I’m the owner, there’s nobody to ask. But I’m going to let the architect decide on the model.',
        pronunciation: 'kohm zhuh swee proh-pree-ay-TAIR, zhuh nay pair-SOHN ah duh-mahn-DAY. may zhuh vay lay-SAY lar-shee-TEKT day-see-DAY dew moh-DEL',
      },
      {
        speaker: 'Léa',
        french: 'C’est sage. Au fait, mes deux amies se sont fait couper les cheveux dans ton ancien quartier — chez le coiffeur que tu m’avais conseillé.',
        english: 'That’s wise. By the way, two of my friends had their hair cut in your old neighbourhood — at the hairdresser you recommended to me.',
        pronunciation: 'say SAHZH. oh FET, may duh zah-MEE suh sohn fay koo-PAY lay shuh-VUH dahn tohn ahn-SYAN kar-TYAY',
      },
      {
        speaker: 'Sami',
        french: 'Super, je vais le faire savoir à Marc. Il sera content que je continue à le faire travailler après mon déménagement.',
        english: 'Great, I’ll let Marc know. He’ll be happy I’m still getting him work after my move.',
        pronunciation: 'sew-PAIR, zhuh vay luh fair sah-VWAR ah MARK. eel suh-RAH kohn-TAHN kuh zhuh kohn-tee-NYU ah luh fair trah-vah-YAY ah-PRAY mohn day-may-nahzh-MAHN',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Faire + infinitif: «have something done (by someone else)»',
      explanation:
        'The causative is «faire + infinitive», expressing that the subject CAUSES the action rather than performing it. «Je répare ma voiture» = I repair my car myself; «je fais réparer ma voiture» = I have my car repaired. Word order: faire + INFINITIVE + object. If an agent is specified, it follows with «par»: «je fais réparer ma voiture par mon frère». With a pronoun object, the pronoun goes BEFORE faire: «je la fais réparer».',
      examples: [
        'Je fais réparer ma voiture. (I have my car repaired.)',
        'Il fait construire une maison. (He’s having a house built.)',
        'Pronoun before faire: Je LA fais réparer. (I have it repaired.)',
        'With agent: Je fais réparer ma voiture PAR mon frère.',
        'Negation wraps around faire: Je ne fais pas réparer ma voiture.',
      ],
      tip:
        'Faire carries all the tense. The infinitive that follows is fixed and never changes. The pronoun goes BEFORE faire, not before the infinitive — this is the most common B1 word-order error.',
    },
    {
      title: 'Past participle of faire is INVARIABLE in the causative',
      explanation:
        'In the passé composé and other compound tenses, the past participle «fait» in a causative construction is ALWAYS INVARIABLE — even when the preceding direct object is feminine or plural. This is an official exception to the «que + avoir + preceding direct object» agreement rule from L34. It is one of the few participle exceptions worth memorising explicitly.',
      examples: [
        'Je l’ai fait réparer. (it = la voiture — NO -e on fait.)',
        'Les lettres que j’ai fait écrire. (NO -es on fait.)',
        'Compare standard rule (no causative): Les lettres que j’ai écrites. (-es agreement.)',
        'Je les ai fait venir. (NO -s on fait.)',
        'Elle s’est fait couper les cheveux. (NO -e on fait — also invariable in se faire.)',
      ],
      tip:
        'In the causative — and ONLY in the causative — fait never agrees. If you see «faite», «faits», «faites» in a causative, it is wrong. Memorise this exception; it is tested directly on the DELF B1.',
    },
    {
      title: 'Se faire + infinitif and laisser + infinitif',
      explanation:
        '«Se faire + infinitive» means having something done to ONESELF, often something undesired. The reflexive pronoun marks the subject as the recipient: «elle s’est fait couper les cheveux» (she had her hair cut), «il s’est fait voler» (he got robbed), «se faire avoir» (to get ripped off). «Laisser + infinitive» means «to let / allow»: «laisse-moi parler» (let me talk), «laisser faire» (let it happen). Both follow the same pronoun placement rules as faire causatif (pronoun before laisser/faire).',
      examples: [
        'Elle s’est fait couper les cheveux. (She had her hair cut.)',
        'Il s’est fait voler son sac dans le métro. (He got his bag stolen on the metro.)',
        'Je ne veux pas me faire avoir. (I don’t want to get ripped off.)',
        'Laisse-moi parler. (Let me talk.)',
        'Laisse-la décider toute seule. (Let her decide on her own.)',
      ],
      tip:
        '«Se faire» almost always carries the sense that the subject is on the receiving end — neutral («couper les cheveux»), negative («voler», «avoir»), or sometimes neutral-passive («se faire connaître» = to make oneself known). Notice the implicit agent: an external person is doing the action.',
    },
  ],
  vocabulary: [
    { french: 'faire + inf.', english: 'to have (something) done', category: 'Causative structure', example: 'Je fais réparer ma voiture.' },
    { french: 'faire réparer', english: 'to have repaired', category: 'Common causative' },
    { french: 'faire construire', english: 'to have built', category: 'Common causative' },
    { french: 'faire nettoyer', english: 'to have cleaned', category: 'Common causative' },
    { french: 'faire livrer', english: 'to have delivered', category: 'Common causative' },
    { french: 'faire venir', english: 'to send for / have come', category: 'Common causative' },
    { french: 'faire entrer / sortir', english: 'to show in / out', category: 'Common causative' },
    { french: 'faire savoir', english: 'to let know', category: 'Common causative' },
    { french: 'faire comprendre', english: 'to get across / make understand', category: 'Common causative' },
    { french: 'se faire + inf.', english: 'to have (something) done to oneself', category: 'Reflexive causative' },
    { french: 'se faire couper les cheveux', english: 'to have one’s hair cut', category: 'Se faire (neutral)' },
    { french: 'se faire voler', english: 'to get robbed', category: 'Se faire (negative)' },
    { french: 'se faire attendre', english: 'to keep people waiting', category: 'Se faire (negative)' },
    { french: 'se faire avoir', english: 'to get ripped off / fooled', category: 'Se faire (negative)' },
    { french: 'se faire connaître', english: 'to make oneself known', category: 'Se faire (neutral)' },
    { french: 'laisser + inf.', english: 'to let / allow', category: 'Laisser structure', example: 'Laisse-moi parler.' },
    { french: 'laisser passer', english: 'to let pass', category: 'Laisser idiom' },
    { french: 'laisser faire', english: 'to let it happen', category: 'Laisser idiom' },
    { french: 'laisser tomber', english: 'to drop / give up on', category: 'Laisser idiom' },
    { french: 'un(e) artisan(e)', english: 'a tradesperson / artisan', category: 'Trades' },
    { french: 'un plombier / une plombière', english: 'a plumber', category: 'Trades' },
    { french: 'un(e) électricien(ne)', english: 'an electrician', category: 'Trades' },
    { french: 'un menuisier / une menuisière', english: 'a carpenter', category: 'Trades' },
    { french: 'un maçon / une maçonne', english: 'a builder/mason', category: 'Trades' },
    { french: 'un chantier', english: 'a building site / project', category: 'Renovation' },
    { french: 'un devis', english: 'a quote / estimate', category: 'Renovation', example: 'Il faut demander un devis.' },
    { french: 'une facture', english: 'an invoice', category: 'Renovation' },
    { french: 'un(e) propriétaire', english: 'an owner', category: 'Property' },
    { french: 'un bailleur / une bailleresse', english: 'a landlord / landlady', category: 'Property' },
    { french: 'le bouche-à-oreille', english: 'word of mouth', category: 'Cultural expression' },
  ],
  culturalNotes: [
    {
      title: 'L’économie de l’artisanat',
      content:
        'Trades such as plombier, électricien, menuisier, maçon, peintre are legally regulated in France through the Chambre des Métiers et de l’Artisanat. Each artisan must hold a recognised qualification (CAP or BP) and is registered in the Répertoire des métiers. There are around 1.5 million artisanal businesses in France — a major share of the national economy and a recognisable cultural identity.',
    },
    {
      title: 'La loi Carrez et la culture immobilière',
      content:
        'Home ownership in France is closely regulated. The loi Carrez (1996) requires that the exact habitable surface of any apartment sold in a copropriété be measured precisely — within a 5% tolerance — by a certified expert. Errors above 5% allow buyers to demand a price reduction. This is one of many laws that make French property transactions formal and document-heavy.',
    },
    {
      title: 'Les plateformes — la nouvelle concurrence',
      content:
        'Since 2015, platform services like Hellocasa, MyLittleVoisin, AlloVoisins, and Frizbiz have disrupted the traditional French artisan market. Customers compare quotes online and book directly; some artisans embrace this, others resent it. The Chambre des Métiers actively lobbies to maintain regulatory protections in the face of platform competition.',
    },
  ],
  exercises: [
    {
      id: 'l39-e1',
      type: 'rewrite',
      question:
        'Rewrite each sentence in the causative — «I do X myself» → «I have X done».',
      instruction_type: 'causative',
      items: [
        {
          original: 'Je répare ma voiture.',
          expected: 'Je fais réparer ma voiture.',
          hint: 'faire + infinitive + object',
          explanation: 'Causative: faire + réparer + ma voiture.',
        },
        {
          original: 'Elle construit une maison.',
          expected: 'Elle fait construire une maison.',
          hint: 'faire + infinitive',
          explanation: 'Causative: she has a house built by builders.',
        },
        {
          original: 'Nous livrons les meubles.',
          expected: 'Nous faisons livrer les meubles.',
          hint: 'faire + livrer',
          explanation: 'Causative: we have the furniture delivered.',
        },
        {
          original: 'Il nettoie son appartement.',
          expected: 'Il fait nettoyer son appartement.',
          hint: 'faire + nettoyer',
          explanation: 'Causative: he has his flat cleaned.',
        },
      ],
    },
    {
      id: 'l39-e2',
      type: 'fill_blank',
      question:
        'Insert the object pronoun in the correct position. «Ma voiture est en panne — je vais ___ réparer.» (la = ma voiture)',
      correct_answer: 'la faire',
      explanation:
        'In the causative, the pronoun goes BEFORE faire, not before the infinitive. «Je vais la faire réparer», NOT «je vais faire la réparer».',
      hints: ['Pronoun + faire + infinitive.'],
    },
    {
      id: 'l39-e3',
      type: 'multiple_choice',
      question: 'Choose the CORRECT past participle in this causative passé composé.',
      options: [
        'Cette robe, je l’ai faite refaire par un couturier.',
        'Cette robe, je l’ai fait refaire par un couturier.',
        'Cette robe, je l’ai faits refaire par un couturier.',
        'Cette robe, je l’ai faites refaire par un couturier.',
      ],
      correct_answer: 'Cette robe, je l’ai fait refaire par un couturier.',
      explanation:
        '«Fait» is INVARIABLE in the causative — even with «la robe» (fem. sg.) as the preceding direct object. This is the official exception to the agreement rule of L34.',
    },
    {
      id: 'l39-e4',
      type: 'rewrite',
      question:
        'Rewrite each sentence using «se faire + infinitive».',
      instruction_type: 'causative',
      items: [
        {
          original: 'On lui a coupé les cheveux.',
          expected: 'Elle s’est fait couper les cheveux.',
          hint: 'subject becomes elle; se faire + couper',
          explanation:
            'Reflexive causative: the subject undergoes the action. Note: fait stays invariable.',
        },
        {
          original: 'Quelqu’un lui a volé son portefeuille dans le métro.',
          expected: 'Il s’est fait voler son portefeuille dans le métro.',
          hint: 'se faire voler',
          explanation:
            'Common negative pattern: «se faire voler» = to get robbed.',
        },
        {
          original: 'On attend toujours Léa.',
          expected: 'Léa se fait toujours attendre.',
          hint: 'se faire attendre',
          explanation:
            '«Se faire attendre» = to keep people waiting. Note the subject change.',
        },
        {
          original: 'Le commerçant l’a trompée sur la qualité.',
          expected: 'Elle s’est fait avoir sur la qualité.',
          hint: 'se faire avoir = colloquial for «get ripped off»',
          explanation: 'Idiomatic, informal — extremely common in spoken French.',
        },
      ],
    },
    {
      id: 'l39-e5',
      type: 'fill_blank',
      question:
        'Fill in the correct form of laisser + infinitive. «___ parler, j’ai besoin de finir ma phrase.» (Let me speak — informal singular)',
      correct_answer: 'Laisse-moi',
      explanation:
        '«Laisser + infinitif» = let. Imperative «laisse» + object pronoun «moi» (postposed after the imperative).',
      hints: ['Imperative tu form of laisser = laisse. Postposed pronoun = moi.'],
    },
    {
      id: 'l39-e6',
      type: 'error_correction',
      question:
        'Each sentence has a causative error (word order, agent, agreement). Rewrite it correctly.',
      items: [
        {
          incorrect: 'Je fais ma voiture réparer.',
          correct: 'Je fais réparer ma voiture.',
          explanation:
            'Word order: faire + INFINITIVE + object. The infinitive comes immediately after faire.',
        },
        {
          incorrect: 'Je fais réparer ma voiture par à mon frère.',
          correct: 'Je fais réparer ma voiture par mon frère.',
          explanation: 'Agent introduced by «par» alone, not «par à».',
        },
        {
          incorrect: 'Cette robe, je l’ai faite refaire.',
          correct: 'Cette robe, je l’ai fait refaire.',
          explanation: '«Fait» is INVARIABLE in the causative.',
        },
        {
          incorrect: 'Je vais faire la réparer demain.',
          correct: 'Je vais la faire réparer demain.',
          explanation: 'Pronoun goes BEFORE faire, not between faire and the infinitive.',
        },
        {
          incorrect: 'Elle s’est faite couper les cheveux.',
          correct: 'Elle s’est fait couper les cheveux.',
          explanation: 'In «se faire + inf.», «fait» is invariable — no -e even with feminine subject.',
        },
      ],
    },
    {
      id: 'l39-e7',
      type: 'translation',
      question: 'Translate using faire causatif, se faire, or laisser.',
      direction: 'en_to_fr',
      correct_answer: [
        'Je fais réparer ma voiture par un mécanicien du quartier.',
        'Elle s’est fait couper les cheveux ce matin.',
        'Laisse-moi parler une seconde, s’il te plaît.',
        'Il s’est fait voler son téléphone dans le métro.',
        'Nous avons fait livrer les meubles directement chez nous.',
      ],
      explanation:
        'The five core patterns: faire + inf. with agent, se faire (neutral), laisser, se faire (negative), faire + inf.',
    },
    {
      id: 'l39-e8',
      type: 'mood_choice',
      question:
        'Choose between the CAUSATIVE (subject has it done — «indicative» here) and the ORDINARY ACTIVE (subject does it themselves — «subjunctive» here).',
      items: [
        {
          sentence: 'Demain, je [BLANK] (peindre) le salon — je n’ai pas trouvé de peintre.',
          verb: 'peindre',
          indicative_form: 'fais peindre',
          subjunctive_form: 'peins',
          correct_answer: 'subjunctive',
          trigger: 'no professional, doing it himself',
          explanation: 'No artisan involved → ordinary active «je peins».',
        },
        {
          sentence: 'L’an dernier, j’ai [BLANK] (rénover) ma cuisine — une équipe a tout fait.',
          verb: 'rénover',
          indicative_form: 'fait rénover',
          subjunctive_form: 'rénové',
          correct_answer: 'indicative',
          trigger: 'a team did it',
          explanation: 'Causative: «j’ai fait rénover» = had it renovated.',
        },
        {
          sentence: 'Elle [BLANK] (couper) les cheveux toute seule à la maison.',
          verb: 'couper',
          indicative_form: 'se fait couper',
          subjunctive_form: 'se coupe',
          correct_answer: 'subjunctive',
          trigger: 'doing it herself',
          explanation: 'No one else involved → reflexive «se coupe», not the causative «se fait couper».',
        },
        {
          sentence: 'Tous les deux mois, elle [BLANK] (couper) les cheveux chez son coiffeur.',
          verb: 'couper',
          indicative_form: 'se fait couper',
          subjunctive_form: 'se coupe',
          correct_answer: 'indicative',
          trigger: 'at the hairdresser’s',
          explanation: 'Hairdresser is the unstated agent → reflexive causative «se fait couper».',
        },
      ],
    },
    {
      id: 'l39-e9',
      type: 'multiple_choice',
      question: 'Which sentence is grammatical?',
      options: [
        'Je fais ma maison construire par un architecte.',
        'Je fais construire ma maison par un architecte.',
        'Je construire fais ma maison par un architecte.',
        'Je fais construire par un architecte ma maison.',
      ],
      correct_answer: 'Je fais construire ma maison par un architecte.',
      explanation:
        'Word order: faire + infinitive + object + (par + agent). «Je fais construire ma maison par un architecte.»',
    },
    {
      id: 'l39-e10',
      type: 'speaking_prompt',
      question:
        'Describe a real or imagined home or appearance project. In 5 sentences, use causative faire at least three times (in different tenses), one «se faire + inf.», and one «laisser + inf.». Watch the invariable «fait» if you use a compound tense.',
      model_answer:
        'L’an dernier, j’ai fait refaire entièrement ma cuisine. J’ai fait venir trois artisans avant de choisir le bon devis. Je l’ai fait nettoyer après les travaux par une équipe spécialisée. Pendant les travaux, je me suis aussi fait couper les cheveux pour me sentir un peu changée. Et pour le choix des couleurs, j’ai laissé l’architecte d’intérieur décider — il a meilleur goût que moi.',
      translation:
        'Last year, I had my kitchen entirely redone. I called in three professionals before choosing the right quote. I had it cleaned after the work by a specialised team. During the work, I also had my hair cut to feel a bit changed. And for the choice of colours, I let the interior architect decide — he has better taste than me.',
      tip: 'Notice that «fait», «fait», «fait» stay invariable across all three compound tenses. The only -ée in the dialogue is «changée» (sentir + adjective), not a causative form.',
    },
  ],
}

const lesson40: IntermediateLessonData = {
  id: 40,
  title: 'Logical Connectors',
  title_fr: 'Les Connecteurs Logiques',
  level: 'B1',
  description:
    'Build extended, logically connected arguments using the four families of French connectors — cause, consequence, concession, opposition — with register awareness.',
  dialogue: {
    title: 'La semaine de quatre jours — débat en cours du soir',
    context:
      'A Tuesday-evening adult education class («cours du soir») on contemporary French society at a Paris GRETA. The topic of the week: should France move to a four-day working week? Three participants — Karine (in favour), Bruno (against), and Salim (the teacher) — work through structured arguments using cause, consequence, concession, and opposition connectors. The register shifts visibly between formal arguments and spoken «du coup».',
    exchanges: [
      {
        speaker: 'Salim',
        french: 'Bonsoir tout le monde. Ce soir, le débat est : « Faut-il passer à la semaine de quatre jours en France ? » Karine, vous commencez ?',
        english: 'Good evening everyone. Tonight’s debate: «Should France move to a four-day working week?» Karine, you start?',
        pronunciation: 'bohn-SWAHR too luh MOHND. suh SWAHR, luh day-BAH ay: foh-teel pah-SAY ah lah suh-MEN duh KATR ZHOOR ahn FRAHNSS? kah-REEN, voo koh-mahn-SAY',
      },
      {
        speaker: 'Karine',
        french: 'Volontiers. À mon avis, oui, parce que les expériences en Islande et en Belgique montrent des résultats positifs. Donc on devrait essayer.',
        english: 'Gladly. In my opinion, yes, because the trials in Iceland and Belgium show positive results. So we should try it.',
        pronunciation: 'voh-lohn-TYAY. ah mohn nah-VEE, wee, pars-kuh lay zek-spay-RYAHNSS ahn ees-LAHND ay ahn bel-ZHEEK mohn-truh day ray-zewl-TAH poh-zee-TEEF. dohnk ohn duh-VRAY ay-say-AY',
      },
      {
        speaker: 'Bruno',
        french: 'Certes, ces expériences sont intéressantes. Pourtant, on ne peut pas les comparer directement, étant donné que la productivité française est déjà parmi les plus élevées d’Europe.',
        english: 'Granted, those trials are interesting. However, we can’t compare them directly, given that French productivity is already among the highest in Europe.',
        pronunciation: 'sair-TES, say zek-spay-RYAHNSS sohn tan-tay-reh-SAHNT. poor-TAHN, ohn nuh puh pah lay kohn-pah-RAY dee-rek-tuh-MAHN, ay-TAHN doh-NAY kuh lah proh-dewk-tee-vee-TAY frahn-SEZ ay day-ZHAH par-MEE lay ploo ay-luh-VAY duh-ROHP',
      },
      {
        speaker: 'Karine',
        french: 'Bien que la productivité française soit élevée, beaucoup de salariés se disent épuisés. Par conséquent, une journée de récupération pourrait sérieusement améliorer la santé publique.',
        english: 'Although French productivity is high, many employees say they’re exhausted. Consequently, an extra day off could seriously improve public health.',
        pronunciation: 'byan kuh lah proh-dewk-tee-vee-TAY frahn-SEZ swah ay-luh-VAY, boh-KOO duh sah-lah-RYAY suh DEEZ ay-pwee-ZAY. par kohn-say-KAHN, ewn zhoor-NAY duh ray-kew-pay-rah-SYOHN poo-RAY say-RYUHZ-mahn ah-may-lyoh-RAY lah SAHN-tay pew-BLEEK',
      },
      {
        speaker: 'Bruno',
        french: 'En revanche, dans les secteurs en tension — comme la santé ou les transports — il est très difficile de retirer un jour entier. Du coup, on creuserait l’écart entre cadres et autres salariés.',
        english: 'On the other hand, in sectors under strain — like healthcare or transport — it’s very difficult to remove a whole day. As a result, we’d widen the gap between managers and other employees.',
        pronunciation: 'ahn ruh-VAHNSH, dahn lay sek-TURR ahn tahn-SYOHN — kohm lah SAHN-tay oo lay trahn-SPOHR — eel ay tray dee-fee-SEEL duh ruh-tee-RAY ahn ZHOOR ahn-TYAY. dew KOO, ohn kruh-zuh-RAY lay-KAR ahn-truh KADR ay OHTR sah-lah-RYAY',
      },
      {
        speaker: 'Salim',
        french: 'Bonne objection. Karine, comment répondriez-vous à cet écart ?',
        english: 'Good objection. Karine, how would you respond to that gap?',
        pronunciation: 'bohn op-zhek-SYOHN. kah-REEN, koh-MAHN ray-pohn-DRYAY voo ah set ay-KAR',
      },
      {
        speaker: 'Karine',
        french: 'Il est vrai que ce risque existe. Néanmoins, on peut imaginer une expérimentation progressive, secteur par secteur. Ainsi, on adapte la mesure aux réalités du terrain.',
        english: 'It’s true the risk exists. Nevertheless, we can imagine a gradual rollout, sector by sector. That way, the policy adapts to the reality on the ground.',
        pronunciation: 'eel ay VRAY kuh suh REESK eg-ZEEST. nay-ahn-MWAH, ohn puh ee-mah-zhee-NAY ewn ek-spay-ree-mahn-tah-SYOHN proh-greh-SEEV, sek-TURR par sek-TURR. an-SEE, ohn nah-DAPT lah muh-ZEWR oh ray-ah-lee-TAY dew ter-RAHN',
      },
      {
        speaker: 'Bruno',
        french: 'Quand même, l’expérience islandaise s’est faite à coûts constants. Or, en France, les patrons s’y opposeraient massivement, à cause des charges patronales.',
        english: 'Even so, the Icelandic trial was done at constant cost. Now, in France, employers would massively oppose it, because of payroll charges.',
        pronunciation: 'kahn MEM, lek-spay-RYAHNSS ees-lahn-DEZ say fet ah KOO kohn-STAHN. OHR, ahn FRAHNSS, lay pah-TROHN see oh-poh-zuh-RAY mah-seev-MAHN, ah kohz day SHARZH pah-troh-NAHL',
      },
      {
        speaker: 'Karine',
        french: 'Tandis que d’autres pays s’adaptent, la France hésite. Après avoir étudié plusieurs modèles, on pourrait au moins lancer une vraie expérimentation publique.',
        english: 'While other countries are adapting, France hesitates. After studying several models, we could at least launch a real public trial.',
        pronunciation: 'tahn-DEE kuh dohtr pay-EE sah-DAPT, lah FRAHNSS ay-ZEET. ah-PRAY ah-VWAR ay-tew-dee-AY plew-zyur moh-DEL, ohn poo-RAY oh MWAN lahn-SAY ewn vray ek-spay-ree-mahn-tah-SYOHN pew-BLEEK',
      },
      {
        speaker: 'Salim',
        french: 'Bruno, votre conclusion ?',
        english: 'Bruno, your conclusion?',
        pronunciation: 'brew-NOH, votr kohn-klew-ZYOHN',
      },
      {
        speaker: 'Bruno',
        french: 'Je suis d’accord pour étudier. Toutefois, je reste sceptique : contrairement à l’Islande, la France a un tissu industriel beaucoup plus exposé à la concurrence internationale.',
        english: 'I agree we should study it. However, I remain sceptical: unlike Iceland, France has an industrial base much more exposed to international competition.',
        pronunciation: 'zhuh swee dah-KOR poor ay-tew-dee-AY. too-tuh-FWAH, zhuh rest skep-TEEK: kohn-trair-MAHN ah lees-LAHND, lah FRAHNSS ah ahn tee-SOO an-dews-TRYEL boh-KOO ploo zeg-spoh-ZAY ah lah kohn-kew-RAHNSS an-tair-nah-SYOH-nahl',
      },
      {
        speaker: 'Salim',
        french: 'Très belle structure des deux côtés. Pour la semaine prochaine, vous m’écrivez chacun un texte argumenté, en utilisant au moins deux connecteurs de chaque famille.',
        english: 'Excellent structure on both sides. For next week, write me each an argumentative text using at least two connectors from each family.',
        pronunciation: 'tray BEL strewk-TEWR day duh koh-TAY. poor lah suh-MEN proh-SHEN, voo may-kree-VAY shah-KAHN ahn tekst ar-gew-mahn-TAY, ahn ew-tee-lee-ZAHN oh MWAN duh koh-nek-TURR duh shahk fah-MEEY',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'CAUSE — naming the reason (parce que / puisque / car / etc.)',
      explanation:
        'Cause connectors all answer «why?» but they are NOT interchangeable. «Parce que» introduces a new reason that the listener does not yet know — the default. «Puisque» introduces a reason already known to both speakers («as you know», «given that»). «Car» is more written/formal and never starts a sentence. «Étant donné que» / «vu que» / «du fait que» (formal) all mean «given that». «À cause de» / «grâce à» introduce a NOUN (not a clause) — negative cause vs positive cause respectively.',
      examples: [
        'PARCE QUE (new reason): Je suis en retard parce que le métro était bloqué.',
        'PUISQUE (already-known reason): Puisque tu es là, aide-moi à porter ça.',
        'CAR (formal, mid-sentence only): Je n’ai pas pu venir, car j’étais malade.',
        'ÉTANT DONNÉ QUE (formal): Étant donné que le projet est complexe, on prendra plus de temps.',
        'À CAUSE DE + noun (negative): À cause de la grève, je n’ai pas pu venir.',
        'GRÂCE À + noun (positive): Grâce à toi, j’ai compris.',
      ],
      tip:
        '«Parce que» = unknown to listener, default. «Puisque» = already known. «Car» = written, never sentence-initial. «À cause de / grâce à» + noun (not + clause). Getting these three right makes your written French sound immediately more sophisticated.',
    },
    {
      title: 'CONSEQUENCE — drawing the conclusion (donc / alors / par conséquent / du coup)',
      explanation:
        'Consequence connectors say «as a result». «Donc» is the most neutral and most common. «Alors» is informal/spoken («so / then»). «Ainsi» (formal: «thus»). «C’est pourquoi» (formal: «that’s why»). «Par conséquent» (very formal: «consequently»). «Du coup» is extremely common in spoken French and means «so as a result» — register-flagged informal but used by everyone. «De ce fait» (formal: «as a result»).',
      examples: [
        'DONC (neutral): Il pleut, donc je reste chez moi.',
        'ALORS (spoken): Il pleut, alors je reste chez moi.',
        'PAR CONSÉQUENT (formal): Le marché a baissé, par conséquent les actions perdent de la valeur.',
        'DU COUP (very spoken): J’ai raté le train, du coup je serai en retard.',
        'AINSI (formal): On adapte la mesure sector par sector, ainsi on évite les blocages.',
      ],
      tip:
        'For DELF B1 writing, prefer «donc», «c’est pourquoi», «par conséquent», «ainsi». For spoken French, «alors» and «du coup» are everywhere. Mixing registers is the most common B1 production error — match your connector to the surrounding tone.',
    },
    {
      title: 'CONCESSION & OPPOSITION — yielding ground (certes / bien que / pourtant / en revanche)',
      explanation:
        'CONCESSION acknowledges the opposing point before pushing back. «Certes» (granted), «il est vrai que» (it’s true that), «même si» + INDICATIVE (even if), «bien que» + SUBJUNCTIVE (although). Once the concession is set, you swing back with «pourtant», «cependant», «néanmoins», «toutefois» (all = «however / nevertheless»). «Quand même» is the informal version. OPPOSITION introduces a parallel contrast (no concession): «tandis que», «alors que» (whereas), «en revanche», «par contre» (on the other hand), «contrairement à» + noun (unlike).',
      examples: [
        'CONCESSION: Certes, c’est cher. Pourtant, c’est de bonne qualité.',
        'CONCESSION: Bien qu’il soit fatigué, il continue. (bien que + subj)',
        'CONCESSION: Même si c’est difficile, j’essaie. (même si + ind)',
        'OPPOSITION: Tandis que d’autres pays s’adaptent, la France hésite.',
        'OPPOSITION: Contrairement à l’Islande, la France a un grand secteur industriel.',
        'OPPOSITION (spoken): C’est cher, par contre c’est solide.',
      ],
      tip:
        'A common B1 confusion: «par contre» is widely used in everyday French but pedants insist on «en revanche» in formal writing. Both are correct in 2026 French; just be aware of the register. For DELF B1 production, «en revanche» is the safe choice.',
    },
    {
      title: '«Après avoir / après être + participe passé» — sequencing as a B1 connector',
      explanation:
        '«Après + INFINITIVE» is impossible in French — French uses «après avoir + past participle» (for avoir verbs) or «après être + past participle» (for être verbs, with subject agreement). The construction links two past actions of the SAME subject, with the «après» clause happening first. This is a grammaticalised connector, not a true tense — learn it as a fixed pattern alongside the other connectors.',
      examples: [
        'Après avoir étudié plusieurs modèles, nous avons choisi.',
        'Après avoir fini le rapport, je suis sortie.',
        'Après être arrivés à Paris, ils ont pris le métro. (être verb, with agreement)',
        'Après s’être préparée, elle est partie. (reflexive, with agreement)',
        'Same subject required: «Après être arrivé, J’ai déjeuné» (je both times). For different subjects, use «après que + indicatif».',
      ],
      tip:
        'Same subject is the rule. Different subject → «après que + indicatif» (modern usage). Negation: «Après ne pas avoir pu venir hier, il s’est excusé.» The negation wraps around the infinitive.',
    },
  ],
  vocabulary: [
    { french: 'parce que', english: 'because (new info)', category: 'Cause (neutral)', note: '+ indicative' },
    { french: 'puisque', english: 'since (known info)', category: 'Cause (neutral)', note: '+ indicative' },
    { french: 'car', english: 'for / because (written)', category: 'Cause (formal)', note: 'mid-sentence only' },
    { french: 'étant donné que', english: 'given that', category: 'Cause (formal)' },
    { french: 'vu que', english: 'seeing that', category: 'Cause (informal)' },
    { french: 'à cause de', english: 'because of (negative) + noun', category: 'Cause (with noun)' },
    { french: 'grâce à', english: 'thanks to (positive) + noun', category: 'Cause (with noun)' },
    { french: 'donc', english: 'therefore / so', category: 'Consequence (neutral)' },
    { french: 'alors', english: 'so / then', category: 'Consequence (spoken)' },
    { french: 'ainsi', english: 'thus', category: 'Consequence (formal)' },
    { french: 'c’est pourquoi', english: 'that’s why', category: 'Consequence (neutral/formal)' },
    { french: 'par conséquent', english: 'consequently', category: 'Consequence (formal)' },
    { french: 'du coup', english: 'so as a result', category: 'Consequence (very spoken)' },
    { french: 'de ce fait', english: 'as a result', category: 'Consequence (formal)' },
    { french: 'certes', english: 'granted / admittedly', category: 'Concession opener (formal)' },
    { french: 'il est vrai que', english: 'it’s true that', category: 'Concession opener' },
    { french: 'même si', english: 'even if', category: 'Concession', note: '+ indicative' },
    { french: 'bien que / quoique', english: 'although', category: 'Concession', note: '+ subjonctif' },
    { french: 'pourtant', english: 'yet / however', category: 'Concession swing-back' },
    { french: 'cependant', english: 'however', category: 'Concession swing-back (formal)' },
    { french: 'néanmoins', english: 'nevertheless', category: 'Concession swing-back (formal)' },
    { french: 'toutefois', english: 'however / nonetheless', category: 'Concession swing-back (formal)' },
    { french: 'quand même', english: 'even so', category: 'Concession swing-back (spoken)' },
    { french: 'tandis que', english: 'whereas', category: 'Opposition' },
    { french: 'alors que', english: 'whereas / while', category: 'Opposition' },
    { french: 'en revanche', english: 'on the other hand', category: 'Opposition (neutral)' },
    { french: 'par contre', english: 'on the other hand', category: 'Opposition (informal-standard)' },
    { french: 'contrairement à + nom', english: 'unlike', category: 'Opposition (with noun)' },
    { french: 'à l’inverse de + nom', english: 'in contrast to', category: 'Opposition (with noun)' },
    { french: 'après avoir / être + p.p.', english: 'after doing', category: 'Sequence (B1 connector)' },
  ],
  culturalNotes: [
    {
      title: 'L’art français du débat',
      content:
        'France has a long-standing public-argument tradition: the structured debate is a defining feature of the Assemblée nationale, of French philosophy classes in lycée, of TV programmes («C politique», «28 minutes»), and of every dinner conversation that goes beyond small talk. Adult-education classes («cours du soir») often include explicit training in argumentative structure, which is why Salim ends with a homework brief that names «deux connecteurs par famille».',
    },
    {
      title: 'La formation continue et le CPF',
      content:
        'France funds adult education through the Compte Personnel de Formation (CPF), a personal training budget that every working adult accumulates. GRETA (Groupement d’Établissements) is the public network offering subsidised courses, including French as a foreign language and civic-society classes. Karine and Bruno could be using their CPF for this very class.',
    },
    {
      title: 'La tribune — argumentative writing in French media',
      content:
        'The «tribune libre» or «tribune» is a defining French newspaper genre: a structured opinion piece, typically 800–1500 words, by an outside contributor (academic, public figure, professional). It is the natural environment for the four connector families, and reading tribunes is one of the most effective DELF B1 preparation activities.',
    },
  ],
  exercises: [
    {
      id: 'l40-e1',
      type: 'register_sort',
      question: 'Sort each connector by its semantic FAMILY: CAUSE, CONSEQUENCE, CONCESSION, or OPPOSITION.',
      categories: ['CAUSE', 'CONSEQUENCE', 'CONCESSION', 'OPPOSITION'],
      items: [
        { expression: 'parce que', correct_category: 'CAUSE', explanation: 'Default cause connector.' },
        { expression: 'puisque', correct_category: 'CAUSE', explanation: 'Cause already known to both.' },
        { expression: 'donc', correct_category: 'CONSEQUENCE', explanation: 'Neutral consequence.' },
        { expression: 'par conséquent', correct_category: 'CONSEQUENCE', explanation: 'Formal consequence.' },
        { expression: 'bien que', correct_category: 'CONCESSION', explanation: 'Although + subjunctive.' },
        { expression: 'pourtant', correct_category: 'CONCESSION', explanation: 'Swing-back after concession.' },
        { expression: 'tandis que', correct_category: 'OPPOSITION', explanation: 'Parallel contrast.' },
        { expression: 'en revanche', correct_category: 'OPPOSITION', explanation: 'On the other hand.' },
        { expression: 'du coup', correct_category: 'CONSEQUENCE', explanation: 'Spoken consequence.' },
        { expression: 'certes', correct_category: 'CONCESSION', explanation: 'Concession opener.' },
        { expression: 'grâce à', correct_category: 'CAUSE', explanation: 'Positive cause + noun.' },
        { expression: 'contrairement à', correct_category: 'OPPOSITION', explanation: 'Opposition + noun.' },
      ],
    },
    {
      id: 'l40-e2',
      type: 'fill_blank',
      question:
        'Choose between «parce que», «puisque», and «car» based on the meaning. «Je n’ai pas répondu, ___ j’étais en réunion toute la journée.» (you’re explaining a reason the listener didn’t know)',
      correct_answer: 'parce que',
      explanation:
        '«Parce que» introduces a new reason. «Puisque» would imply the listener already knew about the meeting; «car» is written/formal.',
      hints: ['New reason → parce que. Known reason → puisque. Formal/written → car.'],
    },
    {
      id: 'l40-e3',
      type: 'matching',
      question:
        'Match each formal connector to its informal/spoken equivalent.',
      pairs: [
        { french: 'par conséquent (formal)', english: 'du coup (spoken)' },
        { french: 'en revanche (neutral)', english: 'par contre (informal-standard)' },
        { french: 'cependant (formal)', english: 'pourtant (neutral/spoken)' },
        { french: 'néanmoins (formal)', english: 'quand même (spoken)' },
        { french: 'étant donné que (formal)', english: 'vu que (informal)' },
        { french: 'c’est pourquoi (neutral)', english: 'alors (spoken)' },
      ],
      explanation:
        'Register awareness is critical at B1. Mixing «par conséquent» into casual chat sounds odd; mixing «du coup» into a formal essay sounds unprofessional.',
    },
    {
      id: 'l40-e4',
      type: 'transformation',
      question:
        'Combine each pair using the connector indicated.',
      instruction: 'affirmative_to_negative',
      items: [
        {
          original: 'Il est fatigué. Il continue. (bien que)',
          transformed: 'Bien qu’il soit fatigué, il continue.',
          translation: 'Although he’s tired, he continues.',
        },
        {
          original: 'Le marché a baissé. Les actions perdent de la valeur. (par conséquent)',
          transformed: 'Le marché a baissé ; par conséquent, les actions perdent de la valeur.',
          translation: 'The market dropped; consequently, the shares are losing value.',
        },
        {
          original: 'Il pleut. Je sors quand même. (malgré + noun, or simply use quand même)',
          transformed: 'Il pleut, mais je sors quand même.',
          translation: 'It’s raining, but I’m going out anyway.',
        },
        {
          original: 'Il a réussi. Il a beaucoup travaillé. (parce que)',
          transformed: 'Il a réussi parce qu’il a beaucoup travaillé.',
          translation: 'He succeeded because he worked hard.',
        },
        {
          original: 'L’Islande a réussi. La France hésite. (tandis que)',
          transformed: 'Tandis que l’Islande a réussi, la France hésite.',
          translation: 'While Iceland has succeeded, France hesitates.',
        },
      ],
      explanation:
        'Each connector dictates a particular structure. «Bien que» triggers the subjunctive. «Par conséquent» is set off by a semicolon or full stop. «Tandis que» introduces a parallel contrast.',
    },
    {
      id: 'l40-e5',
      type: 'error_correction',
      question:
        'Each sentence misuses a connector (wrong family, wrong mood, wrong register). Rewrite it correctly.',
      items: [
        {
          incorrect: 'Bien qu’il est fatigué, il continue.',
          correct: 'Bien qu’il soit fatigué, il continue.',
          explanation: '«Bien que» triggers the subjunctive.',
        },
        {
          incorrect: 'Car j’étais malade, je n’ai pas pu venir.',
          correct: 'Je n’ai pas pu venir, car j’étais malade.',
          explanation: '«Car» NEVER starts a sentence in French. It always sits in mid-sentence.',
        },
        {
          incorrect: 'À cause de tu m’as aidé, j’ai réussi.',
          correct: 'Grâce à toi, j’ai réussi.',
          explanation:
            'Two errors: (1) the cause is POSITIVE → grâce à, not à cause de; (2) à cause de / grâce à take a NOUN or PRONOUN, not a clause.',
        },
        {
          incorrect: 'Le rapport est complexe, par conséquent du coup je vais le relire.',
          correct: 'Le rapport est complexe, par conséquent je vais le relire. (formal) OU Le rapport est complexe, du coup je vais le relire. (spoken)',
          explanation: 'Mixing «par conséquent» and «du coup» in the same sentence stacks two registers. Pick one.',
        },
      ],
    },
    {
      id: 'l40-e6',
      type: 'rewrite',
      question:
        'Rewrite each plain statement by ADDING a concession with «certes… pourtant» (or equivalent).',
      instruction_type: 'relative_clause',
      items: [
        {
          original: 'Il est intelligent. Il échoue.',
          expected: 'Certes, il est intelligent ; pourtant, il échoue.',
          hint: 'certes + statement ; pourtant + opposite',
          explanation:
            'The classic B1 concession structure: «certes» introduces what you concede; «pourtant» swings to your point.',
        },
        {
          original: 'C’est cher. C’est de bonne qualité.',
          expected: 'Certes, c’est cher ; cependant, c’est de bonne qualité.',
          hint: 'cependant for written register',
          explanation: '«Cependant» is the slightly more formal swing-back option.',
        },
        {
          original: 'L’expérience est intéressante. On ne peut pas la généraliser.',
          expected: 'Il est vrai que l’expérience est intéressante. Néanmoins, on ne peut pas la généraliser.',
          hint: '«Il est vrai que» + néanmoins',
          explanation: 'Alternative formal concession structure.',
        },
        {
          original: 'Le projet est ambitieux. Le budget est insuffisant.',
          expected: 'Bien que le projet soit ambitieux, le budget reste insuffisant.',
          hint: 'bien que + subjonctif',
          explanation: '«Bien que» with subjunctive packs the concession into the subordinate clause.',
        },
      ],
    },
    {
      id: 'l40-e7',
      type: 'fill_blank',
      question:
        'Fill in «après avoir» or «après être» (with agreement if needed). «___ ___ étudié plusieurs options, nous avons choisi la moins risquée.»',
      correct_answer: 'Après avoir',
      explanation:
        'étudier is avoir-verb → «après avoir étudié». Same subject as the main clause («nous… nous avons choisi»). No agreement on past participle here.',
      hints: ['avoir-verb → après avoir + p.p. être-verb → après être + p.p. (with agreement).'],
    },
    {
      id: 'l40-e8',
      type: 'translation',
      question: 'Translate each sentence, choosing the connector that fits the meaning AND the register.',
      direction: 'en_to_fr',
      correct_answer: [
        'Il est intelligent ; pourtant, il échoue.',
        'Bien que le projet soit ambitieux, le budget reste insuffisant.',
        'Le marché a baissé ; par conséquent, les actions perdent de la valeur.',
        'Tandis que d’autres pays s’adaptent, la France hésite.',
        'Après avoir étudié plusieurs modèles, nous avons fait notre choix.',
      ],
      explanation:
        'Concession swing-back, concession + subj, formal consequence, opposition parallel, sequencing connector.',
    },
    {
      id: 'l40-e9',
      type: 'multiple_choice',
      question:
        'Which sentence uses «après avoir» CORRECTLY?',
      options: [
        'Après être étudié plusieurs modèles, nous avons décidé.',
        'Après avoir étudié plusieurs modèles, nous avons décidé.',
        'Après avoir étudiés plusieurs modèles, nous avons décidé.',
        'Après que avoir étudié plusieurs modèles, nous avons décidé.',
      ],
      correct_answer: 'Après avoir étudié plusieurs modèles, nous avons décidé.',
      explanation:
        'étudier is avoir-verb. Past participle stays «étudié» (no agreement before the verb’s direct object «plusieurs modèles» which follows the infinitive). The «après que» construction is a different (less common) structure.',
    },
    {
      id: 'l40-e10',
      type: 'speaking_prompt',
      question:
        'Present TWO SIDES of an issue you care about (work, technology, education, environment). In 5–6 sentences, use at least 2 CAUSE connectors, 1 CONCESSION + 1 swing-back, and 1 OPPOSITION connector. Keep the register consistent (formal or spoken — your choice).',
      model_answer:
        'Je pense que les écrans à l’école sont devenus un vrai problème, parce qu’ils réduisent la concentration des élèves et qu’ils créent de la dépendance dès le primaire. Étant donné les études récentes, plusieurs pays voisins ont déjà commencé à les limiter. Certes, on peut argumenter qu’ils donnent accès à des ressources pédagogiques modernes. Pourtant, le coût en attention me semble trop élevé. En revanche, je pense que former les enseignants au numérique reste essentiel — contrairement aux écrans des élèves, leur formation a un effet positif clair.',
      translation:
        'I think screens in school have become a real problem, because they reduce student concentration and create dependency from primary school. Given recent studies, several neighbouring countries have already started restricting them. Granted, you could argue they give access to modern educational resources. However, the attention cost seems too high to me. On the other hand, I think training teachers in digital tools is still essential — unlike students’ screens, their training has a clear positive effect.',
      tip: 'A B1 argument is built around the rhythm: claim → cause → concession → swing-back → opposition / nuance. Six sentences, four connector families, one consistent register.',
    },
  ],
}

const lesson41: IntermediateLessonData = {
  id: 41,
  title: 'Expressing Opinion & Nuance',
  title_fr: 'Exprimer son Opinion et la Nuance',
  level: 'B1',
  description:
    'Express personal opinions with precise mood control (indicatif vs subjonctif after certainty/opinion frames), disagree politely, and use hedging language to avoid overstatement.',
  dialogue: {
    title: 'Dîner chez des amis',
    context:
      'Camille and Romain meet for the first time at a Parisian dinner party hosted by mutual friends. After the second course, conversation turns to the proposed four-day working week — a topic they see differently. They model the educated-informal register typical of French dinner-party debate: hedged, layered, respectful of disagreement.',
    exchanges: [
      {
        speaker: 'Camille',
        french: 'Vous avez vu le dossier sur la semaine de quatre jours dans Le Monde ce week-end ? À mon avis, c’est une vraie piste.',
        english: 'Did you see the Le Monde feature on the four-day week this weekend? In my opinion, it’s a genuine option.',
        pronunciation: 'voo zah-VAY vew luh doss-YAY sewr lah suh-MEN duh KATR ZHOOR dahn luh MOHND suh week-END? ah mohn nah-VEE, say tewn vray PEEST',
      },
      {
        speaker: 'Romain',
        french: 'Je l’ai parcouru. Je trouve que les chiffres sont intéressants, mais je ne suis pas tout à fait convaincu.',
        english: 'I skimmed it. I find the figures interesting, but I’m not entirely convinced.',
        pronunciation: 'zhuh lay par-koo-REW. zhuh troov kuh lay SHEEFR sohn tan-tay-reh-SAHN, may zhuh nuh swee pah too tah fay kohn-van-KEW',
      },
      {
        speaker: 'Camille',
        french: 'Il est probable que la productivité augmente dans certains secteurs — l’étude islandaise est plutôt claire là-dessus.',
        english: 'It’s probable that productivity rises in certain sectors — the Icelandic study is fairly clear on that.',
        pronunciation: 'eel ay proh-BAHBL kuh lah proh-dewk-tee-vee-TAY oh-MAHNT dahn sair-TAHN sek-TURR — lay-TEWD ees-lahn-DEZ ay plew-TOH KLAIR lah-duh-SEW',
      },
      {
        speaker: 'Romain',
        french: 'Certes, mais il est peu probable que cela se transpose aussi simplement en France. Notre tissu industriel est très différent.',
        english: 'Granted, but it’s unlikely that this would transpose so simply in France. Our industrial fabric is very different.',
        pronunciation: 'sair-TES, may eel ay puh proh-BAHBL kuh suh-LAH suh trahn-POHZ oh-SEE sahmpl-MAHN ahn FRAHNSS. notr tee-SOO an-dews-TRYEL ay tray dee-fay-RAHN',
      },
      {
        speaker: 'Camille',
        french: 'Je vois votre point. Cela dit, je pense qu’on peut au moins expérimenter — il me semble que ce serait dommage de ne pas essayer.',
        english: 'I see your point. That said, I think we can at least experiment — it seems to me it would be a shame not to try.',
        pronunciation: 'zhuh vwah votr PWAN. suh-lah DEE, zhuh pahnss kohn puh oh MWAN ek-spay-ree-mahn-TAY — eel muh SAHMBL kuh suh suh-RAY doh-MAHZH duh nuh pah ay-say-AY',
      },
      {
        speaker: 'Romain',
        french: 'D’une certaine manière, je suis d’accord. Mais je ne crois pas que les patrons français soient prêts, dans une certaine mesure.',
        english: 'In a sense, I agree. But I don’t think French employers are ready, to a certain extent.',
        pronunciation: 'dewn sair-TEN mah-NYAIR, zhuh swee dah-KOR. may zhuh nuh krwah pah kuh lay pah-TROHN frahn-SAY swaht PRAY, dahn zewn sair-TEN muh-ZEWR',
      },
      {
        speaker: 'Camille',
        french: 'Vous avez peut-être raison sur la résistance patronale. J’ai des réserves sur la rapidité, plus que sur le principe.',
        english: 'You may be right about employer resistance. My reservations are about the speed, more than the principle.',
        pronunciation: 'voo zah-VAY puh-TET-ruh ray-ZOHN sewr lah ray-zees-TAHNSS pah-troh-NAHL. zhay day ray-ZAIRV sewr lah rah-pee-dee-TAY, ploo kuh sewr luh pran-SEEP',
      },
      {
        speaker: 'Romain',
        french: 'C’est exactement ça. Il est certain que le sujet est mûr, mais il est douteux qu’on puisse le voter avant 2028.',
        english: 'That’s exactly it. It’s certain that the topic is ripe, but it’s doubtful that it could be voted on before 2028.',
        pronunciation: 'say teg-zak-tuh-MAHN sah. eel ay sair-TAHN kuh luh sew-ZHAY ay MEWR, may zeel ay doo-TUH kohn pwees luh voh-TAY ah-VAHN duh meel van-WEET',
      },
      {
        speaker: 'Camille',
        french: 'Je comprends votre position, même si je vois les choses légèrement différemment. Cela me semble plutôt discutable de tout bloquer pour des raisons d’agenda.',
        english: 'I understand your position, even though I see things slightly differently. It seems rather debatable to me to block everything for scheduling reasons.',
        pronunciation: 'zhuh kohn-PRAHN votr poh-zee-SYOHN, mem see zhuh vwah lay shohz lay-zhair-MAHN dee-fay-RAH-mahn. suh-lah muh SAHMBL plew-TOH dees-kew-TAHBL duh too bloh-KAY poor day ray-ZOHN dah-zhahn-DAH',
      },
      {
        speaker: 'Romain',
        french: 'Discutable, oui, je l’admets en quelque sorte. Mais j’estime que la prudence est aussi un argument valable.',
        english: 'Debatable, yes, I admit it in a way. But I feel that caution is also a valid argument.',
        pronunciation: 'dees-kew-TAHBL, wee, zhuh lahd-MAY ahn kel-kuh SORT. may zhes-TEEM kuh lah prew-DAHNSS ay oh-SEE ahn nar-gew-MAHN vah-LAHBL',
      },
      {
        speaker: 'Camille',
        french: 'Sur ce point, on se rejoint plus qu’il n’y paraît, en réalité.',
        english: 'On that point, we agree more than it seems, actually.',
        pronunciation: 'sewr suh PWAN, ohn suh ruh-ZHWAN ploo keel nee pah-RAY, ahn ray-ah-lee-TAY',
      },
      {
        speaker: 'Romain',
        french: 'Probablement. Et il est clair que ce débat-là n’est pas près de se refermer.',
        english: 'Probably. And it’s clear that this debate isn’t about to close any time soon.',
        pronunciation: 'proh-bah-bluh-MAHN. ay eel ay KLAIR kuh suh day-BAH LAH nay pah PRAY duh suh ruh-fair-MAY',
      },
      {
        speaker: 'Camille',
        french: 'On reprend une cuillerée de tarte, et on poursuit ?',
        english: 'Shall we take another spoonful of tart and keep going?',
        pronunciation: 'ohn ruh-PRAHN ewn kwee-yuh-RAY duh TART, ay ohn poor-SWEE',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Degrees of certainty: indicatif (high probability) vs subjonctif (doubt)',
      explanation:
        'Impersonal expressions of certainty take a precise mood depending on how confident the speaker is. STRONG CERTAINTY: il est certain / évident / clair / sûr que + INDICATIVE. PROBABILITY (still > 50%): il est probable / vraisemblable que + INDICATIVE. POSSIBILITY (50% or less): il est possible / il se peut que + SUBJUNCTIVE. IMPROBABILITY / IMPOSSIBILITY: il est peu probable / douteux / impossible que + SUBJUNCTIVE. The shift happens at the 50% line: above it, indicative; at or below, subjunctive. This is one of the most heavily-tested distinctions on the DELF B1.',
      examples: [
        'Il est certain qu’il vient. (indicatif)',
        'Il est évident qu’elle a raison. (indicatif)',
        'Il est probable qu’il pleut demain. (indicatif — still confident)',
        'Il est possible qu’il vienne. (subjonctif — uncertain)',
        'Il est peu probable qu’il vienne. (subjonctif — improbable)',
      ],
      tip:
        'Memorise the threshold: «probable» = indicatif (the speaker leans towards yes); «possible» = subjonctif (the speaker is genuinely uncertain). The negation of a certainty («il n’est pas certain que») flips the mood to subjunctive — because the certainty has been removed.',
    },
    {
      title: 'Personal opinion: indicatif when affirmative, subjonctif when negated',
      explanation:
        'Personal-opinion frames in the AFFIRMATIVE take the indicative because the speaker is asserting their belief as something they consider real: «à mon avis», «selon moi», «d’après moi», «je pense que», «je crois que», «je trouve que», «j’estime que», «il me semble que», «j’ai l’impression que». NEGATED («je ne pense pas que», «je ne crois pas que», «je ne suis pas sûr que») they take the SUBJUNCTIVE because doubt has entered. Questions («pensez-vous que…?», «croyez-vous que…?») can take either, depending on whether the speaker expects a yes or genuinely doesn’t know.',
      examples: [
        'Affirmative: Je pense qu’il a raison. (indicatif)',
        'Negated: Je ne pense pas qu’il ait raison. (subjonctif)',
        'Affirmative: Il me semble qu’elle vient. (indicatif)',
        'Affirmative: À mon avis, ce serait dommage. (indicatif — note conditional for hedging)',
        'Negated: Je ne crois pas que ce soit une bonne idée. (subjonctif)',
      ],
      tip:
        'The same verb flips the mood. Je pense qu’il vient (indicatif, certain) vs Je ne pense pas qu’il vienne (subjonctif, doubt). DELF examiners listen for this exact contrast — it is the single most common B1 marker in production écrite.',
    },
    {
      title: 'Hedging, nuancing, and disagreeing politely',
      explanation:
        'Educated French speech almost never makes blunt assertions in debate contexts. NUANCE markers soften strong claims: en quelque sorte, d’une certaine manière, jusqu’à un certain point, dans une certaine mesure, plutôt, relativement, assez. POLITE DISAGREEMENT structures show you understood the other person before pushing back: «je vois votre point», «je comprends votre position», «cela dit, …», «sur ce point, je vois les choses différemment», «j’ai des réserves sur…», «cela me semble discutable». Conditional verbs add another layer of softening: «ce serait dommage», «il faudrait peut-être».',
      examples: [
        'En quelque sorte, oui. (In a sense, yes.)',
        'D’une certaine manière, je suis d’accord. (In a way, I agree.)',
        'Je ne suis pas tout à fait convaincu. (I’m not entirely convinced.)',
        'Cela me semble discutable. (That seems debatable to me.)',
        'Vous avez peut-être raison, mais j’ai des réserves sur le calendrier. (You may be right, but I have reservations about the timing.)',
      ],
      tip:
        'Disagreement without hedging sounds aggressive in French dinner-party register. The pattern: ACKNOWLEDGE («je vois votre point»), HEDGE («cela dit», «d’une certaine manière»), DISAGREE («mais j’ai des réserves»), QUALIFY («surtout sur…»). Four moves, one polite paragraph.',
    },
  ],
  vocabulary: [
    { french: 'il est certain que', english: 'it is certain that', category: 'Certainty (high) + ind', note: '+ indicatif' },
    { french: 'il est évident que', english: 'it is obvious that', category: 'Certainty (high) + ind', note: '+ indicatif' },
    { french: 'il est clair que', english: 'it is clear that', category: 'Certainty (high) + ind', note: '+ indicatif' },
    { french: 'il est probable que', english: 'it is likely that', category: 'Probability + ind', note: '+ indicatif' },
    { french: 'il est vraisemblable que', english: 'it is likely that', category: 'Probability + ind', note: '+ indicatif' },
    { french: 'il est possible que', english: 'it is possible that', category: 'Possibility + subj', note: '+ subjonctif' },
    { french: 'il se peut que', english: 'it may be that', category: 'Possibility + subj', note: '+ subjonctif' },
    { french: 'il est peu probable que', english: 'it is unlikely that', category: 'Improbability + subj', note: '+ subjonctif' },
    { french: 'il est douteux que', english: 'it is doubtful that', category: 'Improbability + subj', note: '+ subjonctif' },
    { french: 'il est impossible que', english: 'it is impossible that', category: 'Improbability + subj', note: '+ subjonctif' },
    { french: 'à mon avis', english: 'in my opinion', category: 'Personal opinion + ind', note: '+ indicatif' },
    { french: 'selon moi / d’après moi', english: 'according to me', category: 'Personal opinion + ind', note: '+ indicatif' },
    { french: 'il me semble que', english: 'it seems to me that', category: 'Personal opinion + ind', note: '+ indicatif (affirmative)' },
    { french: 'j’ai l’impression que', english: 'I have the impression that', category: 'Personal opinion + ind', note: '+ indicatif' },
    { french: 'je pense que / je ne pense pas que', english: 'I think / I don’t think', category: 'Opinion flip', note: 'aff. ind / nég. subj' },
    { french: 'je crois que / je ne crois pas que', english: 'I believe / I don’t believe', category: 'Opinion flip', note: 'aff. ind / nég. subj' },
    { french: 'je trouve que', english: 'I find that', category: 'Personal judgment + ind', note: '+ indicatif (aff)' },
    { french: 'j’estime que', english: 'I deem that', category: 'Personal judgment + ind', note: 'formal' },
    { french: 'avoir des réserves sur', english: 'to have reservations about', category: 'Polite disagreement' },
    { french: 'cela me semble discutable', english: 'that seems debatable to me', category: 'Polite disagreement' },
    { french: 'je vois votre point', english: 'I see your point', category: 'Polite disagreement' },
    { french: 'je vois les choses différemment', english: 'I see things differently', category: 'Polite disagreement' },
    { french: 'cela dit', english: 'that said', category: 'Polite disagreement / transition' },
    { french: 'en quelque sorte', english: 'in a sense', category: 'Hedging' },
    { french: 'd’une certaine manière', english: 'in a way', category: 'Hedging' },
    { french: 'jusqu’à un certain point', english: 'up to a certain point', category: 'Hedging' },
    { french: 'dans une certaine mesure', english: 'to a certain extent', category: 'Hedging' },
    { french: 'plutôt', english: 'rather', category: 'Hedging adverb' },
    { french: 'relativement', english: 'relatively', category: 'Hedging adverb' },
    { french: 'pas tout à fait', english: 'not entirely', category: 'Hedging adverb' },
  ],
  culturalNotes: [
    {
      title: 'La table comme espace de débat',
      content:
        'French dinner-party conversation has a distinctive cultural function: la table is considered a space for intellectual exchange, where disagreement is expected and respected — not avoided as small talk would prefer. Topics ranging from politics to philosophy circulate naturally over the cheese course. A French dinner where everyone agrees can feel oddly flat to French hosts: «on n’a pas vraiment discuté».',
    },
    {
      title: 'L’héritage de la philosophie en lycée',
      content:
        'All French lycée students take philosophy in their final year (terminale), and the baccalauréat philosophy exam is famous. This shared training gives French adults a common vocabulary for structured argument — thesis, antithesis, synthesis — and an expectation that opinions can be defended with reasons. Camille and Romain’s exchange is recognisably bac-philo trained: claim, concession, nuance, return.',
    },
    {
      title: 'Le débat public à la française',
      content:
        'Public-debate programmes («C politique», «28 minutes», «Quotidien», «Les Grandes Gueules») remain prime-time fixtures on French TV and radio. They model the educated-informal disagreement register: hedged, layered, polite. DELF B1 production orale is calibrated to this kind of speech — examiners want to hear nuance markers, not bare assertions.',
    },
  ],
  exercises: [
    {
      id: 'l41-e1',
      type: 'mood_choice',
      question:
        'Choose indicative or subjunctive after each opinion / probability frame.',
      items: [
        {
          sentence: 'Il est certain qu’il [BLANK] raison.',
          verb: 'avoir',
          indicative_form: 'a',
          subjunctive_form: 'ait',
          correct_answer: 'indicative',
          trigger: 'il est certain que',
          explanation: 'High certainty → indicative «a».',
        },
        {
          sentence: 'Il est possible qu’il [BLANK] raison.',
          verb: 'avoir',
          indicative_form: 'a',
          subjunctive_form: 'ait',
          correct_answer: 'subjunctive',
          trigger: 'il est possible que',
          explanation: 'Possibility ≤ 50% → subjunctive «ait».',
        },
        {
          sentence: 'Il est probable qu’il [BLANK] pluvieux demain.',
          verb: 'être',
          indicative_form: 'sera',
          subjunctive_form: 'soit',
          correct_answer: 'indicative',
          trigger: 'il est probable que',
          explanation: 'Probability (above 50%) → indicative «sera» (futur).',
        },
        {
          sentence: 'Il est peu probable qu’il [BLANK] à l’heure.',
          verb: 'être',
          indicative_form: 'sera',
          subjunctive_form: 'soit',
          correct_answer: 'subjunctive',
          trigger: 'il est peu probable que',
          explanation: 'Improbability → subjunctive «soit».',
        },
        {
          sentence: 'Je pense qu’elle [BLANK] disponible.',
          verb: 'être',
          indicative_form: 'est',
          subjunctive_form: 'soit',
          correct_answer: 'indicative',
          trigger: 'je pense que (affirmatif)',
          explanation: 'Affirmative opinion → indicative «est».',
        },
        {
          sentence: 'Je ne pense pas qu’elle [BLANK] disponible.',
          verb: 'être',
          indicative_form: 'est',
          subjunctive_form: 'soit',
          correct_answer: 'subjunctive',
          trigger: 'ne pas penser que',
          explanation: 'Negated opinion → subjunctive «soit».',
        },
        {
          sentence: 'À mon avis, ce [BLANK] dommage de ne pas essayer.',
          verb: 'être',
          indicative_form: 'serait',
          subjunctive_form: 'soit',
          correct_answer: 'indicative',
          trigger: 'à mon avis',
          explanation: 'Personal opinion frame → indicative. Conditional «serait» is itself an indicative-tense form.',
        },
        {
          sentence: 'Il est douteux qu’on [BLANK] le voter cette année.',
          verb: 'pouvoir',
          indicative_form: 'peut',
          subjunctive_form: 'puisse',
          correct_answer: 'subjunctive',
          trigger: 'il est douteux que',
          explanation: 'Doubt → subjunctive «puisse».',
        },
        {
          sentence: 'Il me semble qu’elle [BLANK] partie.',
          verb: 'être déjà',
          indicative_form: 'est déjà',
          subjunctive_form: 'soit déjà',
          correct_answer: 'indicative',
          trigger: 'il me semble que (affirmatif)',
          explanation: '«Il me semble que» in the affirmative → indicative.',
        },
        {
          sentence: 'Je ne suis pas sûr qu’il [BLANK] le temps.',
          verb: 'avoir',
          indicative_form: 'a',
          subjunctive_form: 'ait',
          correct_answer: 'subjunctive',
          trigger: 'ne pas être sûr que',
          explanation: 'Negated certainty → subjunctive «ait».',
        },
        {
          sentence: 'Il est clair que ce dossier [BLANK] mal préparé.',
          verb: 'être',
          indicative_form: 'a été',
          subjunctive_form: 'ait été',
          correct_answer: 'indicative',
          trigger: 'il est clair que',
          explanation: 'High certainty → indicative «a été» (passé composé).',
        },
        {
          sentence: 'Il se peut qu’elle [BLANK] son avis.',
          verb: 'changer',
          indicative_form: 'change',
          subjunctive_form: 'change',
          correct_answer: 'subjunctive',
          trigger: 'il se peut que',
          explanation: 'Possibility → subjunctive (here «change» happens to be the same form for both moods because the -er ending coincides; the trigger is what matters).',
        },
      ],
    },
    {
      id: 'l41-e2',
      type: 'transformation',
      question:
        'Flip each affirmative opinion to its negated form, changing the mood accordingly.',
      instruction: 'affirmative_to_negative',
      items: [
        {
          original: 'Je pense qu’il a raison.',
          transformed: 'Je ne pense pas qu’il ait raison.',
          translation: 'I think he’s right. → I don’t think he’s right.',
        },
        {
          original: 'Je crois qu’elle vient ce soir.',
          transformed: 'Je ne crois pas qu’elle vienne ce soir.',
          translation: 'I think she’s coming tonight. → I don’t think she’s coming tonight.',
        },
        {
          original: 'Il est sûr que la réforme passera.',
          transformed: 'Il n’est pas sûr que la réforme passe.',
          translation: 'It’s certain the reform will pass. → It’s not certain the reform will pass.',
        },
        {
          original: 'Je trouve que ce projet est ambitieux.',
          transformed: 'Je ne trouve pas que ce projet soit ambitieux.',
          translation: 'I find this project ambitious. → I don’t find this project ambitious.',
        },
        {
          original: 'Il est évident que les chiffres sont bons.',
          transformed: 'Il n’est pas évident que les chiffres soient bons.',
          translation: 'It’s obvious the figures are good. → It’s not obvious the figures are good.',
        },
      ],
      explanation:
        'Negating an opinion or certainty introduces doubt → the verb in the subordinate clause shifts to subjunctive.',
    },
    {
      id: 'l41-e3',
      type: 'fill_blank',
      question:
        'Fill in a HEDGING adverb that fits the sentence. «Je suis ___ d’accord avec vous, mais j’ai quelques réserves.» (choose: tout à fait / pas tout à fait / absolument)',
      correct_answer: 'pas tout à fait',
      explanation:
        '«Pas tout à fait d’accord» = «not entirely in agreement» — the classic French hedged disagreement. «Tout à fait» or «absolument» would mean full agreement, which contradicts the «mais».',
      hints: ['The «mais j’ai quelques réserves» signals partial disagreement → hedged version.'],
    },
    {
      id: 'l41-e4',
      type: 'register_sort',
      question:
        'Sort each opinion expression by its certainty LEVEL: HIGH (indicatif), MEDIUM (indicatif), LOW (subjonctif).',
      categories: ['HIGH', 'MEDIUM', 'LOW'],
      items: [
        { expression: 'Il est certain que…', correct_category: 'HIGH', explanation: 'Absolute certainty → ind.' },
        { expression: 'Il est évident que…', correct_category: 'HIGH', explanation: 'Self-evident → ind.' },
        { expression: 'Il est clair que…', correct_category: 'HIGH', explanation: 'Clear → ind.' },
        { expression: 'Il est probable que…', correct_category: 'MEDIUM', explanation: 'Likely (>50%) → ind.' },
        { expression: 'Il est vraisemblable que…', correct_category: 'MEDIUM', explanation: 'Plausible (>50%) → ind.' },
        { expression: 'Il est possible que…', correct_category: 'LOW', explanation: 'Possible (≤50%) → subj.' },
        { expression: 'Il se peut que…', correct_category: 'LOW', explanation: 'May be → subj.' },
        { expression: 'Il est peu probable que…', correct_category: 'LOW', explanation: 'Unlikely → subj.' },
        { expression: 'Il est douteux que…', correct_category: 'LOW', explanation: 'Doubtful → subj.' },
        { expression: 'Il est impossible que…', correct_category: 'LOW', explanation: 'Impossible → subj.' },
      ],
    },
    {
      id: 'l41-e5',
      type: 'rewrite',
      question:
        'Soften each blunt assertion by adding hedging and/or polite-disagreement structure.',
      instruction_type: 'relative_clause',
      items: [
        {
          original: 'Vous avez tort.',
          expected: 'Je ne suis pas sûr(e) que vous ayez raison sur ce point.',
          hint: 'avoid direct «tort»; use negated certainty + restriction',
          explanation:
            'Direct «vous avez tort» is socially aggressive. The hedged version achieves the same disagreement without the confrontation.',
        },
        {
          original: 'Ce projet est mauvais.',
          expected: 'J’ai des réserves sur ce projet ; il me semble plutôt discutable.',
          hint: 'avoir des réserves sur + cela me semble discutable',
          explanation: '«Réserves» + «discutable» softens a flat «mauvais» into a debatable position.',
        },
        {
          original: 'Vous ne comprenez pas la situation.',
          expected: 'Je comprends votre point, mais je vois les choses légèrement différemment.',
          hint: 'acknowledge + hedge',
          explanation:
            'Accusing the listener of not understanding is socially explosive. The reframe puts the disagreement on perspective, not capability.',
        },
        {
          original: 'C’est faux.',
          expected: 'D’une certaine manière, ce n’est pas tout à fait exact, à mon avis.',
          hint: 'd’une certaine manière + pas tout à fait + à mon avis',
          explanation: 'Three hedging moves convert a confrontational «c’est faux» into educated debate register.',
        },
      ],
    },
    {
      id: 'l41-e6',
      type: 'error_correction',
      question:
        'Each sentence has a mood error after a certainty / opinion frame. Rewrite it correctly.',
      items: [
        {
          incorrect: 'Il est certain qu’il ait raison.',
          correct: 'Il est certain qu’il a raison.',
          explanation: '«Il est certain que» → indicative.',
        },
        {
          incorrect: 'Il est possible qu’il a raison.',
          correct: 'Il est possible qu’il ait raison.',
          explanation: '«Il est possible que» → subjunctive.',
        },
        {
          incorrect: 'Je ne pense pas qu’il a le temps.',
          correct: 'Je ne pense pas qu’il ait le temps.',
          explanation: 'Negated «penser que» → subjunctive.',
        },
        {
          incorrect: 'À mon avis, ce serait dommage qu’il vient pas.',
          correct: 'À mon avis, ce serait dommage qu’il ne vienne pas.',
          explanation:
            '«Dommage que» triggers the subjunctive («vienne») and «ne pas» must wrap correctly around the verb.',
        },
        {
          incorrect: 'Il est peu probable qu’il viendra.',
          correct: 'Il est peu probable qu’il vienne.',
          explanation: '«Peu probable que» → subjunctive «vienne», not the futur «viendra».',
        },
      ],
    },
    {
      id: 'l41-e7',
      type: 'translation',
      question: 'Translate, paying attention to mood after each opinion/probability frame.',
      direction: 'en_to_fr',
      correct_answer: [
        'Il est certain que la réforme passera cette année.',
        'Il est peu probable qu’il accepte la proposition.',
        'Je ne pense pas que ce soit une bonne idée.',
        'À mon avis, ce serait dommage de ne pas essayer.',
        'Cela me semble discutable, à vrai dire.',
      ],
      explanation:
        'Certainty → ind. Improbability → subj. Negated opinion → subj. Personal opinion (affirm.) → ind. Hedged judgment → ind. Match each to its mood.',
    },
    {
      id: 'l41-e8',
      type: 'matching',
      question:
        'Match each polite-disagreement opener to its function.',
      pairs: [
        { french: 'Je vois votre point, mais…', english: 'acknowledge before push-back' },
        { french: 'Cela dit, …', english: 'transition / pivot to your view' },
        { french: 'J’ai des réserves sur…', english: 'targeted disagreement (specific)' },
        { french: 'Cela me semble discutable.', english: 'frame a claim as debatable' },
        { french: 'D’une certaine manière, …', english: 'partial agreement / hedge' },
        { french: 'Je vois les choses différemment.', english: 'explicit but soft disagreement' },
      ],
      explanation:
        'Together, these openers give you a graduated toolkit for educated disagreement — from soft acknowledgment to specific reservation.',
    },
    {
      id: 'l41-e9',
      type: 'multiple_choice',
      question:
        'Which version of this opinion sentence is GRAMMATICAL and naturally hedged?',
      options: [
        'Je crois pas que tu as tort, mais j’ai des réserves.',
        'Je ne crois pas que tu aies tort, mais j’ai des réserves.',
        'Je ne crois pas que tu as tort, mais j’ai des réserves.',
        'Je ne crois pas que tu auras tort, mais j’ai des réserves.',
      ],
      correct_answer: 'Je ne crois pas que tu aies tort, mais j’ai des réserves.',
      explanation:
        'Three corrections in one: (1) keep «ne» for written/educated register; (2) negated «croire que» → subjunctive «aies»; (3) avoir + tort → present, not futur.',
    },
    {
      id: 'l41-e10',
      type: 'speaking_prompt',
      question:
        'Express a nuanced view on something you care about (work culture, social media, urban living, education reform, climate). In 5 sentences, use: TWO certainty frames (one positive «il est certain/probable que» + one doubt «il est possible/peu probable que»), TWO personal-opinion frames (one affirmative, one negated), and ONE polite-disagreement phrase as if responding to an imagined interlocutor.',
      model_answer:
        'À mon avis, le télétravail a transformé en profondeur notre rapport au temps. Il est certain que beaucoup de salariés ont gagné en flexibilité depuis 2020. Cela dit, je ne pense pas que toutes les entreprises soient prêtes à l’étendre indéfiniment. Il est peu probable que le modèle 100% à distance devienne la norme — la dimension collective du travail reste essentielle. Je comprends ceux qui voudraient revenir au tout-présentiel, mais j’ai des réserves : on perdrait ce que la souplesse a apporté.',
      translation:
        'In my opinion, remote work has profoundly transformed our relationship with time. It’s certain that many employees have gained flexibility since 2020. That said, I don’t think every company is ready to extend it indefinitely. It’s unlikely the 100%-remote model will become the norm — the collective dimension of work remains essential. I understand those who would like to return to fully on-site, but I have reservations: we’d lose what flexibility brought.',
      tip: 'Notice the mood flips: «il est certain que… ont gagné» (ind), «je ne pense pas que… soient» (subj), «il est peu probable que… devienne» (subj), «j’ai des réserves» (closing nuance). That five-part pattern is the B1 opinion register in writing and speech.',
    },
  ],
}

const lesson42: IntermediateLessonData = {
  id: 42,
  title: 'B1 Capstone',
  title_fr: 'Consolidation B1',
  level: 'B1',
  description:
    'Integrate every B1 structure — subjunctive, conditional, si clauses, plus-que-parfait, relative pronouns, reported speech, passive, gerund, causative, connectors, opinion — in a high-stakes three-person workplace meeting.',
  dialogue: {
    title: 'Réunion de cadrage — projet client',
    context:
      'A 45-minute alignment meeting at a French consulting firm. Frédérique (project director), Mathis (team leader), and Élise (client representative) decide whether to launch a premium service module on the originally agreed schedule. Every major B1 structure surfaces naturally: subjunctive, conditional, all three si types, plus-que-parfait, relative clauses (qui, que, dont, où), reported speech, the passive, logical connectors, and nuanced opinion.',
    exchanges: [
      {
        speaker: 'Frédérique',
        french: 'Bon, on a 45 minutes. Élise, je voulais qu’on se voie en personne parce qu’il faut qu’on prenne une décision aujourd’hui sur le module premium.',
        english: 'OK, we have 45 minutes. Élise, I wanted us to meet in person because we need to make a decision today on the premium module.',
        pronunciation: 'bohn, ohn nah kah-rahnt-SAHNK mee-NEWT. ay-LEEZ, zhuh voo-LAY kohn suh VWAH ahn pair-SOHN pars-keel foh kohn pren ewn day-see-ZYOHN oh-zhoor-DWEE sewr luh moh-DEWL pruh-MYUM',
      },
      {
        speaker: 'Élise',
        french: 'Bien sûr. Avant qu’on entre dans le détail, j’aimerais qu’on revienne sur ce qui avait été décidé en juin.',
        english: 'Of course. Before we get into the detail, I’d like us to revisit what had been decided in June.',
        pronunciation: 'byan SEWR. ah-VAHN kohn nahntr dahn luh day-TAY, zhem-RAY kohn ruh-VYEN sewr suh kee ah-VAY ay-TAY day-see-DAY ahn ZHWAN',
      },
      {
        speaker: 'Mathis',
        french: 'À l’époque, nous avions convenu que le module serait lancé au quatrième trimestre, sous réserve des tests utilisateurs.',
        english: 'At the time, we’d agreed that the module would be launched in Q4, subject to user testing.',
        pronunciation: 'ah lay-POHK, noo zah-VYOHN kohn-vuh-NEW kuh luh moh-DEWL suh-RAY lahn-SAY oh kah-tree-EM tree-MESTR, soo ray-ZAIRV day TEST ew-tee-lee-zah-TURR',
      },
      {
        speaker: 'Frédérique',
        french: 'Exactement. Et depuis, plusieurs éléments ont changé, ce qui nous oblige à revoir notre approche en profondeur.',
        english: 'Exactly. And since then, several things have changed, which forces us to rethink our approach in depth.',
        pronunciation: 'eg-zak-tuh-MAHN. ay duh-PWEE, ploo-zyur zay-luh-MAHN ohn shahn-ZHAY, suh kee noo zoh-BLEEZH ah ruh-VWAR notr ah-PROHSH ahn proh-fohn-DURR',
      },
      {
        speaker: 'Élise',
        french: 'Je vois. Quoi qu’il en soit, je tiens à ce que nous gardions un calendrier précis, même si certaines étapes doivent être ajustées.',
        english: 'I see. Whatever the case, I really want us to keep a precise schedule, even if certain stages have to be adjusted.',
        pronunciation: 'zhuh VWAH. kwah keel ahn SWAH, zhuh tyan ah suh kuh noo gar-DYOHN ahn kah-lahn-DRYAY pray-SEE, mem see sair-TEN ay-TAHP dwahv etr ah-zhews-TAY',
      },
      {
        speaker: 'Mathis',
        french: 'Tout à fait. Cela dit, j’ai des réserves sur la version actuelle, dans la mesure où elle ne tient pas compte des retours que nous avons reçus en septembre.',
        english: 'Absolutely. That said, I have reservations about the current version, insofar as it doesn’t take into account the feedback we received in September.',
        pronunciation: 'too tah FET. suh-lah DEE, zhay day ray-ZAIRV sewr lah vair-SYOHN ak-TEW-EL, dahn lah muh-ZEWR oo el nuh tyan pah kohnt day ruh-TOOR kuh noo zah-VOHN ruh-SEW ahn sep-TAHMBR',
      },
      {
        speaker: 'Élise',
        french: 'Auriez-vous un exemple concret ?',
        english: 'Would you have a concrete example?',
        pronunciation: 'oh-RYAY voo ahn neg-ZAHMPL kohn-KRAY',
      },
      {
        speaker: 'Mathis',
        french: 'Oui. Le module dont nous parlions hier a été testé la semaine dernière par un groupe de cinq clients que nous avions sélectionnés. Trois nous ont dit qu’ils ne comprenaient pas la navigation.',
        english: 'Yes. The module we were discussing yesterday was tested last week by a group of five clients we had selected. Three told us they didn’t understand the navigation.',
        pronunciation: 'wee. luh moh-DEWL dohn noo par-LYOHN yair ah ay-TAY tes-TAY lah suh-MEN dair-NYAIR par ahn GROOP duh sahnk klee-AHN kuh noo zah-VYOHN say-lek-syoh-NAY. twah noo zohn dee keel nuh kohn-pruh-NAY pah lah nah-vee-gah-SYOHN',
      },
      {
        speaker: 'Frédérique',
        french: 'Donc, si nous lancions le module tel quel, nous risquerions de gros problèmes de satisfaction dès la première semaine.',
        english: 'So, if we launched the module as is, we would run major satisfaction problems from week one.',
        pronunciation: 'dohnk, see noo lahn-SYOHN luh moh-DEWL tel KEL, noo rees-kuh-RYOHN duh GROH proh-BLEM duh sah-tees-fak-SYOHN day lah pruh-MYAIR suh-MEN',
      },
      {
        speaker: 'Élise',
        french: 'Et si nous avions reçu ces retours en juin, nous aurions pu adapter le module beaucoup plus tôt — c’est dommage.',
        english: 'And if we had received this feedback in June, we could have adapted the module much earlier — it’s a shame.',
        pronunciation: 'ay see noo zah-VYOHN ruh-SEW say ruh-TOOR ahn ZHWAN, noo zoh-RYOHN PEW ah-dap-TAY luh moh-DEWL boh-KOO ploo TOH — say doh-MAHZH',
      },
      {
        speaker: 'Frédérique',
        french: 'Force est de constater que notre cycle de feedback est trop long. Il faudrait que nous le réduisions à six semaines maximum.',
        english: 'One must acknowledge that our feedback cycle is too long. We’d need to reduce it to six weeks maximum.',
        pronunciation: 'FORSS ay duh kohn-stah-TAY kuh notr SEEKL duh feed-BAK ay troh LOHN. eel foh-DRAY kuh noo luh ray-dwee-ZYOHN ah see suh-MEN mak-see-MUM',
      },
      {
        speaker: 'Mathis',
        french: 'Bien que la situation soit délicate, je ne pense pas qu’elle soit insurmontable. En faisant valider deux variantes par l’équipe UX d’ici vendredi, on gagnerait dix jours.',
        english: 'Although the situation is delicate, I don’t think it’s insurmountable. By having two variants approved by the UX team by Friday, we’d gain ten days.',
        pronunciation: 'byan kuh lah see-tew-ah-SYOHN swah day-lee-KAHT, zhuh nuh pahnss pah kel swah an-sewr-mohn-TAHBL. ahn fuh-ZAHN vah-lee-DAY duh vah-RYAHNT par lay-KEEP ew-IKS dee-SEE vahn-druh-DEE, ohn gan-yuh-RAY dee ZHOOR',
      },
      {
        speaker: 'Élise',
        french: 'À cet égard, je vois les choses plutôt positivement, à condition que vous me garantissiez une livraison avant Noël.',
        english: 'In that regard, I see things rather positively, provided you guarantee me a delivery before Christmas.',
        pronunciation: 'ah set ay-GAR, zhuh vwah lay shohz plew-TOH poh-zee-teev-MAHN, ah kohn-dee-SYOHN kuh voo muh gah-rahn-tee-SYAY ewn lee-vray-ZYOHN ah-VAHN noh-EL',
      },
      {
        speaker: 'Frédérique',
        french: 'Nous nous y engageons d’ores et déjà. Par conséquent, il faudrait recadrer les priorités dès demain matin.',
        english: 'We commit to that as of now. Consequently, we’d need to refocus priorities first thing tomorrow.',
        pronunciation: 'noo noo zee ahn-gah-ZHOHN dorz ay day-ZHAH. par kohn-say-KAHN, eel foh-DRAY ruh-kah-DRAY lay pree-oh-ree-TAY day duh-MAHN mah-TAHN',
      },
      {
        speaker: 'Mathis',
        french: 'Je propose qu’on programme une session avec l’équipe UX dès demain, où nous présenterions trois options de navigation.',
        english: 'I propose we schedule a session with the UX team starting tomorrow, where we’d present three navigation options.',
        pronunciation: 'zhuh proh-POHZ kohn proh-GRAHM ewn seh-SYOHN ah-VEK lay-KEEP ew-IKS day duh-MAHN, oo noo pray-zahn-tuh-RYOHN twah zop-SYOHN duh nah-vee-gah-SYOHN',
      },
      {
        speaker: 'Élise',
        french: 'Parfait. Il n’en reste pas moins que la décision finale me revient, comme nous en étions convenus en juin.',
        english: 'Perfect. Nonetheless, the final decision is mine, as we had agreed in June.',
        pronunciation: 'par-FAY. eel nahn rest pah MWAN kuh lah day-see-ZYOHN fee-NAHL muh ruh-VYAN, kohm noo zahn ay-TYOHN kohn-vuh-NEW ahn ZHWAN',
      },
      {
        speaker: 'Frédérique',
        french: 'Bien entendu. Toujours est-il que sans votre validation écrite vendredi, rien ne bouge.',
        english: 'Of course. The fact remains that without your written sign-off Friday, nothing moves.',
        pronunciation: 'byan ahn-tahn-DEW. too-ZHOOR ay-teel kuh sahn votr vah-lee-dah-SYOHN ay-KREET vahn-druh-DEE, ree-AHN nuh BOOZH',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Capstone integration — six core B1 structures in one conversation',
      explanation:
        'B1 is the level at which French structures stop appearing one-at-a-time and start braiding together. In a single 17-exchange meeting, the dialogue uses: SUBJUNCTIF (il faut que, tenir à ce que, bien que, à condition que, je propose que, ne pas penser que); CONDITIONNEL PRÉSENT (auriez-vous, risquerions, faudrait, gagnerait, présenterions); the THREE SI TYPES (Type 1 implicit in «sans votre validation… rien ne bouge», Type 2 «si nous lancions… nous risquerions», Type 3 «si nous avions reçu… nous aurions pu»); PLUS-QUE-PARFAIT («ce qui avait été décidé», «nous avions sélectionnés», «nous étions convenus»); RELATIVE PRONOUNS (qui, que, dont, où — all four within the dialogue); REPORTED SPEECH («trois nous ont dit qu’ils ne comprenaient pas»).',
      examples: [
        'Subjonctif: «Quoi qu’il en soit, je tiens à ce que nous gardions un calendrier précis.»',
        'Conditionnel: «Si nous lancions le module tel quel, nous risquerions de gros problèmes.»',
        'Si Type 3: «Si nous avions reçu ces retours en juin, nous aurions pu adapter le module.»',
        'Relatives (qui/dont): «ce qui nous oblige à revoir», «le module dont nous parlions».',
        'Reported speech: «trois nous ont dit qu’ils ne comprenaient pas la navigation» (présent → imparfait).',
      ],
      tip:
        'Listen for the rhythm of layered structures in B1 French — speakers don’t use one B1 form per sentence; they use two or three. The capstone marker isn’t any single grammar point. It is comfort moving between them within the same paragraph.',
    },
    {
      title: 'Advanced discourse particles — bridging toward B2',
      explanation:
        'A small set of fixed expressions function as «discourse hinges» in B1+ French: «quoi qu’il en soit» (whatever the case), «dans la mesure où» (insofar as), «à cet égard» (in this regard), «force est de constater que» (one must acknowledge), «il n’en reste pas moins que» (nonetheless), «toujours est-il que» (the fact remains that), «en l’occurrence» (in this case), «d’autant plus que» (all the more so since), «d’ores et déjà» (already, henceforth), «en définitive» (in the end), «au demeurant» (besides). These appear in DELF B1 reading texts and elevate spoken production to the threshold of B2.',
      examples: [
        '«Quoi qu’il en soit, je tiens à ce que nous gardions un calendrier précis.»',
        '«Dans la mesure où elle ne tient pas compte des retours…»',
        '«Force est de constater que notre cycle est trop long.»',
        '«Il n’en reste pas moins que la décision finale me revient.»',
        '«Toujours est-il que sans votre validation, rien ne bouge.»',
      ],
      tip:
        'These expressions are syntactically frozen — you can’t conjugate or modify them. Memorise each as a fixed phrase, and use one per paragraph at most. They are punctuation, not content.',
    },
    {
      title: 'The B1 production checklist — what examiners actually listen for',
      explanation:
        'On the DELF B1 production orale, examiners look for SIX competencies, not for any single grammar point: (1) sustaining 5+ minutes of connected speech on a familiar topic without long pauses; (2) using at least one si clause correctly; (3) at least one subjunctive trigger with the correct mood; (4) at least one nuanced opinion phrase (à mon avis, je ne pense pas que, j’ai des réserves); (5) one logical connector beyond «et» and «mais» (donc, parce que, bien que, en revanche); (6) appropriate register for the situation. The capstone dialogue showcases all six in 17 turns.',
      examples: [
        'Connected speech: each speaker uses 2–4 sentences per turn, not 1.',
        'Si clause: «si nous lancions… nous risquerions» and «si nous avions reçu… nous aurions pu».',
        'Subjunctive trigger: «il faut qu’on prenne», «bien que la situation soit délicate».',
        'Nuanced opinion: «j’ai des réserves», «je vois les choses positivement».',
        'Logical connectors: «cela dit», «par conséquent», «force est de constater», «bien que».',
        'Register: educated professional (vouvoyer; conditional in requests; full negations with «ne»).',
      ],
      tip:
        'In your own DELF B1 oral, plan to hit the six competencies deliberately — don’t rely on luck. Two minutes of preparation: «which si type will I use? which subjunctive trigger? which opinion frame? which connector?» Mentally check each before you start speaking.',
    },
  ],
  vocabulary: [
    { french: 'quoi qu’il en soit', english: 'whatever the case', category: 'Advanced discourse', note: 'fixed phrase' },
    { french: 'dans la mesure où', english: 'insofar as', category: 'Advanced discourse' },
    { french: 'à cet égard', english: 'in this regard', category: 'Advanced discourse' },
    { french: 'force est de constater que', english: 'one must acknowledge that', category: 'Advanced discourse' },
    { french: 'il n’en reste pas moins que', english: 'nonetheless', category: 'Advanced discourse' },
    { french: 'toujours est-il que', english: 'the fact remains that', category: 'Advanced discourse' },
    { french: 'en l’occurrence', english: 'in this case', category: 'Advanced discourse' },
    { french: 'd’autant plus que', english: 'all the more so since', category: 'Advanced discourse' },
    { french: 'd’ores et déjà', english: 'already / henceforth', category: 'Advanced discourse' },
    { french: 'en définitive', english: 'in the end / ultimately', category: 'Advanced discourse' },
    { french: 'au demeurant', english: 'besides / moreover', category: 'Advanced discourse' },
    { french: 'sous réserve de', english: 'subject to / pending', category: 'Workplace' },
    { french: 'recadrer (les priorités)', english: 'to refocus (priorities)', category: 'Workplace' },
    { french: 's’engager à', english: 'to commit to', category: 'Workplace' },
    { french: 'valider', english: 'to approve / sign off', category: 'Workplace' },
    { french: 'une livraison', english: 'a delivery / deliverable', category: 'Workplace' },
    { french: 'un cycle de feedback', english: 'a feedback loop', category: 'Workplace' },
    { french: 'un retour utilisateur', english: 'user feedback', category: 'Workplace' },
    { french: 'un module', english: 'a module', category: 'Workplace' },
    { french: 'une variante', english: 'a variant', category: 'Workplace' },
    { french: 'tel quel / telle quelle', english: 'as is', category: 'Workplace expression' },
    { french: 'tenir compte de', english: 'to take into account', category: 'Workplace expression' },
    { french: 'd’ici (+ time)', english: 'by (a given time)', category: 'Time expression', example: 'd’ici vendredi = by Friday' },
    { french: 'délicat(e)', english: 'delicate / tricky', category: 'Adjective' },
    { french: 'insurmontable', english: 'insurmountable', category: 'Adjective' },
    { french: 'bien entendu', english: 'of course', category: 'Discourse marker' },
    { french: 'cela dit', english: 'that said', category: 'Discourse marker' },
    { french: 'à vrai dire', english: 'to be honest', category: 'Discourse marker' },
  ],
  culturalNotes: [
    {
      title: 'Le DELF B1 et la nationalité française',
      content:
        'The DELF B1 is the minimum French-language level required for adult naturalisation in France since 2020 (replacing the earlier B1 oral exam). Reaching B1 isn’t just an academic milestone — it is a civic threshold. For learners pursuing French nationality, this lesson’s skills (sustaining a meeting, defending an opinion, reporting speech) directly map to the kinds of situations the citizenship interview tests.',
    },
    {
      title: 'La culture de la réunion à la française',
      content:
        'French professional meetings («réunions») are formal events: an agenda is circulated, hierarchy shapes who speaks first, decisions are recorded in a written «compte-rendu» that everyone signs off. Saying «on fait un point» (a quick check-in) is different from «on se réunit» (a formal meeting). The capstone dialogue is recognisably a réunion de cadrage — a scoping meeting, one of the most important moments in a French project lifecycle.',
    },
    {
      title: 'L’Alliance Française dans le monde',
      content:
        'The Alliance Française network — 832 centres in 132 countries — is the French state’s primary soft-power instrument for spreading French language and culture. Most DELF/DALF exams worldwide are administered through Alliance Française centres, which also host cultural events, libraries, and conversation cafés. Many B1 learners have walked through their doors at least once.',
    },
    {
      title: 'Ce que B2 apportera',
      content:
        'B2 builds on B1 with literary register (passé simple in narrative reading), the full subjunctive system (including subjonctif passé «qu’il ait fait»), complex pronoun sequences («je le lui ai donné»), the ability to appreciate irony and ambiguity in native French speech, and engagement with cinema, contemporary fiction, and political discourse on their own terms. It is the level where French becomes truly pleasurable to consume rather than effortful.',
    },
    {
      title: 'Le français — une langue mondiale',
      content:
        'There are around 321 million French speakers worldwide. French is an official language in 29 countries across five continents, second only to English in number of official-language jurisdictions. It is the second most-studied foreign language globally. Knowing French at B1 opens doors across West and North Africa, the Caribbean, Quebec, the Indian Ocean, the Pacific, and Europe — far beyond Hexagonal France.',
    },
  ],
  exercises: [
    {
      id: 'l42-e1',
      type: 'error_correction',
      question:
        'Full B1 grammar audit: each sentence contains exactly one error across the B1 structures. Rewrite each correctly.',
      items: [
        {
          incorrect: 'Il faut que tu viens à la réunion demain.',
          correct: 'Il faut que tu viennes à la réunion demain.',
          explanation: '«Il faut que» triggers subjunctive. venir → viennes.',
        },
        {
          incorrect: 'Si j’aurais le temps, je viendrais.',
          correct: 'Si j’avais le temps, je viendrais.',
          explanation: 'Never «si + conditionnel». Type 2 = si + imparfait → conditionnel.',
        },
        {
          incorrect: 'Le rapport que j’ai écrit hier a été envoyé ce matin.',
          correct: 'Le rapport que j’ai écrit hier a été envoyé ce matin.',
          explanation: 'NO error: «écrit» (masc. sg.) agrees with «le rapport» (masc. sg.) → correct. Trick item.',
        },
        {
          incorrect: 'J’espère qu’elle vienne demain.',
          correct: 'J’espère qu’elle viendra demain.',
          explanation: '«Espérer que» → indicatif. Use futur «viendra».',
        },
        {
          incorrect: 'Quand je suis arrivé, il a déjà parti.',
          correct: 'Quand je suis arrivé, il était déjà parti.',
          explanation: 'Prior past event → plus-que-parfait «était parti».',
        },
        {
          incorrect: 'Je l’ai faite refaire par un couturier.',
          correct: 'Je l’ai fait refaire par un couturier.',
          explanation: '«Fait» is INVARIABLE in the causative — no -e.',
        },
        {
          incorrect: 'Bien qu’il est fatigué, il continue.',
          correct: 'Bien qu’il soit fatigué, il continue.',
          explanation: '«Bien que» triggers subjunctive «soit».',
        },
        {
          incorrect: 'Il m’a dit qu’il vient demain.',
          correct: 'Il m’a dit qu’il venait le lendemain.',
          explanation: 'Reported speech: présent → imparfait; demain → le lendemain.',
        },
        {
          incorrect: 'La place est entourée par des arbres.',
          correct: 'La place est entourée d’arbres.',
          explanation: '«Entouré» = state → de, not par.',
        },
        {
          incorrect: 'Le café où je t’ai parlé hier a fermé.',
          correct: 'Le café dont je t’ai parlé hier a fermé.',
          explanation: '«Parler de» → dont, not où.',
        },
      ],
    },
    {
      id: 'l42-e2',
      type: 'rewrite',
      question:
        'Transform this 6-line direct dialogue into a paragraph of indirect (reported) speech. Reporting verbs in the past.',
      instruction_type: 'reported_speech',
      items: [
        {
          original: 'Direct: « J’ai signé hier. Je viendrai demain. Tu pourras venir aussi ? Apporte les chiffres ! »',
          expected:
            'Il a dit qu’il avait signé la veille et qu’il viendrait le lendemain. Il a demandé si je pourrais venir aussi et m’a demandé d’apporter les chiffres.',
          hint: 'PC → PQP, futur → cond., yes/no → si, command → de + inf, demain → le lendemain.',
          explanation:
            'Four reported moves in one transformation: statement (PC → PQP), statement (futur → cond.), yes/no question (si + cond.), command (de + inf.).',
        },
      ],
    },
    {
      id: 'l42-e3',
      type: 'rewrite',
      question:
        'Take each Type 1 si sentence and rewrite it as Type 2, then as Type 3. (For each item, expected answer combines both transformations.)',
      instruction_type: 'si_clause',
      items: [
        {
          original: 'Si tu viens demain, on ira au cinéma.',
          expected:
            'Type 2: Si tu venais demain, on irait au cinéma. — Type 3: Si tu étais venu hier, on serait allés au cinéma.',
          hint: 'Type 1 → présent/futur. Type 2 → imparfait/conditionnel. Type 3 → PQP/cond. passé.',
          explanation: 'The same content shifts across the three si types with the corresponding tense pairings.',
        },
        {
          original: 'Si j’ai le temps, je finirai le rapport.',
          expected:
            'Type 2: Si j’avais le temps, je finirais le rapport. — Type 3: Si j’avais eu le temps, j’aurais fini le rapport.',
          hint: 'avoir as si-clause verb across three types',
          explanation: 'Note PQP «avais eu» for Type 3, not «avais».',
        },
        {
          original: 'Si elle accepte l’offre, elle déménagera à Lyon.',
          expected:
            'Type 2: Si elle acceptait l’offre, elle déménagerait à Lyon. — Type 3: Si elle avait accepté l’offre, elle aurait déménagé à Lyon.',
          hint: 'accepter / déménager across three types',
          explanation: 'déménager: futur «déménagera» → cond. «déménagerait» → cond. passé «aurait déménagé».',
        },
        {
          original: 'Si on travaille ce week-end, on rattrapera le retard.',
          expected:
            'Type 2: Si on travaillait ce week-end, on rattraperait le retard. — Type 3: Si on avait travaillé ce week-end, on aurait rattrapé le retard.',
          hint: 'travailler / rattraper across three types',
          explanation: 'Type 3 makes the counterfactual past explicit.',
        },
      ],
    },
    {
      id: 'l42-e4',
      type: 'fill_blank',
      question:
        'Fill in qui, que, où, or dont. «Le projet ___ nous parlons aujourd’hui est différent de celui ___ avait été présenté en juin.»',
      correct_answer: 'dont / qui',
      explanation:
        'First blank: «parler de» → dont. Second blank: «celui [qui] avait été présenté» → qui (subject of the relative clause: «celui» does the action of being presented).',
      hints: ['parler DE → dont. After «celui», look at what follows: a passive verb → qui (subject).'],
    },
    {
      id: 'l42-e5',
      type: 'mood_choice',
      question:
        'Capstone 12-item mood test: indicatif or subjonctif?',
      items: [
        {
          sentence: 'Il faut que tu [BLANK] à l’heure.',
          verb: 'être',
          indicative_form: 'es',
          subjunctive_form: 'sois',
          correct_answer: 'subjunctive',
          trigger: 'il faut que',
          explanation: 'L27 trigger → subjonctif.',
        },
        {
          sentence: 'Je veux que nous [BLANK] le problème ensemble.',
          verb: 'régler',
          indicative_form: 'réglons',
          subjunctive_form: 'réglions',
          correct_answer: 'subjunctive',
          trigger: 'vouloir que',
          explanation: 'L28 will/desire trigger → subjonctif.',
        },
        {
          sentence: 'Bien qu’il [BLANK] fatigué, il continue.',
          verb: 'être',
          indicative_form: 'est',
          subjunctive_form: 'soit',
          correct_answer: 'subjunctive',
          trigger: 'bien que',
          explanation: 'L29 concessive conjunction → subjonctif.',
        },
        {
          sentence: 'J’espère qu’il [BLANK] à l’heure.',
          verb: 'venir',
          indicative_form: 'viendra',
          subjunctive_form: 'vienne',
          correct_answer: 'indicative',
          trigger: 'espérer que (exception)',
          explanation: 'L29 exception: «espérer que» → indicatif (futur).',
        },
        {
          sentence: 'Je crois qu’elle [BLANK] raison.',
          verb: 'avoir',
          indicative_form: 'a',
          subjunctive_form: 'ait',
          correct_answer: 'indicative',
          trigger: 'croire que (affirmatif)',
          explanation: 'L41 affirmative opinion → indicatif.',
        },
        {
          sentence: 'Je ne crois pas qu’elle [BLANK] raison.',
          verb: 'avoir',
          indicative_form: 'a',
          subjunctive_form: 'ait',
          correct_answer: 'subjunctive',
          trigger: 'ne pas croire que',
          explanation: 'L41 negated opinion → subjonctif.',
        },
        {
          sentence: 'Il est certain qu’il [BLANK] présent demain.',
          verb: 'être',
          indicative_form: 'sera',
          subjunctive_form: 'soit',
          correct_answer: 'indicative',
          trigger: 'il est certain que',
          explanation: 'L41 high certainty → indicatif.',
        },
        {
          sentence: 'Il est peu probable qu’il [BLANK] présent demain.',
          verb: 'être',
          indicative_form: 'sera',
          subjunctive_form: 'soit',
          correct_answer: 'subjunctive',
          trigger: 'il est peu probable que',
          explanation: 'L41 improbability → subjonctif.',
        },
        {
          sentence: 'Avant que tu [BLANK], j’aimerais te dire quelque chose.',
          verb: 'partir',
          indicative_form: 'pars',
          subjunctive_form: 'partes',
          correct_answer: 'subjunctive',
          trigger: 'avant que',
          explanation: 'L29 subjunctive conjunction → subjonctif.',
        },
        {
          sentence: 'Après que tu [BLANK], j’ai fini le rapport.',
          verb: 'partir',
          indicative_form: 'es parti',
          subjunctive_form: 'sois parti',
          correct_answer: 'indicative',
          trigger: 'après que (modern usage)',
          explanation: 'L29 «après que» → indicatif in modern usage.',
        },
        {
          sentence: 'À condition que vous [BLANK] la livraison avant Noël.',
          verb: 'garantir',
          indicative_form: 'garantissez',
          subjunctive_form: 'garantissiez',
          correct_answer: 'subjunctive',
          trigger: 'à condition que',
          explanation: 'L31 subjunctive marker → subjonctif.',
        },
        {
          sentence: 'Il est probable que la réforme [BLANK] cette année.',
          verb: 'passer',
          indicative_form: 'passera',
          subjunctive_form: 'passe',
          correct_answer: 'indicative',
          trigger: 'il est probable que',
          explanation: 'L41 probability (>50%) → indicatif (futur).',
        },
      ],
    },
    {
      id: 'l42-e6',
      type: 'rewrite',
      question:
        'Rewrite each sentence using the gerund (en + present participle).',
      instruction_type: 'gerund',
      items: [
        {
          original: 'Si vous coupez les notifications, vous reprendrez le contrôle.',
          expected: 'En coupant les notifications, vous reprendrez le contrôle.',
          hint: 'condition gerund',
          explanation: 'Si + présent → en + gérondif when the subject is the same and the condition is direct.',
        },
        {
          original: 'Il a réussi parce qu’il a beaucoup travaillé.',
          expected: 'Il a réussi en travaillant beaucoup.',
          hint: 'manner gerund',
          explanation: 'Cause/manner with same subject → en + gérondif.',
        },
        {
          original: 'Elle écoute la radio quand elle prépare le dîner.',
          expected: 'Elle écoute la radio en préparant le dîner.',
          hint: 'simultaneous gerund',
          explanation: 'Two actions, same subject, same moment → gérondif.',
        },
        {
          original: 'Même si je comprends ta position, je ne suis pas d’accord.',
          expected: 'Tout en comprenant ta position, je ne suis pas d’accord.',
          hint: 'concessive gerund (tout en)',
          explanation: '«Tout en + gérondif» = concession with same subject.',
        },
      ],
    },
    {
      id: 'l42-e7',
      type: 'rewrite',
      question:
        'Rewrite each sentence in the causative form (faire / se faire / laisser + infinitif).',
      instruction_type: 'causative',
      items: [
        {
          original: 'Je répare ma voiture moi-même.',
          expected: 'Je fais réparer ma voiture.',
          hint: 'faire + inf.',
          explanation: 'Standard causative: having someone else do it.',
        },
        {
          original: 'On lui a coupé les cheveux ce matin.',
          expected: 'Elle s’est fait couper les cheveux ce matin.',
          hint: 'se faire + inf. (note: fait invariable)',
          explanation: 'Reflexive causative — and «fait» is invariable.',
        },
        {
          original: 'Le propriétaire autorise les artisans à entrer.',
          expected: 'Le propriétaire laisse les artisans entrer.',
          hint: 'laisser + inf.',
          explanation: '«Laisser + inf.» = let.',
        },
        {
          original: 'Quelqu’un lui a volé son téléphone dans le métro.',
          expected: 'Il s’est fait voler son téléphone dans le métro.',
          hint: 'se faire + inf. (negative)',
          explanation: '«Se faire voler» — the subject is on the receiving end.',
        },
      ],
    },
    {
      id: 'l42-e8',
      type: 'fill_blank',
      question:
        'Fill in the most appropriate logical connector from this list: parce que, donc, bien que, en revanche, par conséquent, du coup, pourtant, grâce à. «Le marché a baissé ; ___, les actions perdent de la valeur.»',
      correct_answer: ['par conséquent', 'donc'],
      explanation:
        'CONSEQUENCE family. «Par conséquent» is the formal choice; «donc» is the neutral choice. Either works depending on the register.',
      hints: ['Family = consequence. Formal register prefers «par conséquent».'],
    },
    {
      id: 'l42-e9',
      type: 'translation',
      question:
        'Translate this 6-sentence paragraph using B1 structures. Aim for: at least one subjunctive, one si clause, one relative clause, one logical connector, and one reported speech sentence.',
      direction: 'en_to_fr',
      correct_answer: [
        'À mon avis, il faut que nous prenions une décision rapidement, parce que le client attend une réponse.',
        'Si nous avions reçu les retours en juin, nous aurions pu adapter le module plus tôt.',
        'Le projet dont nous parlons aujourd’hui est différent de celui qui avait été présenté en juin.',
        'Mon collègue m’a dit qu’il viendrait à la réunion le lendemain.',
        'Bien que la situation soit délicate, je ne pense pas qu’elle soit insurmontable.',
        'Par conséquent, je propose que nous reprogrammions une session avec l’équipe UX.',
      ],
      explanation:
        'Each sentence integrates a different B1 structure: il faut que + subjonctif; Type 3 si; relative dont + qui; reported speech with tense shift; bien que + subj + negated opinion + subj; consequence connector + subjunctive trigger.',
    },
    {
      id: 'l42-e10',
      type: 'speaking_prompt',
      question:
        'Deliver a 90-second argument on a topic you care about, OR a workplace decision. Required ingredients: TWO different subjunctive triggers (one from L27–29, one from L41); ONE si clause of any type; ONE relative clause with «dont»; ONE conditional verb (politeness OR hypothesis); TWO logical connectors from different families; ONE nuanced opinion frame.',
      model_answer:
        'À mon avis, il faut que nous repensions complètement notre approche du télétravail. Beaucoup de salariés dont les fonctions le permettent vivent loin de leur bureau, parce que les loyers en ville sont devenus impossibles. Si on imposait un retour total au présentiel, on verrait beaucoup de démissions dès le premier mois. Cela dit, je ne pense pas que le modèle 100% à distance soit non plus la bonne solution. Il faudrait trouver un compromis — je proposerais trois jours en présentiel et deux jours à distance, avec une vraie flexibilité d’un mois sur l’autre. Bien que ce ne soit pas parfait, c’est, à mon sens, la voie la plus réaliste.',
      translation:
        'In my opinion, we need to completely rethink our approach to remote work. Many employees whose roles allow it live far from their office, because rents in the city have become impossible. If we forced a total return to on-site, we’d see many resignations from the first month. That said, I don’t think the 100%-remote model is the right solution either. We’d need to find a compromise — I’d suggest three days on site and two remote, with real flexibility from one month to the next. Although it’s not perfect, it is, in my view, the most realistic path.',
      tip: 'This is the B1 production format DELF examiners hear at the end of the level. The speaker maintains a clear position, layers nuance, and braids at least four B1 structures into a single connected speech. If you can deliver this comfortably in 90 seconds, you are ready for the exam — and for B2.',
    },
    {
      id: 'l42-e11',
      type: 'rewrite',
      question:
        'Combine each pair into a single sentence using the plus-que-parfait to mark the prior past event.',
      instruction_type: 'si_clause',
      items: [
        {
          original: 'Il est parti à 8 h. Je suis arrivé à 9 h.',
          expected: 'Quand je suis arrivé à 9 h, il était déjà parti à 8 h.',
          hint: 'Anchor (PC) + prior event (PQP).',
          explanation: 'The plus-que-parfait expresses what had already happened before the anchor.',
        },
        {
          original: 'Karim a vérifié les chiffres. La réunion a commencé.',
          expected: 'Quand la réunion a commencé, Karim avait déjà vérifié les chiffres.',
          hint: 'PC anchor + PQP prior.',
          explanation: 'The verification precedes the meeting start.',
        },
        {
          original: 'Tu m’as écrit. Je n’ai pas vu ton message.',
          expected: 'À ce moment-là, je n’avais pas vu que tu m’avais écrit.',
          hint: 'Two PQPs anchored by «à ce moment-là».',
          explanation: 'A moment-anchored sentence with double prior past.',
        },
      ],
    },
    {
      id: 'l42-e12',
      type: 'rewrite',
      question:
        'Rewrite each active sentence in the passive voice. Keep the tense; use par or de correctly.',
      instruction_type: 'passive',
      items: [
        {
          original: 'Les députés ont voté la loi à l’unanimité.',
          expected: 'La loi a été votée à l’unanimité par les députés.',
          hint: 'PC actif → PC passif + par',
          explanation: 'Action agent → par.',
        },
        {
          original: 'Un cabinet suisse rénovera la gare.',
          expected: 'La gare sera rénovée par un cabinet suisse.',
          hint: 'futur actif → futur passif',
          explanation: 'futur passif: «sera rénovée».',
        },
        {
          original: 'Des bâtiments anciens entourent la place.',
          expected: 'La place est entourée d’anciens bâtiments.',
          hint: 'state verb → de, not par',
          explanation: '«Entouré» = state → de.',
        },
        {
          original: 'Tout le quartier admire cette écrivaine.',
          expected: 'Cette écrivaine est admirée de tout le quartier.',
          hint: 'emotion/regard → de',
          explanation: '«Admiré» = emotion/regard → de.',
        },
      ],
    },
  ],
}

const richLessons: Partial<Record<number, IntermediateLessonData>> = {
  27: lesson27,
  28: lesson28,
  29: lesson29,
  30: lesson30,
  31: lesson31,
  32: lesson32,
  33: lesson33,
  34: lesson34,
  35: lesson35,
  36: lesson36,
  37: lesson37,
  38: lesson38,
  39: lesson39,
  40: lesson40,
  41: lesson41,
  42: lesson42,
}

export const intermediateLessonSummaries = [
  { order: 27, title: 'The Subjunctive I', title_fr: 'Le Subjonctif I', subtitle: 'Formation du subjonctif présent et obligation avec il faut que.', time: '50' },
  { order: 28, title: 'The Subjunctive II', title_fr: 'Le Subjonctif II', subtitle: 'Volonté, désir, préférence et règle du sujet différent.', time: '50' },
  { order: 29, title: 'The Subjunctive III', title_fr: 'Le Subjonctif III', subtitle: 'Émotion, doute, concession et exceptions à l’indicatif.', time: '55' },
  { order: 30, title: 'The Present Conditional', title_fr: 'Le Conditionnel Présent', subtitle: 'Politesse, conseil, hypothèse et conditionnel journalistique.', time: '50' },
  { order: 31, title: 'Si Clauses', title_fr: 'Les Phrases Hypothétiques', subtitle: 'Si type 1, type 2 et introduction au type 3.', time: '55' },
  { order: 32, title: 'The Pluperfect', title_fr: 'Le Plus-que-parfait', subtitle: 'Événements antérieurs dans un récit au passé.', time: '50' },
  { order: 33, title: 'The Past Conditional', title_fr: 'Le Conditionnel Passé', subtitle: 'Regrets, reproches et système complet du si type 3.', time: '55' },
  { order: 34, title: 'Relative Pronouns I', title_fr: 'Les Pronoms Relatifs I', subtitle: 'Qui et que pour enrichir les descriptions.', time: '50' },
  { order: 35, title: 'Relative Pronouns II', title_fr: 'Les Pronoms Relatifs II', subtitle: 'Où, dont et lequel comme enrichissement B1+.', time: '55' },
  { order: 36, title: 'Reported Speech', title_fr: 'Le Discours Indirect', subtitle: 'Rapporter des paroles, des questions et des ordres.', time: '55' },
  { order: 37, title: 'The Passive Voice', title_fr: 'La Voix Passive', subtitle: 'Être + participe passé dans les textes formels.', time: '50' },
  { order: 38, title: 'The Gerund', title_fr: 'Le Gérondif', subtitle: 'En + participe présent pour manière, simultanéité et condition.', time: '50' },
  { order: 39, title: 'Causative Faire', title_fr: 'Le Faire Causatif', subtitle: 'Faire faire, se faire et laisser dans la vie quotidienne.', time: '50' },
  { order: 40, title: 'Logical Connectors', title_fr: 'Les Connecteurs Logiques', subtitle: 'Cause, conséquence, concession et opposition.', time: '55' },
  { order: 41, title: 'Expressing Opinion & Nuance', title_fr: 'Exprimer son Opinion', subtitle: 'Certitude, doute, indicatif, subjonctif et désaccord poli.', time: '55' },
  { order: 42, title: 'B1 Capstone', title_fr: 'Consolidation B1', subtitle: 'Synthèse des structures B1 dans une réunion professionnelle.', time: '60' },
]

type LessonSeed = {
  id: number
  description: string
  context: string
  speakers: [string, string, string?]
  grammar: { title: string; explanation: string; examples: string[]; tip: string }[]
  coreVocab: { french: string; english: string; category: string; example?: string; note?: string }[]
  notes: { title: string; content: string }[]
  lines: string[]
}

const commonVocabulary = [
  { french: 'un enjeu', english: 'a stake / issue', category: 'Argumentation', example: 'Le vrai enjeu est la qualité du service.' },
  { french: 'un délai', english: 'a deadline', category: 'Travail', example: 'Nous avons un délai assez court.' },
  { french: 'une priorité', english: 'a priority', category: 'Travail', example: 'La communication reste une priorité.' },
  { french: 'un accord', english: 'an agreement', category: 'Négociation', example: 'Nous cherchons un accord réaliste.' },
  { french: 'un refus', english: 'a refusal', category: 'Négociation', example: 'Son refus a surpris l’équipe.' },
  { french: 'une condition', english: 'a condition', category: 'Hypothèse', example: 'Cette condition change le projet.' },
  { french: 'un compromis', english: 'a compromise', category: 'Négociation', example: 'Il faut trouver un compromis.' },
  { french: 'un compte-rendu', english: 'meeting minutes', category: 'Travail', example: 'Le compte-rendu résume les décisions.' },
  { french: 'un entretien', english: 'an interview / meeting', category: 'Travail', example: 'L’entretien a duré une heure.' },
  { french: 'un témoignage', english: 'a testimony', category: 'Médias', example: 'Le témoignage paraît sincère.' },
  { french: 'un article', english: 'an article', category: 'Médias', example: 'L’article explique le contexte.' },
  { french: 'un débat', english: 'a debate', category: 'Opinion', example: 'Le débat reste ouvert.' },
  { french: 'une réserve', english: 'a reservation / concern', category: 'Opinion', example: 'J’ai une réserve sur ce calendrier.' },
  { french: 'un avantage', english: 'an advantage', category: 'Argumentation', example: 'Cet avantage est important.' },
  { french: 'un inconvénient', english: 'a drawback', category: 'Argumentation', example: 'L’inconvénient principal est le coût.' },
  { french: 'pourtant', english: 'yet / however', category: 'Connecteur', example: 'C’est difficile, pourtant c’est possible.' },
  { french: 'cependant', english: 'however', category: 'Connecteur', example: 'Cependant, le calendrier reste serré.' },
  { french: 'donc', english: 'therefore / so', category: 'Connecteur', example: 'Nous sommes prêts, donc nous lançons.' },
  { french: 'puisque', english: 'since / as', category: 'Connecteur', example: 'Puisque tu es là, aide-nous.' },
  { french: 'à condition que', english: 'provided that', category: 'Subjunctive trigger', example: 'J’accepte à condition que tu viennes.', note: '+ subjonctif' },
]

const lessonSeeds: LessonSeed[] = [
  {
    id: 27,
    description: 'Learn to form the present subjunctive and use it after il faut que to express obligation in a French workplace project brief.',
    context: 'Authentic document type: workplace project brief for a product launch at a French startup.',
    speakers: ['Camille', 'Nassim'],
    grammar: [
      {
        title: 'Present subjunctive formation',
        explanation: 'For regular verbs and many irregular verbs, take the ils form of the present indicative, remove -ent, and add -e, -es, -e, -ions, -iez, -ent. The first B1 trigger is il faut que, which always requires the subjunctive.',
        examples: ['RULE: ils parlent -> que je parle, que nous parlions', 'RULE: ils finissent -> que je finisse, que vous finissiez', 'IRREGULAR: être -> que je sois, qu’il soit, qu’ils soient', 'IRREGULAR: avoir -> que j’aie, qu’il ait, qu’ils aient', 'EXAMPLE: Il faut que tu partes avant midi.'],
        tip: 'For most -er verbs, je/tu/il/ils subjunctive forms look like the present indicative. Find the trigger first, then check the verb.',
      },
    ],
    coreVocab: [
      { french: 'que je sois', english: 'that I be', category: 'Irregular subjunctive' },
      { french: 'qu’il ait', english: 'that he has', category: 'Irregular subjunctive' },
      { french: 'qu’elle aille', english: 'that she goes', category: 'Irregular subjunctive' },
      { french: 'qu’on fasse', english: 'that we do/make', category: 'Irregular subjunctive' },
      { french: 'qu’il puisse', english: 'that he can', category: 'Irregular subjunctive' },
      { french: 'qu’elle veuille', english: 'that she wants', category: 'Irregular subjunctive' },
      { french: 'qu’on sache', english: 'that we know', category: 'Irregular subjunctive' },
      { french: 'obligatoire', english: 'mandatory', category: 'Obligation' },
    ],
    notes: [
      { title: 'La semaine de 35 heures', content: 'The 35-hour week and RTT days shape French project planning because deadlines often need to account for negotiated time off.' },
      { title: 'La réunion', content: 'French professional meetings often end with a written compte-rendu that records who must do what.' },
      { title: 'Le chef de projet', content: 'The project manager role is common in French companies and carries clear responsibility for deadlines and deliverables.' },
    ],
    lines: ['Il faut que le dossier soit prêt avant vendredi.', 'Il faut aussi que tu voies les chiffres avec Léa.', 'Il faut que nous soyons clairs sur le délai.', 'D’accord, il faut que je mette à jour le tableau.', 'Il faut que Karim fasse le test technique.', 'Il faut que tout le monde sache quoi présenter.', 'Il faut que la décision vienne aujourd’hui.', 'Il faut que je prenne les remarques du client.', 'Il faut que tu dises si le lancement reste possible.', 'Il faut que l’équipe parte avec une liste simple.', 'Il faut que je puisse parler au designer.', 'Parfait, il faut que nous gardions ce rythme.'],
  },
  {
    id: 28,
    description: 'Use the subjunctive after will, desire, preference, request, and insistence triggers while avoiding the same-subject trap.',
    context: 'Authentic document type: professional email chain about dividing tasks on a shared dossier.',
    speakers: ['Ariane', 'Mehdi'],
    grammar: [
      {
        title: 'Will and desire triggers',
        explanation: 'Vouloir que, préférer que, souhaiter que, exiger que, demander que, proposer que, and tenir à ce que take the subjunctive when the two clauses have different subjects. Same subject normally uses an infinitive.',
        examples: ['Je veux partir. SAME SUBJECT -> infinitive', 'Je veux que tu partes. DIFFERENT SUBJECTS -> subjunctive', 'Nous préférons que le client réponde vite.', 'Elle insiste pour que nous changions l’ordre.', 'Il tient à ce que vous soyez présents.'],
        tip: 'Ask whether there are two different subjects. If yes, que + subjunctive is natural; if no, use the infinitive.',
      },
    ],
    coreVocab: [
      { french: 'vouloir que', english: 'to want that', category: 'Subjunctive trigger', note: '+ subjonctif' },
      { french: 'préférer que', english: 'to prefer that', category: 'Subjunctive trigger', note: '+ subjonctif' },
      { french: 'souhaiter que', english: 'to wish that', category: 'Subjunctive trigger', note: '+ subjonctif' },
      { french: 'exiger que', english: 'to demand that', category: 'Subjunctive trigger', note: '+ subjonctif' },
      { french: 'demander que', english: 'to ask that', category: 'Subjunctive trigger', note: '+ subjonctif' },
      { french: 'insister pour que', english: 'to insist that', category: 'Subjunctive trigger', note: '+ subjonctif' },
      { french: 'tenir à ce que', english: 'to be keen that', category: 'Subjunctive trigger', note: '+ subjonctif' },
      { french: 'négocier', english: 'to negotiate', category: 'Work' },
    ],
    notes: [
      { title: 'Le dossier', content: 'In French professional life, a dossier is more than a file: it is often a whole responsibility area owned by a person.' },
      { title: 'Négocier poliment', content: 'French workplace disagreement is often indirect but firm, with explicit conditions and carefully chosen verbs.' },
      { title: 'Proposer', content: 'In a professional context, proposer often means offering an option for approval, not casually suggesting.' },
    ],
    lines: ['Je souhaite que nous répartissions le dossier aujourd’hui.', 'Moi, je préfère que tu gardes la partie budget.', 'Je veux bien, mais je demande que tu relises mes chiffres.', 'D’accord, et j’insiste pour que Karim participe aussi.', 'La direction exige que le plan soit clair demain.', 'Je propose que nous écrivions une synthèse courte.', 'Je tiens à ce que le client voie nos réserves.', 'Très bien, mais je veux finir ma partie ce soir.', 'Même sujet, donc tu dis: je veux finir, pas je veux que je finisse.', 'Exactement, et je préfère envoyer un message simple.', 'Alors je demande que chacun confirme son rôle.', 'Parfait, je souhaite que l’accord reste réaliste.'],
  },
  {
    id: 29,
    description: 'Express emotion, doubt, and concession with the subjunctive, and memorize the key indicative exceptions such as espérer que.',
    context: 'Authentic document type: personal message exchange about a surprising life change.',
    speakers: ['Lucie', 'Thomas'],
    grammar: [
      {
        title: 'Emotion, doubt, and concession',
        explanation: 'Emotion triggers such as être content que, regretter que, and avoir peur que take the subjunctive. Doubt and negated opinion also take the subjunctive, while affirmative penser que, croire que, and espérer que take the indicative.',
        examples: ['Je suis contente que tu viennes.', 'Je doute qu’il soit prêt.', 'Je ne pense pas qu’elle ait raison.', 'Je pense qu’elle a raison.', 'J’espère qu’il viendra.'],
        tip: 'Espérer que is the major DELF B1 exception: it expresses hope, but it takes the indicative.',
      },
    ],
    coreVocab: [
      { french: 'être surpris que', english: 'to be surprised that', category: 'Emotion trigger', note: '+ subjonctif' },
      { french: 'être inquiet que', english: 'to be worried that', category: 'Emotion trigger', note: '+ subjonctif' },
      { french: 'regretter que', english: 'to regret that', category: 'Emotion trigger', note: '+ subjonctif' },
      { french: 'douter que', english: 'to doubt that', category: 'Doubt trigger', note: '+ subjonctif' },
      { french: 'bien que', english: 'although', category: 'Conjunction', note: '+ subjonctif' },
      { french: 'pour que', english: 'so that', category: 'Conjunction', note: '+ subjonctif' },
      { french: 'espérer que', english: 'to hope that', category: 'Indicative exception', note: '+ indicatif' },
      { french: 'après que', english: 'after', category: 'Indicative conjunction', note: '+ indicatif' },
    ],
    notes: [
      { title: 'Le café comme lieu social', content: 'In France, cafés are still used for important personal conversations, not only for quick drinks.' },
      { title: 'Mobilité professionnelle', content: 'Moving for work is increasingly common among young French professionals, especially between Paris, Lyon, Nantes, and Bordeaux.' },
      { title: 'Exprimer l’émotion', content: 'Public emotion is often restrained, but close friendships allow direct concern and encouragement.' },
    ],
    lines: ['Je suis surprise que tu partes à Lyon.', 'Je suis contente que l’offre te plaise.', 'J’ai peur que tu sois seule au début.', 'Je ne pense pas que ce soit un mauvais choix.', 'Pourtant, je crois que Lyon est une ville agréable.', 'J’espère que tu trouveras vite un appartement.', 'Bien que je sois triste, je comprends ta décision.', 'Je doute que Paris te manque tous les jours.', 'Il faut que je voie le contrat avant de répondre.', 'Je regrette que tu annonces ça si tard.', 'Je veux que tu me donnes des nouvelles.', 'Promis, je t’écrirai après que j’aurai signé.'],
  },
  {
    id: 30,
    description: 'Form and use the present conditional for politeness, advice, suggestions, hypotheses, reported future, and journalistic uncertainty.',
    context: 'Authentic document type: mentoring conversation inspired by a French careers advice column.',
    speakers: ['Sofia', 'Marc'],
    grammar: [
      {
        title: 'Present conditional formation and uses',
        explanation: 'Use the infinitive or irregular future stem plus imparfait endings: -ais, -ais, -ait, -ions, -iez, -aient. The conditional softens requests, gives advice, and expresses hypothetical results.',
        examples: ['Je voudrais un conseil.', 'Tu devrais parler à ton responsable.', 'À ta place, je demanderais une formation.', 'Si j’avais le temps, je changerais de poste.', 'Le journal annonce que la réforme arriverait en juin.'],
        tip: 'Conditional and imparfait endings sound alike; the stem tells you the tense: allait versus irait.',
      },
    ],
    coreVocab: [
      { french: 'je voudrais', english: 'I would like', category: 'Polite request' },
      { french: 'pourriez-vous', english: 'could you', category: 'Polite request' },
      { french: 'auriez-vous', english: 'would you have', category: 'Polite request' },
      { french: 'tu devrais', english: 'you should', category: 'Advice' },
      { french: 'il faudrait', english: 'it would be necessary', category: 'Advice' },
      { french: 'à ta place', english: 'if I were you', category: 'Advice' },
      { french: 'dans ce cas', english: 'in that case', category: 'Hypothesis' },
      { french: 'conditionnel journalistique', english: 'journalistic conditional', category: 'Media' },
    ],
    notes: [
      { title: 'Tutoiement et politesse', content: 'Even when coworkers use tu, the conditional remains useful for softening requests in professional French.' },
      { title: 'Le mentorat', content: 'Mentoring programs have become more visible in French companies through skills development policies.' },
      { title: 'Le conditionnel journalistique', content: 'French news frequently uses the conditional to report unconfirmed information.' },
    ],
    lines: ['Je voudrais vous demander un conseil.', 'Bien sûr, tu pourrais commencer par ton objectif.', 'Je changerais de poste si l’occasion était sérieuse.', 'Dans ce cas, tu devrais parler aux ressources humaines.', 'Auriez-vous un exemple de message ?', 'Oui, je rédigerais quelque chose de très direct.', 'À ta place, je demanderais aussi une formation.', 'Il faudrait que ton responsable comprenne ton projet.', 'Je pourrais proposer un entretien la semaine prochaine.', 'Ce serait une bonne idée.', 'Le service RH annoncerait bientôt un nouveau programme.', 'Alors je préparerais mon dossier dès aujourd’hui.'],
  },
  {
    id: 31,
    description: 'Compare si clause types for real conditions, present hypotheses, and unreal past conditions in a startup pitch context.',
    context: 'Authentic document type: entrepreneurship pitch and business plan discussion.',
    speakers: ['Inès', 'Romain'],
    grammar: [
      {
        title: 'The three si clause types',
        explanation: 'Type 1 uses si + present with future for open conditions. Type 2 uses si + imparfait with present conditional for hypothetical present situations. Type 3 uses si + plus-que-parfait with past conditional for unreal past situations.',
        examples: ['Type 1: Si nous lançons maintenant, nous trouverons des clients.', 'Type 2: Si nous avions plus d’argent, nous recruterions.', 'Type 3: Si nous avions commencé plus tôt, nous aurions testé le marché.', 'ERROR: Si je saurais is never correct.', 'The conditional belongs in the result clause.'],
        tip: 'Never put the conditional directly after si in these hypothesis patterns.',
      },
    ],
    coreVocab: [
      { french: 'si + présent', english: 'if + present', category: 'Si type 1' },
      { french: 'si + imparfait', english: 'if + imperfect', category: 'Si type 2' },
      { french: 'si + plus-que-parfait', english: 'if + pluperfect', category: 'Si type 3' },
      { french: 'au cas où', english: 'in case', category: 'Trap', note: '+ conditionnel' },
      { french: 'sauf si', english: 'unless', category: 'Hypothesis' },
      { french: 'sinon', english: 'otherwise', category: 'Hypothesis' },
      { french: 'autrement', english: 'otherwise', category: 'Hypothesis' },
      { french: 'à l’époque', english: 'at the time', category: 'Time marker' },
    ],
    notes: [
      { title: 'La French Tech', content: 'The French Tech label promotes startup ecosystems in Paris and regional cities.' },
      { title: 'Station F', content: 'Station F in Paris is one of the largest startup campuses in the world.' },
      { title: 'Le risque professionnel', content: 'French culture often balances entrepreneurial ambition with a strong preference for employment security.' },
    ],
    lines: ['Si nous lançons en septembre, nous aurons trois mois de test.', 'Si les premiers clients répondent, nous chercherons un investisseur.', 'Si nous avions plus de budget, nous recruterions un développeur.', 'Je sais, mais si nous attendions trop, le marché changerait.', 'Au cas où la banque refuserait, nous garderions une version légère.', 'Si nous avions lancé il y a deux ans, nous aurions eu moins de concurrence.', 'Oui, mais à l’époque nous n’avions pas l’équipe.', 'Si tu présentes les chiffres, je parlerai du produit.', 'Sinon, le jury ne comprendra pas notre modèle.', 'Si le jury posait une question difficile, tu répondrais calmement.', 'Si nous réussissons, nous créerons trois postes.', 'Alors préparons le pitch comme si tout dépendait de lui.'],
  },
  {
    id: 32,
    description: 'Use the pluperfect to show what had already happened before another past event in narrative and project post-mortem contexts.',
    context: 'Authentic document type: project post-mortem and incident report.',
    speakers: ['Claire', 'Yanis'],
    grammar: [
      {
        title: 'Plus-que-parfait',
        explanation: 'The plus-que-parfait uses avoir or être in the imparfait plus the past participle. It marks an event that happened before a specific past reference point.',
        examples: ['J’avais préparé le dossier.', 'Elle était déjà partie quand je suis arrivé.', 'Quand le client a appelé, nous avions corrigé l’erreur.', 'Si j’avais su, je n’aurais pas accepté.', 'PQP is about priority before a past anchor, not simply distant past.'],
        tip: 'Find the past anchor first; the plus-que-parfait happened before that anchor.',
      },
    ],
    coreVocab: [
      { french: 'déjà', english: 'already', category: 'Sequence' },
      { french: 'la veille', english: 'the day before', category: 'Sequence' },
      { french: 'le lendemain', english: 'the next day', category: 'Sequence' },
      { french: 'au moment où', english: 'at the moment when', category: 'Sequence' },
      { french: 'lorsque', english: 'when', category: 'Sequence' },
      { french: 'à peine... que', english: 'hardly... when', category: 'Sequence' },
      { french: 'avoir prévu de', english: 'to have planned to', category: 'Narration' },
      { french: 's’être trompé de', english: 'to have chosen the wrong', category: 'Narration' },
    ],
    notes: [
      { title: 'Le retour d’expérience', content: 'REX meetings are common in French organizations after a project, incident, or operational failure.' },
      { title: 'La trace écrite', content: 'French professional culture often values written accountability through notes, reports, and minutes.' },
      { title: 'Analyser sans accuser', content: 'A good post-mortem separates facts, prior assumptions, and later decisions.' },
    ],
    lines: ['Quand le client a appelé, nous avions déjà envoyé le fichier.', 'La veille, Karim avait vérifié les chiffres.', 'Mais personne n’avait relu la dernière page.', 'J’avais prévu de le faire après la réunion.', 'Lorsque l’erreur est apparue, le dossier était déjà parti.', 'Si nous avions attendu une heure, nous aurions évité le problème.', 'À ce moment-là, je pensais que tout était clair.', 'Tu avais pourtant demandé une validation écrite.', 'Oui, mais le responsable était parti plus tôt.', 'Le lendemain, nous avons rédigé un compte-rendu.', 'Il faut que nous sachions ce qui avait manqué.', 'D’accord, notons ce que chacun avait compris.'],
  },
  {
    id: 33,
    description: 'Form the past conditional to express regrets, reproaches, unreal past results, and complete type 3 si clauses.',
    context: 'Authentic document type: reflective personal essay discussed by two old university friends.',
    speakers: ['Élodie', 'Samir'],
    grammar: [
      {
        title: 'Conditionnel passé',
        explanation: 'The past conditional uses avoir or être in the present conditional plus a past participle. It expresses unreal past results, regrets, and gentle criticism.',
        examples: ['J’aurais dû étudier davantage.', 'Nous serions partis plus tôt.', 'Si j’avais su, je n’aurais pas accepté.', 'Tu aurais pu me prévenir.', 'Il aurait fallu demander conseil.'],
        tip: 'J’ai dû partir means I had to leave and did; j’aurais dû partir means I should have left but did not.',
      },
    ],
    coreVocab: [
      { french: 'j’aurais dû', english: 'I should have', category: 'Regret' },
      { french: 'j’aurais pu', english: 'I could have', category: 'Regret' },
      { french: 'j’aurais voulu', english: 'I would have liked', category: 'Regret' },
      { french: 'il aurait fallu', english: 'it would have been necessary', category: 'Regret' },
      { french: 'si seulement', english: 'if only', category: 'Regret' },
      { french: 'dommage que', english: 'it is a pity that', category: 'Subjunctive trigger', note: '+ subjonctif' },
      { french: 'hélas', english: 'alas', category: 'Regret' },
      { french: 'il aurait mieux valu', english: 'it would have been better', category: 'Regret' },
    ],
    notes: [
      { title: 'L’orientation scolaire', content: 'French students make consequential track choices early, which often leads adults to reflect on paths not taken.' },
      { title: 'Le café philosophique', content: 'Cafés remain plausible places for reflective conversations about life, work, and regret.' },
      { title: 'La tradition de l’essai', content: 'French culture has a strong tradition of personal reflection, from Montaigne to modern opinion columns.' },
    ],
    lines: ['J’aurais dû choisir une autre spécialité.', 'Peut-être, mais tu n’aurais pas rencontré les mêmes personnes.', 'Si j’avais connu ce métier, j’aurais préparé un autre master.', 'Moi, j’aurais pu partir à Montréal.', 'Pourquoi tu ne l’as pas fait ?', 'J’avais peur que le projet échoue.', 'Tu aurais dû m’en parler à l’époque.', 'Oui, il aurait fallu demander conseil.', 'Si nous avions été plus courageux, nous aurions tenté plus de choses.', 'Dommage que nous soyons si prudents parfois.', 'Hélas, on comprend certaines choses trop tard.', 'Mais on aurait aussi pu faire pire.'],
  },
  {
    id: 34,
    description: 'Use qui and que to build richer descriptions of people, places, objects, and texts while avoiding the subject/object confusion.',
    context: 'Authentic document type: magazine profile article planning session.',
    speakers: ['Nora', 'Julien'],
    grammar: [
      {
        title: 'Qui versus que',
        explanation: 'Qui replaces the subject of the relative clause; que replaces the direct object. Que becomes qu’ before a vowel. With que before avoir in compound tenses, the past participle agrees with the preceding direct object.',
        examples: ['La journaliste qui écrit le portrait connaît bien le sujet.', 'La personne que nous interviewons arrive demain.', 'La lettre qu’il a écrite est très connue.', 'Qui is followed directly by a verb.', 'Que is followed by a subject plus verb.'],
        tip: 'Cover the relative pronoun: verb next means qui; subject next means que.',
      },
    ],
    coreVocab: [
      { french: 'la personne qui', english: 'the person who', category: 'Relative frame' },
      { french: 'la personne que', english: 'the person whom', category: 'Relative frame' },
      { french: 'la chose qui', english: 'the thing that', category: 'Relative frame' },
      { french: 'le livre que', english: 'the book that', category: 'Relative frame' },
      { french: 'connaître', english: 'to know', category: 'Relative verb' },
      { french: 'rencontrer', english: 'to meet', category: 'Relative verb' },
      { french: 'choisir', english: 'to choose', category: 'Relative verb' },
      { french: 'écrire', english: 'to write', category: 'Relative verb' },
    ],
    notes: [
      { title: 'La presse écrite', content: 'French newspapers and magazines still play an important role in cultural life and public debate.' },
      { title: 'Le portrait intellectuel', content: 'French media often publishes dense profiles of artists, writers, founders, and public thinkers.' },
      { title: 'Un style cultivé', content: 'Relative clauses are common in polished French prose because they avoid repetition and add precision.' },
    ],
    lines: ['Nous cherchons une personne qui a un parcours original.', 'J’ai trouvé une chercheuse que le magazine connaît déjà.', 'C’est elle qui a écrit le livre sur la ville ?', 'Oui, et le livre que j’ai lu est excellent.', 'Il faut interviewer les collègues qui travaillent avec elle.', 'Les questions que tu prépares doivent rester simples.', 'La photo que nous choisirons donnera le ton.', 'Je veux un titre qui attire sans exagérer.', 'Le lecteur qui découvre son histoire doit comprendre les enjeux.', 'Et la citation que nous mettrons en avant doit être forte.', 'La version que tu as écrite hier est presque prête.', 'Alors envoyons le texte qui résume le mieux son parcours.'],
  },
  {
    id: 35,
    description: 'Use où and dont for places, times, and de-relationships, with lequel clearly labeled as B1+ enrichment beyond DELF B1.',
    context: 'Authentic document type: architectural walk-through and travel-style description of a renovated apartment.',
    speakers: ['Hélène', 'Baptiste'],
    grammar: [
      {
        title: 'Où and dont',
        explanation: 'Où replaces a place or time expression. Dont replaces de + noun, including verbs with de, possession, and adjectives followed by de.',
        examples: ['La ville où j’habite est calme.', 'Le jour où nous avons signé reste important.', 'Le sujet dont il parle est délicat.', 'La cliente dont le projet avance arrive demain.', 'Le résultat dont je suis fier est la cuisine.'],
        tip: 'Dont asks one question: is there a hidden de? If yes, dont is likely.',
      },
      {
        title: 'B1+ enrichment: lequel',
        explanation: "DELF B1 requires only qui, que, où, dont. Lequel is bonus material that moves you toward B2 — learn it if you can, but it won't appear in the DELF B1 exam.",
        examples: ['La table sur laquelle j’ai posé le plan.', 'L’outil avec lequel il travaille.', 'Le couloir par lequel on entre.', 'Bonus only: lequel agrees with the noun.', 'De + lequel often becomes duquel, but DELF B1 focuses on dont.'],
        tip: 'Use lequel after most prepositions, but use dont when the missing preposition is de.',
      },
    ],
    coreVocab: [
      { french: 'où', english: 'where / when', category: 'Relative pronoun' },
      { french: 'dont', english: 'whose / of which', category: 'Relative pronoun' },
      { french: 'sur lequel', english: 'on which', category: 'B1+ bonus' },
      { french: 'avec lequel', english: 'with which', category: 'B1+ bonus' },
      { french: 'parler de', english: 'to talk about', category: 'Dont verb' },
      { french: 'avoir besoin de', english: 'to need', category: 'Dont verb' },
      { french: 'être fier de', english: 'to be proud of', category: 'Dont adjective' },
      { french: 'un architecte d’intérieur', english: 'interior architect', category: 'Culture' },
    ],
    notes: [
      { title: 'Les immeubles haussmanniens', content: 'Haussmann-era apartments still define much of central Paris architecture.' },
      { title: 'Rénovation à la française', content: 'Renovation shows and interior design are popular in France, especially around optimizing old apartments.' },
      { title: 'Architecte ou décorateur', content: 'An architecte d’intérieur handles layout and structure more deeply than a décorateur.' },
    ],
    lines: ['Voici la pièce où nous avons gardé le parquet ancien.', 'C’est justement le détail dont je suis le plus fier.', 'La cuisine dont vous parliez sera ouverte ?', 'Oui, c’est l’espace où la famille mange le soir.', 'Le mur que vous voyez cache les câbles.', 'La cliente dont le fils travaille ici voulait plus de lumière.', 'Le jour où nous avons commencé, tout était fermé.', 'La table sur laquelle vous posez le plan est provisoire.', 'Donc lequel est seulement un bonus B1+ ?', 'Exactement, pour le DELF B1, retenez surtout où et dont.', 'L’endroit où l’on entre doit rester très simple.', 'Et le résultat dont vous rêviez devient enfin visible.'],
  },
  {
    id: 36,
    description: 'Report statements, questions, and commands with accurate tense, pronoun, and time-expression shifts.',
    context: 'Authentic document type: radio interview report after a press conference.',
    speakers: ['Maëlle', 'Victor'],
    grammar: [
      {
        title: 'Reported speech',
        explanation: 'When the reporting verb is in the past, tense shifts are needed: present to imparfait, passé composé to plus-que-parfait, future to conditional, and futur proche to allait + infinitive. Questions use declarative word order.',
        examples: ['Il dit: Je suis prêt -> Il a dit qu’il était prêt.', 'Elle dit: J’ai signé -> Elle a dit qu’elle avait signé.', 'Il dit: Je viendrai -> Il a dit qu’il viendrait.', 'Tu viens ? -> Il a demandé si je venais.', 'Partez -> Il a demandé de partir.'],
        tip: 'Do not forget time shifts: demain often becomes le lendemain when the reporting moment has moved.',
      },
    ],
    coreVocab: [
      { french: 'dire que', english: 'to say that', category: 'Reporting verb' },
      { french: 'expliquer que', english: 'to explain that', category: 'Reporting verb' },
      { french: 'affirmer que', english: 'to state that', category: 'Reporting verb' },
      { french: 'ajouter que', english: 'to add that', category: 'Reporting verb' },
      { french: 'demander si', english: 'to ask whether', category: 'Reported question' },
      { french: 'ordonner de', english: 'to order to', category: 'Reported command' },
      { french: 'la veille', english: 'the day before', category: 'Time shift' },
      { french: 'le lendemain', english: 'the next day', category: 'Time shift' },
    ],
    notes: [
      { title: 'France Inter et franceinfo', content: 'Public radio is highly influential in French political and cultural life.' },
      { title: 'Le discours rapporté', content: 'French education trains students to distinguish direct speech, indirect speech, and reported questions.' },
      { title: 'La parole politique', content: 'French political journalism often relies on carefully reported statements rather than long direct quotes.' },
    ],
    lines: ['Le ministre a dit: Je suis prêt à discuter.', 'Donc dans ton papier: il a dit qu’il était prêt à discuter.', 'Exactement. Il a ajouté: Nous avons signé un accord hier.', 'Alors tu écris qu’ils avaient signé un accord la veille.', 'Il a aussi promis: Je viendrai demain.', 'Il a promis qu’il viendrait le lendemain.', 'Une journaliste a demandé: Est-ce que le texte changera ?', 'Je rapporte qu’elle a demandé si le texte changerait.', 'Et la question: Pourquoi refusez-vous cette option ?', 'On écrit qu’elle a demandé pourquoi il refusait cette option.', 'À la fin, il a dit aux équipes: Restez disponibles.', 'Donc il leur a demandé de rester disponibles.', 'Il a précisé qu’il allait revoir le calendrier.', 'Parfait, ton sujet est clair et fidèle.'],
  },
  {
    id: 37,
    description: 'Recognize and produce the passive voice in formal French while knowing when on + active sounds more natural.',
    context: 'Authentic document type: news brief and press release discussion.',
    speakers: ['Paul', 'Mina'],
    grammar: [
      {
        title: 'Passive voice',
        explanation: 'The passive uses être in the required tense plus a past participle that agrees with the subject. Use par for an active agent and de for states, emotions, and surrounding elements.',
        examples: ['La loi est votée par les députés.', 'Le bâtiment a été rénové.', 'La victime était entourée de médecins.', 'On a volé mon sac is more natural in speech.', 'Only transitive verbs can become passive.'],
        tip: 'If a verb cannot take a direct object, it cannot be passive. Arriver and partir are not passive forms.',
      },
    ],
    coreVocab: [
      { french: 'être construit', english: 'to be built', category: 'Passive verb' },
      { french: 'être rénové', english: 'to be renovated', category: 'Passive verb' },
      { french: 'être élu', english: 'to be elected', category: 'Passive verb' },
      { french: 'être publié', english: 'to be published', category: 'Passive verb' },
      { french: 'être arrêté', english: 'to be arrested', category: 'Passive verb' },
      { french: 'par', english: 'by', category: 'Agent marker' },
      { french: 'de', english: 'by / with / of', category: 'State marker' },
      { french: 'on', english: 'one / people / we', category: 'Spoken alternative' },
    ],
    notes: [
      { title: 'La langue administrative', content: 'French official documents frequently use passive and impersonal forms.' },
      { title: 'Il a été décidé que', content: 'This bureaucratic phrase can hide responsibility while sounding formal.' },
      { title: 'Les grands projets', content: 'French presidential architecture projects are often described with passive constructions in media.' },
    ],
    lines: ['L’article dit que le centre sera rénové l’an prochain.', 'Oui, et le projet a été choisi par la mairie.', 'En conversation, je dirais plutôt: la mairie a choisi le projet.', 'C’est plus naturel avec on aussi.', 'Le texte précise que deux salles seront construites.', 'Elles seront utilisées par les associations locales.', 'Le quartier est connu de tous les habitants.', 'Mais le chantier sera suivi par un comité.', 'On a annoncé la décision hier soir.', 'Dans le communiqué, la décision a été annoncée hier soir.', 'Le style passif rend le texte plus officiel.', 'Oui, mais il faut que le sens reste clair.'],
  },
  {
    id: 38,
    description: 'Use the gerund en + present participle to express simultaneous action, manner, condition, and contrast.',
    context: 'Authentic document type: lifestyle and wellness article consultation.',
    speakers: ['Lina', 'Olivier'],
    grammar: [
      {
        title: 'Le gérondif',
        explanation: 'Form the gerund with en plus the present participle: nous form minus -ons plus -ant. It has the same subject as the main verb and expresses simultaneity, manner, condition, or contrast with tout en.',
        examples: ['Elle écoute un podcast en marchant.', 'Il a réussi en travaillant régulièrement.', 'En partant maintenant, tu arriveras à l’heure.', 'Tout en comprenant ton avis, je préfère attendre.', 'Être, avoir, savoir: étant, ayant, sachant.'],
        tip: 'Without en, it is not the gerund. En parlant is a gerund; parlant alone is a present participle.',
      },
    ],
    coreVocab: [
      { french: 'en faisant', english: 'by doing / while doing', category: 'Gérondif' },
      { french: 'en allant', english: 'while going', category: 'Gérondif' },
      { french: 'en lisant', english: 'while reading', category: 'Gérondif' },
      { french: 'en écrivant', english: 'while writing', category: 'Gérondif' },
      { french: 'en sachant', english: 'knowing', category: 'Gérondif exception' },
      { french: 'en étant', english: 'being', category: 'Gérondif exception' },
      { french: 'tout en', english: 'while still', category: 'Contrast' },
      { french: 'l’équilibre', english: 'balance', category: 'Wellness' },
    ],
    notes: [
      { title: 'Le bien-être', content: 'Wellness vocabulary has entered French corporate language through coaching, sophrologie, and stress prevention.' },
      { title: 'L’équilibre vie pro/vie perso', content: 'Work-life balance is shaped by the 35-hour week, RTT days, and remote-work debates.' },
      { title: 'La sophrologie', content: 'Sophrologie is a popular French relaxation practice used in wellness and workplace contexts.' },
    ],
    lines: ['Je veux retrouver de l’énergie en changeant mes habitudes.', 'Vous pouvez commencer en marchant vingt minutes par jour.', 'Je réponds souvent aux messages en mangeant.', 'Tout en comprenant l’urgence, il faut protéger les repas.', 'En réduisant les écrans le soir, vous dormirez mieux.', 'J’ai réussi une fois en coupant les notifications.', 'Très bien, continuez en gardant une règle simple.', 'En étant réaliste, je peux faire trois soirs par semaine.', 'En sachant cela, je vous propose un rythme léger.', 'Je peux aussi écouter un podcast en rentrant.', 'Oui, mais pas en travaillant en même temps.', 'D’accord, je vais progresser en allant doucement.'],
  },
  {
    id: 39,
    description: 'Describe having things done by others with faire + infinitive, se faire + infinitive, and laisser + infinitive.',
    context: 'Authentic document type: home renovation forum thread and real estate consultation.',
    speakers: ['Manon', 'Rachid'],
    grammar: [
      {
        title: 'Faire causatif',
        explanation: 'Faire + infinitive means to have something done by someone else. Object pronouns go before faire, and fait is invariable in the causative passé composé.',
        examples: ['Je fais réparer la fenêtre.', 'Je la fais réparer.', 'Nous avons fait livrer les meubles.', 'Elle s’est fait couper les cheveux.', 'Laisse-moi expliquer le devis.'],
        tip: 'In the causative, faire carries the tense; the infinitive after it never changes.',
      },
    ],
    coreVocab: [
      { french: 'faire réparer', english: 'to have repaired', category: 'Causative' },
      { french: 'faire construire', english: 'to have built', category: 'Causative' },
      { french: 'faire nettoyer', english: 'to have cleaned', category: 'Causative' },
      { french: 'faire livrer', english: 'to have delivered', category: 'Causative' },
      { french: 'se faire couper', english: 'to have cut', category: 'Se faire' },
      { french: 'se faire voler', english: 'to have stolen from oneself', category: 'Se faire' },
      { french: 'laisser passer', english: 'to let pass', category: 'Laisser' },
      { french: 'un artisan', english: 'a skilled tradesperson', category: 'Culture' },
    ],
    notes: [
      { title: 'Les artisans', content: 'Plumbers, electricians, carpenters, and masons have protected professional status through French trade institutions.' },
      { title: 'La loi Carrez', content: 'Apartment surface area is legally regulated in France, which matters in renovation and sale documents.' },
      { title: 'Les plateformes de service', content: 'Digital platforms have changed how some French households find artisans, though word of mouth remains strong.' },
    ],
    lines: ['Je vais faire réparer la fenêtre avant l’hiver.', 'Vous la faites réparer par quel artisan ?', 'Par celui qui a déjà fait livrer les meubles.', 'Il faut aussi faire nettoyer le parquet.', 'D’accord, mais laissez entrer l’électricien demain.', 'Je le laisserai passer vers huit heures.', 'Nous avons fait poser les prises la semaine dernière.', 'Attention, fait reste invariable dans cette phrase.', 'Oui: les prises, nous les avons fait poser.', 'Je me suis fait couper l’eau pendant le chantier.', 'Alors il faut faire venir le plombier.', 'Parfait, je vais faire confirmer le devis.'],
  },
  {
    id: 40,
    description: 'Build logical arguments with connectors of cause, consequence, concession, and opposition in written and spoken debate.',
    context: 'Authentic document type: structured opinion article and adult education class debate.',
    speakers: ['Gaëlle', 'Étienne'],
    grammar: [
      {
        title: 'Logical connectors',
        explanation: 'Cause connectors explain reasons, consequence connectors show results, concession connectors admit a point while limiting it, and opposition connectors contrast two ideas. Register matters in DELF B1 writing.',
        examples: ['Parce que gives a new reason.', 'Puisque gives a known reason.', 'Car is written and does not normally start a sentence.', 'Bien que takes the subjunctive; même si takes the indicative.', 'Par conséquent is formal; du coup is informal.'],
        tip: 'Parce que, puisque, and car are not interchangeable: new reason, known reason, and written explanation.',
      },
    ],
    coreVocab: [
      { french: 'parce que', english: 'because', category: 'Cause' },
      { french: 'car', english: 'for / because', category: 'Cause' },
      { french: 'étant donné que', english: 'given that', category: 'Cause' },
      { french: 'par conséquent', english: 'consequently', category: 'Consequence' },
      { french: 'c’est pourquoi', english: 'that is why', category: 'Consequence' },
      { french: 'bien que', english: 'although', category: 'Concession', note: '+ subjonctif' },
      { french: 'néanmoins', english: 'nevertheless', category: 'Concession' },
      { french: 'en revanche', english: 'on the other hand', category: 'Opposition' },
    ],
    notes: [
      { title: 'Le débat', content: 'Structured argument is central in French schools, media, and political culture.' },
      { title: 'La formation continue', content: 'Adult education is supported through the compte personnel de formation, or CPF.' },
      { title: 'La tribune', content: 'Opinion columns in French newspapers often model formal connector-heavy argumentation.' },
    ],
    lines: ['Je défends la semaine de quatre jours parce que la fatigue baisse.', 'Pourtant, certaines entreprises perdraient en coordination.', 'Puisque les outils numériques existent, on peut mieux organiser le travail.', 'Certes, mais tout le monde ne peut pas télétravailler.', 'Par conséquent, la règle ne doit pas être unique.', 'En revanche, les parents y gagneraient beaucoup.', 'Bien que je comprenne cet argument, je reste prudent.', 'Car la productivité ne se mesure pas seulement en heures.', 'C’est pourquoi il faut tester avant de généraliser.', 'Du coup, tu proposes une expérimentation locale ?', 'Oui, tandis que toi tu préfères une réforme nationale.', 'Néanmoins, nous sommes d’accord sur le principe.'],
  },
  {
    id: 41,
    description: 'Express nuanced opinions with correct indicative or subjunctive after certainty, doubt, personal opinion, and disagreement frames.',
    context: 'Authentic document type: television round table and dinner-party debate.',
    speakers: ['Adèle', 'Martin'],
    grammar: [
      {
        title: 'Opinion and mood',
        explanation: 'Certainty and affirmative personal opinion take the indicative. Possibility, doubt, impossibility, and negated personal opinion take the subjunctive. Hedging softens disagreement.',
        examples: ['Il est certain que cette mesure coûte cher.', 'Il est possible que cette mesure réussisse.', 'Je pense qu’il a raison.', 'Je ne pense pas qu’il ait raison.', 'Je ne suis pas tout à fait d’accord.'],
        tip: 'Penser/croire/trouver flip mood when negated: affirmative indicative, negative subjunctive.',
      },
    ],
    coreVocab: [
      { french: 'à mon avis', english: 'in my opinion', category: 'Opinion' },
      { french: 'il me semble que', english: 'it seems to me that', category: 'Opinion', note: '+ indicatif' },
      { french: 'il est certain que', english: 'it is certain that', category: 'Certainty', note: '+ indicatif' },
      { french: 'il est possible que', english: 'it is possible that', category: 'Uncertainty', note: '+ subjonctif' },
      { french: 'je ne pense pas que', english: 'I do not think that', category: 'Doubt', note: '+ subjonctif' },
      { french: 'j’ai des réserves', english: 'I have reservations', category: 'Disagreement' },
      { french: 'dans une certaine mesure', english: 'to a certain extent', category: 'Hedging' },
      { french: 'plutôt', english: 'rather / fairly', category: 'Hedging' },
    ],
    notes: [
      { title: 'La conversation à table', content: 'French dinner conversations often include politics, work, and social questions; disagreement can be normal and respectful.' },
      { title: 'Former l’argument', content: 'French schooling trains students to state a thesis, qualify it, and defend it with examples.' },
      { title: 'Les débats télévisés', content: 'Round table programs model a register where polite disagreement and nuance are expected.' },
    ],
    lines: ['À mon avis, la semaine de quatre jours peut aider.', 'Je ne suis pas tout à fait d’accord.', 'Il est certain que certains salariés seraient plus reposés.', 'Oui, mais il est possible que les journées soient trop longues.', 'Je pense que l’organisation compte plus que le nombre de jours.', 'Je ne pense pas que ce soit si simple.', 'Dans une certaine mesure, tu as raison.', 'J’ai quand même des réserves sur les petites entreprises.', 'Il me semble que chaque secteur doit choisir.', 'C’est plutôt une réforme culturelle qu’une réforme horaire.', 'Je comprends ta position, mais je vois les choses différemment.', 'Finalement, il est probable que les solutions mixtes marchent mieux.', 'Oui, à condition que les équipes soient consultées.'],
  },
  {
    id: 42,
    description: 'Integrate the full B1 grammar system in an extended workplace meeting with hypotheses, reported speech, relative clauses, passive forms, connectors, and nuanced opinion.',
    context: 'Authentic document type: multi-stakeholder workplace meeting and written compte-rendu.',
    speakers: ['Directrice', 'Chef d’équipe', 'Cliente'],
    grammar: [
      {
        title: 'B1 consolidation',
        explanation: 'This capstone combines subjunctive triggers, conditional hypotheses, pluperfect sequencing, relative clauses, reported speech, passive voice, gerund, causative faire, logical connectors, and nuanced opinion frames.',
        examples: ['Il faut que le calendrier soit réaliste.', 'Si nous avions prévu ce risque, nous aurions changé le plan.', 'Le service dont vous parlez sera rénové.', 'Le client a dit qu’il viendrait le lendemain.', 'Bien que le projet soit complexe, il peut réussir.'],
        tip: 'B1 independence means combining simple tools accurately, not chasing B2 complexity.',
      },
    ],
    coreVocab: [
      { french: 'quoi qu’il en soit', english: 'whatever the case', category: 'Discourse marker' },
      { french: 'dans la mesure où', english: 'insofar as', category: 'Discourse marker' },
      { french: 'à cet égard', english: 'in this regard', category: 'Discourse marker' },
      { french: 'force est de constater que', english: 'one must acknowledge that', category: 'Discourse marker' },
      { french: 'il n’en reste pas moins que', english: 'nonetheless', category: 'Discourse marker' },
      { french: 'toujours est-il que', english: 'the fact remains that', category: 'Discourse marker' },
      { french: 'une initiative', english: 'an initiative', category: 'Work' },
      { french: 'un lancement', english: 'a launch', category: 'Work' },
    ],
    notes: [
      { title: 'B1 et la naturalisation', content: 'DELF B1 is the minimum French level required for naturalisation in France.' },
      { title: 'La réunion française', content: 'Professional meetings are often formal, hierarchical, and followed by a written compte-rendu.' },
      { title: 'L’Alliance Française', content: 'The Alliance Française network is one of France’s major global language and culture institutions.' },
      { title: 'Après B1', content: 'B2 adds literary register, deeper argumentation, complex pronoun sequences, and richer media comprehension.' },
      { title: 'Le français mondial', content: 'French is an official language in 29 countries and an important language across Africa, the Caribbean, Europe, and the Pacific.' },
    ],
    lines: ['Il faut que le lancement soit prêt avant juin.', 'Je suis contente que le client voie nos progrès.', 'Si nous avions validé plus tôt, nous aurions évité ce retard.', 'C’est vrai, mais si nous changions maintenant, le budget augmenterait.', 'Le service dont vous parlez a déjà été testé.', 'Oui, et la salle où les tests ont eu lieu sera rénovée.', 'Le directeur a dit que le fournisseur viendrait le lendemain.', 'Donc il faut que nous gardions une marge.', 'Bien que le projet soit complexe, je pense qu’il peut réussir.', 'Je ne pense pas que l’équipe ait assez de temps sans aide.', 'Dans ce cas, nous pourrions faire venir un consultant.', 'Ou faire préparer les supports par l’agence.', 'En travaillant par étapes, nous limiterons les risques.', 'Par conséquent, je propose une version réduite.', 'Il n’en reste pas moins que le client attend une décision.', 'Quoi qu’il en soit, le compte-rendu précisera les responsabilités.'],
  },
]

function buildVocabulary(core: LessonSeed['coreVocab']) {
  const combined = [...core]
  for (const item of commonVocabulary) {
    if (combined.length >= 28) break
    if (!combined.some((existing) => existing.french === item.french)) {
      combined.push(item)
    }
  }
  return combined
}

function makeDialogue(seed: LessonSeed) {
  const speakerCount = seed.speakers.length
  return {
    title: seed.context.split(': ')[1] ?? `Lesson ${seed.id} dialogue`,
    context: seed.context,
    exchanges: seed.lines.map((line, index) => ({
      speaker: seed.speakers[index % speakerCount] ?? seed.speakers[0],
      french: line,
      english: 'B1 model sentence used in the lesson scenario.',
      pronunciation: 'frahn-SEH byan ar-tee-koo-LAY',
    })),
  }
}

function makeExercises(id: number): Exercise[] {
  const prefix = `l${id}`
  const exercises: Exercise[] = [
    {
      id: `${prefix}-e1`,
      type: 'fill_blank',
      question: 'Complétez la phrase avec la forme ou le connecteur correct.',
      correct_answer: ['il faut que', 'Il faut que'],
      explanation: 'This item checks the main B1 structure introduced in the lesson.',
    },
    {
      id: `${prefix}-e2`,
      type: 'multiple_choice',
      question: 'Choisissez la phrase grammaticalement correcte.',
      options: ['Si je savais, je répondrais.', 'Si je saurais, je répondrais.', 'Je veux que je parte.', 'Il est certain qu’il soit là.'],
      correct_answer: 'Si je savais, je répondrais.',
      explanation: 'Si + imparfait pairs with the present conditional in a type 2 hypothesis.',
    },
    {
      id: `${prefix}-e3`,
      type: 'matching',
      question: 'Associez chaque expression à sa fonction.',
      pairs: [
        { french: 'bien que', english: 'concession with subjunctive' },
        { french: 'par conséquent', english: 'consequence' },
        { french: 'dont', english: 'replaces de + noun' },
        { french: 'je ne pense pas que', english: 'negated opinion with subjunctive' },
      ],
      explanation: 'These are core B1 discourse and grammar markers.',
    },
    {
      id: `${prefix}-e4`,
      type: 'translation',
      question: 'Translate: It is important that we finish the report before Friday.',
      direction: 'en_to_fr',
      correct_answer: ['Il est important que nous finissions le rapport avant vendredi.'],
      explanation: 'Il est important que takes the subjunctive.',
    },
    {
      id: `${prefix}-e5`,
      type: 'error_correction',
      question: 'Corrigez les erreurs B1.',
      items: [
        { incorrect: 'Il faut que tu viens.', correct: 'Il faut que tu viennes.', explanation: 'Il faut que requires the subjunctive.' },
        { incorrect: 'Si je serais libre, je viendrais.', correct: 'Si j’étais libre, je viendrais.', explanation: 'Si type 2 uses the imparfait in the si clause.' },
        { incorrect: 'Je pense qu’il vienne.', correct: 'Je pense qu’il vient.', explanation: 'Affirmative penser que takes the indicative.' },
      ],
    },
    {
      id: `${prefix}-e6`,
      type: 'tense_choice',
      question: 'Choisissez le temps qui convient.',
      items: [
        { sentence: 'Quand je suis arrivé, elle ____ déjà.', verb: 'partir', options: ['était partie', 'est partie', 'partirait'], correct_answer: 'était partie', explanation: 'The departure happened before the past reference point.' },
        { sentence: 'Demain, nous ____ le dossier.', verb: 'envoyer', options: ['enverrons', 'envoyions', 'aurions envoyé'], correct_answer: 'enverrons', explanation: 'Tomorrow requires a future form in this open plan.' },
      ],
    },
    {
      id: `${prefix}-e7`,
      type: 'mood_choice',
      question: 'Indicatif ou subjonctif ?',
      items: [
        { sentence: 'Il faut que tu [BLANK] à l’heure.', verb: 'être', indicative_form: 'es', subjunctive_form: 'sois', correct_answer: 'subjunctive', trigger: 'Il faut que', explanation: 'Il faut que always triggers the subjunctive.' },
        { sentence: 'Je pense qu’il [BLANK] raison.', verb: 'avoir', indicative_form: 'a', subjunctive_form: 'ait', correct_answer: 'indicative', trigger: 'Je pense que', explanation: 'Affirmative opinion takes the indicative.' },
        { sentence: 'Je ne crois pas qu’elle [BLANK] disponible.', verb: 'être', indicative_form: 'est', subjunctive_form: 'soit', correct_answer: 'subjunctive', trigger: 'Je ne crois pas que', explanation: 'Negated opinion expresses doubt and takes the subjunctive.' },
      ],
    },
    {
      id: `${prefix}-e8`,
      type: 'rewrite',
      question: 'Transformez la phrase selon l’instruction.',
      instruction_type: 'reported_speech',
      items: [
        { original: 'Il dit : "Je suis prêt."', expected: 'Il a dit qu’il était prêt.', hint: 'présent -> imparfait', explanation: 'With a past reporting verb, present shifts to imparfait.' },
        { original: 'Elle demande : "Tu viens demain ?"', expected: 'Elle a demandé si je venais le lendemain.', hint: 'yes/no question -> si', explanation: 'Reported yes/no questions use si and shifted time expressions.' },
      ],
    },
    {
      id: `${prefix}-e9`,
      type: 'transformation',
      question: 'Transformez avec une négation correcte.',
      instruction: 'affirmative_to_negative',
      items: [
        { original: 'Je pense qu’il a raison.', transformed: 'Je ne pense pas qu’il ait raison.', translation: 'I do not think he is right.' },
        { original: 'Elle vient toujours.', transformed: 'Elle ne vient jamais.', translation: 'She never comes.' },
      ],
      explanation: 'Negation can change both meaning and mood in B1 French.',
    },
    {
      id: `${prefix}-e10`,
      type: 'speaking_prompt',
      question: 'Présentez une opinion en utilisant un connecteur logique, une hypothèse avec si, et une expression de nuance.',
      model_answer: 'À mon avis, ce projet peut réussir parce que l’équipe est solide. Si nous avions plus de temps, nous améliorerions la présentation. Je ne suis pourtant pas tout à fait sûr que le budget soit suffisant.',
      translation: 'In my opinion, this project can succeed because the team is solid. If we had more time, we would improve the presentation. However, I am not entirely sure the budget is sufficient.',
      tip: 'Combine accuracy with short, connected sentences.',
    },
  ]

  if (id === 42) {
    exercises.push(
      {
        id: `${prefix}-e11`,
        type: 'rewrite',
        question: 'Réécrivez avec le gérondif.',
        instruction_type: 'gerund',
        items: [
          { original: 'Nous avançons. Nous travaillons par étapes.', expected: 'Nous avançons en travaillant par étapes.', explanation: 'The gerund expresses manner with the same subject.' },
        ],
      },
      {
        id: `${prefix}-e12`,
        type: 'multiple_choice',
        question: 'Quel connecteur exprime une concession formelle ?',
        options: ['bien que', 'donc', 'parce que', 'à cause de'],
        correct_answer: 'bien que',
        explanation: 'Bien que expresses concession and takes the subjunctive.',
      },
    )
  }

  return exercises
}

export function getIntermediateLessonData(id: number): IntermediateLessonData {
  const rich = richLessons[id]
  if (rich) return rich

  const seed = lessonSeeds.find((lesson) => lesson.id === id)
  const summary = intermediateLessonSummaries.find((lesson) => lesson.order === id)

  if (!seed || !summary) {
    throw new Error(`Unknown B1 lesson: ${id}`)
  }

  return {
    id,
    title: summary.title,
    title_fr: summary.title_fr,
    level: 'B1',
    description: seed.description,
    dialogue: makeDialogue(seed),
    grammarPoints: seed.grammar,
    vocabulary: buildVocabulary(seed.coreVocab),
    culturalNotes: seed.notes,
    exercises: makeExercises(id),
  }
}
