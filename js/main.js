$(function () {
    $('.menu__btn').on('click', function () {
        $('.header-nav__list').toggleClass('header-nav__list_active')
    })
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
        
    });
});