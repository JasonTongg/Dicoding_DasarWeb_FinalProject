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
let asideInfo2 = document.querySelector(".aside-info2");
let sertificationItems = document.querySelector(".sertification .items")

let objectSrc = ["./asset/blueMoon.png", "./asset/greenMoon.png", "./asset/orangeMoon.png", "./asset/pinkMoon.png", "./asset/purpleMoon.png", "./asset/object-1.png", "./asset/object-2.png", "./asset/star-1.png", "./asset/star-1.png", "./asset/star-1.png"];
let objectClass = ["blue-moon", "green-moon", "orange-moon", "pink-moon", "purple-moon", "object1", "object2", "star1", "star2", "star3"];

let asideItemTitle = ["Personal Information", "Contact", "Social Media"]
let asideItemP1 = ["Date of Birth: 2002, 27 March", "Email: Aboytong123@gmail.com", "Instagram: tongchenyi_"];
let asideItemP2 = ["Age: 20 years old", "WA: 085363655590", "Linkedin: Jason Tong"];

let sertifHref = ["https://drive.google.com/file/d/1feGsgg1aEBs-0pvsn9z2otBHE1gl05M2/view", "https://drive.google.com/file/d/1JtDQ4Bnxbz57Nf7r0wMkOD3HDBv2KqBM/view", "https://www.udemy.com/certificate/UC-8da6e6dd-d781-4b29-a293-4e95c3afdae3/", "https://drive.google.com/file/d/1KLnsh9Z__le6UfpI4cxPBcnXVgYUq-yi/view", "https://drive.google.com/file/d/1G-GJ94h5vd-CNM2Qy7rSFnpglEN3gRia/view", "https://drive.google.com/file/d/1oTMPCDf7LNCU830xwlZLH5GALD7pi9TL/view", "https://www.udemy.com/certificate/UC-95959138-e838-4777-83d6-44128baea7f0/", "https://www.udemy.com/certificate/UC-6723b1ce-4ec0-41b9-b50d-00172d542bae/", "https://drive.google.com/file/d/1fkZdUe1l6vGii0Ks7Yn8QIF6iLAQWuLW/view", "https://www.udemy.com/certificate/UC-6723b1ce-4ec0-41b9-b50d-00172d542bae/", "https://www.udemy.com/certificate/UC-883a136c-8120-44ad-bbdf-fde7e2a68f6f/", "https://drive.google.com/file/d/1Qc4tepVx6QgrErWmqCZEXJNFuAkSyv-v/view", "https://progate.com/path_certificate/c1b3575er3f42p", "https://drive.google.com/file/d/17kvnk-3GwQg1psVRAZpR4pfblGluQqa_/view"]
let sertifText = ["ReactJS (CodingStudio)", "ReactJS & Redux (Sololearn)", "Javascript (Udemy)", "Fullstack Bootcamp (Harisenin)", "ReactJS (BNCC)", "Fullstack Bootcamp (AnakTeknik)", "CSS & Sass (Udemy)", "Javascript (Udemy)", "Javascript (PeduliDigital)", "Responsive (CodingStudio)", "Javascript (Udemy)", "Web Develop (Peduli digital)", "Web Development (Progate)", "Mobile App"];

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

objectSrc.forEach((item, idx) => {
    let markup = document.createElement("img");
    markup.classList.add("moon");
    markup.classList.add(objectClass[idx]);
    markup.src = item;
    aboutPage.appendChild(markup);
});

asideItemTitle.forEach((item, idx) => {
    let markup = `
    <div class="aside-item">
        <h4>${item}</h4>
        <p>${asideItemP1[idx]}</p>
        <p>${asideItemP2[idx]}</p>
    </div>
    `;

    asideInfo2.insertAdjacentHTML("beforeend", markup);
})

sertifHref.forEach((item, idx) => {
    let markup = `
    <a
        href="${item}"
        target="_blank"
        >${sertifText[idx]}</a
    >
    `;

    sertificationItems.insertAdjacentHTML("afterbegin", markup);
})
