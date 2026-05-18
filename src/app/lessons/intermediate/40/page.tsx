'use client'

import IntermediateLessonLayout from '../../../../../components/lessons/IntermediateLessonLayout'
import { getIntermediateLessonData } from '../../../../../components/lessons/intermediateLessons'

const lessonData = getIntermediateLessonData(40)

export default function Lesson40Page() {
  return (
    <IntermediateLessonLayout
      lessonData={lessonData}
      lessonNumber={40}
      prevHref="/lessons/intermediate/39"
      prevLabel="Le Faire Causatif"
      nextHref="/lessons/intermediate/41"
      nextLabel="Exprimer son Opinion"
    />
  )
}
