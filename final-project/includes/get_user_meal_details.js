var userName, userWishes;

function getUserId() {
    var aKeyValue = window.location.search.substring(1).split('&'), 
    userId = aKeyValue[0].split("=")[1];
    //console.log(aKeyValue[0]);

    // console.log(window.location);

    return userId;
}

$(document).ready(function(){
    var userId = getUserId();
    console.log(userId);
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
    // while(!(user_diet= JSON.parse(sessionStorage.getItem('meals')))){}
    text = '<tbody class="mainTableBody">';
    $.each(user_diet,function(i,obi){
      // console.log(obi);
      if(obi.user_id == userId){
        if(obi.meal_number == 1){
         prods = obi.prodes.split(',');
         $.each(prods,function(i,ob){
          prodName = ob.split(',')[0].split(':')[0];
          prodAmount = ob.split(',')[0].split(':')[1];
          text += '<tr>' +
          '<td><input type="text" class="form-control" value=' +
          prodName +
           '>' +
          '</td>' +
          '<td><input type="text" class="form-control" value=' +
          prodAmount + 
          '>' +
          '</td>' +
      '</tr>';
         })
        }
        text += '</tbody>';
        $('.mainTableBody').replaceWith(text);
      }    
    })


  $.getJSON("data/data.json",function(data){
    console.log(data.products[0].name);
  });

  // calculate daily meal sum
  var totalProteins = 0;
  var totalCalories = 0;
  var totalCarbohydrat = 0;


})

$('button').on('click', function (e) {
  var userId = getUserId();
  var text='<tbody class="mainTableBody">';
  
 console.log($(this).html());
 user_diet= JSON.parse(sessionStorage.getItem('meals'));
 
 if($(this).html().match(/First/g) != null){
  
  $.each(user_diet,function(i,obi){
    // console.log(obi);
    if(obi.user_id == userId){
       //console.log(obi.prodes);
       if(obi.meal_number == 1){

         prods = obi.prodes.split(',');
         $.each(prods,function(i,ob){
           prodName = ob.split(',')[0].split(':')[0];
           prodAmount = ob.split(',')[0].split(':')[1];

          // console.log(prodName);
          // console.log(prodAmount);
           text += '<tr>' +
           '<td><input type="text" class="form-control" value=' +
           prodName +
           '>' +
           '</td>' +
           '<td><input type="text" class="form-control" value=' +
           prodAmount + 
           '>' +
           '</td>' +
           '</tr>';
          })
          text += '</tbody>';
          // console.log(text);
          $('.mainTableBody').replaceWith(text);
        }
    }
  
  })
 }

 if($(this).html().match(/Second/g) != null){
  
  $.each(user_diet,function(i,obi){
    if(obi.user_id == userId){
       if(obi.meal_number == 2){
         prods = obi.prodes.split(',');
         $.each(prods,function(i,ob){
           prodName = ob.split(',')[0].split(':')[0];
           prodAmount = ob.split(',')[0].split(':')[1];
           text += '<tr>' +
           '<td><input type="text" class="form-control" value=' +
           prodName +
           '>' +
           '</td>' +
           '<td><input type="text" class="form-control" value=' +
           prodAmount + 
           '>' +
           '</td>' +
           '</tr>';
          })
          text += '</tbody>';
          $('.mainTableBody').replaceWith(text);

        }
    }
  })
 }

 if($(this).html().match(/Third/g) != null){
  
  $.each(user_diet,function(i,obi){
    // console.log(obi);
    if(obi.user_id == userId){
       //console.log(obi.prodes);
       if(obi.meal_number == 3){

         prods = obi.prodes.split(',');
         $.each(prods,function(i,ob){
           prodName = ob.split(',')[0].split(':')[0];
           prodAmount = ob.split(',')[0].split(':')[1];
          // console.log(prodName);
           //console.log(prodAmount);
           text += '<tr>' +
           '<td><input type="text" class="form-control" value=' +
           prodName +
           '>' +
           '</td>' +
           '<td><input type="text" class="form-control" value=' +
           prodAmount + 
           '>' +
           '</td>' +
           '</tr>';
          })
          text += '</tbody>';
          $('.mainTableBody').replaceWith(text);
        }
    }
  
  })
 }

//  $('.mainTableBody').replaceWith(
   
//  );
})

  





// user_diet= JSON.parse(sessionStorage.getItem('meals'));
// $.each(user_diet,function(i,obi){
//   // console.log(obi);
//   if(obi.user_id == userId){
//      //console.log(obi.prodes);
//      prods = obi.prodes.split(',');
//      $.each(prods,function(i,ob){
//       prodName = ob.split(',')[0].split(':')[0];
//       prodAmount = ob.split(',')[0].split(':')[1];
//       console.log(prodName);
//       console.log(prodAmount);
//       $('.mainTableBody').append(
    //     '<tr>' +
    //     '<td><input type="text" class="form-control" value=' +
    //     prodName +
    //      '>' +
    //     '</td>' +
    //     '<td><input type="text" class="form-control" value=' +
    //     prodAmount + 
    //     '>' +
    //     '</td>' +
    // '</tr>' 
//       )


//      })
//   }

// })
// currProd = obj.prodes.substring().split(':');