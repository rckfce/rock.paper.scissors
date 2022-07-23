let capitalize = (str) => str.charAt(0).toUpperCase();

const gameResults = document.querySelector(".results");
const gameResult = document.createElement("div");
gameResult.classList.add("gameResult");

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

const playerSelected = document.querySelectorAll("button");
playerSelected.forEach ((button) => {
button.addEventListener("click", () => {
  gameResult.textContent = playRound(playerSelection(button.id),computerSelection());
  gameResults.appendChild(gameResult);
});
});

function playerSelection(playerChoice) {
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



function game() {
    let computerScore = 0;
    let playerScore = 0;
    let gameTieCounter = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(computerSelection(), playerSelection());
        console.log("Game" + (i + 1 + gameTieCounter) + " outcome: " + result);
        if (result === "You lose!") { computerScore = computerScore + 1; }
        if (result === "You win!") { playerScore = playerScore + 1; }
        if (result === "Tie") { i = i - 1; gameTieCounter = gameTieCounter + 1;}
    }
    
    if (computerScore > playerScore) { 
        console.log("You lost best of 5! Game score: " + computerScore + " : " + playerScore); 
    }
    if (computerScore < playerScore) { 
        console.log("You won best of 5! Game score: " + playerScore + " : " + computerScore); 
    }
    if (computerScore == playerScore) {
        console.log("The game is tied! Game score: " + playerScore + " : " + computerScore);
    }
}

game();