// JavaScript Document

(function($) {
"use strict";

    $(window).on('load', function () {

        "use strict";


        /*----------------------------------------------------*/
        /*	Preloader
         /*----------------------------------------------------*/

        $(".loader").delay(100).fadeOut();
        $(".animationload").delay(100).fadeOut("fast");

        // Fix RTL
        if( $('html').attr('dir') == 'rtl' ){
            $('[data-vc-full-width="true"]').each( function(i,v){
                $(this).css('right' , $(this).css('left') ).css( 'left' , 'auto');
                
            });
        }

        $(window).stellar({});

    });

    $(window).on('resize', function() {
        if( $('html').attr('dir') == 'rtl' ){
            $('[data-vc-full-width="true"]').each( function(i,v){
                $(this).css('right' , $(this).css('left') ).css( 'left' , 'auto');
                
            });
        }
    });

    



    $(window).on('scroll', function () {

        "use strict";


        /*----------------------------------------------------*/
        /*	Navigtion Menu Scroll
         /*----------------------------------------------------*/

        var b = $(window).scrollTop();

        if (b > 60) {
            $(".header .navbar.navbar-fixed-top").addClass("scroll");
        } else {
            $(".header .navbar.navbar-fixed-top").removeClass("scroll");
        }


    });



    $(document).ready(function () {

        "use strict";

        // Fix RTL
        if( $('html').attr('dir') == 'rtl' ){
            $('[data-vc-full-width="true"]').each( function(i,v){
                $(this).css('right' , $(this).css('left') ).css( 'left' , 'auto');
                
            });
        }


        
        if ($(window).width() < 767) {
            // Prevent empty links
            // ---------------------------------------------------------------------------------------
            $('a[href=#]').on('click', function (event) {
                event.preventDefault();
            });
        }

        /*----------------------------------------------------*/
        /*	Mobile Menu Toggle
         /*----------------------------------------------------*/

        $('.navbar-nav li a').on('click', function () {
            $('#navigation-menu').css("height", "1px").removeClass("in").addClass("collapse");
            $('#navigation-menu').removeClass("open");
        });


        /*----------------------------------------------------*/
        /*	SubMenu On Hover
         /*----------------------------------------------------*/

        if ($(window).width() > 767) {
            $('#navigation-menu li.dropdown').hover(function () {
                $(this).find('.dropdown-menu').first().stop(true, true).delay(200).fadeIn(500);
            }, function () {
                $(this).find('.dropdown-menu').first().stop(true, true).delay(200).fadeOut(500);
            });
            $("#navigation-menu li.dropdown li").mouseover(function () {
                if ($(this).children('ul').length == 1) {
                    var parent = $(this);
                    var child_menu = $(this).children('ul');
                    if ($(parent).offset().left + $(parent).width() + $(child_menu).width() > $(window).width()) {
                        $(child_menu).css('left', '-' + $(parent).width() + 'px');
                    } else {
                        $(child_menu).css('left', $(parent).width() + 'px');
                    }
                }
            });
        }

        /*----------------------------------------------------*/
        /*	Countdown
         /*----------------------------------------------------*/

        $(".eventry_clock").each(function(){

            var time =  $(this).data('time');
            var days =  $(this).data('days');
            var hours =  $(this).data('hours');
            var minutes =  $(this).data('minutes');
            var seconds =  $(this).data('seconds');

            $(this).countdown(time, function (event) {
                $(this).html(event.strftime(''
                        + '<div class="cbox-1 clearfix"><span class="cbox-1-digit">%D</span> <span class="cbox-1-txt">'+days+'</span></div>'
                        + '<div class="cbox-1 clearfix"><span class="cbox-1-digit">%H</span> <span class="cbox-1-txt">'+hours+'</span></div>'
                        + '<div class="cbox-1 clearfix"><span class="cbox-1-digit">%M</span> <span class="cbox-1-txt">'+minutes+'</span></div>'
                        + '<div class="cbox-1 clearfix"><span class="cbox-1-digit">%S</span> <span class="cbox-1-txt">'+seconds+'</span></div>'
                        ));
            });
        });


        
        
        

        /* Button */
        $('.sc_button a, button.submit-button').each(function(){
                var bg = $(this).data('bg');
                var bg_hover = $(this).data('bg_hover');
                var text_color = $(this).data('text_color');
                var text_color_hover = $(this).data('text_color_hover');
                var border_color = $(this).data('border_color');
                var border_color_hover = $(this).data('border_color_hover');
                $(this).mouseover(function(){

                    $(this).css({
                        "background-color": bg_hover,
                        "-webkit-transition": "all .3s ease-in-out 0s",
                        "-moz-transition": "all .3s ease-in-out 0s",
                        "-ms-transition": "all .3s ease-in-out 0s",
                        "-o-transition": "all .3s ease-in-out 0s",
                        "transition":  "all .3s ease-in-out 0s"
                    });
                    $(this).css({
                        'border-color': border_color_hover,
                        "-webkit-transition": "all .3s ease-in-out 0s",
                        "-moz-transition": "all .3s ease-in-out 0s",
                        "-ms-transition": "all .3s ease-in-out 0s",
                        "-o-transition": "all .3s ease-in-out 0s",
                        "transition":  "all .3s ease-in-out 0s"
                    });
                    $(this).css({
                        'color': text_color_hover,
                        "-webkit-transition": "all .3s ease-in-out 0s",
                        "-moz-transition": "all .3s ease-in-out 0s",
                        "-ms-transition": "all .3s ease-in-out 0s",
                        "-o-transition": "all .3s ease-in-out 0s",
                        "transition":  "all .3s ease-in-out 0s"
                    });
                    
                    
                });
                $(this).mouseout(function(){
                    
                    $(this).css({
                        "background-color": bg,
                        "-webkit-transition": "all .3s ease-in-out 0s",
                        "-moz-transition": "all .3s ease-in-out 0s",
                        "-ms-transition": "all .3s ease-in-out 0s",
                        "-o-transition": "all .3s ease-in-out 0s",
                        "transition":  "all .3s ease-in-out 0s"
                    });
                    $(this).css({
                        'border-color': border_color,
                        "-webkit-transition": "all .3s ease-in-out 0s",
                        "-moz-transition": "all .3s ease-in-out 0s",
                        "-ms-transition": "all .3s ease-in-out 0s",
                        "-o-transition": "all .3s ease-in-out 0s",
                        "transition":  "all .3s ease-in-out 0s"
                    });
                    $(this).css({
                        'color': text_color,
                        "-webkit-transition": "all .3s ease-in-out 0s",
                        "-moz-transition": "all .3s ease-in-out 0s",
                        "-ms-transition": "all .3s ease-in-out 0s",
                        "-o-transition": "all .3s ease-in-out 0s",
                        "transition":  "all .3s ease-in-out 0s"
                    });

                    
                });
            });
        

        

        /*----------------------------------------------------*/
        /*	Intro Slider
         /*----------------------------------------------------*/
        if ($("#slides").length > 0) {
            $("#slides").superslides({
                play: 0,
                animation: "fade",
                pagination: false,
                inherit_height_from: '.height-fill'
            });
        }

        /*----------------------------------------------------*/
        /*	Animated Scroll To Anchor
         /*----------------------------------------------------*/

        $('.header a[href^="#"], .page-wrapper a.internal-link[href^="#"]').on('click', function (e) {

            e.preventDefault();
            

            var target = this.hash,
                    $target = jQuery(target);

            if(target != ""){
                $('.header a').removeClass('active');
                $(this).addClass('active');


                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top - 60 // - 200px (nav-height)
                }, 'slow', 'easeInSine', function () {
                    window.location.hash = '1' + target;
                });
            }

        });


        /*----------------------------------------------------*/
        /*	ScrollUp
         /*----------------------------------------------------*/

        $.scrollUp = function (options) {

            // Defaults
            var defaults = {
                scrollName: 'scrollUp', // Element ID
                topDistance: 600, // Distance from top before showing element (px)
                topSpeed: 800, // Speed back to top (ms)
                animation: 'fade', // Fade, slide, none
                animationInSpeed: 200, // Animation in speed (ms)
                animationOutSpeed: 200, // Animation out speed (ms)
                scrollText: '', // Text for element
                scrollImg: false, // Set true to use image
                activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            };

            var o = $.extend({}, defaults, options),
                    scrollId = '#' + o.scrollName;

            // Create element
            $('<a/>', {
                id: o.scrollName,
                href: '#top',
                title: o.scrollText
            }).appendTo('body');

            // If not using an image display text
            if (!o.scrollImg) {
                $(scrollId).text(o.scrollText);
            }

            // Minium CSS to make the magic happen
            $(scrollId).css({'display': 'none', 'position': 'fixed', 'z-index': '2147483647'});

            // Active point overlay
            if (o.activeOverlay) {
                $("body").append("<div id='" + o.scrollName + "-active'></div>");
                $(scrollId + "-active").css({'position': 'absolute', 'top': o.topDistance + 'px', 'width': '100%', 'border-top': '1px dotted ' + o.activeOverlay, 'z-index': '2147483647'});
            }

            // Scroll function
            $(window).scroll(function () {
                switch (o.animation) {
                    case "fade":
                        $(($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed));
                        break;
                    case "slide":
                        $(($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed));
                        break;
                    default:
                        $(($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0));
                }
            });

            // To the top
            $(scrollId).click(function (event) {
                $('html, body').animate({scrollTop: 0}, o.topSpeed);
                event.preventDefault();
            });

        };

        $.scrollUp();


        /*----------------------------------------------------*/
        /*	Video Background
         /*----------------------------------------------------*/

        $('.video-play').vide("images/video/video", {
            posterType: "jpg"
        });


        /*----------------------------------------------------*/
        /*	Filterable Blog Posts
         /*----------------------------------------------------*/
        if($("#blog-posts").length){
            $("#blog-posts").mixitup({
                targetSelector: '.blog-article',
            });    
        }
        


        /*----------------------------------------------------*/
        /*	Single Image Lightbox
         /*----------------------------------------------------*/

        $('.image-link').magnificPopup({
            type: 'image'
        });


        /*----------------------------------------------------*/
        /*	Images Gallery Lightbox
         /*----------------------------------------------------*/

        $('.gallery-item').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });


        /*----------------------------------------------------*/
        /*	Video Link Lightbox
         /*----------------------------------------------------*/

        $('.video-popup').magnificPopup({
            type: 'iframe',
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com',
                        src: '../../../../../../../www.youtube.com/embed/kuceVNBTJio.html'

                    }
                }
            }
        });


        /*----------------------------------------------------*/
        /*	Testimonials Rotator
         /*----------------------------------------------------*/

        $('.flexslider').flexslider({
            animation: "fade",
            controlNav: true,
            directionNav: false,
            slideshowSpeed: 6000,
            animationSpeed: 2000,
            start: function (slider) {
                $('body').removeClass('loading');
            }
        });


        /*----------------------------------------------------*/
        /*	Blog Articles Rotator
         /*----------------------------------------------------*/

        $(".eventry_blog").each(function(){

            var duration = $(this).data('duration');
            var autoplay = $(this).data('autoplay');
            var dots = $(this).data('dots');
            var loop = $(this).data('loop');

            var rtl = false;
            if( $('html').attr('dir') == 'rtl' ){
                rtl = true;
            }

            $(this).owlCarousel({
                loop: loop,
                autoplay: autoplay,
                smartSpeed: duration,
                margin: 10,
                nav: false,
                dots: dots,
                items: 3,
                rtl: rtl,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }

            });

        });

        
        
        



    });


})(jQuery);	