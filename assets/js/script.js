jQuery(function($) {
	
    'use strict';
    Home_Swiper();
    Window_Scroll();
    Smooth_Scroll();
    bxSlider();
    Owl_Carousel();
});

// Swiper Function Home View

var Home_Swiper = function() {
    var swiper = new Swiper('.swiper-container', 
    {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        loop:true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};

// Window Scroll 
var Window_Scroll = function() {
    $(window).scroll(function() {
        if ( $(window).scrollTop() > 20 ) {
            $('#float-btn').css('display','block');
        } else {
            $('#float-btn').css('display','none');
        }
    });
};

  /** Smooth Scroll */
var Smooth_Scroll = function() {
	var scroll = new SmoothScroll('a[href="#header"]', {
		speed: 1000,
		speedAsDuration: true
	  });
};

// bxSlider

var bxSlider = function() {
    $('.bxslider').bxSlider({
        minSlides: 1,
		maxSlides: 5,
        slideWidth: 257,
		slideMargin: 17,
		ticker: true,
		tickerHover: true,
		speed: 20000,
		useCSS: false, 
		infiniteLoop: false,
    });

};

var Owl_Carousel = function() {
    $('#featured .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        navText:["<i class='fas fa-chevron-left'></i>" , "<i class='fas fa-chevron-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                centre: true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                centre: true
            }
        }
    });

    $('#header .movies .owl-carousel').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        autoplaySpeed: 1000,
    });

    $('#movie .owl-carousel').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        autoplaySpeed: 1000,
    });

    $('#drama .owl-carousel').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        autoplaySpeed: 1000,
    });

    $('#series .owl-carousel').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        autoplaySpeed: 1000,
    });
};


$('.tg-btn').click(function() {
    $('.sidebar-menu').toggleClass('sidebar-show');
});

$('section').click(function() {
    $('.sidebar-menu').removeClass('sidebar-show');
});


var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}