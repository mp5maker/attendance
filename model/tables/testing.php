<?php
namespace Model;

// Getting the Configuration File
$root_directory = $_SERVER['DOCUMENT_ROOT'];
require_once $root_directory."/init.php";
require_once $root_directory."/".APP_NAME."/config/config.php";
require_once MODEL."/Database.php";


class Testing{
    //Create Data
    public static function create($params){
        $query = "CALL create_testing(:somecol, :somecol2)";
        $params = [":somecol" => $params['somecol'], ":somecol2" => $params['somecol2']];
        return Database::create($query, $params);
    }

    // Read Data
    public static function read($params){
        $query = "CALL read_testing(:select_type, :select_id)";
        $id = isset($params['select_id'])? $params['select_id'] : 1;
        $params = [":select_type" => $params['select_type'], ":select_id" => $id];
        return Database::read($query, $params);
    }

    // Update Data
    public static function update($params){
        $query = "CALL update_testing(:somecol, :somecol2, :select_id)";
        $somecol = $params['somecol'];
        $somecol2 = $params['somecol2'];
        $id = $params['select_id'];
        $params = [":somecol" => $somecol, ":somecol2" => $somecol2, ":select_id" => $id];
        return Database::update($query, $params);
    }

    // Delete Data
    public static function delete($params){
        $query = "CALL delete_testing(:select_id)";
        $params = ['select_id' => $params['select_id']];
        return Database::delete($query, $params);
    }
}

/**
 * [Create]
 */
// $params = ['somecol' => 'Fourth', 'somecol2' => 'Four'];
// Testing::create($params);

/**
 * [Read][All] 
 */
// $params = ['select_type' => 'all'];
// echo "<pre>";
// var_dump(Testing::read($params));

/**
 * [Read][Selected ID] 
 */
// $params = ['select_type' => 'id', 'select_id' => '3'];
// echo "<pre>";
// var_dump(Testing::read($params));

/**
 * [Update]
 */
// $params = ['somecol' => "Fifth", "somecol2" => "Five", "select_id" => '4'];
// Testing::update($params);

/**
 * [Delete]
 */
// $params = ["select_id" => 4];
// Testing::delete($params);