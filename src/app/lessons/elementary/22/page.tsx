'use client'

import ElementaryLessonLayout, { ElementaryLessonData } from '../../../../../components/lessons/ElementaryLessonLayout'

const lessonData: ElementaryLessonData = {
  id: 22,
  title: "Les Pronoms COD",
  level: "A2",
  description: "Master direct object pronouns le, la, l’, and les, including placement before the verb and past participle agreement with avoir.",

  dialogue: {
    title: "Au marché",
    context: "Deux amies, Claire et Fatou, font les courses au marché du dimanche.",
    exchanges: [
      { speaker: "Claire", french: "Tu as vu le stand de fromages ? Je le trouve magnifique !", english: "Did you see the cheese stand? I find it magnificent!", pronunciation: "tu ah VEW luh STAHN duh froh-MAHZH? zhuh luh TROOV man-yee-FEEK!" },
      { speaker: "Fatou", french: "Oui, je l'ai vu. Je vais l'acheter, ce camembert.", english: "Yes, I saw it. I'm going to buy it, this camembert.", pronunciation: "WEE, zhuh lay VEW. zhuh VAY lash-TAY, suh kah-mahm-BAIR." },
      { speaker: "Claire", french: "Tu me conseilles quoi pour le dîner ?", english: "What do you recommend for dinner?", pronunciation: "tu muh kohn-SAY KWAH poor luh dee-NAY?" },
      { speaker: "Fatou", french: "Le poulet rôti est excellent. Je le prends chaque dimanche.", english: "The roast chicken is excellent. I take it every Sunday.", pronunciation: "luh poo-LAY roh-TEE ay ek-sel-AHN. zhuh luh PRAHN shahk dee-MAHNSH." },
      { speaker: "Claire", french: "Tu nous invites à dîner alors ?", english: "Are you inviting us for dinner then?", pronunciation: "tu noo zan-VEET ah dee-NAY ah-LOR?" },
      { speaker: "Fatou", french: "Bien sûr ! Je vous attends à 20h. Les légumes, je les ai déjà achetés.", english: "Of course! I'm expecting you at 8pm. The vegetables, I already bought them.", pronunciation: "byan SEWR! zhuh voo zah-TAHN ah van-TUR. lay lay-GEWM, zhuh lay zay day-ZHAH ash-TAY." },
      { speaker: "Claire", french: "Et le pain ? Tu l'as pris ?", english: "And the bread? Did you get it?", pronunciation: "ay luh PAN? tu lah PREE?" },
      { speaker: "Fatou", french: "Non, je ne l'ai pas encore pris. La boulangerie, je l'adore, mais elle est fermée le dimanche.", english: "No, I haven't gotten it yet. The bakery, I love it, but it's closed on Sundays.", pronunciation: "NOHN, zhuh nuh lay pah ahn-KOR PREE. lah boo-lahn-zhuh-REE, zhuh lah-DOR, may el ay fair-MAY luh dee-MAHNSH." },
      { speaker: "Claire", french: "Alors je l'achèterai en chemin. Tu me passes la liste ?", english: "Then I'll buy it on the way. Can you pass me the list?", pronunciation: "ah-LOR zhuh lash-et-RAY ahn shuh-MAN. tu muh PAHS lah LEEST?" },
      { speaker: "Fatou", french: "La voilà. Je te la donne. Et les pommes, tu les veux rouges ou vertes ?", english: "Here it is. I'm giving it to you. And the apples, do you want them red or green?", pronunciation: "lah vwah-LAH. zhuh tuh lah DUN. ay lay PUM, tu lay VUH ROOZH oo VAIRT?" },
    ]
  },

  grammarPoints: [
    {
      title: "Les Pronoms COD — Tableau",
      explanation: "Direct object pronouns replace nouns that receive the action directly, without a preposition. They go before the conjugated verb.",
      examples: [
        "ME (me) : Il me regarde. — Ne me regarde pas !",
        "TE (you singular) : Je te vois. — Je ne te vois pas.",
        "LE (him/it masculine) : Je le prends. — Je l'ai pris.",
        "LA (her/it feminine) : Je la connais. — Je l'ai vue.",
        "NOUS (us) : Tu nous invites. — Tu nous as invités.",
        "VOUS (you plural/formal) : Je vous remercie. — Je vous ai vus.",
        "LES (them) : Je les achète. — Je les ai achetés."
      ]
    },
    {
      title: "L'Accord du Participe Passé avec le COD",
      explanation: "With avoir, the past participle agrees with a direct object only when that direct object comes before the verb.",
      examples: [
        "J'ai acheté la pomme. → Je l'ai achetée. (COD la avant → accord féminin)",
        "J'ai vu les filles. → Je les ai vues. (COD les avant → accord féminin pluriel)",
        "Il a pris le livre. → Il l'a pris. (COD l' = le → pas d'accord, masculin singulier par défaut)",
        "J'ai mangé les gâteaux. → Je les ai mangés. (COD les avant → accord masculin pluriel)",
        "Elle a rencontré Paul. → Elle l'a rencontré. (masculin → pas de -e)"
      ]
    },
    {
      title: "Placement avec Infinitif et Impératif",
      explanation: "With an infinitive, the direct object pronoun goes before the infinitive. In positive commands, it goes after the verb with a hyphen.",
      examples: [
        "Je vais le prendre. (infinitif : devant prendre)",
        "Je peux t'aider ? (infinitif : devant aider)",
        "Je ne vais pas l'acheter. (négation + infinitif)",
        "Prends-le ! (impératif positif : après le verbe)",
        "Ne le prends pas ! (impératif négatif : avant le verbe)"
      ]
    },
    {
      title: "Accord du Participe avec le COD Antéposé — Règles Fines",
      explanation: "A preceding direct object can trigger agreement with avoir, but en does not trigger agreement. This distinction matters in careful writing.",
      examples: [
        "COD FÉMININ SINGULIER : la → +e. La pomme ? Je l'ai achetée. / La lettre qu'il a écrite.",
        "COD MASCULIN PLURIEL : les → +s. Les livres ? Je les ai pris. (pris déjà en -s → aucun changement visible à l'oral)",
        "COD FÉMININ PLURIEL : les → +es. Les robes ? Je les ai achetées.",
        "COD MASCULIN SINGULIER : le/l' → aucun accord. Le film ? Je l'ai vu. (vu = déjà masculin singulier)",
        "PIÈGE — Combien ? : 'Les films que j'ai vus' (que = les films, masc. plur. → vus). Testez : 'que' remplace quoi ?",
        "PIÈGE — AUCUN accord si le COD vient APRÈS : J'ai acheté des robes. (pas d'accord, objet après)",
        "PIÈGE — EN : J'en ai mangé. → Jamais d'accord avec EN. Des gâteaux ? J'en ai mangé. (mangé invariable)"
      ]
    }
  ],

  vocabulary: [
    { french: "un stand", english: "a stall / stand", category: "Marché", example: "Le stand de légumes est très coloré. (luh STAHN duh lay-GEWM ay tray koh-loh-RAY)" },
    { french: "une liste", english: "a list", category: "Nom", example: "Je te donne la liste des courses. (zhuh tuh DUN lah LEEST day KOORS)" },
    { french: "conseiller", english: "to recommend / advise", category: "Verbe", example: "Tu me conseilles ce restaurant ? (tu muh kohn-SAY suh res-toh-RAHN?)" },
    { french: "attendre", english: "to wait / expect", category: "Verbe", example: "Je vous attends devant le cinéma. (zhuh voo zah-TAHN duh-VAHN luh see-nay-MAH)" },
    { french: "le camembert", english: "camembert cheese", category: "Fromage", example: "Le camembert, je l'adore sur du pain frais. (luh kah-mahm-BAIR, zhuh lah-DOR sewr dew PAN FRAY)" },
    { french: "rôti(e)", english: "roasted", category: "Adjectif", example: "Le poulet rôti est mon plat préféré. (luh poo-LAY roh-TEE ay mohn PLAH pray-fay-RAY)" },
    { french: "la boulangerie", english: "the bakery", category: "Commerce", example: "La boulangerie, je la trouve ouverte. (lah boo-lahn-zhuh-REE, zhuh lah TROOV oo-VAIRT)" },
    { french: "fermé(e)", english: "closed", category: "Adjectif", example: "Le magasin est fermé le lundi. (luh mah-gah-ZAN ay fair-MAY luh lun-DEE)" },
    { french: "en chemin", english: "on the way", category: "Expression", example: "Je l'achèterai en chemin. (zhuh lash-et-RAY ahn shuh-MAN)" },
    { french: "la voilà / le voilà", english: "here it is", category: "Expression", example: "La voilà, ta veste ! (lah vwah-LAH, tah VEST!)" },
    { french: "donner", english: "to give", category: "Verbe", example: "Je te la donne tout de suite. (zhuh tuh lah DUN toot SWEET)" },
    { french: "passer", english: "to pass / hand", category: "Verbe", example: "Tu me passes le sel ? (tu muh PAHS luh SEL?)" },
    { french: "acheter", english: "to buy", category: "Verbe", example: "Le pain, je l'achète en chemin. (luh PAN, zhuh lah-SHET ahn shuh-MAN)" },
    { french: "prendre", english: "to take", category: "Verbe", example: "Le bus, je le prends à 8h. (luh BEWS, zhuh luh PRAHN ah weet-UR)" },
    { french: "adorer", english: "to love / adore", category: "Verbe", example: "Cette tarte, je l'adore. (set TART, zhuh lah-DOR)" },
    { french: "voir", english: "to see", category: "Verbe", example: "Les fleurs, je les vois près du stand. (lay FLUR, zhuh lay VWAH pray dew STAHN)" },
    { french: "frais / fraîche", english: "fresh", category: "Adjectif", example: "Je le veux frais, ce pain. (zhuh luh VUH FRAY, suh PAN)" },
    { french: "rouge / verte", english: "red / green", category: "Adjectif", example: "Les pommes, tu les veux rouges ? (lay PUM, tu lay VUH ROOZH?)" },
  ],

  culturalNotes: [
    { title: "Le marché du dimanche", content: "Le marché dominical est une institution française. Chaque ville et village a son jour de marché. On y trouve des produits frais, du fromage, de la charcuterie, et c'est aussi un lieu de socialisation important." },
    { title: "Le camembert", content: "Fromage emblématique de Normandie, le camembert est fait au lait de vache cru. Un 'vrai' camembert porte l'appellation AOP (Appellation d'Origine Protégée). Il se déguste souvent avec du pain et un verre de vin rouge." },
    { title: "Les commerces le dimanche", content: "En France, beaucoup de petits commerces ferment le dimanche après-midi, mais les boulangeries et les marchés du matin restent très fréquentés. Faire ses courses tôt permet souvent d'avoir plus de choix." },
  ],

  exercises: [
    { id: "l22-e1", type: "fill_blank", question: "Remplacez le mot souligné par le pronom COD : Je vois *Marie*. → Je ____ vois.", correct_answer: "la", explanation: "Direct object pronouns replace a direct object and go before the conjugated verb. With avoir, a preceding direct object can trigger past participle agreement." },
    { id: "l22-e2", type: "fill_blank", question: "Remplacez le mot souligné par le pronom COD : Tu achètes *les pommes*. → Tu ____ achètes.", correct_answer: "les", explanation: "Direct object pronouns replace a direct object and go before the conjugated verb. With avoir, a preceding direct object can trigger past participle agreement." },
    { id: "l22-e3", type: "transformation", question: "Remplacez l'objet direct par un pronom COD.", instruction: "affirmative_to_negative", items: [{ original: "Je prends le train.", transformed: "Je le prends.", translation: "I take it." }, { original: "Elle lit la lettre.", transformed: "Elle la lit.", translation: "She reads it." }, { original: "Nous invitons nos amis.", transformed: "Nous les invitons.", translation: "We invite them." }], explanation: "Direct object pronouns replace a direct object and go before the conjugated verb. With avoir, a preceding direct object can trigger past participle agreement." },
    { id: "l22-e4", type: "fill_blank", question: "Accordez le participe passé : La robe ? Je l'ai ____ (acheter) hier.", correct_answer: "achetée", explanation: "Direct object pronouns replace a direct object and go before the conjugated verb. With avoir, a preceding direct object can trigger past participle agreement." },
    { id: "l22-e5", type: "matching", question: "Associez le pronom COD à sa fonction.", pairs: [{ french: "me", english: "me" }, { french: "te", english: "you (singular)" }, { french: "le", english: "him / it (m)" }, { french: "la", english: "her / it (f)" }, { french: "nous", english: "us" }, { french: "les", english: "them" }], explanation: "Direct object pronouns replace a direct object and go before the conjugated verb. With avoir, a preceding direct object can trigger past participle agreement." },
    { id: "l22-e6", type: "multiple_choice", question: "Où placer le pronom : 'Je vais ____ acheter' (le pain).", options: ["le avant 'vais'", "le avant 'acheter'", "le après 'acheter'", "le après 'vais'"], correct_answer: "le avant 'acheter'", explanation: "Direct object pronouns replace a direct object and go before the conjugated verb. With avoir, a preceding direct object can trigger past participle agreement." },
    { id: "l22-e7", type: "translation", question: "Traduisez : 'I saw the film. I loved it.'", direction: "en_to_fr", correct_answer: ["J'ai vu le film. Je l'ai adoré."], explanation: "Direct object pronouns replace a direct object and go before the conjugated verb. With avoir, a preceding direct object can trigger past participle agreement." },
    { id: "l22-e8", type: "multiple_choice", question: "Accord correct ? 'Les fraises, je les ai ____ (manger).'", options: ["mangé", "mangée", "mangés", "mangées"], correct_answer: "mangées", explanation: "Direct object pronouns replace a direct object and go before the conjugated verb. With avoir, a preceding direct object can trigger past participle agreement." },
    { id: "l22-e9", type: "speaking_prompt", question: "Décrivez vos courses récentes en utilisant 3 pronoms COD.", model_answer: "J'ai acheté un livre. Je l'ai lu tout de suite. Les légumes, je les ai cuisinés le soir. La salade, je l'ai mangée avec du pain.", translation: "I bought a book. I read it right away. The vegetables, I cooked them in the evening. The salad, I ate it with bread.", tip: "Find the direct object first; if it appears before avoir, agreement may be required." },
    { id: "l22-e10", type: "error_correction", question: "Corrigez l'accord du participe passé si nécessaire.", items: [{ incorrect: "Les chaussures que j'ai acheté sont trop petites.", correct: "Les chaussures que j'ai achetées sont trop petites.", explanation: "Direct object pronouns replace a direct object and go before the conjugated verb. With avoir, a preceding direct object can trigger past participle agreement." }, { incorrect: "Cette chanson ? Je l'ai entendu à la radio.", correct: "Cette chanson ? Je l'ai entendue à la radio.", explanation: "Direct object pronouns replace a direct object and go before the conjugated verb. With avoir, a preceding direct object can trigger past participle agreement." }, { incorrect: "Des croissants ? J'en ai mangés ce matin.", correct: "Des croissants ? J'en ai mangé ce matin.", explanation: "Direct object pronouns replace a direct object and go before the conjugated verb. With avoir, a preceding direct object can trigger past participle agreement." }, { incorrect: "Les emails que tu as envoyés hier.", correct: "Les emails que tu as envoyés hier. ✓", explanation: "Direct object pronouns replace a direct object and go before the conjugated verb. With avoir, a preceding direct object can trigger past participle agreement." }] },
  ]
}

export default function Lesson22Page() {
  return (
    <ElementaryLessonLayout
      lessonData={lessonData}
      lessonNumber={22}
      prevHref="/lessons/elementary/21"
      prevLabel="Le Futur Simple"
      nextHref="/lessons/elementary/23"
      nextLabel="Les Pronoms COI, Y et EN"
    />
  )
}
