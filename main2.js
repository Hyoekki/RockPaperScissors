const resultsDisplay = document.querySelector("#results");
const selectionsDisplay = document.querySelector("#selections");
const selections = ["rock", "paper", "scissors"];

const handleClick = (e) => {
  const playerSelection = e.target.innerHTML;
  const computerSelection =
    selections[Math.floor(Math.random() * selections.length)];
    resultsDisplay.innerHTML = playRound(playerSelection, computerSelection);
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
  console.log('player: '+playerSelection,'cpu: '+computerSelection);
  if (playerSelection == computerSelection) {
    return "Tie";
  }
  if (playerSelection == selections.length - 1 && computerSelection == 0) {
    return "Computer wins";
  }
  if (computerSelection == selections.length - 1 && playerSelection == 0) {
    return "Player wins";
  }
  if (playerSelection > computerSelection) {
    return "Player wins";
  } else {
    return "Computer wins";
  }
}
