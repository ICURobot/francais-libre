# Lesson Voiceover Generation — Runbook

How to generate, store, and wire up French voiceover audio for a lesson.
Written after building Lesson 1 (`beginner-1`) and extended after Lesson 2
(`beginner-2`); follow the same steps for every new lesson in the A1 renovation
and beyond.

---

## 1. How the pipeline works

```
ElevenLabs API ──▶ local MP3 (audio-backup/lesson<N>/) ──▶ Supabase Storage (bucket: audio)
                                                                      │
                                                                      ▼
                                                       audio_pronunciations table (1 row/clip)
                                                                      │
                                                                      ▼
                              UI play button looks up audio_url by normalized text
```

- **Generation is server-side only.** The ElevenLabs key (`ELEVENLABS_API_KEY`)
  lives in `.env.local` and is **never** exposed as `NEXT_PUBLIC_`. The runtime
  app never calls ElevenLabs — it only plays pre-generated MP3s by URL.
- **`audio-backup/` is a gitignored local backup.** Supabase is the served
  source of truth. Local files are kept so we can re-listen / re-upload.
- **Only strings that render an `AudioPlayButton` get voiced**: dialogue
  `exchange.french`, grammar `example.french`, and vocabulary `word.word`.

---

## 2. Prerequisites (one-time)

In `.env.local` (gitignored, server-side):

```
ELEVENLABS_API_KEY=sk_...            # NOT NEXT_PUBLIC_
ELEVENLABS_VOICE_MALE=<voice id>     # Guillaume
ELEVENLABS_VOICE_FEMALE=<voice id>   # Audrey
SUPABASE_URL=...                     # scripts use the non-public pair
SUPABASE_ANON_KEY=...
```

**Voice casting & settings** (keep consistent across lessons — see
`memory/voice-casting.md`):

| Role | Voice | speed | stability | similarity | style | speaker boost |
|------|-------|-------|-----------|------------|-------|---------------|
| Male dialogue (e.g. Marc) | Guillaume | 0.77 | 0.69 | 0.70 | 0.15 | on |
| Female dialogue + narration | Audrey | 0.89 | 0.65 | 0.75 | 0.15 | on |

Default model: `eleven_multilingual_v2`. Narrator for vocab/grammar = female (Audrey).

**Per-clip overrides** (`TTS_OVERRIDES` map in the script, keyed by clip id) let you
fix a single stubborn clip without changing what the lookup key / filename / DB row
store — only what the model renders changes. Two levers, both proven on Lesson 2:

- `say`: the text actually sent to ElevenLabs. A bare token can render silent or
  garbled; a complete, capitalized utterance fixes it (`'un'` → `say: 'Un.'`). See §5.5.
- `model` + `language`: `eleven_multilingual_v2` **auto-detects language** and
  mis-reads short tokens (e.g. reads `quinze` / `faim` as Spanish). Switch that clip to
  **`eleven_turbo_v2_5`** with **`language_code: 'fr'`** to hard-force French. See §5.6.

```ts
const TTS_OVERRIDES: Record<string, TtsOverride> = {
  'l2-voc-01': { say: 'Un.' },
  'l2-voc-07': { say: 'Quinze.', model: 'eleven_turbo_v2_5', language: 'fr' },
  'l2-voc-09': { say: 'Faim.',   model: 'eleven_turbo_v2_5', language: 'fr' },
}
```

> Turbo v2.5 has a subtly different timbre than multilingual_v2, so reserve it for
> clips that are actually mispronounced — correct French beats a perfect timbre match.

---

## 3. Generate the audio

The per-lesson script lives at `scripts/generate-lesson<N>-audio.ts`. Use
`scripts/generate-lesson1-audio.ts` as the template — copy it and replace the
inline `dialogue` / `grammar` / `vocab` content with the new lesson's strings
(copy them verbatim from `lib/lessons/lessonData.ts`, including accents).

Run modes (always start small):

```bash
# 1. Sample: 4 representative clips, local only — audition the voices
npx tsx scripts/generate-lesson1-audio.ts --sample

# 2. Full set, local only (NO upload) — audition the whole lesson
npx tsx scripts/generate-lesson1-audio.ts

# 3. Full set + upload to Supabase + insert DB rows (after approval)
npx tsx scripts/generate-lesson1-audio.ts --upload
```

Files land in `audio-backup/lesson<N>/`. Open the folder to listen:
`open audio-backup/lesson1/`.

> **Get voices approved before `--upload`.** Generation costs ElevenLabs quota
> and `--upload` writes to **production** Supabase. Audition locally first.

### 3.1 Re-rolling individual clips (when a word comes out wrong)

ElevenLabs is stochastic, and **isolated single words** (especially vocab) are
where it misbehaves — see §5.5 / §5.6. Re-roll just the offenders instead of the
whole lesson:

```bash
# Regenerate only the vocabulary clips
npx tsx scripts/generate-lesson2-audio.ts --vocab --upload

# Regenerate specific clips by id (surgical — leaves good clips untouched)
npx tsx scripts/generate-lesson2-audio.ts --ids=l2-voc-07,l2-voc-09 --upload

# Give a re-roll a fresh filename/URL so it isn't masked by a stale CDN cache
npx tsx scripts/generate-lesson2-audio.ts --ids=l2-voc-01 --rev=v4 --upload

# Slow the API down (default 1200ms between calls); helps flaky short clips
TTS_DELAY_MS=2000 npx tsx scripts/generate-lesson2-audio.ts --vocab --upload
```

**Always use `--rev` when re-rolling an already-uploaded clip.** Overwriting the
same filename re-uses the same public URL, which Supabase serves with a 1-hour CDN
cache — so you keep hearing the old take. A new `--rev` tag = new filename = new
URL (no stale cache) + a newer row that wins via newest-wins (§4). Bump the tag
each round (`v2`, `v3`, …). Clean up the superseded rows afterward (§6).

> Re-rolls create superseded rows/files. The DB has a `unique(file_name)`
> constraint, so re-uploading the **same** filename fails the insert — another
> reason to always `--rev`.

---

## 4. Wire the audio into the UI

The lesson page reads from `audio_pronunciations` on mount and passes a real
`src` to each `AudioPlayButton`. This is already implemented generically in
[`components/lessons/BeginnerLessonPageRedesign.tsx`](../components/lessons/BeginnerLessonPageRedesign.tsx):

- A `useEffect` fetches rows where `lesson_id = <lessonId>`, ordered
  `created_at` **descending**, and builds a `Map<normalizedText, audio_url>`
  using **first-wins** (newest row wins).
- `audioFor(text)` looks up the clip; each button gets `src={audioFor(...)}`.
- If no `src` is found, the button gracefully falls back to its placeholder
  state (brief pulse, no audio).

For a **new lesson** that reuses this component, no UI change is needed — just
make sure the DB rows are inserted with the correct `lesson_id`.

---

## 5. Issues found while building Lesson 1 (and the fixes)

These are the non-obvious gotchas. Check for them every time.

### 5.1 Text normalization must match on both sides
The DB stores `text` accent/punctuation-stripped (the script's `normalizeText`).
The UI lookup uses `normalizeAudioKey` which does the **same** transform **plus
`toLowerCase()`** on both the stored keys and the lookup strings, so matching is
accent- and case-insensitive. If you change one, change the other, or buttons
silently won't find their audio.

Example: `"Merci. Vous êtes ici?"` → `"merci vous etes ici"` (both sides).

### 5.2 Stale rows from a previous version of the lesson  ⚠️
When Lesson 1 was rebuilt, **55 old rows** (old characters/voices) were still
tagged `lesson_id = beginner-1`. Two of them — `"de rien"` and `"très bien"` —
collided with new clips on the normalized key. Without ordering, an **old
Mylène clip could win the lookup** and play the wrong voice.

**Fix:** query orders by `created_at desc` + first-wins, so freshly generated
audio always supersedes stale rows. Verify after upload (see §6) that collision
words resolve to the **new** files (`l1-*`). Optionally delete the stale rows.

### 5.3 Running `next build` while `next dev` is live corrupts `.next`
They share the `.next` directory, producing `Error: Cannot find module './####.js'`
in the dev server. **Fix:** stop dev before a production build, or afterward run
`pkill -f "next dev" && rm -rf .next && npm run dev` for a clean restart.

### 5.4 `.env.local` changes need a dev restart
Next.js reads env only at startup. After editing voice IDs / keys, restart the
dev server.

### 5.5 Isolated single words can render silent or garbled  ⚠️
On Lesson 2, the bare word `"un"` came back **near-silent** (max volume −42.9 dB
vs ~−9 dB for a normal clip) — the button "wouldn't play." Single short tokens give
the model almost no context. Confirm with ffmpeg before blaming caching:

```bash
ffmpeg -i audio-backup/lesson2/l2-voc-01_un_audrey_v3.mp3 -af volumedetect -f null /dev/null 2>&1 | grep volume
```

**Fix:** a `say` override sending a complete, capitalized utterance — `'un'` →
`say: 'Un.'` — produces a clean, audible take (§2). Re-roll with `--rev`.

### 5.6 `eleven_multilingual_v2` mis-detects language on short words  ⚠️
Also on Lesson 2, `"quinze"` and `"faim"` were pronounced **as if Spanish**.
multilingual_v2 auto-detects language from the text and guesses wrong on one-word
inputs, and it has **no parameter to force the language**. A capitalized `say: 'Faim.'`
was not enough.

**Fix:** override those clips to **`eleven_turbo_v2_5`** with **`language_code: 'fr'`**
(the `model` + `language` fields in `TTS_OVERRIDES`, §2), which hard-pins French.
Turbo's timbre differs slightly, so use it only on the affected words. Note: you can't
verify pronunciation by file size/loudness — you have to listen.

---

## 6. Verify (after `--upload`)

```bash
# Count uploaded rows for the lesson
curl -s "$NEXT_PUBLIC_SUPABASE_URL/rest/v1/audio_pronunciations?select=text,file_name&lesson_id=eq.beginner-1" \
  -H "apikey: $KEY" -H "Authorization: Bearer $KEY"

# Confirm a public MP3 actually serves
curl -s -o /dev/null -w "%{http_code} %{content_type}\n" "<audio_url from a row>"

# Sanity-check a clip isn't silent (max_volume near -40dB ⇒ bad take, see §5.5)
ffmpeg -i audio-backup/lesson<N>/<file>.mp3 -af volumedetect -f null /dev/null 2>&1 | grep volume
```

In the browser (http://localhost:3000/lessons/beginner/1):
- Every dialogue / grammar / vocab button plays (spinner → equalizer bars).
- Right speaker per line (male vs female).
- Re-check any word that had a stale-row collision.
- **Listen to every isolated vocab word** — these are where §5.5 / §5.6 bite.

### 6.1 Clean up superseded rows after re-rolls
Each `--rev` re-roll leaves the old row behind, and a rebuilt lesson may carry stale
rows from its previous version (§5.2). They all lose to newest-wins, but prune them so
the table holds exactly the current button set. The safe rule: **keep only the newest
row for each of the current lesson's button strings; delete every other `lesson_id`
row.** On Lesson 2 this took the table from 125 rows down to a clean 29. (DELETE works
with the anon key; this prunes the DB index only — orphaned MP3s can stay in storage.)

---

## 7. Checklist for the next lesson

- [ ] Copy `generate-lesson1-audio.ts` → `generate-lesson<N>-audio.ts`
- [ ] Replace inline content with the lesson's audio-button strings (verbatim)
- [ ] Set `LESSON_ID` to the new `lesson_id` (e.g. `beginner-2`)
- [ ] `--sample` to check voices, then full local, then `--upload`
- [ ] Verify 27-of-27-style resolution + collision words point to new files
- [ ] Click through the page; **listen to every isolated vocab word** (§5.5 / §5.6)
- [ ] Re-roll any bad clip with `--ids=… --rev=vN`; use a `say` / turbo+`fr` override
      for silent or wrong-language single words
- [ ] Prune superseded + stale rows down to the current button set (§6.1)
- [ ] Commit the new script (audio MP3s stay gitignored)

---

## 8. Gemini TTS path (Lesson 9 onward — moving off ElevenLabs)

Lesson 9 was finished on **Google Gemini TTS** after the ElevenLabs subscription was
being cancelled (its quota ran out mid-run). Generator: `generate-lesson<N>-audio-gemini.ts`
(template = `generate-lesson9-audio-gemini.ts`). The Supabase/DB side is **identical** —
same `normalizeText`/`slug`, same `audio_pronunciations` row shape, same newest-wins lookup —
so the two providers can coexist within a lesson and resolve through the same UI.

Key (server-side, `.env.local`, never `NEXT_PUBLIC_`): `GOOGLE_AI_STUDIO_API_KEY`.

**Voice casting (Gemini prebuilt voices):** male = **Charon**, female/narrator = **Kore**
(chosen by audition vs Orus/Aoede — see the one-off `gemini-tts-audition.ts`). Gemini has
**no numeric speed/stability/style knobs**; tone is steered by a natural-language prompt
prefix (`Lis ce texte naturellement, d'une voix claire, en français : <text>` — text before
the colon is an instruction and is **not** spoken, and it pins the language).

Gemini-specific gotchas (the ElevenLabs §5.5/§5.6 fixes do NOT apply — there's no
turbo/`language_code` lever):

### 8.1 Output is raw PCM, not MP3
Gemini returns headerless **signed-16-bit PCM, 24 kHz mono** (base64 in
`candidates[0].content.parts[0].inlineData.data`). Transcode to MP3 with ffmpeg
(`-f s16le -ar 24000 -ac 1 -i pipe:0 -f mp3 pipe:1`) before saving/uploading.

### 8.2 Rate limit is per-MINUTE (RPM), not per-day  ⚠️
The free tier for `gemini-2.5-flash-preview-tts` is ~**10 RPM / 100 RPD**. A 429 mid-run is
almost always RPM (bursty audition + full run), NOT the daily cap — check the AI Studio
rate-limit dashboard. **Fix:** throttle with `TTS_DELAY_MS=8000` (≤7.5/min) and resume the
failed ids with `--ids=…`. No billing/wait needed.

### 8.3 Ultra-short tokens return `finishReason: OTHER` / empty audio  ⚠️
Some short tokens (Lesson 9: `que`, `non plus`) come back with **no audio** on
`gemini-2.5-flash-preview-tts`, no matter how `say` is phrased. **Fix:** switch that clip to
a different TTS model via a per-clip `model` override — `gemini-3.1-flash-tts-preview`
rendered both. (Confirm exact model ids with `GET /v1beta/models` — they're easy to
transpose, e.g. it's `gemini-3.1-flash-tts-preview`, NOT `...-flash-preview-tts`.) Still
audition `que`/`si`/`qui` by ear for French vs Spanish.

### 8.4 `--from-local` upload (decoupling generation from upload)
Both the ElevenLabs and Gemini generators support **`--from-local --upload`**: skip the TTS
API and upload the MP3 already in `audio-backup/lesson<N>/`. Essential when a provider's
quota is exhausted and clips can't be regenerated (Lesson 9: the 11 ElevenLabs takes were
local-only and pushed this way). Combine with `--ids=…` to scope which local files to upload.

---

_Related: `memory/voice-casting.md`, `memory/lesson-audio-pipeline.md`,
`memory/elevenlabs-key-security.md`._
