<?php
if (!defined('ALLOWED')) die('Permission denied');
?>
<footer>

</footer>
<!-- Make svg icons available in the JS -->
<script>
  var deleteIcon = <?php echo json_encode(svg("trash-bin")) ?>;
  var editIcon = <?php echo json_encode(svg("edit-pen")) ?>;
  var userIcon = <?php echo json_encode(svg("user")) ?>;
  var companyIcon = <?php echo json_encode(svg("company")) ?>;
  var addressIcon = <?php echo json_encode(svg("address")) ?>;
  var phoneIcon = <?php echo json_encode(svg("phone")) ?>;
</script>
</body>
</html>


<?php
