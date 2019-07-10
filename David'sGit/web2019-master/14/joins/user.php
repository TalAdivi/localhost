<?php 
    include 'db.php';

    //get data from DB
    $query  = "SELECT * FROM `tb_users_200` WHERE email = '" . $_GET['userEmail'] . "' ORDER BY name;";
    echo $query;//for studetns in class

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
	        $row = mysqli_fetch_assoc($model); //results are in associative array. keys are cols names
	        //output data from each row
            echo "<h3>USER - " . $row["name"] . "</h3>"
            . "<p>Registered on: " . $row["register_date"] 
            . "</p>";

			//release returned data
			mysqli_free_result($model);
            ?>
	    </div>
	</body>
</html>
<?php
//close DB connection
mysqli_close($connection);
?>