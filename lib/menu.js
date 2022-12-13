const inquirer = require("inquirer");

function mainMenu() {
  inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a Department",
        "Add a Role",
        "Add an employee",
        "update an employee role",
      ],
    },
  ]);
}

mainMenu();
