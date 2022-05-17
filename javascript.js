
//creates an array containing these strings
const rpsArray = ["rock", "paper", "scissors"];

// returns a random value in the array
function computerPlay(){
    return rpsArray[Math.floor(Math.random() * rpsArray.length)]
    
} 

// TODO: allow playerSelection to be chosen without declaring its value
// const playerSelection = "rock";

// const playerSelection = playerPlay();

let result;
let computerScore = 0;
let playerScore = 0;
// let playerSelection = window.prompt("Choose");
// let playerSelection = "rock";
function playRound(){
    let playerSelection = window.prompt("Choose").toLowerCase;
    let computerSelection = computerPlay().toLowerCase;
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
            playerScore += 1; 
        result = ("You win!");
        } else if (playerSelection == computerSelection){
        result = ("It's a draw!");
    } else {
        computerScore += 1;
        result = ("You lose!");
    }
    
    console.log(result)
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playerScore);
    console.log(computerScore);
        }
// }
    
    playRound();