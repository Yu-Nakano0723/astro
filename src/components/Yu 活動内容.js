const swiper = new swiper('.Swiper', {
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