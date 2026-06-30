import type { MENU_OPTIONS } from './config/constants.js'

export type SectionTitles = 'About' | 'Education' | 'Employment' | 'Tech Stack' | 'Contact'

export type ResumeType = Record<SectionTitles, ReadonlyArray<string>>

export type MenuOption = (typeof MENU_OPTIONS)[keyof typeof MENU_OPTIONS]

export interface PromptAnswer {
  readonly options: string
}

export interface BackOrExitAnswer {
  readonly exitBack: MenuOption
}

export interface ResumeSection {
  readonly title: SectionTitles
  readonly content: ReadonlyArray<string>
}
