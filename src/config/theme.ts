import chalk from 'chalk'
import { newStyle } from '@oakoliver/lipgloss'
import type { Theme } from '@inquirer/core'
import type { PartialDeep } from '@inquirer/type'

// chalk-animation effect names: https://github.com/bokub/chalk-animation
export type HeaderEffect = 'rainbow' | 'pulse' | 'glitch' | 'radar' | 'neon' | 'karaoke'

const BRAND_COLOUR = '#77BEF0'

export const THEME = {
  box: {
    border: BRAND_COLOUR,
  },
  error: '#ff5555',
  header: {
    effect: 'karaoke' as HeaderEffect,
    foreground: BRAND_COLOUR,
    rest: '#ffffff',
    bold: true,
  },
  prompt: {
    accent: BRAND_COLOUR,
  },
} as const

function promptAccent(text: string): string {
  return chalk.hex(THEME.prompt.accent)(text)
}

export const PROMPT_THEME: PartialDeep<Theme> = {
  prefix: {
    idle: promptAccent('?'),
    done: promptAccent('✔'),
  },
  style: {
    highlight: promptAccent,
    answer: promptAccent,
    key: (text: string) => chalk.hex(THEME.prompt.accent).bold(`<${text}>`),
  },
}

export function renderHeader(text: string): string {
  const color = chalk.hex(THEME.header.foreground)
  return THEME.header.bold ? color.bold(text) : color(text)
}

// ponytail: chalk-animation karaoke hardcodes orange; this mirrors its sweep using THEME
export function themedKaraokeFrame(text: string, frame: number): string {
  const chars = (frame % (text.length + 20)) - 10
  const rest = chalk.hex(THEME.header.rest)
  if (chars < 0) return rest(text)
  const highlight = THEME.header.bold
    ? chalk.hex(THEME.header.foreground).bold
    : chalk.hex(THEME.header.foreground)
  return highlight(text.slice(0, chars)) + rest(text.slice(chars))
}

export const errorStyle = newStyle().foreground(THEME.error)
