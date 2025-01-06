$(document).ready(() => {
  /*** Variable */
  /**
   * @param urlObject - 페이지 html의 주소를 가지고있는 객체
   */
  const urlObject = {
    HOME: "/index.html",
    INTRODUCTION_URL: "/page/introduction/introduction.html",
    PAS_EMBEDDED_URL : "/page/pas/PAS_embedded.html",
    PAS_SOLUTION_URL : "/page/pas/PAS_solution.html",
    PAS_CASE_URL : "/page/pas/PAS_case.html",
    TECH_INTRODUCTION_URL : "page/tech/Tech_introduction.html",
    TECH_DEVELOPMENT_URL : "page/tech/Tech_development.html",
    TECH_PATENT_URL : "page/tech/Tech_patent.html",
    CLIENT_CASE_URL : "page/client/Client_case.html",
    CLIENT_REVIEW_URL : "page/client/Client_review.html",
    CONTACT_URL: "/page/contact/contact.html",
  };


  /*** DOM */
  const gnb = document.querySelectorAll(".gnb");
  const logoButton = document.querySelector(".logoButton");
  const header = document.querySelector(".header");
  const snbWrap = document.querySelector(".snbWrap");
  const snb = document.querySelectorAll(".snb");
  const snbLi = document.querySelectorAll(".snb>li")
  const topButton = document.querySelector(".topButton");

  /*** Function */
  const goToPage = (target) => {
    switch (target) {
      case "HOME":
        window.location.href = urlObject.HOME;
        break;
      case "PAS_EMBEDDED_URL" :
          window.location.href = urlObject.PAS_EMBEDDED_URL;
          break;
      case "PAS_SOLUTION_URL" :
          window.location.href = urlObject.PAS_SOLUTION_URL;
          break;
      case "PAS_CASE_URL" :
          window.location.href = urlObject.PAS_CASE_URL;
          break;
      case "TECH_DEVELOPMENT_URL" :
          window.location.href = urlObject.TECH_DEVELOPMENT_URL;
          break;
      case "TECH_INTRODUCTION_URL" :
          window.location.href = urlObject.TECH_INTRODUCTION_URL;
          break;
      case "TECH_PATENT_URL" :
          window.location.href = urlObject.TECH_PATENT_URL;
          break;
      case "CLIENT_CASE_URL" :
          window.location.href = urlObject.CLIENT_CASE_URL;
          break;
      case "CLIENT_REVIEW_URL" :
          window.location.href = urlObject.CLIENT_REVIEW_URL;
          break;
      case "INTRODUCTION_URL":
        window.location.href = urlObject.INTRODUCTION_URL;
        break;
      case "CONTACT_URL":
        window.location.href = urlObject.CONTACT_URL;
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

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /*** Event */
  gnb?.forEach((element, index) => {
    element.addEventListener("click", () => {
      goToPage(element.dataset.url);
    });
  });
  snb?.forEach((element, index) => {
    element.addEventListener("mouseover", () => {
      gnb[index].classList.add("hover");
    });
    element.addEventListener("mouseout", () => {
      gnb[index].classList.remove("hover");
    });
  });
  snbLi?.forEach((item, index) => {
    item.addEventListener("click", () => {
      goToPage(item.dataset.url)
    })
  })
  logoButton?.addEventListener("click", () => {
    goToPage("HOME");
  });
  header?.addEventListener("mouseover", () => {
    snbControl("on");
  });
  header?.addEventListener("mouseout", () => {
    snbControl("off");
  });
  topButton?.addEventListener("click", () => {
    goTop();
  });
  /*** Init */
});
