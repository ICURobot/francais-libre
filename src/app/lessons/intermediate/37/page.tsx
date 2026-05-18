'use client'

import IntermediateLessonLayout from '../../../../../components/lessons/IntermediateLessonLayout'
import { getIntermediateLessonData } from '../../../../../components/lessons/intermediateLessons'

const lessonData = getIntermediateLessonData(37)

export default function Lesson37Page() {
  return (
    <IntermediateLessonLayout
      lessonData={lessonData}
      lessonNumber={37}
      prevHref="/lessons/intermediate/36"
      prevLabel="Le Discours Indirect"
      nextHref="/lessons/intermediate/38"
      nextLabel="Le Gérondif"
    />
  )
}
