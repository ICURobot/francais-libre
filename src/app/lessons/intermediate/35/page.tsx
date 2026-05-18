'use client'

import IntermediateLessonLayout from '../../../../../components/lessons/IntermediateLessonLayout'
import { getIntermediateLessonData } from '../../../../../components/lessons/intermediateLessons'

const lessonData = getIntermediateLessonData(35)

export default function Lesson35Page() {
  return (
    <IntermediateLessonLayout
      lessonData={lessonData}
      lessonNumber={35}
      prevHref="/lessons/intermediate/34"
      prevLabel="Les Pronoms Relatifs I"
      nextHref="/lessons/intermediate/36"
      nextLabel="Le Discours Indirect"
    />
  )
}
