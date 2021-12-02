$(function(){
    $('.header-slider').slick({
        dots: true,
        vertical: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="./images/prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./images/next.svg" alt=""></button>',
    });
});

$('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product__content',
    vertical: true,
    prevArrow: '<button type="button" class="product-prev"><img src="./images/prod-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="product-next"><img src="./images/prod-next.svg" alt=""></button>',
});

$('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    arrows: false,
    // fade: true
});
