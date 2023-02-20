// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Liscense
  ${data.liscense}

  ## Credits
  ${data.credits}

  ## Tests
  ${data.tests}

  ## Tests
  ${data.questions}

  ## Github Username
  ${data.github}

  ## Email
  ${data.email}
`;
}

module.exports = generateMarkdown;
