'use client'

import BeginnerLessonPage from '../../../../../components/lessons/BeginnerLessonPageRedesign'

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
