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
        centerPadding: '10px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 770,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
    });
});

let menuToggle = document.querySelector('.header__nav-toggle');
let menu = document.querySelector('.header__menu');
let lines = document.querySelectorAll('.header__nav-line');

menuToggle.addEventListener('click', function (event) {
    event.preventDefault();
    menu.classList.toggle('visible');
    for (let i = 0; i < lines.length; i++) {
      lines[i].classList.toggle('active');
    };
});