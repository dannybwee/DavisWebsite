<?php
include 'dbconnect.php';

$key = $_POST['key'];
$key2 = $_POST['key2'];

$sql = "UPDATE NoticeInfo SET Info = '".$key2."' WHERE Id = " . $key;

if (mysqli_query($conn, $sql)) {
    echo "Record updated successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
