$(document).ready(function(){
    $('.bxslider').bxSlider({
        minSlides: 5,
		maxSlides: 10,
        slideWidth: 257,
		slideMargin: 17,
		ticker: true,
		tickerHover: true,
		speed: 20000,
		useCSS: false, 
		infiniteLoop: false
      });

      $('#featured .owl-carousel').owlCarousel({
        center: true,
        items:3,
        loop:true,
        margin:10,
        nav:true,
        navText:["<i class='fas fa-chevron-left'></i>" , "<i class='fas fa-chevron-right'></i>"]
    });

    $('#year').text(new Date().getFullYear());

  });