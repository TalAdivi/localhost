<!DOCTYPE html>



<head>
  <title>Workout page</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="stylesheet" href="includes/style.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
   integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans+SC&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montaga&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
 

</head>



<body id ="userFlow">
    <div id="workoutWrapper">
      <main>
        <div class="container">
                <!-- Modal -->
                <div class="modal fade" id="myModal" role="dialog">
                  <div class="modal-dialog">
                  
                    <!-- Modal content-->
                    <div class="modal-content">
                      <div class="modal-header">
                        
                        <img id="change-image" src="./images/watch1.jpg">
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default btn-close" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
         </div>
    <img class="back-img" src="./images/Image_11.png">
    <div class="dropdown">
        <button class="type-of-exercise btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          A
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">B</a>
          <a class="dropdown-item" href="#">c</a>
        </div>
        <div class="clear"></div>
        <div> <img class ="left-img" src="./images/Interval.png"> </div>
        <div class="alert alert-success width" role="alert">
            interval <br> 
            reps:300-200-200-100
            <br>
            speed:100%
            Rest: 3 min 
        </div>
       <div class="black-dot" data-toggle="modal" data-target="#myModal"><img id="dotNumOne" src="./images/Circle_Icon_1.png"> </div>
        <div class="clear"></div>
        <div> <img class ="left-img" src="./images/Benchpress.png"> </div>
        <div class="alert alert-success width" role="alert">
            Brench Press <br> 
            Reps:12-10-10-10 <br>
            kg:50-50-40-40
            <br>
            Rest: 30 sec 
        </div>
        <div class="black-dot" data-toggle="modal" data-target="#myModal"><img id="dotNumTwo" src="./images/Circle_Icon_1.png"></div>
        <div class="clear"></div>
        <div> <img class ="left-img" src="./images/Butterfly.png"> </div>
        <div class="alert alert-success width" role="alert">
            Butterfly <br> 
            Reps:10-10-10 <br>
            kg:50-50-40-40
            <br>
            Rest: 45 sec 
        </div>
        <div class="black-dot" data-toggle="modal" data-target="#myModal"><img id="dotNumThree" src ="./images/Circle_Icon_1.png"> </div>
        <div class="clear"></div>
        <div> <img class ="left-img" src="./images/Pullup.png"> </div>
        <div class="alert alert-success width" role="alert">
            Pullups <br> 
            Reps:10-10-10-10 <br>
            kg:50-50-40-40
            <br>
            Rest: 30 sec 
        </div>
        <div class="black-dot" data-toggle="modal" data-target="#myModal"><img src="./images/Circle_Icon_1.png"></div>
        <div class="clear"></div>
        <div> <img class ="left-img" src="./images/Bicycle.png"> </div>
        <div class="alert alert-success width" role="alert">
            Bicycle <br> 
            Reps:12-10-10-10 <br>
            kg:50-50-40-40
            <br>
            Rest: 30 sec 
        </div>
        <div class="black-dot" data-toggle="modal" data-target="#myModal"><img src="./images/Circle_Icon_1.png"></div>
        <div class="clear"></div>
     </div>
     </main>
    </div>
    <footer id="special-footer"> 
    <div class="row justify-content-center">
     <div class="col md"> <img class ="footer-img" src="./images/man_raise_hand.png"> </div>
     <div class="col md"> <img class ="footer-img" src="./images/Food_Apple_Icon_1Large.png"> </div>  
     <div class="col md"> <img class ="footer-img" src="./images/Image_4Large.png"> </div>
     <div class="col md"> <img class ="footer-img" src="./images/Image_6Large.png"> </div>
    </div>
    </footer>





    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>    
    <script src="includes/main.js"></script>
</body>

