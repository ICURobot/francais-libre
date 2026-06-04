#!/usr/bin/env tsx
/**
 * Lesson 1 (beginner-1) voiceover generator.
 *
 * Default run  : generate all clips and save locally to audio-backup/lesson1/ (NO upload).
 *                Use this to audition the voices before committing anything to Supabase.
 * --upload     : after generating, upload each MP3 to the `audio` storage bucket and
 *                insert a row into `audio_pronunciations` (lesson_id = beginner-1).
 * --sample     : generate only a 4-clip representative subset (both voices, both modes).
 *
 * Voice casting (IDs + settings come from .env.local):
 *   Marc (dialogue)              -> male   = Guillaume (ELEVENLABS_VOICE_MALE)
 *   Claire (dialogue) + narrator -> female = Audrey    (ELEVENLABS_VOICE_FEMALE)
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
const LESSON_ID = 'beginner-1'
const BUCKET = 'audio'
const TABLE = 'audio_pronunciations'

type VoiceKey = 'male' | 'female'
type Clip = { id: string; category: string; voice: VoiceKey; text: string; speaker?: string }

// Narrator for isolated vocabulary + grammar examples.
const NARRATOR: VoiceKey = 'female'

// ---------------------------------------------------------------------------
// Lesson 1 content — only the strings that render an AudioPlayButton.
// (dialogue exchange.french, grammar example.french, vocabulary word.word)
// ---------------------------------------------------------------------------
const dialogue: Clip[] = [
  { id: 'l1-dlg-01', category: 'dialogue', voice: 'female', speaker: 'Claire', text: 'Bonjour, monsieur.' },
  { id: 'l1-dlg-02', category: 'dialogue', voice: 'male',   speaker: 'Marc',   text: 'Bonjour, madame.' },
  { id: 'l1-dlg-03', category: 'dialogue', voice: 'female', speaker: 'Claire', text: 'Merci. Vous êtes ici?' },
  { id: 'l1-dlg-04', category: 'dialogue', voice: 'male',   speaker: 'Marc',   text: 'De rien. Vous êtes française?' },
  { id: 'l1-dlg-05', category: 'dialogue', voice: 'female', speaker: 'Claire', text: 'Oui, je suis française. Et vous?' },
  { id: 'l1-dlg-06', category: 'dialogue', voice: 'male',   speaker: 'Marc',   text: 'Moi, je suis canadien. Je suis ici.' },
  { id: 'l1-dlg-07', category: 'dialogue', voice: 'female', speaker: 'Claire', text: 'Très bien. Au revoir, monsieur.' },
  { id: 'l1-dlg-08', category: 'dialogue', voice: 'male',   speaker: 'Marc',   text: 'Au revoir, madame.' },
]

const grammar: Clip[] = ['Je suis française.', 'Vous êtes ici.', 'Ils sont canadiens.'].map((text, i) => ({
  id: `l1-gra-${String(i + 1).padStart(2, '0')}`,
  category: 'grammar',
  voice: NARRATOR,
  text,
}))

const vocab: Clip[] = [
  'bonjour', 'bonsoir', 'salut', 'au revoir', 'merci', "s'il vous plaît", 'de rien',
  'excusez-moi', 'pardon', 'ici', 'bien', 'très bien', 'français', 'française', 'canadien', 'belge',
].map((text, i) => ({
  id: `l1-voc-${String(i + 1).padStart(2, '0')}`,
  category: 'vocabulary',
  voice: NARRATOR,
  text,
}))

const ALL_CLIPS: Clip[] = [...dialogue, ...grammar, ...vocab]

// A representative subset for --sample (both voices, both content modes).
const SAMPLE_IDS = new Set(['l1-dlg-02', 'l1-dlg-05', 'l1-gra-01', 'l1-voc-01'])

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
  return `${clip.id}_${slug(clip.text)}_${VOICE_NAMES[clip.voice].toLowerCase()}.mp3`
}

async function generateAudio(clip: Clip): Promise<Buffer> {
  const voiceId = VOICE_IDS[clip.voice]
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: 'POST',
    headers: {
      Accept: 'audio/mpeg',
      'Content-Type': 'application/json',
      'xi-api-key': ELEVENLABS_API_KEY as string,
    },
    body: JSON.stringify({
      text: clip.text,
      model_id: MODEL_ID,
      voice_settings: VOICE_SETTINGS[clip.voice],
    }),
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

  const clips = sampleOnly ? ALL_CLIPS.filter(c => SAMPLE_IDS.has(c.id)) : ALL_CLIPS

  const outDir = join(process.cwd(), 'audio-backup', 'lesson1')
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

  console.log(`🎵 Lesson 1 voiceover — ${clips.length} clip(s)`)
  console.log(`   Guillaume (male) ${VOICE_IDS.male}  |  Audrey (female) ${VOICE_IDS.female}`)
  console.log(`   Mode: ${sampleOnly ? 'SAMPLE' : 'FULL'}  Upload: ${doUpload ? 'YES' : 'no (local only)'}\n`)

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
    await new Promise(r => setTimeout(r, 150)) // gentle on the API
  }

  console.log(`\n📁 Local files: ${outDir}`)
  console.log(`🎉 Done: ${ok}/${clips.length} succeeded${failures.length ? `  (failed: ${failures.join(', ')})` : ''}`)
  if (failures.length) process.exit(1)
}

main().catch(e => {
  console.error('Fatal:', e)
  process.exit(1)
})
