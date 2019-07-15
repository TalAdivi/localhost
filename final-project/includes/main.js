

$("button").on("click",function(curr){
  $("button").removeClass("active");
  $(this).toggleClass("active");
})


// round progress bar logic
$.fn.loading = function () {
  var DEFAULTS = {
    backgroundColor: '#b3cef6',
    progressColor: '#4b86db',
    percent: 0,
    duration: 2000
  };

  $(this).each(function () {
    var $target = $(this);

    var opts = {
      backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
      progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
      percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
      duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration
    };
    // console.log(opts);

    $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>'+'</span></div>');

    $target.find('.background').css('background-color', opts.backgroundColor);
    $target.find('.left').css('background-color', opts.backgroundColor);
    $target.find('.rotate').css('background-color', opts.progressColor);
    $target.find('.right').css('background-color', opts.progressColor);

    $('.show-percent').append(opts.percent + '%');

    var $rotate = $target.find('.rotate');
    setTimeout(function () {
      $rotate.css({
        'transition': 'transform ' + opts.duration + 'ms linear',
        'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
      });
    }, 1);

    if (opts.percent > 50) {
      var animationRight = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-end';
      var animationLeft = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-start';
      $target.find('.right').css({
        animation: animationRight,
        opacity: 1
      });
      $target.find('.left').css({
        animation: animationLeft,
        opacity: 0
      });
    }
  });
}


$(".progress-bar").loading();
$('input').on('click', function () {
  $(".progress-bar").loading();
});


$(document).ready(function(){
  
 
  currURL = window.location.href;
  console.log(currURL); 

  // to see witch page i am
  if(currURL.match(/coucherHomePage/) != null)
  {
    var q = "SELECT * FROM `tbl_users_202`";
    
    $.when(
      $.post('query.php',{query: q},function(res){
        if( res == "NULL" )
          alert('error occured');
        else{
          var json = JSON.parse(res);
          sessionStorage.setItem('users',JSON.stringify(json));
        }
      })
    ).done(function(){
      users = JSON.parse(sessionStorage.getItem('users'));
      $.each(users,function(i,obj){
        if(obj.newUser == 1)
        {
          $("#newUsers").append(
            '<tr>'+
            '<th scope="row" class="remove_top_border_th">'+
              '<div class="orangeDot"></div>'+
            '</th>'+
            '<td colspan="3" class="remove_top_border_th"><a class="nameLink" href="#">'+
            obj.name +
            '</a></td>'+
          '</tr>'
          )
        }
        else{
          if(obj.wishes != null){
          $('#usersWishes').append(
            '<tr>' +
            '<th scope="row">' +
              '<div class="redDot"></div>' +
            '</th>' +
            '<td colspan="2"><a class="nameLink" href="#">'+
            obj.name +
            '</a></td>'+
            '<td>'+
              obj.wishes +
              '</td>'+
          '</tr>'
          )
          }
        }
      })
    });




  }


  if(currURL.match(/handleWish/g) != null){

    var q = "SELECT * FROM `tbl_user-diet_202` AS u INNER JOIN `tbl_diet_202` AS p ON p.diet_id = u.diet_id";

    $.when(
      $.post('query.php',{query: q},function(res){
        if( res == "NULL" )
          console.log('error occured');
        else{
          json = JSON.parse(res);
          sessionStorage.setItem('meals',JSON.stringify(json));
        }  
  
      })
    ).done(function(){
      users = JSON.parse(sessionStorage.getItem('users'));
      console.log(users);
      $.each(users,function(i,obj){
        if(obj.wishes != null){
          $('#wishesTable tbody').append(
            '<tr>'+
            '<th scope="row">'+
                '<div class="redDot"></div>'+
            '</th>'+
            '<td colspan="2"><a class="nameLink" href=specificWish.php?user_id='+
            obj.user_id+
            '>'+
            obj.name +
           ' </a></td>'+
              '<td>'+
              obj.wishes+
              '</td>'+
            '</tr>'
          )
        }
      });
    });


    
  }

  if(currURL.match(/specificDiet/g) != null){

    // var q = "SELECT * FROM `tbl_user-diet_202` AS u INNER JOIN `tbl_diet_202` AS p ON p.diet_id = u.diet_id";

    // $.post('query.php',{query: q},function(res){
    //   if( res == "NULL" )
    //     console.log('error occured');
    //   else{
    //     json = JSON.parse(res);
    //     sessionStorage.setItem('meals',JSON.stringify(json));
    //   }  
    // });

  }



});
