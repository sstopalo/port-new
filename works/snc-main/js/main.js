(function($){
$('.main-slider-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '.main-slider-numbers'
});
$('.main-slider-numbers').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.main-slider-list',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});
$('.ul-news-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    lazyLoad: 'ondemand',
    prevArrow: '<div class="slick-prev" title="Назад"></div>',
    nextArrow: '<div class="slick-next" title="Вперед"></div>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: false,
    arrows: true,
    adaptiveHeight: true,
    centerMode: true,
    fade: false,
    asNavFor: '.main-slider-numbers',
    dots: false,
    focusOnSelect: false,
       responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 561,
                settings: {
                    slidesToShow: 1
                }
            }

        ]
});

$('.trashshetter-common-js-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    lazyLoad: 'ondemand',
    prevArrow: '<div class="slick-prev" title="Назад"></div>',
    nextArrow: '<div class="slick-next" title="Вперед"></div>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: false,
    arrows: false,
    adaptiveHeight: false,
    centerMode: false,
    fade: false,
    asNavFor: '.trashshetter-common-js-1, .trashshetter-common-js-3',
    dots: false,
    focusOnSelect: false
});

$('.trashshetter-common-js-3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    lazyLoad: 'ondemand',
    prevArrow: '<div class="slick-prev" title="Назад"></div>',
    nextArrow: '<div class="slick-next" title="Вперед"></div>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: false,
    arrows: true,
    adaptiveHeight: true,
    centerMode: false,
    fade: true,
    asNavFor: '.trashshetter-common-js-1, .trashshetter-common-js-2',
    dots: false,
    focusOnSelect: false
});





//появление кнопки поднятия наверх на страничке
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 300) {
        $('.button-to-top').css("opacity", "1");
    } else {
        $('.button-to-top').css("opacity", "0");
    }
});

var scrollToTop = function (speedScroll) {
    $('body,html').animate({
        scrollTop: 0
    }, speedScroll);
    return false;
};

$('.button-to-top-js').on('click', function() {
    scrollToTop(500);
});
// остановка и оживление кнопки при подходе к footer
$(window).on("scroll", function() {
    var footerToTop = $('.main-footer').offset().top;
    var buttonToTop = $('.button-to-top').offset().top + $('.button-to-top').outerHeight() + 1;
    var heightFooter = $('.main-footer').outerHeight() + 1 + "px";
    var scrollToBotttom = $(window).scrollTop() + $(window).height();
    if (footerToTop <= buttonToTop) {
        if (buttonToTop < scrollToBotttom) {
        $(".button-to-top").css("position","absolute");
        $(".button-to-top").css("bottom", heightFooter);
    } else {
            $(".button-to-top").css("position","fixed");
            $(".button-to-top").css("bottom", "10px");
        }
    }
});
$(".trashshetter-wrap__left-content-title").niceScroll({ cursorcolor:"#000", cursorwidth:"3px", emulatetouch:true, autohidemode:true, cursorminheight:40 });

$(".trashshetter-wrap__left-content-description").niceScroll({ cursorcolor:"#000", cursorwidth:"3px", emulatetouch:true, autohidemode:true, cursorminheight:40 });


// $('.main-slider-numbers__trashshetter').slick({
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     cssEase: 'linear',
//     lazyLoad: 'ondemand',
//     prevArrow: '<div class="slick-prev" title="Назад"></div>',
//     nextArrow: '<div class="slick-next" title="Вперед"></div>',
//     infinite: true,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     variableWidth: false,
//     arrows: false,
//     adaptiveHeight: false,
//     centerMode: false,
//     fade: false,
//     asNavFor: '.trashshetter-common-js-2, .trashshetter-common-js-3',
//     dots: false,
//     focusOnSelect: true
// });


})(jQuery);