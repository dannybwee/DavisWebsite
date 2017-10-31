<?php

$id = $_GET['deleteItemID'];

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

mysqli_close($conn);

header('Location: ../index.php');
exit;
?>
