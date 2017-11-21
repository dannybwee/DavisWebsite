<?php
include 'dbconnect.php';

$message = "";

$name = $_POST['locationName'];
$address = $_POST['locationAddress'];
$phone = $_POST['locationPhone'];
$site = $_POST['locationWebsite'];
$city = $_POST['locationCity'];
$state = $_POST['locationState'];
$zip = $_POST['locationZip'];
$notes = $_POST['locationNotes'];
$itemRecycle = array();
if(isset($_POST['item_recycle'])) {
    $itemRecycle = $_POST['item_recycle'];
}
$itemReuse = array();
if(isset($_POST['item_reuse'])) {
    $itemReuse = $_POST['item_reuse'];
}


$sql = "INSERT INTO locations (Name, Address, Phone, Website, City, State, Zip, Notes)
          Values ('".$name."', '".$address."', '".$phone."', '".$site."', '".$city."', '".$state."', '".$zip."', '".$notes."')";

$result = mysqli_query($conn, $sql);

if(! $result ) {
  die('Could not enter data: ' . mysqli_error($result));
}

$sql = "SELECT Id FROM locations WHERE Name='".$name."'";

$result = mysqli_query($conn, $sql);

$locationID;

//item ID value
if ($result->num_rows > 0) {

    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        $locationID = $row['Id'];
    }
} else {
  // no results found
}

if(isset($itemRecycle)) {
    $itemIDs = array();
    foreach($itemRecycle as $i) {
        $sql = "SELECT Id FROM items WHERE Name='".$i."'";
        $result = mysqli_query($conn, $sql);
        if ($result->num_rows > 0) {

            // output data of each row
            while($row = mysqli_fetch_assoc($result)) {
                $itemIDs[] = $row['Id'];
            }
        }
    }
    $itemIDs = array_unique($itemIDs);
    foreach($itemIDs as $i) {
      $relation = $locationID;
	   	$relation .= '.';
	   	$relation .= $i;
		  $relation = (float)$relation;
      $sql = "INSERT INTO locationitems_recycling (Id, Location_Id, Item_Id) VALUES ('".$relation."', '".$locationID."', '".$i."')";
      $result = mysqli_query($conn, $sql);
      if(! $result ) {
        die('Could not enter data: ' . mysqli_error($result));
      }
    }
}

if(isset($itemReuse)) {
  $itemIDs = array();
  foreach($itemReuse as $i) {
      $sql = "SELECT Id FROM items WHERE Name='".$i."'";
      $result = mysqli_query($conn, $sql);
      if ($result->num_rows > 0) {

          // output data of each row
          while($row = mysqli_fetch_assoc($result)) {
              $itemIDs[] = $row['Id'];
          }
      }
  }
  $itemIDs = array_unique($itemIDs);
  foreach($itemIDs as $i) {
    $relation = $locationID;
    $relation .= '.';
    $relation .= $i;
    $relation = (float)$relation;
    $sql = "INSERT INTO locationitems_reuse (Id, Location_Id, Item_Id) VALUES ('".$relation."', '".$locationID."', '".$i."')";
    $result = mysqli_query($conn, $sql);
    if(! $result ) {
      die('Could not enter data: ' . mysqli_error($result));
    }
  }
}

mysqli_close($conn);

header('Location: ../index.php');

exit();
?>
