"use strict";

function calculation(){
    const scOne = document.querySelector(".first-section");
    const scOneVisibility = scOne.getBoundingClientRect().top; 
    const scTwo = document.querySelector(".second-section");
    const scTwoVisibility = scTwo.getBoundingClientRect().top;
    const scThree = document.querySelector(".third-section");
    const scThreeVisibility = scThree.getBoundingClientRect().top;
    const scFour = document.querySelector(".four-section");
    const scFourVisibility = scFour.getBoundingClientRect().top;
    const scFive = document.querySelector(".five-section");
    const scFiveVisibility = scFive.getBoundingClientRect().top;
    const scFooter = document.querySelector("footer");
    const scFooterVisibility = scFooter.getBoundingClientRect().top;

    const scOneButtonOne = document.querySelector(".button-section-padd");
    const scOneSliderWrapper = document.querySelector(".slider-display");
    const scTwoTitleContent = document.querySelector(".section-block-padd-span");
    const scTwoTextContent = document.querySelector(".second-wrapper-block");
    const scThreeTitle = document.querySelector(".block-flex1");
    const scThreeContent = document.querySelector(".block-flex2");
    const scThreeImage = document.querySelector(".third-content-block");
    const scFourTitle = document.querySelector(".four-title-left");
    const scFourButton = document.querySelector(".four-title-button");
    const scFourCards = document.querySelector(".four-section-content");
    const scFiveContent = document.querySelector(".five-section-block");
    const scFooterContent = document.querySelector(".footer-block");
    
    const percentageOne = ((window.innerHeight - scOneVisibility) / 100) * 80;
    const percentageTwo = ((window.innerHeight - scTwoVisibility) / 100) * 80;
    const percentageThree = ((window.innerHeight - scThreeVisibility) / 100) * 80;
    const percentageFour = ((window.innerHeight - scFourVisibility) / 100) * 80;
    const percentageFive = ((window.innerHeight - scFiveVisibility) / 100) * 80;
    const percentageFooter = ((window.innerHeight - scFooterVisibility) / 100) * 80;

    console.log(percentageFooter);

    //  First Section
    percentageOne > 325 ? scOneButtonOne.classList.add("activeButtonTrying") : scOneButtonOne.classList.remove("activeButtonTrying");
    percentageOne > 600 ? scOneSliderWrapper.classList.add("activeButtonTryingTwo") : scOneSliderWrapper.classList.remove("activeButtonTryingTwo");
    //  Second Section
    percentageTwo > 250 ? scTwoTitleContent.classList.add("activeScTwoTitle") : scTwoTitleContent.classList.remove("activeScTwoTitle");
    percentageTwo > 480 ? scTwoTextContent.classList.add("activeCards") : scTwoTextContent.classList.remove("activeCards");
    //  Third Section
    percentageThree > 180 ? scThreeTitle.classList.add("activeScThree") : scThreeTitle.classList.remove("activeScThree");
    percentageThree > 180 ? scThreeContent.classList.add("activeScThree") : scThreeContent.classList.remove("activeScThree");
    percentageThree > 500 ? scThreeImage.classList.add("activeScThree") : scThreeImage.classList.remove("activeScThree");
    //  Fourth Section
    percentageFour > 250 ? scFourTitle.classList.add("activeScFour") : scFourTitle.classList.remove("activeScFour");
    percentageFour > 250 ? scFourButton.classList.add("activeScFour") : scFourButton.classList.remove("activeScFour");
    percentageFour > 525 ? scFourCards.classList.add("activeScFour") : scFourCards.classList.remove("activeScFour");
    //  Five Section
    percentageFive > 500 ? scFiveContent.classList.add("activeScFive") : scFiveContent.classList.remove("activeScFive");
    //  Footer Section
    percentageFooter > 190 ? scFooterContent.classList.add("activeScFooter") : scFooterContent.classList.remove("activeScFooter");
    

}
document.addEventListener("scroll", calculation);
calculation();

