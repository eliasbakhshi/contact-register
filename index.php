<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

define("ALLOWED", true);

require_once "inc/db.php";
require_once "inc/functions.php";

LoadString("page");


if ($page === "fetch") {
  require_once('fetch.php');
} else {
  require_once "header.php";
  switch ($page) {
    case 'company':
    case 'person':
      require_once(sprintf("pages/%s.php", $page));
      break;

    default:
      require_once("pages/index.php");
      break;
  }

  require_once "footer.php";
}




