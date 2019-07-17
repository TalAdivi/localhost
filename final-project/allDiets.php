<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Zion Diet</title>
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
        <div id="profile"><img src="./images/profilePic.png" alt="profilePic"><a href="./index.php">Log Out</a></div>
        <!-- !/logo -->

        <!-- !search -->
        <div id="search">
            <div class="input-group mb-3">
                <input class="form-control" id="myInput" type="text" placeholder="Search..">
            </div>
        </div>
        <!-- !/search -->

        <!-- !nav bar -->
        <div id="navBar">
            <div class="row">
                <div class="nav nav-tabs nav-pills" id="nav-tab">
                    <a class="nav-link " href="./coucherHomePage.php"><span>Home</span> <img src="images/Home_Icon_2.png" alt="" class="icons"></a>
                    <a class="nav-link" href="./handleWish.html"><span>Handle Wish</span> <img src="images/Image_9.png" alt="" class="icons"></a>
                    <a class="nav-link" href="#"><span>Create new user</span>
                        <img src="images/Person_Add_Icon_1.png" alt="picture" class="icons"></a>
                    <a class="nav-link active" href="#"><span>My diets</span> <img src="images/Food_Apple_Icon_1.png" alt="picture" class="icons"></a>
                    <a class="nav-link" href="#"><span>My workouts</span> <img src="images/Image_4.png" alt="picture" class="icons"></a>
                    <a class="nav-link" href="#"><span>Account manager</span> <img src="images/Image_5.png " alt="picture" class="icons"></a>
                </div>
            </div>
        </div>
        <!-- !/nav bar -->

        <div id="middleWrapper">
            <!-- !breadCrumb -->
            <nav aria-label="breadcrumb">
            </nav>
            <!-- !/breadCrumb -->

            <!--! meal main table -->

            <div class="mealTable">
                <div class="container">
                    <h2>Menu </h2>
                    <ul class="responsive-table productsTable">
                        <li class="table-header">
                            <div class="col col-1"><img src="./images/Add_Icon_1.png" alt="picture" class="addIcon" id='addRow'>Products</div>
                            <div class="col col-3">Amount (Grams)</div>
                        </li>
                        <div class="mainTableBody">
                        </div>
                        <button type="button" class="btn btn-primary" id="saveBtn">Save</button>
                        <button type="button" class="btn btn-primary" id="deleteBtn">Delete</button>
                    </ul>
                </div>
            </div>
            <!--! /meal main table -->

            <!--! choose meal -->
            <div class="chooseMeal">
                <div class="container">
                    <h2>Choose Meal </h2>
                    <ul class="responsive-table productsTable">
                        <li class="table-header">
                            <div class="col">
                                <!-- <span>Add</span> -->
                                <img src="./images/Add_Icon_1.png" alt="picture" class="addIcon" id='addMealName'>
                            </div>
                            <div class="col">
                                Add Meal
                            </div>
                        </li>
                        <div class="col">
                            <select class="options custom-select" id="choose-meal-option"></select>
                        </div>
                    </ul>
                </div>
            </div>
            <!--! /choose meal -->

            <!--! Meal Sum Table -->
            <div class="mealSumTalbe">
                <div class="container">
                    <h2>Meal Sum</h2>
                    <ul class="responsive-table productsTable">
                        <li class="table-header">
                            <div class="col">Nutritional Values</div>
                            <div class="col">Amount (Grams)</div>
                        </li>
                        <div class="mainTableBody">
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script src="includes/main.js"></script>
        <script src="includes/get_meals_details.js"></script>
    </div>
</body>

</html>