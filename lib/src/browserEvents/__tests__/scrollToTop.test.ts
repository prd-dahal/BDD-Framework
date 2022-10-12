import { scrollToTop } from "../scrollToTop";

describe("Scroll to top", () => {
  it("should scroll to top of this site.", () => {
    cy.visit("https://docs.cypress.io/api/commands/scrollto#Command-Log");
    scrollToTop();
  });
});
