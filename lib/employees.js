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

const viewEmployees = () => {
  db.query(
    `SELECT employees.id, employees.first_name AS Name, employees.last_name,
     roles.title AS role, roles.salary AS salary, manager.first_name AS manager, 
     department.name AS department FROM employees
     LEFT JOIN roles ON employees.role_id = roles.id
     LEFT JOIN departments ON roles.department_id = departments.id
     LEFT JOIN manager ON employees.manager_id = manager.id`
  );
};
