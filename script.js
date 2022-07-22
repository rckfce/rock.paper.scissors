
/* let capitalize = (str) => str.charAt(0).toUpperCase(); */

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


const playerSelected = document.querySelector('#rock');
playerSelected.addEventListener('click', () => {
  console.log(playRound('Rock',computerSelection()));
});

const playerSelected = document.querySelector('#paper');
playerSelected.addEventListener('click', () => {
  console.log(playRound('Paper',computerSelection()));
});

const playerSelected = document.querySelector('#scissors');
playerSelected.addEventListener('click', () => {
  console.log(playRound('Scissors',computerSelection()));
});



/* function playerSelection(playerChoice) {
    return capitalize(playerChoice) + playerChoice.toLowerCase().slice(1);
}
 */

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
    c
}

game();