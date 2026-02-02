document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.swiper', {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
