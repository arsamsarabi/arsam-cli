#!/usr/bin/env node

import inquirer from 'inquirer'
import chalk from 'chalk'
import asciify from 'asciify'
import resume from './data/cv'

const response = colour => text => console.log(chalk[colour](text))
const border = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  console.log(
    chalk.bgBlack.grey('---------------------------------------------------------------------'),
  )

const prompts = {
  type: 'list',
  name: 'options',
  message: 'What do you want to know about me?',
  choices: [...Object.keys(resume), 'Exit'],
}

const resumeHandler = () => {
  inquirer.prompt(prompts).then(answer => {
    if (answer.options === 'Exit') {
      return
    }
    const option = answer.options

    border()
    resume[`${option}`].data.forEach(info => {
      response(resume[`${option}`].style.colour)(`${info}`)
    })
    border()

    inquirer
      .prompt({
        type: 'list',
        name: 'exitBack',
        message: 'Go back or Exit?',
        choices: ['Back', 'Exit'],
      })
      .then(choice => {
        if (choice.exitBack === 'Back') {
          resumeHandler()
        } else {
          return
        }
      })
  })
}

const main = () => {
  asciify('Arsam Sarabi', { font: 'straight' }, (err, res) => {
    console.log(chalk.cyan(res))
    response('green')('Hello! I am Arsam, Welcome to my portfolio!')
    resumeHandler()
  })
}

main()
