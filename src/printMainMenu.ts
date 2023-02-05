import clear from 'clear'
import inquirer from 'inquirer'
import boxen from 'boxen'

import type { SectionTitles } from './types'
import { resume } from './resume'
import { printHeader } from './printHeader'
import { printBackOrExit } from './printBackOrExit'
import { printEmptyLine } from './printEmptyLine'

const prompts = {
  type: 'list',
  name: 'options',
  message: 'What do you want to know about me?',
  choices: [...Object.keys(resume), 'Exit']
}

export const printMainMenu = async () => {
  clear()
  await printHeader()
  inquirer.prompt([prompts]).then((answer) => {
    if (answer.options === 'Exit') return

    const option: SectionTitles = answer.options

    printEmptyLine()
    resume[option].forEach((line) => {
      console.log(boxen(line, { padding: 1, title: option }))
    })
    printEmptyLine()
    printBackOrExit()
  })
}
