// Test script for Lesson 8 filename cleaning
// This tests the filename generation without actually calling APIs

function testFilenameCleaning() {
  console.log('🧪 Testing Lesson 8 filename cleaning for Supabase compatibility...\n')
  
  // Test cases with French text that might cause issues
  const testCases = [
    // Dialogue examples
    "Bonjour Thomas ! Tu habites ici avec ta famille ?",
    "Oui, j'habite avec mes parents. Mon père travaille comme médecin.",
    "Ma mère parle trois langues. Elle enseigne l'anglais à l'université.",
    "Formidable ! Moi, je parle français et italien. Ma famille est italienne.",
    
    // Grammar examples
    "Je parle français avec mes amis.",
    "Tu habites dans une belle maison.",
    "Il travaille comme ingénieur.",
    "Nous étudions ensemble.",
    "Vous aimez la cuisine française.",
    "Ils parlent plusieurs langues.",
    
    // Conjugation
    "parle",
    "parles",
    "parlons",
    "parlez",
    "parlent",
    
    // Vocabulary words
    "habiter",
    "parler",
    "travailler",
    "aimer",
    "étudier",
    "enseigner",
    "la famille",
    "les parents",
    "le père",
    "la mère",
    "le médecin",
    "l'enseignant(e)",
    "français(e)",
    "italien(ne)",
    "la langue",
    "l'université",
    
    // Vocabulary examples
    "J'habite à Paris avec ma famille.",
    "Je parle français et anglais.",
    "Mon père travaille comme médecin.",
    "J'aime beaucoup étudier les langues.",
    "Nous étudions le français ensemble.",
    "Ma mère enseigne l'anglais à l'université.",
    "Ma famille est très importante pour moi.",
    "Mes parents habitent à Lyon.",
    "Mon père est médecin.",
    "Ma mère parle trois langues.",
    "Le médecin travaille à l'hôpital.",
    "L'enseignante est très patiente.",
    "Je suis française et ma famille est italienne.",
    "Ma grand-mère est italienne.",
    "J'aime apprendre de nouvelles langues.",
    "L'université de Paris est très prestigieuse."
  ]
  
  console.log('📋 Test Results:')
  console.log('=' * 80)
  
  testCases.forEach((text, index) => {
    const cleaned = cleanTextForFilename(text)
    const fileName = `lesson8_test_${cleaned}_andre_${Date.now()}.mp3`
    
    console.log(`${index + 1}. Original: "${text}"`)
    console.log(`   Cleaned: "${cleaned}"`)
    console.log(`   Filename: "${fileName}"`)
    console.log(`   Length: ${fileName.length} chars`)
    console.log(`   Valid: ${isValidSupabaseFilename(fileName)}`)
    console.log('')
  })
  
  console.log('✅ Filename cleaning test complete!')
}

function cleanTextForFilename(text) {
  return text
    .normalize('NFD')                    // Decompose accented characters
    .replace(/[\u0300-\u036f]/g, '')    // Remove diacritics (accents)
    .replace(/[^a-zA-Z0-9\s]/g, '')     // Remove all special characters except letters, numbers, spaces
    .replace(/\s+/g, '_')                // Replace spaces with underscores
    .replace(/_+/g, '_')                 // Replace multiple underscores with single
    .replace(/^_|_$/g, '')               // Remove leading/trailing underscores
    .toLowerCase()                        // Convert to lowercase
    .substring(0, 25)                    // Limit to 25 chars to leave room for prefix/suffix
}

function isValidSupabaseFilename(filename) {
  // Supabase filename requirements:
  // - No special characters except: letters, numbers, hyphens, underscores, dots
  // - No spaces
  // - No leading/trailing dots or hyphens
  // - Reasonable length
  
  const validPattern = /^[a-zA-Z0-9._-]+$/
  const noLeadingTrailing = !/^[._-]|[._-]$/.test(filename)
  const reasonableLength = filename.length <= 100
  
  return validPattern.test(filename) && noLeadingTrailing && reasonableLength
}

// Run the test
testFilenameCleaning()
