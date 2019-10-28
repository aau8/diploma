$(document).ready(function() {
  var buttonN = $('#buttonNavbar');
  var buttonS1 = $('#buttonService1');
  var buttonS2 = $('#buttonService2');
  var buttonS3 = $('#buttonService3');
  var buttonS4 = $('#buttonService4');
  var buttonS5 = $('#buttonService5');
  var buttonS6 = $('#buttonService6');
  var modal = $('#modal');
  var close = $('#close');
  var closeSuc = $('#close-success');
  var success = $('#form-success');
// скрипты для кнопок для перехода к модальному окну (начало)
  buttonN.on('click', function() {
    modal.addClass('modal__active');
  })
  buttonS1.on('click', function() {
    modal.addClass('modal__active');
  })
  buttonS2.on('click', function() {
    modal.addClass('modal__active');
  })
  buttonS3.on('click', function() {
    modal.addClass('modal__active');
  })
  buttonS4.on('click', function() {
    modal.addClass('modal__active');
  })
  buttonS5.on('click', function() {
    modal.addClass('modal__active');
  })
  buttonS6.on('click', function() {
    modal.addClass('modal__active');
  })
  close.on('click', function() {
    modal.removeClass('modal__active');
  })
// скрипты для кнопок для перехода к модальному окну (конец)

// ----------начало скрипта для слайдера в header (первый, второй блок)---------
  $('.slider').slick({
    dots: true,
    // autoplay: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 420,
    //     settings: {
    //       // fade: false,
    //       // speed: 500,
    //       // variableWidth: false,
    //     }
    //   },
    // ]
  });
// ----------конец скрипта для слайдера в header (первый, второй блок)---------

// ----------начало скрипта для слайдера в блоке ОТЗЫВЫ---------
  $('.reviews-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    dotsClass: 'slick-dots reviews-dots',
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          // variableWidth: false,
        }
      },
    ]
  });
// ----------конец скрипта для слайдера в блоке ОТЗЫВЫ---------

// ----------начало скриптов для плавного перехода к блокам
  // скрипт для блока УСЛУГИ
  $("#panelService").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $("#service").offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  // скрипт для блока ЦЕНЫ  
  $("#panelPrice").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $("#price").offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  // скрипт для блока ОТЗЫВЫ
  $("#panelReviews").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $("#reviews").offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  // скрипт для блока НОВОСТИ
  $("#panelNews").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $("#news").offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  // скрипт для блока КОНТАКТЫ
  $("#panelContacts").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $("#contacts").offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
// ----------конец скриптов для плавного перехода к блокам










// ----------начало скриптов для плавного перехода к блокам
  // скрипт для блока УСЛУГИ
  $("#burService").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $("#service").offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  // скрипт для блока ЦЕНЫ  
  $("#burPrice").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $("#price").offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  // скрипт для блока ОТЗЫВЫ
  $("#burReviews").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $("#reviews").offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  // скрипт для блока НОВОСТИ
  $("#burNews").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $("#news").offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  // скрипт для блока КОНТАКТЫ
  $("#burContacts").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $("#contacts").offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
// ----------конец скриптов для плавного перехода к блокам













// ----------начало скриптов для стрелки вверх
  $("#arrow").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $("#navbar").offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          if ($('#arrow').is(':hidden')) {
              $('#arrow').css({opacity : 1}).fadeIn('slow');
          }
      } else { $('#arrow').stop(true, false).fadeOut('fast'); }
  });
  $('#arrow').click(function() {
      $('html, body').stop().animate({scrollTop : 0}, 300);
  });
// ----------конец скриптов для стрелки вверх

  /* маска для телефона */
  $('#modalPhone').mask('+7 (999) 999-99-99');
  $('#requestPhone').mask('+7 (999) 999-99-99');

// скрипт для отправки формы модального окна (для кнопок)
  $('#modalForm').on('submit', function name(event) {
    event.preventDefault();
    const modalName = document.getElementById('modalName'),
      modalPhone = document.getElementById('modalPhone');

      if (modalName.value !== '' && modalPhone.value !== '') {
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: $(this).serialize(),
          success: function (response) {
            // console.log('Прибыли данные: ' + response);
            $('#modalForm')[0].reset();
            success.addClass('modal__active');
            // modal.addClass('modal__active');
            // $("thanks.php").text(response)
          },
          error: function(jqXHR, textStatus, errorThrown) {
            // console.error(jqXHR + " " + textStatus);
          }
        });

      } else {
        // console.log('Введите данные');
      };
      closeSuc.on('click', function() {
      success.removeClass('modal__active');
    });
  });
// конец скрипта для отправки формы модального окна (для кнопок)

// начало скрипта для отправки формы модального окна (в map)
  $('#requestForm').on('submit', function name(event) {
    event.preventDefault();
    const modalName = document.getElementById('requestName'),
      modalPhone = document.getElementById('requestPhone');

      if (modalName.value !== '' && modalPhone.value !== '') {
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: $(this).serialize(),
          success: function (response) {
            // console.log('Прибыли данные: ' + response);
            $('#requestForm')[0].reset();
            success.addClass('modal__active');
            // modal.addClass('modal__active');
            // $("thanks.php").text(response)
          },
          error: function(jqXHR, textStatus, errorThrown) {
            // console.error(jqXHR + " " + textStatus);
          }
        });

      } else {
        // console.log('Введите данные');
      };
      closeSuc.on('click', function() {
      success.removeClass('modal__active');
    });
  });
// конец скрипта для отправки формы модального окна (в map)
});