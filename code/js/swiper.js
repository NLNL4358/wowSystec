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
            whiteClassChanger("white");
            break;
          case 1:
            whiteClassChanger("white");
            break;
          default:
            whiteClassChanger("default");
            break;
        }
      }
    },
  },
});
/**
 * white 클래스 컨트롤러
 * 대상 header, swiperNavigation 의 클래스에 white를 추가하거나 제거
 * @why - 배경이 어두울땐 white로 밝을땐 default로 색을 바꿔주며 가시성 확보를 위해 필요
 * @param {*} toggle - "white" or "default" 가 들어옴
 */
const whiteClassChanger = (toggle) => {
  if (toggle === "white") {
    document.querySelector(".header").classList.add("white");
    document.querySelector(".swiperNavigationWrap").classList.add("white");
  } else {
    document.querySelector(".header").classList.remove("white");
    document.querySelector(".swiperNavigationWrap").classList.remove("white");
  }
};
/**
 * Swiper Navigation의 클래스 컨트롤러
 * @param {*} index 
 */
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
    clickable: true, // 버튼 클릭 여부
  },

  // navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


/*** Event */
swiperNavigation.forEach((item,index) => {
  item.addEventListener("click", () => {
    swiper.slideTo(index, 1000, false);
  })
})
