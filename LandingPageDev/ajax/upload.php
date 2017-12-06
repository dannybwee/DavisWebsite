<?php
 	include 'dbconnect.php';

	$csv = $_FILES['uploadDataFile']['name'];

    $target_dir = "../csv/";
    $target_file = $target_dir.basename($csv);
    $uploadOk = 1;
    $csvFileType = pathinfo($target_file, PATHINFO_EXTENSION);

    // only allow csv files
    if($csvFileType != "csv") {
        echo "Sorry, only .csv files are allowed.";
    } else {
        if (move_uploaded_file($_FILES["uploadDataFile"]["tmp_name"], $target_file)) {
            echo "The file ". basename( $_FILES["uploadDataFile"]["name"]). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
			$uploadOk = 0;
        }

//if no errors with uploading file to server, upload stuff from file to database
if($uploadOk == 1) {

//insert items
$sql =
    "LOAD DATA LOCAL INFILE '".$target_file."'
     INTO TABLE items
     FIELDS
	OPTIONALLY ENCLOSED BY '\"'
	TERMINATED BY ','
     LINES
	TERMINATED BY '\n'
     IGNORE 2 ROWS
     (Name, General_Info,Notes,Image_Name)";


$result = mysqli_query($conn, $sql);


//insert locations
$sql =
    "LOAD DATA LOCAL INFILE '".$target_file."'
     INTO TABLE locations
     FIELDS
	OPTIONALLY ENCLOSED BY '\"'
	TERMINATED BY ','
     LINES
	TERMINATED BY '\n'
     IGNORE 2 ROWS
     (@dummy, @dummy, @dummy, @dummy, @dummy, Name, Address,Phone,Website,City,State,Zip,Notes)";

$result = mysqli_query($conn, $sql);

//insert relations

 $csvFile = file($target_file);
    $data = [];
    foreach ($csvFile as $line) {
        $data[] = str_getcsv($line);
    }

     for ($x = 2; $x < sizeof($data); $x = $x + 1) {
        $string1 = (string)$data[$x][14];

        $sql = "SELECT Id FROM items WHERE Name ='".$string1."'";
        $result = mysqli_query($conn, $sql);
        $r = mysqli_fetch_row($result);
        $item = $r[0];

        $string2 = (string)$data[$x][15];
        $sql = "SELECT Id FROM locations WHERE Name ='".$string2."'";
        $result = mysqli_query($conn, $sql);
        $r = mysqli_fetch_row($result);
        $location = $r[0];


	   	$relation = $location;
	   	$relation .= '.';
	   	$relation .= $item;
		//$relation = (float)$relation;

        $relation_type = $data[$x][16];

        if($relation_type == '1' || $relation_type == '2') {
        	$sql = "INSERT INTO locationitems_reuse (Id, Location_Id, Item_Id) Values ('".$relation."', '".$location."', '".$item."')";
  			$result = mysqli_query($conn, $sql);
        }
        if($relation_type == '0' || $relation_type == '2') {
        	$sql = "INSERT INTO locationitems_recycling (Id, Location_Id, Item_Id) Values ('".$relation."', '".$location."', '".$item."')";
			$result = mysqli_query($conn, $sql);
        }
      }
     }
    }

	unlink($target_file);

	mysqli_close($conn); // Closing Connection with Server

	header('Location: ../index.php');
	exit();
?>
