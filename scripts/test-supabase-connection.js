// Test script to check Supabase connection and database structure
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

async function testSupabaseConnection() {
  console.log('🧪 Testing Supabase connection and database structure...\n')
  
  // Create Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Missing required environment variables')
    console.log('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? 'Set' : 'Missing')
    console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'Set' : 'Missing')
    return
  }
  
  console.log('✅ Environment variables found')
  console.log('Supabase URL:', supabaseUrl)
  console.log('Supabase Key:', supabaseAnonKey.substring(0, 20) + '...')
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey)
  
  try {
    // Test basic connection
    console.log('\n🔌 Testing basic connection...')
    const { data: testData, error: testError } = await supabase
      .from('audio_files')
      .select('*')
      .limit(1)
    
    if (testError) {
      console.log('❌ Table query error:', testError.message)
      console.log('Error details:', testError)
      
      // Check if table exists by trying to list all tables
      console.log('\n📋 Checking available tables...')
      const { data: tables, error: tablesError } = await supabase
        .rpc('get_tables')
        .select('*')
      
      if (tablesError) {
        console.log('❌ Could not list tables:', tablesError.message)
        
        // Try a different approach - check if we can connect at all
        console.log('\n🔍 Testing basic Supabase connection...')
        const { data: healthData, error: healthError } = await supabase
          .from('_dummy_table_that_doesnt_exist_')
          .select('*')
          .limit(1)
        
        if (healthError && healthError.code === 'PGRST116') {
          console.log('✅ Supabase connection working (table just doesn\'t exist)')
        } else {
          console.log('❌ Supabase connection issue:', healthError)
        }
      } else {
        console.log('✅ Available tables:', tables)
      }
    } else {
      console.log('✅ audio_files table exists and is accessible')
      console.log('Sample data:', testData)
    }
    
  } catch (error) {
    console.error('❌ Unexpected error:', error)
  }
}

// Run the test
testSupabaseConnection().catch(console.error)
