<?php
$key = $_GET['key'];

include 'dbconnect.php';

$sql = "SELECT * FROM locations WHERE (Id IN (SELECT Location_Id FROM locationitems_recycling WHERE Item_Id = '$key')) ORDER BY Name";

mysqli_query($conn, "SET NAMES 'utf8'");
$result = mysqli_query($conn,$sql);

$array = array();

if ($result->num_rows > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
    $array[] = $row;
  }
} else {
  // no results found
}

$sql = "SELECT * FROM locations WHERE (Id IN (SELECT Location_Id FROM locationitems_reuse WHERE Item_Id = '$key')) ORDER BY `name`";

mysqli_query($conn, "SET NAMES 'utf8'");
$result = mysqli_query($conn,$sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
    $array[] = $row;
  }
} else {
  // no results found
}

//sends the data to javascript
echo json_encode($array);

//closes connection to the database
mysqli_close($conn);
 ?>
