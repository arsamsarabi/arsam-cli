#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const resume = require("./data/cv.json");

const response = chalk.bold.green;

const prompts = {
  type: "list",
  name: "options",
  message: "What do you want to know about me?",
  choices: [...Object.keys(resume), "Exit"]
};

function main() {
  console.log(
    "Hello! My name is Arsam Sarabi, I am a Wed developer. Welcome to my CV!"
  );
  resumeHandler();
}

function resumeHandler() {
  inquirer.prompt(prompts).then(answer => {
    if (answer.options === "Exit") {
      return;
    }
    const option = answer.options;

    console.log(response("--------------------------------------"));
    resume[`${option}`].forEach(info => {
      console.log(response("|   => " + info));
    });
    console.log(response("--------------------------------------"));

    inquirer
      .prompt({
        type: "list",
        name: "exitBack",
        message: "Go back or Exit?",
        choices: ["Back", "Exit"]
      })
      .then(choice => {
        if (choice.exitBack == "Back") {
          resumeHandler();
        } else {
          return;
        }
      });
  });
}

main();
