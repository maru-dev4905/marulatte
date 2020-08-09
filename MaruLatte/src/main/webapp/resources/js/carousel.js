const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide a img");
const carouselSlide2 = document.querySelector(".carousel-slide2");
const carouselImages2 = document.querySelectorAll(".carousel-slide2 img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
let counter2 = 2;

const size = carouselImages[0].clientWidth;
const size2 = carouselImages2[0].clientHeight + 17;

const CAROUSEL_TIME = 3000;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
carouselSlide2.style.transform = "translateY(" + (-size2 * counter2) + "px)";

let intervalCarousel = setInterval(autoCarousel, CAROUSEL_TIME);    

nextBtn.addEventListener("click",()=>{
    clearInterval(intervalCarousel);
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter++;
    counter2++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px)";
    carouselSlide2.style.transform = "translateY(" + (-size2 * counter2) + "px)";

    intervalCarousel = setInterval(autoCarousel, CAROUSEL_TIME);
});

prevBtn.addEventListener("click",()=>{
    clearInterval(intervalCarousel);
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter--;
    counter2--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    carouselSlide2.style.transform = "translateY(" + (-size2 * counter2) + "px)";

    intervalCarousel = setInterval(autoCarousel, CAROUSEL_TIME);
});

carouselSlide.addEventListener("transitionend",()=>{
    if(carouselImages[counter].id === "lastClone"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
    if(carouselImages[counter].id === "firstClone"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});
carouselSlide2.addEventListener("transitionend",()=>{
    if(carouselImages2[counter2].id === "lastClone2"){
        carouselSlide2.style.transition = "none";
        counter2 = carouselImages2.length - 2;
        carouselSlide2.style.transform = "translateY(" + (-size2 * counter2) + "px)";
    }
    if(carouselImages2[counter2].id === "firstClone2"){
        carouselSlide2.style.transition = "none";
        counter2 = carouselImages2.length - counter2;
        carouselSlide2.style.transform = "translateY(" + (-size2 * counter2) + "px)";
    }
});

function autoCarousel(){
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter++;
    counter2++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    carouselSlide2.style.transform = "translateY(" + (-size2 * counter2) + "px)";
}