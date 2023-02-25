// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#Description)
  *  [Installation](#Installation)
  * [Usage](#usage)
  * [License](#License)
  * [Credits](#Credits)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
 ## Description
  ${data.Description}
  
## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## License
  ${data.License}

  ## Credits
  ${data.Credits}

  ## Tests
  ${data.Tests}

  ## Questions
  ${data.Questions}
  

  ## Github Username
  ${data.Github}

  ## Email
  ${data.Email}
  `;
}

module.exports = generateMarkdown;
