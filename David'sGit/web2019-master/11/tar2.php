<?php 
	$arr 	= ["Math","English","Hebrew"];
	$retVal = "Last week we had the " . $arr[0] . " final exam. I think my grade will be 65. In "
			. $arr[1] . " two weeks ago I think I did around 85. " . $arr[2] . " is next week.";
	echo "<p>" . $retVal . "</p>"; 

	$arr2 	= ["Math"=>65,"English"=>85,"Hebrew"=>86];
	$retVal = "Last week we had the Math final exam. I think my grade will be " . $arr2["Math"] . ". In
			 English two weeks ago I think I did around " . $arr2["English"] . ". Hebrew is next week.";
	echo "<p>" . $retVal . "</p>"; 
?>