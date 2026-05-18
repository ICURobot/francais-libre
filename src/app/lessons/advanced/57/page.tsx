'use client'

import AdvancedLessonLayout, { AdvancedLessonData } from '../../../../../components/lessons/AdvancedLessonLayout'

const lessonData: AdvancedLessonData = {
  id: 57,
  title: 'Formal Argumentation',
  title_fr: "L'Argumentation Formelle",
  level: 'B2',
  description:
    "Master the French essai structure — accroche, problématique, thèse/antithèse/synthèse, ouverture — and integrate every B2 discourse tool into a structured, register-appropriate written argument. This lesson is the DELF B2 production écrite, made explicit.",
  dialogue: {
    title: 'Préparation au DELF B2',
    context:
      "Madame Aubier, an experienced DELF tutor, sits with Karim Ouazzani, a candidate preparing for his B2 production écrite. Together they construct an essay on a typical exam topic — 'Le télétravail est-il une libération ou une nouvelle servitude?' — section by section. The tutor explains, the candidate drafts, the tutor reviews.",
    register: 'courant',
    exchanges: [
      {
        speaker: 'Mme Aubier',
        french: "Bon, Karim. On reprend le sujet de la semaine dernière. Vous avez travaillé l'accroche ?",
        english: 'Right, Karim. Let’s pick up last week’s topic. Have you worked on the hook?',
      },
      {
        speaker: 'Karim',
        french: "Oui. J'ai écrit : « Depuis la pandémie, le télétravail est entré durablement dans nos habitudes. »",
        english: 'Yes. I wrote: "Since the pandemic, teleworking has settled durably into our habits."',
      },
      {
        speaker: 'Mme Aubier',
        french: "C'est correct, mais un peu plat. Une accroche réussie évoque un chiffre, une scène, une citation. Pas seulement un constat.",
        english: 'It’s correct, but a little flat. A successful hook evokes a figure, a scene, a citation. Not just an observation.',
      },
      {
        speaker: 'Karim',
        french: "Donc plutôt : « Selon l'INSEE, plus de 40% des cadres français travaillent à distance au moins un jour par semaine. » ?",
        english: 'So instead: "According to INSEE, more than 40% of French managers work remotely at least one day per week"?',
      },
      {
        speaker: 'Mme Aubier',
        french: "Voilà. Maintenant la problématique. C'est la question centrale, formulée comme une vraie question — pas comme une affirmation.",
        english: 'There. Now the problématique. It’s the central question, phrased as a real question — not as an assertion.',
      },
      {
        speaker: 'Karim',
        french: "« Le télétravail est-il une libération ou une nouvelle servitude ? » C'est ça la problématique ?",
        english: '"Is teleworking a liberation or a new servitude?" Is that the problématique?',
      },
      {
        speaker: 'Mme Aubier',
        french: "Oui, mais à enrichir. Ajoutez « Dans quelle mesure » ou « En quoi » pour montrer que vous problématisez, pas seulement opposez.",
        english: 'Yes, but to enrich. Add "To what extent" or "In what way" to show you are problematising, not merely opposing.',
      },
      {
        speaker: 'Karim',
        french: "« Dans quelle mesure le télétravail constitue-t-il une libération du salarié sans risquer, en retour, de devenir une nouvelle forme d'aliénation ? »",
        english: '"To what extent does teleworking constitute a liberation of the employee without, in return, risking becoming a new form of alienation?"',
      },
      {
        speaker: 'Mme Aubier',
        french: "Excellent. Le plan maintenant. Le DELF B2 attend deux ou trois parties. Pour vous : thèse — antithèse — synthèse. Annoncez-les en fin d'introduction.",
        english: 'Excellent. The plan now. The DELF B2 expects two or three parts. For you: thesis — antithesis — synthesis. Announce them at the end of the introduction.',
      },
      {
        speaker: 'Karim',
        french: "Partie 1 : les libérations apportées par le télétravail. Partie 2 : les nouvelles servitudes qu'il engendre. Partie 3 : un cadre conditionnel possible.",
        english: 'Part 1: the liberations brought by teleworking. Part 2: the new servitudes it engenders. Part 3: a possible conditional framework.',
      },
      {
        speaker: 'Mme Aubier',
        french: "Bon. Maintenant écrivez la première phrase de la partie 1, en commençant par un connecteur d'ouverture.",
        english: 'Good. Now write the first sentence of part 1, starting with an opening connector.',
      },
      {
        speaker: 'Karim',
        french: "« En premier lieu, il convient de souligner que le télétravail libère le salarié de contraintes spatiales et temporelles longtemps perçues comme inéluctables. »",
        english: '"In the first place, it is appropriate to emphasise that teleworking frees the employee from spatial and temporal constraints long perceived as unavoidable."',
      },
      {
        speaker: 'Mme Aubier',
        french: "Très bien ! Vous combinez connecteur d'ouverture (« en premier lieu ») et tournure impersonnelle (« il convient de »). C'est exactement le registre attendu.",
        english: 'Very good! You combine the opening connector ("in the first place") and the impersonal formulation ("it is appropriate to"). That is exactly the register expected.',
      },
      {
        speaker: 'Karim',
        french: "Pour la transition vers l'antithèse, j'utilise « Cependant » ou « Néanmoins » ?",
        english: 'For the transition to the antithesis, do I use "However" or "Nevertheless"?',
      },
      {
        speaker: 'Mme Aubier',
        french: "Préférez « Toutefois » ou « Or » pour le DELF — plus soutenus. « Mais » reste familier, à éviter à l'écrit formel.",
        english: 'Prefer "However" or "Yet" for the DELF — more formal. "But" remains casual, to be avoided in formal writing.',
      },
      {
        speaker: 'Karim',
        french: "Et la conclusion ? On répète la problématique ou on la résout ?",
        english: 'And the conclusion? Do we repeat the problématique or resolve it?',
      },
      {
        speaker: 'Mme Aubier',
        french: "Trois mouvements : reprise synthétique de la problématique, formulation de votre position nuancée, ouverture sur une question plus large. Jamais de nouvelle thèse en conclusion.",
        english: 'Three movements: synthetic restatement of the problématique, formulation of your nuanced position, opening onto a broader question. Never a new thesis in the conclusion.',
      },
      {
        speaker: 'Karim',
        french: "Et pour l'ouverture, on peut citer quelqu'un ?",
        english: 'And for the opening, can we cite someone?',
      },
      {
        speaker: 'Mme Aubier',
        french: "Oui — mais une citation pertinente, et avec son auteur. Pas de Wikipédia ni de proverbe trop usé. Pensez à Sartre, Beauvoir, ou un chiffre INSEE récent.",
        english: 'Yes — but a pertinent citation, and with its author. No Wikipedia, no overused proverb. Think Sartre, Beauvoir, or a recent INSEE figure.',
      },
    ],
  },
  grammarPoints: [
    {
      title: "L'introduction tripartite",
      explanation:
        "Every French formal essay opens with a three-part introduction: (1) ACCROCHE — a hook that situates the subject in concrete terms (a figure, a scene, a citation, a recent event); (2) PRÉSENTATION DU SUJET — context and stakes, in 2-3 sentences; (3) PROBLÉMATIQUE — the central question, phrased as a real interrogative. The problématique is not negotiable — French education requires it. An English-style thesis statement is insufficient.",
      examples: [
        "ACCROCHE : « Selon l'INSEE, plus de 40% des cadres français travaillent à distance au moins un jour par semaine. »",
        "PRÉSENTATION : « Cette mutation, accélérée par la pandémie, redéfinit les rapports entre vie professionnelle et vie privée. »",
        "PROBLÉMATIQUE : « Dans quelle mesure le télétravail libère-t-il le salarié sans risquer de devenir une nouvelle aliénation ? »",
        "FORMULATION : « Dans quelle mesure... », « En quoi... », « Comment expliquer que... », « Peut-on véritablement affirmer que... »",
        "ANNONCE DU PLAN : finir l'intro par « Pour répondre, nous examinerons d'abord X, puis Y, et enfin Z. »",
      ],
      tip: "If your introduction lacks a problématique phrased as a question, the entire essay reads as descriptive rather than argumentative. This single missing element is the most common DELF B2 production écrite weakness.",
    },
    {
      title: 'Le développement : thèse, antithèse, synthèse',
      explanation:
        "The development unfolds in two or three parts, each advancing a coherent angle: in a three-part plan, THÈSE (the first position) → ANTITHÈSE (the opposing or qualifying position) → SYNTHÈSE (a nuanced reconciliation). In a two-part plan: THÈSE → NUANCE. Each part contains its own internal structure: thesis statement → arguments → examples → transition to the next part.",
      examples: [
        "PARTIE 1 (THÈSE) : « En premier lieu, il convient de souligner que le télétravail libère le salarié... »",
        "PARTIE 2 (ANTITHÈSE) : « Toutefois, force est de constater que ces libérations ont un revers... »",
        "PARTIE 3 (SYNTHÈSE) : « Il apparaît dès lors que le télétravail, loin d'être une donnée univoque, dépend des conditions de sa mise en œuvre. »",
        "STRUCTURE INTERNE : phrase d'ouverture (avec connecteur) → argument → exemple → mini-conclusion / transition",
        "TRANSITION : finir chaque partie sur une phrase qui ouvre la suivante.",
      ],
      tip: "The three-part structure is the French educational default; the two-part is the journalistic default. Pick one and hold it — switching mid-essay is a structural error.",
    },
    {
      title: "La conclusion : reprise, synthèse, ouverture",
      explanation:
        "The conclusion has three movements: (1) REPRISE de la problématique — restate the central question in different words; (2) SYNTHÈSE des arguments — summarise your nuanced position in 2-3 sentences; (3) OUVERTURE — a broader question or context that goes beyond the essay's scope. NEVER introduce a new thesis in the conclusion — it signals incomplete argumentation.",
      examples: [
        "REPRISE : « Le télétravail, comme nous l'avons vu, n'est ni purement libérateur ni purement aliénant. »",
        "SYNTHÈSE : « Il constitue plutôt un dispositif dont les effets dépendent étroitement du cadre institutionnel et culturel. »",
        "OUVERTURE : « La question, plus profondément, est celle du sens que nos sociétés donnent au travail lui-même. »",
        "PIÈGE : ne pas ouvrir une nouvelle thèse ; ne pas répéter mot à mot la problématique.",
        "OUVERTURE FRÉQUENTE : citation d'auteur, comparaison internationale, projection vers l'avenir.",
      ],
      tip: 'The ouverture is the move that separates a B2 essay from a B1 essay. Try to gesture toward a related but larger question — something your essay opens up but does not resolve.',
    },
    {
      title: 'La palette de connecteurs formels',
      explanation:
        "French formal argument relies on a recognisable palette of logical connectors, classified by function. Use one connector at the start of each paragraph and one at each major transition within a paragraph. Drop the casual 'mais' and 'donc' in favour of their formal equivalents.",
      examples: [
        "OUVRIR : Tout d'abord / En premier lieu / Pour commencer",
        "AJOUTER : De plus / En outre / Par ailleurs / Qui plus est",
        "CONTRASTER : Cependant / Toutefois / Néanmoins / Or",
        "CONCÉDER : Certes / Il est vrai que / Sans doute",
        "CONCLURE : En conclusion / Pour conclure / En définitive / Ainsi",
      ],
      tip: "Build a personal connector palette of 8-10 you can deploy confidently. Memorising 30 won't help — using 8 well is what marks you as B2.",
    },
    {
      title: 'Le registre soutenu en production écrite',
      explanation:
        "DELF B2 production écrite is graded partly on register. Maintain SOUTENU throughout: no 'mais', no 'donc', no 'super', no 'sympa', no 'truc'. Prefer nominalisation, impersonal constructions, and 'je pense que' alternatives. Avoid 'je pense que' itself — too weak. Use 'il est indéniable que', 'force est de constater que', 'il convient de souligner que'.",
      examples: [
        "ÉVITER « je pense que » → préférer « il est indéniable que / force est de constater que / il apparaît que »",
        "ÉVITER « mais » → préférer « toutefois / cependant / or »",
        "ÉVITER « donc » → préférer « par conséquent / dès lors »",
        "ÉVITER « beaucoup de » → préférer « un grand nombre de / nombre de »",
        "ÉVITER « les gens » → préférer « les individus / la population / chacun »",
      ],
      tip: "Re-read your draft hunting for these familiar markers. Each one you replace lifts the register a notch. The threshold of B2 is when the soutenu replacements feel natural, not forced.",
    },
  ],
  vocabulary: [
    { french: 'une accroche', english: 'a hook (opening sentence)', category: 'Métalangage rédactionnel', example: "L'accroche doit retenir l'attention.", note: '[scolaire/journalistique]' },
    { french: 'la problématique', english: 'the central question', category: 'Métalangage rédactionnel', example: 'La problématique structure tout l’essai.', note: '[scolaire]' },
    { french: 'le développement', english: 'the body / development', category: 'Métalangage rédactionnel', example: 'Le développement compte deux ou trois parties.' },
    { french: 'la thèse', english: 'the thesis', category: 'Métalangage rédactionnel', example: 'La thèse est défendue dans la première partie.' },
    { french: 'l’antithèse', english: 'the antithesis', category: 'Métalangage rédactionnel', example: 'L’antithèse nuance ou conteste la thèse.' },
    { french: 'la synthèse', english: 'the synthesis', category: 'Métalangage rédactionnel', example: 'La synthèse réconcilie les deux positions.' },
    { french: 'l’ouverture', english: 'the opening / broader question', category: 'Métalangage rédactionnel', example: 'L’ouverture lance la réflexion au-delà du sujet.' },
    { french: 'Tout d’abord', english: 'First of all', category: 'Connecteur d’ouverture', example: 'Tout d’abord, examinons les arguments économiques.', note: '[soutenu]' },
    { french: 'En premier lieu', english: 'In the first place', category: 'Connecteur d’ouverture', example: 'En premier lieu, il convient de définir nos termes.', note: '[soutenu]' },
    { french: 'De plus', english: 'Moreover', category: 'Connecteur d’addition', example: 'De plus, les chiffres confirment cette tendance.', note: '[soutenu]' },
    { french: 'En outre', english: 'Furthermore', category: 'Connecteur d’addition', example: 'En outre, le contexte juridique a évolué.', note: '[soutenu]' },
    { french: 'Par ailleurs', english: 'Besides', category: 'Connecteur d’addition', example: 'Par ailleurs, on notera que la question reste ouverte.', note: '[soutenu]' },
    { french: 'Qui plus est', english: 'What’s more', category: 'Connecteur d’addition', example: 'Qui plus est, les données européennes vont dans le même sens.', note: '[soutenu]' },
    { french: 'Cependant', english: 'However', category: 'Connecteur d’opposition', example: 'Cependant, certaines réserves s’imposent.', note: '[soutenu]' },
    { french: 'Toutefois', english: 'However / Nevertheless', category: 'Connecteur d’opposition', example: 'Toutefois, la mesure n’a pas convaincu.', note: '[soutenu]' },
    { french: 'Néanmoins', english: 'Nevertheless', category: 'Connecteur d’opposition', example: 'Néanmoins, le projet est resté inabouti.', note: '[soutenu]' },
    { french: 'Or', english: 'Yet / Now', category: 'Connecteur d’opposition', example: 'Or, les chiffres révèlent autre chose.', note: '[soutenu]' },
    { french: 'Certes', english: 'Admittedly', category: 'Connecteur de concession', example: 'Certes, l’objectif est ambitieux.', note: '[soutenu]' },
    { french: 'Il est vrai que', english: 'It is true that', category: 'Connecteur de concession', example: 'Il est vrai que les difficultés sont réelles.', note: '[soutenu]' },
    { french: 'Sans doute', english: 'No doubt', category: 'Connecteur de concession', example: 'Sans doute le succès est-il fragile.', note: '[soutenu] avec inversion' },
    { french: 'En conclusion', english: 'In conclusion', category: 'Connecteur de conclusion', example: 'En conclusion, plusieurs lectures sont possibles.', note: '[soutenu]' },
    { french: 'Pour conclure', english: 'To conclude', category: 'Connecteur de conclusion', example: 'Pour conclure, retenons trois enseignements.', note: '[courant-soutenu]' },
    { french: 'En définitive', english: 'Ultimately', category: 'Connecteur de conclusion', example: 'En définitive, le bilan reste contrasté.', note: '[soutenu]' },
    { french: 'Ainsi', english: 'Thus', category: 'Connecteur de conclusion', example: 'Ainsi, la question dépasse le cadre national.', note: '[soutenu]' },
    { french: 'il apparaît que + ind.', english: 'it appears that', category: 'Tournure soutenue d’opinion', example: 'Il apparaît que la mesure manque sa cible.', note: '[soutenu]' },
    { french: 'il ressort de cela que', english: 'it emerges from this that', category: 'Tournure soutenue d’opinion', example: 'Il ressort de cela que la réforme doit être revue.', note: '[soutenu]' },
    { french: 'il est indéniable que', english: 'it is undeniable that', category: 'Tournure soutenue d’opinion', example: 'Il est indéniable que les conditions ont changé.', note: '[soutenu]' },
    { french: 'on peut affirmer que', english: 'one can assert that', category: 'Tournure soutenue d’opinion', example: 'On peut affirmer que ce modèle s’épuise.', note: '[soutenu]' },
    { french: 'tout porte à croire que', english: 'everything suggests that', category: 'Tournure soutenue d’opinion', example: 'Tout porte à croire que la décision sera reportée.', note: '[soutenu]' },
    { french: 'il est légitime de se demander si', english: 'it is legitimate to wonder whether', category: 'Tournure problématisante', example: 'Il est légitime de se demander si cette approche est tenable.', note: '[soutenu]' },
    { french: 'Dans quelle mesure', english: 'To what extent', category: 'Formulation de problématique', example: 'Dans quelle mesure peut-on parler de progrès ?', note: '[soutenu]' },
    { french: 'En quoi', english: 'In what way', category: 'Formulation de problématique', example: 'En quoi cette réforme constitue-t-elle une rupture ?', note: '[soutenu]' },
    { french: 'Comment expliquer que', english: 'How can we explain that', category: 'Formulation de problématique', example: 'Comment expliquer que ce phénomène persiste ?', note: '[soutenu]' },
  ],
  culturalNotes: [
    {
      title: 'La dissertation française : un genre culturel',
      content:
        "From the bac de français (16 years) to philosophy in terminale (17-18 years), to Sciences Po's competitive entrance essays, to university exam essays in literature, philosophy, history, and law, the French education system drills the introduction/development/conclusion structure with the problématique as central pivot. Foreign students often describe this as the hardest cultural adjustment when entering the French academic system. The structure taught in this lesson is genuinely an invention of French pedagogical culture — accessible but not universal.",
    },
    {
      title: 'Le DELF B2 : le passeport linguistique français',
      content:
        "The DELF B2 is the minimum required level for international students enrolling in a French licence, BTS, or DUT programme. It is also a frequent requirement for naturalisation procedures and many professional qualifications in Francophone countries. The production écrite (45 minutes, 250+ words, formal text) is graded on four criteria: pertinence, structure, register, and grammatical range. This lesson directly targets all four.",
    },
    {
      title: 'Le commentaire composé et l’explication de texte',
      content:
        "Two genres dominate the French baccalauréat: the commentaire composé (an organised close reading of a text, with a problématique and a two-part plan) and the explication de texte (a linear analysis). Both demand the discourse skills taught here. French students are tested on these from sixteen onwards. Once you have internalised the conventions, reading Le Monde's editorials or Le Figaro Magazine's opinion pieces becomes much easier — they follow the same logic.",
    },
    {
      title: 'La presse d’opinion française',
      content:
        "Le Monde, Libération, Le Figaro, Le Canard enchaîné, AOC, Mediapart — France retains an exceptional density of opinion-driven daily and weekly press. Each cultivates a recognisable rhetorical voice; each models formal argumentation at its best. Reading the éditorial of Le Monde each weekday morning is the single most effective preparation for the DELF B2 production écrite. The editorial follows the introduction-development-conclusion structure with metronomic regularity.",
    },
    {
      title: 'La laïcité, un thème d’examen récurrent',
      content:
        "Topics about la laïcité (the principle of secularism, codified by the 1905 law of separation between Churches and the State) recur frequently as DELF B2 essay prompts. The topic is politically charged and intellectually demanding, requiring the writer to navigate competing values (religious freedom vs. neutrality of public space, individual conscience vs. social cohesion). Becoming familiar with the contours of this debate — through Le Monde's opinion pages or essays by Caroline Fourest, Jean Baubérot, Bernard Cazeneuve — is good intellectual preparation, regardless of the actual exam topic.",
    },
  ],
  exercises: [
    {
      id: 'l57-structure-id',
      type: 'matching',
      question: 'Associez chaque élément structurel à sa fonction.',
      pairs: [
        { french: 'accroche', english: 'phrase d’ouverture concrète' },
        { french: 'problématique', english: 'la question centrale formulée comme question' },
        { french: 'thèse', english: 'la première position défendue' },
        { french: 'antithèse', english: 'la position opposée ou la nuance' },
        { french: 'synthèse', english: 'la position nuancée réconciliant les deux' },
        { french: 'ouverture', english: 'la question plus large à la conclusion' },
      ],
      explanation: 'Maîtriser ces six éléments est la clé du DELF B2 production écrite.',
    },
    {
      id: 'l57-problematique',
      type: 'rewrite',
      question:
        'Transformez chaque énoncé descriptif en problématique (question commençant par « Dans quelle mesure », « En quoi », ou équivalent).',
      instruction_type: 'reported_speech',
      items: [
        {
          original: "Sujet : le télétravail est une libération.",
          expected: "Dans quelle mesure le télétravail constitue-t-il une libération du salarié ?",
          explanation: '« Dans quelle mesure » + inversion : problématise sans préjuger.',
        },
        {
          original: 'Sujet : les réseaux sociaux nuisent au débat démocratique.',
          expected: 'En quoi les réseaux sociaux modifient-ils les conditions du débat démocratique ?',
          explanation: '« En quoi » + inversion : problématise la nature du changement.',
        },
        {
          original: "Sujet : l'art contemporain divise le public.",
          expected: "Comment expliquer que l'art contemporain continue de diviser le public ?",
          explanation: '« Comment expliquer que » + indicatif : problématise la persistance.',
        },
        {
          original: 'Sujet : la mondialisation a accru les inégalités.',
          expected: 'Peut-on véritablement affirmer que la mondialisation a accru les inégalités ?',
          explanation: '« Peut-on véritablement affirmer que » : problématise l’évidence.',
        },
      ],
    },
    {
      id: 'l57-connectors-fillblank',
      type: 'fill_blank',
      question:
        "Complétez avec un connecteur d'opposition SOUTENU (pas « mais ») : « La proposition est ambitieuse. ____, sa faisabilité reste à démontrer. »",
      correct_answer: ['Toutefois', 'Cependant', 'Néanmoins', 'Or'],
      explanation: 'Tous ces connecteurs marquent une opposition soutenue.',
    },
    {
      id: 'l57-connectors-fillblank-2',
      type: 'fill_blank',
      question:
        "Complétez avec un connecteur d'OUVERTURE : « ____, examinons les arguments économiques. »",
      correct_answer: ['Tout d’abord', 'En premier lieu', 'Pour commencer', "Tout d'abord"],
      explanation: 'Connecteurs d’ouverture soutenus.',
    },
    {
      id: 'l57-register-correction',
      type: 'error_correction',
      question:
        "Corrigez les éléments FAMILIERS dans cette ébauche d'essai pour passer en SOUTENU.",
      items: [
        {
          incorrect: "Je pense que le télétravail c'est super pratique.",
          correct: "Il est indéniable que le télétravail présente des avantages pratiques considérables.",
          explanation: 'Je pense que → il est indéniable que ; c’est super → présente des avantages.',
        },
        {
          incorrect: "Mais y'a aussi des problèmes.",
          correct: "Toutefois, des difficultés subsistent.",
          explanation: 'Mais → toutefois ; y’a → des difficultés subsistent.',
        },
        {
          incorrect: "Les gens travaillent beaucoup à la maison maintenant.",
          correct: "Un grand nombre de salariés exercent désormais leur activité à domicile.",
          explanation: 'Les gens → les salariés ; beaucoup → un grand nombre ; maintenant → désormais.',
        },
        {
          incorrect: "Du coup, faut faire quelque chose.",
          correct: "Par conséquent, des mesures s’imposent.",
          explanation: 'Du coup → par conséquent ; faut faire quelque chose → des mesures s’imposent.',
        },
      ],
    },
    {
      id: 'l57-nominalisation-upgrade',
      type: 'rewrite',
      question: 'Réécrivez chaque phrase en STYLE NOMINAL pour le DELF B2.',
      instruction_type: 'reported_speech',
      items: [
        {
          original: "Nous avons mis en œuvre cette réforme et nous avons amélioré les conditions de travail.",
          expected: "La mise en œuvre de cette réforme a permis l'amélioration des conditions de travail.",
          explanation: 'Deux nominalisations figées et dérivées.',
        },
        {
          original: "Il faut décider rapidement parce que la situation est urgente.",
          expected: "L'urgence de la situation impose une décision rapide.",
          explanation: 'Nominalisation de l’adjectif et du verbe ; condensation.',
        },
        {
          original: "Le ministre a démissionné et tout le monde a été surpris.",
          expected: "La démission du ministre a surpris l'opinion.",
          explanation: 'Démissionner → démission ; tout le monde → l’opinion.',
        },
      ],
    },
    {
      id: 'l57-cleft-insertion',
      type: 'rewrite',
      question: "Ajoutez une mise en relief (c'est... qui / c'est... que) à chaque phrase plate.",
      instruction_type: 'reported_speech',
      items: [
        {
          original: "L'isolement constitue le principal danger du télétravail.",
          expected: "C'est l'isolement qui constitue le principal danger du télétravail.",
          explanation: 'Sujet focalisé → c’est... qui.',
        },
        {
          original: 'Le cadre juridique mérite une révision urgente.',
          expected: "C'est le cadre juridique qui mérite une révision urgente.",
          explanation: 'Sujet focalisé → c’est... qui.',
        },
        {
          original: 'Nous devons agir maintenant.',
          expected: "C'est maintenant que nous devons agir.",
          explanation: 'Adverbial temporel focalisé → c’est... que.',
        },
      ],
    },
    {
      id: 'l57-argumentation-essai',
      type: 'argumentation',
      question:
        "Rédigez un essai DELF B2 complet (4 paragraphes minimum, ~250 mots) sur le sujet : « Le télétravail est-il une libération ou une nouvelle servitude ? »",
      structure: [
        {
          label: 'Introduction (accroche + problématique + plan)',
          instruction:
            'Ouvrez par une accroche concrète (chiffre, scène, citation). Présentez le sujet. Formulez la problématique en question. Annoncez les deux ou trois parties.',
          model:
            "Selon l'INSEE, plus de 40% des cadres français travaillent à distance au moins un jour par semaine. Cette mutation, accélérée par la pandémie de 2020, redéfinit en profondeur les rapports entre vie professionnelle et vie privée. Dans quelle mesure le télétravail libère-t-il véritablement le salarié, sans risquer, en retour, de devenir une nouvelle forme d'aliénation ? Pour répondre, nous examinerons d'abord les libérations qu'il apporte, puis les servitudes inédites qu'il engendre, avant de proposer un cadre conditionnel possible.",
          connector_hints: ['Selon X', 'Dans quelle mesure', 'En quoi', 'Pour répondre, nous'],
        },
        {
          label: 'Partie 1 — thèse (libération)',
          instruction:
            "Ouvrez par « Tout d'abord » ou équivalent. Posez la thèse, soutenez-la avec deux ou trois arguments, illustrez d'un exemple.",
          model:
            "Tout d'abord, il convient de souligner que le télétravail libère le salarié de contraintes spatiales et temporelles longtemps perçues comme inéluctables. La suppression du trajet domicile-travail, qui représente en moyenne une heure par jour pour les cadres parisiens, restitue un temps précieux. De plus, l'autonomie organisationnelle qu'il accorde permet une meilleure articulation entre obligations professionnelles et engagements personnels. Force est de constater, par ailleurs, que les enquêtes de satisfaction confirment cette tendance.",
          connector_hints: ["Tout d'abord", 'Il convient de souligner que', 'De plus', 'Force est de constater'],
        },
        {
          label: 'Partie 2 — antithèse (servitude)',
          instruction:
            'Marquez la transition avec « Toutefois » ou « Cependant ». Présentez les contre-arguments. Concluez la partie par une transition vers la synthèse.',
          model:
            "Toutefois, cette libération apparente a un revers que les premières études ne sauraient masquer. L'effacement de la frontière entre espace professionnel et espace privé conduit, paradoxalement, à un allongement insidieux du temps de travail. Il en va également de l'isolement croissant des salariés et de la difficulté grandissante à maintenir des collectifs de travail. Néanmoins, ces difficultés ne condamnent pas le principe lui-même : elles invitent plutôt à en repenser les modalités.",
          connector_hints: ['Toutefois', "Il en va également de", 'Néanmoins'],
        },
        {
          label: 'Conclusion (reprise + synthèse + ouverture)',
          instruction:
            "Reprenez la problématique, formulez votre position nuancée, ouvrez sur une question plus large.",
          model:
            "Le télétravail, comme nous l'avons montré, n'est ni purement libérateur ni purement aliénant : il constitue un dispositif dont les effets dépendent étroitement du cadre institutionnel et culturel qui l'accueille. Pour qu'il tienne ses promesses, il importe que les négociations collectives encadrent strictement le droit à la déconnexion et l'organisation du travail à distance. La question, plus profondément, est celle du sens que nos sociétés donnent au travail lui-même — interrogation à laquelle aucun mode d'organisation ne saurait, à lui seul, apporter de réponse définitive.",
          connector_hints: ['Comme nous l’avons montré', 'Il importe que', 'La question, plus profondément'],
        },
      ],
      word_count_target: 250,
    },
    {
      id: 'l57-translation',
      type: 'translation',
      question:
        "Traduisez (registre soutenu) : 'It is undeniable that, while teleworking offers undeniable advantages, it engenders new constraints whose full extent is yet to be measured.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Il est indéniable que, si le télétravail offre des avantages incontestables, il engendre de nouvelles contraintes dont l'ampleur reste à mesurer.",
        "Il est indéniable que, si le télétravail offre des avantages indéniables, il engendre de nouvelles contraintes dont la portée reste à mesurer.",
      ],
      explanation: 'Connecteur soutenu (il est indéniable que) + structure si/principale + relative dont.',
    },
    {
      id: 'l57-speaking',
      type: 'speaking_prompt',
      question:
        "Présentez à voix haute, en 90 secondes, un argument formel structuré sur un sujet de société : introduction problématique + un argument + une réserve + ouverture. Utilisez au moins trois connecteurs soutenus.",
      model_answer:
        "Selon les dernières études du CNRS, le numérique aurait profondément transformé les conditions du débat public. Dans quelle mesure les réseaux sociaux contribuent-ils encore à la vie démocratique sans, en retour, en miner les fondements ? Tout d'abord, il est indéniable que ces plateformes ont élargi l'accès à l'expression publique, jadis réservée à quelques médias. Toutefois, force est de constater que cette ouverture s'est accompagnée d'une fragmentation des espaces de débat et d'une polarisation accrue des opinions. La question, dès lors, n'est plus celle de l'accès, mais celle de la qualité de la délibération collective — un enjeu auquel nos institutions doivent répondre, faute de quoi le pacte démocratique lui-même pourrait se trouver fragilisé.",
      translation:
        "According to the latest CNRS studies, the digital world is said to have deeply transformed the conditions of public debate. To what extent do social networks still contribute to democratic life without, in return, undermining its foundations? First of all, it is undeniable that these platforms have broadened access to public expression, once reserved for a few media. However, one must acknowledge that this opening has been accompanied by a fragmentation of debate spaces and an increased polarisation of opinions. The question, therefore, is no longer that of access, but that of the quality of collective deliberation — a challenge to which our institutions must respond, failing which the democratic pact itself could find itself weakened.",
      tip: "Memorise three opening connectors (Tout d'abord, En premier lieu, Pour commencer), three opposition connectors (Toutefois, Cependant, Néanmoins), and three concession connectors (Certes, Il est vrai que, Sans doute). Deploy them deliberately to scaffold your argument acoustically.",
    },
  ],
}

export default function Lesson57Page() {
  return (
    <AdvancedLessonLayout
      lessonData={lessonData}
      lessonNumber={57}
      prevHref="/lessons/advanced/56"
      prevLabel="Les Pronoms Emphatiques"
      nextHref="/lessons/advanced/58"
      nextLabel="Consolidation B2"
    />
  )
}
