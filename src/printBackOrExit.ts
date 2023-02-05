import inquirer from 'inquirer'

import { printMainMenu } from './printMainMenu'

const BACK = '🏠 Back'
const EXIT = '🚫 Exit'

export const printBackOrExit = () => {
  inquirer
    .prompt({
      type: 'list',
      name: 'exitBack',
      message: 'Go back or Exit?',
      choices: [BACK, EXIT]
    })
    .then((choice) => {
      if (choice.exitBack === BACK) {
        printMainMenu()
      } else {
        return
      }
    })
}
