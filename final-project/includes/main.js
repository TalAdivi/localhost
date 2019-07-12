
clicked = false;
$( "button" ).on( "click", function( event ) {
  var target = $( event.target ),
    progressbar = $( ".progress-bar" ),
    progressbarValue = progressbar.find( ".progress-bar" );
    

   if ( target.is( "#colorButton" ) ) {
       console.log('here');
    
       progressbar.css({"background-color": '#' + Math.floor( Math.random() * 16777215 ).toString( 16 )});

  } else if ( target.is( "#falseButton" ) ) {
      if(!clicked){
          progressbar.addClass("progress-bar-striped");
          progressbar.addClass("progress-bar-animated");
        clicked = true;
      }
      else{
          console.log("in else");
        progressbar.removeClass("progress-bar-striped");
        progressbar.removeClass("progress-bar-animated");
        clicked = false;
      }
  }
});

$("button").on("click",function(curr){
  $("button").removeClass("active");
  $(this).toggleClass("active");
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





// round progress bar logic
$.fn.loading = function () {
  var DEFAULTS = {
    backgroundColor: '#b3cef6',
    progressColor: '#4b86db',
    percent: 75,
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

    $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + opts.percent + '%</span></div>');

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


// ----------------------------------------------------------------------- //
//to change black dot to check black dot and change the pop up photo

$(document).ready(function(){

$('#dotNumOne').on({'click': function(){
$('#dotNumOne').attr('src','../first-flow/images/Check_Circle_Icon_1.png');
  }
});
  $('#dotNumTwo').on({'click': function(){
  $('#dotNumTwo').attr('src','../first-flow/images/Check_Circle_Icon_1.png');
  }
});
    $('#dotNumThree').on({'click': function(){
    $('#change-image').attr('src','../first-flow/images/leave.jpg');
  }
});

})



  
