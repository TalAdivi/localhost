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
    $.each(users,function(i,obj){
      if(obj.user_id == userId){

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
    $.each(user_diet,function(i,obi){
      console.log(obi);
    
    })
    // currProd = obj.prodes.substring().split(':');
    
})

  
