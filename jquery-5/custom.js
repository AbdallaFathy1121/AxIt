$(function () {

    'use strict';

    // Start Carousel

    var winH = $(window).height(),
        navH = $('.navbar').innerHeight();

        $(".carousel, carousel-inner, .carousel-item").height (winH);

    $(window).resize (function () {

        var winH = $(window).height(),
        navH = $(".navbar").innerHeight();

        $(".carousel, .carousel-inner, .carousel-item").height (winH);

    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Start Tabs In (About).

    $(".about .row .tab .tab-one").click(function(){

        $(".about .row .info:first-child").removeClass("hidden").fadeIn().siblings().addClass("hidden").fadeOut();

    });

    $(".about .row .tab .tab-two").click(function(){

        $(".about .row .info:nth-child(2)").removeClass("hidden").fadeIn().siblings().addClass("hidden").fadeOut();

    });

    $(".about .row .tab .tab-three").click(function(){

        $(".about .row .info:last-child").removeClass("hidden").fadeIn().siblings().addClass("hidden").fadeOut();

    });

    $(".about .row .tab div").click(function(){

        $(this).addClass("active").siblings().removeClass("active");

    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Navbar Animation.

    $('nav ul li a').click(function(){

        $(this).addClass('active').parent().siblings().find('a').removeClass("active");

    });

    navH = $(".navbar").innerHeight();

    $('nav li a').click(function (e) {

        e.preventDefault ();

        $('html, body').animate({

            scrollTop: $( '#' + $(this).data('scroll') ).offset().top + 1

        }, 1200);

    });

    $(window).scroll(function() {

        $('.block').each(function(){

            if ( $(window).scrollTop() >= $(this).offset().top - 1 ) {

                var blockID = $(this).attr('id');

                $('nav a').removeClass("active");

                $('nav li a[data-scroll="' + blockID + '"]').addClass('active');

            }

        });

    });
    

   























});