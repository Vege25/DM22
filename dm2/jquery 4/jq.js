$('button').click(function(){
    $('#advice').text('select your favourite colour among the colours');
    $('#img1').attr('src', 'red.jpg').show(); // show() vapaaehtoisesti
    $('#img2').attr('src', 'blue.jpg').show(); // show() vapaaehtoisesti
    $('#img3').attr('src', 'yellow.jpg').show(); // show() vapaaehtoisesti
    $('#sel').text('your favourite colours in order');

    //vapaaehtoinen
    $('ul').empty();
});

$('#img1').click(function(){
    $('#img1').hide();
    $('ul').append('<li>red</li>');
});
$('#img2').click(function(){
    $('#img2').hide();
    $('ul').append('<li>blue</li>');
});
$('#img3').click(function(){
    $('#img3').hide();
    $('ul').append('<li>yellow</li>');
});