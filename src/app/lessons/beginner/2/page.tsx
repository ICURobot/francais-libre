'use client'

import BeginnerLessonPage from '../../../../../components/lessons/BeginnerLessonPage'

export default function Lesson2Page() {
  return (
    <BeginnerLessonPage
      lessonId="beginner-2"
      prevHref="/lessons/beginner/1"
      prevLabel="Lesson 01"
      nextHref="/lessons/beginner/3"
      nextLabel="Lesson 03"
    />
  )
}
