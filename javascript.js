//creates an array containing these strings
const rpsArray = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // playRound(button.value)
        playerSelection = playRound(e.target.value)
        console.log(playerSelection)
    })
})


// returns a random value in the array
function computerPlay(){
    return rpsArray[Math.floor(Math.random() * rpsArray.length)]
    
} 

let result;
let computerScore = 0;
let playerScore = 0;
// let computerSelection = computerPlay();
function playRound(playerSelection) {
    // let playerSelection;
    
    let computerSelection = computerPlay();
    let result = ""
        if ((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "rock")) {
            playerScore += 1;
            result = ("You win this round!");
        } else if (playerSelection == computerSelection) {
            result = ("This round is a draw!");
        } else {
            computerScore += 1;
            result = ("You lose this round!");
            
            if (computerScore == 5) {
                result = ("Computer Wins")
            }
        }
        return result;
    }


playRound()



console.log(result);
console.log(playerScore);
console.log(computerScore);

    
    
    