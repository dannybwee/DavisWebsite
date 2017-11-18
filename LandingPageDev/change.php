<?php
	$servername = "localhost";
	$username = "root";
	$password = "";

	$user = $_POST['User'];
	$Userpassword = $_POST['Password'];
  $NewPassword = $_POST['NewPassword'];
  $ConfirmPass = $_POST['NewPasswordConfirm'];
	$password_hash = password_hash($Userpassword, PASSWORD_DEFAULT);
  $password_hash_new = password_hash($NewPassword, PASSWORD_DEFAULT);

	$storedPassword = "";

	// Create connection

	$conn= mysqli_connect("$servername","$username","$password") or die ("could not connect to mysql");
	mysqli_select_db($conn, "dpw_recyclopedia") or die ("no database");
	$sql = "SELECT Username, Password FROM Users WHERE Username = '".$user."'";
	$result = mysqli_query($conn, $sql);
	$sql1 = "UPDATE Users SET Password='".$password_hash_new."' where Username='".$user."'";
	$result1 = mysqli_query($conn, $sql1);


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
		echo "User Not Found"; //Probably won't have this error message in Prod
	}

	if (password_verify($Userpassword , $storedPassword)) {
    if($NewPassword ==  $ConfirmPass){
			if($result1){
				echo "Password Updated";
			}
    }
    if(! $sql1 ) {
               die('Could not enter data: ' . mysqli_error($conn));
            }
            //echo "Entered data successfully\n";
	}else {
		echo 'Password Mismatch';
	}


	mysqli_close($conn);
?>
