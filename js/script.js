

function getComputerChoice() {         //cpu player choice function
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else if (computerChoice === 2) {
        return "scissors";
    }
}


function playRound(player, computer) {     //round of RPS between player and cpu
    if (player === computer) {
        return "draw";
    } else if (player == "rock") {
        if (computer == "paper") {
            return "you lose";
        } else if (computer = "scissors") {
            return "you win";
        };
    } else if (player == "paper") {
        if (computer == "scissors") {
            return "you lose";
        } else if (computer == "rock") {
            return "you win";
        };
    } else if (player == "scissors"){
        if (computer == "rock") {
            return "you lose";
        } else if (computer == "paper") {
            return "you win";
        }
    }
}

function playerInput() {
    let input = prompt ("Choose you weapon (Rock, Paper, Scissor)");
    return input.toLowerCase();
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        const playerSelection = playerInput();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        if(playRound (playerSelection, computerSelection) == "you win") {

            playerScore++;

        } else if (playRound (playerSelection, computerSelection) == "you lose") {

            computerScore++; 

        } 
    console.log(`Score is ${playerScore} - ${computerScore}`)
    console.log(">")
} 
if (playerScore > computerScore) {
    console.log(`Player Won the game with a total score of ${playerScore}`)
} else if (computerScore > playerScore) {
    console.log(`Computer Won the game with a total score of ${computerScore}`)
}

console.log("Game Over!")
}

game();


    
    


