<?php

$key = $_POST['key'];
$key2 = $_POST['key2'];

include 'dbconnect.php';

$sql = "INSERT INTO NoticeInfo (Id, Info)
VALUES ('key', '$key2')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>