$(document).ready(function () {

  $('#dugmeMeni').click(function () {
      if ($('#dugmeMeni').hasClass("change")) {
        $('.nav-menu').removeClass('custom-navbar2');
      } else {
        $('.nav-menu').addClass('custom-navbar2');
        // $('.nav-menu').removeClass('custom-navbar');
      }
  });

  $('.nav-button').click(function () {
    $('.nav-button').toggleClass('change');
    $('.navbar-collapse').collapse('hide');
  });

  $('.nav-link').click(function () {
    if ($(window).width() > 992) {
      $('.nav-button').removeClass('change');
      $('.navbar-collapse').collapse('hide');
    }
    else {
      $('.nav-button').toggleClass('change');
      $('.navbar-collapse').collapse('hide');
    }
    // $('.nav-button').toggleClass('change');
    // $('.navbar-collapse').collapse('hide');
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 200) {
      $('.nav-menu').addClass('custom-navbar');
    } else {
      $('.nav-menu').removeClass('custom-navbar');
    }
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 650) {
      $('.camera-img').addClass('fromLeft');
      $('.mission-text').addClass('fromRight');
    } else {
      $('.camera-img').removeClass('fromLeft');
      $('.mission-text').removeClass('fromRight');
    }
  });

  $('.gallery-list-item').click(function () {
    let value = $(this).attr('data-filter');
    if (value === 'all') {
      $('.filter').show(300);
    } else {
      $('.filter').not('.' + value).hide(300);
      $('.filter').filter('.' + value).show(300);
    }
  });

  $('.gallery-list-item').click(function () {
    $(this).addClass('active-item').siblings().removeClass('active-item');
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 4300) {
      $('.card-1').addClass('moveFromLeft');
      $('.card-2').addClass('moveFromBottom');
      $('.card-3').addClass('moveFromRight');
    } else {
      $('.card-1').removeClass('moveFromLeft');
      $('.card-2').removeClass('moveFromBottom');
      $('.card-3').removeClass('moveFromRight');
    }
  });


  // $( window ).resize(function() {
  //   if ($( window ).width() > 992) {
  //     $('.nav-button').removeClass('change');
  //     $('.navbar-collapse').collapse('hide');}
  // });

  // Smooth scrolling using jQuery easing
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
});
































