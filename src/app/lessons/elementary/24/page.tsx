'use client'

import ElementaryLessonLayout, { ElementaryLessonData } from '../../../../../components/lessons/ElementaryLessonLayout'

const lessonData: ElementaryLessonData = {
  id: 24,
  title: "La Négation et la Comparaison",
  level: "A2",
  description: "Master extended negation patterns and comparison: ne...rien, ne...jamais, ne...plus, ne...personne, ne...que, comparatives, and superlatives.",

  dialogue: {
    title: "Comparer les expériences",
    context: "Deux amis, Yasmine et David, comparent leurs expériences de vie et de travail.",
    exchanges: [
      { speaker: "Yasmine", french: "David, tu n'as jamais travaillé à l'étranger ?", english: "David, have you never worked abroad?", pronunciation: "dah-VEED, tu nah zhah-MAY trav-eye-YAY ah lay-trahn-ZHAY?" },
      { speaker: "David", french: "Non, je n'ai jamais travaillé à l'étranger. Je n'ai rien fait d'extraordinaire.", english: "No, I've never worked abroad. I haven't done anything extraordinary.", pronunciation: "NOHN, zhuh nay zhah-MAY trav-eye-YAY ah lay-trahn-ZHAY. zhuh nay ree-AHN FAY dek-strah-or-dee-NAIR." },
      { speaker: "Yasmine", french: "Moi, j'ai travaillé au Sénégal. C'est plus intéressant que le bureau ici.", english: "I worked in Senegal. It's more interesting than the office here.", pronunciation: "MWAH, zhay trav-eye-YAY oh say-nay-GAL. say plews an-tay-ray-SAHN kuh luh bew-ROH ee-SEE." },
      { speaker: "David", french: "C'est vrai. Mon travail est moins passionnant que le tien.", english: "That's true. My job is less exciting than yours.", pronunciation: "say VRAY. mohn trav-EYE ay mwahn pah-syoh-NAHN kuh luh TYAN." },
      { speaker: "Yasmine", french: "Mais tu gagnes plus que moi, non ?", english: "But you earn more than me, right?", pronunciation: "may tu GANYUH plews kuh MWAH, NOHN?" },
      { speaker: "David", french: "Pas vraiment. Personne ne gagne bien dans notre secteur.", english: "Not really. Nobody earns well in our sector.", pronunciation: "pah vray-MAHN. pair-SUN nuh GANYUH byan dah(n) noh-truh sek-TUR." },
      { speaker: "Yasmine", french: "Tu n'as plus envie de changer de travail ?", english: "Don't you want to change jobs anymore?", pronunciation: "tu nah PLEW ahn-VEE duh shahn-ZHAY duh trav-EYE?" },
      { speaker: "David", french: "Si, j'en ai toujours envie. Mais je n'ai que deux ans d'expérience.", english: "Yes (contradicting negative), I still want to. But I only have two years of experience.", pronunciation: "SEE, zhahn ay too-ZHOOR ahn-VEE. may zhuh nay kuh duh ZAHN deks-pay-ree-AHNS." },
      { speaker: "Yasmine", french: "C'est le plus important, l'expérience. Tu es aussi qualifié que les autres.", english: "That's the most important thing, experience. You're as qualified as the others.", pronunciation: "say luh plews an-por-TAHN, leks-pay-ree-AHNS. tu ay oh-SEE kah-lee-FYAY kuh lay ZOH-truh." },
      { speaker: "David", french: "Tu es la personne la plus optimiste que je connaisse !", english: "You are the most optimistic person I know!", pronunciation: "tu ay lah pair-SUN lah plews op-tee-MEEST kuh zhuh koh-NES!" },
    ]
  },

  grammarPoints: [
    {
      title: "Négations Étendues",
      explanation: "French has several two-part negative expressions, including ne...rien, ne...jamais, ne...plus, ne...personne, and ne...que.",
      examples: [
        "NE...RIEN (nothing / not...anything) : Je ne vois rien. / Je n'ai rien vu.",
        "NE...JAMAIS (never / not...ever) : Il ne sort jamais. / Il n'est jamais sorti.",
        "NE...PLUS (no longer / not...anymore) : Elle ne travaille plus ici. / Elle n'a plus travaillé.",
        "NE...PERSONNE (nobody / not...anyone) : Personne ne vient. / Je n'ai vu personne.",
        "NE...QUE (only) : Je n'ai que 10 euros. (I only have 10 euros.)",
        "Au passé composé : ne + auxiliaire + jamais/rien/plus + participe : Je n'ai rien mangé."
      ]
    },
    {
      title: "Comparatifs",
      explanation: "Comparatives compare two things with plus...que, moins...que, or aussi...que. Adjectives still agree with the noun they describe.",
      examples: [
        "PLUS...QUE : Marie est plus grande que Paul. (Marie is taller than Paul.)",
        "MOINS...QUE : Ce film est moins intéressant que l'autre. (This film is less interesting than the other.)",
        "AUSSI...QUE : Tu es aussi intelligente que ta sœur. (You're as intelligent as your sister.)",
        "MEILLEUR QUE (better than, adjective) : Mon gâteau est meilleur que le tien.",
        "MIEUX QUE (better than, adverb) : Elle chante mieux que moi.",
        "AUTANT QUE (as much as) : Je travaille autant que toi."
      ]
    },
    {
      title: "Superlatifs",
      explanation: "Superlatives express the highest or lowest degree with le/la/les plus or le/la/les moins, plus the adjective.",
      examples: [
        "LE PLUS + adjectif : C'est le plus beau jour de ma vie. (It's the most beautiful day of my life.)",
        "LA PLUS + adjectif : Elle est la plus rapide de l'équipe. (She's the fastest on the team.)",
        "LE MOINS + adjectif : C'est le moins cher du marché. (It's the cheapest at the market.)",
        "LE MEILLEUR / LE PIRE : C'est le meilleur restaurant de la ville. (It's the best restaurant in the city.)",
        "Superlatif avec adjectif après le nom : l'homme le plus intelligent du monde."
      ]
    },
    {
      title: "Meilleur / Mieux et Ne...Ni...Ni — Pièges et Nuances",
      explanation: "Meilleur is the adjective form of better; mieux is the adverb form. Ne...ni...ni means neither...nor and drops indefinite articles.",
      examples: [
        "MEILLEUR = adjectif comparatif de BON. S'accorde. Ce gâteau est meilleur que l'autre.",
        "MIEUX = adverbe comparatif de BIEN. Invariable. Elle chante mieux que moi.",
        "Test MEILLEUR/MIEUX : remplacez par 'bon' ou 'bien'. Ce gâteau est bon → meilleur. Elle chante bien → mieux.",
        "PIÈGE : *plus meilleur, *plus mieux → FAUX. Meilleur et mieux sont déjà des comparatifs.",
        "LE MEILLEUR / LA MEILLEURE = le superlatif de bon. C'est la meilleure solution.",
        "LE MIEUX = le superlatif de bien. C'est lui qui travaille le mieux.",
        "NE...NI...NI (neither...nor) : Je n'ai ni faim ni soif. / Il ne parle ni français ni espagnol.",
        "Structure : ne + verbe + ni + nom1 + ni + nom2. Pas d'article indéfini après ni : *ni un café ni un thé → FAUX. Correct : ni café ni thé."
      ]
    }
  ],

  vocabulary: [
    { french: "ne...rien", english: "nothing / not...anything", category: "Négation", example: "Je n'ai rien entendu. (zhuh nay ree-AHN ahn-tahn-DEW)" },
    { french: "ne...jamais", english: "never / not...ever", category: "Négation", example: "Il ne pleut jamais ici. (eel nuh pluh zhah-MAY ee-SEE)" },
    { french: "ne...plus", english: "no longer / not...anymore", category: "Négation", example: "Je ne fume plus. (zhuh nuh FEWM plew)" },
    { french: "ne...personne", english: "nobody / not...anyone", category: "Négation", example: "Je ne connais personne ici. (zhuh nuh koh-NAY pair-SUN ee-SEE)" },
    { french: "ne...que", english: "only", category: "Négation", example: "Je n'ai que deux euros. (zhuh nay kuh duh ZUH-roh)" },
    { french: "plus...que", english: "more...than", category: "Comparatif", example: "Ce gâteau est plus sucré que l'autre. (suh gah-TOH ay plews sew-KRAY kuh LOH-truh)" },
    { french: "moins...que", english: "less...than", category: "Comparatif", example: "Cette robe est moins chère que la noire. (set ROB ay mwahn SHAIR kuh lah NWAHR)" },
    { french: "aussi...que", english: "as...as", category: "Comparatif", example: "Tu es aussi beau que ton père. (tu ay oh-SEE BOH kuh tohn PAIR)" },
    { french: "meilleur(e) que", english: "better than (adj.)", category: "Comparatif", example: "Ce vin est meilleur que le précédent. (suh VAN ay may-YUR kuh luh pray-say-DAHN)" },
    { french: "le meilleur / la meilleure", english: "the best", category: "Superlatif", example: "C'est la meilleure boulangerie ! (say lah may-YUR boo-lahn-zhuh-REE!)" },
    { french: "le plus important", english: "the most important", category: "Superlatif", example: "C'est le plus important. (say luh plews an-por-TAHN)" },
    { french: "passionnant(e)", english: "exciting / fascinating", category: "Adjectif", example: "Son histoire est passionnante. (sohn ees-TWAHR ay pah-syoh-NAHNT)" },
    { french: "qualifié(e)", english: "qualified", category: "Adjectif", example: "Tu es très qualifié pour ce poste. (tu ay tray kah-lee-FYAY poor suh POHST)" },
    { french: "autant que", english: "as much as", category: "Comparatif", example: "Je travaille autant que toi. (zhuh trav-EYE oh-TAHN kuh TWAH)" },
    { french: "mieux que", english: "better than (adverb)", category: "Comparatif", example: "Elle chante mieux que moi. (el SHAHNT MYUH kuh MWAH)" },
    { french: "le pire / la pire", english: "the worst", category: "Superlatif", example: "C'est la pire journée. (say lah PEER zhoor-NAY)" },
    { french: "le moins cher", english: "the cheapest", category: "Superlatif", example: "C'est le moins cher du marché. (say luh mwahn SHAIR dew mar-SHAY)" },
    { french: "expérimenté(e)", english: "experienced", category: "Adjectif", example: "Elle est très expérimentée. (el ay tray zeks-pay-ree-mahn-TAY)" },
    { french: "le secteur", english: "sector / field", category: "Nom", example: "Ce secteur est difficile. (suh sek-TUR ay dee-fee-SEEL)" },
    { french: "extraordinaire", english: "extraordinary", category: "Adjectif", example: "Ce voyage est extraordinaire. (suh vwah-YAHZH ay eks-trah-or-dee-NAIR)" },
  ],

  culturalNotes: [
    { title: "Le Sénégal et la francophonie", content: "Ancienne colonie française, le Sénégal est un pays francophone d'Afrique de l'Ouest réputé pour sa stabilité politique et sa culture riche. Dakar, la capitale, est un centre économique et culturel important de l'Afrique francophone." },
    { title: "La vie professionnelle en France", content: "Changer d'emploi en France est moins fréquent qu'aux États-Unis mais devient plus courant. Le CDI est le contrat idéal et protège fortement l'employé. L'expérience et l'ancienneté sont très valorisées." },
    { title: "Répondre à une question négative", content: "En français, on utilise 'si' pour contredire une question négative : 'Tu n'as pas envie ?' — 'Si, j'ai envie.' Ce petit mot évite une ambiguïté fréquente avec 'oui'." },
  ],

  exercises: [
    { id: "l24-e1", type: "fill_blank", question: "Complétez avec la bonne négation : Je ____ comprends ____ (rien).", correct_answer: "ne rien", explanation: "French negative expressions wrap around the conjugated verb or auxiliary. Comparatives use plus/moins/aussi...que, and superlatives use le/la/les plus or le/la/les moins." },
    { id: "l24-e2", type: "fill_blank", question: "Complétez avec ne...jamais : Il ____ est ____ allé en Asie.", correct_answer: "n' jamais", explanation: "French negative expressions wrap around the conjugated verb or auxiliary. Comparatives use plus/moins/aussi...que, and superlatives use le/la/les plus or le/la/les moins." },
    { id: "l24-e3", type: "fill_blank", question: "Complétez avec le comparatif : Ce livre est ____ intéressant ____ le film.", correct_answer: "plus que", explanation: "French negative expressions wrap around the conjugated verb or auxiliary. Comparatives use plus/moins/aussi...que, and superlatives use le/la/les plus or le/la/les moins." },
    { id: "l24-e4", type: "multiple_choice", question: "Complétez : 'Elle est ____ de la classe.' (la plus intelligente)", options: ["la plus intelligente", "le plus intelligente", "la plus intelligent", "le plus intelligent"], correct_answer: "la plus intelligente", explanation: "French negative expressions wrap around the conjugated verb or auxiliary. Comparatives use plus/moins/aussi...que, and superlatives use le/la/les plus or le/la/les moins." },
    { id: "l24-e5", type: "transformation", question: "Transformez en négation avec ne...plus.", instruction: "affirmative_to_negative", items: [{ original: "Je fume.", transformed: "Je ne fume plus.", translation: "I no longer smoke." }, { original: "Il travaille ici.", transformed: "Il ne travaille plus ici.", translation: "He no longer works here." }, { original: "Nous avons un chien.", transformed: "Nous n'avons plus de chien.", translation: "We no longer have a dog." }], explanation: "French negative expressions wrap around the conjugated verb or auxiliary. Comparatives use plus/moins/aussi...que, and superlatives use le/la/les plus or le/la/les moins." },
    { id: "l24-e6", type: "matching", question: "Associez la négation à sa signification.", pairs: [{ french: "ne...rien", english: "nothing / not...anything" }, { french: "ne...jamais", english: "never / not...ever" }, { french: "ne...plus", english: "no longer / not...anymore" }, { french: "ne...personne", english: "nobody / not...anyone" }, { french: "ne...que", english: "only" }], explanation: "French negative expressions wrap around the conjugated verb or auxiliary. Comparatives use plus/moins/aussi...que, and superlatives use le/la/les plus or le/la/les moins." },
    { id: "l24-e7", type: "multiple_choice", question: "Complétez : 'Ce restaurant est ____ que l'autre.' (meilleur)", options: ["meilleur", "mieux", "plus meilleur", "très bon"], correct_answer: "meilleur", explanation: "French negative expressions wrap around the conjugated verb or auxiliary. Comparatives use plus/moins/aussi...que, and superlatives use le/la/les plus or le/la/les moins." },
    { id: "l24-e8", type: "translation", question: "Traduisez : 'I have never been to Africa, but I only have two weeks of vacation.'", direction: "en_to_fr", correct_answer: ["Je ne suis jamais allé(e) en Afrique, mais je n'ai que deux semaines de vacances."], explanation: "French negative expressions wrap around the conjugated verb or auxiliary. Comparatives use plus/moins/aussi...que, and superlatives use le/la/les plus or le/la/les moins." },
    { id: "l24-e9", type: "speaking_prompt", question: "Comparez deux villes ou deux films en utilisant plus...que, moins...que et aussi...que.", model_answer: "Paris est plus grand que Lyon. Lyon est moins cher que Paris. Les deux villes sont aussi belles l'une que l'autre.", translation: "Paris is bigger than Lyon. Lyon is cheaper than Paris. Both cities are as beautiful as each other.", tip: "Do not say plus meilleur or plus mieux; meilleur and mieux already mean better." },
    { id: "l24-e10", type: "error_correction", question: "Corrigez les erreurs (meilleur/mieux, ni...ni, ou négation).", items: [{ incorrect: "Elle joue plus mieux que toi.", correct: "Elle joue mieux que toi.", explanation: "French negative expressions wrap around the conjugated verb or auxiliary. Comparatives use plus/moins/aussi...que, and superlatives use le/la/les plus or le/la/les moins." }, { incorrect: "Ce vin est plus meilleur que le premier.", correct: "Ce vin est meilleur que le premier.", explanation: "French negative expressions wrap around the conjugated verb or auxiliary. Comparatives use plus/moins/aussi...que, and superlatives use le/la/les plus or le/la/les moins." }, { incorrect: "Je ne veux ni un café ni un thé.", correct: "Je ne veux ni café ni thé.", explanation: "French negative expressions wrap around the conjugated verb or auxiliary. Comparatives use plus/moins/aussi...que, and superlatives use le/la/les plus or le/la/les moins." }, { incorrect: "Il parle bien le français mais il chante bon.", correct: "Il parle bien le français mais il chante bien.", explanation: "French negative expressions wrap around the conjugated verb or auxiliary. Comparatives use plus/moins/aussi...que, and superlatives use le/la/les plus or le/la/les moins." }] },
  ]
}

export default function Lesson24Page() {
  return (
    <ElementaryLessonLayout
      lessonData={lessonData}
      lessonNumber={24}
      prevHref="/lessons/elementary/23"
      prevLabel="Les Pronoms COI, Y et EN"
      nextHref="/lessons/elementary/25"
      nextLabel="Les Irréguliers Essentiels"
    />
  )
}
