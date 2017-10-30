<?php
session_start();
session_destroy();
session_unset();
header("Location: http://localhost/LandingPageDev/index.php");
exit();
?>
