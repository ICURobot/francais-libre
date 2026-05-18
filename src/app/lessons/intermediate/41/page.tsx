'use client'

import IntermediateLessonLayout from '../../../../../components/lessons/IntermediateLessonLayout'
import { getIntermediateLessonData } from '../../../../../components/lessons/intermediateLessons'

const lessonData = getIntermediateLessonData(41)

export default function Lesson41Page() {
  return (
    <IntermediateLessonLayout
      lessonData={lessonData}
      lessonNumber={41}
      prevHref="/lessons/intermediate/40"
      prevLabel="Les Connecteurs Logiques"
      nextHref="/lessons/intermediate/42"
      nextLabel="Consolidation B1"
    />
  )
}
