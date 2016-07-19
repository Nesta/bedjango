jQuery(document).ready(function($) {
  window.addEventListener('scroll', function(e){
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 300,
          header = document.querySelector("header");
      if (distanceY > shrinkOn) {
          classie.add(header,"smaller");
          $('.active').css({"padding-bottom" : "14px"})
          $('#logo').hide();
          $('#logo-min').show();
      } else {
          if (classie.has(header,"smaller")) {
              classie.remove(header,"smaller");
              $('#logo-min').hide();
              $('#logo').show();
              $('.active').css({"padding-bottom" : "39px"})
          }
      }
  });
});
