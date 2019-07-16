<!DOCTYPE html>
<html lang="en">


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
              <div class="dropdown">
                  <a id="back-home-page" href="#"><img class="back-img" src="./images/Image_11.png"></a>
           <select class="custom-select" id="choose-meal">
             <option selected>Open this select menu</option>
             <option value= 0 >First Meal</option>
             <option value= 1>Second Meal</option>
             <option value= 2>Third Meal</option>
            </select>
          </div>
          
      <div class='meal-list'>
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





    <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>    
    <script src="includes/get_user_meal_details_mobile.js"></script>
</body>
</html>