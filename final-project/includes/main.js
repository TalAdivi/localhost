
$("button").on("click", function (curr) {
  $("button").removeClass("active");
  $(this).toggleClass("active");
})


// round progress bar logic



$(document).ready(function () {

  currURL = window.location.href;
  if (currURL.match(/specificWish/) != null) {
    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#newUserTable li").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  }

  // to see witch page i am
  if (currURL.match(/coucherHomePage/) != null) {

    var q = "SELECT * FROM `tbl_users_202`";

    $.when(
      $.post('query.php', { query: q }, function (res) {
        if (res == "NULL")
          alert('error occured');
        else {
          var json = JSON.parse(res);
          sessionStorage.setItem('users', JSON.stringify(json));
        }
      })
    ).done(function () {
      users = JSON.parse(sessionStorage.getItem('users'));
      $.each(users, function (i, obj) {
        if (obj.newUser == 1) {
          $("#newUserTable").append(
            ' <li class="table-row">' +
            ' <div class="col " data-label="Name">' +
            obj.name +
            '</div>' +
            '</li>'

          )
        }
        else {
          if (obj.wishes != null) {
            $('#wishesTable').append(
              '<li class="table-row">' +
              '<a class="text-dark" href=./specificWish.php?user_id=' +
              obj.user_id +
              '>' +
              '<div class="col" data-label="Name">' +
              obj.name +
              '</div>' +
              '</a>' +
              '<div class="col col-4" data-label="whishes">' +
              obj.wishes +
              '</div>' +
              '</li>'

            )
          }
        }
      })
    });

    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#circle_table tbody tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $(".table-row div").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  }


  if (currURL.match(/handleWish/g) != null) {

    var q = "SELECT * FROM `tbl_user-diet_202` AS u INNER JOIN `tbl_diet_202` AS p ON p.diet_id = u.diet_id";

    $.when(
      $.post('query.php', { query: q }, function (res) {
        if (res == "NULL")
          console.log('error occured');
        else {
          json = JSON.parse(res);
          sessionStorage.setItem('meals', JSON.stringify(json));
        }

      })
    ).done(function () {
      users = JSON.parse(sessionStorage.getItem('users'));
      $.each(users, function (i, obj) {
        if (obj.wishes != null) {
          $('#wishesTable').append(
            '<li class="table-row">' +
            '<a class="nameLink col-4" href=specificWish.php?user_id=' +
            obj.user_id +
            '>' +
            '<div class="col col-4" data-label="Name">' +
            obj.name +
            '</div>' +
            '</a>' +
            '<div class="col col-4" data-label="whishes">' +
            obj.wishes +
            '</div>' +
            '</li>'

          )
        }
      });
    });
    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $(".table-row div").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  }

  if (currURL.match(/mobileHomePage/g) != null) {
    var q = "SELECT * FROM `tbl_users_202`";

    $.when(
      $.post('query.php', { query: q }, function (res) {
        if (res == "NULL")
          alert('error occured');
        else {
          var json = JSON.parse(res);
          sessionStorage.setItem('users', JSON.stringify(json));

          $.getJSON("data/newData.json", function (data) {
            sessionStorage.setItem('prodsInfo', JSON.stringify(data));

          });
        }
      })



    ).done(function () {
      users = JSON.parse(sessionStorage.getItem('users'));
      var aKeyValue = window.location.search.substring(1).split('&'),
        userId = aKeyValue[0].split("=")[1];

      $.each(users, function (i, obj) {
        if (obj.user_id == userId) {

          $('.hey-user-name').append(
            'Hey ' + obj.name
          );

          obj.progress = parseInt(obj.progress);
          $('#updatePercent').attr('data-percent',
            obj.progress
          );


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

              $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + '</span></div>');

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


          $('#mealLink').attr('href', './userDiet.php?user_id=' +
            userId
          );

        }
      })
    });
  }




});
