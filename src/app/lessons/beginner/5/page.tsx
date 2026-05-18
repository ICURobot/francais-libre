'use client'

import BeginnerLessonPage from '../../../../../components/lessons/BeginnerLessonPage'

export default function Lesson5Page() {
  return (
    <BeginnerLessonPage
      lessonId="beginner-5"
      prevHref="/lessons/beginner/4"
      prevLabel="Lesson 04"
      nextHref="/lessons/beginner/6"
      nextLabel="Lesson 06"
    />
  )
}
