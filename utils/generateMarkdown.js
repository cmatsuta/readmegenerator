// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
If you have any comments, please contact at ${data.test}. 

## License
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
This project is licensed by ${data.license} license.

Copyright @${data.year}  [${data.github}](https://github.com/${data.github}/)

`;
}

module.exports = generateMarkdown;
