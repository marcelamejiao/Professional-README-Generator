// Source: https://opensource.org/licenses
const licenses = {
  "Apache License 2.0": "https://opensource.org/licenses/Apache-2.0",
  "BSD 3-Clause 'New' or 'Revised' license": "https://opensource.org/licenses/BSD-3-Clause",
  "BSD 2-Clause 'Simplified' or 'FreeBSD' license": "https://opensource.org/licenses/BSD-2-Clause",
  "GNU General Public License (GPL)": "https://opensource.org/licenses/gpl-license",
  "GNU Library or 'Lesser' General Public License (LGPL)": "https://opensource.org/licenses/lgpl-license",
  "MIT license": "https://opensource.org/licenses/MIT",
  "Mozilla Public License 2.0": "https://opensource.org/licenses/MPL-2.0",
  "Common Development and Distribution License": "https://opensource.org/licenses/CDDL-1.0",
  "Eclipse Public License version 2.0": "https://opensource.org/licenses/EPL-2.0"
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===null || license===""){
    return "";
  } else {
    return `[${license}](${licenses[license]})`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===null || license===""){
    return "";
  } else {
    return `Please note this application is covered under the ${renderLicenseLink(license)} license.`;
  }
}

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

${renderLicenseSection(license)}

## **Questions**

[https://https://github.com/marcelamejiao//](https://https://github.com/marcelamejiao/)
https://github.com/marcelamejiao

${github}// TODO add special logic for GitHub

${email}// TODO add special logic for email`;
}

module.exports = generateMarkdown;
