-- Fix RLS policies for audio_pronunciations table
-- This allows anonymous users to insert, select, update, and delete records

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Enable read access for all users" ON "public"."audio_pronunciations";
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON "public"."audio_pronunciations";
DROP POLICY IF EXISTS "Enable update for authenticated users only" ON "public"."audio_pronunciations";
DROP POLICY IF EXISTS "Enable delete for authenticated users only" ON "public"."audio_pronunciations";

-- Create new permissive policies for anonymous access
CREATE POLICY "Enable read access for all users" ON "public"."audio_pronunciations"
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for all users" ON "public"."audio_pronunciations"
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update for all users" ON "public"."audio_pronunciations"
    FOR UPDATE USING (true);

CREATE POLICY "Enable delete for all users" ON "public"."audio_pronunciations"
    FOR DELETE USING (true);

-- Verify the policies are created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'audio_pronunciations';

-- Test if anonymous users can now insert
-- (This will be tested by our script)
