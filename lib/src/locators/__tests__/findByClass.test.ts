import { findByClass } from "../findByClass";
describe("Find the element by attribute", () => {
  it("should find the elemnt by provided attribute", () => {
    cy.visit("www.google.com");
    findByClass("lnXdpd");
  });
});
