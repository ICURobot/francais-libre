#!/usr/bin/env tsx
/**
 * Verify that every audio play button in BeginnerLessonPageRedesign resolves to
 * a real clip. Mirrors the component exactly:
 *   - same normalizeAudioKey()
 *   - same newest-wins map build per lesson_id
 *   - same set of spoken texts (grammar examples, dialogue exchanges, vocab words)
 *
 * Run: npx tsx scripts/verify-voiceover-wiring.ts
 */
import { config } from 'dotenv'
config({ path: '.env.local' })
config({ path: '.env' })

import { createClient } from '@supabase/supabase-js'
import { beginnerLessons } from '../lib/lessons/lessonData'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL!
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY!
const supabase = createClient(url, key)

const normalizeAudioKey = (text: string): string =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()

async function buildMap(lessonId: string) {
  const { data, error } = await supabase
    .from('audio_pronunciations')
    .select('text, audio_url, created_at')
    .eq('lesson_id', lessonId)
    .order('created_at', { ascending: false })
  if (error) throw error
  const map = new Map<string, string>()
  for (const row of data || []) {
    if (!row.text || !row.audio_url) continue
    const k = normalizeAudioKey(row.text)
    if (!map.has(k)) map.set(k, row.audio_url)
  }
  return map
}

async function main() {
  const lessons = beginnerLessons.filter((l) => {
    const n = parseInt(l.id.replace(/\D/g, ''), 10)
    return n >= 1 && n <= 11
  })

  let totalMissing = 0
  for (const lesson of lessons) {
    const map = await buildMap(lesson.id)
    const checks: { kind: string; text: string }[] = []
    lesson.grammar.examples.forEach((e) => checks.push({ kind: 'grammar', text: e.french }))
    lesson.dialogue.exchanges.forEach((e) => checks.push({ kind: 'dialogue', text: e.french }))
    lesson.vocabulary.forEach((w) => checks.push({ kind: 'vocab', text: w.word }))

    const missing = checks.filter((c) => !map.get(normalizeAudioKey(c.text)))
    totalMissing += missing.length
    const status = missing.length === 0 ? 'OK ' : 'FAIL'
    console.log(
      `[${status}] ${lesson.id.padEnd(11)} buttons=${String(checks.length).padStart(3)} resolved=${String(checks.length - missing.length).padStart(3)} dbRows=${map.size}`,
    )
    for (const m of missing) {
      console.log(`        MISSING (${m.kind}): "${m.text}"  -> key="${normalizeAudioKey(m.text)}"`)
    }
  }
  console.log(`\nTotal unresolved buttons across lessons 1-11: ${totalMissing}`)
  process.exit(totalMissing === 0 ? 0 : 1)
}

main().catch((e) => {
  console.error(e)
  process.exit(2)
})
