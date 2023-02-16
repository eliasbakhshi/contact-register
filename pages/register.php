<?php
if (!defined('ALLOWED')) die('Permission denied');
LoadString("type");
printf('<main id="createPage">');



if ($type == "company") {
?>
  <section class="company">
    <form action="">
      <input type="text" placeholder="Name" name="name" required>
      <input type="text" placeholder="Address" name="address">
      <button>Register</button>
      <a href="/">Back</a>
    </form>

  </section>
<?php
} else if ($type == "person") {
?>
  <section class="person">
    <form action="">
      <input type="text" placeholder="Name" name="name" required>
      <input type="text" placeholder="Title" name="title">
      <input type="text" placeholder="Phone" name="phone">
      <button>Register</button>
      <a href="/">Back</a>
    </form>

  </section>
<?php
}
printf('</main>');
