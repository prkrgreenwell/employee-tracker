const inquirer = require("inquirer");
const table = require("console.table");
const mysql = require("mysql2");
const { updateManager } = require("./manager");
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
     roles.title AS role, roles.salary AS salary, managers.first_name AS manager, 
     departments.name AS department FROM employees
     LEFT JOIN roles ON employees.role_id = roles.id
     LEFT JOIN departments ON roles.department_id = departments.id
     LEFT JOIN managers ON employees.manager_id = managers.id`,
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

const addEmployee = () => {
  db.query(`SELECT * FROM roles`, (err, results) => {
    if (err) {
      console.log(err.message);
      return;
    }
    let roleArr = [];
    results.forEach((role) => roleArr.push(role.name));

    db.query(`SELECT * FROM managers`, (err, results) => {
      if (err) {
        console.log(err.message);
        return;
      }
    });
    let managerArr = [];
    results.forEach((man) => managerArr.push(man.first_name));
  });

  inquirer
    .prompt([
      {
        type: "text",
        name: "first_name",
        message: "What is this employee's first name?",
      },
      {
        type: "text",
        name: "last_name",
        message: "What is this employee's last name?",
      },
      {
        type: "list",
        name: "role",
        message: "Which role would this employee have?",
        choices: roleArr,
      },
      {
        type: "confirm",
        name: "manager_confirm",
        message: "Does this employee have a manager position?",
      },
      {
        type: "list",
        name: "manager",
        message: "Who is this employee's manager?",
        when: ({ manager_confirm }) => {
          if (!manager_confirm) {
            return true;
          } else {
            return false;
          }
        },
        choices: managerArr,
      },
    ])
    .then((ans) => {
      let role_id;
      for (i = 0; i < roleArr.length; i++) {
        if (ans.role === roleArr[i]) {
          role_id = i + 1;
        }
      }

      let manager_confirm;
      if (ans.manager_confirm === true) {
        manager_confirm = 1;
      } else {
        manager_confirm = 0;
      }

      let manager_id;

      if (!ans.manager) {
        manager_id = null;
        updateManager(ans.first_name, ans.last_name);
      } else {
        for (i = 0; i < managerArr.length; i++) {
          if (ans.manager === managerArr[i]) {
            manager_id = i + 1;
          }
        }
      }

      db.query(
        `INSERT INTO employees (first_name, last_name, role_id, manager_id, manager_confirm)
    VALUES (?, ?, ?, ?, ?)`,
        [ans.first_name, ans.last_name, role_id, manager_id, manager_confirm],
        (err, results) => {
          if (err) {
            console.log(err.message);
            return;
          }

          console.log("Employee Added");
          startApp();
        }
      );
    });
};

module.exports = { viewEmployees, addEmployee };
