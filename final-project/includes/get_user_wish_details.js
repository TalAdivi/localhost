var userName, userWishes;

function getUserId() {
    var aKeyValue = window.location.search.substring(1).split('&'), 
    userId = aKeyValue[0].split("=")[1];
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
          '<li class="breadcrumb-item active" aria-current="page">'+
          obj.name +
          '</li>'
        )

        //updating users notes
        currIssue = obj.issues.substring().split(',');
        $.each(currIssue,function(i,issue){
          $('.notes').append(
            ' <b> <p class="text-danger">' + issue + '</p> </b>'
          )
        })

        //updating user wishes

        $('.container h2').append(     
            obj.name + ' Wishes'
        )

        currWish = obj.wishes.substring().split(',');
        $.each(currWish,function(i,wish){
          $('#newUserTable').append(

            '<li class="table-row">' +
            '<a class="text-dark" href=./specificDiet.php?user_id='+
             obj.user_id+
             '>'+
             '<div class="col" data-label="Name">' +
             wish +
             '</div>' +
             '</a>'+
           '</li>'


            // '<tr>'+
            // '<th scope="row" class="remove_top_border_th">'+
            //     '<div class="orangeDot"></div>'+
            // '</th>'+
            // '<td class="remove_top_border_th"><a class="nameLink" href="'+
            // './specificDiet.php?user_id='+
            // obj.user_id +
            // '">'+
            // wish +
            // '</a></td>' +
            // '<td ></td>' +
            // '<td ></td>' +
            // '</tr>'
          )
        
        })

        //updating progress bar

        $('.progress').append(
          '<div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0"'+ 
          'style="width:' + 
          obj.progress +
          '%">'+ 
          '</div><br>' 
        )

        $('#show-percent').append(
          obj.progress + '%'
        )

      }
    })
    
})

  
