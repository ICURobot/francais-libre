#!/usr/bin/env tsx

console.log('🔍 Environment variables debug:')
console.log('SUPABASE_URL:', process.env.SUPABASE_URL)
console.log('SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY ? 'FOUND' : 'NOT FOUND')
console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'FOUND' : 'NOT FOUND')

// Try to load dotenv
try {
  const dotenv = require('dotenv')
  console.log('✅ dotenv loaded successfully')
  
  const result = dotenv.config({ path: '.env.local' })
  console.log('dotenv config result:', result)
  
  console.log('After dotenv load:')
  console.log('SUPABASE_URL:', process.env.SUPABASE_URL)
  console.log('SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY ? 'FOUND' : 'NOT FOUND')
  
} catch (error) {
  console.error('❌ dotenv error:', error)
}
