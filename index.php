<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

define("ALLOWED", true);

require_once "inc/db.php";
require_once "inc/functions.php";

LoadString("dir");


require_once "header.php";

switch ($dir) {
  case 'edit':
  case 'create':
    require_once(sprintf("pages/%s.php", $dir));
    break;

  default:
    require_once("pages/weknowit.php");
    break;
}

require_once "footer.php";



