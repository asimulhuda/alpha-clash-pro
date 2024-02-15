function handelKeyboardButtonPress(event) {
  playerPressed = event.key;

  if (playerPressed === "Escape") {
    gameOver();
  }

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

  if (playerPressed === expectedAlphabet) {
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);

    const newScore = currentScore + 1;
    currentScoreElement.innerText = newScore;

    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    const currentLifeElement = document.getElementById("current-life");
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);

    const newLife = currentLife - 1;
    currentLifeElement.innerText = newLife;

    if (newLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handelKeyboardButtonPress);

function continueGame() {
  const alphabet = getARandomAlphabet();

  currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet.toUpperCase();

  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");

  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);

  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");

  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("last-score", lastScore);

  const currentAlphabet = getTextElementById("current-alphabet");
  removeBackgroundColorById(currentAlphabet);
}
