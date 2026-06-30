import { select } from '@inquirer/prompts'
import { PROMPT_THEME } from '../config/theme.js'
import type { PromptAnswer, BackOrExitAnswer, MenuOption } from '../types.js'

export class PromptManager {
  async promptMainMenu(options: ReadonlyArray<string>): Promise<PromptAnswer> {
    const choice = await select({
      message: 'What do you want to know about me?',
      choices: [...options, 'Exit'],
      theme: PROMPT_THEME,
    })
    return { options: choice }
  }

  async promptNavigation(navigationOptions: ReadonlyArray<MenuOption>): Promise<BackOrExitAnswer> {
    const choice = await select({
      message: 'Go back or Exit?',
      choices: navigationOptions,
      theme: PROMPT_THEME,
    })
    return { exitBack: choice }
  }
}
