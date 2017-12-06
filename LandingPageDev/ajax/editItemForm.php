<?php
    include 'dbconnect.php';

    $id = $_POST['editItemID'];
    $name = $_POST['editItemName'];
    $gi = $_POST['editGeneralInfo'];
    $notes = $_POST['editAdditionalNotes'];

    $image = $_FILES['editInputImage']['name'];

    $target_dir = "uploads/";
    $target_file = $target_dir.basename($image);
    $uploadOk = 1;
    $imageFileType = pathinfo($target_file, PATHINFO_EXTENSION);

    $locRecycle = array();
    if(isset($_POST['editLoc_recycle'])) {
      $locRecycle = $_POST['editLoc_recycle'];
    }
    $locReuse = array();
    if(isset($_POST['editLoc_reuse'])) {
      $locReuse = $_POST['editLoc_reuse'];
    }

    $sql = "";

    //checks if new image is set, otherwise leaves it as old image
    if($image == '') {
      $sql = "UPDATE items SET Name='".$name."', General_Info='".$gi."', Notes='".$notes."' WHERE Id = " . $id;
    } else {
      $sql = "UPDATE items SET Name='".$name."', General_Info='".$gi."', Notes='".$notes."', Image_Name='".$image."' WHERE Id = " . $id;
    }

    $result = mysqli_query($conn, $sql);

    if(! $result ) {
      die('Could not enter data: ' . mysqli_error($result));
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

        $sql = "DELETE FROM locationitems_recycling WHERE Item_Id = " .$id;
        $result = mysqli_query($conn, $sql);

        $locationIDs = array_unique($locationIDs);
        foreach($locationIDs as $l) {

			$relation = $l;
            $relation .= '.';
            $relation .= $id;
            //$relation = (float)$relation;

            $sql = "INSERT INTO locationitems_recycling (Id, Location_Id, Item_Id)
            VALUES ('".$relation."', '".$l."', '".$id."')";
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

        $sql = "DELETE FROM locationitems_reuse WHERE Item_Id = " .$id;
        $result = mysqli_query($conn, $sql);

        $locationIDs = array_unique($locationIDs);
        foreach($locationIDs as $l) {

			$relation = $l;
            $relation .= '.';
            $relation .= $id;
            //$relation = (float)$relation;

            $sql = "INSERT INTO locationitems_reuse (Id, Location_Id, Item_Id)
            VALUES ('".$relation."', '".$l."', '".$id."')";
            $result = mysqli_query($conn, $sql);
            if(! $result ) {
                die('Could not enter data: ' . mysqli_error($result));
            }
        }
    }

    // Check if file already exists
    if ($_FILES["editInputImage"]["size"] > 1000000) {
        echo "Sorry, your file is too large. Please try to upload an image smaller than 1MB.";
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
        if (move_uploaded_file($_FILES["editInputImage"]["tmp_name"], $target_file)) {
            echo "The file ". basename( $_FILES["editInputImage"]["name"]). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }

    mysqli_close($conn);

    header('Location: ../index.php');

    exit();
 ?>
