import { BeginnerLesson } from './lessonTypes'
import { beginnerLesson1 } from './data/beginner-1'
import { beginnerLesson2 } from './data/beginner-2'
import { beginnerLesson3 } from './data/beginner-3'
import { beginnerLesson4 } from './data/beginner-4'
import { beginnerLesson5 } from './data/beginner-5'
import { beginnerLesson6 } from './data/beginner-6'
import { beginnerLesson7 } from './data/beginner-7'
import { beginnerLesson8 } from './data/beginner-8'
import { beginnerLesson9 } from './data/beginner-9'
import { beginnerLesson10 } from './data/beginner-10'

export const beginnerLessons: BeginnerLesson[] = [
  beginnerLesson1,
  beginnerLesson2,
  beginnerLesson3,
  beginnerLesson4,
  beginnerLesson5,
  beginnerLesson6,
  beginnerLesson7,
  beginnerLesson8,
  beginnerLesson9,
  beginnerLesson10,
]

export const getLessonById = (id: string): BeginnerLesson | undefined => {
  return beginnerLessons.find(lesson => lesson.id === id)
}

export const getBeginnerLessons = (): BeginnerLesson[] => {
  return beginnerLessons.sort((a, b) => a.order - b.order)
}

export const getFreeLessons = (): BeginnerLesson[] => {
  return beginnerLessons.filter(lesson => lesson.is_free)
}
