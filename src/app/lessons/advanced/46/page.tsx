'use client'

import AdvancedLessonLayout, { AdvancedLessonData } from '../../../../../components/lessons/AdvancedLessonLayout'

const lessonData: AdvancedLessonData = {
  id: 46,
  title: 'The Passé Simple',
  title_fr: 'Le Passé Simple',
  level: 'B2',
  description:
    "Learn to recognise and parse the passé simple in literary and journalistic French — without ever producing it. After this lesson, you'll be able to read Camus, Flaubert and Le Monde Diplomatique without stopping at unfamiliar verb forms.",
  dialogue: {
    title: 'Discussion littéraire',
    context:
      "A French literature teacher (Mme Cassan) and her student (Yacine) discuss 'L'Étranger' by Camus in the lycée corridor. They alternate between quoted literary passages (in the passé simple — soutenu) and their everyday discussion of those passages (in the passé composé — courant). The register shift between quotation and conversation is the central pedagogical point.",
    register: 'courant',
    exchanges: [
      {
        speaker: 'Mme Cassan',
        french: "Vous avez relu le passage que je vous avais demandé pour aujourd'hui ?",
        english: 'Have you re-read the passage I asked you to read for today?',
      },
      {
        speaker: 'Yacine',
        french: "Oui, madame. La première phrase m'a frappé : « Aujourd'hui, maman est morte. » Mais c'est juste après que ça devient bizarre.",
        english: 'Yes, miss. The first sentence struck me: "Today, mother died." But it’s just after that things get strange.',
      },
      {
        speaker: 'Mme Cassan',
        french: "Lisez-moi la phrase qui suit.",
        english: 'Read me the sentence that follows.',
      },
      {
        speaker: 'Yacine',
        french: "« Ou peut-être hier, je ne sais pas. J'ai reçu un télégramme de l'asile : ‘Mère décédée. Enterrement demain.’ »",
        english: '"Or perhaps yesterday, I don’t know. I received a telegram from the home: ‘Mother deceased. Funeral tomorrow.’"',
      },
      {
        speaker: 'Mme Cassan',
        french: "Bien. Et maintenant le passage de la plage, plus loin dans le livre. Vous remarquez quelque chose ?",
        english: "Good. And now the beach passage, further on in the book. Do you notice anything?",
      },
      {
        speaker: 'Yacine',
        french: "« Le soleil tomba un peu plus bas dans le ciel : quelques minutes encore, et il plongerait dans la mer. » Là, c'est différent. « Tomba », c'est pas du passé composé.",
        english: '"The sun sank a little further in the sky: a few more minutes, and it would plunge into the sea." Here, it’s different. "Tomba" isn’t passé composé.',
      },
      {
        speaker: 'Mme Cassan',
        french: "Exactement. C'est le passé simple. « Tomba » vient de tomber, troisième personne du singulier. Camus l'utilise pour le récit ; au début du roman, il employait le passé composé pour le journal intime de Meursault.",
        english: 'Exactly. It’s the passé simple. "Tomba" comes from tomber, third-person singular. Camus uses it for narrative; at the start of the novel, he used the passé composé for Meursault’s diary.',
      },
      {
        speaker: 'Yacine',
        french: "Alors « il tira sur l'Arabe », c'est aussi du passé simple ?",
        english: 'So "he shot at the Arab" is also passé simple?',
      },
      {
        speaker: 'Mme Cassan',
        french: "Oui. « Tira » vient de tirer. Et « il fit feu quatre fois » — « fit » vient de faire. Vous voyez ? Ce sont des formes courtes, sèches, comme un récit de fait divers.",
        english: 'Yes. "Tira" comes from tirer. And "he fired four times" — "fit" comes from faire. You see? Short, dry forms, like the prose of a news brief.',
      },
      {
        speaker: 'Yacine',
        french: "Mais en cours, on ne nous apprend pas à conjuguer le passé simple. Pourquoi ?",
        english: "But in class, we’re not taught how to conjugate the passé simple. Why?",
      },
      {
        speaker: 'Mme Cassan',
        french: "Parce qu'en français moderne, on ne le produit plus ; on ne fait que le lire. Quand vous discuterez du livre avec vos camarades, vous direz « Meursault a tiré », pas « il tira ». Le passé simple appartient au narrateur écrit.",
        english: "Because in modern French we no longer produce it; we only read it. When you discuss the book with your classmates, you’ll say 'Meursault has shot', not 'he shot'. The passé simple belongs to the written narrator.",
      },
      {
        speaker: 'Yacine',
        french: "Donc pour le bac, on doit le reconnaître mais pas l'utiliser nous-mêmes ?",
        english: 'So for the bac, we have to recognise it but not use it ourselves?',
      },
      {
        speaker: 'Mme Cassan',
        french: "Voilà. Quand vous tomberez sur « il vint », « il dit », « il fut », vous saurez que c'est venir, dire, être. C'est l'objectif. À vous de jouer sur le passage suivant : repérez tous les passés simples.",
        english: 'That’s it. When you come across "he came", "he said", "he was", you’ll know that’s venir, dire, être. That’s the objective. Your turn: spot all the passés simples in the next passage.',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Formation des verbes en -er',
      explanation:
        'Verbs ending in -er form their passé simple by adding -ai, -as, -a, -âmes, -âtes, -èrent to the stem (the infinitive minus -er). The third-person singular ends in -a; the third-person plural ends in -èrent. These two forms account for nearly all -er verb occurrences in literary texts.',
      examples: [
        'parler → je parlai, tu parlas, il parla, nous parlâmes, vous parlâtes, ils parlèrent',
        'tomber → il tomba, ils tombèrent',
        'entrer → il entra, ils entrèrent',
        'regarder → elle regarda, elles regardèrent',
        'aller (irrégulier mais en -er) → il alla, ils allèrent',
      ],
      tip: "If a third-person singular verb ends in -a (not -ait, not -e), it's almost certainly passé simple of an -er verb. Don't confuse it with the imparfait (which ends in -ait) or the present (which ends in -e for -er verbs).",
    },
    {
      title: 'Formation des verbes en -ir et -re (groupe -is)',
      explanation:
        'Most -ir and -re verbs follow the pattern -is, -is, -it, -îmes, -îtes, -irent. The third-person singular ends in -it; the third-person plural in -irent. This includes finir, partir, sortir, prendre, mettre, dire, faire, voir, and most regular -ir/-re verbs.',
      examples: [
        'finir → il finit, ils finirent',
        'partir → elle partit, elles partirent',
        'prendre → il prit, ils prirent',
        'dire → elle dit, elles dirent',
        'faire → il fit, ils firent / voir → il vit, ils virent',
      ],
      tip: 'The third-person singular passé simple of -ir/-re verbs is identical in spelling to the third-person singular passé simple of -re verbs ending in -it (he said = il dit, he wrote = il écrivit). When you see "il dit", context tells you whether it is present tense or passé simple.',
    },
    {
      title: 'Formation des verbes irréguliers (groupe -us)',
      explanation:
        'A smaller class of irregular verbs forms the passé simple with -us, -us, -ut, -ûmes, -ûtes, -urent. These are the most important to memorise for reading: être, avoir, pouvoir, vouloir, savoir, devoir, falloir, connaître, lire, vivre, plaire.',
      examples: [
        'être → je fus, il fut, ils furent',
        'avoir → j’eus, il eut, ils eurent',
        'pouvoir → il put, ils purent',
        'vouloir → il voulut, ils voulurent',
        'savoir → il sut, ils surent / devoir → il dut, ils durent / connaître → il connut',
      ],
      tip: 'A third-person singular ending in -ut or -ût (with circumflex) is almost certainly a -us-class passé simple. The -us class is small enough that you can memorise it as a closed list.',
    },
    {
      title: 'Formes hyper-irrégulières (à mémoriser)',
      explanation:
        'A handful of verbs have passé simple forms that follow no productive pattern. These are extremely frequent in literature and must be memorised as vocabulary items, not derived from rules.',
      examples: [
        'venir → il vint, ils vinrent / tenir → il tint, ils tinrent',
        'voir → il vit, ils virent / naître → il naquit, ils naquirent',
        'mourir → il mourut, ils moururent / écrire → il écrivit',
        'craindre → il craignit / peindre → il peignit / joindre → il joignit',
        'GROUPE EN -INT : venir, tenir et leurs composés (devenir → il devint, revenir → il revint)',
      ],
      tip: "When you hit a form like 'il vint' or 'il tint', don't panic — these come from venir and tenir. They look strange because the stem itself shifts. Treat them as separate vocabulary entries.",
    },
    {
      title: 'Registre et coexistence avec d’autres temps littéraires',
      explanation:
        "The passé simple is literary written French — novels, formal journalism, historical writing, fairy tales. In a typical literary paragraph it pairs with the imparfait (descriptions/states) just as the passé composé pairs with the imparfait in spoken French. The subjonctif imparfait and subjonctif plus-que-parfait also co-occur in this register and must be recognised but never produced.",
      examples: [
        'NARRATIF : Le soleil tomba ; il fit chaud ; elle entra. (passé simple = événements ponctuels)',
        'DESCRIPTIF : Il faisait chaud ; le soleil baissait ; elle paraissait fatiguée. (imparfait = arrière-plan)',
        "LITTÉRAIRE : Il fallait qu'elle parlât. (subj. imparfait — à reconnaître, jamais produire)",
        "LITTÉRAIRE : Il était content qu'elle fût venue. (subj. PQP — reconnaissance)",
        'ÉQUIVALENCE : « il tira » (PS littéraire) = « il a tiré » (PC oral et écrit informel)',
      ],
      tip: 'When you read literary French, mentally translate each passé simple into its passé composé equivalent — same meaning, different register. This is the bridge that makes Camus, Flaubert and Zola fluent reading at B2.',
    },
  ],
  vocabulary: [
    { french: 'il dit (PS)', english: 'he said (literary)', category: 'Passé simple — verbe fréquent', example: 'Il dit alors une phrase étrange.', note: '= il a dit (oral)' },
    { french: 'il fit (PS)', english: 'he did / made (literary)', category: 'Passé simple — verbe fréquent', example: 'Il fit feu quatre fois.', note: '= il a fait' },
    { french: 'il fut (PS)', english: 'he was (literary)', category: 'Passé simple — verbe fréquent', example: 'Il fut surpris par la nouvelle.', note: '= il a été' },
    { french: 'il eut (PS)', english: 'he had (literary)', category: 'Passé simple — verbe fréquent', example: 'Il eut un moment d’hésitation.', note: '= il a eu' },
    { french: 'il vint (PS)', english: 'he came (literary)', category: 'Passé simple — hyper-irrégulier', example: 'Il vint sans prévenir.', note: '= il est venu' },
    { french: 'il vit (PS)', english: 'he saw (literary)', category: 'Passé simple — hyper-irrégulier', example: 'Il vit la mer pour la première fois.', note: '= il a vu' },
    { french: 'il prit (PS)', english: 'he took (literary)', category: 'Passé simple — irrégulier', example: 'Il prit le train du matin.', note: '= il a pris' },
    { french: 'il alla (PS)', english: 'he went (literary)', category: 'Passé simple — irrégulier', example: 'Il alla droit à la fenêtre.', note: '= il est allé' },
    { french: 'il put (PS)', english: 'he could (literary)', category: 'Passé simple — irrégulier', example: 'Il ne put retenir un sourire.', note: '= il a pu' },
    { french: 'il voulut (PS)', english: 'he wanted (literary)', category: 'Passé simple — irrégulier', example: 'Il voulut répondre, mais se tut.', note: '= il a voulu' },
    { french: 'il sut (PS)', english: 'he knew (literary)', category: 'Passé simple — irrégulier', example: 'Il sut qu’il avait perdu.', note: '= il a su' },
    { french: 'il dut (PS)', english: 'he had to (literary)', category: 'Passé simple — irrégulier', example: 'Il dut s’incliner.', note: '= il a dû' },
    { french: 'il parut (PS)', english: 'he appeared (literary)', category: 'Passé simple — irrégulier', example: 'Il parut surpris.', note: '= il a paru' },
    { french: 'il sembla (PS)', english: 'he seemed (literary)', category: 'Passé simple — régulier -er', example: 'Il sembla hésiter.', note: '= il a semblé' },
    { french: 'il songea (PS)', english: 'he thought / mused (literary)', category: 'Passé simple — régulier -er', example: 'Il songea longuement à son enfance.', note: '= il a songé' },
    { french: 'il murmura (PS)', english: 'he murmured (literary)', category: 'Passé simple — régulier -er', example: 'Il murmura quelques mots.', note: '= il a murmuré' },
    { french: 'ils parlèrent (PS)', english: 'they spoke (literary)', category: 'Passé simple — 3e plur. -er', example: 'Ils parlèrent toute la nuit.', note: '= ils ont parlé' },
    { french: 'ils firent (PS)', english: 'they did / made (literary)', category: 'Passé simple — 3e plur. irrég.', example: 'Ils firent semblant de ne rien voir.', note: '= ils ont fait' },
    { french: 'ils vinrent (PS)', english: 'they came (literary)', category: 'Passé simple — 3e plur. hyper-irrég.', example: 'Ils vinrent saluer leur grand-père.', note: '= ils sont venus' },
    { french: 'ils furent (PS)', english: 'they were (literary)', category: 'Passé simple — 3e plur. irrég.', example: 'Ils furent reçus à minuit.', note: '= ils ont été' },
    { french: 'un récit', english: 'a narrative', category: 'Métalangage littéraire', example: 'Le récit est mené à la troisième personne.' },
    { french: 'un narrateur', english: 'a narrator', category: 'Métalangage littéraire', example: 'Le narrateur omniscient sait tout des personnages.' },
    { french: 'un point de vue', english: 'a viewpoint', category: 'Métalangage littéraire', example: 'Le point de vue interne reflète une seule conscience.' },
    { french: 'un fait divers', english: 'a news brief / human-interest story', category: 'Vocabulaire journalistique', example: 'L’incipit imite la sécheresse d’un fait divers.' },
    { french: 'l’asile', english: 'the home (for the elderly)', category: 'Vocabulaire littéraire', example: 'Meursault reçoit un télégramme de l’asile.', note: '[littéraire/daté]' },
    { french: 'un télégramme', english: 'a telegram', category: 'Vocabulaire littéraire', example: 'Un télégramme arriva ce matin-là.', note: '[daté]' },
    { french: 'frappant(e)', english: 'striking', category: 'Adjectif évaluatif', example: 'C’est une ouverture frappante.' },
    { french: 'sec, sèche (style)', english: 'dry, terse (style)', category: 'Adjectif évaluatif', example: 'Le style sec convient au sujet.' },
  ],
  culturalNotes: [
    {
      title: 'Le canon littéraire français et le passé simple',
      content:
        "Flaubert, Zola, Maupassant, Camus, Duras, Modiano — every major French novelist of the past 150 years uses the passé simple in narrative passages. The form is not archaic in literary terms; it is the unmarked written narrative tense, just as the past simple is in English. Reading any major French novel without mastering passé simple recognition is impossible. This is why the lycée curriculum prioritises reading recognition over productive use.",
    },
    {
      title: "L'Académie française et la défense du français écrit",
      content:
        "Founded in 1635, the Académie française has long defended the distinction between spoken and written registers. Its members — the 'immortels' — debate annually whether to admit new words and validate usage shifts. The maintained productive distinction between passé simple (written narrative) and passé composé (spoken) is one of the Académie's quiet successes. Several living members write essays explicitly defending the passé simple as a marker of literary culture.",
    },
    {
      title: 'Les prix littéraires français',
      content:
        "The Goncourt (since 1903), the Renaudot (since 1926), the Femina (since 1904), the Médicis (since 1958) and the Académie française's Grand Prix du roman shape French publishing each November. Goncourt winners are almost guaranteed to use the passé simple in their narrative passages — it remains the genre marker of 'le grand roman français'. Recent winners worth reading at B2 include Mathias Énard, Leïla Slimani, and Jean-Baptiste Andrea.",
    },
    {
      title: 'Le baccalauréat de français',
      content:
        "Every French sixteen-year-old sits the bac de français at the end of the première year — a national exam consisting of a written commentaire composé (close reading of a literary text) and an oral épreuve sur un texte de l'année. Both require fluent passé simple recognition. The result: every adult French speaker, whatever their formal education, has been drilled to parse passé simple. This is why the form remains alive in the written register even though no one speaks it.",
    },
    {
      title: 'L’Étranger d’Albert Camus',
      content:
        "Published in 1942, 'L'Étranger' is the most-read French novel in the world and a fixture of every French lycée curriculum. Its first part is written in passé composé — radical at the time — to capture Meursault's diary-like flatness; its second part shifts to passé simple as the narrative becomes a trial and a metaphysical reckoning. The register switch is the novel's formal innovation and the easiest way to feel the passé simple's literary force in a single text.",
    },
  ],
  exercises: [
    {
      id: 'l46-id-passe-simple',
      type: 'multiple_choice',
      question:
        "Dans laquelle de ces phrases trouve-t-on un verbe au passé simple ?",
      options: [
        "Il a tiré quatre fois sur l'Arabe.",
        "Il tirait tous les jours au stand.",
        "Il tira sur la corde de toutes ses forces.",
        "Il tirerait si on le lui demandait.",
      ],
      correct_answer: 'Il tira sur la corde de toutes ses forces.',
      explanation:
        "« Tira » est la 3e personne du singulier du passé simple de « tirer ». Les trois autres sont passé composé, imparfait et conditionnel.",
    },
    {
      id: 'l46-infinitives',
      type: 'matching',
      question: 'Associez chaque forme au passé simple à son infinitif.',
      pairs: [
        { french: 'il fit', english: 'faire' },
        { french: 'il vint', english: 'venir' },
        { french: 'il fut', english: 'être' },
        { french: 'il eut', english: 'avoir' },
        { french: 'il prit', english: 'prendre' },
        { french: 'il vit', english: 'voir' },
        { french: 'il put', english: 'pouvoir' },
        { french: 'il sut', english: 'savoir' },
        { french: 'il dut', english: 'devoir' },
        { french: 'il alla', english: 'aller' },
        { french: 'il dit', english: 'dire' },
        { french: 'il voulut', english: 'vouloir' },
      ],
      explanation: 'Les hyper-irrégulières (vint, fit, fut, eut, vit) doivent être mémorisées comme du vocabulaire.',
    },
    {
      id: 'l46-identification-text',
      type: 'fill_blank',
      question:
        "Dans le passage suivant, combien de verbes sont au passé simple ? Tapez seulement un chiffre. — « Il entra dans la pièce, regarda longuement la fenêtre, puis prit la décision qu'il avait préparée. Sa femme l'observait sans rien dire. Il sortit. »",
      correct_answer: ['4'],
      explanation:
        '« entra » (entrer), « regarda » (regarder), « prit » (prendre), « sortit » (sortir). « avait préparée » est PQP, « observait » est imparfait.',
      hints: ['Comptez seulement les passés simples ; ignorez les imparfaits et plus-que-parfaits.'],
    },
    {
      id: 'l46-subject-id',
      type: 'tense_choice',
      question: "Quel est le SUJET du verbe au passé simple ?",
      explanation: 'Repérez le verbe au passé simple, puis identifiez son sujet (en gras dans la phrase).',
      items: [
        {
          sentence: '« Le soleil tomba dans la mer. »',
          verb: 'tomba',
          options: ['le soleil', 'la mer', 'il (implicite)'],
          correct_answer: 'le soleil',
          explanation: '« tomba » (3e sing. de tomber) → sujet : le soleil.',
        },
        {
          sentence: '« Les enfants entrèrent dans la cour en courant. »',
          verb: 'entrèrent',
          options: ['les enfants', 'la cour', 'ils (implicite)'],
          correct_answer: 'les enfants',
          explanation: '« entrèrent » (3e plur. de entrer) → sujet : les enfants.',
        },
        {
          sentence: '« Madame Bovary songea longtemps à sa jeunesse perdue. »',
          verb: 'songea',
          options: ['Madame Bovary', 'sa jeunesse', 'elle'],
          correct_answer: 'Madame Bovary',
          explanation: '« songea » (3e sing. de songer) → sujet : Madame Bovary.',
        },
        {
          sentence: '« Camus écrivit son roman entre 1939 et 1941. »',
          verb: 'écrivit',
          options: ['Camus', 'son roman', '1939'],
          correct_answer: 'Camus',
          explanation: '« écrivit » (3e sing. de écrire) → sujet : Camus.',
        },
        {
          sentence: '« Les soldats firent halte au bord de la rivière. »',
          verb: 'firent',
          options: ['les soldats', 'halte', 'la rivière'],
          correct_answer: 'les soldats',
          explanation: '« firent » (3e plur. de faire) → sujet : les soldats.',
        },
        {
          sentence: '« Elle vit alors qu’il ne reviendrait pas. »',
          verb: 'vit',
          options: ['elle', 'il', 'personne'],
          correct_answer: 'elle',
          explanation: '« vit » (3e sing. de voir) → sujet : elle.',
        },
      ],
    },
    {
      id: 'l46-sequence',
      type: 'multiple_choice',
      question:
        "Dans quel ordre narratif correct ces phrases au passé simple décrivent-elles l'arrivée du personnage ?",
      options: [
        "Il entra. Il regarda autour de lui. Il s'assit. Il prit le livre.",
        "Il regarda autour de lui. Il entra. Il s'assit. Il prit le livre.",
        "Il prit le livre. Il s'assit. Il entra. Il regarda autour de lui.",
        "Il s'assit. Il prit le livre. Il entra. Il regarda autour de lui.",
      ],
      correct_answer: "Il entra. Il regarda autour de lui. Il s'assit. Il prit le livre.",
      explanation: 'Séquence narrative logique : entrer → regarder → s’asseoir → prendre.',
    },
    {
      id: 'l46-register-conversion',
      type: 'rewrite',
      question:
        'Convertissez chaque phrase littéraire (passé simple) en français parlé/écrit informel (passé composé).',
      instruction_type: 'reported_speech',
      items: [
        {
          original: 'Il entra dans la pièce et s’assit en silence.',
          expected: 'Il est entré dans la pièce et s’est assis en silence.',
          explanation: 'PS → PC (entrer = être ; s’asseoir = être pronominal).',
        },
        {
          original: 'Elle prit la décision qu’elle avait préparée.',
          expected: 'Elle a pris la décision qu’elle avait préparée.',
          explanation: 'PS → PC (prendre = avoir). Le PQP « avait préparée » reste inchangé.',
        },
        {
          original: 'Ils firent halte au bord de la rivière et virent au loin un feu.',
          expected: 'Ils ont fait halte au bord de la rivière et ont vu au loin un feu.',
          explanation: 'PS → PC pour les deux verbes (faire, voir = avoir).',
        },
        {
          original: 'Camus écrivit L’Étranger entre 1939 et 1941.',
          expected: 'Camus a écrit L’Étranger entre 1939 et 1941.',
          explanation: 'PS → PC, contexte journalistique courant.',
        },
        {
          original: 'Madame Bovary songea longtemps à sa jeunesse, puis ferma les yeux.',
          expected: 'Madame Bovary a songé longtemps à sa jeunesse, puis a fermé les yeux.',
          explanation: 'PS → PC pour les deux verbes (songer, fermer = avoir).',
        },
      ],
    },
    {
      id: 'l46-comprehension',
      type: 'multiple_choice',
      question:
        "Lisez : « Le silence se prolongea. Il prit son chapeau, salua brièvement, et sortit sans un mot. Sa femme ne fit pas un geste pour le retenir. » — Que se passe-t-il dans ce passage ?",
      options: [
        "L'homme rentre chez lui et trouve sa femme silencieuse.",
        "L'homme quitte la pièce ; sa femme ne fait rien pour l'empêcher de partir.",
        "L'homme s'apprête à partir mais sa femme l'arrête.",
        "Sa femme attend qu'il finisse de parler.",
      ],
      correct_answer: "L'homme quitte la pièce ; sa femme ne fait rien pour l'empêcher de partir.",
      explanation:
        '« prit son chapeau », « salua », « sortit », « ne fit pas un geste » → il part, elle reste passive.',
    },
    {
      id: 'l46-translation-comprehension',
      type: 'translation',
      question:
        "Traduisez ce passage du passé simple littéraire vers l'anglais : « Il entra, vit la lettre sur la table, la prit, et la lut. »",
      direction: 'fr_to_en',
      correct_answer: [
        'He entered, saw the letter on the table, took it, and read it.',
        'He came in, saw the letter on the table, took it, and read it.',
      ],
      explanation: 'Chaque PS → past simple anglais.',
    },
    {
      id: 'l46-error-classification',
      type: 'multiple_choice',
      question:
        "Vous écrivez à un ami par texto pour lui raconter votre journée. Laquelle de ces phrases est INAPPROPRIÉE en registre ?",
      options: [
        "J'ai vu Sophie au café ce matin.",
        "Je vis Sophie au café ce matin.",
        "Sophie m'a dit qu'elle partait demain.",
        "On a passé la matinée à discuter.",
      ],
      correct_answer: "Je vis Sophie au café ce matin.",
      explanation:
        'Dans un texto, le passé simple « je vis » est totalement décalé en registre. À l’oral et à l’écrit informel, on utilise le passé composé « j’ai vu ».',
    },
    {
      id: 'l46-literary-extract',
      type: 'fill_blank',
      question:
        "Dans cet extrait, identifiez l'infinitif du verbe « parut » : « Il parut hésiter un instant, puis se décida. »",
      correct_answer: ['paraître', 'paraitre'],
      explanation: '« parut » → infinitif : paraître (à reconnaître pour la lecture).',
      hints: ['C’est un verbe en -aître (avec circonflexe).'],
    },
    {
      id: 'l46-speaking',
      type: 'speaking_prompt',
      question:
        "Racontez à voix haute, en utilisant le PASSÉ COMPOSÉ (et non le passé simple), un livre ou un film qui vous a marqué récemment.",
      model_answer:
        "J'ai récemment lu L'Étranger de Camus. Le roman raconte l'histoire d'un homme qui a perdu sa mère et qui, quelques semaines plus tard, a tué un homme sur une plage à Alger. Ce qui m'a frappé, c'est la sécheresse du style : Camus utilise des phrases courtes, presque sans émotion. À la fin, le narrateur a compris que sa vie n'avait pas de sens, et il a accepté cette vérité.",
      translation:
        "I recently read Camus's L'Étranger. The novel tells the story of a man who lost his mother and who, a few weeks later, killed a man on a beach in Algiers. What struck me was the dryness of the style: Camus uses short sentences, almost without emotion. At the end, the narrator understood his life had no meaning, and he accepted that truth.",
      tip: "Use the passé composé throughout — you're discussing the book, not narrating it from inside. The passé simple belongs to the book itself; your commentary stays in the passé composé.",
    },
  ],
}

export default function Lesson46Page() {
  return (
    <AdvancedLessonLayout
      lessonData={lessonData}
      lessonNumber={46}
      prevHref="/lessons/advanced/45"
      prevLabel="La Concordance des Temps"
      nextHref="/lessons/advanced/47"
      nextLabel="Les Relatifs Indéfinis"
    />
  )
}
