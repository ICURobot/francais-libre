'use client'

import BeginnerLessonPage from '../../../../../components/lessons/BeginnerLessonPage'

export default function Lesson3Page() {
  return (
    <BeginnerLessonPage
      lessonId="beginner-3"
      prevHref="/lessons/beginner/2"
      prevLabel="Lesson 02"
      nextHref="/lessons/beginner/4"
      nextLabel="Lesson 04"
    />
  )
}
