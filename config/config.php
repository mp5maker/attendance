<?php
namespace Configuration;

//Defining the app
$root_directory = $_SERVER['DOCUMENT_ROOT'];
require_once $root_directory."/init.php";

if(empty($app_name) && !isset($app_name)){
    $app_name = "attendance";
}

// Applying the namespace rule for everyone
require_once $root_directory."/".$app_name."/vendor/autoload.php";

//Defining the folders
define('BASE', $root_directory."/".$app_name);
define("CONFIGURATION", $root_directory."/".$app_name."/config");
define("API", $root_directory."/".$app_name."/api");
define("LIBRARY", $root_directory."/".$app_name."/library");
define("MODEL", $root_directory."/".$app_name."/model");

//Database
$db_settings = [
    'mysql' => [
        "server" => "localhost",
        "username" => "root",
        "password" => "",
        "db_name" => "attendance"
    ]
];
