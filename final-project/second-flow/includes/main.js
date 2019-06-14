$(document).ready(function(){
  // console.log("GEYYEYEY");

  var table_row = $(
    '<tr>' +
    '<th scope="row">' + 
    '<div class="redDot"></div>' +
    '</th>' +
    '<td colspan="2"><a class="nameLink" href="./specificWish.html">'+
    // name +
    '</a></td>' +
    '<td>' +
    // subject +
    '</td>' +
    '</tr>'

  )
  $('.whishes-table-body')

});








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

    // to remove selected meal
    $("button").on("click",function(curr){
            $("button").removeClass("active");
            $(this).toggleClass("active");
    })




    // console.log("GEYYEYEY");
    $.fn.loading = function () {
      var DEFAULTS = {
        backgroundColor: '#b3cef6',
        progressColor: '#4b86db',
        percent: 75,
        duration: 2000
      };	
      
      $(this).each(function () {
        var $target  = $(this);
  
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
    
        var $rotate = $target.find('.rotate');
        setTimeout(function () {	
          $rotate.css({
            'transition': 'transform ' + opts.duration + 'ms linear',
            'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
          });
        },1);		
  
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
  
  var images = [
      '../images/Food_Apple_Icon_Med.png',
      'https://www.nycgo.com/images/uploads/homepage/Empire-State-Building-Observatory-Tom-Perry-2618.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg'
  ];
  
  var i=0
  $('.progress-bar div span').each(function() {
    $(this).css('background-image', 'url('+images[i]+')');
    $(this).css('background-size','cover');
    i = (i + 1) % images.length;
  });

  
  




  





