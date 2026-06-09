#!/usr/bin/env tsx
/**
 * Lesson 11 (beginner-11) — Gemini TTS generator.
 *
 * Source of truth: lib/lessons/lessonData.ts beginner-11.
 *
 * Voice mapping (Gemini prebuilt voices):
 *   male dialogue                     -> Charon
 *   female dialogue + grammar/vocab   -> Kore
 *
 * Pipeline parity with Lesson 9/10 Gemini: same normalizeText/slug behavior,
 * same Supabase upload + audio_pronunciations row shape (lesson_id = beginner-11),
 * and the same newest-wins lookup contract. Gemini returns raw 24kHz mono PCM,
 * which is transcoded to MP3 with ffmpeg before saving/uploading.
 *
 * Run modes:
 *   (default)        generate all clips locally to audio-backup/lesson11/ (NO upload).
 *   --upload         also upload each MP3 + insert a DB row.
 *   --ids=...        generate only the named clips (re-roll offenders).
 *   --rev=vN         append a revision tag to filenames.
 *   --from-local     skip TTS and upload existing local MP3s; combine with --upload.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'
import { execFileSync } from 'child_process'

// ---------------------------------------------------------------------------
// Load .env.local
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

const GEMINI_KEY = process.env.GOOGLE_AI_STUDIO_API_KEY
const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const MODEL = 'gemini-2.5-flash-preview-tts'
const FALLBACK_TTS_MODEL = 'gemini-3.1-flash-tts-preview'
const LESSON_ID = 'beginner-11'
const DELAY_MS = Number(process.env.TTS_DELAY_MS) || 800
let REV = ''
const BUCKET = 'audio'
const TABLE = 'audio_pronunciations'

const GEMINI_VOICE = { male: 'Charon', female: 'Kore' } as const

type VoiceKey = 'male' | 'female'
type Clip = { id: string; category: string; voice: VoiceKey; text: string; speaker?: string }
type TtsOverride = { say?: string; model?: string }

const NARRATOR: VoiceKey = 'female'

// ---------------------------------------------------------------------------
// Lesson 11 content — only strings expected to resolve through audio buttons:
// dialogue exchange.french, grammar example.french, and vocabulary word.word.
// Copied verbatim from lib/lessons/lessonData.ts (beginner-11).
// ---------------------------------------------------------------------------
const dialogue: Clip[] = [
  { id: 'l11-dlg-01', category: 'dialogue', voice: 'female', speaker: 'Alice', text: 'Quelle date sommes-nous aujourd’hui?' },
  { id: 'l11-dlg-02', category: 'dialogue', voice: 'male', speaker: 'Benoît', text: 'Nous sommes le douze mars.' },
  { id: 'l11-dlg-03', category: 'dialogue', voice: 'female', speaker: 'Alice', text: 'Le voyage est le premier avril?' },
  { id: 'l11-dlg-04', category: 'dialogue', voice: 'male', speaker: 'Benoît', text: 'Oui, et le train est à quatre-vingt-dix euros.' },
  { id: 'l11-dlg-05', category: 'dialogue', voice: 'female', speaker: 'Alice', text: 'C’est cher, mais les vacances sont importantes.' },
  { id: 'l11-dlg-06', category: 'dialogue', voice: 'male', speaker: 'Benoît', text: 'En été, les billets sont souvent chers.' },
  { id: 'l11-dlg-07', category: 'dialogue', voice: 'female', speaker: 'Alice', text: 'Alors, nous partons en mai.' },
  { id: 'l11-dlg-08', category: 'dialogue', voice: 'male', speaker: 'Benoît', text: 'D’accord. Le rendez-vous est lundi prochain.' },
  { id: 'l11-dlg-09', category: 'dialogue', voice: 'female', speaker: 'Alice', text: 'Je réserve deux billets demain.' },
  { id: 'l11-dlg-10', category: 'dialogue', voice: 'male', speaker: 'Benoît', text: 'Parfait, merci.' },
]

const grammar: Clip[] = [
  'soixante-dix',
  'quatre-vingts',
  'le premier avril',
].map((text, i) => ({
  id: `l11-gra-${String(i + 1).padStart(2, '0')}`,
  category: 'grammar',
  voice: NARRATOR,
  text,
}))

const vocab: Clip[] = [
  'soixante-dix',
  'quatre-vingts',
  'quatre-vingt-dix',
  'cent',
  'deux cents',
  'mille',
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre',
  'printemps',
  'été',
].map((text, i) => ({
  id: `l11-voc-${String(i + 1).padStart(2, '0')}`,
  category: 'vocabulary',
  voice: NARRATOR,
  text,
}))

const ALL_CLIPS: Clip[] = [...dialogue, ...grammar, ...vocab]

// Per-clip overrides. `say` changes only what Gemini hears; DB text, filename slug,
// and UI lookup still use clip.text. `model` exists for stubborn empty-audio or bad
// pronunciation clips. Start empty and add only after auditioning.
const TTS_OVERRIDES: Record<string, TtsOverride> = {
  'l11-dlg-10': { model: FALLBACK_TTS_MODEL },
  'l11-dlg-02': { say: 'Nous sommes le 12 mars.', model: FALLBACK_TTS_MODEL },
  'l11-gra-02': { say: 'Quatre-vingts.', model: FALLBACK_TTS_MODEL },
  'l11-voc-02': { say: 'Quatre-vingts.', model: FALLBACK_TTS_MODEL },
  'l11-voc-03': { say: 'Quatre-vingt-dix.', model: FALLBACK_TTS_MODEL },
  'l11-voc-05': { say: 'Deux cents.', model: FALLBACK_TTS_MODEL },
  'l11-voc-07': { say: 'Janvier.', model: FALLBACK_TTS_MODEL },
  'l11-voc-08': { say: 'Février.', model: FALLBACK_TTS_MODEL },
  'l11-voc-09': { say: 'Mars.', model: FALLBACK_TTS_MODEL },
  'l11-voc-10': { say: 'Avril.', model: FALLBACK_TTS_MODEL },
  'l11-voc-13': { say: 'Juillet.', model: FALLBACK_TTS_MODEL },
  'l11-voc-14': { say: 'Août.', model: FALLBACK_TTS_MODEL },
  'l11-gra-03': { say: 'Le premier avril.', model: FALLBACK_TTS_MODEL },
  'l11-voc-16': { say: 'Octobre.', model: FALLBACK_TTS_MODEL },
  'l11-voc-17': { say: 'Novembre.', model: FALLBACK_TTS_MODEL },
  'l11-voc-18': { say: 'Décembre.', model: FALLBACK_TTS_MODEL },
  'l11-voc-19': { say: 'Printemps.', model: FALLBACK_TTS_MODEL },
  'l11-voc-20': { say: 'Été.', model: FALLBACK_TTS_MODEL },
}

// ---------------------------------------------------------------------------
// Helpers (identical normalization to Lesson 9/10 Gemini)
// ---------------------------------------------------------------------------
function slug(text: string): string {
  return text
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .trim().replace(/\s+/g, '_').toLowerCase()
    .slice(0, 30)
}

function normalizeText(text: string): string {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, ' ').trim()
}

function fileNameFor(clip: Clip): string {
  const rev = REV ? `_${REV}` : ''
  return `${clip.id}_${slug(clip.text)}_${GEMINI_VOICE[clip.voice].toLowerCase()}${rev}.mp3`
}

// Gemini returns headerless signed-16-bit PCM, 24kHz mono. Transcode to MP3 via ffmpeg.
function pcmToMp3(pcm: Buffer): Buffer {
  return execFileSync(
    'ffmpeg',
    ['-f', 's16le', '-ar', '24000', '-ac', '1', '-i', 'pipe:0', '-f', 'mp3', 'pipe:1'],
    { input: pcm, stdio: ['pipe', 'pipe', 'ignore'], maxBuffer: 1e8 },
  )
}

async function generateAudio(clip: Clip): Promise<Buffer> {
  const voice = GEMINI_VOICE[clip.voice]
  const ov = TTS_OVERRIDES[clip.id] ?? {}
  const say = ov.say ?? clip.text
  const model = ov.model ?? MODEL
  const prompt = `Lis ce texte naturellement, d'une voix claire, en français : ${say}`
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseModalities: ['AUDIO'],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } },
        },
      }),
    },
  )
  if (!res.ok) throw new Error(`Gemini ${res.status}: ${(await res.text()).slice(0, 300)}`)
  const json = await res.json()
  const data = json?.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data
  if (!data) throw new Error(`no audio in response: ${JSON.stringify(json).slice(0, 300)}`)
  return pcmToMp3(Buffer.from(data, 'base64'))
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  const args = new Set(process.argv.slice(2))
  const doUpload = args.has('--upload')
  const fromLocal = args.has('--from-local')
  const idsArg = process.argv.find(a => a.startsWith('--ids='))
  const onlyIds = idsArg ? new Set(idsArg.split('=')[1].split(',').map(s => s.trim()).filter(Boolean)) : null
  const revArg = process.argv.find(a => a.startsWith('--rev='))
  if (revArg) REV = slug(revArg.split('=')[1] || '')

  const missing: string[] = []
  if (!fromLocal && !GEMINI_KEY) missing.push('GOOGLE_AI_STUDIO_API_KEY')
  if (doUpload && (!SUPABASE_URL || !SUPABASE_KEY)) missing.push('SUPABASE_URL / SUPABASE_ANON_KEY')
  if (missing.length) {
    console.error('❌ Missing env values:', missing.join(', '))
    process.exit(1)
  }

  let clips = ALL_CLIPS
  if (onlyIds) clips = clips.filter(c => onlyIds.has(c.id))

  const outDir = join(process.cwd(), 'audio-backup', 'lesson11')
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

  console.log(`🎵 Lesson 11 voiceover (Gemini) — ${clips.length} clip(s)`)
  console.log(`   Charon (male)  |  Kore (female)  |  model: ${MODEL}`)
  console.log(`   Upload: ${doUpload ? 'YES' : 'no (local only)'}  Pause: ${DELAY_MS}ms\n`)

  let supabase: any = null
  if (doUpload) {
    const { createClient } = await import('@supabase/supabase-js')
    supabase = createClient(SUPABASE_URL as string, SUPABASE_KEY as string)
  }

  let ok = 0
  const failures: string[] = []

  for (const clip of clips) {
    const tag = `[${clip.id}] ${GEMINI_VOICE[clip.voice]}${clip.speaker ? ` as ${clip.speaker}` : ''}`
    try {
      const fileName = fileNameFor(clip)
      const localPath = join(outDir, fileName)
      let buf: Buffer
      if (fromLocal) {
        if (!existsSync(localPath)) throw new Error(`--from-local: ${fileName} not found`)
        buf = readFileSync(localPath)
        console.log(`📂 ${tag}: "${clip.text}" ← ${fileName} (${buf.length} B)`)
      } else {
        buf = await generateAudio(clip)
        writeFileSync(localPath, buf)
        console.log(`✅ ${tag}: "${clip.text}" → ${fileName} (${buf.length} B)`)
      }

      if (doUpload) {
        const up = await supabase.storage.from(BUCKET)
          .upload(fileName, buf, { contentType: 'audio/mpeg', upsert: true })
        if (up.error) throw new Error(`storage: ${up.error.message}`)
        const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(fileName)
        const ins = await supabase.from(TABLE).insert({
          text: normalizeText(clip.text),
          audio_url: pub.publicUrl,
          voice_id: `gemini:${GEMINI_VOICE[clip.voice]}`,
          voice_name: GEMINI_VOICE[clip.voice],
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
    if (!fromLocal) await new Promise(r => setTimeout(r, DELAY_MS))
  }

  console.log(`\n📁 Local files: ${outDir}`)
  console.log(`🎉 Done: ${ok}/${clips.length} succeeded${failures.length ? `  (failed: ${failures.join(', ')})` : ''}`)
  if (failures.length) process.exit(1)
}

main().catch(e => { console.error('Fatal:', e); process.exit(1) })
