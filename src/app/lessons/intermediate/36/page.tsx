'use client'

import IntermediateLessonLayout from '../../../../../components/lessons/IntermediateLessonLayout'
import { getIntermediateLessonData } from '../../../../../components/lessons/intermediateLessons'

const lessonData = getIntermediateLessonData(36)

export default function Lesson36Page() {
  return (
    <IntermediateLessonLayout
      lessonData={lessonData}
      lessonNumber={36}
      prevHref="/lessons/intermediate/35"
      prevLabel="Les Pronoms Relatifs II"
      nextHref="/lessons/intermediate/37"
      nextLabel="La Voix Passive"
    />
  )
}
