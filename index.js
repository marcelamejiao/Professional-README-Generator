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
            name: 'installation instructions',
            message: 'Enter the installation instructions',
        },
        {
            type: 'input',
            name: 'usage information',
            message: 'Enter the usage information',
        },
        {
            type: 'input',
            name: 'contribution guidelines',
            message: 'Enter the contribution guidelines',
        },
        {
            type: 'input',
            name: 'test instructions',
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

const generateREADME = ({ name, location, github, linkedin }) =>
  `# **Bootcamp Portfolio**

  ## **Marcela Mejia Ortiz Portfolio** 
  
  _**This project is about building my own portfolio of work with the purpose of showcasing my skills and talents to employers looking to fill a part-time or full-time position. I highlight my strongest work as well as the thought processes behind it.**_
  
  * The code was created following the semantic elements best practice.
  * Creating the HTML structure and CSS styling. 
  * The portfolio display links to navigate the Homepage.
  * A professional description about me, skills and knowledge, also a profile photo. 
  * The portfolio presents a section called work, where it gives access to diverse web develoment aplications by clicking on the photo and focuses the attention on the main project by enlargening it.
  * The last section provides the contact information with phone number, email, github and twitter links. 
  * The web portfolio is responsive for diverse screen sizes. 
  
  
  💡 See live version here: [https://marcelamejiao.github.io/Bootcamp-Portfolio//](https://marcelamejiao.github.io/Bootcamp-Portfolio/)
  
  ### **Preview**
  
  ![Marcela Mejia Ortiz Portfolio](./assets/images/Portfolioweb.png)`;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('index.html', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
