
let result;
let computerScore = 0;
let playerScore = 0;
//creates an array containing these strings
const rpsArray = ["rock", "paper", "scissors"];

// const btnR = document.querySelector('#btnR')
// btnR.addEventListener('click', () => {
//     alert("Rock has been chosen");
// });

// const btnP = document.querySelector('#btnP')
// btnP.addEventListener('click', () => {
//     alert("Paper has been chosen");
// });

// const btnS = document.querySelector('#btnS')
// btnS.addEventListener('click', () => {
//     alert("Scissors");
// });

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playRound(button.value)
    })
})

// returns a random value in the array
function computerPlay(){
    return rpsArray[Math.floor(Math.random() * rpsArray.length)]
    
} 



// let result;
// let computerScore = 0;
// let playerScore = 0;

function playRound(playerSelection){
    // let playerSelection = e.target.value
    let computerSelection = computerPlay();
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
            playerScore += 1; 
        result = ("You win this round!");
        } else if (playerSelection == computerSelection){
        result = ("This round is a draw!");
    } else {
        computerScore += 1;
        result = ("You lose this round!");
    } 
    return result;
    

}


// function game(){

//     for (let i = 0; i < 6; i++){
//         if (playerScore == 5) {
//             console.log("You're the winner!");
//         } else if(computerScore == 5){
//             console.log("Computer wins!");
//         }
//         playRound();
//     }

//     }

playRound()


// game();
console.log(result);
console.log(playerScore);
console.log(computerScore);

    
    
    