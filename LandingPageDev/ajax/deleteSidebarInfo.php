<?php
include 'dbconnect.php';

$key = $_POST['key'];

$sql = "DELETE FROM NoticeInfo WHERE Id = " . $key;

if (mysqli_query($conn, $sql)) {
    echo "Delete Successful";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
