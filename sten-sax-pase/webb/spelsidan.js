// ---- Avatar from startsidan to spelsidan ----
// Extracting data from localstorage using the getItem-method and by putting the key inside the parenthes, we assign the value to our varable.
const avatarUrl = localStorage.getItem('avatarUrl');
// Selecting the image-element that has no hard-coded src on spelsidan.
let imgOfPlayerAvatar = document.querySelector('#imgOfPlayerAvatar');
// Adding a src-attribute to the img in the dom an setting its value to be avatarUrl (i.e the url from localstorage)
imgOfPlayerAvatar.src = avatarUrl;

// ---- Name from startsidan to spelsidan ----
// Extracting data from localstorage using the getItem-method and by putting the key inside the parenthes, we assign the value to our varable.
const fullName = localStorage.getItem('fullName');
// Selecting the span-element with #name and writing the value from localstorage to the span.
document.querySelector('.playerName').textContent = fullName;

let winPlayer = 0;
let winComputer = 0;

//Dom Manipulation
const roundResult = document.getElementById('result');
const rock = document.getElementById('btnR');
const paper = document.getElementById('btnP');
const scissors = document.getElementById('btnS');
const scoreElementPlayer = document.getElementById('playerDog');
const scoreElementComputer = document.getElementById('computerDog');
const restart = document.getElementById('restart');

let timeout;

//function to make computer choose r-p or s
const getComputerChoice = () => {
  const computerInput = Math.floor(Math.random() * 3);

  switch (computerInput) {
    case 0:
      return 'ROCK';
      break;
    case 1:
      return 'PAPER';
      break;
    case 2:
      return 'SCISSORS';
      break;
  }
};
//plays a single round as rock
// if win, increments winplayer and adds a animation class.
//if lose increments wincomputer and adds a animation class
function rockRound() {
  clearTimeout(timeout);
  if (winComputer === 5 || winPlayer === 5) {
    return;
  }
  let userInput = 'ROCK';
  let computerInput = getComputerChoice();
  if (userInput === computerInput) {
    roundResult.textContent = 'DRAW';
    resetText();
  } else if (computerInput === 'SCISSORS' && winPlayer <= 5) {
    winPlayer++;
    winAnimationPlayer();
    roundResult.textContent = 'WIN';
    resetText();
  } else if (winComputer <= 5) {
    winComputer++;
    winAnimationComputer();
    roundResult.textContent = 'LOSE';
    resetText();
  }
  console.count('rock');
  checkWinner();
}
//plays a single round as paper
// if win, increments winplayer and adds a animation class.
//if lose increments wincomputer and adds a animation class
function paperRound() {
  clearTimeout(timeout);
  if (winComputer === 5 || winPlayer === 5) {
    return;
  }
  let userInput = 'PAPER';
  let computerInput = getComputerChoice();
  if (userInput === computerInput) {
    roundResult.textContent = 'DRAW';
    resetText();
  } else if (computerInput === 'ROCK' && winPlayer <= 5) {
    winPlayer++;
    winAnimationPlayer();
    roundResult.textContent = 'WIN';
    resetText();
  } else if (winComputer <= 5) {
    winComputer++;
    winAnimationComputer();
    roundResult.textContent = 'LOSE';
    resetText();
  }
  checkWinner();
}

//plays single round  as scissors
// if win, increments winplayer and adds a animation class.
//if lose increments wincomputer and adds a animation class
function scissorsRound() {
  clearTimeout(timeout);
  if (winComputer === 5 || winPlayer === 5) {
    return;
  }
  let userInput = 'SCISSORS';
  let computerInput = getComputerChoice();
  // showScissors();
  if (userInput === computerInput) {
    roundResult.textContent = 'DRAW';
    resetText();
  } else if (computerInput === 'PAPER' && winPlayer <= 5) {
    winPlayer++;
    winAnimationPlayer();
    roundResult.textContent = 'WIN';
    resetText();
  } else if (winComputer <= 5) {
    winComputer++;
    winAnimationComputer();
    roundResult.textContent = 'LOSE';
    resetText();
  }
  checkWinner();
}

//function that is ran after every (rock/paper/scissors round to check for a winner of the game (first to 5))
function checkWinner() {
  if (winComputer == 5) {
    roundResult.textContent = 'You lost the game!';
  } else if (winPlayer == 5) {
    roundResult.textContent = 'You won the game!';
  }
}

// function that adds animation classes to the dog element for player. one class is added per win for player
function winAnimationPlayer() {
  switch (winPlayer) {
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
  switch (winComputer) {
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
function restartgame() {
  winPlayer = 0;
  winComputer = 0;
  scoreElementComputer.classList.remove(
    'win-anim-C',
    'win-anim-C-2',
    'win-anim-C-3',
    'win-anim-C-4',
    'win-anim-C-5'
  );
  scoreElementPlayer.classList.remove(
    'win-anim-P',
    'win-anim-P-2',
    'win-anim-P-3',
    'win-anim-P-4',
    'win-anim-P-5'
  );
  roundResult.textContent = '';
}
resetText = () => {
  if (winComputer === 5 || winPlayer === 5) {
    return;
  }
  timeout = setTimeout(() => {
    // Checks textcontent at roundresult, if true to draw, win or lose see below comment
    roundResult.textContent = ''; // Set the text content to an empty string  after 1500ms
  }, 1500);
};
