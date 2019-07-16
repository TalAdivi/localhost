<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>SNC Home page</title>
  <link rel="stylesheet" href="includes/style.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans+SC&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montaga&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <!--  -->
  <link rel="shortcut icon" href="#" />
  <!--  -->
</head>

<body id="coucherFlow">
  <div id="mainWrapper">
    <!-- !logo -->
    <a href="index.php" id="logoWidth">
      <div id="logo"></div>
    </a>
    <div id="profile"><img src="./images/profilePic.png" alt="profilePic"><a href="#">Log Out</a></div>
    <!-- !/logo -->
    <!-- !search -->
    <div id="search">
      <div class="input-group mb-3">
        <input class="form-control" id="myInput" type="text" placeholder="Search..">
      </div>
    </div>
    <!-- !/search -->

    <!-- <div class="clear"></div> -->

    <!-- !nav bar -->
    <div id="navBar">
      <div class="row justify-content-md-center">
        <div class="nav nav-tabs nav-pills" id="nav-tab">
          <a class="nav-link active" href="./index.php"><span>Home</span> <img src="images/Home_Icon_2.png" alt="picture" class="icons"></a>
          <a class="nav-link " href="./handleWish.php"><span>Handle Wish</span> <img src="images/Image_9.png" alt="picture" class="icons"></a>
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
      <!-- !breadCrumb -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bckgorundNone"></ol>
      </nav>

      <!-- !/breadCrumb -->

      <!-- !current page indicator -->
      <div class="alert alert-primary" id="currPageTitle" role="alert">
        <h1>Home Page </h1>
      </div>
      <!-- !/current page indicator -->

      <!--! Wish Table -->
      <div id="wishesTable">
        <div class="badge badge-pill badge-primary Wishes_title">Wishes</div>
        <table class="table table-hover usersTable" id="circle_table">
          <thead>
            <tr>
              <th scope="col" class="remove_top_border_th"></th>
              <th scope="col" class="badge badge-pill badge-primary">Name</th>
              <th scope="col" class="remove_top_border_th"></th>
              <th scope="col" class="badge badge-pill badge-primary">subject</th>
            </tr>
          </thead>
          <tbody id="usersWishes">
          </tbody>
        </table>
      </div>


              <!-- <tr>
              <th scope="row">
                <div class="redDot"></div>
              </th>
              <td colspan="2"><a class="nameLink" href="#">Haim moshe</a></td>
              <td>Workout</td>
            </tr>
            <tr>
              <th scope="row">
                <div class="redDot"></div>
              </th>
              <td colspan="2"><a class="nameLink" href="./specificWish.html">Zion Baruchi</a></td>
              <td>Diet</td>
            </tr>
            <tr>
              <th scope="row">
                <div class="redDot"></div>
              </th>
              <td colspan="2"><a class="nameLink" href="#">Eran Zehavit</a></td>
              <td>Other</td>
            </tr>
            <tr>
              <th scope="row"><img src="images/Image_9.png" alt="picture" class="icons tableIcon"></th>
              <td colspan="3" class="see_more"><a href="./handleWish.html">See More</a></td>
            </tr> -->

          
    <div class="container">
      <h2>Responsive Tables Using LI <small>Triggers on 767px</small></h2>
      <ul class="responsive-table">
        <li class="table-header">
          <div class="col col-1">Job Id</div>
          <div class="col col-2">Customer Name</div>
          <div class="col col-3">Amount Due</div>
          <div class="col col-4">Payment Status</div>
        </li>
        <li class="table-row">
          <div class="col col-1 redDot" data-label="Job Id"></div>
          <div class="col col-2" data-label="Customer Name">John Doe</div>
          <div class="col col-3" data-label="Amount">$350</div>
          <div class="col col-4" data-label="Payment Status">Pending</div>
        </li>
        <li class="table-row">
          <div class="col col-1" data-label="Job Id">42442</div>
          <div class="col col-2" data-label="Customer Name">Jennifer Smith</div>
          <div class="col col-3" data-label="Amount">$220</div>
          <div class="col col-4" data-label="Payment Status">Pending</div>
        </li>
        <li class="table-row">
          <div class="col col-1" data-label="Job Id">42257</div>
          <div class="col col-2" data-label="Customer Name">John Smith</div>
          <div class="col col-3" data-label="Amount">$341</div>
          <div class="col col-4" data-label="Payment Status">Pending</div>
        </li>
        <li class="table-row">
          <div class="col col-1" data-label="Job Id">42311</div>
          <div class="col col-2" data-label="Customer Name">John Carpenter</div>
          <div class="col col-3" data-label="Amount">$115</div>
          <div class="col col-4" data-label="Payment Status">Pending</div>
        </li>
      </ul>
    </div>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <!--! /Wish Table -->


      <!--! User Table -->

      <div id="newUserTable">
        <div class="badge badge-pill badge-primary Wishes_title">New Users</div>
        <table class="table table-hover usersTable" id="circle_table_another">
          <tbody id="newUsers">
          </tbody>
        </table>
      </div>
      <!--! /User Table -->
      <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script> -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>-
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      <script src="includes/main.js"></script>
    </div>
  </div>
</body>
</html>