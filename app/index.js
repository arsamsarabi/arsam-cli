#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import asciify from 'asciify';
import resume from './data/cv';

const response = colour => text => console.log(chalk[colour](text));
const border = () => console.log(
  chalk.bgBlack.grey('------------------------------------------------------------------'),
);

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

    border();
    resume[`${option}`].data.forEach((info) => {
      if (option === 'About') {
        response(resume[`${option}`].style.colour)(`${info}`);
      } else {
        response(resume[`${option}`].style.colour)(`| =>  ${info}`);
      }
    });
    border();

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
  asciify('Arsam Sarabi', { font: 'straight' }, (err, res) => {
    console.log(chalk.cyan(res));
    response('green')('Hello! I am Arsam, Welcome to my portfolio!');
    resumeHandler();
  });
};

main();

/* smisome1 smslant straight

[
  "barbwire","basic","bell","big","bigchief",
  "binary","block","bubble","bulbhead","calgphy2","caligraphy","catwalk","chunky",
  "coinstak","colossal","computer","contessa","contrast","cosmic","cosmike","cricket",
  "cursive","cyberlarge","cybermedium","cybersmall","diamond","digital","doh","doom",
  "dotmatrix","drpepper","eftichess","eftifont","eftipiti","eftirobot","eftitalic",
  "eftiwall","eftiwater","epic","fender","fourtops","fuzzy","goofy","gothic","graffiti",
  "hollywood","invita","isometric1","isometric2","isometric3","isometric4","italic",
  "ivrit","jazmine","jerusalem","katakana","kban","larry3d","lcd","lean","letters",
  "linux","lockergnome","madrid","marquee","maxfour","mike","mini","mirror","mnemonic",
  "morse","moscow","nancyj-fancy","nancyj-underlined","o8",
  "ogre","pawp","peaks","pebbles","pepper","poison","puffy","pyramid","relief","relief2",
  "rev","roman","rot13","rounded","rowancap","rozzo","runic","runyc","sblood","script",
  "serifcap","shadow","short","slant","slide","slscript","small",","smkeyboard",
  "smscript","smshadow","speed","starwars", "stellar","stop","term", "tombstone","twopoint", "weird"
]
*/
