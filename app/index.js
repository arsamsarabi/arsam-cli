#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import resume from './data/cv';

const response = chalk.bold.green;

const prompts = {
  type: 'list',
  name: 'options',
  message: 'What do you want to know about me?',
  choices: [...Object.keys(resume), 'Exit'],
};

const resumeHandler = () => {
  inquirer.prompt(prompts).then((answer) => {
    if (answer.options === 'Exit') {
      return;
    }
    const option = answer.options;

    console.log(response('--------------------------------------'));
    resume[`${option}`].forEach((info) => {
      console.log(response(`|   => ${info}`));
    });
    console.log(response('--------------------------------------'));

    inquirer
      .prompt({
        type: 'list',
        name: 'exitBack',
        message: 'Go back or Exit?',
        choices: ['Back', 'Exit'],
      })
      .then((choice) => {
        if (choice.exitBack === 'Back') {
          resumeHandler();
        } else {
          return;
        }
      });
  });
};

const main = () => {
  console.log('Hello! My name is Arsam Sarabi, I am a Wed developer. Welcome to my CV!');
  resumeHandler();
};

main();
