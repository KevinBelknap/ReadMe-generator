// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === "MIT"){
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }else if(license === "Apache"){
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }else{
        return "";
    }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
      if(license === "MIT"){
          return "[MIT](https://opensource.org/licenses/MIT)";
      }else if(license === "Apache"){
          return "[Apache](https://opensource.org/licenses/Apache-2.0)";
      }else{
          return "";
      }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
      if(license === "MIT"){
          return "This project is licensed under the MIT license.";
      }else if(license === "Apache"){
          return "This project is licensed under the Apache license.";
      }else{
          return "";
      }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}} 
 
## Description

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing Guidelines](#contributing-guidelines)
* [Questions](#questions)
* [Contact Information](#contact-information)


## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseBadge(data.license)}

## Contributing Guidelines

${data.contributing}

## Questions

${data.questions}

## Contact Information

${data.email}

`;
}

module.exports = generateMarkdown;
