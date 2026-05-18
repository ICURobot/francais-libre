export interface DialogueExchange {
  speaker: string
  french: string
  english: string
  pronunciation?: string
  cultural_note?: string
}

export interface Dialogue {
  title: string
  context: string
  exchanges: DialogueExchange[]
  cultural_notes?: string[]
  vocabulary_highlights?: string[]
}

export interface ConjugationRow {
  pronoun: string
  form: string
  pronunciation: string
}

export interface ConjugationTable {
  verb: string
  tense?: string
  rows: ConjugationRow[]
}

export interface GrammarRule {
  topic: string
  explanation: string
  examples: {
    french: string
    english: string
    pronunciation?: string
    highlight?: string
  }[]
  patterns: string[]
  conjugation_tables?: ConjugationTable[]
  tip?: string
}

export interface VocabularyItem {
  word: string
  translation: string
  pronunciation?: string
  gender?: 'masculine' | 'feminine' | 'invariable'
  example_sentence: string
  example_translation: string
  category?: string
}

export interface MultipleChoiceExercise {
  id: string
  type: 'multiple_choice'
  question: string
  options: string[]
  correct_answer: string
  explanation: string
  hints?: string[]
}

export interface FillBlankExercise {
  id: string
  type: 'fill_blank'
  question: string
  options?: string[]
  correct_answer: string | string[]
  explanation: string
  hints?: string[]
}

export interface TranslationExercise {
  id: string
  type: 'translation'
  question: string
  direction?: 'en_to_fr' | 'fr_to_en'
  options?: string[]
  correct_answer: string | string[]
  explanation: string
  hints?: string[]
}

export interface MatchingExercise {
  id: string
  type: 'matching'
  question: string
  pairs: { french: string; english: string }[]
  correct_answer?: string | string[]
  explanation: string
}

export interface ConjugationExercise {
  id: string
  type: 'conjugation'
  question: string
  verb: string
  correct_answer: ConjugationRow[] | string
  translations?: Record<string, string>
  explanation: string
}

export interface TransformationExercise {
  id: string
  type: 'transformation'
  question: string
  instruction: 'affirmative_to_negative' | 'singular_to_plural' | 'masculine_to_feminine' | 'informal_to_formal'
  items: {
    original: string
    transformed: string
    translation: string
  }[]
  explanation: string
}

export interface GenderSortExercise {
  id: string
  type: 'gender_sort'
  question: string
  items: {
    word: string
    gender: 'masculine' | 'feminine'
    article: string
  }[]
  explanation: string
}

export interface SpeakingPromptExercise {
  id: string
  type: 'speaking_prompt'
  question: string
  model_answer: string
  translation: string
  tip?: string
}

export interface LegacySpeakingExercise {
  id: string
  type: 'speaking'
  question: string
  correct_answer: string | string[]
  explanation: string
  hints?: string[]
  [legacyField: string]: unknown
}

export interface ErrorCorrectionExercise {
  id: string
  type: 'error_correction'
  question: string
  items: {
    incorrect: string
    correct: string
    explanation: string
  }[]
}

export interface TenseChoiceExercise {
  id: string
  type: 'tense_choice'
  question: string
  explanation?: string
  items: {
    sentence: string
    verb: string
    options: string[]
    correct_answer: string
    explanation: string
  }[]
}

export interface MoodChoiceExercise {
  id: string
  type: 'mood_choice'
  question: string
  items: {
    sentence: string
    verb: string
    indicative_form: string
    subjunctive_form: string
    correct_answer: 'indicative' | 'subjunctive'
    trigger?: string
    explanation: string
  }[]
}

export interface RewriteExercise {
  id: string
  type: 'rewrite'
  question: string
  instruction_type: 'reported_speech' | 'passive' | 'si_clause' | 'relative_clause' | 'causative' | 'gerund'
  items: {
    original: string
    expected: string
    hint?: string
    explanation: string
  }[]
}

export interface RegisterSortExercise {
  id: string
  type: 'register_sort'
  question: string
  categories: string[]
  items: {
    expression: string
    correct_category: string
    explanation: string
  }[]
}

export interface ArgumentationExercise {
  id: string
  type: 'argumentation'
  question: string
  structure: {
    label: string
    instruction: string
    model?: string
    connector_hints?: string[]
  }[]
  word_count_target?: number
}

export type Exercise =
  | MultipleChoiceExercise
  | FillBlankExercise
  | TranslationExercise
  | MatchingExercise
  | ConjugationExercise
  | TransformationExercise
  | GenderSortExercise
  | SpeakingPromptExercise
  | LegacySpeakingExercise
  | ErrorCorrectionExercise
  | TenseChoiceExercise
  | MoodChoiceExercise
  | RewriteExercise
  | RegisterSortExercise
  | ArgumentationExercise

export interface BeginnerLesson {
  id: string
  title: string
  title_fr: string
  subtitle: string
  level: 'A1'
  cefr_skills: ('listening' | 'speaking' | 'reading' | 'writing')[]
  order: number
  estimated_time: number
  learning_objectives: string[]
  prerequisite_lessons?: string[]
  dialogue: Dialogue
  grammar: GrammarRule
  vocabulary: VocabularyItem[]
  exercises: Exercise[]
  tags: string[]
  difficulty: 1 | 2 | 3 | 4 | 5
  is_free: boolean
  completion_criteria: {
    min_exercises_correct: number
    required_sections: ('dialogue' | 'grammar' | 'vocabulary' | 'exercises')[]
  }
}

export interface UserProgress {
  lesson_id: string
  user_id: string
  started_at: Date
  completed_at?: Date
  completion_percentage: number
  exercises_completed: string[]
  exercises_correct: string[]
  time_spent: number
  current_section: 'dialogue' | 'grammar' | 'vocabulary' | 'exercises'
}
