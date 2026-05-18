'use client'

import AdvancedLessonLayout, { AdvancedLessonData } from '../../../../../components/lessons/AdvancedLessonLayout'

const lessonData: AdvancedLessonData = {
  id: 44,
  title: 'The Past Infinitive',
  title_fr: "L'Infinitif Passé",
  level: 'B2',
  description:
    "Condense prior-action clauses elegantly using 'après avoir' or 'après être' + past participle. This is the construction that lets you write a French biographical sketch the way Le Monde does — sequencing a career path in a single graceful line.",
  dialogue: {
    title: 'Portrait journalistique',
    context:
      "Hélène Pasquier and Marc Lemoine, two journalists at a French newsweekly, are sitting in their newsroom drafting a biographical profile of a public figure recently appointed to a senior post. They consult their notes and reconstruct the chronology aloud — relying on the infinitif passé to condense prior-action clauses.",
    register: 'courant',
    exchanges: [
      {
        speaker: 'Hélène',
        french: "Bon, reprenons depuis le début. Après avoir grandi à Lyon, elle est entrée à Sciences Po en 2002.",
        english: "Right, let's start from the beginning. After growing up in Lyon, she entered Sciences Po in 2002.",
      },
      {
        speaker: 'Marc',
        french: "Note bien : après être sortie diplômée, elle a intégré directement l'ENA. C'est rare à son âge.",
        english: 'Note carefully: after graduating, she went straight into ENA. That is rare at her age.',
      },
      {
        speaker: 'Hélène',
        french: "Oui. Et après avoir obtenu son classement, elle a choisi Bercy. Inspection des finances, je crois.",
        english: 'Yes. And after obtaining her ranking, she chose Bercy. Inspection des finances, I believe.',
      },
      {
        speaker: 'Marc',
        french: "Exact. Après avoir passé cinq ans à l'Inspection, elle a démissionné pour rejoindre le privé.",
        english: 'Right. After spending five years at the Inspection, she resigned to join the private sector.',
      },
      {
        speaker: 'Hélène',
        french: "C'est le tournant. Après s'être imposée chez BNP Paribas comme directrice de la stratégie, elle a été repérée par Matignon.",
        english: 'That was the turning point. After establishing herself as director of strategy at BNP Paribas, she was spotted by Matignon.',
      },
      {
        speaker: 'Marc',
        french: "Et après avoir conseillé deux ministres successifs, elle a accepté le poste de directrice de cabinet l'an dernier.",
        english: 'And after advising two successive ministers, she accepted the position of chief of staff last year.',
      },
      {
        speaker: 'Hélène',
        french: "Attention : ici on doit utiliser 'après que', pas l'infinitif passé. C'est le ministre qui a démissionné, pas elle.",
        english: "Careful: here we have to use 'après que', not the past infinitive. It's the minister who resigned, not her.",
      },
      {
        speaker: 'Marc',
        french: "Tu as raison. 'Après que le ministre eut démissionné, elle s'est vue confier de nouvelles fonctions.'",
        english: "You're right. 'After the minister had resigned, she was entrusted with new duties.'",
      },
      {
        speaker: 'Hélène',
        french: "Bon. Et pour le présent récent : après avoir été nommée la semaine dernière, elle a tenu sa première conférence de presse mardi.",
        english: 'Good. And for the recent present: after being appointed last week, she held her first press conference on Tuesday.',
      },
      {
        speaker: 'Marc',
        french: "Reprenons l'angle. Le portrait commence par : 'Avant de prendre ses nouvelles fonctions, elle a pris quinze jours de réflexion.'",
        english: "Let's revisit the angle. The profile opens with: 'Before taking up her new duties, she took a fortnight to think.'",
      },
      {
        speaker: 'Hélène',
        french: "Bien vu. 'Avant de' + infinitif présent pour ce qui précède, 'après avoir/être' + participe pour ce qui suit.",
        english: "Good catch. 'Avant de' + present infinitive for what precedes, 'après avoir/être' + participle for what follows.",
      },
      {
        speaker: 'Marc',
        french: "Une dernière phrase pour la chute : 'Après avoir consacré vingt ans au service de l'État, elle s'apprête à le réformer.'",
        english: "One final sentence for the kicker: 'After devoting twenty years to the service of the State, she now prepares to reform it.'",
      },
      {
        speaker: 'Hélène',
        french: "Parfait. Avec ça, on tient un portrait. Je relis et tu boucles l'encadré biographique.",
        english: "Perfect. With that, we've got a profile. I'll re-read it and you wrap up the biographical sidebar.",
      },
    ],
  },
  grammarPoints: [
    {
      title: "Formation : après + avoir/être + participe passé",
      explanation:
        "The infinitif passé places the auxiliary in the infinitive form, followed by the past participle. The choice between avoir and être obeys the same rules as the passé composé. The subject of the infinitif passé must be the same as the subject of the main clause.",
      examples: [
        "après avoir mangé · après avoir étudié · après avoir obtenu (verbes avec avoir)",
        "après être arrivé(e) · après être venu(e) · après être tombé(e) (verbes avec être)",
        "après s'être installé(e) · après s'être marié(e) (verbes pronominaux)",
        "RULE : avoir/être à l'infinitif (pas conjugué)",
        "RULE : sujet implicite = sujet de la principale (sinon utilisez « après que » + conjugué)",
      ],
      tip: "Conjugating the auxiliary instead of using its infinitive form is the most common B1→B2 error. Mentally check: I want 'after HAVING done', so the auxiliary must be in the form 'avoir', not 'a' or 'as'.",
    },
    {
      title: "Avant de + infinitif présent vs après avoir/être + infinitif passé",
      explanation:
        'The before/after temporal contrast maps directly onto present infinitive / past infinitive. Both constructions require a same subject as the main clause. This pair is the most efficient way in French to express sequenced actions of the same agent.',
      examples: [
        "Avant de partir, je t'appellerai. (before leaving — infinitif présent)",
        "Après être parti, je t'appellerai. (after having left — infinitif passé)",
        "Avant de prendre cette décision, réfléchissons. (before taking)",
        "Après avoir réfléchi, j'ai décidé de refuser. (after thinking)",
        "PIÈGE : pas de 'de' avec 'après' — on dit 'après avoir' jamais 'après d'avoir'.",
      ],
      tip: "Build the avant/après pair as a single mental unit. They share the same-subject constraint and pattern symmetrically — drill them together rather than separately.",
    },
    {
      title: "Accord du participe passé",
      explanation:
        "The agreement of the past participle in the infinitif passé works identically to the passé composé. With être, the participle agrees with the implicit subject (= subject of the main clause). With avoir, agreement with a preceding direct object applies; for pronominal verbs, the reflexive rules apply.",
      examples: [
        "Après être arrivée à Paris, elle a téléphoné. (subject = elle → féminin singulier)",
        "Après être arrivés, ils se sont installés. (subject = ils → masculin pluriel)",
        "Après s'être lavée, elle est sortie. (pronominal, COD = se → féminin singulier)",
        "Après s'être parlé, ils se sont quittés. (parler à → COI, pas d'accord)",
        "Après l'avoir lue, j'ai rangé la lettre. (COD 'la' antéposé → lue féminin singulier)",
      ],
      tip: "The accord rules don't change at B2 — what changes is that you must apply them in compressed infinitive constructions where the subject is implicit. Always identify the implicit subject first, then apply the same rule you already know.",
    },
    {
      title: "Sujets différents : après que + indicatif",
      explanation:
        "When the subject of the prior action differs from the subject of the main clause, you cannot use 'après avoir/être'. Use 'après que' + indicatif instead (NB: 'après que' takes the indicatif, not the subjunctive — though native speakers often slip and use the subjunctive). The literary equivalent uses the passé antérieur (recognition only at B2).",
      examples: [
        "MÊME SUJET : Après avoir fini, il est sorti. ✓",
        "SUJETS DIFFÉRENTS : Après que le ministre a démissionné, elle a été promue. (indicatif)",
        "Plus formel : Après que le ministre eut démissionné, elle a été promue. (passé antérieur — reconnaissance seulement)",
        "PIÈGE FRÉQUENT : *Après qu'il soit parti — incorrect en théorie, mais répandu dans l'oral.",
        "CONTRAST : Avant qu'il ne parte (avant que + subj. + ne explétif)",
      ],
      tip: "If you're unsure whether you have one subject or two, rewrite mentally as two independent sentences. If both sentences share an explicit subject pronoun, you can use the infinitif passé; if not, use 'après que'.",
    },
    {
      title: "Registre et fréquence",
      explanation:
        "The infinitif passé is neutral-to-formal, but extremely frequent in written French — biography, journalism, CVs, formal reports, narrative descriptions of careers and processes. Native speakers also use it readily in spoken French. Avoid stacking too many in one paragraph: alternate with 'après que', 'puis', 'ensuite', or simple coordination.",
      examples: [
        "BIOGRAPHIE : Après avoir étudié à l'X, il a rejoint le ministère de l'Économie.",
        "ÉCRIT NEUTRE : Après être rentrée, j'ai préparé le dîner.",
        "JOURNALISME : Après avoir nié les faits, il a fini par les reconnaître.",
        "ORAL COURANT : Après avoir mangé, on est sortis.",
        "ALTERNATIVE : Une fois sorti, il a appelé un taxi. (« une fois » + pp = équivalent condensé)",
      ],
      tip: "Use it deliberately to upgrade an everyday B1 sentence to a B2-quality one — but don't over-rely. Mixing one or two infinitifs passés with other connectors marks you as fluent; using nothing else flags you as drilling a construction.",
    },
  ],
  vocabulary: [
    { french: 'après avoir étudié', english: 'after studying', category: 'Transition biographique', example: 'Après avoir étudié à Sciences Po, il a rejoint un cabinet.' },
    { french: 'après être entré(e) dans', english: 'after entering', category: 'Transition biographique', example: 'Après être entrée dans la fonction publique, elle a progressé rapidement.' },
    { french: 'après avoir obtenu', english: 'after obtaining', category: 'Transition biographique', example: 'Après avoir obtenu son diplôme, il est parti à l’étranger.' },
    { french: 'après s’être marié(e)', english: 'after getting married', category: 'Transition biographique', example: 'Après s’être mariée, elle s’est installée à Bordeaux.' },
    { french: 'après avoir démissionné', english: 'after resigning', category: 'Transition biographique', example: 'Après avoir démissionné, il a publié un essai.' },
    { french: 'après avoir été nommé(e)', english: 'after being appointed', category: 'Transition biographique', example: 'Après avoir été nommée directrice, elle a réorganisé le service.', note: 'voix passive à l’infinitif' },
    { french: 'après s’être installé(e)', english: 'after settling in', category: 'Transition biographique', example: 'Après s’être installés à Lyon, ils ont ouvert leur cabinet.' },
    { french: 'après avoir fondé', english: 'after founding', category: 'Verbe contextuel', example: 'Après avoir fondé l’association, elle s’est retirée du privé.' },
    { french: 'avant de prendre', english: 'before taking', category: 'Avant + inf. présent', example: 'Avant de prendre sa décision, elle a consulté ses associés.' },
    { french: 'avant de signer', english: 'before signing', category: 'Avant + inf. présent', example: 'Avant de signer, lisez attentivement les clauses.' },
    { french: 'succéder à', english: 'to succeed (someone)', category: 'Verbe de carrière', example: 'Elle a succédé à son ancien mentor en 2019.', note: 'verbe transitif indirect (à)' },
    { french: 'hériter de', english: 'to inherit (something)', category: 'Verbe de carrière', example: 'Après avoir hérité du dossier, il l’a fermé en six mois.' },
    { french: 'fonder', english: 'to found', category: 'Verbe de carrière', example: "Après avoir fondé sa start-up, il a été repéré par la presse." },
    { french: 'rejoindre', english: 'to join', category: 'Verbe de carrière', example: 'Il a rejoint un cabinet d’avocats prestigieux.' },
    { french: 'démissionner', english: 'to resign', category: 'Verbe de carrière', example: 'Elle a démissionné pour des raisons personnelles.' },
    { french: 'intégrer', english: 'to join (an institution)', category: 'Verbe de carrière', example: "Il a intégré l'ENA après deux années de prépa." },
    { french: 's’imposer', english: 'to establish oneself', category: 'Verbe de carrière', example: 'Elle s’est imposée comme la voix de référence du secteur.' },
    { french: 'être repéré(e) par', english: 'to be spotted by', category: 'Verbe de carrière', example: 'Il a été repéré par Matignon dès sa thèse.' },
    { french: 'consacrer (du temps) à', english: 'to devote (time) to', category: 'Verbe contextuel', example: "Après avoir consacré vingt ans à l'État, il quitte ses fonctions." },
    { french: 's’apprêter à', english: 'to be about to', category: 'Verbe contextuel', example: 'Elle s’apprête à présider la commission.' },
    { french: 'tenir une conférence de presse', english: 'to hold a press conference', category: 'Vocabulaire institutionnel', example: 'Le directeur a tenu une conférence de presse hier matin.' },
    { french: 'un cabinet (juridique/ministériel)', english: 'a firm / a minister’s office', category: 'Vocabulaire institutionnel', example: 'Le cabinet du ministre a publié un communiqué.' },
    { french: 'une directrice de cabinet', english: 'a chief of staff', category: 'Vocabulaire institutionnel', example: 'Elle a été nommée directrice de cabinet en mai.' },
    { french: 'un classement', english: 'a ranking (school placement)', category: 'Vocabulaire institutionnel', example: 'Son classement à la sortie de l’ENA lui ouvrait toutes les portes.' },
    { french: 'l’Inspection (des Finances)', english: 'the (Finance) Inspectorate', category: 'Vocabulaire institutionnel', example: "L'Inspection des Finances reste le grand corps le plus convoité." },
    { french: 'un portrait', english: 'a portrait / profile (article)', category: 'Vocabulaire journalistique', example: 'Le Monde a publié son portrait en double page.' },
    { french: 'un encadré', english: 'a sidebar / feature box', category: 'Vocabulaire journalistique', example: 'Mets la biographie dans un encadré.' },
    { french: 'la chute (d’un article)', english: 'the kicker / closing line', category: 'Vocabulaire journalistique', example: "La chute reprend la phrase d'ouverture en miroir." },
  ],
  culturalNotes: [
    {
      title: 'Le CV à la française',
      content:
        "The French CV is more codified than its Anglophone equivalent: chronological structure, photograph (still common), state of civil (parfois), and a 'parcours' section that reads as a biographical narrative — exactly where the infinitif passé clusters densely. 'Après avoir obtenu mon diplôme à l’EM Lyon, j’ai intégré...' is the canonical opening of a French CV summary.",
    },
    {
      title: 'Les grandes écoles et le système des grands corps',
      content:
        "Sciences Po (Institut d'études politiques) and l'ENA (École nationale d'administration, renamed INSP in 2022) are the two institutions that shape most senior French civil servants. Top-ranked graduates traditionally enter the 'grands corps' — Inspection des Finances, Conseil d'État, Cour des comptes — which remain the most prestigious tracks in French public life. The journalistic biography genre exists in part to chronicle these career paths.",
    },
    {
      title: 'Le portrait dans la presse française',
      content:
        "The 'portrait' is a fixed journalistic genre in France — a 1,000–1,500-word biographical-analytical piece typically running on the back page of Le Monde or in a Libération double page. Its style is recognisable: nominal phrases, alternation of infinitif passé and participe présent, free indirect speech, an opening 'accroche' and a closing 'chute'. It is the most prestigious short form in French print journalism.",
    },
    {
      title: "Matignon, Bercy, l'Élysée — la géographie du pouvoir",
      content:
        "French political prose uses places as metonyms for institutions: Matignon = Prime Minister's office, Bercy = Ministry of the Economy, l’Élysée = Presidency, le Quai d’Orsay = Foreign Affairs, la Place Beauvau = Interior Ministry. Mastering these references is a B2 milestone — every Le Monde editorial uses at least three.",
    },
  ],
  exercises: [
    {
      id: 'l44-formation',
      type: 'conjugation',
      question: "Donnez l'infinitif passé de chaque verbe (avec accord si nécessaire).",
      verb: 'manger / arriver (f. sing.) / finir / partir (m. plur.) / se laver (f. sing.) / obtenir / être nommé (f. sing.) / s’installer (m. plur.)',
      correct_answer:
        "après avoir mangé, après être arrivée, après avoir fini, après être partis, après s'être lavée, après avoir obtenu, après avoir été nommée, après s'être installés",
      explanation: "Auxiliaire à l'infinitif + participe passé. Accord avec être et pronominaux.",
    },
    {
      id: 'l44-avant-vs-apres',
      type: 'multiple_choice',
      question: "Quelle phrase est correcte ? « ____ , il a téléphoné à sa mère. »",
      options: [
        "Avant d'avoir mangé",
        "Avant de manger",
        "Après de manger",
        "Après que manger",
      ],
      correct_answer: 'Avant de manger',
      explanation:
        "« Avant de » + INFINITIF PRÉSENT (jamais passé). « Après avoir » + INFINITIF PASSÉ. « Après de » et « avant d'avoir » sont des erreurs classiques.",
    },
    {
      id: 'l44-same-subject-test',
      type: 'multiple_choice',
      question:
        "Une de ces phrases NE PEUT PAS s'écrire avec 'après avoir/être'. Laquelle ?",
      options: [
        "Il a déjeuné, puis il est sorti.",
        "Marie est arrivée, puis elle a téléphoné.",
        "Le ministre a démissionné, puis le président a nommé un successeur.",
        "Nous avons signé le contrat, puis nous avons fêté l'événement.",
      ],
      correct_answer: "Le ministre a démissionné, puis le président a nommé un successeur.",
      explanation:
        "Sujets différents (le ministre / le président) → impossible d'utiliser l'infinitif passé. Il faut « Après que le ministre a démissionné, le président a nommé… ».",
    },
    {
      id: 'l44-transformation',
      type: 'rewrite',
      question: "Combinez chaque paire de phrases en utilisant 'après avoir' ou 'après être'.",
      instruction_type: 'reported_speech',
      items: [
        {
          original: "Il a fini son travail. Il est sorti.",
          expected: "Après avoir fini son travail, il est sorti.",
          explanation: 'Même sujet (il), avoir + fini.',
        },
        {
          original: "Elle est arrivée à Paris. Elle a téléphoné à sa sœur.",
          expected: "Après être arrivée à Paris, elle a téléphoné à sa sœur.",
          explanation: 'Être + accord féminin (elle = arrivée).',
        },
        {
          original: "Nous nous sommes installés. Nous avons commencé le travail.",
          expected: "Après nous être installés, nous avons commencé le travail.",
          explanation: 'Pronominal — accord avec « nous » masculin pluriel.',
        },
        {
          original: "Ils ont été nommés. Ils ont pris leurs fonctions.",
          expected: "Après avoir été nommés, ils ont pris leurs fonctions.",
          explanation: 'Passive à l’infinitif passé : avoir été + pp + accord.',
        },
        {
          original: "Elle a démissionné. Elle a rejoint un cabinet privé.",
          expected: "Après avoir démissionné, elle a rejoint un cabinet privé.",
          explanation: 'Même sujet, avoir + démissionné.',
        },
        {
          original: "Nous avons obtenu l'autorisation. Nous avons commencé les travaux.",
          expected: "Après avoir obtenu l'autorisation, nous avons commencé les travaux.",
          explanation: 'Avoir + obtenu, même sujet.',
        },
      ],
    },
    {
      id: 'l44-biographical',
      type: 'rewrite',
      question:
        "Rédigez le parcours d'un personnage en transformant chaque ligne en une phrase avec 'après avoir/être'. Sujet sous-entendu : « il/elle ».",
      instruction_type: 'reported_speech',
      items: [
        {
          original: "1. étudier à Toulouse — entrer chez Airbus",
          expected: "Après avoir étudié à Toulouse, il est entré chez Airbus.",
          explanation: 'Avoir + étudier.',
        },
        {
          original: "2. travailler dix ans chez Airbus — fonder sa propre start-up",
          expected: "Après avoir travaillé dix ans chez Airbus, il a fondé sa propre start-up.",
          explanation: 'Avoir + travailler.',
        },
        {
          original: "3. être repéré par un investisseur — lever cinq millions",
          expected: "Après avoir été repéré par un investisseur, il a levé cinq millions.",
          explanation: 'Passive : avoir été + pp.',
        },
        {
          original: "4. s'installer à San Francisco — ouvrir une filiale américaine",
          expected: "Après s'être installé à San Francisco, il a ouvert une filiale américaine.",
          explanation: 'Pronominal — accord masculin singulier.',
        },
      ],
    },
    {
      id: 'l44-error-correction',
      type: 'error_correction',
      question:
        "Corrigez ces phrases qui utilisent à tort l'infinitif passé (sujets différents, formulation incorrecte, ou accord oublié).",
      items: [
        {
          incorrect: "Après que je suis arrivé, ma sœur a téléphoné.",
          correct: "Après que je suis arrivé, ma sœur a téléphoné.",
          explanation:
            "Cette phrase est en fait correcte ! Sujets différents (je / ma sœur) → « après que » + indicatif obligatoire. Aucune transformation possible avec infinitif passé.",
        },
        {
          incorrect: "Après d'avoir mangé, il est sorti.",
          correct: "Après avoir mangé, il est sorti.",
          explanation: "Pas de « de » avec « après » : on dit « après avoir », jamais « après d'avoir ».",
        },
        {
          incorrect: "Après être arrivé à Paris, ma sœur m'a accueilli.",
          correct: "Après mon arrivée à Paris, ma sœur m'a accueilli.",
          explanation:
            "Sujets différents (je / ma sœur) → impossible avec infinitif passé. Nominalisation ou « après que je suis arrivé ».",
        },
        {
          incorrect: "Après être arrivé, elle a téléphoné.",
          correct: "Après être arrivée, elle a téléphoné.",
          explanation: "Sujet implicite = elle → accord féminin singulier sur le participe.",
        },
        {
          incorrect: "Après avoir étudié à Lyon, mes parents m'ont envoyé à Paris.",
          correct: "Après mes études à Lyon, mes parents m'ont envoyé à Paris.",
          explanation:
            "Sujet de l'infinitif (moi qui ai étudié) ≠ sujet de la principale (mes parents). Réécriture en nominalisation ou « après que j'ai étudié ».",
        },
      ],
    },
    {
      id: 'l44-translation',
      type: 'translation',
      question:
        "Traduisez : 'After graduating from HEC, she joined a consulting firm in London.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Après avoir obtenu son diplôme à HEC, elle a rejoint un cabinet de conseil à Londres.",
        "Après être sortie diplômée d'HEC, elle a rejoint un cabinet de conseil à Londres.",
        "Après avoir été diplômée d'HEC, elle a rejoint un cabinet de conseil à Londres.",
      ],
      explanation:
        "Plusieurs formulations idiomatiques : « après avoir obtenu son diplôme » ou « après être sortie diplômée ».",
    },
    {
      id: 'l44-translation-2',
      type: 'translation',
      question: "Traduisez : 'Before signing the contract, he consulted his lawyer.'",
      direction: 'en_to_fr',
      correct_answer: [
        "Avant de signer le contrat, il a consulté son avocat.",
        "Avant de signer le contrat, il a consulté son avocate.",
      ],
      explanation: "« Avant de » + infinitif présent (pas passé).",
    },
    {
      id: 'l44-matching',
      type: 'matching',
      question: 'Associez chaque verbe à sa forme correcte en infinitif passé (sujet : elle).',
      pairs: [
        { french: 'arriver', english: 'après être arrivée' },
        { french: 'finir', english: 'après avoir fini' },
        { french: 'se lever', english: "après s'être levée" },
        { french: 'être nommée', english: 'après avoir été nommée' },
        { french: 'partir', english: 'après être partie' },
        { french: 'prendre', english: 'après avoir pris' },
      ],
      explanation: "Verbes avec être → accord avec le sujet. Verbes avec avoir → infinitif sans accord (sauf COD antéposé).",
    },
    {
      id: 'l44-speaking',
      type: 'speaking_prompt',
      question:
        "Décrivez votre parcours d'études et professionnel en trois phrases, en utilisant à chaque fois 'après avoir' ou 'après être'.",
      model_answer:
        "Après avoir terminé mes études secondaires, j'ai intégré l'université de Lille en sciences politiques. Après être sorti diplômé, j'ai travaillé deux ans dans une ONG à Bruxelles. Après avoir été recruté par un institut de recherche, je me suis installé à Paris l'an dernier.",
      translation:
        "After finishing secondary school, I joined the University of Lille in political science. After graduating, I worked for two years in an NGO in Brussels. After being recruited by a research institute, I settled in Paris last year.",
      tip: 'Vary the auxiliaries — at least one avoir, one être, one pronominal or passive — to demonstrate range. Anchor each step with a date or place to keep the chronology vivid.',
    },
  ],
}

export default function Lesson44Page() {
  return (
    <AdvancedLessonLayout
      lessonData={lessonData}
      lessonNumber={44}
      prevHref="/lessons/advanced/43"
      prevLabel="Le Subjonctif Passé"
      nextHref="/lessons/advanced/45"
      nextLabel="La Concordance des Temps"
    />
  )
}
