"use strict";

const buttonSection = document.querySelector('.button-displaying');
const buttonSectionPadd = document.querySelector(".button-section-padd");

const imgSection = document.querySelector(".slider-wrapper");
const sliderDisplay = document.querySelector(".slider-display");

const textFadeSection = document.querySelector(".fadeSection");
const textFadeSectionActive = document.querySelector(".fadeActive");

const button = new window.IntersectionObserver(([entry]) => {
    if(entry.isIntersecting){
        buttonSectionPadd.classList.add("buttonActive");

    }else{
        buttonSectionPadd.classList.remove("buttonActive");

    }
}, {
    root: null,
    threshold: 1,
    
})

const slider = new window.IntersectionObserver(([entry]) => {
    if(entry.isIntersecting){
        sliderDisplay.classList.add("sliderActive");

    }else{
        sliderDisplay.classList.remove("sliderActive");

    }
}, {
    root: null,
    threshold: 1,

})

const textFade = new window.IntersectionObserver(([entry]) => {
    if(entry.isIntersecting || sliderDisplay.classList.contains("sliderActive")){
        textFadeSectionActive.classList.add("fadeActiveAnim");
        console.log(0);

    }else{
        textFadeSectionActive.classList.remove("fadeActiveAnim");
        console.log(1);

    }
}, {
    root: null,
    threshold: 1,

})

button.observe(buttonSection);

slider.observe(imgSection);

textFade.observe(textFadeSection);




/*
buttonSection.addEventListener("visibilitychange", function(){
    //console.log(window.pageYOffset);

    console.log(buttonSection.visibilityState);

})
*/