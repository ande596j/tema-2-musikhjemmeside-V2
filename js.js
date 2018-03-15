$(document).ready(function(){


        $('nav a,footer a.up').click(function(e){
            $.scrollTo( this.hash || 0, 1500);
            e.preventDefault();
        })},
    onclick="video.paused ? this.play() : this.pause();",
    $(document).ready(function () {
        $(window).on('load scroll', function () {
            var scrolled = $(this).scrollTop();
            $('#title').css({
                'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)',
                'opacity': 1 - scrolled / 400
            });
            $('#hero-vid').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
        });


    });