<?php
if (!defined('ALLOWED')) die('Permission denied');
?>

<main id="startPage" class="container">
  <section class="companies" size=5>
    <div class="head">
      <span>Companies</span>
      <a href="/?page=company&action=register">New</a>
    </div>
    <div class="body">
    <input type="search" placeholder="Search" />
      <ul class="list">
        <li>Loading ...</li>
      </ul>
    </div>
  </section>
  <section class="persons">
    <div class="head">
      <span>Persons</span>
      <a href="/?page=person&action=register">New</a>
    </div>
    <div class="body">
    <input type="search" placeholder="Search" />
      <ul class="list">
        <li>Loading ...</li>
      </ul>
    </div>
  </section>

</main>
