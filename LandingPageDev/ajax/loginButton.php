<?php
    if (isset($_SESSION['Id'])){
    echo
        "<form method = 'POST' action='./ajax/logout.php'>
            <button type='submit' class='btn btn-default btn-sm'>
                Logout
           </button>
        </form>
        <script>var mysessionvar = 1;</script>";
    } else {
        echo "<button type='button' id='loginButton' class='btn btn-default btn-sm' data-toggle='modal' data-target='#loginModal'>
    <script>var mysessionvar = 0;</script>";
            
    }
?>