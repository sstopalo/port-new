(function($){
    // плавный скролл к секции .target
    $('.btn-scroll-js').on('click',function (e) {
        e.preventDefault();
        let target = this.hash,
            $target = $(target);
        $('body').removeClass('modal-open');
        $('.nav-mobile').removeClass('nav-mobile-open');
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 41
        }, 600, 'swing', function () {
        });
    });
    $('.phone-js').mask('+7 (999) 999 - 9999');

    $('.select-category').select2({
        customClass: "myselectbox",
        placeholder: "Ваша IT специализация",
        allowClear : false,
        minimumResultsForSearch: -1,
        width: 'resolve'
    });

    /*слайдер native life-style-main-slider*/
    $('.slider-js').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        arrows: true,
        lazyLoad: 'ondemand',
        prevArrow: '<div class="slick-prev" title="Назад"></div>',
        nextArrow: '<div class="slick-next" title="Вперед"></div>',
        infinite: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 561,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // открытие модального меню
    $('.toggle-main-menu').on('click', function () {
        $('body').addClass('modal-open');
        $('.nav-mobile').addClass('nav-mobile-open');

    });
    // закрытие модального меню
    $('.btn-close-modal-js').on('click', function () {
        $('body').removeClass('modal-open');
        $('.nav-mobile').removeClass('nav-mobile-open');

    });

    // открытие-скрытие вакансий
    $('.btn-show-vacancies-js').click(function(e){
        e.preventDefault();
        let $this = $(this);
        if (!$this.hasClass('hide')) {
            $this.siblings('.vacancies__link-btn').addClass('vacancies__link-btn--open');
            $this.addClass('hide').parents('.vacancies__main-wrap').children('.vacancies__more-list').slideUp();
            $this.toggleClass('vacancies__link-btn--open');
        } else {
            $this.toggleClass('vacancies__link-btn--open');
            $this.removeClass('hide').parents('.vacancies__main-wrap').children('.vacancies__more-list').slideDown();
            $this.siblings('.vacancies__link-btn').removeClass('vacancies__link-btn--open');
        }
    });
    // кнопка показать все вакансии
    $('.btn-see-all__link-js').click(function(e){
        e.preventDefault();
        $(this).hide();
        $('.vacancies__main-wrap--hide').removeClass('vacancies__main-wrap--hide');
    });
    let navMargin = parseInt($('.nav').css('margin-top'));
    let headerHeight = (parseInt($('.header').css('height')) + parseInt($('.header').css('padding-top')) + parseInt($('.header').css('padding-bottom')) + navMargin);
    let navHeight = $('.nav').height();

    $(window).resize(function() {
        navMargin = parseInt($('.nav').css('margin-top'));
        headerHeight = (parseInt($('.header').css('height')) + parseInt($('.header').css('padding-top')) + parseInt($('.header').css('padding-bottom')) + navMargin);
        navHeight = $('.nav').height();
    });
    // scroll main-menu .nav
    function fixMenuOrNoFixMenu() {
        function fixMenu() {
            $('.nav').addClass('fix');
            $('.nav').css('margin-top', '0');
            $('body').css('padding-top', navHeight + navMargin + 'px');
        }
        let menuFixed = false;
        $(document).scroll(function () {
            if (!menuFixed && $(document).scrollTop() > headerHeight) {
                fixMenu();
                menuFixed = true;
            } else if(menuFixed && $(document).scrollTop() <= headerHeight) {
                $('.nav').removeClass('fix');
                $('.nav').css('margin-top', navMargin + 'px');
                $('body').css('padding-top', '0');
                menuFixed = false;
            }
        });
    }
    fixMenuOrNoFixMenu();


})(jQuery);