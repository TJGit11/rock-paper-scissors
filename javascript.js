
//creates an array containing these strings
const rpsArray = ["rock", "paper", "scissors"];

// returns a random value in the array
function computerPlay(){
    return rpsArray[Math.floor(Math.random() * rpsArray.length)]
    
}

// declare playerSelection & test against computerSelection
// TODO: allow playerSelection to be chosen without declaring its value
const playerSelection = "rock";
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){
    // player win conditions (use if/else):
    // player rock & computer scissors || player scissors & computer paper ||
    // player paper & computer rock || && =/= computerSelection THEN "You win!"
    // ELSE "You lose!"
    
    // Remember: create scorekeeping variables that are NOT constant: "let x = 0"
    // increment +1 to winner after each round
    // use console to test w/o UI

    // computer win conditions * && =/= playerSelection 
    
    
}



function game(){
    playRound();
}

console.log(playRound);