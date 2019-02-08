(function($){

    var topToPage,
        topToWindow,
        toPopUpScroll,
        summHeaderMenuPaddingRight,
        headerMenuPaddingRight = $('.header-menu-js').css("padding-right"),
        headerMenuHeight = $('.main-menu-list-js').height(),
        headerToBot = $('.header-menu-js').offset().top + $('.header-menu-js').height(),
        menuToBot = $('.main-menu-list-js').offset().top + $('.main-menu-list-js').height();

    // прилипание главного меню при скроле страницы
    var headerToTop = $('.header-menu-wrap-js').offset().top,
        scrollTop;

    $(document).scroll(function () {
        scrollTop = $(document).scrollTop();
        headerMenuFixed('.header-menu-wrap-js');
    });

    headerMenuFixed = function (elem) {
        if (scrollTop > headerToTop) {
            $(elem).addClass('header-menu-wrap-fix');
        } else {
            $(elem).removeClass('header-menu-wrap-fix');
        }
    };

    // открытие строки поиска
    $('.btn-search-js').on('click', function (e) {
        e.preventDefault();
        $('.header-nav-menu-js').slideUp(1);
        switchSearchBar();
    });

    // скрытие строки поиска
    $('.btn-close-js').on('click', function (e) {
        e.preventDefault();
        switchSearchBar();
    });

    // переключение состояния строки поиска
    switchSearchBar = function () {
        $(this).toggleClass('display-none');
        $('.btn-close-js').toggleClass('display-none');
        $('.partners-wrap-js').toggleClass('display-none');
        $('.main-logo-js').toggleClass('display-none');
        $('.header-menu-search-js').toggleClass('display-none').find('input[type="text"]').focus();
        $('.header-menu-wrap-js').toggleClass('header-menu-wrap--bg-black');
        $('.btn-burger-js').toggleClass('btn-burger--white');
        $('.btn-close-modal-menu-js .close').toggleClass('close--white');

    };

    $('.readers-choice-select-js').select2({
        customClass: "myselectbox",
        placeholder: "ЗА СЕГОДНЯ",
        allowClear : false,
        minimumResultsForSearch: -1,
        width: 'resolve'
    });

    //вычислеие ширины вертикального скролла у браузера
    var div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width =  '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);

    // показать модальное меню
    $('.btn-burger-js').on('click', function () {
        topToPage = $(this).offset().top;
        topToWindow = this.getBoundingClientRect().top;
        toPopUpScroll = topToPage - topToWindow;
        summHeaderMenuPaddingRight = parseInt(headerMenuPaddingRight) + scrollWidth;
        $('.header-menu-js').css("padding-right", summHeaderMenuPaddingRight + "px" );
        switchModalMenu();
    });

    // скрыть модальное меню
    $('.btn-close-modal-menu-js').on('click', function () {
        switchModalMenu();
        $('.header-menu-js').css("padding-right", "");
        setTimeout ( function() {
            $('html, body').scrollTop(toPopUpScroll)
        }, 1 );
    });

    // функция переключения видимости модального меню
    switchModalMenu = function () {
        $('.btn-burger-js').toggleClass("display-none");
        $('.btn-close-modal-menu-js').toggleClass("display-none");
        $('.modal-menu').toggleClass("display-none");
        $("body").toggleClass("modal-menu-open");
        $('.header-menu').toggleClass('header-menu--no-border');
    };

      //слайдер блока Взлёты и падения на главной странице
      //http://kenwheeler.github.io/slick/
      function sliderUpsAndDowns() {
        var $sliderUpBlock = $('.uad-slider-up');
        var $sliderDownBlock = $('.uad-slider-down');
        if ($sliderUpBlock.length != 0){
          $sliderUpBlock.slick({
            infinite: true,
            adaptiveHeight: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            draggable: false,
            asNavFor: '.uad-slider-down',
            prevArrow: '<div class="slick-prev" title="назад"></div>',
            nextArrow: '<div class="slick-next" title="вперед"></div>',
            responsive: [
              {
                breakpoint: 788,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  draggable: true,
                  asNavFor: null
                }
              },
              {
                breakpoint: 580,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  draggable: true,
                  asNavFor: null
                }
              }
            ]
          }).addClass('show').attr('data-function',arguments.callee.name);

          $sliderDownBlock.slick({
            infinite: true,
            adaptiveHeight: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            draggable: false,
            asNavFor: '.uad-slider-up',
            prevArrow: '',
            nextArrow: '',
            responsive: [
              {
                breakpoint: 788,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  draggable: true,
                  asNavFor: null,
                  prevArrow: '<div class="slick-prev" title="назад"></div>',
                  nextArrow: '<div class="slick-next" title="вперед"></div>'
                }
              },
              {
                breakpoint: 580,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  draggable: true,
                  asNavFor: null,
                  prevArrow: '<div class="slick-prev" title="назад"></div>',
                  nextArrow: '<div class="slick-next" title="вперед"></div>'
                }
              }
            ]
          }).addClass('show');

          $('.uad-wrap-sliders .arrow-left').click(function(){
            $('.uad-wrap-sliders .slick-prev').click();
          });
          $('.uad-wrap-sliders .arrow-right').click(function(){
            $('.uad-wrap-sliders .slick-next').click();
          });
        }
      }
      sliderUpsAndDowns();
      function showUadPopup(e,thisBlock){
        var $uadPopup = $('.uad-popup'),
            thisRating = thisBlock.find('.uad-popup-date .rating').text(),
            thisState = thisBlock.find('.uad-popup-date .state').text(),
            thisChange = thisBlock.find('.uad-popup-date .change').text(),
            thisHrefNode = thisBlock.find('.uad-popup-date .href-node').text(),
            thisUpOrDown = thisBlock.find('.uad-popup-date .up-or-down').text();
        if (e == 'mouseover') {
          $uadPopup.find('.rating').text(thisRating);
          $uadPopup.find('.state').text(thisState);
          $uadPopup.find('.change').text(thisChange);
          $uadPopup.find('.href-node').attr('href',thisHrefNode);
          $uadPopup.removeClass('show up down');
          $uadPopup.css({
            'top' : (thisBlock.offset().top - $('.ups-and-downs').offset().top - ($uadPopup.outerHeight()/2) - 25) + 'px',
            'left': (thisBlock.offset().left - $('.ups-and-downs').offset().left - ($uadPopup.outerWidth()/2 - thisBlock.outerWidth()/2)) + 'px'
          }).addClass('show '+thisUpOrDown);
          $uadPopup.hover(
            function(){
              $(this).addClass('show ');
            },
            function(){
              $uadPopup.removeClass('show ');
            }
          );
        } else {
          $uadPopup.removeClass('show');
        }
      }
      if ($('.ups-and-downs').length != 0) {
        if (isMobile != true){
          $('.uad-wrap-sliders .item').hover(
            function(){
              showUadPopup('mouseover',$(this));
            },
            function(){
              showUadPopup('mouseout',$(this));
            }
          );
        } else {
          $('.uad-wrap-sliders .item').click(function(){
            showUadPopup('mouseover',$(this));
          });
          $('.uad-wrap-sliders .slick-prev, .uad-wrap-sliders .slick-next').click(function(){
            $('.uad-popup').removeClass('show');
          });
          $(document).mouseup(function (e){ // событие клика вне слайдера
            var div = $('.uad-wrap-sliders');
            if (!div.is(e.target) && div.has(e.target).length === 0) {
              $('.uad-popup').removeClass('show');
            }
          });
        }
      }
    var isMobile =  /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());

        function opinionsOmpShowMore(){
    if(isMobile != true){
      $('.opinions-omp-show-more a').click(function(){
        if( $(this).attr('data-more') == undefined){
          $(this).attr('data-more','true');
          $('.opinions-omp-rest-material,.opinions-omp-author-material').addClass('show-more');
          return false;
        }
      });
      $('.opinions-omp-show-more').attr('data-function',arguments.callee.name);
    }
    }
    opinionsOmpShowMore();

    // показать больше статей в разделе бизнес
    $('.business-article-item-more-js').on('click', function (e) {
        e.preventDefault();
        $(this).hide();
        $('.business-article-item').removeClass('display-none');
    });
    // показать больше статей в разделе технологии
        $('.technology-item-show-more-js').on('click', function (e) {
        e.preventDefault();
        $(this).hide();
        $('.technology-item').removeClass('display-none');
    });
    // показать больше статей в разделе видео
        $('.link-article-show-more').on('click', function (e) {
        e.preventDefault();
        $(this).hide();
        $('.link-article').removeClass('display-none');
    });

    if ($(window).width() >= 1025) {
        $(document).scroll(function () {
            showBtnOpenMenu();
        });
    }
    $(window).on('resize', function() {
        if ($(window).width() >= 1025) {
            $(document).scroll(function () {
                showBtnOpenMenu();
            });
        }
        headerMenuPaddingRight = $('.header-menu-js').css("padding-right");
    });
    
    // показ-скрытие кнопки раскрытия доп. меню при скроле страницы
    showBtnOpenMenu = function() {
        headerToBot = $('.header-menu-js').offset().top + $('.header-menu-js').height();
        if (headerToBot >= menuToBot) {
            $('.btn-open-menu-js').removeClass('display-none');
            $('.header-nav-menu-js').append($('.main-menu-list'));
            $('body').css("padding-top", headerMenuHeight + "px");
        } else {
            $('.btn-open-menu-js').addClass('display-none');
            $('.wrap-main-menu-list-js').append($('.main-menu-list'));
            $('body').css("padding-top", "0px");
            $(".header-nav-menu-js").slideUp(200);
        }
    };
    // открытие доп. меню
    $('.btn-open-menu-js').on('click', function (e) {
        e.preventDefault();
        $(".header-nav-menu-js").slideToggle(200);
    });

})(jQuery);
