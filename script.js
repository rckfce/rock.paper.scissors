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

function playerSelection() {
    let playerChoice = prompt("Please enter your play(rock,paper,scissors): ");
    return capitalize(playerChoice) + playerChoice.toLowerCase().slice(1);
}

function playRound(you, me) {
    if (you === me) {
        return "Tie";
    }
    if (you === "Rock" && me === "Scissors") {
        return "You lose!";
    }
    if (you === "Scissors" && me === "Paper") {
        return "You lose!";
    }
    if (you === "Paper" && me === "Rock") {
        return "You lose!";
    }
    return "You win!";
        
}




let capitalize = (str) => str.charAt(0).toUpperCase();

let result = playRound(computerSelection(), playerSelection());



/* console.log("computer: " + computerSelection());
console.log("player: " + playerSelection()); */
console.log(result);
