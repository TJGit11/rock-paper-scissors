
//creates an array containing these strings
const rpsArray = ["rock", "paper", "scissors"];

// returns a random value in the array
function computerPlay(){
    return rpsArray[Math.floor(Math.random() * rpsArray.length)]
    
} 

// TODO: allow playerSelection to be chosen without declaring its value
// const playerSelection = "rock";

// const playerSelection = playerPlay();`

let result;
let computerScore = 0;
let playerScore = 0;

function playRound(){
    let playerSelection = window.prompt("Choose");
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
    
    // console.log(result)
    // console.log(playerSelection);
    // console.log(computerSelection);
    // console.log(playerScore);
    // console.log(computerScore);
}


function game(){

    // if player or computer reaches 3, end game. how?

    for (let i = 0; i < 5; i++){
        if (playerScore == 2){
            // playerScore += 1;
            console.log("You're the winner!");
            // console.log(playerScore);
        } else if(computerScore == 2){
            // computerScore +=1;
            console.log("Computer wins!");
            // console.log(computerScore);
        }
        playRound();
    }

    }
// function gameOver(){
    // if playerScore == 3 OR computerScore == 3
    // message = You have won / Computer has won
    // "play again?"
    // playRound(); or different function?
// }
    // test/


game();
console.log(result);
console.log(playerScore);
console.log(computerScore);

    
    
    