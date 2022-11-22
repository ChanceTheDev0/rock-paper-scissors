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
            return "you win"
        }
    }
}

for (i=0; i<5; i++) {
    let playerSelection = (prompt("Enter your choice of rock, paper, or scissors: "));
    let computerSelection = getComputerChoice();
    let playerscore = 0;
    let computerscore = 0;
    if (playRound() == "you win") {
       playerscore + 1;
    } else if (playRound() == "you lose") {
       computerscore + 1;
    } 
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerscore, computerscore)
}

