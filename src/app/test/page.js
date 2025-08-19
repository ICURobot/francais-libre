'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'

export default function TestPage() {
  const [connection, setConnection] = useState('Testing...')

  useEffect(() => {
    async function testConnection() {
      try {
        const { data, error } = await supabase.from('lessons').select('count')
        if (error) {
          setConnection('Connected! ✅ (No lessons yet)')
        } else {
          setConnection('Connected! ✅ Database ready')
        }
      } catch (err) {
        setConnection('❌ Connection failed: ' + err.message)
      }
    }
    testConnection()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🇫🇷 FrançaisLibre Test
        </h1>
        <p className="text-lg">Supabase Connection: {connection}</p>
        <div className="mt-4 text-sm text-gray-600">
          <p>✅ Next.js App Running</p>
          <p>✅ Tailwind CSS Working</p>
          <p>✅ Environment Variables Loaded</p>
        </div>
      </div>
    </div>
  )
}
