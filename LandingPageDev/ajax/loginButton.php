<?php
  if (!isset($_SESSION['Id'])){
    echo "
      <button type='button' id='loginButton' class='btn btn-default btn-sm' data-toggle='modal' data-target='#loginModal'>
     	  Login
      </button>
      <script>var mysessionvar = 0;</script>";
  }
?>
