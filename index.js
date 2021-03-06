const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project name?",
      name: "title",
      validate: (titleAnswer) => {
        if (titleAnswer) {
          return true;
        } else {
          console.log("Please enter project title to continue.");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Please list discription of your project.",
      name: "description",
      validate: (discriptAnswer) => {
        if (discriptAnswer) {
          return true;
        } else {
          console.log("Please enter project discription to continue.");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Please enter link to diployed project",
      name: "deploy",
      validate: (deployAnswer) => {
        if (deployAnswer) {
          return true;
        } else {
          console.log("Please enter link to diployed project to continue.");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "please paste any screenshots/videos",
      name: "visuals",
      validate: (visAnswer) => {
        if (visAnswer) {
          return true;
        } else {
          console.log("Please provide visuals.");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Please list installation instructions",
      name: "installation",
      validate: (installAnswer) => {
        if (installAnswer) {
          return true;
        } else {
          console.log("Please enter installation instructions to continue.");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What  are the usage instructions?",
      name: "usage",
      validate: (usageAnswer) => {
        if (usageAnswer) {
          return true;
        } else {
          console.log("Please enter usage instructions to continue.");
          return false;
        }
      },
    },
    {
      type: "list",
      message: "What is the license? (use arrow keys to select then press enter)",
      name: "license",
      choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"], 
    },
    {
      type: "input",
      message: "What  are the contribution guidelines?",
      name: "contributing",
      validate: (contribAnswer) => {
        if (contribAnswer) {
          return true;
        } else {
          console.log("Please enter contribution guidelines to continue.");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What  are the testing instructions?",
      name: "testing",
      validate: (testAnswer) => {
        if (testAnswer) {
          return true;
        } else {
          console.log("Please enter testing instructions to continue.");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is your email for questions?",
      name: "email",
      validate: (emailAnswer) => {
        if (emailAnswer) {
          return true;
        } else {
          console.log("Please enter email to continue.");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "enter link to GitHub repo",
      name: "github",
      validate: (gitAnswer) => {
        if (gitAnswer) {
          return true;
        } else {
          console.log("Please enter GitHub to continue.");
          return false;
        }
      },
    },
  ])
  /* Pass your questions in here */
  .then((answers) => {
    console.log(answers);
    const generateREADME = `# ${answers.title}
## Licensing: 
[![license](https://img.shields.io/badge/license-${answers.license}-orange)](https://shields.io)
## Table of Contents 
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
## Description   
  ${answers.description} 

  Link to deployed project: ${answers.deploy}

  Screenhots/link to video tour:
  ${answers.visuals}       
## Installation
    ${answers.installation}
## Usage
    ${answers.usage}
## Contributing
    ${answers.contributing}
## Tests
    ${answers.testing}
## Questions
    Please contact me @ ${answers.email}, also check out the GitHub repository ${answers.github}`;

    fs.writeFile("README.md", generateREADME, (error) => {
      console.log(error);
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
