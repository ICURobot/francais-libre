'use client'

import IntermediateLessonLayout from '../../../../../components/lessons/IntermediateLessonLayout'
import { getIntermediateLessonData } from '../../../../../components/lessons/intermediateLessons'

const lessonData = getIntermediateLessonData(30)

export default function Lesson30Page() {
  return (
    <IntermediateLessonLayout
      lessonData={lessonData}
      lessonNumber={30}
      prevHref="/lessons/intermediate/29"
      prevLabel="Le Subjonctif III"
      nextHref="/lessons/intermediate/31"
      nextLabel="Les Phrases Hypothétiques"
    />
  )
}
