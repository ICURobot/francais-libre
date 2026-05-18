'use client'

import ElementaryLessonLayout, { ElementaryLessonData } from '../../../../../components/lessons/ElementaryLessonLayout'

const lessonData: ElementaryLessonData = {
  id: 20,
  title: "Passé Composé vs Imparfait",
  level: "A2",
  description: "Learn how the passé composé and imparfait work together in narration: completed events move the story forward, while the imparfait sets the background.",

  dialogue: {
    title: "Comment j'ai rencontré mon meilleur ami",
    context: "Romain raconte à sa collègue Sarah comment il a rencontré son meilleur ami Julien, dans un café parisien.",
    exchanges: [
      { speaker: "Sarah", french: "Romain, comment tu as rencontré Julien ? Vous êtes amis depuis longtemps !", english: "Romain, how did you meet Julien? You've been friends for a long time!", pronunciation: "roh-MAN, koh-MAHN tu ah rahn-kohn-TRAY zhew-lee-AHN? voo zet ah-MEE duh-PWEE lohn-TAHN!" },
      { speaker: "Romain", french: "C'était en 2019. Il pleuvait beaucoup ce jour-là. J'attendais un ami dans un café.", english: "It was in 2019. It was raining a lot that day. I was waiting for a friend in a café.", pronunciation: "say-TAY ahn duh meel duhz-NUHF. eel pluh-VAY bo-KOO suh ZHOOR-LAH. zhah-tahn-DAY uh(n) ah-MEE dah(n) zuh(n) kah-FAY." },
      { speaker: "Sarah", french: "Et alors, qu'est-ce qui s'est passé ?", english: "And then, what happened?", pronunciation: "ay ah-LOR, kes-kee say pah-SAY?" },
      { speaker: "Romain", french: "Soudain, un type est entré. Il portait un vieux sac et il avait l'air perdu.", english: "Suddenly, a guy came in. He was carrying an old bag and he looked lost.", pronunciation: "soo-DAN, uh(n) TEEP ay ahn-TRAY. eel por-TAY uh(n) vyuh SAK ay eel ah-VAY LAIR pair-DEW." },
      { speaker: "Sarah", french: "C'était Julien ?", english: "That was Julien?", pronunciation: "say-TAY zhew-lee-AHN?" },
      { speaker: "Romain", french: "Oui. Il cherchait la gare, mais il s'était perdu. Je lui ai indiqué le chemin.", english: "Yes. He was looking for the station, but he had gotten lost. I gave him directions.", pronunciation: "WEE. eel shair-SHAY lah GAHR, may eel say-TAY pair-DEW. zhuh lwee ay aan-dee-KAY luh shuh-MAN." },
      { speaker: "Sarah", french: "Et vous avez parlé ?", english: "And you talked?", pronunciation: "ay voo zah-VAY par-LAY?" },
      { speaker: "Romain", french: "Oui, pendant que j'expliquais le chemin, mon ami m'a appelé. Il était en retard.", english: "Yes, while I was explaining the way, my friend called me. He was late.", pronunciation: "WEE, pahn-DAHN kuh zheks-plee-KAY luh shuh-MAN, mohn ah-MEE mah ah-puh-LAY. eel ay-TAY ahn ruh-TAHR." },
      { speaker: "Sarah", french: "Donc tu as invité Julien à prendre un café ?", english: "So you invited Julien to have a coffee?", pronunciation: "DOHNK tu ah ahn-vee-TAY zhew-lee-AHN ah PRAHN-druh uh(n) kah-FAY?" },
      { speaker: "Romain", french: "Exactement. Nous avons discuté pendant deux heures. On avait les mêmes goûts !", english: "Exactly. We talked for two hours. We had the same tastes!", pronunciation: "eg-zak-tuh-MAHN. noo zah-VOHN dees-kew-TAY pahn-DAHN duh zur. ohn ah-VAY lay MEM GOO!" },
      { speaker: "Sarah", french: "Et depuis, vous êtes inséparables !", english: "And since then, you've been inseparable!", pronunciation: "ay duh-PWEE, voo zet an-say-pah-RAHBL!" },
      { speaker: "Romain", french: "Oui, ce jour-là, je ne cherchais rien de spécial. Mais j'ai trouvé un ami pour la vie.", english: "Yes, that day, I wasn't looking for anything special. But I found a friend for life.", pronunciation: "WEE, suh ZHOOR-LAH, zhuh nuh shair-SHAY ree-AHN duh spay-SYAL. may zhay troo-VAY uh(n) ah-MEE poor lah VEE." },
    ]
  },

  grammarPoints: [
    {
      title: "La Règle d'Or : PC vs Imparfait",
      explanation: "The passé composé presents completed events that move a story forward; the imparfait sets the scene, describes states, or shows habits.",
      examples: [
        "IMPARFAIT (décor) : Il pleuvait. J'attendais dans un café.",
        "PASSÉ COMPOSÉ (action) : Soudain, un type est entré. Je lui ai parlé.",
        "CONTRASTE : Je lisais (imparfait) quand le téléphone a sonné (PC).",
        "CONTRASTE : Il faisait beau (imparfait), alors nous sommes sortis (PC).",
        "HABITUDE (imparfait) : Tous les étés, nous allions à la mer.",
        "ÉVÉNEMENT (PC) : Un été, nous sommes allés en Italie."
      ]
    },
    {
      title: "Mots Déclencheurs",
      explanation: "Certain time markers strongly suggest one tense: soudain and un jour often introduce passé composé events, while autrefois and tous les jours often introduce imparfait habits.",
      examples: [
        "PASSÉ COMPOSÉ : soudain (suddenly), tout à coup (all of a sudden), un jour (one day), finalement (finally), d'abord...ensuite...puis (first...then...then)",
        "PASSÉ COMPOSÉ : à ce moment-là (at that moment), tout de suite (immediately), une fois (once)",
        "IMPARFAIT : pendant que (while), chaque fois que (every time that), autrefois (in the past), d'habitude (usually)",
        "IMPARFAIT : tous les + période (every...), souvent (often), toujours (always in past)",
        "IMPARFAIT : quand + imparfait (âge ou période) — quand j'avais 10 ans...",
        "CONTRASTE : Je dormais (imparfait) quand soudain (PC) mon réveil a sonné (PC)."
      ]
    },
    {
      title: "L'Interaction des Deux Temps",
      explanation: "In narration, the imparfait often gives the background and the passé composé introduces the interrupting or completed event.",
      examples: [
        "IMPARFAIT (contexte) + PC (événement) : Il était 8h, je prenais mon café quand le facteur a sonné.",
        "PC (événement) + IMPARFAIT (conséquence descriptive) : Il est tombé. Tout le monde le regardait.",
        "IMPARFAIT (habitude interrompue) + PC : Je travaillais quand mon ordinateur est tombé en panne.",
        "Les deux dans un paragraphe : Ce matin-là, le ciel était gris. Je suis sorti sans parapluie. Il a commencé à pleuvoir. Je courais vers le métro quand j'ai glissé.",
        "Test rapide : 'used to' → imparfait. 'did (once)' → passé composé."
      ]
    },
    {
      title: "Les Verbes d'État et leur Changement de Sens au PC",
      explanation: "Some state verbs change meaning in the passé composé because the tense highlights the moment a state began, changed, or was realized.",
      examples: [
        "SAVOIR — je savais (I knew — état continu) → j'ai su (I found out / I realized — moment de découverte)",
        "POUVOIR — je pouvais (I was able to — état) → j'ai pu (I managed to / I succeeded — moment précis)",
        "VOULOIR — je voulais (I wanted — désir continu) → j'ai voulu (I tried to — tentative à un moment)",
        "CONNAÎTRE — je connaissais (I knew him — familiarité) → j'ai connu (I met him — première rencontre)",
        "DEVOIR — je devais (I was supposed to — obligation prévue) → j'ai dû (I had to / was forced to — moment)",
        "Exemple en contexte : Je ne savais pas qu'il était parti. (ongoing state) / Quand j'ai su la vérité, j'ai pleuré. (moment of discovery)",
        "Exemple : Je voulais partir mais j'ai voulu rester pour l'aider. (wanted vs tried to)"
      ]
    }
  ],

  vocabulary: [
    { french: "soudain", english: "suddenly", category: "Déclencheur PC", example: "Soudain, il a commencé à pleuvoir. (soo-DAN, eel ah koh-mahn-SAY ah pluh-VWAHR)" },
    { french: "tout à coup", english: "all of a sudden", category: "Déclencheur PC", example: "Tout à coup, la lumière s'est éteinte. (too tah KOO, lah lew-MYAIR say tay-TANT)" },
    { french: "un jour", english: "one day", category: "Déclencheur PC", example: "Un jour, j'ai décidé de changer de vie. (uh(n) ZHOOR, zhay day-see-DAY duh shahn-ZHAY duh VEE)" },
    { french: "pendant que", english: "while", category: "Déclencheur Imparfait", example: "Pendant que je dormais, il a neigé. (pahn-DAHN kuh zhuh dor-MAY, eel ah nay-ZHAY)" },
    { french: "chaque fois que", english: "every time that", category: "Déclencheur Imparfait", example: "Chaque fois que je voyais Paul, il souriait. (shahk FWAH kuh zhuh vwa-YAY POHL, eel soo-ree-YAY)" },
    { french: "d'habitude", english: "usually", category: "Déclencheur Imparfait", example: "D'habitude, je me levais à 7h. (dah-bee-TEWD, zhuh muh luh-VAY ah set-ur)" },
    { french: "donc", english: "so / therefore", category: "Connecteur", example: "Il pleuvait, donc je suis resté chez moi. (eel pluh-VAY, DOHNK zhuh swee res-TAY shay MWAH)" },
    { french: "alors", english: "so / then", category: "Connecteur", example: "Alors, qu'est-ce que tu as fait ? (ah-LOR, kes-kuh tu ah FAY?)" },
    { french: "c'est pourquoi", english: "that's why", category: "Connecteur", example: "J'étais fatigué, c'est pourquoi je me suis couché tôt. (zhay-TAY fah-tee-GAY, say poor-KWAH zhuh muh swee koo-SHAY TOH)" },
    { french: "à ce moment-là", english: "at that moment", category: "Connecteur", example: "À ce moment-là, j'ai compris mon erreur. (ah suh moh-MAHN LAH, zhay kohm-PREE mohn air-UR)" },
    { french: "juste avant", english: "just before", category: "Connecteur", example: "Juste avant de partir, il a souri. (zhewst ah-VAHN duh par-TEER, eel ah soo-REE)" },
    { french: "juste après", english: "just after", category: "Connecteur", example: "Juste après, tout le monde est parti. (zhewst ah-PRAY, too luh MOHND ay par-TEE)" },
    { french: "perdu(e)", english: "lost", category: "Adjectif", example: "Il avait l'air complètement perdu. (eel ah-VAY LAIR kohm-plet-MAHN pair-DEW)" },
    { french: "un type", english: "a guy / bloke", category: "Nom (familier)", example: "Un type est entré dans le café. (uh(n) TEEP ay ahn-TRAY dah(n) luh kah-FAY)" },
    { french: "le chemin", english: "the way / path", category: "Nom", example: "J'ai montré le chemin à Julien. (zhay mohn-TRAY luh shuh-MAN ah zhew-lee-AHN)" },
    { french: "la vie", english: "life", category: "Nom", example: "C'est la plus belle rencontre de ma vie. (say lah plew bel rahn-KOHN-truh duh mah VEE)" },
    { french: "une rencontre", english: "an encounter / meeting", category: "Nom", example: "Notre rencontre a changé ma vie. (noh-truh rahn-KOHN-truh ah shahn-ZHAY mah VEE)" },
    { french: "un souvenir", english: "a memory", category: "Nom", example: "Ce souvenir était très clair. (suh soo-vuh-NEER ay-TAY tray KLAIR)" },
  ],

  culturalNotes: [
    { title: "Le café comme lieu de rencontre", content: "En France, le café est bien plus qu'un lieu où l'on boit : c'est un espace social où l'on se retrouve, où l'on travaille, où l'on refait le monde. Beaucoup d'amitiés et d'histoires d'amour commencent à la terrasse d'un café." },
    { title: "Se perdre à Paris", content: "Paris est divisée en 20 arrondissements disposés en spirale. Même les Parisiens se perdent parfois dans les petites rues du Marais ou de Montmartre. Demander son chemin ('Excusez-moi, je cherche...') est une interaction quotidienne qui crée souvent des échanges inattendus." },
    { title: "L'amitié à la française", content: "L'amitié en France se construit souvent sur des valeurs partagées plutôt que sur la simple convivialité. Les Français préfèrent avoir peu d'amis très proches que beaucoup de connaissances superficielles. Une fois l'amitié établie, elle est généralement très loyale et durable." },
  ],

  exercises: [
    { id: "l20-e1", type: "tense_choice", question: "Choisissez entre le passé composé et l'imparfait.", items: [{ sentence: "Il ____ (pleuvoir) quand je suis sorti.", verb: "pleuvoir", options: ["Passé composé", "Imparfait"], correct_answer: "Imparfait", explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward." }, { sentence: "Soudain, un chien ____ (traverser) la rue.", verb: "traverser", options: ["Passé composé", "Imparfait"], correct_answer: "Passé composé", explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward." }, { sentence: "Tous les dimanches, nous ____ (aller) au marché.", verb: "aller", options: ["Passé composé", "Imparfait"], correct_answer: "Imparfait", explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward." }, { sentence: "Un jour, elle ____ (décider) de partir.", verb: "décider", options: ["Passé composé", "Imparfait"], correct_answer: "Passé composé", explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward." }, { sentence: "Pendant que je ____ (lire), il ____ (entrer).", verb: "lire / entrer", options: ["PC + PC", "Imparfait + PC", "PC + Imparfait", "Imparfait + Imparfait"], correct_answer: "Imparfait + PC", explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward." }], explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward." },
    { id: "l20-e2", type: "fill_blank", question: "Complétez avec le passé composé ou l'imparfait : Il ____ (faire) beau quand nous ____ (arriver).", correct_answer: "faisait sommes arrivés", explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward." },
    { id: "l20-e3", type: "transformation", question: "Changez l'imparfait en passé composé et expliquez le changement de sens.", instruction: "affirmative_to_negative", items: [{ original: "Je lisais un livre.", transformed: "J'ai lu un livre.", translation: "I read a book (entirely, completed)." }, { original: "Elle dormait.", transformed: "Elle a dormi.", translation: "She slept (for a specific period, action completed)." }, { original: "Nous habitions à Paris.", transformed: "Nous avons habité à Paris.", translation: "We lived in Paris (for a specific period, now finished)." }], explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward." },
    { id: "l20-e4", type: "translation", question: "Traduisez ce court paragraphe narratif : 'It was raining. I was waiting at the bus stop. Suddenly, a car splashed me. I was furious.'", direction: "en_to_fr", correct_answer: ["Il pleuvait. J'attendais à l'arrêt de bus. Soudain, une voiture m'a éclaboussé. J'étais furieux."], explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward." },
    { id: "l20-e5", type: "matching", question: "Associez le mot déclencheur au temps qu'il appelle.", pairs: [{ french: "soudain", english: "Passé composé" }, { french: "tous les jours", english: "Imparfait" }, { french: "un jour", english: "Passé composé" }, { french: "pendant que", english: "Imparfait" }, { french: "autrefois", english: "Imparfait" }, { french: "tout à coup", english: "Passé composé" }], explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward." },
    { id: "l20-e6", type: "error_correction", question: "Corrigez les erreurs de temps dans ces phrases.", items: [{ incorrect: "Il a plu quand je suis sorti.", correct: "Il pleuvait quand je suis sorti.", explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward." }, { incorrect: "Chaque été, nous sommes allés à la plage.", correct: "Chaque été, nous allions à la plage.", explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward." }, { incorrect: "Je lisais un livre et j'ai terminé ce livre.", correct: "J'ai lu un livre et j'ai terminé ce livre.", explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward." }, { incorrect: "Soudain, il pleuvait.", correct: "Soudain, il a plu.", explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward." }, { incorrect: "Quand j'avais 10 ans, j'ai aimé les bonbons.", correct: "Quand j'avais 10 ans, j'aimais les bonbons.", explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward." }] },
    { id: "l20-e7", type: "transformation", question: "Transformez ces phrases au passé composé vers l'imparfait (habitude).", instruction: "affirmative_to_negative", items: [{ original: "Ce matin, j'ai pris un café.", transformed: "Tous les matins, je prenais un café.", translation: "Every morning, I used to have a coffee." }, { original: "Hier, elle est allée au cinéma.", transformed: "Chaque samedi, elle allait au cinéma.", translation: "Every Saturday, she used to go to the cinema." }], explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward." },
    { id: "l20-e8", type: "multiple_choice", question: "Quelle phrase combine correctement imparfait et passé composé ?", options: ["Je lisais quand il est entré.", "J'ai lu quand il entrait.", "Je lisais quand il entrait.", "J'ai lu quand il est entré."], correct_answer: "Je lisais quand il est entré.", explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward." },
    { id: "l20-e9", type: "translation", question: "Traduisez : 'While I was walking, I saw an old friend. We talked for an hour.'", direction: "en_to_fr", correct_answer: ["Pendant que je marchais, j'ai vu un vieil ami. Nous avons parlé pendant une heure."], explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward." },
    { id: "l20-e10", type: "speaking_prompt", question: "Racontez brièvement comment vous avez rencontré un(e) ami(e). Utilisez au moins 2 imparfaits et 2 passés composés.", model_answer: "C'était en été. Il faisait très chaud. J'attendais un ami dans un parc. Soudain, une fille s'est assise à côté de moi. Elle m'a demandé l'heure. Nous avons parlé pendant une heure. Elle était très drôle.", translation: "It was in summer. It was very hot. I was waiting for a friend in a park. Suddenly, a girl sat next to me. She asked me the time. We talked for an hour. She was very funny.", tip: "Think of the imparfait as the scene and the passé composé as the event." },
    {
      id: "l20-e11",
      type: "multiple_choice",
      question: "Quel est le sens de 'j'ai su' (passé composé de savoir) dans : 'J'ai su la vérité quand il est rentré.' ?",
      options: [
        "Je savais la vérité depuis longtemps.",
        "J'ai découvert / appris la vérité à ce moment précis.",
        "Je ne savais pas la vérité.",
        "Je saurai la vérité bientôt."
      ],
      correct_answer: "J'ai découvert / appris la vérité à ce moment précis.",
      explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward."
    },
    {
      id: "l20-e12",
      type: "matching",
      question: "Associez le verbe d'état à son sens au passé composé (PC) et à l'imparfait (IMP).",
      pairs: [
        { french: "je savais (IMP)", english: "I knew (ongoing state)" },
        { french: "j'ai su (PC)", english: "I found out / I realized" },
        { french: "je pouvais (IMP)", english: "I was able to (general ability)" },
        { french: "j'ai pu (PC)", english: "I managed to / I succeeded" },
        { french: "je connaissais (IMP)", english: "I knew him (familiarity)" },
        { french: "j'ai connu (PC)", english: "I met him (first encounter)" }
      ],
      explanation: "Use the imparfait for background, description, states, and habits. Use the passé composé for completed events that move the story forward."
    },
  ]
}

export default function Lesson20Page() {
  return (
    <ElementaryLessonLayout
      lessonData={lessonData}
      lessonNumber={20}
      prevHref="/lessons/elementary/19"
      prevLabel="L'Imparfait"
      nextHref="/lessons/elementary/21"
      nextLabel="Le Futur Simple"
    />
  )
}
