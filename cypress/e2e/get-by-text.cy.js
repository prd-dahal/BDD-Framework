/// <reference types="Cypress" />

describe("Each iteration", () => {
  it("Validate text", async () => {
    cy.visit("https:store.sailracing.dk");
    cy.wait(500);
    cy.get(".product").as("productLocator");

    cy.get("@productLocator").each(($el, index, $list) => {
      const text = $el.find("h4").text();
      cy.log(text.toLowerCase(), true);
      if (text.toLowerCase().includes("beetroot")) {
        cy.wrap($el.find("button")).click();
      }
    });

    cy.get(".cart").as("cartLocator");
    cy.get("@cartLocator").find("a.cart-icon").click();
    cy.wait(2000);
    cy.get("@cartLocator").find(".cart-preview button").click();
    cy.url().should("eq", "https://store.sailracing.dk");
  });
});
