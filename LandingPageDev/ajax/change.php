<?php
	include 'dbconnect.php';

	$user = $_POST['changePwUser'];
	$Userpassword = $_POST['changePwPassword'];
  	$NewPassword = $_POST['newPassword'];
	$ConfirmPass = $_POST['newPasswordConfirm'];
	  
	$password_hash = password_hash($Userpassword, PASSWORD_DEFAULT);
  	$password_hash_new = password_hash($NewPassword, PASSWORD_DEFAULT);

	$storedPassword = "";
	$msg = "";

	$sql = "SELECT Username, Password FROM Users WHERE Username = '".$user."'";
	$result = mysqli_query($conn, $sql);
	$sql1 = "UPDATE Users SET Password='".$password_hash_new."' where Username='".$user."'";

	if(! $result ) {
		die('Could not select data: ' . mysqli_error($conn));
  }

	if (mysqli_num_rows($result) > 0) {

		// output data of each row
		while($row = mysqli_fetch_assoc($result)) {
			$storedPassword = $row["Password"];
		}
	} else {
		$msg = "Password change FAIL: User not found";
	}

	if (password_verify($Userpassword , $storedPassword)) {
    	if($NewPassword == $ConfirmPass){
			if(mysqli_query($conn, $sql1)){
				$msg = "Password change SUCCESS";
			}
    	}
    	if(! $sql1 ) {
			die('Could not enter data: ' . mysqli_error($conn));
		}
	} else {
		if($msg == ""){
			$msg = "Password change FAIL: Passwords do not match";
		}
	}

	mysqli_close($conn);

	echo ("<script language='JavaScript'>");
	echo ("window.alert('".$msg."');");
	echo ("window.location.href='../index.php';");
	echo ("</script>");
?>
