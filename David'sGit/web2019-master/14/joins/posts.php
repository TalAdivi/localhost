<?php 
    include 'db.php';
    include "config.php";

    //session check
    session_start();

     if(!isset($_SESSION["user_id"]))
         header('Location: ' . URL . 'index.php');
?>
<?php
    //get data from DB
    $query  = "SELECT u.name, u.email, p.title, p.body, p.link
    FROM `tb_users_200` AS u INNER JOIN `tb_posts_200` AS 
    p ON p.user_id = u.user_id
    ORDER BY u.name;";

    $model = mysqli_query($connection, $query);
    if(!$model) {
        die("DB query failed.");
    }
?>
<!DOCTYPE html>
<html>
	<head>
	    <meta charset="utf-8">  
	    <title>JOINS</title>
	    <link href="includes/style.css" rel="stylesheet">
	</head>
	<body>
	    <div id="wrapper">
	        <?php 
	           //use return data (if any)
            echo "<ul>";
	        while($row = mysqli_fetch_assoc($model)) {//results are in associative array. keys are cols names
	            //output data from each row
	            echo "<li><h3>USER - <a href='user.php?userEmail=" . $row["email"] . "'>"
                . $row["name"] 
                . "</a><br>POSTED - </h3><p>"
                . $row["body"]  . "<br>"
                . "<a href='" . $row["link"] . "' target='_blank'>" 
                . $row["title"]
                . "</a></p></li>";
	        }
            echo "</ul>";

			// //release returned data
			mysqli_free_result($model);
            ?>
	    </div>
	</body>
</html>
<?php
//close DB connection
mysqli_close($connection);
?>