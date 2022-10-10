import { goBack } from "../goBack";

describe("Navigate back to the previous URL.", () => {
  it("should search on google and navigate back to the google homepage.", () => {
    cy.visit("https://www.google.com/");
    cy.get(".gLFyf").type("Cypress").type("{Enter}");
    cy.log("Now going back to the homepage.");
    cy.wait(200);
    goBack();
  });
});
