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
const audio = document.getElementById('sound-bgd-music');
const audio2 = document.getElementById('sound-bgd-crowd');
// animation hands ⬇️
const computer = document.querySelector('.computer img');
const player = document.querySelector('.player img');
const options = document.querySelectorAll('.options button');
// animation hands ⬆️
/* Add Leila for pu id tag from html sound mute */
const soundIcon = document.getElementById('mute');
//background sound --starts with document and with lower volume
document.addEventListener('DOMContentLoaded', function () {
  const crowdSound = document.getElementById('sound-bgd-crowd');
  const musicSound = document.getElementById('sound-bgd-music');
  crowdSound.volume = 0.7;
  musicSound.volume = 0.4;
  crowdSound.play();
  musicSound.play();
});

let isMuted = false;

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
  computer.src = `imgHands/${computerInput.toLowerCase()}Computer.png`;
  if (userInput === computerInput) {
    roundResult.textContent = 'DRAW';
    /* Leila: set color and font size like style sheet but with JavaScript code */
    roundResult.style.color = 'rgb(50, 48, 48)';
    roundResult.style.fontFamily = 'YourDesiredFont, sans-serif';
    roundResult.style.fontSize = '30px';
    resetText();
  } else if (computerInput === 'SCISSORS' && winPlayer <= 5) {
    winPlayer++;
    winAnimationPlayer();
    roundResult.textContent = 'WIN';
    /* Leila: set color and font size like style sheet but with JavaScript code */
    roundResult.style.color = 'green';
    roundResult.style.fontFamily = 'YourDesiredFont, sans-serif';
    roundResult.style.fontSize = '30px';

    resetText();
  } else if (winComputer <= 5) {
    winComputer++;
    winAnimationComputer();
    roundResult.textContent = 'LOSE';
    /* Leila: set color and font size like style sheet but with JavaScript code */
    roundResult.style.color = 'red';
    roundResult.style.fontFamily = 'YourDesiredFont, sans-serif';
    roundResult.style.fontSize = '30px';
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
  computer.src = `imgHands/${computerInput.toLowerCase()}Computer.png`;

  if (userInput === computerInput) {
    roundResult.textContent = 'DRAW';
    /* Leila: set color and font size like style sheet but with JavaScript code */
    roundResult.style.color = 'rgb(50, 48, 48)';
    roundResult.style.fontFamily = 'YourDesiredFont, sans-serif';
    roundResult.style.fontSize = '30px';

    resetText();
  } else if (computerInput === 'ROCK' && winPlayer <= 5) {
    winPlayer++;
    winAnimationPlayer();
    roundResult.textContent = 'WIN';
    /* Leila: set color and font size like style sheet but with JavaScript code */
    roundResult.style.color = 'green';
    roundResult.style.fontFamily = 'YourDesiredFont, sans-serif';
    roundResult.style.fontSize = '30px';

    resetText();
  } else if (winComputer <= 5) {
    winComputer++;
    winAnimationComputer();
    roundResult.textContent = 'LOSE';
    /* Leila: set color and font size like style sheet but with JavaScript code */
    roundResult.style.color = 'red';
    roundResult.style.fontFamily = 'YourDesiredFont, sans-serif';
    roundResult.style.fontSize = '30px';
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
  computer.src = `imgHands/${computerInput.toLowerCase()}Computer.png`;

  // showScissors();
  if (userInput === computerInput) {
    roundResult.textContent = ' DRAW';
    /* Leila: set color and font size like style sheet but with JavaScript code */
    roundResult.style.color = 'rgb(50, 48, 48)';
    roundResult.style.fontFamily = 'YourDesiredFont, sans-serif';
    resetText();
  } else if (computerInput === 'PAPER' && winPlayer <= 5) {
    winPlayer++;
    winAnimationPlayer();
    roundResult.textContent = 'WIN';
    /* Leila: set color and font size like style sheet but with JavaScript code */
    roundResult.style.color = 'green';
    roundResult.style.fontFamily = 'YourDesiredFont, sans-serif';

    resetText();
  } else if (winComputer <= 5) {
    winComputer++;
    winAnimationComputer();
    roundResult.textContent = 'LOSE';
    /* Leila: set color and font size like style sheet but with JavaScript code */
    roundResult.style.color = 'red';
    roundResult.style.fontFamily = 'YourDesiredFont, sans-serif';
    resetText();
  }
  checkWinner();
}

options.forEach((option) => {
  option.addEventListener('click', () => {
    computer.classList.add('shakeComputer');
    player.classList.add('shakePlayer');

    setTimeout(() => {
      computer.classList.remove('shakeComputer');
      player.classList.remove('shakePlayer');

      const type = option.getAttribute('data-selection');
      player.src = `imgHands/${type}Player.png`;
      // clear the 2 other classes
      // css class backgroundhtml

      // const choice = ['rock', 'paper', 'scissors'];
      // let arrayNum = Math.floor(Math.random() * 3);
      // let computerChoice = choice[arrayNum];
      // computer.src = `img/${computerChoice}Computer.svg`;
    }, 900);
  });
});

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
      soundWinRound();

      break;

    case 2:
      scoreElementPlayer.classList.add('win-anim-P-2');
      soundWinRound();
      break;

    case 3:
      scoreElementPlayer.classList.add('win-anim-P-3');
      soundWinRound();
      break;

    case 4:
      scoreElementPlayer.classList.add('win-anim-P-4');
      soundWinRound();
      break;

    case 5:
      scoreElementPlayer.classList.add('win-anim-P-5');
      soundWinGame();
      break;
  }
}

// function that adds animation classes to the dog element for computer. one class is added per win for computer
function winAnimationComputer() {
  switch (winComputer) {
    case 1:
      scoreElementComputer.classList.add('win-anim-C');
      soundLoseRound();
      break;
    case 2:
      scoreElementComputer.classList.add('win-anim-C-2');
      soundLoseRound();
      break;
    case 3:
      scoreElementComputer.classList.add('win-anim-C-3');
      soundLoseRound();
      break;
    case 4:
      scoreElementComputer.classList.add('win-anim-C-4');
      soundLoseRound();
      break;
    case 5:
      scoreElementComputer.classList.add('win-anim-C-5');
      soundLoseGame();
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

/* --- Player sounds ---  */
//Win round
function soundWinRound() {
  const audio = document.getElementById('sound-forRound');
  isMuted ? console.log() : audio.play();
}
//Loose round
function soundLoseRound() {
  const audio = document.getElementById('sound-forRound');
  isMuted ? console.log() : audio.play();
}
//Win game
function soundWinGame() {
  const audio = document.getElementById('sound-winGame');
  isMuted ? console.log() : audio.play();
}
//Loose game
function soundLoseGame() {
  const audio = document.getElementById('sound-looseGame');
  isMuted ? console.log() : audio.play();
}
// Add button mute and unmute
toggleMute = () => {
  isMuted = !isMuted; // Toggle the mute state
  audio.muted = isMuted;
  audio2.muted = isMuted;
  /* Add it Leila when click on them show us mute and unmute icon */
  soundIcon.className = audio.muted
    ? 'fas fa-volume-mute fa-2xl'
    : 'fas fa-volume-up fa-2xl';
  soundIcon.style.color = audio.muted ? 'red' : '#274d97';
};


/* try enable and disable button(rock,paper,scissor)===>Leila */
rock.addEventListener('click', function(){
  activateButton(this, rockRound);
});
paper.addEventListener('click', function(){
  activateButton(this, paperRound);
});
scissors.addEventListener('click',function(){
  activateButton(this, scissorsRound);
});

 function activateButton(button, roundFunction) {
    const buttons = document.querySelectorAll('.button');

    // Check if the clicked button is already active
    const isActive = button.classList.contains('active');

    // Deactivate all buttons
    buttons.forEach(b => {
        b.classList.remove('active');
        b.classList.add('inactive');
        b.style.opacity = '0.5'; // Set opacity for inactive buttons
        b.disabled = true;
    });

    // Activate the clicked button if it wasn't already active
    if (!isActive) {
        button.classList.add('active');
        button.classList.remove('inactive');
        button.style.opacity = '1'; // Set full opacity for active button
        button.disabled = false;
    }

    // Execute the round function after a delay
    setTimeout(function () {
        // Deactivate the button after executing the round function if it wasn't manually clicked
        if (!isActive) {
            button.classList.remove('active');
            button.classList.add('inactive');
            button.style.opacity = '0.5'; // Set opacity for inactive buttons
            button.disabled = true;
        }

        // Reset opacity for all buttons
        buttons.forEach(b => {
            b.style.opacity = '1';
        });

      /*   // Call the roundFunction callback if it's provided
        if (typeof roundFunction === 'function') {
            roundFunction();
        } */

        // Enable all buttons after a delay
        setTimeout(function () {
            buttons.forEach(b => {
                b.disabled = false;
            });
        }, 900);
    }, 1000);
}
 



