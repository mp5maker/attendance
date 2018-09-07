<?php
namespace Model;

// Getting the configuration files
$root_directory = $_SERVER['DOCUMENT_ROOT'];
require_once $root_directory."/init.php";
require_once $root_directory."/".APP_NAME."/config/config.php";
require_once MODEL."/database.php";

class Employee {
    public static function create($params){
        
    }

    public static function read($params){
        $query = "CALL read_employee(:select_type, :select_id)";
        $id = isset($params['select_id'])? $params['select_id'] : 1;
        $params = [":select_type" => $params['select_type'], ":select_id" => $id];
        return Database::read($query, $params);
    }

    public static function update($params){

    }

    public static function delete($params){

    }
}