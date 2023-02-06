$(function () {

    'use strict';
  
    // Menu Fixed
  
    var navoff = $('.menu_main').offset().top;

    $(window).scroll(function () {
      var scrolling = $(this).scrollTop();
  
      if (scrolling > navoff) {
        $('.menu_main').addClass('menu_fix');
      } else {
        $('.menu_main').removeClass('menu_fix');
      }
    });
  
  });