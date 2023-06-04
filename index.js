const inquirer = require('inquirer');
const fs =require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter instructions for installation',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions for usage',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select license from the choices',
        choices:[
            'MIT',
            'Apache',
            'Other',
        ]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response=>{
        console.log(response);
    })
}

// Function call to initialize app
init();
