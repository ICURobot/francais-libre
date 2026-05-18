'use client'

import AdvancedLessonLayout, { AdvancedLessonData } from '../../../../../components/lessons/AdvancedLessonLayout'

const lessonData: AdvancedLessonData = {
  id: 56,
  title: 'Emphatic Pronouns',
  title_fr: 'Les Pronoms Emphatiques',
  level: 'B2',
  description:
    "Complete the French pronoun system with -même compounds, the generic 'soi', emphatic uses after prepositions and in comparison, and the philosophical 'soi-même' that animates every French essai. This lesson closes the B1 pronouns chapter and opens onto French philosophy of self.",
  dialogue: {
    title: 'Cours de philosophie en terminale',
    context:
      "A philosophy class at a Parisian lycée. Madame Choukroun leads a discussion on personal identity with three terminale students (Yacine, Léna, Tom). The conversation cycles through every B2 emphatic pronoun construction because the topic — authenticity, the self — naturally requires them.",
    register: 'courant',
    exchanges: [
      {
        speaker: 'Mme Choukroun',
        french: "Aujourd'hui, on s'interroge sur soi-même. Question d'ouverture : qu'est-ce qu'être soi ?",
        english: 'Today, we examine the self. Opening question: what is it to be oneself?',
      },
      {
        speaker: 'Yacine',
        french: "Pour moi, être soi, c'est ne pas dépendre du regard des autres. Vivre pour soi, pas pour eux.",
        english: 'For me, being oneself means not depending on the gaze of others. Living for oneself, not for them.',
      },
      {
        speaker: 'Léna',
        french: "Je ne suis pas d'accord avec toi. Sartre dirait justement que nous nous construisons par le regard d'autrui. On n'est pas soi tout seul.",
        english: 'I disagree with you. Sartre would say precisely that we construct ourselves through the gaze of others. You don’t become yourself alone.',
      },
      {
        speaker: 'Tom',
        french: "Et qu'est-ce que ça veut dire « être soi-même » au juste ? J'ai l'impression que tout le monde dit ça sans y réfléchir.",
        english: 'And what does "being oneself" actually mean? I get the impression everyone says it without really thinking.',
      },
      {
        speaker: 'Mme Choukroun',
        french: "Bonne question, Tom. « Être soi-même » suppose qu'il existerait un « soi vrai » — distinct de ce que nous montrons aux autres. Mais cette distinction tient-elle ?",
        english: '"Being oneself" presupposes there is a "true self" — distinct from what we show others. But does that distinction hold?',
      },
      {
        speaker: 'Léna',
        french: "Pour Sartre, non. Il n'y a pas de soi caché. Nous sommes ce que nous faisons. Chacun pour soi, mais aussi chacun par soi.",
        english: 'For Sartre, no. There is no hidden self. We are what we do. Each for himself, but also each through himself.',
      },
      {
        speaker: 'Yacine',
        french: "Toi, tu es plus convaincue que moi par Sartre. Moi, je trouve ça froid.",
        english: 'You are more convinced by Sartre than I am. I find it cold.',
      },
      {
        speaker: 'Léna',
        french: "C'est froid, mais c'est honnête. Beauvoir aussi le dit : on ne naît pas femme, on le devient. La construction de soi, c'est la liberté même.",
        english: 'It’s cold, but it’s honest. Beauvoir says it too: one is not born a woman, one becomes one. The construction of the self is freedom itself.',
      },
      {
        speaker: 'Tom',
        french: "Mais alors, est-ce qu'on peut être bien dans sa peau ? Avoir confiance en soi ?",
        english: 'But then, can one be at ease in one’s own skin? Have confidence in oneself?',
      },
      {
        speaker: 'Mme Choukroun',
        french: "Bonne reformulation. « Avoir confiance en soi » suppose un soi en qui on a confiance. Voilà la circularité philosophique. Pour rentrer chez soi serein, il faut d'abord savoir qui « soi » désigne.",
        english: 'Good reformulation. "Having confidence in oneself" presupposes a self in which one has confidence. There’s the philosophical circularity. To return home serene, one must first know who "soi" designates.',
      },
      {
        speaker: 'Yacine',
        french: "C'est vous-même qui le disiez la semaine dernière : la question philosophique ne se résout pas, elle se déplace.",
        english: 'You yourself said it last week: the philosophical question does not resolve itself, it shifts.',
      },
      {
        speaker: 'Mme Choukroun',
        french: "Bonne mémoire, Yacine. Lui-même, Montaigne le disait dans les Essais : « Que sais-je ? » — la question même de soi est sans fin.",
        english: 'Good memory, Yacine. He himself, Montaigne, said it in the Essais: "What do I know?" — the very question of self is endless.',
      },
      {
        speaker: 'Léna',
        french: "C'est pour cela que je trouve les Pensées de Pascal plus apaisantes : il accepte qu'on ne se suffise pas à soi-même.",
        english: 'That is why I find Pascal’s Pensées more soothing: he accepts that one does not suffice unto oneself.',
      },
      {
        speaker: 'Mme Choukroun',
        french: "Excellent. Pour la dissertation, vous traiterez : « Peut-on jamais se connaître soi-même ? » — réfléchissez chez vous, je vous attends mardi.",
        english: 'Excellent. For the dissertation, you will tackle: "Can one ever know oneself?" — think about it at home, I expect you Tuesday.',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Pronoms toniques : rappel B1',
      explanation:
        "The French stressed (or 'tonic', 'disjunctive') pronouns are moi, toi, lui, elle, nous, vous, eux, elles. They are used: after prepositions (avec moi, pour toi), in isolation (Qui ? — Moi.), for emphasis (Moi, je préfère...), and as the personal-pronoun half of cleft constructions (C'est moi qui...). They never serve as subject or object pronouns directly.",
      examples: [
        "Tu viens avec moi ? (après préposition)",
        "Moi, je préfère le thé. (en début, emphase)",
        "C'est lui qui a décidé. (mise en relief)",
        "Eux et nous, nous formons une équipe.",
        "TABLE : je→moi, tu→toi, il→lui, elle→elle, nous→nous, vous→vous, ils→eux, elles→elles",
      ],
      tip: "Stressed pronouns are NOT replacements for je/tu/etc. — they accompany or replace them in specific positions. Drilling the table is less useful than internalising the positions where stressed forms are obligatory.",
    },
    {
      title: 'Les composés -même(s)',
      explanation:
        "Combine any stressed pronoun with '-même' (singular) or '-mêmes' (plural) to mark emphatic identity: 'X himself / herself / themselves'. The -même reinforces the subject or distinguishes the referent from others. Hyphenated. Agreement of 'même' in number is mandatory; gender is not marked.",
      examples: [
        "moi-même, toi-même, lui-même, elle-même, nous-mêmes, vous-mêmes (sing. pol. or plur.), eux-mêmes, elles-mêmes",
        "Il l'a fait lui-même. (he did it himself)",
        "Vous-même l'avez dit. (you yourself said it)",
        "Elles ont préparé le dossier elles-mêmes.",
        "AGREEMENT : -même au singulier, -mêmes au pluriel ; pas d'accord en genre.",
      ],
      tip: "'Vous-même' singular for formal singular address; 'vous-mêmes' plural. The hyphen is non-negotiable and the spelling distinguishes 'moi-même' from 'moi même' (which doesn't exist in standard French).",
    },
    {
      title: 'Le pronom emphatique générique « soi »',
      explanation:
        "'Soi' is the third-person emphatic pronoun for indefinite or generic subjects: on, chacun, tout le monde, aucun, personne, quelqu'un. It also appears with infinitives and in many fixed expressions. The contrast with 'lui/elle' is sharp: 'lui' refers to a specific man; 'soi' refers to a non-specified or generic agent.",
      examples: [
        "Chacun pour soi. (= chacun pour lui-même, generic)",
        "On rentre chez soi à 19h. (generic — anyone, no specific person)",
        "En soi, ce n'est pas un problème. (in itself)",
        "Être sûr de soi / avoir confiance en soi (fixed expressions with soi)",
        "CONTRAST : Marc rentre chez lui (specific) vs On rentre chez soi (generic)",
      ],
      tip: "Use 'soi' when the subject is generic ('on', 'chacun', 'quiconque'). Use 'lui/elle' when the subject is a specific named person. This is the most-tested 'soi' rule on the DELF B2.",
    },
    {
      title: 'Pronoms emphatiques après prépositions',
      explanation:
        "After any preposition, French requires the stressed form: avec moi, pour toi, sans elle, chez lui, contre nous, devant eux. This is a B1 rule, but B2 extends it with formal locutions (à mes côtés, en dehors de moi, par-delà eux, autour d'elle).",
      examples: [
        "avec moi, pour toi, sans elle, chez lui",
        "près de nous, loin de vous, à côté d'eux",
        "à mes côtés (= avec moi, [soutenu])",
        "par-delà eux (= au-delà d'eux, [soutenu])",
        "en dehors de nous (= sans nous, [soutenu])",
      ],
      tip: "After any of the formal prepositional locutions (par-delà, en deçà de, autour de, en dehors de, à l'encontre de), the stressed pronoun is obligatory. There are no shortcuts — these are always followed by moi/toi/lui/elle/nous/vous/eux/elles.",
    },
    {
      title: 'Pronoms emphatiques en comparaison',
      explanation:
        "After the comparison markers 'que' (in comparative) and 'comme' (in similitude), use the stressed form. The same goes for 'autant que', 'aussi que', 'plus que', 'moins que', and 'comme' introducing a likeness.",
      examples: [
        "Il est plus grand que moi. (after que comparatif)",
        "Comme eux, je préfère le café. (after comme)",
        "Tu travailles autant que lui.",
        "Plus que toi, elle apprécie la simplicité.",
        "Toi et moi, nous nous comprenons. (deux pronoms toniques + reprise)",
      ],
      tip: "When you list two subjects connected by 'et', use stressed forms: 'Toi et moi, nous...' — the 'nous' that follows resumes the two pronouns. This pattern is the standard way to start a sentence emphasising shared identity.",
    },
    {
      title: 'Expressions figées avec « soi »',
      explanation:
        "A small set of fixed expressions cluster 'soi' as a reflexive philosophical marker. These are vocabulary items, not productive constructions — memorise them. They appear in every French philosophy class and many B2 essais.",
      examples: [
        "en soi (in itself / intrinsically)",
        "chez soi (at home, generic / refl.)",
        "avoir confiance en soi (to have self-confidence)",
        "être bien dans sa peau / dans sa tête (to be well in oneself)",
        "se suffire à soi-même (to be self-sufficient)",
      ],
      tip: 'These fixed expressions appear constantly in French intellectual discourse — internalise them as units. Substituting "lui-même" for "soi-même" in these expressions sounds immediately wrong to a native ear.',
    },
  ],
  vocabulary: [
    { french: 'moi-même', english: 'myself', category: '-même + tonique', example: "Je l'ai fait moi-même.", note: 'singulier' },
    { french: 'toi-même', english: 'yourself (sing.)', category: '-même + tonique', example: 'Tu as choisi toi-même.', note: 'singulier informel' },
    { french: 'lui-même', english: 'himself / itself', category: '-même + tonique', example: 'Lui-même l’a reconnu.', note: 'singulier' },
    { french: 'elle-même', english: 'herself / itself', category: '-même + tonique', example: 'Elle-même a signé la lettre.', note: 'singulier' },
    { french: 'nous-mêmes', english: 'ourselves', category: '-même + tonique', example: 'Nous avons rédigé le rapport nous-mêmes.', note: 'pluriel' },
    { french: 'vous-même(s)', english: 'yourself / yourselves', category: '-même + tonique', example: 'Vous-mêmes savez la vérité.', note: 'sing. (poli) ou plur.' },
    { french: 'eux-mêmes', english: 'themselves (masc.)', category: '-même + tonique', example: 'Eux-mêmes ne savaient pas.', note: 'pluriel masc.' },
    { french: 'elles-mêmes', english: 'themselves (fém.)', category: '-même + tonique', example: 'Elles l’ont organisé elles-mêmes.', note: 'pluriel fém.' },
    { french: 'soi', english: 'oneself (generic)', category: 'Pronom emphatique générique', example: 'Chacun pour soi.', note: 'avec sujet indéfini' },
    { french: 'soi-même', english: 'oneself (emphatic)', category: 'Pronom emphatique générique', example: 'Se suffire à soi-même.', note: 'avec sujet indéfini' },
    { french: 'en soi', english: 'in itself / intrinsically', category: 'Expression figée avec soi', example: "En soi, ce n'est pas un problème.", note: '[courant-soutenu]' },
    { french: 'chez soi', english: 'at home (generic)', category: 'Expression figée avec soi', example: 'On est mieux chez soi.', note: 'avec sujet générique' },
    { french: 'avoir confiance en soi', english: 'to have self-confidence', category: 'Expression figée avec soi', example: "La confiance en soi se travaille.", note: '[courant]' },
    { french: 'être sûr(e) de soi', english: 'to be sure of oneself', category: 'Expression figée avec soi', example: "Il est sûr de lui." , note: 'avec sujet spécifique : sûr de lui/elle ; générique : sûr de soi' },
    { french: 'être bien dans sa peau', english: 'to feel comfortable in one’s skin', category: 'Expression figée', example: 'Elle est enfin bien dans sa peau.', note: '[courant]' },
    { french: 'se suffire à soi-même', english: 'to be self-sufficient', category: 'Expression figée avec soi', example: 'Elle se suffit à elle-même.', note: '[soutenu]' },
    { french: 'parler de soi', english: 'to talk about oneself', category: 'Expression figée avec soi', example: 'Parler de soi est un exercice difficile.' },
    { french: 'rentrer chez soi', english: 'to go back home (generic)', category: 'Expression figée avec soi', example: 'À 19h, on rentre chez soi.', note: 'générique' },
    { french: 'autour de', english: 'around', category: 'Préposition + tonique', example: 'Autour de lui, le silence se fit.' },
    { french: 'à côté de', english: 'next to', category: 'Préposition + tonique', example: 'Elle s’est assise à côté de moi.' },
    { french: 'par-delà', english: 'beyond', category: 'Préposition soutenue + tonique', example: 'Par-delà nos différences, nous nous retrouvons.', note: '[soutenu]' },
    { french: 'en dehors de', english: 'outside / apart from', category: 'Préposition + tonique', example: 'En dehors d’eux, personne ne sait.', note: '[courant-soutenu]' },
    { french: 'à l’encontre de', english: 'against / contrary to', category: 'Préposition soutenue + tonique', example: 'Vous allez à l’encontre de lui sur ce point.', note: '[soutenu]' },
    { french: 'à mes côtés / à ses côtés', english: 'by my / his side', category: 'Locution + tonique', example: 'Elle a toujours été à mes côtés.', note: '[soutenu]' },
    { french: 'la construction de soi', english: 'self-construction', category: 'Vocabulaire philosophique', example: 'La construction de soi prend du temps.', note: '[soutenu]' },
    { french: 'l’authenticité', english: 'authenticity', category: 'Vocabulaire philosophique', example: 'L’authenticité est un thème sartrien.' },
    { french: 'le regard d’autrui', english: 'the gaze of others', category: 'Vocabulaire philosophique', example: 'Le regard d’autrui me définit-il ?', note: '[soutenu/philo]' },
    { french: 'autrui', english: 'others (philosophical)', category: 'Pronom soutenu', example: 'Autrui est-il un enfer ?', note: '[soutenu/philo]' },
    { french: 'la circularité (philosophique)', english: 'philosophical circularity', category: 'Vocabulaire philosophique', example: 'C’est une circularité que Pascal admet.' },
    { french: 'une dissertation', english: 'an essay (academic)', category: 'Vocabulaire scolaire', example: 'La dissertation de philosophie pèse dans le bac.' },
    { french: 'la terminale', english: 'final year of lycée', category: 'Vocabulaire scolaire', example: 'Elle est en terminale, filière générale.' },
  ],
  culturalNotes: [
    {
      title: 'Le cours de philosophie en terminale',
      content:
        "Philosophy is a compulsory subject for all French baccalauréat students in their terminale year — 4 to 8 hours per week depending on the track. The dissertation philosophique (a 4-hour essay in answer to a single abstract question) is the centrepiece of the bac. The course routinely tackles questions of self ('Peut-on jamais se connaître soi-même ?', 'Qu'est-ce qu'être libre ?', 'Le travail nous rend-il plus humains ?'), using exactly the emphatic pronouns taught in this lesson. No equivalent system exists in most other countries.",
    },
    {
      title: 'Sartre, Beauvoir, Camus et l’existentialisme',
      content:
        "French existentialism placed the question of self and authenticity at the centre of mid-twentieth-century intellectual life. Sartre's 'L'existence précède l'essence', Beauvoir's 'On ne naît pas femme, on le devient', Camus's 'l'homme révolté' — these formulations rely heavily on emphatic pronouns and on the philosophical 'soi'. Reading even a few pages of L'existentialisme est un humanisme (Sartre, 1946) at B2 level is feasible and gives immediate context for the constructions taught here.",
    },
    {
      title: 'Montaigne et l’invention de l’essai',
      content:
        "Michel de Montaigne (1533-1592) invented the essai as a literary form with his three-volume Essais (1580-1588). His famous question 'Que sais-je ?' became the foundational stance of French intellectual scepticism. Montaigne is studied in lycée and remains a constant reference in contemporary French philosophical writing. His 'me peindre moi-même' (to paint myself) is the original instance of the reflexive emphatic French essay.",
    },
    {
      title: 'L’authenticité comme valeur culturelle française',
      content:
        "The 'être soi-même' / 'être pour autrui' distinction is more than a philosophy seminar topic in France — it animates contemporary debates on personal development, work-life balance, social media, and political authenticity. Bookshops devote entire shelves to 'développement personnel' framed around 'la quête de soi'. French intellectual culture has uneasy relations with this commercialisation, but the conceptual vocabulary it deploys is unmistakeably the one this lesson teaches.",
    },
  ],
  exercises: [
    {
      id: 'l56-soi-vs-lui',
      type: 'tense_choice',
      question: "Choisissez 'soi' (générique) ou 'lui/elle' (spécifique).",
      explanation: 'Sujet indéfini → soi ; sujet spécifique → lui/elle.',
      items: [
        {
          sentence: 'Chacun pour ____.',
          verb: 'soi/lui',
          options: ['soi', 'lui'],
          correct_answer: 'soi',
          explanation: '« Chacun » est indéfini → soi.',
        },
        {
          sentence: "Marc rentre chez ____.",
          verb: 'soi/lui',
          options: ['soi', 'lui'],
          correct_answer: 'lui',
          explanation: '« Marc » est spécifique → lui.',
        },
        {
          sentence: 'On est toujours mieux chez ____.',
          verb: 'soi/lui',
          options: ['soi', 'lui'],
          correct_answer: 'soi',
          explanation: '« On » est indéfini → soi.',
        },
        {
          sentence: 'Elle a toujours confiance en ____.',
          verb: 'soi/elle',
          options: ['soi', 'elle'],
          correct_answer: 'elle',
          explanation: 'Sujet spécifique « elle » → confiance en elle.',
        },
        {
          sentence: 'Avoir confiance en ____, c’est essentiel quand on a un sujet indéfini.',
          verb: 'soi/lui',
          options: ['soi', 'lui'],
          correct_answer: 'soi',
          explanation: 'L’expression figée « avoir confiance en soi » suppose un sujet générique.',
        },
        {
          sentence: 'Sophie est bien dans sa peau et sûre d’____.',
          verb: 'soi/elle',
          options: ['soi', 'elle'],
          correct_answer: 'elle',
          explanation: 'Sujet spécifique « Sophie » → sûre d’elle.',
        },
      ],
    },
    {
      id: 'l56-meme-form',
      type: 'fill_blank',
      question: 'Complétez avec le composé -même approprié : « Le ministre ____ a démissionné. »',
      correct_answer: ['lui-même'],
      explanation: 'Sujet masculin singulier → lui-même (avec trait d’union).',
      hints: ['Trait d’union obligatoire.'],
    },
    {
      id: 'l56-meme-form-2',
      type: 'fill_blank',
      question: 'Complétez : « Les députés ____ ne savaient pas. »',
      correct_answer: ['eux-mêmes'],
      explanation: 'Sujet masculin pluriel → eux-mêmes.',
    },
    {
      id: 'l56-prep-tonique',
      type: 'fill_blank',
      question: 'Complétez avec le bon pronom tonique : « Elle s’est assise à côté de ____ (je). »',
      correct_answer: ['moi'],
      explanation: 'Après préposition → tonique moi.',
    },
    {
      id: 'l56-comparison',
      type: 'fill_blank',
      question: 'Complétez : « Il travaille autant que ____ (tu). »',
      correct_answer: ['toi'],
      explanation: 'Après « que » comparatif → tonique toi.',
    },
    {
      id: 'l56-matching',
      type: 'matching',
      question: 'Associez chaque expression figée avec « soi » à son sens.',
      pairs: [
        { french: 'en soi', english: 'in itself / intrinsically' },
        { french: 'chez soi', english: 'at home (generic)' },
        { french: 'avoir confiance en soi', english: 'to have self-confidence' },
        { french: 'être sûr de soi', english: 'to be sure of oneself' },
        { french: 'être bien dans sa peau', english: 'to feel comfortable in one’s own skin' },
        { french: 'se suffire à soi-même', english: 'to be self-sufficient' },
        { french: 'parler de soi', english: 'to talk about oneself' },
        { french: 'rentrer chez soi', english: 'to return home (generic)' },
      ],
      explanation: 'Expressions figées : ne pas substituer « lui-même » à « soi-même ».',
    },
    {
      id: 'l56-cleft-pronoun',
      type: 'rewrite',
      question: 'Mettez en relief avec « c’est... qui » ou « c’est... que », en utilisant le pronom emphatique correct.',
      instruction_type: 'reported_speech',
      items: [
        {
          original: 'Tu as raison.',
          expected: "C'est toi qui as raison.",
          explanation: 'Tonique toi + qui + verbe accordé avec tu (as).',
        },
        {
          original: 'J’ai téléphoné, pas Pierre.',
          expected: "C'est moi qui ai téléphoné, pas Pierre.",
          explanation: 'Tonique moi + qui + ai (accordé avec je).',
        },
        {
          original: 'Ils ont décidé.',
          expected: "Ce sont eux qui ont décidé.",
          explanation: 'Pluriel : ce sont + eux qui + ont.',
        },
        {
          original: 'Elle est responsable.',
          expected: "C'est elle qui est responsable.",
          explanation: 'Tonique elle + qui + est.',
        },
      ],
    },
    {
      id: 'l56-error-correction',
      type: 'error_correction',
      question: 'Corrigez les erreurs (forme, accord, soi vs lui/elle).',
      items: [
        {
          incorrect: 'Chacun pour lui.',
          correct: 'Chacun pour soi.',
          explanation: '« Chacun » est indéfini → soi obligatoire.',
        },
        {
          incorrect: 'Marc rentre chez soi.',
          correct: 'Marc rentre chez lui.',
          explanation: 'Sujet spécifique « Marc » → chez lui.',
        },
        {
          incorrect: 'Elles ont préparé tout elles-même.',
          correct: 'Elles ont préparé tout elles-mêmes.',
          explanation: 'Pluriel → -mêmes (avec s).',
        },
        {
          incorrect: 'Avec je, tu te sens en sécurité.',
          correct: 'Avec moi, tu te sens en sécurité.',
          explanation: 'Après préposition → tonique moi.',
        },
        {
          incorrect: 'Il est plus grand que je.',
          correct: 'Il est plus grand que moi.',
          explanation: 'Après « que » comparatif → tonique moi.',
        },
      ],
    },
    {
      id: 'l56-translation',
      type: 'translation',
      question: "Traduisez : 'One must have confidence in oneself before one can convince others.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Il faut avoir confiance en soi avant de pouvoir convaincre les autres.",
        "Il faut d'abord avoir confiance en soi pour pouvoir convaincre les autres.",
      ],
      explanation: 'Sujet générique « on/il faut » → soi.',
    },
    {
      id: 'l56-translation-2',
      type: 'translation',
      question: "Traduisez : 'Sophie did everything herself.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Sophie a tout fait elle-même.",
        "Sophie a tout fait par elle-même.",
      ],
      explanation: 'Sujet féminin singulier → elle-même.',
    },
    {
      id: 'l56-translation-3',
      type: 'translation',
      question: "Traduisez : 'In itself, the proposal is not bad.'",
      direction: 'en_to_fr',
      correct_answer: [
        "En soi, la proposition n'est pas mauvaise.",
        "En soi, cette proposition n'est pas mauvaise.",
      ],
      explanation: 'Expression figée « en soi ».',
    },
    {
      id: 'l56-speaking',
      type: 'speaking_prompt',
      question:
        "Présentez à voix haute votre vision de l'épanouissement personnel, en utilisant au moins UN -même, UN soi, et UN pronom tonique après préposition.",
      model_answer:
        "Pour moi, l'épanouissement personnel commence quand on apprend à se suffire à soi-même. Il ne s'agit pas d'être seul, mais d'avoir confiance en soi avant de chercher la confiance des autres. Les personnes les plus libres, je crois, sont celles qui se sont construites elles-mêmes — sans dépendre du regard d'autrui. C'est aussi pour cela qu'il faut savoir rentrer chez soi le soir et apprécier sa propre compagnie. Avec moi, on n'aborde jamais ces questions à la légère.",
      translation:
        "For me, personal fulfilment begins when one learns to be self-sufficient. It’s not a matter of being alone, but of having confidence in oneself before seeking the confidence of others. The freest people, I believe, are those who have constructed themselves — without depending on the gaze of others. That is also why one must know how to return home in the evening and appreciate one’s own company. With me, we never approach these questions lightly.",
      tip: "Build a sentence around each of the three target forms before improvising. 'Avoir confiance en soi' (generic), 'elles-mêmes' (specific emphasis), 'avec moi' (after preposition) — each in its natural habitat.",
    },
  ],
}

export default function Lesson56Page() {
  return (
    <AdvancedLessonLayout
      lessonData={lessonData}
      lessonNumber={56}
      prevHref="/lessons/advanced/55"
      prevLabel="Les Constructions Impersonnelles"
      nextHref="/lessons/advanced/57"
      nextLabel="L'Argumentation Formelle"
    />
  )
}
