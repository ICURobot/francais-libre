'use client'

import IntermediateLessonLayout from '../../../../../components/lessons/IntermediateLessonLayout'
import { getIntermediateLessonData } from '../../../../../components/lessons/intermediateLessons'

const lessonData = getIntermediateLessonData(42)

export default function Lesson42Page() {
  return (
    <IntermediateLessonLayout
      lessonData={lessonData}
      lessonNumber={42}
      prevHref="/lessons/intermediate/41"
      prevLabel="Exprimer son Opinion"
    />
  )
}
