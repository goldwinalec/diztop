$(document).ready(function(){
    $('.feedback__items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
     responsive: [
    {
      breakpoint: 991,
      settings: {
        centerMode: true,
        centerPadding: '15px',
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });

    $(".header__nav-toggle").on("click", function () {
    $("body").toggleClass("no-scroll");
    $(".header__menu").toggleClass("visible");
    $(".header__nav-line").toggleClass("active");
 
    });

    $(".header__menu-link").on("click", function () {
        $(".header__menu").toggleClass("visible");
        $(".header__nav-line").toggleClass("active");
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
    $('.header__callback').click(function (){
        $('.modal').toggleClass('open');
        $('.modal__inner').toggleClass('open');
    })
});

function showAlert(){
    alert('Ваша заявка принята');
}