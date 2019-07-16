<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Zion Diet</title>
    <link rel="stylesheet" href="includes/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans+SC&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montaga&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<body id="coucherFlow">
    <div id="mainWrapper">

        <!-- !logo -->
        <a href="coucherHomePage.php" id="logoWidth"> <div id="logo"></div></a>
        <div id="profile"><img src="./images/profilePic.png" alt="profilePic"><a href="#">Log Out</a></div>
        <!-- !/logo -->

        <!-- !search -->
        <div id="search">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <button class="btn searchBtn" type="button" id="button-addon1"><img src="./images/Search_Icon_1.png" alt="search icon"
                            class="searchIcon"></button>
                </div>
                <tr type="text" class="form-control" placeholder="">
            </div>
        </div>
        <!-- !/search -->

        <!-- <div class="clear"></div> -->

        <!-- !nav bar -->
        <div id="navBar">
            <div class="row">
                <div class="nav nav-tabs nav-pills" id="nav-tab">
                    <a class="nav-link " href="./coucherHomePage.php"><span>Home</span> <img src="images/Home_Icon_2.png"
                        alt=""  class="icons"></a>
                    <a class="nav-link active" href="./handleWish.html"><span>Handle Wish</span> <img src="images/Image_9.png"
                        alt=""  class="icons"></a>
                    <a class="nav-link" href="#"><span>Create new user</span>
                        <img src="images/Person_Add_Icon_1.png" alt="picture" class="icons"></a>
                    <a class="nav-link" href="#"><span>My diets</span> <img src="images/Food_Apple_Icon_1.png"
                        alt="picture" class="icons"></a>
                    <a class="nav-link" href="#"><span>My workouts</span> <img src="images/Image_4.png"
                        alt="picture" class="icons"></a>
                    <a class="nav-link" href="#"><span>Account manager</span> <img src="images/Image_5.png "
                        alt="picture"  class="icons"></a>
                </div>
            </div>
        </div>
        <!-- !/nav bar -->

        <div id="middleWrapper">
            <!-- !breadCrumb -->
            <nav aria-label="breadcrumb">

                </ol>
            </nav>
            <!-- !/breadCrumb -->

            <!-- !current page indicator -->
            <div class="alert alert-primary" id="currPageTitle" role="alert">
                <h4>Zion Baruchi Diet</h4>
            </div>
            <tr !/current page indicator -->

            <!--! meal main table -->
            
            <div class="mealTable">
                <form class="form-horizontal" action="./getParams.php" method="get" autocomplete="on" id="mainForm">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-highlight"> 
                            <thead>
                                <tr>
                                <th><img src="./images/Add_Icon_1.png" alt="picture" class="addIcon" id='addRow'>Products</th>
                                <th>Amount (Grams)</th>
                                </tr>
                            </thead>
                            <tbody class="mainTableBody">             
                               
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
            <!--! /meal main table -->


            <!--! choose meal -->
            <div class="chooseMeal">
                <div class="table-responsive">
                    <table class="table table-bordered table-highlight">
                        <thead>
                            <tr>
                            <th> <img src="./images/Add_Icon_1.png" alt="picture" class="addIcon" id='addMealName'>Choose Meal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> <select class="options" id="choose-meal-option"></select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <!--! /choose meal -->

            <!--! Meal Sum Table -->
            <div class="mealSumTalbe">
                <span class="badge badge-pill badge-primary" id="mealSumBadge">Second Meal Sum</span>
                <!-- <div class="clear"></div> -->
                <div class="table-responsive">
                    <table class="table table-bordered  table-highlight">
                        <thead>
                            <tr>
                            <th> Nutritional Values</th>
                            <th>Amount (Grams)</th>
                            </tr>
                        </thead>
                        <tbody>
            
                        </tbody>
                    </table>
                </div>
            </div>
            <!--! /Meal Sum Table -->

            <!-- <div class="clear"></div> -->

            <!--! Daily Meal Sum Table -->


            <!--! /Daily Meal Sum Table -->

            <!-- <div class="clear"></div> -->
            <!-- <input type="submit" value="Submit" class="btn btn-primary done-btn" form="mainForm"><br> -->
            <button type="button" class="btn btn-primary" id="saveBtn">Save</button>
            <button type="button" class="btn btn-primary" id="deleteBtn">Delete</button>
            <!-- <div class="clear"></div> -->

        </div>
        <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script> -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
            <script src="includes/main.js"></script>
            <script src="includes/get_meals_details.js"></script>
        </div>        
    </body>
    </html>
    
    
    