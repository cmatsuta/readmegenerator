const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "Enter the project description",
        name: "description",
    },
    {
        type: "input",
        message: "Enter the command to install dependencies",
        name: "installation",
    },
    {
        type: "input",
        message: "Enter the project description",
        name: "usage",
    },
    {
        type: "list",
        message: "Which licence type do you use on the project?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "input",
        message: "How do you contribute to the repo?",
        name: "contributing",
    },
    {
        type: "input",
        message: "What command do you use to run tests?",
        name: "test",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your github name?",
        name: "github",
    },
    {
        type: "input",
        message: "Enter a year of the license",
        name: "year",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,function (err){
        if(err){
            return console.log(err);
        }
        console.log("README file generated");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        // generateMarkdown (answers);

        writeToFile ("README1.md", generateMarkdown(answers));
    })

}

// function call to initialize program
init();