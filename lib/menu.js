/** @format */

const inquirer = require("inquirer");
const table = require("console.table");
const mysql = require("mysql2");
const { viewDepartments } = require("./departments");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "directory_db",
  },
  console.log("Connected to the directory_db database.")
);

function menu() {
  inquirer
    .prompt([
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
          "Add an Employee",
          "Update an Employee Role",
        ],
      },
    ])
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
    });
}

menu();
module.export = { menu };
