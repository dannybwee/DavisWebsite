<?php
    include 'dbconnect.php';

    function showAlert($message) {
        echo '<script language="javascript"> ';
        echo 'window.location.replace("../index.php");';
        echo 'alert("'.$message.'");';
        echo '</script>';
     }

    $message;
    $name = $_POST['itemName'];
    $gi = $_POST['generalInfo'];
    $notes = $_POST['additionalNotes'];

    $image = $_FILES['addItemUpload']['name'];

    $target_dir = "uploads/";
    $target_file = $target_dir.basename($image);
    $uploadOk = 1;
    $imageFileType = pathinfo($target_file, PATHINFO_EXTENSION);

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
            
            $relation = $l;
            $relation .= '.';
            $relation .= $itemID;
            $relation = (float)$relation;

            $sql = "INSERT INTO locationitems_recycling (Id, Location_Id, Item_Id) VALUES ('".$relation."', '".$l."', '".$itemID."')";
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

            $relation = $l;
            $relation .= '.';
            $relation .= $itemID;
            $relation = (float)$relation;

            $sql = "INSERT INTO locationitems_reuse (Id, Location_Id, Item_Id) VALUES ('".$relation."', '".$l."', '".$itemID."')";
            $result = mysqli_query($conn, $sql);
            if(! $result ) {
                die('Could not enter data: ' . mysqli_error($result));
            }
        }
    }

    // Check if image file is an image
    if(isset($_POST["submit"])) {
        $check = getimagesize($_FILES["addItemUpload"]["tmp_name"]);
        if($check !== false) {
            echo "File is an image - ".$check["mime"].".";
            $uploadOk = 1;
        } else {
            echo "File is not an image.";
            $uploadOk = 0;
        }
    }
    // Check if file already exists
    if ($_FILES["addItemUpload"]["size"] > 500000) {
        echo "Sorry, your file is too large. Please try to upload an image smaller than 500KB.";
        $uploadOk = 0;
    }
    // Allow certain file formats
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif" ) {
        echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }
    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file
    } else {
        if (move_uploaded_file($_FILES["addItemUpload"]["tmp_name"], $target_file)) {
            echo "The file ". basename( $_FILES["addItemUpload"]["name"]). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }

    mysqli_close($conn);

    $message = "Item Added Successfully";

    showAlert($message);

    exit();
 ?>
