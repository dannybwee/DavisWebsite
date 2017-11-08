<?php

include 'dbconnect.php';

$sql = 'SELECT DISTINCT Name, Location_Id FROM locationitems_recycling, locations WHERE locationitems_recycling.Location_Id = locations.Id ORDER BY Name';

//queries the database

mysqli_query($conn, "SET NAMES 'utf8'");
$result = mysqli_query($conn,$sql);

$array = array();

if ($result->num_rows > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
    $array[] = $row;  }
} else {
  // no results found
}

echo json_encode($array);

//closes connection to the database
mysqli_close($conn);

?>
