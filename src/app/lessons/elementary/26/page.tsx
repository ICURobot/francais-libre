'use client'

import ElementaryLessonLayout, { ElementaryLessonData } from '../../../../../components/lessons/ElementaryLessonLayout'

const lessonData: ElementaryLessonData = {
  id: 26,
  title: "Consolidation A2",
  level: "A2",
  description: "Consolidate the full A2 system by combining past tenses, pronouns, future forms, comparisons, negation, and irregular verbs in connected communication.",

  dialogue: {
    title: "Organiser un échange francophone",
    context: "Élise et Marc préparent une rencontre entre apprenants de français et invités francophones.",
    exchanges: [
      { speaker: "Élise", french: "Marc, tu as fini le programme pour l'échange de samedi ?", english: "Marc, have you finished the program for Saturday's exchange?", pronunciation: "mark, tu ah fee-NEE luh proh-GRAM poor lay-SHAHNZH duh sam-DEE?" },
      { speaker: "Marc", french: "Oui, je l'ai terminé hier soir pendant que tu préparais les invitations.", english: "Yes, I finished it last night while you were preparing the invitations.", pronunciation: "WEE, zhuh lay tair-mee-NAY ee-YAIR SWAHR pahn-DAHN kuh tu pray-pah-RAY lay zan-vee-tah-SYOHN." },
      { speaker: "Élise", french: "Parfait. Tu les as envoyées aux invités ?", english: "Perfect. Did you send them to the guests?", pronunciation: "par-FAY. tu lay zah ahn-vwah-YAY oh zan-vee-TAY?" },
      { speaker: "Marc", french: "Oui, je leur ai envoyé un message et j'en ai reçu dix réponses.", english: "Yes, I sent them a message and I received ten replies.", pronunciation: "WEE, zhuh lur ay ahn-vwah-YAY uh(n) may-SAHZH ay zhahn ay ruh-SEW dee ray-POHNS." },
      { speaker: "Élise", french: "Quand nous avons commencé ce projet, personne ne connaissait la salle.", english: "When we started this project, nobody knew the room.", pronunciation: "kahn noo zah-VOHN koh-mahn-SAY suh proh-ZHAY, pair-SUN nuh koh-nay-SAY lah SAL." },
      { speaker: "Marc", french: "Oui, et maintenant tout le monde y va facilement.", english: "Yes, and now everyone goes there easily.", pronunciation: "WEE, ay mat-NAHN too luh MOHND ee vah fah-seel-MAHN." },
      { speaker: "Élise", french: "La salle est plus grande que l'ancienne et moins chère que le théâtre.", english: "The room is bigger than the old one and cheaper than the theater.", pronunciation: "lah SAL ay plew GRAHND kuh lahn-SYEN ay mwahn SHAIR kuh luh tay-AH-truh." },
      { speaker: "Marc", french: "C'est la meilleure option. En plus, on n'a rien payé pour le matériel.", english: "It's the best option. Plus, we didn't pay anything for the equipment.", pronunciation: "say lah may-YUR op-SYOHN. ahn PLEW, ohn nah ree-AHN pay-YAY poor luh mah-tay-RYEL." },
      { speaker: "Élise", french: "Samedi, les participants arriveront à 10h et ils se présenteront en petits groupes.", english: "Saturday, the participants will arrive at 10 and introduce themselves in small groups.", pronunciation: "sam-DEE, lay par-tee-see-PAHN zah-ree-vuh-ROHN ah dee-ZUR ay eel suh pray-zahn-tuh-ROHN ahn puh-TEE GROOP." },
      { speaker: "Marc", french: "Après, ils liront un court texte et ils en discuteront avec un invité.", english: "Afterward, they'll read a short text and discuss it with a guest.", pronunciation: "ah-PRAY, eel lee-ROHN uh(n) koor TEKST ay eel zahn dees-kew-tuh-ROHN ah-VEK uh(n) zan-vee-TAY." },
      { speaker: "Élise", french: "Si quelqu'un ne comprend pas, nous lui expliquerons doucement.", english: "If someone doesn't understand, we'll explain it to them gently.", pronunciation: "see kel-KUN nuh kohm-PRAHN pah, noo lwee zeks-plee-kuh-ROHN doos-MAHN." },
      { speaker: "Marc", french: "Et les débutants ? Ils ont peur de parler.", english: "And the beginners? They're afraid to speak.", pronunciation: "ay lay day-bew-TAHN? eel zohn PUR duh par-LAY." },
      { speaker: "Élise", french: "On leur dira que les erreurs sont normales et qu'ils peuvent recommencer.", english: "We'll tell them that mistakes are normal and that they can start again.", pronunciation: "ohn lur dee-RAH kuh layz air-UR sohn nor-MAL ay keel PUV ruh-koh-mahn-SAY." },
      { speaker: "Marc", french: "Après l'activité, on écrira un résumé et on le mettra sur le site.", english: "After the activity, we'll write a summary and put it on the site.", pronunciation: "ah-PRAY lak-tee-vee-TAY, ohn ay-kree-RAH uh(n) ray-zew-MAY ay ohn luh met-RAH sewr luh SEET." },
      { speaker: "Élise", french: "Très bien. Ce sera notre événement le plus utile de l'année.", english: "Very good. It will be our most useful event of the year.", pronunciation: "tray byan. suh suh-RAH noh-truh ay-ven-MAHN luh plew zew-TEEL duh lah-NAY." },
    ]
  },

  grammarPoints: [
    {
      title: "Raconter au Passé",
      explanation: "An A2 narrative combines passé composé for completed events and imparfait for context, habits, and descriptions.",
      examples: [
        "Contexte : Quand nous préparions la salle, il pleuvait.",
        "Événement : Les invités sont arrivés à 10h.",
        "Combinaison : Je lisais le programme quand Marc m'a appelé.",
        "Habitude : Avant, personne ne venait aux ateliers.",
        "Résultat : Cette année, vingt personnes se sont inscrites."
      ]
    },
    {
      title: "Pronoms et Cohésion",
      explanation: "Pronouns make French more cohesive by replacing repeated direct objects, indirect objects, places, de-phrases, and quantities.",
      examples: [
        "COD : J'ai envoyé les invitations → Je les ai envoyées.",
        "COI : J'ai écrit aux invités → Je leur ai écrit.",
        "Y : Tout le monde va à la salle → Tout le monde y va.",
        "EN : J'ai reçu dix réponses → J'en ai reçu dix.",
        "Ordre au passé composé : Je les ai envoyées ; je leur ai parlé."
      ]
    },
    {
      title: "Planifier, Comparer, Nuancer",
      explanation: "Future forms, comparisons, superlatives, and extended negatives let you plan and express more nuanced opinions.",
      examples: [
        "Futur : Les participants arriveront à 10h.",
        "Comparatif : La salle est plus grande que l'ancienne.",
        "Superlatif : C'est la meilleure option.",
        "Négation : Nous n'avons rien payé.",
        "Synthèse : Ce sera l'événement le plus utile de l'année."
      ]
    },
    {
      title: "Bilan A2 — Les Dix Pièges Décisifs",
      explanation: "These are the highest-value A2 error patterns: auxiliaries, agreement, pronouns, tense choice, si clauses, negation, comparisons, and key irregular verbs.",
      examples: [
        "1. AUXILIAIRE — être ou avoir ? Vérifiez : maison DR. MRS VAN DER TRAMP + tous les pronominaux → être. Sinon → avoir.",
        "2. ACCORD AVEC ÊTRE — s'accorde avec le sujet : Elle est partie. Ils se sont levés.",
        "3. ACCORD AVEC AVOIR + COD ANTÉPOSÉ — Les lettres qu'il a écrites. (que = les lettres, fém. plur.)",
        "4. JAMAIS D'ACCORD AVEC EN — Des réponses ? J'en ai reçu. (pas d'accord, jamais).",
        "5. PC vs IMPARFAIT — événement terminé → PC. Contexte/habitude/état → imparfait. Pendant que → imparfait.",
        "6. SAVOIR vs CONNAÎTRE — savoir + infinitif/fait. Connaître + personne/lieu/chose familière.",
        "7. MEILLEUR vs MIEUX — meilleur = adjectif (bon → meilleur). Mieux = adverbe (bien → mieux). Jamais plus meilleur / plus mieux.",
        "8. SI + PRÉSENT → jamais de futur dans la proposition avec si. Si tu viens (pas *si tu viendras).",
        "9. NI...NI sans article indéfini — Je ne veux ni café ni thé. (pas *ni un café ni un thé)",
        "10. ORDRE DES PRONOMS — me/te/nous/vous → le/la/les → lui/leur → y → en. Impératif positif : COD avant COI : Donne-le-lui."
      ]
    }
  ],

  vocabulary: [
    { french: "un échange", english: "an exchange", category: "Événement", example: "Nous organisons un échange samedi. (noo zor-gah-nee-ZOHN uh(n) nay-SHAHNZH sam-DEE)" },
    { french: "un invité / une invitée", english: "a guest", category: "Événement", example: "Les invités arriveront à 10h. (lay zan-vee-TAY zah-ree-vuh-ROHN ah dee-ZUR)" },
    { french: "une invitation", english: "an invitation", category: "Événement", example: "Je les ai envoyées hier. (zhuh lay zay ahn-vwah-YAY ee-YAIR)" },
    { french: "un participant", english: "a participant", category: "Événement", example: "Chaque participant parle deux minutes. (shahk par-tee-see-PAHN parl duh mee-NEWT)" },
    { french: "une salle", english: "a room / venue", category: "Lieu", example: "La salle est grande. (lah SAL ay GRAHND)" },
    { french: "le matériel", english: "equipment", category: "Nom", example: "Nous n'avons rien payé pour le matériel. (noo nah-VOHN ree-AHN pay-YAY poor luh mah-tay-RYEL)" },
    { french: "un résumé", english: "a summary", category: "Nom", example: "On écrira un résumé. (ohn ay-kree-RAH uh(n) ray-zew-MAY)" },
    { french: "un site", english: "a website", category: "Nom", example: "Le résumé sera sur le site. (luh ray-zew-MAY suh-RAH sewr luh SEET)" },
    { french: "terminer", english: "to finish", category: "Verbe", example: "J'ai terminé le programme. (zhay tair-mee-NAY luh proh-GRAM)" },
    { french: "envoyer", english: "to send", category: "Verbe", example: "Elle leur a envoyé un message. (el lur ah ahn-vwah-YAY uh(n) may-SAHZH)" },
    { french: "recevoir", english: "to receive", category: "Verbe", example: "J'en ai reçu dix. (zhahn ay ruh-SEW dees)" },
    { french: "commencer", english: "to begin", category: "Verbe", example: "Nous avons commencé tôt. (noo zah-VOHN koh-mahn-SAY TOH)" },
    { french: "se présenter", english: "to introduce oneself", category: "Verbe pronominal", example: "Ils se présenteront. (eel suh pray-zahn-tuh-ROHN)" },
    { french: "discuter de", english: "to discuss", category: "Verbe", example: "Ils en discuteront. (eel zahn dees-kew-tuh-ROHN)" },
    { french: "expliquer", english: "to explain", category: "Verbe", example: "Nous lui expliquerons. (noo lwee zeks-plee-kuh-ROHN)" },
    { french: "recommencer", english: "to start again", category: "Verbe", example: "Tu peux recommencer. (tu puh ruh-koh-mahn-SAY)" },
    { french: "utile", english: "useful", category: "Adjectif", example: "C'est très utile. (say tray zew-TEEL)" },
    { french: "normal(e)", english: "normal", category: "Adjectif", example: "Les erreurs sont normales. (layz air-UR sohn nor-MAL)" },
    { french: "doucement", english: "gently / slowly", category: "Adverbe", example: "Parlez doucement. (par-LAY doos-MAHN)" },
    { french: "en petits groupes", english: "in small groups", category: "Expression", example: "Ils travaillent en petits groupes. (eel trav-EYE ahn puh-TEE GROOP)" },
  ],

  culturalNotes: [
    { title: "Les échanges linguistiques", content: "Dans beaucoup de villes françaises, les cafés, bibliothèques et associations organisent des échanges linguistiques. Le format est simple : quelques minutes en français, puis quelques minutes dans une autre langue." },
    { title: "Apprendre par l'erreur", content: "Les enseignants français rappellent souvent que l'erreur fait partie de l'apprentissage. Au niveau A2, parler clairement avec quelques erreurs vaut mieux que rester silencieux." },
    { title: "La vie associative", content: "Les associations jouent un rôle important en France. Elles organisent des activités culturelles, sportives et éducatives, souvent avec des bénévoles et des salles municipales." },
    { title: "Publier un compte rendu", content: "Après un événement, il est courant de publier un court résumé sur un site ou un réseau social pour remercier les participants et annoncer la prochaine rencontre." },
  ],

  exercises: [
    { id: "l26-e1", type: "tense_choice", question: "Choisissez le temps le plus logique.", items: [{ sentence: "Pendant que tu ____ (préparer) les invitations, j'ai terminé le programme.", verb: "préparer", options: ["Passé composé", "Imparfait"], correct_answer: "Imparfait", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." }, { sentence: "Hier, nous ____ (envoyer) dix messages.", verb: "envoyer", options: ["Passé composé", "Imparfait"], correct_answer: "Passé composé", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." }, { sentence: "Avant, personne ne ____ (connaître) la salle.", verb: "connaître", options: ["Passé composé", "Imparfait"], correct_answer: "Imparfait", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." }] },
    { id: "l26-e2", type: "fill_blank", question: "Remplacez 'les invitations' par un pronom : Tu ____ as envoyées ?", correct_answer: "les", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." },
    { id: "l26-e3", type: "fill_blank", question: "Remplacez 'aux invités' par un pronom : Je ____ ai envoyé un message.", correct_answer: "leur", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." },
    { id: "l26-e4", type: "multiple_choice", question: "Quelle phrase utilise correctement EN ?", options: ["J'en ai reçu dix réponses.", "J'en ai reçu dix.", "Je les en ai reçu.", "J'ai en reçu dix."], correct_answer: "J'en ai reçu dix.", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." },
    { id: "l26-e5", type: "transformation", question: "Réécrivez avec un pronom.", instruction: "affirmative_to_negative", items: [{ original: "Nous allons à la salle.", transformed: "Nous y allons.", translation: "We are going there." }, { original: "Je parle aux invités.", transformed: "Je leur parle.", translation: "I talk to them." }, { original: "Marc termine le programme.", transformed: "Marc le termine.", translation: "Marc finishes it." }], explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." },
    { id: "l26-e6", type: "error_correction", question: "Corrigez les erreurs A2.", items: [{ incorrect: "Je leur ai envoyé les invitations et je les ai parlé.", correct: "Je leur ai envoyé les invitations et je leur ai parlé.", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." }, { incorrect: "Pendant que j'ai préparé la salle, Marc écrivait le résumé.", correct: "Pendant que je préparais la salle, Marc écrivait le résumé.", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." }, { incorrect: "C'est le plus meilleur programme.", correct: "C'est le meilleur programme.", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." }] },
    { id: "l26-e7", type: "matching", question: "Associez la fonction grammaticale.", pairs: [{ french: "le/la/les", english: "COD" }, { french: "lui/leur", english: "COI personne" }, { french: "y", english: "lieu ou à + chose" }, { french: "en", english: "de + chose ou quantité" }, { french: "ne...rien", english: "nothing / not anything" }], explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." },
    { id: "l26-e8", type: "translation", question: "Traduisez : 'I sent them the program, but nobody answered.'", direction: "en_to_fr", correct_answer: ["Je leur ai envoyé le programme, mais personne n'a répondu."], explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." },
    { id: "l26-e9", type: "translation", question: "Traduisez : 'The new room is bigger than the old one and it will be the most useful option.'", direction: "en_to_fr", correct_answer: ["La nouvelle salle est plus grande que l'ancienne et ce sera l'option la plus utile."], explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." },
    { id: "l26-e10", type: "speaking_prompt", question: "Présentez un petit événement en français. Utilisez au moins un passé composé, un imparfait, un futur simple, un pronom et une comparaison.", model_answer: "L'année dernière, nous avons organisé un atelier. La salle était petite, mais tout le monde y allait avec plaisir. Cette année, nous utiliserons une salle plus grande et nous inviterons plus de participants.", translation: "Last year, we organized a workshop. The room was small, but everyone went there happily. This year, we will use a larger room and invite more participants.", tip: "When several A2 rules appear together, solve one layer at a time." },
    { id: "l26-e11", type: "error_correction", question: "Grand bilan A2 — Corrigez les dix erreurs (une par phrase, couvrant tout le niveau A2).", items: [{ incorrect: "Elle a monté au troisième étage à pied.", correct: "Elle est montée au troisième étage à pied.", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." }, { incorrect: "Nous avons vu les photos ? Je les ai vu aussi.", correct: "Nous avons vu les photos ? Je les ai vues aussi.", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." }, { incorrect: "Des billets ? J'en ai commandés trois.", correct: "Des billets ? J'en ai commandé trois.", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." }, { incorrect: "Pendant que j'ai préparé la salle, tu as appelé.", correct: "Pendant que je préparais la salle, tu as appelé.", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." }, { incorrect: "Je connais nager depuis l'âge de cinq ans.", correct: "Je sais nager depuis l'âge de cinq ans.", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." }, { incorrect: "Cette solution est plus meilleure que la première.", correct: "Cette solution est meilleure que la première.", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." }, { incorrect: "Si vous viendrez demain, nous pourrons commencer.", correct: "Si vous venez demain, nous pourrons commencer.", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." }, { incorrect: "Elles se sont parlées toute la soirée.", correct: "Elles se sont parlé toute la soirée.", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." }, { incorrect: "Il lui le donne chaque semaine.", correct: "Il le lui donne chaque semaine.", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." }, { incorrect: "Je ne veux ni un café ni un thé.", correct: "Je ne veux ni café ni thé.", explanation: "This review item combines several A2 rules. Check tense choice, pronoun type and position, agreement, negation, comparison, and irregular verb forms before answering." }] },
  ]
}

export default function Lesson26Page() {
  return (
    <ElementaryLessonLayout
      lessonData={lessonData}
      lessonNumber={26}
      prevHref="/lessons/elementary/25"
      prevLabel="Irréguliers Essentiels"
    />
  )
}
