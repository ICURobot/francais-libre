'use client'

import ElementaryLessonLayout, { ElementaryLessonData } from '../../../../../components/lessons/ElementaryLessonLayout'

const lessonData: ElementaryLessonData = {
  id: 13,
  title: "Le Passé Composé I",
  level: "A2",
  description: "Master the passé composé with avoir for regular -er verbs. Learn to tell completed past events, form past-tense negatives, and use essential time expressions.",

  dialogue: {
    title: "Lundi matin au bureau",
    context: "Deux collègues, Sophie et Marc, se retrouvent au bureau le lundi matin et parlent de leur week-end.",
    exchanges: [
      { speaker: "Sophie", french: "Salut Marc ! Tu as passé un bon week-end ?", english: "Hi Marc! Did you have a good weekend?", pronunciation: "sah-LU MAHRK! tu ah pah-SAY uh(n) bohn wee-KEHND?" },
      { speaker: "Marc", french: "Oui, super ! J'ai visité le musée d'Orsay samedi.", english: "Yes, great! I visited the Musée d'Orsay on Saturday.", pronunciation: "WEE, su-PAIR! zhay vee-zee-TAY luh mew-ZAY dor-SAY sahm-DEE." },
      { speaker: "Sophie", french: "Ah bon ? Tu as aimé ? Moi, j'ai adoré ce musée il y a deux ans.", english: "Oh really? Did you like it? I loved that museum two years ago.", pronunciation: "ah BOHN? tu ah ay-MAY? MWAH, zhay ah-dor-RAY suh mew-ZAY eel yah duh ZAHN." },
      { speaker: "Marc", french: "Oui, j'ai beaucoup aimé. Et dimanche, j'ai regardé un film à la maison.", english: "Yes, I liked it a lot. And on Sunday, I watched a movie at home.", pronunciation: "WEE, zhay bo-KOO ay-MAY. ay dee-MAHNSH, zhay ruh-gar-DAY uh(n) feelm ah lah may-ZOHN." },
      { speaker: "Sophie", french: "Moi, je n'ai pas regardé la télé. J'ai écouté de la musique et j'ai préparé le dîner.", english: "I didn't watch TV. I listened to music and I prepared dinner.", pronunciation: "MWAH, zhuh nay pah ruh-gar-DAY lah tay-LAY. zhay ay-koo-TAY duh lah mew-ZEEK ay zhay pray-pah-RAY luh dee-NAY." },
      { speaker: "Marc", french: "Tu as invité des amis ?", english: "Did you invite friends?", pronunciation: "tu ah ahn-vee-TAY day zah-MEE?" },
      { speaker: "Sophie", french: "Non, j'ai dîné seule. J'ai cherché un nouveau restaurant dans le quartier.", english: "No, I dined alone. I looked for a new restaurant in the neighbourhood.", pronunciation: "NOHN, zhay dee-NAY suhl. zhay shair-SHAY uh(n) noo-VOH res-toh-RAHN dah(n) luh kar-TYAY." },
      { speaker: "Marc", french: "Tu as trouvé quelque chose d'intéressant ?", english: "Did you find something interesting?", pronunciation: "tu ah troo-VAY kel-kuh SHOHZ dan-tay-ray-SAHN?" },
      { speaker: "Sophie", french: "Oui, j'ai trouvé un petit bistrot. J'ai téléphoné pour réserver une table.", english: "Yes, I found a small bistro. I called to book a table.", pronunciation: "WEE, zhay troo-VAY uh(n) puh-TEE bees-TROH. zhay tay-lay-foh-NAY poor ray-zair-VAY ewn TAH-bluh." },
      { speaker: "Marc", french: "Parfait ! Tu as bien profité du week-end alors !", english: "Perfect! You really made the most of the weekend then!", pronunciation: "par-FAY! tu ah byan proh-fee-TAY dew wee-KEHND ah-LOR!" },
    ]
  },

  grammarPoints: [
    {
      title: "Formation du Passé Composé avec Avoir",
      explanation: "The passé composé is made of two parts: the present tense of avoir plus the past participle. For regular -er verbs, replace -er with -é. It expresses a completed action in the past.",
      examples: [
        "PARLER → J'ai parlé (I spoke / I have spoken)",
        "MANGER → Tu as mangé (You ate / You have eaten)",
        "REGARDER → Il a regardé (He watched / He has watched)",
        "ÉCOUTER → Nous avons écouté (We listened / We have listened)",
        "TRAVAILLER → Vous avez travaillé (You worked / You have worked)",
        "AIMER → Ils ont aimé (They liked / They have liked)"
      ]
    },
    {
      title: "La Négation au Passé Composé",
      explanation: "To make the passé composé negative, place ne before the auxiliary and pas after it: je n’ai pas parlé. The past participle stays after the negative frame.",
      examples: [
        "Je n'ai pas parlé (I didn't speak) — ne + ai + pas + parlé",
        "Tu n'as pas mangé (You didn't eat) — ne + as + pas + mangé",
        "Il n'a pas regardé (He didn't watch) — ne + a + pas + regardé",
        "Nous n'avons pas écouté (We didn't listen) — ne + avons + pas + écouté",
        "Vous n'avez pas travaillé (You didn't work) — ne + avez + pas + travaillé"
      ]
    },
    {
      title: "Expressions Temporelles du Passé",
      explanation: "Time expressions such as hier, la semaine dernière, and il y a often signal that a completed past action is being described, so they commonly pair with the passé composé.",
      examples: [
        "hier (yesterday) → Hier, j'ai visité Paris.",
        "avant-hier (the day before yesterday) → Avant-hier, il a téléphoné.",
        "la semaine dernière (last week) → La semaine dernière, nous avons travaillé.",
        "le mois dernier (last month) → Le mois dernier, tu as cherché un appartement.",
        "l'année dernière (last year) → L'année dernière, ils ont voyagé en France.",
        "ce matin (this morning) → Ce matin, j'ai préparé le petit déjeuner.",
        "il y a + durée (ago) → Il y a deux jours, j'ai trouvé ce livre."
      ]
    },
    {
      title: "Poser une Question au Passé Composé",
      explanation: "Questions in the passé composé can be formed with intonation, est-ce que, or formal inversion. In written French and exams, inversion is the most formal option.",
      examples: [
        "1. INTONATION (oral familier) — montée de voix : Tu as visité le Louvre ?",
        "2. EST-CE QUE (oral/écrit, neutre) : Est-ce que tu as visité le Louvre ?",
        "3. INVERSION (formel, écrit, examen) : As-tu visité le Louvre ?",
        "Avec il/elle, on ajoute -t- si le verbe se termine par une voyelle : A-t-il mangé ? / A-t-elle fini ?",
        "Avec un mot interrogatif : Qu'est-ce que tu as fait hier ? / Où es-tu allé(e) ? / Avec qui avez-vous dîné ?",
        "Négatif-question courant : Tu n'as pas encore mangé ? — Inversion négative (formel) : N'as-tu pas encore mangé ?"
      ]
    }
  ],

  vocabulary: [
    { french: "hier", english: "yesterday", category: "Temps", example: "Hier, j'ai travaillé toute la journée. (ee-AIR, zhay trav-eye-YAY toot lah zhoor-NAY)" },
    { french: "avant-hier", english: "the day before yesterday", category: "Temps", example: "Avant-hier, il a visité sa famille. (ah-vahn-tee-AIR, eel ah vee-zee-TAY sah fah-MEEY)" },
    { french: "la semaine dernière", english: "last week", category: "Temps", example: "La semaine dernière, nous avons dîné au restaurant. (lah suh-MEN dair-NYAIR, noo zah-vohn dee-NAY oh res-toh-RAHN)" },
    { french: "le mois dernier", english: "last month", category: "Temps", example: "Le mois dernier, elle a voyagé au Japon. (luh MWAH dair-NYAY, el ah vwa-yah-ZHAY oh zhah-POHN)" },
    { french: "l'année dernière", english: "last year", category: "Temps", example: "L'année dernière, j'ai commencé le français. (lah-NAY dair-NYAIR, zhay koh-mahn-SAY luh frahn-SAY)" },
    { french: "ce matin", english: "this morning", category: "Temps", example: "Ce matin, tu as écouté les informations. (suh mah-TAN, tu ah ay-koo-TAY layz an-for-mah-SYOHN)" },
    { french: "ce soir", english: "this evening", category: "Temps", example: "Ce soir, j'ai préparé une soupe. (suh SWAHR, zhay pray-pah-RAY ewn SOOP)" },
    { french: "déjà", english: "already", category: "Temps", example: "Tu as déjà mangé ? (tu ah day-ZHAH mahn-ZHAY?)" },
    { french: "récemment", english: "recently", category: "Temps", example: "Récemment, ils ont cherché une maison. (ray-sah-MAHN, eel zohn shair-SHAY ewn may-ZOHN)" },
    { french: "il y a", english: "ago", category: "Temps", example: "Il y a trois jours, j'ai trouvé ce restaurant. (eel yah trwah ZHOOR, zhay troo-VAY suh res-toh-RAHN)" },
    { french: "voyager", english: "to travel", category: "Verbe -er", example: "Il a voyagé en Italie le mois dernier. (eel ah vwa-yah-ZHAY ahn ee-tah-LEE luh MWAH dair-NYAY)" },
    { french: "visiter", english: "to visit (a place)", category: "Verbe -er", example: "Nous avons visité la cathédrale hier. (noo zah-vohn vee-zee-TAY lah kah-tay-DRAL ee-AIR)" },
    { french: "terminer", english: "to finish", category: "Verbe -er", example: "J'ai terminé mon travail à 18h. (zhay tair-mee-NAY mohn trav-EYE ah deez-WEE-tur)" },
    { french: "rater", english: "to miss", category: "Verbe -er", example: "Il a raté le train de 8h. (eel ah rah-TAY luh TRAN duh weet-ur)" },
    { french: "rester", english: "to stay", category: "Verbe -er", example: "Elle reste à la maison aujourd'hui. (el REST ah lah may-ZOHN oh-zhoor-DWEE)" },
    { french: "rentrer", english: "to return/go home", category: "Verbe -er", example: "Je rentre à 19h. (zhuh RAHN-truh ah deez-nurf-ur)" },
    { french: "oublier", english: "to forget", category: "Verbe -er", example: "J'ai oublié mes clés ce matin. (zhay oo-blee-YAY may KLAY suh mah-TAN)" },
    { french: "chercher", english: "to look for", category: "Verbe -er", example: "Tu as cherché tes lunettes ? (tu ah shair-SHAY tay lew-NET?)" },
    { french: "trouver", english: "to find", category: "Verbe -er", example: "J'ai trouvé un bon restaurant ! (zhay troo-VAY uh(n) bohn res-toh-RAHN!)" },
    { french: "passer (du temps)", english: "to spend (time)", category: "Verbe -er", example: "Il a passé deux heures au parc. (eel ah pah-SAY duh zur oh PAHRK)" },
  ],

  culturalNotes: [
    {
      title: "Le Musée d'Orsay",
      content: "Installé dans une ancienne gare ferroviaire construite pour l'Exposition universelle de 1900, le musée d'Orsay abrite la plus grande collection d'art impressionniste et post-impressionniste au monde. On y trouve des œuvres de Monet, Renoir, Van Gogh et bien d'autres."
    },
    {
      title: "Le bistrot parisien",
      content: "Le bistrot est un petit restaurant typiquement français, souvent familial, où l'on sert une cuisine traditionnelle dans une ambiance décontractée. Le mot vient du russe 'bystro' (vite), rapporté par les soldats russes occupant Paris en 1814."
    },
    {
      title: "Le rythme de travail en France",
      content: "La semaine de travail légale en France est de 35 heures. Beaucoup de Français ne travaillent pas le week-end, ce qui explique l'importance culturelle du week-end comme moment de loisirs, de famille et de gastronomie."
    },
    {
      title: "Réserver dans un restaurant",
      content: "En France, il est courant et souvent nécessaire de réserver une table à l'avance, surtout pour le dîner du vendredi ou samedi soir. On peut téléphoner directement au restaurant ou utiliser des applications comme TheFork."
    },
  ],

  exercises: [
    {
      id: "l13-e1",
      type: "conjugation",
      question: "Conjuguez le verbe PARLER au passé composé.",
      verb: "parler",
      correct_answer: [
        { pronoun: "j'", form: "ai parlé", pronunciation: "ay par-LAY" },
        { pronoun: "tu", form: "as parlé", pronunciation: "ah par-LAY" },
        { pronoun: "il/elle/on", form: "a parlé", pronunciation: "ah par-LAY" },
        { pronoun: "nous", form: "avons parlé", pronunciation: "ah-VOHN par-LAY" },
        { pronoun: "vous", form: "avez parlé", pronunciation: "ah-VAY par-LAY" },
        { pronoun: "ils/elles", form: "ont parlé", pronunciation: "ohn par-LAY" },
      ],
      explanation: "The passé composé with avoir uses present-tense avoir plus a past participle. Regular -er verbs change -er to -é, and ne...pas surrounds the auxiliary in negative sentences."
    },
    {
      id: "l13-e2",
      type: "fill_blank",
      question: "Complétez avec la forme correcte de l'auxiliaire avoir : Nous ____ écouté la radio.",
      correct_answer: "avons",
      explanation: "The passé composé with avoir uses present-tense avoir plus a past participle. Regular -er verbs change -er to -é, and ne...pas surrounds the auxiliary in negative sentences."
    },
    {
      id: "l13-e3",
      type: "fill_blank",
      question: "Complétez avec la forme correcte de l'auxiliaire avoir : Tu ____ regardé le film hier.",
      correct_answer: "as",
      explanation: "The passé composé with avoir uses present-tense avoir plus a past participle. Regular -er verbs change -er to -é, and ne...pas surrounds the auxiliary in negative sentences."
    },
    {
      id: "l13-e4",
      type: "transformation",
      question: "Transformez ces phrases du présent au passé composé.",
      instruction: "affirmative_to_negative",
      items: [
        { original: "Je parle à Marie.", transformed: "J'ai parlé à Marie.", translation: "I spoke to Marie." },
        { original: "Tu manges une pomme.", transformed: "Tu as mangé une pomme.", translation: "You ate an apple." },
        { original: "Il regarde la télé.", transformed: "Il a regardé la télé.", translation: "He watched TV." },
      ],
      explanation: "The passé composé with avoir uses present-tense avoir plus a past participle. Regular -er verbs change -er to -é, and ne...pas surrounds the auxiliary in negative sentences."
    },
    {
      id: "l13-e5",
      type: "multiple_choice",
      question: "Quelle phrase est au passé composé ?",
      options: ["Je parle français.", "J'ai parlé français.", "Je parlerai français.", "Je parlais français."],
      correct_answer: "J'ai parlé français.",
      explanation: "The passé composé with avoir uses present-tense avoir plus a past participle. Regular -er verbs change -er to -é, and ne...pas surrounds the auxiliary in negative sentences."
    },
    {
      id: "l13-e6",
      type: "transformation",
      question: "Mettez ces phrases au passé composé à la forme négative.",
      instruction: "affirmative_to_negative",
      items: [
        { original: "J'ai mangé.", transformed: "Je n'ai pas mangé.", translation: "I didn't eat." },
        { original: "Tu as écouté.", transformed: "Tu n'as pas écouté.", translation: "You didn't listen." },
        { original: "Nous avons travaillé.", transformed: "Nous n'avons pas travaillé.", translation: "We didn't work." },
      ],
      explanation: "The passé composé with avoir uses present-tense avoir plus a past participle. Regular -er verbs change -er to -é, and ne...pas surrounds the auxiliary in negative sentences."
    },
    {
      id: "l13-e7",
      type: "translation",
      question: "Traduisez en français : 'Yesterday, I visited the museum.'",
      direction: "en_to_fr",
      correct_answer: ["Hier, j'ai visité le musée.", "J'ai visité le musée hier."],
      explanation: "The passé composé with avoir uses present-tense avoir plus a past participle. Regular -er verbs change -er to -é, and ne...pas surrounds the auxiliary in negative sentences."
    },
    {
      id: "l13-e8",
      type: "matching",
      question: "Associez l'expression temporelle à sa signification.",
      pairs: [
        { french: "hier", english: "yesterday" },
        { french: "la semaine dernière", english: "last week" },
        { french: "le mois dernier", english: "last month" },
        { french: "il y a trois jours", english: "three days ago" },
        { french: "ce matin", english: "this morning" },
        { french: "déjà", english: "already" },
      ],
      explanation: "The passé composé with avoir uses present-tense avoir plus a past participle. Regular -er verbs change -er to -é, and ne...pas surrounds the auxiliary in negative sentences."
    },
    {
      id: "l13-e9",
      type: "speaking_prompt",
      question: "Dites trois choses que vous avez faites hier. Utilisez le passé composé.",
      model_answer: "Hier, j'ai travaillé. J'ai préparé le dîner. J'ai regardé un film.",
      translation: "Yesterday, I worked. I prepared dinner. I watched a movie.",
      tip: "Build the tense in two steps: choose the correct form of avoir, then add the past participle."
    },
    {
      id: "l13-e10",
      type: "transformation",
      question: "Transformez ces affirmations en questions au passé composé — utilisez les trois formes.",
      instruction: "affirmative_to_negative",
      items: [
        { original: "Tu as mangé une crêpe.", transformed: "Tu as mangé une crêpe ? / Est-ce que tu as mangé une crêpe ? / As-tu mangé une crêpe ?", translation: "Did you eat a crêpe? (3 forms: intonation / est-ce que / inversion)" },
        { original: "Il a visité Paris.", transformed: "Il a visité Paris ? / Est-ce qu'il a visité Paris ? / A-t-il visité Paris ?", translation: "Did he visit Paris? (note -t- in inversion: A-t-il)" },
        { original: "Elles ont travaillé samedi.", transformed: "Elles ont travaillé samedi ? / Est-ce qu'elles ont travaillé samedi ? / Ont-elles travaillé samedi ?", translation: "Did they work on Saturday?" }
      ],
      explanation: "The passé composé with avoir uses present-tense avoir plus a past participle. Regular -er verbs change -er to -é, and ne...pas surrounds the auxiliary in negative sentences."
    },
  ]
}

export default function Lesson13Page() {
  return (
    <ElementaryLessonLayout
      lessonData={lessonData}
      lessonNumber={13}
      prevHref="/lessons/elementary"
      prevLabel="A2 Overview"
      nextHref="/lessons/elementary/14"
      nextLabel="Passé Composé II"
    />
  )
}
