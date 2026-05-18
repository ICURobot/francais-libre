'use client'

import ElementaryLessonLayout, { ElementaryLessonData } from '../../../../../components/lessons/ElementaryLessonLayout'

const lessonData: ElementaryLessonData = {
  id: 19,
  title: "L'Imparfait",
  level: "A2",
  description: "Master the imparfait for descriptions, habits, background actions, age, weather, time, and states in the past.",

  dialogue: {
    title: "Quand j'étais petite",
    context: "Une grand-mère, Madeleine, raconte son enfance à sa petite-fille Julie.",
    exchanges: [
      { speaker: "Julie", french: "Mamie, comment était ta vie quand tu étais petite ?", english: "Grandma, what was your life like when you were little?", pronunciation: "mah-MEE, koh-MAHN ay-TAY tah VEE kahn tu ay-TAY puh-TEET?" },
      { speaker: "Madeleine", french: "Quand j'étais petite, nous habitions dans un petit village en Bretagne.", english: "When I was little, we lived in a small village in Brittany.", pronunciation: "kahn zhay-TAY puh-TEET, noo zah-bee-TYOHN dah(n) zuh(n) puh-TEE vee-LAHZH ahn bruh-TANYUH." },
      { speaker: "Julie", french: "Il y avait la mer près de chez vous ?", english: "Was there the sea near your house?", pronunciation: "eel yah-VAY lah MAIR pray duh shay VOO?" },
      { speaker: "Madeleine", french: "Oui, la mer était à dix minutes à pied. Chaque été, nous allions à la plage.", english: "Yes, the sea was ten minutes away on foot. Every summer, we used to go to the beach.", pronunciation: "WEE, lah MAIR ay-TAY ah dee mee-NEWT ah PYAY. shahk ay-TAY, noo zah-lee-OHN ah lah PLAHZH." },
      { speaker: "Julie", french: "Tu avais des frères et sœurs ?", english: "Did you have brothers and sisters?", pronunciation: "tu ah-VAY day FRAIR ay SUR?" },
      { speaker: "Madeleine", french: "J'avais deux frères. Nous jouions dans les champs tous les jours.", english: "I had two brothers. We used to play in the fields every day.", pronunciation: "zhah-VAY duh FRAIR. noo zhoo-YOHN dah(n) lay SHAHN too lay ZHOOR." },
      { speaker: "Julie", french: "Tu aimais l'école ?", english: "Did you like school?", pronunciation: "tu ay-MAY lay-KOL?" },
      { speaker: "Madeleine", french: "J'aimais beaucoup l'école. Mon instituteur était très gentil. Il nous racontait des histoires.", english: "I really liked school. My teacher was very kind. He used to tell us stories.", pronunciation: "zhay-MAY bo-KOO lay-KOL. mohn an-stee-tew-TUR ay-TAY tray zhahn-TEE. eel noo rah-kohn-TAY day zee-STWAR." },
      { speaker: "Julie", french: "Vous mangiez quoi à cette époque ?", english: "What did you eat back then?", pronunciation: "voo mahn-ZHYAY KWAH ah set ay-POK?" },
      { speaker: "Madeleine", french: "Nous mangions des crêpes et du poisson frais. C'était délicieux !", english: "We used to eat crêpes and fresh fish. It was delicious!", pronunciation: "noo mahn-ZHYOHN day KREP ay dew pwah-SOHN FRAY. say-TAY day-lee-SYUH!" },
      { speaker: "Julie", french: "Tu regardais la télévision ?", english: "Did you watch television?", pronunciation: "tu ruh-gar-DAY lah tay-lay-vee-ZYOHN?" },
      { speaker: "Madeleine", french: "Non, nous n'avions pas de télévision. Nous écoutions la radio et nous lisions beaucoup.", english: "No, we didn't have a television. We listened to the radio and we read a lot.", pronunciation: "NOHN, noo nah-VYOHN pah duh tay-lay-vee-ZYOHN. noo zay-koo-TYOHN lah rah-DYOH ay noo lee-ZYOHN bo-KOO." },
    ]
  },

  grammarPoints: [
    {
      title: "Formation de l'Imparfait",
      explanation: "The imparfait is formed from the nous present stem plus -ais, -ais, -ait, -ions, -iez, -aient. Être is the main exception: j’étais.",
      examples: [
        "PARLER (nous parlons → parl-) : je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient",
        "FINIR (nous finissons → finiss-) : je finissais, tu finissais, il finissait, nous finissions, vous finissiez, ils finissaient",
        "RÉPONDRE (nous répondons → répond-) : je répondais, tu répondais, il répondait, nous répondions, vous répondiez, ils répondaient",
        "AVOIR (nous avons → av-) : j'avais, tu avais, il avait, nous avions, vous aviez, ils avaient",
        "ALLER (nous allons → all-) : j'allais, tu allais, il allait, nous allions, vous alliez, ils allaient",
        "ÊTRE (irrégulier) : j'étais, tu étais, il était, nous étions, vous étiez, ils étaient"
      ]
    },
    {
      title: "Les Quatre Usages de l'Imparfait",
      explanation: "Use the imparfait for habits, descriptions, ongoing background actions, and states such as age, weather, feelings, and time.",
      examples: [
        "HABITUDE : Tous les dimanches, nous allions à la messe.",
        "HABITUDE : Chaque été, je partais en vacances chez mes grands-parents.",
        "DESCRIPTION : Il faisait froid et il pleuvait beaucoup.",
        "DESCRIPTION : La rue était calme, les magasins fermaient tôt.",
        "ÉTAT : J'avais toujours faim après l'école.",
        "ÂGE : Quand elle avait 8 ans, elle a commencé le piano. (imparfait pour l'âge, même avec un événement ponctuel)"
      ]
    },
    {
      title: "Marqueurs Temporels de l'Imparfait — Liste Complète",
      explanation: "Words such as autrefois, souvent, toujours, and chaque été often point to habitual or background past meaning, which favors the imparfait.",
      examples: [
        "HABITUDE RÉPÉTÉE : tous les jours / chaque jour / chaque matin / le mardi (every Tuesday)",
        "HABITUDE RÉPÉTÉE : chaque été / chaque année / chaque fois que (every time that)",
        "FRÉQUENCE : souvent (often) / fréquemment (frequently) / parfois (sometimes) / rarement (rarely) / toujours (always)",
        "HABITUDE GÉNÉRALE : d'habitude (usually) / d'ordinaire (ordinarily) / habituellement (usually) / en général",
        "ÉPOQUE RÉVOLUE : autrefois (formerly) / jadis (of old, literary) / avant (before) / à cette époque (at that time)",
        "PÉRIODE DE VIE : quand j'étais jeune / quand j'avais 10 ans / à l'époque où...",
        "DURÉE INDÉFINIE : pendant des années (for years) / longtemps (for a long time) — sans précision de fin",
        "Piège à éviter : 'toujours' = always (imparfait), mais 'toujours' dans ne...plus → nuance différente."
      ]
    }
  ],

  vocabulary: [
    { french: "autrefois", english: "in the past / formerly", category: "Temps", example: "Autrefois, les gens voyageaient moins. (oh-truh-FWAH, lay zhahn vwa-yah-ZHAY mwahn)" },
    { french: "avant", english: "before", category: "Temps", example: "Avant, j'habitais à la campagne. (ah-VAHN, zhah-bee-TAY ah lah kahm-PANYUH)" },
    { french: "quand j'étais jeune", english: "when I was young", category: "Temps", example: "Quand j'étais jeune, j'adorais les bonbons. (kahn zhay-TAY zhun, zhah-dor-AY lay bohn-BOHN)" },
    { french: "à cette époque", english: "at that time", category: "Temps", example: "À cette époque, la vie était plus simple. (ah set ay-POK, lah VEE ay-TAY plew SAM-pluh)" },
    { french: "tous les jours", english: "every day", category: "Temps", example: "Je me levais à 6h tous les jours. (zhuh muh luh-VAY ah see-ZUR too lay ZHOOR)" },
    { french: "souvent", english: "often", category: "Temps", example: "Nous allions souvent au marché. (noo zah-lee-YOHN soo-VAHN oh mar-SHAY)" },
    { french: "parfois", english: "sometimes", category: "Temps", example: "Parfois, il pleuvait toute la journée. (par-FWAH, eel pluh-VAY toot lah zhoor-NAY)" },
    { french: "rarement", english: "rarely", category: "Temps", example: "Elle sortait rarement le soir. (el sor-TAY rar-MAHN luh SWAHR)" },
    { french: "il y avait", english: "there was/were", category: "Description", example: "Il y avait beaucoup de magasins. (eel yah-VAY bo-KOO duh mah-gah-ZAN)" },
    { french: "il faisait (beau/froid/chaud)", english: "it was (nice/cold/hot) weather", category: "Description", example: "Il faisait très froid cet hiver-là. (eel fuh-ZAY tray FRWAH set ee-VAIR-LAH)" },
    { french: "c'était", english: "it was", category: "Description", example: "C'était une belle journée d'été. (say-TAY ewn bel zhoor-NAY day-TAY)" },
    { french: "un village", english: "a village", category: "Nom", example: "Nous habitions dans un petit village. (noo zah-bee-TYOHN dah(n) zuh(n) puh-TEE vee-LAHZH)" },
    { french: "la Bretagne", english: "Brittany", category: "Nom propre", example: "La Bretagne est une région magnifique. (lah bruh-TANYUH ay ewn ray-ZHYOHN man-yee-FEEK)" },
    { french: "un champ", english: "a field", category: "Nom", example: "Les enfants jouaient dans les champs. (layz ahn-FAHN zhoo-YAY dah(n) lay SHAHN)" },
    { french: "une crêpe", english: "a crêpe (thin pancake)", category: "Nom", example: "Ma grand-mère faisait des crêpes le dimanche. (mah grahn-MAIR fuh-ZAY day KREP luh dee-MAHNSH)" },
    { french: "poisson", english: "fish", category: "Nom", example: "Nous mangions du poisson tous les vendredis. (noo mahn-ZHYOHN dew pwah-SOHN too lay vahn-druh-DEE)" },
    { french: "gentil(le)", english: "kind / nice", category: "Adjectif", example: "Mon voisin était très gentil. (mohn vwah-ZAN ay-TAY tray zhahn-TEE)" },
    { french: "délicieux / délicieuse", english: "delicious", category: "Adjectif", example: "Les gâteaux de ma mère étaient délicieux. (lay gah-TOH duh mah MAIR ay-TAY day-lee-SYUH)" },
  ],

  culturalNotes: [
    { title: "La Bretagne", content: "Région du nord-ouest de la France, la Bretagne possède une identité culturelle très forte avec sa propre langue (le breton), sa musique celtique, ses danses traditionnelles et sa gastronomie unique (crêpes, galettes, cidre, kouign-amann)." },
    { title: "L'école d'autrefois", content: "Dans les années 1950-60, l'école primaire française était très différente d'aujourd'hui : classes nombreuses, discipline stricte, uniforme obligatoire dans certaines écoles. L'instituteur (aujourd'hui 'professeur des écoles') était une figure respectée du village." },
    { title: "La télévision en France", content: "La télévision est arrivée en France en 1935 mais ne s'est généralisée que dans les années 1960. Avant, les Français écoutaient la radio (la TSF — Télégraphie Sans Fil) et lisaient beaucoup. Le journal télévisé de 20h reste aujourd'hui un rituel national." },
  ],

  exercises: [
    { id: "l19-e1", type: "conjugation", question: "Conjuguez le verbe PARLER à l'imparfait.", verb: "parler", correct_answer: [{ pronoun: "je", form: "parlais", pronunciation: "par-LAY" }, { pronoun: "tu", form: "parlais", pronunciation: "par-LAY" }, { pronoun: "il/elle/on", form: "parlait", pronunciation: "par-LAY" }, { pronoun: "nous", form: "parlions", pronunciation: "par-lee-OHN" }, { pronoun: "vous", form: "parliez", pronunciation: "par-lee-AY" }, { pronoun: "ils/elles", form: "parlaient", pronunciation: "par-LAY" }], explanation: "The imparfait is formed from the nous-present stem plus -ais, -ais, -ait, -ions, -iez, -aient. It describes background, habits, states, weather, age, and ongoing past situations." },
    { id: "l19-e2", type: "fill_blank", question: "Complétez à l'imparfait : Elle ____ (être) très fatiguée.", correct_answer: "était", explanation: "The imparfait is formed from the nous-present stem plus -ais, -ais, -ait, -ions, -iez, -aient. It describes background, habits, states, weather, age, and ongoing past situations." },
    { id: "l19-e3", type: "fill_blank", question: "Complétez à l'imparfait : Nous ____ (avoir) une petite maison.", correct_answer: "avions", explanation: "The imparfait is formed from the nous-present stem plus -ais, -ais, -ait, -ions, -iez, -aient. It describes background, habits, states, weather, age, and ongoing past situations." },
    { id: "l19-e4", type: "multiple_choice", question: "Quel usage de l'imparfait décrit une habitude passée ?", options: ["Quand j'étais jeune, j'allais à la piscine tous les mercredis.", "Il pleuvait quand je suis sorti.", "J'avais faim.", "Il était 8h."], correct_answer: "Quand j'étais jeune, j'allais à la piscine tous les mercredis.", explanation: "The imparfait is formed from the nous-present stem plus -ais, -ais, -ait, -ions, -iez, -aient. It describes background, habits, states, weather, age, and ongoing past situations." },
    { id: "l19-e5", type: "transformation", question: "Transformez l'habitude du présent à l'imparfait.", instruction: "affirmative_to_negative", items: [{ original: "Je me lève à 7h tous les jours.", transformed: "Je me levais à 7h tous les jours.", translation: "I used to get up at 7 every day." }, { original: "Elle va au marché le samedi.", transformed: "Elle allait au marché le samedi.", translation: "She used to go to the market on Saturdays." }, { original: "Nous lisons beaucoup.", transformed: "Nous lisions beaucoup.", translation: "We used to read a lot." }], explanation: "The imparfait is formed from the nous-present stem plus -ais, -ais, -ait, -ions, -iez, -aient. It describes background, habits, states, weather, age, and ongoing past situations." },
    { id: "l19-e6", type: "fill_blank", question: "Complétez la description à l'imparfait : Il ____ ____ (faire) beau et le soleil ____ (briller).", correct_answer: "faisait brillait", explanation: "The imparfait is formed from the nous-present stem plus -ais, -ais, -ait, -ions, -iez, -aient. It describes background, habits, states, weather, age, and ongoing past situations." },
    { id: "l19-e7", type: "matching", question: "Associez le marqueur temporel à la traduction.", pairs: [{ french: "autrefois", english: "in the past / formerly" }, { french: "souvent", english: "often" }, { french: "parfois", english: "sometimes" }, { french: "tous les jours", english: "every day" }, { french: "à cette époque", english: "at that time" }, { french: "rarement", english: "rarely" }], explanation: "The imparfait is formed from the nous-present stem plus -ais, -ais, -ait, -ions, -iez, -aient. It describes background, habits, states, weather, age, and ongoing past situations." },
    { id: "l19-e8", type: "translation", question: "Traduisez : 'When I was young, I lived in a village. Every summer, I went to the beach.'", direction: "en_to_fr", correct_answer: ["Quand j'étais jeune, j'habitais dans un village. Chaque été, j'allais à la plage.", "Quand j'étais jeune, je vivais dans un village. Chaque été, j'allais à la plage."], explanation: "The imparfait is formed from the nous-present stem plus -ais, -ais, -ait, -ions, -iez, -aient. It describes background, habits, states, weather, age, and ongoing past situations." },
    { id: "l19-e9", type: "speaking_prompt", question: "Décrivez votre enfance en utilisant l'imparfait (3-4 phrases).", model_answer: "Quand j'étais enfant, j'habitais dans une grande ville. J'allais à l'école à pied. J'aimais beaucoup jouer au football avec mes amis. Ma mère préparait toujours de bons gâteaux.", translation: "When I was a child, I lived in a big city. I used to walk to school. I really liked playing football with my friends. My mother always made good cakes.", tip: "The imparfait does not usually answer “what happened next?” It describes what was going on." },
    {
      id: "l19-e10",
      type: "tense_choice",
      question: "Choisissez le temps correct selon le marqueur temporel.",
      items: [
        { sentence: "D'habitude, elle ____ (boire) un café le matin.", verb: "boire", options: ["Imparfait", "Passé composé"], correct_answer: "Imparfait", explanation: "The imparfait is formed from the nous-present stem plus -ais, -ais, -ait, -ions, -iez, -aient. It describes background, habits, states, weather, age, and ongoing past situations." },
        { sentence: "Jadis, les gens ____ (voyager) en diligence.", verb: "voyager", options: ["Imparfait", "Passé composé"], correct_answer: "Imparfait", explanation: "The imparfait is formed from the nous-present stem plus -ais, -ais, -ait, -ions, -iez, -aient. It describes background, habits, states, weather, age, and ongoing past situations." },
        { sentence: "Chaque mardi, nous ____ (jouer) au tennis.", verb: "jouer", options: ["Imparfait", "Passé composé"], correct_answer: "Imparfait", explanation: "The imparfait is formed from the nous-present stem plus -ais, -ais, -ait, -ions, -iez, -aient. It describes background, habits, states, weather, age, and ongoing past situations." },
        { sentence: "Elle ____ (travailler) souvent le samedi quand elle était jeune.", verb: "travailler", options: ["Imparfait", "Passé composé"], correct_answer: "Imparfait", explanation: "The imparfait is formed from the nous-present stem plus -ais, -ais, -ait, -ions, -iez, -aient. It describes background, habits, states, weather, age, and ongoing past situations." },
        { sentence: "Pendant des années, ils ____ (habiter) à Lyon.", verb: "habiter", options: ["Imparfait", "Passé composé"], correct_answer: "Imparfait", explanation: "The imparfait is formed from the nous-present stem plus -ais, -ais, -ait, -ions, -iez, -aient. It describes background, habits, states, weather, age, and ongoing past situations." }
      ],
      explanation: "The imparfait is formed from the nous-present stem plus -ais, -ais, -ait, -ions, -iez, -aient. It describes background, habits, states, weather, age, and ongoing past situations."
    },
  ]
}

export default function Lesson19Page() {
  return (
    <ElementaryLessonLayout
      lessonData={lessonData}
      lessonNumber={19}
      prevHref="/lessons/elementary/18"
      prevLabel="Les Pronominaux au Passé"
      nextHref="/lessons/elementary/20"
      nextLabel="Passé Composé vs Imparfait"
    />
  )
}