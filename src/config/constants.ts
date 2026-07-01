import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SectionTitles } from '../types'

function readPackageVersion(): string {
  const here = dirname(fileURLToPath(import.meta.url))
  for (const base of [join(here, '..'), join(here, '../..')]) {
    const file = join(base, 'package.json')
    if (existsSync(file)) {
      return JSON.parse(readFileSync(file, 'utf-8')).version as string
    }
  }
  return '0.0.0'
}

export const APP_CONFIG = {
  name: 'Arsam',
  title: "Arsam's résumé",
  version: readPackageVersion(),
  lastUpdated: 'Mar 2026',
  welcomeMessage: 'Hello 👋 — thanks for stopping by.',
  animationSpeed: 6.5,
  animationDelay: 500,
} as const

export const MENU_OPTIONS = {
  back: '🏠 Main menu',
  exit: '🚫 Exit',
} as const

export const PAGINATION_OPTIONS = {
  older: '◀ Older job',
  newer: '▶ Newer job',
} as const

export const PAGINATED_SECTIONS: ReadonlyArray<SectionTitles> = ['Recent employment']

export const FIGLET_CONFIG = {
  font: 'Small Isometric1',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 120,
  whitespaceBreak: true,
} as const

export const BOX_CONFIG = {
  padding: 1,
  width: 78,
  /** Max chars per line inside a titled round box (boxen wrap limit) */
  textWidth: 70,
} as const
