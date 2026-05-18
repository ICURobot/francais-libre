'use client'

import IntermediateLessonLayout from '../../../../../components/lessons/IntermediateLessonLayout'
import { getIntermediateLessonData } from '../../../../../components/lessons/intermediateLessons'

const lessonData = getIntermediateLessonData(31)

export default function Lesson31Page() {
  return (
    <IntermediateLessonLayout
      lessonData={lessonData}
      lessonNumber={31}
      prevHref="/lessons/intermediate/30"
      prevLabel="Le Conditionnel Présent"
      nextHref="/lessons/intermediate/32"
      nextLabel="Le Plus-que-parfait"
    />
  )
}
