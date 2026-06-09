#!/usr/bin/env tsx
/**
 * One-off: audition candidate Gemini TTS voices for Lesson 9 (and beyond), since we're
 * moving off ElevenLabs. Generates a couple of male + female candidates on real L9 lines,
 * converts the raw 24kHz PCM Gemini returns into MP3 via ffmpeg, and drops them in
 * audio-backup/lesson9/_gemini-audition/ for listening. Not part of the lesson pipeline.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'
import { execFileSync } from 'child_process'

try {
  const envPath = join(process.cwd(), '.env.local')
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    if (!line || line.startsWith('#')) continue
    const [k, ...rest] = line.split('=')
    if (k && rest.length) process.env[k.trim()] = rest.join('=').trim()
  }
} catch (e) { console.error('env load failed', e); process.exit(1) }

const KEY = process.env.GOOGLE_AI_STUDIO_API_KEY
if (!KEY) { console.error('GOOGLE_AI_STUDIO_API_KEY missing'); process.exit(1) }

const MODEL = 'gemini-2.5-flash-preview-tts'
// Candidate voices (Google prebuilt). Male-ish: Charon (informative), Orus (firm).
// Female-ish: Kore (firm), Aoede (breezy). We'll judge by ear.
const CANDIDATES: { voice: string; label: string; text: string }[] = [
  { voice: 'Charon', label: 'male-charon',  text: 'J’aime le cinéma et la musique.' },
  { voice: 'Orus',   label: 'male-orus',    text: 'J’aime le cinéma et la musique.' },
  { voice: 'Kore',   label: 'female-kore',  text: 'Est-ce que tu parles français?' },
  { voice: 'Aoede',  label: 'female-aoede', text: 'Est-ce que tu parles français?' },
]

async function tts(voice: string, text: string): Promise<Buffer> {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Lis ce texte naturellement, d'une voix claire, en français : ${text}` }] }],
        generationConfig: {
          responseModalities: ['AUDIO'],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } },
        },
      }),
    },
  )
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`)
  const json = await res.json()
  const part = json?.candidates?.[0]?.content?.parts?.[0]?.inlineData
  if (!part?.data) throw new Error(`no audio in response: ${JSON.stringify(json).slice(0, 300)}`)
  return Buffer.from(part.data, 'base64') // raw signed 16-bit PCM, 24kHz mono
}

function pcmToMp3(pcm: Buffer, outPath: string) {
  // Gemini returns headerless PCM (s16le, 24kHz, mono). Pipe it through ffmpeg to MP3.
  execFileSync('ffmpeg', [
    '-f', 's16le', '-ar', '24000', '-ac', '1', '-i', 'pipe:0',
    '-y', outPath,
  ], { input: pcm, stdio: ['pipe', 'ignore', 'ignore'] })
}

async function main() {
  const outDir = join(process.cwd(), 'audio-backup', 'lesson9', '_gemini-audition')
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
  for (const c of CANDIDATES) {
    try {
      const pcm = await tts(c.voice, c.text)
      const out = join(outDir, `${c.label}.mp3`)
      pcmToMp3(pcm, out)
      console.log(`✅ ${c.label} (${c.voice}): "${c.text}" → ${out}`)
    } catch (e: any) {
      console.error(`❌ ${c.label} (${c.voice}): ${e.message}`)
    }
    await new Promise(r => setTimeout(r, 800))
  }
  console.log(`\n📁 ${outDir}`)
}
main().catch(e => { console.error('Fatal:', e); process.exit(1) })
