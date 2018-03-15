$(document).ready(function(){


    $('nav a,footer a.up').click(function(e){
        $.scrollTo( this.hash || 0, 1500);
        e.preventDefault();
    });

    $(".Concerts").click(function() {
        $('html, body').animate({scrollTop: $("#Concerts").offset().top - 78}, 1000);
    });
    $(".Booking").click(function() {
        $('html, body').animate({scrollTop: $("#Booking").offset().top - 78}, 1000);
    });
    $(".News").click(function() {
        $('html, body').animate({scrollTop: $("#News").offset().top - 78}, 1000);
    });
    $(".Gallery").click(function() {
        $('html, body').animate({scrollTop: $("#Gallery").offset().top - 78}, 1000);
    });
    $(".Biography").click(function() {
        $('html, body').animate({scrollTop: $("#Biography").offset().top - 78}, 1000);
    });





});
