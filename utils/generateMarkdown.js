// function to generate markdown for README
function generateMarkdown(data) {

  // Create the license badge
<<<<<<< HEAD
  const licenseBadge = `![License: ${data.license}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-green.svg)`;
=======
  const licenseBadge = `![License: ${data.license}](https://img.shields.io/badge/License-${(data.license)}-green.svg)`;
>>>>>>> d1f4c276e32575a3ded360c0c19ace0643f9baa4

  return `# ${data.title}

  ${licenseBadge}
<<<<<<< HEAD
  
=======

>>>>>>> d1f4c276e32575a3ded360c0c19ace0643f9baa4
  ## Description

  ${data.description}


  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Credits](#credits)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage
  ${data.usage}


  ## License
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  To run tests, run the following command:
  ${data.tests}

  ## Credits
  ${data.credits}
  
  ## Questions
  If you have any question, feel free to contact me! 
  Email: ${data.email}
  GitHub: [${data.username}](https://github.com/${data.username})

  `;
}

module.exports = generateMarkdown;
