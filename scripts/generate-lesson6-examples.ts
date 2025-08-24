import { audioService } from '../lib/services/audioService'
import { beginnerLessons } from '../lib/lessons/lessonData'

async function generateLesson6Examples() {
  console.log('🎵 Generating audio for Lesson 6 grammar examples...')
  
  const lesson = beginnerLessons.find(l => l.id === 'beginner-6')
  if (!lesson) {
    console.error('❌ Lesson 6 not found')
    return
  }

  console.log(`📚 Processing lesson: ${lesson.title}`)
  
  // Generate audio for grammar examples
  if (lesson.grammar && lesson.grammar.examples) {
    console.log(`\n🔊 Generating audio for ${lesson.grammar.examples.length} grammar examples...`)
    
    for (let i = 0; i < lesson.grammar.examples.length; i++) {
      const example = lesson.grammar.examples[i]
      console.log(`\n${i + 1}. Processing: "${example.french}"`)
      
      try {
        // Check if audio already exists
        const existingAudio = await audioService.getAudioInfo(example.french)
        if (existingAudio) {
          console.log(`   ✅ Audio already exists: ${existingAudio.file_name}`)
          continue
        }

        // Generate audio with Andre's voice (male)
        console.log(`   🎤 Generating audio with Andre's voice...`)
        const success = await audioService.playAudio(example.french, {
          voicePreference: 'male',
          fallbackToTTS: true
        })

        if (success) {
          console.log(`   ✅ Audio generated successfully`)
        } else {
          console.log(`   ❌ Failed to generate audio`)
        }

        // Add a small delay between requests
        await new Promise(resolve => setTimeout(resolve, 1000))
        
      } catch (error) {
        console.error(`   ❌ Error processing example ${i + 1}:`, error)
      }
    }
  }

  // Generate audio for conjugation table
  if (lesson.grammar && lesson.grammar.conjugation_table) {
    console.log(`\n🔊 Generating audio for ${lesson.grammar.conjugation_table.length} conjugation forms...`)
    
    for (let i = 0; i < lesson.grammar.conjugation_table.length; i++) {
      const conjugation = lesson.grammar.conjugation_table[i]
      console.log(`\n${i + 1}. Processing: "${conjugation.form}"`)
      
      try {
        // Check if audio already exists
        const existingAudio = await audioService.getAudioInfo(conjugation.form)
        if (existingAudio) {
          console.log(`   ✅ Audio already exists: ${existingAudio.file_name}`)
          continue
        }

        // Generate audio with Andre's voice (male)
        console.log(`   🎤 Generating audio with Andre's voice...`)
        const success = await audioService.playAudio(conjugation.form, {
          voicePreference: 'male',
          fallbackToTTS: true
        })

        if (success) {
          console.log(`   ✅ Audio generated successfully`)
        } else {
          console.log(`   ❌ Failed to generate audio`)
        }

        // Add a small delay between requests
        await new Promise(resolve => setTimeout(resolve, 1000))
        
      } catch (error) {
        console.error(`   ❌ Error processing conjugation ${i + 1}:`, error)
      }
    }
  }

  console.log('\n🎉 Lesson 6 audio generation complete!')
}

// Run the script
generateLesson6Examples().catch(console.error)
