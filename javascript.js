
//creates an array containing these strings
const rpsArray = ["rock", "paper", "scissors"];

// returns a random value in the array
function computerPlay(){
    return rpsArray[Math.floor(Math.random() * rpsArray.length)]
    
} 

function playerPlay(){
    return rpsArray[Math.floor(Math.random() * rpsArray.length)]
    
} 

// declare playerSelection & test against computerSlection
// TODO: allow playerSelection to be chosen without declaring its value
// const playerSelection = "rock";
const computerSelection = computerPlay();
const playerSelection = playerPlay();

let result;
// let playerSelection = "rock";
function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay().toLowerCase;
    playerSelection = playerPlay().toLowerCase;
    // playerSelection = playerSelection.toLowerCase();
    // let computerSelection = computerPlay();
    // let result = ""
    // playerSelection win conditions (use if/else):
    // playerSelection rock & computerSeletion scissors || playerSelection scissors & computerSeletion paper ||
    // playerSelection paper & computerSelction rock || && =/= computerSelction THEN "You win!"
    // ELSE "You lose!"
    
    // Remember: create scorekeeping variables that are NOT constant: "let x = 0"
    // increment +1 to winner after each round
    // use console to test w/o UI

    // computer win conditions * && =/= playerSelection 

    // 

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
        result = ("You win!");
        } else if (playerSelection == computerSelection){
        result = ("It's a draw!");
    } else {
        result = ("You lose!");
    }
            console.log(result)
        }

    
    playRound();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(result);