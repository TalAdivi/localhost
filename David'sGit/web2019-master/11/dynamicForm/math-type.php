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

	        <form action="score.php" method="POST">
	        	<div class="col-4">
		        	<div class="form-group">
		        		<p>
						    <?php 
						    	$mathType = $_POST["math"];
						    	echo "You chose a " . $mathType . " question!"; 
						    ?>
		        		</p>
		        		<label>
						    <?php 
						    	$mathType = $_POST["math"];

						    	if ($mathType == "Geomerty") {
									echo "Angles A and B are complementary and the measure of angle A is twice the measure of angle B. Find the measures of angles A and B";
						    	} else {
						    		echo "The lengths of side AB and side BC of a scalene triangle ABC are 12 cm and 8 cm respectively. The size of angle C is 59°. Find the length of side AC";
						    	}
						    ?>
						    <br>
		        			<input type="text" name="math-answer">

							<?php
		        				echo "<input type='hidden' name='math-type' value=" . $mathType . ">"
							?>

		        		</label>
					</div>
					<div class="form-group">
						<input type="submit" value="Next" class="form-control">	
					</div>
				</div>
	        </form>
	    </div>
	</body>
</html>