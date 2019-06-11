var bookName, bookPrice;

function getBookId() {
    var aKeyValue = window.location.search.substring(1).split('&'), 
    bookId = aKeyValue[0].split("=")[1];

    console.log(window.location);

    return bookId;
}


$(document).ready(function(){
    $.getJSON('data/books.json', function(data) {
        var bookId = getBookId();

        console.log(bookId);

        $.each(data.products, function(i,obj) {
            if(obj.id == bookId) {
                bookName = obj.name;
                bookPrice = obj.price;
            }
        });

        $('h1').html(bookName);
        $('#bookPrice').html(bookPrice);
    })
})