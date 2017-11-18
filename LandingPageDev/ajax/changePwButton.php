<?php
    if (isset($_SESSION['Id'])){
        echo "
            <button type='button' id='changePwBtn' class='btn btn-primary pull-right' data-toggle='modal' data-target='#changePwModal'>
                <span class='glyphicon glyphicon glyphicon-lock' aria-hidden='true'></span>
            </button>
            <script>var mysessionvar = 1;</script>";
    }
?>
