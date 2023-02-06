import clear from 'clear'
import inquirer from 'inquirer'
import boxen from 'boxen'

import type { SectionTitles } from '../types'
import { resume } from '../data'
import { backOrExit } from './backOrExit'
import { emptyLine, printHeader } from '../utils'

const prompts = {
  type: 'list',
  name: 'options',
  message: 'What do you want to know about me?',
  choices: [...Object.keys(resume), 'Exit']
}

export const mainMenu = async () => {
  clear()
  await printHeader()
  inquirer.prompt([prompts]).then((answer) => {
    if (answer.options === 'Exit') return

    const option: SectionTitles = answer.options

    emptyLine()
    resume[option].forEach((line) => {
      console.log(boxen(line, { padding: 1, title: option }))
    })
    emptyLine()
    backOrExit()
  })
}
