import type { ForegroundColorName } from 'chalk'

export type TextColor = ForegroundColorName

export type SectionTitles = 'About' | 'Education' | 'Experience' | 'Tech Stack' | 'Contact'

export type ResumeSection = {
  data: Array<string>
  style: {
    color: TextColor
  }
}

export type ResumeType = Record<SectionTitles, ResumeSection>
