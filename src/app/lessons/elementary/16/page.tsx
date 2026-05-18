'use client'

import ElementaryLessonLayout, { ElementaryLessonData } from '../../../../../components/lessons/ElementaryLessonLayout'

const lessonData: ElementaryLessonData = {
  id: 16,
  title: "Les Verbes en -ir et -re",
  level: "A2",
  description: "Learn regular -ir and -re verbs in the present and passé composé, with special attention to their stems, endings, and common spoken forms.",

  dialogue: {
    title: "En attendant les résultats",
    context: "Deux étudiants, Alice et Karim, attendent leurs résultats d'examens et discutent de leurs choix d'études.",
    exchanges: [
      { speaker: "Alice", french: "Tu attends les résultats depuis longtemps ?", english: "Have you been waiting for the results for a long time?", pronunciation: "tu ah-TAHN lay ray-zul-TAH duh-PWEE lohn-TAHN?" },
      { speaker: "Karim", french: "Oui, j'attends depuis ce matin. Je réfléchis à ce que je vais faire si je réussis.", english: "Yes, I've been waiting since this morning. I'm thinking about what I'll do if I pass.", pronunciation: "WEE, zhah-TAHN duh-PWEE suh mah-TAN. zhuh ray-FLAY-SHEE ah suh kuh zhuh VAY fair see zhuh ray-ew-SEE." },
      { speaker: "Alice", french: "Tu finis tes études cette année, non ?", english: "You're finishing your studies this year, right?", pronunciation: "tu fee-NEE tay zay-TEWD set ah-NAY, NOHN?" },
      { speaker: "Karim", french: "Oui, je finis en juin. Et toi, tu choisis déjà ta spécialité ?", english: "Yes, I finish in June. And you, are you already choosing your speciality?", pronunciation: "WEE, zhuh fee-NEE ahn zhwahn. ay TWAH, tu shwah-ZEE day-ZHAH tah spay-see-ah-lee-TAY?" },
      { speaker: "Alice", french: "Je choisis encore. Je remplis des dossiers pour plusieurs universités.", english: "I'm still choosing. I'm filling out applications for several universities.", pronunciation: "zhuh shwah-ZEE ahn-KOR. zhuh rahm-PLEE day doh-SYAY poor plew-ZYUR ew-nee-vair-see-TAY." },
      { speaker: "Karim", french: "Tu obéis à tes parents ou tu décides seule ?", english: "Do you obey your parents or do you decide alone?", pronunciation: "tu oh-BAY-EE ah tay pah-RAHN oo tu day-SEED suhl?" },
      { speaker: "Alice", french: "Je réfléchis beaucoup, mais je décide seule. Ils comprennent.", english: "I think a lot, but I decide alone. They understand.", pronunciation: "zhuh ray-FLAY-SHEE bo-KOO, may zhuh day-SEED suhl. eel kohm-PREN." },
      { speaker: "Karim", french: "Moi, je vends mes vieux livres pour payer les nouveaux.", english: "I'm selling my old books to pay for the new ones.", pronunciation: "MWAH, zhuh VAHN may vyuh LEE-vruh poor pay-YAY lay noo-VOH." },
      { speaker: "Alice", french: "Bonne idée. Tu perds beaucoup d'argent avec les livres neufs.", english: "Good idea. You lose a lot of money with new books.", pronunciation: "bun ee-DAY. tu PAIR bo-KOO dar-ZHAHN ah-VEK lay LEE-vruh nuhf." },
      { speaker: "Karim", french: "Je comprends. Mais j'attends aussi une bourse. J'espère recevoir une réponse.", english: "I understand. But I'm also waiting for a scholarship. I hope to receive an answer.", pronunciation: "zhuh kohm-PRAHN. may zhah-TAHN oh-SEE ewn BOORS. zhess-PAIR ruh-suh-VWAHR ewn ray-POHNS." },
      { speaker: "Alice", french: "Tu mérites cette bourse. Tu as beaucoup grandi cette année.", english: "You deserve this scholarship. You've grown a lot this year.", pronunciation: "tu may-REET set BOORS. tu ah bo-KOO grahn-DEE set ah-NAY." },
    ]
  },

  grammarPoints: [
    {
      title: "Les Verbes Réguliers en -ir (Modèle FINIR)",
      explanation: "Regular -ir verbs use the -iss- stem in the plural present forms and have -i as their past participle.",
      examples: [
        "FINIR : je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent",
        "CHOISIR : je choisis, tu choisis, il choisit, nous choisissons, vous choisissez, ils choisissent",
        "GRANDIR : je grandis, tu grandis, il grandit, nous grandissons, vous grandissez, ils grandissent",
        "RÉUSSIR : je réussis, tu réussis, il réussit, nous réussissons, vous réussissez, ils réussissent",
        "RÉFLÉCHIR : je réfléchis, tu réfléchis, il réfléchit, nous réfléchissons, vous réfléchissez, ils réfléchissent",
        "Participe passé : fini, choisi, grandi, réussi, réfléchi — se terminent tous en -i"
      ]
    },
    {
      title: "Les Verbes Réguliers en -re (Modèle RÉPONDRE)",
      explanation: "Regular -re verbs drop -re and add the present endings -s, -s, no ending, -ons, -ez, -ent. Their past participle usually ends in -u.",
      examples: [
        "RÉPONDRE : je réponds, tu réponds, il répond, nous répondons, vous répondez, ils répondent",
        "ATTENDRE : j'attends, tu attends, il attend, nous attendons, vous attendez, ils attendent",
        "VENDRE : je vends, tu vends, il vend, nous vendons, vous vendez, ils vendent",
        "ENTENDRE : j'entends, tu entends, il entend, nous entendons, vous entendez, ils entendent",
        "PERDRE : je perds, tu perds, il perd, nous perdons, vous perdez, ils perdent",
        "Participe passé : répondu, attendu, vendu, entendu, perdu — se terminent tous en -u"
      ]
    },
    {
      title: "Au Passé Composé",
      explanation: "For these regular verb families, form the passé composé with avoir plus the correct past participle: -i for regular -ir and -u for regular -re verbs.",
      examples: [
        "J'ai fini mes devoirs. (I finished my homework.)",
        "Tu as choisi le restaurant ? (Did you choose the restaurant?)",
        "Il a attendu une heure. (He waited for an hour.)",
        "Nous avons répondu à toutes les questions. (We answered all the questions.)",
        "Elles ont perdu leurs clés. (They lost their keys.)",
        "Négation : Je n'ai pas fini. / Tu n'as pas attendu."
      ]
    },
    {
      title: "Attention : Les Faux Amis en -ir (Sans -iss-)",
      explanation: "Not every verb ending in -ir follows finir. Verbs like partir, sortir, and dormir are irregular and do not use -iss- in the plural.",
      examples: [
        "PARTIR (group 2, no -iss-) : je pars, tu pars, il part, nous partons, vous partez, ils partent",
        "SORTIR (group 2, no -iss-) : je sors, tu sors, il sort, nous sortons, vous sortez, ils sortent",
        "DORMIR (group 2, no -iss-) : je dors, tu dors, il dort, nous dormons, vous dormez, ils dorment",
        "MENTIR (group 2, no -iss-) : je mens, tu mens, il ment, nous mentons, vous mentez, ils mentent",
        "OUVRIR (group 2, no -iss-, conjugué comme -er) : j'ouvre, tu ouvres, il ouvre, nous ouvrons, vous ouvrez, ils ouvrent",
        "Erreur classique à éviter : *il partisse / *il dormisse → FAUX. Correct : il part / il dort.",
        "Astuce mémo : PaSODOMe (Partir, Sortir, Dormir, Mentir) = pas d'-iss-."
      ]
    }
  ],

  vocabulary: [
    { french: "finir", english: "to finish", category: "Verbe -ir", example: "Je finis le travail à 18h. (zhuh fee-NEE luh trav-EYE ah deez-WEE-tur)" },
    { french: "choisir", english: "to choose", category: "Verbe -ir", example: "Tu choisis le film ? (tu shwah-ZEE luh feelm?)" },
    { french: "grandir", english: "to grow (up)", category: "Verbe -ir", example: "Les enfants grandissent vite. (layz ahn-FAHN grahn-DEES veet)" },
    { french: "réussir", english: "to succeed / pass", category: "Verbe -ir", example: "Elle réussit tous ses examens. (el ray-ew-SEE too sayz eg-zah-MAN)" },
    { french: "réfléchir", english: "to think / reflect", category: "Verbe -ir", example: "Nous réfléchissons au problème. (noo ray-flay-shee-SOHN oh proh-BLEM)" },
    { french: "rougir", english: "to blush", category: "Verbe -ir", example: "Il rougit quand il la voit. (eel roo-ZHEE kahn eel lah VWAH)" },
    { french: "obéir", english: "to obey", category: "Verbe -ir", example: "Vous obéissez aux règles. (voo zoh-bay-ee-SAY oh REGL)" },
    { french: "remplir", english: "to fill (out)", category: "Verbe -ir", example: "Je remplis le formulaire. (zhuh rahm-PLEE luh for-mew-LAIR)" },
    { french: "répondre", english: "to answer", category: "Verbe -re", example: "Tu réponds au téléphone ? (tu ray-POHN oh tay-lay-FUN?)" },
    { french: "attendre", english: "to wait (for)", category: "Verbe -re", example: "J'attends le bus depuis 20 minutes. (zhah-TAHN luh BEWS duh-PWEE van MEEN-ut)" },
    { french: "vendre", english: "to sell", category: "Verbe -re", example: "Il vend sa voiture. (eel VAHN sah vwah-TEWR)" },
    { french: "entendre", english: "to hear", category: "Verbe -re", example: "Vous entendez la musique ? (voo zahn-tahn-DAY lah mew-ZEEK?)" },
    { french: "perdre", english: "to lose", category: "Verbe -re", example: "Elle perd toujours ses lunettes. (el PAIR too-ZHOOR say lew-NET)" },
    { french: "rendre", english: "to give back / return", category: "Verbe -re", example: "Je rends le livre à la bibliothèque. (zhuh RAHN luh LEE-vruh ah lah bee-blee-oh-TEK)" },
    { french: "un dossier", english: "a file / application", category: "Nom", example: "J'ai rempli le dossier d'inscription. (zhay rahm-PLEE luh doh-SYAY dan-skrip-SYOHN)" },
    { french: "une bourse", english: "a scholarship / grant", category: "Nom", example: "Elle a reçu une bourse d'études. (el ah ruh-SEW ewn BOORS day-TEWD)" },
    { french: "les études", english: "studies", category: "Nom", example: "Il finit ses études cette année. (eel fee-NEE say zay-TEWD set ah-NAY)" },
    { french: "neuf / neuve", english: "new (brand new)", category: "Adjectif", example: "J'ai acheté un livre neuf. (zhay ash-TAY uh(n) LEE-vruh nuhf) Note: neuf = brand new, nouveau = new (to you)" },
  ],

  culturalNotes: [
    { title: "Le système des bourses en France", content: "Les bourses d'études en France sont attribuées sur critères sociaux par le CROUS (Centre Régional des Œuvres Universitaires et Scolaires). Elles peuvent couvrir jusqu'à la totalité des frais d'inscription et offrir une aide mensuelle." },
    { title: "L'orientation universitaire", content: "En France, l'orientation post-bac se fait via la plateforme Parcoursup, où les lycéens formulent des vœux pour les formations qu'ils souhaitent intégrer. Les réponses arrivent entre mai et juillet, créant une période de stress intense pour les terminales." },
    { title: "Les livres universitaires", content: "Les manuels universitaires en France peuvent être très coûteux, surtout en droit et en médecine. Le marché de l'occasion est très développé, avec des bourses aux livres organisées par les associations étudiantes en début d'année." },
  ],

  exercises: [
    { id: "l16-e1", type: "conjugation", question: "Conjuguez le verbe FINIR au présent.", verb: "finir", correct_answer: [{ pronoun: "je", form: "finis", pronunciation: "fee-NEE" }, { pronoun: "tu", form: "finis", pronunciation: "fee-NEE" }, { pronoun: "il/elle/on", form: "finit", pronunciation: "fee-NEE" }, { pronoun: "nous", form: "finissons", pronunciation: "fee-nee-SOHN" }, { pronoun: "vous", form: "finissez", pronunciation: "fee-nee-SAY" }, { pronoun: "ils/elles", form: "finissent", pronunciation: "fee-NEES" }], explanation: "Regular -ir verbs use the -iss- stem in the plural present forms and -i as the past participle. Regular -re verbs drop -re and use -s, -s, no ending, -ons, -ez, -ent." },
    { id: "l16-e2", type: "fill_blank", question: "Complétez : Nous ____ (choisir) le restaurant italien.", correct_answer: "choisissons", explanation: "Regular -ir verbs use the -iss- stem in the plural present forms and -i as the past participle. Regular -re verbs drop -re and use -s, -s, no ending, -ons, -ez, -ent." },
    { id: "l16-e3", type: "fill_blank", question: "Complétez : Tu ____ (attendre) le train ?", correct_answer: "attends", explanation: "Regular -ir verbs use the -iss- stem in the plural present forms and -i as the past participle. Regular -re verbs drop -re and use -s, -s, no ending, -ons, -ez, -ent." },
    { id: "l16-e4", type: "multiple_choice", question: "Quelle est la forme correcte pour 'il' du verbe RÉPONDRE ?", options: ["il réponds", "il répond", "il réponde", "il répondent"], correct_answer: "il répond", explanation: "Regular -ir verbs use the -iss- stem in the plural present forms and -i as the past participle. Regular -re verbs drop -re and use -s, -s, no ending, -ons, -ez, -ent." },
    { id: "l16-e5", type: "transformation", question: "Mettez ces phrases à la forme négative.", instruction: "affirmative_to_negative", items: [{ original: "Je finis mes devoirs.", transformed: "Je ne finis pas mes devoirs.", translation: "I don't finish my homework." }, { original: "Il attend le bus.", transformed: "Il n'attend pas le bus.", translation: "He doesn't wait for the bus." }, { original: "Nous vendons la maison.", transformed: "Nous ne vendons pas la maison.", translation: "We don't sell the house." }], explanation: "Regular -ir verbs use the -iss- stem in the plural present forms and -i as the past participle. Regular -re verbs drop -re and use -s, -s, no ending, -ons, -ez, -ent." },
    { id: "l16-e6", type: "fill_blank", question: "Complétez au passé composé : Elle ____ ____ (finir) son projet.", correct_answer: "a fini", explanation: "Regular -ir verbs use the -iss- stem in the plural present forms and -i as the past participle. Regular -re verbs drop -re and use -s, -s, no ending, -ons, -ez, -ent." },
    { id: "l16-e7", type: "matching", question: "Associez l'infinitif à son participe passé.", pairs: [{ french: "finir", english: "fini" }, { french: "choisir", english: "choisi" }, { french: "répondre", english: "répondu" }, { french: "vendre", english: "vendu" }, { french: "attendre", english: "attendu" }, { french: "perdre", english: "perdu" }], explanation: "Regular -ir verbs use the -iss- stem in the plural present forms and -i as the past participle. Regular -re verbs drop -re and use -s, -s, no ending, -ons, -ez, -ent." },
    { id: "l16-e8", type: "translation", question: "Traduisez : 'He finished his studies and sold his books.'", direction: "en_to_fr", correct_answer: ["Il a fini ses études et il a vendu ses livres.", "Il a terminé ses études et a vendu ses livres."], explanation: "Regular -ir verbs use the -iss- stem in the plural present forms and -i as the past participle. Regular -re verbs drop -re and use -s, -s, no ending, -ons, -ez, -ent." },
    { id: "l16-e9", type: "speaking_prompt", question: "Décrivez vos études ou votre travail en utilisant 2 verbes en -ir et 2 verbes en -re.", model_answer: "Je finis mon travail à 18h. Je réfléchis beaucoup. J'attends le bus tous les jours. Je perds souvent mes clés.", translation: "I finish work at 6pm. I think a lot. I wait for the bus every day. I often lose my keys.", tip: "For regular verbs, the stem tells you the family; the ending tells you the subject." },
    {
      id: "l16-e10",
      type: "error_correction",
      question: "Corrigez ces formes incorrectes — attention aux faux amis en -ir qui ne prennent pas -iss-.",
      items: [
        { incorrect: "Il dormisse profondément.", correct: "Il dort profondément.", explanation: "Regular -ir verbs use the -iss- stem in the plural present forms and -i as the past participle. Regular -re verbs drop -re and use -s, -s, no ending, -ons, -ez, -ent." },
        { incorrect: "Nous partissons demain matin.", correct: "Nous partons demain matin.", explanation: "Regular -ir verbs use the -iss- stem in the plural present forms and -i as the past participle. Regular -re verbs drop -re and use -s, -s, no ending, -ons, -ez, -ent." },
        { incorrect: "Tu sortisses à quelle heure ?", correct: "Tu sors à quelle heure ?", explanation: "Regular -ir verbs use the -iss- stem in the plural present forms and -i as the past participle. Regular -re verbs drop -re and use -s, -s, no ending, -ons, -ez, -ent." },
        { incorrect: "Elle mentisse souvent.", correct: "Elle ment souvent.", explanation: "Regular -ir verbs use the -iss- stem in the plural present forms and -i as the past participle. Regular -re verbs drop -re and use -s, -s, no ending, -ons, -ez, -ent." },
        { incorrect: "Il finit ses devoirs et il dort.", correct: "Il finit ses devoirs et il dort.", explanation: "Regular -ir verbs use the -iss- stem in the plural present forms and -i as the past participle. Regular -re verbs drop -re and use -s, -s, no ending, -ons, -ez, -ent." }
      ]
    },
  ]
}

export default function Lesson16Page() {
  return (
    <ElementaryLessonLayout
      lessonData={lessonData}
      lessonNumber={16}
      prevHref="/lessons/elementary/15"
      prevLabel="Passé Composé III"
      nextHref="/lessons/elementary/17"
      nextLabel="Les Verbes Pronominaux"
    />
  )
}
