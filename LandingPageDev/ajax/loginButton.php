<?php
<<<<<<< HEAD
if (isset($_SESSION['Id'])){
       echo
                               "<form method = 'POST' action='./ajax/logout.php'>
                                   <button type='submit' class='btn btn-default btn-sm pull-right'>
 	           Logout
              </button>
                               </form>
<script>var mysessionvar = 1;</script>";
;

                           } else {
                               echo "<button type='button' class='btn btn-default btn-sm pull-right' data-toggle='modal' data-target='#loginModal'>
 	Login
</button>
<script>var mysessionvar = 0;</script>"
;
                           }
                       ?>
=======
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
>>>>>>> d424daf00c3650762839b4dcc78170a1f0d057d4
