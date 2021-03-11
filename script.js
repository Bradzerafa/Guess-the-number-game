"use strict";

const randomNumberDisplay = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const checkInput = document.querySelector(".check");
const userScore = document.querySelector(".score");
const messageResponse = document.querySelector(".message");

// Random Number Generated for the player to guess.
const randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber);

//Needs to be refactored to practice DRY/Reusability.
//Checks the users guess against the random number to produce a result.
function checkGuessResult() {
  console.log(guessInput.value);
  const guessedNumber = guessInput.value;
  let usersCurrentScore = userScore.innerHTML;

  if (guessedNumber == randomNumber) {
    messageResponse.innerText = "You Won!";
    randomNumberDisplay.innerText = randomNumber;
  } else if (!guessedNumber) {
    messageResponse.innerText = "Please enter a number";
  } else if (guessedNumber > 20) {
    messageResponse.innerText = "Please guess between 1 and 20";
  } else if (guessedNumber < randomNumber) {
    messageResponse.innerText = "Too Low";
    usersCurrentScore = usersCurrentScore - 1;
    userScore.innerText = usersCurrentScore;
  } else if (guessedNumber > randomNumber) {
    messageResponse.innerText = "Too high";
    usersCurrentScore = usersCurrentScore - 1;
    userScore.innerText = usersCurrentScore;
  }
}

checkInput.addEventListener("click", checkGuessResult);
