describe("Check the game loads", () => {
  it("Visits the games home page", () => {
    cy.visit("http://127.0.0.1:5500/");
  });
});

describe("check the game is ready to play", () => {
  it("checks all the content is ready for a new game", () => {
    cy.visit("http://127.0.0.1:5500/");

    cy.contains("Score: 20");
    cy.contains("?");
    cy.contains("Start guessing...");
  });
});
