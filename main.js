[computerScore, playerScore] = [0, 0];
const resultsDisplay = document.querySelector("#results");
const selectionsDisplay = document.querySelector("#selections");
const selections = ["rock", "paper", "scissors"];
let finalWinner = document.getElementById("finalWinner");

const handleClick = (e) => {
  const playerSelection = e.target.innerHTML;
  const computerSelection =
    selections[Math.floor(Math.random() * selections.length)];
  resultsDisplay.innerHTML = playRound(playerSelection, computerSelection);
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;
  document.getElementById(
    "computerPick"
  ).innerHTML = `Computer chose: ${computerSelection}`;
  let wins = checkWins();
  if (wins >= 5) {
    if (playerScore == 5) {
      alert("Congratulations! You won 5 times!");
      resetGame();
    } else alert("Computer won 5 times, better luck next time!");
    resetGame();
  }
};

function resetGame() {
  computerScore = 0;
  playerScore = 0;
}

selections.forEach((selections) => {
  const button = document.createElement("button");
  button.innerHTML = selections;
  button.addEventListener("click", handleClick);
  selectionsDisplay.appendChild(button);
});

function playRound(playerSelection, computerSelection) {
  playerSelection = selections.indexOf(playerSelection);
  computerSelection = selections.indexOf(computerSelection);
  if (playerSelection == computerSelection) {
    return "Tie";
  }
  if (playerSelection == selections.length - 1 && computerSelection == 0) {
    computerScore++;
    return "Computer wins";
  }
  if (computerSelection == selections.length - 1 && playerSelection == 0) {
    playerScore++;
    return "Player wins";
  }
  if (playerSelection > computerSelection) {
    playerScore++;
    return "Player wins";
  } else {
    computerScore++;
    return "Computer wins";
  }
}
function checkWins() {
  return Math.max(computerScore, playerScore);
}
