<?php
$itemID = $_GET['key'];

include 'dbconnect.php';

$sql = 'SELECT Location_Id FROM locationitems_recycling WHERE locationitems_recycling.Item_Id = ' . $itemID;

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
