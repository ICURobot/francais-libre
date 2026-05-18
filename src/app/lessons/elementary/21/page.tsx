'use client'

import ElementaryLessonLayout, { ElementaryLessonData } from '../../../../../components/lessons/ElementaryLessonLayout'

const lessonData: ElementaryLessonData = {
  id: 21,
  title: "Le Futur Simple",
  level: "A2",
  description: "Learn the futur simple for plans, predictions, and real conditions with si + present + future.",

  dialogue: {
    title: "Projets d'avenir",
    context: "Deux amis, Nora et Samir, discutent de leurs projets futurs autour d'un café.",
    exchanges: [
      { speaker: "Nora", french: "Samir, tu seras où dans cinq ans ?", english: "Samir, where will you be in five years?", pronunciation: "sah-MEER, tu suh-RAH oo dah(n) sank AHN?" },
      { speaker: "Samir", french: "Je serai peut-être au Canada. J'aurai mon propre restaurant.", english: "I'll maybe be in Canada. I'll have my own restaurant.", pronunciation: "zhuh suh-RAY puh-TET oh kah-nah-DAH. zhoh-RAY mohn PROH-pruh res-toh-RAHN." },
      { speaker: "Nora", french: "C'est génial ! Tu feras de la cuisine française ?", english: "That's great! Will you do French cuisine?", pronunciation: "say zhay-NYAL! tu fuh-RAH duh lah kwee-ZEEN frahn-SAYZ?" },
      { speaker: "Samir", french: "Oui, et j'irai à Paris pour me former.", english: "Yes, and I'll go to Paris to train.", pronunciation: "WEE, ay zhee-RAY ah pah-REE poor muh for-MAY." },
      { speaker: "Nora", french: "Moi, je saurai cuisiner un jour ! Et je pourrai goûter tes plats.", english: "I'll know how to cook one day! And I'll be able to taste your dishes.", pronunciation: "MWAH, zhuh soo-RAY kwee-zee-NAY uh(n) ZHOOR! ay zhuh poo-RAY goo-TAY tay PLAH." },
      { speaker: "Samir", french: "Et toi, tu voudras rester à Lyon ?", english: "And you, will you want to stay in Lyon?", pronunciation: "ay TWAH, tu voo-DRAH res-TAY ah lee-OHN?" },
      { speaker: "Nora", french: "Non, je partirai à l'étranger. Je viendrai au Canada !", english: "No, I'll go abroad. I'll come to Canada!", pronunciation: "NOHN, zhuh par-tee-RAY ah lay-trahn-ZHAY. zhuh vyahn-DRAY oh kah-nah-DAH!" },
      { speaker: "Samir", french: "Tu verras, Montréal est une ville magnifique.", english: "You'll see, Montreal is a magnificent city.", pronunciation: "tu vay-RAH, mohn-ray-AHL ay ewn veel man-yee-FEEK." },
      { speaker: "Nora", french: "J'enverrai des cartes postales à tout le monde ! On se reverra bientôt ?", english: "I'll send postcards to everyone! We'll see each other again soon?", pronunciation: "zhahn-vay-RAY day KART pos-TAL ah too luh MOHND! ohn suh ruh-vay-RAH byan-TOH?" },
      { speaker: "Samir", french: "Oui, nous nous écrirons chaque semaine. C'est promis.", english: "Yes, we'll write to each other every week. It's promised.", pronunciation: "WEE, noo noo zay-kree-ROHN shahk suh-MEN. say proh-MEE." },
    ]
  },

  grammarPoints: [
    {
      title: "Formation du Futur Simple",
      explanation: "The futur simple uses the infinitive as its stem, or the infinitive minus final -e for -re verbs, plus the endings -ai, -as, -a, -ons, -ez, -ont.",
      examples: [
        "PARLER : je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront",
        "FINIR : je finirai, tu finiras, il finira, nous finirons, vous finirez, ils finiront",
        "RÉPONDRE (sans -e) : je répondrai, tu répondras, il répondra, nous répondrons, vous répondrez, ils répondront",
        "ATTENDRE (sans -e) : j'attendrai, tu attendras, il attendra, nous attendrons, vous attendrez, ils attendront",
        "Astuce : les terminaisons = j'ai (ai), tu as (as), il a (a), nous avons (ons), vous avez (ez), ils ont (ont)"
      ]
    },
    {
      title: "Radicaux Irréguliers",
      explanation: "The most common future irregulars keep regular endings but use special stems such as ser-, aur-, ir-, fer-, viendr-, voudr-, and pourr-.",
      examples: [
        "ÊTRE → ser- : je serai, tu seras, il sera, nous serons, vous serez, ils seront",
        "AVOIR → aur- : j'aurai, tu auras, il aura, nous aurons, vous aurez, ils auront",
        "ALLER → ir- : j'irai, tu iras, il ira, nous irons, vous irez, ils iront",
        "FAIRE → fer- : je ferai, tu feras, il fera, nous ferons, vous ferez, ils feront",
        "VENIR → viendr- : je viendrai, tu viendras, il viendra, nous viendrons, vous viendrez, ils viendront",
        "POUVOIR → pourr- : je pourrai, VOULOIR → voudr- : je voudrai, SAVOIR → saur- : je saurai",
        "VOIR → verr- : je verrai, ENVOYER → enverr- : j'enverrai, DEVOIR → devr- : je devrai"
      ]
    },
    {
      title: "Futur Simple vs Futur Proche",
      explanation: "The futur proche often sounds immediate or planned in speech; the futur simple is more formal, distant, or written.",
      examples: [
        "Futur proche : Je vais partir dans cinq minutes. (imminent)",
        "Futur simple : Je partirai en vacances l'année prochaine. (plus lointain)",
        "Futur proche : On va manger maintenant ? (immédiat)",
        "Futur simple : On mangera au restaurant ce soir. (planifié)",
        "À l'écrit, le futur simple est plus élégant : 'Nous vous enverrons une confirmation.'"
      ]
    },
    {
      title: "Si + Présent → Futur Simple (Condition Réelle)",
      explanation: "For real conditions, French uses si + present for the condition and futur simple for the result. Do not use the future after si.",
      examples: [
        "Si tu travailles, tu réussiras. (If you work, you will succeed.)",
        "Si elle arrive à l'heure, nous commencerons. (If she arrives on time, we will start.)",
        "S'il fait beau demain, nous irons à la plage. (If the weather is nice tomorrow, we'll go to the beach.)",
        "Si vous avez faim, je ferai à manger. (If you are hungry, I'll cook.)",
        "ERREUR À ÉVITER : *Si tu viendras → FAUX. Correct : Si tu viens... (présent dans la condition)",
        "Variante avec quand : Quand tu seras prêt, on partira. (When you are ready, we'll leave.) — quand + futur ✔ (contrairement à si)"
      ]
    }
  ],

  vocabulary: [
    { french: "dans + durée", english: "in (duration)", category: "Temps", example: "Dans cinq ans, je serai médecin. (dah(n) sank AHN, zhuh suh-RAY med-SAN)" },
    { french: "bientôt", english: "soon", category: "Temps", example: "On se reverra bientôt ! (ohn suh ruh-vay-RAH byan-TOH!)" },
    { french: "un jour", english: "one day", category: "Temps", example: "Un jour, je voyagerai autour du monde. (uh(n) ZHOOR, zhuh vwa-yah-zhuh-RAY oh-TOOR dew MOHND)" },
    { french: "à l'avenir", english: "in the future", category: "Temps", example: "À l'avenir, je ferai plus attention. (ah lah-vuh-NEER, zhuh fuh-RAY plews ah-tahn-SYOHN)" },
    { french: "rêver de", english: "to dream of", category: "Verbe", example: "Je rêve de visiter le Japon. (zhuh REV duh vee-zee-TAY luh zhah-POHN)" },
    { french: "espérer", english: "to hope", category: "Verbe", example: "J'espère que tu viendras. (zhess-PAIR kuh tu vyahn-DRAH)" },
    { french: "avoir l'intention de", english: "to intend to", category: "Verbe", example: "J'ai l'intention de déménager. (zhay lan-tahn-SYOHN duh day-may-nah-ZHAY)" },
    { french: "promettre", english: "to promise", category: "Verbe", example: "Je promets d'écrire chaque semaine. (zhuh proh-MAY day-KREER shahk suh-MEN)" },
    { french: "un projet", english: "a project / plan", category: "Nom", example: "J'ai plein de projets pour l'avenir. (zhay PLAN duh proh-ZHAY poor lah-vuh-NEER)" },
    { french: "peut-être", english: "maybe / perhaps", category: "Adverbe", example: "Peut-être que je partirai en Afrique. (puh-TET kuh zhuh par-tee-RAY ahn ah-FREEK)" },
    { french: "un rêve", english: "a dream", category: "Nom", example: "Mon rêve est d'ouvrir un restaurant. (mohn REV ay doo-VREER uh(n) res-toh-RAHN)" },
    { french: "l'étranger", english: "abroad", category: "Nom", example: "J'irai à l'étranger après mes études. (zhee-RAY ah lay-trahn-ZHAY ah-PRAY may zay-TEWD)" },
    { french: "magnifique", english: "magnificent", category: "Adjectif", example: "La vue sera magnifique. (lah VEW suh-RAH man-yee-FEEK)" },
    { french: "se former", english: "to train / learn", category: "Verbe", example: "Je me formerai en pâtisserie. (zhuh muh for-muh-RAY ahn pah-tees-REE)" },
    { french: "propre", english: "own", category: "Adjectif", example: "J'aurai mon propre restaurant. (zhoh-RAY mohn PROH-pruh res-toh-RAHN)" },
    { french: "autour du monde", english: "around the world", category: "Expression", example: "Je voyagerai autour du monde. (zhuh vwah-yah-zhuh-RAY oh-TOOR dew MOHND)" },
    { french: "une carte postale", english: "a postcard", category: "Nom", example: "J'enverrai une carte postale. (zhahn-vay-RAY ewn KART pos-TAL)" },
    { french: "un plat", english: "a dish", category: "Nom", example: "Ce plat sera délicieux. (suh PLAH suh-RAH day-lee-SYUH)" },
  ],

  culturalNotes: [
    { title: "Les Français et l'avenir", content: "Les Français ont une relation ambivalente avec l'avenir : d'un côté, ils planifient beaucoup (études, carrière, retraite), de l'autre, le présent et la qualité de vie quotidienne restent prioritaires. Le rêve de créer son entreprise (restaurant, boutique) est très répandu." },
    { title: "Montréal et la francophonie", content: "Montréal est la deuxième plus grande ville francophone du monde après Paris. La ville offre un mélange unique de cultures française et nord-américaine. Beaucoup de Français y émigrent chaque année, attirés par la qualité de vie et les opportunités professionnelles." },
    { title: "Les cartes postales", content: "Bien que moins courantes qu'avant, les cartes postales restent une tradition française appréciée. Envoyer une carte postale depuis un lieu de vacances est un geste d'amitié. La Poste française traite encore des millions de cartes chaque été." },
  ],

  exercises: [
    { id: "l21-e1", type: "conjugation", question: "Conjuguez le verbe PARLER au futur simple.", verb: "parler", correct_answer: [{ pronoun: "je", form: "parlerai", pronunciation: "par-luh-RAY" }, { pronoun: "tu", form: "parleras", pronunciation: "par-luh-RAH" }, { pronoun: "il/elle/on", form: "parlera", pronunciation: "par-luh-RAH" }, { pronoun: "nous", form: "parlerons", pronunciation: "par-luh-ROHN" }, { pronoun: "vous", form: "parlerez", pronunciation: "par-luh-RAY" }, { pronoun: "ils/elles", form: "parleront", pronunciation: "par-luh-ROHN" }], explanation: "The futur simple uses the infinitive or irregular future stem plus -ai, -as, -a, -ons, -ez, -ont. In real si clauses, use si + present, then future in the result clause." },
    { id: "l21-e2", type: "fill_blank", question: "Complétez au futur simple : Je ____ (être) en vacances la semaine prochaine.", correct_answer: "serai", explanation: "The futur simple uses the infinitive or irregular future stem plus -ai, -as, -a, -ons, -ez, -ont. In real si clauses, use si + present, then future in the result clause." },
    { id: "l21-e3", type: "fill_blank", question: "Complétez au futur simple : Nous ____ (avoir) une réunion demain.", correct_answer: "aurons", explanation: "The futur simple uses the infinitive or irregular future stem plus -ai, -as, -a, -ons, -ez, -ont. In real si clauses, use si + present, then future in the result clause." },
    { id: "l21-e4", type: "multiple_choice", question: "Quel est le futur simple de VOULOIR pour 'nous' ?", options: ["nous vouloirons", "nous voudrons", "nous voudrerons", "nous voudrirons"], correct_answer: "nous voudrons", explanation: "The futur simple uses the infinitive or irregular future stem plus -ai, -as, -a, -ons, -ez, -ont. In real si clauses, use si + present, then future in the result clause." },
    { id: "l21-e5", type: "transformation", question: "Transformez au futur simple.", instruction: "affirmative_to_negative", items: [{ original: "Je vais au cinéma.", transformed: "J'irai au cinéma.", translation: "I will go to the cinema." }, { original: "Elle fait un gâteau.", transformed: "Elle fera un gâteau.", translation: "She will make a cake." }, { original: "Ils viennent demain.", transformed: "Ils viendront demain.", translation: "They will come tomorrow." }], explanation: "The futur simple uses the infinitive or irregular future stem plus -ai, -as, -a, -ons, -ez, -ont. In real si clauses, use si + present, then future in the result clause." },
    { id: "l21-e6", type: "matching", question: "Associez le verbe à son radical du futur simple.", pairs: [{ french: "être", english: "ser-" }, { french: "avoir", english: "aur-" }, { french: "faire", english: "fer-" }, { french: "aller", english: "ir-" }, { french: "pouvoir", english: "pourr-" }, { french: "savoir", english: "saur-" }], explanation: "The futur simple uses the infinitive or irregular future stem plus -ai, -as, -a, -ons, -ez, -ont. In real si clauses, use si + present, then future in the result clause." },
    { id: "l21-e7", type: "multiple_choice", question: "Futur simple ou futur proche ? 'Dépêche-toi ! Le train ____ (partir) dans deux minutes !'", options: ["partira", "va partir"], correct_answer: "va partir", explanation: "The futur simple uses the infinitive or irregular future stem plus -ai, -as, -a, -ons, -ez, -ont. In real si clauses, use si + present, then future in the result clause." },
    { id: "l21-e8", type: "translation", question: "Traduisez : 'In ten years, I will have my own house and I will travel around the world.'", direction: "en_to_fr", correct_answer: ["Dans dix ans, j'aurai ma propre maison et je voyagerai autour du monde.", "Dans dix ans, j'aurai ma propre maison et je ferai le tour du monde."], explanation: "The futur simple uses the infinitive or irregular future stem plus -ai, -as, -a, -ons, -ez, -ont. In real si clauses, use si + present, then future in the result clause." },
    { id: "l21-e9", type: "speaking_prompt", question: "Décrivez 3 choses que vous ferez l'année prochaine. Utilisez le futur simple.", model_answer: "L'année prochaine, j'apprendrai le français. Je voyagerai en France. Je rencontrerai de nouvelles personnes.", translation: "Next year, I will learn French. I will travel to France. I will meet new people.", tip: "Never put the future tense immediately after si in a real condition." },
    {
      id: "l21-e10",
      type: "error_correction",
      question: "Corrigez l'erreur dans chaque phrase avec 'si' + futur.",
      items: [
        { incorrect: "Si tu viendras, je ferai un gâteau.", correct: "Si tu viens, je ferai un gâteau.", explanation: "The futur simple uses the infinitive or irregular future stem plus -ai, -as, -a, -ons, -ez, -ont. In real si clauses, use si + present, then future in the result clause." },
        { incorrect: "S'il fera beau, nous irons à la plage.", correct: "S'il fait beau, nous irons à la plage.", explanation: "The futur simple uses the infinitive or irregular future stem plus -ai, -as, -a, -ons, -ez, -ont. In real si clauses, use si + present, then future in the result clause." },
        { incorrect: "Si vous serez prêts, on commencera.", correct: "Si vous êtes prêts, on commencera.", explanation: "The futur simple uses the infinitive or irregular future stem plus -ai, -as, -a, -ons, -ez, -ont. In real si clauses, use si + present, then future in the result clause." }
      ]
    },
    {
      id: "l21-e11",
      type: "transformation",
      question: "Complétez avec si + présent → futur.",
      instruction: "affirmative_to_negative",
      items: [
        { original: "Si tu (étudier), tu (réussir).", transformed: "Si tu étudies, tu réussiras.", translation: "If you study, you will succeed." },
        { original: "Si elle (avoir) le temps, elle (venir).", transformed: "Si elle a le temps, elle viendra.", translation: "If she has time, she will come." },
        { original: "Si nous (partir) tôt, nous (arriver) à l'heure.", transformed: "Si nous partons tôt, nous arriverons à l'heure.", translation: "If we leave early, we will arrive on time." }
      ],
      explanation: "The futur simple uses the infinitive or irregular future stem plus -ai, -as, -a, -ons, -ez, -ont. In real si clauses, use si + present, then future in the result clause."
    },
  ]
}

export default function Lesson21Page() {
  return (
    <ElementaryLessonLayout
      lessonData={lessonData}
      lessonNumber={21}
      prevHref="/lessons/elementary/20"
      prevLabel="Passé Composé vs Imparfait"
      nextHref="/lessons/elementary/22"
      nextLabel="Les Pronoms COD"
    />
  )
}
