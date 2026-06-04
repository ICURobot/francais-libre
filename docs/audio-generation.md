# Lesson Voiceover Generation — Runbook

How to generate, store, and wire up French voiceover audio for a lesson.
Written after building Lesson 1 (`beginner-1`); follow the same steps for every
new lesson in the A1 renovation and beyond.

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

Model: `eleven_multilingual_v2`. Narrator for vocab/grammar = female (Audrey).

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

---

## 6. Verify (after `--upload`)

```bash
# Count uploaded rows for the lesson
curl -s "$NEXT_PUBLIC_SUPABASE_URL/rest/v1/audio_pronunciations?select=text,file_name&lesson_id=eq.beginner-1" \
  -H "apikey: $KEY" -H "Authorization: Bearer $KEY"

# Confirm a public MP3 actually serves
curl -s -o /dev/null -w "%{http_code} %{content_type}\n" "<audio_url from a row>"
```

In the browser (http://localhost:3000/lessons/beginner/1):
- Every dialogue / grammar / vocab button plays (spinner → equalizer bars).
- Right speaker per line (male vs female).
- Re-check any word that had a stale-row collision.

---

## 7. Checklist for the next lesson

- [ ] Copy `generate-lesson1-audio.ts` → `generate-lesson<N>-audio.ts`
- [ ] Replace inline content with the lesson's audio-button strings (verbatim)
- [ ] Set `LESSON_ID` to the new `lesson_id` (e.g. `beginner-2`)
- [ ] `--sample` to check voices, then full local, then `--upload`
- [ ] Verify 27-of-27-style resolution + collision words point to new files
- [ ] Click through the page; confirm correct voices play
- [ ] Commit the new script (audio MP3s stay gitignored)

---

_Related: `memory/voice-casting.md`, `memory/lesson-audio-pipeline.md`,
`memory/elevenlabs-key-security.md`._
