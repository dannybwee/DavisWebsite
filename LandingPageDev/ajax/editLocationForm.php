<?php
include 'dbconnect.php';

function showAlert($message) {
  echo '<script language="javascript"> ';
  echo 'window.location.replace("../index.php");';
  echo 'alert("'.$message.'");';
  echo '</script>';
}

$id = $_POST['editLocationID'];
$name = $_POST['editLocationName'];
$addr = $_POST['editLocationAddress'];
$phone = $_POST['editLocationPhone'];
$website = $_POST['editLocationWebsite'];
$city = $_POST['editLocationCity'];
$state = $_POST['editLocationState'];
$zip = $_POST['editLocationZip'];
$notes = $_POST['editLocationNotes'];
$itemRecycle = array();
if(isset($_POST['editItem_recycle'])) {
  $itemRecycle = $_POST['editItem_recycle'];
}
$itemReuse = array();
if(isset($_POST['editItem_reuse'])) {
  $itemReuse = $_POST['editItem_reuse'];
}

$sql = "UPDATE locations SET Name='".$name."', Address='".$addr."', Phone='".$phone."', Website='".$website."', City='".$city."', State='".$state."', Zip='".$zip."', Notes='".$notes."' WHERE Id = " . $id;

$result = mysqli_query($conn, $sql);

if(! $result ) {
  die('Could not enter data: ' . mysqli_error($result));
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

  $sql = "DELETE FROM locationitems_recycling WHERE Location_Id = " .$id;
  $result = mysqli_query($conn, $sql);

  $itemIDs = array_unique($itemIDs);
  foreach($itemIDs as $i) {
    $sql = "INSERT INTO locationitems_recycling (Location_Id, Item_Id)
    VALUES ('".$id."', '".$i."')";
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

  $sql = "DELETE FROM locationitems_reuse WHERE Location_Id = " .$id;
  $result = mysqli_query($conn, $sql);

  $itemIDs = array_unique($itemIDs);
  foreach($itemIDs as $i) {
    $sql = "INSERT INTO locationitems_reuse (Location_Id, Item_Id)
    VALUES ('".$id."', '".$i."')";
    $result = mysqli_query($conn, $sql);
    if(! $result ) {
      die('Could not enter data: ' . mysqli_error($result));
    }
  }
}

mysqli_close($conn);

$message = "Location Edited Successfully";

showAlert($message);

exit();
?>
