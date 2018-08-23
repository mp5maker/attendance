<?php
namespace Model;

class Database{
    protected static $handler;
    
    public static function createHandler(){
        // Getting the Configuration File
        require_once $_SERVER['DOCUMENT_ROOT']."/init.php";
        require_once $_SERVER['DOCUMENT_ROOT']."/".$app_name."/config/config.php";

        //Accessing the Database Settings
        $server = $db_settings['mysql']['server'];
        $username = $db_settings['mysql']['username'];
        $password = $db_settings['mysql']['password'];
        $db_name = $db_settings['mysql']['db_name'];

        //Creating a handler
        try{
            self::$handler = new \PDO("mysql:host=$server;dbname=$db_name", $username, $password);
            self::$handler->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        }catch(PDOException $e){
            echo "Connection Error: ".$e->getMessage();
        }

    }

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

    public static function close(){
        self::$handler = null;
    }
}

Database::createHandler();
