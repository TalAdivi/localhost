<!DOCTYPE html>
<html>
	<head>
        <meta charset="utf-8"> 
    	<title>PHP dynamic form</title>
    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css">
    	<link rel="stylesheet" href="includes/style.css">
	</head>
	<body>
	    <div id="wrapper">
	    	<div class="col-4">
		    	<h1>Dynamic form</h1>
		    </div>

        	<div class="col-4">
        		<p>
				    <?php 
				    	$mathAnswer = $_POST["math-answer"];
				    	$mathType = $_POST["math-type"];
				    	$randomScore = rand(50,100);

				    	echo "Math type: " . $mathType . "<br>"; 
				    	echo "Your answer is: " . $mathAnswer . "<br>"; 
				    	echo "Your score is: " . $randomScore;
				    ?>
        		</p>
			</div>
	    </div>
	</body>
</html>