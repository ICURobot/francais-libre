# Codex Prompt: FrançaisLibre — B2 Curriculum Build (Lessons 43–58)

## Project Context

You are working on **FrançaisLibre**, a Next.js 15 / TypeScript / Tailwind CSS French learning web app.

- **A1 curriculum (Lessons 1–12):** Complete in `lib/lessons/lessonData.ts`, pages at `src/app/lessons/beginner/`
- **A2 curriculum (Lessons 13–26):** Complete, pages at `src/app/lessons/elementary/`, layout at `components/lessons/ElementaryLessonLayout.tsx`
- **B1 curriculum (Lessons 27–42):** Complete, pages at `src/app/lessons/intermediate/`, layout at `components/lessons/IntermediateLessonLayout.tsx`
- **B2 curriculum (Lessons 43–58):** What you are building now — 16 lessons at CEFR B2 Upper-Intermediate / Advanced level

**Tech stack:** Next.js 15, TypeScript, Tailwind CSS. **No audio generation** — do not add any audio-related code. No Supabase calls in new pages.

---

## Pedagogical Sources & Curriculum Grounding

This B2 curriculum was built by cross-referencing five authoritative sources. Every lesson reflects their combined pedagogical wisdom.

### 1. CEFR B2 "Vantage" Level Descriptors

CEFR B2 is defined as the upper threshold of independent language use — where a learner becomes a genuinely autonomous user of the language. The B2 learner can:

- **Understand** the main ideas of complex text on both concrete and abstract topics, including technical discussions in their field
- **Interact** with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible without strain for either party
- **Produce** clear, detailed text on a wide range of subjects
- **Explain** a viewpoint on a topical issue giving the advantages and disadvantages of various options
- **Follow** extended speech and complex arguments provided the topic is reasonably familiar
- **Understand** a wide range of recorded audio material (radio, podcasts, films) with some effort on non-standard material

More granularly, CEFR B2 discourse-level competences include: adapting language register to context and interlocutor; recognising implicit meaning, attitude, and irony in spoken and written French; constructing sustained, logically coherent arguments in writing and speech; understanding literary and journalistic French without systematic consultation of a dictionary; using complex sentence structures with grammatical control.

**How this shapes FrançaisLibre B2:** Each lesson's dialogue must reach B2 sophistication — genuine argumentation, register awareness, nuance. Dialogues model the kind of French used in French radio debates (France Culture, France Inter), serious journalism (Le Monde diplomatique, Libération), and educated informal conversation. CEFR can-do anchors for each lesson are noted in the briefs below.

### 2. DELF B2 Official Exam Syllabus

The DELF B2 is the internationally recognised certification for B2 French. It tests a specific set of grammar and discourse skills across four components. The B2 structures this curriculum is anchored to:

| DELF B2 Point | Our Lesson(s) |
|---|---|
| Le subjonctif passé | L43, L58 |
| L'infinitif passé (après avoir/être) | L44, L58 |
| La concordance des temps (full system) | L45, L58 |
| Le passé simple (recognition) | L46 |
| Ce qui / ce que / ce dont / ce à quoi | L47 |
| La mise en relief (c'est...qui/que) | L48, L58 |
| Les hypothèses mixtes (mixed conditionals) | L49 |
| La nominalisation | L50 |
| Le participe présent en apposition | L51 |
| Les registres de langue | L52 |
| La négation avancée | L53 |
| Le discours indirect avancé | L54 |
| Les constructions impersonnelles formelles | L55 |
| Les pronoms emphatiques avancés | L56 |
| L'argumentation formelle | L57 |

**Important scope notes for B2:**
- **Passé simple:** Recognition and reading comprehension ONLY. Learners must be able to identify passé simple in literary and journalistic texts and understand the meaning. No productive use is expected or tested.
- **Subjonctif passé:** Full productive use — this is the most heavily tested B2 grammar point on the DELF B2 production écrite.
- **Registres de langue:** Explicitly tested in DELF B2 compréhension de l'oral and production écrite (candidates must produce text appropriate to a formal register).
- **Argumentation formelle:** The DELF B2 production écrite task requires a structured formal argument (lettre formelle, essai, article) — this is tested on every DELF B2 sitting.

### 3. Alter Ego+ 4 (Hachette FLE, B2)

Alter Ego+ 4 is the gold-standard classroom coursebook for B2, used in French institutes worldwide. It is organised into **9 dossiers**, each built around:
- A **thematic cultural dossier** (identités, médias et société, arts et création, engagement citoyen, science et éthique, patrimoine et modernité, langue et communication, mondialisation, mémoire et transmission)
- An **authentic document** as entry point (news article, literary extract, documentary extract, infographic, interview)
- Grammar **emerging from text analysis**, not presented as rules first

**What we borrow from Alter Ego+ 4 (adapted, not copied):**
- The **register-awareness** approach: every dialogue in B2 is calibrated to a specific register (soutenu / courant / familier) which learners are expected to recognise and reproduce
- The **literary text interface**: several lessons in L43–58 cite or allude to authentic French literary/journalistic texts — not as examples to read in full, but as the type of language learners are building toward
- Grammar sequencing: Alter Ego+ 4 introduces subjonctif passé (Dossier 2), concordance des temps (Dossier 3), nominalisation (Dossier 4), registres (Dossier 5), passé simple in literary extracts (Dossier 7), argumentation formelle (Dossier 9). Our L43–57 follows this same evidenced sequence.
- **The "projet" culmination**: each dossier ends with a production task. Our L57 (argumentation) and L58 (capstone) serve this function.

### 4. Édito B2 2022 (Didier FLE)

Édito B2 is structured around **12 thematic units** anchored in contemporary French media documents. Its key pedagogical contributions:

- **Authentic document types for dialogue inspiration:** At B2, dialogues should feel like they could accompany a genuine French cultural document — a France Culture radio debate, a literary interview, a formal letter exchange, a conference Q&A, a film review discussion. The type is specified per lesson.
- **Contemporary French intellectual life:** Édito B2 themes include numérique et société, environnement et responsabilité, arts et culture, économie et mondialisation, mémoire et identité, langues et diversité, engagement et politique, sciences et éthique. Our cultural notes draw from these domains.
- **Argumentation and critical thinking:** Édito B2 places heavy emphasis on constructed written argument from Unit 3 onwards. This grounds our L50 (nominalisation), L57 (argumentation formelle), and L58 (capstone) as production-oriented lessons.

### 5. Grammaire Progressive du Français — Niveau Avancé (CLE International)

This is the reference grammar workbook for B2–C1, the advanced companion to the Intermédiaire volume used at B1. Its chapters provide the structural models for our B2 grammar explanations.

**What we borrow from Grammaire Progressive Avancé (adapted):**
- The systematic treatment of subjonctif passé as the B2-defining grammar point (Chapter 1–3 of the Avancé volume)
- The concordance des temps full system — not just "what tense after what verb" but the underlying logic of temporal reference relationships
- The nominalisation chapter's three-step transformation method (verb → verbal noun, adjective → abstract noun, clause → noun phrase)
- The register chapter's taxonomy (soutenu / courant / familier / argotique / vulgaire) with the explicit warning that mixing registers incorrectly signals poor French even when grammar is correct
- Error pattern identification: the Avancé volume identifies errors typical of B1→B2 transition (overusing subjonctif présent where passé is needed; mixing registers; incorrect passé simple recognition; confusing participe présent with gérondif)

### 6. Textbook Findings (Local Sources)

The following insights were drawn from the local textbook files and inform specific lesson design:

**Practice Makes Perfect — Complete French Grammar:**
- Chapter 14 (Infinitif passé, lines 9578–9660): Confirms that `après avoir/être + pp` is the canonical form; distinguishes it from `avant de + infinitif présent`; notes that the subject of the infinitif passé must match the main clause subject
- Chapter 16 (Passé simple, lines 10520–11018): Extensive conjugation reference; confirms that -er verbs take `-a/-âmes/-âtes/-èrent` endings; irregular passé simples (être→fut, avoir→eut, faire→fit, venir→vint, voir→vit); pedagogical note that recognition alone suffices for most learners
- Chapter 18 (Concordance des temps, lines 11424–11580): Full dependency tables for main clause tense → subordinate clause tense; the system of anteriorité / simultanéité / postériorité
- Chapter 24 (Ce qui / ce que / ce dont / ce à quoi, lines 16580–16670): Systematic treatment of indefinite relatives as nominalisers and fronting devices; ce à quoi introduced as the most complex form

**Collins Easy Learning French Grammar:**
- Emphatic/stressed pronouns (lines 4554–4683): moi, toi, lui, elle, nous, vous, eux, elles; uses as reinforcement, after prepositions, in comparison, with même; soi for indefinite reference
- C'est...qui / C'est...que (lines 15395–15399): Confirmed as the primary French cleft construction; ce sont...qui for plurals

**Assimil French 2020:**
- Register distinction (lines 8140–8210, lesson 39): Explicit taxonomy of French registers with real example contrasts (formal letter vs email vs text message vs spoken conversation — same message, four registers)
- Participe présent (lines 8880–8970, lesson 42): Confirmed distinction between en + présent participle (gérondif = simultaneous action) and présent participle alone (appositive clause = manner or cause); the two forms look identical except for the `en`
- Passé simple recognition (lines 8971+): Examples from literary French; recommendation that B2 learners must be able to parse passé simple in literary extracts even if they never produce it

---

## CEFR B2 Target: What Learners Can Do After L43–58

By the end of L58, the FrançaisLibre B2 learner should be able to:
1. Express anteriority in subjunctive contexts using the past subjunctive (L43)
2. Express prior actions relative to a main clause using the past infinitive (L44)
3. Navigate the full French tense concordance system in embedded clauses (L45)
4. Read and understand literary and journalistic French featuring the passé simple (L46)
5. Reformulate and front ideas using indefinite relative clauses (L47)
6. Produce emphatic cleft constructions for focus and contrast (L48)
7. Express complex hypothetical relationships across past and present time frames (L49)
8. Transform verbal constructions into nominal form for formal written French (L50)
9. Use the appositive present participle as a condensed clause substitute (L51)
10. Adapt their French consciously to the appropriate register for each context (L52)
11. Deploy the full range of French negation structures including restrictive and emphatic negation (L53)
12. Report complex speech with full back-shifting across all B2 tenses (L54)
13. Construct formally correct impersonal constructions for academic and administrative French (L55)
14. Use emphatic pronouns correctly in all positions including reflexive-emphatic and generic contexts (L56)
15. Write and deliver a structured formal argument in French (L57)
16. Integrate all B2 structures in extended, register-appropriate, argumentatively coherent discourse (L58)

---

## Current State — Nothing Exists for B2 Yet

There is no `/lessons/advanced/` route, no `AdvancedLessonLayout` component, and no B2 lesson data anywhere. You are building everything from scratch. Do NOT touch any existing files except the two listed under "Files to Update" at the end.

---

## What You Are Building

### New files to create:

1. **`components/lessons/AdvancedLessonLayout.tsx`** — reusable layout for all 16 B2 lesson pages (model it on `IntermediateLessonLayout.tsx` but do not copy blindly — see the interface spec below)
2. **`src/app/lessons/advanced/page.tsx`** — B2 level index page listing all 16 lessons
3. **`src/app/lessons/advanced/43/page.tsx`** through **`src/app/lessons/advanced/58/page.tsx`** — 16 individual lesson pages

### Existing files to update (minimal edits only):

4. **`src/app/lessons/page.tsx`** — Add a B2 section below the B1 section, showing all 16 B2 lessons with links to `/lessons/advanced/[n]`. Use the same card layout as the A1, A2, and B1 sections.
5. **`src/app/lessons/intermediate/page.tsx`** — Add a "Next Level" footer link pointing to `/lessons/advanced`

---

## Design Rules — Critical

Follow the same visual identity as A1/A2/B1. The B1 `IntermediateLessonLayout` already implements this correctly — use it as your reference.

**Design tokens (Tailwind custom classes — all exist in globals.css):**
- `bg-surface` — page background
- `bg-primary` / `text-on-primary` — navy accent (#002395)
- `text-primary` — heading colour (navy)
- `text-secondary` — labels, captions
- `bg-surface-container-lowest` — card background
- `bg-surface-container-low` — tags/badges
- `font-display` — Epilogue Black, tracking-tighter (hero headings)
- `font-body` — body text
- `font-label` — small uppercase labels, metadata

**Section heading pattern for B2 index:**
```tsx
<div className="flex items-baseline gap-4 mb-10 overflow-hidden">
  <h2 className="font-display text-4xl font-black text-primary-container">B2</h2>
  <span className="font-label uppercase tracking-[0.3em] text-sm text-secondary font-bold">Avancé</span>
  <div className="flex-grow h-px bg-surface-container-highest"></div>
</div>
```

**Absolutely no:** green gradients, emoji flags, `rounded-[24px]` backdrop-blur cards, coloured shadow hovers, inline emoji in content.

---

## AdvancedLessonData Interface

Define this in `components/lessons/AdvancedLessonLayout.tsx` and export it. All 16 lesson pages import from it.

```typescript
interface GrammarPoint {
  title: string
  explanation: string
  examples: string[]          // 5–7 example strings; may include labels: "RULE:", "CONTRAST:", "PIÈGE:"
  tip?: string                // required on every grammar point — one sentence targeting the most common B2 learner error
}

interface VocabItem {
  french: string
  english: string
  category: string            // e.g. "Subj. passé trigger", "Register marker", "Nominalisation"
  example?: string            // full example sentence in French
  note?: string               // register level or grammar note (e.g. "[soutenu]", "[familier]", "+ subjonctif passé")
}

interface CulturalNote {
  title: string
  content: string
}

interface AdvancedDialogueExchange {
  speaker: string
  french: string
  english: string
  pronunciation?: string      // par-TAY format, stressed syllable capitalised — required for genuinely difficult B2 vocabulary only
}

interface AdvancedDialogue {
  title: string
  context: string
  register: 'soutenu' | 'courant' | 'familier'   // explicit register label — new at B2
  exchanges: AdvancedDialogueExchange[]
}

export interface AdvancedLessonData {
  id: number
  title: string
  title_fr: string
  level: 'B2'
  description: string
  dialogue: AdvancedDialogue
  grammarPoints: GrammarPoint[]
  vocabulary: VocabItem[]
  culturalNotes?: CulturalNote[]
  exercises: Exercise[]       // from lib/lessons/lessonTypes
}
```

Import `Exercise` from `../../lib/lessons/lessonTypes`.

Each lesson page uses this pattern:
```tsx
'use client'
import AdvancedLessonLayout, { AdvancedLessonData } from '../../../../../components/lessons/AdvancedLessonLayout'

const lessonData: AdvancedLessonData = { ... }

export default function Lesson43Page() {
  return (
    <AdvancedLessonLayout
      lessonData={lessonData}
      lessonNumber={43}
      prevHref="/lessons/advanced"
      prevLabel="B2 Overview"
      nextHref="/lessons/advanced/44"
      nextLabel="L'Infinitif Passé"
    />
  )
}
```

The last lesson (58) has no `nextHref`. The first lesson (43) has `prevHref="/lessons/advanced"`.

---

## New Exercise Types to Add

Add both to `lib/lessons/lessonTypes.ts` (append to the `Exercise` union type) and implement both in `components/lessons/InteractiveExercise.tsx`:

### `register_sort` — Sort by Register Level
```typescript
export interface RegisterSortExercise {
  id: string
  type: 'register_sort'
  question: string                // e.g. "Sort these expressions by register: formal → neutral → informal"
  categories: string[]            // e.g. ["soutenu", "courant", "familier"]
  items: {
    expression: string            // the word or phrase to sort
    correct_category: string      // must match one of `categories`
    explanation: string           // why this register level
  }[]
}
```
UI: Three labelled columns. Drag-and-drop items into columns (or click to assign on mobile). On submit, reveal per-item correctness and explanations.

### `argumentation` — Build a Structured Argument
```typescript
export interface ArgumentationExercise {
  id: string
  type: 'argumentation'
  question: string                // the thesis or prompt to argue about
  structure: {
    label: string                 // e.g. "Introduction", "Argument 1", "Concession", "Conclusion"
    instruction: string           // what to write in this section
    model?: string                // optional model sentence to guide the learner
    connector_hints?: string[]    // suggested connectors to use (e.g. "En premier lieu", "Certes", "En conclusion")
  }[]
  word_count_target?: number      // optional target length in words
}
```
UI: Structured textarea scaffold — one text area per section, with label and instruction visible. On submit, show the full model answer with annotations.

---

## B2 Curriculum — 16 Lessons (Lessons 43–58)

**Sequencing rationale:** The subjonctif passé (L43) comes first because it is the single most tested B2 grammar point on the DELF B2 and directly extends the B1 subjunctive system learners already know. The infinitif passé (L44) is next because it shares the auxiliary+pp structure and is the simplest B2 construction to add. Concordance des temps (L45) and passé simple (L46) complete the tense system, enabling authentic text reading. Indefinite relatives (L47) and mise en relief (L48) are discourse tools that transform B2 production quality immediately. Mixed conditionals (L49) complete the hypothetical system. Nominalisation (L50) and participe présent en apposition (L51) are the two most visible markers of formal written French. Register (L52) is the meta-skill that makes all previous structures work together in context. Négation avancée (L53), discours indirect avancé (L54), and impersonal constructions (L55) address the three remaining DELF B2 grammar targets. Emphatic pronouns (L56) and argumentation formelle (L57) serve as pre-capstone capstones — the first completing the pronoun system, the second completing the discourse system. L58 is the full B2 integration capstone.

| Order | Title (EN) | Title (FR) | Core Grammar |
|-------|-----------|-----------|-------------|
| 43 | The Past Subjunctive | Le Subjonctif Passé | que j'aie fait / qu'il soit allé — anteriority under doubt/emotion/obligation |
| 44 | The Past Infinitive | L'Infinitif Passé | après avoir/être + pp — prior action in same-subject clause |
| 45 | Tense Concordance | La Concordance des Temps | full dependency system: anteriorité/simultanéité/postériorité in all moods |
| 46 | The Passé Simple | Le Passé Simple | recognition-focused; literary register; all major forms |
| 47 | Indefinite Relatives | Les Relatifs Indéfinis | ce qui / ce que / ce dont / ce à quoi — nominalising and fronting |
| 48 | Cleft Sentences | La Mise en Relief | c'est...qui / c'est...que — focus and contrast |
| 49 | Mixed Conditionals | Les Hypothèses Mixtes | Type 2 + Type 3 mixing; nuanced hypothetical discourse |
| 50 | Nominalisation | La Nominalisation | verb→noun, adj→abstract noun, clause→NP for formal French |
| 51 | Appositive Participle | Le Participe Présent en Apposition | condensed clause; vs gérondif; agreement of past participle in apposition |
| 52 | Language Registers | Les Registres de Langue | soutenu/courant/familier/argot — code-switching and register detection |
| 53 | Advanced Negation | La Négation Avancée | ne...que / ne...guère / ne...aucun / ne...nul / sans que + subj |
| 54 | Advanced Reported Speech | Le Discours Indirect Avancé | full back-shifting including B2 tenses; nuance verbs; implicit speech |
| 55 | Formal Impersonal Constructions | Les Constructions Impersonnelles | il s'agit de / il convient de / il importe que / il suffit de / quoi qu'il en soit |
| 56 | Emphatic Pronouns | Les Pronoms Emphatiques | moi-même / lui seul / eux aussi; after prepositions; in comparisons; soi |
| 57 | Formal Argumentation | L'Argumentation Formelle | structuring essai / lettre formelle / prise de position; connectors + register |
| 58 | B2 Capstone | Consolidation B2 | Integration of all B2 structures |

---

## Strict Rules (Non-Negotiable)

1. **Grammatical sequencing:** Dialogue for Lesson N may only use structures taught in Lessons 1 through N.
   - Lessons 43–44: no passé simple in dialogues (taught in L46 — recognition only anyway)
   - Lessons 43–46: no indefinite relative clauses with ce qui/ce que in dialogues (taught in L47)
   - Lessons 43–47: no cleft constructions in dialogues (taught in L48)
   - Lessons 43–48: no mixed conditionals in dialogues (taught in L49)
   - Lessons 43–51: register variation may appear naturally but is not explicitly taught until L52
   - Subjonctif passé (L43) may appear in dialogues from L43 onwards
   - Infinitif passé (L44) may appear in dialogues from L44 onwards
   - Structures from B1 (L27–42) are freely available throughout all B2 lessons

2. **Vocabulary cap: 28–36 words per lesson.** B2 allows richer, more domain-specific vocabulary. Never exceed 36. Draw from DELF B2 frequency lists — academic discourse, current affairs, cultural life, professional communication.

3. **Exercises: minimum 10 per lesson.** Minimum 6 different exercise types. Lesson 58 gets 12 minimum.

4. **Subjonctif passé accuracy is non-negotiable.** The past subjunctive is used only when:
   - The action in the subordinate clause **precedes** the action in the main clause, AND
   - The main clause contains a subjunctive trigger (obligation, emotion, doubt, concession)
   - Example: `Je suis content qu'il soit venu` (he came → before → I am content NOW)
   - If the action is simultaneous or future relative to the main clause → present subjunctive
   - `bien que + subjonctif passé` = although [something has already happened]

5. **Passé simple is recognition-only.** Never include passé simple in fill-blank, conjugation, or production exercises. The lesson teaches learners to identify and understand it in literary extracts. All exercises involving passé simple are comprehension-based: matching passé simple forms to their infinitives, identifying the narrative subject, understanding sequence in a literary passage.

6. **Concordance des temps (L45) is the most complex lesson in B2.** It must present the full tense dependency table clearly, distinguishing:
   - Main verb in PRESENT → subordinate simultaneous: present / future: future / prior: past (PC or imparfait)
   - Main verb in PAST → subordinate simultaneous: imparfait / future: conditionnel présent / prior: PQP or conditionnel passé
   - Main verb in CONDITIONAL → treat same as past (simultaneous = conditionnel présent, prior = conditionnel passé)
   - Subjonctif concordance: at B2 level, only subjonctif présent and subjonctif passé are used (subjonctif imparfait and subjonctif plus-que-parfait are literary/archaic — recognition only, labelled as such)

7. **Register labels are mandatory from L52 onwards.** Every vocabulary item in L52–58 that has a register implication must include a `note` field with `[soutenu]`, `[courant]`, `[familier]`, or `[argotique]`. Every dialogue in L52–58 must include its `register` field set explicitly. Every exercise in L52–58 that involves register must identify which register is expected.

8. **Dialogues at B2 are longer and more sophisticated.** Minimum 13 exchanges per lesson. Minimum 15 for L52 (register — needs to demonstrate multiple registers), minimum 16 for L57 (argumentation) and L58 (capstone). Dialogue language should feel like educated native French — natural discourse markers, ellipsis, register consistency, implicit reference. Not textbook sentences.

9. **Grammar tip required on every grammar point.** Tips at B2 should target B1→B2 transition errors specifically — the errors a solid B1 learner makes when first encountering B2 structures. Every `grammarPoint` object must have a `tip` field.

10. **No C1 structures:**
    - No subjonctif imparfait or plus-que-parfait in productive contexts (labelled as literary recognition in L45 only)
    - No inversion other than est-ce que inversion and subject-verb inversion in questions
    - No literary word order inversions (e.g., `Ainsi parlait-il`)
    - No double-negation stacking (ne...ni...ni...que) as a productive skill — recognition only
    - No archaic vocabulary for production (learners may encounter these in passé simple texts)

11. **Nominalisation (L50) follows the Grammaire Progressive Avancé three-step method:**
    - Step 1: Verbal nominalisation — identify the verbal noun form (la décision de, le refus de, l'arrivée de, la construction de)
    - Step 2: Adjectival nominalisation — identify the abstract noun form (la beauté, la rapidité, la complexité)
    - Step 3: Clause condensation — replace a que + subjonctif/indicatif clause with a nominal construction (Il est important que vous partiez → Votre départ est important)
    Do not introduce nominalisations that don't follow predictable morphological patterns.

12. **Argumentation formelle (L57) must teach a complete essay structure.** The French essay structure (introduction avec problématisation → développement en deux ou trois parties → conclusion) is culturally specific and differs from Anglophone 5-paragraph essay conventions. The lesson must explicitly teach this structure, not assume it.

13. **Pronunciation guides** are optional at B2. Include only for words that are genuinely tricky at this level (e.g., liaison traps, silent letters in formal vocabulary, words where learners with English habits predictably mispronounce). Never include pronunciation guides on common words the learner already knows.

14. **Cultural notes: 3–5 per lesson.** At B2, cultural notes move toward intellectual and institutional France — the grandes écoles, the philosophy of the République, French literary traditions, political culture, environmental debates, the French approach to art and cinema. Not tourist clichés. Think the kind of France that France Culture covers.

---

## Lesson-by-Lesson Pedagogical Brief

### Lesson 43 — Le Subjonctif Passé
**CEFR B2 can-do:** Express reactions to and evaluations of completed events and prior actions in formal and informal registers; understand nuanced editorial opinion and formal correspondence.
**DELF B2 alignment:** Subjonctif passé — the most tested B2 grammar point on the DELF B2 production écrite. Learners who produce only subjonctif présent in contexts requiring anteriority are penalised.
**Alter Ego+ 4 parallel:** Dossier 2 introduces the subjonctif passé as a natural extension of the subjonctif présent — same triggers, but the anterior action is now complete. This is framed explicitly as the "B2 upgrade" of the B1 subjunctive system.
**Authentic document type (Édito approach):** A formal letter of complaint or appreciation — the genre where subjonctif passé is most densely used in authentic French (administrative correspondence routinely uses `Je suis navré que vous ayez eu à...`, `Bien que vous ayez rempli toutes les conditions...`).

**Grammar:** 
Formation: auxiliary (être or avoir) in **subjonctif présent** + past participle. Same être/avoir choice as passé composé. Same agreement rules.
- avoir → que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient
- être → que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient
Full example: `que j'aie parlé`, `qu'elle soit partie`, `qu'ils se soient vus`

**When to use:** The subjunctive trigger is in the main clause AND the subordinate action **precedes** the main clause action in time.
- `Je suis ravi qu'il soit venu hier.` (he came [before] → I am glad [now])
- `Il est dommage qu'elle ait manqué cette occasion.` (she missed it [before] → it's a shame [now])
- `Bien qu'il ait beaucoup travaillé, il n'a pas réussi.` (he worked hard [before/during] → he didn't succeed)

**Contrast with subjonctif présent (Grammaire Progressive Avancé approach):**
- Subjonctif présent = simultaneous or future relative to main clause: `Je veux qu'il vienne demain.`
- Subjonctif passé = anterior: `Je suis content qu'il soit venu hier.`
- Test: can you insert `déjà` (already) in the subordinate clause? If yes → passé likely.

**Vocabulary scope (28–30 words):** All B1 subjunctive triggers already known, now applied with passé. New vocabulary at B2 level from DELF B2 written production domain: navré(e) que, désolé(e) que, surpris(e) que, inacceptable que, inadmissible que, regrettable que, soulagé(e) que, reconnaissant(e) que, fier/fière que, impressionné(e) que. Also: formal trigger constructions: `il est regrettable que`, `il est inadmissible que`, `force est de constater que` + subjonctif passé when the observed situation is complete.

**Dialogue scene:** Two managers at a French non-profit discussing an event that took place last week — what they're glad happened, what was disappointing, what they regret. The conversation moves naturally between past facts (passé composé) and emotional reactions with subjonctif passé. Register: courant to slightly soutenu. 13 exchanges.

**Exercises (10 minimum):** Subjonctif passé formation drill (8 verbs including 3 être verbs + agreement), présent vs passé choice (8 items — is the subordinate action simultaneous or prior?), fill-blank with correct subjonctif passé form after emotion triggers, `mood_choice` (présent subjonctif vs passé subjonctif — 10 items), transformation (rewrite: `Je suis content qu'il vienne` → temporal shift → `Je suis content qu'il soit venu`), error correction (5 sentences using subjonctif présent where passé is required), translation EN→FR of 5 sentences using anterior subjunctive, speaking prompt.

**Cultural notes (3–4):**
- The French culture of formal written complaint (`lettre de réclamation`) — a socially accepted and institutionally recognised genre in France, with formal conventions (objet, formule de politesse, signature), used routinely with public services, utilities, and consumer disputes
- The DELF B2 production écrite task format — learners at this stage should understand what they're working toward: a 250-word formal text with specific register requirements
- French workplace politeness register: even in informal companies, written communication between colleagues tends toward the formal (vous, subjonctif) in a way that does not map directly onto English

---

### Lesson 44 — L'Infinitif Passé
**CEFR B2 can-do:** Condense prior-action clauses into elegant single-subject constructions; understand complex sentence structures in formal French texts.
**DELF B2 alignment:** Infinitif passé — tested in DELF B2 compréhension écrite (recognising prior-action constructions) and production écrite (candidates who can use this construction are rewarded for grammatical range).
**Alter Ego+ 4 parallel:** Dossier 2 presents the infinitif passé immediately after the subjonctif passé, framing both as "anteriority tools" — the choice depends on whether there is a same subject (infinitif passé) or different subjects (subjonctif passé).
**Authentic document type (Édito approach):** A literary or journalistic biographical sketch — the genre where past infinitives cluster naturally ("Après avoir étudié à Sciences Po, il a rejoint le ministère...").

**Grammar:**
Formation: `après avoir + past participle` OR `après être + past participle`. Subject of the infinitif passé MUST be the same as the main clause subject. Same être/avoir choice and agreement rules as passé composé.
- `Après avoir mangé, il s'est endormi.` (he ate → then he fell asleep — same subject)
- `Après être arrivée, elle a téléphoné à sa mère.` (she arrived → then she called — same subject, agreement)
- `Après s'être installés, ils ont commencé le travail.` (reflexive — agreement with subject)

**Contrast with `avant de + infinitif présent`** (Practice Makes Perfect ch.14 finding):
- `Avant de partir, je t'appellerai.` (before leaving — same subject, present infinitive)
- `Après être parti, je t'appellerai.` (after having left — same subject, past infinitive)
- The before/after contrast maps directly onto infinitif présent / infinitif passé

**When NOT to use:** Different subjects → use a full subordinate clause: `Après qu'il soit parti,...` (subordinate clause with subjonctif passé or indicatif) / `Quand il a eu fini,...` (passé antérieur — recognition only).

**Vocabulary scope (26–28 words):** Biographical and narrative transition vocabulary from DELF B2 domain: après avoir étudié, après être entré(e) dans, après avoir obtenu, après s'être marié(e), après avoir démissionné, après avoir été nommé(e), après s'être installé(e). Context verbs for temporal narrative: succéder (à), hériter (de), fonder, rejoindre, démissionner, intégrer, s'imposer. Register note: infinitif passé is neutral to slightly formal — common in journalism and formal CV-style narration.

**Dialogue scene:** Two journalists at a French newspaper constructing a biographical profile of a public figure. They consult their notes and reconstruct the chronology of the person's career — using infinitif passé to condense prior-action clauses. Register: courant professionnel. 13 exchanges.

**Exercises (10 minimum):** Formation drill (infinitif passé for 8 verbs including 3 être verbs with agreement), `avant de` vs `après avoir/être` choice (8 sentences), same-subject test (identify which sentences CAN use infinitif passé — 8 items, 4 valid and 4 invalid), transformation (two-sentence → `après avoir/être` condensation: `Il a fini. Il est sorti.` → `Après avoir fini, il est sorti.`), full biographical passage construction (6 events → write using infinitif passé), error correction (4 sentences where infinitif passé is wrongly used with different subjects), translation EN→FR of 4 sentences, speaking prompt (describe your own career/study path using `après avoir/être`).

**Cultural notes (3–4):**
- The French CV and biographical convention (`curriculum vitae` is more formal and standardised in France than in Anglophone contexts — the infinitif passé construction is standard in written biographical summaries)
- Sciences Po, l'ENA, Polytechnique — the grandes écoles system and how French elite educational paths are described in biographical prose
- French journalistic biography style — the `portrait` article in Le Monde or L'Obs typically uses infinitif passé constructions throughout

---

### Lesson 45 — La Concordance des Temps
**CEFR B2 can-do:** Understand complex embedded structures in formal French; produce correctly sequenced tenses in formal writing and reported contexts; follow extended discourse with multiple temporal reference points.
**DELF B2 alignment:** Concordance des temps — tested in DELF B2 compréhension de l'oral (complex narrative comprehension) and production écrite (well-structured text requires correct tense dependencies).
**Alter Ego+ 4 parallel:** Dossier 3 presents concordance as the systematic description of tense relationships in embedded clauses — main clause tense determines the available subordinate clause tenses.
**Authentic document type (Édito approach):** A documentary narration or formal report with embedded analysis — the type of text where tense concordance is most visible.

**Grammar:** The full concordance system — main clause tense governs the possible tenses in the subordinate clause (in indirect speech, relative clauses, and temporal clauses):

**When MAIN VERB is PRESENT or FUTURE:**
| Temporal relation | Subordinate tense |
|---|---|
| Simultaneous | Présent |
| Future/Subsequent | Futur |
| Prior | Passé composé / Imparfait |

**When MAIN VERB is PAST (PC, imparfait, passé simple):**
| Temporal relation | Subordinate tense |
|---|---|
| Simultaneous | Imparfait |
| Future/Subsequent | Conditionnel présent |
| Prior | Plus-que-parfait |

**When MAIN VERB is CONDITIONAL:**
Treat like past — subordinate simultaneous = conditionnel présent, prior = conditionnel passé.

**Subjonctif concordance at B2:** Main verb present/future + subjonctif trigger → subjonctif présent (simultaneous/future) or subjonctif passé (prior). Main verb past + subjonctif trigger → subjonctif présent (if simultaneous in reported context) or subjonctif passé (if prior). The literary subjonctif imparfait and subjonctif plus-que-parfait are labelled RECOGNITION ONLY — explain what they are, confirm they will appear in literary texts from L46 onwards, but do not test production.

**Vocabulary scope (28–30 words):** Temporal subordinators and transition markers that trigger concordance decisions: quand, lorsque, dès que, aussitôt que, après que (+ indicatif), avant que (+ subjonctif), jusqu'à ce que (+ subjonctif), pendant que, tandis que, une fois que, à peine...que. Register markers for formal tense sequencing in written French.

**Dialogue scene:** A French historian being interviewed for a podcast about a historical period — the interviewer asks questions in the present, the historian narrates in the past, explains what was thought at the time (imparfait), what had happened before (PQP), and what was going to happen (conditionnel). Natural cross-temporal embedded speech throughout. Register: courant intellectuel. 13–14 exchanges.

**Exercises (10 minimum):** Tense identification table (classify 12 subordinate clauses by their temporal relation to the main verb), fill-blank (choose correct subordinate tense — 10 items across both present and past main verbs), past→present main verb shift (transform 5 sentences — change main verb from present to past and adjust all dependent tenses), present→past main verb shift (5 sentences), subjonctif concordance choice (présent vs passé — 8 items), error correction (5 sentences with wrong concordance), paragraph rewrite (change a present-tense narration to past-tense narration — adjust all 8 embedded verb forms), translation EN→FR of 4 complex concordance sentences.

**Cultural notes (3–4):**
- The French podcast and radio documentary format (France Culture podcasts like "Les Nuits de France Culture" represent the height of spoken formal French — tense concordance is meticulous)
- French history education at the lycée (la dissertation historique requires precise tense sequencing — this skill is explicitly taught in French secondary schools)
- The subjonctif imparfait in literary French (Proust, Flaubert, Zola use it naturally — learners at B2 will encounter it in reading and should be able to interpret it, even if they never write it)

---

### Lesson 46 — Le Passé Simple
**CEFR B2 can-do:** Read and understand literary and journalistic texts written in the passé simple; parse narrative sequences in formal French writing; appreciate the register distinction between passé simple (literary) and passé composé (spoken/informal).
**DELF B2 alignment:** Passé simple — tested in DELF B2 compréhension écrite through literary and journalistic extracts that use passé simple throughout. Learners who cannot parse these forms will misunderstand the text.
**Alter Ego+ 4 parallel:** Dossier 7 introduces the passé simple in the context of a literary extract analysis — Alter Ego+ explicitly frames this as a recognition skill, not a production requirement.
**Authentic document type (Édito approach):** A literary extract (roman contemporain or classic French novel) accompanied by a journalistic article on the same theme — both use passé simple; learners read both registers.

**Grammar (RECOGNITION ONLY — no production exercises):**
Formation:
- **-er verbs:** -a, -as, -a, -âmes, -âtes, -èrent (parler → il parla, ils parlèrent)
- **-ir and -re verbs:** -it, -is, -it, -îmes, -îtes, -irent (finir → il finit, prendre → il prit)
- **Irregular (most important for reading):**
  - être → fut, fus, furent | avoir → eut, eus, eurent
  - faire → fit, fis, firent | venir → vint, vins, vinrent
  - voir → vit, vis, virent | prendre → prit, pris, prirent
  - aller → alla, allèrent | pouvoir → put, pus, purent
  - vouloir → voulut | savoir → sut | devoir → dut

**Register distinction (from Assimil lesson 42 research):**
- Passé simple = literary/formal written French; used in novels, historical accounts, formal journalism
- Passé composé = spoken French and informal written French (emails, messages, personal writing)
- In the same paragraph, a literary narrator might use passé simple for events and imparfait for descriptions — exactly as in passé composé narration, but shifted register
- Subjonctif imparfait and subjonctif plus-que-parfait co-occur with passé simple in literary French — RECOGNITION ONLY

**Vocabulary scope (26–28 words):** Literary register vocabulary that co-occurs with passé simple in authentic texts: narration verbs in their passé simple forms as vocabulary items (il dit, il fit, il vit, il fut, il alla, il prit, il parut, il sembla, il songea, il murmura). Passé simple identification markers: the `-a/-it/-ut` endings for singular; `-èrent/-irent/-urent` for third plural. Context vocabulary from literary/historical narrative domain.

**Dialogue scene:** A French literature teacher and a student discussing a novel they have both read. They quote passages (using passé simple) and discuss them (using passé composé and present). The contrast between the literary quotations and the discussion language makes the register distinction vivid. Register: courant intellectuel (with embedded soutenu literary quotations). 13 exchanges.

**Exercises (10 minimum — all COMPREHENSION, no production):** Passé simple identification (underline all passé simple forms in a 10-sentence literary extract), infinitive matching (passé simple form → infinitive — 12 items), subject identification (who is the subject of each passé simple verb in a paragraph?), sequence reconstruction (reorder 6 passé simple sentences into correct narrative sequence), register conversion (convert 5 passé simple sentences to passé composé — understanding equivalence), multiple choice comprehension (short literary extract → 5 comprehension questions), literary extract analysis (a 200-word paragraph; identify: how many passé simple forms? how many imparfait forms? what is the narrative structure?), translation FR→EN of 6 passé simple sentences (comprehension task), speaking prompt (discuss a book or film you've read/watched — you don't need passé simple, use passé composé).

**Cultural notes (3–5):**
- The French literary canon and why passé simple still matters (Flaubert, Zola, Camus, Duras — all major French novelists use passé simple; understanding it unlocks the entire French literary tradition)
- The Académie française and the defence of formal French (the Académie's role in maintaining a distinction between spoken and written registers — a specifically French cultural institution)
- Contemporary French literary prizes (Goncourt, Renaudot, Femina) as indicators of what literary French actually looks like today
- The `baccalauréat de français` — the French standardised exam at 16 requires students to analyse literary texts using passé simple; this is why all educated French people can read it

---

### Lesson 47 — Les Relatifs Indéfinis
**CEFR B2 can-do:** Reformulate ideas using indefinite relative constructions for emphasis and cohesion; understand complex fronted constructions in formal French texts.
**DELF B2 alignment:** Ce qui / ce que / ce dont / ce à quoi — tested in DELF B2 compréhension écrite and production écrite (these constructions are markers of B2 discourse quality).
**Alter Ego+ 4 parallel:** Dossier 4 presents indefinite relatives as "nominalising relatives" — they convert a clause into a subject, object, or complement noun phrase. This is the framing we use.
**Authentic document type (Édito approach):** An editorial or opinion column — the genre where fronted ce qui/ce que/ce dont constructions appear most frequently.

**Grammar:**
These are relative pronouns without an antecedent — they nominalise the entire relative clause:
- **Ce qui** = subject of the relative clause (replaces quelque chose qui...): `Ce qui m'intéresse, c'est la culture.` / `Je ne comprends pas ce qui se passe.`
- **Ce que** = object of the relative clause (replaces quelque chose que...): `Ce que je veux, c'est la paix.` / `Voilà ce qu'il a dit.`
- **Ce dont** = replaces quelque chose dont (de + clause): `Ce dont j'ai besoin, c'est d'un peu de calme.` / `Ce dont tu parles n'existe pas.`
- **Ce à quoi** = replaces quelque chose à quoi (à + clause): `Ce à quoi je pense, c'est l'avenir.` / `Je ne sais pas ce à quoi il fait référence.`

**Test from Practice Makes Perfect ch.24:** What follows the relative pronoun?
- A conjugated verb → ce qui
- A subject + verb → ce que
- The verb uses de → ce dont
- The verb uses à → ce à quoi

**Fronting pattern (mise en exergue — preview of L48):** `Ce qui m'étonne, c'est...` — the fronted ce qui clause followed by `c'est` + the comment. This is the most common B2 construction in French argumentation.

**Vocabulary scope (28–30 words):** Verbs and adjectives governing ce dont (those that use de): avoir besoin de, parler de, se souvenir de, rêver de, être question de, avoir peur de, tenir à. Verbs governing ce à quoi (those that use à): penser à, faire référence à, s'intéresser à, aspirer à, tenir à, s'attendre à. Formal fronting expressions: voilà ce qui, c'est ce que, tel est ce dont.

**Dialogue scene:** Two French intellectuals (researchers or writers) at a colloquium discussing a shared topic of interest. Their conversation uses ce qui/ce que/ce dont/ce à quoi naturally to front ideas, summarise positions, and create emphasis. Register: courant to soutenu. 13 exchanges.

**Exercises (10 minimum):** Ce qui/que/dont/ce à quoi identification (12 sentences — choose correct form), fill-blank (10 sentences), sentence combination using fronted ce qui (5 items: `La culture m'intéresse` → `Ce qui m'intéresse, c'est la culture`), sentence combination using ce dont (5 items), ce à quoi transformation (4 items — less common, appropriate difficulty), error correction (5 sentences with ce qui/ce que/ce dont confused), translation EN→FR of 5 sentences, `argumentation` exercise preview (use 2 ce qui / ce que / ce dont constructions to open an argument), speaking prompt.

**Cultural notes (3–4):**
- The French colloquium culture (colloques and journées d'études are central to French intellectual life — CNRS, universities, grandes écoles all organise them; they are the contexts where formal discourse markers like ce qui/ce dont appear naturally in speech)
- The essai français as a literary-intellectual genre (from Montaigne to contemporary writers — the essai uses indefinite relatives as markers of intellectual precision)
- Contemporary French intellectual media (Les Grandes Tables on France Culture; Philosophie Magazine; La Revue des Deux Mondes — the written and spoken registers where these constructions appear)

---

### Lesson 48 — La Mise en Relief
**CEFR B2 can-do:** Produce and understand cleft constructions used for emphasis and contrast; recognise the focus-marking function of c'est...qui/que in spoken and written French.
**DELF B2 alignment:** Mise en relief — tested in DELF B2 production écrite (cleft sentences are a register marker of sophisticated written French) and compréhension de l'oral (understanding what a speaker is emphasising).
**Alter Ego+ 4 parallel:** Dossier 4 presents c'est...qui/que immediately after ce qui/ce que, as the other major "fronting" tool in French.
**Authentic document type (Édito approach):** A political speech or press conference — the genre where cleft sentences appear most frequently in spoken formal French.

**Grammar:**
`C'est...qui` — fronts a SUBJECT: `C'est Paul qui a téléphoné.` (It is Paul who called — emphasis on the subject Paul)
`C'est...que` — fronts an OBJECT, ADVERB, or ADVERBIAL: `C'est hier qu'il a téléphoné.` / `C'est toi que j'aime.`
`Ce sont...qui` — for plural subjects: `Ce sont eux qui ont décidé.`

**Pronouns in cleft constructions (Collins Easy Learning research finding):**
- Emphasised subject = stressed/emphatic pronoun: `C'est moi qui ai raison.` (NOT *C'est je qui...)
- `C'est moi qui ai / tu as / il a` — the verb agrees with the pronoun after qui
- `C'est lui que je connais.` / `C'est eux que j'ai vus.` (agreement with eux)

**Fronting a time expression:** `C'est en France qu'il habite.` / `C'est le lundi que je travaille.`
**Fronting a reason/cause:** `C'est parce qu'il était fatigué qu'il a refusé.`
**Negative cleft:** `Ce n'est pas lui qui a décidé, c'est elle.`
**ce qui/ce que + c'est (from L47):** `Ce qui me surprend, c'est sa réaction.` — this is the compound cleft construction, combining both lessons.

**Vocabulary scope (26–28 words):** Emphasis vocabulary from political and opinion discourse: c'est justement, c'est précisément, c'est surtout, c'est en particulier, c'est avant tout, c'est notamment, c'est uniquement, c'est davantage. Context from political/opinion register (DELF B2 compréhension de l'oral domain).

**Dialogue scene:** A televised political discussion — two politicians or commentators debating a policy issue. Both use cleft constructions to emphasise their points and contest each other's framings. Register: soutenu. 13 exchanges.

**Exercises (10 minimum):** Cleft construction identification (underline the fronted element in 10 sentences), type classification (c'est...qui / c'est...que / ce sont...qui — 10 items), construction drill (rewrite using cleft: `Paul a téléphoné hier` → `C'est Paul qui a téléphoné hier` / `C'est hier que Paul a téléphoné`), pronoun agreement (c'est + stressed pronoun + qui — 6 items with agreement), negative cleft (4 transformation items), compound cleft with ce qui/ce que (4 items), error correction (5 sentences with wrong qui/que choice or wrong verb agreement), translation EN→FR of 5 emphasis sentences, speaking prompt (argue a position using at least 3 cleft constructions).

**Cultural notes (3–4):**
- French political discourse and the art of emphasis (French politicians are trained in rhetoric — cleft sentences are a standard rhetorical tool in speeches at the Assemblée nationale, in press conferences, in televised debates like the débat de l'entre-deux-tours)
- The French school system's emphasis on oral rhetoric (éducation civique and philosophie classes explicitly teach students to structure and emphasise oral arguments — this is culturally specific)
- Sciences Po's public speaking tradition (students are trained to debate in this structured style from their first year)

---

### Lesson 49 — Les Hypothèses Mixtes
**CEFR B2 can-do:** Express complex hypothetical relationships involving different temporal frames; understand nuanced hypothetical arguments in formal texts and debates.
**DELF B2 alignment:** Hypothèses mixtes — while Type 1/2/3 pure forms are B1, the mixing of types in a single sentence is a B2 competency tested in DELF B2 production écrite.
**Alter Ego+ 4 parallel:** Dossier 6 presents hypothèses mixtes as the natural extension of the B1 si clause system — what happens when the condition is in the past but the consequence is in the present, or vice versa.
**Authentic document type (Édito approach):** A philosophical interview or historical counterfactual discussion — the genre where mixed conditionals appear in sophisticated argument.

**Grammar:** B1 introduced the three pure types. B2 introduces MIXED types — condition and result are in different temporal frames:

**Type 2 + Type 3 mix (present result of past condition):**
`Si tu avais travaillé [PQP], tu saurais maintenant [conditionnel présent].`
(If you had worked [past — you didn't], you would know now [present result])

**Type 3 + Type 2 mix (past result of present/ongoing condition):**
`Si tu travaillais [imparfait], tu aurais réussi l'année dernière [conditionnel passé].`
(If you were working [now — you aren't], you would have succeeded last year [past result])

**`Au cas où + conditionnel`** — NOT si + conditionnel (Collins research finding — a classic trap):
`Au cas où il viendrait, appelle-moi.` (In case he comes — present conditionnel, not futur after au cas où)
`Au cas où il serait en retard, prévenons les organisateurs.`

**`Même si` for concessive hypothetical:**
`Même si j'avais voulu partir, je n'aurais pas pu.` (Even if I had wanted to — pure Type 3 with concessive meaning)
`Même si je voulais, je ne pourrais pas.` (Even if I wanted to — Type 2 with concessive meaning)

**Vocabulary scope (26–28 words):** Hypothesis markers with their register notes: au cas où [courant], supposons que + subj [soutenu], en supposant que + subj [soutenu], dans l'hypothèse où + conditionnel [soutenu], à supposer que + subj [soutenu], quand bien même + conditionnel [soutenu]. Context from philosophical/analytical discussion domain.

**Dialogue scene:** Two historians or analysts discussing a historical counterfactual (what would have happened if X had occurred — a classic intellectual exercise in French education). Natural use of all three pure types and both mixed types. Register: courant intellectuel. 13–14 exchanges.

**Exercises (10 minimum):** Type identification (label Type 1/2/3/Mixed for 12 si clauses), pure type fill-blank (8 items), mixed type construction (condition given in past → write present result / vice versa), `au cas où` + conditionnel transformation (4 items), even if / même si (4 items), error correction (5 sentences with wrong tense in si clause or result clause), full counterfactual paragraph (write 5 sentences about a historical or personal counterfactual using at least 2 mixed types), translation EN→FR of 4 mixed conditional sentences, speaking prompt.

**Cultural notes (3–4):**
- The French educational tradition of the dissertation philosophique (the main exam format for the baccalauréat philosophie — it is structured as a conditional argument: given that X, what would follow?)
- French counterfactual historical analysis (the "et si" genre — books and documentaries about what would have happened if France had not fallen in 1940, or if the Commune had succeeded)
- The word `hypothèse` in French intellectual culture — in France, forming and testing hypotheses is considered a fundamental intellectual practice, modelled explicitly in school

---

### Lesson 50 — La Nominalisation
**CEFR B2 can-do:** Write formally constructed texts that use nominal style; understand the compressed noun-heavy style of formal written French; convert verbal constructions into nominal form for formal register.
**DELF B2 alignment:** Nominalisation — heavily tested in DELF B2 production écrite (formal texts in France, including official letters, reports, and academic essays, rely on nominal style).
**Alter Ego+ 4 parallel:** Dossier 4 presents nominalisation as the primary tool for upgrading from "style verbal" (informal/spoken) to "style nominal" (written/formal) — explicitly framed as a register tool.
**Authentic document type (Édito approach):** An official administrative letter or formal report — the genre most saturated with nominalisation in authentic French.

**Grammar:** Three-step method (Grammaire Progressive Avancé model):

**Step 1 — Verbal nominalisation** (verb → verbal noun):
Common patterns: -tion/sion (décider → décision, construire → construction, arriver → arrivée), -ment (développer → développement, approfondir → approfondissement), -age (utiliser → utilisation, recycler → recyclage), -ure (fermer → fermeture, ouvrir → ouverture), -ée (entrer → entrée, arriver → arrivée). Also irregular: faire → fait, voir → vue, vouloir → volonté, créer → création.

**Step 2 — Adjectival nominalisation** (adjective → abstract noun):
-ité (complexe → complexité, efficace → efficacité, capable → capacité), -té (sûr → sûreté, liberté), -eur (chaleureux → chaleur — not always predictable), -esse (beau → beauté — irregular), -ie (génie), -ance/-ence (intelligent → intelligence, différent → différence).

**Step 3 — Clause condensation** (subordinate clause → noun phrase):
`Il est important que vous partiez.` → `Votre départ est important.` / `L'importance de votre départ est indéniable.`
`Le fait que + indicatif` / `Le fait de + infinitif` — two formal clause nominalisation frames.

**Vocabulary scope (28–32 words):** The most productive nominalisation suffixes with 4–5 examples each. Formal document vocabulary: la mise en œuvre de, la prise en charge de, la mise à jour de, la prise en compte de, la mise en place de (frozen nominalisations in formal French that are vocabulary items, not productive nominalisation rules).

**Dialogue scene:** A French civil servant and a manager at a public institution drafting an official report together. They revise each other's sentences, transforming informal verbal style into formal nominal style. Register: soutenu. 13 exchanges.

**Exercises (10 minimum):** Verbal noun formation (derive noun from 12 verbs using correct suffix), adjectival noun formation (derive abstract noun from 10 adjectives), clause condensation (5 sentences — replace subordinate clause with nominal construction), formal text transformation (10 sentences in verbal style → rewrite in nominal style), `register_sort` exercise (sort 15 constructions into verbal/informal vs nominal/formal), frozen nominalisation matching (la mise en œuvre / la prise en charge etc. → match to meaning), error correction (5 sentences with incorrect nominalisation suffix), translation EN→FR of 5 formal text sentences using nominalisation, `argumentation` exercise (write a 3-paragraph introduction using nominal style throughout).

**Cultural notes (3–5):**
- The French administrative language tradition (la langue de bois administrative — the nominal style is so deeply embedded in French official writing that it is sometimes satirised; the DILA — Direction de l'information légale et administrative — publishes style guides)
- The rapport d'activité in French organisations (annual reports, school reports, ministry reports all use nominal style by convention)
- The difference between French formal writing norms and English norms (English often prefers verbal style in formal contexts; French prefers nominal — this is a genuine cross-linguistic difference that B2 learners must consciously learn)

---

### Lesson 51 — Le Participe Présent en Apposition
**CEFR B2 can-do:** Understand and produce condensed appositive clauses in formal French; distinguish correctly between gérondif and participe présent en apposition.
**DELF B2 alignment:** Participe présent — appears in DELF B2 compréhension écrite in journalistic and literary texts. Production écrite credit for correct use.
**Alter Ego+ 4 parallel:** Dossier 5 presents this as the "complement" to the B1 gérondif — same form, different function, different rules.
**Authentic document type (Édito approach):** A formal journalistic analysis or literary criticism — the genres where appositive participles cluster most densely.

**Grammar:**
Formation (same as gérondif): nous-form → drop -ons → add -ant. Exceptions: être → étant, avoir → ayant, savoir → sachant.

**Gérondif vs participe présent en apposition** (the B2 distinction — from Assimil lesson 42 research):
- **Gérondif** = `en` + présent participle: simultaneous action, same subject. `Il travaille en écoutant de la musique.`
- **Participe présent en apposition** = présent participle WITHOUT `en`: condensed relative/causal/concessive clause: `Voulant partir tôt, il a préparé ses bagages la veille.` = Parce qu'il voulait partir tôt / Comme il voulait partir tôt.
- The appositive participle's subject must STILL be the same as the main clause subject.
- The appositive participle may convey: cause (`Étant fatigué, il est rentré tôt`), concession (`Admettant l'erreur, il a quand même refusé`), or circumstance (`Ayant étudié toute la nuit, il a réussi l'examen`).
- **Participe passé en apposition** (past): `ayant + pp` (for avoir verbs) or `étant + pp` (for être verbs): `Ayant fini son travail, il est sorti.` — note: this is the past participle construction, expressing a prior action, similar to infinitif passé but in a reduced clause. Equivalent to `Après avoir fini...`.

**Past participle en apposition (agreement):** The past participle agrees with the subject: `Partie avant l'aube, elle n'a pas vu le lever du soleil.` (féminin singulier, because elle = féminin)

**Vocabulary scope (26–28 words):** Formal journalistic vocabulary that appears in authentic appositive participle contexts: soulignant, rappelant, reconnaissant, admettant, estant [estant is archaic — use étant], notant, précisant, ajoutant, évoquant, citant, affirmant, dénonçant, critiquant, défendant. Register: these are courant to soutenu — all are normal in journalistic French.

**Dialogue scene:** A film critic and a journalist discussing a recent film's critical reception. Their conversation includes quotations from reviews (which use appositive participles) and their analysis. The contrast between spoken discussion and formal written review language makes the construction visible. Register: courant intellectuel. 13 exchanges.

**Exercises (10 minimum):** Gérondif vs apposition identification (en présent? → gérondif; without en? → apposition — 12 items), appositive participle construction (combine: `Il voulait aider. Il s'est présenté.` → `Voulant aider, il s'est présenté.`), cause/concession/circumstance classification (classify 10 appositive participle sentences by their meaning), past participle en apposition + agreement (6 sentences — provide correct agreed form), sentence reduction (relative clause → appositive participle: `Étant une femme qui voulait changer les choses, elle...` → `Voulant changer les choses, elle...`), error correction (5 sentences with wrong form or subject mismatch), translation EN→FR of 4 formal appositive constructions, speaking prompt.

**Cultural notes (3–4):**
- French film criticism as a literary genre (Les Cahiers du Cinéma, Positif — French film criticism is considered literature; the appositive participle is a hallmark of its formal style)
- The critiques littéraires in Le Monde des Livres and Le Magazine Littéraire (the tradition of book reviewing in France as a serious discursive practice)
- The Prix de la critique and critical culture in France (critics have institutional prestige in French cultural life — different from most other cultures)

---

### Lesson 52 — Les Registres de Langue
**CEFR B2 can-do:** Adapt language register consciously to context, interlocutor, and medium; recognise register in spoken and written French; avoid register mixing errors that signal poor French even when grammar is formally correct.
**DELF B2 alignment:** Registres de langue — explicitly tested in DELF B2: compréhension de l'oral asks candidates to identify the register of a conversation; production écrite is evaluated partly on register appropriateness.
**Alter Ego+ 4 parallel:** Dossier 5 is the central register lesson in Alter Ego+ 4. The taxonomy (soutenu/courant/familier/argotique) is presented with explicit cross-register parallel texts — the same message in four registers.
**Authentic document type (Édito approach):** Four parallel texts — the same situation (e.g., asking for a favour) expressed in soutenu, courant, familier, and argotique registers. This is exactly how Assimil lesson 39 presents the material (local textbook research finding).

**Grammar:** No new conjugations. The lesson teaches register as a system.

**The four-register taxonomy:**
| Register | Context | Markers |
|---|---|---|
| Soutenu | Formal writing, official contexts, literary French | Subjonctif imparfait (recognition), inversion interrogative, ne...que/ne...guère, vocabulary from Latin/Greek roots, nominalisation, conditional as politeness |
| Courant | Standard educated spoken and written French | Passé composé (not passé simple), est-ce que interrogation, standard negation, common vocabulary |
| Familier | Informal speech, messages, casual writing | Dropping ne in negation, tu for vous, vocabulary simplification, contractions (t'as, j'vais, y'a), informal fillers (genre, quoi, tu vois) |
| Argotique | Street slang, youth language, regional | Verlan (l'envers), slang lexical substitutions (meuf, ouf, laisse tomber), explicit register markers |

**Key register pairs to teach as explicit contrasts (Assimil lesson 39 approach):**
- Soutenu: Je vous serais reconnaissant(e) de... / Courant: Je vous demande de... / Familier: Tu peux... / Argotique: T'as qu'à...
- Soutenu: Il est de mon devoir de vous informer que... / Courant: Je vous informe que... / Familier: Je te préviens que... / Argotique: Je te préviens...
- Interrogation: Êtes-vous en mesure de... (soutenu) / Est-ce que vous pouvez... (courant) / Tu peux... (familier) / T'as la possibilité de... (argotique)

**Vocabulary scope (28–34 words):** Organised by register: soutenu markers (néanmoins, en revanche, je me permets de, il appert que, veuillez agréer), courant markers (par contre, quand même, je vous demande), familier markers (t'as, y'a, genre, quoi, carrément, franchement, sympa, boulot/travail, pote/ami), argotique markers (meuf, ouf, chelou, kiffer, grave). ALL vocabulary items have mandatory register notes.

**Dialogue scene:** Three short scenes showing the SAME situation (a request for a day off work) in three registers: Scene 1 — formal written request (soutenu letter); Scene 2 — direct conversation with manager (courant); Scene 3 — text message to colleague explaining (familier). The three-scene structure is the Assimil approach directly. Register: multiple (the lesson itself). 15 exchanges total (5 per scene).

**Exercises (10 minimum):** `register_sort` (sort 18 expressions into soutenu/courant/familier/argotique columns), register conversion (rewrite 4 soutenu sentences in courant; rewrite 4 familier sentences in courant), register mismatch detection (10 sentences — identify which word/construction is out of register), register choice (given a context: job interview / text to friend / official complaint → choose appropriate register and justify), error correction (5 texts with register mixing errors — Grammaire Progressive Avancé approach), translation EN→FR in specified register (4 items: 2 soutenu, 2 familier), `argumentation` in soutenu register (open an argument on a given topic using correct soutenu register — 3 sentences), speaking prompt (record yourself in two registers: once formally, once informally — same topic).

**Cultural notes (3–5):**
- The French sociolinguistic awareness of register (French speakers are acutely aware of language levels — the education system explicitly teaches correct written register from primary school; register errors are socially marking in France in ways that may not be true in other cultures)
- Verlan and French youth language (verlan — l'envers — is the most productive source of new French slang; words like meuf/femme, ouf/fou, chelou/louche have entered mainstream usage; it emerged from banlieue culture in the 1970s–80s)
- French professional written communication norms (formule de politesse at the end of every professional email — `Veuillez agréer l'expression de mes sentiments distingués` is not optional; its register is culturally required)
- The tension between academic French (langue soignée) and contemporary youth French (langue familière) in the French education system — a recurring political debate about standards

---

### Lesson 53 — La Négation Avancée
**CEFR B2 can-do:** Use the full range of French negation structures including restrictive, emphatic, and concessive negation; understand negation-dense formal texts.
**DELF B2 alignment:** Négation avancée — appears in DELF B2 compréhension écrite (especially in formal/literary texts) and production écrite (range of negation structures is a quality criterion).
**Alter Ego+ 4 parallel:** Dossier 6 presents advanced negation as a coherence tool — restricting, qualifying, and emphasising through negation are markers of sophisticated French.
**Authentic document type (Édito approach):** An academic or legal text — the genres most dense with advanced negation (ne...que, ne...guère, ne...aucun).

**Grammar:**
**Ne...que** (only/restriction — NOT a negation but often grouped with it):
`Je n'ai qu'un euro.` (I only have one euro.) Que is placed immediately before the restricted element.
Register: courant to soutenu. More formal than `seulement`.

**Ne...guère** (scarcely/hardly):
`Il ne travaille guère.` Register: soutenu. Literary equivalent of `ne...pas beaucoup`. Appears in literary/formal texts.

**Ne...aucun(e)** (no/not any):
`Je n'ai aucune idée.` / `Aucun élève n'a répondu.` (Aucun before the verb = subject → ne after subject). Adjective → agrees in gender but always singular.

**Ne...nul(le)** (no — very formal):
`Nul n'est censé ignorer la loi.` (formal/literary). Equivalent of aucun but more formal/archaic. Appears in legal texts and proverbs.

**Ne...plus** review at B2: positional nuances — `Je ne veux plus rien.` (double negation: no longer anything)

**Double negations:**
`Ne...plus jamais` (never again): `Je ne ferai plus jamais ça.`
`Ne...plus rien` (nothing anymore): `Il n'y a plus rien à faire.`
`Ne...plus personne` (nobody anymore): `Il ne voit plus personne.`
`Ne...jamais rien` (never anything): `Elle ne fait jamais rien.`

**Sans que + subjonctif** (without + action):
`Il est parti sans que je le sache.` (without my knowing) — takes subjonctif, different subjects.

**Vocabulary scope (28–30 words):** Advanced negation markers with register labels: ne...que [courant-soutenu], ne...guère [soutenu], ne...aucun [courant-soutenu], ne...nul [soutenu-archaïque], sans que + subj [courant-soutenu]. Context: academic, legal, and formal analysis vocabulary from DELF B2 reading domain.

**Dialogue scene:** Two lawyers or journalists discussing a legal case or official document, using advanced negation naturally in their analysis. Register: courant professionnel to soutenu. 13 exchanges.

**Exercises (10 minimum):** Negation identification (identify the negation type in 12 sentences), fill-blank (choose correct advanced negation for context), transformation (replace `seulement` with `ne...que`; replace `pas beaucoup` with `ne...guère`), double negation construction (5 items), `sans que` + subjonctif (5 items — use correct subjunctive form), `register_sort` (sort 12 negation expressions by register level), error correction (5 sentences with wrong negation form or position), translation EN→FR of 5 sentences using advanced negation, speaking prompt.

**Cultural notes (3–4):**
- French legal language and its negation conventions (nul n'est censé ignorer la loi is one of the most famous legal maxims in French; legal French is saturated with ne...aucun, ne...nul, ne...que constructions)
- The Academy française and the "ne" in spoken French (dropping ne in speech — il vient pas — is standard in spoken familier French; keeping ne throughout is a register marker of soutenu speech; this is explicitly taught in French schools)
- French bureaucratic language and its rhetoric of restriction (French administrative texts use ne...que and ne...aucun for precise delineation of rights and obligations)

---

### Lesson 54 — Le Discours Indirect Avancé
**CEFR B2 can-do:** Report complex speech including B2 tense forms accurately; use nuance verbs for reporting; understand the difference between direct, indirect, and free indirect discourse.
**DELF B2 alignment:** Discours indirect avancé — tested in DELF B2 compréhension de l'oral (summarising complex interviews) and production écrite (synthesising multiple sources).
**Alter Ego+ 4 parallel:** Dossier 7 extends B1 reported speech to include B2 tense forms (subjonctif passé, conditionnel passé, plus-que-parfait in reported contexts) and introduces free indirect discourse as a recognition skill.
**Authentic document type (Édito approach):** A journalistic synthesis or press review — where multiple speakers' positions are reported and contrasted.

**Grammar:**
B1 reported speech revision: présent→imparfait, PC→PQP, futur→conditionnel présent, futur proche→allait+inf.

**B2 additions:**
Conditionnel présent in direct speech → no change in indirect: `"Je viendrais si tu m'invitais" → Il a dit qu'il viendrait si je l'invitais.`
Conditionnel passé in direct speech → no change: `"J'aurais voulu partir" → Elle a admis qu'elle aurait voulu partir.`
Subjonctif présent in direct speech → subjonctif présent: `"Bien qu'il soit là" → Il a dit que, bien qu'il soit là,...`
Subjonctif passé in direct speech → subjonctif passé: `"Bien qu'il soit venu" → Il a noté que, bien qu'il soit venu,...`
Plus-que-parfait in direct speech → no change in indirect when main verb is already past.

**Nuance reporting verbs (B2 range):**
Beyond B1 (dire, expliquer, ajouter): soutenir que, affirmer que, déclarer que, prétendre que, nier que, admettre que, reconnaître que, réfuter que, insister sur le fait que, souligner que, préciser que, concéder que.

**Le discours indirect libre** (recognition only):
Free indirect discourse (style indirect libre) blends third-person narrative with the character's inner speech, without a reporting verb. `Elle était déçue. Il n'était donc pas venu. Pourquoi ce silence ?` — the second and third sentences are free indirect (her thoughts, reported without `elle pensait que`). Appears in French literary fiction. RECOGNITION ONLY — not tested productively at B2.

**Vocabulary scope (28–30 words):** Full nuance reporting verb set with register labels. Time expression shift pairs (including B2-level: `dans deux jours` → `deux jours plus tard`, `il y a un mois` → `un mois auparavant`). Register notes: nuance verbs are courant to soutenu.

**Dialogue scene:** A French radio producer and a reporter preparing a synthesis programme — they review transcripts of 3 different speakers and discuss how to report each person's position accurately. The challenge is representing different tense forms and nuanced positions faithfully. Register: courant professionnel. 13–14 exchanges.

**Exercises (10 minimum):** B2 tense shift table (extend the B1 table to include conditionnel passé and subjonctif passé — transform 10 direct speech items), nuance verb matching (match 10 reporting verbs to their precise meaning: nier ≠ refuser ≠ réfuter), full paragraph indirect speech transformation (8-sentence direct dialogue → indirect), time expression shift (8 pairs), free indirect discourse identification (underline free indirect passages in a 200-word literary extract — recognition only), `rewrite` (4 direct → indirect using nuance verbs), error correction (5 sentences with wrong tense shift or wrong reporting verb), translation EN→FR of 4 complex reported speech sentences, speaking prompt.

**Cultural notes (3–4):**
- France Inter and France Culture as models of spoken formal French (press reviews, `revues de presse`, on French radio report what all the newspapers said — a daily exercise in reported speech at the B2+ level)
- The style indirect libre in French literary tradition (Flaubert invented it; Proust mastered it; contemporary novelists like Marie NDiaye use it — recognising it unlocks much of French literary fiction)
- French journalistic synthesis conventions (the `synthèse de documents` is the hardest task in the DELF B2 — it requires accurately reporting 3–4 different sources' positions without distortion)

---

### Lesson 55 — Les Constructions Impersonnelles Formelles
**CEFR B2 can-do:** Produce and understand formal impersonal constructions used in academic, administrative, and professional French; use formal hedging and distancing devices.
**DELF B2 alignment:** Constructions impersonnelles — appear throughout DELF B2 reading texts (especially formal documents and news reports) and are a quality criterion in DELF B2 production écrite.
**Alter Ego+ 4 parallel:** Dossier 8 presents formal impersonal constructions as hedging and distancing devices — tools for formal writing that allow the writer to remove personal voice.
**Authentic document type (Édito approach):** An academic summary or formal recommendation letter — the genres most dense with impersonal constructions.

**Grammar:**
**`Il s'agit de`** (it is a matter of / it concerns): `Il s'agit d'une décision importante.` / `Il s'agit de comprendre les enjeux.` No personal subject possible — always il. Formal register.

**`Il convient de + infinitif`** (it is advisable / appropriate to): `Il convient de préciser que...` / `Il conviendrait de revoir cette décision.` Frequently in recommendations and formal reports.

**`Il importe que + subjonctif`** (it is important that): `Il importe que chacun soit informé.` More formal than `il est important que`.

**`Il suffit de + infinitif`** (it suffices / it is enough to): `Il suffit de cliquer ici.` / `Il ne suffit pas de vouloir.`

**`Il y a lieu de + infinitif`** (there is reason to): `Il y a lieu de s'interroger sur...` Very formal, administrative register.

**`Quoi qu'il en soit`** (whatever the case / be that as it may): Discourse connector, signals concession and summary. `Quoi qu'il en soit, la décision a été prise.` Very common in formal debate and essays.

**`Il n'en reste pas moins que + indicatif`** (it remains nonetheless that): `Il n'en reste pas moins que cette situation est préoccupante.` Formal concessive connector.

**`Force est de constater que + indicatif`** (one must acknowledge that): `Force est de constater que les résultats sont décevants.` Formal, often used in reports and editorials.

**Vocabulary scope (28–30 words):** All impersonal constructions above with register labels (all are soutenu). Context: administrative, academic, and editorial discourse vocabulary. Key pattern: these constructions allow the writer to advance claims and recommendations without personal attribution.

**Dialogue scene:** A high-level meeting (comité de pilotage) at a French institution — participants use formal impersonal constructions to make recommendations and observations without attributing them personally. Register: soutenu. 13 exchanges.

**Exercises (10 minimum):** Impersonal construction identification (underline all impersonal constructions in a formal text — 15 items), meaning matching (match construction to English equivalent), fill-blank with correct construction (10 items), register conversion (replace informal personal constructions with formal impersonal equivalents: `Je pense qu'il faut vérifier` → `Il convient de vérifier`), `quoi qu'il en soit` and `il n'en reste pas moins que` as discourse connectors (4 sentence combination exercises), error correction (5 sentences with wrong register or wrong subjonctif/indicatif choice after impersonal trigger), formal text construction (write 5 sentences of a recommendation letter using 4 different impersonal constructions), translation EN→FR of 4 formal text sentences, speaking prompt.

**Cultural notes (3–4):**
- French administrative writing conventions (note de service, circulaire, rapport — the French state communicates entirely in this register; understanding it is essential for anyone living or working in France)
- The impersonal style as intellectual positioning in French academic writing (distancing the writer from the claim is a conventional academic move in French; it is different from, say, English academic conventions which often prefer the personal `I argue that`)
- The INSEE (Institut national de la statistique et des études économiques) publication style as an example of formal impersonal French at its most systematic

---

### Lesson 56 — Les Pronoms Emphatiques Avancés
**CEFR B2 can-do:** Use emphatic pronouns in all positions including reflexive-emphatic and generic contexts; understand nuanced pronominal reference in formal French.
**DELF B2 alignment:** Pronoms emphatiques — tested in DELF B2 compréhension écrite (understanding pronominal reference in complex texts) and production écrite (range of pronoun use is a quality marker).
**Alter Ego+ 4 parallel:** Dossier 8 reviews emphatic pronouns as they appear in formal and literary contexts — particularly `soi` (generic) and `-même` compounds.
**Authentic document type (Édito approach):** A philosophical or ethical discussion — the genre where emphatic pronouns (soi, lui-même, en soi) cluster most naturally.

**Grammar:**
B1 introduced stressed pronouns (moi, toi, lui, elle, nous, vous, eux, elles) for use after prepositions and in isolation. B2 extends to:

**`-même` compounds** (Collins research finding):
`moi-même`, `toi-même`, `lui-même`, `elle-même`, `nous-mêmes`, `vous-même(s)`, `eux-mêmes`, `elles-mêmes` = `-self/-selves`. Reinforces the subject or distinguishes the referent from others. `Il l'a fait lui-même.` (He did it himself.) `Vous-même l'avez dit.` (You yourself said it.) Agreement: même agrees in number.

**`Soi`** — generic/indefinite emphatic pronoun (Collins research finding):
Used with indefinite subjects (on, chacun, tout le monde, aucun), with infinitives, and in certain fixed expressions. `Chacun pour soi.` / `En soi, ce n'est pas un problème.` / `Rentrer chez soi.` / `Être sûr de soi.` / `Avoir confiance en soi.` — This is the B2 generalisation of the emphatic pronoun to generic contexts.

**Emphatic pronouns in comparison:**
`Il est plus grand que moi.` (After que in comparison) / `Comme eux, je préfère...` / `Toi et moi, nous...`

**Emphatic pronouns after prepositions (B1 review with B2 extensions):**
`chez soi` vs `chez lui` (generic vs specific), `pour soi` vs `pour lui`, `de soi-même` vs `de lui-même`.

**`Ce n'est pas lui / c'est elle`** — cleft with emphatic pronoun (combining L48 and L56).

**Vocabulary scope (26–28 words):** `-même` forms as vocabulary items. Fixed expressions with `soi`: en soi, chez soi, avoir confiance en soi, être bien dans sa peau/soi-même, se suffire à soi-même, parler de soi. Context from philosophical/ethical discussion domain.

**Dialogue scene:** A philosophy teacher and students discussing a philosophical concept (identity, authenticity, responsibility). Natural use of soi, `-même` compounds, and emphatic pronoun contrasts. Register: courant intellectuel. 13 exchanges.

**Exercises (10 minimum):** `-même` compound formation and placement (8 items), `soi` vs `lui/elle` choice (generic vs specific — 10 items), comparison sentences with emphatic pronouns (6 items), `soi` in fixed expressions (match expressions to meanings), `chez soi / chez lui` distinction (6 items), cleft with emphatic pronoun (`C'est moi qui / C'est lui que` — 6 items), error correction (5 sentences with wrong pronoun form or `soi` in non-generic context), translation EN→FR of 5 emphatic pronoun sentences, speaking prompt.

**Cultural notes (3–4):**
- The French philosophical tradition of self-examination (`soi` in philosophical discourse — from Montaigne's `Que sais-je?` to contemporary philosophy of identity, `soi` is a central concept)
- Le cours de philosophie en terminale (philosophy is a compulsory subject for all French baccalauréat students — emphatic pronominal constructions appear throughout philosophical writing)
- La notion d'authenticité in French existentialist thought (Sartre, Beauvoir, Camus — the `être soi-même` vs `être pour autrui` distinction is culturally embedded in French intellectual life)

---

### Lesson 57 — L'Argumentation Formelle
**CEFR B2 can-do:** Write and deliver structured formal arguments in French; use the full range of B2 discourse tools (connectors, register, nominalisation, cleft sentences, impersonal constructions) to construct a coherent and convincing text.
**DELF B2 alignment:** Argumentation formelle — the DELF B2 production écrite task explicitly requires a formal structured argument. This lesson is the capstone of discourse skills.
**Alter Ego+ 4 parallel:** Dossier 9 is entirely devoted to argumentation as a communicative act — Alter Ego+ 4 treats it as the final and most demanding B2 skill.
**Authentic document type (Édito approach):** The essai, the lettre formelle de prise de position, and the article d'opinion — the three formats tested in DELF B2 production écrite.

**Grammar:** No new grammar structures. This lesson integrates ALL B2 discourse tools into formal argumentation.

**The French essai structure (culturally specific — must be taught explicitly):**
1. **Introduction** — three parts: accroche (hook), présentation du sujet (context and stakes), problématique (the central question that the essay addresses). The problématique is phrased as a question. French education requires a problématique — an English-style thesis statement is insufficient.
2. **Développement** — two or three parts, each with: thesis statement → arguments → examples → link to next part. Each part advances one coherent angle. French essay expects thèse → antithèse → synthèse (for a three-part plan) or thèse → nuance → synthèse (for a two-part plan).
3. **Conclusion** — reprise de la problématique, synthèse des arguments, ouverture (a broader perspective that goes beyond the essay's scope).

**Register requirements for DELF B2 production écrite:**
- Soutenu throughout — no familier markers
- Nominalisation preferred to verbal style
- Impersonal constructions for hedging and distancing
- Logical connectors for every transition
- At least one ce qui/ce que/ce dont construction
- At least one cleft construction for emphasis
- Avoidance of je pense que (too weak at B2) — prefer: il est indéniable que, force est de constater que, il convient de souligner que

**Connector palette for formal French argumentation:**
- Introducing: Tout d'abord, En premier lieu, Pour commencer
- Adding: De plus, En outre, Par ailleurs, Qui plus est
- Contrasting: Cependant, Néanmoins, Toutefois, Or
- Conceding: Certes, Il est vrai que, Sans doute
- Concluding: En conclusion, Pour conclure, En définitive, Ainsi

**Vocabulary scope (28–34 words):** All formal argumentation connectors with position labels (sentence-initial? mid-sentence?). Formal opinion and claim vocabulary: il apparaît que, il ressort de cela que, on peut affirmer que, tout porte à croire que, il est incontestable que, il est légitime de se demander si. Problématique question formulations: Dans quelle mesure..., En quoi..., Comment expliquer que..., Peut-on vraiment affirmer que...

**Dialogue scene (minimum 16 exchanges):** A French tutor and a student working together through a DELF B2-style writing task. The tutor explains the structure, the student drafts each section, the tutor gives feedback. The dialogue models the essay structure explicitly — we see the introduction, one argument, and the conclusion being constructed and refined. Register: courant pédagogique. 16 exchanges.

**Exercises (10 minimum):**
- Essay structure labelling (given a model essay, label: accroche / problématique / thèse-partie-1 / antithèse-partie-2 / ouverture)
- Problématique writing (transform 4 essay topics into problématique questions)
- Connector fill-blank in a formal text (12 items across all categories)
- Register correction (identify and correct 5 familier constructions in a B2 essay draft)
- Nominalisation upgrade (rewrite 5 verbal-style sentences in nominal style)
- Cleft construction insertion (add emphasis to 4 flat sentences using c'est...qui/que)
- `argumentation` exercise: write a 4-paragraph formal essay (introduction + 2 development paragraphs + conclusion) on a B2-appropriate topic (e.g. le télétravail et la qualité de vie, les réseaux sociaux et la démocratie) — using the scaffold provided
- Translation EN→FR of 4 formal argumentation sentences
- Speaking prompt: deliver a 90-second formal opinion piece on a topic of your choice — using the French essay structure orally

**Cultural notes (3–5):**
- The French dissertation tradition (from lycée philosophy to Sciences Po competitive entrance essays, the French education system drills the problématique-plan structure from age 16 — understanding this is essential for academic or professional integration in France)
- The DELF B2 exam format (production écrite: 250 words minimum; always a formal text; always evaluated on structure, cohesion, register, and grammar range — this lesson directly prepares learners for the exam)
- Le commentaire composé and l'explication de texte as French academic genres (the two main genres taught at the terminale level — both require the formal argumentative structure taught here)
- La presse d'opinion in France (Le Monde, Libération, Le Figaro, Le Canard enchaîné — France has a rich tradition of committed opinion journalism that models formal argumentation at its best)
- The concept of la laïcité in French intellectual debate (one of the most contested and enduring topics in French public discourse — appropriate as a DELF B2 essay topic example)

---

### Lesson 58 — Consolidation B2 (Capstone)
**CEFR B2 can-do:** Integrate all B2 structures in extended, register-appropriate discourse; produce and understand complex French texts across all registers and contexts; demonstrate genuine upper-intermediate autonomy in French.
**DELF B2 alignment:** Integrates all DELF B2 grammar and discourse points in a capstone context.
**Alter Ego+ 4 parallel:** Alter Ego+ 4 ends with a full bilan dossier — a multi-document synthesis and production task that reactivates all B2 skills.
**Authentic document type (Édito approach):** A multi-source synthesis task — reading three documents on a single topic, then producing a formal written synthesis. This is exactly the DELF B2 format.

**Grammar:** No new grammar. Integrates ALL B2 structures in a demanding multi-scene dialogue and maximum-variety exercise set.

**Vocabulary scope (28–32 words):** Advanced discourse markers and hedging vocabulary not yet fully consolidated: dans la mesure où (insofar as), à cet égard (in this regard), en l'occurrence (in this case), toutes proportions gardées (proportionally speaking), nonobstant (notwithstanding — soutenu), ce faisant (in so doing), il en va de même pour (the same holds for), à fortiori (all the more so). These are markers of B2+ discourse sophistication.

**Dialogue scene (minimum 16 exchanges):** A panel discussion at a French university symposium on a contemporary issue (digital democracy, the climate emergency, artificial intelligence and employment — choose one). Three speakers with different positions. The conversation must include:
- At least 2 subjonctif passé forms
- At least 1 infinitif passé construction
- Correct concordance des temps in an embedded clause
- At least 1 ce qui / ce que / ce dont fronting construction
- At least 2 cleft constructions (c'est...qui/que)
- At least 1 mixed conditional
- Nominalisation throughout (verbal style avoided)
- At least 1 impersonal formal construction (il convient de, force est de constater que, etc.)
- Register: soutenu throughout (panel discussion at a university)
- Logical connectors from all four categories (cause, consequence, concession, opposition)

**Exercises (12 minimum, maximum variety):**
1. Full B2 grammar audit: 12-sentence paragraph with errors across all B2 structures (error correction — Grammaire Progressive Avancé approach)
2. Subjonctif présent vs passé: 10-item `mood_choice` exercise
3. Tense concordance rewrite: transform a present-tense embedded narration to a past-tense narration (8 verb forms to adjust)
4. Ce qui/que/dont/ce à quoi fill-blank: 10 sentences
5. Cleft construction transformation: front the italicised element in 8 sentences using c'est...qui/que
6. Nominalisation: transform 8 verbal-style sentences to nominal style
7. Register correction: identify and correct 8 register errors in a formal essay draft
8. `register_sort`: sort 24 expressions across soutenu/courant/familier/argotique
9. `argumentation`: write a full 5-paragraph DELF B2-format essay on a given topic
10. Passé simple comprehension: literary passage — identify all passé simple forms, give infinitives, reconstruct narrative sequence
11. Formal impersonal constructions: fill-blank in a formal report (10 items)
12. Speaking prompt: 90-second formal presentation using: 1 subjonctif passé, 1 ce qui/ce dont, 1 cleft construction, 3 logical connectors, impersonal register throughout

**Cultural notes (5 — capstone lesson):**
- What B2 means in France: the DELF B2 is the level required for entry to French universities (inscription en licence, DUT, or BTS for non-francophone students requires B2 as a minimum). This is not just an academic milestone — it is the level at which France treats you as linguistically capable of full civic and professional participation.
- The French intellectual tradition at B2: at this level, learners can read Le Monde, watch France Culture podcasts, follow French films without subtitles, read contemporary French novels, and understand the nuances of French political debate. The language is now genuinely functional for cultural participation.
- The Alliance Française and B2 certification: B2 is the most commonly sought DELF level globally — it is the threshold level for many migration and professional qualification applications in French-speaking countries.
- What comes at C1: literary register at full command, passé simple in production, subjonctif imparfait recognition in all contexts, full appreciation of French irony and register play, ability to write academic French and deliver formal presentations without preparation. At C1, French stops being a language you manage and becomes a language you inhabit.
- La francophonie at B2: 321 million French speakers worldwide, across 5 continents. B2 French is not just access to France — it's access to sub-Saharan Africa's fastest-growing economies, the Maghreb, the Caribbean, Québec, Belgium, and Switzerland. The linguistic investment pays dividends far beyond the Hexagone.

**Grammar tip (final lesson):** "B2 is where French becomes a language you think in rather than a language you translate into. The structures you've learned — subjonctif passé, concordance, nominalisation, mise en relief, register — are not advanced complications. They are the basic tools of educated native French. A French teenager who has passed their baccalauréat uses all of these naturally. Your goal now is C1: the level where you stop noticing that you're speaking French."

---

## Exercise Types at B2

All existing types from `lessonTypes.ts` remain valid. The types added for B1 (`mood_choice`, `rewrite`) are also available. Additionally implement:

### `register_sort` (sort by register level):
```typescript
export interface RegisterSortExercise {
  id: string
  type: 'register_sort'
  question: string
  categories: string[]            // e.g. ["soutenu", "courant", "familier", "argotique"]
  items: {
    expression: string
    correct_category: string
    explanation: string
  }[]
}
```
UI: Labelled columns (3 or 4). Click-to-assign items to columns. On submit, reveal per-item correctness and explanations. On mobile: dropdown selector per item.

### `argumentation` (structured argument scaffold):
```typescript
export interface ArgumentationExercise {
  id: string
  type: 'argumentation'
  question: string
  structure: {
    label: string
    instruction: string
    model?: string
    connector_hints?: string[]
  }[]
  word_count_target?: number
}
```
UI: Sectioned textarea with label and instruction per section. Submit button reveals model answer with section-by-section annotations. Connector hint chips shown alongside the relevant section.

---

## Files to Update (Minimal Edits Only)

### `src/app/lessons/page.tsx`
Add a B2 section below the B1 section following the exact same card layout. Show all 16 lessons (L43–L58) with links to `/lessons/advanced/[n]`. All 16 B2 cards should display a lock icon (`is_free: false` for all B2 lessons).

### `src/app/lessons/intermediate/page.tsx`
Add a footer navigation link: `→ B2 Avancé` pointing to `/lessons/advanced`, styled to match the existing navigation pattern on that page.

---

## Quality Checklist

Before finishing, verify each of the 16 lessons:

- [ ] No grammar structure in dialogue that hasn't been taught yet (check sequencing rules)
- [ ] Vocabulary count is 28–36 words, drawn from DELF B2 frequency domains
- [ ] Minimum 10 exercises per lesson (12 for L58)
- [ ] Minimum 6 different exercise types per lesson
- [ ] `AdvancedDialogue` has a `register` field set correctly on every lesson
- [ ] Every `grammarPoint` has a `tip` field targeting B1→B2 transition errors
- [ ] Cultural notes are specific (real France — Alter Ego+ 4 / Édito B2 thematic domains) — 3–5 per lesson, 5 for L57 and L58
- [ ] Subjonctif passé usage is grammatically correct throughout (only for anterior actions under subjunctive triggers)
- [ ] Passé simple exercises are ALL comprehension-based — no production, no fill-blank conjugation
- [ ] Concordance des temps tense dependencies are exactly correct in all examples
- [ ] Register labels (`[soutenu]`, `[courant]`, `[familier]`, `[argotique]`) on all vocabulary items in L52–58 where register is relevant
- [ ] Both new exercise types (`register_sort`, `argumentation`) are implemented and used across the lessons
- [ ] `AdvancedLessonLayout.tsx` component created and all 16 lesson pages use it
- [ ] `/lessons/advanced/page.tsx` shows all 16 lessons in A1-matching design (no gradients, no emojis)
- [ ] `lessons/page.tsx` B2 section shows all 16 lessons with lock icon
- [ ] No audio imports anywhere
- [ ] Lesson 58 dialogue has 16+ exchanges and uses all major B2 structures
- [ ] Lesson 57 teaches the French essai structure explicitly (accroche / problématique / thèse → antithèse → synthèse / ouverture)
- [ ] No C1 structures used productively (no subjonctif imparfait in production, no literary word order inversion)
- [ ] `AdvancedLessonData` interface has `title_fr` field on every lesson
- [ ] The `register` field on `AdvancedDialogue` is set to one of: `'soutenu' | 'courant' | 'familier'`

---

## What NOT to Change

- `lib/lessons/lessonData.ts` — untouched (A1 data)
- `lib/supabase.js` — untouched
- `lib/services/` — untouched
- `src/app/globals.css` — untouched
- `src/app/layout.tsx` — untouched
- `src/app/lessons/beginner/` — untouched
- `src/app/lessons/elementary/` — untouched
- `src/app/lessons/intermediate/` — untouched (except adding footer link in `intermediate/page.tsx`)
- `components/lessons/ElementaryLessonLayout.tsx` — untouched
- `components/lessons/IntermediateLessonLayout.tsx` — untouched
- `components/lessons/BeginnerLessonPage.tsx` — untouched
- `components/lessons/DialogueSection.tsx` — untouched
- `components/lessons/ExerciseProgress.tsx` — untouched
- `public/`, `tsconfig.json`, `next.config.ts`, `package.json` — untouched
- No audio imports anywhere in new lesson pages
