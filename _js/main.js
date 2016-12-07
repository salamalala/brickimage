var smoothScroll = function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
};

// var header = $("#header");
//
// header.on("scroll", function(e) {
//
//   if (this.scrollTop > 147) {
//     header.addClass("fix-search");
//   } else {
//     header.removeClass("fix-search");
//   }
//
// });


$(function() {
  if ( $('.subnav').length ) {
    smoothScroll();
  }
});
