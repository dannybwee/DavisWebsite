<?php

include 'dbconnect.php';

$name = $_GET['key'];

$sql = "SELECT Name FROM Items WHERE Name='".$name."'";

//queries the database

mysqli_query($conn, "SET NAMES 'utf8'");
$result = mysqli_query($conn,$sql);

$array = array();

if ($result->num_rows > 0) {
  // output data of each row
  echo 'match';
} else {
  // no results found
  echo 'noMatch';
}

//closes connection to the database
mysqli_close($conn);
 ?>
