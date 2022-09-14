const fPage = $('#fpage');
const sPage = $('€#spage');

$("nav").mouseenter(function(event){
    console.log('enter');
    $('nav ul').animate({opacity: "1"});
}).mouseleave(function(event){
    console.log('leave');
    $('nav ul').animate({opacity: "0"});
});

$("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    }
});