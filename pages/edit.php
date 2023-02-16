<?php
if (!defined('ALLOWED')) die('Permission denied');

LoadString("type");
LoadInt("id");

printf('<main id="editPage">');

if ($type == "company") {


  $getInfo = $DB->prepare("SELECT * FROM companies where id = ? LIMIT 1");
  $getInfo->execute(array($id));

  if ($getInfo->rowCount()) {
    $info = $getInfo->fetch(); ?>
    <section class="company">
      <form action="" id="<?php echo $info["id"]; ?>">
        <input type="text" placeholder="Name" name="name" value="<?php echo $info["name"]; ?>" required>
        <input type="text" placeholder="Address" name="address" value="<?php echo $info["address"]; ?>">
        <button>Save</button>
        <a href="/">Back</a>
      </form>
    </section>
  <?php

  } else {
    printf("there is nothing to show :)");
  }
} else if ($type == "person") {
  $getInfo = $DB->prepare("SELECT * FROM persons where id = ? LIMIT 1");
  $getInfo->execute(array($id));

  if ($getInfo->rowCount()) {
    $info = $getInfo->fetch(); ?>
    <section class="person">
      <form action="" id="<?php echo $info["id"]; ?>">
        <input type="text" placeholder="Name" name="name" value="<?php echo $info["name"]; ?>" required>
        <input type="text" placeholder="Title" name="title" value="<?php echo $info["title"]; ?>">
        <input type="text" placeholder="Phone" name="phone" value="<?php echo $info["phone"]; ?>">
        <button>Save</button>
        <a href="/">Back</a>
      </form>
    </section>
<?php

  } else {
    printf("there is nothing to show :)");
  }
}
printf('</main>');
