$(document).ready(function() {


    // start btn
    $('.start-btn').on('click', function(e) {
        e.preventDefault();
        $('body').addClass('start');
    });

    $('.about-btn, .title-btn').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('show-nav');
        $('body').removeClass('start');
    });


/*    // illustraion parallax
    $('body').jKit();
    $('.right-panel .slide').jKit('parallax', { 'strength': '1', 'axis': 'both' });
    // centers bag until mouse moves
    $('body').on("mouseenter", function() {
        $('.parallax').removeClass('center')
    });
*/

    // add class to pagination
    var selector = '.progress ul li a';

    $(selector).on('click', function(e){
        e.preventDefault();
        $(selector).removeClass('current');
        $(this).addClass('current');
    });


    // add class animations when slide is inview
    $('.slide .information').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('current');
        } else {
            $(this).removeClass('current');
        }
    });


    // open embed and presskit popups
    $('.embed-btn').on('click', function(e){
        e.preventDefault();
        $('#embed').addClass('open-popup');
    });
    $('.presskit-btn').on('click', function(e){
        e.preventDefault();
        $('#presskit').addClass('open-popup');
    });
    // close popup
    $('.dark-overlay, .close-pp-btn').on('click', function(e){
        e.preventDefault();
        $('.popup').removeClass('open-popup');
    });


    $('.mobile-nav-btn').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('show-nav');
    });

}); // end of document ready




$(window).load(function() {

    // load animations when page is ready
    $('.intro-screen').addClass('ready');


    // functions to animate slides
    var currentStep = 0;

    function sortNavigation(){

        $('.arrow').hide();

        if(currentStep > 0){
            $('.arrow.up').show();
            $('.arrow.left').show();
        }

        if(currentStep < 17){
            $('.arrow.down').show();
            $('.arrow.right').show();
        }

        $('.progress a').removeClass('current');
        $('.progress li:eq(' + currentStep + ') a').addClass('current');

        $('#year-select').val(currentStep);

    }

    sortNavigation();


    function moveSlides(target){

        var left = target * -100;
        var right = 0 + left;

        if ($(window).width() > 800) {
            $('.left-panel').css( 'top', left + '%' );
            $('.right-panel').css( 'bottom', right + '%' );
        }
        else {
            $('.left-panel').css( 'left', left + '%' );
            $('.right-panel').css( 'right', right + '%' );
        }

        currentStep = Number(target);

        sortNavigation();
    }



    // prev button
    $('.arrow.up, .arrow.left').on('click', function(e){
        e.preventDefault();
        moveSlides(currentStep - 1);
    });

    // next button
    $('.arrow.down, .arrow.right').on('click', function(e){
        e.preventDefault();
        moveSlides(currentStep + 1);
        $('.left-panel').addClass('transition')
    });

    // pagination buttons
    $('.progress a').on('click', function(e){
        e.preventDefault();
        moveSlides( $(this).parent().index() );
        $('.left-panel').addClass('transition')
    });

    $('#year-select').on('change', function(e){
        e.preventDefault();
        var selected = $('option:selected', $(this));
        moveSlides(selected.val());
    })


    function bodyMobile(){
        if ($(window).width() < 800) {
            $('body').addClass('mobile');
        }
        else {
            $('body').removeClass('mobile');
        }
    }

    bodyMobile();
    $(window).resize(bodyMobile);

}); // end of window load
