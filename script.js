let capitalize = (str) => str.charAt(0).toUpperCase();

let totalResults = [0,0,0]; /* keeps total result, [0] is player, [1] is computer,[2] is game number  */

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
        let computerSelected = computerSelection();
        let currentGame = playRound(computerSelected, playerSelection(button.id));
        addToDiv("results", currentGame + " " + playerSelection(button.id) + " vs " + computerSelected + " - " + totalResults[0] + " : " + totalResults[1] + "\n");
        game();
    });
});

function addToDiv(name, data) {
    document.getElementById(name).innerText += data;
}

function playerSelection(playerChoice) {
    return capitalize(playerChoice) + playerChoice.toLowerCase().slice(1);
}

function playRound(you, me) {
    if (you === me) {
        totalResults[2]++;
        return "Game " + totalResults[2] + ": Tie! - ";
    }
    if (you === "Rock" && me === "Scissors") {
        totalResults[1]++;
        totalResults[2]++;
        return "Game " + totalResults[2] + ": You lose! - ";
    }
    if (you === "Scissors" && me === "Paper") {
        totalResults[1]++;
        totalResults[2]++;
        return "Game " + totalResults[2] + ": You lose! - ";
    }
    if (you === "Paper" && me === "Rock") {
        totalResults[1]++;
        totalResults[2]++;
        return "Game " + totalResults[2] + ": You lose! - ";
    }
    totalResults[0]++;
    totalResults[2]++;
    return "Game " + totalResults[2] + ": You win! - ";    
}

/* check the total score */
function game() {
    if (totalResults[0] == 3 || totalResults[1] == 3) {
        if (totalResults[0] == 3) {
            alert("Game Over! You Won " + totalResults[0] + " to " + totalResults[1]);
            totalResults = [0,0,0];
            document.getElementById("results").textContent = "";
        }
        if (totalResults[1] == 3) {
            alert("Game Over! You Lost " + totalResults[0] + " to " + totalResults[1]);
            totalResults = [0,0,0];
            document.getElementById("results").textContent = "";
        }
    }
}