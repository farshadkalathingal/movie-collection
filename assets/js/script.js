$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        center: true,
        items:5,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        autoplaySpeed: 5000,
    })

    $('#year').text(new Date().getFullYear());

  });