/*** DOM */
const swiperNavigation = document.querySelectorAll(".swiperNavigation");
const swiper2ScrollOuter = document.querySelector(".swiper2ScrollOuter");
const swiper2ScrollInner = document.querySelector(".swiper2ScrollInner");

/*** 변수 */
let scrollX = 0;

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

/**
 * 페이지가 로드됐을때 '?index=...' 를 감지하는 함수
 * @returns index의 번호를 리턴
 */
const getTargetSlide = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("index");
};

/***
 * 페이지 로드됐을때 위의 getTargetSlide 를 호출하며 slide 이동하는 함수
 */
const moveSlideWhenInit = () => {
  const targetSlide = getTargetSlide();
  if (targetSlide) {
    swiper.slideTo(targetSlide, 1000, false); // target 값이 존재하면 해당 슬라이드로 이동
    history.replaceState(null, null, window.location.pathname); // target 파라미터를 제거
  }
};

/*** Event */
swiperNavigation.forEach((item, index) => {
  item.addEventListener("click", () => {
    swiper.slideTo(index, 1000, false);
  });
});

swiper2ScrollOuter.addEventListener("wheel", (e) => {
  e.preventDefault();
  e.stopPropagation(); // Swiper로 이벤트 전달 방지

  /* max : 40% | min : 0% */

  if (e.deltaY > 0 && scrollX < 40) {
    /* 휠 감지 : deltaY가 양수 -> 아래방향 | 음수 -> 위 방향 */
    scrollX = scrollX + 5;
  } else if (e.deltaY < 0 && scrollX > 0) {
    scrollX = scrollX - 5;
  }

  swiper2ScrollInner.style.transform = `translate(-${scrollX}%)`;
});

/*** init */
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

moveSlideWhenInit();

/*** global */
window.swiper = swiper;
