//init
let moves = ["rock", "paper", "scissors"], computerChoice = "", playerChoice = "", playerScore = 0, computerScore = 0, 
computerWord = "", playerWord = "", rounds = 0;

const chooseRock = document.querySelector("#rock");
const choosePaper = document.querySelector("#paper");
const chooseScissors = document.querySelector("#scissors");
function getComputerChoice() {
    computerChoice = moves[Math.floor(Math.random() * 3)]
}

chooseRock.addEventListener("click", () => {
    chooseRock.setAttribute("style", "background-color: rgb(var(--rock)")
    choosePaper.setAttribute("style", "background-color: rgba(var(--paper), 0.6)")
    chooseScissors.setAttribute("style", "background-color: rgba(var(--scissors), 0.6")
})

choosePaper.addEventListener("click", () => {
    chooseRock.setAttribute("style", "background-color: rgba(var(--rock), 0.6")
    choosePaper.setAttribute("style", "background-color: rgb(var(--paper))")
    chooseScissors.setAttribute("style", "background-color: rgba(var(--scissors), 0.6")
});

chooseScissors.addEventListener("click", () => {
    chooseRock.setAttribute("style", "background-color: rgba(var(--rock), 0.6")
    choosePaper.setAttribute("style", "background-color: rgba(var(--paper), 0.6)")
    chooseScissors.setAttribute("style", "background-color: rgb(var(--scissors)")
});