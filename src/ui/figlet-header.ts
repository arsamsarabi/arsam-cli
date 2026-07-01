import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import figlet from 'figlet'
import { FIGLET_CONFIG } from '../config/index.js'

const FONT = FIGLET_CONFIG.font
let loaded = false

function resolveFontFile(): string {
  const here = dirname(fileURLToPath(import.meta.url))
  // ponytail: dist/index.js uses ../fonts; src/ui/*.ts uses ../../fonts in dev
  for (const base of [join(here, '../fonts'), join(here, '../../fonts')]) {
    const file = join(base, `${FONT}.flf`)
    if (existsSync(file)) return file
  }
  throw new Error(`Figlet font not found: ${FONT}.flf`)
}

function ensureFont(): void {
  if (loaded) return
  figlet.parseFont(FONT, readFileSync(resolveFontFile(), 'utf-8'))
  loaded = true
}

export function figletHeader(text: string): string {
  ensureFont()
  return figlet.textSync(text, {
    font: FONT,
    horizontalLayout: FIGLET_CONFIG.horizontalLayout as figlet.KerningMethods,
    verticalLayout: FIGLET_CONFIG.verticalLayout as figlet.KerningMethods,
    width: FIGLET_CONFIG.width,
    whitespaceBreak: FIGLET_CONFIG.whitespaceBreak,
  })
}
