/** @format */

const inquirer = require("inquirer");

const startApp = () => {
  inquirer
    .prompt({
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update an Employee Role",
        "I'm Finished",
      ],
    })
    .then((ans) => {
      if (ans.action === "View All Departments") {
        viewDepartments();
      }
      if (ans.action === "View All Roles") {
        viewRoles();
      }
      if (ans.action === "View All Employees") {
        viewEmployees();
      }
      if (ans.action === "Add a Department") {
        addDepartment();
      }
      if (ans.action === "Add a Role") {
        addRole();
      }
      if (ans.action === "Add an Employee") {
        addEmployee();
      }
      if (ans.action === "Update an Employee Role") {
        updateEmployeeRole();
      }
      if (ans.action === "I'm Finished") {
        console.log("Good-Bye");
      }
    });
};

module.exports = { startApp };

console.log("Welcome to the Employee Manager");
startApp();

const { viewDepartments, addDepartment } = require("./lib/departments");
const { viewRoles, addRole } = require("./lib/roles");
const {
  viewEmployees,
  addEmployee,
  updateEmployeeRole,
} = require("./lib/employees");
