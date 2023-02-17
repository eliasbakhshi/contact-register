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

  case 'deleteCompany':
    LoadInt("id");
    $getInfo = $DB->prepare("DELETE FROM companies WHERE id = ?");
    $response["info"] = $getInfo->execute(array($id));
    break;

  case 'deletePerson':
    LoadInt("id");
    $getInfo = $DB->prepare("DELETE  FROM persons WHERE id = ?");
    $response["info"] = $getInfo->execute(array($id));
    break;


    // Register page
  case 'registerCompany':
    LoadString("name");
    LoadString("address");
    LoadString("contactPersonsId");

    $getInfo = $DB->prepare("INSERT INTO companies (`name`, `address`, `contact_persons_id`) VALUES (?, ?, ?)");
    $response["info"] = $getInfo->execute(array($name, $address, $contactPersonsId));
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
    LoadString("contactPersonsId");

    $getInfo = $DB->prepare("UPDATE companies SET name = ?, address = ?, contact_persons_id = ? where id = ?");
    $response["info"] = $getInfo->execute(array($name, $address, $contactPersonsId,  $id));
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
