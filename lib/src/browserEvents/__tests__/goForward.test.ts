import { goBack } from "../goBack";
import { goForward } from "../goForward";

describe("Navigate forward to the next URL from back URL.", () => {
  it("should search on google and navigate back to the google homepage and again go to the search page.", () => {
    cy.visit("https://www.google.com/");
    cy.get(".gLFyf").type("Cypress").type("{Enter}");
    cy.log("Now going back to the homepage.");
    goBack();
    cy.log("Again going forward to search page.");
    goForward();
  });
});
