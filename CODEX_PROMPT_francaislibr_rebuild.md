# Codex Prompt: FrançaisLibre — Full A1 Curriculum Rebuild

## Project Context

You are working on **FrançaisLibre**, a Next.js 15 / TypeScript / Tailwind CSS French learning web app. The backend is Supabase (auth, database, edge functions). It is deployed on Vercel. The existing design system, UI components, routing structure, and Supabase integration should be **preserved**. What needs to be completely rebuilt is:

1. `lib/lessons/lessonTypes.ts` — updated TypeScript interfaces
2. `lib/lessons/lessonData.ts` — all lesson content (full replacement)
3. `src/app/lessons/beginner/[1-12]/page.tsx` — 12 lesson pages (was 10, now 12)
4. `src/app/lessons/beginner/page.tsx` — update to reflect 12 lessons
5. `src/app/lessons/page.tsx` — update lesson count
6. `components/lessons/InteractiveExercise.tsx` — extend to handle new exercise types
7. `components/lessons/BeginnerLessonPage.tsx` — keep architecture, minor updates only

**Do NOT touch:** audio service files, Supabase client, CSS/globals, layout.tsx, elementary lessons (11+), or any non-lesson pages.

**Audio:** Remove all audio-related props and calls from lesson pages and components. The `audioService` imports and any `audio_prompt` usage in exercises should be stripped out. No audio generation is needed.

---

## Why We Are Rebuilding

The existing 10 lessons had a fundamental sequencing flaw: **grammar explanations consistently lagged behind what the dialogues required of learners**. Specifically:

- Regular -er verbs only appeared at Lesson 8, but were used in every dialogue from Lesson 1 onwards
- Partitive articles appeared in Lesson 3 dialogues before being taught in Lesson 5
- Adjective agreement, possessive adjectives, question forms, and `il y a` were never formally taught at all
- Lesson 4 had 54 vocabulary items in a single lesson
- Exercise types did not diversify until Lesson 9

The rebuild must enforce a strict rule throughout: **no grammatical structure may appear in a dialogue or example until it has been formally taught in that lesson or a prior lesson.**

---

## New A1 Curriculum: 12 Lessons

The A1 level now comprises **12 lessons**. The progression is:

| # | Title (FR) | Core Grammar | Context |
|---|---|---|---|
| 1 | Premiers Contacts | être (present), tu/vous | Parisian café — first meeting |
| 2 | Se Présenter | avoir (present), numbers 1–20, age | Train compartment — introductions |
| 3 | Les Verbes en -er | Regular -er conjugation (all 6 forms) | University campus — student life |
| 4 | Les Articles et le Genre | le/la/l'/les, un/une/des, noun gender patterns | Market stalls — shopping |
| 5 | Les Adjectifs | Adjective agreement (gender + number), common position rules | Apartment hunting |
| 6 | Les Adjectifs Possessifs | mon/ma/mes, ton/ta/tes, son/sa/ses, notre/nos, votre/vos, leur/leurs | Family gathering |
| 7 | Les Nombres et l'Heure | Numbers 1–69, telling time (il est... heures/et demie/et quart) | Daily schedule at work |
| 8 | Les Articles Partitifs et la Nourriture | du/de la/de l'/des, negation of partitives (de/d'), food vocabulary | Grocery shopping |
| 9 | La Négation et les Questions | ne...pas (all -er verbs), est-ce que, intonation questions, qu-words | Neighbourhood conversation |
| 10 | Les Prépositions et les Lieux | Prepositions of place (à, dans, sur, sous, devant, derrière, entre), aller + à/en/au/aux | Getting around the city |
| 11 | Les Nombres 70–1000 et les Dates | Numbers 70–1000, days, months, seasons, dates, years | Planning a trip |
| 12 | Verbes Irréguliers Essentiels | faire, venir, pouvoir, vouloir (present), futur proche (aller + infinitive) | Weekend plans — A1/A2 bridge |

---

## Updated TypeScript Interfaces (`lib/lessons/lessonTypes.ts`)

Replace the entire file with the following:

```typescript
// lib/lessons/lessonTypes.ts

export interface DialogueExchange {
  speaker: string;
  french: string;
  english: string;
  pronunciation?: string; // phonetic guide e.g. "bon-ZHOOR"
  cultural_note?: string;
}

export interface Dialogue {
  title: string;
  context: string; // scene-setting description shown before the dialogue
  exchanges: DialogueExchange[];
  cultural_notes?: string[]; // 3–5 cultural insights shown after dialogue
  vocabulary_highlights?: string[]; // words to call out as preview
}

export interface ConjugationRow {
  pronoun: string;
  form: string;
  pronunciation: string;
}

export interface ConjugationTable {
  verb: string;
  tense?: string; // defaults to "présent" if omitted
  rows: ConjugationRow[];
}

export interface GrammarRule {
  topic: string;
  explanation: string; // clear, plain-English explanation for A1 learners
  examples: {
    french: string;
    english: string;
    pronunciation?: string;
    highlight?: string; // the part of the sentence to visually emphasise
  }[];
  patterns: string[]; // bullet-point rules, max 6
  conjugation_tables?: ConjugationTable[]; // replaces old conjugation_table + additional_conjugation_tables
  tip?: string; // optional memory aid or common mistake warning
}

export interface VocabularyItem {
  word: string;
  translation: string;
  pronunciation?: string;
  gender?: 'masculine' | 'feminine' | 'invariable'; // for nouns
  example_sentence: string;
  example_translation: string;
  category?: string; // e.g. 'food', 'family', 'time', 'directions'
}

// ─── Exercise types ────────────────────────────────────────────────────────────

export interface MultipleChoiceExercise {
  id: string;
  type: 'multiple_choice';
  question: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  hints?: string[];
}

export interface FillBlankExercise {
  id: string;
  type: 'fill_blank';
  question: string; // sentence with ___ marking the blank
  correct_answer: string | string[]; // array if multiple valid answers
  explanation: string;
  hints?: string[];
}

export interface TranslationExercise {
  id: string;
  type: 'translation';
  question: string; // the sentence to translate (EN→FR or FR→EN, labelled clearly)
  direction: 'en_to_fr' | 'fr_to_en';
  correct_answer: string | string[];
  explanation: string;
  hints?: string[];
}

export interface MatchingExercise {
  id: string;
  type: 'matching';
  question: string; // instruction text e.g. "Match each French word to its English meaning"
  pairs: { french: string; english: string }[];
  explanation: string;
}

export interface ConjugationExercise {
  id: string;
  type: 'conjugation';
  question: string; // e.g. "Conjugate 'parler' for all six pronouns"
  verb: string;
  correct_answer: ConjugationRow[]; // full conjugation expected
  explanation: string;
}

export interface TransformationExercise {
  id: string;
  type: 'transformation';
  question: string; // e.g. "Make these sentences negative"
  instruction: 'affirmative_to_negative' | 'singular_to_plural' | 'masculine_to_feminine' | 'informal_to_formal';
  items: {
    original: string;
    transformed: string;
    translation: string;
  }[];
  explanation: string;
}

export interface GenderSortExercise {
  id: string;
  type: 'gender_sort';
  question: string; // e.g. "Sort these nouns: masculine or feminine?"
  items: {
    word: string;
    gender: 'masculine' | 'feminine';
    article: string; // the correct definite article
  }[];
  explanation: string;
}

export interface SpeakingPromptExercise {
  id: string;
  type: 'speaking_prompt';
  question: string; // what to say aloud
  model_answer: string; // shown after attempting
  translation: string;
  tip?: string;
}

export type Exercise =
  | MultipleChoiceExercise
  | FillBlankExercise
  | TranslationExercise
  | MatchingExercise
  | ConjugationExercise
  | TransformationExercise
  | GenderSortExercise
  | SpeakingPromptExercise;

// ─── Lesson ────────────────────────────────────────────────────────────────────

export interface BeginnerLesson {
  id: string;           // e.g. 'beginner-1'
  title: string;        // English title
  title_fr: string;     // French title shown in UI
  subtitle: string;
  level: 'A1';
  cefr_skills: ('listening' | 'speaking' | 'reading' | 'writing')[];
  order: number;        // 1–12
  estimated_time: number; // minutes
  learning_objectives: string[]; // 4–6 items, actionable ("Use... / Ask... / Conjugate...")
  prerequisite_lessons?: string[];

  dialogue: Dialogue;   // REQUIRED for all lessons (no optional)
  grammar: GrammarRule;
  vocabulary: VocabularyItem[]; // 15–25 items per lesson. NOT 50+.
  exercises: Exercise[]; // minimum 8 per lesson, with at least 4 different types

  tags: string[];
  difficulty: 1 | 2 | 3 | 4 | 5;
  is_free: boolean;
  completion_criteria: {
    min_exercises_correct: number;
    required_sections: ('dialogue' | 'grammar' | 'vocabulary' | 'exercises')[];
  };
}

export interface UserProgress {
  lesson_id: string;
  user_id: string;
  started_at: Date;
  completed_at?: Date;
  completion_percentage: number;
  exercises_completed: string[];
  exercises_correct: string[];
  time_spent: number; // seconds
  current_section: 'dialogue' | 'grammar' | 'vocabulary' | 'exercises';
}
```

---

## Lesson Data Specification (`lib/lessons/lessonData.ts`)

Write all 12 lessons following the exact pedagogical brief below. The file exports:

```typescript
export const beginnerLessons: BeginnerLesson[]
export const getBeginnerLessons = () => beginnerLessons
export const getBeginnerLesson = (id: string) => beginnerLessons.find(l => l.id === id)
```

### STRICT RULES FOR ALL LESSON CONTENT

1. **The dialogue for Lesson N may only use grammar structures formally introduced in Lessons 1 through N.** If -er verbs are taught in Lesson 3, they must NOT appear conjugated in Lesson 1 or 2 dialogues. Lesson 1 dialogue may only use `être` and fixed phrases.
2. **Vocabulary cap: 15–25 words per lesson.** Never more than 25. Quality over quantity.
3. **Exercises: minimum 8 per lesson, minimum 4 different exercise types.** No lesson should have more than 3 exercises of the same type.
4. **Pronunciation guides**: phonetic approximations in the style `bon-ZHOOR` (stressed syllable capitalised, hyphens between syllables). Required for every dialogue exchange and every vocabulary item.
5. **Cultural notes**: 3–5 per lesson, grounded in contemporary France (not clichés). Factual, specific, interesting.
6. **Difficulty scale**: 1 = very easy, 5 = hard for A1. L1 = 1, L2 = 1, L3 = 2, L4 = 2, L5 = 3, L6 = 3, L7 = 2, L8 = 3, L9 = 3, L10 = 3, L11 = 3, L12 = 4.
7. **Do not use conditional mood** (`je voudrais`, `pourriez-vous`) in any dialogue or example **before it is taught**. These forms are B1 grammar. At A1 they should be presented as fixed phrases only, with a note like: *"This is a polite fixed phrase — you'll learn the grammar behind it at B1 level."*
8. **`il y a`** must be introduced as a fixed pattern in Lesson 10 (prepositions and places). It does not appear in any earlier lesson.
9. **Stress pronouns** (`moi`, `toi`, `lui`, `elle`, `nous`, `vous`, `eux`, `elles`) may appear in dialogues from Lesson 1 only for `moi` and `toi` used for emphasis (`Moi, je suis...`, `Et toi?`), as these are idiomatic and unavoidable. A brief footnote in the grammar section of Lesson 3 should acknowledge them as "emphatic pronouns you'll use now, study formally later."
10. **Every grammar section must include a `tip`**: one common mistake or memory trick.

---

## Lesson-by-Lesson Pedagogical Brief

### Lesson 1 — Premiers Contacts
**Grammar:** `être` (present tense, all 6 forms). The `tu` vs `vous` distinction. Fixed greeting phrases.
**Vocabulary scope (15–18 words):** Greetings by time of day, farewells, basic politeness (merci, s'il vous plaît, de rien, excusez-moi, pardon), nationalities (3–4 examples), `ici`, `bien`, `très bien`.
**Dialogue scene:** Two strangers meet briefly at a Parisian café — one seat free, initial small talk. Keep it short (6–8 exchanges). Both speakers use `vous`. **The dialogue may ONLY use: être, fixed greeting phrases, and the vocabulary above.** No other verb conjugations.
**Exercises must include:** conjugation of `être` (all 6 forms), multiple choice on tu/vous usage, fill-blank with être forms, matching greetings to time of day, translation (EN→FR) of 3 simple sentences using être.
**Grammar tip:** "In French, you don't say 'I am tired' to mean 'very well' — learn each fixed phrase (Je vais bien, Ça va) separately. They don't follow the être pattern."

---

### Lesson 2 — Se Présenter
**Grammar:** `avoir` (present tense, all 6 forms). Numbers 1–20 (for age). `J'ai X ans` construction. Basic professions and nationalities as complements of `être` (building on L1).
**Vocabulary scope (18–22 words):** avoir-based expressions (faim, soif, raison, tort, chaud, froid, peur — 4–5 of these), numbers 1–20, 6–8 professions, 5–6 nationalities/countries, `d'où` + `venir de` as a fixed phrase (do not teach venir conjugation yet).
**Dialogue scene:** Two travellers in a TGV train compartment (Paris → Lyon). Continuing introductions: name, origin, age, profession. 8–10 exchanges. `vous` only. **May use: être (L1), avoir, numbers 1–20, professions, nationalities. No other conjugated verbs.**
**Exercises must include:** avoir conjugation drill, numbers matching (digit ↔ word), fill-blank with avoir, multiple choice on nationality/profession agreement (already introduced with être in L1), translation of age sentences.
**Grammar tip:** "Avoir means 'to have' but French uses it where English uses 'to be' for age and sensations. Never say `je suis 25 ans` — always `j'ai 25 ans`."

---

### Lesson 3 — Les Verbes en -er
**Grammar:** Regular -er verb conjugation (all 6 forms: -e, -es, -e, -ons, -ez, -ent). Spelling changes: manger/nous mangeons, appeler → note only. The infinitive. Core -er verbs: parler, habiter, travailler, aimer, écouter, regarder, étudier, marcher, chanter, danser, jouer.
**Vocabulary scope (18–22 words):** The 11 verbs above plus: beaucoup, souvent, toujours, jamais (as adverbs only — no ne...jamais yet), aussi, maintenant, avec, ici, là, à + city (fixed phrase, do not teach article contraction yet).
**Dialogue scene:** Two students on a university campus discussing their studies, hobbies and where they live. 8–10 exchanges. Can switch from `vous` to `tu` mid-dialogue (and explain why in a cultural note). **May use: être (L1), avoir (L2), regular -er verbs, vocabulary above.**
**Exercises must include:** full conjugation table for `parler` (fill all 6 blanks), conjugation exercise for `habiter`, matching infinitives to English meanings, multiple choice selecting the correct -er form for a given pronoun, fill-blank sentence with correct verb form, translation of 2 short sentences, speaking prompt (introduce yourself using 3 -er verbs).
**Grammar tip:** "The -e, -es, -e forms all sound identical — only the written form changes. When speaking, you'll sound fluent faster because three conjugations sound the same."

---

### Lesson 4 — Les Articles et le Genre
**Grammar:** Definite articles (le, la, l', les). Indefinite articles (un, une, des). Noun gender — masculine and feminine patterns with the most reliable rules (not exhaustive). Plural formation (add -s, exceptions -al→-aux, -eau→-eaux). Contractions: `du = de + le`, `au = à + le`, `des = de + les`, `aux = à + les` — **introduce here as a preview; full partitive comes in Lesson 8**.
**Vocabulary scope (20–24 words):** Common nouns across 3 categories: places in a market (boulangerie, boucherie, fromagerie, épicerie, marché), food items (pain, fromage, viande, légume, fruit, poisson), everyday objects (livre, stylo, sac, table, chaise, fenêtre). Choose 20 that illustrate gender patterns well.
**Dialogue scene:** Two friends at an outdoor market — deciding what to buy. 8 exchanges. **May use: être, avoir, -er verbs (L3), articles from this lesson. Partitive articles (du pain, de la viande) are FORBIDDEN here** — they come in Lesson 8. Use indefinite only: `un pain`, `une baguette`, `des légumes`.
**Exercises must include:** gender_sort (12 nouns — masculine or feminine?), fill-blank with correct definite article, fill-blank with correct indefinite article, contraction exercise (de + le → du etc.), multiple choice on plural formation, matching noun to article.
**Grammar tip:** "You cannot always predict gender from word endings alone. The safest habit: always learn every noun WITH its article — not `pain` but `le pain`, not `maison` but `la maison`."

---

### Lesson 5 — Les Adjectifs
**Grammar:** Adjective agreement in gender (add -e for feminine, exceptions: -eux→-euse, -er→-ère, invariable colours). Adjective agreement in number (add -s, -eux stays -eux). Placement: most adjectives follow the noun (une voiture rouge) but BAGS adjectives precede (beau, bon, grand, petit, jeune, vieux, nouveau). Irregular: beau/bel/belle, nouveau/nouvel/nouvelle, vieux/vieil/vieille.
**Vocabulary scope (20–22 words):** 15–18 common adjectives (grand, petit, beau, bon, mauvais, nouveau, vieux, jeune, long, court, chaud, froid, rapide, lent, cher, facile, difficile, intéressant, ennuyeux, délicieux). Use them in pairs (masc. + fem. form shown together).
**Dialogue scene:** Two flatmates looking at rental apartment listings, describing the apartments. 8–10 exchanges. **May use: être, avoir, -er verbs, articles (L4). All adjectives described this lesson.** No partitives.
**Exercises must include:** transformation (masculine → feminine form), transformation (singular → plural), fill-blank with correct adjective form in a sentence, multiple choice on adjective placement (before or after noun?), matching adjective to its antonym, translation of 3 adjective-heavy sentences.
**Grammar tip:** "Remember BAGS: Beauty (beau, joli), Age (jeune, vieux, nouveau), Goodness (bon, mauvais), Size (grand, petit, long, court) — these go BEFORE the noun. Everything else goes after."

---

### Lesson 6 — Les Adjectifs Possessifs
**Grammar:** Full possessive adjective table — mon/ma/mes, ton/ta/tes, son/sa/ses, notre/nos, votre/vos, leur/leurs. The rule that possessive agrees with the NOUN it describes, not the possessor. The exception: `mon amie` not `ma amie` (masculine form before feminine vowel-starting noun).
**Vocabulary scope (16–20 words):** Family members (père, mère, frère, sœur, fils, fille, grand-père, grand-mère, oncle, tante, cousin/cousine, mari, femme, enfant), plus 4–5 personal objects (maison, appartement, voiture, chambre, travail).
**Dialogue scene:** A family dinner where someone introduces their family members across the table. 8–10 exchanges. **May use: être, avoir, -er verbs, articles, adjectives (L4+L5), possessives this lesson.**
**Exercises must include:** fill-blank with correct possessive adjective (test all persons), transformation (replace "le père de Marie" with correct possessive), multiple choice (son/sa/ses — which noun?), translation of possessive sentences, gender_sort applied to family nouns (is it mon or ma?), speaking prompt: describe your own family using possessives.
**Grammar tip:** "The biggest mistake: saying `sa mère` when talking about a woman's mother. It still works — `sa` means 'his/her/its' and agrees with mère (feminine), not with who the mother belongs to."

---

### Lesson 7 — Les Nombres et l'Heure
**Grammar:** Numbers 1–69 (systematically: 1–16 irregular, 17–69 compound patterns). Telling time: `Il est X heures`, `Il est X heures et demie`, `Il est X heures et quart`, `Il est X heures moins le quart`. 12h vs 24h formats. `À quelle heure?` — asking time. Time adverbs: matin, après-midi, soir, nuit.
**Vocabulary scope (20–22 words):** Numbers 1–69 (group as vocabulary), time-of-day words, key time expressions (tôt, tard, en avance, en retard, à l'heure, maintenant, bientôt, déjà). Days of the week (7 words — brief introduction, full coverage in Lesson 11).
**Dialogue scene:** Colleagues organising their workday schedules — "What time is your meeting?", "I have lunch at noon", "The train leaves at 18h15". 8–10 exchanges. **May use: être, avoir, -er verbs, articles, adjectives, possessives, numbers/time this lesson.**
**Exercises must include:** matching written numbers to digits, fill-blank with correct number word, clock-reading exercise (written description of a clock time), multiple choice on correct time phrasing, translation of schedule sentences, fill-blank: complete the time expression (Il est ___ heures et ___).
**Grammar tip:** "In France, official times (transport, TV, work) use the 24-hour clock. `Il est dix-huit heures trente` (18h30) is normal in formal speech. Conversationally, people say `six heures et demie du soir`."

---

### Lesson 8 — Les Articles Partitifs et la Nourriture
**Grammar:** Partitive articles: du (masculine), de la (feminine), de l' (before vowel/h), des (plural) — used for uncountable quantities and portions. After negation: all partitives become `de` / `d'` (je mange du pain → je ne mange pas de pain). The contrast: indefinite vs partitive (une pomme vs de la pomme vs des pommes — and when to use each). **`Je voudrais` and `Je prends` introduced as FIXED ORDERING PHRASES only**, with an explicit note: "These are polite expressions you'll use when ordering. You'll learn the grammar behind je voudrais at B1 level."
**Vocabulary scope (20–24 words):** Food categories: pain, beurre, fromage, viande, poulet, poisson, légumes (tomate, carotte, haricot), fruits (pomme, banane, raisin), boissons (eau, lait, jus, café, thé, vin), sucre, sel, huile.
**Dialogue scene:** Flatmates doing grocery shopping — what do they need, how much, dietary restrictions. 8–10 exchanges. **May use: être, avoir, -er verbs, articles (L4), adjectives (L5), possessives (L6), numbers for quantities (L7), partitives this lesson. Negation of partitives introduced here.** (ne...pas with nouns only — full negation with all verbs comes in L9.)
**Exercises must include:** fill-blank choosing between definite / indefinite / partitive article, transformation (positive → negative, partitive → de), multiple choice: which article fits this context?, matching food items to their category, translation of shopping list sentences, gender_sort for food nouns.
**Grammar tip:** "After `ne...pas` and expressions of quantity (`un kilo de`, `une bouteille de`, `beaucoup de`), the partitive always shrinks to just `de`. `Je bois du café` → `Je ne bois pas de café` / `Je bois beaucoup de café`."

---

### Lesson 9 — La Négation et les Questions
**Grammar:** `ne...pas` with ALL regular -er verbs (building on L8's partial intro). Word order in negation: ne + verb + pas. Elision: `ne` → `n'` before vowels. Question forms: three ways to ask questions — (1) intonation (`Tu parles français?`), (2) est-ce que (`Est-ce que tu parles français?`), (3) inversion (`Parles-tu français?` — note this is formal, they'll use it but understand it). Interrogative words: où, quand, pourquoi, comment, qui, que/qu'est-ce que, combien.
**Vocabulary scope (15–18 words):** Interrogative words (7 listed above), common negative expressions to preview (`ne...jamais`, `ne...plus`, `ne...rien` — shown as fixed phrases only, full treatment in Lesson 12's review or A2), useful question words context: `aussi`, `non plus`, `si` (to contradict a negative question).
**Dialogue scene:** Two neighbours chatting in the building hallway — asking about each other's routines, plans, where they're going. The conversation involves several questions and negative answers. 10 exchanges. **May use: all structures from L1–L8.**
**Exercises must include:** transformation (affirmative → negative for 6 sentences), fill-blank with correct ne...pas placement, rewrite sentences as questions using all three question forms, multiple choice (which question word fits this answer?), matching questions to answers, translation of a short question-and-answer exchange.
**Grammar tip:** "In casual spoken French, the `ne` is almost always dropped: `Je sais pas` instead of `Je ne sais pas`. You'll hear this constantly. Always write both parts, but don't be surprised when natives skip the `ne`."

---

### Lesson 10 — Les Prépositions et les Lieux
**Grammar:** Prepositions of place: à, dans, sur, sous, devant, derrière, entre, à côté de, en face de, près de, loin de. `Aller + à/en/au/aux` with countries and cities (rule: feminine countries → en, masculine → au, plural → aux, cities → à). `Il y a` introduced as a fixed structure: "There is / There are." Introduce `venir de` as a fixed travel expression (don't conjugate venir fully — that is Lesson 12).
**Vocabulary scope (20–22 words):** Places in a city: gare, aéroport, musée, bibliothèque, hôpital, pharmacie, banque, poste, mairie, église, parc, rue, avenue, quartier. Directional verbs you already know: aller (L1 dialogue), plus `tourner`, `traverser`, `continuer` as new -er verbs this lesson.
**Dialogue scene:** A tourist asking a local for directions in Lyon — how to get to the train station, a pharmacy, a museum. Using `il y a` to say what exists nearby. 10 exchanges. **May use: all structures from L1–L9.**
**Exercises must include:** fill-blank with correct preposition of place, multiple choice: à / en / au / aux for different destinations, matching place names to their category, `il y a` construction — create 4 sentences from prompts, translation of directional instructions, speaking prompt: describe where you live using 4 prepositions.
**Grammar tip:** "Remember: `au` = à + le, `aux` = à + les. So `Je vais au marché` (le marché → au marché). Cities never take an article: `Je vais à Paris`, never `Je vais au Paris`."

---

### Lesson 11 — Les Nombres 70–1000 et les Dates
**Grammar:** Numbers 70–1000 (the logic of 70–79 as 60+10, 80 as 4×20, 90 as 4×20+10). Ordinal numbers: premier/première, deuxième, troisième... (for dates, floors, rankings). All months, all seasons. Date construction: `le + ordinal/cardinal + month + year`. Day expressions: hier, aujourd'hui, demain, la semaine prochaine, le mois dernier. Years: `en + year` for "in a year."
**Vocabulary scope (18–22 words):** Numbers 70–100 + 200, 300, 500, 1000 as vocabulary items. All 12 months. Four seasons. `Quel jour / Quelle date sommes-nous?` as fixed question phrase. Key calendar vocab: anniversaire, fête, vacances, congé, rendez-vous.
**Dialogue scene:** Two colleagues planning an upcoming trip — agreeing on dates, booking train tickets, discussing when events happen during the year. 10 exchanges. **May use: all structures from L1–L10.**
**Exercises must include:** number-writing exercise (digit → written French), date-reading (given a date in French, write it correctly), fill-blank with correct month or season, multiple choice on ordinal numbers, translation of date sentences, matching numbers 70–99 to their mathematical logic (70 = soixante-dix, etc.).
**Grammar tip:** "French numbers 70–99 are quirky by design — they survived from old Gaulish counting. A fun mnemonic: 80 is `quatre-vingts` (4 × 20), like an old shopkeeper counting in groups of 20. Once you accept the logic, it clicks."

---

### Lesson 12 — Verbes Irréguliers Essentiels
**Grammar:** Present tense of: `faire` (fais/fais/fait/faisons/faites/font), `venir` (viens/viens/vient/venons/venez/viennent), `pouvoir` (peux/peux/peut/pouvons/pouvez/peuvent), `vouloir` (veux/veux/veut/voulons/voulez/veulent). Futur proche: `aller + infinitive` (already partially familiar from using `aller` to go places). Common `faire` expressions: faire du sport, faire la cuisine, faire les courses, faire un voyage.
**Vocabulary scope (18–20 words):** The 4 irregular verbs above + 6–8 faire expressions + `venir de + infinitive` (to have just done something) as a fixed phrase preview + `pouvoir / vouloir + infinitive` constructions with 4 familiar infinitives as examples.
**Dialogue scene:** Friends making weekend plans — what they want to do, what they can and can't do, what they're going to do later. Clear use of modal constructions. 10–12 exchanges. **May use: all structures from L1–L11. This is the capstone lesson.**
**Exercises must include:** full conjugation tables for all 4 verbs (fill blanks), multiple choice selecting correct irregular form, transformation (present → futur proche), fill-blank with correct irregular verb, matching faire expressions to their English meaning, translation of 4 sentences using modals + infinitive, speaking prompt: describe your plans for this weekend using futur proche + at least 2 irregular verbs.
**Grammar tip:** "Vouloir and pouvoir are 'boot verbs' — their stems change in a boot shape (je/tu/il change, nous/vous stay closer to infinitive). Notice: je veux / nous voulons. The pattern repeats in many irregular verbs at A2."

---

## Component Updates

### `components/lessons/InteractiveExercise.tsx`

Extend the existing component to handle these new exercise types:

- **`gender_sort`**: Show nouns one at a time; learner clicks "Masculin" or "Féminin" button. Track score across all items.
- **`transformation`**: Show the original sentence; learner types the transformed version. Accept all valid answers in `correct_answer` array.
- **`conjugation`**: Show a conjugation table grid with all 6 pronoun rows; learner fills in each form. Mark individual cells correct/incorrect.
- **`matching`**: Two columns — French left, English right — learner draws connections. On mobile: select French, then select English match.

Remove all `audioService` imports and calls. Remove the `audio_prompt` field handling.

The speaking_prompt type: show the prompt, show a "I said it!" button, then reveal the model answer and translation. It is self-assessed (marked correct on attempt).

### `components/lessons/BeginnerLessonPage.tsx`

- Update the lesson navigation to handle lessons 1–12
- Remove all audio-related state and handlers
- The `lessonId` prop and exercise completion tracking remain unchanged

### `src/app/lessons/beginner/page.tsx`

- Display all 12 lessons in the grid (not 10)
- Lessons 1–6 marked as `is_free: true`, lessons 7–12 `is_free: false`

### `src/app/lessons/beginner/[1-12]/page.tsx`

Create 12 individual lesson pages. They all follow the same pattern as the existing lesson pages but use `BeginnerLessonPage` with the updated lessonId. Create pages for lessons 11 and 12 that do not currently exist. Remove audio imports from all lesson pages.

---

## Quality Checklist (Codex must verify before finishing)

Before completing, check each lesson in `lessonData.ts` against this list:

- [ ] Dialogue uses no grammar from lessons not yet taught
- [ ] Vocabulary count is between 15 and 25
- [ ] At least 8 exercises per lesson
- [ ] At least 4 different exercise types per lesson
- [ ] Every vocabulary item has `pronunciation`, `example_sentence`, and `example_translation`
- [ ] Every dialogue exchange has `pronunciation`
- [ ] Grammar section has a `tip`
- [ ] Cultural notes are specific and factual (not generic clichés like "French people love wine")
- [ ] Lesson difficulty values match the scale: L1=1, L2=1, L3=2, L4=2, L5=3, L6=3, L7=2, L8=3, L9=3, L10=3, L11=3, L12=4
- [ ] `je voudrais` does not appear in L1–L7 dialogues or examples
- [ ] Partitive articles do not appear in L1–L7 dialogues
- [ ] -er verb conjugations do not appear in L1–L2 dialogues
- [ ] No audioService imports remain anywhere in lesson pages or components

---

## What NOT to Change

- `lib/supabase.js` — untouched
- `lib/services/` — all service files untouched (audio services simply stop being imported)
- `src/app/globals.css` — untouched
- `src/app/layout.tsx` — untouched
- `src/app/lessons/elementary/` — untouched
- `src/app/page.tsx` (landing page) — untouched
- All other pages (grammar-guide, vocabulary-builder, community, support, etc.) — untouched
- `database-setup.sql` — untouched
- `public/` — untouched
- `tsconfig.json`, `next.config.ts`, `package.json` — untouched
