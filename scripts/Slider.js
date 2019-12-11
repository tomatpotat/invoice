$(document).on('ready', function () {



    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        infinite: true,
        adaptiveHeight: true,
        swipe: false,
        touchMove:false,
        draggable: false,
        responsive: [{
            breakpoint: 768,
            settings: 'reinit'
          }]
    
    });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        fade: true,
        infinite: true,
        cssEase: 'linear',
        speed: 500,
        swipe: false,
        touchMove:false,
        draggable: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    swipe: true,
        touchMove:true,
        draggable: true,
        //arrows:false
                }
            }
        ]
          
    });
    $('.slider-for1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav1',
        infinite: true,
        adaptiveHeight: true,
        swipe: false,
        touchMove:false,
        draggable: false,
        responsive: [{
            breakpoint: 768,
            settings: 'reinit'
          }]
    });
    $('.slider-nav1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for1',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        fade: true,
        infinite: true,
        cssEase: 'linear',
        speed: 500,
        swipe: false,
        touchMove:false,
        draggable: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    swipe: true,
        touchMove:true,
        draggable: true,
        //arrows:false
                }
            }
        ]
    });
    $('.slider-for2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav2',
        infinite: true,
        adaptiveHeight: true,
        swipe: false,
        touchMove:false,
        draggable: false,
        responsive: [{
            breakpoint: 768,
            settings: 'reinit'
          }]
    });
    $('.slider-nav2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for2',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        fade: true,
        infinite: true,
        cssEase: 'linear',
        speed: 500,
        swipe: false,
        touchMove:false,
        draggable: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    swipe: true,
        touchMove:true,
        draggable: true,
       // arrows:false
                }
            }
        ]
    });

   
     
});
