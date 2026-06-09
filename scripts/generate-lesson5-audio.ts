#!/usr/bin/env tsx
/**
 * Lesson 5 (beginner-5) voiceover generator.
 *
 * Default run  : generate all clips and save locally to audio-backup/lesson5/ (NO upload).
 *                Use this to audition the voices before committing anything to Supabase.
 * --upload     : after generating, upload each MP3 to the `audio` storage bucket and
 *                insert a row into `audio_pronunciations` (lesson_id = beginner-5).
 * --sample     : generate only a 4-clip representative subset (both voices, both modes).
 * --vocab      : regenerate only the vocabulary clips (l5-voc-*). Useful for re-rolling
 *                isolated single words, which ElevenLabs renders less reliably.
 *
 * Inter-call pause is TTS_DELAY_MS (default 1200ms). Single words come out cleaner with
 * a bit more breathing room between requests; bump it higher if needed.
 *
 * Voice casting (IDs + settings come from .env.local):
 *   Tom (dialogue)              -> male   = Guillaume (ELEVENLABS_VOICE_MALE)
 *   Inès (dialogue) + narrator  -> female = Audrey    (ELEVENLABS_VOICE_FEMALE)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

// ---------------------------------------------------------------------------
// Load .env.local (same manual loader the other scripts use)
// ---------------------------------------------------------------------------
try {
  const envPath = join(process.cwd(), '.env.local')
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    if (!line || line.startsWith('#')) continue
    const [key, ...rest] = line.split('=')
    if (key && rest.length) process.env[key.trim()] = rest.join('=').trim()
  }
} catch (e) {
  console.error('❌ Failed to load .env.local:', e)
  process.exit(1)
}

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY
const VOICE_IDS = {
  male: process.env.ELEVENLABS_VOICE_MALE,
  female: process.env.ELEVENLABS_VOICE_FEMALE,
} as const
const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Human-readable names stored alongside each record
const VOICE_NAMES = { male: 'Guillaume', female: 'Audrey' } as const

// Per-voice settings as dialled in by the user in the ElevenLabs studio.
const VOICE_SETTINGS = {
  male:   { stability: 0.69, similarity_boost: 0.70, style: 0.15, use_speaker_boost: true, speed: 0.77 },
  female: { stability: 0.65, similarity_boost: 0.75, style: 0.15, use_speaker_boost: true, speed: 0.89 },
} as const

const MODEL_ID = 'eleven_multilingual_v2'
const LESSON_ID = 'beginner-5'
// Pause between TTS calls. Short, isolated words render more reliably with extra room.
const DELAY_MS = Number(process.env.TTS_DELAY_MS) || 1200
// Optional revision tag (--rev=v2) appended to filenames when re-rolling a clip. A fresh
// filename = a fresh URL (no stale CDN cache) and a newer row that wins via newest-wins.
let REV = ''
const BUCKET = 'audio'
const TABLE = 'audio_pronunciations'

type VoiceKey = 'male' | 'female'
type Clip = { id: string; category: string; voice: VoiceKey; text: string; speaker?: string }

// Narrator for isolated vocabulary + grammar examples.
const NARRATOR: VoiceKey = 'female'

// ---------------------------------------------------------------------------
// Lesson 5 content — only the strings that render an AudioPlayButton.
// (dialogue exchange.french, grammar example.french, vocabulary word.word)
// Copied verbatim from lib/lessons/lessonData.ts (beginner-5), accents intact.
// Dialogue "Un appartement à louer": Inès -> female (Audrey), Tom -> male (Guillaume).
// Note: vocab word.word values are masc/fem pairs joined by " / " (e.g. "grand / grande");
// the slash is voiced verbatim — audition these before upload.
// ---------------------------------------------------------------------------
const dialogue: Clip[] = [
  { id: 'l5-dlg-01', category: 'dialogue', voice: 'female', speaker: 'Inès', text: 'Le nouvel appartement est grand.' },
  { id: 'l5-dlg-02', category: 'dialogue', voice: 'male',   speaker: 'Tom',  text: 'Oui, mais la cuisine est petite.' },
  { id: 'l5-dlg-03', category: 'dialogue', voice: 'female', speaker: 'Inès', text: 'Les chambres sont belles.' },
  { id: 'l5-dlg-04', category: 'dialogue', voice: 'male',   speaker: 'Tom',  text: 'Et le salon est très lumineux.' },
  { id: 'l5-dlg-05', category: 'dialogue', voice: 'female', speaker: 'Inès', text: 'Le vieux quartier est intéressant.' },
  { id: 'l5-dlg-06', category: 'dialogue', voice: 'male',   speaker: 'Tom',  text: 'Mais les loyers sont chers.' },
  { id: 'l5-dlg-07', category: 'dialogue', voice: 'female', speaker: 'Inès', text: 'Une bonne adresse est rare.' },
  { id: 'l5-dlg-08', category: 'dialogue', voice: 'male',   speaker: 'Tom',  text: 'Alors, nous regardons une autre annonce.' },
]

const grammar: Clip[] = ['un appartement cher', 'une petite cuisine', 'des chambres belles'].map((text, i) => ({
  id: `l5-gra-${String(i + 1).padStart(2, '0')}`,
  category: 'grammar',
  voice: NARRATOR,
  text,
}))

const vocab: Clip[] = [
  'grand / grande', 'petit / petite', 'beau / belle', 'bon / bonne', 'mauvais / mauvaise',
  'nouveau / nouvelle', 'vieux / vieille', 'jeune', 'long / longue', 'court / courte',
  'chaud / chaude', 'froid / froide', 'rapide', 'lent / lente', 'cher / chère',
  'facile', 'difficile', 'intéressant / intéressante', 'ennuyeux / ennuyeuse', 'lumineux / lumineuse',
].map((text, i) => ({
  id: `l5-voc-${String(i + 1).padStart(2, '0')}`,
  category: 'vocabulary',
  voice: NARRATOR,
  text,
}))

// Per-clip TTS overrides, keyed by clip id. The stored DB key, filename slug, and UI lookup
// all stay the plain word — only how the model renders it changes. For isolated single words:
//  - `say`: text actually sent (a complete utterance like "Un." avoids silent/garbled takes).
//  - `model` + `language`: multilingual_v2 auto-detects language and mis-reads short tokens as
//    Spanish; turbo_v2_5 accepts a `language_code` to hard-force French.
// Start empty for Lesson 5; add entries only for words that actually come out wrong (§5.5/§5.6).
type TtsOverride = { say?: string; model?: string; language?: string }
const TTS_OVERRIDES: Record<string, TtsOverride> = {
}

const ALL_CLIPS: Clip[] = [...dialogue, ...grammar, ...vocab]

// A representative subset for --sample (both voices, both content modes).
const SAMPLE_IDS = new Set(['l5-dlg-02', 'l5-dlg-03', 'l5-gra-01', 'l5-voc-01'])

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function slug(text: string): string {
  return text
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // strip accents
    .replace(/[^a-zA-Z0-9\s]/g, '')                    // drop punctuation
    .trim().replace(/\s+/g, '_').toLowerCase()
    .slice(0, 30)
}

// Accent-stripped text, matching how existing rows store the `text` column.
function normalizeText(text: string): string {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, ' ').trim()
}

function fileNameFor(clip: Clip): string {
  const rev = REV ? `_${REV}` : ''
  return `${clip.id}_${slug(clip.text)}_${VOICE_NAMES[clip.voice].toLowerCase()}${rev}.mp3`
}

async function generateAudio(clip: Clip): Promise<Buffer> {
  const voiceId = VOICE_IDS[clip.voice]
  const ov = TTS_OVERRIDES[clip.id] ?? {}
  const body: Record<string, unknown> = {
    text: ov.say ?? clip.text,
    model_id: ov.model ?? MODEL_ID,
    voice_settings: VOICE_SETTINGS[clip.voice],
  }
  if (ov.language) body.language_code = ov.language // only turbo/flash v2.5 honor this
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: 'POST',
    headers: {
      Accept: 'audio/mpeg',
      'Content-Type': 'application/json',
      'xi-api-key': ELEVENLABS_API_KEY as string,
    },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    throw new Error(`TTS ${res.status} ${res.statusText}: ${await res.text()}`)
  }
  return Buffer.from(await res.arrayBuffer())
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  const args = new Set(process.argv.slice(2))
  const doUpload = args.has('--upload')
  const sampleOnly = args.has('--sample')
  const vocabOnly = args.has('--vocab')
  // --ids=l5-voc-01,l5-voc-07  : regenerate only the named clips. Best for re-rolling
  // specific isolated words that came out mispronounced, without touching good clips.
  const idsArg = process.argv.find(a => a.startsWith('--ids='))
  const onlyIds = idsArg ? new Set(idsArg.split('=')[1].split(',').map(s => s.trim()).filter(Boolean)) : null
  const revArg = process.argv.find(a => a.startsWith('--rev='))
  if (revArg) REV = slug(revArg.split('=')[1] || '')

  // Validate config
  const missing: string[] = []
  if (!ELEVENLABS_API_KEY) missing.push('ELEVENLABS_API_KEY')
  for (const k of ['male', 'female'] as const) {
    const id = VOICE_IDS[k]
    if (!id || id.startsWith('REPLACE_')) missing.push(`ELEVENLABS_VOICE_${k.toUpperCase()}`)
  }
  if (doUpload && (!SUPABASE_URL || !SUPABASE_KEY)) missing.push('SUPABASE_URL / SUPABASE_ANON_KEY')
  if (missing.length) {
    console.error('❌ Missing/!set env values:', missing.join(', '))
    process.exit(1)
  }

  let clips = ALL_CLIPS
  if (vocabOnly) clips = clips.filter(c => c.category === 'vocabulary')
  if (sampleOnly) clips = clips.filter(c => SAMPLE_IDS.has(c.id))
  if (onlyIds) clips = clips.filter(c => onlyIds.has(c.id))

  const outDir = join(process.cwd(), 'audio-backup', 'lesson5')
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

  console.log(`🎵 Lesson 5 voiceover — ${clips.length} clip(s)`)
  console.log(`   Guillaume (male) ${VOICE_IDS.male}  |  Audrey (female) ${VOICE_IDS.female}`)
  const mode = sampleOnly ? 'SAMPLE' : vocabOnly ? 'VOCAB-ONLY' : 'FULL'
  console.log(`   Mode: ${mode}  Upload: ${doUpload ? 'YES' : 'no (local only)'}  Pause: ${DELAY_MS}ms\n`)

  // Lazy-load Supabase only when uploading
  let supabase: any = null
  if (doUpload) {
    const { createClient } = await import('@supabase/supabase-js')
    supabase = createClient(SUPABASE_URL as string, SUPABASE_KEY as string)
  }

  let ok = 0
  const failures: string[] = []

  for (const clip of clips) {
    const tag = `[${clip.id}] ${VOICE_NAMES[clip.voice]}${clip.speaker ? ` as ${clip.speaker}` : ''}`
    try {
      const buf = await generateAudio(clip)
      const fileName = fileNameFor(clip)
      const localPath = join(outDir, fileName)
      writeFileSync(localPath, buf)
      console.log(`✅ ${tag}: "${clip.text}" → ${fileName} (${buf.length} B)`)

      if (doUpload) {
        const up = await supabase.storage.from(BUCKET)
          .upload(fileName, buf, { contentType: 'audio/mpeg', upsert: true })
        if (up.error) throw new Error(`storage: ${up.error.message}`)
        const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(fileName)
        const ins = await supabase.from(TABLE).insert({
          text: normalizeText(clip.text),
          audio_url: pub.publicUrl,
          voice_id: VOICE_IDS[clip.voice],
          voice_name: VOICE_NAMES[clip.voice],
          category: clip.category,
          lesson_id: LESSON_ID,
          file_name: fileName,
        })
        if (ins.error) throw new Error(`db: ${ins.error.message}`)
        console.log(`   ☁️  uploaded + indexed → ${pub.publicUrl}`)
      }
      ok++
    } catch (err: any) {
      console.error(`❌ ${tag}: ${err.message}`)
      failures.push(clip.id)
    }
    await new Promise(r => setTimeout(r, DELAY_MS)) // gentle on the API; helps short clips
  }

  console.log(`\n📁 Local files: ${outDir}`)
  console.log(`🎉 Done: ${ok}/${clips.length} succeeded${failures.length ? `  (failed: ${failures.join(', ')})` : ''}`)
  if (failures.length) process.exit(1)
}

main().catch(e => {
  console.error('Fatal:', e)
  process.exit(1)
})
