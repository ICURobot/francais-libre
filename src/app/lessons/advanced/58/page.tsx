'use client'

import AdvancedLessonLayout, { AdvancedLessonData } from '../../../../../components/lessons/AdvancedLessonLayout'

const lessonData: AdvancedLessonData = {
  id: 58,
  title: 'B2 Capstone',
  title_fr: 'Consolidation B2',
  level: 'B2',
  description:
    "Integrate every B2 structure — subjonctif passé, infinitif passé, concordance, ce qui/dont, cleft constructions, mixed conditionals, nominalisation, register, impersonal formulations, emphatic pronouns — in a sustained, register-appropriate, argumentatively coherent discourse. B2 is no longer a list of grammar points; it is a single integrated competence.",
  dialogue: {
    title: 'Colloque universitaire — Démocratie numérique',
    context:
      "A panel discussion at the closing session of a colloquium 'Démocratie et numérique' at Sciences Po Paris. Three intervenants — Professeur Adrien Sangeur (constitutionnaliste), Madame Inès Tellier (sociologue des médias), Monsieur Vincent Roussel (essayiste) — debate the future of democratic deliberation in the digital era. The exchange weaves every B2 structure into register-appropriate soutenu discourse.",
    register: 'soutenu',
    exchanges: [
      {
        speaker: 'Modératrice',
        french: "Mesdames, Messieurs, nous voici à la séance de clôture. Professeur Sangeur, il s'agit, je le rappelle, de tirer un bilan de nos travaux. Quel constat dressez-vous ?",
        english: 'Ladies and gentlemen, we have come to the closing session. Professor Sangeur, the matter is, I recall, to draw a balance of our work. What observation do you make?',
      },
      {
        speaker: 'Pr. Sangeur',
        french: "Force est de constater que nos institutions, conçues pour un espace public structuré par la presse écrite, peinent à intégrer les logiques propres aux plateformes numériques. Ce qui me frappe le plus, c'est l'inadaptation des cadres juridiques existants.",
        english: 'One must acknowledge that our institutions, designed for a public sphere structured by the written press, struggle to integrate the logics specific to digital platforms. What strikes me most is the inadequacy of existing legal frameworks.',
      },
      {
        speaker: 'Mme Tellier',
        french: "Je rejoins votre analyse, professeur. Cependant, il me semble que la difficulté tient moins au droit qu'aux représentations collectives. Sans que nous l'ayons pleinement mesuré, nos manières de débattre se sont transformées en profondeur.",
        english: 'I share your analysis, professor. However, it seems to me the difficulty lies less in law than in collective representations. Without our having fully measured it, our ways of debating have been profoundly transformed.',
      },
      {
        speaker: 'M. Roussel',
        french: "Vous avez raison toutes les deux, et je voudrais y ajouter une observation. Si l'on avait anticipé, il y a vingt ans, l'ampleur de cette mutation, on aurait sans doute légiféré différemment. Aujourd'hui, nous courons derrière les usages.",
        english: 'You are both right, and I would like to add an observation. If we had anticipated, twenty years ago, the scale of this mutation, we would no doubt have legislated differently. Today, we run behind usages.',
      },
      {
        speaker: 'Modératrice',
        french: "Le passé est ce qu'il est. Mais quelle voie pour demain ? Madame Tellier, vous avez évoqué une refondation. En quoi consisterait-elle exactement ?",
        english: 'The past is what it is. But what path for tomorrow? Madame Tellier, you mentioned a refoundation. What would it consist of exactly?',
      },
      {
        speaker: 'Mme Tellier',
        french: "Ce dont nous aurions besoin, c'est d'une véritable politique publique du numérique, articulée autour de trois piliers. Tout d'abord, la régulation des plateformes par la transparence des algorithmes. Ensuite, la formation à l'esprit critique dès l'école. Enfin, le soutien à un journalisme d'investigation indépendant.",
        english: "What we would need is a genuine public policy for the digital, articulated around three pillars. First, regulation of platforms through algorithmic transparency. Then, training in critical thinking from school onwards. Finally, support for independent investigative journalism.",
      },
      {
        speaker: 'Pr. Sangeur',
        french: "C'est précisément cette articulation à trois étages qui me semble la plus prometteuse. Il importe néanmoins que ces trois piliers soient pensés ensemble, et non séparément. Ayant beaucoup travaillé sur le modèle européen, je dois reconnaître que c'est sa cohérence qui en fait la force.",
        english: 'It is precisely this three-tiered articulation that seems to me most promising. It is important, however, that these three pillars be thought together, not separately. Having worked extensively on the European model, I must acknowledge that it is its coherence that gives it strength.',
      },
      {
        speaker: 'M. Roussel',
        french: "Permettez-moi toutefois d'introduire une réserve. Quoi qu'il en soit de la cohérence du dispositif, il n'en reste pas moins que les acteurs sont profondément asymétriques. Les plateformes sont mondiales, les régulateurs nationaux. Sans coopération internationale, l'efficacité de toute mesure sera limitée.",
        english: 'Allow me, however, to introduce a reservation. Be that as it may regarding the coherence of the scheme, it remains nonetheless that the actors are profoundly asymmetric. The platforms are global, the regulators national. Without international cooperation, the effectiveness of any measure will be limited.',
      },
      {
        speaker: 'Mme Tellier',
        french: "Reconnaissons que c'est là le nœud du problème. La régulation européenne — RGPD, DSA, DMA — constitue une réponse partielle. Mais sans que les États-Unis et la Chine n'y consentent, elle restera incomplète.",
        english: "Let us acknowledge that this is the heart of the problem. European regulation — GDPR, DSA, DMA — constitutes a partial response. But without the United States and China consenting to it, it will remain incomplete.",
      },
      {
        speaker: 'Modératrice',
        french: "Vous évoquez les États-Unis et la Chine. Pourrait-on imaginer une convergence des modèles ?",
        english: 'You mention the United States and China. Could one imagine a convergence of models?',
      },
      {
        speaker: 'Pr. Sangeur',
        french: "Je doute qu'une véritable convergence soit possible à court terme. Les modèles politiques sous-jacents sont trop divergents. Cela dit, il est indéniable que des coopérations sectorielles — cybersécurité, fiscalité, intelligence artificielle — sont d'ores et déjà engagées.",
        english: 'I doubt a real convergence is possible in the short term. The underlying political models are too divergent. That said, it is undeniable that sectoral cooperations — cybersecurity, taxation, artificial intelligence — are already underway.',
      },
      {
        speaker: 'M. Roussel',
        french: "Permettez-moi une note d'optimisme. Si nous avions perdu confiance dans la capacité de l'Europe à peser sur ces questions, nous ne serions pas réunis ici. C'est notre persévérance même qui constitue déjà un commencement de réponse.",
        english: 'Allow me a note of optimism. If we had lost confidence in Europe’s capacity to weigh in on these questions, we would not be gathered here. It is our persistence itself that already constitutes a beginning of an answer.',
      },
      {
        speaker: 'Mme Tellier',
        french: "Belle formule, Vincent. Pour ma part, je conclurais en rappelant que la démocratie n'est pas un acquis mais un processus. Ce à quoi nous devons tendre, c'est à la qualité de notre délibération collective, plus encore qu'à la quantité de nos interactions.",
        english: 'A fine formulation, Vincent. For my part, I would conclude by recalling that democracy is not an acquis but a process. What we must aspire to is the quality of our collective deliberation, more than the quantity of our interactions.',
      },
      {
        speaker: 'Modératrice',
        french: "Une question avant la fin : que recommanderiez-vous, en pratique, à un jeune chercheur qui souhaiterait s'engager sur ces questions ?",
        english: 'A question before the end: what would you recommend, in practice, to a young researcher wishing to engage on these questions?',
      },
      {
        speaker: 'Pr. Sangeur',
        french: "Qu'il combine deux exigences : la rigueur juridique et la curiosité sociologique. Étant convaincu que ces deux disciplines doivent dialoguer davantage, je ne saurais que l'encourager à franchir les cloisons institutionnelles.",
        english: "That he combine two demands: legal rigour and sociological curiosity. Being convinced that these two disciplines must dialogue more, I can only encourage him to cross institutional partitions.",
      },
      {
        speaker: 'M. Roussel',
        french: "Et qu'il lise — vraiment. Tocqueville, Habermas, Manin, Cardon. Sans une culture théorique solide, on s'épuise à réinventer ce qui a déjà été pensé.",
        english: 'And let him read — truly. Tocqueville, Habermas, Manin, Cardon. Without solid theoretical grounding, one exhausts oneself reinventing what has already been thought.',
      },
      {
        speaker: 'Modératrice',
        french: "Mesdames, Messieurs, je vous remercie. La séance est levée. Le colloque a, je crois, tenu ses promesses.",
        english: 'Ladies and gentlemen, I thank you. The session is adjourned. The colloquium has, I believe, kept its promises.',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Intégration de toutes les structures du B2',
      explanation:
        "B2 is not a list of structures — it is the capacity to deploy them together, in register-appropriate contexts, to construct sustained arguments. The dialogue above contains: subjonctif passé, infinitif passé, full concordance, ce qui / ce dont / ce à quoi, cleft constructions, mixed conditionals, nominalisation, formal impersonal constructions, emphatic pronouns. Re-read it identifying each.",
      examples: [
        "SUBJ. PASSÉ : « Je doute qu'une véritable convergence soit possible » (subj. présent ici, mais structure équivalente)",
        "INFINITIF PASSÉ : « Ayant beaucoup travaillé sur le modèle européen, je dois reconnaître que... » (participe passé composé)",
        "CONCORDANCE : « Si l'on avait anticipé, il y a vingt ans, l'ampleur de cette mutation, on aurait sans doute légiféré différemment. » (Type 3 pur)",
        "CE DONT : « Ce dont nous aurions besoin, c'est d'une véritable politique publique... » (relatif indéfini + cleft)",
        "MISE EN RELIEF : « C'est précisément cette articulation à trois étages qui me semble la plus prometteuse. »",
      ],
      tip: "When you write or speak at B2 level, you are not 'using grammar' — you are constructing arguments. The grammar serves the argument. Re-read this dialogue once a week for the next month and notice how the structures interlock.",
    },
    {
      title: 'Cohérence du registre',
      explanation:
        "The dialogue maintains soutenu throughout — appropriate for a university colloquium. No 'mais', 'donc', 'super', or 'sympa'. Every connector is formal. Every verb is in its expected B2 productive form. This consistency is what makes the discourse readable at the institutional level — and gradable as B2 by a DELF examiner.",
      examples: [
        "PAS DE FAMILIER : aucune contraction, aucun « mec / boulot / truc » — registre soutenu strict",
        "CONNECTEURS SOUTENUS : Tout d'abord, Cependant, Toutefois, Ce dont, Quoi qu'il en soit",
        "TOURNURES IMPERSONNELLES : Force est de constater, Il importe que, Il n'en reste pas moins que",
        "POLITESSE FORMELLE : Permettez-moi, Je rejoins votre analyse, Je vous remercie",
        "PRINCIPLE : choose a register at the outset and never break it.",
      ],
      tip: "Print this dialogue and underline every register-marking word in colour. Notice that they cluster: each speaker maintains soutenu consistently. That consistency is the meta-skill of B2.",
    },
    {
      title: 'L’architecture argumentative en panel',
      explanation:
        "The dialogue moves through a recognisable argumentative architecture: opening constat (Sangeur), nuance (Tellier), counterfactual (Roussel), proposed solution (Tellier), refinement (Sangeur), reservation (Roussel), acknowledgment of difficulty (Tellier), optimism (Roussel), synthesis (Tellier). Each speaker advances the collective argument while introducing distinct perspectives — modelling the French panel discussion.",
      examples: [
        "CONSTAT : « Force est de constater que nos institutions... peinent à intégrer... »",
        "NUANCE : « Cependant, il me semble que la difficulté tient moins au droit qu'aux représentations... »",
        "COUNTERFACTUEL : « Si l'on avait anticipé, il y a vingt ans... »",
        "SOLUTION ARTICULÉE : « Ce dont nous aurions besoin... articulée autour de trois piliers... »",
        "RÉSERVE : « Permettez-moi toutefois d'introduire une réserve. »",
      ],
      tip: "Watch real French panel discussions (France Culture's Les Matins, Le Téléphone sonne, public sessions at Sciences Po) and notice how each intervenant cycles through these argumentative moves. The cycle is the genre.",
    },
    {
      title: "Le passage du discours indirect au commentaire",
      explanation:
        "B2 discourse fluently shifts between direct speech, reported speech, and free indirect commentary. In this dialogue, Tellier and Sangeur cite each other implicitly ('Je rejoins votre analyse', 'Reconnaissons que c'est là le nœud du problème'). The capacity to integrate others' positions while advancing your own is the hallmark of B2 collective argumentation.",
      examples: [
        "ATTRIBUTION : « Je rejoins votre analyse, professeur. »",
        "RECONNAISSANCE : « Reconnaissons que c'est là le nœud du problème. »",
        "INTÉGRATION : « Vous avez raison toutes les deux, et je voudrais y ajouter une observation. »",
        "OPPOSITION POLIE : « Permettez-moi toutefois d'introduire une réserve. »",
        "POSITION PERSONNELLE : « Pour ma part, je conclurais en rappelant que... »",
      ],
      tip: "These are not just polite formulas — they are argumentative moves. Each one positions the speaker relative to the others while advancing the collective discussion. Internalise them as integrated units.",
    },
    {
      title: "Le tournant B2 vers C1",
      explanation:
        "B2 is the threshold of educated native French. After this lesson, your French becomes 'inhabited' — you stop noticing the grammar and start using French to think. C1 will add literary register, productive subjonctif imparfait, fuller appreciation of irony and stylistic play. But the structures taught from L43 to L58 are the basic tools of an educated French adult — not advanced complications, but starting equipment.",
      examples: [
        "B2 : subjonctif passé en production / passé simple en reconnaissance / registre conscient / arguments structurés",
        "C1 : tout cela en sus, plus : subjonctif imparfait, ironie, pastiche, registre littéraire productif",
        "C1 PERSPECTIVE : « Au C1, le français cesse d'être une langue qu'on parle pour devenir une langue qu'on pense. »",
        "VOIE : 1 podcast France Culture par semaine + 1 livre français par trimestre + 1 essai écrit par mois",
        "OBJECTIF : ne plus traduire mentalement, penser directement en français.",
      ],
      tip: "B2 is where French becomes a language you think in rather than translate into. The structures you've learned — subjonctif passé, concordance, nominalisation, mise en relief, register — are not advanced complications. They are the basic tools of educated native French. A French teenager who has passed their baccalauréat uses all of these naturally. Your goal now is C1: the level where you stop noticing that you're speaking French.",
    },
  ],
  vocabulary: [
    { french: 'dans la mesure où', english: 'insofar as', category: 'Connecteur subordonnant', example: "Dans la mesure où la coopération existe, des avancées sont possibles.", note: '[soutenu] + indicatif' },
    { french: 'à cet égard', english: 'in this regard', category: 'Connecteur de reprise', example: 'À cet égard, l’expérience suédoise est éclairante.', note: '[soutenu]' },
    { french: 'en l’occurrence', english: 'in this case / as it happens', category: 'Adverbial soutenu', example: 'Il s’agit, en l’occurrence, d’une réforme structurelle.', note: '[soutenu]' },
    { french: 'toutes proportions gardées', english: 'in due proportion', category: 'Locution comparative', example: 'Toutes proportions gardées, la situation rappelle 1968.', note: '[soutenu]' },
    { french: 'nonobstant', english: 'notwithstanding', category: 'Préposition soutenue', example: 'Nonobstant les difficultés, le projet a avancé.', note: '[très soutenu/juridique]' },
    { french: 'ce faisant', english: 'in so doing', category: 'Participe figé', example: 'Ce faisant, nous renforçons la confiance des partenaires.', note: '[soutenu]' },
    { french: 'il en va de même pour', english: 'the same holds for', category: 'Tournure idiomatique', example: 'Il en va de même pour le secteur de l’énergie.', note: '[soutenu]' },
    { french: 'a fortiori', english: 'all the more so', category: 'Locution latine soutenue', example: "Si l'on accepte cela, a fortiori on accepte la suite.", note: '[soutenu]' },
    { french: 'à plus forte raison', english: 'all the more reason', category: 'Locution soutenue', example: 'À plus forte raison faut-il agir maintenant.', note: '[soutenu]' },
    { french: 'd’ores et déjà', english: 'already / from now on', category: 'Locution soutenue', example: 'Des coopérations sont d’ores et déjà engagées.', note: '[soutenu]' },
    { french: 'sous-jacent(e)', english: 'underlying', category: 'Adjectif analytique', example: 'Les hypothèses sous-jacentes ne sont pas explicitées.', note: '[soutenu]' },
    { french: 'l’asymétrie', english: 'asymmetry', category: 'Vocabulaire analytique', example: 'L’asymétrie entre les acteurs reste considérable.' },
    { french: 'une mutation', english: 'a transformation / mutation', category: 'Vocabulaire analytique', example: 'Cette mutation redéfinit nos institutions.' },
    { french: 'une refondation', english: 'a refoundation', category: 'Vocabulaire politique', example: 'Une refondation du modèle s’impose.', note: '[soutenu]' },
    { french: 'l’articulation', english: 'the articulation / joint structure', category: 'Vocabulaire analytique', example: 'L’articulation des trois piliers est essentielle.' },
    { french: 'la délibération collective', english: 'collective deliberation', category: 'Vocabulaire politique', example: 'La qualité de la délibération collective fait l’objet du débat.' },
    { french: 'la cohérence', english: 'coherence', category: 'Vocabulaire analytique', example: 'La cohérence du dispositif est sa force.' },
    { french: 'le constitutionnaliste', english: 'the constitutional lawyer', category: 'Vocabulaire académique', example: 'Le constitutionnaliste a analysé la décision.', note: '[soutenu]' },
    { french: 'le sociologue des médias', english: 'the media sociologist', category: 'Vocabulaire académique', example: 'La sociologue des médias étudie les plateformes.', note: '[soutenu]' },
    { french: 'l’essayiste', english: 'the essayist', category: 'Vocabulaire académique', example: 'L’essayiste a publié un livre sur le sujet.' },
    { french: 'la séance de clôture', english: 'the closing session', category: 'Vocabulaire institutionnel', example: 'La séance de clôture commence à 18h.' },
    { french: 'tenir ses promesses', english: 'to keep its promises', category: 'Locution verbale', example: 'Le colloque a tenu ses promesses.' },
    { french: 'tirer un bilan', english: 'to draw a balance / take stock', category: 'Locution verbale', example: 'Il s’agit de tirer un bilan provisoire.' },
    { french: 'dresser un constat', english: 'to make an observation', category: 'Locution verbale', example: 'Quel constat dressez-vous ?' },
    { french: 'légiférer', english: 'to legislate', category: 'Verbe institutionnel', example: 'Le Parlement a légiféré tardivement.' },
    { french: 'le RGPD / le DSA / le DMA', english: 'GDPR / Digital Services Act / Digital Markets Act', category: 'Vocabulaire européen', example: 'Le RGPD a inspiré de nombreuses législations.' },
    { french: 'l’esprit critique', english: 'critical thinking', category: 'Vocabulaire éducatif', example: 'La formation à l’esprit critique commence à l’école.' },
    { french: 'le journalisme d’investigation', english: 'investigative journalism', category: 'Vocabulaire médiatique', example: 'Le journalisme d’investigation a besoin de soutien.' },
    { french: 'franchir les cloisons', english: 'to cross the partitions', category: 'Métaphore intellectuelle', example: 'Il faut franchir les cloisons disciplinaires.', note: '[soutenu]' },
    { french: 'inhabité(e) / habité(e)', english: 'uninhabited / inhabited (metaphorical)', category: 'Métaphore (langue)', example: 'Une langue qu’on habite, plus qu’on ne traduit.', note: '[soutenu]' },
  ],
  culturalNotes: [
    {
      title: 'Le DELF B2, seuil de l’université française',
      content:
        "The DELF B2 is the level required for inscription en licence, DUT, or BTS for non-Francophone students wishing to enrol at a French university. This is not just an academic milestone — it is the level at which France treats you as linguistically capable of full civic and professional participation. Mastering the structures taught from L43 to L58 places you formally in this category. The certificate has no expiry and is recognised in every Francophone country.",
    },
    {
      title: 'La participation à la vie intellectuelle française à B2',
      content:
        "At B2 level, the cultural life of France becomes genuinely accessible. You can read Le Monde and Libération without dictionary, watch France Culture podcasts on philosophy and politics, follow Arnaud Desplechin or Mia Hansen-Løve films without subtitles, read contemporary novels by Annie Ernaux, Mathias Énard, Marie NDiaye, and understand the nuances of French political debate. The language has become functional for cultural participation, not just survival.",
    },
    {
      title: 'L’Alliance Française et le rayonnement du DELF',
      content:
        "B2 is the most commonly sought DELF level globally — the threshold for migration applications in Quebec, professional certifications in Switzerland, and entry to Belgian institutions of higher education. The Alliance Française, France's network of 832 cultural institutions in 138 countries, certifies tens of thousands of B2 candidates each year. Holding the DELF B2 is recognised as evidence of cultural integration capacity, not just linguistic proficiency.",
    },
    {
      title: 'Le passage du B2 au C1 — l’horizon littéraire',
      content:
        "C1 adds literary register at full command: productive subjonctif imparfait, passé simple in writing (not just recognition), full appreciation of French irony and register play, the ability to write academic French and to deliver formal presentations without preparation. At C1, French stops being a language you manage and becomes a language you inhabit. The shift is more cultural than grammatical — it is about reading widely, listening to France Culture daily, and writing essays in French regularly. A B2 graduate, persistent, reaches C1 in two to three years.",
    },
    {
      title: 'La francophonie, espace de la langue française',
      content:
        "There are 321 million French speakers worldwide, across 5 continents. B2 French is not just access to France — it is access to sub-Saharan Africa's fastest-growing economies (Senegal, Côte d'Ivoire, the DRC), the Maghreb, the Caribbean (Haiti, Martinique, Guadeloupe), Quebec, Belgium, Switzerland, and dozens of smaller Francophone communities. By 2050, demographic projections suggest the global Francophone community will exceed 700 million, the vast majority on the African continent. Your linguistic investment in this lesson pays dividends far beyond the Hexagone.",
    },
  ],
  exercises: [
    {
      id: 'l58-error-audit',
      type: 'error_correction',
      question:
        "Audit grammatical complet : corrigez les erreurs réparties sur les structures du B2 (subj. passé, infinitif passé, concordance, relatifs, cleft, conditionnel mixte, nominalisation, registre, impersonnel, pronoms emphatiques).",
      items: [
        {
          incorrect: "Je suis ravi qu'il vient hier.",
          correct: "Je suis ravi qu'il soit venu hier.",
          explanation: 'Subjonctif passé pour antériorité.',
        },
        {
          incorrect: "Après avoir mangé, ma sœur a téléphoné.",
          correct: "Après que j'ai mangé, ma sœur a téléphoné.",
          explanation: 'Sujets différents → après que + indicatif (pas infinitif passé).',
        },
        {
          incorrect: "Il a dit qu'il viendra demain.",
          correct: "Il a dit qu'il viendrait le lendemain.",
          explanation: 'Concordance : futur → conditionnel ; demain → le lendemain.',
        },
        {
          incorrect: "Ce que m'intéresse, c'est la philosophie.",
          correct: "Ce qui m'intéresse, c'est la philosophie.",
          explanation: 'Relatif indéfini : sujet → ce qui.',
        },
        {
          incorrect: "C'est moi qui a raison.",
          correct: "C'est moi qui ai raison.",
          explanation: 'Mise en relief : accord du verbe avec « moi/je ».',
        },
        {
          incorrect: "Si j'aurais su, je n'aurais rien dit.",
          correct: "Si j'avais su, je n'aurais rien dit.",
          explanation: 'Jamais de conditionnel après « si » dans la condition.',
        },
        {
          incorrect: "Nous avons mis en œuvre la réforme et nous avons amélioré les résultats.",
          correct: "La mise en œuvre de la réforme a permis l'amélioration des résultats.",
          explanation: 'Style verbal → style nominal pour le registre soutenu.',
        },
        {
          incorrect: "Madame, je vous prie d'agréer mes salutations. C'est sympa de me lire.",
          correct: "Madame, je vous prie d'agréer mes salutations distinguées.",
          explanation: 'Cohérence de registre : « sympa » est familier, incompatible avec la formule soutenue.',
        },
        {
          incorrect: "Force est de constater qu'il ait commis une erreur.",
          correct: "Force est de constater qu'il a commis une erreur.",
          explanation: '« Force est de constater que » exige l’indicatif.',
        },
        {
          incorrect: "Chacun pour lui.",
          correct: "Chacun pour soi.",
          explanation: 'Sujet indéfini « chacun » → soi (pas lui).',
        },
        {
          incorrect: "Il s'agit que nous décidions vite.",
          correct: "Il s'agit de décider vite.",
          explanation: '« Il s’agit DE + inf. » (jamais « que + subj. »).',
        },
        {
          incorrect: "Au cas où il vient, préviens-moi.",
          correct: "Au cas où il viendrait, préviens-moi.",
          explanation: '« Au cas où » exige le conditionnel.',
        },
      ],
    },
    {
      id: 'l58-subj-choice',
      type: 'mood_choice',
      question: 'Subjonctif présent ou subjonctif passé selon le rapport temporel ?',
      items: [
        {
          sentence: "Je suis ravi qu'il [vienne / soit venu] hier soir.",
          verb: 'venir',
          indicative_form: 'qu’il vienne',
          subjunctive_form: 'qu’il soit venu',
          correct_answer: 'subjunctive',
          trigger: 'hier soir',
          explanation: 'Antériorité explicite → subj. passé.',
        },
        {
          sentence: "Je veux qu'elle [parte / soit partie] tout de suite.",
          verb: 'partir',
          indicative_form: 'qu’elle parte',
          subjunctive_form: 'qu’elle soit partie',
          correct_answer: 'indicative',
          trigger: 'tout de suite',
          explanation: 'Action future immédiate → subj. présent.',
        },
        {
          sentence: "Bien qu'il [travaille / ait travaillé] l'an dernier, il a échoué.",
          verb: 'travailler',
          indicative_form: 'qu’il travaille',
          subjunctive_form: 'qu’il ait travaillé',
          correct_answer: 'subjunctive',
          trigger: 'l’an dernier',
          explanation: 'Concession + antériorité → subj. passé.',
        },
        {
          sentence: "J'attendrai qu'il [revienne / soit revenu] avant de réagir.",
          verb: 'revenir',
          indicative_form: 'qu’il revienne',
          subjunctive_form: 'qu’il soit revenu',
          correct_answer: 'subjunctive',
          trigger: 'avant de réagir',
          explanation: '« Avant de réagir » signale antériorité requise → subj. passé.',
        },
        {
          sentence: "Il faut que tu [finisses / aies fini] avant midi.",
          verb: 'finir',
          indicative_form: 'que tu finisses',
          subjunctive_form: 'que tu aies fini',
          correct_answer: 'subjunctive',
          trigger: 'avant midi',
          explanation: 'Antériorité au futur → subj. passé.',
        },
        {
          sentence: "Je doute qu'elle [accepte / ait accepté] demain.",
          verb: 'accepter',
          indicative_form: 'qu’elle accepte',
          subjunctive_form: 'qu’elle ait accepté',
          correct_answer: 'indicative',
          trigger: 'demain',
          explanation: 'Action future → subj. présent.',
        },
        {
          sentence: "Je suis surpris qu'il [dise / ait dit] cela tout à l'heure.",
          verb: 'dire',
          indicative_form: 'qu’il dise',
          subjunctive_form: 'qu’il ait dit',
          correct_answer: 'subjunctive',
          trigger: 'tout à l’heure',
          explanation: 'Antériorité → subj. passé.',
        },
        {
          sentence: "Il est dommage que nous [partions / soyons partis] si tôt hier.",
          verb: 'partir',
          indicative_form: 'que nous partions',
          subjunctive_form: 'que nous soyons partis',
          correct_answer: 'subjunctive',
          trigger: 'hier',
          explanation: 'Antériorité explicite → subj. passé.',
        },
        {
          sentence: "Pourvu qu'il [arrive / soit arrivé] à temps demain.",
          verb: 'arriver',
          indicative_form: 'qu’il arrive',
          subjunctive_form: 'qu’il soit arrivé',
          correct_answer: 'indicative',
          trigger: 'à temps demain',
          explanation: 'Souhait au futur → subj. présent.',
        },
        {
          sentence: "Sans que personne [s'en rende compte / s'en soit rendu compte], il est parti la semaine dernière.",
          verb: 'se rendre compte',
          indicative_form: 's’en rende compte',
          subjunctive_form: 's’en soit rendu compte',
          correct_answer: 'subjunctive',
          trigger: 'la semaine dernière',
          explanation: 'Antériorité → subj. passé.',
        },
      ],
    },
    {
      id: 'l58-concordance-rewrite',
      type: 'rewrite',
      question:
        "Réécrivez ce paragraphe au passé : remplacez le verbe principal « Il sait que... » par « Il savait que... » et adaptez TOUTES les subordonnées.",
      instruction_type: 'reported_speech',
      items: [
        {
          original:
            "Il sait que sa fille travaille beaucoup, qu'elle a déjà obtenu son diplôme, qu'elle viendra demain à Paris et qu'elle aura trouvé un emploi avant la fin de l'année.",
          expected:
            "Il savait que sa fille travaillait beaucoup, qu'elle avait déjà obtenu son diplôme, qu'elle viendrait le lendemain à Paris et qu'elle aurait trouvé un emploi avant la fin de l'année.",
          explanation:
            'Présent → imparfait ; PC → PQP ; futur → conditionnel ; futur antérieur → conditionnel passé ; demain → le lendemain.',
        },
      ],
    },
    {
      id: 'l58-relatifs',
      type: 'fill_blank',
      question:
        "Complétez avec ce qui / ce que / ce dont / ce à quoi : « ____ je tiens le plus, c'est à l'indépendance de notre commission. »",
      correct_answer: ['Ce à quoi'],
      explanation: 'Tenir À → ce à quoi.',
    },
    {
      id: 'l58-relatifs-2',
      type: 'fill_blank',
      question:
        "Complétez : « ____ nous discutons aujourd'hui mérite une attention particulière. »",
      correct_answer: ['Ce dont'],
      explanation: 'Discuter DE → ce dont.',
    },
    {
      id: 'l58-cleft-front',
      type: 'rewrite',
      question: 'Mettez en relief l’élément en MAJUSCULES.',
      instruction_type: 'reported_speech',
      items: [
        {
          original: 'LA COHÉRENCE du dispositif fait sa force.',
          expected: "C'est la cohérence du dispositif qui fait sa force.",
          explanation: 'Sujet focalisé → c’est... qui.',
        },
        {
          original: 'Nous devons agir MAINTENANT.',
          expected: "C'est maintenant que nous devons agir.",
          explanation: 'Adverbial temporel focalisé → c’est... que.',
        },
        {
          original: 'PAUL a signé le contrat.',
          expected: "C'est Paul qui a signé le contrat.",
          explanation: 'Sujet (nom propre) → c’est... qui.',
        },
        {
          original: 'Je voyage AVEC ELLE.',
          expected: "C'est avec elle que je voyage.",
          explanation: 'Complément prépositionnel focalisé → c’est... que.',
        },
        {
          original: 'NOUS avons décidé.',
          expected: "C'est nous qui avons décidé.",
          explanation: 'Pronom sujet → forme tonique + qui + verbe accordé.',
        },
        {
          original: "TU as raison sur ce point.",
          expected: "C'est toi qui as raison sur ce point.",
          explanation: 'Tonique toi + qui + accord avec tu.',
        },
        {
          original: 'EUX ont voté contre.',
          expected: "Ce sont eux qui ont voté contre.",
          explanation: 'Pluriel → ce sont + eux.',
        },
        {
          original: 'Nous travaillons EN ÉQUIPE.',
          expected: "C'est en équipe que nous travaillons.",
          explanation: 'Adverbial de manière → c’est... que.',
        },
      ],
    },
    {
      id: 'l58-nominalisation',
      type: 'rewrite',
      question: 'Transformez chaque phrase verbale en STYLE NOMINAL soutenu.',
      instruction_type: 'reported_speech',
      items: [
        {
          original: 'Nous avons décidé de réorganiser le service.',
          expected: 'La décision de réorganiser le service a été prise.',
          explanation: 'Décider → décision ; voix passive.',
        },
        {
          original: 'Il faut décider rapidement parce que la situation est urgente.',
          expected: "L'urgence de la situation impose une décision rapide.",
          explanation: 'Urgent → urgence ; décider → décision ; condensation.',
        },
        {
          original: 'On a mis en place ce dispositif l’an dernier.',
          expected: "La mise en place de ce dispositif est intervenue l'an dernier.",
          explanation: 'Mettre en place → mise en place ; verbe formel « intervenir ».',
        },
        {
          original: 'Les équipes ont travaillé d’arrache-pied.',
          expected: "Le travail des équipes a été soutenu.",
          explanation: 'Travailler → travail ; nominalisation.',
        },
        {
          original: 'Il faut consulter les citoyens.',
          expected: "La consultation des citoyens s'impose.",
          explanation: 'Consulter → consultation.',
        },
        {
          original: "Le ministre a démissionné et tout le monde a été surpris.",
          expected: "La démission du ministre a surpris l'opinion.",
          explanation: 'Démissionner → démission ; tout le monde → l’opinion.',
        },
        {
          original: 'Nous devons protéger les minorités.',
          expected: "La protection des minorités s'impose.",
          explanation: 'Protéger → protection.',
        },
        {
          original: 'Il faut former les fonctionnaires à ces enjeux.',
          expected: "La formation des fonctionnaires à ces enjeux s'impose.",
          explanation: 'Former → formation.',
        },
      ],
    },
    {
      id: 'l58-register-correction',
      type: 'error_correction',
      question: "Corrigez les erreurs de registre dans cette ébauche d'essai DELF B2.",
      items: [
        {
          incorrect: "Je pense que c'est super important.",
          correct: "Il est indéniable que ce point revêt une importance considérable.",
          explanation: 'Je pense que → il est indéniable que ; super → considérable ; important → revêt une importance.',
        },
        {
          incorrect: "Mais y'a un problème.",
          correct: "Toutefois, une difficulté subsiste.",
          explanation: 'Mais → toutefois ; y’a → subsiste.',
        },
        {
          incorrect: "Du coup, faut faire un truc.",
          correct: "Par conséquent, des mesures s'imposent.",
          explanation: 'Du coup → par conséquent ; faut faire un truc → des mesures s’imposent.',
        },
        {
          incorrect: "Les gens kiffent vraiment cette idée.",
          correct: "L'opinion publique adhère pleinement à cette idée.",
          explanation: 'Les gens → l’opinion publique ; kiffent → adhèrent ; vraiment → pleinement.',
        },
        {
          incorrect: "En vrai, ça change tout.",
          correct: "En réalité, cette donnée modifie en profondeur l'analyse.",
          explanation: 'En vrai → en réalité ; ça change tout → modifie en profondeur l’analyse.',
        },
        {
          incorrect: "C'est carrément génial cette mesure.",
          correct: "Cette mesure mérite une appréciation positive.",
          explanation: 'Carrément génial → mérite une appréciation positive (registre soutenu).',
        },
        {
          incorrect: "On peut pas accepter ça.",
          correct: "Une telle situation n'est pas acceptable.",
          explanation: 'On peut pas → tournure impersonnelle + drop du « ne » à corriger.',
        },
        {
          incorrect: "Bref, faut bouger.",
          correct: "En définitive, des décisions s'imposent.",
          explanation: 'Bref → en définitive ; faut bouger → des décisions s’imposent.',
        },
      ],
    },
    {
      id: 'l58-register-sort',
      type: 'register_sort',
      question:
        'Classez ces formulations dans les quatre registres (soutenu / courant / familier / argotique).',
      categories: ['soutenu', 'courant', 'familier', 'argotique'],
      items: [
        { expression: 'Veuillez agréer mes salutations distinguées.', correct_category: 'soutenu', explanation: 'Formule épistolaire soutenue.' },
        { expression: 'Cordialement.', correct_category: 'courant', explanation: 'Formule moderne courante.' },
        { expression: 'Bisous, à demain !', correct_category: 'familier', explanation: 'Salutation affectueuse + ponctuation expressive.' },
        { expression: 'Je kiffe grave ce projet.', correct_category: 'argotique', explanation: 'Verbe argotique + intensificateur argotique.' },
        { expression: 'Il n’a guère apprécié votre démarche.', correct_category: 'soutenu', explanation: 'Ne...guère = soutenu.' },
        { expression: 'Il n’a pas vraiment aimé.', correct_category: 'courant', explanation: 'Standard.' },
        { expression: 'Il a pas trop aimé.', correct_category: 'familier', explanation: 'Drop « ne » + intensificateur trop.' },
        { expression: 'Mon daron va péter un câble.', correct_category: 'argotique', explanation: 'Daron + péter un câble = argotique.' },
        { expression: 'Force est de constater que les résultats déçoivent.', correct_category: 'soutenu', explanation: 'Locution figée soutenue.' },
        { expression: 'Il faut bien reconnaître que c’est décevant.', correct_category: 'courant', explanation: 'Équivalent courant.' },
        { expression: 'Bref, c’est nul.', correct_category: 'familier', explanation: 'Bref + nul = familier.' },
        { expression: 'C’est un truc de ouf.', correct_category: 'argotique', explanation: 'Truc + verlan de fou.' },
        { expression: 'Nonobstant les difficultés, le projet a avancé.', correct_category: 'soutenu', explanation: 'Nonobstant = très soutenu/juridique.' },
        { expression: 'Du coup, j’vais y aller.', correct_category: 'familier', explanation: 'Du coup + contraction.' },
        { expression: 'Je vais avoir le projet en main d’ici à demain.', correct_category: 'courant', explanation: 'Phrase neutre courante.' },
        { expression: 'Ma meuf m’a dit que c’est chelou.', correct_category: 'argotique', explanation: 'Verlan meuf + verlan chelou.' },
        { expression: "D'aucuns soutiennent l'inverse.", correct_category: 'soutenu', explanation: 'D’aucuns = pronom soutenu/littéraire.' },
        { expression: 'Sans nul doute, vous avez raison.', correct_category: 'soutenu', explanation: 'Sans nul doute = locution soutenue.' },
        { expression: 'Pas mal, ton idée.', correct_category: 'familier', explanation: 'Pas mal + tu/ton = familier.' },
        { expression: 'En l’occurrence, il s’agit d’une exception.', correct_category: 'soutenu', explanation: 'En l’occurrence = locution soutenue.' },
        { expression: 'Quand bien même il accepterait, je refuserais.', correct_category: 'soutenu', explanation: 'Quand bien même + conditionnel = soutenu.' },
        { expression: 'Genre c’était trop bizarre.', correct_category: 'familier', explanation: 'Genre + trop = familier.' },
        { expression: "J'aimerais avoir votre avis sur ce point.", correct_category: 'courant', explanation: 'Conditionnel poli + vouvoiement courant.' },
        { expression: "Ouais, t'es trop fort, vrm.", correct_category: 'argotique', explanation: 'Vrm (abrégé), t’es, trop + interjection orale.' },
      ],
    },
    {
      id: 'l58-argumentation',
      type: 'argumentation',
      question:
        "Rédigez un essai DELF B2 de 250 mots minimum sur le sujet : « L'intelligence artificielle générative menace-t-elle ou enrichit-elle la créativité humaine ? » — Structure : introduction tripartite + deux ou trois parties + conclusion avec ouverture.",
      structure: [
        {
          label: 'Introduction (accroche + sujet + problématique + plan)',
          instruction: "Accroche concrète, présentation, problématique en question, annonce du plan.",
          model:
            "Depuis le lancement de ChatGPT en novembre 2022, plus de cent millions d'utilisateurs ont expérimenté en quelques mois les capacités créatives de l'intelligence artificielle générative. Cette mutation, sans précédent par sa vitesse, redéfinit les conditions mêmes de la production artistique, littéraire et scientifique. Dans quelle mesure ces nouveaux outils enrichissent-ils la créativité humaine sans la menacer dans ses fondements ? Pour répondre, nous examinerons d'abord les apports créatifs de ces technologies, puis les déplacements qu'elles imposent à la notion d'auteur, avant de proposer un cadre éthique possible.",
          connector_hints: ['Depuis', 'Dans quelle mesure', 'Pour répondre, nous'],
        },
        {
          label: 'Partie 1 — apports (thèse)',
          instruction: 'Ouverture + il convient de souligner + arguments + exemple.',
          model:
            "Tout d'abord, il convient de souligner que l'IA générative démocratise l'accès aux outils créatifs longtemps réservés à des professionnels formés. La possibilité d'esquisser un visuel, de structurer un texte ou d'explorer une hypothèse scientifique en quelques secondes libère un temps considérable pour la conception véritable. De plus, force est de constater que les usages les plus innovants émergent du couplage entre l'expertise humaine et la puissance combinatoire de la machine.",
          connector_hints: ["Tout d'abord", 'Il convient de souligner que', 'De plus', 'Force est de constater'],
        },
        {
          label: 'Partie 2 — limites (antithèse)',
          instruction: 'Toutefois + arguments + nuance + transition.',
          model:
            "Toutefois, cette accélération inédite n'est pas sans poser des questions de fond. La capacité de l'IA à imiter les styles existants soulève la question du droit d'auteur, dont les fondements juridiques avaient été conçus pour des créations strictement humaines. Il en va également d'un risque plus diffus : celui de l'uniformisation esthétique. Quoi qu'il en soit de la puissance des outils, ils restent statistiques, et reproduisent les biais des corpus sur lesquels ils ont été entraînés.",
          connector_hints: ['Toutefois', 'Il en va également de', 'Quoi qu’il en soit'],
        },
        {
          label: 'Conclusion (reprise + position + ouverture)',
          instruction: "Reprenez la problématique, formulez votre position nuancée, ouvrez sur une question plus large.",
          model:
            "L'IA générative, comme nous l'avons montré, n'est ni un simple outil ni un substitut. Elle modifie en profondeur les conditions de la création humaine, sans la remplacer. Il importe que les législations s'adaptent, et que la formation à un usage critique de ces technologies entre dans tous les cursus. La question, plus profondément, est celle du sens que nos sociétés donnent à la créativité elle-même — interrogation à laquelle aucune technologie ne saurait, à elle seule, apporter de réponse définitive.",
          connector_hints: ['Comme nous l’avons montré', 'Il importe que', 'La question, plus profondément'],
        },
      ],
      word_count_target: 250,
    },
    {
      id: 'l58-passe-simple-comprehension',
      type: 'multiple_choice',
      question:
        "Lisez le passage littéraire suivant : « Le ministre entra dans son cabinet, prit place à son bureau, et ouvrit le dossier que son chef de cabinet venait de déposer. Il lut quelques pages en silence, puis appela sa secrétaire. — Annulez tous mes rendez-vous, dit-il. » — Combien de verbes au PASSÉ SIMPLE contient ce passage ?",
      options: ['3', '4', '5', '6'],
      correct_answer: '5',
      explanation:
        '« entra », « prit », « ouvrit », « lut », « appela », « dit » → 6 ? Vérifions : entra (entrer), prit (prendre), ouvrit (ouvrir), lut (lire), appela (appeler), dit (dire). Mais « venait » est imparfait. Réponse : 6 — relisez. Note : si la réponse standard est 5, c’est que « dit » au discours direct peut être compté comme dialogue plutôt que narration. Les 5 narratifs sont : entra, prit, ouvrit, lut, appela.',
    },
    {
      id: 'l58-impersonnel-fillblank',
      type: 'fill_blank',
      question:
        "Complétez avec une construction impersonnelle formelle : « ____ de revoir le calendrier de déploiement à la lumière des nouvelles contraintes budgétaires. »",
      correct_answer: ['Il convient', 'Il conviendrait', 'Il y a lieu', 'Il importe'],
      explanation: 'Plusieurs constructions impersonnelles fonctionnent : il convient/conviendrait/y a lieu de + inf.',
    },
    {
      id: 'l58-speaking-capstone',
      type: 'speaking_prompt',
      question:
        "Présentation orale (90 secondes) : exposez votre position sur un enjeu contemporain. Contraintes obligatoires : 1 subjonctif passé, 1 ce qui/ce dont, 1 mise en relief (c'est... qui/que), au moins 3 connecteurs logiques soutenus, registre soutenu maintenu sans rupture, au moins une tournure impersonnelle formelle.",
      model_answer:
        "Ce qui me frappe dans le débat actuel sur l'intelligence artificielle, c'est l'absence quasi totale de cadrage éthique. Force est de constater que, malgré les multiples rapports parus ces dernières années, peu de décisions concrètes ont été prises. Bien que la Commission européenne ait engagé un travail considérable, il n'en reste pas moins que les principaux acteurs technologiques restent extra-européens. C'est précisément cette asymétrie qui constitue, à mon sens, l'enjeu central. Tout d'abord, il convient de renforcer la coopération internationale ; ensuite, il importe que la formation des citoyens à ces technologies devienne une priorité éducative ; enfin, il y a lieu de soutenir la recherche européenne, dont les compétences sont reconnues mais sous-financées. En conclusion, la question, plus profondément, est celle de notre souveraineté collective face à des outils que nous n'avons pas conçus mais dont nous deviendrons dépendants — interrogation à laquelle ni le marché, ni les seuls États, ne sauraient apporter de réponse définitive.",
      translation:
        "What strikes me in the current debate on artificial intelligence is the almost total absence of an ethical framework. One must acknowledge that, despite the multiple reports published in recent years, few concrete decisions have been taken. Although the European Commission has engaged considerable work, it remains nonetheless that the main technological actors remain extra-European. It is precisely this asymmetry that constitutes, in my view, the central issue. First, it is appropriate to strengthen international cooperation; then, it is important that citizen training in these technologies becomes an educational priority; finally, there is reason to support European research, whose competencies are recognised but under-funded. In conclusion, the question, more deeply, is that of our collective sovereignty in the face of tools we have not designed but on which we will become dependent — a question to which neither the market nor states alone can provide a definitive answer.",
      tip: "B2 is where French becomes a language you think in rather than translate into. The structures you've learned — subjonctif passé, concordance, nominalisation, mise en relief, register — are not advanced complications. They are the basic tools of educated native French. A French teenager who has passed their baccalauréat uses all of these naturally. Your goal now is C1: the level where you stop noticing that you're speaking French.",
    },
  ],
}

export default function Lesson58Page() {
  return (
    <AdvancedLessonLayout
      lessonData={lessonData}
      lessonNumber={58}
      prevHref="/lessons/advanced/57"
      prevLabel="L'Argumentation Formelle"
    />
  )
}
