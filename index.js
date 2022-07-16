// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
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
            type: 'input',
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

const generateREADME = function ({title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, license, github, email}) {
    return `
# **${title}**

## **Table of Contents** 

- [**Description**](#description)
- [**Installation**](#installation)
- [**Usage**](#usage)
- [**License**](#license)
- [**Contributing**](#contributing)
- [**Test**](#test)
- [**Questions**](#questions)


## **Description**

${description}

## **Installation**

${installationInstructions}

## **Usage**

${usageInformation}

## **Contributing**

${contributionGuidelines}

## **Test**   

${testInstructions}

## **License**

${license}// TODO add special logic for license

## **Questions**

[https://https://github.com/marcelamejiao//](https://https://github.com/marcelamejiao/)
https://github.com/marcelamejiao

${github}// TODO add special logic for GitHub

${email}// TODO add special logic for email`;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('output/README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to output/README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
