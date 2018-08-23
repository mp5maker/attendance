DELIMITER $$
CREATE PROCEDURE create_testing(IN column_one VARCHAR(255), IN column_two VARCHAR(255))
BEGIN
    PREPARE statement FROM "
        INSERT INTO testing(id, somecol, somecol2) VALUES
        ('', ?, ?)
    ";
    SET @p1 = column_one;
    SET @p2 = column_two;
    EXECUTE statement USING @p1, @p2;
END$$

DELIMITER $$
CREATE PROCEDURE read_testing(IN select_type VARCHAR(10), IN select_id INT)
BEGIN
    IF(select_type = 'all') THEN
        PREPARE statement FROM "SELECT * FROM testing";
        EXECUTE statement;
    ELSEIF(select_type = 'id') THEN
        PREPARE statement FROM "SELECT * FROM testing WHERE id = ?";
        SET @p1 = select_id;
        EXECUTE statement USING @p1;
    END IF;
END$$

DELIMITER $$
CREATE PROCEDURE update_testing(IN somecoldata VARCHAR(255), IN somecol2data VARCHAR(255), IN select_id INT)
BEGIN
    PREPARE statement FROM "
        UPDATE testing SET somecol = ?, somecol2 = ? WHERE id = ?
    ";
    SET @p1 = somecoldata;
    SET @p2 = somecol2data;
    SET @p3 = select_id;
    EXECUTE statement USING @p1, @p2, @p3;
END$$

DELIMITER $$
CREATE PROCEDURE delete_testing(IN select_id INT)
BEGIN
    PREPARE statement FROM "
        DELETE FROM testing WHERE id = ?
    ";
    SET @p1 = select_id;
    EXECUTE statement USING @p1;
END$$