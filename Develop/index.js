// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  'what is the title of the project',
  'Provide a short description, explaining your project?.',
  'What are the steps required to install your project?',
  'Provide instructions and examples for use.',
  'Enter a guideline for contribution.',
  'Write tests for your application.',
  'Choose a license',
  'Enter your github username',
  'Enter your email',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeContent = markdown(data);
    fs.writeFile(fileName, readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
}
// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      name: 'title',
      message: questions[0],
    },
    {
      type: 'input',
      name: 'description',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'install',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[3],
    },
    {
      type: 'input',
      name: 'contribution',
      message: questions[4],
    },
    {
      type: 'input',
      name: 'test',
      message: questions[5],
    },
    {
      type: 'list',
      name: 'license',
      message: questions[6],
      choices: ['Apache', 'MIT', 'GPL'],
    },
    {
      type: 'input',
      name: 'username',
      message: questions[7],
    },
    {
      type: 'input',
      name: 'email',
      message: questions[8],
    },
  ])
  .then((data) => {
    const fileName = 'Sample.md'
    writeToFile(fileName, data)
  })
}

// Function call to initialize app
init();
