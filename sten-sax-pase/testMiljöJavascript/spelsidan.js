/* Objective
- Receive and display user name that we got from startsidan
- Get the user’s choice.
- Get the computer’s choice.
- Compare the two choices and determine a winner.
- Start the program and display the results. 
- Display image of player's choice and computer's choice
- Adjust scoreboard
- Make winning dog move forward one step
- When player or computer won 5 times: declare winner
*/

// Receive and display user name that we got from startsidan
const fullName = localStorage.getItem("fullName");
document.getElementById("name").textContent = fullName; // Make user input equal to button click content
const choice = document.querySelectorAll("#btn");
const result = document.getElementById(choice);
choice.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    result.textContent = `Result: ${player}`;
  })
);

// MAKE rock-round/paper-round/scissors-round function
//make a wincount function.

let winPlayer = 0;
let winComputer = 0;
const roundResult = document.getElementById("result");
const rock = document.getElementById("btnR");
const paper = document.getElementById("btnP");
const scissors = document.getElementById("btnS");

const getComputerChoice = () => {
  const computerInput = Math.floor(Math.random() * 3);

  switch (computerInput) {
    case 0:
      return "ROCK";
      break;
    case 1:
      return "PAPER";
      break;
    case 2:
      return "SCISSORS";
      break;
  }
};

function rockRound() {
  let userInput = "ROCK";
  let computerInput = getComputerChoice();
  if (userInput === computerInput) {
    roundResult.textContent = "DRAW";
  } else if (computerInput === "SCISSORS") {
    winPlayer++;
    roundResult.textContent = "WIN";
  } else {
    winComputer++;
    roundResult.textContent = "LOSE";
  }
  checkWinner();
}
function paperRound() {
  let userInput = "PAPER";
  let computerInput = getComputerChoice();
  if (userInput === computerInput) {
    roundResult.textContent = "DRAW";
  } else if (computerInput === "ROCK") {
    winPlayer++;
    animationPlayer++
    roundResult.textContent = "WIN";
  } else {
    winComputer++;
    roundResult.textContent = "LOSE";
  }
  checkWinner();
}
function scissorsRound() {
  let userInput = "SCISSORS";
  let computerInput = getComputerChoice();
  if (userInput === computerInput) {
    roundResult.textContent = "DRAW";
  } else if (computerInput === "PAPER") {
    winPlayer++;
    roundResult.textContent = "WIN";
  } else {
    winComputer++;
    roundResult.textContent = "LOSE";
  }
}
function checkWinner() {
  if (winComputer == 5) {
    roundResult.textContent = "You lost the game!";
  } else if (winPlayer == 5) {
    roundResult.textContent = "You won the game!";
  }
}



// ------------------ ⬇️ Old parts that we might reuse ⬇️--------------------------

// const getUserInput = (userInput) => {
//   userInput = userInput.toUpperCase();

//   if (userInput == "ROCK" || userInput == "PAPER" || userInput == "SCISSORS") {
//     return userInput;
//   } else {
//     return "error";
//   }
// };

// console.log(getUserInput("rock"));

// const getComputerChoice = () => {
//   const computerChoice = Math.floor(Math.random() * 3);

//   switch (computerChoice) {
//     case 0:
//       return "ROCK";
//       break;
//     case 1:
//       return "PAPER";
//       break;
//     case 2:
//       return "SCISSORS";
//       break;
//   }
// };

// console.log(getComputerChoice());

// const winner = (userInput, computerChoice) => {
//   if (userInput == computerChoice) {
//     return "It/s a tie";
//   }

//   if (userInput == "ROCK") {
//     if (computerChoice == "SCISSORS") {
//       return "DU";
//     } else {
//       return "Datorn";
//     }
//   }

//   if (userInput == "PAPER") {
//     if (computerChoice == "ROCK") {
//       return "DU";
//     } else {
//       return "Datorn";
//     }
//   }

//   if (userInput == "SCISSORS") {
//     if (computerChoice == "PAPER") {
//       return "DU";
//     } else {
//       return "Datorn";
//     }
//   }
// };

// console.log(determineWinner('SCISSORS', 'PAPER'));

// const runGame = () => {
//   const userChoice = getUserInput("PAW");
//   const computerChoice = getComputerChoice();
//   console.log(
//     `Du valde ${userChoice}, datorn valde ${computerChoice}, vinnaren är ${winner(userChoice, computerChoice)}!`
//   );
// };

// runGame();

// const gameButtons = document.querySelectorAll("[data-selection]");

// gameButtons.forEach((gameButtons) => {
//   gameButtons.addEventListener("click", (e) => {
//     const selectionName = gameButtons.dataset.selection;
//     makeSelection(selectionName);
//   });
// });

// function makeSelection(selection) {
//   console.log(selection);
// }

// const a = 10;

// ------------------ ⬆️ Old parts that we might reuse ⬆️--------------------------
