'use client'

import IntermediateLessonLayout from '../../../../../components/lessons/IntermediateLessonLayout'
import { getIntermediateLessonData } from '../../../../../components/lessons/intermediateLessons'

const lessonData = getIntermediateLessonData(28)

export default function Lesson28Page() {
  return (
    <IntermediateLessonLayout
      lessonData={lessonData}
      lessonNumber={28}
      prevHref="/lessons/intermediate/27"
      prevLabel="Le Subjonctif I"
      nextHref="/lessons/intermediate/29"
      nextLabel="Le Subjonctif III"
    />
  )
}
