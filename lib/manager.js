const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "directory_db",
});

const updateManager = (first_name, last_name) => {
  db.query(
    `INSERT INTO managers (first_name, last_name) VALUES (?, ?)`,
    [first_name, last_name],
    (err, result) => {
      if (err) {
        console.log(err.message);
        return;
      }
    }
  );
};

module.exports = { updateManager };
