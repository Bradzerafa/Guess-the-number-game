"use strict";

const randomNumberDisplay = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const checkInput = document.querySelector(".check");
const userScore = document.querySelector(".score");
const messageResponse = document.querySelector(".message");
const restartGame = document.querySelector(".again");
const highScore = document.querySelector(".highscore");
let prevGuess;

// Random Number Generated for the player to guess.
const randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber);

function resetStats() {
  console.log("Hi lets reset");
  messageResponse.innerText = "Start guessing...";
  randomNumberDisplay.innerText = "?";
  userScore.innerText = 20;
  guessInput.value = "";
}

//Needs to be refactored to practice DRY/Reusability.
//Checks the users guess against the random number to produce a result.
function checkGuessResult() {
  console.log(guessInput.value);
  const guessedNumber = guessInput.value;
  let gameHighScore = highScore.innerText;
  let usersCurrentScore = userScore.innerHTML;

  // if guess is the same tell them.
  if (prevGuess == guessedNumber) {
    messageResponse.innerText = "Please guess a new number";
    console.log("guess a different number");
  }

  if (guessedNumber == randomNumber) {
    messageResponse.innerText = "You Won!";
    randomNumberDisplay.innerText = randomNumber;
    if (usersCurrentScore > gameHighScore) {
      console.log("New high score");
      highScore.innerText = usersCurrentScore;
    }
  } else if (!guessedNumber) {
    messageResponse.innerText = "Please enter a number";
  } else if (guessedNumber > 20) {
    messageResponse.innerText = "Please guess between 1 and 20";
  }

  if (guessedNumber < randomNumber) {
    messageResponse.innerText = "Too Low";
    usersCurrentScore = usersCurrentScore - 1;
    userScore.innerText = usersCurrentScore;
    prevGuess = guessedNumber;
    console.log(prevGuess);
  } else if (guessedNumber > randomNumber) {
    messageResponse.innerText = "Too high";
    usersCurrentScore = usersCurrentScore - 1;
    userScore.innerText = usersCurrentScore;
    prevGuess = guessedNumber;
    console.log(prevGuess);
  }
}

restartGame.addEventListener("click", resetStats);
checkInput.addEventListener("click", checkGuessResult);
