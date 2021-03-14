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

//Creates click events.
function clickEvent(dataPoint, func) {
  dataPoint.addEventListener("click", func);
}

function resetStats() {
  console.log("Hi lets reset");
  messageResponse.innerText = "Start guessing...";
  randomNumberDisplay.innerText = "?";
  userScore.innerText = 20;
  guessInput.value = "";
}

//Checks the users guess against the random number to produce a result.
function checkGuessResult() {
  const guessedNumber = guessInput.value;
  let gameHighScore = highScore.innerText;
  let usersCurrentScore = userScore.innerHTML;

  function innerText(anchor, data) {
    anchor.innerText = data;
  }

  function lowHigh(lowHigh) {
    innerText(messageResponse, lowHigh);
    usersCurrentScore = usersCurrentScore - 1;
    innerText(userScore, usersCurrentScore);
    prevGuess = guessedNumber;
  }

  //If user guesses the same number.
  if (prevGuess == guessedNumber) {
    innerText(messageResponse, "Please guess a new number");
  }

  //Checks to see if the user won.
  if (randomNumber == guessedNumber) {
    innerText(messageResponse, "You Won!");
    innerText(randomNumberDisplay, randomNumber);
    if (usersCurrentScore > gameHighScore) {
      innerText(highScore, usersCurrentScore);
    }
  }

  // Checks to see if the user entered a number.
  if (!guessedNumber) innerText(messageResponse, "Please enter a number");

  //Checks to see if the entered number is between 1 and 20.
  if (guessedNumber > 20) {
    innerText(messageResponse, "Please guess between 1 and 20");
  }

  //Checks if the guess is too low or high
  if (guessedNumber < randomNumber) lowHigh("Too low");
  if (guessedNumber > randomNumber) lowHigh("Too high");
}

clickEvent(restartGame, resetStats);
clickEvent(checkInput, checkGuessResult);
