/** @format */

const inquirer = require("inquirer");
const table = require("console.table");
const mysql = require("mysql2");
const { menu } = require("./menu");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "directory_db",
});

const viewDepartments = () => {
  db.query(`SELECT * from departments`, (err, results) => {
    err ? console.log(err.message) : console.table(results);
  });
  //   menu(); call back to original not working right now
};

module.exports = { viewDepartments };
