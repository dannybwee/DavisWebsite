<?php

  $servername = "localhost";
	$username = "root";
	$password = "";

	$user = $_POST['User'];
	$Userpassword = $_POST['Password'];
	$password_hash = password_hash($Userpassword, PASSWORD_DEFAULT);


	// Create connection

	$conn= mysqli_connect("$servername","$username","$password") or die ("could not connect to mysql");

	mysqli_select_db($conn, "dpw_recyclopedia") or die ("no database");



      $sql = mysqli_query($conn, "INSERT INTO Users (Username, Password, isEnabled) Values ('".$user."', '".$password_hash."',1)");
	  if(! $sql ) {
               die('Could not enter data: ' . mysqli_error($conn));
            }

            echo "Entered data successfully\n";

            mysqli_close($conn);


?>
