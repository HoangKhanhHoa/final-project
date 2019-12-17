/* eslint-disable no-undef */
$(document).ready(function() {
  // File upload name and count
  $('.js-input-file').change(function() {
    var file = $(this)[0].files[0].name;
    var count = $(this)[0].files.length;
    if (count > 1) {
      $(this).next().children('span').text(count + ' files selected');
    } else {
      $(this).next().children('span').text(file);
    }
  });

  // Date-picker
  $('.js-date-picker').each(function() {
    var view = $(this).attr('data-view');
    var minimumView = $(this).attr('data-min-view');
    if (typeof(view) !== 'undefined') {
      $(this).datetimepicker({
        language: 'en',
        startView: parseInt(view),
      });
    }
    else if (typeof(minView) !== 'undefined') {
      $(this).datetimepicker({
        language: 'en',
        autoclose: true,
        minView: parseInt(minimumView),
      });
    }
    else {
      $(this).datetimepicker({
        language: 'en',
        autoclose: true,
      });
    }
  });

  // Select2
  $('.js-select2').select2({
    width: '100%'
  });

  //- Control Right Sidebar

  $(document).mouseup(function(e) {
    var targetShow = e.target.closest('.js-show-sidebar-right');
    var targetSidebar = e.target.closest('.js-sidebar-right');
    if (targetShow !== null) {
      $().dropdown('hide');
      $('.js-sidebar-right').toggleClass('sidebar-right--show');
    }
    else if (targetSidebar === null) {
      $('.js-sidebar-right').removeClass('sidebar-right--show');
    }
  });

  //- Hide/Show Chatbox

  $('.js-chat-box').on('click', function() {
    $('.js-chat-window').addClass('chat__window--show');
    $('.js-chat-contact').addClass('chat__contacts--hide');
  });

  $('.js-chat-back').on('click', function() {
    $('.js-chat-window').removeClass('chat__window--show');
    $('.js-chat-contact').removeClass('chat__contacts--hide');
  });

  //- Init Perfect Scrollbar

  function createScroll(ele) {
    var eleScroll = document.querySelectorAll(ele);
    for (var i = 0; i < eleScroll.length; i++) {
      // eslint-disable-next-line no-undef
      new PerfectScrollbar(eleScroll[i], {
        wheelPropagation: false,
      });
    }
  }

  createScroll('.js-scroll-notification, .js-scroll-chat, .js-scroll-chatbox, .js-scroll-todo, .js-scroll-setting, .js-sidebar-menu');

  //- Menu Collapse

  $('[data-toggle="collapse"]').on('click', function() {
    var isShow = $(this).attr('aria-expanded');
    var hasChildOpen = $(this).parent().find('.child-two').siblings('.nav__link').attr('aria-expanded');
    if (isShow === 'false') {
      if (hasChildOpen === 'true') {
        $(this).parent().find('.child-two').slideUp();
        $(this).parent().find('.child-two').siblings('.nav__link').attr('aria-expanded', false);
      }

      $(this).parent().siblings().children('.sub-menu').slideUp();
      $(this).parent().siblings().children('.nav__link').attr('aria-expanded', false);
      $(this).next().slideDown();
      $(this).attr('aria-expanded', true);
    }

    if (isShow === 'true') {
      $(this).attr('aria-expanded', false);
      $(this).next().slideUp();
    }
  });

  $(window).on('load', function() {
    if ($('.nav__link--active').length && $('.nav__link--active').next().length) {
      $('.nav__link--active').next().slideDown();
      $('.nav__link--active').attr('aria-expanded', true);
    }
  })

  //- Onload and Resize Init Chart

  $(window).on('load resize', function() {
    chartMain('#main-chart');
    chartCircle('#top-sales');
    chartBar('#bar-chart1');

    var screenWidth = $(this).width();
    if (screenWidth >= 768) {
      $('.js-backdrop').removeClass('backdrop--show');
      $('.sidebar-left').removeClass('sidebar-left--show');
    }
  });

  //- Scroll to Top

  $(window).on('scroll', function() {
    var scrollPosition = $(this).scrollTop();
    if (scrollPosition > 100) {
      $('.js-scroll-top').fadeIn();
    } else {
      $('.js-scroll-top').fadeOut();
    }
  });
  $('.js-scroll-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });

  //- Init Calendar

  var p = new Date, h = p.getFullYear(), f = p.getMonth(), g = [h + '-' + (f + 1) + '-16', h + '-' + (f + 1) + '-20']
  $('#home-calendar').datepicker({
    showOtherMonths: !0,
    selectOtherMonths: !0,
    beforeShowDay: function(e) {
      var t = e.getMonth(),
        o = e.getDate(),
        i = e.getFullYear();
      return -1 != $.inArray(i + '-' + (t + 1) + '-' + o, g) ? [!0, 'has-events', 'This day has events!'] : [!0, '', '']
    },
    afterShow: function(e) {
      var t;
      t = e.dpDiv, 6 == $('tbody tr', t).length ? t.addClass('ui-datepicker-6rows') : t.removeClass('ui-datepicker-6rows')
    }
  });

  //- Init Map

  if ($('#map-widget').length) {
    $('#map-widget').vectorMap({
      map: 'world_en',
      backgroundColor: null,
      color: '#4285f4',
      hoverOpacity: .7,
      selectedColor: '#4285f4',
      enableZoom: true,
      showTooltip: true,
      values: {
        ru: '14',
        us: '14',
        ca: '10',
        br: '10',
        au: '11',
        uk: '3',
        cn: '12'
      },
      scaleColors: ['#4285f4', '#71a3f6'],
      normalizeFunction: 'polynomial'
    });
  }

  //- Show/Hide Menu Responsive

  $('.js-left-sidebar-control').click(function() {
    $('.sidebar-left').addClass('sidebar-left--show');
    $('.js-backdrop').addClass('backdrop--show');
  });
  $('.js-backdrop').click(function() {
    $('.sidebar-left').removeClass('sidebar-left--show');
    $('.js-backdrop').removeClass('backdrop--show');
  });

  //- CountUp

  $('.js-countUp').each(function() {
    var start = 0;
    var end = $(this).attr('data-end')
    var suffix = $(this).attr('data-suffix') ? $(this).attr('data-suffix') : '';
    var duration = 2.5;

    new CountUp($(this).get(0), start, end, 0, duration, {
      suffix: suffix
    }).start();
  });

  //- Spinner Loading

  $('.js-loading-state').click(function() {
    var loadWrapper = $(this).closest('.widget');
    var loadContainer, spinnerLoad;
    if (loadWrapper.hasClass('loading-available')) {
      loadContainer = loadWrapper;
      spinnerLoad = loadContainer.find('.spinner-load');
    }
    else {
      loadContainer = loadWrapper.find('.loading-available');
      spinnerLoad = loadContainer.find('.spinner-load');
    }

    if (loadContainer && spinnerLoad) {
      spinnerLoad.css('display', 'block');
      loadContainer.addClass('loading-available--now');
    }

    var timeOut = setTimeout(function() {
      spinnerLoad.removeAttr('style');
      loadContainer.removeClass('loading-available--now');
      clearTimeout(timeOut);
    }, 2500);
  });

  //- Send Chat Message

  $('.js-send-message').click(function() {
    var mess = $('.js-input-chat').val();
    if (typeof(mess) !== 'undefined' && mess !== '') {
      var ele = '<li class="self"><div class="msg">' + mess + '</div></li>';
      $('.js-chatbox').append(ele);
      $('.js-input-chat').val('');
      var scrollEnd = $('.js-chatbox').height();
      $('.js-scroll-chatbox').animate({
        scrollTop: scrollEnd
      }, 900);
    }
  });

  $('.js-input-chat').keyup(function(e) {
    if (e.which === 13) {
      $('.js-send-message').click();
    }
  });

  //- Delete Todo

  $('.js-delete-todo').on('click', function() {
    $(this).parent('.todo__item').remove();
  })
});
