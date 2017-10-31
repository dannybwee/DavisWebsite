<?php
if (isset($_SESSION['Id'])){
  echo "<div 'class='btn-group' id = 'editItems'>
	<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#addModal'>Add Item</button>
	<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#addLocationModal'>Add Location</button>";
	} else {                              
}
?>
