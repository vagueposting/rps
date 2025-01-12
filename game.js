console.log("This is a test message.")

// init
let computerChoice = 1;
let playerChoice = 1;
let playerScore = 0;
let computerScore = 0;

// Rock = 1
// Paper = 2
// Scissors = 3

// Function for choosing computer input
function getComputerChoice(options = 3) {
    computerChoice = Math.floor(Math.random() * options) + 1
}

// Function for requesting player input
// SHOULD be case-insensitive
function getPlayerChoice() {
    let playerWordChoice = ""
    // while the input is incorrect, repeat the function
    while (playerWordChoice != "rock" &&
        playerWordChoice != "paper" &&
        playerWordChoice != "scissors"
    ) {
        playerWordChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        if (playerWordChoice == "rock" ||
            playerWordChoice == "paper" ||
            playerWordChoice == "scissors") {
                switch (playerWordChoice) {
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

getComputerChoice()
getPlayerChoice()

// Function for checking

function showChoice() {
    console.log(`Player choice: ${playerChoice}\nComputer's Choice: ${computerChoice}`)
}

function checkScores() {
    console.log(`Scores\nPlayer: ${playerScore}\nCPU: ${computerScore}`)
}

function computerWin() {
    showChoice(); console.log("CPU wins!"); computerScore++;
    checkScores();
}

function playerWin() {
    showChoice(); console.log("Player wins!"); playerScore++;
    checkScores();
}

function checkResult() {
    if (playerChoice == computerChoice) {
        console.log("It's a tie!");
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
// Run functions
computerChoice()
playerChoice()
checkResult()