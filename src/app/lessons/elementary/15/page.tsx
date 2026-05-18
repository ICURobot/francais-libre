'use client'

import ElementaryLessonLayout, { ElementaryLessonData } from '../../../../../components/lessons/ElementaryLessonLayout'

const lessonData: ElementaryLessonData = {
  id: 15,
  title: "Le Passé Composé III",
  level: "A2",
  description: "Learn the passé composé with être for the main movement and change-of-state verbs. Master past participle agreement with the subject and know when certain verbs switch to avoir.",

  dialogue: {
    title: "Une journée de voyage chaotique",
    context: "Camille et Thomas racontent une journée de voyage désastreuse, avec des trains manqués et des retards.",
    exchanges: [
      { speaker: "Camille", french: "Quelle journée, Thomas ! Je suis arrivée à la gare à 7h, mais le train est déjà parti !", english: "What a day, Thomas! I arrived at the station at 7am, but the train has already left!", pronunciation: "kel zhoor-NAY, toh-MAH! zhuh swee ah-ree-VAY ah lah GAHR ah set-ur, may luh TRAN ay day-ZHAH par-TEE!" },
      { speaker: "Thomas", french: "Moi aussi, je suis arrivé en retard. Je suis monté dans le mauvais train !", english: "Me too, I arrived late. I got on the wrong train!", pronunciation: "MWAH oh-SEE, zhuh swee ah-ree-VAY ahn ruh-TAHR. zhuh swee mohn-TAY dah(n) luh moh-VAY TRAN!" },
      { speaker: "Camille", french: "Non ! Tu es descendu où ?", english: "No! Where did you get off?", pronunciation: "NOHN! tu ay day-sahn-DEW OO?" },
      { speaker: "Thomas", french: "Je suis descendu à Versailles. Heureusement, je suis retourné à Paris rapidement.", english: "I got off at Versailles. Luckily, I returned to Paris quickly.", pronunciation: "zhuh swee day-sahn-DEW ah vair-SEYE. ur-uhz-MAHN, zhuh swee ruh-toor-NAY ah pah-REE rah-peed-MAHN." },
      { speaker: "Camille", french: "Moi, je suis restée sur le quai pendant une heure. Et puis je suis allée au café.", english: "I stayed on the platform for an hour. And then I went to the café.", pronunciation: "MWAH, zhuh swee res-TAY sewr luh KAY pahn-DAHN ewn UR. ay PWEE zhuh swee ah-LAY oh kah-FAY." },
      { speaker: "Thomas", french: "Tu es née à Paris, non ? Tu connais bien les gares !", english: "You were born in Paris, right? You know the stations well!", pronunciation: "tu ay NAY ah pah-REE, NOHN? tu koh-NAY byan lay GAHR!" },
      { speaker: "Camille", french: "Je suis née à Lyon, pas à Paris ! Bref, nous sommes enfin arrivés. C'est l'essentiel.", english: "I was born in Lyon, not in Paris! Anyway, we finally arrived. That's what matters.", pronunciation: "zhuh swee NAY ah lee-OHN, pah ah pah-REE! BREHF, noo sum ahn-FAN ah-ree-VAY. say leh-sahn-SYEL." },
      { speaker: "Thomas", french: "Tu es venue en métro ou à pied ?", english: "Did you come by metro or on foot?", pronunciation: "tu ay vuh-NEW ahn may-TROH oo ah PYAY?" },
      { speaker: "Camille", french: "Je suis venue à pied. Et toi, tu es passé par le bureau ?", english: "I came on foot. And you, did you pass by the office?", pronunciation: "zhuh swee vuh-NEW ah PYAY. ay TWAH, tu ay pah-SAY par luh bew-ROH?" },
      { speaker: "Thomas", french: "Oui, je suis passé au bureau. Ils sont tous déjà partis en vacances.", english: "Yes, I passed by the office. They've all already left on holiday.", pronunciation: "WEE, zhuh swee pah-SAY oh bew-ROH. eel son too day-ZHAH par-TEE ahn vah-KAHNS." },
    ]
  },

  grammarPoints: [
    {
      title: "Les 16 Verbes Être — DR MRS VANDERTRAMP",
      explanation: "These movement or change-of-state verbs use être in the passé composé, and their past participles agree with the subject.",
      examples: [
        "ALLER → Je suis allé(e) au cinéma.",
        "VENIR → Elle est venue hier.",
        "ARRIVER → Nous sommes arrivés à l'heure.",
        "PARTIR → Ils sont partis tôt.",
        "ENTRER → Tu es entré(e) sans frapper.",
        "SORTIR → Vous êtes sortis ensemble.",
        "NAÎTRE → Je suis né(e) en France.",
        "MOURIR → Il est mort en 1980.",
        "RESTER → Elle est restée à la maison.",
        "TOMBER → Je suis tombé(e) dans la rue.",
        "RETOURNER → Nous sommes retournés au travail.",
        "MONTER → Tu es monté(e) au dernier étage.",
        "DESCENDRE → Vous êtes descendu(e)(s) à pied.",
        "PASSER → Je suis passé(e) par Lyon.",
        "DEVENIR → Elle est devenue médecin.",
        "REVENIR → Ils sont revenus hier soir."
      ]
    },
    {
      title: "L'Accord du Participe Passé avec Être",
      explanation: "With être, the past participle agrees with the subject: add -e for feminine, -s for plural, and -es for feminine plural.",
      examples: [
        "Il est allé → masculin singulier, pas de changement",
        "Elle est allée → ajoute -e pour le féminin",
        "Ils sont allés → ajoute -s pour le masculin pluriel",
        "Elles sont allées → ajoute -es pour le féminin pluriel",
        "Je (femme) suis partie → accord avec le sujet féminin",
        "Nous (mixte) sommes arrivés → masculin pluriel par défaut"
      ]
    },
    {
      title: "La Négation avec l'Auxiliaire Être",
      explanation: "Negation with être follows the same compound-tense pattern: ne + être + pas + past participle.",
      examples: [
        "Je ne suis pas allé(e) au travail.",
        "Tu n'es pas venu(e) à la fête.",
        "Il n'est pas arrivé à l'heure.",
        "Elle n'est pas restée longtemps.",
        "Nous ne sommes pas partis en vacances."
      ]
    },
    {
      title: "Six Verbes à Double Auxiliaire : Être ou Avoir ?",
      explanation: "Some movement verbs use être when intransitive and avoir when they take a direct object. If you can ask “what?” after the verb, avoir is usually needed.",
      examples: [
        "MONTER intrans. → être : Il est monté au grenier. (He went up to the attic.)",
        "MONTER trans. → avoir : Il a monté les valises. (He carried the suitcases up.) [quoi ? les valises]",
        "DESCENDRE intrans. → être : Elle est descendue du train. (She got off the train.)",
        "DESCENDRE trans. → avoir : Il a descendu le carton. (He brought the box down.) [quoi ? le carton]",
        "SORTIR intrans. → être : Je suis sorti(e) à 20h. (I went out at 8pm.)",
        "SORTIR trans. → avoir : Elle a sorti le chien. (She took the dog out.) [quoi ? le chien]",
        "RENTRER intrans. → être : Nous sommes rentré(e)s tard. (We came home late.)",
        "RENTRER trans. → avoir : Il a rentré la voiture. (He put the car in.) [quoi ? la voiture]",
        "PASSER intrans. → être : Je suis passé(e) par Lyon. (I passed through Lyon.)",
        "PASSER trans. → avoir : J'ai passé deux heures à attendre. (I spent two hours waiting.) [quoi ? deux heures]"
      ]
    }
  ],

  vocabulary: [
    { french: "aller", english: "to go", category: "Verbe être", example: "Je suis allé au marché. → allé (ah-LAY)" },
    { french: "venir", english: "to come", category: "Verbe être", example: "Tu es venu à quelle heure ? → venu (vuh-NEW)" },
    { french: "arriver", english: "to arrive", category: "Verbe être", example: "Elle est arrivée en retard. → arrivé (ah-ree-VAY)" },
    { french: "partir", english: "to leave", category: "Verbe être", example: "Il est parti à 8h. → parti (par-TEE)" },
    { french: "entrer", english: "to enter", category: "Verbe être", example: "Nous sommes entrés dans la salle. → entré (ahn-TRAY)" },
    { french: "sortir", english: "to go out", category: "Verbe être", example: "Vous êtes sortis hier soir ? → sorti (sor-TEE)" },
    { french: "monter", english: "to go up", category: "Verbe être", example: "Je suis monté au premier étage. → monté (mohn-TAY)" },
    { french: "descendre", english: "to go down / get off", category: "Verbe être", example: "Tu es descendu du train. → descendu (day-sahn-DEW)" },
    { french: "naître", english: "to be born", category: "Verbe être", example: "Je suis né à Marseille. → né (NAY)" },
    { french: "mourir", english: "to die", category: "Verbe être", example: "Il est mort en 1945. → mort (MOR)" },
    { french: "rester", english: "to stay", category: "Verbe être", example: "Elle est restée chez elle. → resté (res-TAY)" },
    { french: "tomber", english: "to fall", category: "Verbe être", example: "Je suis tombé dans l'escalier. → tombé (tohm-BAY)" },
    { french: "retourner", english: "to return / go back", category: "Verbe être", example: "Il est retourné au bureau. → retourné (ruh-toor-NAY)" },
    { french: "passer", english: "to pass by", category: "Verbe être", example: "Je suis passé par la boulangerie. → passé (pah-SAY) — être seulement intransitif" },
    { french: "devenir", english: "to become", category: "Verbe être", example: "Elle est devenue avocate. → devenu (duh-vuh-NEW)" },
    { french: "revenir", english: "to come back", category: "Verbe être", example: "Ils sont revenus dimanche. → revenu (ruh-vuh-NEW)" },
    { french: "à l'heure", english: "on time", category: "Expression", example: "Le train est arrivé à l'heure. (ah LUR)" },
    { french: "en retard", english: "late", category: "Expression", example: "Je suis arrivé en retard. (ahn ruh-TAHR)" },
    { french: "tôt", english: "early", category: "Expression", example: "Elle est partie tôt ce matin. (TOH)" },
    { french: "tard", english: "late", category: "Expression", example: "Nous sommes rentrés tard. (TAHR)" },
    { french: "soudain", english: "suddenly", category: "Expression", example: "Soudain, il est tombé. (soo-DAN)" },
    { french: "finalement", english: "finally", category: "Expression", example: "Finalement, je suis resté à la maison. (fee-nal-MAHN)" },
  ],

  culturalNotes: [
    { title: "Les gares parisiennes", content: "Paris compte six grandes gares ferroviaires, chacune desservant une région différente : Gare du Nord (Nord, Eurostar), Gare de l'Est (Est, Allemagne), Gare de Lyon (Sud-Est), Gare Montparnasse (Ouest), Gare d'Austerlitz (Sud-Ouest) et Gare Saint-Lazare (Normandie)." },
    { title: "La ponctualité en France", content: "Dans le monde professionnel, arriver avec 5-10 minutes de retard est généralement toléré. Pour un dîner chez des amis, le 'quart d'heure de politesse' (15 minutes de retard) est une tradition pour laisser à l'hôte le temps de se préparer." },
    { title: "Versailles", content: "Située à 20 km de Paris, Versailles est mondialement connue pour son château, résidence des rois Louis XIV, XV et XVI. La ville compte environ 85 000 habitants et reste un symbole du patrimoine architectural français." },
  ],

  exercises: [
    { id: "l15-e1", type: "fill_blank", question: "Complétez avec l'accord correct : Marie est ____ (aller) au supermarché.", correct_answer: "allée", explanation: "These verbs use être in the passé composé, so the past participle agrees with the subject in gender and number. Some movement verbs use avoir when they take a direct object." },
    { id: "l15-e2", type: "fill_blank", question: "Complétez avec l'accord correct : Pierre et Paul sont ____ (partir) ensemble.", correct_answer: "partis", explanation: "These verbs use être in the passé composé, so the past participle agrees with the subject in gender and number. Some movement verbs use avoir when they take a direct object." },
    { id: "l15-e3", type: "multiple_choice", question: "Quel auxiliaire pour 'arriver' au passé composé ?", options: ["avoir", "être"], correct_answer: "être", explanation: "These verbs use être in the passé composé, so the past participle agrees with the subject in gender and number. Some movement verbs use avoir when they take a direct object." },
    { id: "l15-e4", type: "transformation", question: "Transformez au passé composé avec être.", instruction: "affirmative_to_negative", items: [{ original: "Je (aller) au cinéma.", transformed: "Je suis allé(e) au cinéma.", translation: "I went to the cinema." }, { original: "Elle (venir) à la fête.", transformed: "Elle est venue à la fête.", translation: "She came to the party." }, { original: "Ils (partir) en vacances.", transformed: "Ils sont partis en vacances.", translation: "They left on holiday." }, { original: "Nous (rester) à l'hôtel.", transformed: "Nous sommes resté(e)s à l'hôtel.", translation: "We stayed at the hotel." }], explanation: "These verbs use être in the passé composé, so the past participle agrees with the subject in gender and number. Some movement verbs use avoir when they take a direct object." },
    { id: "l15-e5", type: "multiple_choice", question: "Quel accord pour 'Elles sont ____ (monter)' ?", options: ["monté", "montée", "montés", "montées"], correct_answer: "montées", explanation: "These verbs use être in the passé composé, so the past participle agrees with the subject in gender and number. Some movement verbs use avoir when they take a direct object." },
    { id: "l15-e6", type: "fill_blank", question: "Complétez : Elles ne sont pas ____ (venir) à la réunion.", correct_answer: "venues", explanation: "These verbs use être in the passé composé, so the past participle agrees with the subject in gender and number. Some movement verbs use avoir when they take a direct object." },
    { id: "l15-e7", type: "matching", question: "Associez le verbe être au participe passé correct.", pairs: [{ french: "aller", english: "allé(e)(s)" }, { french: "venir", english: "venu(e)(s)" }, { french: "naître", english: "né(e)(s)" }, { french: "mourir", english: "mort(e)(s)" }, { french: "partir", english: "parti(e)(s)" }, { french: "tomber", english: "tombé(e)(s)" }, { french: "devenir", english: "devenu(e)(s)" }, { french: "rester", english: "resté(e)(s)" }], explanation: "These verbs use être in the passé composé, so the past participle agrees with the subject in gender and number. Some movement verbs use avoir when they take a direct object." },
    { id: "l15-e8", type: "translation", question: "Traduisez : 'She was born in Lyon and she stayed in Lyon for 20 years.'", direction: "en_to_fr", correct_answer: ["Elle est née à Lyon et elle est restée à Lyon pendant 20 ans."], explanation: "These verbs use être in the passé composé, so the past participle agrees with the subject in gender and number. Some movement verbs use avoir when they take a direct object." },
    { id: "l15-e9", type: "speaking_prompt", question: "Racontez un voyage en utilisant 3 verbes être au passé composé.", model_answer: "Samedi, je suis allée au parc. Je suis partie à 10h et je suis arrivée à 10h30. Je suis restée deux heures.", translation: "On Saturday, I went to the park. I left at 10 and arrived at 10:30. I stayed for two hours.", tip: "With être, always ask who the subject is before writing the past participle ending." },
    {
      id: "l15-e10",
      type: "error_correction",
      question: "Ces phrases contiennent une erreur d'auxiliaire (être/avoir). Corrigez-les.",
      items: [
        { incorrect: "Il a monté au deuxième étage.", correct: "Il est monté au deuxième étage.", explanation: "These verbs use être in the passé composé, so the past participle agrees with the subject in gender and number. Some movement verbs use avoir when they take a direct object." },
        { incorrect: "Il est monté les valises.", correct: "Il a monté les valises.", explanation: "These verbs use être in the passé composé, so the past participle agrees with the subject in gender and number. Some movement verbs use avoir when they take a direct object." },
        { incorrect: "Elle est sorti le chien ce matin.", correct: "Elle a sorti le chien ce matin.", explanation: "These verbs use être in the passé composé, so the past participle agrees with the subject in gender and number. Some movement verbs use avoir when they take a direct object." },
        { incorrect: "J'ai sorti à 19h pour dîner.", correct: "Je suis sorti(e) à 19h pour dîner.", explanation: "These verbs use être in the passé composé, so the past participle agrees with the subject in gender and number. Some movement verbs use avoir when they take a direct object." },
        { incorrect: "Nous sommes passé deux heures au musée.", correct: "Nous avons passé deux heures au musée.", explanation: "These verbs use être in the passé composé, so the past participle agrees with the subject in gender and number. Some movement verbs use avoir when they take a direct object." }
      ]
    },
  ]
}

export default function Lesson15Page() {
  return (
    <ElementaryLessonLayout
      lessonData={lessonData}
      lessonNumber={15}
      prevHref="/lessons/elementary/14"
      prevLabel="Passé Composé II"
      nextHref="/lessons/elementary/16"
      nextLabel="Verbes en -ir et -re"
    />
  )
}
