const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');

// array of questions for user
const questions = [
  // Title
  {
    type: 'input',
    name: 'name',
    message: 'Hello! Please choose the name of your project?',
  },
  // Description
  {
    type: 'input',
    name: 'Description',
    message: 'Now, please add a description of your project.',
  },
  // Installation guide
  {
    type: 'input',
    name: 'Installation Guide',
    message: 'Do you have any installation instructions for your project?',
  },
  // Usage
  {
    type: 'input',
    name: 'Usage',
    message: 'Can you provide a guide for how your project should be used?',
  },
  // License
  {
    type: 'list',
    choices: ['MIT', 'GPL', 'BSD', 'APACHE'],
    name: 'license',
    message: 'What is your project license type?',
  },
  // Contributions
  {
    type: 'input',
    name: 'Contributions',
    message: 'Hello! Please choose the name of your project?',
  },
  // Tests
  {
    type: 'input',
    name: 'Tests',
    message: 'How should the project be tested?',
  },
  // Questions
  {
    type: 'input',
    name: 'Questions',
    message: 'Is there any additional questions?',
  },
  // Github Username
  {
    type: 'input',
    name: 'Github',
    message: 'What is your Github Username? @[username]',
  },
  // Email
  {
    type: 'input',
    name: 'Email',
    message: 'What is your Email?',
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    // User feedback
    console.log(answers);
    const markdown = generateMarkdown(answers);
  });
}

// function call to initialize program
init();
