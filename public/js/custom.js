
/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */


(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
            /*====================================
                SCROLLING FUNCTION
                ======================================*/
            $(function () {
                $('.scrollclass a').bind('click', function (event) { //just pass scrollclass in design and start scrolling
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutQuad');
                    event.preventDefault();
                });
            });
            //ADD REMOVE PADDING CLASS ON SCROLL
            $(window).scroll(function () {
                if ($(".navbar").offset().top > 50) {
                    $(".navbar-fixed-top").addClass("navbar-pad-original");
                } else {
                    $(".navbar-fixed-top").removeClass("navbar-pad-original");
                }
            });
            /*====================================
            VAGAS SLIDESHOW SCRIPTS
            ======================================*/
            $(function () {
                $.vegas('slideshow', {
                    backgrounds: [
                    { src: 'images/1.jpg', fade: 1000, delay: 50000 }, 
                     { src: 'images/2.png', fade: 1000, delay: 50000}, 
                     { src: 'images/3.png', fade: 1000, delay: 50000 }
                                         
                    ]
                })
                ('overlay', {
                    /** SLIDESHOW OVERLAY IMAGE **/
                    src: 'plugins/vegas/overlays/01.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
                });

            });

            $(function () { 
                $('.carousel').carousel({
                    interval: 2000 //TIME IN MILLI SECONDS
                });
            });
            /*====================================
               WRITE YOUR SCRIPTS BELOW 
           ======================================*/


        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///


    // $(".name-major").on({
    //     mouseenter: function () {
    //         alert("i am making money");
    //     },
    //     mouseleave: function () {
    //         alert("i am making money lot");
    //     }
    // });

    $('#d1').contenthover({
        overlay_background: "rgba(255, 204, 102,0.9)"
    });

    $('#d2').contenthover({
        overlay_background: "rgba(255, 204, 102,0.9)"
    });

    $('#d3').contenthover({
        overlay_background: "rgba(255, 204, 102,0.9)"
    });

    $('#d4').contenthover({
        overlay_background: "rgba(255, 204, 102,0.9)"
    });

    $('#d5').contenthover({
        overlay_background: "rgba(255, 204, 102,0.9)"
    });

    $('#d6').contenthover({
        overlay_background: "rgba(255, 204, 102,0.9)"
    });

    $(document).ready(function () {
        mainApp.main_fun();

        $('.cntl').cntl({

        // The amount of "scroll padding" to allow 
        // The more, the later the state will be revealed
        revealbefore: 300,

        // The animate class
        // This class should have animation rules in css
        anim_class: 'cntl-animate',

        // A callback once the state has been revealed
        onreveal: null

});







    });

}(jQuery));



