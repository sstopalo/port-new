(function($){

    $('.list-quote-js').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        draggable: false,
        lazyLoad: 'ondemand',
        infinite: true,
        fade: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 7000,
        // responsive: [
        //     {
        //         breakpoint: 769,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2
        //         }
        //     },
        //     {
        //         breakpoint: 561,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    });

    // плавный скролл к секции .nominations
    $('.btn-scroll-js').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 600, 'swing', function () {
        });
    });

    // показ всех примеров работ при клике на кнопку
    $('.btn-show-more-js').on('click', function (e) {
        e.preventDefault();
        $(this).hide();
        $('.item-works-js').show();
    });

})(jQuery);