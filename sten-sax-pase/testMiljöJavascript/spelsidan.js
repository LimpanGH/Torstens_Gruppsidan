/* Objective
1 Get the user’s choice.
2 Get the computer’s choice.
3 Compare the two choices and determine a winner.
4 Start the program and display the results. 
5 Display image of player's choice and computer's choice
6 Adjust scoreboard
*/


const fullName = localStorage.getItem("fullName");
document.getElementById("name").textContent = fullName;






// Make user input equal to button click content
const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("paper");
const scissorbtn = document.getElementById("scissor");

let user = "";



rockbtn.addEventListener("click", () => {
  user = rockbtn.textContent});


  paperbtn.addEventListener("click", () => {
    user = paperbtn.textContent;
  });

  scissorbtn.addEventListener("click", () => {
    user = scissorbtn.textContent;
  });




const getUserInput = (userInput) => {
  userInput = userInput.toUpperCase();

  if (userInput == "ROCK" || userInput == "PAPER" || userInput == "SCISSORS") {
    return userInput;
  } else {
    return "error";
  }
};

// console.log(getUserInput("rock"));

const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
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

// console.log(getComputerChoice());

const winner = (userInput, computerChoice) => {
  if (userInput == computerChoice) {
    return "It/s a tie";
  }

  if (userInput == "ROCK") {
    if (computerChoice == "SCISSORS") {
      return "DU";
    } else {
      return "Datorn";
    }
  }

  if (userInput == "PAPER") {
    if (computerChoice == "ROCK") {
      return "DU";
    } else {
      return "Datorn";
    }
  }

  if (userInput == "SCISSORS") {
    if (computerChoice == "PAPER") {
      return "DU";
    } else {
      return "Datorn";
    }
  }
};

// console.log(determineWinner('SCISSORS', 'PAPER'));

// const runGame = () => {
//   const userChoice = getUserInput("PAW");
//   const computerChoice = getComputerChoice();
//   console.log(
//     `Du valde ${userChoice}, datorn valde ${computerChoice}, vinnaren är ${winner(userChoice, computerChoice)}!`
//   );
// };

// runGame();

const gameButtons = document.querySelectorAll("[data-selection]");

gameButtons.forEach((gameButtons) => {
  gameButtons.addEventListener("click", (e) => {
    const selectionName = gameButtons.dataset.selection;
    makeSelection(selectionName);
  });
});

function makeSelection(selection) {
  console.log(selection);
}

const a = 10;





