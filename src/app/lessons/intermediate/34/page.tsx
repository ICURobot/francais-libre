'use client'

import IntermediateLessonLayout from '../../../../../components/lessons/IntermediateLessonLayout'
import { getIntermediateLessonData } from '../../../../../components/lessons/intermediateLessons'

const lessonData = getIntermediateLessonData(34)

export default function Lesson34Page() {
  return (
    <IntermediateLessonLayout
      lessonData={lessonData}
      lessonNumber={34}
      prevHref="/lessons/intermediate/33"
      prevLabel="Le Conditionnel Passé"
      nextHref="/lessons/intermediate/35"
      nextLabel="Les Pronoms Relatifs II"
    />
  )
}
