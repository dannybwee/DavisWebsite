<?php
	include 'dbconnect.php';

	$user = $_POST['changePwUser'];
	$Userpassword = $_POST['changePwPassword'];
  	$NewPassword = $_POST['newPassword'];
	$ConfirmPass = $_POST['newPasswordConfirm'];
	  
	$password_hash = password_hash($Userpassword, PASSWORD_DEFAULT);
  	$password_hash_new = password_hash($NewPassword, PASSWORD_DEFAULT);

	$storedPassword = "";

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
			$storedPassword = $row["Password"];
		}
	} else {
		echo "User Not Found";
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
	} else {
		echo 'Password Mismatch';
	}

	mysqli_close($conn);

	header('Location: ../index.php');
	
	exit();
?>
