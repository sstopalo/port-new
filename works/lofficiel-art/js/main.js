(function($){
//открытие и закрытие окна потоки
    let streamModal = document.querySelector('.stream-modal');
    let toggle = document.querySelector('.main-column__stream');
    let number= toggle.querySelector('.main-column__number');
    let exit = toggle.querySelector('.main-column__exit');
    let news = document.querySelector('.news-list__first');

    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        if (streamModal.classList.contains('stream-modal--hide')) {
            streamModal.classList.remove('stream-modal--hide');
            streamModal.classList.add('stream-modal--show');
            toggle.classList.remove('main-column__stream--relative');
            toggle.classList.add('main-column__stream--fixed');
            exit.classList.remove('main-column__exit--hide');
            exit.classList.add('main-column__exit--show');
            number.classList.remove('main-column__number--show');
            number.classList.add('main-column__number--hide');
        } else {
            streamModal.classList.add('stream-modal--hide');
            streamModal.classList.remove('stream-modal--show');
            toggle.classList.add('main-column__stream--relative');
            toggle.classList.remove('main-column__stream--fixed');
            exit.classList.remove('main-column__exit--show');
            exit.classList.add('main-column__exit--hide');
            number.classList.add('main-column__number--show');
            number.classList.remove('main-column__number--hide');
        }
    });

    //количество новостей в потоках на кнопке
    number.innerHTML = news.children.length;

    $('.slider-tag-cloud').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    arrows: false,
    adaptiveHeight: false
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

    //анимация кнопки показать все
    let showButton = document.querySelector('.show-more__link');
    let loading = document.querySelector('.show-more__animation');

    if (showButton = document.querySelector('.show-more__link')) {
        showButton.addEventListener('click', function (e) {
            e.preventDefault();
            showButton.classList.add('show-more__link--hide');
            showButton.classList.remove('show-more__link--show');
            loading.classList.remove('show-more__animation--hide');
            loading.classList.add('show-more__animation--show');
        });
    }

    const activeClassName = 'site-list__item--active';
    let $modalMenu = $('.modal-menu');
    let $openMenu = $('.main-column__open-button');
    let $closeMenu = $('.modal-menu__close');

    $openMenu.on('click', function() {
        $modalMenu.show();
        $modalMenu.removeClass('modal-menu--close');
    });

    $closeMenu.on('click', function() {
        $modalMenu.hide();
        $modalMenu.addClass('modal-menu--close');
    });

    var registerMenuItemsListeners = function() {
        let items = $('.site-list__item');

        items.on('click', function () {
            let currentItem = $(this);
            let activeItem = $('.' + activeClassName);

            if (activeItem.is(currentItem)) {
                return;
            }

            activeItem.removeClass(activeClassName);
            currentItem.addClass(activeClassName);

            $('.relevant-list').hide();
            $('.relevant-list', currentItem).show();
        });
    }
    registerMenuItemsListeners();

//pop-up появление описания к фото
    $('.btn-show-pop-up-copyright').on('click', function(e){
        e.preventDefault();
        $(this).next().show(300);
        $(this).hide(300);
        $(this).siblings('.btn-info-block-img').hide(300);
    });
    $('.btn-close-pop-up-copyright').on('click', function(e){
        e.preventDefault();
        $(this).parent().hide(300);
        $(this).parent().prevAll('.btn-info-block-img').show(300);
    });
    //слайдер luckbook
    var numberOfclick = '0';
var nextImg = '2';
var prevImg = '1';
var backgroundImageClickPrev = '1';
var totalImages = ($('.luckbook__wrap-img-all').length)-1;
var prevHorizontalNowVerticalMeansNextVerticalImageOldCountPrev = '0';
var prevHorizontalNowVerticalMeansNextHorizontalImageOldCountPrev ='0';
var prevVerticalNowHorizontalMeansNextHorizontalImageOldCountPrev = '0';

var variablesUpClickNext = function () {
    numberOfclick++;
    nextImg++;
    prevImg++;
    backgroundImageClickPrev++;
};
var showNextImgToFont = function () {
    $('.luckbook__main-wrap').children().eq(nextImg).show();
    $('.luckbook__main-wrap').children().eq(nextImg).css('z-index', '98');
    $('.luckbook__main-wrap').children().eq(nextImg).children('.luckbook__link').show();
};
var backgroundImageClickPrevToBack = function () {
    $('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).css('z-index', '97');
    $('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).children('.luckbook__link').hide();
};
var nextVerticalImageFrontFirst = function () {
    $('.luckbook__main-wrap').children().eq(prevImg).hide();
    showNextImgToFont();
    backgroundImageClickPrevToBack();
};
var nextHorizontalImageFrontFirst = function () {
    prevVerticalNowHorizontalMeansNextHorizontalImageOldCountPrev = prevImg;
    $('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).hide();
    showNextImgToFont();
};
var prevHorizontalNowVerticalMeansNextHorizontalImage = function () {
    $('.luckbook__main-wrap').children().eq(prevImg).hide();
    backgroundImageClickPrevToBack();
    showNextImgToFont();
};
var prevHorizontalNowVerticalMeansNextVerticalImage = function () {
    $('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).hide();
    showNextImgToFont();
    prevHorizontalNowVerticalMeansNextVerticalImageOldCountPrev = prevImg;
};
var prevHorizontalNowHorizontalMeansNextVerticalImage = function () {
    backgroundImageClickPrevToBack();
    showNextImgToFont();
    $('.luckbook__main-wrap').children().eq(prevVerticalNowHorizontalMeansNextHorizontalImageOldCountPrev).hide();
};
var prevHorizontalNowHorizontalMeansNextHorizonalImage = function () {
    $('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).hide();
    showNextImgToFont();
};
var prevVerticalNowHorizontalMeansNextVerticalImage = function () {
    $('.luckbook__main-wrap').children().eq(prevImg).hide();
    showNextImgToFont();
    backgroundImageClickPrevToBack();
};
var prevVerticalNowHorizontalMeansNextHorizontalImage = function () {
    $('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).hide();
    showNextImgToFont();
    prevVerticalNowHorizontalMeansNextHorizontalImageOldCountPrev = prevImg;
};
var prevVerticalNowVerticalMeansNextHorizontalImage = function () {
    $('.luckbook__main-wrap').children().eq(prevHorizontalNowVerticalMeansNextVerticalImageOldCountPrev).hide();
    backgroundImageClickPrevToBack();
    showNextImgToFont();
};
var prevVerticalNowVerticalMeansNextVerticalImage = function () {
    $('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).hide();
    showNextImgToFont();
};
var lastClickNext = function () {
    numberOfclick = '0';
    nextImg = '2';
    prevImg = '1';
    backgroundImageClickPrev = '1';
    totalImages = ($('.luckbook__wrap-img-all').length)-1;
    prevHorizontalNowVerticalMeansNextVerticalImageOldCountPrev = '0';
    prevHorizontalNowVerticalMeansNextHorizontalImageOldCountPrev ='0';
    prevHorizontalNowVerticalMeansNextVerticalImageOldCountPrevOldCountPrev = '0';
    $('.luckbook__main-wrap').find('.luckbook__wrap-img-all').css('z-index', '97');
    $('.luckbook__main-wrap').find('.luckbook__wrap-img-all').hide();
    $('.luckbook__main-wrap').children().eq(2).css('z-index', '98');
    $('.luckbook__main-wrap').children().eq(2).show();
    $('.luckbook__main-wrap').children().eq(2).children('.luckbook__link').show();
    $('.luckbook__main-wrap').children().eq(3).css('z-index', '97');
    $('.luckbook__main-wrap').children().eq(3).show();
    $('.luckbook__main-wrap').children().eq(3).children('.luckbook__link').hide();
};

$('.luckbook__btn-next').on('click', function() {
    $(".pop-up-copyright").css({"display": "none"});
    if (numberOfclick == '0') {
        numberOfclick++;
        nextImg++;
        backgroundImageClickPrev++;
        $('.luckbook__main-wrap').children().eq(nextImg).css('z-index', '98');
        $('.luckbook__main-wrap').children().eq(nextImg).children('.luckbook__link').show();
        $('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).children('.luckbook__link').hide();
    } else if (numberOfclick == 1) {
        variablesUpClickNext();
        if (totalImages >= numberOfclick) {
            if ($('.luckbook__main-wrap').children().eq(nextImg).hasClass('luckbook__wrap-img-vertical')) {
                nextVerticalImageFrontFirst();
            } else {
                nextHorizontalImageFrontFirst();
            }
        }
    } else if (numberOfclick > 1) {
        variablesUpClickNext();
        if (totalImages >= numberOfclick) {
            if ($('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).hasClass('luckbook__wrap-img-vertical')) {
                if ($('.luckbook__main-wrap').children().eq(prevImg).hasClass('luckbook__wrap-img-horizontal')) {
                    if ($('.luckbook__main-wrap').children().eq(nextImg).hasClass('luckbook__wrap-img-horizontal')) {
                        prevHorizontalNowVerticalMeansNextHorizontalImage();
                    } else {
                        prevHorizontalNowVerticalMeansNextVerticalImage();
                    }
                    } else if ($('.luckbook__main-wrap').children().eq(nextImg).hasClass('luckbook__wrap-img-horizontal')) {
                        prevVerticalNowVerticalMeansNextHorizontalImage();
                    } else {
                        prevVerticalNowVerticalMeansNextVerticalImage();
                    }
            } else if ($('.luckbook__main-wrap').children().eq(prevImg).hasClass('luckbook__wrap-img-horizontal')) {
                if ($('.luckbook__main-wrap').children().eq(nextImg).hasClass('luckbook__wrap-img-vertical')) {
                    prevHorizontalNowHorizontalMeansNextVerticalImage();
                } else {
                    prevHorizontalNowHorizontalMeansNextHorizonalImage();
                }
                } else if ($('.luckbook__main-wrap').children().eq(nextImg).hasClass('luckbook__wrap-img-vertical')) {
                    prevVerticalNowHorizontalMeansNextVerticalImage();
                } else {
                    prevVerticalNowHorizontalMeansNextHorizontalImage();
                }
        } else {
            lastClickNext();
        }
    }
});

var variablesDownClickNext = function () {
    numberOfclick--;
    nextImg--;
    prevImg--;
    backgroundImageClickPrev--;
};
var backgroundImageClickPrevToFront = function () {
    $('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).css('z-index', '98');
    $('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).children('.luckbook__link').show();
};
var showToBack = function (classname) {
    $('.luckbook__main-wrap').children().eq(classname).show();
    $('.luckbook__main-wrap').children().eq(classname).css('z-index', '97');
    $('.luckbook__main-wrap').children().eq(classname).children('.luckbook__link').hide();
};

var lastHorizontalprevVerticalImages = function () {
    showNextImgToFont();
    $('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).show();
    $('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).children('.luckbook__link').hide();
};
var lastHorizontalprevNotVerticalImages = function () {
    showNextImgToFont();
    showToBack(countFindImage);
};
var secondPrevHorizontalVerticalVertical = function () {
    for (var numberOfLastVerticalImage = countFindImage; ($('.luckbook__main-wrap').children().eq(countFindImage).hasClass('luckbook__wrap-img-vertical'));
         numberOfLastVerticalImage--) {
        countFindImage--
    }
    $('.luckbook__main-wrap').children().eq(nextImg).hide();
    backgroundImageClickPrevToFront();
    showToBack(countFindImage);
    prevHorizontalNowVerticalMeansNextVerticalImageOldCountPrev = countFindImage;
    variablesDownClickNext();
};
var secondPrevVerticalHorizontalHorizontal = function () {
    for (var numberOfLastVerticalImage = countFindImage; ($('.luckbook__main-wrap').children().eq(countFindImage).hasClass('luckbook__wrap-img-horizontal'));
         numberOfLastVerticalImage--) {
        countFindImage--
    }
    $('.luckbook__main-wrap').children().eq(nextImg).hide();
    backgroundImageClickPrevToFront();
    showToBack(countFindImage);
    prevVerticalNowHorizontalMeansNextHorizontalImageOldCountPrev = countFindImage;
    variablesDownClickNext();
};
var secondPrevRightClick = function () {
    $('.luckbook__main-wrap').children().eq(nextImg).hide();
    backgroundImageClickPrevToFront();
    showToBack(prevImg);
    variablesDownClickNext();
};
var secondPrevNoRightClick = function () {
    $('.luckbook__main-wrap').children().eq(nextImg).hide();
    $('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).show();
    backgroundImageClickPrevToFront();
    variablesDownClickNext();
};
var prevPrevVerticalNowHorizontalNextVerticalPlusVariable = function () {
    $('.luckbook__main-wrap').children().eq(nextImg).hide();
    backgroundImageClickPrevToFront();
    prevHorizontalNowVerticalMeansNextVerticalImageOldCountPrev = (prevImg-1);
    showToBack(prevHorizontalNowVerticalMeansNextVerticalImageOldCountPrev);
    variablesDownClickNext();
};
var prevPrevVerticalNowHorizontalNextVertical = function () {
    $('.luckbook__main-wrap').children().eq(nextImg).hide();
    backgroundImageClickPrevToFront();
    showToBack(prevImg);
    variablesDownClickNext();
};
var prevPrevVerticalNowVerticalNextVertical = function () {
    $('.luckbook__main-wrap').children().eq(nextImg).hide();
    $('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).show();
    backgroundImageClickPrevToFront();
    variablesDownClickNext();
};
var prevPrevHorizontalNowVerticalNextHorizontalPlusVariable = function () {
    $('.luckbook__main-wrap').children().eq(nextImg).hide();
    backgroundImageClickPrevToFront();
    prevVerticalNowHorizontalMeansNextHorizontalImageOldCountPrev = (prevImg-1);
    showToBack(prevVerticalNowHorizontalMeansNextHorizontalImageOldCountPrev);
    variablesDownClickNext();
};
var prevPrevHorizontalNowVerticalNextHorizontalPlusVariableTwo = function () {
    $('.luckbook__main-wrap').children().eq(nextImg).hide();
    backgroundImageClickPrevToFront();
    prevVerticalNowHorizontalMeansNextHorizontalImageOldCountPrev = (prevImg-3);
    showToBack(prevVerticalNowHorizontalMeansNextHorizontalImageOldCountPrev);
    variablesDownClickNext();
};
var prevPrevVerticalNowHorizontalNextHorizontal = function () {
    $('.luckbook__main-wrap').children().eq(nextImg).hide();
    $('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).show();
    backgroundImageClickPrevToFront();
    variablesDownClickNext();
};
var prevPrevVerticalNowHorizontalNextVerticalTwo = function () {
    $('.luckbook__main-wrap').children().eq(nextImg).hide();
    backgroundImageClickPrevToFront();
    showToBack(prevImg);
    variablesDownClickNext();
};
var prevPrevHorizontalNowHorizontalNextHorizontalPlusVariable = function () {
    var countFindImages = backgroundImageClickPrev;
    for (var numberOfLastVerticalImage = countFindImages; ($('.luckbook__main-wrap').children().eq(countFindImages).hasClass('luckbook__wrap-img-horizontal'));
         numberOfLastVerticalImage--) {
        countFindImages--
    }
    $('.luckbook__main-wrap').children().eq(nextImg).hide();
    backgroundImageClickPrevToFront();
    prevVerticalNowHorizontalMeansNextHorizontalImageOldCountPrev = countFindImages;
    showToBack(prevVerticalNowHorizontalMeansNextHorizontalImageOldCountPrev);
    variablesDownClickNext();
};
var prevPrevVerticalNowHorizontalNextVerticalPlusVariableTwo = function () {
    var countFindImages = backgroundImageClickPrev;
    for (var numberOfLastVerticalImage = countFindImages; ($('.luckbook__main-wrap').children().eq(countFindImages).hasClass('luckbook__wrap-img-vertical'));
         numberOfLastVerticalImage--) {
        countFindImages--
    }
    $('.luckbook__main-wrap').children().eq(nextImg).hide();
    prevHorizontalNowVerticalMeansNextVerticalImageOldCountPrev = countFindImages;
    backgroundImageClickPrevToFront();
    showToBack(prevHorizontalNowVerticalMeansNextVerticalImageOldCountPrev);
    variablesDownClickNext();
};
var prevLastClick = function () {
    $('.luckbook__main-wrap').children().eq(nextImg).css('z-index', '97');
    $('.luckbook__main-wrap').children().eq(nextImg).children('.luckbook__link').hide();
    backgroundImageClickPrevToFront();
    numberOfclick = '0';
    nextImg = '2';
    prevImg = '1';
    backgroundImageClickPrev = '1';
    prevHorizontalNowVerticalMeansNextVerticalImageOldCountPrev = '0';
    prevHorizontalNowVerticalMeansNextHorizontalImageOldCountPrev ='0';
    prevHorizontalNowVerticalMeansNextVerticalImageOldCountPrevOldCountPrev = '0';
};

$('.luckbook__btn-prev').on('click', function() {
    $(".pop-up-copyright").css({"display": "none"});
    if (numberOfclick == '0') {
        numberOfclick = totalImages;
        nextImg = numberOfclick + 2;
        prevImg = numberOfclick;
        backgroundImageClickPrev = numberOfclick + 1;
        countFindImage = numberOfclick + 1;
        $('.luckbook__main-wrap').find('.luckbook__wrap-img-all').css('z-index', '97');
        $('.luckbook__main-wrap').find('.luckbook__wrap-img-all').hide();
        if (($('.luckbook__main-wrap').children().eq(nextImg).hasClass('luckbook__wrap-img-horizontal')) && ($('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).hasClass('luckbook__wrap-img-vertical'))) {
            lastHorizontalprevVerticalImages();
        } else if ($('.luckbook__main-wrap').children().eq(nextImg).hasClass('luckbook__wrap-img-horizontal')) {
            for (var numberOfLastVerticalImage = countFindImage; ($('.luckbook__main-wrap').children().eq(countFindImage).hasClass('luckbook__wrap-img-horizontal'));
                 numberOfLastVerticalImage--) {
                countFindImage--
            }
            lastHorizontalprevNotVerticalImages();
        } else {
            for (var numberOfLastVerticalImage = countFindImage; ($('.luckbook__main-wrap').children().eq(countFindImage).hasClass('luckbook__wrap-img-vertical'));
                 numberOfLastVerticalImage--) {
                countFindImage--
            }
            lastHorizontalprevNotVerticalImages();
        }
    } else if (numberOfclick == '1') {
        prevLastClick();
    }  else if (numberOfclick > 1) {
        if (totalImages > numberOfclick) {
            if ($('.luckbook__main-wrap').children().eq(nextImg).hasClass('luckbook__wrap-img-horizontal')) {
                if ($('.luckbook__main-wrap').children().eq(nextImg+1).hasClass('luckbook__wrap-img-vertical')) {
                    if ($('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).hasClass('luckbook__wrap-img-vertical')) {
                        if (($('.luckbook__main-wrap').children().eq(prevImg-1).hasClass('luckbook__wrap-img-horizontal')) && ($('.luckbook__main-wrap').children().eq(prevImg).hasClass('luckbook__wrap-img-vertical'))) {
                            prevPrevVerticalNowHorizontalNextVerticalPlusVariable();
                        } else if (($('.luckbook__main-wrap').children().eq(prevImg-1).hasClass('luckbook__wrap-img-horizontal')) && ($('.luckbook__main-wrap').children().eq(prevImg).hasClass('luckbook__wrap-img-horizontal'))) {
                            prevPrevVerticalNowHorizontalNextVerticalTwo();
                        }  else if ($('.luckbook__main-wrap').children().eq(prevImg).hasClass('luckbook__wrap-img-vertical')) {
                            prevPrevVerticalNowHorizontalNextVerticalPlusVariableTwo();
                        } else {
                            prevPrevVerticalNowHorizontalNextVertical();
                        }
                    } else {
                        prevPrevVerticalNowHorizontalNextHorizontal();
                    }
                } else if ($('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).hasClass('luckbook__wrap-img-vertical')) {
                    if (($('.luckbook__main-wrap').children().eq(prevImg-1).hasClass('luckbook__wrap-img-horizontal')) && ($('.luckbook__main-wrap').children().eq(prevImg).hasClass('luckbook__wrap-img-vertical'))) {
                        prevPrevVerticalNowHorizontalNextVerticalPlusVariable();
                    } else if (($('.luckbook__main-wrap').children().eq(prevImg-1).hasClass('luckbook__wrap-img-horizontal')) && ($('.luckbook__main-wrap').children().eq(prevImg).hasClass('luckbook__wrap-img-horizontal'))) {
                        prevPrevVerticalNowHorizontalNextVerticalTwo();
                    }  else if ($('.luckbook__main-wrap').children().eq(prevImg).hasClass('luckbook__wrap-img-vertical')) {
                        prevPrevVerticalNowHorizontalNextVerticalPlusVariableTwo();
                    } else {
                        prevPrevVerticalNowHorizontalNextVertical();
                    }
                } else {
                    prevPrevVerticalNowHorizontalNextHorizontal();
                }
            } else if ($('.luckbook__main-wrap').children().eq(nextImg+1).hasClass('luckbook__wrap-img-vertical')) {
                if ($('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).hasClass('luckbook__wrap-img-vertical')) {
                    prevPrevVerticalNowVerticalNextVertical();
                } else if ($('.luckbook__main-wrap').children().eq(prevImg).hasClass('luckbook__wrap-img-vertical')) {
                    prevPrevVerticalNowHorizontalNextVertical();
                } else if ($('.luckbook__main-wrap').children().eq(prevImg-1).hasClass('luckbook__wrap-img-vertical')) {
                    prevPrevHorizontalNowVerticalNextHorizontalPlusVariable();
                } else if  ($('.luckbook__main-wrap').children().eq(prevImg).hasClass('luckbook__wrap-img-horizontal')) {
                    prevPrevHorizontalNowHorizontalNextHorizontalPlusVariable();
                } else {
                    prevPrevHorizontalNowVerticalNextHorizontalPlusVariableTwo();
                }
            } else if ($('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).hasClass('luckbook__wrap-img-vertical')) {
                prevPrevVerticalNowVerticalNextVertical();
            } else if ($('.luckbook__main-wrap').children().eq(prevImg).hasClass('luckbook__wrap-img-vertical')) {
                prevPrevVerticalNowHorizontalNextVertical();
            } else if ($('.luckbook__main-wrap').children().eq(prevImg-1).hasClass('luckbook__wrap-img-vertical')) {
                prevPrevHorizontalNowVerticalNextHorizontalPlusVariable();
            } else if  ($('.luckbook__main-wrap').children().eq(prevImg).hasClass('luckbook__wrap-img-horizontal')) {
                prevPrevHorizontalNowHorizontalNextHorizontalPlusVariable();
            } else {
                prevPrevHorizontalNowVerticalNextHorizontalPlusVariableTwo();
            }
        } else if (($('.luckbook__main-wrap').children().eq(nextImg).hasClass('luckbook__wrap-img-horizontal') && $('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).hasClass('luckbook__wrap-img-vertical')) || ($('.luckbook__main-wrap').children().eq(nextImg).hasClass('luckbook__wrap-img-vertical') && $('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).hasClass('luckbook__wrap-img-horizontal'))) {
            if (($('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).hasClass('luckbook__wrap-img-horizontal') && $('.luckbook__main-wrap').children().eq(prevImg).hasClass('luckbook__wrap-img-horizontal')) || ($('.luckbook__main-wrap').children().eq(backgroundImageClickPrev).hasClass('luckbook__wrap-img-vertical') && $('.luckbook__main-wrap').children().eq(prevImg).hasClass('luckbook__wrap-img-vertical'))) {
                if ($('.luckbook__main-wrap').children().eq(nextImg).hasClass('luckbook__wrap-img-horizontal')) {
                    secondPrevHorizontalVerticalVertical();
                } else {
                    secondPrevVerticalHorizontalHorizontal();
                }
            } else {
                secondPrevRightClick();
            }
        } else {
            secondPrevNoRightClick();
        }
    } else {
        secondPrevRightClick();
    }
});
/*если первая фотография в блоке .luckbook__main-wrap будет горизонтальная то нужно в css свойсвах:
 .luckbook__wrap-img-horizontal задать z-index=98 а  .luckbook__wrap-img-vertical задать z-index-97
  так же у первых двух блоков .luckbook__wrap-img-all должен отсутствовать класс .luckbook__wrap-img-all--hide
  а у первых четырех блоков с классом .luckbook__link должен отсутствовать класс .luckbook__link--hide*/

  //shop slider

let windowWidth = $(".wrapper-section__container-shop").width();
let scrollWidth = 0;

if (windowWidth > 769) {
    scrollWidth = 280;
} else if (windowWidth > 561) {
    scrollWidth = 250;
} else {
    scrollWidth = 140;
}

$(".wrapper-section__container-shop").niceScroll({ cursorcolor:"#edd0e4", cursorwidth:"3px", emulatetouch:true, autohidemode:false, cursorfixedheight: scrollWidth});

})(jQuery);