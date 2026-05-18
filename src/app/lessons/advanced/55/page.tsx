'use client'

import AdvancedLessonLayout, { AdvancedLessonData } from '../../../../../components/lessons/AdvancedLessonLayout'

const lessonData: AdvancedLessonData = {
  id: 55,
  title: 'Formal Impersonal Constructions',
  title_fr: 'Les Constructions Impersonnelles Formelles',
  level: 'B2',
  description:
    "Deploy formal impersonal constructions — il s'agit de, il convient de, il importe que, force est de constater que — to make claims and recommendations without personal attribution. These are the central hedging devices of French academic, administrative, and editorial writing.",
  dialogue: {
    title: 'Comité de pilotage',
    context:
      "A high-level steering committee at a French public institution. Three participants (Madame Bertin, Monsieur Carrel, Madame Dehaene) review the implementation of a strategic plan. Their exchanges saturate with formal impersonal constructions because the genre — institutional decision-making — demands depersonalised claims.",
    register: 'soutenu',
    exchanges: [
      {
        speaker: 'Mme Bertin',
        french: "Mesdames, Messieurs, il s'agit aujourd'hui de faire un point d'étape sur le plan stratégique adopté en janvier.",
        english: 'Ladies and gentlemen, today’s matter is to take stock of the strategic plan adopted in January.',
      },
      {
        speaker: 'M. Carrel',
        french: "Il convient avant tout de saluer les avancées notables : trois objectifs sur cinq sont en passe d'être atteints.",
        english: 'It is first appropriate to salute the notable progress: three out of five objectives are on track to being achieved.',
      },
      {
        speaker: 'Mme Bertin',
        french: "Néanmoins, force est de constater que les deux autres accusent un retard préoccupant. Il importe que nous identifiions ensemble les causes.",
        english: 'Nevertheless, one must acknowledge that the other two show a worrying delay. It is important that we identify the causes together.',
      },
      {
        speaker: 'Mme Dehaene',
        french: "Il y a lieu de s'interroger sur la gouvernance du projet. Le dispositif actuel a-t-il les moyens de ses ambitions ?",
        english: 'There is reason to question the project’s governance. Does the current scheme have the means to match its ambitions?',
      },
      {
        speaker: 'M. Carrel',
        french: "Il ne suffit pas de fixer des indicateurs ; encore faut-il les suivre. Or il apparaît que le tableau de bord n'a pas été actualisé depuis avril.",
        english: 'It does not suffice to set indicators; one must still monitor them. Yet it appears that the dashboard has not been updated since April.',
      },
      {
        speaker: 'Mme Bertin',
        french: "Quoi qu'il en soit, des décisions doivent être prises avant la fin du trimestre. Il en va de la crédibilité du plan.",
        english: 'Be that as it may, decisions must be taken before the end of the quarter. The credibility of the plan depends on it.',
      },
      {
        speaker: 'Mme Dehaene',
        french: "Il n'en reste pas moins que les équipes ont travaillé d'arrache-pied. Il serait injuste de leur faire porter la responsabilité d'un cadrage initial insuffisant.",
        english: 'It nonetheless remains that the teams have worked tirelessly. It would be unjust to make them bear responsibility for an insufficient initial framing.',
      },
      {
        speaker: 'M. Carrel',
        french: "Je propose qu'il soit procédé à un audit interne dès la semaine prochaine. Il s'agirait d'identifier précisément les points de blocage.",
        english: 'I propose that an internal audit be conducted as early as next week. It would be a matter of precisely identifying the bottlenecks.',
      },
      {
        speaker: 'Mme Bertin',
        french: "C'est une excellente proposition. Il convient cependant de cadrer la mission d'audit avec rigueur, afin d'éviter toute dérive.",
        english: 'That is an excellent proposal. It is appropriate, however, to frame the audit mission rigorously, in order to avoid any drift.',
      },
      {
        speaker: 'Mme Dehaene',
        french: "Il importe également que le rapport soit présenté au comité dans un délai resserré — disons trois semaines maximum.",
        english: 'It is equally important that the report be presented to the committee within a tight timeframe — let us say three weeks maximum.',
      },
      {
        speaker: 'M. Carrel',
        french: "Force est de reconnaître que ce calendrier est ambitieux. Mais quoi qu'il en soit, nous ne pouvons pas attendre l'automne.",
        english: 'One must acknowledge that this schedule is ambitious. But be that as it may, we cannot wait until autumn.',
      },
      {
        speaker: 'Mme Bertin',
        french: "Y a-t-il d'autres points à soulever avant la conclusion ?",
        english: 'Are there other points to raise before the conclusion?',
      },
      {
        speaker: 'Mme Dehaene',
        french: "Il conviendrait de prévoir une réunion intermédiaire à mi-parcours, ne serait-ce que pour rassurer les équipes opérationnelles.",
        english: 'It would be appropriate to schedule an interim meeting at the midpoint, if only to reassure the operational teams.',
      },
    ],
  },
  grammarPoints: [
    {
      title: "Il s'agit de — la formule cadre",
      explanation:
        "'Il s'agit de' = 'it is a matter of / it concerns'. The construction is rigorously impersonal: the subject is always 'il'; no personal subject is possible. Use it to frame what the discussion is about, or to define what an action involves. Two patterns: 'il s'agit de + nom' (it concerns X) and 'il s'agit de + infinitif' (it is a matter of doing X).",
      examples: [
        "Il s'agit d'une décision importante. (il concerns X)",
        "Il s'agit de comprendre les enjeux. (it is a matter of understanding)",
        "Il s'agissait d'un malentendu. (imparfait — formal narrative)",
        "Il s'agira de trouver un consensus. (futur — anticipation)",
        "RULE : sujet toujours « il », jamais personnel.",
      ],
      tip: "Open any formal meeting or written report with 'Il s'agit aujourd'hui de...' — it is the canonical framing formula. The construction is impersonal by design; resist the urge to insert 'nous' or 'je'.",
    },
    {
      title: 'Il convient de + infinitif',
      explanation:
        "'Il convient de + infinitif' = 'it is advisable / appropriate to'. Used for formal recommendations and well-mannered suggestions. The conditional form 'il conviendrait de' softens the recommendation further, making it diplomatically tactful. Both are extremely frequent in formal reports and recommendations.",
      examples: [
        "Il convient de préciser que les chiffres restent provisoires.",
        "Il convient avant tout de saluer les avancées.",
        "Il conviendrait de revoir cette décision à la lumière des nouveaux éléments.",
        "Il aurait convenu de consulter le comité en amont.",
        "RULE : « il convient/conviendrait/aurait convenu DE + infinitif » (préposition de obligatoire).",
      ],
      tip: "'Il convient de' is the formal equivalent of 'nous devrions' — but depersonalises the recommendation. In meetings, switching from 'nous devrions' to 'il convient de' instantly elevates your register.",
    },
    {
      title: 'Il importe que + subjonctif',
      explanation:
        "'Il importe que + subjonctif' = 'it is important that'. More formal than 'il est important que' and arguably more emphatic. Always takes the subjunctive (the subject is non-specified or non-actualised). Conditional form 'il importerait que' softens the urgency.",
      examples: [
        "Il importe que chacun soit informé.",
        "Il importe que nous identifiions ensemble les causes.",
        "Il importerait que le rapport soit présenté avant la fin du mois.",
        "Peu importe qu'il vienne ou non. (negative variant)",
        "RULE : « il importe QUE + subj. » ; never « il importe de + infinitif » (use « il convient de » for that).",
      ],
      tip: "'Il importe que' carries more weight than 'il est important que' in formal speech. Use it sparingly — once per key recommendation — for maximum effect.",
    },
    {
      title: 'Il suffit de / il ne suffit pas de',
      explanation:
        "'Il suffit de + infinitif' = 'it is enough / it suffices to'. Often used in instructions and minimalist formulations. The negative 'il ne suffit pas de' is more frequent in argumentative writing — it sets up the conditions under which a simple action is INSUFFICIENT.",
      examples: [
        "Il suffit de cliquer ici pour valider.",
        "Il suffit d'une signature pour engager la responsabilité.",
        "Il ne suffit pas de vouloir, il faut pouvoir.",
        "Il ne suffit pas de fixer des indicateurs ; encore faut-il les suivre.",
        "STRUCTURE : « il ne suffit pas de X, encore faut-il Y » — a frequent argumentative move.",
      ],
      tip: "The 'il ne suffit pas de X, encore faut-il Y' structure is a powerful argumentative tool. Use it once per essay to flag your major reservation about an apparently sufficient solution.",
    },
    {
      title: "Il y a lieu de + infinitif",
      explanation:
        "'Il y a lieu de + infinitif' = 'there is reason / cause to'. Very formal, almost juridical. Used to authorise or recommend an action by appealing to context or rule. The conditional 'il y aurait lieu de' is even more cautious.",
      examples: [
        "Il y a lieu de s'interroger sur la gouvernance du projet.",
        "Il y a lieu de réviser le règlement intérieur.",
        "Il y aurait lieu de prendre des mesures conservatoires.",
        "Il n'y a pas lieu de s'alarmer.",
        "REGISTER : soutenu / juridique / administratif",
      ],
      tip: "'Il y a lieu de' is one of the most formal recommendation verbs in French. It's the verbal equivalent of an institutional letter — use only in the most elevated contexts.",
    },
    {
      title: 'Les connecteurs impersonnels du discours argumentatif',
      explanation:
        "Three impersonal connectors structure formal French argument: 'quoi qu'il en soit' (signals concession + summary, moves discourse forward), 'il n'en reste pas moins que + indicatif' (formal concessive: 'it nonetheless remains that'), and 'force est de constater que + indicatif' (formal acknowledgement: 'one must acknowledge that'). All three are PURELY soutenu and indispensable in B2 production écrite.",
      examples: [
        "Quoi qu'il en soit, la décision a été prise. (concession + advancement)",
        "Il n'en reste pas moins que cette situation est préoccupante. (concession)",
        "Force est de constater que les résultats sont décevants. (acknowledgement)",
        "TWIST : 'force est de constater que' takes the INDICATIVE (it's a statement of fact, not emotion).",
        "VARIANT : 'il en va de la crédibilité du plan' (the credibility is at stake)",
      ],
      tip: "Use one of each in any DELF B2 production écrite of 250 words. They are the structural connective tissue of formal French argument — examiners look for them.",
    },
  ],
  vocabulary: [
    { french: 'il s’agit de + N/INF.', english: 'it concerns / it is a matter of', category: 'Construction impersonnelle', example: 'Il s’agit d’une décision importante.', note: '[soutenu] — sujet toujours « il »' },
    { french: 'il convient de + inf.', english: 'it is appropriate to', category: 'Construction impersonnelle', example: 'Il convient de préciser que…', note: '[soutenu] recommandation' },
    { french: 'il conviendrait de + inf.', english: 'it would be appropriate to', category: 'Construction impersonnelle', example: 'Il conviendrait de revoir cette décision.', note: '[soutenu] recommandation atténuée' },
    { french: 'il importe que + subj.', english: 'it is important that', category: 'Construction impersonnelle', example: 'Il importe que chacun soit informé.', note: '[soutenu] + subj.' },
    { french: 'il importerait que + subj.', english: 'it would be important that', category: 'Construction impersonnelle', example: 'Il importerait que le rapport soit présenté.', note: '[soutenu] + subj.' },
    { french: 'il suffit de + inf.', english: 'it suffices to', category: 'Construction impersonnelle', example: 'Il suffit de cliquer ici.', note: '[courant-soutenu]' },
    { french: 'il ne suffit pas de + inf., encore faut-il', english: "it is not enough to..., one must also", category: 'Construction argumentative', example: 'Il ne suffit pas de vouloir, encore faut-il pouvoir.', note: '[soutenu]' },
    { french: 'il y a lieu de + inf.', english: 'there is reason to', category: 'Construction impersonnelle', example: 'Il y a lieu de s’interroger.', note: '[très soutenu / juridique]' },
    { french: 'quoi qu’il en soit', english: 'be that as it may / whatever the case', category: 'Connecteur concessif', example: 'Quoi qu’il en soit, la décision a été prise.', note: '[soutenu]' },
    { french: 'il n’en reste pas moins que + ind.', english: 'it nonetheless remains that', category: 'Connecteur concessif', example: 'Il n’en reste pas moins que la situation est préoccupante.', note: '[soutenu]' },
    { french: 'force est de constater que + ind.', english: 'one must acknowledge that', category: 'Connecteur d’aveu', example: 'Force est de constater que les résultats sont décevants.', note: '[soutenu] + indicatif (piège!)' },
    { french: 'force est de reconnaître que + ind.', english: 'one must recognise that', category: 'Connecteur d’aveu', example: 'Force est de reconnaître que le calendrier est ambitieux.', note: '[soutenu] + indicatif' },
    { french: 'il en va de', english: 'X is at stake', category: 'Tournure idiomatique', example: 'Il en va de la crédibilité du projet.', note: '[soutenu]' },
    { french: 'il en va de même pour', english: 'the same goes for', category: 'Tournure idiomatique', example: 'Il en va de même pour le secteur public.', note: '[soutenu]' },
    { french: 'il apparaît que + ind.', english: 'it appears that', category: 'Verbe impersonnel', example: 'Il apparaît que le dossier est incomplet.', note: '[soutenu]' },
    { french: 'il ressort de cela que + ind.', english: 'it emerges from this that', category: 'Verbe impersonnel', example: 'Il ressort de cela que les efforts doivent se poursuivre.', note: '[soutenu]' },
    { french: 'il est de mon devoir de', english: 'it is my duty to', category: 'Tournure formelle', example: 'Il est de mon devoir de vous en informer.', note: '[soutenu]' },
    { french: 'le tableau de bord', english: 'the dashboard', category: 'Vocabulaire managérial', example: 'Le tableau de bord n’a pas été actualisé.' },
    { french: 'un point d’étape', english: 'a status update / progress check', category: 'Vocabulaire managérial', example: 'Faisons un point d’étape sur le projet.' },
    { french: 'un comité de pilotage', english: 'a steering committee', category: 'Vocabulaire institutionnel', example: 'Le comité de pilotage se réunit lundi.', note: '[soutenu/admin]' },
    { french: 'un audit interne', english: 'an internal audit', category: 'Vocabulaire institutionnel', example: 'L’audit interne sera lancé la semaine prochaine.' },
    { french: 'des mesures conservatoires', english: 'precautionary measures', category: 'Vocabulaire juridique', example: 'Le tribunal a ordonné des mesures conservatoires.', note: '[juridique]' },
    { french: 'le cadrage', english: 'the framing / scoping', category: 'Vocabulaire managérial', example: 'Le cadrage initial était insuffisant.' },
    { french: 'la gouvernance', english: 'governance', category: 'Vocabulaire institutionnel', example: 'La gouvernance du projet doit être clarifiée.' },
    { french: 'un point de blocage', english: 'a bottleneck / blocking point', category: 'Vocabulaire managérial', example: 'Identifions les points de blocage.' },
    { french: 'accuser un retard', english: 'to show a delay', category: 'Locution verbale', example: 'Le chantier accuse un retard de six mois.', note: '[soutenu]' },
    { french: 'en passe de + inf.', english: 'on track to', category: 'Locution verbale', example: 'Trois objectifs sont en passe d’être atteints.', note: '[soutenu]' },
    { french: 'd’arrache-pied', english: 'tirelessly / flat out', category: 'Locution adverbiale', example: 'Les équipes ont travaillé d’arrache-pied.', note: '[courant-soutenu]' },
    { french: 'ne serait-ce que pour', english: 'if only to', category: 'Locution concessive', example: 'Réunissons-nous, ne serait-ce que pour rassurer les équipes.', note: '[soutenu]' },
    { french: 'à mi-parcours', english: 'at the midpoint', category: 'Vocabulaire général', example: 'Un bilan à mi-parcours s’impose.' },
  ],
  culturalNotes: [
    {
      title: 'L’écriture administrative française',
      content:
        "French administrative writing — note de service, circulaire, rapport, lettre officielle — is built around the impersonal constructions taught here. The state communicates almost entirely in this register. Reading any communication from the Préfecture, the Mairie, or the URSSAF is a masterclass in the genre. The DILA (Direction de l'information légale et administrative) publishes free style guides that codify these conventions.",
    },
    {
      title: 'L’écriture académique française et le distanciation rhétorique',
      content:
        "Unlike English academic writing, which has shifted toward the active 'I argue that...', French academic writing maintains a strong preference for the impersonal: 'il convient d'examiner', 'il apparaît que', 'force est de constater que'. The depersonalisation is not pretentious — it is a conventional move that signals scholarly rigour. B2 learners coming from Anglophone academic traditions must consciously adopt the impersonal voice to write convincing French essays.",
    },
    {
      title: "L'INSEE et le style des publications statistiques",
      content:
        "The Institut national de la statistique et des études économiques (INSEE) publishes thousands of pages of demographic and economic studies each year. Their style is the gold standard of impersonal formal French: every claim is hedged, attributed to data, framed with 'il apparaît que' or 'il ressort de cette étude que'. Reading one INSEE 'note' per month is excellent preparation for B2-to-C1 formal writing.",
    },
    {
      title: 'Le comité de pilotage à la française',
      content:
        "The 'comité de pilotage' (often abbreviated COPIL in spoken French) is the standard governance instance for any major French project — public, private, or mixed. Its conventions — formal opening, structured agenda, ritualised closing — mirror the formal impersonal register. The vocabulary in this lesson (point d'étape, tableau de bord, cadrage, audit interne) is the working vocabulary of every senior French manager. Internalise it.",
    },
  ],
  exercises: [
    {
      id: 'l55-id-impersonal',
      type: 'multiple_choice',
      question:
        "Quelle phrase utilise correctement une construction impersonnelle formelle ?",
      options: [
        'Nous convient de préciser ce point.',
        'Il convient de préciser ce point.',
        'Il faut convenir de préciser ce point.',
        'Il est convenu pour préciser ce point.',
      ],
      correct_answer: 'Il convient de préciser ce point.',
      explanation: 'Construction figée : il convient DE + inf. Sujet toujours « il ».',
    },
    {
      id: 'l55-matching',
      type: 'matching',
      question: 'Associez chaque construction impersonnelle à son équivalent anglais.',
      pairs: [
        { french: 'il s’agit de', english: 'it is a matter of' },
        { french: 'il convient de', english: 'it is appropriate to' },
        { french: 'il importe que', english: 'it is important that' },
        { french: 'il suffit de', english: 'it suffices to' },
        { french: 'il y a lieu de', english: 'there is reason to' },
        { french: 'force est de constater que', english: 'one must acknowledge that' },
        { french: 'quoi qu’il en soit', english: 'be that as it may' },
        { french: 'il n’en reste pas moins que', english: 'it nonetheless remains that' },
        { french: 'il en va de', english: 'X is at stake' },
        { french: 'il apparaît que', english: 'it appears that' },
      ],
      explanation: 'Ces constructions sont des marqueurs de registre soutenu institutionnel.',
    },
    {
      id: 'l55-fillblank-1',
      type: 'fill_blank',
      question:
        "Complétez avec « il convient » ou « il importe » selon que le complément est un infinitif (de+inf.) ou une subordonnée (que+subj.) : « ____ que le rapport soit présenté avant la fin du mois. »",
      correct_answer: ['Il importe'],
      explanation: '« Que + subj. » exige « il importe que » (pas « il convient que »).',
      hints: ['Il convient DE + infinitif ; il importe QUE + subj.'],
    },
    {
      id: 'l55-fillblank-2',
      type: 'fill_blank',
      question:
        "Complétez : « ____ de préciser que les chiffres restent provisoires. »",
      correct_answer: ['Il convient', 'Il importe'],
      explanation: 'Il convient DE + inf. fonctionne ici parfaitement. « Il importe de » est rare mais possible.',
    },
    {
      id: 'l55-convert-personal-to-impersonal',
      type: 'rewrite',
      question: 'Réécrivez chaque phrase personnelle en utilisant une construction impersonnelle formelle.',
      instruction_type: 'reported_speech',
      items: [
        {
          original: "Je pense qu'il faut vérifier les chiffres.",
          expected: "Il convient de vérifier les chiffres.",
          explanation: 'Personnel → il convient de + inf.',
        },
        {
          original: "Nous devons informer chacun.",
          expected: "Il importe que chacun soit informé.",
          explanation: 'Nous devons → il importe que + subj.',
        },
        {
          original: "On peut simplement cliquer ici.",
          expected: "Il suffit de cliquer ici.",
          explanation: 'On peut + inf. → il suffit de + inf.',
        },
        {
          original: "Aujourd'hui, le sujet est le bilan d'étape.",
          expected: "Il s'agit aujourd'hui de faire un bilan d'étape.",
          explanation: 'Sujet → il s’agit de + inf.',
        },
        {
          original: "On doit reconnaître que les résultats sont décevants.",
          expected: "Force est de constater que les résultats sont décevants.",
          explanation: 'On doit reconnaître → force est de constater que.',
        },
      ],
    },
    {
      id: 'l55-connectors-fillblank',
      type: 'fill_blank',
      question:
        "Complétez avec le connecteur impersonnel adapté : « Les difficultés sont réelles. ____, des décisions doivent être prises avant la fin du trimestre. »",
      correct_answer: ['Quoi qu’il en soit', "Quoi qu'il en soit"],
      explanation: 'Concession + avancement → quoi qu’il en soit.',
    },
    {
      id: 'l55-error-correction',
      type: 'error_correction',
      question: 'Corrigez les erreurs (construction, mode, ou préposition).',
      items: [
        {
          incorrect: "Il convient que nous vérifions les chiffres.",
          correct: "Il convient de vérifier les chiffres.",
          explanation: '« Il convient DE + infinitif » est la construction normée. « Il convient que + subj. » existe mais est rare et lourd.',
        },
        {
          incorrect: "Il importe de chacun soit informé.",
          correct: "Il importe que chacun soit informé.",
          explanation: '« Il importe QUE + subj. » (pas « de »).',
        },
        {
          incorrect: "Force est de constater qu'il ait commis une erreur.",
          correct: "Force est de constater qu'il a commis une erreur.",
          explanation: '« Force est de constater que » exige l’INDICATIF (constat factuel).',
        },
        {
          incorrect: "Il s'agit que nous décidions rapidement.",
          correct: "Il s'agit de décider rapidement.",
          explanation: '« Il s’agit DE + inf. » (pas « que + subj. »).',
        },
        {
          incorrect: "Il y a lieu que vous interveniez.",
          correct: "Il y a lieu d'intervenir.",
          explanation: '« Il y a lieu DE + inf. » (pas « que »).',
        },
      ],
    },
    {
      id: 'l55-formal-text',
      type: 'rewrite',
      question:
        "Transformez ce paragraphe verbal en style impersonnel formel en utilisant au moins QUATRE constructions impersonnelles.",
      instruction_type: 'reported_speech',
      items: [
        {
          original: "Aujourd'hui, le sujet est le bilan du plan stratégique. Nous devons reconnaître que des progrès ont été faits. Cependant, deux objectifs n'ont pas été atteints. Nous devons donc demander un audit interne. Et ce projet est important : la crédibilité de notre institution dépend de lui.",
          expected: "Il s'agit aujourd'hui de faire le bilan du plan stratégique. Force est de constater que des progrès ont été accomplis. Il n'en reste pas moins que deux objectifs n'ont pas été atteints. Il convient donc de procéder à un audit interne. Il en va de la crédibilité de notre institution.",
          explanation: 'Cinq constructions impersonnelles : il s’agit de, force est de constater que, il n’en reste pas moins que, il convient de, il en va de.',
        },
      ],
    },
    {
      id: 'l55-translation',
      type: 'translation',
      question: "Traduisez : 'It is important that the report be presented to the committee within a tight timeframe.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Il importe que le rapport soit présenté au comité dans un délai resserré.",
        "Il importe que le rapport soit présenté au comité dans des délais resserrés.",
      ],
      explanation: 'Il importe que + subj. passif (soit présenté).',
    },
    {
      id: 'l55-translation-2',
      type: 'translation',
      question: "Traduisez : 'It does not suffice to set indicators; one must still monitor them.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Il ne suffit pas de fixer des indicateurs ; encore faut-il les suivre.",
        "Il ne suffit pas de fixer des indicateurs, encore faut-il les suivre.",
      ],
      explanation: 'Structure argumentative : « il ne suffit pas de X, encore faut-il Y ».',
    },
    {
      id: 'l55-recommendation',
      type: 'argumentation',
      question:
        "Rédigez une recommandation formelle (3-4 phrases) à l'attention d'un comité de pilotage, en utilisant au moins TROIS constructions impersonnelles différentes.",
      structure: [
        {
          label: 'Cadrage du sujet',
          instruction: "Ouvrez par « Il s'agit de ... » ou équivalent.",
          model: "Il s'agit, dans cette note, de proposer une révision du dispositif de formation continue déployé depuis 2024.",
          connector_hints: ['Il s’agit de', 'Il y a lieu de', 'Il convient de'],
        },
        {
          label: 'Constat',
          instruction: "Énoncez le constat avec une construction d'aveu (« force est de constater que »).",
          model: "Force est de constater que la participation aux modules a chuté de trente pour cent en dix-huit mois.",
          connector_hints: ['Force est de constater que', 'Il apparaît que', 'Il ressort de cette analyse que'],
        },
        {
          label: 'Recommandation',
          instruction: "Formulez votre recommandation avec « il convient/conviendrait de » ou « il importe que ».",
          model: "Il conviendrait dès lors de revoir l'offre pédagogique en concertation avec les bénéficiaires. Il importe par ailleurs que le calendrier de déploiement soit raccourci.",
          connector_hints: ['Il conviendrait de', 'Il importe que', 'Il y a lieu de'],
        },
      ],
      word_count_target: 100,
    },
    {
      id: 'l55-speaking',
      type: 'speaking_prompt',
      question:
        "Présentez à voix haute, comme dans un comité de pilotage, une recommandation institutionnelle en utilisant au moins TROIS constructions impersonnelles formelles.",
      model_answer:
        "Mesdames, Messieurs, il s'agit aujourd'hui d'examiner les suites à donner à notre étude d'impact. Force est de constater que les conclusions exigent une révision substantielle de notre dispositif. Il convient donc, dans un premier temps, de mobiliser un comité d'experts indépendants. Il importe par ailleurs que ce comité rende ses conclusions dans un délai resserré, ne serait-ce que pour préserver la dynamique engagée. Quoi qu'il en soit, des décisions devront être prises avant la fin du trimestre.",
      translation:
        "Ladies and gentlemen, today is a matter of examining the follow-up to our impact study. One must acknowledge that the conclusions require a substantial revision of our scheme. It is therefore appropriate, in a first instance, to mobilise an independent expert committee. It is also important that this committee deliver its conclusions within a tight timeframe, if only to preserve the momentum already engaged. Be that as it may, decisions will have to be taken before the end of the quarter.",
      tip: "Open with 'Il s'agit aujourd'hui de...', anchor the constat with 'force est de constater que', and close with 'quoi qu'il en soit'. This three-construction skeleton is the institutional Frenchman's basic rhetorical kit.",
    },
  ],
}

export default function Lesson55Page() {
  return (
    <AdvancedLessonLayout
      lessonData={lessonData}
      lessonNumber={55}
      prevHref="/lessons/advanced/54"
      prevLabel="Le Discours Indirect Avancé"
      nextHref="/lessons/advanced/56"
      nextLabel="Les Pronoms Emphatiques"
    />
  )
}
