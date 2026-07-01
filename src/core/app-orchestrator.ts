import type { ResumeType, SectionTitles } from '../types.js'
import { PAGINATION_OPTIONS } from '../config/index.js'
import { ResumeService } from './resume-service.js'
import { NavigationService } from './navigation-service.js'
import { PaginationService } from './pagination-service.js'
import { TerminalRenderer } from '../ui/terminal-renderer.js'
import { PromptManager } from '../ui/prompt-manager.js'

export class AppOrchestrator {
  private readonly resumeService: ResumeService
  private readonly navigationService: NavigationService
  private readonly paginationService: PaginationService
  private readonly renderer: TerminalRenderer
  private readonly promptManager: PromptManager

  constructor(resume: ResumeType) {
    this.resumeService = new ResumeService(resume)
    this.navigationService = new NavigationService()
    this.paginationService = new PaginationService()
    this.renderer = new TerminalRenderer()
    this.promptManager = new PromptManager()
  }

  async start(): Promise<void> {
    await this.showMainMenu()
  }

  private async showMainMenu(): Promise<void> {
    try {
      this.renderer.clearScreen()
      await this.renderer.displayHeader()

      const sectionTitles = this.resumeService.getSectionTitles()
      const answer = await this.promptManager.promptMainMenu(sectionTitles as string[])

      if (answer.options === 'Exit') {
        return
      }

      if (this.resumeService.hasSection(answer.options)) {
        await this.handleSectionSelection(answer.options)
      } else {
        this.renderer.displayError('Invalid section selected')
        await this.showMainMenu()
      }
    } catch (error) {
      this.handleError(error)
    }
  }

  private async handleSectionSelection(sectionTitle: SectionTitles): Promise<void> {
    try {
      if (this.resumeService.isPaginatedSection(sectionTitle)) {
        await this.showPaginatedSection(sectionTitle)
        return
      }

      const section = this.resumeService.getSection(sectionTitle)

      if (!section) {
        this.renderer.displayError(`Section "${sectionTitle}" not found`)
        await this.showMainMenu()
        return
      }

      this.renderer.displaySection(section)
      await this.showNavigationMenu()
    } catch (error) {
      this.handleError(error)
    }
  }

  private async showPaginatedSection(sectionTitle: SectionTitles): Promise<void> {
    const total = this.resumeService.getEntryCount(sectionTitle)
    if (total === 0) {
      this.renderer.displayError(`Section "${sectionTitle}" not found`)
      await this.showMainMenu()
      return
    }

    let index = 0
    let firstView = true

    while (true) {
      const entry = this.resumeService.getEntryAt(sectionTitle, index)
      if (!entry) {
        this.renderer.displayError('Entry not found')
        await this.showMainMenu()
        return
      }

      if (!firstView) {
        this.renderer.clearScreen()
      }

      this.renderer.displayPaginatedEntry(
        entry,
        this.paginationService.formatPosition(index, total)
      )
      firstView = false

      const { action } = await this.promptManager.promptPaginatedNavigation()

      if (action === PAGINATION_OPTIONS.older) {
        const next = this.paginationService.goOlder(index, total)
        if (next === null) {
          this.renderer.displayInfo('No older jobs')
        } else {
          index = next
        }
      } else if (action === PAGINATION_OPTIONS.newer) {
        const next = this.paginationService.goNewer(index)
        if (next === null) {
          this.renderer.displayInfo('No newer jobs')
        } else {
          index = next
        }
      } else if (this.navigationService.shouldNavigateBack(action)) {
        await this.showMainMenu()
        return
      } else if (this.navigationService.shouldExit(action)) {
        return
      }
    }
  }

  private async showNavigationMenu(): Promise<void> {
    try {
      const navigationOptions = this.navigationService.getNavigationOptions()
      const choice = await this.promptManager.promptNavigation(navigationOptions)

      if (this.navigationService.shouldNavigateBack(choice.exitBack)) {
        await this.showMainMenu()
      } else if (this.navigationService.shouldExit(choice.exitBack)) {
        return
      }
    } catch (error) {
      this.handleError(error)
    }
  }

  private handleError(error: unknown): void {
    const message = error instanceof Error ? error.message : 'An unknown error occurred'
    this.renderer.displayError(message)
  }
}
