## NOTE:

    - This project is based on a tutorial: https://www.udemy.com/course/the-complete-javascript-course
    - UI provided by the tutorial and functionality developed by me.

## Project Functionality

    - Random number is generated and question mark is changed to the number when it is guessed. [COMPLETE]
    - Check button checks the input number to the Random number.
        - Check that the number input is between 1 - 20. [COMPLETE]
        - If correct then saves the high score and changes UI.
        - If Incorrect deducts 1 point from score. [COMPLETE]
    - Clicking the again button:
        - Hides random number and generates new random number. [COMPLETE]
        - Clears number input box. [COMPLETE]
        - Resets score back to 20. [COMPLETE]
        - Saves high score. [COMPLETE]
        - Change UI back to default look.

    - Write full tests for the game using Cypress.
        - Set up Cypress.
        - Write tests.
        - Check all tests are working and complete.

## Notes:

1. BUG: if guess is the same it saids it's the same but still continues to check if number is lower or higher. (Will be fixed in refactor (Change large if statement to a switch statement))
2. Refactor code to utilise DRY.
3. Extra Feature:
   - Start Screen where users enter a username.
   - Top 3 high scores (With Usernames).
   - Could change the score to a timer based game?

## Proper tests include 3 things:

1. Set up the application state.
2. Take an action.
3. Make an assertion about the resulting application state.

   Actions:

   - Visit a web page.
   - Query for an element.
   - Interact with that element.
   - Assert about the content on the page.
