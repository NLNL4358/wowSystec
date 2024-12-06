$(document).ready(() => {
/*** Variable */
    /**
     * @param urlObject - 페이지 html의 주소를 가지고있는 객체
     */
    const urlObject = {
        HOME : "/index.html",
        CONTACT_URL : "/page/contact.html",
        INTRODUCTION_URL : "/page/introduction.html",
        PRODUCT_SERVICE_URL : "/page/productService.html",
    }
    const gnbUrlArray = [
        "CONTACT_URL",
        "INTRODUCTION_URL",
        "PRODUCT_SERVICE_URL"
    ]

/*** DOM */
    const gnb = document.querySelectorAll(".gnb");
    const logoButton = document.querySelector(".logoButton")

/*** Function */
    const goToPage = (target) => {
        switch(target){
            case "HOME" :
                window.location.href = urlObject.HOME
                break
            case "CONTACT_URL" :
                window.location.href = urlObject.CONTACT_URL
                break
            case "INTRODUCTION_URL" :
                window.location.href = urlObject.INTRODUCTION_URL
                break
            case "PRODUCT_SERVICE_URL" :
                window.location.href = urlObject.PRODUCT_SERVICE_URL
                break

        }
    }

/*** Event */
    gnb.forEach((element, index) => {
        element.addEventListener("click", () => {
            goToPage(gnbUrlArray[index])
        })
    });
    logoButton.addEventListener("click", () => {
        goToPage("HOME")
    })

/*** Init */
});
