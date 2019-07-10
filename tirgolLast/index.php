<?php
include 'db.php';
include 'config.php';

session_start();

if(!empty($_POST['loginMail'])){
    //echo 'Form sent    ';
    $query = "SELECT * FROM tbl_users_202 WHERE email='" . $_POST["loginMail"]
    ."' and password ='"
    .$_POST["loginPass"]
    ."'";

    //echo $query;  

    $result = mysqli_query($connection,$query);
    $row    = mysqli_fetch_array($result);

    

    if(is_array($row)){
        //echo "auth succed";
        $_SESSION["user_id"] = $row["user_id"];
       // echo $_SESSION["user_id"];
        header('Location: ' . URL . 'posts.php');

    } else{
        $message = "Invalid user name or password!";
    }
}
?>

<div class="container">
 <h1>Login</h1>
 <form action="#" method="post" id="frm">
 <div class="form-group">
 <label for="loginMail">Email: </label>
 <input type="email" class="form-control" name="loginMail" id="loginMail"
aria-describedby="emailHelp" placeholder="Enter email">
 </div>
 <div class="form-group">
 <label for="exampleInputPassword1">Password: </label>
 <input type="password" class="form-control" name="loginPass" id="loginPass"
placeholder="Enter Password">
 </div>
 <button type="submit" class="btn btn-primary">Log Me In</button>
 <div class="error-message"><?php if(isset($message)) { echo $message; } ?></div>
 </form>
 </div>