var swiper = new Swiper(".swiper", {
    direction: "vertical", // 수직방향
    grabCursor: false, // 그랩 커서 false
    loop: true, // 무한 루프

    touchRatio: 0,//드래그 금지
    
    // 마우스 휠
    speed: 800,
    mousewheel: {
        invert : false,
    },

    // pagination
    pagination: {
        el: ".swiper-pagination",
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