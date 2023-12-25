'use strict';
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉Correct Number!!"
// document.querySelector(".number").textContent = 17;
// document.querySelector(".guess").value = 13;
// 


// button pe apn log click karegne tab event listen karega <-- first parameter
// than we have pass function to handle event click kare toh kya hona chaiye <-- second parameter

// apn event handler function mein secrect Number generate 
    // nhi karenge kyu har baar click karne se random generate hoga jise kabhi bc user ka input 
    //diya gaya number hamare random number se match hi 
    // nhi hoga so we have declare outside the event hadler function
    // document.querySelector(".number").textContent = Math.floor(Math.random());

let secretNumber = Math.trunc(Math.random() * 20) +1; 

let score = 20 ;
let highScore = 0;


    document.querySelector(".check").addEventListener('click', 
function(){
    // event Handler function pass in event listener in second paraeter.
    const guess = Number(document.querySelector(".guess").value);
    // console.log(typeof guess); 
    
    if(!guess){ 
        document.querySelector(".message").textContent = "⛔NO Number!!"
    }else if(guess === secretNumber){
        
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".message").textContent = "🎉Correct Number!!"
        document.querySelector(".highscore").textContent = score;
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if(score > highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

    }
    else if(guess !== secretNumber){
        if(score > 1){
            document.querySelector(".message").textContent = guess < secretNumber?"⬇️Too Low!":"⬆️Too High!";
            score--;
        
            document.querySelector(".score").textContent = score;
            }else {
                document.querySelector(".message").textContent = "😞You Lost The Game !!"
                document.querySelector(".score").textContent = 0;
            }
    }
    // else if(guess < secretNumber){
    //     if(score > 1){
    //     document.querySelector(".message").textContent = "⬇️Too Low!"
    //     score--;
    
    //     document.querySelector(".score").textContent = score;
    //     }else {
    //         document.querySelector(".message").textContent = "😞You Lost The Game !!"
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }


    // else if(guess > secretNumber){
    //     if(score > 1){
    //     document.querySelector(".message").textContent = "⬆️Too High!"
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //     }
    //     else{
    //         document.querySelector(".message").textContent = "😞You Lost The Game !!"
    //         document.querySelector(".score").textContent = 0;
    //      }
    // }
})


document.querySelector(".again").addEventListener('click', 
function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) +1;
    document.querySelector(".message").textContent = "Start guessing..."
    // document.querySelector(".highscore").textContent = 0;
    document.querySelector(".number").style.width = "15rem"
    document.querySelector(".number").textContent = "?";
    document.querySelector('body').style.backgroundColor = "#222";
    
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
   
});