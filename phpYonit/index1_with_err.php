<?php 
    //create a mySQL DB connection:
	$dbhost = "182.50.133.168";
	$dbuser = "studDB19a";
	$dbpass = "stud19DB1sssssss!";
	$dbname = "studDB19a";

    $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
    
    //testing connection success
    if(mysqli_connect_errno()) {
        die("DB connection failed: " . mysqli_connect_error() . " (" . mysqli_connect_errno() . ")"
        );
    }
?>
<!DOCTYPE html>
<html>
	<head>
	        <meta charset="utf-8"> 
	    	<title>some page 1</title>
	     	<link href="includes/style.css" rel="stylesheet">
	</head>
	<body>
	    <div id="wrapper">
	        <?php echo "<section>
			  	<h2>If we see this message than connection was established</h2>
			</section>"; ?>
	    </div>
	</body>
</html>
<?php
//close DB connection
mysqli_close($connection);
?>