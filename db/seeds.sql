INSERT INTO departments (name)
VALUES 
('Sales'),
('Accounting'),
('Human Resources'),
('Customer Service'),
('Warehouse');

INSERT INTO roles (title, salary, department_id)
VALUES
('Regional Manager', 100000, NULL),
('Salesperson', 60000, 1),
('Accountant', 65000, 2),
('Human Resource Rep', 72000, 3),
('Customer Service Rep', 76000, 4),
('Warehouse Worker', 45000, 5);


INSERT INTO employees (first_name, last_name, role_id, manager_id, manager_confirm)
VALUES
('Michael', 'Scott', 1, NULL, true),
('Dwight', 'Schrute', 2, 2, false),
('Jim', 'Halpert', 2, NULL, true),
('Andy', 'Bernard', 2, 2, false),
('Kelly', 'Kapoor', 5, NULL, true),
('Kevin', 'Malone', 3, 4, false),
('Angela', 'Martin', 3, NULL, true),
('Oscar', 'Martinez', 3, 4, false),
('Toby', 'Flenderson', 4, NULL, true),
('Darryl', 'Philbin', 6, NULL, true),
('Roy', 'Anderson', 6, 6, false),
('Hidetoshi', 'Hasagawa', 6, 6, false);

INSERT INTO managers(first_name, last_name)
SELECT first_name, last_name
FROM employees
WHERE manager_confirm = 1;