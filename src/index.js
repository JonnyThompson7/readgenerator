// TODO: Include packages needed for this application
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

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
// Licenses
        {
            type: 'checkbox',
            name: 'license',
            message: 'What Licenses are Used?',
            choices: ['MIT', 'The Unlincense', 'Apache 2.0'],
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
        }
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
// Function to initialize app
function init() {
//     inquirer.promptUser().then((data) => {
//         console.log(JSON.stringify(data, null, ''));
//         data.getLicense = getLicense(data.license);
//         writeToFile("./example/README.md", data);
//     });
};

// // Call to initialize app
init();

// Call to Use Answers on generateMarkdown
promptUser()
    .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('./README.md', markdown);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in the current enviroment")
        } else {
            console.error('Something went wrong', error)
        }
    });