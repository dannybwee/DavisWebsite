<?php

include 'dbconnect.php';

$sql = "SELECT Name FROM locations WHERE Id NOT IN (SELECT Location_Id FROM locationitems_recycling) AND Id NOT IN (SELECT Location_Id FROM locationitems_reuse)";

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

//sends the data to javascript
echo json_encode($array);

mysqli_close($conn);

//header('Location: ../index.php');
exit();
 ?>
