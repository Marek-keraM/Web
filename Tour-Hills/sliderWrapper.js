"use strict";

const leftPress = document.querySelector(".button-cross-section-left");
const rightPress = document.querySelector(".button-cross-section-right");

const sectionLeft = document.querySelector(".button-cross-left");
const sectionRight = document.querySelector(".button-cross-right");

const movingSection = document.querySelector(".slider-moving");

const left = document.querySelector(".left");
const right = document.querySelector(".right");

let countingSlider = 0;

leftPress.addEventListener("click", function(){
    if(countingSlider == 0){
        countingSlider + 0;

    }else if(countingSlider >= 0){
        countingSlider --;

    }
    console.log(countingSlider);

    if(countingSlider == 0){
        sectionLeft.classList.add("scale-small");
        sectionRight.classList.add("scale-big");
        right.style.fill = "rgb(255, 90, 5)";
        movingSection.style.transform = "translateX(0px)";

    }else if(countingSlider == 1){
        movingSection.style.transform = "translateX(-335px)";

    }else if(countingSlider == 2){
        movingSection.style.transform = "translateX(-670px)";

    }else if(countingSlider == 3){
        movingSection.style.transform = "translateX(-1000px)";

    }else if(countingSlider == 4){
        movingSection.style.transform = "translateX(-1330px)";

    }else if(countingSlider == 5){
        movingSection.style.transform = "translateX(-1660px)";

    }else if(countingSlider == 6){
        sectionLeft.classList.remove("scale-big");
        sectionRight.classList.remove("scale-small");
        left.style.fill = "white";
        movingSection.style.transform = "translateX(-1990px)";

    }else if(countingSlider == 7){
        sectionLeft.classList.add("scale-big");
        sectionRight.classList.add("scale-small");
        left.style.fill = "rgb(255, 90, 5)";

    }

})

rightPress.addEventListener("click", function(){
    if(countingSlider <= 6){
        countingSlider ++;

    }else if(countingSlider >= 0){
        countingSlider + 0;

    }
    console.log(countingSlider);

    if(countingSlider == 0){
        sectionLeft.classList.add("scale-small");
        sectionRight.classList.add("scale-big");
        right.style.fill = "rgb(255, 90, 5)";

    }else if(countingSlider == 1){
        sectionLeft.classList.remove("scale-small");
        sectionRight.classList.remove("scale-big");
        right.style.fill = "white";
        movingSection.style.transform = "translateX(-335px)";

    }else if(countingSlider == 2){
        movingSection.style.transform = "translateX(-670px)";

    }else if(countingSlider == 3){
        movingSection.style.transform = "translateX(-1000px)";

    }else if(countingSlider == 4){
        movingSection.style.transform = "translateX(-1330px)";

    }else if(countingSlider == 5){
        movingSection.style.transform = "translateX(-1660px)";

    }else if(countingSlider == 6){
        movingSection.style.transform = "translateX(-1990px)";

    }else if(countingSlider == 7){
        sectionLeft.classList.add("scale-big");
        sectionRight.classList.add("scale-small");
        left.style.fill = "rgb(255, 90, 5)";
        movingSection.style.transform = "translateX(-2330px)";

    }

    /*
    if(countingSlider == 1){
        

    }
   */ 

})
