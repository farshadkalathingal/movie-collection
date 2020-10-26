$(document).ready(function(){
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
    
    $('#year').text(new Date().getFullYear());

  });