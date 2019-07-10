// //#1

$(document).ready(() => {
    var section = $('<section>').append('<a>');
    alert('hello world')
    console.log(section);
})


//#2


$(document).ready(function () {

    var img = $('img')
    var button = $('<button>').attr('id', 'switch').text('Change title!');

    console.log(img, button)

    $('main').append(button);
    $('#switch').click(function () {
        $('h1').text('wow!!');
        $('h1').css({color: 'blue', background: 'red'});
    })
   
    img.click(function () {
        $(this)
        .attr({
            src: 'images/js_jquery.png',
            height: '50px',
            width: '100px',
        })
        .css('border', '5px solid blue')
    })
})


//#3


var myForm = $(
    '<form>' +
        '<input type = "button" value = "Input Button" >'+
        '<input type = "checkbox" >'+
        '<input type = "checkbox" >'+
        '<input type = "hidden" >'+
        '<input type = "button" value = "Output Button" >'+
        '<select >'+
            '<option > Option < /option>'+   
        '</select>'+   
    '</form >'
)
$('main').append(myForm).find('input[type="checkbox"]').hide()
op 2 
$('input[type="checkbox"]').hide()


//#4 


$('main')
.append('<p> I ❤️ jQuery! </p>')
.css('width', '100px');

$('p').click(function () {
    $(this).toggleClass('highlight');
})

// 4.2

var button = $('<button>').attr('id', 'switch').text('Change title!');

$('main').append('<p> I ❤️ jQuery! </p>').css('font-size', '10px');
$('main').append(button);

var font_size = 15; // why this line defined here?

$(button).click(function () {
    $('p').css('font-size', font_size + 'px')
    font_size += 5;
})


$('p').click(function () {
    $(this).toggleClass('highlight');
});
 



 
 

<script src="//code.jquery.com/jquery-3.2.1.min.js"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.5/jquery.fancybox.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.5/jquery.fancybox.min.js"></script>



<a data-fancybox="gallery" href="big_1.jpg"> <img src="small_1.jpg"> </a>
<a data-fancybox="gallery" href="big_2.jpg"><img src="small_2.jpg"></a>




var h1 = $('<h1>').text('David Avigad'),
    h3 = $('<h3>').text('FullStack Engineer'),
    img = $('<img>').attr('src', 'images/fullstackworld.png'),
    ul = `<ul>
            <li>NodeJS</li>
            <li>HTML</li>
            <li>JS</li>
            <li>CSS</li>
        </ul>`
$('main').append([ h1, h3, ul, img ])
 

//#6.2


var button = $('<button>').attr('id', 'doMagic').text('doMagic!').css('display', 'block')
$('main').append(button)
$('#doMagic').click(() => {
    h1.css('font-size', '32px')
    h3.css({ 'font-size': '18px', 'color': 'gray' })
    img.css('box-shadow', '10px 10px 5px #888888')
    $('ul').css('margin-left', '10px')
    $('body').css('background', 'url(images/fullstack.png)')
})


//6.3

/* 
var button2 = $('<button>').attr('id', 'doMagic2').text('doMagic2!').css('display', 'block')
$('main').append(button2)
$('#doMagic2').click(() => {
    $(img).fadeOut("slow", function () {
        // Animation complete.
        alert('I\'m Done!')
    });
})
 */