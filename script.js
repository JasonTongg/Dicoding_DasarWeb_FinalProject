let homeNav = document.querySelector(".homeNav");
let aboutNav = document.querySelector(".aboutNav");
let profileNav = document.querySelector(".profileNav");
let footerNav = document.querySelector(".footerNav");
let homePage = document.querySelector("#hero");
let aboutPage = document.querySelector("#main #content");
let asidePage = document.querySelector("#main #aside");
let footerPage = document.querySelector("footer");
let navbar = document.querySelector("#header-navbar");
let main = document.querySelector("#main");

homeNav.addEventListener("click", () => {
    homePage.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
})

aboutNav.addEventListener("click", () => {
    aboutPage.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
})

profileNav.addEventListener("click", () => {
    asidePage.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
})

footerNav.addEventListener("click", () => {
    footerPage.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})

window.addEventListener("scroll", () => {
    let top = main.getBoundingClientRect().top;
    console.log(main.getBoundingClientRect().top);
    if(top-97<=0){
        navbar.style.position = "fixed";
    }
    else{
        navbar.style.position = "static";
    }
})
