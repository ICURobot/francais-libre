'use client'

import IntermediateLessonLayout from '../../../../../components/lessons/IntermediateLessonLayout'
import { getIntermediateLessonData } from '../../../../../components/lessons/intermediateLessons'

const lessonData = getIntermediateLessonData(38)

export default function Lesson38Page() {
  return (
    <IntermediateLessonLayout
      lessonData={lessonData}
      lessonNumber={38}
      prevHref="/lessons/intermediate/37"
      prevLabel="La Voix Passive"
      nextHref="/lessons/intermediate/39"
      nextLabel="Le Faire Causatif"
    />
  )
}
