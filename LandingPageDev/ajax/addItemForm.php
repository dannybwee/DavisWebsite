<?php
    include 'dbconnect.php';
    $name = $_POST['itemName'];
    $gi = $_POST['generalInfo'];
    $notes = $_POST['additionalNotes'];
    $image = preg_replace("/[^A-Za-z0-9 \.\-_]/", '', $_FILES['imageLocation']['name']);
    $locRecycle = array();
    if(isset($_POST['loc_recycle'])) {
        $locRecycle = $_POST['loc_recycle'];
    }
    $locReuse = array();
    if(isset($_POST['loc_reuse'])) {
        $locReuse = $_POST['loc_reuse'];
    }
    $sql = "INSERT INTO items (Name, General_Info, Notes, Image_Name)
          Values ('".$name."', '".$gi."', '".$notes."', '".$image."')";

    $result = mysqli_query($conn, $sql);

    if(! $result ) {
        die('Could not enter data: ' . mysqli_error($result));
    }

    $sql = "SELECT Id FROM items WHERE Name='".$name."'";

    $result = mysqli_query($conn, $sql);

    $itemID;

    //item ID value
    if ($result->num_rows > 0) {

        // output data of each row
        while($row = mysqli_fetch_assoc($result)) {
            $itemID = $row['Id'];
        }
    } else {
      // no results found
    }

    if(isset($locRecycle)) {
        $locationIDs = array();
        foreach($locRecycle as $l) {
            $sql = "SELECT Id FROM locations WHERE Name='".$l."'";
            $result = mysqli_query($conn, $sql);
            if ($result->num_rows > 0) {

                // output data of each row
                while($row = mysqli_fetch_assoc($result)) {
                    $locationIDs[] = $row['Id'];
                }
            }
        }
        $locationIDs = array_unique($locationIDs);
        foreach($locationIDs as $l) {
            $sql = "INSERT INTO locationitems_recycling (Location_Id, Item_Id) VALUES ('".$l."', '".$itemID."')";
            $result = mysqli_query($conn, $sql);
            if(! $result ) {
                die('Could not enter data: ' . mysqli_error($result));
            }
        }
    }

    if(isset($locReuse)) {
        $locationIDs = array();
        foreach($locReuse as $l) {
            $sql = "SELECT Id FROM locations WHERE Name='".$l."'";
            $result = mysqli_query($conn, $sql);
            if ($result->num_rows > 0) {

                // output data of each row
                while($row = mysqli_fetch_assoc($result)) {
                    $locationIDs[] = $row['Id'];
                }
            }
        }
        $locationIDs = array_unique($locationIDs);
        foreach($locationIDs as $l) {
            $sql = "INSERT INTO locationitems_reuse (Location_Id, Item_Id) VALUES ('".$l."', '".$itemID."')";
            $result = mysqli_query($conn, $sql);
            if(! $result ) {
                die('Could not enter data: ' . mysqli_error($result));
            }
        }
    }

    if (is_uploaded_file($_FILES['imageLocation']['tmp_name'])) {

        // Validate file name
        if(empty($_FILES['imageLocation']['name']))
        {
            echo " File name is empty! ";
            exit;
        }

        $upload_file_name = $_FILES['imageLocation']['name'];

        // Replace any non-alpha-numeric cracters in th file name
        $upload_file_name = preg_replace("/[^A-Za-z0-9 \.\-_]/", '', $upload_file_name);

        // Set a limit to the file upload size
        if ($_FILES['imageLocation']['size'] > 1000000)
        {
            echo " File too large! ";
            exit;
        }

        // Save the file
        $dest=__DIR__.'/uploads/'.$upload_file_name;
        if (move_uploaded_file($_FILES['imageLocation']['tmp_name'], $dest))
        {
            echo 'File Has Been Uploaded !';
        }
    }

    mysqli_close($conn);

    header('Location: ../index.php');
    exit();
 ?>
