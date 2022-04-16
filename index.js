const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// Inqurier download from npm, made prompt and etc.
function init () {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'title',
                message: 'What is your title?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is your description?',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Enter installation instructions',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How is it used?',
            },
            {
                type: 'list',
                name: 'liscense',
                message: 'Choose a liscense',
                choices: ['Apache', 'MIT', 'GNU'],
            },
            {
                type: 'input',
                name: 'contributions',
                message: 'How can I use your code?',
            },
            {
                type: 'input',
                name: 'tests',
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
            fs.writeFile('README.md', generateMarkdown(answers), (err) =>
                err ? console.log(err) : console.log('Succesfully created README.md')
            );
        });
}
init();
    