let tries = 1;
let resetBtn;

function randIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randInt = randIntBetween(1, 10);
console.log(randInt);

const chanceLeft = document.querySelector("h3 span");
const guess = document.querySelector(".number_input");
const submitBtn = document.querySelector(".guess_submit");
const guessComment = document.querySelector(".guess_comment");
const lowOrHi = document.querySelector(".lowOrHi");

// chanceLeft.innerHTML = "4";

// submit action
submitBtn.addEventListener("click", checkGuess);

// check guesses
function checkGuess() {
  const userGuess = parseInt(guess.value);

  if (userGuess === randInt) {
    guessComment.textContent = "You Guessed Wisely!!! Want to play again?";
    lowOrHi.textContent = "";
    gameOver();
  } else if (tries === 3) {
    guessComment.textContent = "Game Over!! Want to play again?";
    lowOrHi.textContent = "";
    gameOver();
  } else if (tries === 3 && userGuess === randInt) {
    guessComment.textContent = "You Guessed Wisely!!! Want to play again?";
    lowOrHi.textContent = "";
    gameOver();
  } else {
    guessComment.textContent = "You Guessed Poorly!";
    if (userGuess < randInt) {
      lowOrHi.textContent = "You guessed too low!";
    } else if (userGuess > randInt) {
      lowOrHi.textContent = "You guessed too high!";
    }
  }
  chanceLeft.innerHTML = ` ${3 - tries}`;
  tries = tries + 1;

  guess.value = "";
  guess.focus();
}

// game over function
function gameOver() {
  guess.disabled = true;
  submitBtn.disabled = true;
  resetBtn = document.createElement("button");
  resetBtn.textContent = "Reset";
  document.body.append(resetBtn);
  resetBtn.addEventListener("click", resetGame);
}

// reset game
function resetGame() {
  tries = 1;

  chanceLeft.innerHTML = `${3}`;

  const results = document.querySelectorAll(".result_paras p");
  for (const result of results) {
    result.textContent = "";
  }

  resetBtn.parentNode.removeChild(resetBtn);

  guess.disabled = false;
  submitBtn.disabled = false;
  guess.value = "";
  guess.focus();

  randInt = randIntBetween(1, 10);
  console.log(randInt);
}
