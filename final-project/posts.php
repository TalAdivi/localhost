<?php
include 'db.php';
include "config.php";

session_start();

if(!isset($_SESSION["user_id"])) {
    header('Location: ' . URL . 'index.php');
}

 $userID = $_SESSION["user_id"];

$query = "SELECT *
FROM `tbl_user-diet_202` AS u INNER JOIN `tbl_diet_202` AS p ON p.diet_id = u.diet_id" ;

$model = mysqli_query($connection,$query);

// echo 'testtttt ';

if(!$model){
    die("DB query failed");
}else{
    // for while loop use $row = mysqli_fetch_assoc($model)
    echo '<ul>';
    while($row = mysqli_fetch_assoc($model)){

        if( $row["user_id"] == $userID){
            echo "<li>"
            .$row["prodes"]
            ."</li>";
            
        } 
        
    }
    echo '</ul>';
}
