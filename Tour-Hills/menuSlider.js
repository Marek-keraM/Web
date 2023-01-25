"use strict";

const menuTriger = document.querySelector(".burger-section");
const crossTriger = document.querySelector(".cross-section");

const menuSliderNav = document.querySelector(".small-navigation-menu");
const menuSliderBurger = document.querySelector(".burger-section");

const crossLeft = document.querySelector(".cross-left");
const crossRight = document.querySelector(".cross-right");

menuTriger.addEventListener("click", function(){
    if(!menuTriger.classList.contains("activeMenu")){
        menuSliderNav.classList.add("activeMenu");
        crossLeft.classList.remove("animToLineLeft");
        crossRight.classList.remove("animToLineRight");

    }

})
crossTriger.addEventListener("click", function(){
    if(menuSliderNav.classList.contains("activeMenu")){
        menuSliderNav.classList.remove("activeMenu");
        crossLeft.classList.add("animToLineLeft");
        crossRight.classList.add("animToLineRight");

    }

})
document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && menuSliderNav.classList.contains("activeMenu")){
        menuSliderNav.classList.remove("activeMenu");

    }

}) 