<?php
session_start();
session_destroy();
session_unset();
header("Location: http://localhost/website/LandingPageDev/index.php");
exit();
?>
