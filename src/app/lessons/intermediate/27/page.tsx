'use client'

import IntermediateLessonLayout from '../../../../../components/lessons/IntermediateLessonLayout'
import { getIntermediateLessonData } from '../../../../../components/lessons/intermediateLessons'

const lessonData = getIntermediateLessonData(27)

export default function Lesson27Page() {
  return (
    <IntermediateLessonLayout
      lessonData={lessonData}
      lessonNumber={27}
      prevHref="/lessons/intermediate"
      prevLabel="B1 Overview"
      nextHref="/lessons/intermediate/28"
      nextLabel="Le Subjonctif II"
    />
  )
}
