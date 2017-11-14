<?php

include 'dbconnect.php';

$key = $_GET['key'];
$key = $key . "%";
$sql = "
	SELECT DISTINCT l.*
	FROM (
	    SELECT Location_Id, COUNT(*) AS ItemCount FROM locationitems_reuse GROUP BY Location_Id
		UNION
		SELECT Location_Id, COUNT(*) AS ItemCount FROM locationitems_recycling GROUP BY Location_Id) data
	JOIN locations l ON data.Location_Id = l.Id
	WHERE l.Name LIKE '$key'
	ORDER BY data.ItemCount DESC LIMIT 5";

//queries the database

mysqli_query($conn, "SET NAMES 'utf8'");
$result = mysqli_query($conn,$sql);

$array = array();

if ($result->num_rows > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
    $array[] = $row;
  }
} else {
  // no results found
}

//sends the data to javascript
echo json_encode($array);

//closes connection to the database
mysqli_close($conn);
 ?>
