'use client'

import IntermediateLessonLayout from '../../../../../components/lessons/IntermediateLessonLayout'
import { getIntermediateLessonData } from '../../../../../components/lessons/intermediateLessons'

const lessonData = getIntermediateLessonData(29)

export default function Lesson29Page() {
  return (
    <IntermediateLessonLayout
      lessonData={lessonData}
      lessonNumber={29}
      prevHref="/lessons/intermediate/28"
      prevLabel="Le Subjonctif II"
      nextHref="/lessons/intermediate/30"
      nextLabel="Le Conditionnel Présent"
    />
  )
}
