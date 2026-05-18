'use client'

import ElementaryLessonLayout, { ElementaryLessonData } from '../../../../../components/lessons/ElementaryLessonLayout'

const lessonData: ElementaryLessonData = {
  id: 25,
  title: "Les Irréguliers Essentiels",
  level: "A2",
  description: "Master essential irregular verbs, including savoir/connaître, partir/sortir/dormir, and lire/écrire/dire.",

  dialogue: {
    title: "Préparer une visite à Lyon",
    context: "Manon aide Idriss à organiser un week-end à Lyon avec des amis francophones.",
    exchanges: [
      { speaker: "Manon", french: "Tu connais Lyon, Idriss ?", english: "Do you know Lyon, Idriss?", pronunciation: "tu koh-NAY lee-OHN, ee-DREES?" },
      { speaker: "Idriss", french: "Je connais le centre, mais je ne sais pas bien organiser la visite.", english: "I know the center, but I don't really know how to organize the visit.", pronunciation: "zhuh koh-NAY luh SAHN-truh, may zhuh nuh SAY pah byan or-gah-nee-ZAY lah vee-ZEET." },
      { speaker: "Manon", french: "D'abord, on partira tôt samedi et on sortira près de la Saône.", english: "First, we'll leave early Saturday and we'll go out near the Saône.", pronunciation: "dah-BOR, ohn par-tee-RAH TOH sam-DEE ay ohn sor-tee-RAH pray duh lah SOHN." },
      { speaker: "Idriss", french: "Bonne idée. Les amis dormiront chez moi vendredi soir.", english: "Good idea. The friends will sleep at my place Friday night.", pronunciation: "bun ee-DAY. lay zah-MEE dor-mee-ROHN shay MWAH vahn-druh-DEE SWAHR." },
      { speaker: "Manon", french: "Tu peux leur écrire l'adresse et leur dire d'arriver avant 20h.", english: "You can write them the address and tell them to arrive before 8pm.", pronunciation: "tu puh lur ay-KREER lah-DRES ay lur DEER dah-ree-VAY ah-VAHN van-TUR." },
      { speaker: "Idriss", french: "Je leur ai déjà écrit. Personne n'a répondu pour l'instant.", english: "I already wrote to them. Nobody has answered for now.", pronunciation: "zhuh lur ay day-ZHAH ay-KREE. pair-SUN nah ray-POHN-DEW poor lan-STAHN." },
      { speaker: "Manon", french: "Alors lis les messages ce soir. Peut-être qu'ils ont répondu après le travail.", english: "Then read the messages tonight. Maybe they answered after work.", pronunciation: "ah-LOR lee lay may-SAHZH suh SWAHR. puh-TET keel zohn ray-POHN-DEW ah-PRAY luh trav-EYE." },
      { speaker: "Idriss", french: "Tu as raison. Hier, je lisais le programme quand mon téléphone est tombé.", english: "You're right. Yesterday, I was reading the program when my phone fell.", pronunciation: "tu ah ray-ZOHN. ee-YAIR, zhuh lee-ZAY luh proh-GRAM kahn mohn tay-lay-FON ay tohm-BAY." },
      { speaker: "Manon", french: "Le programme est plus simple que tu penses : musée, vieux Lyon, puis restaurant.", english: "The program is simpler than you think: museum, old Lyon, then restaurant.", pronunciation: "luh proh-GRAM ay plew SAMPL kuh tu PAHNS: mew-ZAY, vyuh lee-OHN, pwee res-toh-RAHN." },
      { speaker: "Idriss", french: "Je connais un restaurant qui sert la meilleure tarte aux pralines.", english: "I know a restaurant that serves the best praline tart.", pronunciation: "zhuh koh-NAY uh(n) res-toh-RAHN kee SAIR lah may-YUR tart oh prah-LEEN." },
      { speaker: "Manon", french: "Parfait. Tu sauras expliquer le menu aux amis ?", english: "Perfect. Will you know how to explain the menu to the friends?", pronunciation: "par-FAY. tu soh-RAH zeks-plee-KAY luh muh-NEW oh zah-MEE?" },
      { speaker: "Idriss", french: "Oui, et s'ils ne comprennent rien, je leur dirai en anglais.", english: "Yes, and if they don't understand anything, I'll tell them in English.", pronunciation: "WEE, ay seel nuh kohm-PREN ree-AHN, zhuh lur dee-RAY ahn ahn-GLAY." },
    ]
  },

  grammarPoints: [
    {
      title: "Savoir vs Connaître",
      explanation: "Use savoir for facts, information, and skills with an infinitive. Use connaître for people, places, and things known through experience.",
      examples: [
        "SAVOIR + que + fait : Je sais que le musée ferme à 18h. (I know that...)",
        "SAVOIR + infinitif : Elle sait lire le plan du métro. (She knows how to...)",
        "SAVOIR + quand/où/comment : Tu sais où est la gare ? (Do you know where...?)",
        "CONNAÎTRE + personne : Nous connaissons le guide. (We know / are acquainted with)",
        "CONNAÎTRE + lieu : Tu connais bien Lyon. (You know Lyon well — by experience)",
        "CONNAÎTRE + œuvre : Il connaît cette chanson. (He knows this song — is familiar with)",
        "PIÈGE : *Je sais Paul → FAUX. Correct : Je connais Paul. (personne → connaître)",
        "PIÈGE : *Je connais que... → FAUX. Correct : Je sais que... (fait → savoir + que)",
        "Au passé : j'ai su = I found out. j'ai connu = I met (first encounter). — voir Leçon 20."
      ]
    },
    {
      title: "Partir, Sortir, Dormir",
      explanation: "These irregular verbs lose a consonant in the singular forms but keep the full stem in the plural.",
      examples: [
        "PARTIR : je pars, tu pars, il part, nous partons, vous partez, ils partent",
        "SORTIR : je sors, tu sors, elle sort, nous sortons, vous sortez, elles sortent",
        "DORMIR : je dors, tu dors, il dort, nous dormons, vous dormez, ils dorment",
        "Passé composé avec être pour partir/sortir quand il n'y a pas d'objet : Je suis parti. Elle est sortie.",
        "Dormir utilise avoir : J'ai dormi huit heures."
      ]
    },
    {
      title: "Lire, Écrire, Dire",
      explanation: "Lire, écrire, and dire are essential irregular verbs with distinctive present forms and past participles.",
      examples: [
        "LIRE : je lis, tu lis, il lit, nous lisons, vous lisez, ils lisent ; participe passé : lu",
        "ÉCRIRE : j'écris, tu écris, elle écrit, nous écrivons, vous écrivez, elles écrivent ; participe passé : écrit",
        "DIRE : je dis, tu dis, il dit, nous disons, vous dites, ils disent ; participe passé : dit",
        "Avec COI : Je lui écris. Nous leur disons la vérité.",
        "Au futur : je lirai, j'écrirai, je dirai."
      ]
    }
  ],

  vocabulary: [
    { french: "savoir", english: "to know (a fact/how to)", category: "Verbe", example: "Je sais lire ce plan. (zhuh SAY leer suh PLAHN)" },
    { french: "connaître", english: "to know (be familiar with)", category: "Verbe", example: "Tu connais cette ville ? (tu koh-NAY set VEEL?)" },
    { french: "partir", english: "to leave", category: "Verbe", example: "Nous partons tôt demain. (noo par-TOHN TOH duh-MAN)" },
    { french: "sortir", english: "to go out / exit", category: "Verbe", example: "Elle sort du bureau à 18h. (el SOR dew bew-ROH ah deez-WEE-tur)" },
    { french: "dormir", english: "to sleep", category: "Verbe", example: "Je dors mal quand il fait chaud. (zhuh DOR mal kahn eel fay SHOH)" },
    { french: "lire", english: "to read", category: "Verbe", example: "Ils lisent le programme. (eel LEEZ luh proh-GRAM)" },
    { french: "écrire", english: "to write", category: "Verbe", example: "J'écris l'adresse. (zhay-KREE lah-DRES)" },
    { french: "dire", english: "to say / tell", category: "Verbe", example: "Vous dites la vérité. (voo DEET lah vay-ree-TAY)" },
    { french: "un message", english: "a message", category: "Nom", example: "J'ai lu ton message. (zhay LEW tohn may-SAHZH)" },
    { french: "une adresse", english: "an address", category: "Nom", example: "Écris l'adresse ici. (ay-KREE lah-DRES ee-SEE)" },
    { french: "un programme", english: "a schedule / program", category: "Nom", example: "Le programme est simple. (luh proh-GRAM ay SAMPL)" },
    { french: "une visite", english: "a visit / tour", category: "Nom", example: "La visite commence à 10h. (lah vee-ZEET koh-MAHNS ah dee-ZUR)" },
    { french: "le centre", english: "the center / downtown", category: "Nom", example: "Je connais le centre. (zhuh koh-NAY luh SAHN-truh)" },
    { french: "un musée", english: "a museum", category: "Nom", example: "Le musée ferme bientôt. (luh mew-ZAY fairm byan-TOH)" },
    { french: "près de", english: "near", category: "Préposition", example: "On sort près de la rivière. (ohn SOR pray duh lah ree-VYAIR)" },
    { french: "chez moi", english: "at my place", category: "Expression", example: "Ils dorment chez moi. (eel DORM shay MWAH)" },
    { french: "pour l'instant", english: "for now", category: "Expression", example: "Personne ne répond pour l'instant. (pair-SUN nuh ray-POHN poor lan-STAHN)" },
    { french: "peut-être", english: "maybe", category: "Adverbe", example: "Peut-être qu'ils viendront. (puh-TET keel vyahn-DROHN)" },
    { french: "la vérité", english: "the truth", category: "Nom", example: "Je dis la vérité. (zhuh DEE lah vay-ree-TAY)" },
    { french: "expliquer", english: "to explain", category: "Verbe", example: "Elle explique le menu. (el eks-PLEEK luh muh-NEW)" },
  ],

  culturalNotes: [
    { title: "Lyon et la gastronomie", content: "Lyon est souvent présentée comme une capitale gastronomique française. Les bouchons lyonnais servent des plats traditionnels et la tarte aux pralines est une spécialité locale très reconnaissable." },
    { title: "Organiser un week-end", content: "Entre amis, les Français utilisent beaucoup les messages de groupe pour fixer l'heure, l'adresse et le programme. Dire clairement 'j'arrive vers...' évite les malentendus." },
    { title: "Savoir ou connaître", content: "La différence entre savoir et connaître est centrale en français. Les francophones corrigent souvent cette erreur chez les apprenants, car elle change immédiatement le naturel de la phrase." },
  ],

  exercises: [
    { id: "l25-e1", type: "conjugation", question: "Conjuguez le verbe CONNAÎTRE au présent.", verb: "connaître", correct_answer: [{ pronoun: "je", form: "connais", pronunciation: "koh-NAY" }, { pronoun: "tu", form: "connais", pronunciation: "koh-NAY" }, { pronoun: "il/elle/on", form: "connaît", pronunciation: "koh-NAY" }, { pronoun: "nous", form: "connaissons", pronunciation: "koh-nay-SOHN" }, { pronoun: "vous", form: "connaissez", pronunciation: "koh-nay-SAY" }, { pronoun: "ils/elles", form: "connaissent", pronunciation: "koh-NES" }], explanation: "Savoir is used for facts and skills with an infinitive. Connaître is used for people, places, and things known through familiarity. Other essential irregular verbs must be learned by pattern." },
    { id: "l25-e2", type: "fill_blank", question: "Complétez : Je ____ parler français, mais je ne ____ pas Marseille.", correct_answer: ["sais connais", "sais / connais"], explanation: "Savoir is used for facts and skills with an infinitive. Connaître is used for people, places, and things known through familiarity. Other essential irregular verbs must be learned by pattern." },
    { id: "l25-e3", type: "multiple_choice", question: "Quelle forme est correcte ?", options: ["vous disez", "vous dites", "vous disons", "vous disent"], correct_answer: "vous dites", explanation: "Savoir is used for facts and skills with an infinitive. Connaître is used for people, places, and things known through familiarity. Other essential irregular verbs must be learned by pattern." },
    { id: "l25-e4", type: "matching", question: "Associez l'infinitif au participe passé.", pairs: [{ french: "lire", english: "lu" }, { french: "écrire", english: "écrit" }, { french: "dire", english: "dit" }, { french: "dormir", english: "dormi" }, { french: "connaître", english: "connu" }, { french: "savoir", english: "su" }], explanation: "Savoir is used for facts and skills with an infinitive. Connaître is used for people, places, and things known through familiarity. Other essential irregular verbs must be learned by pattern." },
    { id: "l25-e5", type: "transformation", question: "Transformez au futur simple.", instruction: "affirmative_to_negative", items: [{ original: "Je lis le programme.", transformed: "Je lirai le programme.", translation: "I will read the program." }, { original: "Nous écrivons l'adresse.", transformed: "Nous écrirons l'adresse.", translation: "We will write the address." }, { original: "Elle dit la vérité.", transformed: "Elle dira la vérité.", translation: "She will tell the truth." }], explanation: "Savoir is used for facts and skills with an infinitive. Connaître is used for people, places, and things known through familiarity. Other essential irregular verbs must be learned by pattern." },
    { id: "l25-e6", type: "translation", question: "Traduisez : 'I know Paris, but I don't know how to read this map.'", direction: "en_to_fr", correct_answer: ["Je connais Paris, mais je ne sais pas lire ce plan."], explanation: "Savoir is used for facts and skills with an infinitive. Connaître is used for people, places, and things known through familiarity. Other essential irregular verbs must be learned by pattern." },
    { id: "l25-e7", type: "error_correction", question: "Corrigez les erreurs.", items: [{ incorrect: "Je connais parler français.", correct: "Je sais parler français.", explanation: "Savoir is used for facts and skills with an infinitive. Connaître is used for people, places, and things known through familiarity. Other essential irregular verbs must be learned by pattern." }, { incorrect: "Vous disez la vérité.", correct: "Vous dites la vérité.", explanation: "Savoir is used for facts and skills with an infinitive. Connaître is used for people, places, and things known through familiarity. Other essential irregular verbs must be learned by pattern." }, { incorrect: "Ils lisont le message.", correct: "Ils lisent le message.", explanation: "Savoir is used for facts and skills with an infinitive. Connaître is used for people, places, and things known through familiarity. Other essential irregular verbs must be learned by pattern." }] },
    { id: "l25-e8", type: "fill_blank", question: "Complétez : Hier, elle a ____ un roman et elle a ____ une lettre.", correct_answer: "lu écrit", explanation: "Savoir is used for facts and skills with an infinitive. Connaître is used for people, places, and things known through familiarity. Other essential irregular verbs must be learned by pattern." },
    { id: "l25-e9", type: "speaking_prompt", question: "Décrivez un week-end que vous organisez. Utilisez savoir, connaître, partir, sortir, lire, écrire et dire.", model_answer: "Je connais un bon restaurant. Je sais réserver en ligne. Nous partirons samedi, puis nous sortirons le soir. Je lirai les avis, j'écrirai l'adresse et je dirai l'heure aux amis.", translation: "I know a good restaurant. I know how to book online. We'll leave Saturday, then we'll go out in the evening. I'll read the reviews, write the address, and tell the time to the friends.", tip: "Use savoir before an infinitive for skills; use connaître for familiarity with people and places." },
  ]
}

export default function Lesson25Page() {
  return (
    <ElementaryLessonLayout
      lessonData={lessonData}
      lessonNumber={25}
      prevHref="/lessons/elementary/24"
      prevLabel="Négation et Comparaison"
      nextHref="/lessons/elementary/26"
      nextLabel="Consolidation A2"
    />
  )
}
