const textEl = document.querySelector('[data-text]');
const scorePlayer = document.querySelector('#score-player');
const scoreCp = document.querySelector('#score-computer');
const resetBtn = document.querySelector('[data-reset]');

let playerScore = 0;
let cpScore = 0;
let gameActive = true;

document.addEventListener('click', (e) => {
  if (e.target === resetBtn) {
    resetGame();
    return;
  }
  if (e.target.nodeName !== 'BUTTON' || !gameActive) {
    return;
  }

  const type = e.target.getAttribute('data-type');
  const cpType = getComputerChoice();

  const gameStatus = getPlayerGameStatus(type, cpType);

  textEl.textContent = gameStatus;

  if (gameStatus === 'win') {
    playerScore += 1;
    scorePlayer.textContent = playerScore;
  }
  if (gameStatus === 'lost') {
    cpScore += 1;
    scoreCp.textContent = cpScore;
  }
  checkWinner();
});

function checkWinner() {
  if (playerScore === 5 || cpScore === 5) {
    textEl.textContent = playerScore > cpScore ? 'Player win' : 'Computer win';
    resetBtn.style.display = 'block';
    gameActive = false;
  }
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

/**
 * @param {'rock' | 'paper' | 'scissors'} player
 * @param {'rock' | 'paper' | 'scissors'} cp
 * @returns
 */
function getPlayerGameStatus(player, cp) {
  if (player === cp) {
    return 'draw';
  } else if (
    (player === 'rock' && cp === 'scissors') ||
    (player === 'paper' && cp === 'rock') ||
    (player === 'scissors' && cp === 'paper')
  ) {
    return 'win';
  } else {
    return 'lost';
  }
}

function resetGame() {
  playerScore = 0;
  cpScore = 0;
  scorePlayer.textContent = playerScore;
  scoreCp.textContent = cpScore;
  textEl.textContent = 'Choose your weapon';
  resetBtn.style.display = 'none';
  gameActive = true;
}

resetGame();
