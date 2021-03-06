CREATE TABLE employee (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    fullname VARCHAR(100),
    card_no VARCHAR(255),
    grade VARCHAR(25),
    branch VARCHAR(100),
    joining_date TIMESTAMP,
    working_role VARCHAR(50),
    main_salary FLOAT,
    home_rent FLOAT,
    medical_cost FLOAT,
    transport_cost FLOAT,
    food_cost FLOAT,
    other_company_facilities FLOAT,
    date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    date_updated TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO employee(
    id, 
    fullname, 
    card_no, 
    grade, 
    branch,
    joining_date, 
    working_role,
    main_salary,
    home_rent,
    medical_cost,
    transport_cost,
    food_cost,
    other_company_facilities,
    date_created,
    date_updated
) VALUES (
    '',
    "Mohammad Golam Hossain",
    "management-admin-01",
    "1",
    "management",
    "07-06-2017 00:00:00",
    "Managing Director",
    70643,
    28257,
    250,
    200,
    560,
    0,
    "",
    ""
);
