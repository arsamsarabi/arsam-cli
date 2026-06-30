import type { ResumeType, SectionTitles, ResumeSection } from "../types.js";

export class ResumeService {
  constructor(private readonly resume: ResumeType) {}

  getSectionTitles(): ReadonlyArray<SectionTitles> {
    return Object.keys(this.resume) as ReadonlyArray<SectionTitles>;
  }

  getSection(title: SectionTitles): ResumeSection | null {
    const content = this.resume[title];
    if (!content || content.length === 0) {
      return null;
    }
    return {
      title,
      content,
    };
  }

  getAllSections(): ReadonlyArray<ResumeSection> {
    return this.getSectionTitles()
      .map((title) => this.getSection(title))
      .filter((section): section is ResumeSection => section !== null);
  }

  hasSection(title: string): title is SectionTitles {
    return title in this.resume;
  }
}
