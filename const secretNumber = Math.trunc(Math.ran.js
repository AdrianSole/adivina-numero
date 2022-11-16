const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

const score = 20;
const highscore = 0;

const scoreField = document.querySelector('.score');
const highScoreField = document.querySelector('.highScore');
const numberField = document.querySelector('.guess');

console.log(`El campo score tiene el valor ${scoreField}`);

