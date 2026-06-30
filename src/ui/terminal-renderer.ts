import clear from 'clear'
import figlet from 'figlet'
import boxen from 'boxen'
import chalkAnimation from 'chalk-animation'
import type { ResumeSection } from '../types.js'
import {
  APP_CONFIG,
  FIGLET_CONFIG,
  BOX_CONFIG,
  THEME,
  errorStyle,
  renderHeader,
  themedKaraokeFrame,
} from '../config/index.js'

function normalizeContent(content: string): string {
  const lines = content.split('\n').map((line) => line.trimEnd())
  const nonEmpty = lines.filter((line) => line.trim().length > 0)
  if (nonEmpty.length === 0) return ''

  const indent = Math.min(...nonEmpty.map((line) => line.match(/^(\s*)/)?.[1]?.length ?? 0))

  return lines
    .map((line) => (line.trim().length === 0 ? '' : line.slice(indent).trimEnd()))
    .join('\n')
    .trim()
}

export class TerminalRenderer {
  clearScreen(): void {
    clear()
  }

  emptyLine(): void {
    console.log('')
  }

  private renderBox(content: string, title?: string): string {
    return boxen(normalizeContent(content), {
      padding: BOX_CONFIG.padding,
      borderStyle: 'round',
      borderColor: THEME.box.border,
      ...(title ? { title, titleAlignment: 'left' as const } : {}),
    })
  }

  private async sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  private runHeaderAnimation(text: string): { lines: number; stop: () => void } {
    if (THEME.header.effect !== 'karaoke') {
      return chalkAnimation[THEME.header.effect](text, APP_CONFIG.animationSpeed)
    }

    const lineTexts = text.split(/\r\n|\r|\n/)
    const lines = lineTexts.length
    const frameDelay = 50 / APP_CONFIG.animationSpeed
    let frame = 0
    let stopped = false
    let initialized = false
    let timer: ReturnType<typeof setTimeout> | undefined

    const render = (): void => {
      if (!initialized) {
        console.log('\n'.repeat(lines - 1))
        initialized = true
      }
      frame++
      const rendered = lineTexts.map((line) => themedKaraokeFrame(line, frame)).join('\n')
      // match chalk-animation: log() adds newline so cursor sits below the art for redraw
      console.log(`\u001B[${lines}F\u001B[G\u001B[2K${rendered}`)
      if (!stopped) timer = setTimeout(render, frameDelay)
    }

    timer = setTimeout(render, frameDelay)
    return {
      lines,
      stop() {
        stopped = true
        if (timer) clearTimeout(timer)
      },
    }
  }

  async displayHeader(): Promise<void> {
    const titleText = figlet.textSync(APP_CONFIG.name, {
      font: FIGLET_CONFIG.font as figlet.Fonts,
      horizontalLayout: FIGLET_CONFIG.horizontalLayout as figlet.KerningMethods,
      verticalLayout: FIGLET_CONFIG.verticalLayout as figlet.KerningMethods,
      width: FIGLET_CONFIG.width,
      whitespaceBreak: FIGLET_CONFIG.whitespaceBreak,
    })

    this.emptyLine()
    const animation = this.runHeaderAnimation(titleText)
    await this.sleep(APP_CONFIG.animationDelay)
    animation.stop()
    console.log(`\u001B[${animation.lines}F\u001B[G\u001B[2K${renderHeader(titleText)}`)
    this.emptyLine()

    console.log(
      this.renderBox(
        `${APP_CONFIG.welcomeMessage}\n(updated ${APP_CONFIG.lastUpdated})`,
        APP_CONFIG.title
      )
    )

    this.emptyLine()
    this.emptyLine()
  }

  displaySection(section: ResumeSection): void {
    this.emptyLine()

    const entries = section.content.map((entry) => normalizeContent(entry)).filter(Boolean)
    const multi = entries.length > 1

    for (const entry of entries) {
      const lines = entry.split('\n')
      const title = multi ? lines[0]! : section.title
      const body = multi ? lines.slice(1).join('\n').trim() || entry : entry
      console.log(this.renderBox(body, title))
    }

    this.emptyLine()
  }

  displayError(message: string): void {
    console.log(errorStyle.render(`✗ Error: ${message}`))
  }
}
