const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const writeFile = (answers) =>
`
# ${answers.title}
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)


## ${answers.Description}

## Table of Contents
1.[Installation](#Installation)
2.[Usage](#Usage)
3.[Liscense](#Liscense)
4.[Liscense](#Contributions)
5.[Tests](#Tests)
6.[GitHub](#GitHub)


## ${answers.Installation}

## ${answers.Usage}

## ${answers.Liscense}

## ${answers.Contributions}

## ${answers.Tests}

## ${answers.GitHub}

`
// Inqurier download from npm, made prompt and etc.
inquirer
    .prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is your title?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'What is your description?',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Enter installation instructions',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'How is it used?',
        },
        {
            type: 'list',
            name: 'Liscense',
            message: 'Choose a liscense',
            choices: ['Rust', 'MIT', 'GNU'],
        },
        {
            type: 'input',
            name: 'Contributions',
            message: 'How can I use your code?',
        },
        {
            type: 'input',
            name: 'Tests',
            message: '',
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'Enter GitHub Profile',
        },
    ])
    // Creates write file to create README.md file
    .then((answers) => {
        const pikachuContent = writeFile(answers);

        fs.writeFile('README.md', pikachuContent, (err) =>
            err ? console.log(err) : console.log('Succesfully created index.hmtl')
        );
    });

    