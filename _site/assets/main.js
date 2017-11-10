var menu = "close";
var mobileNavigation = function() {
  $("#nav-mobile-js").click(function() {

    if (menu === "close") {
        $(this).next().css({"position": "absolute", "left": "0"});
        $(this).addClass('active');
       menu = "open";
    } else {
        $(this).next().css({"position": "absolute", "left": "-100%"});
        menu = "close";
        $(this).removeClass('active');
    }
  });
};

//closing mobile nav when clicking outside of nav
var clickingOutsideNav = function () {
  //mobile uses touchstart rather than click
  $(document).on('touchstart', function (e) {
    var container = $("nav");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.mobile').removeClass('active');
        $('.nav__items').css({"position": "absolute", "left": "-100%"});
    }
  });
}

var stickyHeaderElements = function(el, scrollPos) {

  $(window).scroll(function(){
    var stickyElement = $(el),
        scroll = $(window).scrollTop();

    if (scroll >= scrollPos) {
      stickyElement.addClass('fixed');
    } else {
      stickyElement.removeClass('fixed')
    }
  });
};

var previousPosExamples = "";

var subnavExamplesColor = function() {

  var brickTinting = $("#brick-tinting").offset().top + (-100);
  var stoneTinting = $("#stone-tinting").offset().top + (-100);
  var specialProjects = $("#special-projects").offset().top + (-100);
  var currentPos = "";

  var $w = $(window).scroll(function(){
      if ( $w.scrollTop() > specialProjects ){
        currentPos = "special";
      } else if ( $w.scrollTop() > stoneTinting ){
        currentPos = "stone";
      } else if ( $w.scrollTop() > brickTinting ) {
        currentPos = "brick";
      }
      if ( currentPos != previousPosExamples){
        if (currentPos == "special") {
          $('#subnav-special').css({"color":"#E5AB24"});
          $('#subnav-brick').css({"color":"#3D4147"});
          $('#subnav-stone').css({"color":"#3D4147"});
        } else if (currentPos == "stone" ){
          $('#subnav-stone').css({"color":"#E5AB24"});
          $('#subnav-brick').css({"color":"#3D4147"});
          $('#subnav-special').css({"color":"#3D4147"});
        } else if ( currentPos == "brick" ) {
          $('#subnav-brick').css({"color":"#E5AB24"});
          $('#subnav-stone').css({"color":"#3D4147"});
          $('#subnav-special').css({"color":"#3D4147"});
        }
      }
      previousPosExamples == currentPos;
  });
}

var previousPosAbout = "";

var subnavAboutColor = function() {

  var aboutTinting = $("#about-tinting").offset().top + (-100);
  var aboutDyes = $("#about-dyes").offset().top + (-100);
  var aboutBrickImage = $("#about-brick-image").offset().top + (-100);
  var currentPos = "";

  var $w = $(window).scroll(function(){
      if ( $w.scrollTop() > aboutBrickImage ){
        currentPos = "brickImage";
      } else if ( $w.scrollTop() > aboutTinting ){
        currentPos = "dyes";
      } else if ( $w.scrollTop() > aboutTinting ){
        currentPos = "tinting";
      }
      if ( currentPos != previousPosAbout){
        if (currentPos == "brickImage") {
          $('#subnav-brick-image').css({"color":"#E5AB24"});
          $('#subnav-dyes').css({"color":"#3D4147"});
          $('#subnav-tinting').css({"color":"#3D4147"});
        } else if (currentPos == "dyes" ){
          $('#subnav-dyes').css({"color":"#E5AB24"});
          $('#subnav-brick-image').css({"color":"#3D4147"});
          $('#subnav-tinting').css({"color":"#3D4147"});
        } else if (currentPos == "tinting" ){
          $('#subnav-tinting').css({"color":"#E5AB24"});
          $('#subnav-dyes').css({"color":"#3D4147"});
          $('#subnav-brick-image').css({"color":"#3D4147"});
        }
      }
      previousPosAbout == currentPos;
  });
}

var homeHeight = function() {
  if ($('.home .wrapper').height() > $('.home').height()) {
    $('.home').addClass('large-height');
  }
};


var smoothScroll = function() {

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 80
        }, 800);
        return false;
      }
    }
  });
};


$(function() {
  if ( $('.home').length) {
    homeHeight();
  }

  if ( $('.subnav').length ) {
    smoothScroll();
    stickyHeaderElements('.subnav__wrapper', 120);
  }

  if ( $('#subnav-examples').length ) {
    subnavExamplesColor();
  }

  if ( $('#subnav-about').length ) {
    subnavAboutColor();
  }

  stickyHeaderElements('.nav', 120);

  mobileNavigation();

  clickingOutsideNav();


});
