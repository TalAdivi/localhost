<?php

session_start();
$_SESSION["user"] = 'tal';

echo 'session is '. $_SESSION["user"]; 

?>

