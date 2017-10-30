<?php
	 session_start();
	$servername = "localhost";
	$username = "root";
	$password = "";

	$user = $_POST['User'];
	$Userpassword = $_POST['Password'];
	$password_hash = password_hash($Userpassword, PASSWORD_DEFAULT);
	$userid = "";
	$storedPassword = "";

	// Create connection

	$conn= mysqli_connect("$servername","$username","$password") or die ("could not connect to mysql");
	mysqli_select_db($conn, "dpw_recyclopedia") or die ("no database");
	$sql = "SELECT Username, Password FROM Users WHERE Username = '".$user."'";
	$result = $conn->query($sql);


	if(! $result ) {
		die('Could not select data: ' . mysqli_error($conn));
    }

	if (mysqli_num_rows($result) > 0) {
		// output data of each row
		while($row = mysqli_fetch_assoc($result)) {
			//echo "user: " . $row["UserName"]. " " . $row["Password"]. "<br>";
			$storedPassword = $row["Password"];
		}
	} else {
		echo "User Not Found";
	}

	//$row = mysqli_fetch_assoc($result);

	 if (password_verify($Userpassword , $storedPassword)) {

					$_SESSION['Id'] = $sql;
					header ('Location: http://localhost/LandingPageDev/index.php?loginsuccess');
					exit();
	 } else {
	 header ('Location: http://localhost/LandingPageDev/index.php?loginFail');
	 exit();
	 }

	mysqli_close($conn);
?>
