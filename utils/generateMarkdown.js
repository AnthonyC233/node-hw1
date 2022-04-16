
function renderLicense(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const badge = renderLicense(answers.liscense)
  return `
    # ${answers.title} ${badge}
  
    ## ${answers.description}
  
    ## Table of Contents
    1.[Installation](#Installation)
    2.[Usage](#Usage)
    3.[Liscense](#Liscense)
    4.[Liscense](#Contributions)
    5.[Tests](#Tests)
    6.[GitHub](#GitHub)
    
    
    ## ${answers.installation}
    
    ## ${answers.usage}
    
    ## ${answers.liscense}
    
    ## ${answers.contributions}
    
    ## ${answers.tests}
    
    ## ${answers.GitHub}
    
    `
  ;
}


module.exports = generateMarkdown;
