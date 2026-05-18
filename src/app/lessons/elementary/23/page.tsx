'use client'

import ElementaryLessonLayout, { ElementaryLessonData } from '../../../../../components/lessons/ElementaryLessonLayout'

const lessonData: ElementaryLessonData = {
  id: 23,
  title: "Les Pronoms COI, Y et EN",
  level: "A2",
  description: "Master indirect object pronouns lui and leur, plus y and en, to replace repeated phrases naturally.",

  dialogue: {
    title: "Conseils de voyage",
    context: "Pauline prépare un voyage au Québec et demande des conseils à son ami québécois, Mathieu.",
    exchanges: [
      { speaker: "Pauline", french: "Mathieu, tu connais bien Montréal. Tu peux me donner des conseils ?", english: "Mathieu, you know Montreal well. Can you give me some advice?", pronunciation: "mah-TYUH, tu koh-NAY byan mohn-ray-AHL. tu puh muh doh-NAY day kohn-SAY?" },
      { speaker: "Mathieu", french: "Bien sûr ! Je lui en donne souvent, des conseils, à ma sœur.", english: "Of course! I often give her some, advice, to my sister.", pronunciation: "byan SEWR! zhuh lwee ahn DUN soo-VAHN, day kohn-SAY, ah mah SUR." },
      { speaker: "Pauline", french: "Tu y vas souvent, à Montréal ?", english: "Do you go there often, to Montreal?", pronunciation: "tu ee VAH soo-VAHN, ah mohn-ray-AHL?" },
      { speaker: "Mathieu", french: "Oui, j'y vais tous les étés. J'en reviens toujours avec des souvenirs.", english: "Yes, I go there every summer. I always come back from there with souvenirs.", pronunciation: "WEE, zhee VAY too layz ay-TAY. zhahn ruh-VYAHN too-ZHOOR ah-VEK day soo-vuh-NEER." },
      { speaker: "Pauline", french: "Et la poutine, tu en manges souvent ?", english: "And poutine, do you eat some often?", pronunciation: "ay lah poo-TEEN, tu ahn MAHNZH soo-VAHN?" },
      { speaker: "Mathieu", french: "J'en mange une fois par semaine. C'est mon plat préféré. Tu lui en parleras à ton retour.", english: "I eat some once a week. It's my favourite dish. You'll talk to her about it when you come back.", pronunciation: "zhahn MAHNZH ewn FWAH par suh-MEN. say mohn PLAH pray-fay-RAY. tu lwee ahn par-luh-RAH ah tohn ruh-TOOR." },
      { speaker: "Pauline", french: "Je pense à mes parents. Je leur enverrai des photos.", english: "I'm thinking about my parents. I'll send them photos.", pronunciation: "zhuh PAHNS ah may pah-RAHN. zhuh lur ahn-vay-RAY day foh-TOH." },
      { speaker: "Mathieu", french: "Tu leur écriras aussi ? Ils vont adorer.", english: "Will you write to them too? They'll love it.", pronunciation: "tu lur ay-kree-RAH oh-SEE? eel VOHN ah-doh-RAY." },
      { speaker: "Pauline", french: "Oui, je leur écrirai chaque semaine. Et toi, tu me répondras ?", english: "Yes, I'll write to them every week. And you, will you answer me?", pronunciation: "WEE, zhuh lur ay-kree-RAY shahk suh-MEN. ay TWAH, tu muh ray-pohn-DRAH?" },
      { speaker: "Mathieu", french: "Évidemment ! Je te répondrai toujours.", english: "Of course! I'll always answer you.", pronunciation: "ay-vee-dah-MAHN! zhuh tuh ray-pohn-DRAY too-ZHOOR." },
    ]
  },

  grammarPoints: [
    {
      title: "Les Pronoms COI : LUI et LEUR",
      explanation: "Lui and leur replace à + person: lui for one person, leur for more than one person.",
      examples: [
        "Je parle à Marie. → Je lui parle. (I speak to her.)",
        "Il téléphone à Paul. → Il lui téléphone. (He calls him.)",
        "Nous écrivons à nos parents. → Nous leur écrivons. (We write to them.)",
        "Elle donne un cadeau aux enfants. → Elle leur donne un cadeau. (She gives them a gift.)",
        "Je pense à mes vacances. → J'y pense. (I think about it — chose, pas personne)",
        "ME et TE peuvent être COI aussi : Il me parle. Je te téléphone."
      ]
    },
    {
      title: "Le Pronom Y",
      explanation: "Y replaces a place or an à + thing phrase. It normally goes before the conjugated verb.",
      examples: [
        "Je vais à Paris. → J'y vais. (I go there.)",
        "Elle habite en France. → Elle y habite. (She lives there.)",
        "Il est chez le médecin. → Il y est. (He is there.)",
        "Je pense à mon avenir. → J'y pense. (I think about it.)",
        "Tu t'intéresses à la politique ? → Tu t'y intéresses ? (Are you interested in it?)"
      ]
    },
    {
      title: "Le Pronom EN",
      explanation: "En replaces de + thing or a quantity. If a number is stated, the number often remains after the verb.",
      examples: [
        "Tu veux du café ? → Oui, j'en veux. (Yes, I want some.)",
        "Il a des enfants. → Il en a. (He has some.)",
        "J'ai trois frères. → J'en ai trois. (I have three of them.)",
        "Elle parle de son voyage. → Elle en parle. (She talks about it.)",
        "J'ai besoin de vacances. → J'en ai besoin. (I need some.)"
      ]
    },
    {
      title: "Ordre des Pronoms Multiples — La Cascade",
      explanation: "When multiple pronouns appear together, French follows a fixed order. At A2, recognizing the order is more important than overusing complex clusters.",
      examples: [
        "ORDRE STANDARD : me/te/se/nous/vous → le/la/les → lui/leur → y → en",
        "me + le : Il me le donne. (He gives it to me.) — Jamais *il le me donne.",
        "te + la : Je te la prête. (I lend it to you.) — La clé ? Je te la prête.",
        "le + lui : Je le lui explique. (I explain it to him/her.) — Jamais *je lui le explique.",
        "les + leur : Il les leur a envoyées. (He sent them to them.) — accord avec les = féminin pluriel → +es",
        "y + en : Il y en a beaucoup. (There are many / a lot of them.) — expression très fréquente",
        "IMPÉRATIF POSITIF — ordre inversé, COD avant COI : Donne-le-lui ! (Give it to him!) / Prends-en. / Vas-y.",
        "IMPÉRATIF NÉGATIF — ordre standard avant le verbe : Ne le lui donne pas. / N'en prends pas. / N'y va pas."
      ]
    }
  ],

  vocabulary: [
    { french: "lui", english: "to him / to her", category: "Pronom COI", example: "Je lui écris chaque semaine. (zhuh lwee ay-KREE shahk suh-MEN)" },
    { french: "leur", english: "to them", category: "Pronom COI", example: "Je leur donne mon adresse. (zhuh lur DUN mohn ah-DRES)" },
    { french: "y", english: "there / to it", category: "Pronom adverbial", example: "J'y vais demain. (zhee VAY duh-MAN)" },
    { french: "en", english: "some / of it / from there", category: "Pronom adverbial", example: "J'en veux deux. (zhahn VUH DUH)" },
    { french: "des conseils", english: "some advice", category: "Nom", example: "Tu peux me donner des conseils ? (tu puh muh doh-NAY day kohn-SAY?)" },
    { french: "la poutine", english: "poutine (Québec dish)", category: "Nourriture", example: "La poutine, j'en mange souvent. (lah poo-TEEN zhahn MAHNZH soo-VAHN)" },
    { french: "des souvenirs", english: "souvenirs / memories", category: "Nom", example: "J'en ai rapporté des souvenirs. (zhahn ay rah-por-TAY day soo-vuh-NEER)" },
    { french: "répondre (à)", english: "to answer (to)", category: "Verbe COI", example: "Je te réponds tout de suite. (zhuh tuh ray-POHN toot SWEET)" },
    { french: "s'intéresser (à)", english: "to be interested (in)", category: "Verbe COI", example: "Je m'y intéresse beaucoup. (zhuh mee an-tay-RES bo-KOO)" },
    { french: "avoir besoin (de)", english: "to need", category: "Verbe + de", example: "J'en ai vraiment besoin. (zhahn ay vray-MAHN buh-ZWAN)" },
    { french: "combien", english: "how many / how much", category: "Question", example: "Tu en veux combien ? (tu ahn VUH kohm-BYAHN?)" },
    { french: "un retour", english: "a return", category: "Nom", example: "Tu lui en parleras à ton retour. (tu lwee ahn par-luh-RAH ah tohn ruh-TOOR)" },
    { french: "une photo", english: "a photo", category: "Nom", example: "Je leur enverrai des photos. (zhuh lur ahn-vay-RAY day foh-TOH)" },
    { french: "un guide", english: "a guidebook / guide", category: "Nom", example: "Je lui ai acheté un guide. (zhuh lwee ay ash-TAY uh(n) GEED)" },
    { french: "rapporter", english: "to bring back", category: "Verbe", example: "J'en rapporte toujours un souvenir. (zhahn rah-PORT too-ZHOOR uh(n) soo-vuh-NEER)" },
    { french: "adorer", english: "to love", category: "Verbe", example: "Ils vont adorer Montréal. (eel VOHN ah-doh-RAY mohn-ray-AHL)" },
    { french: "évidemment", english: "obviously / of course", category: "Adverbe", example: "Évidemment, je te répondrai. (ay-vee-dah-MAHN, zhuh tuh ray-pohn-DRAY)" },
    { french: "au retour", english: "when back / on return", category: "Expression", example: "On en parlera au retour. (ohn zahn parl-RAH oh ruh-TOOR)" },
  ],

  culturalNotes: [
    { title: "Le Québec et la francophonie", content: "Le Québec est la seule province canadienne majoritairement francophone. Le français québécois a conservé des expressions du français du 17e siècle et a développé son propre accent et vocabulaire. Les Québécois sont très attachés à leur langue." },
    { title: "La poutine", content: "Plat emblématique du Québec, la poutine est composée de frites, de fromage en grains (cheddar frais) et de sauce brune. Créée dans les années 1950, elle est aujourd'hui un symbole de la cuisine québécoise et se décline en de nombreuses variantes gastronomiques." },
    { title: "Conseils entre francophones", content: "Demander des conseils à une personne locale est une pratique très courante avant un voyage. En français oral, les pronoms y et en reviennent souvent dans ce type d'échange : j'y vais, j'en veux, on en parle." },
  ],

  exercises: [
    { id: "l23-e1", type: "fill_blank", question: "Remplacez par un pronom COI : Je parle à *Marie*. → Je ____ parle.", correct_answer: "lui", explanation: "Lui and leur replace à + person. Y replaces places or à + thing. En replaces de + thing or quantities. The pronoun normally goes before the conjugated verb." },
    { id: "l23-e2", type: "fill_blank", question: "Remplacez par un pronom COI : Il téléphone à *ses parents*. → Il ____ téléphone.", correct_answer: "leur", explanation: "Lui and leur replace à + person. Y replaces places or à + thing. En replaces de + thing or quantities. The pronoun normally goes before the conjugated verb." },
    { id: "l23-e3", type: "fill_blank", question: "Remplacez par Y : Elle va *au cinéma*. → Elle ____ va.", correct_answer: "y", explanation: "Lui and leur replace à + person. Y replaces places or à + thing. En replaces de + thing or quantities. The pronoun normally goes before the conjugated verb." },
    { id: "l23-e4", type: "fill_blank", question: "Remplacez par EN : J'ai *trois* sœurs. → J'____ ai trois.", correct_answer: "en", explanation: "Lui and leur replace à + person. Y replaces places or à + thing. En replaces de + thing or quantities. The pronoun normally goes before the conjugated verb." },
    { id: "l23-e5", type: "multiple_choice", question: "Quel pronom pour 'Je pense à mon travail' ?", options: ["lui", "leur", "y", "en"], correct_answer: "y", explanation: "Lui and leur replace à + person. Y replaces places or à + thing. En replaces de + thing or quantities. The pronoun normally goes before the conjugated verb." },
    { id: "l23-e6", type: "transformation", question: "Remplacez avec Y ou EN.", instruction: "affirmative_to_negative", items: [{ original: "Je vais à la plage.", transformed: "J'y vais.", translation: "I go there." }, { original: "Elle a du chocolat.", transformed: "Elle en a.", translation: "She has some." }, { original: "Nous parlons de politique.", transformed: "Nous en parlons.", translation: "We talk about it." }], explanation: "Lui and leur replace à + person. Y replaces places or à + thing. En replaces de + thing or quantities. The pronoun normally goes before the conjugated verb." },
    { id: "l23-e7", type: "matching", question: "Associez le pronom à ce qu'il remplace.", pairs: [{ french: "lui", english: "à + personne (singulier)" }, { french: "leur", english: "à + personnes (pluriel)" }, { french: "y", english: "lieu / à + chose" }, { french: "en", english: "de + chose / quantité" }], explanation: "Lui and leur replace à + person. Y replaces places or à + thing. En replaces de + thing or quantities. The pronoun normally goes before the conjugated verb." },
    { id: "l23-e8", type: "translation", question: "Traduisez : 'I often speak to her. I give her advice and she thanks me.'", direction: "en_to_fr", correct_answer: ["Je lui parle souvent. Je lui donne des conseils et elle me remercie."], explanation: "Lui and leur replace à + person. Y replaces places or à + thing. En replaces de + thing or quantities. The pronoun normally goes before the conjugated verb." },
    { id: "l23-e9", type: "speaking_prompt", question: "Parlez d'un voyage futur en utilisant Y (2x), EN (1x) et LUI/LEUR (1x).", model_answer: "Je vais à Paris cet été. J'y vais avec ma sœur. Je lui ai acheté un guide. Elle est ravie. On en parlera au retour.", translation: "I'm going to Paris this summer. I'm going there with my sister. I bought her a guidebook. She's delighted. We'll talk about it when we get back.", tip: "Ask which preposition is being replaced: à often points to lui/leur or y, while de often points to en." },
    { id: "l23-e10", type: "error_correction", question: "Corrigez l'ordre ou le choix des pronoms.", items: [{ incorrect: "Il lui le donne.", correct: "Il le lui donne.", explanation: "Lui and leur replace à + person. Y replaces places or à + thing. En replaces de + thing or quantities. The pronoun normally goes before the conjugated verb." }, { incorrect: "Je te en parlerai.", correct: "Je t'en parlerai.", explanation: "Lui and leur replace à + person. Y replaces places or à + thing. En replaces de + thing or quantities. The pronoun normally goes before the conjugated verb." }, { incorrect: "Elle pense à sa mère. → Elle y pense.", correct: "Elle pense à sa mère. → Elle pense à elle.", explanation: "Lui and leur replace à + person. Y replaces places or à + thing. En replaces de + thing or quantities. The pronoun normally goes before the conjugated verb." }, { incorrect: "Donne-lui-le !", correct: "Donne-le-lui !", explanation: "Lui and leur replace à + person. Y replaces places or à + thing. En replaces de + thing or quantities. The pronoun normally goes before the conjugated verb." }] },
  ]
}

export default function Lesson23Page() {
  return (
    <ElementaryLessonLayout
      lessonData={lessonData}
      lessonNumber={23}
      prevHref="/lessons/elementary/22"
      prevLabel="Les Pronoms COD"
      nextHref="/lessons/elementary/24"
      nextLabel="La Négation et la Comparaison"
    />
  )
}
