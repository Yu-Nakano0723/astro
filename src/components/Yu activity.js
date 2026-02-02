document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
