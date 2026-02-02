const grid = new Swiper('.swiper-slide img', {
  loop: true,
  effect: 'fade',
  speed: 1000,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

