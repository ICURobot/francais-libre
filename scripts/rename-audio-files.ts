#!/usr/bin/env tsx

import { readdirSync, renameSync } from 'fs'
import { join } from 'path'

class AudioFileRenamer {
  private backupDir: string

  constructor() {
    this.backupDir = join(process.cwd(), 'audio-backup')
  }

  // Clean filename to be Supabase Storage compatible
  private cleanFileName(fileName: string): string {
    return fileName
      .normalize('NFD') // Decompose accented characters
      .replace(/[\u0300-\u036f]/g, '') // Remove accent marks
      .replace(/[^a-zA-Z0-9._-]/g, '_') // Replace special characters with underscores
      .replace(/_+/g, '_') // Replace multiple underscores with single
      .replace(/^_|_$/g, '') // Remove leading/trailing underscores
  }

  // Rename all audio files
  async renameAllFiles(): Promise<void> {
    try {
      const files = readdirSync(this.backupDir)
      const mp3Files = files.filter(file => file.endsWith('.mp3'))
      
      console.log(`📁 Found ${mp3Files.length} audio files to rename`)
      
      let renamedCount = 0
      let skippedCount = 0
      
      for (const fileName of mp3Files) {
        const cleanName = this.cleanFileName(fileName)
        
        if (cleanName === fileName) {
          console.log(`⏭️  Skipped (already clean): ${fileName}`)
          skippedCount++
          continue
        }
        
        try {
          const oldPath = join(this.backupDir, fileName)
          const newPath = join(this.backupDir, cleanName)
          
          renameSync(oldPath, newPath)
          console.log(`✅ Renamed: ${fileName} → ${cleanName}`)
          renamedCount++
        } catch (error) {
          console.error(`❌ Error renaming ${fileName}:`, error)
        }
      }
      
      console.log('\n🎉 Renaming complete!')
      console.log(`✅ Renamed: ${renamedCount}`)
      console.log(`⏭️  Skipped: ${skippedCount}`)
      console.log(`📁 Total: ${mp3Files.length}`)
      
    } catch (error) {
      console.error('❌ Error scanning backup directory:', error)
      throw error
    }
  }
}

// Main execution
async function main() {
  try {
    const renamer = new AudioFileRenamer()
    await renamer.renameAllFiles()
  } catch (error) {
    console.error('❌ Script failed:', error)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}
