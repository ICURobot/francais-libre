'use client'

import AdvancedLessonLayout, { AdvancedLessonData } from '../../../../../components/lessons/AdvancedLessonLayout'

const lessonData: AdvancedLessonData = {
  id: 49,
  title: 'Mixed Conditionals',
  title_fr: 'Les Hypothèses Mixtes',
  level: 'B2',
  description:
    "Cross the temporal frames of the French si-clause system to express nuanced counterfactuals — present consequences of past conditions, and past consequences of present states. This is the construction that powers historical 'what-if' analysis and serious philosophical debate.",
  dialogue: {
    title: 'Et si...?',
    context:
      "Two French historians, Bertrand Solal and Camille Estève, debate a classic counterfactual at a café table — what would have happened if de Gaulle had not returned to power in 1958. They use the full range of pure and mixed conditional types as they sharpen each other's hypotheses.",
    register: 'courant',
    exchanges: [
      {
        speaker: 'Bertrand',
        french: "Imagine un instant : si de Gaulle n'était pas revenu au pouvoir en 1958, la France actuelle serait-elle la même ?",
        english: "Imagine for a moment: if de Gaulle had not returned to power in 1958, would the France of today be the same?",
      },
      {
        speaker: 'Camille',
        french: "Non, évidemment. Si la Quatrième République avait survécu, on n'aurait probablement pas la Constitution actuelle, et le régime serait beaucoup plus parlementaire.",
        english: 'No, obviously. If the Fourth Republic had survived, we probably wouldn’t have the current Constitution, and the regime would be much more parliamentary.',
      },
      {
        speaker: 'Bertrand',
        french: "Voilà une hypothèse mixte classique : si X n'avait pas eu lieu en 1958, alors aujourd'hui on aurait Y. Du conditionnel présent dans la conséquence, du plus-que-parfait dans la condition.",
        english: 'There is a classic mixed hypothesis: if X had not occurred in 1958, then today we would have Y. Conditional present in the consequence, pluperfect in the condition.',
      },
      {
        speaker: 'Camille',
        french: "Exact. Inversement : si l'Algérie ne s'était pas indépendantisée, la France actuelle n'aurait pas le rôle international qu'on lui connaît. Conditionnel passé cette fois.",
        english: 'Right. Conversely: if Algeria had not become independent, present-day France would not have the international role we know. Conditional past this time.',
      },
      {
        speaker: 'Bertrand',
        french: "Au cas où je te parlerais de Mitterrand ensuite, prépare-toi à un autre type d'hypothèse. Ce n'est pas le passé contrefactuel, c'est la précaution.",
        english: 'In case I talk to you about Mitterrand next, prepare yourself for another type of hypothesis. It’s not counterfactual past, it’s precaution.',
      },
      {
        speaker: 'Camille',
        french: "« Au cas où » + conditionnel, oui. Au cas où il aurait gagné dès 1965, le tournant de 1981 n'aurait pas eu la même portée symbolique.",
        english: '"In case" + conditional, yes. In case he had won as early as 1965, the 1981 turning point would not have had the same symbolic weight.',
      },
      {
        speaker: 'Bertrand',
        french: "Même si je voulais te contredire, je n'aurais pas d'argument sur ce point. Voilà une concession en hypothèse, type 2 à valeur concessive.",
        english: 'Even if I wanted to contradict you, I’d have no argument on that point. There’s a hypothesis-with-concession, Type 2 with concessive value.',
      },
      {
        speaker: 'Camille',
        french: "Et quand bien même on me prouverait que 1981 a été préparé bien avant, je continuerais à voir la victoire comme une rupture. Quand bien même + conditionnel.",
        english: 'And even were one to prove to me that 1981 was prepared well before, I would continue to see the victory as a rupture. "Quand bien même" + conditional.',
      },
      {
        speaker: 'Bertrand',
        french: "Tu manies bien le quand bien même. C'est plus soutenu que « même si » — typique de l'écrit d'analyse.",
        english: 'You handle quand bien même well. It’s more formal than "même si" — typical of analytical writing.',
      },
      {
        speaker: 'Camille',
        french: "Dans l'hypothèse où Pompidou serait mort plus tard, Giscard n'aurait peut-être pas eu sa fenêtre politique. C'est une autre tournure soutenue.",
        english: 'In the event that Pompidou had died later, Giscard might not have had his political window. That’s another formal turn of phrase.',
      },
      {
        speaker: 'Bertrand',
        french: "On a fait le tour du système conditionnel français : pur type 2, pur type 3, mixte 2+3, mixte 3+2, au cas où, quand bien même.",
        english: 'We’ve covered the entire French conditional system: pure Type 2, pure Type 3, mixed 2+3, mixed 3+2, au cas où, quand bien même.',
      },
      {
        speaker: 'Camille',
        french: "Et tout cela à propos d'une seule série d'élections présidentielles. C'est dire la richesse de la syntaxe française.",
        english: 'And all that just about a single series of presidential elections. That’s a measure of the richness of French syntax.',
      },
      {
        speaker: 'Bertrand',
        french: "Au cas où on continuerait cette discussion, je te commande un deuxième café.",
        english: 'In case we continue this discussion, I’ll order you a second coffee.',
      },
    ],
  },
  grammarPoints: [
    {
      title: 'Rappel B1 : les trois types purs',
      explanation:
        'B1 introduced the three pure conditional types. Quick reactivation: Type 1 = possible/real (si + présent → futur/présent). Type 2 = hypothetical present (si + imparfait → conditionnel présent). Type 3 = counterfactual past (si + plus-que-parfait → conditionnel passé). The condition tense determines the type; the result tense follows.',
      examples: [
        "TYPE 1 : Si tu travailles, tu réussiras. (réel/possible)",
        "TYPE 2 : Si tu travaillais, tu réussirais. (hypothétique présent — tu ne travailles pas)",
        "TYPE 3 : Si tu avais travaillé, tu aurais réussi. (contrefactuel passé — tu n'as pas travaillé)",
        "RULE : jamais de futur ou conditionnel après si dans la condition.",
        "PIÈGE : *Si je serais là... → toujours « si j'étais là » (imparfait dans la condition).",
      ],
      tip: 'If the three pure types aren’t reflexive, drill them again before tackling the mixed types — mixed conditionals stack the difficulty of B1 si-clauses with new temporal logic.',
    },
    {
      title: 'Mixte 1 : condition passée + conséquence présente',
      explanation:
        "Use si + plus-que-parfait → conditionnel PRÉSENT when a past condition would have ongoing present consequences. This is the most frequent mixed type in serious historical or biographical writing — 'if X had happened back then, today we would have Y'.",
      examples: [
        "Si tu avais travaillé l'an dernier, tu saurais maintenant ce métier.",
        "Si la Quatrième République avait survécu, le régime serait plus parlementaire aujourd'hui.",
        "Si je n'avais pas accepté ce poste à Lyon, ma vie serait très différente.",
        "Si elle n'avait pas pris ce vol, elle ne serait pas ici en ce moment.",
        "PATTERN : Si + PQP, conditionnel présent.",
      ],
      tip: "Anchor each clause with a temporal marker — 'à l'époque' / 'maintenant' / 'aujourd'hui' — to make the cross-temporal logic visible to your reader. Without anchors, the mixed type easily reads as a pure Type 3.",
    },
    {
      title: 'Mixte 2 : condition présente + conséquence passée',
      explanation:
        "Use si + imparfait → conditionnel PASSÉ when an ongoing present state would have explained a past outcome. Less frequent than mixed 1 but essential for character-based analysis — 'if she WERE that kind of person, she WOULD HAVE acted differently last week'.",
      examples: [
        "Si tu étais plus organisé, tu aurais réussi cet examen l'année dernière.",
        "Si elle n'était pas si patiente, elle aurait quitté ce poste depuis longtemps.",
        "Si nous parlions chinois couramment, nous aurions obtenu ce contrat à Shanghai.",
        "Si je vivais à Paris, j'aurais accepté l'invitation hier soir.",
        "PATTERN : Si + imparfait, conditionnel passé.",
      ],
      tip: "This type often slips out — drill it consciously. If your hypothesis is about a stable trait or current state explaining a past outcome, mixed 2 is what you need.",
    },
    {
      title: 'Au cas où + conditionnel (jamais subjonctif)',
      explanation:
        "'Au cas où' introduces a precautionary hypothesis — 'in case X happens'. It REQUIRES the conditional (présent or passé), never the subjunctive and never the future. This is one of the most-tested traps in DELF B2: 'au cas où il vient' or 'au cas où il viendra' are both wrong.",
      examples: [
        "Au cas où il viendrait, appelle-moi. (présent — in case he comes)",
        "Au cas où il serait en retard, prévenons les organisateurs.",
        "Au cas où elle aurait oublié, rappelle-le-lui demain.",
        "Au cas où tu n'aurais pas vu, le rapport est sur ton bureau.",
        "PIÈGE : *Au cas où il vient / *au cas où il viendra → toujours le conditionnel.",
      ],
      tip: "If you mentally translate 'au cas où' as 'should X (happen)', the conditional comes naturally. The construction is so codified that French speakers correct themselves mid-sentence — drill it until it's automatic.",
    },
    {
      title: 'Même si / quand bien même — la concession hypothétique',
      explanation:
        "'Même si' (even if) and 'quand bien même' (even were) introduce a concessive hypothesis: the result holds even though the condition is granted. 'Même si' follows the standard si-clause tense logic; 'quand bien même' takes the conditional (more formal, soutenu register).",
      examples: [
        "Même si je voulais partir, je ne pourrais pas. (Type 2 concessif)",
        "Même si j'avais voulu partir, je n'aurais pas pu. (Type 3 concessif)",
        "Quand bien même il viendrait, ça ne changerait rien. (conditionnel — équivalent soutenu)",
        "Quand bien même on me l'aurait demandé, j'aurais refusé. (conditionnel passé — soutenu)",
        "CONTRAST : 'même si' = ordinary register, 'quand bien même' = soutenu.",
      ],
      tip: "Use 'quand bien même' once per formal essay — it's a strong register marker. But verify the verb form is conditional: 'quand bien même il vient' is wrong.",
    },
  ],
  vocabulary: [
    { french: 'si + plus-que-parfait', english: 'if + pluperfect', category: 'Condition passée', example: "Si j'avais su, je n'aurais rien dit.", note: 'condition irréelle passée' },
    { french: 'si + imparfait', english: 'if + imperfect', category: 'Condition présente', example: "Si je le savais, je te le dirais.", note: 'condition hypothétique présente' },
    { french: 'le conditionnel présent', english: 'conditional present', category: 'Forme verbale', example: 'Je viendrais si tu m’invitais.', note: 'racine du futur + terminaisons de l’imparfait' },
    { french: 'le conditionnel passé', english: 'conditional past', category: 'Forme verbale', example: 'Je serais venu si tu m’avais invité.', note: 'aux. au conditionnel + pp' },
    { french: 'au cas où', english: 'in case', category: 'Conjonction conditionnelle', example: 'Au cas où il pleuvrait, prends un parapluie.', note: '+ conditionnel' },
    { french: 'dans l’hypothèse où', english: 'in the event that', category: 'Conjonction conditionnelle', example: "Dans l'hypothèse où il refuserait, prévois un plan B.", note: '+ conditionnel, [soutenu]' },
    { french: 'à supposer que', english: 'supposing that', category: 'Conjonction conditionnelle', example: 'À supposer qu’il soit là, que feriez-vous ?', note: '+ subjonctif, [soutenu]' },
    { french: 'en supposant que', english: 'assuming that', category: 'Conjonction conditionnelle', example: "En supposant que tout aille bien, nous arriverons à temps.", note: '+ subjonctif, [soutenu]' },
    { french: 'supposons que', english: 'let us suppose that', category: 'Conjonction conditionnelle', example: "Supposons qu'il ait dit la vérité — où mène ce raisonnement ?", note: '+ subjonctif, [courant-soutenu]' },
    { french: 'même si', english: 'even if', category: 'Concession hypothétique', example: "Même si tu insistais, je refuserais.", note: 'suit la logique des si-clauses' },
    { french: 'quand bien même', english: 'even were', category: 'Concession hypothétique', example: 'Quand bien même il viendrait, cela ne changerait rien.', note: '+ conditionnel, [soutenu]' },
    { french: 'à condition que', english: 'provided that', category: 'Conjonction conditionnelle', example: "Je viendrai à condition que tu sois là.", note: '+ subjonctif' },
    { french: 'pourvu que', english: 'provided that / let’s hope', category: 'Conjonction conditionnelle', example: 'Pourvu qu’il ne pleuve pas.', note: '+ subjonctif' },
    { french: 'à moins que', english: 'unless', category: 'Conjonction conditionnelle', example: "Je serai là à moins qu'il ne pleuve.", note: '+ subj. + ne explétif' },
    { french: 'sauf si', english: 'unless / except if', category: 'Conjonction conditionnelle', example: 'Je viendrai, sauf s’il y a un imprévu.', note: '+ indicatif' },
    { french: 'à défaut de', english: 'failing / lacking', category: 'Tournure conditionnelle', example: "À défaut d'accord, nous reporterons.", note: '+ nom ou inf., [soutenu]' },
    { french: 'faute de', english: 'for lack of', category: 'Tournure conditionnelle', example: 'Faute de temps, je n’ai pas pu vérifier.', note: '+ nom ou inf.' },
    { french: 'sinon', english: 'otherwise', category: 'Connecteur conditionnel', example: 'Préviens-moi, sinon je commencerai sans toi.', note: '[courant]' },
    { french: 'autrement', english: 'otherwise', category: 'Connecteur conditionnel', example: 'Autrement, le contrat tombe.', note: '[courant-soutenu]' },
    { french: 'contrefactuel/le', english: 'counterfactual', category: 'Métalangage', example: 'Une analyse contrefactuelle.', note: '[soutenu]' },
    { french: 'la rupture', english: 'the rupture / breaking point', category: 'Vocabulaire historique', example: '1981 reste perçu comme une rupture.' },
    { french: 'la portée (d’un événement)', english: 'the significance / scope', category: 'Vocabulaire historique', example: "La portée symbolique de la décision est considérable." },
    { french: 'parlementaire (régime)', english: 'parliamentary (regime)', category: 'Vocabulaire politique', example: 'Un régime parlementaire repose sur la confiance des chambres.' },
    { french: 'une fenêtre politique', english: 'a political window', category: 'Vocabulaire politique', example: 'Sa fenêtre politique s’est refermée vite.' },
    { french: 's’indépendantiser', english: 'to gain independence', category: 'Vocabulaire historique', example: 'L’Algérie s’est indépendantisée en 1962.' },
    { french: 'le tournant (de 1981)', english: 'the (1981) turning point', category: 'Vocabulaire historique', example: '1981 est le tournant institutionnel de la gauche française.' },
    { french: 'un imprévu', english: 'an unforeseen event', category: 'Vocabulaire général', example: 'Sauf imprévu, je serai à l’heure.' },
  ],
  culturalNotes: [
    {
      title: 'La dissertation philosophique au baccalauréat',
      content:
        "Every French baccalauréat candidate sits the philosophie exam — a four-hour dissertation in answer to a single abstract question (e.g., 'Le travail nous rend-il plus humains ?'). The structure is conditional through-and-through: each part advances a hypothesis (admettons que..., supposons que..., si l'on accepte que...) and tests its consequences. Mastering the conditional system this lesson teaches is the linguistic precondition for this most French of academic genres.",
    },
    {
      title: "Le genre du « et si... ? » dans l'histoire française",
      content:
        "Counterfactual history — 'et si Napoléon avait gagné Waterloo ?', 'et si la Commune avait triomphé ?', 'et si la France n'avait pas signé l'armistice en 1940 ?' — is a thriving subgenre in French historiography. Recent representatives include Eric Branca, Michel Pastoureau, and Antoine de Baecque. Reading one 'et si...' book per year is excellent B2 practice — the entire genre is built on mixed conditionals.",
    },
    {
      title: "L'hypothèse comme pratique intellectuelle française",
      content:
        "The word 'hypothèse' carries cultural weight in France beyond its technical meaning. Forming, testing, and discarding hypotheses is a pedagogical norm taught explicitly in lycée science, philosophy, and history classes. The conditional system is therefore not just a grammar point — it is the linguistic infrastructure of an entire pedagogical culture. French speakers reach for 'au cas où', 'à supposer que', 'quand bien même' more frequently than English speakers reach for their equivalents.",
    },
    {
      title: "1958 et la Cinquième République",
      content:
        "The Fifth Republic was founded in 1958 when Charles de Gaulle returned to power amid the Algerian crisis and drafted a new Constitution centralising power in the presidency. Sixty-seven years later it remains France's regime — making it the second-longest-lasting French regime after the Third Republic. Counterfactual reasoning about 1958 is therefore not abstract: it touches the institutional architecture of contemporary France, which is why historians return to it again and again.",
    },
  ],
  exercises: [
    {
      id: 'l49-type-id',
      type: 'tense_choice',
      question: 'Identifiez le TYPE de chaque hypothèse.',
      explanation: 'Type 1 = réel ; Type 2 = présent hypothétique ; Type 3 = contrefactuel passé ; Mixte = condition et conséquence dans des cadres temporels différents.',
      items: [
        {
          sentence: "Si tu avais travaillé, tu saurais ce métier maintenant.",
          verb: 'travailler',
          options: ['Type 1', 'Type 2', 'Type 3', 'Mixte (3+2)'],
          correct_answer: 'Mixte (3+2)',
          explanation: 'Condition au PQP, conséquence au conditionnel présent → mixte.',
        },
        {
          sentence: "Si tu travailles, tu réussiras l'examen.",
          verb: 'travailler',
          options: ['Type 1', 'Type 2', 'Type 3', 'Mixte'],
          correct_answer: 'Type 1',
          explanation: 'Présent + futur → Type 1 (réel/possible).',
        },
        {
          sentence: "Si tu étais plus organisé, tu aurais réussi l'année dernière.",
          verb: 'être organisé',
          options: ['Type 1', 'Type 2', 'Type 3', 'Mixte (2+3)'],
          correct_answer: 'Mixte (2+3)',
          explanation: 'Condition à l’imparfait (présent), conséquence au conditionnel passé → mixte.',
        },
        {
          sentence: "Si j'avais su, je ne serais pas venu.",
          verb: 'savoir',
          options: ['Type 1', 'Type 2', 'Type 3', 'Mixte'],
          correct_answer: 'Type 3',
          explanation: 'PQP + conditionnel passé → Type 3 pur.',
        },
        {
          sentence: "Si tu venais à Lyon ce week-end, nous pourrions dîner ensemble.",
          verb: 'venir',
          options: ['Type 1', 'Type 2', 'Type 3', 'Mixte'],
          correct_answer: 'Type 2',
          explanation: 'Imparfait + conditionnel présent → Type 2.',
        },
        {
          sentence: "Si la guerre n'avait pas éclaté, le régime serait peut-être tombé plus vite.",
          verb: 'éclater',
          options: ['Type 1', 'Type 2', 'Type 3', 'Mixte (3+2)'],
          correct_answer: 'Mixte (3+2)',
          explanation: 'PQP + conditionnel présent → mixte (présent comme conséquence d’un passé).',
        },
      ],
    },
    {
      id: 'l49-fillblank',
      type: 'fill_blank',
      question: "Complétez avec le bon temps : « Si tu avais travaillé l'an dernier, tu ____ (savoir) ce métier maintenant. »",
      correct_answer: ['saurais'],
      explanation: 'Mixte 3+2 : PQP en condition, conditionnel présent en conséquence (« maintenant »).',
      hints: ['Le marqueur « maintenant » dicte un présent.'],
    },
    {
      id: 'l49-fillblank-2',
      type: 'fill_blank',
      question: "Complétez : « Si elle n'était pas si patiente, elle ____ (quitter) ce poste depuis longtemps. »",
      correct_answer: ['aurait quitté', "l'aurait quitté"],
      explanation: 'Mixte 2+3 : imparfait en condition (trait stable), conditionnel passé en conséquence.',
    },
    {
      id: 'l49-aucasou',
      type: 'rewrite',
      question: 'Réécrivez ces phrases avec « au cas où » + conditionnel.',
      instruction_type: 'si_clause',
      items: [
        {
          original: "S'il pleut, prends un parapluie.",
          expected: "Au cas où il pleuvrait, prends un parapluie.",
          explanation: '« Au cas où » exige le conditionnel (pas le présent).',
        },
        {
          original: "Si elle est en retard, préviens les organisateurs.",
          expected: "Au cas où elle serait en retard, préviens les organisateurs.",
          explanation: 'Présent → conditionnel après « au cas où ».',
        },
        {
          original: "Si tu n'as pas reçu le mail, je te le renvoie.",
          expected: "Au cas où tu n'aurais pas reçu le mail, je te le renvoie.",
          explanation: 'PC → conditionnel passé après « au cas où ».',
        },
        {
          original: "S'il refuse, prévois un plan B.",
          expected: "Au cas où il refuserait, prévois un plan B.",
          explanation: 'Présent → conditionnel.',
        },
      ],
    },
    {
      id: 'l49-meme-si',
      type: 'rewrite',
      question: 'Construisez des phrases concessives avec « même si » ou « quand bien même » (+ conditionnel pour soutenu).',
      instruction_type: 'si_clause',
      items: [
        {
          original: 'je veux partir → je ne peux pas (Type 2 concessif)',
          expected: "Même si je voulais partir, je ne pourrais pas.",
          explanation: 'Imparfait + conditionnel présent : concession hypothétique présente.',
        },
        {
          original: "j'ai voulu partir → je n'ai pas pu (Type 3 concessif)",
          expected: "Même si j'avais voulu partir, je n'aurais pas pu.",
          explanation: 'PQP + conditionnel passé : concession contrefactuelle passée.',
        },
        {
          original: 'il vient → ça ne change rien (registre soutenu)',
          expected: "Quand bien même il viendrait, cela ne changerait rien.",
          explanation: '« Quand bien même » + conditionnel = équivalent soutenu de « même si ».',
        },
      ],
    },
    {
      id: 'l49-error-correction',
      type: 'error_correction',
      question: 'Corrigez les erreurs de temps après les conjonctions conditionnelles.',
      items: [
        {
          incorrect: "Au cas où il vient, préviens-moi.",
          correct: "Au cas où il viendrait, préviens-moi.",
          explanation: '« Au cas où » → conditionnel obligatoire.',
        },
        {
          incorrect: "Si j'aurais su, je n'aurais rien dit.",
          correct: "Si j'avais su, je n'aurais rien dit.",
          explanation: 'Jamais de conditionnel après « si » dans la condition.',
        },
        {
          incorrect: "Quand bien même il vient, ça ne change rien.",
          correct: "Quand bien même il viendrait, cela ne changerait rien.",
          explanation: '« Quand bien même » exige le conditionnel.',
        },
        {
          incorrect: "Dans l'hypothèse où il refuserait, prévois autre chose.",
          correct: "Dans l'hypothèse où il refuserait, prévois autre chose.",
          explanation: 'Phrase correcte (piège : c’est bien le conditionnel qu’il faut).',
        },
        {
          incorrect: "À supposer qu'il vient, que fais-tu ?",
          correct: "À supposer qu'il vienne, que fais-tu ?",
          explanation: '« À supposer que » exige le subjonctif.',
        },
      ],
    },
    {
      id: 'l49-counterfactual',
      type: 'rewrite',
      question: 'Construisez une hypothèse mixte (3+2) à partir des éléments donnés.',
      instruction_type: 'si_clause',
      items: [
        {
          original: 'condition : je n’ai pas appris l’allemand → conséquence aujourd’hui : je ne peux pas postuler à ce poste',
          expected: "Si j'avais appris l'allemand, je pourrais postuler à ce poste aujourd'hui.",
          explanation: 'PQP en condition, conditionnel présent en conséquence (aujourd’hui).',
        },
        {
          original: 'condition : tu as déménagé à Lille → conséquence : tu connais bien le Nord',
          expected: "Si tu n'avais pas déménagé à Lille, tu ne connaîtrais pas si bien le Nord.",
          explanation: 'Inversion contrefactuelle ; PQP + conditionnel présent.',
        },
      ],
    },
    {
      id: 'l49-translation',
      type: 'translation',
      question: "Traduisez : 'If she had stayed in Paris, she would still work for the same company today.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Si elle était restée à Paris, elle travaillerait encore pour la même entreprise aujourd'hui.",
        "Si elle était restée à Paris, elle travaillerait toujours pour la même entreprise aujourd'hui.",
      ],
      explanation: 'Mixte 3+2 : PQP + conditionnel présent.',
    },
    {
      id: 'l49-translation-2',
      type: 'translation',
      question: "Traduisez : 'In case he hasn’t arrived yet, please call me.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Au cas où il ne serait pas encore arrivé, appelle-moi s'il te plaît.",
        "Au cas où il ne serait pas encore arrivé, appelez-moi s'il vous plaît.",
      ],
      explanation: '« Au cas où » + conditionnel passé.',
    },
    {
      id: 'l49-speaking',
      type: 'speaking_prompt',
      question:
        "Construisez un raisonnement contrefactuel personnel : choisissez une décision passée que vous n'avez pas prise. En trois phrases, dites ce qui aurait été différent aujourd'hui ET la semaine dernière. Utilisez les deux types mixtes.",
      model_answer:
        "Si j'avais accepté ce poste à Berlin il y a cinq ans, ma vie serait très différente aujourd'hui. Je parlerais l'allemand couramment et j'aurais probablement déjà fondé ma propre entreprise. Et si je vivais encore à Berlin, je n'aurais pas pu retrouver mon ami d'enfance la semaine dernière à Paris — ce qui montre que chaque choix referme aussi des fenêtres.",
      translation:
        "If I had accepted that Berlin position five years ago, my life would be very different today. I would speak German fluently and I would probably have already founded my own company. And if I still lived in Berlin, I wouldn't have been able to meet my childhood friend last week in Paris — which shows that every choice also closes windows.",
      tip: "Use temporal anchors ('aujourd'hui', 'la semaine dernière', 'il y a cinq ans') to make the mixed structure unambiguous. Without them, your listener may parse a mixed conditional as a pure Type 3.",
    },
  ],
}

export default function Lesson49Page() {
  return (
    <AdvancedLessonLayout
      lessonData={lessonData}
      lessonNumber={49}
      prevHref="/lessons/advanced/48"
      prevLabel="La Mise en Relief"
      nextHref="/lessons/advanced/50"
      nextLabel="La Nominalisation"
    />
  )
}
