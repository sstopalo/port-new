$(document).ready(function() {

  var isMobile =  /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
  var dWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  var $bannerBlock = $('.top-bn');
  var tbh = $bannerBlock.height();
  (tbh == null) ? tbh = 0 : tbh = tbh;

  function fixMenuOrNoFixMenu() {
    function fixMenu() {
      $('.main-header').addClass('fix');
      $('body').css('padding-top', 0 + 'px');
    }
    tbh = $bannerBlock.height();

  var menuFixed = false;

  var menuPadding = parseInt($('.main-header').css('padding-top')) - 15;

    $(document).scroll(function () {
      if (!menuFixed && $(document).scrollTop() > tbh + menuPadding) {
        fixMenu();
        menuFixed = true;
      } else if(menuFixed && $(document).scrollTop() <= tbh + menuPadding) {
        $('.main-header').removeClass('fix fix-admmenu').css('top', '');
        $('body').css('padding-top', '0');
        menuFixed = false;
      }
    });
  }
  fixMenuOrNoFixMenu();

  //появление бордера под меню
  $(document).scroll(function () {
    if ($("html,body").scrollTop() > $('.contest').outerHeight() && isMobile != true){
      $('.header-menu').addClass('bb');
    } else {
      $('.header-menu').removeClass('bb');
    }
  });

  // open modal menu
  if (isMobile != true) {
    var scrollWidth = (function(){
      var div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      var width = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      return width;
    })();
  }
  $('.burger').click(function(){
    $('body').addClass('modal-menu-open').css({
      'padding-right' : ((scrollWidth != undefined)? scrollWidth + 'px' : '')
    });
    var $modalMenu = $('.modal-menu');
    var modalMenuContentHeight = $('.modal-menu-body').outerHeight() + $('.modal-menu-footer').height();
    if ($modalMenu.height() > modalMenuContentHeight){
      $modalMenu.addClass('big-height');
    }
  });
  $('.modal-menu-close').click(function(){
    $('body').css({
      'padding-right' : ''
    }).removeClass('modal-menu-open');
    $('.modal-menu').removeClass('big-height');
  });
  $(window).keydown(function(eventObject){
    if (eventObject.which == 27 && $('body').hasClass('modal-menu-open')) {
      $('.modal-menu-close').click();
    }
  });


  // header width
  function headerMenuWidth(){
    var headerWidth = $('.content').innerWidth();
    var headerWidthIn = $('.content').width();
    var iPadIndent = 0;
    /*if (isMobile == true && dWidth >= 768 ) {
      iPadIndent = 40;
    } else if (isMobile == true && dWidth < 768) {
      iPadIndent = 20;
    }*/
    $('header').css({
      'width' : headerWidth + 'px'
    });
    $('.header-menu').css({
      'width' : (headerWidthIn + iPadIndent) + 'px'
    });
  }
  $(window).resize(function(){
    headerMenuWidth();
  });
  headerMenuWidth();


  // header menu search
  $('.header-menu-search-open').click(function(){
    $(this).addClass('true');
    $('body').addClass('open-search');
    $('.header-menu-search').addClass('input-focus-true').find('input[type="text"]').focus();
  });
  $('.header-menu-search input[type="submit"]').click(function(){
    if($(this).parents('.header-menu-search').hasClass('input-focus-true')){
      if ($('.header-menu-search input[type="text"]').val() == '') {
        $('.header-menu-search-open').removeClass('true');
        $('.header-menu-search').removeClass('input-focus-true');
        $('body').removeClass('open-search');
        return false;
      }
    }
  });
  $('.menu-search-close').click(function(){
    $('.header-menu-search-open').removeClass('true');
    $('.header-menu-search').removeClass('input-focus-true');
    $('body').removeClass('open-search');
  });

  //Our Brands
  if (isMobile == true) {
    $('.block-choice').click(function(){
      var bl = $(this).parents('.acmg-button-footer').find('.block-choice-open').css('display');
      if (bl != 'block') {
        $(this).parents('.acmg-button-footer').find('.block-choice-open').css('display','block');
      } else {
        $(this).parents('.acmg-button-footer').find('.block-choice-open').css('display','none');
      }
    });
  }



  function changesTheTopBanner(){
    // выбираем целевой элемент
    var element = document.getElementsByClassName('top-bn')[0];
    // создаём экземпляр MutationObserver
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type == 'childList' || mutation.type == 'subtree'){
          //onn();
        }
      });
    });
    /*
     конфигурация нашего observer:
     subtree: true - изменения должны быть не только у элемента, но и у потомков
     childList: true - это указывает что нужно отслеживать изменение количества потомков
     */
    var config = { childList: true, subtree: true };
    // передаём в качестве аргументов целевой элемент и его конфигурацию
    observer.observe(element, config);
    // позже можно остановить наблюдение
    //observer.disconnect();
  }
  //changesTheTopBanner();


  var $blBnInText = $('.content')[0];
  var mobActive = 0;
  if (isMobile != true || isMobile == true && screen.width >= 768 ) {
    mobActive = 0;
  } else {
    mobActive = 1;
  }
  // $(document).scroll(function () {
  //   var hMHeight = $('.header-menu').outerHeight();
  //   //var bHeught = $bannerBlock.height();
  //   var padTop = parseFloat($('.content-block:first').css('padding-top'));
  //   var lFmC = $('.left-fix-menu-content').outerHeight();
  //   //var st = $(this).scrollTop();
  //   var Ra = $blBnInText.getBoundingClientRect();
  //   //var indent = 188;
  //   var indent = 200;
  //   if (mobActive == 0) {
  //     if ( Ra.top + padTop - hMHeight - 30  < 0 ) {
  //       $('.left-fix-menu-content').addClass('fixed').css({
  //         'top' : hMHeight + 30 + 'px'
  //       });
  //       if (Ra.bottom - lFmC - indent < 0) {
  //         $('.left-fix-menu-content').css({
  //           'position' : 'absolute',
  //           //'top' : 'auto',
  //           //'bottom' : '-' + ($('.content:first').outerHeight() + $('.contest').height() - lFmC - $('.content.bottom').outerHeight()) + 'px'
  //           'top' : ($('.content.center').outerHeight() - lFmC - indent) + 'px'
  //         });
  //       } else {
  //         $('.left-fix-menu-content').css({
  //           'position' : '',
  //           //'top' : '',
  //           'bottom' : ''
  //         });
  //       }
  //     } else {
  //       $('.left-fix-menu-content').removeClass('fixed').css({
  //         'top' : ''
  //       });
  //     }
  //   }
  // });


  function scrollToBlock(thisText){
    var aboutContest = 4;
    var mobIndent = 0;
    if (isMobile == true && dWidth < 560) {
      mobIndent = 40;
    }
    if (thisText != 'home') {
      $('html, body').stop().animate({
        scrollTop: $('[data-block="' + thisText + '"]').offset().top + aboutContest - mobIndent
      }, 300);
      var url = '#' + thisText;
      history.pushState('', '', url);
      return false;
    } else {
      $('html, body').stop().animate({
        scrollTop: $('body').offset().top
      }, 500);
      var url = '#' + thisText;
      history.pushState('', '', url);
      return false;
    }
  }
  $('.left-fix-menu-content .item').click(function(){
    $('.left-fix-menu-content .item').removeClass('active');
    $(this).addClass('active');
    scrollToBlock($(this).attr('data-sname'));
  });
  if (window.location.hash != ''){
    setTimeout(function(){
      $('.left-fix-menu-content .item[data-sname="' + window.location.hash.slice(1) + '"]').click();
    },300);
  }

  $('[data-block="the-conference"] .see-program').click(function(){
    $('.left-fix-menu-content .item[data-sname="program"]').click();
  });

  $('.contest .buy .buy-now,[data-block="the-conference"] .buy-now').click(function(){
    $('.left-fix-menu-content .item[data-sname="price"]').click();
  });


  // модально меню спикера
  $('body').on('click', '.speakers .item', function(){
    $('body').css({
      'overflow' : 'hidden',
      'padding-right' : ((scrollWidth != undefined)? scrollWidth + 'px' : '')
    });
    if (isMobile == true && dWidth < 768 ){
      var imgSrc = $(this).find('.for-modal .mobile').attr('src');
    } else {
      var imgSrc = $(this).find('.for-modal .no-mobile').attr('src');
    }
    var name = $(this).find('.name').text();
    var regalii = $(this).find('.regalii').text();
    var text = $(this).find('.for-modal .text').html();

    $('.modal .face-img').attr('src',imgSrc);
    $('.modal .text .name').html(name);
    $('.modal .text .regalii').html(regalii);
    $('.modal .text .p').html(text);

    $('.modal').addClass('open');

    $(".nicescroll-box-p").niceScroll({ cursorcolor:"#000", cursorwidth:"3px", emulatetouch:true, autohidemode:false, cursorminheight:70 });

    if (isMobile != true || isMobile == true && dWidth > 560){
      $('.modal .modal-body').css({
        'top' : ( $(window).height()/2 - $('.modal .modal-body').height()/2 ) + 'px'
      });
    }
  });
  $('.modal-body-close').click(function(){
    $('body').css({
      'overflow' : '',
      'padding-right' : ''
    });
    $('.modal.open,.modal-for-exit.open').removeClass('open');
    $('.modal-for-exit').attr('data-no-open','');
  });

  $('a[data-open-modal]').click(function(){
    var thisName = $(this).attr('data-open-modal');
    $('.speakers .item[data-speaker="' + thisName + '"]').click();
    return false;
  });


  // modal for exit
  // отключили всплывающие поп-апы с подпиской на рассылку при попытке покинуть страницу
  function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  // var popupModalForExit = getCookie("popupModalForExit");
  // if (popupModalForExit != "no") {
  //   $(document).mouseleave(function(e){
  //     if (e.clientY < 0) {
  //       if ($('.modal-for-exit').attr('data-no-open') == undefined) {
  //         $('body').css({
  //           'overflow' : 'hidden',
  //           'padding-right' : ((scrollWidth != undefined)? scrollWidth + 'px' : '')
  //         });
  //         $('.modal-for-exit').addClass('open');
  //         // записываем cookie на 1 день, с которой мы не показываем окно
  //         var date = new Date;
  //         date.setDate(date.getDate() + 1);
  //         document.cookie = "popupModalForExit=no; path=/; expires=" + date.toUTCString();
  //       }
  //     }
  //   });
  // }
  $('.modal-for-exit .start .label').click(function(){
    var thisDataFor = $(this).attr('data-for');
    if (thisDataFor == 'b-on-thanks') {
      $('.modal-for-exit .start').hide();
      $('.modal-for-exit .b-on-thanks').show();
    } else if ( thisDataFor == 'b-on-discounts' ){
      $('.modal-for-exit .start').hide();
      if($(this).text() == 'Нет, дорого' || $(this).text() == 'Думаю'){
        $('.modal-for-exit .b-on-discounts').show();
        $('.b-on-discounts select').find('option[value="'+$(this).text()+'"]').prop('selected', true);
      }
    } else if ( thisDataFor == 'b-on-conference') {
      $('.modal-for-exit .start').hide();
      $('.modal-for-exit .b-on-conference').show();
      $('.b-on-conference select').find('option[value="'+$(this).text()+'"]').prop('selected', true);
    }
  });
  $('.modal-for-exit .b-on-thanks .buy-now, .modal-for-exit .b-on-send .buy-now').click(function(){
    $('body').css({
      'overflow' : '',
      'padding-right' : ''
    });
    $('.modal-for-exit.open').removeClass('open').attr('data-no-open','');
  });
  $('.modal-for-exit .uslovia .before-check').click(function(){
    if(!$(this).hasClass('true')) {
      $(this).addClass('true');
      $(this).parent('.uslovia').prev().find('input[type="submit"]').prop('disabled', false);
    }
  });
  $('.modal-for-exit .modal-content form').submit(function() {
    $('.modal-for-exit .start, .modal-for-exit .b-on-conference, .modal-for-exit .b-on-discounts').hide();
    $('.modal-for-exit .b-on-send').show();
  });

  // end modal for exit



  // изменение урла
  $('.social-button-block .share').on('click', function(){
    var uid = $(this).attr('data-uid');
    var temp = Math.random();
    $.ajax({ url: '/itogi-goda-2017/input.php?selected=' + uid + '&temp='+temp, cache: false });
  });


  // слайд в мобильной версии
  // if (isMobile == true && dWidth <= 768) {
  //   $('.indicator').addClass('active');
  //     var iDivWidth = $('.indicator .polzunok').width();
  //     var indWidth = $('.indicator').outerWidth();
  //     var dPr = parseInt(iDivWidth * 100 / indWidth);
  //     var diffWidth = $('.all-price')[0].scrollWidth - $('.all-price').outerWidth();
  //     $('.all-price').scroll(function() {
  //       var sl = $(this).scrollLeft();
  //       var sLDProcent = parseInt(100 * sl / diffWidth);
  //       (sLDProcent <= dPr) ? sLDProcent = dPr: sLDProcent = sLDProcent;
  //       $('.indicator .polzunok').css('left', 'calc(' + sLDProcent + '% - ' + iDivWidth + 'px)');
  //     });
  // }


  function grayBg(){
    $('.content-block.gray').each(function(indx, element){
      var ww = $(window).width();
      var left = ($(window).width() - $('.content').width()) / 2;
      if ( $(element).find('.before').length == 0 ){
        $(this).prepend('<div class="before" style="width: ' + ww + 'px; left: -' + left + 'px;"></div>');
      } else {
        $(element).find('.before').css({
          'width' : ww + 'px',
          'left' : '-' + left + 'px'
        });
      }
    });
  }
  grayBg();
  function theConferenceBg(){
    if(!isMobile){
      var x = ($(window).width() - $('.content').width())/2;
      (x > 70) ? x = 70 : x = x;
      if ($('.the-conference-bg').css('display') == 'none'){
        $('.the-conference-bg').css({
          'right' : '-' + x + 'px',
          'display' : 'block'
        });
      } else {
        $('.the-conference-bg').css({
          'right' : '-' + x + 'px'
        });
      }
    }
  }
  theConferenceBg();
  function resizeWidthMap(){
    $('#map_canvas').css('width','');
    var sWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var thWidth = $('#map_canvas').width();
    var raznica = parseInt(($(window).width()-$('[data-block="contacts"]').width())/2);
    (sWidth < 560) ? raznica = 0 : raznica = raznica;
    if ( $(window).width() > $('[data-block="contacts"]').width() ) {
      $('#map_canvas').css({
        'width' : (thWidth + raznica) + 'px'
      });
    }
    if (sWidth < 560) {
      $('[data-rel="parking"],[data-rel="metro"]').click(function(){
        $('html, body').stop().animate({
          scrollTop: $('.map').offset().top - $('.header-menu').outerHeight() + 5
        }, 300);
      });
    }
  }
  resizeWidthMap();
  $(window).resize(function(){
    grayBg();
    theConferenceBg();
    resizeWidthMap();
  });


  // наши спикеры
  function speakers(){
    if (Number(document.getElementById('queueSpeakers')) != 0){
      var massSpeaker = document.getElementById('queueSpeakers').innerHTML.split(',');
      if (massSpeaker.length > 6) {
        $('.speakers').after('<div class="plus-speaker"><span></span> спикеров</div><div></div><div class="view-all">смотреть всех</div>');
        $('.plus-speaker span').html('+ ' + (massSpeaker.length - 6));
      }
      function dataSpeakersMobile(){// спикеры для мобилы
        $('.speakers').after('<div class="speakers" data-speakers-mobile=""><div class="speakers-column"></div></div>');
        for (var i = 0; i < massSpeaker.length; i++){
          var clonItemBlock = $('.all-speakers .item[data-speaker="' + massSpeaker[i] + '"]').clone();
          $('.speakers[data-speakers-mobile] .speakers-column').append(clonItemBlock);
          if( i > 5 ) clonItemBlock.addClass('hide');
        }
      }
      function renderSpeakers(){ // отрисовка спикеров
        for (var i = 0; i < massSpeaker.length; i++){
          var clonItemBlock = $('.all-speakers .item[data-speaker="' + massSpeaker[i] + '"]').clone();
          $('.speakers[data-speakers-no-mobile]').find('.speakers-column').eq(i%3).append(clonItemBlock);
          if( i > 5 ) clonItemBlock.addClass('hide');
        }
        dataSpeakersMobile();
        $('.speakers').attr('data-function', arguments.callee.name + '()');
      }
      renderSpeakers();

      $('.view-all').click(function(){
        $('.speakers .item').removeClass('hide');
        $('.speakers').addClass('show');
        $('.plus-speaker').hide();
        $(this).hide();
        if (isMobile == true && dWidth < 560) {
          $('html, body').stop().animate({
            scrollTop: $('.speakers[data-speakers-mobile] .item').eq(5).offset().top - $('.header-menu').outerHeight() + 5
          }, 200);
        }
      });
    }
  }
  speakers();



  //блок обратного отсчета
  function countdownRun() {
    var whereToInsert = document.getElementsByClassName('buy')[0];
    var deadline = whereToInsert.getAttribute('data-deadline');
    whereToInsert.insertAdjacentHTML('beforeend', '<div class="countdown">'
          + '<div class="countdown-head">до начала конференции осталось</div>'
          + '<div class="countdown-time">'
          +   '<div id="cdt-days">00</div><div class="colon">:</div>'
          +   '<div id="cdt-hours">00</div><div class="colon">:</div>'
          +   '<div id="cdt-minutes">00</div><div class="colon">:</div>'
          +   '<div id="cdt-seconds">00</div>'
          + '</div>'
          + '<div class="countdown-time-name">'
          +   '<div>дней</div>'
          +   '<div>часов</div>'
          +   '<div>минут</div>'
          +   '<div>секунд</div>'
          + '</div>'
        + '</div>');
    function runSetTime(){
      var t = Date.parse(deadline) - Date.parse(new Date());
      var days    = Math.floor( t/(1000*60*60*24) );
      var hours   = Math.floor( (t/(1000*60*60)) % 24 );
      var minutes = Math.floor( (t/1000/60) % 60 );
      var seconds = Math.floor( (t/1000) % 60 );
      var returnTime = {
        'days'    : (days < 10) ? '0' + days : days,
        'hours'   : (hours < 10) ? '0' + hours : hours,
        'minutes' : (minutes < 10) ? '0' + minutes : minutes,
        'seconds' : (seconds < 10) ? '0' + seconds : seconds
      };
      if (t >= 0) {
        document.getElementById('cdt-days').innerHTML = returnTime.days;
        document.getElementById('cdt-hours').innerHTML = returnTime.hours;
        document.getElementById('cdt-minutes').innerHTML = returnTime.minutes;
        document.getElementById('cdt-seconds').innerHTML = returnTime.seconds;
      } else {
        clearInterval(interval);
      }
    };
    runSetTime();
    var interval = setInterval(runSetTime, 1000);
    var $countdown = document.getElementsByClassName('countdown')[0];
    if (!$countdown.classList.contains('active')) {
      $countdown.classList.add('active');
      $countdown.setAttribute('data-function', arguments.callee.name + '()');
    }
  }
  // countdownRun();




  // слайдер партнеров
  // http://kenwheeler.github.io/slick/
  function sliderPartners() {
    var $galleryBlock = $('.partners');
    $galleryBlock.slick({
      infinite: true,
      variableWidth: false,
      draggable: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<div class="slick-prev" title="назад"></div>',
      nextArrow: '<div class="slick-next" title="вперед"></div>',
      responsive: [
        {
          breakpoint: 788,
          settings: {
            unslick: true
          }
        }
      ]
    }).addClass('show');
  }
  $('#queuePartners').after('<div class="partners"></div>');
  var $queuePartnersA = $('#queuePartners a');
  function renderSliderPartners(){
    if ($queuePartnersA.length%4 > 0) {
      var lengthItemSlide = (($queuePartnersA.length/4)+'')[0] * 1 + 1;
      for (var i = 0; i < lengthItemSlide; i++){
        $('.partners').append('<div class="item-slide"></div>');
      }
    } else {
      var lengthItemSlide = ($queuePartnersA.length/4);
      for (var i = 0; i < lengthItemSlide; i++){
        $('.partners').append('<div class="item-slide"></div>');
      }
    }
    var count = 4;
    for (var a = 0; a < $queuePartnersA.length; a++){
      var block = $queuePartnersA.eq(a);
      $('.partners .item-slide').eq((a/count+'')[0]*1).append(block);
    }
    sliderPartners();
    $('.partners').attr('data-function', arguments.callee.name + '()');
  }
  renderSliderPartners();


  // about-what
  $('.this-close').click(function(){
    var $this = $(this);
    if (!$this.hasClass('hide')){
      $this.addClass('hide').next('.text').slideUp();
    } else {
      $this.removeClass('hide').next('.text').slideDown();
    }
  });


  // Слайдер прошедших событий
  function sliderPastEvents() {
    var $galleryBlock = $('.slide-past-events');
    $galleryBlock.slick({
      infinite: true,
      variableWidth: false,
      draggable: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<div class="slick-prev" title="назад"></div>',
      nextArrow: '<div class="slick-next" title="вперед"></div>',
      responsive: [
        {
          breakpoint: 788,
          settings: {
            draggable: true
          }
        }
      ]
    }).addClass('show');
    $galleryBlock.attr('data-function', arguments.callee.name + '()');
  }
  sliderPastEvents();

   // слайдер партнеров
  // http://kenwheeler.github.io/slick/

  /*function sliderPartners() {
    var $galleryBlock = $('.partners');
    $galleryBlock.slick({
      infinite: true,
      variableWidth: false,
      draggable: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<div class="slick-prev" title="назад"></div>',
      nextArrow: '<div class="slick-next" title="вперед"></div>',
      responsive: [
        {
          breakpoint: 788,
          settings: {
            draggable: true
          }
        }
      ]
    }).addClass('show');
  }
  $('#queuePartners').after('<div class="partners"></div>');
  var $queuePartnersA = $('#queuePartners a');
  function renderSliderPartners(){
    if ($queuePartnersA.length%4 > 0) {
      var lengthItemSlide = (($queuePartnersA.length/4)+'')[0] * 1 + 1;
      for (var i = 0; i < lengthItemSlide; i++){
        $('.partners').append('<div class="item-slide"></div>');
      }
    } else {
      var lengthItemSlide = ($queuePartnersA.length/4);
      for (var i = 0; i < lengthItemSlide; i++){
        $('.partners').append('<div class="item-slide"></div>');
      }
    }
    var count = 4;
    for (var a = 0; a < $queuePartnersA.length; a++){
      var block = $queuePartnersA.eq(a);
      $('.partners .item-slide').eq((a/count+'')[0]*1).append(block);
    }
    sliderPartners();
    $('.partners').attr('data-function', arguments.callee.name);
  }
  renderSliderPartners();
  */

  //Our Brands
  if (isMobile == true) {
    $('.block-choice').click(function(){
      var bl = $(this).parents('.acmg-button-footer').find('.block-choice-open').attr('data-open');
      if (bl == undefined || bl == 'close') {
        $(this).parents('.acmg-button-footer').find('.block-choice-open').attr('data-open','open');
      } else {
        $(this).parents('.acmg-button-footer').find('.block-choice-open').attr('data-open','close');
      }
    });
  }


  $('#additional_schedule_btn').on('click', function(e){
    e.preventDefault();
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    $('#main_schedule').hide();
    $('#additional_schedule').show();
  });

  $('#main_schedule_btn').on('click', function(e){
    e.preventDefault();
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    $('#additional_schedule').hide();
    $('#main_schedule').show();
  });

  /*
  $('#additional_schedule_btn').on('click', function(e){    // по клику на ссылку с #additional_schedule_btn
    e.preventDefault();
    $(this).addClass('vip');                        // у ее родственника добавлтся класс vip
  });

  $('#main_schedule_btn').on('click', function(e){  // по клику на ссылку с #main_schedule_btn
    e.preventDefault();
    $(this).parent().find('a').removeClass('vip'); // у ее родственника удаляеться класс vip
  });
  */

  $('#open-p').click(function(){
    $('.round-table .p-info').removeClass('hidden');
    $('.see-all').addClass('hidden');
  });

   $('#open-parnters').click(function(){
    $('.info-partners-item-second.hidden').removeClass('hidden');
    $('.view-all-partners').addClass('hidden');
  });

  function openModal() {
    //открытие.закрытие модального меню
    var toggleButton = document.querySelector('.toggle-main-menu');
    var modalMenu = document.querySelector('.main-header__body');

    toggleButton.addEventListener('click', function() {
      if (modalMenu.classList.contains('main-header__body--close')) {
        modalMenu.classList.remove('main-header__body--close');
        modalMenu.classList.add('main-header__body--open');
        toggleButton.classList.add('toggle-main-menu--close');
      } else {
        modalMenu.classList.add('main-header__body--close');
        modalMenu.classList.remove('main-header__body--open');
        toggleButton.classList.remove('toggle-main-menu--close');
      }
    })
  }
  openModal();

  function scrollToBlockForId(blockid){
      $('html, body').stop().animate({
        scrollTop: $('#' + blockid).offset().top
      }, 300);
      var url = '#' + blockid;
      history.pushState('', '', url);
      return false;
  }

$('.main-header .main-nav__item, .scroll-link').click(function(){
    var modalMenu = document.querySelector('.main-header__body');
    var toggleButton = document.querySelector('.toggle-main-menu');
    var dataSname = document.querySelector('.data-sname');
    // $('.left-fix-menu-content .item').removeClass('active');
    // $(this).addClass('active');
    modalMenu.classList.add('main-header__body--close');
    modalMenu.classList.remove('main-header__body--open');
    toggleButton.classList.remove('toggle-main-menu--close');
    scrollToBlockForId($(this).attr('data-sname'));
  });


  // if (window.location.hash != ''){
  //   setTimeout(function(){
  //     $('.left-fix-menu-content .item[data-sname="' + window.location.hash.slice(1) + '"]').click();
  //   },300);
  // }

  // $('[data-block="the-conference"] .see-program').click(function(){
  //   $('.left-fix-menu-content .item[data-sname="program"]').click();
  // });

  // $('.contest .buy .buy-now,[data-block="the-conference"] .buy-now').click(function(){
  //   $('.left-fix-menu-content .item[data-sname="price"]').click();
  });
