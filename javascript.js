
//creates an array containing these strings
const rpsArray = ["Rock", "Paper", "Scissors", "Shoot"];

// returns a random value in the array
function computerPlay(){
    return rpsArray[Math.floor(Math.random() * rpsArray.length)]
    
}

console.log(computerPlay())



// function playRound(playerSelection, computerSelection){
    
// }

// const playerSelection = "rock";
// const computerSelection = computerPlay();

// console.log(playRound);