import type { ResumeType, SectionTitles, ResumeSection } from '../types.js'
import { PAGINATED_SECTIONS } from '../config/index.js'

export class ResumeService {
  constructor(private readonly resume: ResumeType) {}

  getSectionTitles(): ReadonlyArray<SectionTitles> {
    return Object.keys(this.resume) as ReadonlyArray<SectionTitles>
  }

  getSection(title: SectionTitles): ResumeSection | null {
    const content = this.resume[title]
    if (!content || content.length === 0) {
      return null
    }
    return {
      title,
      content,
    }
  }

  hasSection(title: string): title is SectionTitles {
    return title in this.resume
  }

  isPaginatedSection(title: SectionTitles): boolean {
    return (PAGINATED_SECTIONS as ReadonlyArray<string>).includes(title)
  }

  getEntryCount(title: SectionTitles): number {
    return this.resume[title]?.length ?? 0
  }

  getEntryAt(title: SectionTitles, index: number): string | null {
    return this.resume[title]?.[index] ?? null
  }
}
