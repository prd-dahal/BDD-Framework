/// <reference types="Cypress" />

describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit("https://store.sailracing.dk/dk/en");
    cy.get(".icon-search").click();
    cy.get("input").type("jacket");
    cy.get(".form-field > .sc-3c158701-0 > .theme-btn > span").click();
    cy.wait(2000);
    cy.get(".product-col").should("exist");
  });
});
