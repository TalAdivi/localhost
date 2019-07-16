<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Home Page</title>
  <link rel="stylesheet" href="./includes/style.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <!-- <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans+SC&display=swap" rel="stylesheet"> -->
  <link href="https://fonts.googleapis.com/css?family=Montaga&display=swap" rel="stylesheet">
</head>

<body id="userFlow">
  <div id="mainWrapper">

  <!-- *hey user name -->
  <div class="alert alert-success hey-user-name" role="banner"></div>
  <!-- */hey user name -->

  <!--*logo  -->
  <a href="./coucherHomePage.php">
    <div class="container" id="logo"></div>
  </a>
  <!--*/logo  -->

  <!-- *profile + rank + progress bar -->

  <!-- text-center -->
  <div class="move-up">

  </div>
  <div class="text-center">

    <div class="progress-bar" id='updatePercent' data-percent="0" data-duration="1000" data-color="#ccc,black"></div>
    <div class="text-center profile-pic">
      <img src="./images/guyProfile1.png" class="rounded" alt="user-pic">
      <p class="show-percent"></p>

      <div class=" profile-pic">
        <img src="./images/guyRank.png" class="userRank">
      </div>
    </div>
  </div>


  <!-- */profile + rank + progress bar -->


  <div class="container day-details">
    <div class="alert alert-success started-be4"> <strong> Started before:</strong><br> 27 days</div>

    <div class="alert alert-success next-meal-sum">
      <section class="next-meal"><strong>Next Meal:</strong><br>Thired Meal</section>
      <section class="meal-at"><strong>At:</strong> <br>17:30</section>
        <a id='mealLink' href="">
      <img src="./images/Food_Apple_Icon_Med.png" alt="Apple Icon" class="home-icons">
    </a>
    </div>

    <div class="alert alert-success next-workout">
      <section class="workout-day"><strong>Day:</strong><br>Sunday</section>
      <img src="./images/Run_Med.png" alt="Run Icon" class="home-icons">
      <section class="workout-plan"><strong>Workout:</strong><br>A</section>
      <section class="workout-at"><strong>At:</strong><br>20:00</section>
    </div>
    <div class="alert alert-success calendar-week">
      <div class="row">
        <div class="col"><b>S</b></div>
        <div class="col"><b>M</b></div>
        <div class="col"><b>T</b></div>
        <div class="col"><b>W</b></div>
        <div class="col"><b>T</b></div>
        <div class="col"><b>F</b></div>
        <div class="col"><b>S</b></div>
      </div>

      <div class="row">
        <div class="col v-x-sign"><img src="./images/Check_Circle_Icon_1.png" alt=""></div>
        <div class="col v-x-sign"><img src="./images/Add_Circle_Icon_1.png" alt=""></div>
        <div class="col v-x-sign"><img src="./images/Add_Circle_Icon_1.png" alt=""></div>
        <div class="col v-x-sign"><img src="./images/Check_Circle_Icon_1.png" alt=""></div>
        <div class="col v-x-sign"><img src="./images/Add_Circle_Icon_1.png" alt=""></div>
        <div class="col v-x-sign"><img src="./images/Check_Circle_Icon_1.png" alt=""></div>
        <div class="col v-x-sign"><img src="./images/Add_Circle_Icon_1.png" alt=""></div>
      </div>

    </div>
  </div>


  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="./includes/main.js"></script>
</div>
</body>

</html>