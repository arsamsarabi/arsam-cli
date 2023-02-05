import inquirer from 'inquirer'
import chalk from 'chalk'
import asciify from 'asciify'

import { resume } from './resume'
import { logWithColor, logBorder } from './utils'
import { SectionTitles } from './types'

const prompts = {
  type: 'list',
  name: 'options',
  message: 'What do you want to know about me?',
  choices: [...Object.keys(resume), 'Exit']
}

const resumeHandler = () => {
  inquirer.prompt([prompts]).then((answer) => {
    if (answer.options === 'Exit') {
      return
    }

    const option: SectionTitles = answer.options

    logBorder()

    resume[option].data.forEach((info) => {
      logWithColor({
        text: info,
        color: resume[option].style.color
      })
    })

    logBorder()

    inquirer
      .prompt({
        type: 'list',
        name: 'exitBack',
        message: 'Go back or Exit?',
        choices: ['Back', 'Exit']
      })
      .then((choice) => {
        if (choice.exitBack === 'Back') {
          resumeHandler()
        } else {
          return
        }
      })
  })
}

export const main = () => {
  asciify('Arsam Sarabi', { font: 'straight' }, (err, res) => {
    console.log(chalk.cyan(res))

    logWithColor({
      text: 'Hello! I am Arsam, Welcome to my portfolio!',
      color: 'green'
    })

    resumeHandler()
  })
}
