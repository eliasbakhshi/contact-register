<?php
if (!defined('ALLOWED')) die('Permission denied');
?>

<main id="startPage" class="container">
  <section class="companies">
    <div class="head">
      <span>Companies</span>
      <a class="btn" href="/?page=company&action=register">New</a>
    </div>
    <div class="body">
    <input type="search" id="searchCompany" value="" placeholder="Search" />
      <ul class="list">
        <li>Loading ...</li>
      </ul>
    </div>
  </section>
  <section class="persons">
    <div class="head">
      <span>Persons</span>
      <a class="btn" href="/?page=person&action=register">New</a>
    </div>
    <div class="body">
    <input type="search" id="searchPerson" value="" placeholder="Search" />
      <ul class="list">
        <li>Loading ...</li>
      </ul>
    </div>
  </section>
</main>
