// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## description
${data.description}

`;
}

module.exports = generateMarkdown;
