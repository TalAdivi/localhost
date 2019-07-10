// //  #0.1
// var a = 8;
// var b = 2;

// (function () {
//     var c = 10; //global scope ?
//     var d = 5; //global scope ?
//     console.log('a + b = ', a + b)
// })();

// console.log('c = ', c)
// console.log('d = ', d)














// #0.2

/* function setAllVals() {
    // console.log(x);
    console.log(getIt())

    var x = 1
    
    function getIt() {
        return 2
    }
}

setAllVals(); 
*/


// #0.3.1

/* 
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


// #0.3.2


var button = $('<button>').attr('id', 'doMagic').text('doMagic!').css('display', 'block')
$('main').append(button)
$('#doMagic').click(() => {
    h1.css('font-size', '32px')
    h3.css({ 'font-size': '18px', 'color': 'gray' })
    img.css('box-shadow', '10px 10px 5px #888888')
    $('ul').css('margin-left', '10px')
    $('body').css('background', 'url(images/fullstack.png)')
})


// #0.3.3


var button2 = $('<button>').attr('id', 'doMagic2').text('doMagic2!').css('display', 'block')
$('main').append(button2)
$('#doMagic2').click(() => {
    $(img).fadeOut("slow", function () {
        // Animation complete.
        alert('I\'m Done!')
    });
})
 */


 /* ****************** HOME-EX *********************** */

/* for (let i = 0; i < 100; i++) {
    
    const img = $('<img>').attr('src', 'images/jquery_logo.png').css({
        width: '80%',
        height: '80%',
    }).hide()
    
    const element = $('<div>').addClass('test').append(img)    
    
    
    $('main').append(element.click(function () {
        // console.log($(this).children(":first"))
        $(this).children(":first").toggle()
    }))        
} */

 /* ****************** EX7 *********************** */
