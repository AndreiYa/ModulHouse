$('.header_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  arrows: false,
});
$('.reviews_slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 720,
      settings: "unslick",
      slidesToShow: 1,
      arrows: false,
    }
  ]
});