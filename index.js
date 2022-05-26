const $startButton = document.querySelector(".button-start");
const $resetButton = document.querySelector(".button-reset");

const $stoneButton = document.querySelector(".button-stone-player-1");
const $stoneButton2 = document.querySelector(".button-stone-player-2");

const $paperButton = document.querySelector(".button-paper-player-1");
const $paperButton2 = document.querySelector(".button-paper-player-2");

const $scissorsButton = document.querySelector(".button-scissors-player-1");
const $scissorsButton2 = document.querySelector(".button-scissors-player-2");

const $winnerTitle = document.querySelector(".winner-title");

const $scorePlayer1 = document.querySelector(".score-player-1");
const $scorePlayer2 = document.querySelector(".score-player-2");

const $fieldPlayer1 = document.querySelector(".field-player-1");
const $fieldPlayer2 = document.querySelector(".field-player-2");

let scorePlayer1 = 0;
let scorePlayer2 = 0;
let start = false;
let movePlayer1 = "";
let movePlayer2 = "";
let gameResult = null;

function startGame() {
  if (start == false) {
    start = true;
  }
}

$startButton.addEventListener("click", startGame);

function resetGame() {
  if (start == true) {
    $fieldPlayer1.innerHTML = "";
    $fieldPlayer2.innerHTML = "";
    $winnerTitle.innerHTML = "Resultado";
    $scorePlayer1.innerHTML = '0'
    $scorePlayer2.innerHTML = '0'
    scorePlayer1 = 0
    scorePlayer2 = 0
    start = false;
  }
}

$resetButton.addEventListener("click", resetGame);

function verifyGame() {
  if (movePlayer1 == "stone" && movePlayer2 == "paper") {
    gameResult = 2;
  }
  if (movePlayer1 == "stone" && movePlayer2 == "scissors") {
    gameResult = 1;
  }
  if (movePlayer1 == "paper" && movePlayer2 == "stone") {
    gameResult = 1;
  }
  if (movePlayer1 == "paper" && movePlayer2 == "scissors") {
    gameResult = 2;
  }
  if (movePlayer1 == "scissors" && movePlayer2 == "stone") {
    gameResult = 2;
  }
  if (movePlayer1 == "scissors" && movePlayer2 == "paper") {
    gameResult = 1;
  }
  if (movePlayer1 == movePlayer2) {
    gameResult = 0;
  }
}

function addPlayerScore() {
  if (gameResult === 2) {
    scorePlayer2 += 1;
  } else if (gameResult === 1) {
    scorePlayer1 += 1;
  }
}

function printGameResult() {
  if (gameResult === 2) {
    $winnerTitle.innerHTML = "Jogador 2 Ganhou!";
  } else if (gameResult === 1) {
    $winnerTitle.innerHTML = "Jogador 1 Ganhou!";
  } else if (gameResult === 0) {
    $winnerTitle.innerHTML = "Empate";
  } else if (start == false) {
    return;
  }
  $scorePlayer1.innerHTML = scorePlayer1;
  $scorePlayer2.innerHTML = scorePlayer2;
}

function resetBattleField() {
  $fieldPlayer1.innerHTML = "";
  $fieldPlayer2.innerHTML = "";
  $winnerTitle.innerHTML = "Resultado";
  gameResult = null
  movePlayer1 = "";
  movePlayer2 = "";
}

function movePlayer1Stone() {
  if (start == true) {
    $fieldPlayer1.innerHTML =
      '<img class="move-image" src="./assets/stone.png"/>';
    movePlayer1 = "stone";
    
  verifyGame();
    addPlayerScore();
    printGameResult();
    if (gameResult != null) {
      setTimeout(resetBattleField, 2000);
    }
  }
}

function movePlayer2Stone() {
  if (start == true) {
    $fieldPlayer2.innerHTML =
      '<img class="move-image" src="./assets/stone.png"/>';
    movePlayer2 = "stone";
    
    verifyGame();
    addPlayerScore();
    printGameResult();
    if (gameResult != null) {
      setTimeout(resetBattleField, 2000);
    }
  }
}

$stoneButton.addEventListener("click", movePlayer1Stone);

$stoneButton2.addEventListener("click", movePlayer2Stone);

function movePlayer1Paper() {
  if (start == true) {
    $fieldPlayer1.innerHTML =
      '<img class="move-image" src="./assets/paper.png"/>';
    movePlayer1 = "paper";
    
    verifyGame();
    addPlayerScore();
    printGameResult();
    if (gameResult != null) {
      setTimeout(resetBattleField, 2000);
    }
  }
}

function movePlayer2Paper() {
  if (start == true) {
    $fieldPlayer2.innerHTML =
      '<img class="move-image" src="./assets/paper.png"/>';
    movePlayer2 = "paper";
    
    verifyGame();
    addPlayerScore();
    printGameResult();
    if (gameResult != null) {
      setTimeout(resetBattleField, 2000);
    }
  }
}

$paperButton.addEventListener("click", movePlayer1Paper);

$paperButton2.addEventListener("click", movePlayer2Paper);

function movePlayer1Scissors() {
  if (start == true) {
    $fieldPlayer1.innerHTML =
      '<img class="move-image" src="./assets/scissors.png"/>';
    movePlayer1 = "scissors";
    
    verifyGame();
    addPlayerScore();
    printGameResult();
    if (gameResult != null) {
      setTimeout(resetBattleField, 2000);
    }
  }
}

function movePlayer2Scissors() {
  if (start == true) {
    $fieldPlayer2.innerHTML =
      '<img class="move-image" src="./assets/scissors.png"/>';
    movePlayer2 = "scissors";
    
    verifyGame();
    addPlayerScore();
    printGameResult();
    if (gameResult != null) {
      setTimeout(resetBattleField, 2000);
    }
  }
}

$scissorsButton.addEventListener("click", movePlayer1Scissors);

$scissorsButton2.addEventListener("click", movePlayer2Scissors);
