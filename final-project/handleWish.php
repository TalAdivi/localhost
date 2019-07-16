<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Handle Wish</title>
    <link rel="stylesheet" href="includes/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans+SC&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montaga&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<body id="coucherFlow">
    <div id="mainWrapper">

        <!-- !logo -->
        <a href="coucherHomePage.php" id="logoWidth">
            <div id="logo"></div>
        </a>
        <div id="profile"><img src="./images/profilePic.png" alt="profilePic"><a href="#">Log Out</a></div>
        <!-- !/logo -->
        <!-- !search -->
        <div id="search">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <button class="btn searchBtn" type="button" id="button-addon1"><img src="./images/Search_Icon_1.png" alt="search icon" class="searchIcon"></button>
                </div>
                <input type="text" class="form-control" placeholder="">
            </div>
        </div>
        <!-- !/search -->

        <!-- !nav bar -->
        <div id="navBar">
            <div class="row">
                <div class="nav nav-tabs nav-pills" id="nav-tab">
                    <a class="nav-link " href="./coucherHomePage.php"><span>Home</span> <img src="images/Home_Icon_2.png" alt="picture" class="icons"></a>
                    <a class="nav-link active" href="./handleWish.html"><span>Handle Wish</span> <img src="images/Image_9.png" alt="picture" class="icons"></a>
                    <a class="nav-link" href="#"><span>Create new user</span>
                        <img src="images/Person_Add_Icon_1.png" alt="picture" class="icons"></a>
                    <a class="nav-link" href="#"><span>My diets</span> <img src="images/Food_Apple_Icon_1.png" alt="picture" class="icons"></a>
                    <a class="nav-link" href="#"><span>My workouts</span> <img src="images/Image_4.png" alt="picture" class="icons"></a>
                    <a class="nav-link" href="#"><span>Account manager</span> <img src="images/Image_5.png " alt="picture" class="icons"></a>
                </div>
            </div>
        </div>
        <!-- !/nav bar -->


        <div id="middleWrapper">

            <!-- !current page indicator -->
            <div class="alert alert-primary" id="currPageTitle" role="alert">
                <h4>Handle Wish</h4>
            </div>
            <!-- !/current page indicator -->

            <!--! Wish Table -->

            <div class="container">
                <h2>Whishes Table </h2>
                <ul class="responsive-table" id="wishesTable">

                    <li class="table-header">
                        <div class="col col-1">Name</div>
                        <div class="col col-3">wishes</div>
                    </li>

                </ul>
            </div>



          
        </div>
    </div>
    <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="includes/main.js"></script>

</body>

</html>