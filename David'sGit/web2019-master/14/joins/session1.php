<?php 
session_start();

$_SESSION["usr"] = 'dan';
echo 'session is: ' . $_SESSION["usr"];
//header('Location: http://localhost/~yonitrusho/php/joins/session2.php');
