//Rock, Paper, Scissors Functions
//Element selectors
const options = ["Rock", "Paper","Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function play(playerPick) { 
    const computerPick = options[Math.floor(Math.random() * 3)];//Randomly select computer's choice
    let result = "";
    if (playerPick === computerPick){ //Check the conditions Win Lose and Tie
        result = "HEHE IT'S A TIE"
    } else {
        switch(playerPick) {
            case "Rock":
                result = (computerPick === "Scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case "Paper":
                result = (computerPick === "Rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case "Scissors":
                result = (computerPick === "Paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }
    //Display picks from both
    playerDisplay.textContent = `PLAYER: ${playerPick}`;
    computerDisplay.textContent = `COMPUTER: ${computerPick}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");
//If Win display green, Lose display red
    switch(result) {
        case "YOU WIN" :
            resultDisplay.classList.add("greenText");
            playerScore ++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE" :
            resultDisplay.classList.add("redText");
            computerScore ++;
            computerScoreDisplay.textContent = computerScore;
            break;
    } 
}
//Reset game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerDisplay.textContent = "PLAYER:";
    computerDisplay.textContent = "COMPUTER:";
    resultDisplay.textContent = "";
}
document.querySelector(".resetButton button").addEventListener("click", resetGame);

