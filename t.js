import "bootstrap"

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navtoggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navtoggle.addEventListener("click",function(){
   const linksHeight = links.getBoundingClientRect().height;
   const containerHeight = linksContainer.getBoundingClientRect().height;
   if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`;
   } else{
    linksContainer.style.height = 0;
   }
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    } else{
        navbar.classList.remove("fixed-nav");
    }
    if(scrollHeight > 500){
        console.log("hi");
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }

});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position = navHeight;
        }
        if(navHeight > 82) {
            position = position + counterHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.styel.height =0;
    });
});
