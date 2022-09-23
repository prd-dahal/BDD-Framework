import { findByName } from "../findByName";
describe("Find the element by attribute", () => {
  it("should find the elemnt by provided attribute", () => {
    cy.visit("https://en.wikipedia.org/wiki/Main_Page");
    findByName("input", "search");
  });
});
