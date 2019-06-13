<?php

//session_start();
printf(isset($_POST["usermail"]) && isset($_POST["pass"]));$errorMsg = "";
if(isset($_POST["usermail"]) && isset($_POST["pass"])){
    $usermail = $_POST["usermail"];
    $password = $_POST["pass"];
    $dbhost = "182.50.133.168";
    $dbuser = "studDB19a";
    $dbpass = "stud19DB1!";
    $dbname = "studDB19a";

    $connection = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
    
    if(mysqli_connect_errno())
    {
        die("Failed");
        echo "<h1> FAILED TO CONNECT </h1>";
    }
    
    
    $query = "SELECT phone,address FROM studDB19a.tbl_users_202 WHERE mail='" . $usermail ."' AND password = '". $password ."'";
    // echo $query;
    $result = mysqli_query($connection,$query);
    
    print_r($result);

    $rows = mysqli_fetch_assoc($result);

    print_r($rows);
        
    if(!$result->num_rows){
        $errorMsg = "Invalid username or password";
    }else{
        // mysqli_free_result($result);
        // mysqli_close($connection);
        // header("Location: index0.php");
    }

}


?>
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <!-- <link href="includes/style.css" rel="stylesheet">  -->
        <title> login </title>
     </head>
     <body>
    <h1>LOGIN</h1> <br>
    <form action="#" method="post">
    <label for="email">Email:</label><input type="email" value="" id="usermail" name="usermail"> <br> <br>
    <label for="pass">Password:</label><input type="password" value="" id="pass" name="pass"> <br> <br>
    <div class="error"><?=$errorMsg?></div>
    <input type="submit" value="LOGIN">
    </form>
    </div>
     </body>
</html>



<!--         
        // while($row = mysqli_fetch_assoc($result))
        // {
            //     echo "<p> id = ".$row["id"] . " Name = ". $row["name"]. " Mail = ".$row["mail"] .  "</p>";
            
            // }
            
            // mysqli_free_result($result);
            // mysqli_close($connection);



            $res = mysqli_fetch_assoc($result)
             -->