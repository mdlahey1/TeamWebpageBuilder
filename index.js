//Create dependency links
const inquirer = require("inquirer");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const generateHTML = require("./src/htmlTemplate.js");
const writeToFile = require("./utils/siteGenerator.js");


const employees = [];

//Prompts for engineer type
const engineerPrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the engineer's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the engineer's ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the engineer's email address:",
    },
    {
      type: "input",
      name: "github",
      message: "Enter the engineer's github username:",
    }
  ]);
};

//Prompts for intern type
const internPrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the intern's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the intern's ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the intern's email address:",
    },
    {
      type: "input",
      name: "school",
      message: "Enter the intern's school:",
    }
  ]);
};

//Prompt that allows the user to select which type of employee they would like to add
const employeePrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What type of employee do you wish to add?",
        choices: [
          "Add intern",
          "Add engineer",
          "Finish building out team",
        ],
      },
    ])
    .then(({ choice }) => {
      if (choice === "Add intern") {
        return internPrompt()
        .then((internData) => {
            const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
            employees.push(intern);
            return employeePrompt();
        });
      } else if (choice === "Add engineer") {
        return engineerPrompt()
        .then((engineerData) => {
            const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
            employees.push(engineer);
            return employeePrompt();
        });
      } else {
        console.log(employees);
        return writeToFile('./dist/index.html', generateHTML(employees))
        .then((response) => {
            console.log(response);
        })
      }
    });
};

//Prompts the user to enter the managers info at start of application
const startApplication = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the managers's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the managers's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the manager's email address:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number:",
      },
    ])
    .then((managersData) => {
        const manager = new Manager(managersData.name, managersData.id, managersData.email, managersData.officeNumber);
        employees.push(manager);
        return employeePrompt();
    })
};

//Start the application
startApplication()