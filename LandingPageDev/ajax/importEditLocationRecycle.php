<?php

include 'dbconnect.php';

$sql = 'SELECT Name, Id FROM locationitems_recycling, locations WHERE locationitems_recycling.Id = locations.Id ORDER BY Name';

//queries the database

mysqli_query($conn, "SET NAMES 'utf8'");
$result = mysqli_query($conn,$sql);

$Locations = array();

if ($result->num_rows > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
    $Locations[] = $row;
    echo '<option value="' . $row['Name'] . '">' . $row['Name'] . '</option>';
  }
}

$sql = 'SELECT '

//closes connection to the database
mysqli_close($conn);
 ?>
