'use client'

import BeginnerLessonPage from '../../../../../components/lessons/BeginnerLessonPageRedesign'

export default function Lesson4Page() {
  return (
    <BeginnerLessonPage
      lessonId="beginner-4"
      prevHref="/lessons/beginner/3"
      prevLabel="Lesson 03"
      nextHref="/lessons/beginner/5"
      nextLabel="Lesson 05"
    />
  )
}
