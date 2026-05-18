'use client'

import ElementaryLessonLayout, { ElementaryLessonData } from '../../../../../components/lessons/ElementaryLessonLayout'

const lessonData: ElementaryLessonData = {
  id: 18,
  title: "Les Pronominaux au Passé Composé",
  level: "A2",
  description: "Learn pronominal verbs in the passé composé with être, including reflexive pronoun placement, negation, and agreement patterns.",

  dialogue: {
    title: "Retrouvailles après des mois",
    context: "Deux amies, Léa et Manon, se retrouvent après plusieurs mois sans se voir et racontent ce qui s'est passé.",
    exchanges: [
      { speaker: "Léa", french: "Manon ! Ça fait longtemps ! Qu'est-ce que tu es devenue ?", english: "Manon! It's been so long! What have you become?", pronunciation: "mah-NOHN! sah fay lohn-TAHN! kes-kuh tu ay duh-vuh-NEW?" },
      { speaker: "Manon", french: "Je me suis mariée en mars ! Et toi ?", english: "I got married in March! And you?", pronunciation: "zhuh muh swee mah-ree-YAY ahn MAHRS! ay TWAH?" },
      { speaker: "Léa", french: "Félicitations ! Moi, je me suis installée à Lyon.", english: "Congratulations! I moved to Lyon.", pronunciation: "fay-lee-see-tah-SYOHN! MWAH, zhuh muh swee zan-stah-LAY ah lee-OHN." },
      { speaker: "Manon", french: "Ah bon ? Tu t'es décidée finalement ! Et Paul, il s'est installé avec toi ?", english: "Oh really? You finally decided! And Paul, did he move with you?", pronunciation: "ah BOHN? tu tay day-see-DAY fee-nal-MAHN! ay POHL, eel say zan-stah-LAY ah-VEK TWAH?" },
      { speaker: "Léa", french: "Non, nous nous sommes disputés et nous nous sommes séparés.", english: "No, we argued and we separated.", pronunciation: "NOHN, noo noo sum dees-pew-TAY ay noo noo sum say-pah-RAY." },
      { speaker: "Manon", french: "Oh non, je suis désolée. Vous vous êtes réconciliés depuis ?", english: "Oh no, I'm sorry. Have you made up since?", pronunciation: "oh NOHN, zhuh swee day-zoh-LAY. voo voo zet ray-kohn-see-lee-YAY duh-PWEE?" },
      { speaker: "Léa", french: "Non, il ne s'est pas excusé. Mais je me suis bien adaptée à Lyon.", english: "No, he didn't apologise. But I've adapted well to Lyon.", pronunciation: "NOHN, eel nuh say pah zek-skew-ZAY. may zhuh muh swee byan ah-dap-TAY ah lee-OHN." },
      { speaker: "Manon", french: "Tu t'es fait des amis ?", english: "Did you make friends?", pronunciation: "tu tay FAY day zah-MEE?" },
      { speaker: "Léa", french: "Oui, je me suis inscrite à un cours de cuisine. Tout le monde s'est bien occupé de moi.", english: "Yes, I signed up for a cooking class. Everyone took good care of me.", pronunciation: "WEE, zhuh muh swee zan-SKREET ah uh(n) KOOR duh kwee-ZEEN. too luh MOHND say byan oh-kew-PAY duh MWAH." },
      { speaker: "Manon", french: "Je suis contente pour toi. Nous nous sommes promis de rester en contact, tu te souviens ?", english: "I'm happy for you. We promised each other to stay in touch, remember?", pronunciation: "zhuh swee kohn-TAHNT poor TWAH. noo noo sum proh-MEE duh res-TAY ahn kohn-TAKT, tu tuh soo-VYAHN?" },
      { speaker: "Léa", french: "Oui, je me suis souvenue de notre promesse. C'est pour ça que je t'ai appelée !", english: "Yes, I remembered our promise. That's why I called you!", pronunciation: "WEE, zhuh muh swee soo-vuh-NEW duh noh-truh proh-MES. say poor SAH kuh zhuh tay ah-puh-LAY!" },
      { speaker: "Manon", french: "Et tu t'es bien levée ce matin pour venir me voir !", english: "And you got up early this morning to come see me!", pronunciation: "ay tu tay byan luh-VAY suh mah-TAN poor vuh-NEER muh VWAHR!" },
    ]
  },

  grammarPoints: [
    {
      title: "Les Pronominaux au Passé Composé — Toujours Être",
      explanation: "Pronominal verbs always use être in the passé composé: je me suis levé, elle s’est préparée.",
      examples: [
        "SE LEVER : je me suis levé(e), tu t'es levé(e), il s'est levé, elle s'est levée, nous nous sommes levé(e)s, vous vous êtes levé(e)(s), ils se sont levés, elles se sont levées",
        "SE LAVER : je me suis lavé(e), tu t'es lavé(e), elle s'est lavée",
        "S'HABILLER : je me suis habillé(e), nous nous sommes habillé(e)s",
        "SE DÉPÊCHER : il s'est dépêché, elles se sont dépêchées",
        "SE SOUVENIR : je me suis souvenu(e), tu t'es souvenu(e)",
        "Négation : ne + pronom + être + pas + participe : Je ne me suis pas levé(e) tôt."
      ]
    },
    {
      title: "L'Accord du Participe Passé",
      explanation: "Agreement with pronominal verbs depends on the function of the reflexive pronoun. Direct reflexive pronouns can trigger agreement; indirect ones do not.",
      examples: [
        "Elle s'est lavée. (se = objet direct, accord féminin)",
        "Elle s'est lavé les mains. (les mains = objet direct après le verbe, pas d'accord avec se)",
        "Ils se sont rencontrés. (se = objet direct mutuel, accord masculin pluriel)",
        "Elles se sont parlé. (se = objet indirect, PAS d'accord)",
        "Nous nous sommes téléphoné. (se = objet indirect avec à, PAS d'accord)",
        "Règle pratique : si le verbe est suivi de 'à' + personne → pas d'accord. Sinon → accord."
      ]
    },
    {
      title: "Réciproques à Structure Indirecte — Jamais d'Accord",
      explanation: "Reciprocal verbs such as se parler and s’écrire have an indirect reflexive pronoun, so the past participle does not agree.",
      examples: [
        "SE PARLER (parler à) : Elles se sont parlé toute la nuit. ✓ (parlé, sans e)",
        "SE TÉLÉPHONER (téléphoner à) : Nous nous sommes téléphoné hier. ✓ (téléphoné, sans accord)",
        "SE SOURIRE (sourire à) : Ils se sont souri en se quittant. ✓ (souri, sans accord)",
        "SE RESSEMBLER (ressembler à) : Les deux sœurs se sont toujours ressemblé. ✓",
        "S'ÉCRIRE (écrire à) : Elles se sont écrit des lettres pendant des années. ✓ (écrit, sans e)",
        "SE DIRE (dire à) : Ils se sont dit au revoir. ✓ (dit, sans accord)",
        "SE DONNER (donner à) : Elles se sont donné rendez-vous à 15h. ✓ (donné, sans accord)",
        "ASTUCE : ces verbes se construisent tous avec 'à quelqu'un' → COI → pas d'accord. Testez : 'parler à qqn ?' → oui → jamais d'accord."
      ]
    },
    {
      title: "Verbes de Vie et Relations au Passé Composé",
      explanation: "Common relationship and life-event verbs often appear pronominally in the past, so they are useful for telling personal stories.",
      examples: [
        "SE MARIER → elle s'est mariée (she got married)",
        "SE DISPUTER → ils se sont disputés (they argued)",
        "SE RÉCONCILIER → elles se sont réconciliées (they made up)",
        "SE SÉPARER → nous nous sommes séparés (we separated)",
        "SE RENCONTRER → ils se sont rencontrés en 2020 (they met in 2020)",
        "S'INSTALLER → je me suis installé(e) à Paris (I settled/moved to Paris)"
      ]
    }
  ],

  vocabulary: [
    { french: "se marier", english: "to get married", category: "Vie/Relations", example: "Elle s'est mariée en juin. (el say mah-ree-YAY ahn zhwahn)" },
    { french: "se disputer", english: "to argue", category: "Vie/Relations", example: "Ils se sont disputés hier soir. (eel suh son dees-pew-TAY ee-AIR SWAHR)" },
    { french: "se réconcilier", english: "to make up / reconcile", category: "Vie/Relations", example: "Elles se sont réconciliées après une semaine. (el suh son ray-kohn-see-lee-YAY ah-PRAY ewn suh-MEN)" },
    { french: "se séparer", english: "to separate / break up", category: "Vie/Relations", example: "Ils se sont séparés l'année dernière. (eel suh son say-pah-RAY lah-NAY dair-NYAIR)" },
    { french: "se rencontrer", english: "to meet (each other)", category: "Vie/Relations", example: "Nous nous sommes rencontrés au travail. (noo noo sum rahn-kohn-TRAY oh trav-EYE)" },
    { french: "s'installer", english: "to settle / move in", category: "Vie/Relations", example: "Je me suis installé à Bordeaux. (zhuh muh swee zan-stah-LAY ah bor-DOH)" },
    { french: "se décider", english: "to make up one's mind", category: "Vie/Relations", example: "Tu t'es décidée ? (tu tay day-see-DAY?)" },
    { french: "s'inscrire", english: "to sign up / register", category: "Vie/Relations", example: "Je me suis inscrit au gymnase. (zhuh muh swee zan-SKREE oh zheem-NAHZ)" },
    { french: "s'occuper (de)", english: "to take care (of)", category: "Vie/Relations", example: "Elle s'est occupée des enfants. (el say toh-kew-PAY dayz ahn-FAHN)" },
    { french: "se promettre", english: "to promise (each other)", category: "Vie/Relations", example: "Ils se sont promis de s'écrire. (eel suh son proh-MEE duh say-KREER)" },
    { french: "s'adapter", english: "to adapt", category: "Vie/Relations", example: "Je me suis bien adapté. (zhuh muh swee byan ah-dap-TAY)" },
    { french: "s'excuser", english: "to apologise", category: "Vie/Relations", example: "Il ne s'est pas excusé. (eel nuh say pah zek-skew-ZAY)" },
    { french: "félicitations", english: "congratulations", category: "Expression", example: "Félicitations pour ton nouveau travail ! (fay-lee-see-tah-SYOHN poor tohn noo-VOH trav-EYE!)" },
    { french: "ça fait longtemps", english: "it's been a long time", category: "Expression", example: "Ça fait longtemps qu'on ne s'est pas vus ! (sah fay lohn-TAHN kohn nuh say pah VEW!)" },
    { french: "désolé(e)", english: "sorry", category: "Expression", example: "Je suis désolé d'apprendre ça. (zhuh swee day-zoh-LAY dah-PRAHN-druh SAH)" },
    { french: "s'entendre (bien/mal)", english: "to get along (well/badly)", category: "Vie/Relations", example: "Nous nous sommes toujours bien entendus. (noo noo sum too-ZHOOR byan ahn-tahn-DEW)" },
    { french: "se souvenir", english: "to remember", category: "Vie/Relations", example: "Elle s'est souvenue de la date. (el say soo-vuh-NEW duh lah DAT)" },
    { french: "se tromper", english: "to be mistaken", category: "Vie/Relations", example: "Je me suis trompé de porte. (zhuh muh swee trohm-PAY duh PORT)" },
  ],

  culturalNotes: [
    { title: "Le mariage en France", content: "Le mariage civil est obligatoire en France avant toute cérémonie religieuse. Il est célébré à la mairie par le maire ou un adjoint. Le PACS (Pacte Civil de Solidarité), créé en 1999, est une alternative populaire au mariage." },
    { title: "Lyon", content: "Troisième ville de France après Paris et Marseille, Lyon est la capitale de la gastronomie française. Située au confluent du Rhône et de la Saône, elle est célèbre pour ses bouchons (restaurants traditionnels), ses traboules (passages couverts) et sa Fête des Lumières le 8 décembre." },
    { title: "Les relations amicales en France", content: "Les amitiés françaises se construisent souvent lentement mais deviennent très profondes. Les Français distinguent clairement 'copains' (amis décontractés) et 'amis' (proches, intimes). Se réconcilier après une dispute est une étape importante de l'amitié à la française." },
  ],

  exercises: [
    { id: "l18-e1", type: "conjugation", question: "Conjuguez SE LEVER au passé composé (sujet féminin).", verb: "se lever (passé composé)", correct_answer: [{ pronoun: "je (f)", form: "me suis levée", pronunciation: "muh swee luh-VAY" }, { pronoun: "tu (f)", form: "t'es levée", pronunciation: "tay luh-VAY" }, { pronoun: "elle", form: "s'est levée", pronunciation: "say luh-VAY" }, { pronoun: "nous (f)", form: "nous sommes levées", pronunciation: "noo sum luh-VAY" }, { pronoun: "vous (f)", form: "vous êtes levées", pronunciation: "voo zet luh-VAY" }, { pronoun: "elles", form: "se sont levées", pronunciation: "suh son luh-VAY" }], explanation: "Pronominal verbs use être in the passé composé. Agreement depends on whether the reflexive pronoun functions as a direct or indirect object." },
    { id: "l18-e2", type: "fill_blank", question: "Complétez avec l'accord correct : Elle s'est ____ (laver).", correct_answer: "lavée", explanation: "Pronominal verbs use être in the passé composé. Agreement depends on whether the reflexive pronoun functions as a direct or indirect object." },
    { id: "l18-e3", type: "multiple_choice", question: "Quel auxiliaire pour les verbes pronominaux au passé composé ?", options: ["avoir", "être"], correct_answer: "être", explanation: "Pronominal verbs use être in the passé composé. Agreement depends on whether the reflexive pronoun functions as a direct or indirect object." },
    { id: "l18-e4", type: "fill_blank", question: "Complétez : Elles se sont ____ (parler) pendant deux heures. (Attention : se parler à → pas d'accord)", correct_answer: "parlé", explanation: "Pronominal verbs use être in the passé composé. Agreement depends on whether the reflexive pronoun functions as a direct or indirect object." },
    { id: "l18-e5", type: "multiple_choice", question: "Quel accord pour 'Elle s'est ____ les mains' (laver) ?", options: ["lavé", "lavée", "lavés", "lavées"], correct_answer: "lavé", explanation: "Pronominal verbs use être in the passé composé. Agreement depends on whether the reflexive pronoun functions as a direct or indirect object." },
    { id: "l18-e6", type: "transformation", question: "Mettez au passé composé à la forme négative.", instruction: "affirmative_to_negative", items: [{ original: "Je me lève.", transformed: "Je ne me suis pas levé(e).", translation: "I didn't get up." }, { original: "Il s'habille.", transformed: "Il ne s'est pas habillé.", translation: "He didn't get dressed." }, { original: "Nous nous excusons.", transformed: "Nous ne nous sommes pas excusé(e)s.", translation: "We didn't apologise." }], explanation: "Pronominal verbs use être in the passé composé. Agreement depends on whether the reflexive pronoun functions as a direct or indirect object." },
    { id: "l18-e7", type: "matching", question: "Associez l'infinitif au participe passé au masculin singulier.", pairs: [{ french: "se lever", english: "levé" }, { french: "se marier", english: "marié" }, { french: "s'installer", english: "installé" }, { french: "se souvenir", english: "souvenu" }, { french: "se disputer", english: "disputé" }, { french: "s'inscrire", english: "inscrit" }], explanation: "Pronominal verbs use être in the passé composé. Agreement depends on whether the reflexive pronoun functions as a direct or indirect object." },
    { id: "l18-e8", type: "translation", question: "Traduisez : 'She got married, moved to Lyon, and made many friends.'", direction: "en_to_fr", correct_answer: ["Elle s'est mariée, elle s'est installée à Lyon et elle s'est fait beaucoup d'amis."], explanation: "Pronominal verbs use être in the passé composé. Agreement depends on whether the reflexive pronoun functions as a direct or indirect object." },
    { id: "l18-e9", type: "speaking_prompt", question: "Racontez un événement important de votre vie en utilisant 3 verbes pronominaux au passé composé.", model_answer: "L'année dernière, je me suis installée à Paris. Je me suis inscrite à l'université. Je me suis fait beaucoup d'amis.", translation: "Last year, I moved to Paris. I enrolled at university. I made many friends.", tip: "In the passé composé, place the reflexive pronoun before être: je me suis, tu t’es, elle s’est." },
    { id: "l18-e10", type: "error_correction", question: "Corrigez l'accord du participe passé (ou confirmez qu'il est correct).", items: [{ incorrect: "Elles se sont parlées pendant des heures.", correct: "Elles se sont parlé pendant des heures.", explanation: "Pronominal verbs use être in the passé composé. Agreement depends on whether the reflexive pronoun functions as a direct or indirect object." }, { incorrect: "Ils se sont souri timidement.", correct: "Ils se sont souri timidement. ✓", explanation: "Pronominal verbs use être in the passé composé. Agreement depends on whether the reflexive pronoun functions as a direct or indirect object." }, { incorrect: "Elles se sont écrites tous les mois.", correct: "Elles se sont écrit tous les mois.", explanation: "Pronominal verbs use être in the passé composé. Agreement depends on whether the reflexive pronoun functions as a direct or indirect object." }, { incorrect: "Nous nous sommes rencontrés à Lyon.", correct: "Nous nous sommes rencontrés à Lyon. ✓", explanation: "Pronominal verbs use être in the passé composé. Agreement depends on whether the reflexive pronoun functions as a direct or indirect object." }, { incorrect: "Elle s'est lavée les cheveux.", correct: "Elle s'est lavé les cheveux.", explanation: "Pronominal verbs use être in the passé composé. Agreement depends on whether the reflexive pronoun functions as a direct or indirect object." }] },
  ]
}

export default function Lesson18Page() {
  return (
    <ElementaryLessonLayout
      lessonData={lessonData}
      lessonNumber={18}
      prevHref="/lessons/elementary/17"
      prevLabel="Les Verbes Pronominaux"
      nextHref="/lessons/elementary/19"
      nextLabel="L'Imparfait"
    />
  )
}
