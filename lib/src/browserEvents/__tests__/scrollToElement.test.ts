import { scrollToElement } from "../scrollToElement";

describe("Scroll to the given element", () => {
  it("should scroll to the example section of mdn", () => {
    cy.visit(
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"
    );
    scrollToElement("#examples");
  });
});
