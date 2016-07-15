jQuery(document).ready(function($) {

  $('.owl-carousel').owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    loop: true,
    margin: 10
  });
  
  var $masonryContainer = $('.masonry');
  $masonryContainer.masonry({
    columnWidth: '.masonry__column',
    gutter: '.masonry__gutter',
    itemSelector: '.masonry__item'
  });

});
