let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const scoreField = document.querySelector(".score");
const highScoreField = document.querySelector(".highscore");
const guessField = document.querySelector(".guess");
const numberField = document.querySelector(".number");
const messageField = document.querySelector(".message");
const body = document.querySelector("body");

function displayMessage(msg) {
  messageField.textContent = msg;
}

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(guessField.value);

  //Cuando no se introduce nada
  if (!guess) {
    displayMessage("Introduce un número");

    // Cuando se gana
  } else if (guess === secretNumber) {
    displayMessage("Has acertado!");
    numberField.textContent = secretNumber;

    body.style.backgroundColor = "#60b347";
    numberField.style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      highScoreField.textContent = score;
    }
    // Cuando falla
  } else if (score > 1) {
    displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
    score -= 1;
    scoreField.textContent = 0;
  } else {
    displayMessage("You lost the game!");
    scoreField.textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  scoreField.textContent = score;
  numberField.textContent = "?";
  guessField.value = "";

  body.style.backgroundColor = "#222";
  numberField.style.width = "15rem";
});
