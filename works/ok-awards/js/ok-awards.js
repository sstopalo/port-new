(function ($) {
$(document).ready(function() {
    // открытие модального меню
    $('.main-nav__toggle-open-js').on('click', function () {
        $('.main-nav').addClass('main-nav-open');
        $('.main-header').addClass('main-header-open');
        $('.main-nav__toggle-close').show();
        $('body').addClass('modal-open');
        $('.main-footer').addClass('main-footer-modal-open');
    });
    // закрытие модального меню
    $('.main-nav__toggle-close-js').on('click', function () {
        $('.main-nav').removeClass('main-nav-open');
        $('.main-header').removeClass('main-header-open');
        $('.main-nav__toggle-close').hide();
        $('body').removeClass('modal-open');
        $('.main-nav__toggle-open').show();
        $('.main-footer').removeClass('main-footer-modal-open');
    });
    // фиксирование меню по верхнему краю
    var navToTop = $('.main-nav').offset().top;
    var hMainNav = parseInt($('.main-nav').css('height'));
    var textPadTop = parseInt($('.main-header__container').css('padding-top'));
    var textPadTopOne = parseInt($('.main-header__container').css('padding-top'));
    var scroll;
    $(window).resize(function() {
        // if (scroll >= navToTop) {
            textPadTop = parseInt($('.main-header__container').css('padding-top'));
            navToTop = $('.main-nav').offset().top;
            hMainNav = $('.main-nav').height();
            $('.main-header__container').css('padding-top', textPadTop + "px");
            console.log('тест1');
        // }
    });
    $(document).scroll(function () {
        scroll = $(document).scrollTop();
        if ( scroll >= navToTop) {
            hMainNav = parseInt($('.main-nav').css('height'));
            $('.main-nav').addClass('main-nav-fix');
            $('.site-list').addClass('site-list-fix');
            $('.site-list-first-item').addClass('site-list-first-item-fix');
            $('.main-header__container').css('padding-top', + textPadTop + hMainNav + "px");
        } else {
            hMainNav = parseInt($('.main-nav').css('height'));
            $('.main-nav').removeClass('main-nav-fix');
            $('.site-list').removeClass('site-list-fix');
            $('.site-list-first-item').removeClass('site-list-first-item-fix');
            $('.main-header__container').css('padding-top', textPadTopOne + "px");
        }
    });
    $(function() {
        if ($(window).width()<=560) {
            $('.nominee-awards__item-link--newmusic').addClass('nominee-awards__item-link--active');
            $('.nominee-awards__body--newmusic').addClass('nominee-awards__body--show');
        }
    });
    $(window).resize(function(){
        if ($(window).width()<=560) {
            $('.nominee-awards__item-link--newmusic').addClass('nominee-awards__item-link--active');
            $('.nominee-awards__body--newmusic').addClass('nominee-awards__body--show');
        } else {
            $('.nominee-awards__item-link--newmusic').removeClass('nominee-awards__item-link--active');
            $('.nominee-awards__body--newmusic').removeClass('nominee-awards__body--show');
            $('.nominee-awards__body--newmovie').removeClass('nominee-awards__body--show');
        }
    });
    // клик по пункту меню
    $('.menu-click-js').on('click', function (e) {
        e.preventDefault();
        if ($(window).width()>=561) {
            $('.sub-nominations-list-link').removeClass('nominee-awards__item-link--active');
            $('.nominee-awards__item-link').removeClass('nominee-awards__item-link--active');
            $(this).addClass('nominee-awards__item-link--active');
            var listName = $(this).data('name');
            $('.nominee-awards__body').removeClass('nominee-awards__body--show');
            $('.nominee-awards__body').addClass('nominee-awards__body--hide');
            $('.nominee-awards__body[data-name=' +listName+ ']').addClass('nominee-awards__body--show');
            console.log(listName);
        } else {
            console.log('ItsMobile');
            $(this).parents('.nominee-awards__list').find('.menu-click-js').removeClass('nominee-awards__item-link--active');
            $(this).addClass('nominee-awards__item-link--active');
            var listName = $(this).data('name');
            $(this).parents('.nominee-awards').find('.nominee-awards__body').removeClass('nominee-awards__body--show');
            $(this).parents('.nominee-awards').find('.nominee-awards__body').addClass('nominee-awards__body--hide');
            $('.nominee-awards__body[data-name=' +listName+ ']').addClass('nominee-awards__body--show');
    }
    });
    // плавный скролл к секции .nominations
    $('.btn-scroll-js').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('.main-nav').removeClass('main-nav-open');
        $('.main-header').removeClass('main-header-open');
        $('.main-nav__toggle-close').hide();
        $('body').removeClass('modal-open');
        $('.main-footer').removeClass('main-footer-modal-open');
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 45
        }, 600, 'swing', function () {
        });
    });
    $('.nominations-list-link--no-click-js').on('click',function (e) {
        e.preventDefault();
    });
    // открытие pop-up-nominee
    $('.nominee-item-link-js').on('click', function (e) {
        e.preventDefault();
        $(".pop-up-nominee-description-wrap-js").niceScroll({ cursorcolor:"#fff", cursorwidth:"1px", cursorborder:"0", emulatetouch:true, autohidemode:false, cursorminheight:50 });
        var imgSrc = $(this).parents('.nominee-item-js').data('img-src');
        $('.pop-up-nominee-wrap-left-img-js').prop('src', imgSrc);
        var nameTag = $(this).parents('.nominee-item-js').data('name-tag');
        $('.pop-up-nominee-name-js').html(nameTag);
        var descriptionTag = $(this).parents('.nominee-item-js').data('description-tag');
        $('.pop-up-nominee-description-js').html(descriptionTag);
        $('.pop-up-nominee-js').removeClass("display-none");
        $("body").addClass("pop-up-nominee-open");
    });
    // закрытие pop-up-nominee
    $('.btn-close-pop-up-nominee-js').on('click', function (e) {
        e.preventDefault();
        $('.pop-up-nominee-js').addClass("display-none");
        $("body").removeClass("pop-up-nominee-open");
    });

    // открытие pop-up-nominee--ok
    $('.nominee-item-link-js--ok').on('click', function (e) {
        e.preventDefault();
        $(".pop-up-nominee-description-wrap-js--ok").niceScroll({ cursorcolor:"#fff", cursorwidth:"1px", cursorborder:"0", emulatetouch:true, autohidemode:false, cursorminheight:50 });
        var imgSrc = $(this).parents('.nominee-item-js--ok').data('img-src');
        $('.pop-up-nominee-wrap-left-img-js--ok').prop('src', imgSrc);
        var nameTag = $(this).parents('.nominee-item-js--ok').data('name-tag');
        $('.pop-up-nominee-name-js--ok').html(nameTag);
        var descriptionTag = $(this).parents('.nominee-item-js--ok').data('description-tag');
        $('.pop-up-nominee-description-js--ok').html(descriptionTag);
        $('.pop-up-nominee-js--ok').removeClass("display-none");
        $("body").addClass("pop-up-nominee-open");
    });
    // закрытие pop-up-nominee--ok
    $('.btn-close-pop-up-nominee-js--ok').on('click', function (e) {
        e.preventDefault();
        $('.pop-up-nominee-js--ok').addClass("display-none");
        $("body").removeClass("pop-up-nominee-open");
    });
    // открытие блока социальных сетей
    $('.sosial-horizontal-link--btn').on('click', function (e) {
        e.preventDefault();
       $('.social-list-vertical').toggleClass('display-none');
    });
    // галлерея как это было
    $ ('.gallery-slide').flipster({
        itemContainer: ' .gallery-slide-list ',
        itemSelector : ' .gallery-slide-item ',
        loop : true ,
        style : ' coverflow ',
        buttons : 'custom' ,
        buttonPrev : '' ,
        buttonNext : '' ,
    });
});
})(jQuery);