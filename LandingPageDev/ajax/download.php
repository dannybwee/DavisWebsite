
<?php

//connection stuff

include 'dbconnect.php';


//name for csv file to download

$name = "recyclopedia_database.csv";


//item fetching and storing

$sql = "SELECT Name as 'Item_Name', General_Info, Notes as 'Item_Notes', Image_Name FROM items";
$item_result = mysqli_query($conn, $sql);

$big_table = [];

$items = [];

foreach($item_result as $row) {
   array_push($row, "");
   array_push($items, $row);
}

//location fetching and storing

$sql = "SELECT Name as 'Location_Name', Address, Phone, Website, City, State, Zip, Notes as 'Location_Notes' FROM locations";
$location_result = mysqli_query($conn, $sql);

$locations = [];

foreach($location_result as $row) {
   array_push($row, "");
   array_push($locations, $row);
}

//relation fetching and storing

$sql = "SELECT items.Name as 'Item_Recycle_Name', locations.Name as 'Location_Recycle_Name' 
FROM locationitems_recycling 
JOIN items ON locationitems_recycling.Item_Id = items.Id
JOIN locations ON locationitems_recycling.Location_Id = locations.Id";
$relation_result_recycling = mysqli_query($conn, $sql);

$sql = "SELECT items.Name as 'Item_Reuse_Name', locations.Name as 'Location_Reuse_Name' 
FROM locationitems_reuse 
JOIN items ON locationitems_reuse.Item_Id = items.Id
JOIN locations ON locationitems_reuse.Location_Id = locations.Id";
$relation_result_reuse= mysqli_query($conn, $sql);

$relations = [];

foreach($relation_result_recycling as $row) {
   array_push($row, "1");
   array_push($relations, $row);
}
foreach($relation_result_reuse as $row) {
   array_push($row, "0");
   array_push($relations, $row);
}

//combination into massive super array

$loops = max(sizeof($items),sizeof($locations),sizeof($relations))-1;

for($x = 0; $x < $loops; $x++) {
$big_table[$x] = [];
if(isset($items[$x])) {
$big_table[$x] = array_merge($big_table[$x], $items[$x]);
}else{
array_push($big_table[$x], "", "", "", "", "");
}

if(isset($locations[$x])) {
$big_table[$x] = array_merge($big_table[$x], $locations[$x]);
}else{
array_push($big_table[$x], "", "", "", "", "", "", "", "", "");
}

if(isset($relations[$x])) {
$big_table[$x] = array_merge($big_table[$x], $relations[$x]);
}else{
array_push($big_table[$x], "", "", "");
}

}

//writing to file

header("Content-Disposition: attachment; filename=\"$name\"");
header("Content-Type: text/csv");

//header

echo "Item Name, General Info, Notes, Image Name, , Location Name, Address, Phone, Website, City, State, Zip, Notes, , Item, Location, Relation, \r\n";


//writing super array

$fp = fopen('php://output', 'w');
foreach($big_table as $row) {
fputcsv($fp,$row,",","\"");
}
fclose($fp);

mysqli_close($conn); // Closing Connection with Server

header('Location: ../index.php');
exit();
?>