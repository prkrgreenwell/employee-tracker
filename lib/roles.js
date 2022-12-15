/** @format */

const inquirer = require("inquirer");
const table = require("console.table");
const mysql = require("mysql2");
const { startApp } = require("../index");
const { updateManager } = require("./manager");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "directory_db",
});

const viewRoles = () => {
  db.query(
    `SELECT roles.id, roles.title, roles.salary, departments.name AS department FROM roles
        LEFT JOIN departments ON roles.department_id = departments.id`,
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

const addRole = () => {
  db.query(`SELECT * FROM departments`, (err, results) => {
    if (err) {
      console.log(err.message);
      return;
    }
    let departArr = [];
    results.forEach((dep) => departArr.push(dep.name));

    inquirer
      .prompt([
        {
          type: "text",
          name: "role",
          message: "Name the title of the role you would like to add",
        },
        {
          type: "number",
          name: "salary",
          message: "What is the salary of this role?",
        },
        {
          type: "list",
          name: "department",
          message: "Which department does this role belong to?",
          choices: departArr,
        },
      ])
      .then((ans) => {
        let department_id;
        for (let i = 0; i < departArr.length; i++) {
          if (departArr[i] === ans.department) {
            department_id = i + 1;
          }
        }

        db.query(
          `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`,
          [ans.role, ans.salary, department_id],
          (err, result) => {
            if (err) {
              console.log(err.message);
              return;
            }
            console.log("Role Added");
            startApp();
          }
        );
      });
  });
};

module.exports = { viewRoles, addRole };
