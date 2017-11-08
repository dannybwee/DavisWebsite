<?php
include 'dbconnect.php';
$id = $_POST['editItemID'];
$name = $_POST['editItemName'];
$gi = $_POST['editGeneralInfo'];
$notes = $_POST['editAdditionalNotes'];
$image = $_POST['editInputImage'];
$locRecycle = array();
if(isset($_POST['editLoc_recycle'])) {
  $locRecycle = $_POST['editLoc_recycle'];
}
$locReuse = array();
if(isset($_POST['editLoc_reuse'])) {
  $locReuse = $_POST['editLoc_reuse'];
}
$sql = "UPDATE items SET Name='".$name."', General_Info='".$gi."', Notes='".$notes."' WHERE Id = " . $id;

$result = mysqli_query($conn, $sql);

if(! $result ) {
  die('Could not enter data: ' . mysqli_error($result));
}

if(isset($locRecycle)) {
  $locationIDs = array();
  foreach($locRecycle as $l) {
    $sql = "SELECT Id FROM locations WHERE Name='".$l."'";
    $result = mysqli_query($conn, $sql);
    if ($result->num_rows > 0) {
      // output data of each row
      while($row = mysqli_fetch_assoc($result)) {
        $locationIDs[] = $row['Id'];
      }
    }
  }

  $sql = "DELETE FROM locationitems_recycling WHERE Item_Id = " .$id;
  $result = mysqli_query($conn, $sql);

  $locationIDs = array_unique($locationIDs);
  foreach($locationIDs as $l) {
    $sql = "INSERT INTO locationitems_recycling (Location_Id, Item_Id)
    VALUES ('".$l."', '".$id."')";
    $result = mysqli_query($conn, $sql);
    if(! $result ) {
      die('Could not enter data: ' . mysqli_error($result));
    }
  }
}

if(isset($locReuse)) {
  $locationIDs = array();
  foreach($locReuse as $l) {
    $sql = "SELECT Id FROM locations WHERE Name='".$l."'";
    $result = mysqli_query($conn, $sql);
    if ($result->num_rows > 0) {
      // output data of each row
      while($row = mysqli_fetch_assoc($result)) {
        $locationIDs[] = $row['Id'];
      }
    }
  }

  $sql = "DELETE FROM locationitems_reuse WHERE Item_Id = " .$id;
  $result = mysqli_query($conn, $sql);

  $locationIDs = array_unique($locationIDs);
  foreach($locationIDs as $l) {
    $sql = "INSERT INTO locationitems_reuse (Location_Id, Item_Id)
    VALUES ('".$l."', '".$id."')";
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
