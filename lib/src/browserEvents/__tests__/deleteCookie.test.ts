import { deleteCookie } from "../deleteCookie";
import { setCookie } from "../setCookie";

describe("Delete the given cookie", () => {
  before(() => {
    cy.visit("https://berkeley.hbgdesignlab.dev/sw/en");
    setCookie("test", "something");
  });

  it("should delete the cookie from document", () => {
    cy.wait(2000);
    deleteCookie("test");
  });
});
