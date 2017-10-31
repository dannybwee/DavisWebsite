<?php
include 'dbconnect.php';

$key = $_GET['key'];
$sql = "SELECT Name, Id, General_Info, Notes, Image_Name FROM Items WHERE `name` LIKE '$key%' ORDER BY Name";

//queries the database
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

//closes connection to the database
mysqli_close($conn);
 ?>
