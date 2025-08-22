#!/usr/bin/env node

// Test environment variable loading with explicit path
require('dotenv').config({ path: '.env.local' });

console.log('Environment variables test:');
console.log('ELEVENLABS_API_KEY:', process.env.ELEVENLABS_API_KEY ? 'FOUND' : 'NOT FOUND');
console.log('SUPABASE_URL:', process.env.SUPABASE_URL ? 'FOUND' : 'NOT FOUND');
console.log('SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY ? 'FOUND' : 'NOT FOUND');
console.log('NEXT_PUBLIC_ELEVENLABS_API_KEY:', process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY ? 'FOUND' : 'NOT FOUND');
console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'FOUND' : 'NOT FOUND');
console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'FOUND' : 'NOT FOUND');
