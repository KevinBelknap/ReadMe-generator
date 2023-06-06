const inquirer = require('inquirer');
const fs =require('fs');
//these are the questions that will be asked
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
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter instructions for how others can contribute to your project: '
    },        
    {
        type: 'input',
        name: 'tests',
        message: 'Enter tests within your project: '
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide your email address so users can ask you questions.',
    },       
     {
        type: 'input',
        name: 'Email',
        message: 'Enter an email where questions can be submitted: '
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
