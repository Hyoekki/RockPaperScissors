//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//Coding with Rob https://www.youtube.com/watch?v=A3iZUMDD32w

const choices = ["rock", "paper", "scissors"]; //Possible choices
let winners = [];

function gameRockPaperScissors() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
  let input = prompt("Type Rock, Paper or Scissorss");
  //Make cancel button not break the code by prompting the window in case of null or empty string
  while (input == null) {
    input = prompt("Type Rock, Paper or Scissors");
  }
  //Make input lowercase
  input = input.toLocaleLowerCase();
  let check = validateChoice(input);
  while (check == false) {
    input = prompt("Please check your spelling");
    while (input == null) {
      input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLocaleLowerCase();
    //Break while loop if input is validated true
    check = validateChoice(input);
  }
  return input;
}

function computerChoice() {
  //Random selection of the computer from possible choices
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateChoice(choice) {
  //Check if the choice is a valid by searching it from array of choices
  if (choices.includes(choice)) {
    return true;
  } else {
    return false;
  }
}

function checkWinner(playerChose, computerChose) {
  if (playerChose === computerChose) {
    return "Tie";
  } else if (
    (playerChose === "rock" && computerChose == "scissors") ||
    (playerChose === "paper" && computerChose == "rock") ||
    (playerChose === "scissors" && computerChose == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("Player won:", playerWins);
  console.log("Computer won:", computerWins);
  console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round", round);
  console.log("Player Chose:", playerChoice);
  console.log("computer Chose:", computerChoice);
  console.log(winner, "Won the round");
}

gameRockPaperScissors();
