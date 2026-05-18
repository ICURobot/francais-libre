'use client'

import ElementaryLessonLayout, { ElementaryLessonData } from '../../../../../components/lessons/ElementaryLessonLayout'

const lessonData: ElementaryLessonData = {
  id: 17,
  title: "Les Verbes Pronominaux",
  level: "A2",
  description: "Learn present-tense reflexive verbs for daily routines, including pronoun placement, negation, and the difference between reflexive and non-reflexive meaning.",

  dialogue: {
    title: "Les routines du matin",
    context: "Deux colocataires, Chloé et Hugo, discutent de leurs routines matinales et de la salle de bains.",
    exchanges: [
      { speaker: "Chloé", french: "Hugo, tu te lèves à quelle heure le matin ?", english: "Hugo, what time do you get up in the morning?", pronunciation: "ew-GOH, tu tuh LEV ah kel UR luh mah-TAN?" },
      { speaker: "Hugo", french: "Je me lève à 6h30. Et toi ?", english: "I get up at 6:30. And you?", pronunciation: "zhuh muh LEV ah see-zur-uh-TRAHNT. ay TWAH?" },
      { speaker: "Chloé", french: "Moi, je me réveille à 7h mais je me lève à 7h30. Je me prépare lentement.", english: "I wake up at 7 but I get up at 7:30. I get ready slowly.", pronunciation: "MWAH, zhuh muh ray-VAY ah set-ur may zhuh muh LEV ah set-ur-uh-TRAHNT. zhuh muh pray-PAHR lahn-TMAHN." },
      { speaker: "Hugo", french: "Tu te laves le visage à l'eau froide ou chaude ?", english: "Do you wash your face with cold or hot water?", pronunciation: "tu tuh LAHV luh vee-ZAHZH ah loh FRWAHD oo SHOHD?" },
      { speaker: "Chloé", french: "Je me lave le visage à l'eau froide. Ça me réveille ! Et toi, tu te rases ?", english: "I wash my face with cold water. It wakes me up! And you, do you shave?", pronunciation: "zhuh muh LAHV luh vee-ZAHZH ah loh FRWAHD. sah muh ray-VAY! ay TWAH, tu tuh RAHZ?" },
      { speaker: "Hugo", french: "Oui, je me rase tous les deux jours. Ensuite je me douche et je m'habille.", english: "Yes, I shave every two days. Then I shower and I get dressed.", pronunciation: "WEE, zhuh muh RAHZ too lay duh ZHOOR. ahn-SWEET zhuh muh DOOSH ay zhuh mah-BEEY." },
      { speaker: "Chloé", french: "Tu te dépêches ou tu prends ton temps ?", english: "Do you hurry or do you take your time?", pronunciation: "tu tuh day-PESH oo tu PRAHN tohn TAHN?" },
      { speaker: "Hugo", french: "Je me dépêche toujours ! Et toi, tu te maquilles ?", english: "I always hurry! And you, do you put on makeup?", pronunciation: "zhuh muh day-PESH too-ZHOOR! ay TWAH, tu tuh mah-KEEY?" },
      { speaker: "Chloé", french: "Oui, je me maquille un peu. Et je me coiffe. Après, je me brosse les dents.", english: "Yes, I put on a little makeup. And I do my hair. Then I brush my teeth.", pronunciation: "WEE, zhuh muh mah-KEEY uh(n) PUH. ay zhuh muh KWAHF. ah-PRAY, zhuh muh BROHS lay DAHN." },
      { speaker: "Hugo", french: "Moi aussi. Ensuite je m'en vais. Je me souviens : tu te couches à quelle heure ?", english: "Me too. Then I leave. I remember: what time do you go to bed?", pronunciation: "MWAH oh-SEE. ahn-SWEET zhuh mahn VAY. zhuh muh soo-VYAHN: tu tuh KOOSH ah kel UR?" },
      { speaker: "Chloé", french: "Je me couche vers 23h. Je m'endors rapidement. Toi ?", english: "I go to bed around 11pm. I fall asleep quickly. You?", pronunciation: "zhuh muh KOOSH vair vahnt-trwah-ZUR. zhuh mahn-DOR rah-peed-MAHN. TWAH?" },
      { speaker: "Hugo", french: "Je me couche à minuit et je me réveille fatigué. Il faut me reposer plus.", english: "I go to bed at midnight and I wake up tired. I need to rest more.", pronunciation: "zhuh muh KOOSH ah meen-WEE ay zhuh muh ray-VAY fah-tee-GAY. eel FOH muh ruh-poh-ZAY plews." },
    ]
  },

  grammarPoints: [
    {
      title: "Structure des Verbes Pronominaux",
      explanation: "A pronominal verb includes a reflexive pronoun that refers back to the subject: je me, tu te, il/elle se, nous nous, vous vous, ils/elles se.",
      examples: [
        "SE LEVER : je me lève, tu te lèves, il/elle se lève, nous nous levons, vous vous levez, ils/elles se lèvent",
        "SE LAVER : je me lave, tu te laves, il se lave, nous nous lavons, vous vous lavez, ils se lavent",
        "S'HABILLER : je m'habille, tu t'habilles, il s'habille, nous nous habillons, vous vous habillez, ils s'habillent",
        "SE RÉVEILLER : je me réveille, tu te réveilles, elle se réveille, nous nous réveillons, vous vous réveillez",
        "Attention : me/te/se → m'/t'/s' devant une voyelle ou un h muet (je m'habille, tu t'endors, il s'appelle)",
        "Depuis + présent = action commencée dans le passé qui continue : Je me lève à 7h depuis un an."
      ]
    },
    {
      title: "Catégories de Verbes Pronominaux",
      explanation: "Pronominal verbs can describe reflexive actions, reciprocal actions, or idiomatic meanings where the pronoun is part of the verb.",
      examples: [
        "RÉFLÉCHIS (action sur soi) : se laver, se raser, se maquiller, se coiffer, se brosser, se doucher",
        "RÉCIPROQUES (action mutuelle) : se retrouver (to meet each other), se parler (to talk to each other)",
        "IDIOMATIQUES (sens spécial) : se souvenir (to remember), se dépêcher (to hurry), s'endormir (to fall asleep), s'en aller (to leave)",
        "NON-PRONOMINAL vs PRONOMINAL : laver (to wash something) vs se laver (to wash oneself)",
        "Certains verbes n'existent qu'à la forme pronominale : s'envoler (to fly away), s'évanouir (to faint)"
      ]
    },
    {
      title: "La Négation des Verbes Pronominaux",
      explanation: "With pronominal verbs, ne comes before the reflexive pronoun and pas comes after the conjugated verb: je ne me lève pas.",
      examples: [
        "Je ne me lève pas tôt le dimanche. (I don't get up early on Sundays.)",
        "Tu ne te dépêches pas. (You do not hurry.)",
        "Il ne se souvient pas de son nom. (He doesn't remember his name.)",
        "Nous ne nous couchons pas avant minuit. (We don't go to bed before midnight.)",
        "Elles ne s'habillent pas encore. (They don't get dressed yet.)"
      ]
    },
    {
      title: "Pronominal vs Non-Pronominal — Quand le Sens Change",
      explanation: "Some verbs change meaning when used pronominally, so learn the pronominal form as its own expression when needed.",
      examples: [
        "LAVER vs SE LAVER : Je lave la voiture. (I wash the car) → Je me lave. (I wash myself)",
        "LEVER vs SE LEVER : Il lève la main. (He raises his hand) → Il se lève. (He gets up / stands up)",
        "APPELER vs S'APPELER : J'appelle mon ami. (I call my friend) → Je m'appelle Paul. (My name is Paul — lit. 'I call myself')",
        "OCCUPER vs S'OCCUPER DE : Il occupe un grand bureau. (He occupies a big office) → Il s'occupe des enfants. (He looks after the children)",
        "PASSER vs SE PASSER : Le bus passe devant chez moi. (The bus goes past) → Qu'est-ce qui se passe ? (What's happening?)",
        "ALLER vs S'EN ALLER : Je vais au marché. (I go to the market) → Je m'en vais. (I'm leaving / going away)",
        "PIÈGE — ennuyer vs s'ennuyer : Ce film ennuie tout le monde. (it bores everyone) vs Je m'ennuie ici. (I am bored here)"
      ]
    }
  ],

  vocabulary: [
    { french: "se réveiller", english: "to wake up", category: "Routine", example: "Je me réveille à 7h. (zhuh muh ray-VAY ah set-ur)" },
    { french: "se lever", english: "to get up", category: "Routine", example: "Tu te lèves tôt ? (tu tuh LEV TOH?)" },
    { french: "se laver", english: "to wash (oneself)", category: "Routine", example: "Il se lave les mains. (eel suh LAHV lay MAN)" },
    { french: "se doucher", english: "to shower", category: "Routine", example: "Je me douche le matin. (zhuh muh DOOSH luh mah-TAN)" },
    { french: "se brosser", english: "to brush", category: "Routine", example: "Elle se brosse les dents. (el suh BROHS lay DAHN)" },
    { french: "se coiffer", english: "to do one's hair", category: "Routine", example: "Tu te coiffes vite ! (tu tuh KWAHF veet!)" },
    { french: "s'habiller", english: "to get dressed", category: "Routine", example: "Nous nous habillons chaudement. (noo noo zah-bee-YOHN shohd-MAHN)" },
    { french: "se maquiller", english: "to put on makeup", category: "Routine", example: "Elle se maquille tous les matins. (el suh mah-KEEY too lay mah-TAN)" },
    { french: "se raser", english: "to shave", category: "Routine", example: "Il se rase avant le travail. (eel suh RAHZ ah-VAHN luh trav-EYE)" },
    { french: "se coucher", english: "to go to bed", category: "Routine", example: "Je me couche vers 22h. (zhuh muh KOOSH vair vahnt-duh-ZUR)" },
    { french: "s'endormir", english: "to fall asleep", category: "Routine", example: "Elle s'endort rapidement. (el sahn-DOR rah-peed-MAHN)" },
    { french: "se reposer", english: "to rest", category: "Routine", example: "Tu te reposes le week-end ? (tu tuh ruh-POHZ luh wee-KEHND?)" },
    { french: "se dépêcher", english: "to hurry", category: "Idiomatique", example: "Dépêche-toi ! On est en retard. (day-PESH-TWAH! ohn ay ahn ruh-TAHR)" },
    { french: "s'appeler", english: "to be called / named", category: "Idiomatique", example: "Je m'appelle Marie. (zhuh mah-PEL mah-REE)" },
    { french: "se souvenir", english: "to remember", category: "Idiomatique", example: "Tu te souviens de moi ? (tu tuh soo-VYAHN duh MWAH?)" },
    { french: "s'en aller", english: "to leave / go away", category: "Idiomatique", example: "Je m'en vais. Bonne journée ! (zhuh mahn VAY. bun zhoor-NAY!)" },
    { french: "d'abord", english: "first (of all)", category: "Expression", example: "D'abord, je me réveille. (dah-BOR, zhuh muh ray-VAY)" },
    { french: "ensuite", english: "then / next", category: "Expression", example: "Ensuite, je me douche. (ahn-SWEET, zhuh muh DOOSH)" },
    { french: "enfin", english: "finally", category: "Expression", example: "Enfin, je m'habille. (ahn-FAN, zhuh mah-BEEY)" },
    { french: "le réveil", english: "the alarm clock", category: "Nom", example: "Mon réveil sonne à 7h. (mohn ray-VAY sun ah set-ur)" },
  ],

  culturalNotes: [
    { title: "La routine matinale en France", content: "Le petit déjeuner français typique est léger : tartine (pain beurré) ou croissant avec un café ou un chocolat chaud. Beaucoup de Français prennent leur douche le matin plutôt que le soir, contrairement à d'autres cultures." },
    { title: "La salle de bains en colocation", content: "Dans les grandes villes françaises, la colocation est très répandue chez les jeunes. La salle de bains est souvent un sujet de négociation : planning pour la douche, temps passé, produits partagés ou non." },
    { title: "Se maquiller en France", content: "Le maquillage en France est généralement sobre et naturel — on privilégie le teint unifié et les lèvres discrètes. Le rouge à lèvres rouge vif reste cependant un classique parisien, popularisé par des marques comme Chanel et Guerlain." },
  ],

  exercises: [
    { id: "l17-e1", type: "conjugation", question: "Conjuguez le verbe SE LEVER au présent.", verb: "se lever", correct_answer: [{ pronoun: "je", form: "me lève", pronunciation: "muh LEV" }, { pronoun: "tu", form: "te lèves", pronunciation: "tuh LEV" }, { pronoun: "il/elle/on", form: "se lève", pronunciation: "suh LEV" }, { pronoun: "nous", form: "nous levons", pronunciation: "noo luh-VOHN" }, { pronoun: "vous", form: "vous levez", pronunciation: "voo luh-VAY" }, { pronoun: "ils/elles", form: "se lèvent", pronunciation: "suh LEV" }], explanation: "Pronominal verbs use a reflexive pronoun that refers back to the subject. The pronoun goes before the conjugated verb, and ne...pas surrounds the pronoun plus verb group." },
    { id: "l17-e2", type: "fill_blank", question: "Complétez avec le pronom réfléchi : Nous ____ lavons les mains.", correct_answer: "nous", explanation: "Pronominal verbs use a reflexive pronoun that refers back to the subject. The pronoun goes before the conjugated verb, and ne...pas surrounds the pronoun plus verb group." },
    { id: "l17-e3", type: "fill_blank", question: "Complétez avec le pronom réfléchi : Tu ____ appelles comment ?", correct_answer: "t'", explanation: "Pronominal verbs use a reflexive pronoun that refers back to the subject. The pronoun goes before the conjugated verb, and ne...pas surrounds the pronoun plus verb group." },
    { id: "l17-e4", type: "multiple_choice", question: "Quel verbe pronominal signifie 'to remember' ?", options: ["se laver", "se souvenir", "se dépêcher", "se lever"], correct_answer: "se souvenir", explanation: "Pronominal verbs use a reflexive pronoun that refers back to the subject. The pronoun goes before the conjugated verb, and ne...pas surrounds the pronoun plus verb group." },
    { id: "l17-e5", type: "transformation", question: "Mettez ces phrases à la forme négative.", instruction: "affirmative_to_negative", items: [{ original: "Je me lève à 6h.", transformed: "Je ne me lève pas à 6h.", translation: "I don't get up at 6." }, { original: "Il se souvient de moi.", transformed: "Il ne se souvient pas de moi.", translation: "He doesn't remember me." }, { original: "Nous nous dépêchons.", transformed: "Nous ne nous dépêchons pas.", translation: "We don't hurry." }], explanation: "Pronominal verbs use a reflexive pronoun that refers back to the subject. The pronoun goes before the conjugated verb, and ne...pas surrounds the pronoun plus verb group." },
    { id: "l17-e6", type: "matching", question: "Associez le verbe pronominal à sa signification.", pairs: [{ french: "se réveiller", english: "to wake up" }, { french: "se lever", english: "to get up" }, { french: "se coucher", english: "to go to bed" }, { french: "s'endormir", english: "to fall asleep" }, { french: "se dépêcher", english: "to hurry" }, { french: "s'habiller", english: "to get dressed" }], explanation: "Pronominal verbs use a reflexive pronoun that refers back to the subject. The pronoun goes before the conjugated verb, and ne...pas surrounds the pronoun plus verb group." },
    { id: "l17-e7", type: "fill_blank", question: "Complétez avec la forme correcte : Elles ____ ____ (se coucher) à minuit.", correct_answer: "se couchent", explanation: "Pronominal verbs use a reflexive pronoun that refers back to the subject. The pronoun goes before the conjugated verb, and ne...pas surrounds the pronoun plus verb group." },
    { id: "l17-e8", type: "translation", question: "Traduisez : 'I get up at 7, I shower, I get dressed and I leave.'", direction: "en_to_fr", correct_answer: ["Je me lève à 7h, je me douche, je m'habille et je m'en vais.", "Je me lève à sept heures, je me douche, je m'habille et je pars."], explanation: "Pronominal verbs use a reflexive pronoun that refers back to the subject. The pronoun goes before the conjugated verb, and ne...pas surrounds the pronoun plus verb group." },
    { id: "l17-e9", type: "speaking_prompt", question: "Décrivez votre routine du matin en utilisant 5 verbes pronominaux.", model_answer: "D'abord, je me réveille à 7h. Ensuite, je me lève. Je me douche et je m'habille. Enfin, je me brosse les dents.", translation: "First, I wake up at 7. Then, I get up. I shower and I get dressed. Finally, I brush my teeth.", tip: "Keep the reflexive pronoun attached to the subject: je me, tu te, il/elle se, nous nous, vous vous, ils/elles se." },
    { id: "l17-e10", type: "error_correction", question: "Corrigez les erreurs (pronom réfléchi absent, superflu ou mal placé).", items: [{ incorrect: "Je appelle Thomas, c'est mon prénom.", correct: "Je m'appelle Thomas, c'est mon prénom.", explanation: "Pronominal verbs use a reflexive pronoun that refers back to the subject. The pronoun goes before the conjugated verb, and ne...pas surrounds the pronoun plus verb group." }, { incorrect: "Qu'est-ce qui passe ici ?", correct: "Qu'est-ce qui se passe ici ?", explanation: "Pronominal verbs use a reflexive pronoun that refers back to the subject. The pronoun goes before the conjugated verb, and ne...pas surrounds the pronoun plus verb group." }, { incorrect: "Il occupe très bien des enfants.", correct: "Il s'occupe très bien des enfants.", explanation: "Pronominal verbs use a reflexive pronoun that refers back to the subject. The pronoun goes before the conjugated verb, and ne...pas surrounds the pronoun plus verb group." }, { incorrect: "Je vais. À demain !", correct: "Je m'en vais. À demain !", explanation: "Pronominal verbs use a reflexive pronoun that refers back to the subject. The pronoun goes before the conjugated verb, and ne...pas surrounds the pronoun plus verb group." }] },
  ]
}

export default function Lesson17Page() {
  return (
    <ElementaryLessonLayout
      lessonData={lessonData}
      lessonNumber={17}
      prevHref="/lessons/elementary/16"
      prevLabel="Verbes en -ir et -re"
      nextHref="/lessons/elementary/18"
      nextLabel="Les Pronominaux au Passé"
    />
  )
}
