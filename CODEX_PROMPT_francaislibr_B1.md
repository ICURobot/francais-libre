# Codex Prompt: FrançaisLibre — B1 Curriculum Build (Lessons 27–42)

## Project Context

You are working on **FrançaisLibre**, a Next.js 15 / TypeScript / Tailwind CSS French learning web app.

- **A1 curriculum (Lessons 1–12):** Complete in `lib/lessons/lessonData.ts`, pages at `src/app/lessons/beginner/`
- **A2 curriculum (Lessons 13–26):** Complete, pages at `src/app/lessons/elementary/`, layout component at `components/lessons/ElementaryLessonLayout.tsx`
- **B1 curriculum (Lessons 27–42):** What you are building now — 16 lessons at CEFR B1 Intermediate level

**Tech stack:** Next.js 15, TypeScript, Tailwind CSS. **No audio generation** — do not add any audio-related code. No Supabase calls in new pages.

---

## Pedagogical Sources & Curriculum Grounding

This B1 curriculum was built by cross-referencing five authoritative sources. Every lesson reflects their combined pedagogical wisdom. You must honour this grounding when writing dialogues, grammar explanations, vocabulary sets, cultural notes, and exercises.

### 1. CEFR B1 "Threshold" Level Descriptors
CEFR B1 is defined as the threshold of independent language use. The B1 learner can:
- **Understand** the main points of clear standard speech on familiar topics (work, school, leisure, travel, current events)
- **Deal with** most situations likely to arise while travelling in a French-speaking area
- **Produce** simple connected text on familiar topics and personal interests
- **Describe** experiences, events, dreams, hopes, and ambitions
- **Give** brief reasons and explanations for opinions and plans
- **Narrate** a story or recount the plot of a book or film

More granularly, CEFR B1 oral production includes: sustaining a reasonably fluent description on familiar subjects; narrating a story with a clear linear or causal structure; expressing and exchanging opinions on abstract/cultural topics (films, books, current events); expressing a personal position and defending it with reasons; discussing hypothetical situations.

**How this shapes FrançaisLibre B1:** Each lesson's dialogue must demonstrate a genuine B1 communicative act. Not textbook drills disguised as dialogue — real conversations that a B1 speaker would actually have. The CEFR can-do for each lesson is noted in the pedagogical brief below.

### 2. DELF B1 Official Exam Syllabus (20 Grammar Points)
The DELF B1 is the internationally recognised certification exam for B1 French. It tests specific grammar structures. Our curriculum is anchored to this syllabus so that learners complete L27–42 exam-ready. The relevant B1 structures are:

| DELF B1 Point | Our Lesson(s) |
|---|---|
| Le subjonctif présent | L27, L28, L29, L41 |
| Le conditionnel présent | L30, L31 |
| Les phrases hypothétiques (si + imparfait + conditionnel) | L31 |
| Les pronoms relatifs simples : qui, que, où, dont | L34, L35 |
| Le gérondif | L38 |
| La négation complexe | L29, L40 |
| Les connecteurs logiques (cause, conséquence, concession) | L40 |
| Expression de l'opinion + modalisation | L41 |
| Le discours indirect | L36 |
| La voix passive | L37 |
| Le plus-que-parfait | L32 |
| Le conditionnel passé | L33 |

**Important scope note from DELF B1:** The exam tests *simple* relative pronouns (qui, que, où, dont). The forms `lequel/laquelle/lesquels/lesquelles` are optional enrichment — DELF B1 candidates are not tested on them. They appear in L35 as **B1+ enrichment**, clearly labelled.

### 3. Alter Ego+ 3 (Hachette FLE, B1)
Alter Ego+ 3 is the gold-standard classroom coursebook for B1, used in French institutes worldwide including the Alliance Française and CAVILAM. It is organised into **9 dossiers**, each built around:
- A **cultural/thematic dossier** (cinema, journalism, social life, work, travel, digital culture, environment, politics, arts)
- A **communicative task** (un projet) completed at the end of each dossier
- Grammar integrated into authentic document analysis — not grammar tables first, then dialogue

**What we borrow from Alter Ego+ (adapted, not copied):**
- The **thematic coherence** approach: each of our lessons has a consistent real-world scenario, not isolated sentences
- The **cultural document angle**: every dialogue is grounded in a recognisable French social or professional context
- The **dossier rhythm**: grammar → use in context → cultural note → communication act
- Specific grammar sequencing: Alter Ego+ 3 introduces subjunctive (Dossier 2), conditional (Dossier 3), si clauses (Dossier 4), relative pronouns as *rappel/enrichissement* (Dossier 5), reported speech (Dossier 6), passive (Dossier 7), gérondif (Dossier 8). Our L27–38 follows this same evidenced sequence.

### 4. Édito B1 2022 (Didier FLE)
Édito B1 is structured around **12 thematic units** with a strong emphasis on authentic documents (newspaper articles, social media posts, podcast excerpts, infographics) as the entry point into grammar. Its key pedagogical contributions to our curriculum:

- **Authentic document types for dialogue inspiration:** Each FrançaisLibre B1 lesson dialogue should feel like it could accompany a real French document — a journal article debate, a workplace email, a radio discussion, a social media thread. The dialogue types are specified per lesson below.
- **Contemporary French life:** Édito themes include travail et numérique, société et environnement, culture et médias, voyages et mobilité, éducation et formation, santé et bien-être. Our cultural notes draw from these domains.
- **Opinion and argumentation:** Édito places heavy emphasis on expressing and defending opinions from Unit 5 onwards. This grounds our L40 (connectors) and L41 (nuanced opinion) as culminating units, not isolated grammar lessons.

### 5. Grammaire Progressive du Français — Niveau Intermédiaire (CLE International)
This is the reference grammar workbook for A2–B1, widely used by teachers to diagnose and address specific gaps. Its 52 chapters are the gold standard for grammar explanation depth and exercise design at this level.

**What we borrow from Grammaire Progressive (adapted):**
- Grammar explanation structure: rule → form table → example sentences → common errors. Every `grammarPoint.explanation` in our lessons follows this structure.
- Typical error patterns: the book identifies the most common learner errors at each grammar point. These errors directly inform our `error_correction` exercises.
- Minimal pairs: Grammaire Progressive consistently contrasts near-equivalent structures (parce que vs puisque vs car; qui vs que; imparfait vs plus-que-parfait). Our exercises use the same contrastive approach.
- Exercise variety: Grammaire Progressive uses fill-blank, transformation, sentence combination, and error correction. Our exercise sets mirror this range.

---

## CEFR B1 Target: What Learners Can Do After L27–42

By the end of L42, the FrançaisLibre B1 learner should be able to:
1. Express obligation, desire, emotion, and doubt using the subjunctive (L27–29, L41)
2. Express hypotheses about present and past situations using si clauses + conditional (L30–33)
3. Describe complex events in sequence using the full past tense system (L32, L36)
4. Build relative clause-enriched descriptions of people, places, and situations (L34–35)
5. Report what others have said, with correct tense and pronoun shifts (L36)
6. Describe processes and events using the passive voice (L37)
7. Express simultaneous, conditional, or manner-based actions using the gerund (L38)
8. Describe having things done using the causative (L39)
9. Construct logically connected arguments using cause, consequence, concession, and opposition (L40)
10. Express nuanced, hedged personal opinions with correct indicatif/subjonctif (L41)
11. Integrate all B1 structures in spontaneous, connected speech (L42)

---

## Current State — Nothing Exists for B1 Yet

There is no `/lessons/intermediate/` route, no `IntermediateLessonLayout` component, and no B1 lesson data anywhere. You are building everything from scratch. Do NOT touch any existing files except the two listed under "Files to Update" at the end.

---

## What You Are Building

### New files to create:

1. **`components/lessons/IntermediateLessonLayout.tsx`** — reusable layout for all 16 B1 lesson pages (model it on `ElementaryLessonLayout.tsx` but do not copy blindly — see the interface spec below)
2. **`src/app/lessons/intermediate/page.tsx`** — B1 level index page listing all 16 lessons
3. **`src/app/lessons/intermediate/27/page.tsx`** through **`src/app/lessons/intermediate/42/page.tsx`** — 16 individual lesson pages

### Existing files to update (minimal edits only):

4. **`src/app/lessons/page.tsx`** — Add a B1 section below the A2 section, showing all 16 B1 lessons with links to `/lessons/intermediate/[n]`. Use the same card layout as the A1 and A2 sections on this page.
5. **`src/app/lessons/elementary/page.tsx`** — Add a "Next Level" footer link pointing to `/lessons/intermediate`

---

## Design Rules — Critical

The app has a single visual identity established by A1. Every page must follow it. The A2 `ElementaryLessonLayout` already implements this correctly — use it as your reference.

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

**Lesson card pattern for index pages** (copy from `src/app/lessons/beginner/page.tsx`):
```tsx
<Link className="flex h-48 bg-surface-container-lowest shadow-[0_15px_45px_rgba(0,35,149,0.04)] overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,35,149,0.08)] transition-all">
  <div className="w-1/4 bg-primary flex flex-col items-center justify-center text-on-primary">
    <span className="font-label text-[10px] tracking-widest opacity-70 mb-1">UNITÉ</span>
    <span className="font-display text-3xl font-black">L{n.toString().padStart(2, '0')}</span>
  </div>
  <div className="w-3/4 p-8 flex flex-col justify-between">
    {/* title, subtitle, time badge, arrow */}
  </div>
</Link>
```

**Section heading pattern:**
```tsx
<div className="flex items-baseline gap-4 mb-10 overflow-hidden">
  <h2 className="font-display text-4xl font-black text-primary-container">B1</h2>
  <span className="font-label uppercase tracking-[0.3em] text-sm text-secondary font-bold">Intermédiaire</span>
  <div className="flex-grow h-px bg-surface-container-highest"></div>
</div>
```

**Absolutely no:** green gradients, emoji flags, `rounded-[24px]` backdrop-blur cards, coloured shadow hovers, inline emoji in content.

The internal lesson page design (header, dialogue, grammar, exercises sections) should follow `ElementaryLessonLayout.tsx` as a structural reference. Use the same navy-serif typographic style, white content cards with left red border accent, and clean exercise section layout.

---

## IntermediateLessonData Interface

Define this in `components/lessons/IntermediateLessonLayout.tsx` and export it. All 16 lesson pages import from it.

```typescript
interface GrammarPoint {
  title: string
  explanation: string
  examples: string[]          // 4–6 example strings, can include labels like "RULE:", "EXAMPLE:", "CONTRAST:"
  tip?: string                // memorable rule or mnemonic — required on every lesson
}

interface VocabItem {
  french: string
  english: string
  category: string            // e.g. "Subjunctive trigger", "Connector", "Irregular verb"
  example?: string            // full example sentence in French
  note?: string               // optional grammar note, e.g. "+ subjunctive"
}

interface CulturalNote {
  title: string
  content: string
}

interface IntermediateDialogueExchange {
  speaker: string
  french: string
  english: string
  pronunciation?: string      // par-TAY format, stressed syllable capitalised
}

interface IntermediateDialogue {
  title: string
  context: string
  exchanges: IntermediateDialogueExchange[]
}

export interface IntermediateLessonData {
  id: number
  title: string
  title_fr: string
  level: 'B1'
  description: string
  dialogue: IntermediateDialogue
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
import IntermediateLessonLayout, { IntermediateLessonData } from '../../../../../components/lessons/IntermediateLessonLayout'

const lessonData: IntermediateLessonData = { ... }

export default function Lesson27Page() {
  return (
    <IntermediateLessonLayout
      lessonData={lessonData}
      lessonNumber={27}
      prevHref="/lessons/intermediate"
      prevLabel="B1 Overview"
      nextHref="/lessons/intermediate/28"
      nextLabel="Le Subjonctif II"
    />
  )
}
```

The last lesson (42) has no `nextHref`. The first lesson (27) has `prevHref="/lessons/intermediate"`.

---

## New Exercise Types to Add

Add both to `lib/lessons/lessonTypes.ts` (append to the `Exercise` union type) and implement both in `components/lessons/InteractiveExercise.tsx`:

### `mood_choice` — Subjunctive or Indicative?
```typescript
export interface MoodChoiceExercise {
  id: string
  type: 'mood_choice'
  question: string                // e.g. "Choose the correct mood for each sentence"
  items: {
    sentence: string              // with [BLANK] for the verb slot
    verb: string                  // infinitive
    indicative_form: string       // conjugated in indicative
    subjunctive_form: string      // conjugated in subjunctive
    correct_answer: 'indicative' | 'subjunctive'
    trigger?: string              // the word/phrase that determines the mood
    explanation: string           // why this mood
  }[]
}
```
UI: Show each sentence with two radio buttons labelled with the two forms. On submit, reveal explanation with the trigger word highlighted.

### `rewrite` — Transform the Sentence
```typescript
export interface RewriteExercise {
  id: string
  type: 'rewrite'
  question: string                // instruction, e.g. "Rewrite in reported speech" or "Make this sentence passive"
  instruction_type: 'reported_speech' | 'passive' | 'si_clause' | 'relative_clause' | 'causative' | 'gerund'
  items: {
    original: string
    expected: string              // accept all grammatically valid rewritings
    hint?: string
    explanation: string
  }[]
}
```
UI: Show original sentence, text input for rewrite, submit button. Mark correct if it matches expected (case-insensitive, trim whitespace). Show explanation on submit.

---

## B1 Curriculum — 16 Lessons (Lessons 27–42)

Sequencing rationale: Subjunctive first (L27–29) because it requires only present-tense knowledge and unlocks the most B1 expressions; conditional second (L30–31) before the compound tenses; then the full past hypothetical system (L32–33); then relative clauses and reported speech (L34–36) which require a stable past tense system; then passive/gérondif/causative as productive structures (L37–39); finally connectors and opinion as capstone discourse skills (L40–41). This mirrors the Alter Ego+ 3 dossier sequence and the DELF B1 exam weighting (subjunctive and conditional are the highest-weighted B1 grammar points).

| Order | Title (EN) | Title (FR) | DELF B1 Point | Grammar Core |
|-------|-----------|-----------|--------------|-------------|
| 27 | The Subjunctive I | Le Subjonctif I | Subjonctif présent | Formation: present subjunctive of regular verbs + essential irregulars |
| 28 | The Subjunctive II | Le Subjonctif II | Subjonctif — volonté/désir | Triggers of will, necessity, and desire |
| 29 | The Subjunctive III | Le Subjonctif III | Subjonctif — émotion/doute | Emotion triggers + doubt + concessive conjunctions |
| 30 | The Present Conditional | Le Conditionnel Présent | Conditionnel présent | Formation + uses: politeness, suggestions, reported future, hypothesis |
| 31 | Si Clauses | Les Phrases Hypothétiques | Phrases hypothétiques | All three types: Type 1 / Type 2 / Type 3 (introduced) |
| 32 | The Pluperfect | Le Plus-que-parfait | Plus-que-parfait | Formation + uses: prior past event + si Type 3 |
| 33 | The Past Conditional | Le Conditionnel Passé | Conditionnel passé | Formation + regrets + complete si Type 3 system |
| 34 | Relative Pronouns I | Les Pronoms Relatifs I | Pronoms relatifs : qui, que | qui (subject) vs que (object) — distinction, agreement |
| 35 | Relative Pronouns II | Les Pronoms Relatifs II | Pronoms relatifs : où, dont [+ B1+ enrichment] | où + dont (DELF B1 core); lequel (B1+ enrichment) |
| 36 | Reported Speech | Le Discours Indirect | Discours indirect | Statements + tense shifts; questions; commands |
| 37 | The Passive Voice | La Voix Passive | Voix passive | être + past participle; active → passive; par/de |
| 38 | The Gerund | Le Gérondif | Gérondif | en + present participle; simultaneous/manner/condition |
| 39 | Causative Faire | Le Faire Causatif | — (B1 enrichment) | faire + infinitive; se faire; laisser; pronoun placement |
| 40 | Logical Connectors | Les Connecteurs Logiques | Connecteurs logiques | Cause, consequence, concession, opposition |
| 41 | Expressing Opinion & Nuance | Exprimer son Opinion | Expression de l'opinion | Certainty degrees + indicatif/subjonctif; hedging |
| 42 | B1 Capstone | Consolidation B1 | All B1 points | Integration of all B1 structures |

---

## Strict Rules (Non-Negotiable)

1. **Grammatical sequencing:** Dialogue for Lesson N may only use structures taught in Lessons 1 through N.
   - Lessons 27–29: no conditional in dialogues (taught in L30)
   - Lessons 27–31: no pluperfect in dialogues (taught in L32)
   - Lessons 27–33: no relative clauses with dont/lequel in dialogues (taught in L35)
   - Lessons 27–35: no reported speech tense shifts in dialogues (taught in L36)
   - Lessons 27–36: no passive voice in dialogues (taught in L37)
   - Subjunctive (taught in L27) may appear in dialogues from L27 onwards
   - `je voudrais` as polite fixed phrase is permitted from L1 onwards; full conditional from L30

2. **Vocabulary cap: 26–34 words per lesson.** B1 allows richer vocabulary than A2. Never exceed 34. Draw vocabulary from real DELF B1 exam frequency lists — everyday French life domains (travail, loisirs, santé, actualités, voyages, éducation).

3. **Exercises: minimum 10 per lesson.** Minimum 6 different exercise types. Lesson 42 gets 12 minimum.

4. **The si clause system (Lessons 30–33) is the hardest sequence in B1.** Introduce Type 3 in L31, deepen it with the plus-que-parfait in L32, and complete the system with the past conditional in L33. Each lesson must explicitly state which si type it covers and contrast it with the previous type.

5. **Subjunctive trigger accuracy is non-negotiable.** Never use the subjunctive after a trigger that takes the indicative. Key distinction: `il est certain que + indicatif`, `il est possible que + subjonctif`, `penser que + indicatif` (affirmative), `ne pas penser que + subjonctif` (negative). These must be correct in every exercise, dialogue, and grammar example.

6. **Reported speech tense shifts must be exact:**
   - présent → imparfait
   - passé composé → plus-que-parfait
   - futur simple → conditionnel présent
   - futur proche (aller + inf) → allait + inf
   - conditionnel présent → conditionnel présent (no change)

7. **Pronunciation guides** required on every dialogue exchange. Format: `par-TAY` (stressed syllable capitalised, hyphens between syllables). Not required on individual vocabulary items at B1 (learners are expected to know French phonics by now) but include on any genuinely tricky word.

8. **Cultural notes: 3–5 per lesson.** Specific, contemporary, real France. Draw from the Édito B1 thematic domains: travail et numérique, société et environnement, culture et médias, voyages et mobilité, éducation et formation, santé et bien-être. Not clichés about berets and baguettes — think work culture, regional differences, media, social norms, contemporary events, French institutions.

9. **Grammar tip required on every grammar point** (not just on the lesson — on each individual `grammarPoint` object via the `tip` field). Tips should follow the Grammaire Progressive model: one memorable rule that targets the most common learner error for that point.

10. **No B2 structures:**
    - No subjunctive past (`que j'aie fait`, `qu'il soit allé`) — that is B2
    - No past infinitive (`après avoir fait`) — introduce only in L40 as a vocabulary-level fixed construction, not tested grammatically
    - No double object pronoun clusters (`je le lui ai donné`) — B2
    - No complex partitive/article distinctions beyond what was taught in A2
    - No literary tenses (passé simple, subjonctif imparfait) — ever

11. **`il faudrait`** (conditional of `il faut`) is permitted from L30 as a natural extension of the conditional.

12. **Dialogues at B1 are longer and more natural.** Minimum 12 exchanges per lesson, minimum 14 for L36 (reported speech), minimum 16 for L42 (capstone). Speakers may disagree, argue, change their minds, use discourse markers — conversations should feel like real B1-level French, not textbook sentences. Each dialogue has a named authentic document type (see lesson briefs below) that inspired its scenario — this is the Édito B1 approach.

13. **The gerund (L38) must not be confused with the present participle used as an adjective.** Only `en + present participle` = gérondif. Do not introduce adjectival participles (`une histoire fascinante`) as gérondif examples.

14. **Lequel in L35 is labelled B1+ enrichment.** The grammar section should introduce it with the explicit note: "DELF B1 requires only qui, que, où, dont. Lequel is bonus material that moves you toward B2 — learn it if you can, but it won't appear in the DELF B1 exam." Exercise items using lequel should be marked as optional or bonus.

---

## Lesson-by-Lesson Pedagogical Brief

### Lesson 27 — Le Subjonctif I
**CEFR B1 can-do:** Express obligation and necessity ("you need to...", "it's important that..."); understand instructions and requirements in work and study contexts.
**DELF B1 alignment:** Subjonctif présent — formation (the highest-weighted B1 grammar point on the DELF exam).
**Alter Ego+ 3 parallel:** Dossier 2 introduces the subjunctive through obligation/necessity in a professional context, building from `il faut que` before expanding to other triggers.
**Authentic document type (Édito approach):** A workplace project brief or task list — the kind of document that would appear in a French company's intranet.

**Grammar:** Present subjunctive formation. Take the 3rd person plural (`ils`) form of the present indicative → drop `-ent` → add subjunctive endings: -e, -es, -e, -ions, -iez, -ent. This works for ALL regular verbs and most irregulars EXCEPT: être (sois, soit, soyons, soyez, soient), avoir (aie, ait, ayons, ayez, aient), aller (aille, ailles, aille, allions, alliez, aillent), faire (fasse, fasses, fasse, fassions, fassiez, fassent), pouvoir (puisse...), vouloir (veuille...), savoir (sache...). Trigger for this lesson: only `il faut que` — one clear, unambiguous trigger so learners can focus on the formation itself. Grammaire Progressive intermédiaire Chapter approach: explain the formation rule, then the irregulars as a grouped list to memorise, then exercises on form before meaning.

**Vocabulary scope (26–28 words):** The irregular subjunctive forms as vocabulary items (être → sois/soit/soient, avoir → aie/ait/aient, aller → aille, faire → fasse, pouvoir → puisse, vouloir → veuille, savoir → sache). Context words for obligations and necessity drawn from DELF B1 frequency: obligatoire, nécessaire, indispensable, urgent, impératif, une priorité, un délai, une décision. Plus verbs whose subjunctive is needed immediately: partir (parte), venir (vienne), prendre (prenne), dire (dise), mettre (mette).

**Dialogue scene:** A project manager and team member at a French startup discussing what must happen before a product launch deadline. Every necessity expressed with `il faut que + subjunctive`. Professional, contemporary French workplace register. 12 exchanges.

**Exercises (10 minimum):** Formation drill (derive subjunctive from the ils-form for 8 verbs), irregular subjunctive matching (infinitive → correct subjunctive form), fill-blank with correct subjunctive form after `il faut que`, `mood_choice` exercise (il faut que → subjonctif vs indicative sentences — 8 items), transformation (rewrite with `il faut que`: `Tu dois partir` → `Il faut que tu partes`), conjugation table for être and avoir in subjunctive, translation EN→FR of 4 necessity sentences, speaking prompt (3 things you think are necessary in your life/work, using `il faut que`).

**Cultural notes (3–5, from Édito/Alter Ego+ domains):**
- The French work week: The 35-hour week (RTT system) is a legal right in France — workers often negotiate extra days off. This gives the project deadline dialogue authentic cultural stakes.
- French meeting culture: "Réunions" are a central feature of French professional life — often formal, hierarchical, with a written compte-rendu. Very different from Anglophone stand-ups.
- The "projet" as a French educational and professional structure: French schools and companies organise around projets with defined deliverables, milestones (jalons), and team roles (chef de projet, responsable, référent).

**Grammar tip (per grammarPoint):** "The subjunctive looks identical to the present indicative in je/tu/il/elle/ils/elles forms for most -er verbs — only nous and vous differ. That's why it's often easier to spot a subjunctive trigger word than the verb form itself."

---

### Lesson 28 — Le Subjonctif II
**CEFR B1 can-do:** Express wishes, preferences, and desires; make requests and proposals in social and professional contexts; understand nuanced instructions.
**DELF B1 alignment:** Subjonctif — expression de la volonté et du désir.
**Alter Ego+ 3 parallel:** Dossier 2 expands subjunctive triggers beyond il faut que to verbs of will and desire, explicitly teaching the same-subject → infinitive rule.
**Authentic document type (Édito approach):** A negotiation or team coordination email chain — the kind of professionnelle communication French employees manage daily via email.

**Grammar:** Expanding subjunctive triggers — will, desire, preference, and request. Core triggers: `vouloir que` (want), `préférer que` (prefer), `souhaiter que` (wish), `désirer que` (desire), `exiger que` (demand), `demander que` (ask), `insister pour que` (insist), `suggérer que` (suggest), `proposer que` (propose), `tenir à ce que` (be keen that). Key rule from Grammaire Progressive: the subjects of the main clause and the subordinate clause must be DIFFERENT for the subjunctive construction to apply. Same subject → infinitive (`je veux partir`, NOT `je veux que je parte`).

**Vocabulary scope (28–30 words):** All the trigger verbs above. Additional context words from DELF B1 professional register: une proposition, un accord, un refus, une décision, convenir (à), accepter (de), refuser (de), être d'accord avec, négocier, un compromis, une condition. These mirror real DELF B1 document comprehension vocabulary.

**Dialogue scene:** Two colleagues at a French company negotiating the division of tasks on a shared dossier — one insists on certain conditions, the other prefers different arrangements. The register is polite but firm, as is typical of French professional communication. 12 exchanges.

**Exercises (10 minimum):** Trigger identification (underline the subjunctive trigger in 8 sentences), fill-blank with subjunctive after desire triggers, same-subject correction exercise (identify which sentence wrongly uses que + subjunctive when infinitive is needed — this is the most common B1 learner error per Grammaire Progressive), transformation (combine two sentences: `Il veut. Tu le rappelles.` → `Il veut que tu le rappelles.`), `mood_choice` distinguishing vouloir que (subj) vs penser que (indic), translation of 5 sentences, speaking prompt (what you want/prefer your ideal workplace or life to be like — use 3 different triggers).

**Cultural notes:** French negotiation culture (indirect assertiveness, the role of compromise in hierarchical organisations); the word "dossier" as a French cultural concept (a file = a responsibility = a professional identity); how "proposer" in French professional contexts implies offering something for approval, not just suggesting.

**Grammar tip:** "Watch for the double-subject trap. `Je veux partir` (same subject → infinitive). `Je veux que tu partes` (different subjects → subjunctive). When you see `que` after a subjunctive trigger, ask: are there two different subjects? If yes, subjunctive. If no, use the infinitive."

---

### Lesson 29 — Le Subjonctif III
**CEFR B1 can-do:** Express emotions and feelings about events; express doubt and uncertainty; use complex conjunctions to build extended sentences.
**DELF B1 alignment:** Subjonctif — émotion, doute, concession. The DELF B1 writing production tasks (partie production écrite) require candidates to use emotion and doubt triggers correctly.
**Alter Ego+ 3 parallel:** Dossier 2 (closing) and Dossier 3 (opening) cover emotion triggers and concessive conjunctions. Alter Ego+ specifically contrasts espérer que (indicatif — exception) with craindre que (subjonctif).
**Authentic document type (Édito approach):** A personal letter or message exchange between two friends discussing a surprising life change — the kind of informal written French tested in DELF B1 partie production écrite.

**Grammar:** Three further uses of the subjunctive:
**(1) Emotion triggers:** être content/heureux/ravi/fier/triste/désolé/surpris/choqué/inquiet que + subjunctive. Also: avoir peur que, craindre que, regretter que, être fâché que. Note: `espérer que` takes the INDICATIVE (exception — DELF B1 tests this regularly. Learners must memorise it).
**(2) Doubt and negated opinion:** douter que, ne pas croire que, ne pas penser que, ne pas être sûr que, il est peu probable que — all + subjunctive. But: croire que, penser que, être sûr que, il est probable que — all + INDICATIVE (affirmative → no subjunctive).
**(3) Conjunctions requiring subjunctive:** pour que (so that), avant que (before), bien que / quoique (although), à moins que (unless), jusqu'à ce que (until), de peur que (for fear that), pourvu que (provided that). Contrast with conjunctions NOT requiring subjunctive: parce que, quand, après que (takes indicative in contemporary usage — a famous trap), pendant que, dès que.

**Vocabulary scope (28–32 words):** Emotion adjectives + que. Doubt verbs. All conjunctions above with English equivalents and their mood marked. Context: personal news, worries, life plans — vocabulary from DELF B1 production thematic domains.

**Dialogue scene:** Two close friends in a Paris café — one has just received surprising news (a job offer in another city, or an unexpected relationship change). The other reacts emotionally, expresses doubts, gives conditional advice using subjunctive conjunctions. Register is informal spoken French. 12–13 exchanges.

**Exercises (10 minimum):** Trigger classification (sort 12 triggers into three columns: SUBJONCTIF / INDICATIF / EITHER), fill-blank with correct mood after emotion triggers, `mood_choice` (croire que vs ne pas croire que — 8 items), conjunction fill-blank (bien que vs parce que vs quand — choose which requires subjunctive), transformation (concessive: `Il est fatigué mais il travaille` → `Bien qu'il soit fatigué, il travaille`), error correction (5 sentences where indicative/subjunctive has been swapped — the Grammaire Progressive approach), translation of 4 sentences using emotion + doubt triggers, speaking prompt.

**Cultural notes:** French café culture as a social institution (café as the venue for important conversations, not just quick espressos); French attitudes to expressing emotion publicly (relatively more reserved than in some cultures, but authentic in close friendships); the French concept of "l'expatriation" and how international mobility is increasingly a feature of French professional life.

**Grammar tip:** "Remember: `espérer que` always takes the INDICATIVE even though it expresses a wish. This is the most-tested exception on the DELF B1. `J'espère qu'il viendra` (futur, NOT subjonctif). Memorise: espérer = INDICATIF, always."

---

### Lesson 30 — Le Conditionnel Présent
**CEFR B1 can-do:** Make polite requests and suggestions; describe hypothetical situations; understand conditional statements in everyday and professional contexts.
**DELF B1 alignment:** Conditionnel présent — politesse, suggestion, hypothèse (si + imparfait). These uses appear in every DELF B1 document comprehension section.
**Alter Ego+ 3 parallel:** Dossier 3 introduces the conditional through journalistic use (le conditionnel journalistique) and polite professional requests — authentic real-world entry points before the si clause grammar.
**Authentic document type (Édito approach):** A careers advice column or mentoring session — the genre where suggestion and hypothesis live naturally in written French.

**Grammar:** Formation: infinitive (same as futur simple stems for irregulars) + endings: -ais, -ais, -ait, -ions, -iez, -aient. Irregular stems (same as futur): être → ser-, avoir → aur-, aller → ir-, faire → fer-, venir → viendr-, pouvoir → pourr-, vouloir → voudr-, savoir → saur-, voir → verr-, devoir → devr-. Uses:
**(1) Politeness:** `je voudrais`, `je pourrais`, `pourriez-vous`, `auriez-vous` — softening requests. Core professional French register.
**(2) Suggestion and advice:** `on pourrait`, `tu devrais`, `vous devriez`, `il faudrait` — the backbone of mentoring and advice-giving in French.
**(3) Si + imparfait hypothesis (Type 2):** `Si j'avais le temps, je voyagerais.` (Full si clause system comes in L31 — here, establish the conditional as the result clause.)
**(4) Reported future:** `il a dit qu'il viendrait` — first appearance; will be systematised in L36.
**(5) Journalistic conditional (recognition only):** `Le gouvernement annoncerait une réforme` — for reading comprehension, not tested productively at B1.

**Vocabulary scope (28–30 words):** Polite request frames as fixed constructions (je voudrais, je pourrais, pourriez-vous, auriez-vous l'amabilité de). Advice verbs: devoir, falloir, conseiller, recommander, suggérer. Hypothesis markers: dans ce cas, en ce cas, alors, à ta place, si j'étais toi. Context: professional mentoring and career decisions — DELF B1 written/oral production domain.

**Dialogue scene:** A young professional and their mentor (tuteur/tutrice) at a French company discussing career options. Mentor gives advice using `tu devrais`, `je te conseille`, `à ta place je...`; the mentee makes polite requests for information using `je pourrais vous demander...`, `auriez-vous...`. Contemporary French mentoring programme context (le mentorat is increasingly formalised in French companies). 12 exchanges.

**Exercises (10 minimum):** Formation drill (conditional for 8 verbs including 4 irregulars), fill-blank for polite requests (replace present with conditional), transformation (make requests more polite: `Vous avez...?` → `Vous auriez...?`), si-clause Type 2 preview (match si-clause to correct conditional result), `mood_choice` (conditional vs futur — which fits: real plan or hypothesis?), translation of 4 sentences (advice + hypothesis), multiple choice (which use: politeness / suggestion / hypothesis / reported future?), speaking prompt (3 pieces of advice to a friend using devrais/pourrait/faudrait).

**Cultural notes:** The tutoiement/vouvoiement distinction — and how even in companies that use tu internally, the conditionnel is used for politeness in certain professional registers; the rise of the mentoring culture in French companies following 2018 reforms (le plan de développement des compétences); how French job advice columns (L'Express, Le Monde Emploi) routinely use the conditionnel journalistique.

**Grammar tip:** "The conditional endings (-ais, -ait, -aient) sound identical to the imparfait endings. The difference is in the STEM: imparfait uses the nous-present stem; conditional uses the infinitive or irregular futur stem. `Il allait` (imparfait: all-) vs `Il irait` (conditional: ir-)."

---

### Lesson 31 — Les Phrases Hypothétiques
**CEFR B1 can-do:** Describe real and hypothetical conditions; express what would happen under different circumstances; understand hypothetical arguments in texts and conversations.
**DELF B1 alignment:** Phrases hypothétiques — si + présent + futur (Type 1) and si + imparfait + conditionnel (Type 2). DELF B1 explicitly tests Type 1 and Type 2. Type 3 is introduced here as B1+ enrichment.
**Alter Ego+ 3 parallel:** Dossier 4 presents the three si-clause types in a business/entrepreneurship context — `si vous investissez... si vous investissiez... si vous aviez investi...` — showing how the same verb stem shifts across the three types.
**Authentic document type (Édito approach):** An entrepreneurship pitch or business plan discussion — the format where all three hypothetical registers appear naturally (what will happen, what would happen, what would have happened).

**Grammar:** The complete si clause system — all three types side by side:
- **Type 1 (real/open condition):** si + présent → futur simple. `Si tu travailles, tu réussiras.` Condition is possible and open.
- **Type 2 (unreal/hypothetical present):** si + imparfait → conditionnel présent. `Si tu travaillais, tu réussirais.` Condition is imagined or unlikely right now.
- **Type 3 (unreal/hypothetical past):** si + plus-que-parfait → conditionnel passé. `Si tu avais travaillé, tu aurais réussi.` Condition didn't happen. (Full treatment in L32–33 — introduce structure here, don't drill it deeply yet.)

Mixed types in same conversation: `Si j'avais su (Type 3), je ne serais pas venu (Type 3). Mais maintenant que je suis là, si tu m'aides (Type 1), on finira (Type 1).`

**Vocabulary scope (26–28 words):** Hypothesis markers: à condition que (+ subj), pourvu que (+ subj), en supposant que (+ subj), au cas où (+ conditionnel — NOT subjonctif — this is a classic trap), sauf si, sinon, dans ce cas, autrement, à ta place. Time relationship markers: maintenant, à l'époque, à ce moment-là.

**Dialogue scene:** Two young French entrepreneurs at a co-working space (espace de coworking — a contemporary French professional context) discussing a potential startup — what will happen if they launch now, what would happen if they had more funding, what would have happened if they'd started two years earlier. All three si types appear naturally. 12–13 exchanges.

**Exercises (10 minimum):** Type identification (label each si sentence Type 1/2/3), Type 1 fill-blank (provide futur form), Type 2 fill-blank (provide conditionnel form), Type 2 sentence construction from prompts, Type 3 recognition (multiple choice — which sentence correctly expresses an unreal past?), matching si-clause to correct result clause, error correction (3 sentences with wrong tense combination — Grammaire Progressive approach), translation of 4 sentences across all three types, speaking prompt.

**Cultural notes:** The French startup ecosystem (French Tech label, Station F in Paris — the world's largest startup campus); the French notion of "risque professionnel" and cultural attitudes to entrepreneurship vs the stability of the fonctionnaire path; the rise of the portage salarial system as a compromise between freelance risk and employment security.

**Grammar tip:** "Never put a conjugated verb immediately after si in a conditional sentence — si + conditionnel is ALWAYS wrong in French. `Si je saurais` is never correct. Si takes: présent (Type 1), imparfait (Type 2), plus-que-parfait (Type 3). The conditional lives in the result clause only."

---

### Lesson 32 — Le Plus-que-parfait
**CEFR B1 can-do:** Narrate complex stories with events in different temporal relationships; explain what had already happened when something else occurred; understand narrative texts with multiple past time frames.
**DELF B1 alignment:** Plus-que-parfait — narrating sequences of events in the past. Appears in DELF B1 compréhension de l'oral (news reports, stories) and production écrite (narration tasks).
**Alter Ego+ 3 parallel:** Dossier 5 presents the plus-que-parfait in a narrative context — journalistic reports and personal anecdotes — building on the PC/imparfait system from A2.
**Authentic document type (Édito approach):** A project post-mortem or incident report — the French professional genre where past sequences are carefully analysed.

**Grammar:** Formation: avoir or être conjugated in the **imparfait** + past participle. Same être/avoir choice as passé composé (same 16 être verbs, all reflexive verbs). Same agreement rules as passé composé. Full conjugation of `parler` (j'avais parlé...) and `aller` (j'étais allé/e...). Uses:
**(1) Event prior to another past event:** `Quand je suis arrivé, il était déjà parti.` (PC = arrived; PQP = already left before that.)
**(2) Si Type 3 clause:** `Si j'avais su, je n'aurais pas accepté.` (Condition that didn't happen in the past.)
**(3) Reported speech tense shift (preview of L36):** présent → imparfait → plus-que-parfait chain.

Key principle from Grammaire Progressive: the PQP is not about being "more distant" in time — it's about being prior to a specific past reference point. Without a reference point, PQP is rarely used.

**Vocabulary scope (26–28 words):** Sequence markers drawn from DELF B1 narrative vocabulary: déjà, encore, avant de (+ inf), avant que (+ subj), après que (+ indic), au moment où, quand, lorsque, à peine...que, dès que, la veille (the day before), le lendemain (the day after). Also: avoir oublié de, avoir prévu de, s'être trompé de, ne pas avoir eu le temps de.

**Dialogue scene:** Two French colleagues conducting a post-mortem on a project that went wrong — reviewing what had already been done, what hadn't been done yet, what had been incorrectly assumed. The conversation alternates between passé composé (what happened at the time) and plus-que-parfait (what had happened before that). Authentic workplace register. 12–13 exchanges.

**Exercises (10 minimum):** Formation (PQP for 8 verbs including 3 être verbs with agreement), sequence identification (which event happened first? PC or PQP?), fill-blank (correct PQP form in narrative), sentence combination (two events → PQP + PC: `Il est parti. Je suis arrivé.` → `Quand je suis arrivé, il était déjà parti.`), Type 3 si-clause fill-blank (PQP in si clause — preview for L33), multiple choice (PC or PQP for given context), translation of 4 narrative sentences, transformation (add PQP for prior event to existing PC narrative), speaking prompt.

**Cultural notes:** The French concept of "retour d'expérience" (REX) — post-mortem analysis meetings, common in French organisations; the culture of written accountability in France (comptes-rendus, notes de service); how French bureaucracy's love of documentation shapes professional storytelling.

**Grammar tip:** "The plus-que-parfait is not `further back in the past` — it's `before a specific reference point` in the past. The passé composé anchors the story moment; the plus-que-parfait shows what happened before THAT moment. Without a reference point, PQP is rarely used."

---

### Lesson 33 — Le Conditionnel Passé
**CEFR B1 can-do:** Express regret about past events; describe what would have happened under different past conditions; understand nuanced criticism and self-reflection in French discourse.
**DELF B1 alignment:** Conditionnel passé — completes the si Type 3 system; also tests regret expressions (j'aurais dû, j'aurais pu) which appear in DELF B1 production écrite.
**Alter Ego+ 3 parallel:** Dossier 5 introduces the conditionnel passé alongside the PQP to complete the si clause system. Alter Ego+ specifically uses regret and self-reflection as the communicative context.
**Authentic document type (Édito approach):** A personal essay or reflection piece — the kind of "tribune libre" or opinion column that appears in French magazines.

**Grammar:** Formation: avoir or être conjugated in the **conditionnel présent** + past participle. Same être/avoir rules and agreements as passé composé. Full conjugation of `partir` (je serais parti/e...). Uses:
**(1) Complete si Type 3 (unreal past):** `Si j'avais su, je n'aurais pas accepté.`
**(2) Regret:** `J'aurais dû faire des études. J'aurais pu y aller.` — should have / could have / would have.
**(3) Reproach/criticism:** `Tu aurais pu me prévenir !` / `Elle aurait dû te l'expliquer.`
**(4) Journalistic uncertain past (recognition):** `Le président aurait signé l'accord.`
Review the complete si clause system: Type 1 → Type 2 → Type 3 with contrast table in grammar section.

**Vocabulary scope (26–28 words):** Regret markers: dommage que (+ subj), c'est dommage, malheureusement, hélas, si seulement (+ PQP — triggers conditionnel passé in result). Fixed constructions: j'aurais dû, j'aurais pu, j'aurais voulu, il aurait fallu, on aurait pu/dû. Reproach: Tu n'aurais pas dû, Il aurait mieux valu.

**Dialogue scene:** Two old university friends reuniting at a French café and reflecting on life choices — what should have been done differently, what they wish had happened, gently reproaching each other. Full Type 3 si clauses throughout plus stand-alone regrets. Warm, reflective, informal register. 12–13 exchanges.

**Exercises (10 minimum):** Formation (conditionnel passé for 8 verbs including être verbs + agreement), Type 3 si-clause completion (provide conditionnel passé result clause), regret transformation (`Je n'ai pas étudié` → `J'aurais dû étudier`), `rewrite` (rewrite 4 sentences as past hypotheticals), si clause type sorting (Type 1/2/3 — 9 sentences), error correction (3 sentences with wrong si clause tenses), translation of 4 sentences (mix of regret and past conditional), speaking prompt (3 things you wish you had done differently).

**Cultural notes:** The French educational system and the weight of choices made at 15–17 (orientation, filières, baccalauréat tracks — life-defining in ways uncommon in Anglophone systems); the literary tradition of the French "regret essay" (Montaigne, Proust); the cultural significance of the French café as a setting for philosophical conversations.

**Grammar tip:** "A quick check for conditionnel passé: both auxiliary verbs are conditional (être/avoir in conditional form), then the past participle. `J'aurais dû partir` = I should have left. The passé composé of devoir (`j'ai dû partir`) means I had to leave [and did]. Do not confuse them — the tense of the auxiliary changes everything."

---

### Lesson 34 — Les Pronoms Relatifs I
**CEFR B1 can-do:** Build complex descriptions of people, places, and things using relative clauses; understand longer, more complex sentences in French texts; avoid repetition through pronominal reference.
**DELF B1 alignment:** Pronoms relatifs simples — qui et que. Core DELF B1 grammar, tested in compréhension écrite (understanding complex sentences) and production écrite (writing connected prose).
**Alter Ego+ 3 parallel:** Dossier 5 presents relative pronouns as "rappel et enrichissement" — a review from A2 with B1-level complexity. Alter Ego+ specifically addresses the past participle agreement rule with que.
**Authentic document type (Édito approach):** A profile article or biographical sketch — the format where relative clauses are most dense in authentic French writing.

**Grammar:** `Qui` = subject of the relative clause. The relative pronoun replaces a noun that does the action of the subordinate verb: `L'homme qui parle est mon père.` (qui = l'homme = subject of parle.) `Que` = direct object of the relative clause. The relative pronoun replaces a noun that receives the action: `L'homme que je connais est mon père.` (que = l'homme = object of connais.) Key test from Grammaire Progressive: what follows qui? → a conjugated verb directly. What follows que? → a subject + verb. Que becomes `qu'` before a vowel. Past participle agreement with que: `La lettre qu'il a écrite.` (écrite agrees with la lettre = direct object preceding avoir.)

**Vocabulary scope (26–28 words):** Common sentence frames for relative clauses: la personne qui/que, la chose qui/que, l'endroit qui/que, le moment qui/que. Verbs frequently used in relative clauses (from Grammaire Progressive frequency): connaître, voir, rencontrer, chercher, trouver, préférer, choisir, attendre, entendre, lire, écrire, recevoir. Context: describing people, places, and situations.

**Dialogue scene:** A journalist (journaliste) and their editor at a French magazine planning a profile piece — describing the subject of the article, the people who know them, the places they've worked, the books they've written. Contemporary French media context. 12 exchanges.

**Exercises (10 minimum):** Qui or que? identification (10 sentences), sentence combination using qui, sentence combination using que, past participle agreement fill-blank (6 sentences with que + avoir), error correction (5 sentences where qui and que are swapped — the most common learner error per Grammaire Progressive), multiple choice (qui or que — 8 items), translation of 5 relative clause sentences, speaking prompt (describe 3 people or places using both qui and que).

**Cultural notes:** The role of magazines and written journalism in French cultural life (Le Monde, Le Figaro, L'Obs, Marianne — French people read print journalism at higher rates than most European countries); the culture of intellectual personality profiles (Grandes personnes) in French media; how French biographical writing uses complex relative clauses as a marker of cultivated register.

**Grammar tip:** "The fastest test: cover up the relative pronoun and read what follows. If the next word is a conjugated verb → it's `qui` (the subject is missing). If the next word is a subject (noun or pronoun) → it's `que` (the object is missing). `L'homme qui [travaille]` vs `L'homme que [je] connais.`"

---

### Lesson 35 — Les Pronoms Relatifs II
**CEFR B1 can-do:** Build more sophisticated descriptions of places, times, and possessive relationships; understand complex relative structures in authentic French texts.
**DELF B1 alignment:** Pronoms relatifs — où et dont (DELF B1 core). Lequel/laquelle marked as B1+ enrichment.
**Alter Ego+ 3 parallel:** Dossier 5 teaches où and dont as the two priority pronouns after qui/que, then introduces lequel as "enrichissement". This is the model we follow.
**Authentic document type (Édito approach):** An architectural or travel description — where place, time, possession, and manner relative clauses cluster naturally.

**Grammar:**
**`Où`** — replaces a place expression (`à Paris`, `dans le café`) OR a time expression (`le jour`, `l'année`, `au moment`): `La ville où j'habite. Le jour où je t'ai rencontré.`

**`Dont`** — replaces `de + noun`. Three uses (Grammaire Progressive model):
(1) Verb + de: parler de, avoir besoin de, se souvenir de, avoir peur de, rêver de → `Le sujet dont il parle.`
(2) Possessive (whose): `La femme dont le fils est médecin.`
(3) Adjective + de: être fier/content/sûr de → `Le résultat dont je suis fier.`

**`Lequel/Laquelle/Lesquels/Lesquelles` — B1+ ENRICHMENT** (beyond DELF B1 minimum, labelled explicitly in the lesson):
Used after a preposition (other than de → dont, other than à + person → qui): `La table sur laquelle j'ai posé mon sac. L'outil avec lequel il travaille.` Agreement in gender and number. Contractions: auquel, à laquelle, auxquels, auxquelles; duquel, de laquelle, desquels, desquelles. Mark all lequel exercises as BONUS — not in the core exercise count.

**Vocabulary scope (26–30 words):** Où/dont trigger verbs and adjectives. Common prepositions taking lequel: sur, sous, dans, avec, pour, sans, par, grâce à, à cause de. Context: describing spaces and personal environments.

**Dialogue scene:** An architect and a client doing a walk-through of a renovated Haussmann apartment in Paris — the rooms where things happened, the materials with which rooms were finished, the client whose brief shaped the design, the reasons for which certain decisions were made. Contemporary French architecture/design context. 12 exchanges.

**Exercises (10 minimum — lequel items labelled BONUS):** Où vs dont choice (10 sentences), dont sentence combination (from two sentences using a de-verb), où sentence combination (place and time), full relative pronoun choice (qui/que/où/dont — 10 sentences, DELF B1 scope), translation of 5 sentences using all four core pronouns, speaking prompt using où, dont, and one lequel. Bonus: lequel agreement form drill (4 items), lequel contraction fill-blank (4 items).

**Cultural notes:** The Haussmann renovation of Paris (Baron Haussmann and Napoleon III's transformation of Paris in the 1860s — still the dominant architectural model of central Paris); the French passion for renovation and interior design (émissions de rénovation are among the most watched on French TV); the role of the architecte d'intérieur vs décorateur in French construction culture.

**Grammar tip:** "`Dont` is a red flag for one question: does the verb/adjective use `de`? Parler **de**, avoir besoin **de**, être fier **de** → `dont`. Everything else with a preposition → `lequel`. And `où` = always place or time — never people or abstract ideas."

---

### Lesson 36 — Le Discours Indirect
**CEFR B1 can-do:** Report what others have said, asked, or ordered; understand reported speech in news and conversational contexts; write summaries of conversations and interviews.
**DELF B1 alignment:** Discours indirect — all three modes (statements, questions, commands). Appears in DELF B1 compréhension de l'oral (summarising what speakers said) and production écrite (reporting an interview).
**Alter Ego+ 3 parallel:** Dossier 6 focuses on "rapporter des paroles" in a journalistic context — press conference reports, interview summaries. This grounds reported speech in its most natural professional use.
**Authentic document type (Édito approach):** A press conference or interview report — the format where all three reported speech modes appear in every article.

**Grammar:** Reported speech — transforming direct speech into reported/indirect speech.
**Reporting statements** (`dire que`, `expliquer que`, `affirmer que`, `ajouter que`, `préciser que`, `annoncer que`): Tense shifts when the reporting verb is in a past tense — présent → imparfait, passé composé → plus-que-parfait, futur simple → conditionnel présent, futur proche (aller + inf) → allait + inf. Time expressions shift: maintenant → à ce moment-là, hier → la veille, demain → le lendemain, aujourd'hui → ce jour-là, ici → là. Pronoun shifts: je → il/elle, tu → je/il/elle (context-dependent).
**Reporting questions:** Yes/no → `si + declarative word order`. Information questions → `interrogative word + declarative order` (no inversion, no est-ce que).
**Reporting commands:** `dire/demander/ordonner à qqn de + infinitive`.

**Vocabulary scope (28–30 words):** Reporting verbs from journalism and conversation: dire, expliquer, affirmer, ajouter, préciser, demander, répondre, annoncer, prétendre, admettre, reconnaître, nier, promettre, conseiller, avertir. Time expression shift pairs. Discourse markers: selon lui/elle, d'après lui/elle, il paraît que, il semblerait que.

**Dialogue scene (minimum 14 exchanges):** A journalist at a French radio station has just returned from interviewing a politician. They brief their colleague on what was said. The middle section shows the transformation in real time — journalist reads their notes (direct speech), then rephrases for the report (indirect speech). Contemporary French media setting. 14 exchanges minimum.

**Exercises (10 minimum):** Tense shift table (transform 8 direct → indirect, reporting verb in past), yes/no question transformation (4 sentences), information question transformation (4 sentences), command transformation (4 commands → indirect), time expression matching (maintenant → à ce moment-là etc.), full paragraph transformation (5-sentence direct dialogue → indirect), `rewrite` (3 sentences: reported speech back to direct speech), translation EN→FR of 4 indirect speech sentences, speaking prompt (report what a friend or public figure said — using reported speech).

**Cultural notes:** French radio journalism culture (France Inter, franceinfo, France Culture — public radio is enormously influential in French intellectual life, reaching 20m+ listeners weekly); the concept of "discours rapporté" in French rhetoric and education (le baccalauréat includes oral compréhension with reported speech); how French political communication relies heavily on indirect speech in media reports.

**Grammar tip:** "The most common error in reported speech is forgetting the time expression shifts. `Il m'a dit qu'il viendrait demain` is WRONG if you're reporting it the next day — it should be `le lendemain`. Always ask: has the time reference shifted from the original speech act?"

---

### Lesson 37 — La Voix Passive
**CEFR B1 can-do:** Describe processes and events without specifying the agent; understand passive constructions in formal texts (news, reports, academic writing); choose between passive and active for stylistic effect.
**DELF B1 alignment:** Voix passive. Appears especially in DELF B1 compréhension écrite — news articles and official documents use the passive extensively.
**Alter Ego+ 3 parallel:** Dossier 7 presents the passive in a journalism/media context, focusing on active → passive transformation and the contrast with `on + active` in spoken French.
**Authentic document type (Édito approach):** A news brief or press release — the French journalistic genre most saturated with passive constructions.

**Grammar:** Formation: être (in any tense) + past participle + par (agent performing an action) or de (for states and emotions). Past participle always agrees with the subject. Tenses: présent passif (`est construit`), passé composé passif (`a été construit`), imparfait passif (`était construit`), futur passif (`sera construit`), conditionnel passif (`serait construit`). Active → passive: `Le gouvernement a signé la loi.` → `La loi a été signée par le gouvernement.` When to prefer `on` + active: passive is relatively rare in spoken French — `on a volé mon sac` sounds more natural than `mon sac a été volé`. Par vs de: par = by (agent performing action); de = by/of (state/emotion/manner: entouré de, accompagné de, couvert de, admiré de, connu de).

**Vocabulary scope (26–28 words):** Common passive contexts from DELF B1 reading domains: être construit/rénové/inauguré (buildings), être élu/nommé/choisi (positions), être arrêté/condamné/libéré (legal), être blessé/soigné/opéré (medical), être publié/écrit/traduit (publications). Par vs de trigger verbs: accompagné de, entouré de, suivi de, connu de, admiré de, aimé de.

**Dialogue scene:** Two friends discussing a news story they've both read — events described in passive (elections, accidents, announcements from a news article they're reading together), one person then restating things more naturally using `on`. Contemporary French news context. 12 exchanges.

**Exercises (10 minimum):** Active → passive (6 sentences in different tenses), passive → active (4 sentences), par or de choice (8 sentences), tense identification in passive, `rewrite` (4 passive sentences → `on` + active), multiple choice (correct passive form), translation of 4 sentences (2 active→passive, 2 passive→active), speaking prompt (describe how something well-known was made/created/discovered).

**Cultural notes:** The passive in formal French writing (lois, décrets, comptes-rendus de réunion all use heavy passive construction); the French administrative love of the impersonal passive (`il a été décidé que...` = the classic bureaucratic dodge); France's grandes constructions (Centre Pompidou, Grand Louvre, Grande Arche de la Défense — presidential architectural projects described in passive).

**Grammar tip:** "Only transitive verbs (verbs that take a direct object) can be made passive. `Partir`, `arriver`, `aller`, `venir` have no direct object and can NEVER be passive. `Il est arrivé` is passé composé (intransitive with être), not passive. The test: can you answer `quoi` or `qui` after the verb? If yes, it can be passive."

---

### Lesson 38 — Le Gérondif
**CEFR B1 can-do:** Express how, when, or under what condition something is done; describe simultaneous activities; express manner and means in sophisticated connected speech.
**DELF B1 alignment:** Gérondif — one of the 20 DELF B1 official grammar points. Tested in production écrite (complex sentence structure) and compréhension écrite (recognising gérondif in authentic texts).
**Alter Ego+ 3 parallel:** Dossier 8 introduces the gérondif through lifestyle and habits — daily routine descriptions, sports, and professional practices — which is the most natural domain for simultaneous action.
**Authentic document type (Édito approach):** A lifestyle or wellness article — the magazine genre where gérondif clusters most densely ("en pratiquant le yoga...", "en réduisant les écrans...").

**Grammar:** Formation: take the `nous` form of the present tense → drop `-ons` → add `-ant`. Three exceptions: être → étant, avoir → ayant, savoir → sachant. The subject of the gérondif is ALWAYS the same as the subject of the main verb — this is the primary error from Grammaire Progressive. Uses:
**(1) Simultaneous action:** `Elle chante en cuisinant.` (same time, same subject)
**(2) Manner or means:** `Il a réussi en travaillant dur.` (how he succeeded)
**(3) Condition:** `En partant maintenant, tu arriveras à temps.` (if you leave now)
**(4) `Tout en` + gérondif:** simultaneous but contrasting or unexpected: `Tout en comprenant ta position, je ne suis pas d'accord.`
What the gérondif is NOT: the present participle used as adjective (`une histoire fascinante`). The gérondif requires `en` — always.

**Vocabulary scope (26–28 words):** Gérondif forms of key verbs from DELF B1 frequency: en faisant, en allant, en disant, en prenant, en lisant, en écrivant, en sachant, en étant, en ayant, en voyant, en voulant, en pouvant. Context phrases for manner and condition from lifestyle/wellness domain (Édito B1 thematic alignment).

**Dialogue scene:** A health and wellness coach (coach de bien-être — a growing profession in France) session with a client who wants to improve their work-life balance. Coach asks how the client achieves things; client explains habits using manner and condition; discussion of simultaneous activities and lifestyle changes. Natural gérondif throughout. 12 exchanges.

**Exercises (10 minimum):** Formation drill (gérondif for 10 verbs), use identification (simultaneous / manner / condition / contrast?), sentence combination (combine using en + gérondif: `Il lit. Il mange.` → `Il lit en mangeant.`), same-subject test (identify the gérondif error when subjects differ), `tout en` + gérondif construction (4 sentences), fill-blank with correct gérondif form, translation of 4 sentences, error correction (3 formation errors — Grammaire Progressive approach), speaking prompt (describe 3 things you do simultaneously and how you achieved something important).

**Cultural notes:** The bien-être industry in France (sophrologie, méditation de plein air, coaching professionnel — a €3bn+ market); the French concept of "équilibre" between professional and personal life (shaped by the 35-hour week and RTT culture); how wellness vocabulary (ressourcement, épanouissement, bienveillance) has entered French corporate language.

**Grammar tip:** "`En` before a verb form = gérondif ONLY. `En parlant`, `en faisant`, `en allant`. Never drop `en` — `faisant` alone is the present participle (adjective/reduced clause), not the gérondif. They look identical except for the `en`."

---

### Lesson 39 — Le Faire Causatif
**CEFR B1 can-do:** Describe delegating tasks and having things done by others; understand the distinction between doing something yourself and having it done; use nuanced verb constructions in professional and daily life contexts.
**DELF B1 alignment:** Not a core DELF B1 exam grammar point, but it appears regularly in DELF B1 reading texts. Marked as B1 communicative enrichment — essential for real French but not exam-critical.
**Alter Ego+ 3 parallel:** Dossier 9 includes faire causatif in a service/consumption context — having your car repaired, having clothing altered, ordering renovations — exactly the contexts where this construction is most natural.
**Authentic document type (Édito approach):** A home renovation forum thread or real estate consultation — the context where causative constructions cluster most naturally.

**Grammar:** The causative expresses having something done (by someone else) rather than doing it yourself.
**`Faire + infinitive`:** `Je fais réparer ma voiture.` (I'm having my car repaired.) `Il fait construire une maison.` The object of the infinitive follows the infinitive: faire + infinitive + object. If agent is specified: faire + infinitive + object + par + agent. With object pronouns: pronoun goes before faire (not before the infinitive): `Je la fais réparer.` In passé composé: the past participle of faire is INVARIABLE in the causative (`Je l'ai fait réparer` — no agreement — an official exception from Grammaire Progressive).
**`Se faire + infinitive`:** Having something done to oneself: `Elle s'est fait couper les cheveux.`
**`Laisser + infinitive`:** Let/allow: `Laisse-moi parler.`

**Vocabulary scope (26–28 words):** Common causative constructions from DELF B1 daily life domain: faire réparer, faire construire, faire nettoyer, faire livrer, faire venir, faire entrer/sortir, faire savoir, faire comprendre. Se faire: se faire couper les cheveux, se faire voler, se faire attendre. Laisser: laisser parler, laisser passer, laisser faire, laisser tomber.

**Dialogue scene:** A homeowner (propriétaire) managing a renovation project in their French apartment — instructing workers (artisans), arranging deliveries, having things fixed, allowing contractors access. Contemporary French renovation context (immobilier is a national obsession in France). Mix of faire causatif, se faire, and laisser. 12 exchanges.

**Exercises (10 minimum):** Causative construction (rewrite `Je répare ma voiture` → `Je fais réparer ma voiture`), object pronoun insertion with faire causatif, agent addition (`... par l'architecte`), se faire transformation (4 sentences), laisser fill-blank, passé composé of faire causatif — no agreement drill (4 sentences), `rewrite` (4 sentences: active → causative), translation of 5 sentences, speaking prompt.

**Cultural notes:** The French artisan economy (plombier, électricien, menuisier, maçon — artisans have a legally protected status in France via the Chambre des Métiers et de l'Artisanat); the French home ownership culture and the loi Carrez (the legal regulation requiring exact measurement of apartment surface area); the growing platform economy (MyLittleVoisin, Hellocasa) disrupting traditional artisan markets.

**Grammar tip:** "In the causative, `faire` is the main verb and carries ALL the tense information. The infinitive that follows never changes. And in the passé composé, `fait` is ALWAYS invariable in the causative — `je les ai fait réparer` (no -s on fait). This is an official exception to past participle agreement — one of the few worth memorising explicitly."

---

### Lesson 40 — Les Connecteurs Logiques
**CEFR B1 can-do:** Construct extended, logically connected arguments in speech and writing; link ideas across sentences using cause, consequence, concession, and opposition; understand argumentative texts.
**DELF B1 alignment:** Connecteurs logiques — explicitly listed in the DELF B1 official syllabus. Production écrite tasks require candidates to use logical connectors to structure arguments. This is one of the most heavily weighted B1 productive skills.
**Alter Ego+ 3 parallel:** Dossier 9 and the capstone dossier (débat) systematically review logical connectors in the context of argumentative writing and oral debate — exactly the DELF production format.
**Authentic document type (Édito approach):** A structured opinion article or letter to the editor (courrier des lecteurs) — the format where all four connector categories appear.

**Grammar:** No new conjugations — this lesson builds argumentative discourse competence. Four categories:

**Cause:** parce que (direct cause, answers pourquoi), puisque (already-known/obvious cause: `Puisque tu es là, aide-moi.`), car (written/formal, never starts a sentence), étant donné que / vu que / du fait que (given that — formal), à cause de / grâce à (negative/positive cause + noun, not clause).

**Consequence:** donc (therefore), alors (so/then), ainsi (thus — formal), c'est pourquoi (that's why), par conséquent (consequently — formal), du coup (informal: so as a result — widely used in spoken French), de ce fait (as a result — formal).

**Concession:** certes (granted), il est vrai que (it's true that), même si + indicatif (even if), bien que + subjonctif (although), pourtant/cependant/néanmoins/toutefois (yet/however/nonetheless), quand même (even so — informal).

**Opposition:** tandis que / alors que (whereas), contrairement à + noun (unlike), en revanche / par contre (on the other hand — par contre is informal but standard in contemporary French), à l'inverse de (in contrast to).

Also introduce: `après avoir/être + past participle` as a grammaticalised B1 connector (`Après avoir réfléchi, j'ai décidé...`) — teach as a fixed construction for linking past events. (Grammaire Progressive treats this as a productive B1 tool.)

**Vocabulary scope (26–32 words):** All the connectors above, organised by category, with register labels (formal/neutral/informal) and example sentences. Register awareness is a DELF B1 production criterion.

**Dialogue scene:** A structured discussion in a French adult education class (cours du soir — a common French institution) on a topic that divides opinion among participants: the 4-day work week, mandatory voting, or screens and young children. Two participants with opposing views use cause, consequence, concession, and opposition connectors throughout. 13 exchanges.

**Exercises (10 minimum):** Category sorting (assign 16 connectors to cause/consequence/concession/opposition), fill-blank (choose correct connector from category prompt), register matching (formal vs informal equivalent pairs), sentence combination (join two sentences using specified connector), error correction (5 sentences with wrong connector for the logic — Grammaire Progressive approach), `rewrite` (add concession to a flat statement: `Il est intelligent. Il échoue.` → `Certes il est intelligent, mais il échoue pourtant.`), `après avoir/être` construction (4 sentences), translation of 4 complex connector sentences, speaking prompt (present two sides of an issue using 2 cause, 2 concession, and 2 opposition connectors minimum).

**Cultural notes:** French debating culture (le débat — France has a national tradition of structured public argument, from the Assemblée nationale to school philosophy classes); the cours du soir and formation continue system (adult education is subsidised in France through the compte personnel de formation — CPF); the French love of the opinion article (la tribune) in major newspapers.

**Grammar tip:** "`Parce que` explains a NEW reason the listener doesn't know. `Puisque` presents a reason already known to both speakers — it's almost like saying 'as you know'. `Car` always comes mid-sentence, never starts one. Getting these three right makes your written French sound immediately more sophisticated — they're the three most commonly confused connectors in DELF production."

---

### Lesson 41 — Exprimer son Opinion et la Nuance
**CEFR B1 can-do:** Express personal opinions with nuance and uncertainty; disagree politely; use hedging language to avoid overstatement; participate meaningfully in discussions on social and cultural topics.
**DELF B1 alignment:** Expression de l'opinion — heavily tested in DELF B1 production orale (monologue suivi and exercice en interaction) and production écrite. This lesson is the grammar anchor for both.
**Alter Ego+ 3 parallel:** The debate and opinion unit in Alter Ego+ 3 specifically addresses indicatif vs subjonctif after certainty/uncertainty frames — the most precisely grammatical aspect of B1 opinion expression.
**Authentic document type (Édito approach):** A television debate or round table discussion — the French format where nuanced, hedged opinion expression is modelled most visibly (think Quotidien, C à vous, Les Grandes Gueules).

**Grammar:** No new tense. Assembles B1 tools for sophisticated, nuanced opinion.

**Degrees of certainty (with correct mood — DELF B1 critical grammar):**
- `Il est certain que` + indicatif / `Il est évident que` + indicatif / `Il est clair que` + indicatif
- `Il est probable que` + indicatif / `Il est vraisemblable que` + indicatif
- `Il est possible que` + subjonctif / `Il se peut que` + subjonctif
- `Il est peu probable que` + subjonctif / `Il est douteux que` + subjonctif / `Il est impossible que` + subjonctif

**Personal opinion (indicatif — no subjunctive after personal opinion markers when positive):**
- `À mon avis` / `selon moi` / `d'après moi` + indicatif
- `Il me semble que` + indicatif / `J'ai l'impression que` + indicatif
- `Je pense que` / `Je crois que` / `J'estime que` / `Je trouve que` + indicatif (affirmative → indicatif)
- `Je ne pense pas que` / `Je ne crois pas que` + subjonctif (negative → subjonctif)

**Disagreeing with nuance:** `Je ne suis pas tout à fait d'accord avec...`, `je vois les choses différemment`, `j'ai des réserves sur...`, `cela me semble discutable`, `je comprends ta position, mais...`

**Hedging:** `en quelque sorte`, `d'une certaine manière`, `jusqu'à un certain point`, `dans une certaine mesure`, `relativement`, `plutôt`, `assez`.

**Vocabulary scope (28–32 words):** All opinion frames as vocabulary items. Hedging adverbs. Nuanced response phrases. Context: social and cultural topics from Édito B1 domains (work-life balance, social media, urban vs rural living, education reform).

**Dialogue scene:** Two acquaintances at a French dinner party who don't know each other well — discussing a genuine topic they see differently (let's say the 4-day work week, as a B1-appropriate social debate topic). Both use hedged, nuanced French — not blunt assertions. The conversation models respectful disagreement: partial agreement, reservations, alternative perspectives. 13–14 exchanges. Register: educated informal (educated adults who are polite but engaged).

**Exercises (10 minimum):** Indicatif or subjonctif after opinion frame? (12 items), mood transformation (change affirmative → negative: `Je pense qu'il a raison` → `Je ne pense pas qu'il ait raison`), fill-blank with hedging adverbs, degree of certainty ranking (order 8 expressions from certain → uncertain), `rewrite` (soften 4 blunt assertions using hedging), error correction (5 sentences with wrong mood after certainty/opinion frames), translation of 4 opinion sentences, speaking prompt (express a nuanced view on something you care about — using 2 certainty frames, 2 personal opinion frames, 1 disagreement phrase, 1 hedging device).

**Cultural notes:** French dinner party conversation norms (la table is considered a space for intellectual discussion — disagreement is expected and respected, not avoided as in some cultures); the French philosophical tradition in everyday conversation (Descartes, Pascal, Voltaire — French people are educated to argue in structured, logical ways from early school); the role of the programme "Des paroles et des actes" or "C politique" as models of sophisticated French public debate.

**Grammar tip:** "The single most reliable rule: `penser que`, `croire que`, `trouver que` take INDICATIF in the affirmative and SUBJONCTIF when negated. `Je pense qu'il vient` (certain) vs `Je ne pense pas qu'il vienne` (doubt). The same verb flips the mood. This is the most-tested B1 distinction — and the one most French learners get wrong in the DELF exam."

---

### Lesson 42 — Consolidation B1 (Capstone)
**CEFR B1 can-do:** Integrate all B1 structures in spontaneous, extended discourse; participate in complex workplace conversations; express hypotheses, report speech, describe events in sequence, and argue positions — all in the same conversation.
**DELF B1 alignment:** Integrates all 20 DELF B1 grammar points in a capstone context.
**Alter Ego+ 3 parallel:** Alter Ego+ 3 ends with a full "bilan" dossier — a multi-scene conversation that synthesises all communicative acts from the course, with DELF B1 practice tasks integrated.
**Authentic document type (Édito approach):** A multi-stakeholder workplace meeting — the most demanding real-world French communication context at B1.

**Grammar:** No new grammar. Integrates ALL B1 structures in a demanding multi-scene dialogue and maximum-variety exercise set.

**Vocabulary scope (26–30 words):** Advanced discourse markers not yet fully consolidated — authentic B1+ discourse particles that elevate production toward B2: `quoi qu'il en soit` (whatever the case), `dans la mesure où` (insofar as), `à cet égard` (in this regard), `force est de constater que` (one must acknowledge that), `il n'en reste pas moins que` (nonetheless), `toujours est-il que` (the fact remains that). These are genuine B1+ constructions that appear in DELF B1 reading texts and give oral production its sophistication.

**Dialogue scene (minimum 16 exchanges):** A three-person meeting at a French company — a project director, a team leader, and a client representative — deciding on a major initiative (a product launch, a service redesign, or a restructuring). The conversation must include:
- Subjunctive (at least 4 triggers from L27–29 — desire, emotion, doubt)
- Conditional present (politeness in addressing the client + hypothesis)
- Si clause (at least one Type 2 and one Type 3 — with correct tense pairing)
- Plus-que-parfait (describing what had happened before the meeting)
- Relative clauses (qui, que, dont, où — at least one each)
- One reported speech moment (someone quotes what was said in a previous meeting)
- Logical connectors (cause, consequence, concession — all three)
- Nuanced opinion expression (at least one hedged disagreement)

**Exercises (12 minimum, maximum variety):**
- Full grammar audit: 10-sentence paragraph with errors across all B1 structures (error correction — Grammaire Progressive capstone approach)
- Reported speech transformation: convert a 6-line direct dialogue to indirect speech
- Si clause transformation: rewrite 4 Type 1 sentences as Type 2 and Type 3
- Relative pronoun fill-blank: 10 sentences using qui/que/où/dont (+ optional lequel bonus)
- Subjunctive or indicative: 12-item `mood_choice` exercise (mixing all trigger types from L27–29 + L41)
- Gérondif construction: 4 sentences
- Causative faire: 4 sentence rewrites
- Logical connectors: fill-blank across all four categories (8 items)
- Translation: complex 6-sentence paragraph EN→FR using B1 structures
- Speaking prompt: Deliver a 90-second argument on any topic using: 2 subjunctive triggers, 1 si clause (any type), 1 relative clause with dont, 1 conditional, 2 logical connectors, 1 nuanced opinion frame

**Cultural notes (5 — this is the capstone lesson):**
- What B1 means in France: the DELF B1 is the minimum level required for French citizenship naturalisation — getting here is not just an academic milestone, it's a civic one.
- The French professional meeting culture: réunions are formal, hierarchical, and often end with a "compte-rendu" that everyone signs — very different from Anglophone stand-ups.
- The Alliance Française network: 835 centres in 133 countries — the French state's primary soft-power tool for spreading French language and culture globally.
- What comes at B2: literary register, past subjunctive, impersonal constructions, complex argumentative writing, nuanced appreciation of French cinema and literature — the level where French becomes truly pleasurable to consume.
- French as a world language: 321 million French speakers worldwide, official language of 29 countries, second most-studied language in the world after English — knowing B1 French opens doors in Africa, the Caribbean, the Pacific, and beyond.

**Grammar tip (final lesson):** "B1 is the CEFR threshold of real communicative independence. You can now navigate most everyday French situations, express nuanced opinions, discuss your past and hypothetical futures, and understand authentic French media. This is the level required for French citizenship. B2 builds on all of this — adding literary register, the full subjunctive system, complex pronoun sequences, and the ability to appreciate irony and ambiguity in native French speech. You are ready."

---

## Exercise Types at B1

All existing types from `lessonTypes.ts` remain valid. The two new types added in A2 (`error_correction`, `tense_choice`) are also available. Additionally implement:

### `mood_choice` (subjunctive vs indicative):
```typescript
export interface MoodChoiceExercise {
  id: string
  type: 'mood_choice'
  question: string
  items: {
    sentence: string
    verb: string
    indicative_form: string
    subjunctive_form: string
    correct_answer: 'indicative' | 'subjunctive'
    trigger?: string
    explanation: string
  }[]
}
```

### `rewrite` (structural transformation):
```typescript
export interface RewriteExercise {
  id: string
  type: 'rewrite'
  question: string
  instruction_type: 'reported_speech' | 'passive' | 'si_clause' | 'relative_clause' | 'causative' | 'gerund'
  items: {
    original: string
    expected: string
    hint?: string
    explanation: string
  }[]
}
```

Add both to the `Exercise` union in `lib/lessons/lessonTypes.ts`. Implement both in `components/lessons/InteractiveExercise.tsx`.

---

## Files to Update (Minimal Edits Only)

### `src/app/lessons/page.tsx`
Add a B1 section below the A2 section following the exact same card layout. Show all 16 lessons (L27–L42) with links to `/lessons/intermediate/[n]`. All 16 B1 cards should display a lock icon (the level is premium — `is_free: false` for all B1 lessons).

### `src/app/lessons/elementary/page.tsx`
Add a footer navigation link: `→ B1 Intermédiaire` pointing to `/lessons/intermediate`, styled to match the existing navigation pattern on that page.

---

## Quality Checklist

Before finishing, verify each of the 16 lessons:

- [ ] No grammar structure in dialogue that hasn't been taught yet (check the sequencing rules above)
- [ ] Vocabulary count is 26–34 words, drawn from DELF B1 frequency domains
- [ ] Minimum 10 exercises per lesson (12 for L42)
- [ ] Minimum 6 different exercise types per lesson
- [ ] Every dialogue exchange has `pronunciation`
- [ ] Every `grammarPoint` has a `tip` field (following Grammaire Progressive error-targeting approach)
- [ ] Cultural notes are specific (real France — Édito/Alter Ego+ thematic domains) — 3–5 per lesson, 5 for L42
- [ ] Subjunctive trigger accuracy is 100% correct (no indicative after subjunctive triggers or vice versa)
- [ ] Reported speech tense shifts are exactly correct (L36 and all lessons using reported speech)
- [ ] Si clause tense combinations are exactly correct: present+futur / imparfait+conditionnel / PQP+conditionnel passé
- [ ] No B2 structures (no passé simple, no subjunctive past, no double object pronoun clusters)
- [ ] Lequel in L35 is explicitly labelled B1+ enrichment and its exercises marked BONUS
- [ ] Both new exercise types (`mood_choice`, `rewrite`) are implemented and used across the lessons
- [ ] `IntermediateLessonLayout.tsx` component created and all 16 lesson pages use it
- [ ] `/lessons/intermediate/page.tsx` shows all 16 lessons in A1-matching design (no gradients, no emojis)
- [ ] `lessons/page.tsx` B1 section shows all 16 lessons with lock icon
- [ ] No audio imports anywhere
- [ ] Lesson 42 dialogue has 16+ exchanges and uses all major B1 structures
- [ ] Dialogue scenes feel authentic to contemporary French life (not textbook-artificial)
- [ ] Each lesson's communicative context aligns with its CEFR B1 can-do descriptor

---

## What NOT to Change

- `lib/lessons/lessonData.ts` — untouched (A1 data)
- `lib/supabase.js` — untouched
- `lib/services/` — untouched
- `src/app/globals.css` — untouched
- `src/app/layout.tsx` — untouched
- `src/app/lessons/beginner/` — untouched
- `src/app/lessons/elementary/[13–26]/page.tsx` — untouched
- `components/lessons/ElementaryLessonLayout.tsx` — untouched
- `components/lessons/BeginnerLessonPage.tsx` — untouched
- `components/lessons/DialogueSection.tsx` — untouched
- `components/lessons/ExerciseProgress.tsx` — untouched
- `public/`, `tsconfig.json`, `next.config.ts`, `package.json` — untouched
- No audio imports anywhere in new lesson pages
