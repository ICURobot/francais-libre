import { readFileSync } from 'fs'
import { join } from 'path'
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function updateJeanMartinAudio() {
  try {
    console.log('🔄 Starting Jean Martin audio update...')

    // First, let's find the current Thomas Martin audio entries
    const { data: currentAudios, error: findError } = await supabase
      .from('audio_pronunciations')
      .select('*')
      .ilike('text', '%Thomas Martin%')
      .order('created_at', { ascending: false })

    if (findError) {
      console.error('❌ Error finding current audio:', findError)
      return
    }

    if (!currentAudios || currentAudios.length === 0) {
      console.log('❌ No current Thomas Martin audio found')
      return
    }

    // Use the most recent entry
    const currentAudio = currentAudios[0]
    console.log(`📋 Found ${currentAudios.length} Thomas Martin audio entries, using the most recent one`)

    console.log('📋 Found current audio entry:', {
      id: currentAudio.id,
      text: currentAudio.text,
      file_name: currentAudio.file_name
    })

    // Read the new audio file
    const audioFilePath = join(process.cwd(), 'audio-backup', 'Enchant_Moi_cest_Jean_Martin_Comment_allezvous_Mylene_French_1755843461962.mp3')
    
    try {
      const audioBuffer = readFileSync(audioFilePath)
      console.log(`📁 Read audio file: ${audioBuffer.length} bytes`)
      
      // Convert to base64
      const base64Audio = audioBuffer.toString('base64')
      
      // Upload to Supabase Storage
      const fileName = 'Enchant_Moi_cest_Jean_Martin_Comment_allezvous_Mylene_French_1755843461962.mp3'
      
      console.log('📤 Uploading new audio file to storage...')
      const { error: uploadError } = await supabase.storage
        .from('audio')
        .upload(fileName, audioBuffer, {
          contentType: 'audio/mpeg',
          cacheControl: '3600',
          upsert: true // This will overwrite if file exists
        })

      if (uploadError) {
        console.error('❌ Storage upload error:', uploadError)
        return
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('audio')
        .getPublicUrl(fileName)

      const publicUrl = urlData.publicUrl
      console.log('🔗 New audio URL:', publicUrl)

      // Update the database entry
      const newText = "Enchanté! Moi, c'est Jean Martin. Comment allez-vous?"
      
      console.log('🔄 Updating database entry...')
      const { data: updatedAudio, error: updateError } = await supabase
        .from('audio_pronunciations')
        .update({
          text: newText,
          audio_url: publicUrl,
          file_name: fileName,
          voice_name: 'Mylene French'
        })
        .eq('id', currentAudio.id)
        .select()
        .single()

      if (updateError) {
        console.error('❌ Database update error:', updateError)
        return
      }

      console.log('✅ Successfully updated Jean Martin audio!')
      console.log('📋 Updated entry:', {
        id: updatedAudio.id,
        text: updatedAudio.text,
        file_name: updatedAudio.file_name,
        audio_url: updatedAudio.audio_url
      })

      // Optionally delete the old audio file from storage
      console.log('🗑️ Cleaning up old audio file...')
      const { error: deleteError } = await supabase.storage
        .from('audio')
        .remove([currentAudio.file_name])

      if (deleteError) {
        console.log('⚠️ Could not delete old file (may not exist):', deleteError.message)
      } else {
        console.log('✅ Old audio file deleted from storage')
      }

    } catch (fileError) {
      console.error('❌ Error reading audio file:', fileError)
      return
    }

  } catch (error) {
    console.error('❌ Update failed:', error)
  }
}

// Run the update
updateJeanMartinAudio()
  .then(() => {
    console.log('🎉 Jean Martin audio update completed!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('💥 Update failed:', error)
    process.exit(1)
  })
