var idAutoIncrease = 0;
var currentMeal = 0;
var newDietIDs = [];
var diets;

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

  newDietIDs.push(idAutoIncrease - 2);
  newDietIDs.push(idAutoIncrease - 1);
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
    if (selected == obi.name) {
      allOptions += '<option value="' + obi.name + '" selected>' + obi.name + '</option>';
    } else {

      allOptions += '<option value="' + obi.name + '">' + obi.name + '</option>';
    }

  });

  return allOptions;
}

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

      });
      tableText += '</div>';
      $('.mealTable .mainTableBody').replaceWith(tableText);
      createMealSumTable(obi);
    }
  });

}

computeProdAmountText = function (prodName, prodAmount, obi) {

  var options = createOptions(prodsInfo, prodName);
  var text = '';

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
    var optionss = createGeneralOptions(diets);
    $('#choose-meal-option').append(optionss);

  });

  $("input").keyup(function () {
    var value = $(this).val();
    $(this).val(value);
  });
});

$("select").change(function () {
  var str = "";
  $("select option:selected").each(function () {

    // to prevent product selected to triger 
    if ($(this).attr('class') == 'generalOption') {

      $.each(diets, function (i, obi) {
        obi["mealIDs"] = [];
        obi["protein"] = 0;
        obi["calories"] = 0;
        obi["carbohydrat"] = 0;
      });
      makeTable(diets, $(this).text());

    }
  });

});

$("input").keyup(function () {
  var value = $(this).val();
  $(this).val(value);
});

$('#addMealName').on("click", function () {

  $('.chooseMeal ul').append(
    '<div class="col">' +
    '<input type="text" class="form-control" value="" placeholder="enter diet name" id="newMealInput"></input>' +
    '</div>'
  );

  clearProdsTable = '<div class="mainTableBody"></div>';
  $('.mainTableBody').replaceWith(clearProdsTable);

  clearMealSumTable = '<div></div>';
  $('.mealSumTalbe div').replaceWith(clearMealSumTable);
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
  var updatedText = '';
  var tableName = '';

  if ($('#newMealInput').val() == null) {
    $("select option:selected").each(function () {
      // to prevent product selected to triger 
      if ($(this).attr('class') == 'generalOption') {

        tableName = $(this).text();
        $.each(diets, function (i, obi) {
          if (obi.name == tableName) {
            updatedText = obi.prodes;
          }
        });
        updatedText += ',';
      }

    });
  } else {
    tableName = $('#newMealInput').val();
  }

  $.each(newDietIDs, function (i, obi) {
    currID = '#' + obi;
    if (parseInt(obi) % 2) {
      updatedText += $(currID).val() + ',';
    } else {
      updatedText += $(currID).val() + ':';
    }
  })
  updatedText = updatedText.slice(0, -1);


  var q = '';

  if ($('#newMealInput').val() == null) {
    q = "UPDATE `tbl_diet_202` SET prodes= '" +
      updatedText +
      "' WHERE name= '" +
      tableName +
      "'";

  } else {

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
