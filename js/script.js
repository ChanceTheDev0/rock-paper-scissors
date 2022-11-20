let playerscore = 0;
let computerscore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
        return "rock"
    } else if (computerChoice === 1) {
        return "paper"
    } else if (computerChoice === 2) {
        return "scissors"
    }
}
console.log(getComputerChoice())

function playRound(player, computer) {
    if (player === computer){
        return "draw";
    } else if (player == "rock"){
        if (computer == "paper"){
            return 
        }
    }
}