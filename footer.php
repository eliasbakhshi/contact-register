<?php
if (!defined('ALLOWED')) die('Permission denied');
?>
<footer>

</footer>
<!-- Make svg icons available in the JS -->
<script>
  var deleteIcon = <?php echo json_encode(svg("trash-bin")) ?>;
  var editIcon = <?php echo json_encode(svg("edit-pen")) ?>;
</script>
</body>
</html>


<?php
