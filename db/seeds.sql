INSERT INTO departments (name)
VALUES 
('Sales'),
('Accounting'),
('Human Resources'),
('Customer Service'),
('Warehouse');

INSERT INTO roles (name, salary, department_id)
VALUES
('Manager', 100000, NULL),
('Salesperson', 60000, 1),
('Lead Salesperson', 80000, 1),
('Accountant', 65000, 2),
('Head Accountant', 75000, 2),
('Human Resource Representative', 72000, 3),
('Customer Service Representative', 76000, 4),
('Warehouse Worker', 45000, 5),
('Warehouse Head', 55000, 5);

INSERT INTO employees (first_name, last_name, role_id)
VALUES
('Michael', 'Scott', 1),
('Dwight', 'Schrute', 2),
('Jim', 'Halpert', 3),
('Andy', 'Bernard', 2),
('Kelly', 'Kapoor', 7),
('Kevin', 'Malone', 4),
('Angela', 'Martin', 5),
('Oscar', 'Martinez', 4),
('Toby', 'Flenderson', 6),
('Darryl', 'Philbin', 9),
('Roy', 'Anderson', 8),
('Hidetoshi', 'Hasagawa', 8);