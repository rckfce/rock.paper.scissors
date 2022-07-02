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

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(computerSelection(), playerSelection());
        console.log(result);
        if (result === "You lose!") { computerScore = computerScore + 1;}
        if (result === "You win!") { playerScore = playerScore + 1;}
    }
    
    if (computerScore > playerScore) { 
        console.log("You lost! Game score: " + computerScore + " : " + playerScore); 
    }
    if (computerScore < playerScore) { 
        console.log("You won! Game score: " + playerScore + " : " + computerScore); 
    }
    if (computerScore == playerScore) {
        console.log("The game is tied! Game score: " + playerScore + " : " + computerScore);
    }
    console.log(computerScore);
    console.log(playerScore);
}

game();