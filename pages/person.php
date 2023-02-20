<?php
if (!defined('ALLOWED')) die('Permission denied');

LoadString("action");
LoadInt("id");

printf('<main id="personPage" class="container">');

$info = [];
if ($action == "register") {
  $info = [
    "id" => "register",
    "name" => "",
    "title" => "",
    "phone" => "",
  ];
} else if ($action == "edit") {
  $getInfo = $DB->prepare("SELECT * FROM persons where id = ? LIMIT 1");
  $getInfo->execute(array($id));

  if ($getInfo->rowCount()) {
    $info = $getInfo->fetch();
  } else {
    die("there is nothing to show :)");
  }
}
?>

<section class="person">
  <form action="" id="<?php echo $info["id"]; ?>">
    <p class="message"></p>
    <input type="text" placeholder="Name" name="name" value="<?php echo $info["name"]; ?>" required>
    <input type="text" placeholder="Title" name="title" value="<?php echo $info["title"]; ?>">
    <input type="text" placeholder="Phone" name="phone" value="<?php echo $info["phone"]; ?>">
    <button class="btn">Save</button>
    <a class="btn" href="/">Back</a>
  </form>
</section>
</main>
