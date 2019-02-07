(function($){
    var topToPage,
        topToWindow,
        toPopUpScroll;
    // логика поведения блока социальных сетей на странице forbes video
    var clickMoreSocial = false;
    $('.video-social-btn-js').on('click', function (e) {
      if (clickMoreSocial == false) {
          clickMoreSocial = true;
          e.preventDefault();
          $('.item-social').show();
          $('.item-btn').hide();
      }
        return;
    });
    $(window).resize(function(){
      if (($(window).width()<=768) && clickMoreSocial == true) {
          clickMoreSocial = false;
          $('.item-social').show();
          $('.item-btn').hide();
      }
    });
    $('.video-header-ipad-menu-js').select2({
        customClass: "myselectbox",
        placeholder: "ПОКАЗАТЬ ВСЕ ВИДЕО",
        allowClear : false,
        minimumResultsForSearch: -1,
        width: 'resolve'
    });
    // слайдер на станице video-forbes .video-serial-slider-list
    $(function() {
        if ($(window).width()<=560) {
            $('.video-serial-slider-list').removeClass('video-serial-slider-list-js');
            $('.video-serial-slider').addClass('video-serial-slider--mobile');
        } else {
            $('.video-serial-slider-list-js').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                adaptiveHeight: false,
                arrows: true,
                lazyLoad: 'ondemand',
                prevArrow: '<div class="slick-prev" title="Назад"></div>',
                nextArrow: '<div class="slick-next" title="Вперед"></div>',
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1151,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 701,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 561,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 375,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
    });
    // открытие pop-up-video на странице forbes main video
    $('.wrapper-video-link-pop-up-js').on('click', function (e) {
        e.preventDefault();
        topToPage = $(this).offset().top;
        topToWindow = this.getBoundingClientRect().top;
        toPopUpScroll = topToPage - topToWindow;

        $(".wrap-main-video--pop-up").append("<iframe class='iframe-pop-up-video-js' frameborder='0' allowfullscreen></iframe>");

        var videoTitle = $(this).parents('.video-main-item-js').data('video-title');
        $('.video-main-block-title--pop-up-js').text(videoTitle);
        var videoDescription = $(this).parents('.video-main-item-js').data('video-description');
        $('.video-main-block-description--pop-up-js').text(videoDescription);
        var videoSrc = $(this).parents('.video-main-item-js').data('video-src');
        $('.iframe-pop-up-video-js').prop('src', videoSrc);
        var videoNameTag = $(this).parents('.video-main-item-js').data('video-name-tag');
        $('.video-info-name-js').text(videoNameTag);
        var videoDateTag = $(this).parents('.video-main-item-js').data('video-date-tag');
        $('.video-info-date-js').text(videoDateTag);
        var videoTimeTag = $(this).parents('.video-main-item-js').data('video-time-tag');
        $('.video-info-time-js').text(videoTimeTag);
        var videoSharesNumber = $(this).parents('.video-main-item-js').data('video-shares-number');

        $('.video-shares-number-js').text(videoSharesNumber);
        $('.pop-up-video').removeClass("display-none");
        $('body').css("top", -topPopUpScroll + "px");
        $("body").addClass("pop-up-open");
    });
    // закрытие pop-up-video на странице forbes main video
    $('.btn-close-pop-up-video-js').on('click', function (e) {
        e.preventDefault();
        $('.pop-up-video').addClass("display-none");
        $("body").removeClass("pop-up-open");
        $(".iframe-pop-up-video-js").remove();
        setTimeout ( function() {
            $('html, body').scrollTop(toPopUpScroll)
        }, 1 );
    });
    // открытие главного видео на странице forbes main video
    $('.btn-play-main-video-js').on('click', function (e) {
        e.preventDefault();
        $(this).hide();
        $(".wrap-main-video-js").append("<iframe class='iframe-main-video-js' frameborder='0' allowfullscreen></iframe>");
        var videoSrcMain = $(this).parents('.wrap-main-video-js').data('video-src');
        $('.iframe-main-video-js').prop('src', videoSrcMain);
    });
    // плавный скролл к секции .video-main-block-more
    $('.btn-video-main-block-more-js').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 600, 'swing', function () {
        });
    });

    var blockUnderBannerToTop = $('.video-serial-main-block').offset().top;
    // показ больше видео в разделе .video-main-block-more
    var numberVideoMainBlockMore = $('.video-main-block-more__main-right-wrap').length;
    var counterVideoMainBlockMore = 5;
    $('.btn-show-block-more-js').on('click', function (e) {
        e.preventDefault();
        counterVideoMainBlockMore = counterVideoMainBlockMore + 2;
        $('.video-main-block-more__main-right-wrap:nth-child(-n + '+ counterVideoMainBlockMore +')').show();
        $('.video-main-block-more__main-right-wrap:nth-child(1)').hide();
        if (numberVideoMainBlockMore <= counterVideoMainBlockMore) {
            $('.btn-show-block-more-js').hide();
        }
        blockUnderBannerToTop = ($('.video-serial-main-block').offset().top - parseInt($('.video-serial-main-block').css('margin-top')));
    });
    // показ больше видео в разделе .video-readers-choice
    var numberReadersChoice = $('.video-readers-choice-item').length;
    var counterReadersChoice = 8;
    $('.btn-show-readers-choice-js').on('click', function (e) {
        e.preventDefault();
        counterReadersChoice = counterReadersChoice + 4;
        $('.video-readers-choice-item:nth-child(-n + '+ counterReadersChoice +')').show();
        if (numberReadersChoice <= counterReadersChoice) {
            $('.btn-show-readers-choice-js').hide();
        }
    });
    // скрипт для фиксации баннера в разделе .video-main-block-more
    var bannerToTop = $('.video-main-block-more-banner-js').offset().top;
    blockUnderBannerToTop = ($('.video-serial-main-block').offset().top - parseInt($('.video-serial-main-block').css('margin-top')));
    // var heightHeader;
    var toTopBaner;
    var scroll;
    var paddingWrapBanner = parseInt($('.video-main-block-more-wrap-right').css('padding-top'));
    $(window).on("scroll", function() {
        scroll = $(window).scrollTop();
        // heightHeader = parseInt($('.header-menu.fix').css('height'));
        toTopBaner = paddingWrapBanner;
        var scrollPlusBanner = $(window).scrollTop() + $('.video-main-block-more-banner-js').height() + toTopBaner;
        if((scroll > (bannerToTop - toTopBaner)) && (blockUnderBannerToTop > scrollPlusBanner) ) {
            $('.video-main-block-more-banner-js').removeClass('fixbottom');
            $('.video-main-block-more-banner-js').addClass('fix');
            $('.video-main-block-more-banner-js').css({'top': toTopBaner + 'px'});
        } else if ((scroll > (bannerToTop - toTopBaner)) && (blockUnderBannerToTop <= scrollPlusBanner) ) {
            $('.video-main-block-more-banner-js').removeClass('fix');
            $('.video-main-block-more-banner-js').addClass('fixbottom');
            $('.video-main-block-more-banner-js').css({'top':'auto'});
        } else {
            $('.video-main-block-more-banner-js').removeClass('fixbottom');
            $('.video-main-block-more-banner-js').removeClass('fix');
            $('.video-main-block-more-banner-js').css({'top': toTopBaner + 'px'});
        }
    });
    $(window).resize(function() {
        $('.video-main-block-more-banner-js').removeClass('fix');
        $('.video-main-block-more-banner-js').removeClass('fixbottom');
        $('.video-main-block-more-banner-js').css({'top': toTopBaner + 'px'});
        bannerToTop = $('.video-main-block-more-banner-js').offset().top;
        blockUnderBannerToTop = ($('.video-serial-main-block').offset().top - parseInt($('.video-serial-main-block').css('margin-top')));
        paddingWrapBanner = parseInt($('.video-main-block-more-wrap-right').css('padding-top'));
        // heightHeader = parseInt($('.header-menu.fix').css('height'));
        toTopBaner = paddingWrapBanner;
    });
    // стилизация активного пункта меню .video-header-desktop-menu
    $('.video-header-desktop-menu__list>li').on('click', function () {
        $('.video-header-desktop-menu__list>li').removeClass('active');
        $(this).addClass('active');
    });




 

})(jQuery);
