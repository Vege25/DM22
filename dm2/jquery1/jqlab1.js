// Exercise 1
const secondP = $('p:eq(1)');

secondP.attr('id', 'secondP');

const firstP = $('p:first');
firstP.remove();

const firstDiv = $('div:first');
firstDiv.css({
    'background-color': 'grey' 
    ,'color': 'White'
});

//Exercise 2
$('#sdiv button').click(function(){
    $('#fdiv').append('<p id="tp">Hello user</p>');
});

//Exercise 3
const fourthP = $('#4p').hide(); //pystyy piilottamaan jo tässä vaiheessa

$('#sdiv').hover(
    function(){
        fourthP.show().text('About to select a link ...');
    },
    function(){
        fourthP.hide(); // tai fourthP.css('visibility', 'none'); jolloin elementti ei poistu tai piiloudu
    }
);
