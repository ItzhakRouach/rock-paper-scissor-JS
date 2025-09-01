// Create a function named getComputerChoice
// getComputerChoice should give randomly answer of Rock,Paper or Scissor
// Input is None and Output is a random answer between the three
// Can use array or Math.random that way in  0 = Rock , 1 = Paper and 3 = Scissor

let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
  //  0 = Rock , 1 = Paper and 3 = Scissor
  choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissor";
    default:
      break;
  }
};

let getHumanChoice = (choice) => {
  return (choice = prompt("Rock , Paper or Scissor? : "));
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanSelection, computerSelection) {
  humanSelection = humanSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (humanSelection == "rock" && computerSelection == "scissor") {
    humanScore += 1;
    return console.log("You Win Rock beat Scissor");
  } else if (humanSelection == "paper" && computerSelection == "rock") {
    humanScore += 1;
    return console.log("You Win Paper beat Rock");
  } else if (humanSelection == "scissor" && computerSelection == "paper") {
    humanScore += 1;
    return console.log("You Win Scissor beat Paper");
  } else if (humanSelection == "paper" && computerSelection == "scissor") {
    computerScore += 1;
    return console.log("You Loose Scissor beat Paper");
  } else if (humanSelection == "rock" && computerSelection == "paper") {
    computerScore += 1;
    return console.log("You Loose Paper beat Rock");
  } else if (humanSelection == "scissor" && computerSelection == "rock") {
    computerScore += 1;
    return console.log("You Loose Rock beat Scissor");
  } else {
    return console.log("Draw");
  }
}

let playGame = () => {
  humanScore = 0;
  computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(`You win ${humanScore} time and Computer ${computerScore}`);
};

playGame();
