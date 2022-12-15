/** @format */

const inquirer = require("inquirer");
const table = require("console.table");
const mysql = require("mysql2");
const { startApp } = require("../index");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "directory_db",
});

const viewRoles = () => {
  db.query(
    `SELECT roles.id, roles.title, roles.salary, department.name FROM roles
        LEFT JOIN department ON roles.department_id = department.id`,
    (err, results) => {
      if (err) {
        console.log(err.message);
        return;
      }
      console.table(results);
      startApp();
    }
  );
};

// const addRole = () => {
//   inquirer.prompt([
//     {
//       type: "text",
//       name: "role",
//       message: "Name the title of the role you would like to add",
//     },
//     {},
//   ]);
// };

// module.exports = { viewRoles, addRole };
