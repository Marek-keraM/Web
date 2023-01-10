"use strict";
/*
console.log(document.querySelector(".message",).textContent);
console.log("***");
//  document.querySelector(".message").textContent = "🍻 Yes this is correct";
console.log(document.querySelector(".message",).textContent);

//  document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

//  document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);

document.querySelector(".guesing").textContent = "Yes just start with click.";
*/


/*
const randomNumber = function(){
    const valueNumber = Math.trunc(Math.random() * 20) + 1;
    return valueNumber;
    
}

// let secretNumber = randomNumber();

console.log(secretNumbers);
randomNumber.call();
*/

// cast prerobena z kodu dole aby vsetko bolo lepsie citatelne a aby to bolo jednoduchsie a rychlejsie
/*

    else if(guess > secretNumbers){
        //  When guess is to high
        if(score > 1){
            document.querySelector(".message").textContent = "📈 Too high";
            score = score -1;
            document.querySelector(".score").textContent = score;

        } else{
            document.querySelector(".message").textContent = "YOU LOST THE GAME BRO";
            document.querySelector(".score").textContent = 0;

        }
        
    }else if(guess < secretNumbers){
        //  When guess it to low
        if(score > 1){
            document.querySelector(".message").textContent = "📉 Too low";
            score--;
            document.querySelector(".score").textContent = score;

        }else{
            document.querySelector(".message").textContent = "YOU LOST THE GAME BRO";
            document.querySelector(".score").textContent = 0;

        }
        
    }
*/

let secretNumbers = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let fullScore = 0;
let highestScore = 0;

const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function() {
    
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    //  When there in no input
    if(!guess){
        displayMessage("🛑 No number");
        
        // When player win
    }else if(guess === secretNumbers){
        displayMessage("🍻 Yes this is correct");
        document.querySelector(".number").textContent = secretNumbers;
        
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        
        if(score > highestScore){
            highestScore = score;
            document.querySelector(".highscore").textContent = highestScore;
        }

    }else if (guess !== secretNumbers){
        if(score > 1){
            displayMessage( guess > secretNumbers ? "📈 Too high" : "📉 Too low");
            score = score -1;
            document.querySelector(".score").textContent = score;

        } else{
            displayMessage("YOU LOST THE GAME BRO");
            document.querySelector(".score").textContent = 0;

        }

    }

})

document.querySelector(".again").addEventListener("click", function(){
    const scoreBoard = fullScore += score;
    secretNumbers = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";

    displayMessage("Start guessing...");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = " ";

    document.querySelector(".score").textContent = score;
    
    const guess = Number(document.querySelector(".guess").value);

    console.log(scoreBoard);
    document.querySelector(".fullScore").textContent = scoreBoard;

    if(guess === secretNumbers){
        document.querySelector(".number").textContent = secretNumbers;
        //document.querySelector(".");
        
    }

})

