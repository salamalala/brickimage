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

var stickyHeaderElements = function(el, scrollPos) {

  $(window).scroll(function(){
    var stickyElement = $(el),
        scroll = $(window).scrollTop();

    if (scroll >= scrollPos) {
      stickyElement.addClass('fixed');
      console.log("fixed");
    } else {
      stickyElement.removeClass('fixed')
    }
  });
};




$(function() {
  if ( $('.subnav').length ) {
    smoothScroll();
    stickyHeaderElements('.subnav__wrapper', 120);
  }

  stickyHeaderElements('.nav', 120);

});
