const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');


// Questions
const promptUser = () => {
    return inquirer.prompt([
// Title of Project
        {
            type: 'input',
            name: 'title',
            message: 'Enter Project Name',
        },
// Project Description
        {
            type: 'input',
            name: 'description',
            message: 'Describe Project',
        },
// Installation
        {
            type: 'input',
            name: 'installation',
            message: 'Enter Installation Instructions',
        },
// Contributors
        {
            type: 'input',
            name: 'contributor',
            message: 'List Contributors to this Project',
        },
// Tests 
        {
            type: 'input',
            name: 'test',
            message: 'What is being Tested?',
        },
// GitHub Username
        {
            type: 'input',
            name: 'username',
            message: "Enter GitHub Username",
        },
// Email Address
        {
            type: 'input',
            name: 'email',
            message: 'Enter Email Address',
        },
// Licenses
        {
            type: 'list',
            name: 'license',
            message: 'What License is Used?',
            choices: ['MIT', 'The Unlincense', 'Apache 2.0'],
            default: 'MIT',
        },
    ]);
};

// Function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFileSync(fileName, data, err => {
        if (err) {
            console.error(err);
        } 
    });
};

// Call to Initialize
promptUser()
    .then((data) => {
        const markdown = generateMarkdown(data);
        writeToFile('./example/README.md', markdown);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in the current enviroment")
        } else {
            console.error('Something went wrong', error)
        }
    });