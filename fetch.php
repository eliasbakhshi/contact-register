<?php
if (!defined('ALLOWED')) die('Permission denied');

$response = [];
$response["status"] = 200;

include_once 'inc/db.php';
include_once 'inc/functions.php';
global $DB;

LoadString("action");

switch ($action) {
    // Start page
  case 'getCompaniesList':
    $getInfo = $DB->prepare("SELECT * FROM companies");
    $getInfo->execute();

    if ($getInfo->rowCount()) {
      $driversInfo = $getInfo->fetchAll();
      $response["info"] = $driversInfo;
    }
    break;

  case 'getPersonsList':
    $getInfo = $DB->prepare("SELECT * FROM persons");
    $getInfo->execute();

    if ($getInfo->rowCount()) {
      $driversInfo = $getInfo->fetchAll();
      $response["info"] = $driversInfo;
    }
    break;


    // Register page
  case 'registerCompany':
    LoadString("name");
    LoadString("address");

    $getInfo = $DB->prepare("INSERT INTO companies (`name`, `address`) VALUES (?, ?)");
    $response["info"] = $getInfo->execute(array($name, $address));
    break;

  case 'registerPerson':
    LoadString("name");
    LoadString("title");
    LoadString("phone");

    $getInfo = $DB->prepare("INSERT INTO persons (`name`, `title`, `phone`) VALUES (?, ?, ?)");
    $response["info"] = $getInfo->execute(array($name, $title, $phone));
    break;

    // Edit page
  case 'updateCompany':
    LoadInt("id");
    LoadString("name");
    LoadString("address");

    $getInfo = $DB->prepare("UPDATE companies SET name = ?, address = ? where id = ?");
    $response["info"] = $getInfo->execute(array($name, $address, $id));
    break;

  case 'updatePerson':
    LoadInt("id");
    LoadString("name");
    LoadString("title");
    LoadString("phone");

    $getInfo = $DB->prepare("UPDATE persons SET name = ?, title = ?, phone = ? where id = ?");
    $response["info"] = $getInfo->execute(array($name, $title, $phone, $id));
    break;

  default:
    $response['status'] = 404;
    break;
}
header('Content-Type: application/json');
print(json_encode($response));
