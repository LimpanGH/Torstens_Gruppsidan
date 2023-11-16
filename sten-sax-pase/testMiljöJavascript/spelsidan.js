/* Objective
- Receive and display user name that we got from startsidan
// - Get the user’s choice.
// - Get the computer’s choice.
// - Compare the two choices and determine a winner.
// - Start the program and display the results. 
- Display image of player's choice and computer's choice
- Adjust scoreboard
// - Make winning dog move forward one step
// - When player or computer won 5 times: declare winner
*/

// Extracting data from localstorage using the getItem-method and by putting the key inside the parenthes, we assign the value to our varable.
const fullName = localStorage.getItem("fullName");
// Selecting the span-element with #name and writing the value from localstorage to the span.
document.getElementById("name").textContent = fullName; 




let winPlayer = 0;
let winComputer = 0;

//Dom Manipulation  
const roundResult = document.getElementById("result");
const rock = document.getElementById("btnR");
const paper = document.getElementById("btnP");
const scissors = document.getElementById("btnS");
const scoreElementPlayer = document.getElementById('playerDog'); 
const scoreElementComputer = document.getElementById('computerDog');  
const restart = document.getElementById('restart');


//function to make computer choose r-p or s
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
//plays a single round as rock
// if win, increments winplayer and adds a animation class.
//if lose increments wincomputer and adds a animation class
function rockRound() {
  let userInput = "ROCK";
  let computerInput = getComputerChoice();
  if (userInput === computerInput) {
    roundResult.textContent = "DRAW";
  } else if (computerInput === "SCISSORS" && winPlayer <= 5) {
    winPlayer++;
    winAnimationPlayer();
    roundResult.textContent = "WIN";
  } else if(winComputer <= 5){
    winComputer++;
    winAnimationComputer() 
    roundResult.textContent = "LOSE";
  }
  checkWinner();
}
//plays a single round as paper
// if win, increments winplayer and adds a animation class.
//if lose increments wincomputer and adds a animation class
function paperRound() {
  let userInput = "PAPER";
  let computerInput = getComputerChoice();
  if (userInput === computerInput) {
    roundResult.textContent = "DRAW";
  } else if (computerInput === "ROCK" && winPlayer <= 5) {
    winPlayer++;
    winAnimationPlayer();
    roundResult.textContent = "WIN";
  } else  if(winComputer <= 5){
    winComputer++;
    winAnimationComputer() 
    roundResult.textContent = "LOSE";
  }
  checkWinner();
}

//plays single round  as scissors
// if win, increments winplayer and adds a animation class.
//if lose increments wincomputer and adds a animation class
function scissorsRound() {
  let userInput = "SCISSORS";
  let computerInput = getComputerChoice();
  if (userInput === computerInput) {
    roundResult.textContent = "DRAW";
  } else if (computerInput === "PAPER" && winPlayer <= 5) {
    winPlayer++;
    winAnimationPlayer();
    roundResult.textContent = "WIN";
  } else if(winComputer <= 5) {
    winComputer++;
    winAnimationComputer();
    roundResult.textContent = "LOSE";
  }
   checkWinner();
}

//function that is ran after every (rock/paper/scissors round to check for a winner of the game (first to 5))
function checkWinner() {
  if (winComputer == 5) {
    roundResult.textContent = "You lost the game!";
    
  } else if (winPlayer == 5) {
    roundResult.textContent = "You won the game!";
  }
}

// function that adds animation classes to the dog element for player. one class is added per win for player
function winAnimationPlayer() {
  switch (winPlayer)
  {
  
    case 1:
      scoreElementPlayer.classList.add('win-anim-P');
      
      break;
    case 2:
      scoreElementPlayer.classList.add('win-anim-P-2');
      
      break;
      case 3:
        scoreElementPlayer.classList.add('win-anim-P-3');

        break;
        case 4:
          scoreElementPlayer.classList.add('win-anim-P-4');

        break;
        case 5:
           scoreElementPlayer.classList.add('win-anim-P-5');
        break;

  }
  
}
  
// function that adds animation classes to the dog element for computer. one class is added per win for computer
  function winAnimationComputer() {
    switch (winComputer)
  {
  
    case 1:
      scoreElementComputer.classList.add('win-anim-C');
      
      break;
    case 2:
      scoreElementComputer.classList.add('win-anim-C-2');
      
      break;
      case 3:
        scoreElementComputer.classList.add('win-anim-C-3');

        break;
        case 4:
          scoreElementComputer.classList.add('win-anim-C-4');

        break;
        case 5:
           scoreElementComputer.classList.add('win-anim-C-5');
        break;

  } 
  }

// Restart function that sets score to 0 (line 172-173) and removes amination classes from dogs (line 174-175)
function restartgame () {
  let winPlayer = 0;
  let winComputer = 0;
  scoreElementComputer.classList.remove ('win-anim-C', 'win-anim-C-2',  'win-anim-C-3', 'win-anim-C-4', 'win-anim-C-5')
   scoreElementPlayer.classList.remove ('win-anim-P', 'win-anim-P-2',  'win-anim-P-3', 'win-anim-P-4', 'win-anim-P-5')
   roundResult.textContent = "RESULT"

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
