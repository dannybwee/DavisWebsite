<?php
/*User enters email address
Code looks for email address in user table, and if it is there, it will send an email with a link to a password reset page.
The email will also contain a generated code (hashed time stamp)
A hash of the code (a hashed hashed time stamp) will be put in the user table under corresponding email as 'Code'
  - The code will be hashed and stored in the database before the email is sent so that when the user inputs that to update the password, it can check it against the hashed code in the database to see if it will allow the user to do this.
The user can then put in the code, and a new password (similar to change password form) into a reset pw form
After password is reset, the hashed password in the database under that user will now be that of the new password, and the timestamp code should be deleted from the table
User should now be able to go login as usual
*/


	$servername = "localhost";
	$username = "root";
	$password = "";

	$user = $_POST['User'];
	$storedUser = "";
	//$Userpassword = $_POST['Password'];
  $code = time();
	//$code_hash = password_hash($code, PASSWORD_DEFAULT); //code sent to user
  //$stored_code = password_hash($code_hash, PASSWORD_DEFAULT); //code stored in DB


//set up variables for the email
  $to      = ".$user.";
  $subject = 'Recyclopedia Password Recovery';
  $message = 'Please follow this link to reset your password: <LINK> with code: .$code_hash.'; //how to insert variable in here

	// Create connection
	$conn= mysqli_connect("$servername","$username","$password") or die ("could not connect to mysql");
	mysqli_select_db($conn, "dpw_recyclopedia") or die ("no database");


//sql query to select username from db so that we can compare it to what user entered
	$sql = "SELECT Username, Password FROM Users WHERE Username = '".$user."'";
	$result = mysqli_query($conn, $sql);

//Note: need somewhere in database table that stores the code_hash. calling it 'Code'
//put secret code in user table to be accessed later
  //$sql1 = mysqli_query($conn, "INSERT INTO Users (Code) Values ('".$stored_code."')");
  //if(! $sql ) {
    //       die('Could not enter data: ' . mysqli_error($conn));
  //}

	if(! $result ) {
		die('Could not select data: ' . mysqli_error($conn));
	}


 	if (mysqli_num_rows($result) > 0){
		while($row = mysqli_fetch_assoc($result)){
			$storedUser = $row['Username'];
		}
	}else{
		echo "User Not Found"; //only for testing purposes
	}


/* //if the email entered matches the email in the user table
	if (mysql_result($result, 0) = $user) { //can I even do this?
    //send an email to the user with link to reset pw and secret code
		mail($to, $subject, $message);

	} else {
    //This won't actually display if there is an error. If it fails, it should only be because user doesn't exist.
		echo "User Not Found";
	}*/


//compare what user typed to the username for admin that is stored
	if(strcmp($user, $storedUser) == 0){ //this is case sensitive though and we don't want that - get it working first
		//echo 'User matches'; //for testing purposes
		echo 'User Matches';
		$code_hash = password_hash($code, PASSWORD_DEFAULT);
		$pwurl = "localhost/LandingPageDev/resetPW.html?q=".$code_hash;
		echo ".$pwurl.";
		mail($to, $subject, $message);
	}else{
		echo 'Mismatch'; //for testing purposes
	}


	mysqli_close($conn);
?>
