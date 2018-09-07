<?php
namespace Api;
header('Content-Type: application/json');

// Getting the Configuration File
$root_directory = $_SERVER['DOCUMENT_ROOT'];
require_once $root_directory."/init.php";
require_once $root_directory."/".APP_NAME."/config/config.php";
require_once MODEL."/tables/Testing.php";

use \Model\Testing as Testing;

$params = ['select_type' => 'all'];
$fetchedArray = Testing::read($params);
for($i = 0; $i < count($fetchedArray); $i++):
    $data[] = ['id' => $fetchedArray[$i][0], 
                'somecol' => $fetchedArray[$i][1], 
                'somecol2' => $fetchedArray[$i][2]
            ];
endfor;
echo json_encode($data, JSON_PRETTY_PRINT);