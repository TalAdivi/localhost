$( function() {
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
  });
  





