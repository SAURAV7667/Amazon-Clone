const slides = document.querySelectorAll(".image-item");

let currentSlide = 0;

document.getElementById("next").addEventListener("click",()=>{
    changeSlide(currentSlide + 1);
});
document.getElementById("prev").addEventListener("click",()=>{
    changeSlide(currentSlide - 1);
});

function changeSlide(moveTo){
    if(moveTo >= slides.length){
        moveTo = 0;
    }
    if(moveTo < 0){
        moveTo = slides.length - 1;
    }
    slides[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    currentSlide = moveTo;
}



// ---------------------sign in event--------------------
const signInBtn = document.getElementById("sign-in-btn");
