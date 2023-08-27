$(function () {
  var swiper = new Swiper(".related_swiper", {
    grabCursor: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    speed: 1000,
    freeMode: true,
    breakpoints: {
      769: {
        spaceBetween: 20,
      },
      1580: {
        spaceBetween: 20,
      },
    },
  });
});
