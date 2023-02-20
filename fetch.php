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
    LoadString("search");
    $getInfo = $DB->prepare("SELECT * FROM companies WHERE name LIKE ?");
    $getInfo->execute(["%".$search."%"]);

    if ($getInfo->rowCount()) {
      $companiesInfo = $getInfo->fetchAll();
      foreach ($companiesInfo as $key => $companyInfo) {
        if ($companyInfo["contact_persons_id"] !== "") {
          $contactPersonsId = explode(",", $companyInfo["contact_persons_id"] ?? "");
          unset($companiesInfo[$key]["contact_persons_id"]);
          $getInfo = $DB->prepare("SELECT name, phone FROM persons where id = ?");
          $getInfo->execute(array($contactPersonsId[0]));
          if ($getInfo->rowCount()) {
            $personInfo = $getInfo->fetch();
            $companiesInfo[$key]['contactPerson'] = $personInfo['name'];
            $companiesInfo[$key]['contactPersonPhone'] = $personInfo['phone'];
          }
        }
      }
      $response["info"] = $companiesInfo;
    }
    break;

  case 'getPersonsList':
    LoadString("search");
    $getInfo = $DB->prepare("SELECT * FROM persons WHERE name LIKE ?");
    $getInfo->execute(["%".$search."%"]);

    if ($getInfo->rowCount()) {
      $companiesInfo = $getInfo->fetchAll();
      $response["info"] = $companiesInfo;
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
