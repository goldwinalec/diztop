$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 10000,
    responsiveClass: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      770: {
        items: 2,
      },
      991: {
        items: 3,
      }
    }
  })

  $(".header__nav-toggle").on("click", function () {
    $("body").toggleClass("no-scroll");
    $(".header__menu").toggleClass("visible");
    $(".header__nav-line").toggleClass("active");
  });

  $(".header__menu-link").on("click", function () {
    $(".header__menu").toggleClass("visible");
    $(".header__nav-line").toggleClass("active");
    $("body").removeClass("no-scroll");
  });
  $(".top-btn").removeClass("visible");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".top-btn").addClass("visible");
    } else {
      $(".top-btn").removeClass("visible");
    }
  });

  $(".top-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
  $('.header__callback').click(function () {
    $('.modal').toggleClass('open');
    $('.modal__inner').toggleClass('open');
  })
});

function showAlert() {
  alert('Ваша заявка принята');
}