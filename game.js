// init
let computerChoice = 1;
let playerChoice = 1;
let playerScore = 0;
let computerScore = 0;
let computerWord = "";
let playerWord = "";
let rounds = 0;

// Function for choosing computer input
function getComputerChoice(options = 3) {
    computerChoice = Math.floor(Math.random() * options) + 1
}

// Rock = 1
// Paper = 2
// Scissors = 3

// Function for requesting player input
// SHOULD be case-insensitive
function getPlayerChoice() {
    let playerString = ""
    // while the input is incorrect, repeat the function
    while (playerString != "rock" &&
        playerString != "paper" &&
        playerString != "scissors"
    ) {
        playerString = prompt("Rock, Paper, or Scissors?").toLowerCase();
        if (playerString === "rock" ||
            playerString === "paper" ||
            playerString === "scissors") {
                switch (playerString) {
                    case "rock":
                        playerChoice = 1; break;
                    case "paper":
                        playerChoice = 2; break;
                    case "scissors":
                        playerChoice = 3; break;
                } 
            } else {
                console.log("Invalid input!")
            }
        }
    }

// Function/s for checking

// Shows the choice used
function showChoice() {
    switch(computerChoice) {
        case 1:
            computerWord = "Rock"; break;
        case 2:
            computerWord = "Paper"; break;
        case 3:
            computerWord = "Scissors"; break;
    }
    switch (playerChoice) {
        case 1:
            playerWord = "Rock"; break;
        case 2:
            playerWord = "Paper"; break;
        case 3:
            playerWord = "Scissors"; break;
    };
    // console.log(playerWord)
    console.log(`Player choice: ${playerWord}\nComputer's Choice: ${computerWord}`)
}

// Checks the scores
function checkScores() {
    console.log(`Scores\nPlayer: ${playerScore}\nCPU: ${computerScore}`)
}

// For if the CPU wins the round
function computerWin() {
    showChoice(); console.log("CPU wins!"); computerScore++;
    checkScores();
}

// If Player wins the round
function playerWin() {
    showChoice(); console.log("Player wins!"); playerScore++;
    checkScores();
}

// a single round with win conditions
function playRound() {
    console.log(`ROUND ${rounds + 1}. Go!`)
    getComputerChoice()
    getPlayerChoice()
    if (playerChoice == computerChoice) {
        showChoice()
        console.log("It's a tie!");
        checkScores();
    } else if (playerChoice == 1 && computerChoice == 2) {
        computerWin();
    } else if (playerChoice == 1 && computerChoice == 3) {
        playerWin();
    } else if (playerChoice == 2 && computerChoice == 1) {
        playerWin();
    } else if (playerChoice == 2 && computerChoice == 3) {
        computerWin();
    } else if (playerChoice == 3 && computerChoice == 1) {
        computerWin();
    } else if (playerChoice == 3 && computerChoice == 2) {
        playerWin();
    }
}

// actually runs the game
function playGame() {
    while (rounds <= 5) {
        if (rounds == 4) {
            playRound()
            console.log("Game over.");
            console.log("Final scores:");
            checkScores()
            if (playerScore > computerScore) {
                console.log("Player wins!");
            } else if (computerScore > playerScore) {
                console.log("CPU wins!");
            } else if (computerScore == playerScore) {
                console.log("It's a tie!")
            }
            console.log("Thank you for playing!");
            break;
        } else {
            playRound()
            rounds++;
        }
    }
}
// runs the game

playGame()