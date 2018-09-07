CREATE TABLE IF NOT EXISTS testing(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    somecol VARCHAR(255),
    somecol2 VARCHAR(255)
);

INSERT INTO testing(id, somecol, somecol2) VALUES
('', "First", "One"),
('', "Second", "Two"),
('', "Third", "Three");