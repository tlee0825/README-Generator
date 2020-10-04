var inquirer = require("inquirer");
var fs = require("fs");
var markDown = require("./methods/markdown");
const markDownStructure = require("./methods/markdown");



const questions = [


    {


        type: "checkbox",
        message: "Please enter your badge code",
        name: "badge",
        choices: ["[![Website lbesson.bitbucket.org](https://img.shields.io/website-up-down-green-red/http/lbesson.bitbucket.org.svg)](http://lbesson.bitbucket.org/) ",
                  "[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)",
                  "[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)",
                  "[![Badge for version for Visual Studio Code extension naereen.makefiles-support-for-vscode](https://vsmarketplacebadge.apphb.com/version/naereen.makefiles-support-for-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=naereen.makefiles-support-for-vscode)"
                  ]
    },
    {
        type: "input",
        message: "Please enter you full name ?",
        name: "username"
    },

    {
        type: "input",
        message: "What is the name of your repository ?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the title of your project ?",
        name: "title"
    },

    {
        type: "checkbox",
        message: "Table of contents please select all that will apply",
        choices: ["Description", "How To Use", "License", "Author Info"],
        name: "table"
    },

    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    },

    {
    type: "input",
    message: "Please enter your installation instructions?",
    name: "install"
    },

    {
        type: "input",
        message: "Please enter your usage for this project.",
        name: "usage"

    },

    {
        type: "checkbox",
        message: "Please choose a license?",
        name: "license",
        choices: ["GPL License", "Public Domain", "MIT License", "Apache License"]
    },

    {
        type: "input",
        message: "Please enter any contributions here.",
        name: "contributing"

    },


    {
        type: "input",
        message: "Please enter you email address?",
        name: "email"
    },

    {
        type: "input",
        message: "Please enter you github information",
        name: "github"
    }

]




inquirer
    .prompt(questions).then(function (response) {

console.log(response);
        fs.writeFile("README.md", markDown(response), err => {if(err) throw err });
      
    })



