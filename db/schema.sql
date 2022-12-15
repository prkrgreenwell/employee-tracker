DROP DATABASE IF EXISTS directory_db;
CREATE DATABASE directory_db;

USE directory_db;

DROP TABLE IF EXISTS managers;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY
    ,   name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY
    ,   title VARCHAR(30) NOT NULL
    ,   salary DECIMAL NOT NULL
    ,   department_id INT
    , FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE CASCADE
);

CREATE TABLE managers ( 
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY
    ,   first_name VARCHAR(30)
    ,   last_name VARCHAR(30)
);

CREATE TABLE employees(
        id INT NOT NULL AUTO_INCREMENT
    ,   first_name VARCHAR(30)
    ,   last_name VARCHAR(30)
    ,   role_id INT
    ,   manager_id INT
    ,   manager_confirm BOOLEAN
    ,   PRIMARY KEY(id)
    ,   FOREIGN KEY(role_id) REFERENCES roles(id)
    ,   FOREIGN KEY(manager_id) REFERENCES roles(id) ON DELETE SET NULL
);