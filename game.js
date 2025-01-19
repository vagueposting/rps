//init
let moves = ["Rock", "Paper", "Scissors"], computerChoice = "", 
playerChoice = "", playerScore = 0, computerScore = 0, 
computerWord = "", playerWord = "", rounds = 0, roundWinner = "",
resetAllowed = false;

const chooseRock = document.querySelector("#rock"),
choosePaper = document.querySelector("#paper"),
chooseScissors = document.querySelector("#scissors"),
submitAnswer = document.querySelector("#next"),
resetButton = document.querySelector("#reset"),
historyLogBox = document.querySelector(".moveList"),
playerScoreDisplay = document.querySelector("#playerScore"),
computerScoreDisplay = document.querySelector("#cpuScore");

// reset game state
function resetGame() {
    computerChoice = "", playerChoice = "", playerScore = 0, 
    computerScore = 0, computerWord = "", playerWord = "", 
    rounds = 0, roundWinner = "";
    historyLogBox.innerHTML = "";
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resetButton.classList.remove("active");
    resetButton.removeEventListener("click", resetGame)
    resetAllowed = false;
    console.log(resetAllowed);
}

function allowReset() {
    resetAllowed = true;
    console.log(resetAllowed);
    if (resetAllowed) {
        resetButton.classList.add("active")
        resetButton.addEventListener("click", resetGame);
    };
};

// get computer choice

function getComputerChoice() {
    computerChoice = moves[Math.floor(Math.random() * 3)]
}

// button nonsense

chooseRock.addEventListener("click", () => {
    playerChoice = "Rock";
    chooseRock.setAttribute(
        "style", "background-color: rgb(var(--rock)");
    choosePaper.setAttribute(
        "style", "background-color: rgba(var(--paper), 0.6)");
    chooseScissors.setAttribute(
        "style", "background-color: rgba(var(--scissors), 0.6");
})

choosePaper.addEventListener("click", () => {
    playerChoice = "Paper";
    chooseRock.setAttribute(
        "style", "background-color: rgba(var(--rock), 0.6");
    choosePaper.setAttribute(
        "style", "background-color: rgb(var(--paper))");
    chooseScissors.setAttribute(
        "style", "background-color: rgba(var(--scissors), 0.6");
});

chooseScissors.addEventListener("click", () => {
    playerChoice = "Scissors";
    chooseRock.setAttribute(
        "style", "background-color: rgba(var(--rock), 0.6");
    choosePaper.setAttribute(
        "style", "background-color: rgba(var(--paper), 0.6)");
    chooseScissors.setAttribute(
        "style", "background-color: rgb(var(--scissors)");
});

function unclickButtons() {
    playerChoice = "";
    chooseRock.setAttribute(
        "style", "background-color: rgba(var(--rock), 0.6");
    choosePaper.setAttribute(
        "style", "background-color: rgba(var(--paper), 0.6)");
    chooseScissors.setAttribute(
        "style", "background-color: rgba(var(--scissors), 0.6");    
}

// Pushes logs into the History window
function logHistory(player, cpu, winner) {
    const verdictLog = document.createElement("p");
    if (winner === "Tie") {
        verdictLog.textContent = `Player chose ${player}. CPU chose ${cpu}. It's a tie!`
    } else {
    verdictLog.textContent = `Player chose ${player}. CPU chose ${cpu}. ${winner} wins!`
    };
    historyLogBox.appendChild(verdictLog);
}

// scoring
function playerWin() {
    playerScore++; roundWinner = "Player";
    playerScoreDisplay.textContent = playerScore;
}

function computerWin() {
    computerScore++; roundWinner = "CPU";
    computerScoreDisplay.textContent = computerScore;
}

function tie() {
    roundWinner = "Tie";
}

function finalRating() {
    let victor = "";
    const winMessage = document.createElement("p");
    if (playerScore > computerScore || playerScore < computerScore) {
        if (playerScore > computerScore) {
        victor = "Player";
        } else if (computerScore > playerScore) {
            victor = "CPU";
        };
        winMessage.textContent = `GAME SET. ${victor} wins!\nThanks for playing. :)`;
    }  else if (computerScore == playerScore) {
        winMessage.textContent = "GAME SET. Woah! It's a tie!";
    }
    historyLogBox.appendChild(winMessage)
}

function gameplayLoop() {
    if (playerChoice != "") {
        switch (playerChoice) {
            case "Rock":
                switch (computerChoice) {
                    case "Rock":
                        tie(); break;
                    case "Paper":
                        computerWin(); break;
                    case "Scissors":
                        playerWin(); break;
                }
                break;
            case "Paper":
                switch (computerChoice) {
                    case "Rock":
                        playerWin(); break;
                    case "Paper":
                        tie(); break;
                    case "Scissors":
                        computerWin(); break;
                        
                }
                break;
            case "Scissors":
                switch (computerChoice) {
                    case "Rock":
                        computerWin(); break;
                    case "Paper":
                        playerWin(); break;
                    case "Scissors":
                        tie(); break;
                }
                break;
        };
        logHistory(playerChoice, computerChoice, roundWinner);
        console.log(playerChoice)
        unclickButtons();
        rounds++;
    };
}

// play a round!

submitAnswer.addEventListener("click", () => {
    getComputerChoice()
    if (rounds < 4) {
        gameplayLoop();
    } else if (rounds == 4) {
        gameplayLoop(); finalRating(); allowReset();
    }
});