// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, license, github, email}) {
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

module.exports = generateMarkdown;
