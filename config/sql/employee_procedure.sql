DELIMITER $$
CREATE PROCEDURE read_employee(IN select_type VARCHAR(10), IN select_id INT)
BEGIN
    IF(select_type = 'all') THEN
        PREPARE statement FROM 
        "
            SELECT * FROM employee
        ";
        EXECUTE statement;
    ELSEIF(select_type = 'id') THEN
        PREPARE statement FROM
        "
            SELECT * FROM employee WHERE id = ? 
        ";
        SET @p1 = select_id;
        EXECUTE statement USING @p1;
    END IF;
END$$