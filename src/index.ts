#!/usr/bin/env node

import { AppOrchestrator } from './core/index.js'
import { resume } from './data/index.js'

async function main(): Promise<void> {
  try {
    const app = new AppOrchestrator(resume)
    await app.start()
  } catch (error) {
    console.error('Fatal error:', error instanceof Error ? error.message : 'Unknown error')
    process.exit(1)
  }
}

main()
