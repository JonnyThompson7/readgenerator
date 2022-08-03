// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const getLicense = (value) => {
  if (value === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)]';
  } else if (value === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (value === 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const getLink = (value) => {
  if (value === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)]';
  } else if (value === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (value === 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const getSection = (value) => {
  if (value === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)]';
  } else if (value === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (value === 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}

[![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)

${getLicense}


#### ${data.description}

## Table of Contents
- [Installation Usage](#installation-usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)


## Installation Usage

${getLink}

## Contributing

${data.contributor}

## Tests

${data.test}

## Questions?

### Feel Free to Contact me with any other questions!

- [GitHub Profile](https://github.com/${data.username})

- [Email Me!](https://mail.google.com/mail/u/0/?fs=1&to=${data.email}&tf=cm)

## License

${getSection}

  `;
}

module.exports =  generateMarkdown;
