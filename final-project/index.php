<?php
include 'db.php';
include 'config.php';
session_start();

if (!empty($_POST['loginMail'])) {
    //echo 'Form sent    ';
    $query = "SELECT * FROM tbl_users_202 WHERE email='" . $_POST["loginMail"]
        . "' and password ='"
        . $_POST["loginPass"]
        . "'";

    //echo $query;  

    $result = mysqli_query($connection, $query);
    $row    = mysqli_fetch_array($result);


    if (is_array($row)) {
        $_SESSION["user_id"] = $row["user_id"];
        $_SESSION["user_name"] = $row["name"];


        if ($row["coacher"] == 1) {

            //not sure about row
            header('Location: ' . URL . 'coucherHomePage.php?name=?' . $row["name"]);
        } else {
            header('Location: ' . URL . 'mobileHomePage.php?name=' . $row["user_id"]);
        }
    } else {
        $message = "Invalid user name or password!";
    }
}
?>


<!DOCTYPE html>
<html lang="en" id="loginPage">

<head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Home Page</title>
    <link rel="stylesheet" href="./includes/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Montaga&display=swap" rel="stylesheet">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</head>

<section class="login-block">
    <div class="container">
        <div class="row">
            <div class="col-md-4 login-sec">
                <h2 class="text-center">SNC Login</h2>
                <form class="login-form" action="#" method="post" id="frm">
                    <div class="form-group">
                        <label for="loginMail" class="text-uppercase">Mail</label>
                        <input type="email" class="form-control"  name="loginMail" id="loginMail" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" class="text-uppercase">Password</label>
                        <input type="password" class="form-control" name="loginPass" id="loginPass" placeholder="Enter Password">
                    </div>
                    <div class="form-check">
                        <button type="submit" class="btn btn-login float-right">Log Me In</button>
                        <div class="error-message"><?php if (isset($message)) {
                                        echo $message;
                                    } ?></div>
                    </div>
                </form>

            </div>
            <div class="col-md-8 banner-sec">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img class="d-block img-fluid" src="./images/largeLogo1.png" alt="First slide">
                            <div class="carousel-caption d-none d-md-block">
                                <div class="banner-text">
                                    <!-- <h2>Welcome</h2> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
<script src="includes/main.js"></script>
</html>