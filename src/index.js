// TODO: Include packages needed for this application
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter Project Name'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe Project'
        }
    ]);
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFileSync(fileName, data, err => {
        if (err) {
            console.error(err);
        } 
    });
};
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


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