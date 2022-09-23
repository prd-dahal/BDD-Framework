//TODO: make a customCommand to override the default find command or no need to override
describe("Find the descendent DOM element ", () => {
  it("should", () => {
    cy.visit("www.google.com");

    // findById("gb").find("a");
    cy.get(".gLFyf").type("help").triggerEnter();
    // cy.get("#cnt").trigger("ctrl");
    // cy.trigger()
  });
});
