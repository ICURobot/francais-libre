'use client'

import BeginnerLessonPage from '../../../../../components/lessons/BeginnerLessonPage'

export default function Lesson1Page() {
  return (
    <BeginnerLessonPage
      lessonId="beginner-1"
      prevHref="/lessons/beginner"
      prevLabel="A1 Overview"
      nextHref="/lessons/beginner/2"
      nextLabel="Lesson 02"
    />
  )
}
