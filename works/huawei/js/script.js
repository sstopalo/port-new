(function($){

    var $btnTop = $('.navigation-top-js'),
        $btnBot = $('.navigation-bottom-js'),
        navToBot,
        upCoordinatescroll,
        downCoordinatescroll,
        abc,
        navToTop,
        navToBottom,
        btnHeight,
        stopBotNavigation,
        startBotNavigation,
        cba,
        headerNavHeight = $('.nav-menu-js').innerHeight(),
        windowHeight = $(window).height();

    $('.specification-list-js').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        lazyLoad: 'ondemand',
        prevArrow: '<div class="slick-prev" title="Назад"></div>',
        nextArrow: '<div class="slick-next" title="Вперед"></div>',
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

    $ ('.gallery-slider--wrap').flipster({
        itemContainer: ' .gallery-slider--list ',
        itemSelector : ' .gallery-slider--item ',
        loop : true ,
        style: 'carousel',
        scrollwheel: false,
        buttons : 'custom' ,
        buttonPrev : '' ,
        buttonNext : '' ,
    });




    $('.btn-read-all-interview-js').on('click', function (e) {
        e.preventDefault();

        $('.all-interview-js').slideDown(400, function() {
            $btnTop = $('.navigation-top-js');
            $btnBot = $('.navigation-bottom-js');
            navToTop = $('.all-interview-js').offset().top;
            navToBottom = $('.gallery-slider-js').offset().top;
            btnHeight = parseInt($btnTop.css('height'));
            stopBotNavigation = navToTop + btnHeight;
            startBotNavigation = navToTop + btnHeight + btnHeight;
            cba = navToBottom - btnHeight;
            windowHeight = $(window).height();
            navToBot = $($btnBot).offset().top;
            headerNavHeight = $('.nav-menu-js').innerHeight();
        });

    });

    smoothOpeningBlock = function (block) {
        $(block).slideDown();
    };

    $('.btn-to-close-all-interview-js').on('click', function (e) {
        e.preventDefault();
        smoothClouserBlock('.all-interview-js');
    });

    smoothClouserBlock = function (block) {
        $(block).slideUp();
    };

    // плавный скролл к секции .nominations
    $('.btn-scroll-js').on('click',function (e) {
        e.preventDefault();
        $('.main-menu-mob-js').removeClass('open-menu');
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 55
        }, 600, 'swing', function () {
        });
    });

    $('.video-cover-js').on('click', function (e) {
        e.preventDefault();
        $(this).hide();
    });

    $('.toggle-main-menu-js').on('click', function () {
        $('.main-menu-mob-js').toggleClass('open-menu');
    });

    var headerToTop = $('.nav-menu-js').offset().top;

    $(document).scroll(function () {
        scrollTop = $(document).scrollTop();
        headerMenuFixed('.nav-menu-js');
        upCoordinatescroll = $(document).scrollTop() + headerNavHeight;
    });

    headerMenuFixed = function (elem) {
        if (scrollTop > headerToTop) {
            $(elem).addClass('nav-menu-fix');
        } else {
            $(elem).removeClass('nav-menu-fix');
        }

    };


    $(document).scroll(function () {
        navToBot = $($btnBot).offset().top;
        upCoordinatescroll = $(document).scrollTop() + headerNavHeight;
        downCoordinatescroll = upCoordinatescroll + windowHeight - headerNavHeight;
        abc = upCoordinatescroll + btnHeight;
        navTopFixed();
        navBotFixed();

    });

    navTopFixed = function () {
        if ((upCoordinatescroll > navToTop) && (abc <= cba)) {
            $btnTop.addClass('navigation-top-fix-top');
            $btnTop.removeClass('navigation-top-fix-bottom');
        } else if (abc >= cba) {
            $btnTop.addClass('navigation-top-fix-bottom');
        } else {
            $btnTop.removeClass('navigation-top-fix-top');
        }
    };

    navBotFixed = function () {
        if ((navToBot <= stopBotNavigation) && (downCoordinatescroll <= startBotNavigation)) {
            $($btnBot).addClass('navigation-bottom-fix-top');
        } else if (navToBottom <= downCoordinatescroll) {
            $($btnBot).addClass('navigation-bottom-fix-bottom');
        } else {
            $($btnBot).removeClass('navigation-bottom-fix-top');
            $($btnBot).removeClass('navigation-bottom-fix-bottom');
        }
    };


    $(window).resize(function() {
        headerNavHeight = $('.nav-menu-js').innerHeight();
        navToTop = $('.all-interview-js').offset().top;
        navToBottom = $('.gallery-slider-js').offset().top;
        stopBotNavigation = navToTop + btnHeight;
        startBotNavigation = navToTop + btnHeight + btnHeight;
        cba = navToBottom - btnHeight;
        windowHeight = $(window).height();


    });

})(jQuery);