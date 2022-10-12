import { scrollDown } from "../scrollDown";

describe("Scroll to the given Y Co-ordinate", () => {
  it("should scroll 500px down from top", () => {
    cy.visit("https://docs.cypress.io/api/commands/scrollto");
    cy.wait(1000);
    scrollDown(500);
  });
});
