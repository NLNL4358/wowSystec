var swiper = new Swiper(".mainSwiper", {
  direction: "vertical", // 수직방향
  grabCursor: false, // 그랩 커서 false
  loop: true, // 무한 루프

  touchRatio: 0, //드래그 금지

  // 마우스 휠
  speed: 800,
  mousewheel: {
    invert: false,
  },

  // pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // 추가 Effect
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: false,
      translate: [0, "-100%", -1],
    },
    next: {
      translate: [0, "100%", 0],
    },
  },
});

var swiper = new Swiper(".subSwiper", {
  spaceBetween: 0,
  loop: true, // 무한 루프

  pagination: {
    el: ".subSwiper-pagination",
    clickable: true,
  },
});
