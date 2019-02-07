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

})(jQuery);