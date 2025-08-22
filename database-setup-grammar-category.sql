-- Fix the audio_pronunciations category constraint to allow 'grammar' category
-- This will allow us to store grammar examples in the database

-- First, drop the existing constraint
ALTER TABLE public.audio_pronunciations 
DROP CONSTRAINT IF EXISTS audio_pronunciations_category_check;

-- Then recreate it with 'grammar' included
ALTER TABLE public.audio_pronunciations 
ADD CONSTRAINT audio_pronunciations_category_check 
CHECK (category IN ('vocabulary', 'dialogue', 'pronunciation', 'grammar'));

-- Verify the change
SELECT conname, pg_get_constraintdef(oid) 
FROM pg_constraint 
WHERE conrelid = 'public.audio_pronunciations'::regclass 
AND conname = 'audio_pronunciations_category_check';
