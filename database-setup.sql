-- Database setup for audio pronunciations
-- Run this in your Supabase SQL Editor

-- Create the audio_pronunciations table
CREATE TABLE IF NOT EXISTS audio_pronunciations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  text TEXT NOT NULL,
  audio_url TEXT NOT NULL,
  voice_id TEXT NOT NULL,
  voice_name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('vocabulary', 'dialogue', 'pronunciation')),
  lesson_id TEXT,
  file_name TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_audio_text ON audio_pronunciations(text);
CREATE INDEX IF NOT EXISTS idx_audio_category ON audio_pronunciations(category);
CREATE INDEX IF NOT EXISTS idx_audio_lesson ON audio_pronunciations(lesson_id);
CREATE INDEX IF NOT EXISTS idx_audio_voice ON audio_pronunciations(voice_id);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plsql';

-- Add updated_at column if you want to track modifications
ALTER TABLE audio_pronunciations ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS update_audio_pronunciations_updated_at ON audio_pronunciations;
CREATE TRIGGER update_audio_pronunciations_updated_at
    BEFORE UPDATE ON audio_pronunciations
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE audio_pronunciations ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (since audio files are public)
CREATE POLICY "Public read access for audio pronunciations" ON audio_pronunciations
    FOR SELECT USING (true);

-- Create policy for authenticated users to insert/update/delete
CREATE POLICY "Authenticated users can manage audio pronunciations" ON audio_pronunciations
    FOR ALL USING (auth.role() = 'authenticated');

-- Insert some sample data for testing (optional)
-- INSERT INTO audio_pronunciations (text, audio_url, voice_id, voice_name, category, file_name) 
-- VALUES 
--   ('bonjour', 'https://example.com/bonjour.mp3', 'WQKwBV2Uzw1gSGr69N8I', 'Mylène French', 'vocabulary', 'bonjour_mylene_test.mp3');

-- Grant necessary permissions
GRANT SELECT ON audio_pronunciations TO anon;
GRANT ALL ON audio_pronunciations TO authenticated;

-- Show the table structure
SELECT 
  column_name, 
  data_type, 
  is_nullable, 
  column_default
FROM information_schema.columns 
WHERE table_name = 'audio_pronunciations' 
ORDER BY ordinal_position;
