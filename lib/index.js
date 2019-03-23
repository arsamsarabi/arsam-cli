#!/usr/bin/env node
"use strict";

var _inquirer = _interopRequireDefault(require("inquirer"));

var _chalk = _interopRequireDefault(require("chalk"));

var _cv = _interopRequireDefault(require("./data/cv.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var response = _chalk.default.bold.green;
var prompts = {
  type: "list",
  name: "options",
  message: "What do you want to know about me?",
  choices: [].concat(_toConsumableArray(Object.keys(_cv.default)), ["Exit"])
};

var main = function main() {
  console.log("Hello! My name is Arsam Sarabi, I am a Wed developer. Welcome to my CV!");
  resumeHandler();
};

var resumeHandler = function resumeHandler() {
  _inquirer.default.prompt(prompts).then(function (answer) {
    if (answer.options === "Exit") {
      return;
    }

    var option = answer.options;
    console.log(response("--------------------------------------"));

    _cv.default["".concat(option)].forEach(function (info) {
      console.log(response("|   => " + info));
    });

    console.log(response("--------------------------------------"));

    _inquirer.default.prompt({
      type: "list",
      name: "exitBack",
      message: "Go back or Exit?",
      choices: ["Back", "Exit"]
    }).then(function (choice) {
      if (choice.exitBack == "Back") {
        resumeHandler();
      } else {
        return;
      }
    });
  });
};

main();