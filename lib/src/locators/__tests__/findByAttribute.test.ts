import { findByAttribute } from "../findByAttribute";
describe("Find the element by attribute", () => {
  it("should find the elemnt by provided attribute", () => {
    cy.visit("https://www.w3schools.com/");
    findByAttribute("data-name", "w3_cert_badge");
  });
});
