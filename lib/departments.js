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

module.exports = { viewDepartments };
