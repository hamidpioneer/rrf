$(document).ready(function(){

  $('.product-list').masonry({

  });

  $(".homepage-slides").owlCarousel({
    items: 1,
    loop: true,
    // autoplay: true,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
  });

  $('.product-promotion').owlCarousel({
    items:1,
    loop:true,
    // autoplay:true,
    nav:false,
    dots:true,
  });

  $('.brand-images').owlCarousel({
    items:4,
    loop:true,
    dots:false,
    nav:true,
    navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    // autoplay:true,
  });

  $('.menu-trigger').on('click',function(){
    $('.off-canvas-menu, .off-canvas-overlay').addClass('active');
    return false;
  });

  $('.menu-close, .off-canvas-overlay').on('click', function(){
    $('.off-canvas-menu, .off-canvas-overlay').removeClass('active');
  });

  $('.search-trigger').on('click', function(){
    $('.search-box-input').toggleClass('active');
    return false;
  });



});
