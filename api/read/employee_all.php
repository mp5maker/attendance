<?php
namespace Api;
header('Content-Type: application/json');

// Getting the Configuration File
$root_directory = $_SERVER['DOCUMENT_ROOT'];
require_once $root_directory."/init.php";
require_once $root_directory."/".APP_NAME."/config/config.php";
require_once MODEL."/tables/Employee.php";

use \Model\Employee as Employee;

$params = ['select_type' => 'all'];
$fetchedArray = Employee::read($params);
for($i = 0; $i < count($fetchedArray); $i++):
    $data[] = [
                'id' => $fetchedArray[$i][0], 
                'fullname' => $fetchedArray[$i][1], 
                'card_no' => $fetchedArray[$i][2],
                'grade' => $fetchedArray[$i][3],
                'branch' => $fetchedArray[$i][4],
                'joining_date' => $fetchedArray[$i][5],
                'working_role' => $fetchedArray[$i][6],
                'main_salary' => $fetchedArray[$i][7],
                'home_rent' => $fetchedArray[$i][8],
                'medical_cost' => $fetchedArray[$i][9],
                'transport_cost' => $fetchedArray[$i][10],
                'food_cost' => $fetchedArray[$i][11],
                'other_company_facilities' => $fetchedArray[$i][12],
                'date_created' => $fetchedArray[$i][13],
                'date_updated' => $fetchedArray[$i][14],
            ];
endfor;
echo json_encode($data, JSON_PRETTY_PRINT);