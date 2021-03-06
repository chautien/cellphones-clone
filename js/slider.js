$(document).ready(function () {
  $(".slider-for").slick({
    slide: ".slider-for-item",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: ".slider-nav",
    accessibility: true,
  });
  $(".slider-nav").slick({
    slide: ".slider-nav-item",
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
  });
});
