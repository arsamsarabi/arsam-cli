import inquirer, { type Answers } from 'inquirer'
import type { MenuChoice, PromptAnswer, BackOrExitAnswer, MenuOption } from '../types.js'

export class PromptManager {
  async prompt<T extends Answers>(choices: MenuChoice): Promise<T> {
    const answer = await inquirer.prompt<T>([choices])
    return answer
  }

  createMainMenuPrompt(options: ReadonlyArray<string>): MenuChoice {
    return {
      type: 'list',
      name: 'options',
      message: 'What do you want to know about me?',
      choices: [...options, 'Exit'],
    }
  }

  createNavigationPrompt(navigationOptions: ReadonlyArray<MenuOption>): MenuChoice {
    return {
      type: 'list',
      name: 'exitBack',
      message: 'Go back or Exit?',
      choices: [...navigationOptions],
    }
  }

  async promptMainMenu(options: ReadonlyArray<string>): Promise<PromptAnswer> {
    const prompt = this.createMainMenuPrompt(options)
    return this.prompt<PromptAnswer>(prompt)
  }

  async promptNavigation(navigationOptions: ReadonlyArray<MenuOption>): Promise<BackOrExitAnswer> {
    const prompt = this.createNavigationPrompt(navigationOptions)
    return this.prompt<BackOrExitAnswer>(prompt)
  }
}
