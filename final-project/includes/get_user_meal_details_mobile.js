var userName, userWishes;
var idAutoIncrease = 0;
var currentMeal = 0;
var prodsInfo;


makeTextOfProdes = function(){
  userId = getUserId();
  user_diet= JSON.parse(sessionStorage.getItem('meals'));
  $.each(user_diet,function(i,obi){
    if(obi.user_id == userId){
      for (j = 0 ; j < 3 ; ++j){

        // creating to products and amount of each meal
        if(obi.meal_number == j + 1){
          mealSumArr[j].dietID = obi.diet_id;
          var idIndexs = {i:0};
          prods = obi.prodes.split(',');

          $.each(prods,function(i,ob){
            prodName = ob.split(',')[0].split(':')[0];
            prodAmount = ob.split(',')[0].split(':')[1];

            // creating products/amount table
            computeProdAmountText(mealSumArr,j,prodName,prodAmount,idIndexs);
            // calculating meal nutrition vals
           
          })
          mealSumArr[j].text += '</tbody>';
        }
      }  
    }    
  })
}

function getUserId() {
    var aKeyValue = window.location.search.substring(1).split('&'), 
    userId = aKeyValue[0].split("=")[1];

    return userId;
}

computeProdAmountText = function(mealSumArr,j,prodName,prodAmount,prodImg){
  mealSumArr[j].text += 
  '<div> <img class ="left-img" src="' +
  prodImg +
  '"> </div>' +

  '<div class="alert alert-success width" role="alert">'+
      prodName + '<br>'+
      prodAmount + ' gr' +               
  '</div>'

    // to see witch IDs of each input are in the meal
}





$(document).ready(function(){

  var q = "SELECT * FROM `tbl_user-diet_202` AS u INNER JOIN `tbl_diet_202` AS p ON p.diet_id = u.diet_id";

  $.when(
      $.post('query.php',{query: q},function(res){
    if( res == "NULL" )
      alert('error occured');
    else{
      json = JSON.parse(res);
      sessionStorage.setItem('meals',JSON.stringify(json));
      prodsInfo = JSON.parse(sessionStorage.getItem('prodsInfo'));
    }  

  })
  
  ).done(function(){

    user_diet = JSON.parse(sessionStorage.getItem('meals'));
    console.log(prodsInfo);

      var userId = getUserId();  
  
      // for each meal constructing all properties needed
      class MealSum{
        protein = 0;
        calories = 0;
        carbohydrat = 0;
        dietID = 0;
  
        constructor(text =  "<div class='meal-list'>"){
          this.text = text;
        }
      }
  
      mealSumArr = [new MealSum(),new MealSum(), new MealSum()];
  
      // var temp = createOptions(prodsInfo);

      $.each(user_diet,function(i,obi){
        // console.log(obi);
        if(obi.user_id == userId){
          
          for (j = 0 ; j < 3 ; ++j){
  
            // creating to products and amount of each meal
            if(obi.meal_number == j + 1){
              mealSumArr[j].dietID = obi.diet_id;
              var idIndexs = {i:0};
              prods = obi.prodes.split(',');
  
              $.each(prods,function(i,ob){
                prodName = ob.split(',')[0].split(':')[0];
                prodAmount = ob.split(',')[0].split(':')[1];

                $.each(prodsInfo,function(i,curProd){
                  if(curProd.name == prodName){

                    computeProdAmountText(mealSumArr,j,prodName,prodAmount,curProd.url);
                  }
                })
  
                // creating products/amount table
                // calculating meal nutrition vals
              })
              mealSumArr[j].text += '</div>';
              // console.log(mealSumArr[j]);
            }
          }  
        }    
      })

      $('#back-home-page').attr("href","./mobileHomePage.php?user_id=" +
      userId
      );
    
  })
  

  $('select').change(function () {
    if($(this).val() == 0){
      $('.meal-list').replaceWith(mealSumArr[0].text);
        // console.log(mealSumArr[0].text); 
        currentMeal = 0;
    }
  
    if($(this).val() == 1){
      $('.meal-list').replaceWith(mealSumArr[1].text); 
      // console.log(mealSumArr[1].text); 
      currentMeal = 1;
    }

    if($(this).val() == 2){
      $('.meal-list').replaceWith(mealSumArr[2].text);  
      // console.log(mealSumArr[2].text); 
      currentMeal = 2;
    }
   
  });
 
  });
