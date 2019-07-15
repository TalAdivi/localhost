var userName, userWishes;
var idAutoIncrease = 0;
var currentMeal = 0;

var optionsNames = [];

var createOptions = function(Json,selected){
  var allOptions = '';

  $.each(Json,function(i,obi){
    optionsNames.push(JSON.stringify(obi.name));
    if(selected == obi.name){
      allOptions += '<option value="' + obi.name + '" selected>' + obi.name + '</option>';
    }else{

      allOptions += '<option value="' + obi.name + '">' + obi.name + '</option>';
    }

  });

  return allOptions;
}

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
            calNutritionsVal(mealSumArr,j,prodName,prodAmount,prodsInfo);
          })
          mealSumArr[j].text += '</tbody>';
          createMealSumTable(mealSumArr[j]);
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

computeProdAmountText = function(mealSumArr,j,prodName,prodAmount,idIndexs){
  var options = createOptions(prodsInfo,prodName);

  mealSumArr[j].text += '<tr>' + 
  '<td>' + '<select class="options"' +
  'id=' +
  idAutoIncrease++ +
  '>' +   options +  '</select>' +

  
  '<td>' + 
  '<input type="text" class="form-control "' +
    'id=' +
    idAutoIncrease++ +
   ' value=' +
    prodAmount + 
    '>' +
  '</td>' +
  '</tr>';

    // to see witch IDs of each input are in the meal
    mealSumArr[j].IDs[idIndexs.i++] = idAutoIncrease - 2 ;
    mealSumArr[j].IDs[idIndexs.i++] = idAutoIncrease - 1 ;
}


calNutritionsVal = function(mealSumArr,j,prodName,prodAmount,prodsInfo){

  $.each(prodsInfo,function(i,curProd){
    if(curProd.name == prodName){
      mealSumArr[j].protein += parseInt((curProd.protein * (prodAmount/100)).toFixed(2));
      mealSumArr[j].calories += parseInt((curProd.calories * (prodAmount/100)).toFixed(2));
      mealSumArr[j].carbohydrat += parseInt((curProd.carbohydrat * (prodAmount/100)).toFixed(2));
      return;
    }
  })
}

createMealSumTable = function(mealSumArr,j){
$('.mealSumTalbe tbody').replaceWith(
  '<tbody>'+
  '<tr>' +
  '<td><input type="text" class="form-control" value='+
  "Carbohydrat"+
  ' readonly="readonly">'+
  '</td>'+

  '<td><input type="text" class="form-control" value='+
  mealSumArr[j].carbohydrat+
  ' readonly="readonly">'+'</td>'+

'</tr>'+
'<tr>' +
  '<td><input type="text" class="form-control" value='+
  "Proteins"+
  ' readonly="readonly">'+'</td>'+

  '<td><input type="text" class="form-control" value='+
  mealSumArr[j].protein+
  ' readonly="readonly">'+'</td>'+

'</tr>'+
'<tr>' +
  '<td><input type="text" class="form-control" value='+
  "Calories"+
  ' readonly="readonly">'+'</td>'+

  '<td><input type="text" class="form-control" value='+
  mealSumArr[j].calories+
  ' readonly="readonly">'+'</td>'+

'</tr>' +
'</tbody>'
)
}

createDailyMealSumTable = function(totalCalories,totalCarbohydrat,totalProteins){

  $('.dailyMealSumTalbe tbody').replaceWith(
    '<tbody>' +
    '<tr>' +
    '<td><input type="text" class="form-control" value='+ 
    "Carbohydrat" +
    ' readonly="readonly">' +
    '</td>'+
    '<td><input type="text" class="form-control" value='+ 
    totalCarbohydrat +
    ' readonly="readonly">' +'</td>'+
  '</tr>' +
  '<tr>' +
    '<td><input type="text" class="form-control" value='+ 
    "Proteins" +
    ' readonly="readonly">' +'</td>'+
    '<td><input type="text" class="form-control" value='+ 
    totalProteins +
    ' readonly="readonly">' +'</td>'+
  '</tr>' +
  
  '<tr>' +
    '<td><input type="text" class="form-control" value='+ 
    "Calories" +
    ' readonly="readonly" >' +'</td>'+
    '<td><input type="text" class="form-control" value='+ 
    totalCalories +
    ' readonly="readonly">' +'</td>'+
  '</tr>'+
  '</tbody>'
  )
}

$(document).ready(function(){

    $.getJSON("data/data.json",function(data){
    // console.log(data[0].name);
    sessionStorage.setItem('prodsInfo',JSON.stringify(data));
  });

  prodsInfo = JSON.parse(sessionStorage.getItem('prodsInfo'));
  // console.log(prodsInfo);

    var userId = getUserId();
    // console.log(userId);
    users = JSON.parse(sessionStorage.getItem('users'));
    
    //while(!(users = JSON.parse(sessionStorage.getItem('users')))){}
    $.each(users,function(i,obj){
      if(obj.user_id == userId){
        // sessionStorage.setItem('currUser',JSON.stringify(obj));
        //updating breadcrumb to user name
        $('.breadcrumb').append(
          '<li class="breadcrumb-item"><a href="handleWish.php">Handle Wish</a></li>'+
          '<li class="breadcrumb-item" aria-current="page"><a href="specificWish.php?user_id=' +
           obj.user_id +
           '">'+
          obj.name +
          ' Wish</a></li>'+
          '<li class="breadcrumb-item active" aria-current="page">' +
          obj.name+
          ' Diet</li>'
        )
      }
    })   
    

    user_diet= JSON.parse(sessionStorage.getItem('meals'));
    console.log(user_diet);

    // for each meal constructing all properties needed
    class MealSum{
      protein = 0;
      calories = 0;
      carbohydrat = 0;
      dietID = 0;
      IDs = [];

      constructor(text = '<tbody class="mainTableBody">'){
        this.text = text;
      }
    }


    mealSumArr = [new MealSum(),new MealSum(), new MealSum()];

    // calculate daily meal sum
    var totalProteins = 0;
    var totalCalories = 0;
    var totalCarbohydrat = 0;
    
    var temp = createOptions(prodsInfo);

    


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

              // creating products/amount table
              
              computeProdAmountText(mealSumArr,j,prodName,prodAmount,idIndexs);
              // calculating meal nutrition vals
              calNutritionsVal(mealSumArr,j,prodName,prodAmount,prodsInfo);
            })
            mealSumArr[j].text += '</tbody>';
          }
        }  
      }    
    })

    // calculate daily nutritions sum 
    for( i = 0 ; i < 3 ; ++i){
      totalProteins += mealSumArr[i].protein; 
      totalCalories += mealSumArr[i].calories;
      totalCarbohydrat += mealSumArr[i].carbohydrat;
    }

    // post daily nutritions sum table
    createDailyMealSumTable(totalCalories,totalCarbohydrat,totalProteins);
})

$('button').on('click', function () {
 
 if($(this).html().match(/First/g) != null){ 
  $('.mainTableBody').replaceWith(mealSumArr[0].text); 
  createMealSumTable(mealSumArr,0);
  
  $( "input" ).keyup(function() {
    var value = $(this).val();  
    $(this).val(value);
    console.log($(this).val());
  })

  currentMeal = 0;

  console.log(mealSumArr[0].IDs);
  console.log(mealSumArr[0].dietID);
 }

 if($(this).html().match(/Second/g) != null){
  $('.mainTableBody').replaceWith(mealSumArr[1].text); 
  createMealSumTable(mealSumArr,1); 
  console.log(mealSumArr[1].IDs);
  console.log(mealSumArr[1].dietID);
  currentMeal = 1;
 }

 if($(this).html().match(/Third/g) != null){
  $('.mainTableBody').replaceWith(mealSumArr[2].text);  
  createMealSumTable(mealSumArr,2);
  console.log(mealSumArr[2].IDs);
  console.log(mealSumArr[2].dietID);
  currentMeal = 2;
 }

})

$('.addIcon').on("click",function(){
  var table_row = $(
      '<tr>' +
      '<td>' +
      '<input type="text" class="form-control" placeholder="Product name">' +
      '</td>' +
      '<td>' +
      '<input type="number" class="form-control" placeholder="0">' +
      '</td>' +
      '</tr>'
  )
  $('.mainTableBody').append(table_row);
})

$('#saveBtn').on('click',function(){
  updatedText = '';
   $.each( mealSumArr[currentMeal].IDs,function(i,obi){
     currID = '#' + JSON.stringify(obi);
    //  console.log(parseInt(obi));
      if(parseInt(obi)% 2){
        // console.log(obi);
        updatedText +=  $(currID).val() +',';
      }else{
        updatedText +=  $(currID).val() + ':';
      }
   })

  //  to remove the last char ',' from the end 
  updatedText = updatedText.slice(0,-1);
   console.log(updatedText);

       var q = "UPDATE `tbl_diet_202` SET prodes= '" +
       updatedText +
       "' WHERE diet_id= '"+
       mealSumArr[currentMeal].dietID +
       "'";

  $.when( $.post('query.php',{query: q},function(res){
    // var updatedJson;
    if( res == "NULL" )
      console.log('error occured');

  })).done(function(){
    var q = "SELECT * FROM `tbl_user-diet_202` AS u INNER JOIN `tbl_diet_202` AS p ON p.diet_id = u.diet_id";

    $.post('query.php',{query: q},function(res){
      var json;
      if( res == "NULL" )
        console.log('error occured');
      else{
        json = JSON.parse(res);
        console.log(json);
        sessionStorage.setItem('meals',JSON.stringify(json));
      }  

    });
  });
});



