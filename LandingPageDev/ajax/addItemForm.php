<?php
$name = $_POST['itemName'];
$gi = $_POST['generalInfo'];
$notes = $_POST['additionalNotes'];
$image = $_POST['imageLocation'];
$locRecycle = array();
if(isset($_POST['loc_recycle'])) {
  $locRecycle = $_POST['loc_recycle'];
}
$locReuse = array();
if(isset($_POST['loc_reuse'])) {
  $locReuse = $_POST['loc_reuse'];
}
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dpw_recyclopedia";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "INSERT INTO items (Name, General_Info, Notes, Image_Name)
          Values ('".$name."', '".$gi."', '".$notes."', '".$image."')";

$result = mysqli_query($conn, $sql);

if(! $result ) {
  die('Could not enter data: ' . mysqli_error($result));
}

$sql = "SELECT Id FROM items WHERE Name='".$name."'";

$result = mysqli_query($conn, $sql);

$itemID;
//item ID value
if ($result->num_rows > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
    $itemID = $row['Id'];
  }
} else {
  // no results found
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
  $locationIDs = array_unique($locationIDs);
  foreach($locationIDs as $l) {
    $sql = "INSERT INTO locationitems_recycling (Location_Id, Item_Id)
    VALUES ('".$l."', '".$itemID."')";
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
  $locationIDs = array_unique($locationIDs);
  foreach($locationIDs as $l) {
    $sql = "INSERT INTO locationitems_reuse (Location_Id, Item_Id)
    VALUES ('".$l."', '".$itemID."')";
    $result = mysqli_query($conn, $sql);
    if(! $result ) {
      die('Could not enter data: ' . mysqli_error($result));
    }
  }
}

mysqli_close($conn);

header('Location: ../index.php');
exit;
 ?>
