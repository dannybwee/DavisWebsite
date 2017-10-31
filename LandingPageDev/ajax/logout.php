<?php
session_start();
session_destroy();
session_unset();
header("Location: http://localhost/teamFusion191_Recyclopedia-master/LandingPageDev/index.php");
exit();
?>
