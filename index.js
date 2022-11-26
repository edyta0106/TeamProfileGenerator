const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./dist/generateMarkdown");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const employees = [];

const managerQs = [
  {
    type: "input",
    message: "What is the Manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "Please provide the Manager's ID number",
    name: "id",
  },
  {
    type: "input",
    message: "What is the Manager's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter the Manager's office number",
    name: "officeNumber",
  },
];

const addTeamMember = [
  {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["Engineer", "Intern", "None"],
    name: "teamMember",
  },
];

const engineerQs = [
  {
    type: "input",
    message: "What is the Engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the Engineer's ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the Engineer's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the Engineer's GitHub username?",
    name: "github",
  },
];

const internQs = [
  {
    type: "input",
    message: "What is the Intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the Intern's ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the Intern's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter the Intern's school",
    name: "school",
  },
];

function writeToFile(fileType, data) {
  fs.writeFile(fileType, data, (err) => {
    err ? console.log(err) : console.log("Success!");
  });
}

function init() {
  inquirer.prompt(managerQs).then(({ name, id, email, officeNumber }) => {
    var manager = new Manager(name, id, email, officeNumber);
    employees.push(manager);
    menu();
  });
}

function menu() {
  inquirer.prompt(addTeamMember).then(({ teamMember }) => {
    if (teamMember === "Engineer") {
      addEngineer();
    } else if (teamMember === "Intern") {
      addIntern();
    } else {
      finishGenerator();
    }
  });
}

function addEngineer() {
  inquirer.prompt(engineerQs).then(({ name, id, email, github }) => {
    var engineer = new Engineer(name, id, email, github);
    employees.push(engineer);
    menu();
  });
}

function addIntern() {
  inquirer.prompt(internQs).then(({ name, id, email, school }) => {
    var intern = new Intern(name, id, email, school);
    employees.push(intern);
    menu();
  });
}

function finishGenerator() {
  console.log(employees);
  const fileData = generateMarkdown(employees);
  writeToFile("index.html", fileData);
}

init();
