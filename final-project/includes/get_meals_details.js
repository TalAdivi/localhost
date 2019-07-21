var idAutoIncrease = 0;
var currentMeal = 0;
var newDietIDs = [];
var NameOfMeal;
var NameOfCategory;
var updatedText = '';
var tableName = '';





var createMealSumTable = function (currDiet) {
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
    currDiet.carbohydrat +
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
    currDiet.protein +
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
    currDiet.calories +
    ' readonly="readonly">' +
    '</div>' +
    '</li>' +
    '</div>'

  )
}

var calNutritionsVal = function (tableName, prodName, prodAmount, prodsInfo) {

  $.each(diets, function (i, currDiet) {
    if (currDiet.name == tableName) {
      $.each(prodsInfo, function (j, currProd) {
        if (currProd.name == prodName) {
          currDiet.protein += parseInt((currProd.protein * (prodAmount / 100)).toFixed(2));
          currDiet.calories += parseInt((currProd.calories * (prodAmount / 100)).toFixed(2));
          currDiet.carbohydrat += parseInt((currProd.carbohydrat * (prodAmount / 100)).toFixed(2));
        }
        return;
      });
    }
  });

}

var prodAmountTextNewTable = function (prodName, prodAmount) {
  var options = createOptions(prodsInfo, prodName);
  var text = '';



  text = '<li class="table-row">' +
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

  // text = '<tr>' + 
  // '<td>' + '<select class="options custom-select"' +
  // 'id=' +
  // idAutoIncrease++ +
  // '>' +   options +  '</select>' +
  // '<td>' + 
  // '<input type="text" class="form-control "' +
  //   'id=' +
  //   idAutoIncrease++ +
  //  ' value=' +
  //   prodAmount + 
  //   '>' +
  // '</td>' +
  // '</tr>';

  newDietIDs.push(idAutoIncrease - 2);
  newDietIDs.push(idAutoIncrease - 1);
  console.log(newDietIDs);

  return text;
}

var createGeneralOptions = function (Json) {
  var allOptions = '';

  $.each(Json, function (i, obi) {

    allOptions += '<option value="' + obi.name + '" class="generalOption' +
      '">' + obi.name + '</option>';
  });

  return allOptions;
}



var createOptions = function (Json, selected) {
  var allOptions = '';

  $.each(Json, function (i, obi) {
    // optionsNames.push(JSON.stringify(obi.name));
    if (selected == obi.name) {
      allOptions += '<option value="' + obi.name + '" selected>' + obi.name + '</option>';
    } else {

      allOptions += '<option value="' + obi.name + '">' + obi.name + '</option>';
    }

  });

  return allOptions;
}

var optionChange = function (cat) {
  var name = $("#choose-meal-option option:selected").val();

  if (name == "clear") {
    $('.mealTable .mainTableBody').html('');
    return;
  }

  var id;

  console.log(cat, name);
  $.each(diets, function (i, currDiet) {
    var split = currDiet.name.split('-');
    if (split[0] == cat && split[1] == name) {
      id = i;
      return;
    }
  });

  console.log(id);
  console.log(diets[id]);
  makeTable(diets, diets[id].name);
};


var makeTable = function (json, tableName) {
  tableText = '<div class="mainTableBody">';
  $.each(json, function (i, obi) {

    if (obi.name == tableName) {
      prods = obi.prodes.split(',');


      $.each(prods, function (j, ob) {
        prodName = ob.split(',')[0].split(':')[0];
        prodAmount = ob.split(',')[0].split(':')[1];

        tableText += computeProdAmountText(prodName, prodAmount, obi);
        calNutritionsVal(tableName, prodName, prodAmount, prodsInfo);
        $('.mealTable .mainTableBody').append(prodName);
      });
      tableText += '</div>';
      $('.mealTable .mainTableBody').replaceWith(tableText);


      createMealSumTable(obi);
    }
  });

}

computeProdAmountText = function (prodName, prodAmount, obi) {

  var options = createOptions(prodsInfo, prodName); // all the names of the products
  var text = '';

  console.log(obi);

  text += '<li class="table-row">' +
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


  obi.mealIDs.push(JSON.stringify(idAutoIncrease - 2));
  obi.mealIDs.push(JSON.stringify(idAutoIncrease - 1));

  return text;
}


$(document).ready(function () {

  q3 = "SELECT * FROM `tbl_diet_202`";
  $.when($.post('query.php', { query: q3 }, function (res) {
    var json;
    if (res == "NULL")
      console.log('error occured');
    else {
      json = JSON.parse(res);
      sessionStorage.setItem('allDiets', JSON.stringify(json));
      diets = JSON.parse(sessionStorage.getItem('allDiets'));
      prodsInfo = JSON.parse(sessionStorage.getItem('prodsInfo'));
    }
  })
  ).done(function () {
    initMeals();
    $("input").keyup(function () {
      console.log('111');
      var value = $(this).val();
      $(this).val(value);
      console.log($(this).val());
    });

    $.each(diets, function (i, obi) {
      obi["mealIDs"] = [];
      obi["protein"] = 0;
      obi["calories"] = 0;
      obi["carbohydrat"] = 0;
      // console.log(obi);
    });

  })
});


$("select").change(function () {
  var str = "";
  // console.log($(this));
  $("select option:selected").each(function () {

    // to prevent product selected to triger 
    if ($(this).attr('class') == 'generalOption') {
      console.log($(this).val());


      makeTable(diets, $(this).text());
      // calNutritionsVal($(this).text(),diets,prodsInfo);
      console.log(diets);
      NameOfMeal = $(this).text();
    }
  });

});

$("input").keyup(function () {
  var value = $(this).val();
  $(this).val(value);
  console.log('111');
});

$('#removeMealName').on('click', function () {

  if ($('#removeMealName').hasClass('removeMeal')) {
    $('#categoryChoices').html('');
    $('#mealOption').html('Remove Category');
    $('.mealTable').css('display', 'none');
    $('#categoryChoices').append(
      '<select class="options custom-select down" id="choose-meal-category">\
      <option value="clear">Choose a Category</option>\
      </select>\
      <select class="options custom-select hidden" id="choose-meal-option">\
      </select>\
      <button id="queryRemoveCategory">Remove Category</button>\
      '


    );

    $('#queryRemoveCategory').attr('onclick', 'deleteCat()');


    initMeals();
    $('#choose-meal-category').change(function () {
      categoryChange();
    });

    $('#choose-meal-option').css('display', 'none');
    clearProdsTable = '<div class="mainTableBody"></div>';
    $('.mainTableBody').replaceWith(clearProdsTable);

    clearMealSumTable = '<div></div>';
    $('.mealSumTalbe div').replaceWith(clearMealSumTable);

    $('#removeMealName').removeClass('removeMeal');
  } else {
    $('#mealOption').html('Choose Category');
    $('.mealTable').css('display', 'block');
    $('#removeMealName').addClass('removeMeal');
    $('#categoryChoices').html('');


    $('#categoryChoices').html('<select class="options custom-select down" id="choose-meal-category">\
                <option value="clear">Choose a Category</option>\
                </select>\
                <select class="options custom-select hidden" id="choose-meal-option">\
                </select>\
              ');

    initMeals();
    $('#choose-meal-category').change(function () {
      categoryChange();
    });
    $('#choose-meal-option').change(function () {
      var cat = $("#choose-meal-category option:selected").val();
      $.each(diets, function (i, obi) {
        obi["mealIDs"] = [];
        obi["protein"] = 0;
        obi["calories"] = 0;
        obi["carbohydrat"] = 0;
        // console.log(obi);
      });
      optionChange(cat);
    });

    $('.mealTable .mainTableBody').replaceWith('');


  }
});

$('#addMealName').on("click", function () {

  if ($('#addMealName').hasClass('AddMeal')) {
    $('#mealOption').html('Add Category');
    $('#categoryChoices').html('');
    $('#categoryChoices').append(
      '<div class="col">' +
      '<input type="text" class="form-control newInput" value="" placeholder="enter category name" id="newMealInput"></input>' +
      '</div>' +
      '<div class="col">' +
      '<input type="text" class="form-control newInput" value="" placeholder="enter meal name" id="newMealInputTwo"></input>' +
      '</div>'
    );

    clearProdsTable = '<div class="mainTableBody"></div>';
    $('.mainTableBody').replaceWith(clearProdsTable);

    clearMealSumTable = '<div></div>';
    $('.mealSumTalbe div').replaceWith(clearMealSumTable);

    $('#addMealName').removeClass('AddMeal');

  } else {

    $('#mealOption').html('Choose Category');

    $('#addMealName').addClass('AddMeal');
    $('#categoryChoices').html('');

    $('#categoryChoices').html('<select class="options custom-select down" id="choose-meal-category">\
                <option value="clear">Choose a Category</option>\
                </select>\
                <select class="options custom-select hidden" id="choose-meal-option">\
                </select>\
              ');

    initMeals();
    $('#choose-meal-category').change(function () {
      categoryChange();
    });
    $('#choose-meal-option').change(function () {
      var cat = $("#choose-meal-category option:selected").val();
      $.each(diets, function (i, obi) {
        obi["mealIDs"] = [];
        obi["protein"] = 0;
        obi["calories"] = 0;
        obi["carbohydrat"] = 0;
        // console.log(obi);
      });
      optionChange(cat);
    });

    $('.mealTable .mainTableBody').replaceWith('');

  }

});


$('#addRow').on("click", function () {
  rowText = prodAmountTextNewTable('', 0);

  $('.mealTable .mainTableBody').append(rowText);
})

$('#deleteBtn').on("click", function () {
  var q = '';
  $("select option:selected").each(function () {

    // to prevent product selected to triger 
    if ($(this).attr('class') == 'generalOption') {
      console.log($(this).val());

      tableName = $(this).text();

      q = "DELETE FROM `tbl_diet_202` WHERE name=" +
        "'" +
        tableName +
        "'";

      $.when($.post('query.php', { query: q }, function (res) {
        // var updatedJson;
        if (res == "NULL")
          console.log('error occured');

      })).done(function () {
        alert("succeeded to delete!");
        location.reload();
      })
    }
  });
});




$('#saveBtn').on('click', function () {

  var inputOfCategory = $('#newMealInput').val();
  var inputOfMeal = $('#newMealInputTwo').val();
  var NameOfMeal = inputOfCategory + '-' + inputOfMeal;
  if (NameOfMeal == null) {
    $("select option:selected").each(function () {
      // to prevent product selected to triger 
      if ($(this).attr('class') == 'generalOption') {

        tableName = NameOfMeal;
        // console.log(tableName);
        $.each(diets, function (i, obi) {
          if (obi.name == tableName) {
            updatedText = obi.prodes;
            console.log(updatedText);
          }
        });
        updatedText += ',';
      }
    });
  } else {
    tableName = NameOfMeal;
  }

  $.each(newDietIDs, function (i, obi) {
    console.log(obi);
    currID = '#' + obi;
    if (parseInt(obi) % 2) {
      // console.log(obi);
      updatedText += $(currID).val() + ',';
      // console.log( $(currID).val());
    } else {
      updatedText += $(currID).val() + ':';
      // console.log( $(currID).val());
    }
  })
  updatedText = updatedText.slice(0, -1);
  console.log(updatedText);

  var q = '';

  if (NameOfMeal == null) {
    q = "UPDATE `tbl_diet_202` SET prodes= '" +
      updatedText +
      "' WHERE name= '" +
      tableName +
      "'";

  }
  else {

    q = "INSERT INTO `tbl_diet_202` (`name`,`prodes`) VALUES ('" +
      tableName +
      "'," +
      "'" +
      updatedText +
      "'" +
      ")";

  }

  $.when($.post('query.php', { query: q }, function (res) {
    // var updatedJson;
    if (res == "NULL")
      console.log('error occured');

  })).done(function () {
    alert("succeeded to create new diet!");
    location.reload();
  })

});

var mealArray = [];

var initMeals = function () {

  for (var obj of diets) {
    var info = obj.name.split('-');
    checkExist(info[0]);
  }
  insertCategories();
};

var checkExist = function (name) {
  for (var meal of mealArray) {
    if (meal == name)
      return;
  }
  mealArray.push(name);
};

var insertCategories = function () {
  var select = $('#choose-meal-category');
  var counter = 0;
  console.log(select);
  for (var meal of mealArray) {
    option = $('<option id = "' + meal + '" value="' + meal + '" class="generalOption"></option>');
    option.html(meal);
    select.append(option);
  }
};


$('#choose-meal-category').change(function () {
  categoryChange();
});

var categoryChange = function () {
  var value = $("#choose-meal-category option:selected").val();
  var select = $('#choose-meal-option');

  if (value == "clear") {
    var select = $('#choose-meal-option');
    select.html('');
    select.addClass('hidden');
    $('.mealTable .mainTableBody').html('');
  }
  else {
    select.removeClass('hidden');
    var flag = 0;
    select.html('');
    for (var meal of diets) {
      var info = meal.name.split('-');
      NameOfMeal = info[1];
      console.log(NameOfMeal);
      if (info[0] == value) {
        if (flag == 0) {
          var option = '<option value="clear" class="generalOption">choose a Meal</option>';
          select.html('');
          select.append(option);
          ++flag;
        }
        var option = $('<option value="' + info[1] + '" class="generalOption"></option>');
        option.html(info[1]);
        select.append(option);
      }
    }
  }
};



$('#choose-meal-option').change(function () {
  var cat = $("#choose-meal-category option:selected").val();

  $.each(diets, function (i, obi) {
    obi["mealIDs"] = [];
    obi["protein"] = 0;
    obi["calories"] = 0;
    obi["carbohydrat"] = 0;
    // console.log(obi);
  });

  optionChange(cat);
});


var deleteCat = function () {
  var cat = $("#choose-meal-category option:selected").val();
  if(cat == 'clear')
    return;
  var q = 'DELETE FROM tbl_diet_202 WHERE name LIKE "%' + cat + '%";';
  $.post('query.php', { query: q }, function (res) {
    if (res == "NULL")
      console.log('error occured');
    else
      location.reload();
  });
};




  // $(document).ready(function(){

  //   var select = $('#DeleteCategorty');
  //   for (var meal of diets) {
  //     var info = meal.name.split('-');
  //     NameOfMeal = info[1];
  //     console.log(NameOfMeal);
  //     select.append(NameOfMeal);
  //   }
  // });





  // var id = $("#choose-meal-option option:selected").val();
  // console.log(id);
  // meal = diets[id];
  // var optionss = createGeneralOptions(diets);
  // // console.log(optionss);
  // $('#choose-meal-option').append(optionss);
  // $('#choose-meal-option-one').append(optionss);

