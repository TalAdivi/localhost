var userName, userWishes;
var idAutoIncrease = 0;
var currentMeal = 0;

var optionsNames = [];

var createOptions = function (Json, selected) {
  var allOptions = '';

  $.each(Json, function (i, obi) {
    optionsNames.push(JSON.stringify(obi.name));
    if (selected == obi.name) {
      allOptions += '<option value="' + obi.name + '" selected>' + obi.name + '</option>';
    } else {

      allOptions += '<option value="' + obi.name + '">' + obi.name + '</option>';
    }
  });

  return allOptions;
}

makeTextOfProdes = function () {
  userId = getUserId();
  user_diet = JSON.parse(sessionStorage.getItem('meals'));
  $.each(user_diet, function (i, obi) {
    if (obi.user_id == userId) {
      for (j = 0; j < 3; ++j) {

        // creating to products and amount of each meal
        if (obi.meal_number == j + 1) {
          mealSumArr[j].dietID = obi.diet_id;
          var idIndexs = { i: 0 };
          prods = obi.prodes.split(',');

          $.each(prods, function (i, ob) {
            prodName = ob.split(',')[0].split(':')[0];
            prodAmount = ob.split(',')[0].split(':')[1];

            // creating products/amount table
            computeProdAmountText(mealSumArr, j, prodName, prodAmount, idIndexs);
            // calculating meal nutrition vals
            calNutritionsVal(mealSumArr, j, prodName, prodAmount, prodsInfo);
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

computeProdAmountText = function (mealSumArr, j, prodName, prodAmount, idIndexs) {
  var options = createOptions(prodsInfo, prodName);

  mealSumArr[j].text += '<li class="table-row">' +
    '<div class="col" data-label="Name">' +
    '<select class="options custom-select"' +
    'id=' +
    idAutoIncrease++ +
    '>' + options + '</select>' +
    '</div>' +
    '<div class="col col-4" data-label="whishes">' +
    '<input type="text" class="form-control "' +
    'id=' +
    idAutoIncrease++ +
    ' value=' +
    prodAmount +
    '>' +
    '</div>' +
    '</li>';

  // to see witch IDs of each input are in the meal
  mealSumArr[j].IDs[idIndexs.i++] = idAutoIncrease - 2;
  mealSumArr[j].IDs[idIndexs.i++] = idAutoIncrease - 1;
}


calNutritionsVal = function (mealSumArr, j, prodName, prodAmount, prodsInfo) {

  $.each(prodsInfo, function (i, curProd) {
    if (curProd.name == prodName) {
      mealSumArr[j].protein += parseInt((curProd.protein * (prodAmount / 100)).toFixed(2));
      mealSumArr[j].calories += parseInt((curProd.calories * (prodAmount / 100)).toFixed(2));
      mealSumArr[j].carbohydrat += parseInt((curProd.carbohydrat * (prodAmount / 100)).toFixed(2));
      return;
    }
  })
}

createMealSumTable = function (mealSumArr, j) {
  $('.mealSumTalbe .mainTableBody').replaceWith(
    '<div class="mainTableBody">' +
    '<li class="table-row">' +
    '<div class="col col-8" data-label="Name">' +
    '<input type="text" class="form-control" value=' +
    "Carbohydrat" +
    ' readonly="readonly">' +
    '</div>' +
    '<div class="col" data-label="whishes">' +

    '<input type="text" class="form-control" value=' +
    mealSumArr[j].carbohydrat +
    ' readonly="readonly">' +
    '</div>' +
    '</li>' +


    '<li class="table-row">' +
    '<div class="col col-8" data-label="Name">' +
    '<input type="text" class="form-control" value=' +
    "Proteins" +
    ' readonly="readonly">' +
    '</div>' +
    '<div class="col " data-label="whishes">' +

    '<input type="text" class="form-control" value=' +
    mealSumArr[j].protein +
    ' readonly="readonly">' +
    '</div>' +
    '</li>' +


    '<li class="table-row">' +
    '<div class="col col-8" data-label="Name">' +
    '<input type="text" class="form-control" value=' +
    "Calories" +
    ' readonly="readonly">' +
    '</div>' +
    '<div class="col " data-label="whishes">' +

    '<input type="text" class="form-control" value=' +
    mealSumArr[j].calories +
    ' readonly="readonly">' +
    '</div>' +
    '</li>' +
    '</div>'

  )
}

createDailyMealSumTable = function (totalCalories, totalCarbohydrat, totalProteins) {

  $('.dailyMealSumTalbe .mainTableBody').replaceWith(

    '<div class="mainTableBody">' +
    '<li class="table-row">' +
    '<div class="col col-8" data-label="Name">' +
    '<input type="text" class="form-control" value=' +
    "Carbohydrat" +
    ' readonly="readonly">' +
    '</div>' +
    '<div class="col" data-label="whishes">' +

    '<input type="text" class="form-control" value=' +
    totalCarbohydrat +
    ' readonly="readonly">' +
    '</div>' +
    '</li>' +


    '<li class="table-row">' +
    '<div class="col col-8" data-label="Name">' +
    '<input type="text" class="form-control" value=' +
    "Proteins" +
    ' readonly="readonly">' +
    '</div>' +
    '<div class="col " data-label="whishes">' +

    '<input type="text" class="form-control" value=' +
    totalProteins +
    ' readonly="readonly">' +
    '</div>' +
    '</li>' +


    '<li class="table-row">' +
    '<div class="col col-8" data-label="Name">' +
    '<input type="text" class="form-control" value=' +
    "Calories" +
    ' readonly="readonly">' +
    '</div>' +
    '<div class="col " data-label="whishes">' +

    '<input type="text" class="form-control" value=' +
    totalCalories +
    ' readonly="readonly">' +
    '</div>' +
    '</li>' +
    '</div>'
  )
}

$(document).ready(function () {

  $.when(
    $.getJSON("data/data.json", function (data) {
      sessionStorage.setItem('prodsInfo', JSON.stringify(data));
      prodsInfo = JSON.parse(sessionStorage.getItem('prodsInfo'));
      users = JSON.parse(sessionStorage.getItem('users'));
      user_diet = JSON.parse(sessionStorage.getItem('meals'));
    })
  ).done(function () {
    var userId = getUserId();
    $.each(users, function (i, obj) {
      if (obj.user_id == userId) {
        //updating breadcrumb to user name
        $('.breadcrumb').append(
          '<li class="breadcrumb-item"><a href="handleWish.php">Handle Wish</a></li>' +
          '<li class="breadcrumb-item" aria-current="page"><a href="specificWish.php?user_id=' +
          obj.user_id +
          '">' +
          obj.name +
          ' Wish</a></li>' +
          '<li class="breadcrumb-item active" aria-current="page">' +
          obj.name +
          ' Diet</li>'
        )
      }
    })


    // for each meal constructing all properties needed
    class MealSum {
      protein = 0;
      calories = 0;
      carbohydrat = 0;
      dietID = 0;
      IDs = [];

      constructor(text = '<div class="mainTableBody">') {
        this.text = text;
      }
    }


    mealSumArr = [new MealSum(), new MealSum(), new MealSum()];

    // calculate daily meal sum
    var totalProteins = 0;
    var totalCalories = 0;
    var totalCarbohydrat = 0;


    $.each(user_diet, function (i, obi) {
      if (obi.user_id == userId) {

        for (j = 0; j < 3; ++j) {

          // creating to products and amount of each meal
          if (obi.meal_number == j + 1) {
            mealSumArr[j].dietID = obi.diet_id;
            var idIndexs = { i: 0 };
            prods = obi.prodes.split(',');

            $.each(prods, function (i, ob) {
              prodName = ob.split(',')[0].split(':')[0];
              prodAmount = ob.split(',')[0].split(':')[1];

              // creating products/amount table
              computeProdAmountText(mealSumArr, j, prodName, prodAmount, idIndexs);
              // calculating meal nutrition vals
              calNutritionsVal(mealSumArr, j, prodName, prodAmount, prodsInfo);
            })
            mealSumArr[j].text += '</div>';
          }
        }
      }
    })

    // calculate daily nutritions sum 
    for (i = 0; i < 3; ++i) {
      totalProteins += mealSumArr[i].protein;
      totalCalories += mealSumArr[i].calories;
      totalCarbohydrat += mealSumArr[i].carbohydrat;
    }

    // post daily nutritions sum table
    createDailyMealSumTable(totalCalories, totalCarbohydrat, totalProteins);
  })

  $("input").keyup(function () {
    var value = $(this).val();
    $(this).val(value);
  })
  $('button').on('click', function () {

    if ($(this).html().match(/First/g) != null) {
      $('.mealTable .mainTableBody').replaceWith(mealSumArr[0].text);
      createMealSumTable(mealSumArr, 0);
      currentMeal = 0;

    }

    if ($(this).html().match(/Second/g) != null) {
      $('.mealTable .mainTableBody').replaceWith(mealSumArr[1].text);
      createMealSumTable(mealSumArr, 1);
      currentMeal = 1;
    }

    if ($(this).html().match(/Third/g) != null) {
      $('.mealTable .mainTableBody').replaceWith(mealSumArr[2].text);
      createMealSumTable(mealSumArr, 2);
      currentMeal = 2;
    }
  })

  $('#saveBtn').on('click', function () {
    updatedText = '';
    $.each(mealSumArr[currentMeal].IDs, function (i, obi) {
      currID = '#' + JSON.stringify(obi);
      if (parseInt(obi) % 2) {
        updatedText += $(currID).val() + ',';
      } else {
        updatedText += $(currID).val() + ':';
      }
    })

    //  to remove the last char ',' from the end 
    updatedText = updatedText.slice(0, -1);

    var q = "UPDATE `tbl_diet_202` SET prodes= '" +
      updatedText +
      "' WHERE diet_id= '" +
      mealSumArr[currentMeal].dietID +
      "'";

    $.when($.post('query.php', { query: q }, function (res) {
      // var updatedJson;
      if (res == "NULL")
        console.log('error occured');

    })).done(function () {
      var q = "SELECT * FROM `tbl_user-diet_202` AS u INNER JOIN `tbl_diet_202` AS p ON p.diet_id = u.diet_id";

      $.when($.post('query.php', { query: q }, function (res) {
        var json;
        if (res == "NULL")
          console.log('error occured');
        else {
          json = JSON.parse(res);
          sessionStorage.setItem('meals', JSON.stringify(json));
        }

      })).done(function () {
        alert("Menu updated!");
      });
    });
  });
});
