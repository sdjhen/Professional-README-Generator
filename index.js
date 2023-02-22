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
    name: 'title',
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
    name: 'Installation',
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
    choices: ['MIT', 'GPL', 'BSD', 'APACHE', 'NONE'],
    name: 'License',
    message: 'What is your project license type?',
  },
  // Credits
  {
    type: 'input',
    name: 'Credits',
    message: 'Are there any other contributers to the project?',
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
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Success!');
    }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    // User feedback
    console.log(answers);
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  });
}

// function call to initialize program
init();
