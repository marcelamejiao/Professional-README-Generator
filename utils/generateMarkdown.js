// Source: https://opensource.org/licenses
// Source: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
const licenses = {
  "Apache License 2.0": {
    link: "https://opensource.org/licenses/Apache-2.0",
    badge: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  },
  "BSD 3-Clause 'New' or 'Revised' license": {
    link: "https://opensource.org/licenses/BSD-3-Clause",
    badge: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  },
  "BSD 2-Clause 'Simplified' or 'FreeBSD' license": {
    link: "https://opensource.org/licenses/BSD-2-Clause",
    badge: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  },
  "GNU General Public License (GPL)": {
  link: "https://opensource.org/licenses/gpl-license",
  badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/gpl-license)"
  },
  "GNU Library or 'Lesser' General Public License (LGPL)": {
  link: "https://opensource.org/licenses/lgpl-license",
  badge: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://opensource.org/licenses/lgpl-license)"
  },
  "MIT license": {
  link: "https://opensource.org/licenses/MIT",
  badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  },
  "Mozilla Public License 2.0": {
  link:"https://opensource.org/licenses/MPL-2.0",
  badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  },
};

// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="None"){
    return "";
  } else {
    return `${licenses[license].badge}`;
  }
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==="None"){
    return "";
  } else {
    return `- [**License**](#license)`;
  }
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==="None"){
    return "";
  } else {
    return `
## **License**

Please note this application is covered under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, license, github, email}) {
  return `
# **${title}**

${renderLicenseBadge(license)}

## **Table of Contents** 

- [**Description**](#description)
- [**Installation**](#installation)
- [**Usage**](#usage)
${renderLicenseLink(license)}
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

${renderLicenseSection(license)}

## **Questions**

[https://github.com/${github}](https://github.com/${github})

If you have additional questions, please email me at: ${email}`;
}

module.exports = generateMarkdown;
