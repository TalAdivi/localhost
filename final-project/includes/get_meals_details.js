var idAutoIncrease = 0;
var currentMeal = 0;
var newDietIDs = [];
var diets = JSON.parse(sessionStorage.getItem('allDiets'));

var prodAmountTextNewTable = function (prodName,prodAmount) { 
  var options = createOptions(prodsInfo,prodName);
  var text = '';


  text = '<tr>' + 
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

  newDietIDs.push(idAutoIncrease-2);
  newDietIDs.push(idAutoIncrease-1);
  console.log(newDietIDs);
  
  return text;
 }

var createGeneralOptions = function(Json){
  var allOptions = '';

  $.each(Json,function(i,obi){

    allOptions += '<option value="' + obi.name + '" class="generalOption' +
    '">' + obi.name + '</option>';
  });

  return allOptions;
}

// makeTextOfProdes = function(){
//   userId = getUserId();
//   user_diet= JSON.parse(sessionStorage.getItem('meals'));
//   $.each(user_diet,function(i,obi){
//     if(obi.user_id == userId){
//       for (j = 0 ; j < 3 ; ++j){

//         // creating to products and amount of each meal
//         if(obi.meal_number == j + 1){
//           mealSumArr[j].dietID = obi.diet_id;
//           var idIndexs = {i:0};
//           prods = obi.prodes.split(',');

//           $.each(prods,function(i,ob){
//             prodName = ob.split(',')[0].split(':')[0];
//             prodAmount = ob.split(',')[0].split(':')[1];

//             // creating products/amount table
//             computeProdAmountText(mealSumArr,j,prodName,prodAmount,idIndexs);
//             // calculating meal nutrition vals
//             calNutritionsVal(mealSumArr,j,prodName,prodAmount,prodsInfo);
//           })
//           mealSumArr[j].text += '</tbody>';
//           createMealSumTable(mealSumArr[j]);
//         }
//       }  
//     }    
//   })
// }

var createOptions = function(Json,selected){
  var allOptions = '';

  $.each(Json,function(i,obi){
    // optionsNames.push(JSON.stringify(obi.name));
    if(selected == obi.name){
      allOptions += '<option value="' + obi.name + '" selected>' + obi.name + '</option>';
    }else{

      allOptions += '<option value="' + obi.name + '">' + obi.name + '</option>';
    }

  });

  return allOptions;
}

var makeTable = function(json,tableName){
  tableText = '<tbody class="mainTableBody">';
  $.each(json,function(i,obi){

    if(obi.name == tableName){
      prods = obi.prodes.split(',');

          
      $.each(prods,function(j,ob){
        prodName = ob.split(',')[0].split(':')[0];
        prodAmount = ob.split(',')[0].split(':')[1];

        tableText += computeProdAmountText(prodName,prodAmount,obi);

      });
      tableText +='</tbody>';
      $('.mainTableBody').replaceWith(tableText);
    }
  });

}

computeProdAmountText = function(prodName,prodAmount,obi){

  var options = createOptions(prodsInfo,prodName);
  var text = '';


  text = '<tr>' + 
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

  obi.mealIDs.push(JSON.stringify(idAutoIncrease - 2));
  obi.mealIDs.push(JSON.stringify(idAutoIncrease - 1));

  // mealSumArr[j].IDs[idIndexs.i++] = idAutoIncrease - 2 ;
  // mealSumArr[j].IDs[idIndexs.i++] = idAutoIncrease - 1 ;

  return text;
}


$(document).ready(function(){

    prodsInfo = JSON.parse(sessionStorage.getItem('prodsInfo'));

    // user_diet= JSON.parse(sessionStorage.getItem('meals'));
    // console.log(user_diet);
    
    // createOptions(prodsInfo);
    
    var q3 = "SELECT * FROM `tbl_diet_202`";

    $.post('query.php',{query: q3},function(res){
      var json;
      if( res == "NULL" )
        console.log('error occured');
      else{
        json = JSON.parse(res);
        sessionStorage.setItem('allDiets',JSON.stringify(json));
        // var tableText ='';
        var optionss = createGeneralOptions(json);

        // console.log(optionss);
        $('#choose-meal-option').append(optionss);
        
      //   $.each(json,function(i,obi){
      //     var idIndexs = {i:0};
      //     // console.log(obi);
      //     prods = obi.prodes.split(',');

          
      //     $.each(prods,function(j,ob){
      //       prodName = ob.split(',')[0].split(':')[0];
      //       prodAmount = ob.split(',')[0].split(':')[1];
  
      //       // creating products/amount table
            
      //        tableText += computeProdAmountText(prodName,prodAmount,idIndexs);
      //       // calculating meal nutrition vals
      //       //calNutritionsVal(mealSumArr,j,prodName,prodAmount,prodsInfo);
      //     })

      //     // console.log(tableText);
      //     // here need to post the table
      //     currTable = '#table_' + JSON.stringify(i);
          
      //     $(currTable).append(tableText);

      //     // mealSumArr[j].text += '</tbody>';
                      
      // })
  
      }  

    });

})

$( "select" ).change(function() {
    var str = "";
    // console.log($(this));
    $( "select option:selected" ).each(function() { 

      // to prevent product selected to triger 
      if($(this).attr('class') == 'generalOption'){
        console.log($(this).val());
       
        $.each(diets,function(i,obi){
          obi["mealIDs"] = [];
          // console.log(obi);
        });
        makeTable(diets,$(this).text());
        console.log(diets);
      }

    });
  
  });

  $( "input" ).keyup(function() {
    var value = $(this).val();  
    $(this).val(value);
    console.log($(this).val());
  })

  $('#addMealName').on("click",function(){

    $('.chooseMeal .table.table-bordered.table-highlight tbody').append(
      '<tr>' +
        '<td>' + 
        '<input type="text" class="form-control" value="" placeholder="enter diet name" id="newMealInput"></input>' +
        '</td>' +
        '</tr>'
    );

    clearTable = '<tbody class="mainTableBody"></tbody>';
    $('.mainTableBody').replaceWith(clearTable);

  });


  // $('#saveBtnn').on("click",function(){
  //   console.log($('#newMealInput').val());
  // })

$('#addRow').on("click",function(){
  rowText = prodAmountTextNewTable('',0);
  
  $('.mainTableBody').append(rowText);
})

$('#deleteBtn').on("click",function(){
  var q ='';
  $( "select option:selected" ).each(function() { 

    // to prevent product selected to triger 
    if($(this).attr('class') == 'generalOption'){
      console.log($(this).val());
    
        tableName = $(this).text();
        
        q = "DELETE FROM `tbl_diet_202` WHERE name=" +
        "'" +
        tableName +
        "'";

        $.when( $.post('query.php',{query: q},function(res){
          // var updatedJson;
          if( res == "NULL" )
            console.log('error occured');
      
        })).done(function(){
          alert("succeeded to delete!");
        })

    
    }

  });  

});

$('#saveBtn').on('click',function(){
  var updatedText = '';
  var tableName = '';
  
  if($('#newMealInput').val() == null){
    $( "select option:selected" ).each(function() { 
      // to prevent product selected to triger 
      if($(this).attr('class') == 'generalOption'){

        tableName = $(this).text();
        $.each(diets,function(i,obi){
          if(obi.name == tableName ){
            updatedText = obi.prodes;
          }
        });
        updatedText += ',';    
      }

    });
  } else{
    tableName = $('#newMealInput').val();
  }

     $.each( newDietIDs,function(i,obi){
       console.log(obi);
       currID = '#' + obi;
        if(parseInt(obi)% 2){
          // console.log(obi);
          updatedText +=  $(currID).val() +',';
        }else{
          updatedText +=  $(currID).val() + ':';
        }
     })
     updatedText = updatedText.slice(0,-1);
     console.log(updatedText);


      var q ='';

     if($('#newMealInput').val() == null){
       q = "UPDATE `tbl_diet_202` SET prodes= '" +
      updatedText +
      "' WHERE name= '"+
      tableName +
      "'";
       
    }else{

       q = "INSERT INTO `tbl_diet_202` (`name`,`prodes`) VALUES ('" +
      tableName +
      "'," +
      "'" +
      updatedText +
      "'" +
      ")";
     }
    

          console.log(q);
  
    $.when( $.post('query.php',{query: q},function(res){
      // var updatedJson;
      if( res == "NULL" )
        console.log('error occured');
  
    })).done(function(){

    })
  

 
  

});




          // $('#middleWrapper').append(
          //   '<div class="all-tables">' +
          //     '<div class="table-responsive">' +
          //       '<table class="table table-bordered table-striped table-highlight" id="table_'+
          //       i +
          //       '">'+
          //         '<thead>'+
          //           '<tr>'+
          //             '<th>' +
          //             '<img src="./images/Add_Icon_1.png" alt="picture" class="addIcon">Products'+
          //             '</th>' +
          //             '<th>Amount (Grams)</th>'+
          //           '</tr>'+
          //         '</thead>'+
          //         '<tbody class="mainTableBody">'+             
          //         '</tbody>'+
          //       '</table>'+
          //     '</div>'+
          //   '</div>'
          // )