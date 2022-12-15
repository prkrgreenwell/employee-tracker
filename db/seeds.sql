INSERT INTO departments (name)
VALUES 
('Sales'),
('Accounting'),
('Human Resources'),
('Customer Service'),
('Warehouse');

INSERT INTO roles (title, salary, department_id)
VALUES
('Manager', 100000, NULL),
('Lead Salesperson', 80000, 1),
('Salesperson', 60000, 1),
('Head Accountant', 75000, 2),
('Accountant', 65000, 2),
('Human Resource Rep', 72000, 3),
('Customer Service Rep', 76000, 4),
('Warehouse Foreman', 55000, 5),
('Warehouse Worker', 45000, 5);


INSERT INTO employees (first_name, last_name, role_id)
VALUES
('Michael', 'Scott', 1),
('Dwight', 'Schrute', 3),
('Jim', 'Halpert', 2),
('Andy', 'Bernard', 3),
('Kelly', 'Kapoor', 7),
('Kevin', 'Malone', 5),
('Angela', 'Martin', 4),
('Oscar', 'Martinez', 5),
('Toby', 'Flenderson', 6),
('Darryl', 'Philbin', 8),
('Roy', 'Anderson', 9),
('Hidetoshi', 'Hasagawa', 9);