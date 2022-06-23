$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 3,
        autoplay: false,
        autoplaySpeed: 1000,
        margin: 20,
        responsiveClass: true,
        responsive:{

            0:{
    
                items:1
    
            },
    
            600:{
    
                items:1
    
            },
    
            1000:{
    
                items:3,
    
                loop:true
    
            }
    
        }
    });
});