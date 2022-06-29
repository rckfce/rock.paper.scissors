function computerSelection() {
    let computerChoice = Math.random() * 100;
    if (computerChoice <= 33) {
        return "Rock";
    } else if (computerChoice > 33 && computerChoice <= 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(you, me) {
    if (you === me) {
        return "Tie";
    }
    if (you === "Rock" && me === "Scissors") {
        return "You lose! Rock beats Scissors";
    }
    if (you === "Scissors" && me === "Paper") {
        return "You lose! Scissors beats Paper";
    }
    if (you === "Paper" && me === "Rock") {
        return "You lose! Paper beats Rock";
    }
    return "You win!";
        
}

let capitalize = (str) => str.charAt(0).toUpperCase();

let playerChoice = prompt("Please enter your play(rock,paper,scissors): ");
let playerSelection = capitalize(playerChoice) + playerChoice.toLowerCase().slice(1);
let computer = computerSelection();
let result = playRound(computer,playerSelection);

console.log("player: " + playerSelection);
console.log("computer: " + computer);
console.log(result);