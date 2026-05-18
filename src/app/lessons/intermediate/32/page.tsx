'use client'

import IntermediateLessonLayout from '../../../../../components/lessons/IntermediateLessonLayout'
import { getIntermediateLessonData } from '../../../../../components/lessons/intermediateLessons'

const lessonData = getIntermediateLessonData(32)

export default function Lesson32Page() {
  return (
    <IntermediateLessonLayout
      lessonData={lessonData}
      lessonNumber={32}
      prevHref="/lessons/intermediate/31"
      prevLabel="Les Phrases Hypothétiques"
      nextHref="/lessons/intermediate/33"
      nextLabel="Le Conditionnel Passé"
    />
  )
}
