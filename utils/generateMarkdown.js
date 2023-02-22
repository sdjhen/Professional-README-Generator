// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
 ## Description
  ${data.Description}
  
## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Liscense
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
