/*Charitify Theme Scripts */

(function($) {
    "use strict";

    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

    /*=========================================================================
        	Sticky Header
    =========================================================================*/
    $(function() {
        var header = $("#header"),
            height = header.height(),
            yOffset = 0,
            triggerPoint = 100;
        $('.header-height').css('height', height + 'px');
        $(window).on('scroll', function() {
            yOffset = $(window).scrollTop();

            if (yOffset >= triggerPoint) {
                header.removeClass("animated cssanimation fadeIn");
                header.addClass("navbar-fixed-top  cssanimation animated fadeInTop");
            } else {
                header.removeClass("navbar-fixed-top cssanimation  animated fadeInTop");
                header.addClass("animated cssanimation fadeIn");
            }

        });
    });

    /*=========================================================================
        Nivo slider 
    =========================================================================*/
    $('#main-slider').nivoSlider({
        effect: 'random',
        animSpeed: 300,
        pauseTime: 5000,
        directionNav: true,
        manualAdvance: false,
        controlNavThumbs: false,
        pauseOnHover: true,
        controlNav: false,
        prevText: "<i class='ti-arrow-left'></i>",
        nextText: "<i class='ti-arrow-right'></i>"
    });

    /*=========================================================================
        Mobile Menu
    =========================================================================*/
    $(function() {
        $('#mainmenu').slicknav({
            prependTo: '.site-branding',
            label: '',
            allowParentLinks: true
        });
    });

    /*=========================================================================
    	Counter Up Active
    =========================================================================*/
    var counterSelector = $('.counter');
    counterSelector.counterUp({
        delay: 10,
        time: 1000
    });

    /*=========================================================================
        Event Carousel
    =========================================================================*/
    $('#event-carousel').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: false,
        smartSpeed: 500,
        nav: true,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            }
        }
    });

    /*=========================================================================
        Isotope Active
    =========================================================================*/
    $('.gallery-items').imagesLoaded(function() {

        // Add isotope click function
        $('.gallery-filter li').on('click', function() {
            $(".gallery-filter li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".gallery-items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });

        $(".gallery-items").isotope({
            itemSelector: '.single-item',
            layoutMode: 'masonry',
        });
    });

    /*=========================================================================
        Initialize smoothscroll plugin
    =========================================================================*/
    smoothScroll.init({
        offset: 60
    });

    /*=========================================================================
        Testimonial Carousel
    =========================================================================*/
    $('#testimonial-carousel').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        smartSpeed: 500,
        items: 1,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    /*=========================================================================
            Sponsor Carousel
    =========================================================================*/
    $('#sponsor-carousel').owlCarousel({
        loop: true,
        margin: 40,
        autoplay: true,
        smartSpeed: 2000,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2,
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    $('#certi-carousel').owlCarousel({
        loop: true,
        margin: 40,
        autoplay: true,
        smartSpeed: 2000,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2,
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    /*=========================================================================
            Active venobox
    =========================================================================*/
    $('.img-popup').venobox({
        numeratio: true,
        infinigall: true
    });

    /*=========================================================================
    	WOW Active
    =========================================================================*/
    new WOW().init();

    /*=========================================================================
      Scroll To Top
    =========================================================================*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

})(jQuery);