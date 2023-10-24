/* Objective
1 Get the user’s choice.
2 Get the computer’s choice.
3 Compare the two choices and determine a winner.
4 Start the program and display the results. 
5 Display image of player's choice and computer's choice
6 Adjust scoreboard
*/

// ROCK = PAW
// PAPER = NOSE
// SCISSORS = TAIL

const asdf = () => {};

//function to select users choice
const getUserInput = (userInput) => {
  userInput = userInput.toUpperCase();

  if (userInput == "PAW" || userInput == "NOSE" || userInput == "TAIL") {
    return userInput;
  } else {
    return "error";
  }
};

// console.log(getUserInput("rock"));

//function to decide computers choice
const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0:
      return "PAW";
      break;
    case 1:
      return "PAPER";
      break;
    case 2:
      return "NOSE";
      break;
  }
};

// console.log(getComputerChoice());


//comparison between user and computer to declare a winner 
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


// onClick function for bark.mp3
function playAudio(file) {
  new Audio(file).play();
}

function borderClick(box) {
  //selects all avatars as eligible items, and allows a max of 1 item to be affected by borderClick
  var allAvatars = document.querySelectorAll('.avatar');
  allAvatars.forEach(function (avatar) {
    avatar.style.border = 'none';
  });

 //styles borders on click
  box.style.border = '5px solid red';
}