const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: [
            'AFL-3.0',
            'Apache-2.0',
            'Artistic-2.0',
            'BSL-1.0',
            'BSD-2-Clause',
            'BSD-3-Clause',
            'BSD-3-Clause-Clear',
            'BSD-4-Clause',
            '0BSD',
            'CC',
            'CC0-1.0',
            'CC-BY-4.0',
            'CC-BY-SA-4.0',
            'WTFPL',
            'ECL-2.0',
            'EPL-1.0',
            'EPL-2.0',
            'EUPL-1.1',
            'AGPL-3.0',
            'GPL',
            'GPL-2.0',
            'GPL-3.0',
            'LGPL',
            'LGPL-2.1',
            'LGPL-3.0',
            'ISC',
            'LPPL-1.3c',
            'MS-PL',
            'MIT',
            'MPL-2.0',
            'OSL-3.0',
            'PostgreSQL',
            'OFL-1.1',
            'NCSA',
            'Unlicense',
            'Zlib',
        ],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for how other developers can contribute to your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests',
        default: 'npm test'
    },

    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets or tutorials include them as well.',
    },

    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log(`${fileName} success!`);
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
      const readMeContent = generateMarkdown(answers);
      writeToFile('README.md', readMeContent);
    });
}

// function call to initialize program
init();
