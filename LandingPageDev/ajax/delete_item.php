<?php

include 'dbconnect.php';
$id = $_GET['deleteItemID'];


$sql1 = "DELETE FROM locationitems_recycling WHERE Item_Id = '".$id."'";
$result = mysqli_query($conn, $sql1);
if(! $result ) {
  die('Could not enter data: ' . mysqli_error($result));
}


$sql2 = "DELETE FROM locationitems_reuse WHERE Item_Id = '".$id."'";
$result = mysqli_query($conn, $sql2);
if(! $result ) {
  die('Could not enter data: ' . mysqli_error($result));
}


$sql3 = "DELETE FROM items WHERE Id = '".$id."'";
$result = mysqli_query($conn, $sql3);
if(! $result ) {
  die('Could not enter data: ' . mysqli_error($result));
}

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
