$(document).on('ready', function () {

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        infinite: true,
        adaptiveHeight: true
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
        speed: 500
    });
    $('.slider-for1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav1',
        infinite: true,
        adaptiveHeight: true
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
        speed: 500
    });
    $('.slider-for2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav2',
        infinite: true,
        adaptiveHeight: true
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
        speed: 500
    });

});