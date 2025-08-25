// This file defines the TypeScript interfaces for the lesson content and user progress.
// By defining these shapes, we ensure that data is consistent throughout the application.

export interface DialogueExchange {
    speaker: string;
    french: string;
    english: string;
    pronunciation?: string;
    cultural_note?: string;
  }
  
  export interface Dialogue {
    title: string;
    context: string;
    exchanges: DialogueExchange[];
    cultural_notes?: string[];
    vocabulary_highlights?: string[];
  }
  
  export interface GrammarRule {
    topic: string;
    explanation: string;
    examples: {
      french: string;
      english: string;
      highlight?: string;
    }[];
    patterns: string[];
    conjugation_table?: {
      pronoun: string;
      form: string;
      pronunciation?: string;
    }[];
  }
  
  export interface VocabularyItem {
    word: string;
    translation: string;
    pronunciation?: string;
    example_sentence: string;
    example_translation: string;
    category?: string;
  }
  
  export interface Exercise {
  id: string;
  type: 'multiple_choice' | 'fill_blank' | 'translation' | 'matching' | 'speaking' | 'conjugation' | 'negation_transformation' | 'fill_blank_negation' | 'vocabulary_match';
  question: string;
  options?: string[];
  correct_answer: string | string[];
  explanation: string;
  hints?: string[];
  audio_prompt?: string;
  verb?: string;
  translations?: Record<string, string>;
  exercises?: Array<{
    positive: string;
    negative: string;
    translation: string;
  }>;
  sentences?: Array<{
    sentence: string;
    blanks: string[];
    translation: string;
  }>;
  pairs?: Array<{
    french: string;
    english: string;
  }>;
}
  
  export interface BeginnerLesson {
    id: string;
    title: string;
    subtitle: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    order: number;
    estimated_time: number; // in minutes
    learning_objectives: string[];
    prerequisite_lessons?: string[];
  
    // Content phases
    dialogue?: Dialogue;
    grammar: GrammarRule;
    vocabulary: VocabularyItem[];
    exercises: Exercise[];
  
    // Metadata
    tags: string[];
    difficulty: 1 | 2 | 3 | 4 | 5;
    is_free: boolean;
    completion_criteria: {
      min_exercises_correct: number;
      required_sections: string[];
    };
  }
  
  export interface UserProgress {
    lesson_id: string;
    user_id: string;
    started_at: Date;
    completed_at?: Date;
    completion_percentage: number;
    exercises_completed: string[];
    exercises_correct: string[];
    time_spent: number; // in seconds
    current_section: 'dialogue' | 'grammar' | 'vocabulary' | 'exercises';
  }
  