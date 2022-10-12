import { findById } from "../findById";

describe("Get the element by id.", () => {
  before(() => {
    cy.visit("https://www.google.com/");
  });

  it("should get the element by id", () => {
    findById("gb");
  });
});
