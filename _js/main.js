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

var brickTinting = $("#brick-tinting").offset().top + (-100);
var stoneTinting = $("#stone-tinting").offset().top + (-100);
var specialProjects = $("#special-projects").offset().top + (-100);

var subnavChangeColor = function() {
  var $w = $(window).scroll(function(){
      if ( $w.scrollTop() > specialProjects ){
        $('#subnav_special').css({"color":"#E5AB24"});
        $('#subnav_brick').css({"color":"#9F9894"});
        $('#subnav_stone').css({"color":"#9F9894"});
        console.log("hellospecial");
      } else if ( $w.scrollTop() > stoneTinting ){
        $('#subnav_stone').css({"color":"#E5AB24"});
        $('#subnav_brick').css({"color":"#9F9894"});
        $('#subnav_special').css({"color":"#9F9894"});
        console.log("hellostone");
      } else if ( $w.scrollTop() > brickTinting ) {
          $('#subnav_brick').css({"color":"#E5AB24"});
          $('#subnav_stone').css({"color":"#9F9894"});
          $('#subnav_special').css({"color":"#9F9894"});
          console.log("hellobrick");
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





$(function() {
  if ( $('.subnav').length ) {
    smoothScroll();
    stickyHeaderElements('.subnav__wrapper', 120);
    subnavChangeColor();
  }

  stickyHeaderElements('.nav', 120);

  mobileNavigation();





});
