'use client'

import IntermediateLessonLayout from '../../../../../components/lessons/IntermediateLessonLayout'
import { getIntermediateLessonData } from '../../../../../components/lessons/intermediateLessons'

const lessonData = getIntermediateLessonData(33)

export default function Lesson33Page() {
  return (
    <IntermediateLessonLayout
      lessonData={lessonData}
      lessonNumber={33}
      prevHref="/lessons/intermediate/32"
      prevLabel="Le Plus-que-parfait"
      nextHref="/lessons/intermediate/34"
      nextLabel="Les Pronoms Relatifs I"
    />
  )
}
