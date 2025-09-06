// Create a function named getComputerChoice
// getComputerChoice should give randomly answer of Rock,Paper or Scissor
// Input is None and Output is a random answer between the three
// Can use array or Math.random that way in  0 = Rock , 1 = Paper and 3 = Scissor

// Initilizer for score track
let humanScore = 0;
let computerScore = 0;

// selector for elements to be change according the game
const user = document.querySelector("#user");
const com = document.querySelector("#com");
const result = document.querySelector(".result");

// Buttons Selectors
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");

// Return computer choice of rock papar or scissor
const getComputerChoice = () => {
  //  0 = Rock , 1 = Paper and 2 = Scissor
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

// Set message deppend on who win
const userWinRound = (humanSelection, computerSelection) =>
  `You Win ${humanSelection} beat ${computerSelection}`;

const comWinRound = (humanSelection, computerSelection) =>
  `You Loose ${computerSelection} beat ${humanSelection}`;

// Update the score acording to humanScore and computerScore
function updateScoreUI() {
  user.textContent = humanScore;
  com.textContent = computerScore;
}

// Show who won the round on the website
function showRound(msg) {
  const para = document.createElement("p");
  para.textContent = msg;
  result.appendChild(para);
}

// Check if someone won by get 5 wins , and set all the initilize to start
function checkIsGameOver() {
  if (humanScore >= 5 || computerScore >= 5) {
    const winner = humanScore > computerScore ? "You Won!" : "You Loose!";
    alert(`Game Over! ${winner} the game!`);
    humanScore = 0;
    computerScore = 0;
    result.replaceChildren();
    updateScoreUI();
  }
}

// Responsable to the functiollity of the game
function playRound(humanSelection, computerSelection) {
  const human = humanSelection.toLowerCase();
  const comp = computerSelection.toLowerCase();

  if (human === comp) {
    showRound("Draw");
  } else if (
    (human == "rock" && comp == "scissor") ||
    (human == "paper" && comp == "rock") ||
    (human == "scissor" && comp == "paper")
  ) {
    humanScore++;
    showRound(userWinRound(human, comp));
  } else {
    computerScore++;
    showRound(comWinRound(human, comp));
  }

  updateScoreUI();
  checkIsGameOver();
}

// Handle the btn clicked and acording to what clicked that will be the user choice to be passed to the game main function
rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () =>
  playRound("paper", getComputerChoice())
);
scissorBtn.addEventListener("click", () =>
  playRound("scissor", getComputerChoice())
);

// Update the score acroding to the game
updateScoreUI();
