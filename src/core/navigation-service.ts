import type { MenuOption } from '../types.js'
import { MENU_OPTIONS } from '../config/index.js'

export class NavigationService {
  isBackOption(choice: string): boolean {
    return choice === MENU_OPTIONS.back
  }

  isExitOption(choice: string): boolean {
    return choice === MENU_OPTIONS.exit
  }

  shouldNavigateBack(choice: MenuOption): boolean {
    return this.isBackOption(choice)
  }

  shouldExit(choice: MenuOption): boolean {
    return this.isExitOption(choice)
  }

  getNavigationOptions(): ReadonlyArray<MenuOption> {
    return [MENU_OPTIONS.back, MENU_OPTIONS.exit]
  }
}
