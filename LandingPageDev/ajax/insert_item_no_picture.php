<?php
include 'dbconnect.php';
$conn = new mysqli("localhost", "root", "", "dpw_recyclopedia");
// Check connection
if ($conn->connect_error) {
    die("connection to database failed: " . $conn->connect_error);
}

//if submit button is pressed
if(isset($_POST['submit'])){

//get all item info
$item_name = $_POST['item_name'];
$item_info = $_POST['item_info'];
$item_notes = $_POST['item_notes'];

//insert into database
$sql = "INSERT INTO items (Name, General_Info, Notes, Image_Name)
VALUES ('$item_name', '$item_info', '$item_notes','')";
}

if ($conn->query($sql) === TRUE) {
    echo "Item successfully added";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
