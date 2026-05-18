# Codex Prompt: FrançaisLibre — A2 Curriculum Build (Lessons 13–26) v2

## ⚠️ Current State — Read Before Starting

A previous Codex run created some elementary pages that need to be **fixed or replaced**. Here is exactly what exists and what to do with each file:

### Files to DELETE:
- `src/app/lessons/elementary/11/page.tsx` — delete it (A2 starts at L13; L11 is an A1 lesson)
- `src/app/lessons/elementary/12/page.tsx` — delete it (same reason)

### Files to REPLACE (wrong curriculum content — rewrite from scratch with correct lesson data):
- `src/app/lessons/elementary/13/page.tsx` — currently "Completing Essential Irregular Verbs" → replace with **Le Passé Composé I**
- `src/app/lessons/elementary/14/page.tsx` — currently "Professional Communication" → replace with **Le Passé Composé II**
- `src/app/lessons/elementary/15/page.tsx` — currently "Complex Sentence Structure" → replace with **Le Passé Composé III**
- `src/app/lessons/elementary/16/page.tsx` — currently "Advanced Time Expressions" → replace with **Les Verbes en -ir et -re**
- `src/app/lessons/elementary/17/page.tsx` — currently duplicate "Future Plans" → replace with **Les Verbes Pronominaux**
- `src/app/lessons/elementary/18/page.tsx` — currently "Advanced Future Planning" → replace with **Les Pronominaux au Passé Composé**
- `src/app/lessons/elementary/19/page.tsx` — currently "A2 Review" → replace with **L'Imparfait**
- `src/app/lessons/elementary/page.tsx` — rewrite to match A1 design (see design rules below)

### Files to CREATE (don't exist yet):
- `src/app/lessons/elementary/20/page.tsx` — **Passé Composé vs Imparfait**
- `src/app/lessons/elementary/21/page.tsx` — **Le Futur Simple**
- `src/app/lessons/elementary/22/page.tsx` — **Les Pronoms COD**
- `src/app/lessons/elementary/23/page.tsx` — **Les Pronoms COI, Y et EN**
- `src/app/lessons/elementary/24/page.tsx` — **La Négation et la Comparaison**
- `src/app/lessons/elementary/25/page.tsx` — **Les Irréguliers Essentiels**
- `src/app/lessons/elementary/26/page.tsx` — **Consolidation A2 (Capstone)**

### Component to keep (DO NOT rewrite):
- `components/lessons/ElementaryLessonLayout.tsx` — already exists and works. Use its `ElementaryLessonData` interface as-is for all A2 lesson pages.

---

## Project Context

You are working on **FrançaisLibre**, a Next.js 15 / TypeScript / Tailwind CSS French learning web app. The A1 curriculum (Lessons 1–12) is complete in `lib/lessons/lessonData.ts`. You are now building the **A2 curriculum: Lessons 13–26** (14 lessons).

**Tech stack:** Next.js 15, TypeScript, Tailwind CSS, Supabase (backend), Vercel (deployment). **No audio generation** — do not add any audio-related code.

---

## Design Rules — Critical

The previous Codex run used green gradients, emoji flags (🇫🇷), and a generic card grid for the A2 index page. This is wrong. The A2 pages **must match the A1 visual identity**.

### A1 Design Reference (copy this pattern exactly):

**Color palette** (from Tailwind config — all these tokens exist):
- `bg-surface` — page background
- `bg-primary` / `text-on-primary` — accent blocks (navy blue, #002395)
- `text-primary` — headings (navy)
- `text-secondary` — labels and captions (tricolor red area)
- `bg-surface-container-lowest` — lesson card background
- `bg-surface-container-low` — tags/badges

**Typography** (these font classes exist in globals.css):
- `font-display` — display/hero headings (Epilogue black, tracking-tighter)
- `font-body` — body text
- `font-label` — small labels, tags, metadata

**Lesson card pattern** (copy from `src/app/lessons/beginner/page.tsx`):
```tsx
<Link className="flex h-48 bg-surface-container-lowest shadow-[0_15px_45px_rgba(0,35,149,0.04)] overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,35,149,0.08)] transition-all">
  <div className="w-1/4 bg-secondary flex flex-col items-center justify-center text-on-primary">
    <span className="font-label text-[10px] tracking-widest opacity-70 mb-1">UNITÉ</span>
    <span className="font-display text-3xl font-black">L{lesson.order.toString().padStart(2, '0')}</span>
  </div>
  <div className="w-3/4 p-8 flex flex-col justify-between">
    ...lesson title, subtitle, time badge, arrow...
  </div>
</Link>
```

**Section heading pattern**:
```tsx
<div className="flex items-baseline gap-4 mb-10 overflow-hidden">
  <h2 className="font-display text-4xl font-black text-primary-container">A2</h2>
  <span className="font-label uppercase tracking-[0.3em] text-sm text-secondary font-bold">Élémentaire</span>
  <div className="flex-grow h-px bg-surface-container-highest"></div>
</div>
```

**NO emojis. NO gradient backgrounds. NO box-shadow card hovers with color gradients. NO rounded-[24px] with backdrop-blur.**

---

## ElementaryLessonData Interface

The `ElementaryLessonLayout` component at `components/lessons/ElementaryLessonLayout.tsx` accepts this data shape. Use it for every A2 lesson page:

```typescript
interface GrammarPoint {
  title: string
  explanation: string
  examples: string[]
}

interface VocabItem {
  french: string
  english: string
  category: string
  example?: string
}

interface CulturalNote {
  title: string
  content: string
}

interface ElementaryDialogueExchange {
  speaker: string
  french: string
  english: string
  pronunciation?: string
}

interface ElementaryDialogue {
  title: string
  context: string
  exchanges: ElementaryDialogueExchange[]
}

export interface ElementaryLessonData {
  id: number
  title: string
  level: string
  description: string
  dialogue: ElementaryDialogue
  grammarPoints: GrammarPoint[]
  vocabulary: VocabItem[]
  culturalNotes?: CulturalNote[]
  exercises: Exercise[]  // from lib/lessons/lessonTypes
}
```

Each lesson page uses this pattern:
```tsx
'use client'
import ElementaryLessonLayout, { ElementaryLessonData } from '../../../../../components/lessons/ElementaryLessonLayout'

const lessonData: ElementaryLessonData = { ... }

export default function Lesson13Page() {
  return (
    <ElementaryLessonLayout
      lessonData={lessonData}
      lessonNumber={13}
      prevHref="/lessons/elementary"
      prevLabel="A2 Overview"
      nextHref="/lessons/elementary/14"
      nextLabel="Passé Composé II"
    />
  )
}
```

---

## A2 Curriculum — 14 Lessons (Lessons 13–26)

| Order | Title (EN) | Title (FR) | Grammar Core |
|-------|-----------|-----------|-------------|
| 13 | Past Tense I | Le Passé Composé I | Passé composé with avoir — regular -er verbs only |
| 14 | Past Tense II | Le Passé Composé II | Passé composé — irregular past participles (eu, été, fait, pris, mis, vu, lu, écrit, dit, bu, voulu, pu, su) |
| 15 | Past Tense III | Le Passé Composé III | Passé composé with être — 16 motion/state verbs (DR MRS VANDERTRAMP) + agreement rules |
| 16 | More Verb Groups | Les Verbes en -ir et -re | Regular -ir verbs (finir model) + regular -re verbs (répondre model) |
| 17 | Reflexive Verbs | Les Verbes Pronominaux | Reflexive verbs in the present tense: se lever, se coucher, se laver, s'appeler, se souvenir, se dépêcher |
| 18 | Reflexive Verbs in the Past | Les Pronominaux au Passé | Reflexive verbs in passé composé: always with être + past participle agreement |
| 19 | The Imperfect | L'Imparfait | Imparfait formation (all verbs regular except être) + core uses: habitual past, background description, ongoing state |
| 20 | Two Past Tenses | Passé Composé vs Imparfait | Contrast and interaction: completed event (PC) vs background/habit/state (imparfait) |
| 21 | Future Simple | Le Futur Simple | Futur simple formation (regular -er/-ir/-re + key irregulars: être, avoir, aller, faire, venir, pouvoir, vouloir, savoir) |
| 22 | Direct Object Pronouns | Les Pronoms COD | le, la, l', les — position before the verb, in negation, with infinitives |
| 23 | Indirect Object Pronouns | Les Pronoms COI | lui, leur — plus introduction of y (location) and en (quantity/partitive replacement) |
| 24 | Negation & Comparisons | La Négation et la Comparaison | Extended negation (ne...jamais, ne...plus, ne...rien, ne...personne, ne...pas encore) + comparatives + superlatives |
| 25 | Key Irregular Verbs | Les Irréguliers Essentiels | savoir vs connaître; partir/sortir/dormir; lire/écrire/dire; voir/croire |
| 26 | A2 Capstone | Consolidation A2 | No new grammar — integrates all A2 structures in a rich multi-scene dialogue about planning a trip to France |

---

## Strict Rules (Non-Negotiable)

1. **The dialogue for Lesson N may only use grammar structures introduced in Lessons 1 through N.** This means:
   - Lessons 13–15: no imparfait in dialogues (taught in L19)
   - Lessons 13–18: no futur simple in dialogues (taught in L21) — futur proche (aller + infinitive, from A1 L12) IS allowed throughout
   - Lessons 13–21: no direct/indirect object pronouns in dialogues (taught in L22–23)
   - Extended negation forms (ne...jamais etc.) only in dialogues from Lesson 24 onwards
   - Reflexive verbs in passé composé only from Lesson 18 onwards

2. **Vocabulary cap: 18–26 words per lesson.** Never exceed 26.

3. **Exercises: minimum 9 per lesson, minimum 5 different exercise types.** (10 for L20 and L26.)

4. **The passé composé vs imparfait distinction (Lesson 20) requires exceptional care.** The dialogue must clearly demonstrate BOTH tenses in natural interaction. The grammar explanation must use contrasting sentence pairs. Include at least 3 transformation exercises.

5. **Agreement rules must be correct throughout:**
   - Passé composé with être: past participle agrees with subject (elle est allée, ils sont allés)
   - Reflexive verbs in passé composé: past participle agrees with reflexive pronoun (elle s'est levée)

6. **Pronunciation guides** required on every dialogue exchange and vocabulary item. Format: `par-TAY` (stressed syllable capitalised, hyphens between syllables).

7. **Cultural notes**: 3–5 per lesson. Real places, real customs, real contemporary France. No stereotypes.

8. **Grammar tip required** on every lesson — one memorable rule, common mistake, or mnemonic.

9. **Difficulty scale for A2:** L13=2, L14=3, L15=3, L16=2, L17=3, L18=4, L19=3, L20=5, L21=3, L22=4, L23=4, L24=3, L25=4, L26=3.

10. **No conditional mood** (`je voudrais`, `il faudrait`, `ce serait`) except as fixed phrases with an explicit note. Conditional is B1.

11. **No subjunctive** anywhere. Subjunctive is B1.

12. **`depuis` + present tense** may be introduced in Lesson 17 or later.

13. **`il faut` + infinitive** may be introduced from Lesson 16 onwards.

---

## Lesson-by-Lesson Pedagogical Brief

### Lesson 13 — Le Passé Composé I
**Grammar:** Passé composé with avoir. Formation: avoir (present) + past participle. Past participle of regular -er verbs: infinitive → drop -er → add -é (parler → parlé). Negation: ne + avoir form + pas + past participle. Question forms: intonation and est-ce que only.
**Scope restriction:** ONLY regular -er verbs. No irregular participles yet.
**Vocabulary scope (20–22 words):** Time expressions: hier, avant-hier, la semaine dernière, le mois dernier, l'année dernière, ce matin, ce soir, déjà, récemment, il y a + duration. Plus 8–10 -er verbs not yet seen: voyager, visiter, terminer, rater, rester, rentrer, oublier, chercher, trouver, passer (du temps).
**Dialogue scene:** Two colleagues on a Monday morning catching up on their weekends. 10–12 exchanges. Only passé composé with avoir (-er verbs) and all A1 structures. No être verbs yet.
**Exercises (9 minimum):** Conjugation (6 -er verbs with avoir), fill-blank (avoir form + participle), transformation (present → passé composé), multiple choice (which sentence is in the past?), negation (make passé composé sentences negative), translation EN→FR of 3 past sentences, matching time expressions to meaning, speaking prompt (3 things you did yesterday).
**Grammar tip:** "The passé composé is a compound tense — two parts together. Never separate them with anything except ne...pas: je n'ai pas mangé. The participle does NOT change with avoir (for now)."

---

### Lesson 14 — Le Passé Composé II
**Grammar:** Irregular past participles with avoir. Essential list: avoir → eu, être → été, faire → fait, prendre → pris, mettre → mis, voir → vu, lire → lu, écrire → écrit, dire → dit, boire → bu, vouloir → voulu, pouvoir → pu, savoir → su, venir → venu (flag: venir actually uses être — explain in L15), recevoir → reçu. Group by pattern: -u group (eu, bu, vu, lu, pu, su, voulu), -is group (pris, mis), -it group (écrit, dit, fait).
**Vocabulary scope (20–24 words):** Irregular verbs as vocabulary with past participles shown. Plus 6–8 topic words: une réunion, un projet, un rapport, une décision, un problème, une erreur, une idée, un résultat.
**Dialogue scene:** University students discussing an exam they took and assignments completed. 10–12 exchanges.
**Exercises (9 minimum):** Matching (infinitive → past participle) for all irregulars, fill-blank (correct past participle), transformation (infinitive prompt → full passé composé), multiple choice (which participle is correct?), negation transformation, translation of 4 sentences with mixed regular and irregular participles, speaking prompt.
**Grammar tip:** "Learn irregular participles in groups: the -u cluster (eu, bu, vu, lu, pu, su, voulu) follows the same sound pattern. Drill that cluster first."

---

### Lesson 15 — Le Passé Composé III
**Grammar:** Passé composé with être. The 16 être verbs (DR MRS VANDERTRAMP): aller/allé, venir/venu, arriver/arrivé, partir/parti, entrer/entré, sortir/sorti, naître/né, mourir/mort, rester/resté, tomber/tombé, retourner/retourné, monter/monté, descendre/descendu, passer/passé (intransitive), devenir/devenu, revenir/revenu. **Agreement rule:** past participle agrees with SUBJECT. Tables: allé / allée / allés / allées.
**Vocabulary scope (20–22 words):** The 16 être verbs as core vocabulary. Plus: à l'heure, en retard, tôt, tard, soudain, finalement, d'abord, ensuite, puis.
**Dialogue scene:** Two friends recounting a chaotic travel day — missed trains, wrong platforms, arriving late. Agreement must be demonstrated (female speaker uses allée, arrivée etc.). 10–12 exchanges.
**Exercises (9 minimum):** Agreement grid (allé/allée/allés/allées for different subjects), fill-blank (être or avoir for given verbs), transformation (infinitive → passé composé with être), multiple choice (agreement ending), fill-blank with correct participle + agreement, translation EN→FR with 2 être verbs, matching verb to past participle, speaking prompt (a journey or day out using 3 être verbs).
**Grammar tip:** "The real pattern is: verbs of coming and going, remaining, and becoming use être. All reflexive verbs also use être (Lesson 18). Everything else uses avoir."

---

### Lesson 16 — Les Verbes en -ir et -re
**Grammar:** Regular -ir verbs (finir model): je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent. Note the -iss- infix in nous/vous/ils. Regular -re verbs (répondre model): je réponds, tu réponds, il répond (NO ending), nous répondons, vous répondez, ils répondent. Key point: il/elle has no ending in -re verbs — a common error. Past participles: -ir → -i (fini), -re → -u (répondu).
**Vocabulary scope (22–24 words):** 8–10 -ir verbs: finir, choisir, grandir, réussir, réfléchir, rougir, obéir, remplir. 8–10 -re verbs: répondre, attendre, vendre, entendre, descendre, rendre, perdre, correspondre. Context: school/work.
**Dialogue scene:** Students waiting for exam results, discussing what they chose to study, whether they finished essays, selling old textbooks. 10–12 exchanges.
**Exercises (9 minimum):** Two conjugation exercises (finir in full, répondre in full), matching -ir/-re infinitives to meanings, fill-blank with correct form, multiple choice (which ending for il/elle?), transformation (negative), fill-blank with passé composé of -ir/-re verbs, translation, speaking prompt.
**Grammar tip:** "The silent -d in `il répond` trips up many learners — unlike -er and -ir verbs, -re verbs give il/elle NO ending at all. Also watch `ils répondent` — the -ent is always silent in French, regardless of verb group."

---

### Lesson 17 — Les Verbes Pronominaux
**Grammar:** Reflexive verbs in present tense. Structure: reflexive pronoun (me/te/se/nous/vous/se) + verb. Full conjugation of `se lever`: je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent. Elision: me/te/se → m'/t'/s' before vowel (je m'appelle). Categories: truly reflexive (se laver), reciprocal (se retrouver), idiomatic (se souvenir, se dépêcher). Introduce `depuis` + present tense: `Je me lève à 7h depuis un an.`
**Vocabulary scope (20–22 words):** Daily routine reflexives: se réveiller, se lever, se laver, se doucher, se brosser, se coiffer, s'habiller, se maquiller, se raser, se coucher, s'endormir, se reposer, se dépêcher, s'appeler, se retrouver, se souvenir, s'ennuyer. Plus: matin, soir, le réveil, d'abord, ensuite, enfin.
**Dialogue scene:** Two flatmates discussing morning routines — who takes too long in the bathroom, wake-up times, how they get ready. All verbs in present tense. No passé composé of reflexives (that's L18). 10–12 exchanges.
**Exercises (9 minimum):** Conjugation of `se lever` in full, fill-blank with correct reflexive pronoun, fill-blank with correct verb form, multiple choice (me/te/se/nous/vous), transformation (negative: je ne me lève pas...), translation, matching reflexive verb to meaning, fill-blank with `depuis` construction, speaking prompt (5 reflexive verbs in morning routine).
**Grammar tip:** "`Nous nous levons` looks redundant — two `nous` in a row. The first is the subject, the second is the reflexive pronoun. They're different words doing different jobs. With practice it stops looking odd."

---

### Lesson 18 — Les Pronominaux au Passé Composé
**Grammar:** Reflexive verbs in passé composé. Rule: ALL reflexive verbs use être (never avoir). Agreement: past participle agrees with reflexive pronoun (which agrees with subject). `Elle s'est levée tôt.` / `Ils se sont dépêchés.` Negation: ne goes before reflexive pronoun, pas after auxiliary: `Elle ne s'est pas levée tôt.`
**Vocabulary scope (18–20 words):** L17 reflexive verbs in passé composé form. New reflexive verbs: se disputer, se réconcilier, se marier, se séparer, se rencontrer, s'installer, se décider. Context: relationships and life events.
**Dialogue scene:** Two friends catching up after months apart — what happened (meeting someone, moving, arguing, making up). Mixed genders so agreement differences are visible. 10–12 exchanges.
**Exercises (9 minimum):** Full conjugation table (se lever in passé composé — all 6 forms, female subject), agreement exercise (-é/-ée/-és/-ées for given subjects), fill-blank with reflexive passé composé, negation transformation, multiple choice (être or avoir?), translation of 3 sentences, matching life-event reflexive verbs to meanings, speaking prompt.
**Grammar tip:** "Quick test: if you can add `elle-même` after the verb and it still makes sense (elle s'est lavée elle-même = she washed herself), it's truly reflexive. Idiomatic reflexives (se souvenir, se dépêcher) still follow the same rule even though the logic is less obvious."

---

### Lesson 19 — L'Imparfait
**Grammar:** Imparfait formation: take the `nous` form of present → drop `-ons` → add endings: -ais, -ais, -ait, -ions, -iez, -aient. Works for ALL verbs except être (j'étais, tu étais, il était, nous étions, vous étiez, ils étaient). Note: -ais/-ait/-aient all sound identical. Uses: (1) habitual past (tous les jours, chaque semaine + imparfait), (2) background description (il faisait beau, il y avait beaucoup de monde), (3) ongoing states (j'avais faim, elle était fatiguée), (4) age in the past (quand j'avais dix ans...).
**Vocabulary scope (20–22 words):** Habitual past time markers: autrefois, avant, jadis, quand j'étais jeune, à cette époque, chaque jour, toujours, souvent, parfois, rarement, en ce temps-là. Descriptive verbs: il y avait, il faisait (beau/froid/chaud), c'était, il était (time).
**Dialogue scene:** An older person describing their childhood — neighbourhood, school, traditions. Predominantly imparfait, no passé composé in this lesson (contrast comes in L20). 10–12 exchanges.
**Exercises (9 minimum):** Formation exercise (derive imparfait stem from nous form for 8 verbs), full conjugation of `parler` in imparfait, full conjugation of `être` in imparfait, fill-blank with correct imparfait form, multiple choice (which use of imparfait applies here?), transformation (present habit → imparfait habit), translation of descriptive past sentences, matching time markers to the tense they trigger (preview for L20), speaking prompt.
**Grammar tip:** "The imparfait endings -ais, -ais, -ait, -aient all sound identical: [ɛ]. Only context and the written pronoun tell them apart when listening. Recognise imparfait by the -ai- vowel sound and the context: description, habit, or state."

---

### Lesson 20 — Passé Composé vs Imparfait ⚠️ (Most Important Lesson)
**Grammar:** This is the hardest distinction in A2. **Passé composé = completed, bounded event** (it happened, it ended); **imparfait = ongoing background, habit, or state** (framing the story, not moving it forward). Natural interaction: imparfait sets the scene + passé composé moves the story forward. Classic pattern: `Je lisais quand il a appelé.` Trigger words — passé composé: soudain, tout à coup, un jour, finalement, d'abord...ensuite...puis; imparfait: pendant que, chaque fois que, autrefois, d'habitude.
**Vocabulary scope (18–20 words):** Contrast trigger words as core vocabulary. Narrative connectors: donc, alors, c'est pourquoi, à ce moment-là, juste avant, juste après, pendant ce temps.
**Dialogue scene:** Someone telling the story of how they met their best friend or partner — imparfait for setting (what the place was like, what they were doing), passé composé for events (arrived, saw, spoke, exchanged numbers). Must demonstrably show both tenses with clear contrast. **12 exchanges minimum.**
**Exercises (10 minimum — this lesson gets more):** Choose PC or imparfait for 10 sentences (with reason), fill-blank in a mixed paragraph (8 verbs, provide correct tense), transformation (change imparfait to PC, explain meaning shift), translation of a short narrative paragraph EN→FR, matching trigger words to the tense they signal, error-correction exercise (5 sentences with deliberate PC/imparfait mistakes), **3 transformation exercises minimum**, speaking prompt (tell a short story using both tenses).
**Grammar tip:** "Can you replace the past verb with `used to` in English? If yes → imparfait (je mangeais = I used to eat). Can you replace it with `did` and give it a specific single time? → passé composé (j'ai mangé = I ate [once])."

---

### Lesson 21 — Le Futur Simple
**Grammar:** Regular: infinitive + endings (-ai, -as, -a, -ons, -ez, -ont). Note: -re verbs drop final -e (répondre → répondr-). Irregular stems: être → ser-, avoir → aur-, aller → ir-, faire → fer-, venir → viendr-, pouvoir → pourr-, vouloir → voudr-, savoir → saur-, voir → verr-, envoyer → enverr-, devoir → devr-. Contrast with futur proche: futur proche (aller + infinitive) = near/planned future; futur simple = more distant, formal, or certain predictions.
**Vocabulary scope (20–22 words):** Future time expressions: demain, après-demain, la semaine prochaine, le mois prochain, dans + duration, bientôt, un jour, à l'avenir, quand + futur simple. Also: rêver de, espérer, avoir l'intention de, promettre.
**Dialogue scene:** Two people discussing future plans — career changes, travel, moving cities, dreams. Natural mix of futur simple and futur proche. 10–12 exchanges.
**Exercises (9 minimum):** Formation (futur simple for 8 verbs including 4 irregulars), fill-blank, multiple choice (futur simple or futur proche — which fits?), transformation (present → futur simple), fill-blank with correct irregular futur stem, translation of 4 future sentences, matching irregular verbs to their futur stem, speaking prompt.
**Grammar tip:** "The futur endings are the same as the present of `avoir` minus `av-`: j'ai → -ai, tu as → -as, il a → -a, nous avons → -ons, vous avez → -ez, ils ont → -ont. Once you know that, the endings never need memorising."

---

### Lesson 22 — Les Pronoms COD
**Grammar:** Direct object pronouns: me (m'), te (t'), le (l'), la (l'), nous, vous, les. Placement: **before the conjugated verb**. In negation: ne + pronoun + verb + pas. With infinitives: pronoun goes before the infinitive (je vais le faire). Common verbs taking direct objects: appeler, chercher, connaître, écouter, regarder, aimer, inviter, voir, attendre, choisir. Introduce savoir vs connaître distinction.
**Vocabulary scope (18–20 words):** Verbs that take direct objects (no preposition in French). Context: talking about people and things.
**Dialogue scene:** Two friends discussing a party — who is invited, do you know them, did you invite X, I'll call them. Natural pronoun replacement throughout. 10–12 exchanges.
**Exercises (9 minimum):** Transformation (replace underlined direct object with pronoun), fill-blank with correct COD pronoun, multiple choice (which pronoun?), transformation (negative, keeping pronoun), translation of 4 sentences, matching verbs to object type, speaking prompt.
**Grammar tip:** "`Connaître` = to know a person, place, or work of art (je connais Paris). `Savoir` = to know a fact or how to do something (je sais nager, je sais que...). Getting this wrong is a classic anglophone mistake."

---

### Lesson 23 — Les Pronoms COI, Y et EN
**Grammar:** Indirect object pronouns: me (m'), te (t'), lui, nous, vous, leur. Used with verbs taking à + person: parler à, téléphoner à, écrire à, donner à, dire à, répondre à. Placement: before conjugated verb. `Y` — replaces à + place or à + non-person thing. `En` — replaces de + noun or partitive: j'en veux (I want some), il en parle, j'en ai mangé trois. Key contrast: COD vs COI — the verb determines which to use.
**Vocabulary scope (18–20 words):** Verbs taking COI. Y and en trigger contexts. Practice sentences.
**Dialogue scene:** Planning a surprise party — telling people about it (en parler), going to the venue (y aller), giving invitations (leur donner), calling them (leur téléphoner). 10–12 exchanges.
**Exercises (9 minimum):** Transformation (replace indirect object phrase with lui/leur), transformation (replace à + place with y), transformation (replace de/partitive with en), multiple choice (le/la/les, lui/leur, y, or en?), fill-blank, translation of 4 sentences, matching verbs to pronoun type, speaking prompt.
**Grammar tip:** "`Lui` is both masculine and feminine for indirect objects — unlike `le/la` for direct. `Je lui parle` means 'I'm talking to him' AND 'I'm talking to her'. Context makes it clear."

---

### Lesson 24 — La Négation et la Comparaison
**Grammar — Negation:** Extended negation: ne...jamais (never), ne...plus (no longer), ne...rien (nothing), ne...personne (nobody — also subject: Personne ne vient), ne...pas encore (not yet), ne...que (only). In passé composé: jamais/plus/rien go between auxiliary and participle; personne goes after the participle.
**Grammar — Comparison:** Comparatives: plus/moins/aussi + adj/adverb + que. Irregular: bon → meilleur(e), bien → mieux. Superlatives: le/la/les + plus/moins + adj. Comparison of quantities: plus de / moins de / autant de + noun.
**Vocabulary scope (20–22 words):** Negation words as vocabulary with examples. meilleur/mieux distinction. Context: comparing restaurants, transport, apartments.
**Dialogue scene:** Two people comparing two cities or neighbourhoods for moving — comparatives, superlatives, negations. 10–12 exchanges.
**Exercises (9 minimum):** Transformation (add extended negation), fill-blank with correct negative word, multiple choice (jamais/plus/rien/personne), comparative construction (4 sentences from prompts), superlative exercise, meilleur vs mieux choice, translation combining negation and comparison, speaking prompt.
**Grammar tip:** "`Bon` (adjective) → meilleur. `Bien` (adverb) → mieux. Never say `plus bon` or `plus bien` — they don't exist in standard French."

---

### Lesson 25 — Les Irréguliers Essentiels
**Grammar:** Four clusters:
- savoir vs connaître: full conjugations; past participles su, connu
- partir/sortir/dormir: drop last consonant cluster for je/tu/il; keep for nous/vous/ils. Past participles: parti (être), sorti (être), dormi (avoir)
- lire/écrire/dire: je lis/écris/dis, nous lisons/écrivons/disons, ils lisent/écrivent/disent. Past participles: lu, écrit, dit
- voir/croire: je vois/crois, nous voyons/croyons, ils voient/croient. Past participles: vu, cru
**Vocabulary scope (20–22 words):** The verbs above with common collocations: partir en vacances, sortir avec des amis, lire un roman, écrire une lettre, dire la vérité, voir un film, croire quelqu'un.
**Dialogue scene:** Friends catching up — who's going where this summer, what books they're reading, a film they saw. Natural use of all four clusters. 10–12 exchanges.
**Exercises (9 minimum):** Four conjugation exercises (one per cluster), fill-blank with correct form, multiple choice (savoir or connaître?), passé composé with irregular participles from this lesson, transformation (present → passé composé), translation, speaking prompt.
**Grammar tip:** "`Partir` = to leave/depart (longer journey, often permanent direction). `Sortir` = to go out (local, casual, social). `Je pars en vacances` vs `Je sors ce soir.` Don't swap them."

---

### Lesson 26 — Consolidation A2 (Capstone)
**Grammar:** No new grammar. Integrates ALL A2 structures.
**Vocabulary scope (20–22 words):** Transition phrases for storytelling: en effet, par contre, pourtant, cependant, de plus, d'ailleurs, malgré, grâce à, finalement, en résumé.
**Dialogue scene:** A three-way conversation (3 speakers) about a real trip from Lyon to Bordeaux — booking a train (passé composé), describing the journey (imparfait), comparing hotels (comparatives), future plans (futur simple), what they never do (extended negation), pronouns throughout (COD/COI/y/en). **14–16 exchanges minimum.**
**Exercises (10 minimum, maximum variety):** Error-correction paragraph (10 sentences with mixed PC/imparfait, pronoun, negation errors), translation of complex 6-sentence paragraph EN→FR, conjugation drill (6 different irregular verbs), fill-blank mixing all pronoun types, transformation combining negation + pronoun replacement, comparative + superlative construction, speaking prompt (60-second account of a past trip using: 3 passé composé, 2 imparfait, 1 futur simple, 1 COD pronoun, 1 negation form).
**Grammar tip:** "At this stage you have the full A2 toolkit. The single fastest way to improve now is to narrate your own life in French — real events, real people, real places. Use everything simultaneously. That's what B1 training starts with."

---

## Exercise Types Available

All these types are already in `InteractiveExercise.tsx` and the `Exercise` union in `lessonTypes.ts`:
- `multiple_choice`
- `fill_blank`
- `translation`
- `matching`
- `conjugation`
- `transformation`
- `gender_sort`
- `speaking_prompt`

### New Exercise Types to Add at A2 Level

Add both to `lessonTypes.ts` (`Exercise` union type) and implement in `InteractiveExercise.tsx`:

**`error_correction`**:
```typescript
export interface ErrorCorrectionExercise {
  id: string
  type: 'error_correction'
  question: string
  items: {
    incorrect: string
    correct: string
    explanation: string
  }[]
}
```
UI: Show each sentence. Learner types the corrected version in an input field.

**`tense_choice`**:
```typescript
export interface TenseChoiceExercise {
  id: string
  type: 'tense_choice'
  question: string
  items: {
    sentence: string
    verb: string
    options: string[]
    correct_answer: string
    explanation: string
  }[]
}
```
UI: Show sentence with two radio options. Reveal explanation on submission.

---

## Files to Update Beyond Lesson Pages

### `src/app/lessons/elementary/page.tsx`
Rewrite to match A1 design. Show all 14 lessons (L13–L26) using the A1 card pattern (dark navy, no gradients). Import lesson metadata from an array defined in this file. Link to `/lessons/elementary/[n]`.

### `src/app/lessons/page.tsx`
Update the A2 section to show all 14 lessons with correct order numbers and links to `/lessons/elementary/[n]`. Replace the hardcoded stubs with the complete 14-lesson list.

---

## Quality Checklist

Before finishing, verify each of the 14 lessons:

- [ ] No grammar structure in dialogue that hasn't been taught yet
- [ ] Vocabulary count is 18–26 words
- [ ] Minimum 9 exercises per lesson (10 for L20 and L26)
- [ ] Minimum 5 different exercise types per lesson
- [ ] Every vocabulary item has `example` (pronunciation embedded in example is fine for ElementaryLessonData)
- [ ] Every dialogue exchange has `pronunciation`
- [ ] Every `grammarPoint` has meaningful `explanation` and at least 4 `examples`
- [ ] Cultural notes are specific (real places, real customs) — not generic
- [ ] Passé composé agreement is correct throughout
- [ ] No conditional or subjunctive grammar
- [ ] Lesson 20 has 10+ exercises and clear PC vs imparfait contrast in dialogue
- [ ] Lesson 26 dialogue has 14+ exchanges using all major A2 structures
- [ ] Both new exercise types (`error_correction`, `tense_choice`) implemented
- [ ] Design matches A1 (no green gradients, no emoji flags)
- [ ] Elementary/11 and elementary/12 folders deleted
- [ ] `src/app/lessons/page.tsx` A2 section shows all 14 lessons

---

## What NOT to Change

- Lessons 1–12 in `lessonData.ts` — untouched
- `lib/supabase.js` — untouched
- `lib/services/` — untouched
- `src/app/globals.css` — untouched
- `src/app/layout.tsx` — untouched
- `src/app/lessons/beginner/` — untouched (all A1 pages)
- `src/app/page.tsx` — untouched
- `components/lessons/ElementaryLessonLayout.tsx` — untouched
- `public/`, `tsconfig.json`, `next.config.ts`, `package.json` — untouched
- No audio imports anywhere
