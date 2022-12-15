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

const viewDepartments = () => {
  db.query(`SELECT * from departments`, (err, results) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.table(results);
    startApp();
  });
};

const addDepartment = () => {
  inquirer
    .prompt({
      type: "text",
      name: "department",
      message: "Name the department you want to add",
    })
    .then((ans) => {
      db.query(
        `INSERT INTO departments (name) VALUES (?)`,
        [ans.department],
        (err, result) => {
          if (err) {
            console.log(err.message);
            return;
          }
          console.log("Department Added");
          startApp();
        }
      );
    });
};

module.exports = { viewDepartments, addDepartment };
