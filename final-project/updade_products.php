<?php

function connect(){
    global $connection;
    $dbhost = "182.50.133.168";
    $dbuser = "studDB19a";
    $dbpass = "stud19DB1!";
    $dbname = "studDB19a";
    $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);//mysqli_connect is a newer version of mysql_connect. Its for mysql > ver 4.1.3
    //testing connection success
    if (mysqli_connect_errno()) {
        die("DB connection failed: " . mysqli_connect_error() . " (" . mysqli_connect_errno() . ")");
    }
}

function disconnect()
{
    global $connection;
    mysqli_close($connection);
}
//connect();
//
//1. find a way to read json file into php var.
//2. read the file and iterate it and insert row by row to the db
//read

//$my_json_data = file_get_contents("C:\Users\Eilon Cohen\Desktop\\first flow new\localhost\\final-project\data\data.json");
//$array = json_decode($my_json_data,true);
//foreach ($array as $item) {
  //  $query = "INSERT INTO tbl_product_202 (name,protein,carbohydrat,calories) VALUES ('".$item["name"]."',".$item["protein"].",".$item["carbohydrat"].",".$item["calories"].")";
   // echo $query;
    //mysqli_query($connection, $query);
    //echo "\n";

//}
$x = 5;
$y = 6;
function func()
{

    $GLOBALS['y'] = $GLOBALS['y'] + $GLOBALS ['x'];
}
func();
echo $y;
echo "\n\n\n";
echo "<h2> Eilon Cohen </h2>" . $y;
echo "\n\n\n";
var_dump($y);
$cars = array("BMW", "Volvo" ,"mazda");

var_dump($cars);

class car
{
    function car()
    {
        $this->model = VW;
    }
}
$newcar = new car();

echo $newcar->model;




//foreach ($my_json_data as $item) {
//    $query = "INSERT INTO tbl_product_202 (`name`,`protein`,`carbohydrat`,`calories`) VALUES (".$item["name"].",".$item["protein"].",2,3)";
//    mysqli_query($connection, $query);
//}
//$query = "SELECT * FROM tbl_product_202";
//$result = mysqli_query($connection, $query);
//$row = mysqli_fetch_assoc($result);
//echo $row['name'];
disconnect();
?>