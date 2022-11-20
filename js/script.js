let playerscore = 0;
let computerscore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else if (computerChoice === 2) {
        return "scissors";
    }
}


function playRound(player, computer) {
    if (player == computer){
        return "draw";
    } else if (player == "rock"){
        if (computer == "paper"){
            return "you lose";
        } else if (computer = "scissors"){
            return "you win";
        };
    } else if (player == "paper"){
        if (computer == "scissors"){
            return "you lose";
        } else if (computer == "rock"){
            return "you win";
        };
    } else if (player == "scissors"){
        if (computer == "rock"){
            return "you lose";
        } else if (computer == "paper"){
            return "you win"
        }
    }
}
