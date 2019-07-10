<?php 

	$DeadsArr = array
	(
		array("1", "Cersei", "https://en.wikipedia.org/wiki/Cersei_Lannister", "https://upload.wikimedia.org/wikipedia/en/2/22/Cersei_Lannister_in_Black_Dress_in_Season_5.jpg"), 
		array("2", "Daenerys", "https://en.wikipedia.org/wiki/Daenerys_Targaryen", "https://upload.wikimedia.org/wikipedia/en/0/0d/Daenerys_Targaryen_with_Dragon-Emilia_Clarke.jpg"), 
		array("3", "Jaime Lannister", "https://en.wikipedia.org/wiki/Jaime_Lannister", "https://upload.wikimedia.org/wikipedia/en/b/b4/Jaime_Lannister-Nikolaj_Coster-Waldau.jpg"), 
		array("4", "Rhaegal", "https://www.menshealth.com/entertainment/a27369059/game-of-thrones-rhaegal-dragon-dead/", "https://pbs.twimg.com/media/D52ahgWXsAEZXSw.jpg"), 
	);

	echo "<h1>SO DEAD</h1>";
	echo "<ul>";
	for ($row = 0; $row < count($DeadsArr); $row++) {
		echo "<li><a href=".$DeadsArr[$row][2]." target='_blank'><img id=".$DeadsArr[$row][0]." src=".$DeadsArr[$row][3]." alt=".$DeadsArr[$row][1]." width='100'></a></li>";
	}
	echo "</ul>";
	
	// <li><a href=""><img id="" src="" alt=""></a></li>" . $DeadsArr[i][0] . "
?>
