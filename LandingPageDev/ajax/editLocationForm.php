<?php
$id = $_POST['editLocationID'];
$name = $_POST['editLocationName'];
$addr = $_POST['editLocationAddress'];
$phone = $_POST['editLocationPhone'];
$website = $_POST['editLocationWebsite'];

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
$sql = "UPDATE locations SET Name='".$name."', Address='".$addr."', Phone='".$phone."', Website='".$website."' WHERE Id = " . $id;

$result = mysqli_query($conn, $sql);

if(! $result ) {
  die('Could not enter data: ' . mysqli_error($result));
}

mysqli_close($conn);

header('Location: ../index.php');
exit;
 ?>
