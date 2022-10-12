describe("Get the page title", () => {
  it("should get the title of google homepage", () => {
    cy.visit("https://www.google.com/");
    cy.title().should("eq", "Google");
  });
});
