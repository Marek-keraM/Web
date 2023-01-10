'use strict';

let randomNumber = Math.trunc(Math.random() * 6) + 1;

let playerOneScore = 0;
let playerOneTotalScore = 0;
let playerSecondScore = 0;
let playerSecontTotalScore = 0;

const playerOneActive = document.querySelector(".player--0");
const playerTwoActive = document.querySelector(".player--1");
const diceSection = document.querySelector(".dice");

const elementIdCurrentScoreOne = function(elementId){
    document.getElementById("current--0").textContent = elementId;
}
const elementIdCurrentScoreTwo = function(elementId){
    document.getElementById("current--1").textContent = elementId;
}
const elementIdScoreOne = function(elementScore){
    document.getElementById("score--0").textContent = elementScore;
}
const elementIdScoreTwo = function(elementScore){
    document.getElementById("score--1").textContent = elementScore;
}

document.querySelector(".btn--roll").addEventListener("click", function(){
    if(playerOneActive.classList.contains("player--active")){
        if(randomNumber > 1){
            playerOneScore += randomNumber;
            elementIdCurrentScoreOne(playerOneScore);
            
            if(randomNumber === 2){
                diceSection.src = "dice-2.png";
            }else if(randomNumber === 3){
                diceSection.src = "dice-3.png";
            }else if(randomNumber === 4){
                diceSection.src = "dice-4.png";
            }else if(randomNumber === 5){
                diceSection.src = "dice-5.png";
            }else if(randomNumber === 6){
                diceSection.src = "dice-6.png";
            }
    
        }else{
            playerOneScore = 0;
            elementIdCurrentScoreOne(playerOneScore);

            playerOneActive.classList.remove("player--active");
            playerTwoActive.classList.add("player--active");
    
            if(randomNumber === 1){
                diceSection.src = "dice-1.png";
            }
    
        }
        randomNumber = Math.trunc(Math.random() * 6) + 1;
        
    }else if(playerTwoActive.classList.contains("player--active")){
        if(randomNumber > 1){
            playerSecondScore += randomNumber;
            elementIdCurrentScoreTwo(playerSecondScore);
    
            if(randomNumber === 2){
                diceSection.src = "dice-2.png";
            }else if(randomNumber === 3){
                diceSection.src = "dice-3.png";
            }else if(randomNumber === 4){
                diceSection.src = "dice-4.png";
            }else if(randomNumber === 5){
                diceSection.src = "dice-5.png";
            }else if(randomNumber === 6){
                diceSection.src = "dice-6.png";
            }
    
        }else{
            playerSecondScore = 0;
            elementIdCurrentScoreTwo(playerSecondScore);

            playerTwoActive.classList.remove("player--active");
            playerOneActive.classList.add("player--active");
            
            if(randomNumber === 1){
                diceSection.src = "dice-1.png";
            }
    
        }
        randomNumber = Math.trunc(Math.random() * 6) + 1;
    }

})

document.querySelector(".btn--hold").addEventListener("click", function(){
    if(playerOneActive.classList.contains("player--active")  == true){
        playerOneActive.classList.remove("player--active");
        playerTwoActive.classList.add("player--active");

        playerOneTotalScore += playerOneScore;
        elementIdScoreOne(playerOneTotalScore);
        elementIdCurrentScoreOne(playerOneScore);
        playerOneScore = 0;

    }else if(playerTwoActive.classList.contains("player--active")  == true){
        playerTwoActive.classList.remove("player--active");
        playerOneActive.classList.add("player--active");

        playerSecontTotalScore += playerSecondScore;        
        //document.getElementById("score--1").textContent = playerSecontTotalScore;
        elementIdScoreTwo(playerSecontTotalScore);
        elementIdCurrentScoreTwo(playerSecondScore);
        playerSecondScore = 0;
    }

})

document.querySelector(".btn--new").addEventListener("click", function(){
    playerOneScore = 0;
    playerSecondScore = 0;
    playerOneTotalScore = 0;
    playerSecontTotalScore = 0;
    
    elementIdScoreOne(playerOneTotalScore);
    elementIdScoreTwo(playerSecontTotalScore);
    
    elementIdCurrentScoreOne(playerOneScore);
    elementIdCurrentScoreTwo(playerSecondScore);

    playerOneActive.classList.add("player--active");
    playerTwoActive.classList.remove("player--active");

    if(playerTwoActive.classList.contains("player--active")){
        playerTwoActive.classList.remove("player--active");
        playerOneActive.classList.add("player--active");
        
    }

})