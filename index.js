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
        message: "Enter description",
        name: "description",
    },
    {
        type: "list",
        message: "Select your license",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
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