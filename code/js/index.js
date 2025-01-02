$(document).ready(() => {
  /*** Variable */
  /**
   * @param urlObject - 페이지 html의 주소를 가지고있는 객체
   */
  const urlObject = {
    HOME: "/index.html",
    INTRODUCTION_URL: "/page/introduction.html",
    PRODUCT_SERVICE_URL: "/page/productService.html",
    CONTACT_URL: "/page/contact.html",
  };
  const gnbUrlArray = [
    "INTRODUCTION_URL",
    "PRODUCT_SERVICE_URL",
    "CONTACT_URL",
  ];

  /*** DOM */
  const gnb = document.querySelectorAll(".gnb");
  const logoButton = document.querySelector(".logoButton");
  const header = document.querySelector(".header");
  const snbWrap = document.querySelector(".snbWrap");

  /*** Function */
  const goToPage = (target) => {
    switch (target) {
      case "HOME":
        window.location.href = urlObject.HOME;
        break;
      case "CONTACT_URL":
        window.location.href = urlObject.CONTACT_URL;
        break;
      case "INTRODUCTION_URL":
        window.location.href = urlObject.INTRODUCTION_URL;
        break;
      case "PRODUCT_SERVICE_URL":
        window.location.href = urlObject.PRODUCT_SERVICE_URL;
        break;
    }
  };

  const snbControl = (toggle) => {
    switch (toggle) {
      case "on":
        snbWrap.classList.add("on");
        break;
      case "off":
        snbWrap.classList.remove("on");
        break;
    }
  };

  /*** Event */
  gnb.forEach((element, index) => {
    element.addEventListener("click", () => {
      goToPage(gnbUrlArray[index]);
    });
  });
  logoButton.addEventListener("click", () => {
    goToPage("HOME");
  });
  header.addEventListener("mouseover", () => {
    snbControl("on");
  });
  header.addEventListener("mouseout", () => {
    snbControl("off");
  });
  /*** Init */
});
