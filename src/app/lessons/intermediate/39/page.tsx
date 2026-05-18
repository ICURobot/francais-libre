'use client'

import IntermediateLessonLayout from '../../../../../components/lessons/IntermediateLessonLayout'
import { getIntermediateLessonData } from '../../../../../components/lessons/intermediateLessons'

const lessonData = getIntermediateLessonData(39)

export default function Lesson39Page() {
  return (
    <IntermediateLessonLayout
      lessonData={lessonData}
      lessonNumber={39}
      prevHref="/lessons/intermediate/38"
      prevLabel="Le Gérondif"
      nextHref="/lessons/intermediate/40"
      nextLabel="Les Connecteurs Logiques"
    />
  )
}
