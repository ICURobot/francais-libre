#!/usr/bin/env tsx
/**
 * Lesson 9 (beginner-9) — Gemini TTS generator for the 18 clips that ElevenLabs couldn't
 * finish (the account ran out of quota mid-run; we're moving off ElevenLabs to Gemini).
 *
 * The 11 clips ElevenLabs DID produce (l9-dlg-01..09, l9-voc-01 "où", l9-voc-02 "quand")
 * stay as Guillaume/Audrey takes — this script does NOT touch them. That leaves Karim and
 * the vocab narrator with two voices inside this lesson; that mix was an explicit choice.
 *
 * Voice mapping (Gemini prebuilt voices, chosen by audition — see gemini-tts-audition.ts):
 *   male   (Karim)              -> Charon
 *   female (narrator + grammar) -> Kore
 *
 * Pipeline parity with generate-lesson8/9-audio.ts: same ids, same normalizeText/slug, same
 * Supabase upload + audio_pronunciations row shape (lesson_id = beginner-9), so the UI's
 * newest-wins lookup resolves these exactly like the ElevenLabs rows. Difference: Gemini
 * returns raw 24kHz mono PCM, which we transcode to MP3 with ffmpeg before saving/uploading.
 *
 * Run modes:
 *   (default)  generate all 18 locally to audio-backup/lesson9/ (NO upload) — audition.
 *   --upload   also upload each MP3 + insert a DB row.
 *   --ids=...  generate only the named clips (re-roll offenders).
 *   --rev=vN   append a revision tag to filenames (fresh URL, beats CDN cache + unique(file_name)).
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
    const [k, ...rest] = line.split('=')
    if (k && rest.length) process.env[k.trim()] = rest.join('=').trim()
  }
} catch (e) {
  console.error('❌ Failed to load .env.local:', e)
  process.exit(1)
}

const GEMINI_KEY = process.env.GOOGLE_AI_STUDIO_API_KEY
const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const MODEL = 'gemini-2.5-flash-preview-tts'
const LESSON_ID = 'beginner-9'
const DELAY_MS = Number(process.env.TTS_DELAY_MS) || 800
let REV = ''
const BUCKET = 'audio'
const TABLE = 'audio_pronunciations'

// Gemini voice per role. voice_name is stored on the row as metadata (UI matches on text only).
const GEMINI_VOICE = { male: 'Charon', female: 'Kore' } as const

type VoiceKey = 'male' | 'female'
type Clip = { id: string; category: string; voice: VoiceKey; text: string; speaker?: string }

// ---------------------------------------------------------------------------
// The 18 clips ElevenLabs left unfinished. ids/text/voice mirror generate-lesson9-audio.ts
// exactly (copied verbatim from lib/lessons/lessonData.ts, accents + apostrophes intact).
// 1 male (Karim, dlg-10) + 17 female (3 grammar examples + 14 vocab).
// ---------------------------------------------------------------------------
const CLIPS: Clip[] = [
  { id: 'l9-dlg-10', category: 'dialogue', voice: 'male', speaker: 'Karim', text: 'Parce que j’ai froid.' },

  { id: 'l9-gra-01', category: 'grammar', voice: 'female', text: 'Je ne travaille pas.' },
  { id: 'l9-gra-02', category: 'grammar', voice: 'female', text: 'Est-ce que tu parles français?' },
  { id: 'l9-gra-03', category: 'grammar', voice: 'female', text: 'Où habitez-vous?' },

  { id: 'l9-voc-03', category: 'vocabulary', voice: 'female', text: 'pourquoi' },
  { id: 'l9-voc-04', category: 'vocabulary', voice: 'female', text: 'comment' },
  { id: 'l9-voc-05', category: 'vocabulary', voice: 'female', text: 'qui' },
  { id: 'l9-voc-06', category: 'vocabulary', voice: 'female', text: 'que' },
  { id: 'l9-voc-07', category: 'vocabulary', voice: 'female', text: 'combien' },
  { id: 'l9-voc-08', category: 'vocabulary', voice: 'female', text: 'est-ce que' },
  { id: 'l9-voc-09', category: 'vocabulary', voice: 'female', text: 'ne...pas' },
  { id: 'l9-voc-10', category: 'vocabulary', voice: 'female', text: "n'...pas" },
  { id: 'l9-voc-11', category: 'vocabulary', voice: 'female', text: 'ne...jamais' },
  { id: 'l9-voc-12', category: 'vocabulary', voice: 'female', text: 'ne...plus' },
  { id: 'l9-voc-13', category: 'vocabulary', voice: 'female', text: 'ne...rien' },
  { id: 'l9-voc-14', category: 'vocabulary', voice: 'female', text: 'aussi' },
  { id: 'l9-voc-15', category: 'vocabulary', voice: 'female', text: 'non plus' },
  { id: 'l9-voc-16', category: 'vocabulary', voice: 'female', text: 'si' },
]

// Per-clip overrides. `say` = the text actually sent to Gemini (the stored DB key/filename
// always come from the original clip.text, so lookup is unaffected). Use it to read the
// ne...X ellipsis as a clean phrase, or to give an ultra-short token a full utterance.
// Start empty; add only after auditioning (the French steering prefix already pins language,
// so que/si are less likely to need help than they did on ElevenLabs — but listen anyway).
// `say`   = text actually sent (key/filename still derive from clip.text, so lookup is safe).
// `model` = override the TTS model for one stubborn clip (the timbre is close enough on an
//           isolated vocab word). Some ultra-short tokens return finishReason "OTHER" / empty
//           audio on 2.5-flash no matter how `say` is phrased; the 3.1-flash TTS model renders
//           them. Mirrors the ElevenLabs "switch model for the offender" trick.
type TtsOverride = { say?: string; model?: string }
const FALLBACK_TTS_MODEL = 'gemini-3.1-flash-tts-preview'
const TTS_OVERRIDES: Record<string, TtsOverride> = {
  'l9-voc-06': { say: 'Que.',       model: FALLBACK_TTS_MODEL }, // Spanish-ambiguous; empty on 2.5
  'l9-voc-08': { say: 'Est-ce que.' },                          // fixed by say alone on 2.5
  'l9-voc-15': { say: 'Non plus.',  model: FALLBACK_TTS_MODEL }, // empty on 2.5
}

// ---------------------------------------------------------------------------
// Helpers (identical normalization to the ElevenLabs scripts)
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
  // The French steering prefix pins the language (helps short tokens like que/si) and is not
  // spoken — Gemini treats text before the colon as an instruction.
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
  // --from-local: don't call the TTS API — upload the MP3 already sitting in audio-backup.
  // Used to push clips we generated earlier (e.g. when the API quota is since exhausted).
  const fromLocal = args.has('--from-local')
  const idsArg = process.argv.find(a => a.startsWith('--ids='))
  const onlyIds = idsArg ? new Set(idsArg.split('=')[1].split(',').map(s => s.trim()).filter(Boolean)) : null
  const revArg = process.argv.find(a => a.startsWith('--rev='))
  if (revArg) REV = slug(revArg.split('=')[1] || '')

  const missing: string[] = []
  if (!GEMINI_KEY) missing.push('GOOGLE_AI_STUDIO_API_KEY')
  if (doUpload && (!SUPABASE_URL || !SUPABASE_KEY)) missing.push('SUPABASE_URL / SUPABASE_ANON_KEY')
  if (missing.length) {
    console.error('❌ Missing env values:', missing.join(', '))
    process.exit(1)
  }

  let clips = CLIPS
  if (onlyIds) clips = clips.filter(c => onlyIds.has(c.id))

  const outDir = join(process.cwd(), 'audio-backup', 'lesson9')
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

  console.log(`🎵 Lesson 9 voiceover (Gemini) — ${clips.length} clip(s)`)
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
    if (!fromLocal) await new Promise(r => setTimeout(r, DELAY_MS)) // only the TTS API needs throttling
  }

  console.log(`\n📁 Local files: ${outDir}`)
  console.log(`🎉 Done: ${ok}/${clips.length} succeeded${failures.length ? `  (failed: ${failures.join(', ')})` : ''}`)
  if (failures.length) process.exit(1)
}

main().catch(e => { console.error('Fatal:', e); process.exit(1) })
