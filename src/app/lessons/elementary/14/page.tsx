'use client'

import ElementaryLessonLayout, { ElementaryLessonData } from '../../../../../components/lessons/ElementaryLessonLayout'

const lessonData: ElementaryLessonData = {
  id: 14,
  title: "Le Passé Composé II",
  level: "A2",
  description: "Master irregular past participles with avoir, including avoir, être, faire, prendre, voir, lire, écrire, dire, boire, vouloir, pouvoir, and savoir.",

  dialogue: {
    title: "Après l'examen",
    context: "Deux étudiants, Lucas et Emma, discutent après un examen universitaire difficile.",
    exchanges: [
      { speaker: "Lucas", french: "Alors Emma, tu as fini l'examen à temps ?", english: "So Emma, did you finish the exam on time?", pronunciation: "ah-LOR eh-MAH, tu ah fee-NEE lek-sah-MAN ah TAHN?" },
      { speaker: "Emma", french: "Oui, mais j'ai eu des difficultés avec la dernière question.", english: "Yes, but I had difficulties with the last question.", pronunciation: "WEE, may zhay EW day dee-fee-kul-TAY ah-VEK lah dair-NYAIR kes-TYOHN." },
      { speaker: "Lucas", french: "Moi aussi. Je n'ai pas pu finir la première partie.", english: "Me too. I couldn't finish the first part.", pronunciation: "MWAH oh-SEE. zhuh nay pah PEW fee-NEER lah pruh-MYAIR par-TEE." },
      { speaker: "Emma", french: "Tu as lu tous les chapitres du livre ?", english: "Did you read all the chapters of the book?", pronunciation: "tu ah LEW too lay shah-PEE-truh dew LEE-vruh?" },
      { speaker: "Lucas", french: "J'ai lu la plupart, mais je n'ai pas eu le temps pour le chapitre huit.", english: "I read most of them, but I didn't have time for chapter eight.", pronunciation: "zhay LEW lah plew-PAHR, may zhuh nay pah EW luh TAHN poor luh shah-PEE-truh WEE." },
      { speaker: "Emma", french: "Moi, j'ai écrit des notes pour chaque chapitre. Ça m'a beaucoup aidée.", english: "I wrote notes for every chapter. That helped me a lot.", pronunciation: "MWAH, zhay ay-KREE day NOT poor shahk shah-PEE-truh. sah mah bo-KOO ay-DAY." },
      { speaker: "Lucas", french: "Bonne idée. Tu as bu un café avant l'examen ?", english: "Good idea. Did you have a coffee before the exam?", pronunciation: "bun ee-DAY. tu ah BEW uh(n) kah-FAY ah-VAHN lek-sah-MAN?" },
      { speaker: "Emma", french: "Non, j'ai pris un thé. Le café, j'ai voulu éviter, c'est trop stressant.", english: "No, I had a tea. Coffee, I wanted to avoid it, it's too stressful.", pronunciation: "NOHN, zhay PREE uh(n) TAY. luh kah-FAY, zhay voo-LEW ay-vee-TAY, say troh stres-SAHN." },
      { speaker: "Lucas", french: "Tu as fait un bon choix. Moi, j'ai mis trop de sucre dans mon café.", english: "You made a good choice. I put too much sugar in my coffee.", pronunciation: "tu ah FAY uh(n) bohn SHWAH. MWAH, zhay MEE troh duh SEW-kruh dah(n) mohn kah-FAY." },
      { speaker: "Emma", french: "On a vu le professeur après l'examen ? Il a dit quelque chose ?", english: "Did we see the professor after the exam? Did he say something?", pronunciation: "ohn ah VEW luh proh-feh-SUR ah-PRAY lek-sah-MAN? eel ah DEE kel-kuh SHOHZ?" },
      { speaker: "Lucas", french: "Oui, il a dit que les résultats vont être prêts vendredi.", english: "Yes, he said the results are going to be ready on Friday.", pronunciation: "WEE, eel ah DEE kuh lay ray-zul-TAH vohn TET-ruh PRAY vahn-druh-DEE." },
      { speaker: "Emma", french: "J'ai reçu un email du département aussi. Ils ont déjà corrigé une partie.", english: "I received an email from the department too. They already corrected part of it.", pronunciation: "zhay ruh-SEW uh(n) ee-MAIL dew day-par-tuh-MAHN oh-SEE. eel zohn day-ZHAH kor-ee-ZHAY ewn par-TEE." },
    ]
  },

  grammarPoints: [
    {
      title: "Participes Passés Irréguliers — Le Groupe en -u",
      explanation: "Many high-frequency irregular past participles end in -u, including eu, bu, vu, lu, pu, su, voulu, and reçu. Learn them as a sound family.",
      examples: [
        "AVOIR → eu (had) : J'ai eu une bonne note.",
        "BOIRE → bu (drank) : Tu as bu de l'eau ?",
        "VOIR → vu (saw) : Il a vu le film.",
        "LIRE → lu (read) : Nous avons lu le journal.",
        "POUVOIR → pu (could/was able to) : Vous avez pu venir.",
        "SAVOIR → su (knew) : Elle a su la réponse.",
        "VOULOIR → voulu (wanted) : Ils ont voulu partir.",
        "RECEVOIR → reçu (received) : J'ai reçu un message."
      ]
    },
    {
      title: "Participes Passés Irréguliers — Les Groupes -is et -it",
      explanation: "Some essential irregular past participles end in -is or -it, such as pris, mis, dit, and écrit. These must be memorized individually and by family.",
      examples: [
        "PRENDRE → pris (took) : J'ai pris le train.",
        "METTRE → mis (put) : Tu as mis la table.",
        "FAIRE → fait (did/made) : Il a fait ses devoirs.",
        "DIRE → dit (said) : Elle a dit la vérité.",
        "ÉCRIRE → écrit (wrote) : Nous avons écrit une lettre.",
        "ÊTRE → été (been) : J'ai été malade hier. (Note: être uses avoir for passé composé when it means 'to have been')"
      ]
    },
    {
      title: "La Négation au Passé Composé Irrégulier",
      explanation: "Irregular participles do not change the negative structure: ne + auxiliary + pas + past participle.",
      examples: [
        "Je n'ai pas eu le temps (I didn't have time)",
        "Tu n'as pas bu assez d'eau (You didn't drink enough water)",
        "Il n'a pas vu le panneau (He didn't see the sign)",
        "Nous n'avons pas pu dormir (We couldn't sleep)",
        "Elles n'ont pas fait attention (They didn't pay attention)"
      ]
    },
    {
      title: "Familles de Participes Irréguliers — Mémorisation par Groupe",
      explanation: "Irregular past participles are easier to learn in families because related verbs often share the same pattern.",
      examples: [
        "FAMILLE PRENDRE (→ pris) : prendre→pris, apprendre→appris, comprendre→compris, surprendre→surpris",
        "FAMILLE METTRE (→ mis) : mettre→mis, permettre→permis, promettre→promis, remettre→remis",
        "FAMILLE VENIR (→ venu) : venir→venu, devenir→devenu, revenir→revenu, tenir→tenu, obtenir→obtenu",
        "FAMILLE OUVRIR (→ ouvert) : ouvrir→ouvert, découvrir→découvert, offrir→offert, souffrir→souffert",
        "FAMILLE ÉCRIRE (→ écrit) : écrire→écrit, décrire→décrit, inscrire→inscrit",
        "FAMILLE VOIR (→ vu) : voir→vu, prévoir→prévu, revoir→revu",
        "Participes orphelins à mémoriser seuls : avoir→eu, être→été, faire→fait, naître→né, mourir→mort"
      ]
    }
  ],

  vocabulary: [
    { french: "eu", english: "had (past participle of avoir)", category: "Participe", example: "J'ai eu une idée formidable ! (zhay EW ewn ee-DAY for-mee-DAHBL!)" },
    { french: "été", english: "been (past participle of être)", category: "Participe", example: "Tu as été très gentil. (tu ah ay-TAY tray zhahn-TEE)" },
    { french: "fait", english: "done / made (pp of faire)", category: "Participe", example: "Il a fait un gâteau au chocolat. (eel ah FAY uh(n) gah-TOH oh shoh-koh-LAH)" },
    { french: "pris", english: "taken (pp of prendre)", category: "Participe", example: "Elle a pris son manteau. (el ah PREE sohn mahn-TOH)" },
    { french: "mis", english: "put (pp of mettre)", category: "Participe", example: "Nous avons mis la musique. (noo zah-VOHN MEE lah mew-ZEEK)" },
    { french: "vu", english: "seen (pp of voir)", category: "Participe", example: "J'ai vu ce film trois fois. (zhay VEW suh feelm trwah FWAH)" },
    { french: "lu", english: "read (pp of lire)", category: "Participe", example: "Tu as lu les informations ? (tu ah LEW layz an-for-mah-SYOHN?)" },
    { french: "écrit", english: "written (pp of écrire)", category: "Participe", example: "Elle a écrit un livre pour enfants. (el ah ay-KREE uh(n) LEE-vruh poor ahn-FAHN)" },
    { french: "dit", english: "said (pp of dire)", category: "Participe", example: "Le professeur a dit que c'était facile. (luh proh-feh-SUR ah DEE kuh say-TAY fah-SEEL)" },
    { french: "bu", english: "drunk (pp of boire)", category: "Participe", example: "Tu as bu tout le jus d'orange ! (tu ah BEW too luh ZHEW doh-RAHNJ!)" },
    { french: "voulu", english: "wanted (pp of vouloir)", category: "Participe", example: "J'ai voulu apprendre le français. (zhay voo-LEW ah-PRAHN-druh luh frahn-SAY)" },
    { french: "pu", english: "could / was able to (pp of pouvoir)", category: "Participe", example: "Il n'a pas pu venir hier. (eel nah pah PEW vuh-NEER ee-AIR)" },
    { french: "su", english: "known (pp of savoir)", category: "Participe", example: "Tu as su la réponse tout de suite. (tu ah SEW lah ray-POHNS toot SWEET)" },
    { french: "reçu", english: "received (pp of recevoir)", category: "Participe", example: "J'ai reçu ton message ce matin. (zhay ruh-SEW tohn may-SAHZH suh mah-TAN)" },
    { french: "une réunion", english: "a meeting", category: "Nom", example: "Il a eu une réunion importante. (eel ah EW ewn ray-ew-NYOHN an-por-TAHNT)" },
    { french: "un projet", english: "a project", category: "Nom", example: "Nous avons fait un projet ensemble. (noo zah-VOHN FAY uh(n) proh-ZHAY ahn-SAHM-bluh)" },
    { french: "un rapport", english: "a report", category: "Nom", example: "Tu as écrit le rapport ? (tu ah ay-KREE luh rah-POR?)" },
    { french: "une décision", english: "a decision", category: "Nom", example: "Elle a pris une décision difficile. (el ah PREE ewn day-see-ZYOHN dee-fee-SEEL)" },
    { french: "un problème", english: "a problem", category: "Nom", example: "J'ai eu un problème avec mon ordinateur. (zhay EW uh(n) proh-BLEM ah-VEK mohn or-dee-nah-TUR)" },
    { french: "une erreur", english: "a mistake", category: "Nom", example: "Tu as fait une erreur dans le calcul. (tu ah FAY ewn air-UR dah(n) luh kal-KEWL)" },
    { french: "une idée", english: "an idea", category: "Nom", example: "Elle a eu une idée géniale ! (el ah EW ewn ee-DAY zhay-NYAL!)" },
    { french: "un résultat", english: "a result", category: "Nom", example: "Nous avons vu les résultats ce matin. (noo zah-VOHN VEW lay ray-zul-TAH suh mah-TAN)" },
  ],

  culturalNotes: [
    {
      title: "Le système universitaire français",
      content: "L'année universitaire française est divisée en deux semestres, avec des examens partiels en janvier et mai. La note sur 20 est le système standard, où 10/20 est la moyenne. Un 16/20 est considéré comme une très bonne note."
    },
    {
      title: "La culture du café en France",
      content: "Le café fait partie intégrante de la vie quotidienne française. Le petit noir (expresso) est la commande la plus typique. Beaucoup d'étudiants prennent un café avant un examen, mais le thé gagne en popularité, surtout chez les jeunes générations."
    },
    {
      title: "Prendre des notes à la française",
      content: "Les étudiants français sont connus pour leur prise de notes méthodique. Beaucoup utilisent des abréviations standardisées comme 'càd' (c'est-à-dire), 'pb' (problème) et 'tjs' (toujours). La prise de notes est une compétence enseignée dès le lycée."
    },
  ],

  exercises: [
    {
      id: "l14-e1",
      type: "matching",
      question: "Associez l'infinitif à son participe passé irrégulier.",
      pairs: [
        { french: "avoir", english: "eu" },
        { french: "être", english: "été" },
        { french: "faire", english: "fait" },
        { french: "prendre", english: "pris" },
        { french: "voir", english: "vu" },
        { french: "lire", english: "lu" },
        { french: "écrire", english: "écrit" },
        { french: "boire", english: "bu" },
        { french: "pouvoir", english: "pu" },
        { french: "vouloir", english: "voulu" },
        { french: "savoir", english: "su" },
        { french: "dire", english: "dit" },
      ],
      explanation: "Irregular past participles must be memorized, but grouping them by sound family (-u, -is, -it, and related verb families) makes them easier to retain."
    },
    {
      id: "l14-e2",
      type: "fill_blank",
      question: "Complétez avec le participe passé correct : J'ai ____ (voir) un très bon film hier.",
      correct_answer: "vu",
      explanation: "Irregular past participles must be memorized, but grouping them by sound family (-u, -is, -it, and related verb families) makes them easier to retain."
    },
    {
      id: "l14-e3",
      type: "fill_blank",
      question: "Complétez avec le participe passé correct : Elle a ____ (écrire) une lettre à sa grand-mère.",
      correct_answer: "écrit",
      explanation: "Irregular past participles must be memorized, but grouping them by sound family (-u, -is, -it, and related verb families) makes them easier to retain."
    },
    {
      id: "l14-e4",
      type: "transformation",
      question: "Transformez l'infinitif en passé composé.",
      instruction: "affirmative_to_negative",
      items: [
        { original: "Je (lire) le journal.", transformed: "J'ai lu le journal.", translation: "I read the newspaper." },
        { original: "Tu (boire) un café.", transformed: "Tu as bu un café.", translation: "You drank a coffee." },
        { original: "Elle (prendre) le bus.", transformed: "Elle a pris le bus.", translation: "She took the bus." },
        { original: "Nous (faire) les courses.", transformed: "Nous avons fait les courses.", translation: "We did the shopping." },
      ],
      explanation: "Irregular past participles must be memorized, but grouping them by sound family (-u, -is, -it, and related verb families) makes them easier to retain."
    },
    {
      id: "l14-e5",
      type: "multiple_choice",
      question: "Quel est le participe passé de 'pouvoir' ?",
      options: ["pouvé", "pouvu", "pu", "pouvé"],
      correct_answer: "pu",
      explanation: "Irregular past participles must be memorized, but grouping them by sound family (-u, -is, -it, and related verb families) makes them easier to retain."
    },
    {
      id: "l14-e6",
      type: "transformation",
      question: "Mettez ces phrases au passé composé à la forme négative.",
      instruction: "affirmative_to_negative",
      items: [
        { original: "J'ai eu le temps.", transformed: "Je n'ai pas eu le temps.", translation: "I didn't have time." },
        { original: "Tu as pu dormir.", transformed: "Tu n'as pas pu dormir.", translation: "You couldn't sleep." },
        { original: "Il a fait ses devoirs.", transformed: "Il n'a pas fait ses devoirs.", translation: "He didn't do his homework." },
      ],
      explanation: "Irregular past participles must be memorized, but grouping them by sound family (-u, -is, -it, and related verb families) makes them easier to retain."
    },
    {
      id: "l14-e7",
      type: "translation",
      question: "Traduisez en français : 'She received a message and she read it immediately.'",
      direction: "en_to_fr",
      correct_answer: ["Elle a reçu un message et elle l'a lu immédiatement.", "Elle a reçu un message et elle l'a lu tout de suite."],
      explanation: "Irregular past participles must be memorized, but grouping them by sound family (-u, -is, -it, and related verb families) makes them easier to retain."
    },
    {
      id: "l14-e8",
      type: "multiple_choice",
      question: "Complétez : 'Nous ____ ____ le film hier.' (voir)",
      options: ["avons vu", "a vu", "ont vu", "avez vu"],
      correct_answer: "avons vu",
      explanation: "Irregular past participles must be memorized, but grouping them by sound family (-u, -is, -it, and related verb families) makes them easier to retain."
    },
    {
      id: "l14-e9",
      type: "speaking_prompt",
      question: "Dites trois choses que vous avez faites la semaine dernière en utilisant des participes passés irréguliers.",
      model_answer: "La semaine dernière, j'ai lu un livre. J'ai écrit un email important. J'ai bu un bon café.",
      translation: "Last week, I read a book. I wrote an important email. I drank a good coffee.",
      tip: "Memorize irregular participles in families instead of as isolated forms."
    },
    {
      id: "l14-e10",
      type: "error_correction",
      question: "Corrigez le participe passé incorrect dans chaque phrase.",
      items: [
        { incorrect: "J'ai prendu le bus ce matin.", correct: "J'ai pris le bus ce matin.", explanation: "Irregular past participles must be memorized, but grouping them by sound family (-u, -is, -it, and related verb families) makes them easier to retain." },
        { incorrect: "Nous avons mettis la table.", correct: "Nous avons mis la table.", explanation: "Irregular past participles must be memorized, but grouping them by sound family (-u, -is, -it, and related verb families) makes them easier to retain." },
        { incorrect: "Il a voulu partir mais il n'a pas pouvé.", correct: "Il a voulu partir mais il n'a pas pu.", explanation: "Irregular past participles must be memorized, but grouping them by sound family (-u, -is, -it, and related verb families) makes them easier to retain." },
        { incorrect: "Elle a découvrit une belle plage.", correct: "Elle a découvert une belle plage.", explanation: "Irregular past participles must be memorized, but grouping them by sound family (-u, -is, -it, and related verb families) makes them easier to retain." },
        { incorrect: "Tu as venu avec nous ?", correct: "Tu es venu avec nous ?", explanation: "Irregular past participles must be memorized, but grouping them by sound family (-u, -is, -it, and related verb families) makes them easier to retain." }
      ]
    },
  ]
}

export default function Lesson14Page() {
  return (
    <ElementaryLessonLayout
      lessonData={lessonData}
      lessonNumber={14}
      prevHref="/lessons/elementary/13"
      prevLabel="Passé Composé I"
      nextHref="/lessons/elementary/15"
      nextLabel="Passé Composé III"
    />
  )
}
