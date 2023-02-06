import inquirer from 'inquirer'

import { mainMenu } from './mainMenu'

const BACK = '🏠 Back'
const EXIT = '🚫 Exit'

export const backOrExit = () => {
  inquirer
    .prompt({
      type: 'list',
      name: 'exitBack',
      message: 'Go back or Exit?',
      choices: [BACK, EXIT]
    })
    .then((choice) => {
      if (choice.exitBack === BACK) {
        mainMenu()
      } else {
        return
      }
    })
}
