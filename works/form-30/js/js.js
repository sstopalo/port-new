(function($){

  var isMobile =  /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
  var dWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  var $bannerBlock = $('.top-bn');
  var tbh = $bannerBlock.height();
  (tbh == null) ? tbh = 0 : tbh = tbh;


  function fixMenuOrNoFixMenu() {
    function fixMenu() {
      $('.header-menu').addClass('fix');
      $('body').css('padding-top', $('.header-menu').outerHeight(true) + 'px');
    }
    $(document).scroll(function () {
      tbh = $bannerBlock.height();
      if ($(document).scrollTop() >= tbh) {
        fixMenu();
      } else {
        $('.header-menu').removeClass('fix fix-admmenu').css('top', '');
        $('body').css('padding-top', '0');
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


  var $blBnInText = $('.content')[0];
  var mobActive = 0;
  if (isMobile != true || isMobile == true && screen.width >= 768 ) {
    mobActive = 0;
  } else {
    mobActive = 1;
  }
  $(document).scroll(function () {
    var hMHeight = $('.header-menu').outerHeight();
    //var bHeught = $bannerBlock.height();
    var padTop = parseFloat($('.content-block:first').css('padding-top'));
    var lFmC = $('.left-fix-menu-content').outerHeight();
    //var st = $(this).scrollTop();
    var Ra = $blBnInText.getBoundingClientRect();
    //var indent = 188;
    var indent = 200;
    if (mobActive == 0) {
      if ( Ra.top + padTop - hMHeight - 30  < 0 ) {
        $('.left-fix-menu-content').addClass('fixed').css({
          'top' : hMHeight + 30 + 'px'
        });
        if (Ra.bottom - lFmC - indent < 0) {
          $('.left-fix-menu-content').css({
            'position' : 'absolute',
            //'top' : 'auto',
            //'bottom' : '-' + ($('.content:first').outerHeight() + $('.contest').height() - lFmC - $('.content.bottom').outerHeight()) + 'px'
            'top' : ($('.content.center').outerHeight() - lFmC - indent) + 'px'
          });
        } else {
          $('.left-fix-menu-content').css({
            'position' : '',
            //'top' : '',
            'bottom' : ''
          });
        }
      } else {
        $('.left-fix-menu-content').removeClass('fixed').css({
          'top' : ''
        });
      }
    }
  });



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


  var cach = Math.random();
  $.getJSON("http://www.forbes.ru/get_currency_list?cach="+cach, function(data){
    $('.forbes_currencies .dollar').html('<span>$</span>'+ parseFloat(data.res.DOLLAR.value).toFixed(2));
    $('.forbes_currencies .evro').html('<span>€</span>'+ parseFloat(data.res.EURO.value).toFixed(2));
    $('.forbes_currencies .curr_list .curr_item').eq(0).html('<span class="curr_title">MOEX</span>'+ data.res.ММВБ.value);
    $('.forbes_currencies .curr_list .curr_item').eq(1).html('<span class="curr_title">BRENT</span>'+ data.res.BRENT.value);
  });


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

  $('.fileloader .fileloader-choice').click(function(e) {

  var parent = $(e.target).parents('.fileloader');

    $('.file-input1', parent).trigger('click');

    $('.file-input1', parent).change(function(){
        $('.choice-val1', parent).text(this.value.replace(/C:\\fakepath\\/i, ''));
        $('.choice-title1', parent).hide();
        $('.close-btn1', parent).show();
        $('.choice-btn1', parent).hide();
    });
    $('.close-btn1', parent).click(function(){
        $('.choice-val1', parent).text(this.value.replace());
        $('.close-btn1', parent).hide();
        $('.choice-btn1', parent).show();
        $('.choice-title1', parent).show();
    });
  });
  var selectedCategory = '0';
  $('.select-category').select2({
      customClass: "myselectbox",
      placeholder: "Выбрать категорию",
      allowClear : false,
      minimumResultsForSearch: -1,
      width: 'resolve'
  }).on("select2:select", function (e) {
      selectedCategory = $(e.currentTarget).val();
  }) ;

  $('#btn-show-form-forbes30').on('click', function(e){
      e.preventDefault();
      $('#btn-show-form-forbes30').hide();
      $('.form-forbes30').show();
      $('.form-forbes30').children('.fieldset30').eq(0).show();
  });

  $('input, select', '#form-forbes30').change(function(e) {
    $('.input-error', $(this).parent()).remove();
  });

  $('.js-step-next').on('click', function(e) {
      e.preventDefault();

      var $fieldSet = $(this).parents('fieldset');

      if (!validateFieldset($fieldSet)) {
        return;
      }

      if (selectedCategory != 0) {
          category = $('.form-forbes30').find($('#input-section-' + selectedCategory));
          category.show();
          category.find('input').removeAttr('disabled');
          $('.main-fieldset').hide();
      }
  });

  function validateFieldset($fieldSet) {
      var valid = true;

      $('.input-error', $fieldSet).remove();

      $('input, select', $fieldSet).each(function(index, element) {
          if (!$(element).val()) {
            valid = false;
            showError($(element), 'укажите значение');
          } else if (!$(element)[0].checkValidity()) {
            valid = false;
            showError($(element), 'некорректное значение');
          }
      });

      return valid;
  }

  function showError($element, message) {
      $element.parent().append('<div class="input-error">' + message + '</div>');
  }

  $('#form-forbes30 input[type=submit]').click(function(e) {
      e.preventDefault();

      var $fieldSet = $(this).parents('fieldset');
      var form = $('#form-forbes30');
      var newForm = new FormData(form[0]);

      if (!validateFieldset($fieldSet)) {
        return;
      }

      $('.form-load-overlay').addClass('form-load-overlay-showed');

      $.ajax({
          type: form.attr('method'),
          url: form.attr('action')+'ajax=1',
          data: newForm,
          contentType: false,
          processData: false,
          dataType: 'json'
      }).success(function(data) {
          if (data.result) {
              $('.fieldset30:not(:first)').remove();
              $('.fieldset30 .fieldset-one').empty();
              $('.fieldset30 .fieldset-one').append('<h3 class="article-about__contestant-title">Заявка принята</h3>');
              $('.fieldset30').css('display', 'block');
          } else {
              var fieldsWithError = [];
              for (var field in data.errors) {
                  // skip loop if the property is from prototype
                  if (!data.errors.hasOwnProperty(field)) continue;

                  var errorMessage = data.errors[field];
                  showError($('input[name="' + field + '"]'), errorMessage);
                  fieldsWithError.push(field);
              }

              // hide all fieldset
              $('fieldset').hide();

              // show first fieldset with errors
              $('fieldset').each(function (index, element) {
                  var $currentFieldSet = $(element);

                  for (i = 0; i < fieldsWithError.length; i++) {
                      if ($('input[name="' + field + '"], select[name="' + field + '"]', $currentFieldSet).length > 0) {
                          $currentFieldSet.show();
                          return false;
                      }
                  }
              });
          }
        })
        .fail(function(jqXHR, textStatus) {
          alert( "error" );
        })
        .always(function() {
          $('.form-load-overlay').removeClass('form-load-overlay-showed');
        });
  });

  $('.phone').mask('+7 (999) 999 - 9999');

  $('.datepicker').datepicker({
      language: 'ru-RU',
      weekStart: 1,
      format: 'dd.mm.yyyy'
  }).mask('99.99.9999');

})(jQuery);
