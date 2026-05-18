'use client'

import AdvancedLessonLayout, { AdvancedLessonData } from '../../../../../components/lessons/AdvancedLessonLayout'

const lessonData: AdvancedLessonData = {
  id: 43,
  title: 'The Past Subjunctive',
  title_fr: 'Le Subjonctif Passé',
  level: 'B2',
  description:
    "Express reactions to and evaluations of completed events using the most heavily tested B2 grammar point. After this lesson, you'll be able to read formal correspondence, write nuanced editorial opinion, and produce the kind of refined emotional response that the subjonctif présent simply cannot convey.",
  dialogue: {
    title: "Bilan d'événement",
    context:
      "Claire Marchand and Olivier Tanguy, two managers of a Parisian non-profit, debrief their annual fundraising gala held the previous Saturday. They alternate between facts (passé composé) and emotional reactions to those facts (subjonctif passé).",
    register: 'courant',
    exchanges: [
      {
        speaker: 'Claire',
        french: "Bon, Olivier, faisons le point. Je suis ravie que tout se soit aussi bien passé samedi soir.",
        english: "Right, Olivier, let's take stock. I'm thrilled everything went so smoothly Saturday evening.",
      },
      {
        speaker: 'Olivier',
        french: "Oui, c'est inespéré. Cela dit, il est regrettable que la ministre n'ait pas pu venir à la dernière minute.",
        english: "Yes, it's beyond what we hoped. That said, it's unfortunate that the minister couldn't come at the last minute.",
      },
      {
        speaker: 'Claire',
        french: "Je suis surprise qu'elle ait annulé si tard. Bien qu'elle ait confirmé jeudi, son cabinet nous a prévenus seulement vendredi soir.",
        english: "I'm surprised she cancelled so late. Although she had confirmed on Thursday, her office only warned us Friday evening.",
      },
      {
        speaker: 'Olivier',
        french: "Force est de constater que les annulations de dernière minute sont devenues la norme. Je suis néanmoins fier que nos bénévoles aient su improviser.",
        english: 'One must acknowledge that last-minute cancellations have become the norm. Nevertheless, I am proud our volunteers managed to improvise.',
      },
      {
        speaker: 'Claire',
        french: "Absolument. Et je suis très reconnaissante que Sophie ait accepté de prononcer le discours d'ouverture à sa place.",
        english: "Absolutely. And I'm very grateful Sophie agreed to give the opening speech in her place.",
      },
      {
        speaker: 'Olivier',
        french: "Elle a été remarquable. Il est dommage que peu de journalistes aient assisté à la soirée, cela dit. La couverture médiatique reste timide.",
        english: 'She was remarkable. It is a shame that few journalists attended the evening, having said that. Media coverage remains thin.',
      },
      {
        speaker: 'Claire',
        french: "Oui, c'est inacceptable que Le Figaro ait ignoré l'événement après nous avoir promis un encadré. J'ai prévu de leur écrire.",
        english: "Yes, it's unacceptable that Le Figaro ignored the event after promising us a feature. I plan to write to them.",
      },
      {
        speaker: 'Olivier',
        french: "Bonne idée. Je suis soulagé que la collecte ait dépassé notre objectif malgré tout. Cent vingt mille euros, c'est inespéré.",
        english: "Good idea. I'm relieved the fundraising exceeded our target despite everything. A hundred and twenty thousand euros — beyond expectations.",
      },
      {
        speaker: 'Claire',
        french: "Je suis impressionnée que les donateurs aient été aussi généreux cette année. Le contexte économique n'aide pourtant pas.",
        english: "I'm impressed donors were so generous this year. The economic climate hardly helps.",
      },
      {
        speaker: 'Olivier',
        french: "Précisément. Il est admirable qu'ils aient maintenu leur engagement. Bien qu'ils aient subi des hausses partout, ils continuent à donner.",
        english: 'Precisely. It is admirable that they have maintained their commitment. Although they have faced price increases everywhere, they keep giving.',
      },
      {
        speaker: 'Claire',
        french: "Une dernière chose : je suis navrée que le traiteur ait servi le végétarien aux mauvaises tables. Plusieurs invités s'en sont plaints.",
        english: "One last thing: I'm sorry the caterer served the vegetarian to the wrong tables. Several guests complained about it.",
      },
      {
        speaker: 'Olivier',
        french: "C'est désolant qu'ils aient commis cette erreur après deux réunions de préparation. On les changera l'an prochain.",
        english: "It's distressing they made that mistake after two preparation meetings. We'll change them next year.",
      },
      {
        speaker: 'Claire',
        french: "Tout à fait. Mais globalement, je suis enchantée que l'on ait réussi cette édition. Buvons un café et préparons la lettre de remerciement.",
        english: "Quite. But overall, I'm delighted that we pulled off this edition. Let's grab a coffee and draft the thank-you letter.",
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Formation : auxiliaire au subjonctif présent + participe passé',
      explanation:
        "The subjonctif passé is built from the subjunctive present of avoir or être (the same auxiliary you'd use in the passé composé) plus the past participle. Agreement with être verbs and direct objects placed before the verb works exactly like the passé composé.",
      examples: [
        'avoir → que j’aie, que tu aies, qu’il ait, que nous ayons, que vous ayez, qu’ils aient',
        'être → que je sois, que tu sois, qu’il soit, que nous soyons, que vous soyez, qu’ils soient',
        "que j'aie parlé · que tu aies fini · qu'elle ait choisi",
        "qu'il soit parti · qu'elle soit venue · qu'ils se soient vus",
        "RULE : if the passé composé takes être, the subjonctif passé takes être — same agreement rules.",
      ],
      tip: "B1→B2 trap: learners default to subjonctif présent even when the action is clearly anterior. If you can insert 'déjà' (already) inside the subordinate clause, you almost certainly need the passé.",
    },
    {
      title: "Quand l'utiliser : antériorité sous déclencheur",
      explanation:
        'Use the subjonctif passé when two conditions are both met: (a) the main clause contains a subjunctive trigger — emotion, judgement, doubt, concession, necessity — AND (b) the subordinate action occurred BEFORE the main-clause time. If the action is simultaneous or future, use the subjonctif présent.',
      examples: [
        "Je suis content qu'il soit venu hier. — He came [before] → I'm glad [now]",
        "Il est dommage qu'elle ait manqué cette occasion. — She missed it [before] → it's a shame [now]",
        "Bien qu'il ait beaucoup travaillé, il n'a pas réussi. — concessive anteriority",
        "CONTRAST : Je veux qu'il vienne demain. (présent : future relative to main clause)",
        "CONTRAST : Je suis ravi qu'il vienne. (présent : simultaneous to my joy)",
      ],
      tip: "The trigger picks the mood (subjunctive vs indicative); the time relationship between the two clauses picks the tense within the subjunctive (présent vs passé). Treat them as two independent decisions.",
    },
    {
      title: 'Déclencheurs typiques au B2',
      explanation:
        'B1 introduced the basic subjunctive triggers. At B2 you add a richer palette — especially the formal emotional reaction verbs and impersonal constructions that dominate the DELF B2 production écrite.',
      examples: [
        "ÉMOTION : être ravi/navré/désolé/surpris/soulagé/reconnaissant/fier/impressionné que + subj. passé",
        "JUGEMENT : il est regrettable/inacceptable/inadmissible/admirable/dommage que + subj. passé",
        "CONCESSION : bien que / quoique / sans que + subj. passé",
        "DOUTE : je ne pense pas que / il est peu probable que + subj. passé",
        "CONSTAT : force est de constater que + INDICATIF (this one is indicative — common trap!)",
      ],
      tip: "Force est de constater que takes the indicative, not the subjunctive — it's a statement of fact, not an emotional reaction. Mark it in your notes.",
    },
    {
      title: "L'accord du participe passé",
      explanation:
        'All passé composé agreement rules apply identically. With être, the participle agrees with the subject. With avoir, it agrees with a preceding direct object. With pronominal verbs, it agrees with the subject when the reflexive pronoun is a direct object.',
      examples: [
        "qu'elle soit partie (être → féminin singulier)",
        "qu'ils soient venus (être → masculin pluriel)",
        "la décision qu'elle ait prise (avoir, COD antéposé féminin singulier)",
        "qu'ils se soient rencontrés (pronominal, COD reflexive)",
        "PIÈGE : qu'ils se soient parlé (parler à → COI, pas d'accord)",
      ],
      tip: "If a participe passé still gives you trouble in the passé composé, it will give you the same trouble here. Don't memorise a new rule — apply the one you already know.",
    },
    {
      title: 'Test pratique : présent ou passé du subjonctif ?',
      explanation:
        'Two diagnostics distinguish the two forms reliably. Test 1 (temporal): can you logically insert "déjà" (already) inside the subordinate clause? → passé. Test 2 (rewrite): would you naturally use the passé composé if the trigger were absent? → passé.',
      examples: [
        "Je suis content qu'il [déjà] soit venu. → passé ✓",
        "Je veux qu'il [déjà] vienne demain. → présent (déjà makes no sense)",
        "Il est dommage qu'elle [déjà] ait manqué le train. → passé ✓",
        "Sans trigger : 'il est venu' → passé composé → donc subj. passé",
        "Sans trigger : 'il vient' → présent → donc subj. présent",
      ],
      tip: "If both tests give the same answer, trust it. If they disagree, the temporal test wins — it's the underlying logic.",
    },
  ],
  vocabulary: [
    { french: 'être ravi(e) que', english: 'to be delighted that', category: 'Émotion + subj.', example: "Je suis ravie qu'il ait accepté.", note: '+ subjonctif passé' },
    { french: 'être navré(e) que', english: 'to be sorry that', category: 'Émotion + subj.', example: "Nous sommes navrés que vous ayez attendu.", note: '[courant-soutenu] + subj. passé' },
    { french: 'être désolé(e) que', english: 'to be sorry that', category: 'Émotion + subj.', example: "Je suis désolé qu'elle soit partie sans saluer.", note: '+ subj. passé' },
    { french: 'être surpris(e) que', english: 'to be surprised that', category: 'Émotion + subj.', example: "Je suis surprise qu'il ait dit cela.", note: '+ subj. passé' },
    { french: 'être soulagé(e) que', english: 'to be relieved that', category: 'Émotion + subj.', example: "Je suis soulagé que tu sois rentré sain et sauf.", note: '+ subj. passé' },
    { french: 'être reconnaissant(e) que', english: 'to be grateful that', category: 'Émotion + subj.', example: "Je vous suis reconnaissante d'avoir pris le temps.", note: '+ subj. passé' },
    { french: 'être fier/fière que', english: 'to be proud that', category: 'Émotion + subj.', example: "Je suis fière que nous ayons tenu nos engagements.", note: '+ subj. passé' },
    { french: 'être impressionné(e) que', english: 'to be impressed that', category: 'Émotion + subj.', example: "Je suis impressionné qu'ils aient terminé en deux mois.", note: '+ subj. passé' },
    { french: 'être enchanté(e) que', english: 'to be delighted that', category: 'Émotion + subj.', example: "Nous sommes enchantés que vous ayez accepté l'invitation.", note: '[soutenu] + subj. passé' },
    { french: 'il est regrettable que', english: 'it is regrettable that', category: 'Jugement impersonnel', example: "Il est regrettable qu'aucune réponse n'ait été apportée.", note: '[soutenu] + subj. passé' },
    { french: 'il est inacceptable que', english: 'it is unacceptable that', category: 'Jugement impersonnel', example: "Il est inacceptable que ce dossier soit resté sans suite.", note: '[soutenu] + subj. passé' },
    { french: 'il est inadmissible que', english: 'it is intolerable that', category: 'Jugement impersonnel', example: "Il est inadmissible que la décision ait été prise sans consultation.", note: '[soutenu] + subj. passé' },
    { french: 'il est admirable que', english: 'it is admirable that', category: 'Jugement impersonnel', example: "Il est admirable que les bénévoles aient maintenu le service.", note: '+ subj. passé' },
    { french: 'il est dommage que', english: 'it is a pity that', category: 'Jugement impersonnel', example: "Il est dommage que vous ne soyez pas venu.", note: '+ subj. passé' },
    { french: 'il est désolant que', english: 'it is distressing that', category: 'Jugement impersonnel', example: "Il est désolant qu'on ait laissé la situation se dégrader.", note: '[soutenu] + subj. passé' },
    { french: 'force est de constater que', english: 'one must acknowledge that', category: 'Constat formel', example: "Force est de constater que les résultats ont déçu.", note: '[soutenu] + INDICATIF (piège)' },
    { french: 'bien que', english: 'although', category: 'Conjonction concessive', example: "Bien qu'elle ait travaillé dur, elle n'a pas été retenue.", note: '+ subj. (passé si antériorité)' },
    { french: 'quoique', english: 'although', category: 'Conjonction concessive', example: "Quoique nous ayons prévenu à temps, rien n'a changé.", note: '[soutenu] + subj.' },
    { french: 'sans que', english: 'without (someone doing)', category: 'Conjonction concessive', example: "Il est parti sans que je l'aie su.", note: '+ subj. (passé si antériorité)' },
    { french: 'à moins que', english: 'unless', category: 'Conjonction', example: "Nous viendrons à moins que vous ayez déjà décidé autrement.", note: '+ subj. (passé si antériorité)' },
    { french: 'jusqu’à ce que', english: 'until', category: 'Conjonction temporelle', example: "Je l'attendrai jusqu'à ce qu'il ait fini.", note: '+ subj.' },
    { french: 'pourvu que', english: 'provided that / let’s hope', category: 'Conjonction conditionnelle', example: "Pourvu qu'il ait pensé à fermer la porte.", note: '+ subj.' },
    { french: 'craindre que', english: 'to fear that', category: 'Émotion + subj.', example: "Je crains qu'il n'ait commis une erreur.", note: '+ ne explétif, [soutenu]' },
    { french: 'douter que', english: 'to doubt that', category: 'Doute + subj.', example: "Je doute qu'il ait dit la vérité.", note: '+ subj. passé' },
    { french: 'inespéré(e)', english: 'unexpected (positively)', category: 'Adjectif évaluatif', example: 'Un succès inespéré.', note: '[courant-soutenu]' },
    { french: 'la couverture médiatique', english: 'media coverage', category: 'Vocabulaire institutionnel', example: 'La couverture médiatique reste timide.' },
    { french: 'un encadré', english: 'a feature box / sidebar', category: 'Vocabulaire journalistique', example: 'Le journal a publié un encadré sur la soirée.' },
    { french: 'un cabinet (ministériel)', english: "a minister's office", category: 'Vocabulaire institutionnel', example: 'Le cabinet nous a prévenus la veille.' },
    { french: 'une lettre de réclamation', english: 'a letter of complaint', category: 'Vocabulaire institutionnel', example: 'Je rédige une lettre de réclamation au transporteur.', note: '[courant-soutenu]' },
    { french: 'un appel d’offres', english: 'a call for tenders', category: 'Vocabulaire institutionnel', example: "L'appel d'offres a été publié au Journal officiel.", note: '[soutenu]' },
  ],
  culturalNotes: [
    {
      title: "La lettre de réclamation à la française",
      content:
        "In France, the formal lettre de réclamation is a socially accepted — even institutionally recognised — genre. It follows fixed conventions: objet on its own line, opening formule, structured grievance, requested action, formule de politesse, signature. The subjonctif passé clusters densely in these letters: 'Je suis navré que vos services n'aient pas honoré...'. Learning to read and write them is a survival skill for living in France.",
    },
    {
      title: "Le subjonctif passé et la production écrite du DELF B2",
      content:
        "On the DELF B2 production écrite (a 250-word formal argued text), candidates who never produce a subjonctif passé where one is required lose points for grammatical range. Examiners are explicitly trained to credit anteriority subjunctives because they signal a B2-level tense system. Memorise three or four formal triggers (il est regrettable que, bien que, sans que, je suis navré que) and deploy them deliberately.",
    },
    {
      title: 'Politesse écrite en milieu professionnel français',
      content:
        "Even in informal French companies, written communication between colleagues tends toward the formal — vouvoiement, subjonctif, formules de politesse — in ways that don't translate to English-language workplaces. The default professional email closes with 'Cordialement' (neutral) or 'Bien à vous' (slightly warmer); reaching for 'Veuillez agréer...' marks you as fully fluent in French institutional norms.",
    },
    {
      title: "Le rôle des associations dans la vie civique française",
      content:
        "France has one of the densest associative sectors in the world — over 1.3 million registered associations under the 1901 law. They run everything from sports clubs to humanitarian aid, hosting the gala fundraisers that pepper the French calendar each autumn. The associative culture is so embedded that 'vie associative' is a standard category on French CVs.",
    },
  ],
  exercises: [
    {
      id: 'l43-formation',
      type: 'conjugation',
      question: 'Donnez le subjonctif passé de chaque verbe à la personne indiquée. Séparez les formes par une virgule.',
      verb: 'parler / aller / finir / partir / voir / se lever / prendre / venir',
      correct_answer:
        "que j'aie parlé, qu'il soit allé, que nous ayons fini, qu'elle soit partie, qu'ils aient vu, qu'elle se soit levée, que vous ayez pris, qu'ils soient venus",
      explanation:
        "Subjonctif présent de l'auxiliaire + participe passé. Accord du participe avec être (sujet) et avec les pronominaux (réfléchi COD).",
    },
    {
      id: 'l43-present-vs-passe',
      type: 'mood_choice',
      question: 'Subjonctif présent ou subjonctif passé ? Choisissez la forme qui exprime correctement le rapport temporel.',
      items: [
        {
          sentence: "Je suis content qu'il [vienne / soit venu] hier.",
          verb: 'venir',
          indicative_form: 'qu’il vienne',
          subjunctive_form: 'qu’il soit venu',
          correct_answer: 'subjunctive',
          trigger: 'hier',
          explanation: "Action antérieure (hier) à la réaction présente → subjonctif passé.",
        },
        {
          sentence: "Je veux que tu [finisses / aies fini] tes devoirs avant le dîner.",
          verb: 'finir',
          indicative_form: 'que tu finisses',
          subjunctive_form: 'que tu aies fini',
          correct_answer: 'subjunctive',
          trigger: 'avant le dîner',
          explanation: "Avant le dîner = antériorité par rapport à un repère futur → subjonctif passé.",
        },
        {
          sentence: "Il faut qu'elle [parte / soit partie] tout de suite.",
          verb: 'partir',
          indicative_form: 'qu’elle parte',
          subjunctive_form: 'qu’elle soit partie',
          correct_answer: 'indicative',
          trigger: 'tout de suite',
          explanation: 'Action future immédiate, simultanée à la nécessité → subjonctif présent.',
        },
        {
          sentence: "Bien qu'il [travaille / ait travaillé] toute la nuit, il n'a pas réussi l'examen.",
          verb: 'travailler',
          indicative_form: 'qu’il travaille',
          subjunctive_form: 'qu’il ait travaillé',
          correct_answer: 'subjunctive',
          trigger: 'toute la nuit',
          explanation: 'Le travail est antérieur à l’échec → concession + antériorité → subjonctif passé.',
        },
        {
          sentence: "Je suis ravi que vous [soyez / ayez été] des nôtres demain soir.",
          verb: 'être',
          indicative_form: 'que vous soyez',
          subjunctive_form: 'que vous ayez été',
          correct_answer: 'indicative',
          trigger: 'demain soir',
          explanation: 'Demain = future relative au présent → subjonctif présent.',
        },
        {
          sentence: "Il est dommage qu'elle [manque / ait manqué] le début de la conférence.",
          verb: 'manquer',
          indicative_form: 'qu’elle manque',
          subjunctive_form: 'qu’elle ait manqué',
          correct_answer: 'subjunctive',
          trigger: 'le début',
          explanation: 'Le début est déjà passé → subjonctif passé.',
        },
        {
          sentence: "Je suis surpris que tu [dises / aies dit] cela hier.",
          verb: 'dire',
          indicative_form: 'que tu dises',
          subjunctive_form: 'que tu aies dit',
          correct_answer: 'subjunctive',
          trigger: 'hier',
          explanation: "Hier marque clairement l'antériorité → subjonctif passé.",
        },
        {
          sentence: "Il faudrait qu'on [se voie / se soit vus] avant ton départ.",
          verb: 'se voir',
          indicative_form: 'qu’on se voie',
          subjunctive_form: 'qu’on se soit vus',
          correct_answer: 'indicative',
          trigger: 'avant ton départ',
          explanation: 'Action future (avant le départ qui vient) → subjonctif présent.',
        },
      ],
    },
    {
      id: 'l43-fillblank',
      type: 'fill_blank',
      question:
        "Complétez avec le subjonctif passé : « Je suis navré que vous [attendre] aussi longtemps avant que je puisse vous recevoir. »",
      correct_answer: ['ayez attendu'],
      explanation: "« Vous » + subj. passé d'avoir : « ayez attendu » (action antérieure à la réception).",
      hints: ["L'auxiliaire est avoir. La personne est vous."],
    },
    {
      id: 'l43-fillblank-2',
      type: 'fill_blank',
      question:
        "Complétez : « Bien qu'elle [partir] tôt ce matin, elle est arrivée en retard à cause des grèves. »",
      correct_answer: ['soit partie'],
      explanation: "Antériorité concessive avec « partir » (être) + sujet féminin singulier → soit partie.",
      hints: ['Auxiliaire être ; accord avec « elle ».'],
    },
    {
      id: 'l43-transformation',
      type: 'rewrite',
      question:
        'Transformez chaque phrase pour passer du subjonctif présent au subjonctif passé (action déplacée vers l’antériorité).',
      instruction_type: 'reported_speech',
      items: [
        {
          original: "Je suis content qu'il vienne.",
          expected: "Je suis content qu'il soit venu.",
          explanation: "Subj. présent → subj. passé (venir, être).",
        },
        {
          original: "Il est dommage qu'elle parte si tôt.",
          expected: "Il est dommage qu'elle soit partie si tôt.",
          explanation: 'Partir avec être, accord féminin.',
        },
        {
          original: "Je doute qu'ils prennent une bonne décision.",
          expected: "Je doute qu'ils aient pris une bonne décision.",
          explanation: 'Prendre avec avoir.',
        },
        {
          original: "Bien qu'elle finisse son rapport, elle reste fatiguée.",
          expected: "Bien qu'elle ait fini son rapport, elle reste fatiguée.",
          explanation: 'Concession + antériorité → subj. passé.',
        },
        {
          original: "Je suis ravi que tu réussisses cet examen.",
          expected: "Je suis ravi que tu aies réussi cet examen.",
          explanation: 'Réussir avec avoir.',
        },
      ],
    },
    {
      id: 'l43-error-correction',
      type: 'error_correction',
      question: 'Corrigez ces phrases qui emploient à tort le subjonctif présent (l’antériorité exige le passé).',
      items: [
        {
          incorrect: "Je suis navré que vous attendiez hier soir.",
          correct: "Je suis navré que vous ayez attendu hier soir.",
          explanation: "Hier soir = antériorité → subj. passé.",
        },
        {
          incorrect: "Il est regrettable qu'elle manque la cérémonie samedi dernier.",
          correct: "Il est regrettable qu'elle ait manqué la cérémonie samedi dernier.",
          explanation: "Samedi dernier = passé → subj. passé.",
        },
        {
          incorrect: "Bien qu'il travaille beaucoup la semaine dernière, il a échoué.",
          correct: "Bien qu'il ait travaillé beaucoup la semaine dernière, il a échoué.",
          explanation: 'Concession sur action passée → subj. passé.',
        },
        {
          incorrect: "Je suis surprise que tu ne me dises rien à ce sujet la dernière fois.",
          correct: "Je suis surprise que tu ne m'aies rien dit à ce sujet la dernière fois.",
          explanation: 'Antériorité + position de « rien » entre auxiliaire et participe.',
        },
        {
          incorrect: "Je suis fier que nous tenions nos engagements l'an dernier.",
          correct: "Je suis fier que nous ayons tenu nos engagements l'an dernier.",
          explanation: "L'an dernier = passé → subj. passé.",
        },
      ],
    },
    {
      id: 'l43-translation',
      type: 'translation',
      question: 'Traduisez en français : "I am delighted that you have accepted our invitation."',
      direction: 'en_to_fr',
      correct_answer: [
        "Je suis ravi que vous ayez accepté notre invitation.",
        "Je suis ravie que vous ayez accepté notre invitation.",
        "Je suis enchanté que vous ayez accepté notre invitation.",
        "Je suis enchantée que vous ayez accepté notre invitation.",
      ],
      explanation: "Ravi(e)/enchanté(e) + que + subj. passé d'accepter (avoir).",
    },
    {
      id: 'l43-translation-2',
      type: 'translation',
      question: "Traduisez : \"It is unacceptable that the decision was taken without consulting us.\"",
      direction: 'en_to_fr',
      correct_answer: [
        "Il est inacceptable que la décision ait été prise sans nous consulter.",
        "Il est inacceptable que cette décision ait été prise sans nous consulter.",
      ],
      explanation: "Trigger impersonnel + subj. passé passif (avoir été + pp).",
    },
    {
      id: 'l43-triggers',
      type: 'multiple_choice',
      question:
        "Quelle phrase ne contient PAS le subjonctif passé correctement ? (Attention au piège : un trigger ne prend pas le subjonctif.)",
      options: [
        "Je suis ravi qu'elle soit venue hier.",
        "Force est de constater qu'il ait commis une erreur.",
        "Bien qu'il ait beaucoup travaillé, il a échoué.",
        "Il est regrettable que vous n'ayez pas été prévenus à temps.",
      ],
      correct_answer: "Force est de constater qu'il ait commis une erreur.",
      explanation:
        "« Force est de constater que » est un constat factuel → INDICATIF (« qu'il a commis une erreur »). C'est un faux ami parmi les expressions soutenues.",
    },
    {
      id: 'l43-matching',
      type: 'matching',
      question: 'Associez chaque déclencheur à sa nature.',
      pairs: [
        { french: 'être ravi que', english: 'émotion positive' },
        { french: 'il est regrettable que', english: 'jugement impersonnel négatif' },
        { french: 'bien que', english: 'concession' },
        { french: 'sans que', english: 'absence concessive' },
        { french: 'je doute que', english: 'doute' },
        { french: 'force est de constater que', english: 'constat factuel (indicatif)' },
      ],
      explanation:
        "Tous prennent le subjonctif sauf 'force est de constater que' qui est un constat → indicatif. C'est un piège classique.",
    },
    {
      id: 'l43-speaking',
      type: 'speaking_prompt',
      question:
        "Pensez à un événement récent (réussite, déception, surprise). Exprimez votre réaction en utilisant au moins deux déclencheurs avec le subjonctif passé.",
      model_answer:
        "Je suis ravi que mes collègues aient terminé le projet en avance. Il est cependant regrettable que la direction n'ait pas reconnu cet effort. Bien que nous ayons travaillé tard plusieurs soirs, le résultat dépasse les attentes.",
      translation:
        "I'm delighted my colleagues finished the project early. It's a pity, however, that management didn't recognise that effort. Although we worked late several evenings, the result exceeds expectations.",
      tip: "Anchor at least one of your sentences in a clearly past event ('la semaine dernière', 'hier soir', 'l'an passé') to make the antériorité unambiguous.",
    },
  ],
}

export default function Lesson43Page() {
  return (
    <AdvancedLessonLayout
      lessonData={lessonData}
      lessonNumber={43}
      prevHref="/lessons/advanced"
      prevLabel="B2 Overview"
      nextHref="/lessons/advanced/44"
      nextLabel="L'Infinitif Passé"
    />
  )
}
