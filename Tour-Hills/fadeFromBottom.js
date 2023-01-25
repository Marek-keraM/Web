"use strict";



window.addEventListener("pageshow", function(){
    //const fadePlace = document.querySelector(".header-center");
    const fadePlacingOne = document.querySelector(".fadePlaceOne");
    const fadePlacingTwo = document.querySelector(".fadePlaceTwo");
    const fadePlacingThree = document.querySelector(".fadePlaceThree");

        
    
    fadePlacingOne.style.animation = "fadeFromBottom 1.5s ease";
    fadePlacingTwo.style.animation = "fadeFromBottom 1.5s 200ms ease";
    fadePlacingThree.style.animation = "fadeFromBottom 1.5s 400ms ease";
    fadePlacingOne.style.opacity = 1;
    fadePlacingTwo.style.opacity = 1;
    fadePlacingThree.style.opacity = 1;

    
})

//<script src="/Tour-Hills/fadeFromBottom.js"></script>