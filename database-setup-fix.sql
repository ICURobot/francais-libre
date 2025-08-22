-- Fix for Row Level Security policy issue
-- Run this in your Supabase SQL Editor

-- Drop the existing restrictive policy
DROP POLICY IF EXISTS "Authenticated users can manage audio pronunciations" ON audio_pronunciations;

-- Create a new policy that allows anonymous users to insert
CREATE POLICY "Allow anonymous inserts for audio pronunciations" ON audio_pronunciations
    FOR INSERT WITH CHECK (true);

-- Create a policy that allows anonymous users to select
CREATE POLICY "Allow anonymous selects for audio pronunciations" ON audio_pronunciations
    FOR SELECT USING (true);

-- Create a policy that allows anonymous users to update
CREATE POLICY "Allow anonymous updates for audio pronunciations" ON audio_pronunciations
    FOR UPDATE USING (true);

-- Create a policy that allows anonymous users to delete
CREATE POLICY "Allow anonymous deletes for audio pronunciations" ON audio_pronunciations
    FOR DELETE USING (true);

-- Alternative: If you prefer to disable RLS completely, uncomment this line:
-- ALTER TABLE audio_pronunciations DISABLE ROW LEVEL SECURITY;

-- Verify the policies are created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'audio_pronunciations';
