<?php
$name = $_POST['locationName'];
$address = $_POST['locationAddress'];
$phone = $_POST['locationPhone'];
$site = $_POST['locationWebsite'];

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
$sql = "INSERT INTO locations (Name, Address, Phone, Website)
          Values ('".$name."', '".$address."', '".$phone."', '".$site."')";

$result = mysqli_query($conn, $sql);

if(! $result ) {
  die('Could not enter data: ' . mysqli_error($result));
}

mysqli_close($conn);

header('Location: ../index.php');
exit;
 ?>
