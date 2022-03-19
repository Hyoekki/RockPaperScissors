const resultsDisplay = document.querySelector("#results");
const selectionsDisplay = document.querySelector("#selections");
const selections = ["rock", "paper", "scissors"];

const handleClick = (e) => {
  const playerSelection = e.target.innerHTML;
  const computerSelection =
    selections[Math.floor(Math.random() * selections.length)];
  playRound(playerSelection, computerSelection);
  console.log(playerSelection, computerSelection);
};

selections.forEach((selections) => {
  const button = document.createElement("button");
  button.innerHTML = selections;
  button.addEventListener("click", handleClick);
  selectionsDisplay.appendChild(button);
});

function playRound(playerSelection, computerSelection) {
  playerSelection = selections.indexOf(playerSelection);
  computerSelection = selections.indexOf(computerSelection);
  console.log(playerSelection, computerSelection);
  if (playerSelection == computerSelection) {
    resultsDisplay.innerHTML = "Tie";
  }
  if (playerSelection == selections.length - 1 && computerSelection == 0) {
    resultsDisplay.innerHTML = "Computer wins";
  }
  if (computerSelection == selections.length - 1 && playerSelection == 0) {
    resultsDisplay.innerHTML = "Player wins";
  }
  if (playerSelection > computerSelection) {
    resultsDisplay.innerHTML = "Player wins";
  } else {
    resultsDisplay.innerHTML = "Computer wins";
  }
  console.log(playerSelection, computerSelection);
}
