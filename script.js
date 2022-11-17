let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const scoreField = document.querySelector('.score');
const highScoreField = document.querySelector('.highscore');
const guessField = document.querySelector('.guess');
const numberField = document.querySelector('.number');
const messageField = document.querySelector('.message');
console.log(`El campo score tiene el valor ${scoreField}`);

function displayMessage(msg) {
  messageField.textContent = msg;
}

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(guessField.value);
  if (!guess) {
    displayMessage('Introduce un número');
  } else if (guess === secretNumber) {
    displayMessage('Has acertado!');
    if (score > highScore) {
      highScore = score;
      highScoreField.textContent = score;
    }
    // TODO: visualizar el número, cambiar estilos
    // propiedad style y notación estilos con camelCase
    // ej. background-color -> backgroundColor
    numberField.textContent = guess;
  } else if (score > 1) {
    displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    score -= 1;
    scoreField.textContent = 0;
  } else {
    displayMessage('You lost the game!');
    scoreField.textContent = 0;
  }
});

// TODO:
// - Funcionalidad botón "Again!" -> Event listener...
document.querySelector('.again').addEventListener('click', () => {
  highScoreField.textContent = 0;
  guessField.value = '';
  numberField.textContent = '?';
  scoreField.textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
});
