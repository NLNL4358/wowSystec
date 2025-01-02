/*** DOM */
const swiperNavigation = document.querySelectorAll(".swiperNavigation");

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

  // 추가 Effect
  // effect: "creative",
  // creativeEffect: {
  //   prev: {
  //     shadow: false,
  //     translate: [0, "-100%", -1],
  //   },
  //   next: {
  //     translate: [0, "100%", 0],
  //   },
  // },

  on: {
    slideChange: () => {
      console.log(this?.swiper?.realIndex);
      if (this?.swiper?.realIndex !== undefined) {
        swiperNavigationChanger(this?.swiper?.realIndex);

        switch (this.swiper.realIndex) {
          case 0:
            headerClassChanger("white");
            break;
          case 1:
            headerClassChanger("white");
            break;
          default:
            headerClassChanger("default");
            break;
        }
      }
    },
  },
});
const headerClassChanger = (toggle) => {
  if (toggle === "white") {
    document.querySelector(".header").classList.add("white");
    document.querySelector(".swiperNavigationWrap").classList.add("white");
  } else {
    document.querySelector(".header").classList.remove("white");
    document.querySelector(".swiperNavigationWrap").classList.remove("white");
  }
};
const swiperNavigationChanger = (index) => {
  swiperNavigation.forEach((item) => {
    item.classList.remove("on");
  });
  swiperNavigation[index].classList.add("on");
};

var subSwiper = new Swiper(".subSwiper", {
  spaceBetween: 0,
  loop: true, // 무한 루프

  pagination: {
    el: ".swiper-pagination",
  },

  // navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
