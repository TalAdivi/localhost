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
	        <form action="math-type.php" method="POST">
	        	<div class="col-4">
		        	<div class="form-group">
		        		<p>Please choose from the list:</p>
						<select class="form-control" name="math">
							<option value="Geomerty">Geomerty</option>
							<option value="Trigonometry" selected>Trigonometry</option>
						</select>
					</div>
					<div class="form-group">
						<input type="submit" value="Next" class="form-control">
					</div>
				</div>
	        </form>
	    </div>
	</body>
</html>
