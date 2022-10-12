import { visit } from "../visit";

describe("Visit the given URL", () => {
  it("should visit the google homepage.", () => {
    visit("https://www.google.com/");
    cy.title().should("include", "Google");
  });
});
