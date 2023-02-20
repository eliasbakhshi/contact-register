<?php
if (!defined('ALLOWED')) die('Permission denied');

LoadString("action");
LoadInt("id");

printf('<main id="companyPage" class="container">');

$info = [];
if ($action == "register") {
  $info = [
    "id" => "register",
    "name" => "",
    "address" => "",
    "contact_persons_id" => "",
  ];
} else if ($action == "edit") {
  $getInfo = $DB->prepare("SELECT * FROM companies where id = ? LIMIT 1");
  $getInfo->execute(array($id));

  if ($getInfo->rowCount()) {
    $info = $getInfo->fetch();
  } else {
    die("there is nothing to show :)");
  }
}
?>
<section class="company">
  <form action="" id="<?php echo $info["id"]; ?>">
    <p class="message"></p>
    <input type="text" placeholder="Name" name="name" value="<?php echo $info["name"]; ?>" required>
    <input type="text" placeholder="Address" name="address" value="<?php echo $info["address"]; ?>">
    <section class="persons" data-persons="<?php echo $info['contact_persons_id']; ?>">
      <div class="head">
        <span>Persons</span>
      </div>
      <div class="body">
        <ul class="list">
          <li>Loading ...</li>
        </ul>
      </div>
    </section>
    <button class="btn">Save</button>
    <a class="btn" href="/">Back</a>
  </form>
</section>
</main>
