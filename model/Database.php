<?php
namespace Model;

class Database{
    protected static $handler;
    
    /**
     * Create Handler
     * Connection established with the database
     * @return null
     */
    public static function createHandler(){
        // Getting the Configuration File
        $root_directory = $_SERVER['DOCUMENT_ROOT'];
        require_once $root_directory."/init.php";
        require_once $root_directory."/".APP_NAME."/config/config.php";

        //Accessing the Database Settings
        $server = DB_SETTINGS['mysql']['server'];
        $username = DB_SETTINGS['mysql']['username'];
        $password = DB_SETTINGS['mysql']['password'];
        $db_name = DB_SETTINGS['mysql']['db_name'];

        //Creating a handler
        try{
            self::$handler = new \PDO("mysql:host=$server;dbname=$db_name", $username, $password);
            self::$handler->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        }catch(PDOException $e){
            echo "Connection Error: ".$e->getMessage();
        }

    }

    /**
     * Creates a item in the database
     */
    public static function create($query, $params = null){
        try{
            self::createHandler();
            $stmt = self::$handler->prepare($query);
            self::$handler->beginTransaction();
            $result = $stmt->execute($params);
            self::$handler->commit();
            return $result;
        }catch(PDOException $e){
            self::$handler->rollback();
            self::close();
        }
    }
    
    /**
     * Updates a item in the database
     */
    public static function update($query, $params = null){
        try{
            self::createHandler();
            $stmt = self::$handler->prepare($query);
            self::$handler->beginTransaction();
            $result = $stmt->execute($params);
            self::$handler->commit();
            return $result;
        }catch(PDOException $e){
            self::$handler->rollback();
            self::close();
        }
    }
    
    /**
     * Deletes a item in the database
     */
    public static function delete($query, $params = null){
        try{
            self::createHandler();
            $stmt = self::$handler->prepare($query);
            self::$handler->beginTransaction();
            $result = $stmt->execute($params);
            self::$handler->commit();
            return $result;
        }catch(PDOException $e){
            self::$handler->rollback();
            self::close();
        }
    }
    
    /**
     * Reads a item in the database
     */
    public static function read($query, $params = null, $fetchMode = \PDO::FETCH_NUM){
        try{
            self::createHandler();
            $stmt = self::$handler->prepare($query);
            $stmt->execute($params);
            $stmt->setFetchMode($fetchMode);
            return $stmt->fetchAll();
        }catch(PDOException $e){
            self::close();
        }
    }

    /**
     * Database connections closes
     */
    public static function close(){
        self::$handler = null;
    }
}