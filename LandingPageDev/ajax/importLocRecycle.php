<?php

include 'dbconnect.php';

$sql = 'SELECT Name FROM locationitems_recycling, locations WHERE locationitems_recycling.Id = locations.Id ORDER BY Name';

//queries the database

mysqli_query($conn, "SET NAMES 'utf8'");
$result = mysqli_query($conn,$sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
    echo '<option value="' . $row['Name'] . '">' . $row['Name'] . '</option>';
  }
} else {
  // no results found
}

//closes connection to the database
mysqli_close($conn);
 ?>
