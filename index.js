// Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your README',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description of your project',
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'Enter the installation instructions',
        },
        {
            type: 'input',
            name: 'usageInformation',
            message: 'Enter the usage information',
        },
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'Enter the contribution guidelines',
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Enter the test instructions',
        },
        {
            type: 'list',
            choices: [
                "None",
                "Apache License 2.0",
                "BSD 3-Clause 'New' or 'Revised' license",
                "BSD 2-Clause 'Simplified' or 'FreeBSD' license",
                "GNU General Public License (GPL)",
                "GNU Library or 'Lesser' General Public License (LGPL)",
                "MIT license",
                "Mozilla Public License 2.0",
            ],
            name: 'license',
            message: 'Choose a lincense from this list',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        },
])};

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// Create a function to initialize app
function init() {
    questions()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => writeToFile('output/README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to output/README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
