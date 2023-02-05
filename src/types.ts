import type { ForegroundColorName } from 'chalk'

export type TextColor = ForegroundColorName

export type SectionTitles = 'About' | 'Education' | 'Employment' | 'Tech Stack' | 'Contact'

export type ResumeType = Record<SectionTitles, Array<string>>
