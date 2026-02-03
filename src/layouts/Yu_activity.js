const swiper = new Swiper('.swiper', {
  loop: true,
  effect: 'slide',
  fadeEffect: { crossFade: true },
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  fadeEffect: {
    crossFade: true,
  },
});

